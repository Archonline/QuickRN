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

## Approval and publishing procedure

1. Keep the candidate in `pending/` while it is reviewed.
2. A nurse educator/admin reviews the exact file/version in a GitHub pull request. Record reviewer identity, date, decision, and rationale in the candidate's `review` object.
3. If rejected, move the file to `rejected/`; do not copy any question fields to the active bank.
4. If approved, archive the reviewed file in `approved/`, then separately copy the approved `question` object into the active question bank using the existing bank's actual structure and a unique canonical ID.
5. Verify the published item renders and scores correctly in Self-Study, Timed, Predictor, and CAT modes. Keep the approved source and PR/commit as the audit record.

**Important limitations:** this is a repository-based workflow, not a secure in-app approval system. A browser-only JavaScript app cannot securely protect approval actions or private answer keys. Do not add candidate files to script tags, import them into exam pages, or expose them through a student-facing candidate index. GitHub review/merge permissions are the approval control for this interim workflow. Never put AI-provider keys or student-identifiable data in candidate files.

The active root `question-bank.js` and its runtime contract were not changed by this setup. Confirm the live bank source and record shape before any automated publishing step is added.
