# QuickRN question-bank remediation and webmaster review — 2026-11-05

## Review policy

The QuickRN webmaster is the sole clinical content reviewer for this workflow. No nurse-educator approval is required as a release prerequisite. Every new or remediated record is marked `pending_webmaster_review` until the webmaster checks it and reports any correction. Automated validation status is tracked separately; automated checks must never mark a question clinically approved.

## Current loader count

The 15 non-empty question-bank modules were executed in the same order used by `scripts/validate-question-bank.js` on the `main` snapshot inspected 2026-11-05.

- **3,307** top-level records appended to the production bank.
- **3,307** unique IDs; zero duplicate IDs in this execution.
- 125 legacy records and 3,182 newly authored records.
- The prior tracker reported 3,305 total / 3,180 new. It was stale by two records: the current source contributes 60 (not 59) from `questions-bank-v2-curated.js` and 500 (not 498) from `questions-bank-expansion-2026-11-04-batch-003.js`.
- The NGN batch 004 source contains 500 entries, but its loader appends **499** because one colliding ID is deliberately excluded. Therefore, **2,808** records are outside batch 004, rather than the previously reported 2,805. This is a loader-count reconciliation, not an additional content target.

## 1. NGN batch 004 remediation

File: `questions-bank-ngn-expansion-2026-11-04-batch-004.js`

The remediation branch now loads 499 records across the ten represented NGN formats:

| Format | Loaded |
|---|---:|
| Bowtie | 49 |
| Matrix Single | 50 |
| Matrix Multiple | 50 |
| Cloze (Drop-down) | 50 |
| Dropdown Rationale | 50 |
| Highlight | 50 |
| Trend | 50 |
| Extended Drag and Drop | 50 |
| Extended Multiple Response | 50 |
| Select N | 50 |
| **Total** | **499** |

Changes made:
- Added `rationale`, `optionRationales`, and `clinicalJudgmentTip` fields to every loaded batch 004 record.
- Set review status to `pending_webmaster_review` and tracked generated rationale status separately as `draft_for_webmaster_review`.
- Corrected the repeated Bowtie defect where an airway/monitoring parameter was incorrectly keyed as a nursing action. The second action is now a separate focused reassessment/escalation action; the monitoring parameters remain in the monitoring group.
- Corrected the sampled stroke matrix mapping, highlight key, and trend distractor set.
- Replaced generic placeholder distractor phrases with reviewable, clinically contextual alternatives.
- Filled the missing reason key in the sampled Dropdown Rationale pattern.

Automated checks on the remediation branch:
- JavaScript module execution: passed.
- 499 records appended.
- Every loaded record has a rationale field, option-rationale data, and a Clinical Judgment Tip field.
- Bowtie condition/action/monitoring keys, matrix keys, dropdown keys, highlight IDs, trend keys, drag-order keys, and extended-response/select-N keys were checked against their option sets; **zero key-to-option mismatches remained** in those checks.

**Important limitation:** the newly populated rationales and option explanations are first-pass, cue-linked drafting scaffolds. They are not represented as final expert-written rationales or clinically approved content. The webmaster must review and correct them item by item. Option-specific explanations are stored in the question data; they should not be added to student-facing feedback unless separately requested, because the exam interface has previously been configured not to show per-option “why right/why wrong” explanations.

## 2. Review metadata switched to webmaster ownership

Across the question-bank modules on this branch:
- `pending_nurse_educator_review` was changed to `pending_webmaster_review`.
- Existing `educatorReview` metadata objects were renamed `webmasterReview`.
- No item is automatically marked reviewed or approved.
- The progress tracker now records `educatorApprovalRequired: false` and `clinicalReviewer: "QuickRN webmaster"`.

## 3. Audit of the remaining 2,808 records

This is an automated content-quality screen, not a clinical correctness certification.

### Repetition and weak-template findings

| Module | Finding |
|---|---|
| `questions-bank-ngn-case-studies-2026-11-04-batch-005.js` | 500 records contain only 250 unique title strings; 200 records use generic rationale text; only 5 unique rationale strings occur across the module. |
| `questions-bank-ngn-supplement-2026-11-04-batch-006.js` | All 500 records share the same generic rationale; all 500 lack option-specific rationales and Clinical Judgment Tips. |
| `questions-bank-matrix-grid-2026-11-04-batch-008.js` | 200 records have only 40 unique title strings (five records per topic); all 200 lack option-specific rationales and Clinical Judgment Tips. |
| `questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js` | 200 records use only five repeated question stems (40 repetitions each), with generic placeholder options such as “a routine preference” and “an unrelated task.” This batch needs substantial content reconstruction. |
| `questions-bank-ngn-priority-2026-11-04-batch-007.js` | 150 Numeric Entry records share one generic calculation rationale; 150 Matrix / Grid records reuse one exact title; the NGN case-study records reuse a small set of templates. |
| `questions-bank-expansion-2026-11-04-batch-003.js` | 500 unique title strings, but only 62 unique rationale strings across 500 records; option-specific rationales and Clinical Judgment Tips are absent from all 500. |
| Other legacy/supplemental modules | Most records lack separate option-specific rationale data and Clinical Judgment Tips; the existing item-level overall rationales are present. |

### Numeric-entry stem defects

The 150 generated Numeric Entry items in `questions-bank-ngn-priority-2026-11-04-batch-007.js` include ten malformed titles caused by variable substitution colliding with unit notation:
- Five insulin-volume stems render `U-100` as `1750-100`.
- Five temperature-conversion stems render `°C` / `°F` as numeric fragments (for example, `°125` and `°20`).

These are definite authoring defects and must be corrected in the source generator and the affected generated records before release.

### Missing fields across the non-batch-004 records

The automated screen found no missing IDs, titles, topics/categories, or answer-key fields in the loaded records. However, **2,803 records outside batch 004 lack either option-specific rationale data or a Clinical Judgment Tip**. The remaining five records in the older v2 module already contain those fields.

## 4. Release and testing status

- Loader-level execution of all 15 modules: **passed** (3,307 unique IDs).
- Batch 004 key-to-option integrity checks: **passed** after the corrections above.
- Full content-quality remediation across the remaining modules: **not complete**.
- Browser-level rendering and scoring in Self Study, Timed Practice, CAT, and NCLEX Predictor: **not yet run**.
- Webmaster item-by-item review: **pending**.
- Educator approval: **not required**.

## Next implementation order

1. Complete the item-specific rationale and option-feedback quality in batch 004; treat the current generated text as review drafts.
2. Fix answer mappings and scoring logic across all 13 formats, including a full scan of every format beyond the batch 004 checks.
3. Replace generic explanations with clinically reasoned, option-specific rationales and Clinical Judgment Tips.
4. Rebuild the weak/repetitive portions of the remaining 2,808 records, beginning with batch 009 placeholder case studies, batch 006 repeated rationales, batch 005 case-study rationale reuse, the 150 malformed/generic numeric items, and matrix-grid template repetition.
5. Run browser-level rendering and scoring tests in all four exam modes.

## Scope and safety

No NurseLabs question text, options, rationales, or case scenarios were copied or lightly paraphrased. Publicly accessible resources may inform broad topic coverage, but QuickRN content must be independently authored. This branch contains draft remediation and audit documentation; it is not a clinical-release approval.
