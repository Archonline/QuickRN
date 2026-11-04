# QuickRN Clinical Content Batch 001

- Batch size: 5 records
- Date: 2026-11-05
- Target branch: `main`
- Question-bank file: `questions-bank-v2.js`
- Initial item-content commit: `2894cbfb683fd21484068a70c81cebeea8308290`
- Canonical schema v2 migration commit: `262f301a6e79eb3b1f6338f70a71487bd3f00c77`
- Validator-separation commit: `8b2b14d100ffc5cab12ce01528db08e7a3f76bee`
- Canonical schema v2 validator commit: `bf1ca87217a81d01fa301408b591fb1f627692f6`

## Scope

Added missing clinical metadata and answer-option teaching content to five existing single-best-answer items. Existing question stems, answer choices, and answer keys were not changed.

| Question ID | Topic | Client Needs | CJMM step | Evidence |
|---|---|---|---|---|
| QR-001265 | Acute coronary syndrome / STEMI | Physiological Adaptation | Take Action | 2025 ACC/AHA ACS guideline |
| QR-001266 | Acute ischemic stroke | Physiological Adaptation | Analyze Cues | 2026 AHA/ASA acute ischemic stroke guideline |
| QR-001277 | Pediatric dehydration / poor perfusion | Physiological Adaptation | Take Action | Royal Children's Hospital Melbourne IV fluids guideline |
| QR-001280 | Alcohol withdrawal | Psychosocial Integrity | Take Action | ASAM alcohol withdrawal management guideline |
| QR-001284 | DKA with hypokalemia | Physiological Adaptation | Take Action | 2024 hyperglycemic crises consensus report |

## Canonical schema v2 fields added per record

- `metadata`: `id`, `category`, `clientNeeds`, `cjmmStep`, integer `difficulty` (1–5), and `topic`
- `interaction`: `type`, `stem`, `options`, `answerKey`, and `scoring.method` (`0/1` for these single-best-answer items)
- `rationales`: `overall`, letter-keyed `options` entries with `correct` and `explanation`, and `clinicalJudgmentTip`
- `evidence`: source title, organization, year, URL, and supported claim
- `educatorReview` initialized to `pending`
- Legacy top-level fields retained for compatibility with existing exam renderers

## Review and validation status

| Gate | Batch status | Notes |
|---|---|---|
| Source JavaScript syntax | PASS | `questions-bank-v2.js` passed a syntax parse check. |
| Schema v2 field presence | PASS | All five records contain nested `metadata`, `interaction`, `rationales`, and `evidence` structures. |
| Option rationale coverage | PASS | Each of the four choices has a letter-keyed `correct` flag and explanation. |
| Full production schema validator | NOT RUN | The repository file interface returned empty content for `questions.js`; the complete production bank could not be assembled in this session. |
| CI | BLOCKED | The Vercel status for the validator commit reports a build-rate-limit failure; this is not a passing test. |
| Educator review | PENDING | No item is marked educator-approved by this batch. |

## Evidence sources

1. QR-001265 — American Heart Association / American College of Cardiology, 2025 ACS guideline: https://professional.heart.org/en/science-news/2025-guideline-for-the-management-of-patients-with-acute-coronary-syndromes
2. QR-001266 — American Heart Association / American Stroke Association, 2026 acute ischemic stroke guideline: https://doi.org/10.1161/str.0000000000000513
3. QR-001277 — Royal Children's Hospital Melbourne, Intravenous Fluids clinical practice guideline: https://www.rch.org.au/clinicalguide/guideline_index/Intravenous_fluids/
4. QR-001280 — American Society of Addiction Medicine, Alcohol Withdrawal Management guideline: https://doi.org/10.1097/ADM.0000000000000668
5. QR-001284 — ADA and partner organizations, Hyperglycemic Crises in Adults With Diabetes consensus report: https://doi.org/10.2337/dci24-0032

## Separation rule

Automated schema validation and educator review are independent gates. A schema pass does not imply educator approval. Only a qualified educator review with reviewer identity and review timestamp may move an item to `educatorReview.status = "approved"`.
