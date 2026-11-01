# QuickRN free on-device AI setup

## Cost

The primary integration uses a free open-weight model running locally in each student's browser. It does not call OpenAI or require an API key, paid inference service, Firebase Cloud Functions, or Firebase Blaze upgrade. An optional Gemini fallback is available only when a student supplies their own Google AI Studio API key; it is not required for the local model.

The app uses:
- Transformers.js v3.8.1 from jsDelivr.
- onnx-community/Qwen2.5-0.5B-Instruct, using 4-bit quantization.
- WebGPU when supported, with ONNX Runtime WebAssembly/CPU fallback.
- Browser model caching for repeat visits.

## How students use it

1. Open Learning Center.
2. Select **Load free AI model**.
3. Wait for the first model download. It is approximately 480 MB with WebGPU q4f16, or up to about 786 MB for the CPU q4 fallback. Actual transfer can vary with caching and model file selection.
4. Ask the AI Tutor, summarize notes, generate flashcards, draft practice questions, or create a study plan.
5. On later visits the browser can reuse its cached model files.

The first download requires internet access. Model inference is local after the files are loaded. Students need a modern browser and enough free memory/storage. WebGPU is recommended; CPU fallback may be slow on low-powered devices.

## Optional Gemini fallback

If the local model cannot load or generate a response, a student may optionally supply their own Gemini API key in the Learning Center. The app uses Google's `gemini-2.5-flash-lite` Developer API model as a fallback. Google currently lists a free tier for this model, but quotas, availability, regional eligibility, and terms can change. The student creates the key in [Google AI Studio](https://aistudio.google.com/app/apikey); QuickRN does not provide or share a project key.

**Google sign-in is not a Gemini API credential.** Firebase Google authentication identifies the student to QuickRN; it does not grant Gemini Developer API access. The student must separately create and enter a Gemini API key. The key is kept in JavaScript memory for the current page session only: it is not written to localStorage or sent to QuickRN servers. The browser sends the prompt and any included study notes directly to Google's Gemini API when fallback is used. Google's free-tier data handling and privacy terms apply. Do not submit identifiable patient information. Free-tier quotas can be exhausted; the app does not enable billing or upgrade a project.

For the primary local model, there is no API key to create, no Firebase project upgrade, and no cloud function to deploy. Normal website hosting and bandwidth limits still apply to the static app and model downloads; this is not a promise that hosting or internet access is free.

## Privacy and safety

- With the local model, prompts and generated responses are processed in the browser and are not sent to an AI inference API.
- If the student explicitly enables Gemini fallback, the prompt and notes are sent directly to Google. The student's own API key remains in page memory only and is not persisted.
- Model and JavaScript files are downloaded from public CDNs/model hosting. The model host receives ordinary file requests, not the student's prompts.
- Do not submit names, dates of birth, medical record numbers, or other identifiable patient data.
- The compact model can make mistakes and may produce incomplete or incorrect nursing explanations. Verify clinical information against current authoritative nursing references.
- AI-generated questions are practice material, not official NCLEX/NCSBN items. The AI must not silently change the answer key in the existing question bank.

## Model quality and device limits

Qwen2.5-0.5B is deliberately small to keep downloads and hardware requirements lower. It is genuine generative AI, but it is not as capable or dependable as larger models. Complex clinical reasoning, long documents, and detailed rationales may be weak. Students with low-memory devices may be unable to load it. If it fails, the rest of QuickRN's question bank and learning content should continue to work.

## Troubleshooting

- If WebGPU fails, the client attempts CPU/WASM mode.
- If the model download fails, check the network and retry.
- If memory is insufficient, close other tabs/apps and reload the Learning Center.
- Clear browser site data only if the model cache is corrupted; this will require another download.
