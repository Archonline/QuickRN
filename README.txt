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
The shared renderer supports Single Choice, Multiple Response, Extended Multiple Response, Matrix/Grid, Cloze/Drop-down, Extended Drag and Drop, Bowtie, Highlight, and Trend. The current production bank contains 4,500 records across six detected formats: 2,000 Single Choice, 300 Matrix/Grid, 300 Cloze, 300 Extended Drag and Drop, 300 Bowtie, and 1,300 Extended Multiple Response. Highlight and Trend are supported by the renderer but are not currently represented in the production bank.
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

Keyboard shortcuts: Alt + Left/Right Arrow navigate between items; Ctrl/Command + Enter submits the current response. Shortcuts are ignored while a text input, textarea, select, or editable region has focus.


## Unified brand system — October 31, 2026

A shared stylesheet, `css/quickrn-brand-system.css`, now defines the visual language across all application pages:
- Clinical navy for structural chrome and teal for primary brand actions and active accents.
- Consistent Inter typography, heading rhythm, focus indicators, form-control styling, and interaction transitions.
- Cool neutral page surfaces and coordinated border treatments.
- Shared brand tokens are applied to the landing page, dashboard, calendar, help, Self-Study, Timed Practice, CAT, Predictor, saved questions, profile, reports, and reference view.
- NCLEX split-screen exam layout, clinical-record readability, and meaningful success/warning/error feedback are preserved.

When creating a new page, load `css/quickrn-brand-system.css` after page-specific stylesheets and inline styles so the shared brand layer remains consistent. Keep the brand palette in this file rather than introducing page-specific brand colors.

Brand regression coverage: `tests/brand-system-contract.test.js` verifies that all 12 primary application pages load the shared theme and that the NCLEX split-screen stylesheet remains present. The test runs in the NGN renderer validation workflow.
