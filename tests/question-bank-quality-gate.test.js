#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');

const context={console,window:{questions:[]}};
vm.runInNewContext(fs.readFileSync('questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js','utf8'),context,{timeout:60000});
const bank=context.window.questions;
assert.equal(bank.length,200,'the full source batch remains preserved for remediation');
assert.ok(bank.every(q=>q.reviewStatus==='quarantined_content_quality'),'every placeholder-heavy item is quarantined');
assert.ok(bank.every(q=>Array.isArray(q.qualityFlags)&&q.qualityFlags.includes('placeholder_distractors')),'quarantine records retain explicit quality flags');
assert.equal(new Set(bank.map(q=>q.id)).size,200,'quarantined records retain unique IDs');

const app=fs.readFileSync('js/quickrn-exam-app.js','utf8');
assert.match(app,/function filteredPool\(\)\{let list=bank\.filter\(q=>q\?\.reviewStatus!=='quarantined_content_quality'&&hasClinicalContextForExam\(q\)\)/,
  'student exam pools exclude quarantined records');
assert.match(app,/function needsReviewPool\(\)\{if\(!isQuickRNWebmaster\(\)\)return \[\];/,
  'webmaster review queue remains available for remediation');

const base=fs.readFileSync('questions.js','utf8');
assert.doesNotMatch(base,/The word 'first' signals the need to address the most time-sensitive risk before routine tasks\./,
  'the repeated base-bank rationale sentence has been removed');
assert.match(base,/The 3,972 figure is the de-duplicated production-bank total/,
  'base-bank count documentation is internally consistent');

console.log('PASS: 200 low-quality NGN records are quarantined from student pools, preserved for webmaster remediation, and repeated base-bank rationale boilerplate is removed.');
