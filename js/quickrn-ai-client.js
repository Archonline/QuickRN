import { initializeApp, getApps } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFunctions, httpsCallable } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-functions.js";

const firebaseConfig = {
  apiKey: "AIzaSyAP4zFj2e_M4h70eLZ0340SNKD6VgLDvsw",
  authDomain: "quickrnapp.firebaseapp.com",
  projectId: "quickrnapp",
  storageBucket: "quickrnapp.firebasestorage.app",
  messagingSenderId: "222653066147",
  appId: "1:222653066147:web:e82e89710bd4c4b6eb4816",
  measurementId: "G-9ZMV285XC0"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);
const auth = getAuth(app);
const functions = getFunctions(app, "us-central1");
const callQuickRN = httpsCallable(functions, "quickrnAI", { timeout: 90000 });

const $ = (id) => document.getElementById(id);
const promptEl = $("quickrn-ai-prompt");
const outputEl = $("quickrn-ai-output");
const statusEl = $("quickrn-ai-status");
const authEl = $("quickrn-ai-auth-status");
const buttons = Array.from(document.querySelectorAll("[data-ai-task]"));
let signedIn = false;

function setBusy(busy) {
  buttons.forEach((button) => {
    button.disabled = busy || !signedIn;
    button.classList.toggle("opacity-50", busy || !signedIn);
    button.classList.toggle("cursor-not-allowed", busy || !signedIn);
  });
}

onAuthStateChanged(auth, (user) => {
  signedIn = Boolean(user);
  authEl.textContent = signedIn ? "Signed in · AI available" : "Sign in required";
  authEl.style.background = signedIn ? "#e8f4ed" : "#fff3df";
  authEl.style.color = signedIn ? "#1B5E43" : "#8a5a12";
  setBusy(false);
  if (!signedIn) statusEl.textContent = "Please sign in through QuickRN before using AI. Your prompt is not sent until you select an AI action.";
  else statusEl.textContent = "Connected to QuickRN's authenticated AI service. Do not enter identifiable patient information.";
});

function getCurrentNotes() {
  const notes = $("topic-notes");
  return notes && notes.value ? notes.value.trim() : "";
}

function friendlyError(error) {
  const code = error && error.code ? String(error.code) : "";
  if (code.includes("unauthenticated")) return "Your session has expired. Sign in again, then retry.";
  if (code.includes("resource-exhausted")) return error.message || "You've reached the current AI usage limit.";
  if (code.includes("failed-precondition")) return "AI service setup is incomplete. The administrator must finish the Firebase backend setup.";
  if (code.includes("unavailable") || code.includes("deadline-exceeded")) return "The AI service is temporarily unavailable. Please try again shortly.";
  return error && error.message ? error.message : "Something went wrong. Please try again.";
}

async function runTask(task) {
  if (!signedIn) {
    statusEl.textContent = "Sign in to QuickRN before using the AI tutor.";
    return;
  }
  const prompt = promptEl.value.trim();
  const notes = getCurrentNotes();
  const context = task === "summarize" || task === "flashcards" || task === "quiz" || task === "study-plan"
    ? [notes, prompt].filter(Boolean).join("\n\nAdditional request: ")
    : notes;
  if (!prompt && !context) {
    statusEl.textContent = "Enter a question or select a topic and add notes first.";
    promptEl.focus();
    return;
  }

  setBusy(true);
  outputEl.classList.remove("hidden");
  outputEl.textContent = "QuickRN AI is preparing your response…";
  statusEl.textContent = "Sending your request securely. Please wait.";
  try {
    const result = await callQuickRN({ task, prompt, context });
    const text = result && result.data && result.data.text;
    if (!text) throw new Error("The AI service returned an empty response.");
    outputEl.textContent = text;
    statusEl.textContent = "AI response generated. Review clinical details against current authoritative nursing references.";
  } catch (error) {
    outputEl.textContent = "Unable to generate a response.";
    statusEl.textContent = friendlyError(error);
  } finally {
    setBusy(false);
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => runTask(button.dataset.aiTask));
});
setBusy(true);
