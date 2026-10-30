# QuickRN Beta Readiness Checklist

This checklist defines the minimum release gate for a closed beta. A green automated test run is necessary, but it does not replace clinical-content review or browser-based end-to-end testing.

## Release blockers

- [ ] All four exam modes (Self Study, Timed, CAT, Predictor) use the shared NGN format contract and render every supported item type.
- [ ] A reviewer has manually tested one real question of each available item format: single choice, multiple response, matrix/grid, cloze/drop-down, ordered response, bowtie, highlight, and trend.
- [ ] Each test verifies answer entry, required-answer validation, submission, scoring, rationale/review, and persistence where applicable.
- [ ] Case-study tabs and linked items retain the correct patient context and do not leak data between cases.
- [ ] No malformed or incomplete question is silently presented as a valid item. Invalid items are logged for review and excluded or safely handled.
- [ ] The real question bank validation report has been reviewed; all answer-key/schema failures are resolved or explicitly quarantined.
- [ ] Calendar roadmap generation, saving, editing, and reload work from the same browser profile.
- [ ] Dashboard metrics reconcile with saved exam history; empty history is not represented as a real 0% prediction.
- [ ] Contextual YouTube recommendations reflect the current question topic and do not reuse a fixed unrelated link.
- [ ] Navigation, refresh, browser back/forward, and session completion work on desktop and mobile widths.

## Clinical-content quality gate

- [ ] A qualified nursing educator reviews clinical accuracy, rationales, answer keys, and sentence construction.
- [ ] Grammar edits preserve the clinical meaning, urgency, patient details, and answer key.
- [ ] NGN item structures are internally consistent (for example, matrix rows/columns, bowtie selections, highlight targets, and ordered-response lists).
- [ ] No item is advertised as an official NCSBN/NCLEX item unless licensed and authorized.

## Beta safety and privacy

- [ ] Display a clear beta notice: content and scoring are for educational practice, not diagnosis, treatment, or a guarantee of NCLEX results.
- [ ] Do not ask testers to enter real patient-identifiable information (PHI).
- [ ] Explain that browser-local progress/metrics are stored on that device/browser and may not sync across devices or users.
- [ ] Provide a visible way to report a question, answer-key, wording, or technical issue.
- [ ] Confirm the deployed site uses HTTPS and does not expose secrets or private keys in client-side files.

## Automated checks

- [ ] NGN renderer validation workflow passes.
- [ ] QuickRN Coach and UI Tests workflow passes.
- [ ] Question-bank validation artifact is reviewed, not merely generated.
- [ ] No console errors occur during the exam smoke test.
- [ ] Test the deployed URL, not only the GitHub source branch.

## Suggested closed-beta sequence

1. Internal smoke test with a small, known set of test accounts.
2. Educator review of a representative sample from every question format and every client-needs domain.
3. Invite a small group of testers; collect structured issue reports for one testing cycle.
4. Fix release-blocking defects and rerun the complete regression suite.
5. Expand access only after the clinical-content and data-integrity gates are signed off.

## Current product limitations to disclose

- Client-side study analytics and progress are browser-local unless a shared backend is added.
- The CAT/Predictor model is an instructional simulation, not the official NCLEX adaptive algorithm or a validated probability of passing the licensure exam.
- Automated checks can detect structural problems, but cannot certify clinical accuracy or reliably judge natural-language quality. Human clinical review remains required.
