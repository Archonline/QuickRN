#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const dashboard = fs.readFileSync('dashboard.html', 'utf8');
const examApp = fs.readFileSync('js/quickrn-exam-app.js', 'utf8');

// Compile dashboard inline scripts without executing browser-dependent code.
for (const match of dashboard.matchAll(/<script\\b([^>]*)>([\\s\\S]*?)<\\/script>/gi)) {
  if (/\\bsrc\\s*=/.test(match[1])) continue;
  new vm.Script(match[2], { filename: 'dashboard.html:inline-script' });
}
new vm.Script(examApp, { filename: 'js/quickrn-exam-app.js' });

assert.ok(!dashboard.includes('id="nav-analytics"'), 'Client Needs Mastery sidebar link should be removed');
assert.ok(dashboard.includes('src="js/quickrn-question-metrics.js"'), 'Dashboard should load the question-attempt ledger');
assert.ok(dashboard.includes('QuickRNQuestionMetrics.totals()'), 'Accuracy should use recorded submitted-answer attempts');
assert.ok(dashboard.includes('selfstudy.html?topic=${encodeURIComponent(cat.name)}'), 'Client Needs cards should open focused question sets');
assert.ok(dashboard.includes('topic='+encodeURIComponent(label)'), 'Lesson links should preserve their selected topic');
assert.ok(examApp.includes('new URLSearchParams(window.location.search||\'\')'), 'Self Study should read dashboard topic filters');
assert.ok(examApp.includes('maxItems=pool.length;session=shuffle(pool.slice())'), 'Focused topic sessions should include every matching question');
console.log('PASS: dashboard scripts compile; accuracy ledger and focused category/topic routing contracts are present.');
