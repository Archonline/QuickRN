# QuickRN Clinical Content Batch 006

- Batch size: 5 records
- Date: 2026-11-05
- Target branch: `main`
- Question-bank file: `questions-bank-v2-curated.js`
- Item-content commit: `a50e3dabe89b7f992b9a292b4d65afbd0b9d8465`

## Scope

Added canonical schema v2 metadata, format-specific interaction and answer-key structures, response-specific rationales, item-specific Clinical Judgment Tips, evidence references, and pending educator-review state.

| Question ID | Format | Topic | Client Needs | CJMM step |
|---|---|---|---|---|
| QR-001290 | Cloze (Drop-down) | DKA with hypokalemia | Physiological Adaptation | Take Action |
| QR-001291 | Bowtie | Septic shock | Physiological Adaptation | Prioritize Hypotheses |
| QR-001292 | Highlight | Acute respiratory distress | Physiological Adaptation | Recognize Cues |
| QR-001293 | Numeric Entry | Weight-based medication calculation | Pharmacological and Parenteral Therapies | Take Action |
| QR-001294 | Extended Drag and Drop | Acute transfusion reaction | Safety and Infection Control | Take Action |

## Canonical schema v2 representation

- `metadata`: ID, category, Client Needs, CJMM stage, integer difficulty (1–5), and topic.
- `interaction`: format, stem, format-specific options, answer key, and scoring method.
- `rationales`: overall explanation, response-specific explanations, and Clinical Judgment Tip.
- `evidence`: source title, organization, year, URL, and supported claim.
- `educatorReview`: initialized to `pending`.

Format-specific answer-key structures used:
- Cloze: object keyed by blank ID (`fluid`, `potassium`, `insulin`).
- Bowtie: object keyed by `condition`, `actions`, and `monitoring`.
- Highlight: array of stable highlight-segment IDs.
- Numeric Entry: numeric answer with exact accepted range and unit.
- Extended Drag and Drop: ordered array of response steps.

## Review and validation status

| Gate | Batch status | Notes |
|---|---|---|
| Source JavaScript syntax | PASS | Updated curated-bank file passed a syntax parse check. |
| Canonical schema v2 adapter validation | PASS | All five records passed `schema.normalize` and `schema.validate` with zero issues. |
| Format-specific answer-key shape | PASS | Cloze, Bowtie, Highlight, Numeric Entry, and Extended Drag and Drop were checked against the adapter and strict validator. |
| Response-specific rationale coverage | PASS | Rationales cover every dropdown alternative, bowtie response group, highlight segment, numeric calculation, or ordered step. |
| Evidence retention | PASS | Each record has at least one titled source, organization, year, URL, and supported claim. |
| Educator review | PENDING | All five records remain pending; none is educator-approved. |
| Full production bank validation | NOT RUN | The full production bank could not be assembled in this session because the repository file interface returned empty content for `questions.js`. |

## Evidence sources

1. QR-001290 — ADA 2024 Hyperglycemic Crises in Adults consensus report: https://doi.org/10.2337/dci24-0032
2. QR-001291 — Surviving Sepsis Campaign 2026 adult guidelines: https://www.sccm.org/clinical-resources/guidelines/guidelines/surviving-sepsis-campaign-international-guidelines-for-management-of-sepsis-and-septic-shock-2026
3. QR-001292 — Royal College of Physicians NEWS2: https://www.rcp.ac.uk/resources/national-early-warning-score-news-2/
4. QR-001292 — British Thoracic Society oxygen guideline: https://doi.org/10.1136/thoraxjnl-2016-209729
5. QR-001293 — OpenStax / Open RN, Clinical Nursing Skills: https://openstax.org/books/clinical-nursing-skills/pages/11-2-dosing
6. QR-001294 — International Society of Blood Transfusion, Adverse Effects of Transfusion: https://www.isbtweb.org/resources/educational-modules-on-clinical-use-of-blood/adverse-effects-of-transfusion.html
7. QR-001294 — Royal Children's Hospital, Adverse Effects of Transfusion: https://www.rch.org.au/bloodtrans/adverse_effects/Adverse_effects_of_transfusion/

## Separation rule

Automated schema validation and educator review are independent gates. A schema pass does not imply educator approval. Only a qualified educator review with reviewer identity and review timestamp may move an item to `educatorReview.status = "approved"`.
