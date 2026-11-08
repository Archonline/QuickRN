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

const batch005Context={console,window:{questions:[]}};
vm.runInNewContext(fs.readFileSync('questions-bank-ngn-case-studies-2026-11-04-batch-005.js','utf8'),batch005Context,{timeout:60000});
const batch005=batch005Context.window.questions;
assert.equal(batch005.length,500,'batch 005 retains all 500 source records');
assert.ok(batch005.every(q=>q.reviewStatus==='quarantined_content_quality'),'five-item batch 005 records are excluded pending six-step reconstruction');
assert.ok(batch005.every(q=>q.qualityFlags?.includes('five_item_case_structure')&&q.qualityFlags?.includes('synthetic_exhibit_values')),'batch 005 carries explicit structural and synthetic-exhibit quality flags');
assert.equal(new Set(batch005.map(q=>q.id)).size,500,'batch 005 IDs remain unique');

const batch006Context={console,window:{questions:[]}};
vm.runInNewContext(fs.readFileSync('questions-bank-ngn-supplement-2026-11-04-batch-006.js','utf8'),batch006Context,{timeout:60000});
const batch006=batch006Context.window.questions;
assert.equal(batch006.length,500,'batch 006 retains all 500 source records');
assert.ok(batch006.every(q=>q.reviewStatus==='quarantined_content_quality'),'templated batch 006 records are excluded pending item-level clinical reconstruction');
assert.ok(batch006.every(q=>q.qualityFlags?.includes('templated_topic_format_matrix')&&q.qualityFlags?.includes('synthetic_vital_signs')),'batch 006 carries explicit template and synthetic-exhibit quality flags');
assert.equal(new Set(batch006.map(q=>q.id)).size,500,'batch 006 IDs remain unique');

const batch004Context={console,window:{questions:[]}};
vm.runInNewContext(fs.readFileSync('questions-bank-ngn-expansion-2026-11-04-batch-004.js','utf8'),batch004Context,{timeout:60000});
const batch004=batch004Context.window.questions;
assert.equal(batch004.length,499,'batch 004 retains all 499 non-duplicate source records after its documented duplicate removal');
assert.ok(batch004.every(q=>q.reviewStatus==='quarantined_content_quality'),'batch 004 records with unsafe distractors and incomplete mappings are excluded pending reconstruction');
assert.ok(batch004.every(q=>q.qualityFlags?.includes('unsafe_or_implausible_distractors')&&q.qualityFlags?.includes('incomplete_answer_key_mappings')),'batch 004 retains explicit distractor and answer-key quality flags');
assert.equal(new Set(batch004.map(q=>q.id)).size,499,'batch 004 IDs remain unique');


const batch007Context={console,window:{questions:[]}};
vm.runInNewContext(fs.readFileSync('questions-bank-numeric-entry-2026-11-04-batch-007.js','utf8'),batch007Context,{timeout:60000});
const batch007=batch007Context.window.questions;
assert.equal(batch007.length,200,'batch 007 retains all 200 numeric-entry source records');
assert.ok(batch007.every(q=>q.reviewStatus==='quarantined_content_quality'),'templated numeric-entry records are excluded pending item-level clinical review');
assert.ok(batch007.every(q=>q.qualityFlags?.includes('templated_numeric_calculations')&&q.qualityFlags?.includes('generic_calculation_rationales')),'batch 007 retains explicit calculation and rationale quality flags');
assert.equal(new Set(batch007.map(q=>q.id)).size,200,'batch 007 IDs remain unique');

const batch008Context={console,window:{questions:[]}};
vm.runInNewContext(fs.readFileSync('questions-bank-matrix-grid-2026-11-04-batch-008.js','utf8'),batch008Context,{timeout:60000});
const batch008=batch008Context.window.questions;
assert.equal(batch008.length,200,'batch 008 retains all 200 matrix-grid source records');
assert.ok(batch008.every(q=>q.reviewStatus==='quarantined_content_quality'),'matrix-grid records with synthetic EHR values are excluded pending reconstruction');
assert.ok(batch008.every(q=>q.qualityFlags?.includes('synthetic_ehr_vital_signs')&&q.qualityFlags?.includes('templated_matrix_rows')),'batch 008 retains explicit synthetic-EHR and template quality flags');
assert.equal(new Set(batch008.map(q=>q.id)).size,200,'batch 008 IDs remain unique');

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
