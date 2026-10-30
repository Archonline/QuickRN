const fs = require('fs');
const failures = [];
const read = path => fs.readFileSync(path, 'utf8');
const requireText = (source, text, label) => { if (!source.includes(text)) failures.push(label); };
const dashboard = read('dashboard.html');
const reporter = read('js/quickrn-question-reporting.js');
const backup = read('js/quickrn-data-backup.js');
if (dashboard.includes('quickrn-export-backup') || dashboard.includes('quickrn-import-backup') || dashboard.includes('Protect your study data')) failures.push('Removed study-data backup panel is still present');
if (dashboard.includes('quickrn-data-backup.js')) failures.push('Removed dashboard still loads the backup module');
requireText(dashboard, 'Platform reliability and recovery', 'Platform hardening release note missing');
if (dashboard.includes('Data backup & restore')) failures.push("What's New still advertises the removed backup panel");
requireText(dashboard, 'Safer clinical records', 'Clinical-record safety release note missing');
requireText(dashboard, 'itemCount < 85', 'Readiness estimate must require at least 85 answered adaptive items');
requireText(dashboard, 'latest completed CAT or Predictor adaptive ability estimate', 'Dashboard must use the adaptive exam estimate');
if (dashboard.includes('questionVolumeWeight') || dashboard.includes('catAverageScore || 70') || dashboard.includes('predictorAverageScore || 70')) failures.push('Dashboard still uses the outdated weighted placeholder probability formula');
requireText(dashboard, 'not automatically sent', 'Local-only report limitation not disclosed');
requireText(reporter, 'quickrn_question_reports', 'Question report queue key missing');
requireText(reporter, 'function snapshot(q)', 'Question context snapshot function missing');
requireText(reporter, 'Saved locally — not yet submitted', 'Report submission status not explicit');
requireText(reporter, 'quickRNOpenReport', 'Shared renderer report handler missing');
requireText(backup, 'formatVersion', 'Versioned backup format missing');
requireText(backup, 'pre-restore-safety', 'Pre-restore safety backup missing');
requireText(backup, 'rolled back', 'Backup restore rollback protection missing');
requireText(backup, 'QuickRN', 'Backup app identity missing');
for (const page of ['cat.html','predictor.html','timed.html']) {
  requireText(read(page), 'quickrn-question-reporting.js', page + ' does not load question reporting');
}
const selfStudy = read('selfstudy.html');
const examApp = read('js/quickrn-exam-app.js');
requireText(examApp, 'quickrn_question_reports', 'Shared exam report queue missing');
requireText(selfStudy, 'Report saved on this device', 'Self Study local save disclosure missing');
if (failures.length) { console.error('Reporting and backup contract failed:\\n- ' + failures.join('\\n- ')); process.exit(1); }
console.log('Question reporting and dashboard-removal contract passed.');
