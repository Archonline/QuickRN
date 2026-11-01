import { pipeline, env } from "https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1";

const MODEL_ID = "onnx-community/Qwen2.5-0.5B-Instruct";
const $ = (id) => document.getElementById(id);
const promptEl = $("quickrn-ai-prompt");
const outputEl = $("quickrn-ai-output");
const statusEl = $("quickrn-ai-status");
const modelStatus = $("quickrn-ai-model-status");
const progressEl = $("quickrn-ai-progress");
const loadButton = $("quickrn-ai-load");
const taskButtons = Array.from(document.querySelectorAll("[data-ai-task]"));

let generator = null;
let loadingPromise = null;
let busy = false;
let useWebGPU = Boolean(navigator.gpu);
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
    button.disabled = busy || !generator;
    button.classList.toggle("opacity-50", busy || !generator);
    button.classList.toggle("cursor-not-allowed", busy || !generator);
  });
  if (loadButton) loadButton.disabled = busy || Boolean(generator);
}

function showOutput(text) {
  outputEl.classList.remove("hidden");
  outputEl.textContent = text;
}

async function loadModel() {
  if (generator) return generator;
  if (loadingPromise) return loadingPromise;

  loadingPromise = (async () => {
    loadButton.disabled = true;
    modelStatus.textContent = "Preparing local AI runtime…";
    statusEl.textContent = "The model downloads from the public Hugging Face model repository. This may take several minutes on the first visit.";
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

    setProgress(100);
    modelStatus.textContent = "Ready · " + (useWebGPU ? "GPU accelerated" : "CPU mode") + " · cached on this device";
    statusEl.textContent = "Free AI is ready. Your prompts are processed locally in this browser; only model files were downloaded.";
    setBusy(false);
    return generator;
  })();

  try {
    return await loadingPromise;
  } catch (error) {
    console.error("QuickRN local AI load error", error);
    modelStatus.textContent = "Could not load model";
    statusEl.textContent = "Model download or initialization failed. Check your internet connection, browser storage, and available memory, then retry. " + (error && error.message ? error.message.slice(0, 180) : "");
    loadButton.disabled = false;
    throw error;
  } finally {
    loadingPromise = null;
  }
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

function buildMessages(task, prompt, context) {
  const system = taskInstructions(task) + " Never claim to be an official NCLEX/NCSBN source. Never fabricate references, medication doses, or clinical guidelines. For real patient situations, direct the learner to a qualified clinician and current institutional protocols. Do not request or process identifiable patient information.";
  const userContent = [prompt, context ? "\n\nStudy notes / context:\n" + context : ""].filter(Boolean).join("\n");
  return [
    { role: "system", content: system },
    ...conversation.slice(-6),
    { role: "user", content: userContent }
  ];
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

  try {
    await loadModel();
    setBusy(true);
    showOutput("QuickRN local AI is thinking…");
    statusEl.textContent = "Generating on this device. Response speed depends on your computer's hardware.";
    const messages = buildMessages(task, prompt, context);
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
    conversation.push({ role: "user", content: [prompt, context].filter(Boolean).join("\n\n") });
    conversation.push({ role: "assistant", content: answer });
    conversation = conversation.slice(-8);
    showOutput(answer);
    statusEl.textContent = "Generated locally on your device. Check clinical details against current authoritative nursing references.";
  } catch (error) {
    console.error("QuickRN local AI generation error", error);
    showOutput("QuickRN AI could not generate a response. Try a shorter prompt or reload the model.");
    statusEl.textContent = error && error.message ? error.message.slice(0, 240) : "Local generation failed.";
  } finally {
    setBusy(false);
  }
}

if (loadButton) loadButton.addEventListener("click", () => loadModel().catch(() => {}));
taskButtons.forEach((button) => {
  button.disabled = true;
  button.addEventListener("click", () => runTask(button.dataset.aiTask));
});
if (!navigator.gpu) {
  modelStatus.textContent = "WebGPU not detected · will try CPU mode";
}
setBusy(false);
