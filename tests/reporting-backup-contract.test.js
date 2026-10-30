const fs = require('fs');
const failures = [];
const read = path => fs.readFileSync(path, 'utf8');
const requireText = (source, text, label) => { if (!source.includes(text)) failures.push(label); };
const dashboard = read('dashboard.html');
const reporter = read('js/quickrn-question-reporting.js');
const backup = read('js/quickrn-data-backup.js');
requireText(dashboard, 'quickrn-export-backup', 'Dashboard backup export control missing');
requireText(dashboard, 'quickrn-import-backup', 'Dashboard backup restore control missing');
requireText(dashboard, 'quickrn-data-backup.js', 'Dashboard backup module not loaded');
requireText(dashboard, 'Better question reporting', 'Latest question-reporting release note missing');
requireText(dashboard, 'Data backup & restore', 'Latest backup release note missing');
requireText(dashboard, 'not automatically sent', 'Local-only report limitation not disclosed');
requireText(reporter, 'quickrn_question_reports', 'Question report queue key missing');
requireText(reporter, 'function snapshot(q)', 'Question context snapshot function missing');
requireText(reporter, 'Saved locally — not yet submitted', 'Report submission status not explicit');
requireText(reporter, 'quickRNOpenReport', 'Shared renderer report handler missing');
requireText(backup, 'formatVersion', 'Versioned backup format missing');
requireText(backup, 'pre-restore-safety', 'Pre-restore safety backup missing');
requireText(backup, 'QuickRN', 'Backup app identity missing');
for (const page of ['cat.html','predictor.html','timed.html']) {
  requireText(read(page), 'quickrn-question-reporting.js', page + ' does not load question reporting');
}
const selfStudy = read('selfstudy.html');
requireText(selfStudy, 'quickrn_question_reports', 'Self Study report queue missing');
requireText(selfStudy, 'Report saved on this device', 'Self Study local save disclosure missing');
if (failures.length) { console.error('Reporting and backup contract failed:\\n- ' + failures.join('\\n- ')); process.exit(1); }
console.log('Question reporting and data backup contract passed.');
