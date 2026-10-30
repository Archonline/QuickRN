const fs = require('fs');
const page = fs.readFileSync('reports.html', 'utf8');
const failures = [];
const has = (s, label) => { if (!page.includes(s)) failures.push(label); };
has("const KEY='quickrn_question_reports'", 'Inbox must read the same queue as exam feedback');
has("Import tester reports", 'Tester JSON import control missing');
has("Export all JSON", 'JSON export control missing');
has("Export CSV", 'CSV export control missing');
has("reviewed", 'Reviewed status missing');
has("resolved", 'Resolved status missing');
has("textContent", 'Feedback values must be rendered as text, not HTML');
has("localStorage", 'Local browser storage notice/reader missing');
if (page.includes("innerHTML =") || page.includes("innerHTML=")) failures.push('Inbox must not interpolate untrusted feedback into innerHTML');
if (failures.length) { console.error('Feedback inbox contract failed:\\n- ' + failures.join('\\n- ')); process.exit(1); }
console.log('Feedback inbox contract passed.');
