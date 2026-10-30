#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={console,window:{}};
vm.runInNewContext(fs.readFileSync('questions.js','utf8'),context,{timeout:120000,filename:'questions.js'});
vm.runInNewContext(fs.readFileSync('js/quickrn-question-id-normalizer.js','utf8'),context);
vm.runInNewContext(fs.readFileSync('js/shared-exam-renderer.js','utf8'),context,{timeout:120000,filename:'shared-exam-renderer.js'});
const bank=context.window.questions,api=context.window.QuickRNSharedRenderer;
assert.ok(Array.isArray(bank),'production question bank loaded');
assert.equal(bank.length,4500,'production question count');
const counts={};
for(const q of bank){const format=api.detect(q);counts[format]=(counts[format]||0)+1;}
assert.deepEqual({...counts},{
 'Single Choice':2000,
 'Matrix / Grid':300,
 'Cloze (Drop-down)':300,
 'Extended Drag and Drop':300,
 'Bowtie':300,
 'Extended Multiple Response':300,
 'Multiple Response':1000
});
const ids=bank.map(q=>q.id);
assert.equal(new Set(ids).size,bank.length,'all normalized question IDs are unique');
assert.equal(context.window.quickRNQuestionIdNormalization.normalized,271,'expected duplicate-ID collision count');
console.log('PASS: all 4,500 production items match the shared renderer contract; 271 duplicate IDs normalized.');
