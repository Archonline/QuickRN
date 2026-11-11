# QuickRN AI question-generation prompt

Use this prompt with an approved AI model to draft one original QuickRN question. The model response is **untrusted candidate content**, not an approved exam item.

## Prompt

You are drafting an original nursing education practice item for QuickRN. Generate exactly ONE question in the requested QuickRN format.

Inputs supplied by the educator:
- Topic / learning gap: `{{TOPIC}}`
- NCLEX Client Needs category: `{{CLIENT_NEEDS}}`
- CJMM stage: `{{CJMM_STAGE}}`
- Difficulty (1–5): `{{DIFFICULTY}}`
- Required format (exact schema-v2 string): `{{FORMAT}}`
- Learner level / context: `{{LEARNER_CONTEXT}}`

Requirements:
1. Return only one valid JSON object. Do not wrap it in Markdown fences and do not include commentary.
2. Return the question object itself, not a `review` wrapper. It will be imported into a separate pending-review JavaScript file.
3. Use the exact requested format string. The 13 QuickRN schema-v2 values are:
   - `Single Choice`
   - `Multiple Response`
   - `Select N`
   - `Matrix Single`
   - `Matrix Multiple`
   - `Cloze (Drop-down)`
   - `Dropdown Rationale`
   - `Bowtie`
   - `Extended Drag and Drop`
   - `Extended Multiple Response`
   - `Highlight`
   - `Trend`
   - `Numeric Entry`
4. Create an original, realistic, self-contained clinical scenario. Do not reproduce, paraphrase, or claim access to protected/live NCLEX questions or commercial test-bank content.
5. Prioritize patient safety, current evidence, appropriate nursing scope, and unambiguous wording. Do not make assumptions that are not stated in the scenario.
6. Include a defensible answer key, a complete overall rationale, and a specific rationale for every response option, row, action, highlight, or keyed response that applies to the selected format.
7. Include one concise Clinical Judgment Tip and an evidence/reference list. Use authoritative, verifiable references (e.g. current government guidance, professional standards, or peer-reviewed sources). Never invent a title, URL, author, guideline, or publication date. If a source cannot be verified, omit it and explicitly flag the evidence gap in a field named `educatorFlags`.
8. For medication calculations, show the calculation, units, rounding rule, and safe-dose assumptions. Do not invent a facility-specific policy.
9. For a matrix, bow-tie, cloze, highlight, trend, numeric-entry, or drag-and-drop item, include the actual format-specific data needed to render it; do not replace the requested interaction with ordinary multiple choice.
10. Do not include real patient information, identifiers, or student data.
11. Do not generate a linked six-question NGN case unless explicitly asked. Case sets require a separate educator review of the entire linked set.
12. Set a unique question ID supplied by the caller in both `id` and `metadata.id`. If no ID is supplied, use `QR-000001` as a temporary placeholder and do not claim uniqueness.
13. Set `metadata.cjmmStep` to one of: `Recognize Cues`, `Analyze Cues`, `Prioritize Hypotheses`, `Generate Solutions`, `Take Action`, `Evaluate Outcomes`.
14. Set `metadata.difficulty` to an integer from 1 to 5. Set `interaction.scoring.method` to one of `plus_minus`, `0/1`, or `rationale`.

Return this schema shape, adding format-specific fields as needed:

{
  "id": "QR-000001",
  "schemaVersion": 2,
  "category": "Clinical category",
  "topic": "Specific topic",
  "clientNeeds": "NCLEX Client Needs category",
  "cjmmStep": "Analyze Cues",
  "difficulty": 3,
  "type": "{{FORMAT}}",
  "question": "Complete question stem / instruction",
  "options": [],
  "correctAnswer": "Format-appropriate answer key",
  "rationale": "Overall clinical rationale",
  "optionRationales": {
    "response identifier or label": "Why this response is correct or incorrect"
  },
  "clinicalJudgmentTip": "Short actionable tip",
  "sourceReferences": [
    {
      "title": "Verifiable source title",
      "url": "https://...",
      "accessedAt": "YYYY-MM-DD"
    }
  ],
  "metadata": {
    "id": "QR-000001",
    "category": "Clinical category",
    "clientNeeds": "NCLEX Client Needs category",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3
  },
  "interaction": {
    "type": "{{FORMAT}}",
    "stem": "Complete question stem / instruction",
    "options": [],
    "answerKey": "Format-appropriate answer key",
    "scoring": {
      "method": "0/1"
    }
  },
  "stimulus": {},
  "rationales": {
    "overall": "Overall clinical rationale",
    "options": {
      "response identifier or label": "Why this response is correct or incorrect"
    },
    "clinicalJudgmentTip": "Short actionable tip"
  },
  "educatorFlags": []
}

For all array/map-based answers, use stable response IDs where possible and ensure the answer key refers exactly to those IDs. The schema validator checks structure only; it does not verify clinical truth, source accuracy, or item fairness. Every candidate requires nurse-educator review before publication.
