# Question Schema v2 migration status — 2026-11-05

## Scope

The audit mirrors the question-source scripts loaded by the four production exam pages (Self-Study, Timed Practice, CAT, Predictor). It does not count archived/rebuild JSON batches that are not loaded by those pages.

## Current CI audit

- Loaded records: 3,305
- Records passing the complete v2 contract: 0
- Records requiring migration/completion: 3,305
- Duplicate IDs in the loaded page bank: 0
- Total field-level issues: 17,913

| Issue | Affected records |
|---|---:|
| Missing Client Needs classification | 633 |
| Missing/invalid CJMM stage | 3,305 |
| Missing/invalid difficulty (1–5) | 3,305 |
| Missing/invalid scoring method | 3,305 |
| Missing option/response-specific rationales | 3,305 |
| Missing Clinical Judgment Tip | 3,305 |
| Missing overall rationale | 499 |
| Linked case has no usable patient/EHR stimulus | 206 |
| Answer key includes a value not present in options | 50 |

## Implementation state

- Canonical v2 adapter is loaded by all four exam pages.
- Legacy fields are retained; the adapter adds canonical blocks and bridges canonical prompts, options, answer keys, rationales, scoring, patient profile, and EHR tabs to the existing renderer contract.
- Runtime integrity reporting exposes schema issue counts and samples.
- A strict validator is part of CI and fails while any loaded record violates the contract.
- Unit tests cover legacy normalization and v2-only renderer compatibility.

## Migration limitations and release gate

The adapter is a lossless runtime migration layer; it does not claim to have authored missing clinical content. Do not fill CJMM stage, difficulty, Client Needs, scoring, option rationales, or Clinical Judgment Tips with arbitrary defaults. These values affect clinical teaching, scoring, and analytics and must be supported by the item's actual content and checked by a qualified reviewer.

The bank is **not Schema-v2 production-ready**. Complete the missing fields and repair the 50 answer-key mismatches and 206 incomplete linked-case stimuli, then rerun `node scripts/validate-question-schema-v2.js`. The strict CI gate must pass before beta/release use.

The loaded production page bank count (3,305) differs from the previously reported 3,969 total. The 3,305 figure is the reproducible count from the scripts currently included on all four exam pages; reconcile the remaining 664 records against the rebuild/archive batches before claiming the larger count as active production inventory.


## Inventory discrepancy root cause (confirmed 2026-11-05)

The earlier 3,305-record audit had a validator bootstrap defect: `questions.js` attaches its base array to the original VM `window`, but the validator replaced `context.window` before copying `window.questions` to the shared context. As a result, the audit omitted the base bank.

The base `questions.js` contains 665 records: 664 canonical IDs in the range `QR-000001`–`QR-000664`, plus `QR-002150`. The NGN expansion batch 004 also contains `QR-002150`, so the base-bank addition contributes 664 additional unique IDs and one duplicate-ID collision. This accounts for the reported 664-record gap: 3,305 + 664 = 3,969 unique inventory records, with the duplicate `QR-002150` needing resolution rather than double-counting.

The validator bootstrap was corrected in commit `457e16944e6efc9234d61f62c96634759205ce3c`. The validator now also emits a complete issue register, all answer-key mismatch IDs, all incomplete linked-case IDs, and duplicate-ID details. The strict audit must be rerun against this corrected inventory before replacing the counts in the tables above.
