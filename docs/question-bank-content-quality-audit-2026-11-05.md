# QuickRN question-bank content quality audit — 2026-11-05

## Executive decision

Do not add another 1,000 records yet. The current `main` branch's question-bank progress tracker reports **3,305 unique top-level records**: 125 legacy records and 3,180 newly authored records. It reports zero duplicate IDs and states that the 2,000-record target has already been exceeded.

These are repository/loader audit figures recorded in `question-bank-rebuild/progress-2026-11-04.json`; they are not a fresh browser-session count. Structural loading and ID uniqueness do not establish clinical validity, item quality, or correct scoring.

NurseLabs may be used as a high-level benchmark for topic coverage and teaching quality. Do not copy or lightly paraphrase its protected question text, options, rationales, diagrams, or case scenarios. New QuickRN content must be independently authored and source/provenance tracked.

## Confirmed readiness gaps

- The progress tracker says new records remain drafts pending qualified nurse-educator review.
- Browser-level rendering and scoring verification across Self Study, Timed Practice, CAT, and NCLEX Predictor remains pending.
- A record count alone does not prove all 13 formats are clinically sound or correctly scored.
- The empty `questions.js` file is excluded from the count; the production bank is assembled from separate modules.

## Concrete content defects observed in source samples

### NGN batch 004 — `questions-bank-ngn-expansion-2026-11-04-batch-004.js`

The first Acute Ischemic Stroke bowtie item (QR-001920) has an answer-mapping defect:

- `correctAnswers.actions` includes “Airway, breathing, circulation, and change in clinical status,” which is also a monitoring option, rather than a second distinct nursing action.
- `correctAnswers.monitoring` also includes that same option, duplicating the role across two bowtie columns.
- The option sets include generic distractors such as “Unrelated chronic condition” and “Unrelated routine measurement,” which do not model realistic clinical decision-making.
- The sampled item has no item-specific rationale explaining the selected condition, each action, and each monitoring parameter.

This is a substantive scoring/content issue, not merely a formatting concern. Review the entire batch for repeated structural defects before treating its 499 records as production-quality NGN items.

### NGN numeric batch — `questions-bank-ngn-priority-2026-11-04-batch-007.js`

The 150 numeric-entry items are generated from a small set of formula templates with changing values. The sampled code assigns a generic rationale (“Use the stated formula, preserve units, and round as instructed…”) to every item. That does not explain the specific calculation, identify the relevant conversion or safety check, or address the clinical context. Each generated problem must be checked for stem/value alignment, correct answer, unit, rounding, tolerance, and a worked rationale.

### NGN case-study and supplement modules

The case-study and supplement modules use reusable topic templates. Reuse is acceptable for schema scaffolding, but not as a substitute for clinically distinct patient records and item-specific reasoning. Audit for repeated stems, recycled distractors, identical rationales, missing option-level explanations, and case cues that do not support the keyed answer.


## Quantified scan — NGN batch 004

A machine-assisted scan of the complete 500-record array in `questions-bank-ngn-expansion-2026-11-04-batch-004.js` found:

| Check | Result |
|---|---:|
| Records scanned | 500 |
| Records missing both `rationale` and `explanation` | 499 |
| Records missing option-specific rationale fields | 500 |
| Records containing generic placeholder distractor wording | 100 |
| Records missing `caseGroupId` | 0 |
| Records per format | 50 in each of 10 formats |

The scan is a content-quality screen, not a clinical correctness validator. It establishes that this 500-item module cannot be treated as finished clinical content even though its records have IDs and case-group metadata. The first record, QR-001920, also has a bowtie answer-mapping defect documented above.

## Required remediation sequence

1. Preserve all existing IDs and module boundaries; do not renumber valid records.
2. Build an item-level defect register with Question ID, module, defect type, severity, evidence, proposed correction, and review status.
3. Prioritize answer-key and scoring defects in all 13 formats, especially Bowtie, Matrix Single/Multiple, Cloze, Highlight, Trend, Select N, Drag-and-Drop, and Numeric Entry.
4. Replace generic or missing rationales with item-specific explanations. For multiple-choice items, explain why the correct answer is best and why each distractor is unsafe, incorrect, or lower priority.
5. Add a clinical-judgment tip tied to the cues and decision being tested; do not use one generic tip across unrelated items.
6. Keep automated schema validation, content-similarity checks, and nurse-educator approval as separate statuses.
7. Run the production loader and all four exam-mode rendering/scoring tests after remediation. Do not label drafts “educator reviewed” until an actual qualified reviewer has reviewed them.

## Release gate

The question bank is **not approved for clinical release** based on this audit. The current record count exceeds the prior 2,000-item target, but educator review and browser-level verification remain outstanding. The next content work should remediate and validate existing records before any further volume expansion.

## Provenance

This audit is based on the QuickRN repository's `main` branch files and tracker as inspected on 2026-11-05. It does not use or reproduce NurseLabs question content.