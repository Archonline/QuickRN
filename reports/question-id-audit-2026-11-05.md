# QuickRN question ID integrity audit — 2026-11-05

## Result

- Active unique production questions after repair: **3,992**
- Canonical active ID format: `QR-######`
- Highest assigned active ID: `QR-004602`
- Conflicting question records reassigned: **23**
- Legacy/noncanonical active question IDs migrated: **60**
- Exact duplicate source record consolidated: **1**
- New canonical IDs assigned in this pass: **83**
- Legacy mapping aliases retained in the migration register: **84**
- Existing IDs retained wherever there was no collision or legacy-format issue.

## Conflicts repaired

| Previous ID | Preserved record | Reassigned record | New ID |
|---|---|---|---|
| `QR-001291` | `questions-ngn-supplement.js` | Curated bow-tie in `questions-bank-v2-curated.js` | `QR-004520` |
| `QR-001420` | `questions-bank-expansion-2026-11-04-batch-002.js` | First conflicting record in batch 003 | `QR-004521` |
| `QR-001421` | `questions-bank-expansion-2026-11-04-batch-002.js` | Second conflicting record in batch 003 | `QR-004522` |
| `QR-001920`–`QR-001939` | Traditional expansion batch 004 | First 20 records in NGN expansion batch 004 | `QR-004523`–`QR-004542` |
| `QR-002150` | Base-bank alcohol-withdrawal bow-tie | Exact duplicate in NGN expansion batch 004 | Duplicate copy removed; original retained |

## Legacy ID migrations

- Curated bank IDs `QB2R-*` are now `QR-004543`–`QR-004580`.
- Supplemental IDs `QR-TR-*`, `QR-NE-*`, `QR-SN-*`, and `QR-DR-*` are now `QR-004581`–`QR-004596`.
- Shared NGN case-study add-on IDs `QR-CS-ADULT-001-1`–`QR-CS-ADULT-001-6` are now `QR-004597`–`QR-004602`.

Original identifiers are retained in each affected record's `legacyId` or `previousQuestionId` and in `question-bank-rebuild/id-migration-map.json`. The detailed per-record mapping is in `question-bank-rebuild/question-id-migration-2026-11-05.json`.

## Validation and compatibility

- The runtime ID normalizer now assigns canonical numeric IDs for duplicate, missing, or noncanonical IDs instead of creating `-DUP` suffixes.
- The integrity audit flags noncanonical active question IDs.
- The strict bank validator now loads the same complete bank-module sequence used by Self Study, Timed Practice, CAT, and NCLEX Predictor.
- Historical rebuild/archive snapshots are intentionally unchanged; they remain historical copies and are not production-loaded datasets.
- No question content, answer key, scoring rule, or case-group identifier was intentionally changed by this ID migration.
