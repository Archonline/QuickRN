#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context={window:{},console};
for(const file of ['js/quickrn-question-schema-v2.js','data/question-bank.js','js/quickrn-bank-startup-validator.js']){
 vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{filename:file});
}
const bank=context.window.QuickRNQuestionBank?.items;
const schema=context.window.QuickRNQuestionSchemaV2;
assert.ok(Array.isArray(bank),'canonical bank must load as an array');
assert.equal(bank.length,13,'seed bank should contain 13 items');
assert.equal(context.window.quickRNBankReady,true,'startup validator should allow the seeded bank');
const ids=new Set();
const formats=new Set();
for(const [index,q] of bank.entries()){
 const id=String(q.metadata?.id||q.id||'');
 assert.match(id,/^QR-\\d{6}$/,'canonical ID for item '+(index+1));
 assert.ok(!ids.has(id),'duplicate ID '+id);ids.add(id);
 formats.add(q.interaction?.type);
 assert.ok(Array.isArray(q.sourceReferences)&&q.sourceReferences.length,'source references for '+id);
 assert.ok(q.sourceReferences.every(r=>/^https:\/\//.test(r.url||'')),'HTTPS source references for '+id);
 const issues=schema.validate(q,index);
 assert.deepEqual(issues.map(x=>x.code),[],'schema validation for '+id);
}
assert.equal(formats.size,13,'seed batch should cover all 13 QuickRN formats');
console.log('PASS: '+bank.length+' active items; all 13 formats represented; IDs, source references, and schema validation passed.');
