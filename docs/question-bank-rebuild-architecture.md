# QuickRN question-bank rebuild

## Scope and safety

The rebuild is performed on `rebuild/validated-question-bank`, not directly on the production/default branch. The canonical active bank starts empty. Existing legacy bank content is not silently migrated or published. Historical content can be re-authored into the new schema only after clinical review.

## Runtime contract

- `data/question-bank.js` is the only active runtime data source.
- It exposes `QuickRNQuestionBank.items` and the compatibility read-only `window.questions` reference.
- `js/quickrn-question-schema-v2.js` is loaded before the bank.
- `js/quickrn-bank-startup-validator.js` runs immediately after the bank and blocks exam delivery if the schema, IDs, uniqueness, or any schema validation check fails.
- The shared renderer and scoring layer remain separate from clinical content.
- No candidate-generation or review queue may write directly to the active bank.

## Authoring and release gates

1. Generate candidate records outside `data/question-bank.js`.
2. Require all 13 QuickRN schema-v2 item formats to validate against the exact renderer contract.
3. Run automated structure, answer-key, option-reference, scoring, case-link, and renderer fixture tests.
4. Require an authorized nurse educator to verify clinical accuracy, evidence, answer key, distractors, and rationales.
5. Promote only approved records through a reviewed Git change.
6. Run CI and a browser smoke test for every supported format before release.

Automated validation is not clinical approval. A self-reported CLI reviewer label is not authorization. Protected GitHub review rules remain the approval authority.

## Format catalogue

The 13 QuickRN schema-v2 formats are product-specific renderer formats, not a claim that NCSBN publishes 13 mutually exclusive formats:

1. Single Choice
2. Multiple Response
3. Select N
4. Matrix Single
5. Matrix Multiple
6. Cloze (Drop-down)
7. Dropdown Rationale
8. Bowtie
9. Extended Drag and Drop
10. Extended Multiple Response
11. Highlight
12. Trend
13. Numeric Entry

## Current state

The canonical registry is intentionally empty pending the new validation and clinical-authoring pipeline. Do not populate it with legacy examples or unreviewed AI output.
