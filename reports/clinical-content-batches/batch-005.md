# QuickRN Clinical Content Batch 005

- Batch size: 5 records
- Date: 2026-11-05
- Target branch: `main`
- Question-bank file: `questions-bank-v2-curated.js`
- Initial item-content commit: `75c88e8d673b1d543f121e08653009bd901edbb2`
- Clinical Judgment Tip refinement commit: `08e0c5f0d7018349fa96d1f352c6a82a050d8337`

## Scope

Migrated five mixed-format items using the repository's actual schema v2 adapter and format-specific answer-key contracts. Existing stems, response options, and legacy answer keys were retained.

| Question ID | Format | Topic | Client Needs | CJMM step |
|---|---|---|---|---|
| QR-001285 | Single Choice | Acute stroke | Physiological Adaptation | Analyze Cues |
| QR-001286 | Multiple Response | Acute heart failure | Physiological Adaptation | Take Action |
| QR-001287 | Select N (3) | Warfarin teaching | Pharmacological and Parenteral Therapies | Generate Solutions |
| QR-001288 | Matrix Single | Transmission-based precautions | Safety and Infection Control | Analyze Cues |
| QR-001289 | Matrix Multiple | Postpartum hemorrhage | Physiological Adaptation | Take Action |

## Canonical schema v2 representation

- `metadata`: `id`, `category`, `clientNeeds`, `cjmmStep`, integer `difficulty` (1–5), and `topic`
- `interaction`: format type, stem, options, format-specific `answerKey`, and scoring method
- `rationales`: overall rationale, response-specific explanations, and an item-specific Clinical Judgment Tip
- `evidence`: source title, organization, year, URL, and supported claim
- `educatorReview`: initialized to `pending`

Format-specific answer-key structures used:
- Single Choice: one correct response string.
- Multiple Response: array of selected option strings.
- Select N: array of selected option strings with `selectN: 3`.
- Matrix Single: row-to-column object.
- Matrix Multiple: row-to-array-of-columns object.

The matrix items also retain `rows`, `columns`, `correctAnswers`, and a `matrixData` representation for the strict format-data check.

## Review and validation status

| Gate | Batch status | Notes |
|---|---|---|
| Source JavaScript syntax | PASS | Updated curated-bank file passed a syntax parse check. |
| Canonical schema v2 adapter validation | PASS | All five records passed `schema.normalize` and `schema.validate` with zero issues. |
| Format-specific answer-key shape | PASS | Single Choice, Multiple Response, Select N, Matrix Single, and Matrix Multiple were checked using the actual adapter contract. |
| Option/response rationale coverage | PASS | Explanations are keyed by A–E for choice formats and by row ID for matrix formats. |
| Evidence retention | PASS | Each record has at least one titled source, organization, year, URL, and supported claim. |
| Educator review | PENDING | All five records remain pending; none is educator-approved. |
| Full production bank validation | NOT RUN | The full production bank could not be assembled in this session because the repository file interface returned empty content for `questions.js`. |

## Evidence sources

1. QR-001285 — AHA/ASA 2026 acute ischemic stroke guideline: https://doi.org/10.1161/str.0000000000000513
2. QR-001286 — 2022 AHA/ACC/HFSA heart failure guideline: https://www.jacc.org/doi/10.1016/j.jacc.2021.12.012
3. QR-001287 — AHA Guide to Taking Warfarin: https://www.heart.org/en/health-topics/arrhythmia/prevention--treatment-of-arrhythmia/a-patients-guide-to-taking-warfarin
4. QR-001287 — NHS anticoagulant considerations: https://www.nhs.uk/medicines/anticoagulants/considerations/
5. QR-001288 — CDC Isolation Precautions: https://www.cdc.gov/infection-control/hcp/isolation-precautions/precautions.html
6. QR-001288 — CDC Appendix A, Type and Duration of Precautions: https://www.cdc.gov/infection-control/hcp/isolation-precautions/appendix-a-type-duration.html
7. QR-001289 — WHO 2025 postpartum hemorrhage guideline: https://www.ncbi.nlm.nih.gov/books/NBK619233/table/ch3.tab30/

## Separation rule

Automated schema validation and educator review are independent gates. A schema pass does not imply educator approval. Only a qualified educator review with reviewer identity and review timestamp may move an item to `educatorReview.status = "approved"`.
