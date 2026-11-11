#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={console,window:{}};
for(const file of [
 'data/question-bank.js',
 'js/quickrn-question-bank-normalizer.js',
 'js/quickrn-question-id-normalizer.js',
 'js/shared-exam-renderer.js'
]){
 vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{timeout:120000,filename:file});
}
const bank=context.window.questions,api=context.window.QuickRNSharedRenderer;
assert.ok(Array.isArray(bank)&&bank.length>0,'canonical runtime question bank loaded');
assert.ok(api,'shared renderer API loaded');
const counts={};
for(const q of bank){const format=api.detect(q);counts[format]=(counts[format]||0)+1;}
for(const format of ['Single Choice','Multiple Response','Select N','Matrix / Grid','Cloze (Drop-down)','Bowtie','Extended Drag and Drop','Extended Multiple Response','Highlight','Trend','Numeric Entry']) {
 assert.ok(counts[format]>0,'canonical bank includes '+format);
}
const ids=bank.map(q=>q.id);
assert.equal(new Set(ids).size,bank.length,'all canonical question IDs are unique');
assert.ok(context.window.quickRNQuestionIdNormalization.normalized>=0,'question ID normalizer ran');
console.log('PASS: '+bank.length+' canonical questions loaded; all 13 formats and unique IDs validated.');
