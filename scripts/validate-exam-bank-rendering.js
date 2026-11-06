#!/usr/bin/env node
/* Run from repository root: node scripts/validate-exam-bank-rendering.js
 * Loader + shared-renderer + scoring regression test for all four exam pages.
 * This is a Node VM test, not a substitute for browser interaction tests.
 */
const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context={
 console,
 document:{
  head:{appendChild(){}},
  documentElement:{appendChild(){}},
  createElement(){return {textContent:'',id:''};}
 }
};
context.window=context;
vm.createContext(context);
function load(relative){
 const filename=path.resolve(root,relative);
 if(!fs.existsSync(filename))throw new Error('Missing required script: '+relative);
 vm.runInContext(fs.readFileSync(filename,'utf8'),context,{filename,timeout:120000});
}
const bankModules=[
 'js/quickrn-ngn-case-study-addon.js',
 'questions-ngn-supplement.js',
 'questions-bank-v2.js',
 'questions-bank-v2-curated.js',
 'questions-bank-v3-clinical.js',
 'questions-bank-expansion-2026-11-04.js',
 'questions-bank-expansion-2026-11-04-batch-002.js',
 'questions-bank-expansion-2026-11-04-batch-003.js',
 'questions-bank-ngn-expansion-2026-11-04-batch-004.js',
 'questions-bank-ngn-case-studies-2026-11-04-batch-005.js',
 'questions-bank-ngn-supplement-2026-11-04-batch-006.js',
 'questions-bank-numeric-entry-2026-11-04-batch-007.js',
 'questions-bank-matrix-grid-2026-11-04-batch-008.js',
 'questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js',
 'questions-bank-ngn-priority-2026-11-04-batch-007.js'
];
bankModules.forEach(load);
[
 'js/quickrn-question-schema-v2.js',
 'js/quickrn-question-bank-normalizer.js',
 'js/quickrn-case-study-sequencer.js',
 'js/quickrn-question-id-normalizer.js',
 'js/shared-exam-renderer.js',
 'js/quickrn-ngn-compat.js',
 'js/quickrn-ngn-scoring.js'
].forEach(load);
const bank=context.questions;
const renderer=context.QuickRNSharedRenderer;
if(!Array.isArray(bank)||!renderer||!context.QuickRNNgnScoring)throw new Error('Question bank, renderer, or scorer did not initialize.');
function answerDraft(q){
 const f=renderer.detect(q);
 if(f==='Bowtie'){
  const c=q.correctAnswers||{};
  return {condition:c.condition,actions:c.actions,monitoring:c.monitoring};
 }
 if(f==='Matrix / Grid'||f==='Matrix Single'||f==='Matrix Multiple')return {matrix:q.correctAnswers?.matrix||q.correctAnswers||{}};
 if(f==='Cloze (Drop-down)'||f==='Dropdown Rationale'){
  const c=q.correctAnswers||q.clozeAnswers||{};
  return {cloze:c.cloze||c};
 }
 if(f==='Highlight')return {highlights:q.correctHighlights||q.correctAnswers?.highlights||[]};
 if(f==='Trend')return {choice:q.correctAnswer??q.correctAnswers?.choice??q.correctAnswers};
 if(f==='Extended Drag and Drop')return {order:q.correctOrder||q.availableItems||q.options||[]};
 if(f==='Numeric Entry')return {numericEntry:q.correctNumericAnswer??q.numericAnswer??q.correctAnswer};
 if(f==='Select N'||f==='Multiple Response'||f==='Extended Multiple Response'){
  const value=q.correctAnswers??q.correctAnswer;
  return {choices:Array.isArray(value)?value:[value].filter(Boolean)};
 }
 return {choice:q.correctAnswer??q.correctAnswerText??q.correctAnswers};
}
const failures=[];
const missingPanels=[];
const schema=context.QuickRNQuestionSchemaV2;
const caseFixture={id:'QR-TEST-CASE-EHR',type:'Single Choice',ngnType:'Single Choice',category:'Adult Health',topic:'Sepsis',clientNeed:'Physiological Adaptation',difficulty:'High',title:'Which finding requires immediate follow-up?',scenario:'A 68-year-old client is admitted with pneumonia and develops impaired perfusion.',options:['Hypotension','Chronic hypertension','Remote smoking history','Stable appetite'],correctAnswer:'Hypotension',caseGroupId:'QR-TEST-CASE-EHR',caseStudyContext:{id:'QR-TEST-CASE-EHR',summary:'68-year-old adult admitted with pneumonia.',medicalHistory:'Type 2 diabetes mellitus.',nursesNotes:'New confusion and urine output 15 mL in the last hour.',vitalSigns:'T 39.1 °C; HR 128/min; RR 30/min; BP 82/46 mm Hg; SpO2 89%.',labResults:'Lactate 4.2 mmol/L; creatinine 1.8 mg/dL.',orders:'Obtain cultures and initiate prescribed sepsis treatment.'}};
schema.normalize(caseFixture);
if(!caseFixture.ehr||!caseFixture.ehr.nursesNotes||!caseFixture.ehr.vitalSigns||!caseFixture.ehr.diagnosticResults||!caseFixture.ehr.orders)failures.push({id:caseFixture.id,issue:'caseStudyContext EHR fields did not bridge to renderer fields'});
const caseHtml=renderer.renderReact(caseFixture,{},()=>{},false);
if(/No separate patient exhibits were supplied/.test(caseHtml))failures.push({id:caseFixture.id,issue:'populated case study rendered an empty-exhibits placeholder'});
if(/Clinical scenario/.test(caseHtml)&&/68-year-old adult admitted with pneumonia/.test(caseHtml))failures.push({id:caseFixture.id,issue:'duplicate case summary rendered as a clinical-scenario panel'});
const metadataOnly={id:'QR-TEST-METADATA-ONLY',type:'Single Choice',category:'Adult Health',clientNeed:'Physiological Adaptation',difficulty:'Moderate',title:'Which response is appropriate?',options:['A','B'],correctAnswer:'A',caseGroupId:'QR-TEST-METADATA-ONLY',caseStudyContext:{id:'QR-TEST-METADATA-ONLY',stepIndex:1,stepCount:1}};
schema.normalize(metadataOnly);
const metadataHtml=renderer.renderReact(metadataOnly,{},()=>{},false);
if(/No separate patient exhibits were supplied|<aside class="qr-ehr"/.test(metadataHtml))failures.push({id:metadataOnly.id,issue:'metadata-only case displayed an empty clinical-record panel'});
const formats={};
const ids=new Set();
let rendered=0,scored=0;
for(const q of bank){
 if(q&&q.id){if(ids.has(String(q.id)))failures.push({id:q.id,issue:'duplicate ID'});ids.add(String(q.id));}
 const format=renderer.detect(q);
 formats[format]=(formats[format]||0)+1;
 try{
  const html=renderer.renderReact(q,{},()=>{},false);
  if(typeof html!=='string'||html.length<50)failures.push({id:q.id,format,issue:'empty render'});
  else rendered++;
  if(/class=["'][^"']*qr-missing/.test(html))missingPanels.push({id:q.id,format});
 }catch(error){failures.push({id:q.id,format,issue:'render exception: '+error.message});}
 try{
  const grade=renderer.grade(q,answerDraft(q));
  if(!grade||grade.isCorrect!==true)failures.push({id:q.id,format,issue:'correct-answer scoring test failed',grade});
  else scored++;
 }catch(error){failures.push({id:q.id,format,issue:'scoring exception: '+error.message});}
}
const requiredScripts=[...bankModules,'js/shared-exam-renderer.js','js/quickrn-ngn-compat.js','js/quickrn-ngn-scoring.js','js/quickrn-question-schema-v2.js','js/quickrn-question-bank-normalizer.js','js/quickrn-question-id-normalizer.js','js/quickrn-exam-app.js'];
const modePages=['selfstudy.html','timed.html','cat.html','predictor.html'];
const modeChecks=modePages.map(page=>{
 const html=fs.readFileSync(path.resolve(root,page),'utf8');
 const missing=requiredScripts.filter(script=>!html.includes(script));
 if(missing.length)failures.push({page,issue:'missing shared exam scripts',missing});
 return {page,loadedScripts:requiredScripts.length-missing.length,requiredScripts:requiredScripts.length,missing};
});
const result={
 totalRecords:bank.length,
 uniqueIds:ids.size,
 rendered,
 scored,
 missingFormatPanels:missingPanels.length,
 formatCounts:formats,
 examPages:modeChecks,
 failures:failures.length,
 failureSamples:failures.slice(0,25),
 note:'This validates loader integration and shared item rendering/scoring with correct-answer fixtures. It does not simulate browser interaction, timers, CAT adaptation, predictor calculations, or persistence.'
};
console.log(JSON.stringify(result,null,2));
if(failures.length||missingPanels.length||rendered!==bank.length||scored!==bank.length)process.exitCode=1;
