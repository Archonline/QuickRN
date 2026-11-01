# QuickRN free on-device AI setup

## Cost

This integration uses a free open-weight model running locally in each student's browser. It does not call OpenAI or another paid inference API. There are no API keys, usage-based AI fees, Firebase Cloud Functions, Firebase Blaze requirement, or AI backend server.

The app uses:
- Transformers.js v3.8.1 from jsDelivr.
- onnx-community/Qwen2.5-0.5B-Instruct, using 4-bit quantization.
- WebGPU when supported, with ONNX Runtime WebAssembly/CPU fallback.
- Browser model caching for repeat visits.

## How students use it

1. Open Learning Center.
2. Select **Load free AI model**.
3. Wait for the first model download. It is approximately a few hundred megabytes, depending on model files and quantization.
4. Ask the AI Tutor, summarize notes, generate flashcards, draft practice questions, or create a study plan.
5. On later visits the browser can reuse its cached model files.

The first download requires internet access. Model inference is local after the files are loaded. Students need a modern browser and enough free memory/storage. WebGPU is recommended; CPU fallback may be slow on low-powered devices.

## No paid setup

There is no API key to create, no Firebase project upgrade, and no cloud function to deploy. The AI itself is activated from the Learning Center. Normal website hosting and bandwidth limits still apply to the static app and model downloads; this is not a promise that hosting or internet access is free.

## Privacy and safety

- The student's prompts and generated responses are processed in the browser and are not sent to an AI inference API by this feature.
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
