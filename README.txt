QuickRN — NCLEX-RN and Next Generation NCLEX (NGN) practice application

OVERVIEW
QuickRN is a browser-based nursing exam practice application with Self Study, Timed Practice, CAT Simulator, Predictor, Dashboard, Calendar, Saved Items, Reports, and Profile pages.

PROJECT STRUCTURE
- index.html: entry / sign-in experience
- dashboard.html: progress, readiness trends, and study roadmap
- calendar.html: editable study roadmap calendar
- selfstudy.html: flexible practice and review
- timed.html: timed practice sessions
- cat.html: adaptive practice simulator
- predictor.html: longer predictor-style session
- questions.js: production question bank (4,500 records)
- js/shared-exam-renderer.js: shared NGN detection, rendering, answer adapters, and grading
- js/quickrn-question-id-normalizer.js: deterministic handling of duplicate question IDs before session state is created
- js/quickrn-question-metrics.js: browser-local per-question correctness metrics
- js/quickrn-coach.js: transparent local rule-based study coach and Client Needs classification\n- js/quickrn-platform-hardening.js: shared local storage, diagnostics, connectivity, and lifecycle safeguards\n- js/quickrn-data-backup.js: validated browser-local backup export/import with rollback on partial restore
- js/youtube-recommendations.js: contextual YouTube search recommendations
- scripts/validate-question-bank.js: production-bank structural and content-quality audit
- tests/: renderer, CAT engine, coach/UI, and question-ID regression tests
- BETA_READINESS.md: closed-beta release checklist

RUNNING LOCALLY
Serve the repository root with a static web server; do not open pages directly as file:// URLs because the app shares browser-local state across pages.
Example:
  python -m http.server 8000
Then open:
  http://localhost:8000/

QUESTION BANK AND RENDERING
The shared renderer supports Single Choice, Multiple Response, Extended Multiple Response, Matrix/Grid, Cloze/Drop-down, Extended Drag and Drop, Bowtie, Highlight, and Trend. The core questions.js bank contains 4,500 records across six detected formats: 2,000 Single Choice, 300 Matrix/Grid, 300 Cloze, 300 Extended Drag and Drop, 300 Bowtie, and 1,300 Extended Multiple Response. The loaded questions-ngn-supplement.js adds 25 records (5 each for Multiple Response, Highlight, Trend, Numeric Entry, and Select N). All exam modes load the supplement, and the question-type selector counts the combined runtime bank.
All exam modes should load questions.js before quickrn-question-id-normalizer.js and shared-exam-renderer.js. Keep this script order when adding new exam pages.

QUALITY AND BETA STATUS
The automated question-bank validator checks format schemas, answer-key references, and duplicate-ID normalization. The latest reviewed audit found 4,500 records, 100 case groups, 271 duplicate IDs handled deterministically at runtime, and no structural or answer-key validation errors. It also flagged 4,029 stems with generic/template wording for clinical educator review. See BETA_READINESS.md. A passing structural audit is not proof of clinical accuracy or natural-language quality.

IMPORTANT LIMITATIONS
- Study progress, question metrics, saved reports, roadmap data, and exam recovery checkpoints are browser-local unless a shared backend is added. In-progress exams can be restored after a refresh; timed exams continue counting down while unpaused. They do not automatically sync across devices or users.
- The study coach is a local rule-based helper; it does not call an external AI service.
- YouTube recommendations open topic-specific YouTube search results; they are not verified endorsements of individual videos.
- CAT/Predictor outcomes are educational simulations, not the official NCLEX adaptive algorithm and not a validated probability of passing the licensure exam.
- QuickRN is an educational practice tool, not a substitute for clinical judgment, professional instruction, or official NCSBN materials. A qualified nursing educator must review clinical content and answer keys before broad release.
- Do not enter real patient-identifiable information (PHI).

TESTING
GitHub Actions runs:
- NGN renderer validation, including the shared QuickRN brand-system contract
- QuickRN Coach and UI Tests

Review the workflow results and the question-bank validation artifact under the repository Actions tab. Before inviting beta testers, complete the manual and clinical-content checks in BETA_READINESS.md.

## Platform hardening update — October 31, 2026

A shared browser-only platform layer is now included on the landing page, dashboard, calendar, profile, saved items, reports, help, reference view, and all four exam modes. It provides storage-safe read/write helpers, bounded local diagnostics, runtime error capture, offline/online status notices, cross-tab storage notifications, tab visibility/resume events, and shared HTML escaping, IDs, and debounce utilities. No diagnostics are transmitted to a server.

Clinical-record HTML is now allowlist-sanitized before rendering. Backup import validates the full restore set, limits its size, snapshots existing values, and attempts rollback if a storage write fails.

### 50-point improvement register

**Platform reliability**
1. Detect browser storage availability before relying on persistence.
2. Provide safe string reads with fallbacks.
3. Provide safe JSON parsing for corrupted values.
4. Provide guarded string writes.
5. Provide guarded JSON serialization writes.
6. Provide safe key removal.
7. Keep a bounded diagnostic journal of the latest 30 errors.
8. Capture uncaught JavaScript errors.
9. Capture unhandled promise rejections.
10. Keep diagnostic messages short and omit stack traces.

**Connectivity and lifecycle**
11. Show a visible offline notice.
12. Show a connection-restored notice.
13. Announce status changes through an accessible live region.
14. Bridge cross-tab storage events into the QuickRN event layer.
15. Emit a page-hide lifecycle event.
16. Emit a visibility-change event.
17. Emit a resume event when a tab becomes visible.
18. Provide event subscriptions with unsubscribe callbacks.
19. Prevent duplicate platform initialization.
20. Attach page path context to local diagnostics.

**Safe content and utilities**
21. Expose a shared HTML-escaping helper.
22. Sanitize markup in clinical-record panels.
23. Remove script elements from clinical records.
24. Remove style, iframe, object, and embed elements from clinical records.
25. Remove inline event handlers and unapproved attributes.
26. Retain only safe numeric table span attributes.
27. Keep plain-text clinical content on the escaped rendering path.
28. Sanitize the initial case-study tab.
29. Sanitize subsequent case-study tab changes.
30. Expose a shared unique-ID helper.

**Backup and recovery**
31. Make backup collection tolerate inaccessible storage.
32. Reject restore payloads containing more than 500 entries.
33. Reject malformed/oversized storage key names.
34. Validate every restored value before writing.
35. Snapshot existing values before restore begins.
36. Track successfully applied restore keys.
37. Roll back already-written keys if a later write fails.
38. Remove newly-created keys during rollback.
39. Explain when a restore was rolled back.
40. Retain the pre-restore safety export.

**Application coverage and quality**
41. Load shared safeguards on the landing page.
42. Load shared safeguards on the dashboard.
43. Load shared safeguards on the calendar.
44. Load shared safeguards on profile and help pages.
45. Load shared safeguards on saved-items and reports pages.
46. Load shared safeguards on Self-Study.
47. Load shared safeguards on Timed Practice.
48. Load shared safeguards on Predictor and CAT.
49. Add a dedicated platform-hardening regression test.
50. Run the new regression test in the NGN validation workflow.

The register documents implemented safeguards and their subfeatures. It does not claim that browser/device QA, clinical educator review, or cross-device synchronization is complete.


### Exam session recovery and keyboard navigation

Unfinished sessions now save the selected question IDs, current position, timer state, paused state, format filter, and scheduled-break markers alongside the existing response drafts, bookmarks, and notes. On reopening the same exam mode, the student is asked whether to restore the saved session. Completed exams clear the recovery checkpoint. An unpaused countdown continues against its saved wall-clock deadline while the page is closed.

Countdown exams display five-minute and one-minute warnings. Backup and question-report downloads delay temporary URL cleanup to reduce browser download failures. Keyboard shortcuts: Alt + Left/Right Arrow navigate between items; Ctrl/Command + Enter submits the current response. Shortcuts are ignored while a text input, textarea, select, or editable region has focus.


## Unified brand system — October 31, 2026

A shared stylesheet, `css/quickrn-brand-system.css`, now defines the visual language across all application pages:
- Clinical navy for structural chrome and teal for primary brand actions and active accents.
- Consistent Inter typography, heading rhythm, focus indicators, form-control styling, and interaction transitions.
- Cool neutral page surfaces and coordinated border treatments.
- Shared brand tokens are applied to the landing page, dashboard, calendar, help, Self-Study, Timed Practice, CAT, Predictor, saved questions, profile, reports, and reference view.
- NCLEX split-screen exam layout, clinical-record readability, and meaningful success/warning/error feedback are preserved.

When creating a new page, load `css/quickrn-brand-system.css` after page-specific stylesheets and inline styles so the shared brand layer remains consistent. Keep the brand palette in this file rather than introducing page-specific brand colors.

Brand regression coverage: `tests/brand-system-contract.test.js` verifies that all 12 primary application pages load the shared theme and that the NCLEX split-screen stylesheet remains present. The test runs in the NGN renderer validation workflow.


## Exam workspace feedback and question-only layout — October 31, 2026

- Removed the standalone “Report this item” control from the shared exam question renderer.
- Consolidated question issue reporting and general suggestions into the existing Feedback modal. Users can select a feedback category and add details; the saved local report includes the question ID, category/topic/type, prompt, relevant question snapshot, exam mode, and timestamp.
- The modal clearly states that feedback is stored locally on the current device and is not automatically sent to the team.
- Right-aligned the Check Answer / Submit Answer action in the exam workspace.
- When a question has no actual case-study or clinical-record exhibits, the Clinical Record tabs and empty placeholder are hidden. The question stem moves into the left pane; answer choices and response controls remain in the right pane.
- Case-based items retain the clinical-record left pane and question/response right pane.
- Added regression coverage for feedback consolidation, question-only layout, removal of the standalone report action, and right-aligned answer controls.


## Reference-inspired visual refinement — October 31, 2026

- Added deep plum navigation and warm coral primary-action accents to the learning/dashboard experience, based on the supplied visual references.
- Preserved the clinical navy/teal exam workspace so test-taking remains calm, high-contrast, and visually distinct from study planning.
- Kept shared Inter typography, neutral content surfaces, accessible focus treatment, and semantic success/warning/error colors.
- Extended the brand-system contract test to guard the new plum/coral tokens and dashboard navigation treatment.


## Beta feedback collection — October 31, 2026

- Exam Feedback saves structured reports in browser-local storage under `quickrn_question_reports`.
- `reports.html` is the local Feedback Inbox. It supports filtering, marking reports new/reviewed/resolved, importing tester JSON bundles, and exporting JSON or CSV.
- Reports are not automatically transmitted to the project owner and do not sync across devices. Testers must export their feedback JSON and send it through the private channel designated by the beta coordinator; the owner can import those bundles into the Feedback Inbox.
- Do not treat the public GitHub issue tracker as a private feedback destination. Use it only for non-sensitive technical issues.
- Automatic cross-device collection requires a configured shared backend such as Firebase Firestore, strict security rules, and a protected admin read path. No Firebase project credentials or Firestore rules are currently configured in this repository.

Before inviting external testers, complete `BETA_READINESS.md`, including clinical educator review, deployed-site testing, and a decision on the private feedback channel.

## Client Needs performance dashboard refinement — October 31, 2026

- Merged the separate Priority Weak Areas and Client Needs Mastery panels into one category list to remove duplicate presentation.
- Categories below 75% accuracy now receive a red border and red status label; categories at or above 75% retain a neutral border, while categories without attempts use a dashed border.
- Added an inline legend explaining priority review, on-track, and no-data states, and documented the change in What's New.


SELF-STUDY REBUILD (2026-10-31)
--------------------------------
- Rebuilt selfstudy.html from the approved correct_view.html NCLEX split-screen layout.
- Reconnected the page to the shared question bank, shared NCLEX/NGN renderer, scoring layer, Clinical Study Coach, question metrics, and video recommendations.
- Restored setup flow, question-count selection, question-format filtering, bookmarks, notes, calculator, feedback form, navigation, session summary, and saved-session support.
- Self-Study remains untimed; the header clock now tracks elapsed learning time.
- Added answer teaching review with the keyed response, per-option or per-row feedback when the question bank supplies it, the overall clinical rationale, and a clinical principle/takeaway.
- Added confidence self-rating, daily study-streak tracking, and a retry session for missed questions.
- Added structured review rendering for choice, matrix, cloze, ordered-response, and highlight items.
- Feedback and study progress are currently browser-local. Cloud synchronization and automatic central feedback delivery require an authenticated Firebase/backend configuration and are not represented as active features.
- Automated checks completed: JavaScript syntax validation, required DOM-ID checks, duplicate-ID checks, and referenced-script existence checks. Full browser interaction and visual QA remain required before beta release.


## Self-Study NGN presentation, filtering, and review refinements — October 31, 2026

- Remove question-bank prefixes such as NGN format codes, ID, Topic, Category, and Follow-up N from visible clinical stems.
- Separate the clinical case narrative from NGN directions, standardizing the common instruction to “Review the clinical cues and complete the item as directed.”
- Display NGN format in the question header and letter labels for single-choice and SATA options. Submitted choices are visually marked as correct or incorrect.
- Move the rationale/review card to the bottom of the left clinical pane and keep video players in that same review card when a question includes a specific playable YouTube ID.
- Remove the old separate video modal and the “Incorrect / partially correct” status message.
- Correct Single Best Answer format detection and response validation so it accepts one answer only; Select N requires the specified number of choices.
- Build question-type filter choices from the loaded bank and map aliases consistently, including Matrix variants and Cloze variants. Zero-count formats are disabled instead of silently returning unrelated questions.
- Self-Study now prioritizes questions not previously seen, resets the seen set only after the selected pool is exhausted, and interleaves formats and topics when possible.
- Inline YouTube playback requires a direct video ID or watch/embed URL in the question data. Generic YouTube search suggestions cannot be turned into embedded players; YouTube deprecated search-result embeds. Existing bank records without a video ID display a clear note instead of a broken player.
- Validation completed: modified JavaScript files passed syntax parsing; duplicate HTML IDs and obsolete video-modal markup were checked. Real-browser visual testing and full question-bank content QA remain outstanding.


## Additional NGN case and topic prompt cleanup — October 31, 2026

- Strip leading case identifiers and diagnosis labels such as “Case 090 — HELLP syndrome” from Patient Information / clinical exhibit text while retaining the clinical narrative.
- Remove the repeated case title and “Item n of n” footer from the left clinical pane; case position remains available in session navigation.
- Strip “Follow-up n:” from follow-up question stems.
- Split topic-prefixed stems such as “Benzodiazepines/alcohol withdrawal: …” into a left-pane clinical narrative and the right-pane instruction, standardizing cue-review instructions when appropriate.
- For the supplied “Developmental milestones” example, mirror the clinical stem in both panes as explicitly requested.
- Targeted parser checks cover the supplied examples. JavaScript syntax checks pass; full browser/device visual QA remains outstanding.

 
## Bank-wide clinical prompt normalization — October 31, 2026

- Prompt cleanup now runs through the shared renderer and is consumed by the shared exam app, so it applies across every exam mode using the shared question renderer rather than only the supplied question examples.
- Normalize visible prompts from the question, questionOnly, actualQuestion, stem, questionText, title, prompt, and instruction fields.
- Normalize case content from scenario/clinicalScenario, patientInfo/patientInformation, patient history, caseStudy/case_study, caseStudyText, caseStudyContext, EHR, medical-record, chart, and clinical-record fields.
- Remove display-only prefixes and labels, including NGN format/item codes, IDs, Topic/Category/Subject labels, Patient Information, Follow-up numbers, and numbered Case headings with their diagnosis/title. Remove repeated “clinical case · Item n of n” metadata while preserving adjacent clinical narrative.
- Split topic-prefixed combined stems into the clinical narrative and their original cue-review instruction. Preserve the instruction wording supplied in the bank instead of replacing it with a generic sentence. Traditional follow-up question stems remain in the right pane.
- Keep the Developmental milestones display exception previously requested: its cleaned clinical narrative is repeated in the response pane.
- Added tests/clinical-prompt-normalizer.test.js and wired it into the NGN renderer validation workflow. It covers case metadata, inline footers, NGN title prefixes, topic-prefixed questions, follow-up numbers, and alternate patient-information fields.
- Targeted runtime checks passed for the supplied examples and additional synthetic question shapes. The full GitHub Actions workflow must complete after this commit for CI confirmation; full browser visual QA remains separate.
