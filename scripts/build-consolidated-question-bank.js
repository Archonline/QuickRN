#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const sources = [
  'questions.js',
  'questions-ngn-supplement.js',
  'questions-bank-v2.js',
  'questions-bank-v2-curated.js',
  'questions-bank-v3-clinical.js',
  'questions-bank-expansion-2026-11-04.js',
  'questions-bank-expansion-2026-11-04-batch-002.js',
  'questions-bank-expansion-2026-11-04-batch-003.js',
  'questions-bank-ngn-expansion-2026-11-04-batch-004.js',
  'questions-bank-ngn-case-studies-2026-11-04-batch-005.js',
  'questions-bank-ngn-supplement-2026-11-04-batch-006.js',
  'questions-bank-numeric-entry-2026-11-04-batch-007.js',
  'questions-bank-matrix-grid-2026-11-04-batch-008.js',
  'questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js',
  'questions-bank-ngn-priority-2026-11-04-batch-007.js'
];
const output = [
  '/* QuickRN consolidated question bank. Generated from the source modules in their original runtime order. */',
  ...sources.map(file => {
    const fullPath = path.join(root, file);
    if (!fs.existsSync(fullPath)) throw new Error('Missing question-bank source: ' + file);
    return '\n/* ===== BEGIN ' + file + ' ===== */\n' + fs.readFileSync(fullPath, 'utf8') + '\n/* ===== END ' + file + ' ===== */';
  })
].join('\n');
fs.writeFileSync(path.join(root, 'question-bank.js'), output);
console.log('Built question-bank.js from ' + sources.length + ' source modules (' + Buffer.byteLength(output) + ' bytes).');
