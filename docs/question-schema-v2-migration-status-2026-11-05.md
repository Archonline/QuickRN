# Question Schema v2 migration status — 2026-11-05

## Scope

The audit mirrors the question-source scripts loaded by the four production exam pages (Self-Study, Timed Practice, CAT, Predictor). It does not count archived/rebuild JSON batches that are not loaded by those pages.

## Current CI audit

- Loaded unique records after corrected bootstrap: 3,969
- Records passing the complete v2 contract: 0
- Records requiring migration/completion: 3,969
- Duplicate IDs in the loaded page bank: 0
- Total field-level issues after evidence-based metadata and case/key migrations: 12,144

| Issue | Affected records |
|---|---:|
| Missing Client Needs classification | 603 (430 exact-label migrations applied) |
| Missing/invalid CJMM stage | 3,263 |
| Missing/invalid difficulty (1–5) | 433 |
| Missing/invalid scoring method | 3,969 |
| Missing option/response-specific rationales | 3,969 |
| Missing Clinical Judgment Tip | 3,969 |
| Missing overall rationale | 499 |
| Linked case has no usable patient/EHR stimulus | 0 (206 repaired) |
| Answer key includes a value not present in options | 0 (50 repaired) |

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

The base `questions.js` contains 665 records: 664 canonical IDs in the range `QR-000001`–`QR-000664`, plus `QR-002150`. NGN expansion batch 004 also contains `QR-002150`; the loader de-duplicates that shared ID, so the base-bank addition contributes exactly 664 additional unique IDs. This reconciles the gap exactly: 3,305 + 664 = 3,969 unique production records, with zero duplicate IDs in the corrected loaded bank.

The validator bootstrap was corrected in commit `457e16944e6efc9234d61f62c96634759205ce3c`. The corrected strict CI audit reports 3,969 unique records, zero valid records, and 17,774 field-level issues after canonicalizing supported difficulty labels and known CJMM aliases. Remaining issues include 2,213 missing/ambiguous CJMM stages, 433 missing/invalid difficulty values, 3,969 missing option-specific rationales, 3,969 missing Clinical Judgment Tips, 603 missing Client Needs classifications, and 499 missing overall rationales. Scoring, answer-key mismatches, and incomplete linked-case stimuli have been remediated. The original 50 mismatches were the partial-bank count; 383 more appear when the previously omitted base bank is included. The validator now emits a complete issue register, all answer-key mismatch IDs, all incomplete linked-case IDs, and duplicate-ID details.


## Safe metadata migration applied

The canonical adapter now converts only explicit legacy difficulty labels (`Easy`/`Low`/`Basic` → 1; `Moderate`/`Medium`/`Intermediate` → 3; `Hard`/`High`/`Advanced`/`Very hard` → 5), retaining the original label in `metadata.difficultyLabel`. It also canonicalizes recognized CJMM spelling/case aliases without assigning a stage where no stage exists. Unit tests cover this mapping. The next CI audit reduced invalid difficulty records from 3,969 to 433 and invalid CJMM records from 3,969 to 3,263; no guessed clinical metadata was inserted.


## Latest remediation pass

The schema adapter now uses existing `caseStudy`, `caseStudyContext`, `scenario`, and clinical-record fields as patient stimulus when present; this repaired all 206 linked-case stimulus failures (the final six were `QB2R-CS-001-01` through `QB2R-CS-001-06`, whose source records already contained a complete `caseStudy.scenario`). The validator now checks every option object's `id`, `value`, `text`, and `label` instead of only the first property. The remaining 50 genuine mismatches were confined to Select-N items in NGN expansion batch 004: each answer key explicitly contained a second response missing from its options. That keyed response was added to the corresponding option list, preserving the existing `selectN: 2` instruction. The current audit reports zero answer-key mismatches and zero incomplete linked-case stimuli.

Format-specific scoring is now deterministically migrated (`0/1` for single-best-answer formats and `plus_minus` for NGN multi-response/structured formats). CJMM stages are assigned only when the stem contains an explicit task cue matching a CJMM step; 1,022 additional records were mapped this way. The adapter also migrates any rationale already embedded in an option object. The unit tests cover these paths.

Latest strict CI audit: 3,969 unique records; 0 pass; 12,144 field-level issues remain. Outstanding issue counts: 3,969 missing option-specific rationales, 3,969 missing Clinical Judgment Tips, 2,213 missing/ambiguous CJMM stages, 603 missing Client Needs classifications, 433 missing/ambiguous difficulty values, and 499 missing overall rationales. These require item-level clinical authoring or educator adjudication; the validator remains blocking and no unsupported clinical content has been generated merely to make it pass.


The exact-label Client Needs migration maps a source category only when it is already one of the eight NCLEX Client Needs labels; it reduced missing Client Needs from 1,033 to 603 without inferring from broad subject labels such as Adult Health or Pediatrics. The latest CI run after this mapping reports 11,686 field-level issues.
