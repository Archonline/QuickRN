# QuickRN question-bank architecture

**Current reference — November 12, 2026**

This document describes the current repository organization. It supersedes older rebuild notes that described an empty canonical bank or a single-file runtime.

## Active runtime sources

The exam pages use the active question-bank modules under `data/`:

- `data/question-bank.js` — canonical standalone question records.
- `data/linked-case-studies.js` and `data/linked-case-studies-batch-2.js` — linked six-question clinical case studies.
- `data/organized-topic-batch-1.js` through `data/organized-topic-batch-7.js` — organized-topic question batches.
- `data/organized-topic-linked-cases.js` — linked cases associated with the organized-topic collection.

The README records the current expected inventory. Always verify the exam-page script tags and active-bank validator before changing that count.

## Supporting code

- `js/quickrn-question-schema-v2.js` defines the question schema.
- `js/quickrn-bank-startup-validator.js` validates the bank during startup.
- `js/quickrn-ngn-compat.js`, `js/quickrn-ngn-scoring.js`, and `js/shared-exam-renderer.js` provide compatibility, scoring, and rendering.
- `scripts/test-active-question-bank.js`, `scripts/test-question-bank-startup.js`, and `scripts/test-question-format-fixtures.js` support automated checks.

## Candidate workflow

The `question-candidates/` directory contains candidate-generation guidance and pending/approved/rejected workflow locations. Candidate records must not be treated as active exam items merely because they exist in the repository.

## Historical material

`question-bank-rebuild/` contains archived draft batches, topic blueprints, manifests, and ID migration records. `reports/` contains audit and batch reports. These files are retained for traceability and possible recovery; they are not automatically loaded by student exam pages and are not evidence of clinical approval.

Older files in this directory may contain duplicate draft records or stale progress statements. Use the active `data/` files and current CI results—not archived batch counts—to establish the live inventory.

## Release safety

Automated schema and renderer tests establish structural compatibility only. They do not establish clinical accuracy or educator approval. Do not publish draft or archived items into the active bank without checking answer keys, rationales, source support, and format-specific rendering.
