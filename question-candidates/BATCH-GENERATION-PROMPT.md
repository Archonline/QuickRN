# QuickRN batch AI question-generation prompt

Use this with an AI model when an educator wants to prepare a batch for the local importer. The output is untrusted draft content; it is not approved for student use.

## Prompt

You are drafting original nursing education practice questions for QuickRN. Generate exactly `{{COUNT}}` independent questions and return one JSON object with a top-level `questions` array.

Educator inputs:
- Learning objectives / topics: `{{TOPICS}}`
- NCLEX Client Needs categories: `{{CLIENT_NEEDS}}`
- CJMM stages: `{{CJMM_STAGES}}`
- Difficulty range (1–5): `{{DIFFICULTY_RANGE}}`
- Required format distribution: `{{FORMAT_DISTRIBUTION}}`
- Learner level / clinical context: `{{LEARNER_CONTEXT}}`
- Unique IDs, one per item: `{{QUESTION_IDS}}`

Requirements:
1. Return only valid JSON. No Markdown fences, prose, or comments. Shape: `{"questions":[{...},{...}]}`.
2. Return question objects only, without a `review` wrapper. Each item will be imported as a separate pending JavaScript module.
3. Use only these exact QuickRN schema-v2 format strings: `Single Choice`, `Multiple Response`, `Select N`, `Matrix Single`, `Matrix Multiple`, `Cloze (Drop-down)`, `Dropdown Rationale`, `Bowtie`, `Extended Drag and Drop`, `Extended Multiple Response`, `Highlight`, `Trend`, `Numeric Entry`.
4. Follow the requested format distribution exactly. Do not replace an interaction-specific item with ordinary multiple choice.
5. Create original, realistic, self-contained scenarios. Never reproduce, paraphrase, or claim access to protected/live NCLEX questions or commercial test-bank content.
6. Use the supplied unique ID in both `id` and `metadata.id`. Do not reuse IDs within the batch.
7. Include a defensible answer key, overall rationale, option/row/action-specific rationales where applicable, a concise clinical judgment tip, and verifiable evidence references. Never invent sources. If evidence cannot be verified, state the gap in `educatorFlags`.
8. Prioritize patient safety, current evidence, nursing scope, and unambiguous wording. For medication calculations, show the calculation, units, rounding rule, and stated safe-dose assumptions.
9. Include all format-specific stimulus and interaction data required by the QuickRN schema. Keep stable response IDs and ensure answer keys refer to those IDs.
10. Set `metadata.cjmmStep` to one of `Recognize Cues`, `Analyze Cues`, `Prioritize Hypotheses`, `Generate Solutions`, `Take Action`, or `Evaluate Outcomes`. Set `metadata.difficulty` to an integer from 1 to 5. Use a supported scoring method: `plus_minus`, `0/1`, or `rationale`.
11. Do not include real patient information, identifiers, or student data.
12. Do not generate a linked six-question NGN case unless explicitly requested. A case set requires educator review as a complete linked unit.

Use the same schema shape as the single-question prompt in `GENERATION-PROMPT.md`, adding any format-specific fields. The batch importer validates structure and duplicate IDs, not clinical correctness, source accuracy, fairness, or safety. Every item remains in `pending_review` until a nurse educator/admin approves it.