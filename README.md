# QuickRN

QuickRN is a browser-based NCLEX-RN practice and NGN learning simulator. It includes Self-Study, Timed Practice, Predictor, and CAT practice modes.

## Current implementation notes

- Shared question renderer and scoring layer are used by the exam modes.
- NGN formats include matrix/grid, highlight text, cloze/drop-down, extended drag-and-drop, bowtie, numeric entry, and multiple-response formats.
- Linked case-study questions use a split EHR/question layout. Nurses’ Notes, Vital Signs, Lab Results, Orders, and other available clinical-record tabs remain available across linked questions; video lessons remain in the left pane. Fixed-length exams include sequential case-study groups, and CAT practice targets three linked groups by item 85 when the bank has sufficient groups.
- Answer feedback distinguishes the best answer from distractors and reports the scoring method and points earned.
- Exam summaries include item accuracy, partial-credit score, client-needs performance, clinical-judgment stage performance, difficulty breakdown, question-format counts, timing, and item review.
- Dashboard accuracy history plots fully-correct item accuracy; it does not relabel partial-credit scores as item accuracy.
- Lab results show source-provided ranges where available. Typical adult ranges are added only for recognized common tests and units; pediatric, pregnancy, age-specific, and local laboratory ranges must be verified. Unknown ranges are flagged instead of fabricated.

## NGN scoring methods

QuickRN implements practice versions of the three NCSBN scoring approaches:
- **Plus/minus:** correct selections add points and incorrect selections subtract points; scores are floored at zero.
- **0/1:** each keyed response earns one point; incorrect responses earn zero.
- **Rationale:** dependent response elements earn credit only when the complete linked pair is correct.

The scoring method is surfaced in submitted-answer feedback. Item-level keys and rationales still depend on the quality and completeness of the question-bank metadata.

## CAT practice disclaimer

The CAT mode uses an instructional ability-estimation model, difficulty matching, an 85-item minimum checkpoint, a 150-item maximum, and a five-hour time limit. It is a simulator, not the NCSBN/Pearson VUE operational CAT algorithm. It does not model the 15 unscored pretest items, secure calibrated item pool, or proprietary operational decision algorithm. Any readiness or passing-likelihood value is an educational estimate and must not be represented as an official NCLEX result.

## Latest update — November 1, 2026

- Moved option-by-option rationales into the right-hand rationale pane and removed duplicated inline rationale rendering.
- Avoided repeating the same generic question rationale beneath every distractor when the bank has no option-specific explanation.
- Cleaned leading topic/category labels from clinical scenario content.
- Increased clinical scenario typography to 18px and bolded the scenario text.
- Preserved the selected EHR tab across linked NGN case-study questions; kept video lessons in the left pane.
- Added typical adult reference ranges for recognized structured and line-based laboratory results; unknown ranges remain explicitly flagged.
- Added explicit Lab Results and Orders tabs and retained the selected EHR tab across a linked case sequence.
- Adjusted fixed-form NGN item selection to include sequential case-study groups and stand-alone clinical-judgment items; CAT targets three linked case groups by item 85 when the question bank supports them.
- Exposed the per-item scoring method (plus/minus, 0/1, or rationale) in answer feedback.
- Expanded test summaries with difficulty and Clinical Judgment Measurement Model performance, total items, and average time per answered item.
- Reworked dashboard accuracy-history plotting and added a lightweight SVG fallback when Chart.js is unavailable.
- Applied the CAT run-out-of-time rule: fewer than 85 completed items is a failing practice outcome; after 85, time expiry uses the final practice ability estimate.

## Official reference documents

- [2026 NCLEX-RN Test Plan](https://www.nclex.com/files/2026_RN_Test%20Plan_English-F.pdf)
- [NCLEX Frequently Asked Questions — formats, laboratory reference ranges, and scoring](https://www.nclex.com/faqs.page)
- [NCSBN scoring models](https://ncsbn.zendesk.com/hc/en-us/articles/14690447982359-What-are-the-current-scoring-models)

## Quality and safety notes

- Reference ranges vary by laboratory, method, units, age, sex, pregnancy status, and clinical context. Verify the correct range before using an item for clinical teaching.
- Never treat QuickRN's score, CAT estimate, or readiness probability as an official NCLEX result.
- The simulator is an educational tool and does not replace clinical judgment, institutional policy, or current evidence-based references.


## November 2026 interface and study workflow updates

- Adopted the Amber & Amethyst palette from the supplied swatch: deep purple `#6C4B9F`, amber `#E39C14`, light mist `#D3DDEB`, status green `#1B5E43`, and text gray `#4A4A4A`.
- Removed the injected duplicate sidebar from Calendar and removed the shared sidebar rail from Self-Study, Timed Practice, Predictor, and CAT so exam workspaces use the viewport.
- Kept every exam question and answer workspace in the right pane; clinical records remain in the left pane. Timed Practice, Predictor, and CAT advance immediately after a submitted response and reserve rationales, remediation, and video links for the exam summary.
- Removed redundant best-answer and generic clinical-principle / study-approach blocks from the per-item rationale display. Video recommendations no longer persist between question changes; review resources are collected in the final question review.
- Restored the previously empty root `questions.js` with a canonical linked six-item NGN case-study group, shared EHR records, `caseGroupId`, `caseQuestionNumber`, and Clinical Judgment Measurement Model stages. Case-group key detection and EHR rendering accept common alternate schema names.
- Added a dedicated Learning Center with Child Health, Adult Health, and Pharmacology body-system topic maps, four topic-specific search phrases, embedded playback for supplied/verified YouTube video IDs, a notes workspace with browser-local autosave, export, and browser speech dictation. Speech dictation is transcription, not a generative AI service. Search-result links open YouTube; to embed and autoplay a specific result, paste its video URL into the player because a YouTube Data API key / verified video ID is not configured.
- Moved the Clinical Study Coach and seven-day remediation roadmap to Calendar. Generated roadmap activities are saved into the same calendar event store as personal reminders.
- Removed the dashboard's preparation-prompt strip and profile shortcut beside Sign Out.


## November 2026 dependency and navigation audit

- **Saved Questions sidebar:** saved.html already has a complete static sidebar. Removed the injected quickrn-sidebar.js from that page so it uses exactly one navigation rail. Other pages that rely on the shared injected sidebar retain it.
- **Bookmarks and notes:** exam-app storage now reads both its dedicated browser keys and the legacy dashboard-compatible studentStats.favorites / questionNotes fields. Saving an answer, bookmark, or note writes both representations, so Saved Questions can render the same saved IDs and notes. This is browser-local compatibility, not cloud sync.
- **Feedback reports:** exam feedback writes to quickrn_question_reports; Saved Questions' reported-item panel and Reports inbox read that same key. Reports are saved locally and can be exported from Reports; they are not automatically transmitted to a server or team inbox.
- **Analytics:** question-level performance uses quickrn-question-metrics.js and the dashboard reads its local ledger. Exam trend graph reads examHistory / predictorHistory but now filters to completed records with a completion timestamp or explicit completion flag and a nonzero item count. finishExam writes completed=true and completionStatus=completed. In-progress sessions and individual unsummarized answers do not create trend points.
- **CAT / Predictor presentation:** both modes hide the setup/question-selection modal, auto-start after the question bank finishes loading, and suppress QID, question-type/difficulty labels, question-format filter, and the feedback shortcut. CAT retains its adaptive selection logic; Predictor retains its fixed-form selection logic.
- **Answer labels:** shared answer-choice rendering now displays A., B., C., D., etc. consistently across all exam modes.
- **Help and legal:** removed the Help page's top header/hero banner and added Terms of Use and Privacy Policy sections to the existing Help / Disclaimer page. The legal copy reflects the inspected implementation: Firebase Authentication and Firebase Analytics are configured on sign-in; study progress, bookmarks, notes, calendar data, metrics, and feedback reports are browser-local; feedback is not automatically sent; no Firestore-backed study-data sync was found in the inspected code. Legal text is a beta draft and needs qualified counsel review before public launch.

### Dependency scope checked

Dashboard, Calendar, Learning Center, Saved Questions, Help, Reports, Self-Study, Timed Practice, CAT, and Predictor were inspected for navigation and script loading. Core dependencies include questions.js, questions-ngn-supplement.js, quickrn-question-bank-normalizer.js, quickrn-question-id-normalizer.js, quickrn-question-metrics.js, quickrn-case-study-sequencer.js, shared-exam-renderer.js, quickrn-ngn-compat.js, quickrn-ngn-scoring.js, quickrn-cat-engine.js, quickrn-question-reporting.js, quickrn-coach.js, youtube-recommendations.js, quickrn-exam-app.js, quickrn-sidebar.js, and quickrn-platform-hardening.js. Availability and order should still be confirmed in a hosted browser build with Firebase Auth/Analytics enabled.
