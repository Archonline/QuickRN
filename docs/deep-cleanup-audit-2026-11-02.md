# QuickRN deep cleanup audit — 2026-11-02

## Scope

Reviewed the application HTML entry points, JavaScript module loading, shared renderer/scoring helpers, CSS references, and question-bank source files on `main`. Changes are isolated on branch `audit/deep-cleanup-2026-11-02`; no question-bank records or production exam pages were deleted.

## Changes made

- Removed `css/quickrn-unified-exam.css`. No HTML page linked it and no JavaScript or stylesheet imported it. The four exam pages currently carry their active workspace styling inline.
- Corrected `timed.html` to load `questions-bank-v2.js` after `questions-ngn-supplement.js`, matching the bank-loading sequence used by Self-Study, CAT, and Predictor. Timed Practice was otherwise missing this bank file.

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
- The bank files include spread-defined and nested records, so a simple text-pattern count is not a sufficient full runtime inventory. The release gate remains the executable `scripts/validate-question-bank.js` across the exact production script sequence. Do not remove or merge bank records until the runtime validator confirms record identity, cross-file collisions, schema validity, and all 13 formats.
- `BETA_READINESS.md` currently reports 389 loaded records and a 4,500 target. That reported total must be reconciled against a fresh validator run before declaring the bank count complete.

## Verification still required

- Run both GitHub Actions workflows on this branch.
- Run `node scripts/validate-question-bank.js` against the production bank and inspect the generated report.
- Smoke-test Timed Practice to confirm the additional 20-item bank is available and does not create ID collisions.
- Browser-test all four exam modes, including each NGN format, before merging any broader markup or JavaScript refactor.

## Safety decision

Only the unreferenced stylesheet was deleted in this audit. Dormant backup code, all active exam modules, all bank files, and historical backup artifacts were preserved because the available evidence does not justify destructive removal.
