#!/usr/bin/env node
/* Strict additive Schema v2 audit. Does not invent missing clinical metadata or rationales. */
const fs=require('fs'),vm=require('vm'),path=require('path');
const schema=require('../js/quickrn-question-schema-v2');
const root=path.resolve(__dirname,'..'),browserWindow={},context={console,window:browserWindow};
const load=p=>{const f=path.join(root,p);if(fs.existsSync(f))vm.runInNewContext(fs.readFileSync(f,'utf8'),context,{timeout:120000,filename:f});};
// Load the base bank into its original browser window, then promote that exact array
// onto the shared VM global before loading supplements. Do not replace window first:
// doing so silently discarded the 664 canonical QR-000001–QR-000664 records.
load('questions.js');
context.questions=context.questions||browserWindow.questions||[];
context.window=context;
context.globalThis=context;
const pageFiles=['js/quickrn-ngn-case-study-addon.js','questions-ngn-supplement.js','questions-bank-v2.js','questions-bank-v2-curated.js','questions-bank-v3-clinical.js','questions-bank-expansion-2026-11-04.js','questions-bank-expansion-2026-11-04-batch-002.js','questions-bank-expansion-2026-11-04-batch-003.js','questions-bank-ngn-expansion-2026-11-04-batch-004.js','questions-bank-ngn-case-studies-2026-11-04-batch-005.js','questions-bank-ngn-supplement-2026-11-04-batch-006.js','questions-bank-numeric-entry-2026-11-04-batch-007.js','questions-bank-matrix-grid-2026-11-04-batch-008.js','questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js','questions-bank-ngn-priority-2026-11-04-batch-007.js'];
pageFiles.forEach(load);
const bank=Array.isArray(context.questions)?context.questions:[];
schema.normalizeBank(bank);
const errors=[],ids=new Set(),duplicates=[];
bank.forEach((q,i)=>{
 schema.validate(q,i).forEach(e=>errors.push(e));
 const id=String(q?.metadata?.id||q?.id||'').trim();
 if(id&&ids.has(id))duplicates.push({id,index:i});else if(id)ids.add(id);
});
const counts={};errors.forEach(e=>counts[e.code]=(counts[e.code]||0)+1);
const invalidIndexes=new Set(errors.map(e=>e.index));
const answerKeyMismatches=errors.filter(e=>e.code==='V2_ANSWER_KEY_NOT_IN_OPTIONS');
const incompleteCaseStimuli=errors.filter(e=>e.code==='V2_CASE_STIMULUS_EMPTY');
const report={schemaVersion:2,generatedAt:new Date().toISOString(),totalRecords:bank.length,uniqueIds:ids.size,validRecords:bank.length-invalidIndexes.size,invalidRecords:invalidIndexes.size,duplicateIds:duplicates.length,issueCount:errors.length,issueCounts:counts,samples:errors.slice(0,100),allIssues:errors,duplicates,answerKeyMismatches,incompleteCaseStimuli};
fs.mkdirSync(path.join(root,'reports'),{recursive:true});
fs.writeFileSync(path.join(root,'reports/question-schema-v2-validation.json'),JSON.stringify(report,null,2));
fs.writeFileSync(path.join(root,'reports/question-schema-v2-validation.md'),['# QuickRN Question Schema v2 audit','',`- Total records: ${report.totalRecords}`,`- Valid records: ${report.validRecords}`,`- Invalid records: ${report.invalidRecords}`,`- Duplicate IDs: ${report.duplicateIds}`,`- Schema issues: ${report.issueCount}`,'','## Issue counts','',...Object.entries(counts).map(([k,v])=>`- ${k}: ${v}`),'','## Sample issues','',...report.samples.map(e=>`- ${e.id}: [${e.code}] ${e.message}`)].join('\n'));
console.log(JSON.stringify({totalRecords:report.totalRecords,validRecords:report.validRecords,invalidRecords:report.invalidRecords,duplicateIds:report.duplicateIds,issueCount:report.issueCount,issueCounts:counts},null,2));
if(errors.length||duplicates.length)process.exitCode=1;
