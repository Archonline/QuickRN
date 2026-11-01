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


## Question-bank preservation and NGN supplement (November 2026)

- Restored `questions.js` to the original canonical 4,500-item / four-set question-bank blob from `main` (blob SHA: `6ca096d2d35f055deef75206d2786fd1a1471cdd`; 14,841,456 bytes). The NGN case-study work must never replace this file.
- Preserved the existing `questions-ngn-supplement.js` (16,482 bytes; traditional SATA, enhanced hot spot, and trend interpretation items).
- Moved the six sequential NGN sepsis case-study items into the new `questions-ngn-case-study.js` file. It appends the case items to the existing `window.questions` bank and checks IDs before appending.
- Added the new supplement after `questions-ngn-supplement.js` on Dashboard, Self-Study, Timed Practice, CAT, and Predictor, before the question-bank normalizer and exam renderer run.
- Question source order: canonical `questions.js` → existing `questions-ngn-supplement.js` → new `questions-ngn-case-study.js` → normalizer / sequencer / renderer.
- Do not overwrite or truncate `questions.js` when adding NGN content. New case studies and question sets must be separate supplemental files.
