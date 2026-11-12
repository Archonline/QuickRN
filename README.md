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

## Linked NGN case studies

The active bank includes 20 original, six-question linked clinical case studies (120 items). Each group uses a shared case ID, a question sequence from 1 through 6, a consistent patient profile, and stage-specific clinical-record updates. The six questions follow the Clinical Judgment Measurement Model sequence: Recognize Cues, Analyze Cues, Prioritize Hypotheses, Generate Solutions, Take Action, and Evaluate Outcomes. The second batch adds pulmonary embolism, sickle-cell acute chest syndrome, variceal hemorrhage, thyroid storm, myasthenic crisis, pediatric dehydration, neonatal hypoglycemia, ruptured ectopic pregnancy, postpartum endometritis with sepsis, and suicide-risk safety assessment. Ten additional standalone items cover stroke, transfusion reactions, neutropenic fever, meningitis, preterm labor, shoulder dystocia, DIC, digoxin toxicity, lithium toxicity, and hyperkalemia.

Linked questions are treated as one indivisible selection unit. Self-Study, Timed Practice, Predictor, and CAT may randomize or select whole case groups, but never shuffle questions within a group. When a case is encountered, its questions are delivered in order 1 → 6. Filtering by an individual case question expands back to the complete group. The startup validator blocks any linked group that does not contain exactly six questions with a unique, contiguous sequence.

The 10 cases cover sepsis, diabetic ketoacidosis, acute ischemic stroke, acute coronary syndrome, postpartum hemorrhage, preeclampsia with severe features, severe asthma, acute kidney injury with hyperkalemia, opioid-induced respiratory depression, and acute decompensated heart failure. Each item includes source references, an answer key, rationales, and a clinical judgment tip. These are original educational practice scenarios; automated checks do not constitute clinical certification or substitute for qualified clinical review.

## NGN scoring methods

QuickRN implements practice versions of the three NCSBN scoring approaches:
- **Plus/minus:** correct selections add points and incorrect selections subtract points; scores are floored at zero.
- **0/1:** each keyed response earns one point; incorrect responses earn zero.
- **Rationale:** dependent response elements earn credit only when the complete linked pair is correct.

The scoring method is surfaced in submitted-answer feedback. Item-level keys and rationales still depend on the quality and completeness of the question-bank metadata.


## Source-grounded question generation

QuickRN now supports direct batch publishing of original AI-generated practice questions into the canonical `data/question-bank.js` file. The primary path does not require educator approval; it does require unique IDs, schema-v2 validation, HTTPS source references, answer rationales, and the repository's rendering/scoring checks.

```bash
node scripts/publish-question-batch.js generated-batch.json
```

Use `question-candidates/BATCH-GENERATION-PROMPT.md` to create source-grounded batches. Prefer NCSBN for the exam blueprint, CDC for public-health and infection-control guidance, NIH/NLM/MedlinePlus for reviewed health topics, AHRQ for patient safety, and FDA for medication safety. Use sources for clinical facts, then write entirely original scenarios and questions; do not lightly paraphrase commercial question-bank items or secure NCLEX content.

Automated validation does not certify clinical accuracy or prove that a cited source supports every claim. Retain citations on every item and treat the bank as AI-generated educational practice content. The publisher does not connect an AI provider; generate a JSON batch with an AI tool and run the local command. See [the source-grounded pipeline guide](docs/source-grounded-question-pipeline.md).

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
- Simplified the Calendar activity workflow: removed the separate Add study activity card, retained one Add study activity action in the selected-date panel, and reveal the inline form only when the user chooses a date and requests a personal activity. Personal activities remain separate from generated roadmap sessions.
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


## Free on-device AI integration — November 1, 2026

- Added a real open-weight language model to the Learning Center using Hugging Face Transformers.js and Qwen2.5-0.5B-Instruct (4-bit quantized).
- Inference runs in the student's browser using WebGPU when available, with a CPU/WASM fallback. The model is downloaded from the public Hugging Face model repository and cached by the browser.
- No OpenAI API key, paid AI subscription, paid inference endpoint, Firebase Cloud Functions, or Firebase Blaze upgrade is required for AI inference.
- Includes AI tutor Q&A, note summarization, flashcard generation, NCLEX-style practice-question drafting, and study-plan drafting.
- The local model keeps prompts and generated responses in the browser. An optional Gemini fallback is available only when a student supplies their own Google AI Studio API key; it sends prompts/notes directly to Google, uses the free-tier `gemini-2.5-flash-lite` model, and is subject to Google's changing quotas and data terms. The key is held in page memory only and is not saved.
- Firebase supports both Google OAuth sign-in and email/password sign-in. The login provider is recorded locally for session context. Google sign-in does not itself grant Gemini API access; the optional fallback requires a separate student-owned AI Studio key.
- Limitations: this compact model is less capable than larger hosted models; speed and availability depend on the student's device, browser storage, and WebGPU/CPU support. The first model download is several hundred MB and requires internet. Gemini fallback is optional and may be unavailable after free quota limits are reached. Do not use for clinical decisions or identifiable patient data.


## Canonical Question Schema v2 — November 5, 2026

All four exam modes load `js/quickrn-question-schema-v2.js` after the question sources and before the shared normalizers/renderers. The adapter adds canonical `metadata`, `stimulus`, `interaction`, and `rationales` blocks while retaining original fields for backwards compatibility. It bridges canonical v2 prompt, option, answer-key, rationale, and scoring fields to the legacy shared-renderer contract; unknown legacy fields are not deleted.

- Metadata: `id`, `category`, `clientNeeds`, one of the six CJMM stages, and integer difficulty 1–5.
- Stimulus: shared case ID, patient profile, and structured EHR tabs (`history`, `nursesNotes`, `vitalSigns`, `labResults`, `providerOrders`) represented as arrays or key-value objects.
- Interaction: one of the 13 supported formats, stem, choices, format-specific answer key, and scoring method (`plus_minus`, `0/1`, or `rationale`).
- Rationales: overall explanation, option/response-specific explanations, and a Clinical Judgment Tip.

Run `node tests/question-schema-v2.test.js` for adapter contract tests and `node scripts/validate-question-schema-v2.js` for the strict full-bank migration audit. The strict validator writes `reports/question-schema-v2-validation.md` and `.json` and fails on missing required metadata, scoring, answer keys, structured case stimuli, or rationale content. Legacy data is preserved rather than assigned fabricated CJMM stages, difficulty, scoring, or clinical explanations. A failed strict audit means the bank is not yet Schema-v2 production-ready; complete the reported educator-authored gaps before release. Schema validation and educator review are separate gates: the validator writes `question-schema-v2-schema-issue-queue.json` and `question-schema-v2-educator-review-queue.json` independently. Missing educator status is reported as `not_started`; explicit review states such as `pending`, `in_review`, `changes_requested`, and `approved` remain distinct. Only `approved` records with reviewer identity and review timestamp count as educator-approved. Passing schema validation never implies educator approval.

## AI-generated question review (file-based interim workflow)

QuickRN keeps generated question candidates outside the active student question bank until a nurse educator/admin reviews and approves them. Candidate JavaScript files belong under `question-candidates/pending/`; they are not loaded by exam pages. See [the candidate workflow](question-candidates/README.md) and run `node scripts/validate-question-candidates.js` to check structural/schema requirements before review.

This interim workflow uses repository review/merge permissions for approval. It does not provide secure in-app approvals or automatic AI generation, and it never publishes a candidate automatically. The existing schema-v2 catalogue defines 13 canonical formats in `js/quickrn-question-schema-v2.js`.


## Question-bank rebuild (draft)

The active question bank is being rebuilt as a single canonical file at `data/question-bank.js`. Legacy runtime banks and hard-coded sample-bank add-ons are removed on the rebuild branch. The new registry intentionally starts empty; candidates must not be inserted directly into it.

The schema-v2 validator runs before exam delivery. If the schema is missing or any active item fails validation, the exam app blocks question delivery. See [the rebuild architecture](docs/question-bank-rebuild-architecture.md) for the release gates and 13 supported QuickRN formats.

**Important:** this is a draft rebuild. Until clinically reviewed items are re-authored and approved, the exam modes will report that no questions are available. No production deployment or merge has occurred.

## Organized NCLEX topic expansion (in progress)

The `feature/500-organized-topic-questions` branch tracks a 500-item expansion based on the 417 topics in the QuickRN learning-library workbook. The current branch contains 60 standalone topic questions (IDs `QR-100181`–`QR-100240`) and 10 linked six-question NGN case studies (IDs `QR-100621`–`QR-100680`), for 120 new items. The standalone batches and linked cases are loaded in Self-Study, Timed Practice, Predictor, and CAT. Remaining topics and standalone objectives are still being authored; the 500-item target is not yet complete. Automated schema and rendering checks do not constitute clinical educator approval.
