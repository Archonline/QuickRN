# QuickRN AI Question Generation and Nurse-Educator Review

Status: implementation specification; not deployed.

## Goal

Generate original NCLEX-RN practice-question candidates from aggregate learning-coverage gaps while students use QuickRN. Every AI-generated item remains outside the active question bank until an authorized nurse educator/admin approves it.

## Repository findings (2026-11-11)

- The site is a static HTML/JavaScript application, not a conventional Node/Next application: `index.html` and `dashboard.html` load browser scripts directly.
- Firebase Authentication is initialized in `index.html` (Firebase project ID: `quickrnapp`). This establishes authentication only; the inspected pages do not establish that Firestore, Cloud Functions, or a trusted server-side AI endpoint is configured.
- `dashboard.html` loads the root `question-bank.js`, `js/quickrn-ngn-case-study-addon.js`, and question-bank normalizers.
- The README documents a shared question renderer/scoring layer and existing NGN support for matrix/grid, highlight text, cloze/drop-down, extended drag-and-drop, bowtie, numeric entry, multiple response, and linked case studies.
- A repository integrity-audit report dated 2026-11-10 says the effective runtime bank had 3,972 records and that no language model was configured in that audit. The report also explicitly notes that structural checks are not clinical validation and that no nurse-educator approval gate existed in that audit.
- Root `question-bank.js` was readable through the GitHub connector but returned empty content; the production question data and complete runtime schema therefore have not yet been safely inspected.

## NCLEX alignment and format catalogue

The 13 entries below are QuickRN authoring templates, not a claim that NCSBN publishes a fixed list of exactly 13 mutually exclusive item types. Use the current 2026 NCLEX-RN Test Plan (effective April 1, 2026–March 31, 2029) and current NCLEX Candidate Tutorial as the authority. NCSBN identifies five clinical-judgment item types: extended multiple response, extended drag-and-drop, cloze (drop-down), enhanced hot spot (highlighting), and matrix/grid. Stand-alone items, case studies, and multimedia exhibits are also used. Do not market this catalogue as an official NCSBN list.

QuickRN authoring templates:
1. Single-best-answer multiple choice
2. Multiple response / SATA
3. Extended multiple response
4. Ordered response
5. Extended drag-and-drop
6. Numeric entry / dosage calculation
7. Cloze / drop-down
8. Drop-down table
9. Matrix / grid (single response per row)
10. Matrix / grid (multiple response per row)
11. Enhanced hot spot / highlighting
12. Bow-tie
13. Trend item

Linked six-item NGN case studies are a case-set structure, not a fourteenth mutually exclusive response format. Multimedia exhibits (EHR notes, vitals, labs, medication records, charts, tables, and images) are stimulus components that may accompany supported item formats. Map each template to the existing renderer's canonical type before generation is enabled. If a format is not implemented by the renderer, mark it unsupported; never silently degrade it into a multiple-choice item.

## Safe architecture

1. **Learning signal:** collect only aggregated, de-identified topic/client-needs/clinical-judgment performance counts. Do not send names, email addresses, free-text student notes, exam answer histories, or other direct identifiers to the model. Do not generate from protected live NCLEX content or reproduce secure exam items.
2. **Server-side generation:** call the AI provider only from a trusted server endpoint (prefer Firebase Cloud Functions or an equivalent authenticated server). Store API credentials in server secrets; never put them in browser JavaScript, HTML, localStorage, or a public repository.
3. **Structured output:** require schema-validated JSON with a stable item ID, format, stem/stimulus, options/response model, answer key, scoring method, rationale, distractor rationales where applicable, client-needs category, topic, CJMM function, difficulty, source/reference notes, and generation metadata.
4. **Validation:** reject malformed schemas, missing keys, invalid response counts, impossible scoring, ambiguous or multiple-best answers, inconsistent rationales, unsupported formats, near-duplicates, unsafe clinical advice, missing units, and unsupported claims. Automated checks are a screening layer only, not proof of clinical accuracy.
5. **Review queue:** save valid candidates with status `pending_review`. Keep them in a separate collection/table from the active question bank. Admins can preview, edit, approve, reject, or request revision. Require an authenticated reviewer with an explicit educator/admin role.
6. **Publish transaction:** on approval, re-check authorization, schema, duplicate status, and version; write the approved item to the active bank and mark the candidate `approved` atomically. Record reviewer UID, timestamp, version, and audit event. Reject/revise must never publish.
7. **Student isolation:** clients must not be able to read candidate answer keys, review notes, prompts, or pending items. Students only read published bank items through existing exam pathways.
8. **Audit and rollback:** retain immutable status history, reviewer decisions, source/version metadata, and a way to unpublish a defective item without deleting the audit trail.

## Suggested data model

- `aiQuestionCandidates/{candidateId}`: item payload, status, format, topic tags, validation results, duplicate-check result, generation model/version, createdAt, updatedAt, reviewer fields (server-written).
- `aiQuestionReviewEvents/{eventId}`: candidateId, action, reviewerUid, timestamp, reason, previousVersion, newVersion.
- `questionBank/{questionId}`: only approved/published items in the canonical schema expected by QuickRN's renderer.
- `questionGenerationJobs/{jobId}`: aggregate topic gap, requested formats, job status, counts, timestamps; no student identifiers.

Security rules must deny student writes to all four collections. Candidate and review-event reads/writes are restricted to server code and authorized admins. Publication should occur only in trusted server code, not in client-side JavaScript.

## Admin review experience

- Queue filters: pending, needs revision, rejected, approved; topic, format, difficulty, generated date.
- Preview exactly as a student would see it, plus answer key, rationale, scoring rubric, source notes, and validation findings in an admin-only panel.
- Actions: edit draft, approve & publish, request revision, reject, and unpublish.
- Approval confirmation identifies the reviewer and exact version being published.
- Bulk approval is disabled by default; if later introduced, require per-item validation and explicit confirmation.

## Quality gates

- Format-specific structural validator for all 13 templates.
- One defensible keyed answer or response set; correct scoring metadata.
- Rationales explain the clinical reasoning and why distractors are less appropriate.
- Dosage/math items include units, rounding rules, and independently recomputed expected values.
- Clinical facts checked against current authoritative references and local policy context; references and access dates retained for educator review.
- Duplicate and semantic-similarity check against the entire published bank and pending queue.
- Bias, age/pregnancy/pediatric context, contraindications, and scope-of-practice checks.
- No automatic publication, even when every automated check passes.

## Implementation phases

1. **Schema audit:** inspect real question-bank records, renderer type switches, scoring functions, Firebase auth/role handling, and hosting/deployment setup. Do not edit the live bank.
2. **Backend foundation:** confirm Firestore/Cloud Functions availability; configure server-only AI secrets, admin claims, candidate storage, and security rules.
3. **Generator + validators:** implement one format at a time against the real canonical schema; add tests for all supported formats.
4. **Admin queue:** build preview/edit/review/publish UI with audit logging.
5. **Shadow mode:** generate candidates without exposing them to students; nurse educators review quality and tune prompts.
6. **Controlled release:** enable limited generation, monitor rejection/defect/duplicate rates, and expand only after educator sign-off.

## Acceptance criteria

- No candidate can appear in a student exam before admin approval.
- A student cannot read answer keys or candidate records through direct database/API access.
- Every approved item has a named authorized reviewer, timestamp, version, format, answer key, scoring data, and rationale.
- All enabled formats render and score correctly through the existing QuickRN engine.
- Unsupported formats fail closed rather than falling back to another format.
- AI provider keys are absent from all client bundles and public files.
- Automated checks never replace nurse-educator review.
- Existing published questions, exam modes, CAT simulation, scoring, and student progress remain unchanged.

## Authoritative references

- 2026 NCLEX-RN Test Plan: https://www.ncsbn.org/public-files/2026_RN_Test-Plan_English-F.pdf
- NCLEX test plans: https://www.nclex.com/test-plans.page
- NCSBN current item-format explanation: https://ncsbn.zendesk.com/hc/en-us/articles/14689546992023-What-is-the-current-format-and-item-types-for-the-NCLEX
- NCLEX FAQ: https://www.nclex.com/faqs.page
