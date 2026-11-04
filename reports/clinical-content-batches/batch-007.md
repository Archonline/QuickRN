# QuickRN Clinical Content Batch 007

- Batch size: 5 records
- Date: 2026-11-05
- Target branch: `main`
- Question-bank file: `questions-bank-v2-curated.js`
- Item-content commit: `cf9394c502fe5f8452fd10ce0ff3d4655c736bd9`

## Scope

Added canonical schema v2 metadata, format-specific answer keys, response-specific rationales, Clinical Judgment Tips, evidence references, and pending educator-review state.

| Question ID | Format | Topic | Client Needs | CJMM step |
|---|---|---|---|---|
| QR-001295 | Extended Multiple Response | Suicide safety | Psychosocial Integrity | Take Action |
| QR-001296 | Trend | Acute kidney injury | Reduction of Risk Potential | Analyze Cues |
| QR-001297 | Multiple Response | Pediatric asthma | Physiological Adaptation | Take Action |
| QR-001298 | Single Choice | Magnesium sulfate toxicity | Pharmacological and Parenteral Therapies | Take Action |
| QR-001299 | Select N (2) | Delegation and assignment | Management of Care | Generate Solutions |

## Canonical schema v2 representation

- `metadata`: ID, category, Client Needs, CJMM stage, integer difficulty (1–5), and topic.
- `interaction`: format, stem, options, format-specific answer key, and scoring method.
- `rationales`: overall explanation, option-specific explanations, and an item-specific Clinical Judgment Tip.
- `evidence`: named source, organization, year, URL, and supported claim.
- `educatorReview`: initialized to `pending`.

Format-specific structures used:
- Extended Multiple Response and Multiple Response: arrays of selected option strings.
- Trend: trend table, response options, and a single keyed interpretation.
- Single Choice: one keyed response string.
- Select N: array of selected responses with `selectN: 2`.

## Review and validation status

| Gate | Batch status | Notes |
|---|---|---|
| Source JavaScript syntax | PASS | Updated curated-bank file passed a syntax parse check. |
| Canonical schema v2 adapter validation | PASS | All five records passed `schema.normalize` and `schema.validate` with zero issues. |
| Format-specific answer-key shape | PASS | Extended Multiple Response, Trend, Multiple Response, Single Choice, and Select N were checked against the adapter. |
| Response-specific rationale coverage | PASS | Explanations cover every displayed response option. |
| Evidence retention | PASS | Each record has at least one titled source, organization, year, URL, and supported claim. |
| Educator review | PENDING | All five records remain pending; none is educator-approved. |
| Full production bank validation | NOT RUN | The full production bank could not be assembled in this session because the repository file interface returned empty content for `questions.js`. |

## Evidence sources

1. QR-001295 — NIMH Adult Outpatient Brief Suicide Safety Assessment Guide: https://www.nimh.nih.gov/research/research-conducted-at-nimh/asq-toolkit-materials/adult-outpatient/adult-outpatient-brief-suicide-safety-assessment-guide
2. QR-001296 — KDIGO Clinical Practice Guideline for Acute Kidney Injury: https://kdigo.org/wp-content/uploads/2019/01/KDIGO-2012-AKI-Guideline-English.pdf
3. QR-001297 — GINA 2025 Global Strategy for Asthma Management and Prevention: https://ginasthma.org/wp-content/uploads/2025/05/GINA-2025_tracked-for-archive-WMSA.pdf
4. QR-001298 — ACOG National Partnership for Maternal Safety: https://doi.org/10.1097/aog.0000000000002115
5. QR-001299 — NCSBN National Guidelines for Nursing Delegation: https://www.ncsbn.org/public-files/NCSBN_Delegation_Guidelines.pdf
6. QR-001299 — Open RN Delegation and Supervision: https://www.ncbi.nlm.nih.gov/books/NBK610432/

## Separation rule

Automated schema validation and educator review are independent gates. A schema pass does not imply educator approval. Only a qualified educator review with reviewer identity and review timestamp may move an item to `educatorReview.status = "approved"`.
