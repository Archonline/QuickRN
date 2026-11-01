import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1";

const MODEL_ID = "onnx-community/Qwen2.5-0.5B-Instruct";
const GEMINI_MODEL = "gemini-2.5-flash-lite";
const $ = (id) => document.getElementById(id);
const promptEl = $("quickrn-ai-prompt");
const outputEl = $("quickrn-ai-output");
const statusEl = $("quickrn-ai-status");
const modelStatus = $("quickrn-ai-model-status");
const progressEl = $("quickrn-ai-progress");
const loadButton = $("quickrn-ai-load");
const geminiKeyInput = $("quickrn-gemini-key");
const geminiEnableButton = $("quickrn-gemini-enable");
const geminiStatus = $("quickrn-gemini-status");
const taskButtons = Array.from(document.querySelectorAll("[data-ai-task]"));

let generator = null;
let loadingPromise = null;
let busy = false;
let useWebGPU = Boolean(navigator.gpu);
let localModelFailed = false;
let geminiApiKey = "";
let conversation = [];

env.allowLocalModels = false;
env.allowRemoteModels = true;
env.useBrowserCache = true;

function setProgress(value) {
  if (!progressEl) return;
  const pct = Math.max(0, Math.min(100, Number(value) || 0));
  progressEl.style.width = pct + "%";
}

function setBusy(value) {
  busy = value;
  taskButtons.forEach((button) => {
    button.disabled = busy || (!generator && !geminiApiKey);
    button.classList.toggle("opacity-50", button.disabled);
    button.classList.toggle("cursor-not-allowed", button.disabled);
  });
  if (loadButton) loadButton.disabled = busy || Boolean(generator);
  if (geminiEnableButton) geminiEnableButton.disabled = busy;
}

function showOutput(text) {
  outputEl.classList.remove("hidden");
  outputEl.textContent = text;
}

function taskInstructions(task) {
  const prompts = {
    tutor: "You are QuickRN, a supportive NCLEX-RN nursing tutor. Explain concepts accurately and simply. Discuss pathophysiology, assessment cues, priority nursing interventions, and a short NCLEX takeaway. Distinguish uncertainty. This is education, not patient-specific medical advice.",
    summarize: "Create a structured nursing study summary from the learner's material. Organize important concepts, assessment cues, interventions, medications, complications, and NCLEX priorities. Do not invent missing details.",
    flashcards: "Create 8 concise active-recall nursing flashcards from the learner's material. Number them and use Question and Answer labels. Focus on high-yield facts and clinical reasoning.",
    quiz: "Create 5 original NCLEX-style practice questions from the learner's material. Include plausible answer choices, correct answer, concise rationale, and why distractors are less appropriate. Label them AI-generated practice questions.",
    rationale: "Explain the nursing question and answer choices. Identify the best answer, analyze each distractor, and explain the clinical judgment principle. Do not silently change an established answer key.",
    "study-plan": "Create a realistic 7-day NCLEX remediation plan from the supplied topics and performance details. Include daily objectives, active recall, practice tasks, and measurable completion criteria. Do not invent performance data."
  };
  return prompts[task] || prompts.tutor;
}

function getCurrentNotes() {
  const notes = $("topic-notes");
  return notes && notes.value ? notes.value.trim() : "";
}

function buildInput(task, prompt, context) {
  const system = taskInstructions(task) + " Never claim to be an official NCLEX/NCSBN source. Never fabricate references, medication doses, or clinical guidelines. For real patient situations, direct the learner to a qualified clinician and current institutional protocols. Do not request or process identifiable patient information.";
  const userContent = [prompt, context ? "\n\nStudy notes / context:\n" + context : ""].filter(Boolean).join("\n");
  return { system, userContent };
}

async function loadModel() {
  if (generator) return generator;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    loadButton.disabled = true;
    modelStatus.textContent = "Preparing local AI runtime…";
    statusEl.textContent = "Downloading the open model from Hugging Face. The first download is several hundred MB and may take several minutes.";
    setProgress(2);

    const options = {
      dtype: useWebGPU ? "q4f16" : "q4",
      device: useWebGPU ? "webgpu" : "wasm",
      progress_callback: (event) => {
        if (event && event.status === "progress" && Number.isFinite(event.progress)) {
          setProgress(event.progress);
          modelStatus.textContent = "Downloading model files… " + Math.round(event.progress) + "%";
        } else if (event && event.status === "initiate") {
          modelStatus.textContent = "Downloading " + (event.file || "model files") + "…";
        } else if (event && event.status === "done") {
          modelStatus.textContent = "Model file ready";
        } else if (event && event.status === "ready") {
          modelStatus.textContent = "Initializing local model…";
        }
      }
    };

    try {
      generator = await pipeline("text-generation", MODEL_ID, options);
    } catch (error) {
      if (!useWebGPU) throw error;
      modelStatus.textContent = "GPU initialization failed. Trying CPU mode…";
      useWebGPU = false;
      generator = await pipeline("text-generation", MODEL_ID, {
        ...options,
        device: "wasm",
        dtype: "q4"
      });
    }

    localModelFailed = false;
    setProgress(100);
    modelStatus.textContent = "Ready · " + (useWebGPU ? "GPU accelerated" : "CPU mode") + " · cached on this device";
    statusEl.textContent = "Free AI is ready. Prompts are processed locally in this browser.";
    setBusy(false);
    return generator;
  })();

  try {
    return await loadingPromise;
  } catch (error) {
    localModelFailed = true;
    console.error("QuickRN local AI load error", error);
    modelStatus.textContent = "Local model could not load";
    statusEl.textContent = "The on-device model failed to initialize. " + (geminiApiKey ? "The optional Gemini fallback is available." : "Enable the optional Gemini fallback below, or retry on a device with more memory/storage.") + " " + (error && error.message ? error.message.slice(0, 140) : "");
    loadButton.disabled = false;
    throw error;
  } finally {
    loadingPromise = null;
  }
}

async function runLocal(messages, task) {
  const result = await generator(messages, {
    max_new_tokens: task === "quiz" || task === "summarize" ? 600 : 450,
    do_sample: true,
    temperature: 0.65,
    top_p: 0.9,
    repetition_penalty: 1.08
  });
  const generated = result && result[0] && result[0].generated_text;
  let answer = "";
  if (typeof generated === "string") answer = generated;
  else if (Array.isArray(generated)) {
    const last = generated[generated.length - 1];
    answer = last && last.content ? last.content : "";
  }
  answer = String(answer || "").trim();
  if (!answer) throw new Error("The local model returned an empty response.");
  return answer;
}

async function runGemini(input, task) {
  if (!geminiApiKey) throw new Error("No Gemini API key has been provided.");
  const contents = [
    ...conversation.slice(-6).map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }]
    })),
    { role: "user", parts: [{ text: input.userContent }] }
  ];
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/" + GEMINI_MODEL + ":generateContent", {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": geminiApiKey },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: input.system }] },
      contents,
      generationConfig: {
        temperature: 0.55,
        maxOutputTokens: task === "quiz" || task === "summarize" ? 900 : 650
      }
    })
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = payload && payload.error && payload.error.message;
    throw new Error(message || "Gemini request failed (" + response.status + "). Check the key and free-tier quota.");
  }
  const answer = (payload.candidates?.[0]?.content?.parts || [])
    .map((part) => part.text || "")
    .join("\n")
    .trim();
  if (!answer) throw new Error("Gemini returned an empty response.");
  return answer;
}

async function runTask(task) {
  if (busy) return;
  const prompt = promptEl.value.trim();
  const notes = getCurrentNotes();
  const context = ["summarize", "flashcards", "quiz", "study-plan"].includes(task)
    ? [notes, prompt].filter(Boolean).join("\n\n")
    : notes;

  if (!prompt && !context) {
    statusEl.textContent = "Enter a question or select a topic and add notes first.";
    promptEl.focus();
    return;
  }

  const input = buildInput(task, prompt, context);
  try {
    setBusy(true);
    showOutput("QuickRN AI is preparing your response…");
    let answer = "";
    let provider = "on-device";

    if (!generator && !localModelFailed) {
      try {
        await loadModel();
      } catch (error) {
        if (!geminiApiKey) throw error;
      }
    }

    setBusy(true);
    if (generator) {
      try {
        statusEl.textContent = "Generating locally on this device…";
        const messages = [
          { role: "system", content: input.system },
          ...conversation.slice(-6),
          { role: "user", content: input.userContent }
        ];
        answer = await runLocal(messages, task);
      } catch (localError) {
        console.warn("Local generation failed; checking optional Gemini fallback.", localError);
        if (!geminiApiKey) throw localError;
        provider = "Gemini free-tier fallback";
        statusEl.textContent = "Local generation failed. Trying your optional Gemini fallback…";
        answer = await runGemini(input, task);
      }
    } else {
      if (!geminiApiKey) throw new Error("No AI model is available. Load the local model or enable Gemini fallback.");
      provider = "Gemini free-tier fallback";
      statusEl.textContent = "Using your optional Gemini fallback…";
      answer = await runGemini(input, task);
    }

    conversation.push({ role: "user", content: input.userContent });
    conversation.push({ role: "assistant", content: answer });
    conversation = conversation.slice(-8);
    showOutput(answer);
    statusEl.textContent = provider === "on-device"
      ? "Generated locally on your device. Verify clinical details with current authoritative nursing references."
      : "Generated using Gemini. Your prompt and notes were sent to Google. Free-tier quotas and data handling are governed by Google.";
  } catch (error) {
    console.error("QuickRN AI generation error", error);
    showOutput("QuickRN AI could not generate a response. Check the model status or Gemini key/quota, then try again.");
    statusEl.textContent = error && error.message ? error.message.slice(0, 240) : "AI generation failed.";
  } finally {
    setBusy(false);
  }
}

if (loadButton) loadButton.addEventListener("click", () => loadModel().catch(() => {}));
if (geminiEnableButton) {
  geminiEnableButton.addEventListener("click", () => {
    geminiApiKey = geminiKeyInput.value.trim();
    if (!geminiApiKey) {
      geminiStatus.textContent = "Paste your own Gemini API key first.";
      return;
    }
    geminiKeyInput.value = "";
    geminiStatus.textContent = "Gemini fallback enabled for this page session only. Your key is not saved.";
    setBusy(false);
  });
}
taskButtons.forEach((button) => {
  button.disabled = true;
  button.addEventListener("click", () => runTask(button.dataset.aiTask));
});
if (!navigator.gpu) modelStatus.textContent = "WebGPU not detected · will try CPU mode";
setBusy(false);
