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
const schemaIssueQueue=bank.map((q,index)=>({q,index,issues:errors.filter(e=>e.index===index)})).filter(x=>x.issues.length).map(({q,index,issues})=>({index,id:q?.metadata?.id||q?.id||null,category:q?.metadata?.category||q?.category||null,topic:q?.topic||null,type:q?.interaction?.type||q?.type||null,clientNeeds:q?.metadata?.clientNeeds||q?.clientNeed||q?.clientNeeds||null,cjmmStep:q?.metadata?.cjmmStep||q?.cjmmStep||null,difficulty:q?.metadata?.difficulty||q?.difficulty||null,stem:q?.interaction?.stem||q?.question||q?.stem||q?.title||null,options:q?.interaction?.options||q?.options||null,answerKey:q?.interaction?.answerKey||q?.correctAnswers||q?.correctAnswer||null,overallRationale:q?.rationales?.overall||q?.rationale||q?.explanation||null,optionRationales:q?.rationales?.options||q?.optionRationales||null,clinicalJudgmentTip:q?.rationales?.clinicalJudgmentTip||q?.clinicalJudgmentTip||null,caseGroupId:q?.caseGroupId||q?.caseStudyId||q?.stimulus?.caseGroupId||null,caseStudy:q?.caseStudy||q?.caseStudyContext||q?.patientInfo||null,issues:issues.map(e=>({code:e.code,message:e.message}))}));
const educatorStatus=q=>String(q&&(q.educatorReview&&q.educatorReview.status||q.clinicalReview&&q.clinicalReview.status)||'pending').toLowerCase();
const educatorReviewStatusCounts={};
bank.forEach(q=>{const status=educatorStatus(q);educatorReviewStatusCounts[status]=(educatorReviewStatusCounts[status]||0)+1;});
const isEducatorApproved=q=>educatorStatus(q)==='approved'&&String(q.educatorReview&&q.educatorReview.reviewedBy||q.clinicalReview&&q.clinicalReview.reviewedBy||'').trim()&&String(q.educatorReview&&q.educatorReview.reviewedAt||q.clinicalReview&&q.clinicalReview.reviewedAt||'').trim();
const educatorApprovedCount=bank.filter(isEducatorApproved).length;
const educatorReviewQueue=bank.map((q,index)=>({q,index,status:educatorStatus(q),approved:isEducatorApproved(q)})).filter(x=>!x.approved).map(({q,index,status})=>({index,id:q?.metadata?.id||q?.id||null,status,reviewedBy:q?.educatorReview?.reviewedBy||q?.clinicalReview?.reviewedBy||null,reviewedAt:q?.educatorReview?.reviewedAt||q?.clinicalReview?.reviewedAt||null,category:q?.metadata?.category||q?.category||null,clientNeeds:q?.metadata?.clientNeeds||q?.clientNeeds||q?.clientNeed||null,topic:q?.metadata?.topic||q?.topic||null,type:q?.interaction?.type||q?.type||null,stem:q?.interaction?.stem||q?.question||q?.stem||q?.title||null}));
const report={schemaVersion:2,generatedAt:new Date().toISOString(),totalRecords:bank.length,uniqueIds:ids.size,schemaValidation:{validRecords:bank.length-invalidIndexes.size,invalidRecords:invalidIndexes.size,issueCount:errors.length,issueCounts:counts},educatorReview:{statusCounts:educatorReviewStatusCounts,approvedCount:educatorApprovedCount,notApprovedCount:bank.length-educatorApprovedCount,approvalComplete:educatorApprovedCount===bank.length},duplicateIds:duplicates.length,answerKeyMismatches,incompleteCaseStimuli,samples:errors.slice(0,100),allIssues:errors,duplicates,schemaIssueQueue};
fs.mkdirSync(path.join(root,'reports'),{recursive:true});
fs.writeFileSync(path.join(root,'reports/question-schema-v2-validation.json'),JSON.stringify(report,null,2));
fs.writeFileSync(path.join(root,'reports/question-schema-v2-schema-issue-queue.json'),JSON.stringify({generatedAt:report.generatedAt,totalRecords:report.totalRecords,records:schemaIssueQueue},null,2));
fs.writeFileSync(path.join(root,'reports/question-schema-v2-educator-review-queue.json'),JSON.stringify({generatedAt:report.generatedAt,totalRecords:report.totalRecords,approvedCount:educatorApprovedCount,statusCounts:educatorReviewStatusCounts,records:educatorReviewQueue},null,2));
fs.writeFileSync(path.join(root,'reports/question-schema-v2-validation.md'),['# QuickRN Question Schema v2 audit','',`- Total records: ${report.totalRecords}`,`- Valid records: ${report.schemaValidation.validRecords}`,`- Invalid records: ${report.schemaValidation.invalidRecords}`,`- Duplicate IDs: ${report.duplicateIds}`,`- Schema issues: ${report.schemaValidation.issueCount}`,`- Educator-approved records: ${educatorApprovedCount}`,`- Educator review statuses: ${JSON.stringify(educatorReviewStatusCounts)}`,'','## Schema issue counts','',...Object.entries(counts).map(([k,v])=>`- ${k}: ${v}`),'','## Sample issues','',...report.samples.map(e=>`- ${e.id}: [${e.code}] ${e.message}`)].join('\n'));
console.log(JSON.stringify({totalRecords:report.totalRecords,schemaValidation:report.schemaValidation,educatorReview:report.educatorReview,duplicateIds:report.duplicateIds,issueCounts:counts},null,2));
if(errors.length||duplicates.length)process.exitCode=1;
