#!/usr/bin/env node
'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context={window:{},console};
for(const file of ['js/quickrn-question-schema-v2.js','data/question-bank.js','data/linked-case-studies.js','js/shared-exam-renderer.js','js/quickrn-bank-startup-validator.js']){
 vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{filename:file});
}
const bank=context.window.QuickRNQuestionBank?.items;
const schema=context.window.QuickRNQuestionSchemaV2;
assert.ok(Array.isArray(bank),'canonical bank must load as an array');
assert.ok(bank.length>=101,'bank must retain the original items and add 60 linked case-study questions');
assert.equal(context.window.QuickRNLinkedCaseStudies?.groups,10,'ten linked case-study groups must load');
assert.equal(context.window.QuickRNLinkedCaseStudies?.items,60,'sixty linked case-study items must load');
assert.equal(context.window.quickRNBankReady,true,'startup validator should allow the canonical bank: '+JSON.stringify(context.window.QuickRNBankStartupValidation?.errors||[]));
const ids=new Set();
const formats=new Set();
for(const [index,q] of bank.entries()){
 const id=String(q.metadata?.id||q.id||'');
 assert.match(id,/^QR-\d{6}$/,'canonical ID for item '+(index+1));
 assert.ok(!ids.has(id),'duplicate ID '+id);ids.add(id);
 formats.add(q.interaction?.type);
 assert.ok(Array.isArray(q.sourceReferences)&&q.sourceReferences.length,'source references for '+id);
 assert.ok(q.sourceReferences.every(r=>typeof r.title==='string'&&r.title.trim()&&String(r.url||'').startsWith('https://')),'titled HTTPS source references for '+id);
 const rendered=context.quickRNRenderClinicalItem(q,{});
 assert.ok(typeof rendered==='string' && rendered.includes('qr-question-panel'),'renderer output for '+id);
 const issues=schema.validate(q,index);
 assert.equal(issues.length,0,'schema validation for '+id+': '+issues.map(x=>x.code+': '+x.message).join('; '));
}
assert.equal(formats.size,13,'active bank must cover all 13 QuickRN formats');
const groups=new Map();bank.filter(q=>q.caseGroupId).forEach(q=>{if(!groups.has(q.caseGroupId))groups.set(q.caseGroupId,[]);groups.get(q.caseGroupId).push(q);});
assert.equal(groups.size,10,'exactly ten linked case-study groups must be present');
for(const [group,items] of groups){assert.equal(items.length,6,group+' must contain six questions');assert.equal(items.map(q=>q.caseQuestionNumber).sort((a,b)=>a-b).join(','),'1,2,3,4,5,6',group+' must have contiguous six-step sequence');}
assert.equal(schema.validateGroups(bank).length,0,'linked case-study groups must pass sequence validation');
console.log('PASS: '+bank.length+' active items; 10 complete six-question case studies; all 13 formats represented; IDs, source references, schema validation, and renderer output passed.');
