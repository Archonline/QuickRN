const fs = require('node:fs');
const assert = require('node:assert/strict');

const dashboard = fs.readFileSync('dashboard.html', 'utf8');
const help = fs.readFileSync('help.html', 'utf8');
const brandCss = fs.readFileSync('css/quickrn-brand-system.css', 'utf8');

const featureStart = dashboard.indexOf('<div id="tab-content-features"');
const featureScript = dashboard.indexOf('<script>\n        // Use the same loaded', featureStart);
assert.ok(featureStart >= 0 && featureScript > featureStart, 'Feature Hub tab and following page script exist');
const featureMarkup = dashboard.slice(featureStart, featureScript);
assert.equal((featureMarkup.match(/<div\b/gi) || []).length, (featureMarkup.match(/<\/div\s*>/gi) || []).length, 'Feature Hub wrapper is closed before page-level scripts');
assert.match(featureMarkup, /id="whats-new-title"/, "Feature Hub contains the What's New section");
assert.ok(!featureMarkup.includes('&lt;div') && !featureMarkup.includes('&lt;/div'), 'Feature Hub must not show escaped HTML markup as text');
assert.ok(!featureMarkup.includes('<script'), 'Feature Hub content must not include script source text');
assert.ok(featureMarkup.includes('class="hidden w-full min-w-0 max-w-none mx-0 space-y-5"'), 'Feature Hub wrapper must not use conflicting narrow max-width utilities');
assert.match(featureMarkup, /November 5, 2026/, "What's New date is current");
for (const phrase of ['NGN question-format rendering', 'Clearer clinical case records', 'Question-bank validation remains in progress']) {
  assert.ok(featureMarkup.includes(phrase), "What's New includes: " + phrase);
}

assert.match(help, /<div id="app-shell" class="support-shell">/, 'Help uses the shared support shell');
assert.match(help, /<main id="support-main" class="support-main/, 'Help content has a dedicated scrolling main region');
assert.equal((help.match(/<main\b/gi) || []).length, 1, 'Help page has one main landmark');
assert.doesNotMatch(help, /class="support-header-link"/, 'Help header has no extra right-side navigation button');
assert.match(help, /prefilled GitHub issue/, 'Question-report instructions match the current reporting flow');
assert.match(brandCss, /Support page layout lock/, 'Dedicated support layout overrides are present');
assert.match(brandCss, /#app-shell\.support-shell\{\s*flex-direction:column!important/s, 'Mobile support layout stacks sidebar and workspace');

const profile = fs.readFileSync('profile.html', 'utf8');
const sidebar = fs.readFileSync('js/quickrn-sidebar.js', 'utf8');
const examApp = fs.readFileSync('js/quickrn-exam-app.js', 'utf8');
assert.match(sidebar, /applySidebarState\(true\)/, 'Shared sidebar starts in compact mode');
assert.match(sidebar, /qr-sidebar-expanded/, 'Sidebar labels are revealed on hover and keyboard focus');
assert.match(brandCss, /body\\.qr-main-sidebar-collapsed #app-shell>aside#quickrn-unified-sidebar\\.qr-sidebar\\.qr-sidebar-expanded\\{[\\s\\S]*?width:256px!important[\\s\\S]*?min-width:256px!important/, 'Expanded hover rail must override the compact width lock despite selector specificity');
assert.match(brandCss, /fixed shared sidebar overlays the workspace at its expanded width/, 'Expanded sidebar overlays without changing the 56px workspace gutter');
assert.match(brandCss, /#app-shell\.support-shell\.qr-sidebar-shell\{[\s\S]*?width:100vw!important[\s\S]*?padding-left:56px!important/, 'Support workspace uses one full-width content column beside the compact rail');
assert.match(brandCss, /#tab-content-features\{width:100%!important;max-width:none!important/, 'Feature Hub is not constrained to a narrow centered pane');
assert.match(profile, /<main class="flex-grow/, 'Profile retains a single full-width main content region');
assert.match(examApp, /suppressObsoleteBankStatus/, 'Exam app removes the obsolete question-bank status notice');
for (const page of ['selfstudy.html', 'timed.html', 'cat.html', 'predictor.html']) {
  const html = fs.readFileSync(page, 'utf8');
  assert.doesNotMatch(html, /\\n\s*<script src="questions\.js">/, page + ' has no literal escaped newline before question-bank scripts');
  assert.doesNotMatch(html, /3,972 unique questions loaded|expected 3,969|file loads unconfirmed/i, page + ' has no hard-coded obsolete bank status');
}

console.log('PASS: Feature Hub, compact sidebar, full-width support, and exam-header contracts');


// The expanded-state rule must outrank the compact !important width lock.
assert.match(brandCss, /body\\.qr-main-sidebar-collapsed:not\\(\\[data-exam-mode\\]\\) #app-shell>aside#quickrn-unified-sidebar\\.qr-sidebar\\.qr-sidebar-expanded\\{[\\s\\S]*?width:256px!important[\\s\\S]*?overflow-y:auto!important/, 'Expanded sidebar must override the compact width lock and restore scrollable contents');
