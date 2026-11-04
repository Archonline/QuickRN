# QuickRN Clinical Content Batch 003

- Batch size: 5 records
- Date: 2026-11-05
- Target branch: `main`
- Question-bank file: `questions-bank-v2.js`
- Item-content commit: `28f98c19ffe9bbd9de492c0de7f9c609c0ff3275`

## Scope

Added canonical schema v2 metadata, structured interactions, four letter-keyed option rationales, Clinical Judgment Tips, item-level evidence references, and pending educator-review state. Existing question stems, choices, and legacy answer keys were preserved.

| Question ID | Topic | Client Needs | CJMM step | Evidence |
|---|---|---|---|---|
| QR-001272 | Opioid toxicity | Physiological Adaptation | Take Action | CDC opioid overdose response |
| QR-001273 | Postpartum hemorrhage | Physiological Adaptation | Take Action | WHO 2025 postpartum hemorrhage guideline |
| QR-001274 | Severe preeclampsia | Physiological Adaptation | Take Action | ACOG preeclampsia guidance |
| QR-001275 | Magnesium sulfate toxicity | Pharmacological and Parenteral Therapies | Take Action | ACOG National Partnership for Maternal Safety |
| QR-001276 | Pediatric epiglottitis | Physiological Adaptation | Take Action | MSF epiglottitis clinical guideline |

## Fields added per record

- `metadata`: `id`, `category`, `clientNeeds`, `cjmmStep`, integer `difficulty` (1–5), and `topic`
- `interaction`: `type`, `stem`, `options`, `answerKey`, and `scoring.method`
- `rationales`: `overall`, letter-keyed `options` string explanations (A–D), and `clinicalJudgmentTip`
- `evidence`: source title, organization, year, URL, and supported claim
- `educatorReview` initialized to `pending`

## Review and validation status

| Gate | Batch status | Notes |
|---|---|---|
| Source JavaScript syntax | PASS | Updated question-bank file passed a syntax parse check. |
| Schema v2 field presence | PASS | All five records contain nested metadata, interaction, and rationales structures. |
| Option rationale coverage | PASS | Each of the four choices has a letter-keyed explanation string; the correct response is stored in `interaction.answerKey`. |
| Evidence retention | PASS | Each item has a titled source, organization, year, URL, and supported claim. |
| Canonical schema v2 adapter validation | PASS | The five records in this batch passed `schema.normalize` and `schema.validate` with zero issues. |
| Full production schema validator | NOT RUN | The complete production bank could not be assembled in this session because the repository file interface returned empty content for `questions.js`. |
| Educator review | PENDING | All five records remain pending; none is educator-approved. |

## Evidence sources

1. QR-001272 — CDC, What to Do If You Think Someone Is Overdosing: https://www.cdc.gov/stop-overdose/response/
2. QR-001273 — WHO 2025, Consolidated guidelines for postpartum haemorrhage: https://www.ncbi.nlm.nih.gov/books/NBK619233/table/ch3.tab30/
3. QR-001274 — ACOG, Preeclampsia and High Blood Pressure During Pregnancy: https://www.acog.org/womens-health/faqs/preeclampsia-and-high-blood-pressure-during-pregnancy
4. QR-001275 — ACOG, National Partnership for Maternal Safety: https://doi.org/10.1097/aog.0000000000002115
5. QR-001276 — MSF, Epiglottitis clinical guideline: https://medicalguidelines.msf.org/sites/default/files/2025-07/guideline-170-en.pdf

## Separation rule

Automated schema validation and educator review are independent gates. A schema pass does not imply educator approval. Only a qualified educator review with reviewer identity and review timestamp may move an item to `educatorReview.status = "approved"`.
