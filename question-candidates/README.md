# QuickRN question-candidate workflow

This directory is deliberately **not loaded by any student exam page**. Candidate questions stay as JavaScript files here until a nurse educator/admin has reviewed them.

## Folders

- `pending/`: AI- or author-generated candidates awaiting review.
- `approved/`: reviewed source snapshots and approval metadata. This is an archive, not a runtime bank.
- `rejected/`: rejected candidates retained for audit and prompt-quality analysis.
- `templates/`: authoring templates; never load these into an exam.

## Candidate file contract

Each `.js` file in `pending/` must use CommonJS and export:

```js
module.exports = {
  review: {
    status: "pending_review",
    submittedAt: "2026-11-11T00:00:00.000Z",
    submittedBy: "ai-generator-or-author",
    reviewer: null,
    reviewedAt: null,
    decisionNote: ""
  },
  question: {
    // QuickRN legacy question fields plus schema-v2 metadata/interaction/rationales.
  }
};
```

The `question` must preserve the existing QuickRN question schema. The canonical 13 schema-v2 formats are defined by `js/quickrn-question-schema-v2.js`; do not invent new type strings or silently convert an unsupported format.

## Validate candidates

From the repository root, run:

```bash
node scripts/validate-question-candidates.js
```

The validator checks pending files against the existing schema-v2 validator, required review status, canonical IDs, and duplicate IDs. It does **not** establish clinical correctness; an educator must verify the keyed answer, rationale, calculations, references, scope of practice, and patient-safety implications.

## Generate a batch with an AI model

Use [BATCH-GENERATION-PROMPT.md](BATCH-GENERATION-PROMPT.md) to request a JSON batch with a `questions` array, unique IDs, and an explicit format distribution. The prompt guides the model; it does not connect an AI provider to QuickRN or approve any item.

## Import a batch of AI drafts

Save the model response as JSON containing either a top-level array of question objects or `{ "questions": [...] }`. Each item uses the same question schema and unique `QR-######` ID as a single import. Run:

```bash
node scripts/import-question-batch.js ai-question-batch.json
```

Optionally identify the submitter:

```bash
node scripts/import-question-batch.js ai-question-batch.json --submitted-by educator-draft
```

The batch importer checks the entire batch against schema-v2 and checks IDs against existing pending candidates before writing any files. If any item fails, it writes none. Candidate modules in the pending folder are inspected as data-only JSON modules; the importer does not execute them. A successful batch creates one `.js` file per candidate, all with `pending_review` status. It does not call an AI service or modify the active bank.

## Record an educator review decision

After an authorized educator/admin has reviewed a candidate, record the decision locally:

```bash
node scripts/review-question-candidate.js QR-123456 approve --reviewer "Educator name or staff ID" --note "Clinical rationale and references verified"
```

Use `reject` instead of `approve` to reject it. Both decisions require a reviewer label and a non-empty note. The script moves the candidate from `pending/` to `approved/` or `rejected/`, updates its review metadata, and appends a JSONL audit entry to `review-audit.jsonl`. Approval also re-runs schema-v2 validation. Rejected candidates are never eligible for publication.

**Security boundary:** this local script records a supplied reviewer identity; it does not authenticate that person or enforce administrator roles. For actual approval authority, restrict write/merge access to the candidate branch and require an authorized nurse educator/admin's GitHub pull-request approval under repository branch protection. The PR review and commit history are the access-controlled audit evidence.

Approval only creates an approved archive. It does not update `question-bank.js`. Publishing remains a separate, deliberate maintainer action after checking the active bank's real data contract and running renderer/scoring tests.

## Approval and publishing procedure

1. Keep the candidate in `pending/` while it is reviewed.
2. A nurse educator/admin reviews the exact file/version in a GitHub pull request. Record reviewer identity, date, decision, and rationale in the candidate's `review` object.
3. If rejected, move the file to `rejected/`; do not copy any question fields to the active bank.
4. If approved, archive the reviewed file in `approved/`, then separately copy the approved `question` object into the active question bank using the existing bank's actual structure and a unique canonical ID.
5. Verify the published item renders and scores correctly in Self-Study, Timed, Predictor, and CAT modes. Keep the approved source and PR/commit as the audit record.

**Important limitations:** this is a repository-based workflow, not a secure in-app approval system. A browser-only JavaScript app cannot securely protect approval actions or private answer keys. Do not add candidate files to script tags, import them into exam pages, or expose them through a student-facing candidate index. GitHub review/merge permissions are the approval control for this interim workflow. Never put AI-provider keys or student-identifiable data in candidate files.

The active root `question-bank.js` and its runtime contract were not changed by this setup. Confirm the live bank source and record shape before any automated publishing step is added.

## Draft a question with AI and import it

1. Use [GENERATION-PROMPT.md](GENERATION-PROMPT.md) with an AI model to draft one original question as JSON. Supply the topic, client-needs category, CJMM stage, difficulty, exact format string, and a unique `QR-######` ID.
2. Save the model's JSON response to a local file, for example `draft-question.json`.
3. From the repository root, run:

```bash
node scripts/import-question-candidate.js draft-question.json
```

For a batch, use `scripts/import-question-batch.js` as documented above.

Optionally identify the source:

```bash
node scripts/import-question-candidate.js draft-question.json --submitted-by educator-draft
```

The importer parses JSON as data (it does not execute model-produced code), normalizes and validates it with the existing schema-v2 module, checks the pending queue for duplicate IDs, and writes a JavaScript module to `question-candidates/pending/qr-######.js`. It refuses candidates that fail structural validation. Then run:

```bash
node scripts/validate-question-candidates.js
```

This is a safe AI-assisted **draft intake** workflow, not an automated model integration: it does not call an AI API, run continuously in the background, or publish questions. AI provider integration requires a server-side runtime and secret management; do not put API keys in browser JavaScript or commit them to this repository.
