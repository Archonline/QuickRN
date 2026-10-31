#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const dashboard = fs.readFileSync('dashboard.html', 'utf8');
const examApp = fs.readFileSync('js/quickrn-exam-app.js', 'utf8');

// Compile dashboard inline scripts without executing browser-dependent code.
for (const match of dashboard.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
  if (/\bsrc\s*=/.test(match[1])) continue;
  new vm.Script(match[2], { filename: 'dashboard.html:inline-script' });
}
new vm.Script(examApp, { filename: 'js/quickrn-exam-app.js' });

assert.ok(!dashboard.includes('id="nav-analytics"'), 'Client Needs Mastery sidebar link should be removed');
assert.ok(dashboard.includes('src="js/quickrn-question-metrics.js"'), 'Dashboard should load the question-attempt ledger');
assert.ok(dashboard.includes('QuickRNQuestionMetrics.totals()'), 'Accuracy should use recorded submitted-answer attempts');
assert.ok(dashboard.includes('selfstudy.html?topic=' + '$' + '{encodeURIComponent(cat.name)}'), 'Client Needs cards should open focused question sets');
assert.ok(dashboard.includes('topic=\'+encodeURIComponent(label)'), 'Lesson links should preserve their selected topic');
assert.ok(examApp.includes('new URLSearchParams(window.location.search||\'\')'), 'Self Study should read dashboard topic filters');
assert.ok(examApp.includes('maxItems=freshPool.length;session=window.QuickRNCaseStudySequencer?.randomizeAll?window.QuickRNCaseStudySequencer.randomizeAll(freshPool)'), 'Focused topic sessions should include all unseen matching questions and keep linked cases together');

assert.ok(dashboard.includes('id="tab-content-learning"'), 'Subjects and the study coach should live in a dedicated Learning Center tab');
assert.ok(dashboard.includes('id="nav-learning"'), 'Learning Center should be available from the sidebar');
assert.ok(dashboard.includes('id="quickrn-subject-library"'), 'Learning Center should retain the subject and lesson library render target');
assert.ok(dashboard.includes('id="ai-roadmap-container"'), 'Learning Center should retain the remediation roadmap render target');
assert.ok(dashboard.includes('id="quickrnScoreChart"'), 'Dashboard should retain the performance line graph');
assert.ok(dashboard.includes('Performance trend'), 'Dashboard should label the compact trend graph clearly');
assert.ok(dashboard.includes('xl:col-span-3'), 'Trend graph should receive the primary dashboard width');
assert.ok(dashboard.includes('xl:col-span-2'), 'Client Needs priorities should remain visible beside the trend graph');
assert.ok(dashboard.includes('borderWidth: 2') && dashboard.includes('pointRadius: 2'), 'Trend graph should use restrained line and marker weights');
assert.ok(dashboard.includes('x.timestamp || x.date || x.completedAt'), 'Trend graph should include current completedAt exam records');
assert.ok(dashboard.includes('x.passingProbability !== null'), 'Missing passing estimates should remain gaps, not zero-value points');
assert.equal((dashboard.match(/id="mastery-categories-list"/g) || []).length, 1, 'Dashboard should retain one Client Needs render target');
console.log('PASS: dashboard scripts compile; compact analytics, Learning Center, exam-history trend, and focused topic routing contracts are present.');
