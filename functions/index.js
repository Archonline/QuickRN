"use strict";

const { initializeApp } = require("firebase-admin/app");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const { defineSecret, defineString } = require("firebase-functions/params");
const OpenAI = require("openai");

initializeApp();
const db = getFirestore();
const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");
const OPENAI_MODEL = defineString("OPENAI_MODEL", { default: "gpt-5-mini" });

const MAX_INPUT_CHARS = 12000;
const DAILY_LIMIT = 35;
const MINUTE_LIMIT = 8;
const TASKS = new Set(["tutor", "summarize", "flashcards", "quiz", "rationale", "study-plan"]);

const BASE_INSTRUCTIONS = [
  "You are QuickRN AI, an educational assistant for people preparing for the NCLEX-RN.",
  "Teach nursing concepts accurately, clearly, and with clinical reasoning. Use current standard nursing education principles.",
  "Distinguish established facts from uncertainty. Never fabricate citations, clinical guidelines, laboratory ranges, or medication doses.",
  "This is educational support, not patient-specific medical advice. Do not diagnose a real person or direct treatment of a real patient.",
  "When a question concerns an actual patient, advise the learner to follow their supervising clinician, institutional policy, and current authoritative references.",
  "For NCLEX-style explanations, prioritize safety, ABCs when applicable, acute versus chronic, unstable versus stable, and least restrictive/least invasive interventions where appropriate.",
  "Use concise headings and structured explanations. Do not claim that AI output has been reviewed or endorsed by NCSBN, NCLEX, or a nursing regulator."
].join(" ");

function cleanText(value, max = MAX_INPUT_CHARS) {
  if (typeof value !== "string") return "";
  return value.replace(/\u0000/g, "").trim().slice(0, max);
}

function taskPrompt(task, prompt, context) {
  const contextBlock = context ? "\n\nSTUDENT MATERIAL / CONTEXT:\n" + context : "";
  const taskInstructions = {
    tutor: "Answer the learner's question. Explain the underlying nursing concept, clinical reasoning, priority cues, and a short NCLEX takeaway. Ask a brief clarifying question only if essential.",
    summarize: "Create a well-organized study summary from the supplied notes. Preserve clinically important details, organize by concept, assessment cues, interventions, medications, complications, and NCLEX priorities when relevant. Flag ambiguity rather than inventing missing facts.",
    flashcards: "Turn the supplied material into 8 to 12 high-quality active-recall flashcards. Format as numbered Question / Answer pairs. Keep each card focused and clinically accurate.",
    quiz: "Create 5 NCLEX-style practice questions from the supplied material. Include answer choices, the correct answer, a concise rationale, and why the strongest distractor is incorrect. Clearly label these as AI-generated practice items.",
    rationale: "Explain the provided question and answer choices. Identify the best answer, analyze each distractor, and explain the clinical judgment or priority principle. Do not change the keyed answer unless the learner asks you to critique it.",
    "study-plan": "Build a practical 7-day remediation plan from the learner's performance or weak topics. Include daily goals, active-recall tasks, practice focus, and measurable completion criteria. Do not infer performance data that was not supplied."
  };
  return taskInstructions[task] + "\n\nLEARNER REQUEST:\n" + prompt + contextBlock;
}

exports.quickrnAI = onCall(
  {
    region: "us-central1",
    secrets: [OPENAI_API_KEY],
    timeoutSeconds: 90,
    memory: "512MiB",
    enforceAppCheck: false
  },
  async (request) => {
    if (!request.auth || !request.auth.uid) {
      throw new HttpsError("unauthenticated", "Please sign in to use QuickRN AI.");
    }

    const data = request.data || {};
    const task = cleanText(data.task, 40);
    const prompt = cleanText(data.prompt);
    const context = cleanText(data.context, MAX_INPUT_CHARS);
    if (!TASKS.has(task)) throw new HttpsError("invalid-argument", "Unsupported AI task.");
    if (!prompt && !context) throw new HttpsError("invalid-argument", "Enter a question or provide study material.");
    if (prompt.length + context.length > MAX_INPUT_CHARS) {
      throw new HttpsError("invalid-argument", "Please shorten the submitted material to 12,000 characters.");
    }

    const uid = request.auth.uid;
    const now = Date.now();
    const day = new Date(now).toISOString().slice(0, 10);
    const usageRef = db.collection("quickrn_ai_usage").doc(uid);
    try {
      await db.runTransaction(async (tx) => {
        const snap = await tx.get(usageRef);
        const old = snap.exists ? snap.data() : {};
        const sameDay = old.day === day;
        const minuteWindow = Number(old.minuteWindow || 0);
        const currentWindow = Math.floor(now / 60000);
        const minuteCount = minuteWindow === currentWindow ? Number(old.minuteCount || 0) : 0;
        const dailyCount = sameDay ? Number(old.dailyCount || 0) : 0;
        if (dailyCount >= DAILY_LIMIT) throw new HttpsError("resource-exhausted", "Daily QuickRN AI limit reached. Please try again tomorrow.");
        if (minuteCount >= MINUTE_LIMIT) throw new HttpsError("resource-exhausted", "Please wait a minute before sending more AI requests.");
        tx.set(usageRef, {
          day,
          dailyCount: dailyCount + 1,
          minuteWindow: currentWindow,
          minuteCount: minuteCount + 1,
          updatedAt: FieldValue.serverTimestamp()
        }, { merge: true });
      });
    } catch (error) {
      if (error instanceof HttpsError) throw error;
      console.error("QuickRN AI usage check failed", error);
      throw new HttpsError("failed-precondition", "AI usage controls are temporarily unavailable. Please try again later.");
    }

    try {
      const client = new OpenAI({ apiKey: OPENAI_API_KEY.value() });
      const response = await client.responses.create({
        model: OPENAI_MODEL.value(),
        instructions: BASE_INSTRUCTIONS,
        input: taskPrompt(task, prompt, context),
        max_output_tokens: 1600,
        store: false
      });
      const output = cleanText(response.output_text || "", 16000);
      if (!output) throw new Error("The AI provider returned an empty response.");
      return { text: output, task, model: OPENAI_MODEL.value() };
    } catch (error) {
      console.error("QuickRN AI provider error", { name: error && error.name, status: error && error.status });
      throw new HttpsError("unavailable", "QuickRN AI could not complete that request. Please try again shortly.");
    }
  }
);
