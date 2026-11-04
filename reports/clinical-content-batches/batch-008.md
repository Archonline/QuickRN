# QuickRN Clinical Content Batch 008

- Batch size: 5 records
- Date: 2026-11-05
- Target branch: `main`
- Question-bank file: `questions-bank-v2-curated.js`
- Initial item-content commit: `7e0a4d67bab851bad897713ad909648498efadfc`
- Bowtie rationale-key refinement: `532423dc8105cb20765ea07cae79da7d1e44b9ad`

## Scope

Added canonical schema v2 metadata, format-specific answer keys, response-specific rationales, item-specific Clinical Judgment Tips, evidence references, and pending educator-review state.

| Question ID | Format | Topic | Client Needs | CJMM step |
|---|---|---|---|---|
| QR-001300 | Matrix Single | Electrolyte imbalance | Reduction of Risk Potential | Analyze Cues |
| QR-001301 | Cloze (Drop-down) | Severe preeclampsia | Physiological Adaptation | Take Action |
| QR-001302 | Bowtie | Pediatric epiglottitis | Physiological Adaptation | Prioritize Hypotheses |
| QR-001303 | Highlight | Hyperkalemia | Reduction of Risk Potential | Recognize Cues |
| QR-001304 | Numeric Entry | IV infusion calculation | Pharmacological and Parenteral Therapies | Take Action |

## Canonical schema v2 representation

- `metadata`: ID, category, Client Needs, CJMM stage, integer difficulty (1–5), and topic.
- `interaction`: format, stem, options, format-specific answer key, and scoring method.
- `rationales`: overall explanation, response-specific explanations, and an item-specific Clinical Judgment Tip.
- `evidence`: named source, organization, year, URL, and supported claim.
- `educatorReview`: initialized to `pending`.

Format-specific structures used:
- Matrix Single: row-to-column answer map and `matrixData`.
- Cloze: answer map keyed by each blank ID and explanations for every dropdown choice.
- Bowtie: condition/actions/monitoring answer map with explanations for every offered response.
- Highlight: array of correct segment IDs and rationale for every segment.
- Numeric Entry: numeric answer and exact accepted range with unit.

## Review and validation status

| Gate | Batch status | Notes |
|---|---|---|
| Source JavaScript syntax | PASS | Updated curated-bank file passed a syntax parse check. |
| Canonical schema v2 adapter validation | PASS | All five records passed `schema.normalize` and `schema.validate` with zero issues. |
| Format-specific answer-key shape | PASS | Matrix Single, Cloze, Bowtie, Highlight, and Numeric Entry were checked against the adapter and strict validator. |
| Response-specific rationale coverage | PASS | Explanations cover every matrix row, dropdown alternative, bowtie response, highlight segment, or numeric calculation. |
| Evidence retention | PASS | Each record has at least one titled source, organization, year, URL, and supported claim. |
| Educator review | PENDING | All five records remain pending; none is educator-approved. |
| Full production bank validation | NOT RUN | The full production bank could not be assembled in this session because the repository file interface returned empty content for `questions.js`. |

## Evidence sources

1. QR-001300 — Merck Manual Professional, Hypokalemia: https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/hypokalemia
2. QR-001300 — Merck Manual Professional, Hypercalcemia: https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/hypercalcemia
3. QR-001300 — Merck Manual Professional, Hyponatremia: https://www.merckmanuals.com/professional/nephrology/electrolyte-disorders/hyponatremia
4. QR-001301 — ACOG, Gestational Hypertension and Preeclampsia: https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2020/06/gestational-hypertension-and-preeclampsia
5. QR-001302 — MSF, Epiglottitis clinical guideline: https://medicalguidelines.msf.org/sites/default/files/2025-07/guideline-170-en.pdf
6. QR-001303 — KDIGO, Acute Hyperkalemia conference report: https://kdigo.org/wp-content/uploads/2018/04/KDIGO-Acute-Hyperkalemia-conf-report-FINAL.pdf
7. QR-001304 — OpenStax / Open RN, Clinical Nursing Skills: https://openstax.org/books/clinical-nursing-skills/pages/11-2-dosing

## Separation rule

Automated schema validation and educator review are independent gates. A schema pass does not imply educator approval. Only a qualified educator review with reviewer identity and review timestamp may move an item to `educatorReview.status = "approved"`.
