const fs = require('fs');
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
if (!dashboard.includes('rule-based Clinical Study Coach')) failures.push('Dashboard: coach limitation disclosure missing from release notes');
if (!dashboard.includes('browser-local')) failures.push('Dashboard: local storage limitation missing from release notes');
if (failures.length) {
  console.error('Help and release-notes contract failed:\\n- ' + failures.join('\\n- '));
  process.exit(1);
}
console.log('Help Center, disclaimer, navigation, and concise release notes contract passed.');

const dashboardReleaseNotes = fs.readFileSync('dashboard.html', 'utf8');
requireText(dashboardReleaseNotes, 'View all 50 documented improvements', 'Full improvement register is not available in What’s New');
requireText(dashboardReleaseNotes, 'Additional exam workflow improvements', 'Additional exam workflow improvements are missing from What’s New');
