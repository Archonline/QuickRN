#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={console,window:{}};
for(const file of [
 'questions.js',
 'js/quickrn-ngn-case-study-addon.js',
 'questions-ngn-supplement.js',
 'questions-bank-v2.js',
 'questions-bank-v2-curated.js',
 'questions-bank-v3-clinical.js',
 'js/quickrn-question-bank-normalizer.js',
 'js/quickrn-question-id-normalizer.js',
 'js/shared-exam-renderer.js'
]){
 vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{timeout:120000,filename:file});
}
const bank=context.window.questions,api=context.window.QuickRNSharedRenderer;
assert.ok(Array.isArray(bank),'complete runtime question bank loaded');
assert.ok(bank.length>=150,'at least 150 unique questions are available for a complete Predictor session');
assert.ok(bank.length>=85,'at least 85 unique questions are available for a CAT readiness checkpoint');
const counts={};
for(const q of bank){const format=api.detect(q);counts[format]=(counts[format]||0)+1;}
for(const format of ['Single Choice','Multiple Response','Select N','Matrix / Grid','Cloze (Drop-down)','Bowtie','Extended Drag and Drop','Extended Multiple Response','Highlight','Trend','Numeric Entry']) {
 assert.ok(counts[format]>0,'runtime bank includes '+format);
}
assert.ok(context.window.quickRNQuestionBankNormalization.caseStudyGroups>=1,'linked case-study groups normalized');
assert.ok(context.window.quickRNQuestionBankNormalization.caseStudyItems>=6,'linked case-study items receive shared context');
const dragItems=bank.filter(q=>api.detect(q)==='Extended Drag and Drop');
assert.ok(dragItems.every(q=>JSON.stringify(api.toDraft(q,undefined).order)!==JSON.stringify(q.correctOrder)),'drag-and-drop initial order does not expose correct order');
const ids=bank.map(q=>q.id);
assert.equal(new Set(ids).size,bank.length,'all runtime question IDs are unique');
assert.ok(Number.isFinite(context.window.quickRNQuestionIdNormalization.normalized),'duplicate-ID normalization reports a numeric count');
console.log('PASS: '+bank.length+' runtime questions loaded; sufficient unique items for CAT and Predictor; all supported formats and linked-case normalization validated.');

const numeric=bank.find(q=>q.id==='QR-NE-0001');
assert.equal(api.detect(numeric),'Numeric Entry');
assert.equal(api.hasAnswer(numeric,{numericEntry:'0.08'}),true);
assert.equal(api.grade(numeric,{numericEntry:'0.08'}),true);
assert.equal(api.grade(numeric,{numericEntry:'0.2'}),false);
const selectN=bank.find(q=>q.id==='QR-SN-0001');
assert.equal(api.detect(selectN),'Select N');
assert.equal(api.hasAnswer(selectN,{choices:selectN.correctAnswers}),true);
assert.equal(api.hasAnswer(selectN,{choices:[selectN.correctAnswers[0]]}),false);
assert.equal(api.grade(selectN,{choices:selectN.correctAnswers}),true);
assert.equal(api.grade(selectN,{choices:[...selectN.correctAnswers,'Mild nausea']}),false);
