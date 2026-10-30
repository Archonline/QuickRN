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
- js/quickrn-coach.js: transparent local rule-based study coach and Client Needs classification
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
The shared renderer supports Single Choice, Multiple Response, Extended Multiple Response, Matrix/Grid, Cloze/Drop-down, Extended Drag and Drop, Bowtie, Highlight, and Trend. The current production bank contains 4,500 records across seven detected formats. Highlight and Trend are supported by the renderer but are not currently represented in the production bank.
All exam modes should load questions.js before quickrn-question-id-normalizer.js and shared-exam-renderer.js. Keep this script order when adding new exam pages.

QUALITY AND BETA STATUS
The automated question-bank validator checks format schemas, answer-key references, and duplicate-ID normalization. The latest reviewed audit found 4,500 records, 100 case groups, 271 duplicate IDs handled deterministically at runtime, and no structural or answer-key validation errors. It also flagged approximately 4,000 stems with generic/template wording for clinical educator review. See BETA_READINESS.md. A passing structural audit is not proof of clinical accuracy or natural-language quality.

IMPORTANT LIMITATIONS
- Study progress, question metrics, saved reports, and roadmap data are browser-local unless a shared backend is added. They do not automatically sync across devices or users.
- The study coach is a local rule-based helper; it does not call an external AI service.
- YouTube recommendations open topic-specific YouTube search results; they are not verified endorsements of individual videos.
- CAT/Predictor outcomes are educational simulations, not the official NCLEX adaptive algorithm and not a validated probability of passing the licensure exam.
- QuickRN is an educational practice tool, not a substitute for clinical judgment, professional instruction, or official NCSBN materials. A qualified nursing educator must review clinical content and answer keys before broad release.
- Do not enter real patient-identifiable information (PHI).

TESTING
GitHub Actions runs:
- NGN renderer validation
- QuickRN Coach and UI Tests

Review the workflow results and the question-bank validation artifact under the repository Actions tab. Before inviting beta testers, complete the manual and clinical-content checks in BETA_READINESS.md.
