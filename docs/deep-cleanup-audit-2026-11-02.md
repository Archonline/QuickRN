# QuickRN deep cleanup audit — 2026-11-02

## Scope

Reviewed the application HTML entry points, JavaScript module loading, shared renderer/scoring helpers, CSS references, and question-bank source files on `main`. Changes are isolated on branch `audit/deep-cleanup-2026-11-02`; no question-bank records or production exam pages were deleted.

## Changes made

- Removed `css/quickrn-unified-exam.css`. No HTML page linked it and no JavaScript or stylesheet imported it. The four exam pages currently carry their active workspace styling inline.
- Corrected `timed.html` to load `questions-bank-v2.js` after `questions-ngn-supplement.js`, matching the bank-loading sequence used by Self-Study, CAT, and Predictor. Timed Practice was otherwise missing this bank file.
- Updated `tests/brand-system-contract.test.js` to stop requiring the retired `correct_view.html` page and deleted `quickrn-unified-exam.css` stylesheet. The contract now checks the 11 active pages and the shared brand stylesheet without asserting retired assets must exist.

## Findings: JavaScript

- Several function names recur across files (`canon`, `grade`, `read`, `esc`, `searchUrl`, `pick`, `init`, and `$`). Inspection shows these are module-local helpers with different contracts, not duplicate global definitions:
  - `quickrn-ngn-compat.js` canonicalizes question schemas and delegates grading to `quickrn-ngn-scoring.js`.
  - The scoring module's `canon` normalizes answer values against an option list; it is not the compatibility module's schema normalizer.
  - Storage `read` helpers use different keys and fallback semantics in platform hardening, metrics, and reporting.
  - Learning Center and dashboard lesson-library search helpers are page-specific.
- No safe mechanical helper consolidation was identified. Moving these helpers into a shared global utility without a dedicated regression suite risks changing exam behavior.
- `js/quickrn-data-backup.js` is not loaded by any current HTML page. It is retained for now because `tests/reporting-backup-contract.test.js` explicitly verifies its versioning and rollback protections. The dashboard test contract also confirms the backup panel itself was intentionally removed. Treat this as dormant/tested legacy functionality, not an active user-facing feature.

## Findings: exam interfaces

- `correct_view.html` was already removed from `main` in the preceding cleanup; no second standalone legacy exam entry point was found in the current page inventory.
- Self-Study, Timed, Predictor, and CAT share substantial markup and an inline split-workspace style block. They also contain mode-specific setup, selection, and presentation behavior. Extracting the common markup into a shared template or runtime renderer is a larger refactor, not a safe file deletion; defer until browser-level regression coverage exists for all four modes.
- The active exam pages load the shared renderer, compatibility/scoring layers, reporting, metrics, and exam application modules. Preserve these dependencies.

## Findings: CSS

- `css/quickrn-brand-system.css` is linked by the active application pages and is retained.
- `css/quickrn-unified-exam.css` had no inbound references and has been removed from this branch.
- Exam-specific responsive workspace rules remain inline in the four active exam pages; they were not removed or rewritten.

## Findings: question banks

- No bank file was deleted. The four exam modes depend on several separate bank scripts, and the missing `questions-bank-v2.js` include in Timed Practice has been corrected.
- Repeated short identifiers such as `h1`, `r1`, and `r2` occur inside highlight segments, matrix rows, and other nested answer structures. They are local child identifiers, not by themselves duplicate question IDs; deleting them would break item schemas.
- A fresh CI execution of `node scripts/validate-question-bank.js questions.js` loaded **383 records**, with **0 schema validation errors**, **0 quality warnings**, and **0 duplicate IDs normalized**. The validator reports **4,117 additional records required** to reach the 4,500 release target. This is the authoritative count from that run; it supersedes the earlier 389 estimate in `BETA_READINESS.md` until that document is reconciled.
- Validator format counts: Single Choice 309; Multiple Response 14; Select N 8; Matrix Single 4; Matrix Multiple 2; Cloze (Drop-down) 4; Dropdown Rationale 2; Bowtie 5; Extended Drag and Drop 3; Extended Multiple Response 8; Highlight 8; Trend 8; Numeric Entry 8.
- A separate renderer contract test reported **376 runtime questions loaded** and passed its checks for CAT/Predictor item sufficiency, supported formats, and linked-case normalization. This is a different test path/count from the validator's 383 records and needs reconciliation.
- No question-bank records should be removed or merged until the 383-versus-376 discrepancy is explained and the full 4,500 records are present and validated.

## CI results and follow-up

- On the first PR run, JavaScript syntax checks passed; CAT adaptive engine, shared renderer/format adapters, question-ID normalization, and the 376-question renderer contract passed.
- The brand-system contract initially failed because it still referenced the retired `correct_view.html` and `quickrn-unified-exam.css`. The test was updated to reflect the active application surface. A fresh PR run is still needed to confirm that fix and execute the steps that were skipped after the early failure.
- The production-bank validator ran and failed only the release count gate: 383 records versus 4,500 required. It reported no schema errors or quality warnings in the loaded records.
- Vercel reported success for the earlier audit commit. The updated test-contract commit has not yet been verified by a fresh workflow run.

## Verification still required

- Confirm a fresh GitHub Actions run passes the corrected brand-system contract and executes all remaining checks.
- Reconcile the 383 validator records with the 376 runtime-renderer records and the stale 389 figure in `BETA_READINESS.md`.
- Rebuild the missing 4,117 question records in validated 100-question batches; do not claim the bank is complete until the validator reports at least 4,500 and all 13 formats pass.
- Smoke-test Timed Practice to confirm the additional bank script is available and does not create ID collisions.
- Browser-test all four exam modes, including each NGN format, before merging any broader markup or JavaScript refactor.

## Safety decision

Only the unreferenced stylesheet was deleted in this audit. Dormant backup code, all active exam modules, all bank files, and historical backup artifacts were preserved because the available evidence does not justify destructive removal.
