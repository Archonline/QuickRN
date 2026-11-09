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

const remediatedStroke=bank.filter(q=>q.caseGroupId==='QR-CASE-NEW-001').sort((a,b)=>a.caseQuestionNumber-b.caseQuestionNumber);
assert.equal(remediatedStroke.length,5,'the first quarantined case retains five linked records');
assert.ok(remediatedStroke.every(q=>q.reviewStatus==='quarantined_content_quality'),'substantively revised records remain excluded pending educator review');
assert.ok(remediatedStroke.every(q=>q.patientProfile&&q.ehr?.vitalSigns&&q.ehr?.labResults),'the revised stroke case supplies structured patient and EHR exhibits');
assert.ok(remediatedStroke.every(q=>q.optionRationales&&Object.keys(q.optionRationales).length>=4),'the revised stroke items provide option-specific rationales');
assert.ok(remediatedStroke.every(q=>!q.options?.some(o=>/acute cue described|stable chronic finding|routine preference|unrelated task/i.test(o))),'the first stroke case no longer uses generic placeholder choices');


const batch005Context={console,window:{questions:[]}};
vm.runInNewContext(fs.readFileSync('questions-bank-ngn-case-studies-2026-11-04-batch-005.js','utf8'),batch005Context,{timeout:60000});
const batch005=batch005Context.window.questions;
assert.equal(batch005.length,500,'batch 005 retains all 500 source records');
const remediatedBatch005Ids=new Set([
 'QR-002420','QR-002421','QR-002422','QR-002423','QR-002424',
 'QR-002430','QR-002431','QR-002432','QR-002433','QR-002434',
 'QR-002440','QR-002441','QR-002442','QR-002443','QR-002444',
 'QR-002445','QR-002446','QR-002447','QR-002448','QR-002449',
 'QR-002450','QR-002451','QR-002452','QR-002453','QR-002454',
 'QR-002455','QR-002456','QR-002457','QR-002458','QR-002459',
 'QR-002460','QR-002461','QR-002462','QR-002463','QR-002464'
]);
const remediatedBatch005=batch005.filter(q=>remediatedBatch005Ids.has(q.id));
const unremediatedBatch005=batch005.filter(q=>!remediatedBatch005Ids.has(q.id));
assert.equal(remediatedBatch005.length,35,'seven complete five-item cases are substantively remediated');
assert.ok(remediatedBatch005.every(q=>q.reviewStatus==='pending_webmaster_review'&&q.remediationStatus==='manual_revised_pending_webmaster_review'),'remediated items no longer require nurse-educator approval and remain under webmaster review');
assert.ok(remediatedBatch005.every(q=>q.patientProfile&&q.ehr?.tabs?.vitalSigns&&q.ehr?.tabs?.nursesNotes&&q.ehr?.tabs?.labResults),'remediated cases provide structured patient and EHR exhibits');
assert.ok(remediatedBatch005.every(q=>q.rationale&&q.optionRationales&&Object.keys(q.optionRationales).length>=4),'remediated items provide overall and response-specific rationales');
assert.ok(unremediatedBatch005.every(q=>q.reviewStatus==='quarantined_content_quality'),'unremediated batch 005 items remain excluded from student pools');
assert.ok(unremediatedBatch005.every(q=>q.qualityFlags?.includes('five_item_case_structure')&&q.qualityFlags?.includes('synthetic_exhibit_values')),'unremediated batch 005 records retain explicit structural and synthetic-exhibit flags');
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
