QuickRN exam interface and NGN update

Updated QuickRN application files:
- index.html, dashboard.html, profile.html
- cat.html, predictor.html, timed.html, selfstudy.html
- saved.html, reports.html
- js/shared-exam-renderer.js

Keep your populated questions.js in the same folder. The uploaded original questions.js was empty, so the question bank itself is not included or changed.

Updates include a shared split-screen clinical-record/question workspace, format-specific standard and NGN controls, working drag-to-reorder with accessible up/down controls, removal of category/type prefixes from prompt text, full-detail report saving to localStorage for display in saved.html, and viewport-aware scrolling.

Reports are stored in the browser's localStorage under quickrn_question_reports. All pages must be served from the same origin for the Saved page to see them.


Dashboard and branding update
- Dashboard What's New now announces the unified NCLEX/NGN exam experience and lists all nine supported item formats.
- QuickRN is the consistent product name across the application pages and exam interfaces.
- The exam headers use the QuickRN nurse-mark wordmark treatment.
- New case-study formats: Highlight clinical findings and Trend interpretation.
