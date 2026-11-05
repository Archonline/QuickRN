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
console.log('PASS: Feature Hub structure, release notes, and Help/Disclaimer layout contracts');
