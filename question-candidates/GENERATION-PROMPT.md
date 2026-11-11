# QuickRN source-grounded question batch generator

Generate original QuickRN NCLEX-style practice questions from public clinical evidence. This workflow does not require educator approval before import; it uses automated structural, provenance, duplication, rendering, and scoring checks. Automated checks do **not** certify clinical accuracy.

## Inputs
- Topics / learning objectives: {{TOPICS}}
- Target count: {{COUNT}}
- NCLEX-RN Client Needs distribution: {{CLIENT_NEEDS_DISTRIBUTION}}
- CJMM stages: {{CJMM_STAGES}}
- Difficulty range (1–5): {{DIFFICULTY_RANGE}}
- Exact QuickRN format distribution: {{FORMAT_DISTRIBUTION}}
- IDs: {{QUESTION_IDS}}
- Learner context: entry-level RN, unless otherwise specified

## Evidence-first research rules
1. Research each clinical concept using at least two independent, current, authoritative public sources when available. Prefer official guidelines and government health agencies: NCSBN/NCLEX test plan for exam blueprint and item-writing conventions; CDC for infection prevention and public health; NIH/NLM/MedlinePlus for disease and medication background; AHRQ for patient safety; FDA for medication/device safety; WHO and relevant professional societies for current clinical guidance.
2. Use sources to establish clinical facts, safety thresholds, nursing actions, and rationale. Record exact source title, publisher, URL, publication/update date when visible, and access date.
3. Do not copy, lightly paraphrase, or adapt question stems, options, rationales, or case narratives from commercial question banks, NCLEX prep sites, textbooks, copyrighted sample questions, or live exam content. Do not scrape question banks. Do not disguise copied questions by changing names, ages, numbers, or wording.
4. Instead, synthesize the underlying clinical principle and independently invent a different patient, setting, timeline, cues, distractors, and decision point. Write from the clinical facts, not from an existing question.
5. If sources conflict, prefer the newest applicable official guideline and state the uncertainty in `evidenceLimitations`. Never invent citations or pretend a source supports a claim it does not.
6. Questions are educational practice items, not clinical advice or official NCSBN/NCLEX content.


## NGN presentation contracts (required for all new items)

These are schema requirements, not optional styling suggestions. Preserve a clear distinction between left-pane clinical evidence and the right-pane task.

- **Matrix Single:** provide `matrixLeftPane` as a concise clinical finding/context (normally one or two sentences, no more than about 180 characters) and `matrixTask` as the explicit task. Keep row labels concise. Do not put the full long case narrative in every matrix row.
- **Extended Drag and Drop:** provide `availableItems` in a deliberately non-keyed initial order and `correctOrder` as the authoritative sequence. Feedback must identify each item in a correct or incorrect position and show the full correct sequence after submission.
- **Highlight:** provide one complete readable paragraph in `highlightText` (or `nursingNotes`) and `highlightSegments` for cue phrases. Each segment should include a stable `id`, exact `text`, and character `start`/`end` offsets into the paragraph whenever feasible. Use `correctHighlights` for the keyed cue IDs. Put the nursing note in the left pane; do not convert the paragraph into separate SATA options.
- **Trend:** use `trendData.stages` for a sequential clinical trajectory. Each stage must contain `time` (or stage label), `situation`/patient status, a distinct `question`, `options`, and `correctAnswer`/ `answerKey`. Show a plausible initial state followed by improvement, deterioration, or a response to intervention. Each stage must require a response; later stages must reflect the preceding trajectory without inventing unsupported values.
- **Bowtie:** the initial condition/actions/monitoring fields remain required. Optional `bowtieData.followUpQuestions` may add one or more ordered-response follow-ups, each with `question`, `availableItems`, and `correctOrder`.
- **Cloze (Drop-down) / Dropdown Rationale:** store the complete sentence with blank tokens only in `clozeTemplate`; store the learner task separately in `instruction`. Do not repeat the full cloze sentence as a second question heading. Give each dropdown a stable `id`, plausible `options`, and keyed `correct` value.

The schema's `presentation` defaults describe these rendering contracts. Use the exact data fields above so the shared renderer can place, display, capture, and grade each interaction consistently in Self-Study, Timed Practice, Predictor, and CAT.

## Output
Return only valid JSON: `{"questions":[...]}`. Generate exactly ONE original question. Each item must:
- Use a unique supplied `QR-######` ID in `id` and `metadata.id`.
- Use exactly one of these 13 QuickRN schema-v2 formats: Single Choice, Multiple Response, Select N, Matrix Single, Matrix Multiple, Cloze (Drop-down), Dropdown Rationale, Bowtie, Extended Drag and Drop, Extended Multiple Response, Highlight, Trend, Numeric Entry.
- Include a complete, independently written scenario/stem, keyed answer, overall rationale, answer-specific rationales, clinical judgment tip, topic, category, Client Needs, CJMM stage, difficulty, sourceReferences (at least two where reasonably available), and evidenceLimitations (empty array when none).
- Include format-specific interaction data, options, exhibits, tables, answer spaces, and scoring fields required by QuickRN. The response must genuinely use the requested format, not disguise single-choice as NGN.
- Keep all numbers, units, reference ranges, medication doses, contraindications, and nursing scope statements traceable to the cited sources or standard arithmetic. Include calculations and rounding rules.
- Make distractors plausible but clearly less safe/less appropriate under the stated facts. Avoid trick wording, hidden assumptions, ambiguous multiple keys, and unsupported absolutes.
- Ensure each keyed response is actually supported by the cited evidence. Rationales must explain why the correct response is best and why each distractor is less appropriate.
- Use the QuickRN schema-v2 object shape below; add all format-specific properties required by the schema.

```json
{
  "id":"QR-000001",
  "schemaVersion":2,
  "category":"Adult Health",
  "topic":"Specific clinical concept",
  "clientNeeds":"Physiological Adaptation",
  "cjmmStep":"Analyze Cues",
  "difficulty":3,
  "type":"Single Choice",
  "question":"Original scenario and task...",
  "options":["A","B","C","D"],
  "correctAnswer":"A",
  "rationale":"Evidence-grounded explanation...",
  "optionRationales":{"A":"...","B":"...","C":"...","D":"..."},
  "clinicalJudgmentTip":"...",
  "sourceReferences":[
    {"title":"Exact source title","publisher":"Publisher","url":"https://...","publishedAt":"YYYY-MM-DD or unknown","accessedAt":"YYYY-MM-DD"}
  ],
  "evidenceLimitations":[],
  "metadata":{"id":"QR-000001","category":"Adult Health","clientNeeds":"Physiological Adaptation","cjmmStep":"Analyze Cues","difficulty":3},
  "interaction":{"type":"Single Choice","stem":"...","options":["A","B","C","D"],"answerKey":"A","scoring":{"method":"0/1"}},
  "stimulus":{},
  "rationales":{"overall":"...","options":{"A":"...","B":"...","C":"...","D":"..."},"clinicalJudgmentTip":"..."}
}
```

Never return a claim that the item is educator-approved or clinically certified. Output data only.