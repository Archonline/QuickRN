const fs = require('fs');
const assert = require('assert');
const failures = [];
function read(path) {
  try { return fs.readFileSync(path, 'utf8'); }
  catch (error) { failures.push(path + ': could not be read'); return ''; }
}
const help = read('help.html');
const dashboard = read('dashboard.html');
const calendar = read('calendar.html');
const landing = read('index.html');
for (const [label, html] of [['dashboard', dashboard], ['calendar', calendar], ['landing page', landing]]) {
  if (!html.includes('help.html')) failures.push(label + ': Help Center link missing');
}
if (!help.includes('id="faq"')) failures.push('Help Center: FAQ section anchor missing');
if (!help.includes('id="disclaimer"')) failures.push('Help Center: disclaimer section anchor missing');
for (const phrase of ['Educational use only', 'not medical advice', 'not affiliated', 'browser storage', 'beta', 'passing']) {
  if (!help.toLowerCase().includes(phrase.toLowerCase())) failures.push('Help Center: missing key disclosure "' + phrase + '"');
}
if (!dashboard.includes('id="whats-new-title"')) failures.push('Dashboard: concise release notes section missing');
for (const stale of ['v5.7 —', 'v5.6 —', 'v5.5 —', 'Legacy External Search Shortcut', 'Persistent Session Login']) {
  if (dashboard.includes(stale)) failures.push('Dashboard: stale changelog entry remains: ' + stale);
}
if (!help.toLowerCase().includes('rule-based guidance')) failures.push('Help Center: current rule-based Clinical Study Coach limitation is not disclosed');
if (!help.toLowerCase().includes('browser storage')) failures.push('Help Center: browser-local data limitation is not disclosed');
if (failures.length) {
  console.error('Help and release-notes contract failed:\\n- ' + failures.join('\\n- '));
  process.exit(1);
}
console.log('Help Center, disclaimer, navigation, and concise release notes contract passed.');

const dashboardReleaseNotes = fs.readFileSync('dashboard.html', 'utf8');
assert.ok(dashboardReleaseNotes.includes('NGN question-format rendering'), 'Current NGN format update is missing from What’s New');
assert.ok(dashboardReleaseNotes.includes('NCLEX and NGN question formats'), 'Four-mode exam workspace update is missing from What’s New');
assert.ok(dashboardReleaseNotes.includes('Question-bank remediation'), 'Question-bank beta validation disclosure is missing from What’s New');
