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
const caseFixture={id:'QR-TEST-CASE-EHR',type:'Single Choice',ngnType:'Single Choice',category:'Adult Health',topic:'Sepsis',clientNeed:'Physiological Adaptation',difficulty:'High',title:'Which finding requires immediate follow-up?',scenario:'68-year-old adult admitted with pneumonia.',options:['Hypotension','Chronic hypertension','Remote smoking history','Stable appetite'],correctAnswer:'Hypotension',caseGroupId:'QR-TEST-CASE-EHR',caseStudyContext:{id:'QR-TEST-CASE-EHR',summary:'68-year-old adult admitted with pneumonia.',medicalHistory:'Type 2 diabetes mellitus.',nursesNotes:'New confusion and urine output 15 mL in the last hour.',vitalSigns:'T 39.1 °C; HR 128/min; RR 30/min; BP 82/46 mm Hg; SpO2 89%.',labResults:'Lactate 4.2 mmol/L; creatinine 1.8 mg/dL.',orders:'Obtain cultures and initiate prescribed sepsis treatment.'}};
schema.normalize(caseFixture);
if(!caseFixture.ehr||!caseFixture.ehr.nursesNotes||!caseFixture.ehr.vitalSigns||!caseFixture.ehr.diagnosticResults||!caseFixture.ehr.orders)failures.push({id:caseFixture.id,issue:'caseStudyContext EHR fields did not bridge to renderer fields'});
const caseHtml=renderer.renderReact(caseFixture,{},()=>{},false);
if(/No separate patient exhibits were supplied/.test(caseHtml))failures.push({id:caseFixture.id,issue:'populated case study rendered an empty-exhibits placeholder'});
if(!/Lab Results/.test(caseHtml)||!/Orders/.test(caseHtml))failures.push({id:caseFixture.id,issue:'laboratory results or provider orders are not displayed as EHR sections'});
if(/Clinical scenario/.test(caseHtml)&&/68-year-old adult admitted with pneumonia/.test(caseHtml))failures.push({id:caseFixture.id,issue:'duplicate case summary rendered as a clinical-scenario panel'});
const metadataOnly={id:'QR-TEST-METADATA-ONLY',type:'Single Choice',category:'Adult Health',clientNeed:'Physiological Adaptation',difficulty:'Moderate',title:'Which response is appropriate?',options:['A','B'],correctAnswer:'A',caseGroupId:'QR-TEST-METADATA-ONLY',caseStudyContext:{id:'QR-TEST-METADATA-ONLY',stepIndex:1,stepCount:1}};
schema.normalize(metadataOnly);
const metadataHtml=renderer.renderReact(metadataOnly,{},()=>{},false);
if(/No separate patient exhibits were supplied|<aside class="qr-ehr"/.test(metadataHtml))failures.push({id:metadataOnly.id,issue:'metadata-only case displayed an empty clinical-record panel'});
const batch007CaseRecords=bank.filter(q=>{const n=Number(String(q&&q.id||'').replace(/^QR-/,''));return n>=4320&&n<=4519;});
const batch007CaseGroups=new Set(batch007CaseRecords.map(q=>q.caseGroupId)).size;
const batch007CaseMissingFeedback=batch007CaseRecords.filter(q=>!q.rationale||!q.optionRationales||!Object.keys(q.optionRationales).length||!q.clinicalJudgmentTip||!q.ehr?.vitalSigns||!q.ehr?.diagnosticResults||!q.ehr?.orders).length;
if(batch007CaseRecords.length!==200)failures.push({issue:'batch-007 case-study record count mismatch',count:batch007CaseRecords.length,expected:200});
if(batch007CaseGroups!==40)failures.push({issue:'batch-007 case-study grouping mismatch',groups:batch007CaseGroups,expected:40});
if(batch007CaseMissingFeedback)failures.push({issue:'batch-007 case-study records missing EHR or feedback fields',count:batch007CaseMissingFeedback});
const batch007NumericRecords=bank.filter(q=>{const n=Number(String(q&&q.id||'').replace(/^QR-/,''));return n>=4020&&n<=4169;});
const batch007NumericMissingFeedback=batch007NumericRecords.filter(q=>!q.rationale||!q.clinicalJudgmentTip).length;
const batch007NumericUniqueRationales=new Set(batch007NumericRecords.map(q=>q.rationale)).size;
if(batch007NumericRecords.length!==150)failures.push({issue:'batch-007 numeric record count mismatch',count:batch007NumericRecords.length,expected:150});
if(batch007NumericMissingFeedback)failures.push({issue:'batch-007 numeric items missing calculation rationale or safety tip',count:batch007NumericMissingFeedback});
if(batch007NumericUniqueRationales<25)failures.push({issue:'batch-007 numeric rationales remain overly repetitive',uniqueRationales:batch007NumericUniqueRationales,expectedAtLeast:25});
const batch007MatrixRecords=bank.filter(q=>{const n=Number(String(q&&q.id||'').replace(/^QR-/,''));return n>=4170&&n<=4319;});
const batch007MatrixTopics=new Set(batch007MatrixRecords.map(q=>q.topic)).size;
const batch007MatrixMissingFeedback=batch007MatrixRecords.filter(q=>!q.rationale||!q.optionRationales||!Object.keys(q.optionRationales).length||!q.clinicalJudgmentTip).length;
if(batch007MatrixRecords.length!==15)failures.push({issue:'batch-007 repeated matrix copies were not removed',count:batch007MatrixRecords.length,expected:15});
if(batch007MatrixTopics!==15)failures.push({issue:'batch-007 retained matrix items are not unique by topic',unique:batch007MatrixTopics,expected:15});
if(batch007MatrixMissingFeedback)failures.push({issue:'batch-007 matrix items missing row-specific feedback',count:batch007MatrixMissingFeedback});
const batch003Records=bank.filter(q=>{const n=Number(String(q&&q.id||'').replace(/^QR-/,''));return (n>=1422&&n<=1919)||n===4521||n===4522;});
const batch003MissingFeedback=batch003Records.filter(q=>!q.rationale||!q.optionRationales||!Object.keys(q.optionRationales).length||!q.clinicalJudgmentTip).length;
const batch003UniqueRationales=new Set(batch003Records.map(q=>q.rationale)).size;
if(batch003Records.length!==500)failures.push({issue:'batch-003 record count mismatch',count:batch003Records.length,expected:500});
if(batch003MissingFeedback)failures.push({issue:'batch-003 missing option-specific rationales or clinical judgment tips',count:batch003MissingFeedback});
if(batch003UniqueRationales<40)failures.push({issue:'batch-003 rationales remain overly repetitive',uniqueRationales:batch003UniqueRationales,expectedAtLeast:40});
const batch008Records=bank.filter(q=>{const n=Number(String(q&&q.id||'').replace(/^QR-/,''));return n>=3620&&n<=3819;});
const batch008UniqueCases=new Set(batch008Records.map(q=>String(q.topic)+'::'+String(q.scenario))).size;
const batch008MissingFeedback=batch008Records.filter(q=>!q.rationale||!q.optionRationales||!Object.keys(q.optionRationales).length||!q.clinicalJudgmentTip).length;
if(batch008Records.length!==40)failures.push({issue:'batch-008 duplicate matrix items were not removed',count:batch008Records.length,expected:40});
if(batch008UniqueCases!==40)failures.push({issue:'batch-008 matrix items are not unique by clinical case',unique:batch008UniqueCases,expected:40});
if(batch008MissingFeedback)failures.push({issue:'batch-008 missing row-specific rationale or clinical judgment tip',count:batch008MissingFeedback});
const batch005Records=bank.filter(q=>{const n=Number(String(q&&q.id||'').replace(/^QR-/,''));return n>=2420&&n<=2919;});
const batch005MissingFeedback=batch005Records.filter(q=>!q.rationale||!q.optionRationales||!Object.keys(q.optionRationales).length||!q.clinicalJudgmentTip).length;
const batch005UniqueRationales=new Set(batch005Records.map(q=>q.rationale)).size;
if(batch005Records.length!==500)failures.push({issue:'batch-005 record count mismatch',count:batch005Records.length,expected:500});
if(batch005MissingFeedback)failures.push({issue:'batch-005 missing rationale, option feedback, or clinical judgment tip',count:batch005MissingFeedback});
if(batch005UniqueRationales<40)failures.push({issue:'batch-005 rationales remain overly repetitive',uniqueRationales:batch005UniqueRationales,expectedAtLeast:40});
const batch006Records=bank.filter(q=>{const n=Number(String(q&&q.id||'').replace(/^QR-/,''));return n>=2920&&n<=3419;});
const batch006MissingFeedback=batch006Records.filter(q=>!q.rationale||!q.optionRationales||!Object.keys(q.optionRationales).length||!q.clinicalJudgmentTip).length;
const batch006UniqueRationales=new Set(batch006Records.map(q=>q.rationale)).size;
if(batch006Records.length!==500)failures.push({issue:'batch-006 record count mismatch',count:batch006Records.length,expected:500});
if(batch006MissingFeedback)failures.push({issue:'batch-006 missing rationale, option feedback, or clinical judgment tip',count:batch006MissingFeedback});
if(batch006UniqueRationales<40)failures.push({issue:'batch-006 rationales remain overly repetitive',uniqueRationales:batch006UniqueRationales,expectedAtLeast:40});
const batch009Groups=new Map();
bank.filter(q=>String(q&&q.caseGroupId||'').startsWith('QR-CASE-NEW-')).forEach(q=>{const id=String(q.caseGroupId);if(!batch009Groups.has(id))batch009Groups.set(id,[]);batch009Groups.get(id).push(q);});
const batch009WithEhr=[...batch009Groups.values()].filter(group=>group.some(q=>q.ehr?.vitalSigns&&q.ehr?.diagnosticResults)).length;
const batch009Records=[...batch009Groups.values()].flat();
const batch009RemediatedItems=batch009Records.filter(q=>q.optionRationales&&q.clinicalJudgmentTip).length;
const batch009MissingClinicalData=batch009Records.filter(q=>!q.ehr?.vitalSigns||!q.ehr?.diagnosticResults||!q.ehr?.orders||!Array.isArray(q.options)||!q.options.length||!q.rationale).length;
const batch009KeyMismatches=batch009Records.filter(q=>q.type==='Multiple Response'?!Array.isArray(q.correctAnswers)||q.correctAnswers.some(answer=>!q.options.includes(answer)):!q.options.includes(q.correctAnswer)).length;
if(batch009WithEhr<40)failures.push({issue:'batch-009 detailed EHR enrichment incomplete',groupsWithEhr:batch009WithEhr,expectedAtLeast:40});
if(batch009RemediatedItems<200)failures.push({issue:'batch-009 clinical question remediation incomplete',items:batch009RemediatedItems,expectedAtLeast:200});
if(batch009MissingClinicalData)failures.push({issue:'batch-009 items missing clinical exhibits, options, or rationales',count:batch009MissingClinicalData});
if(batch009KeyMismatches)failures.push({issue:'batch-009 answer keys do not match options',count:batch009KeyMismatches});
const formats={};
const ids=new Set();
let rendered=0,scored=0;
for(const q of bank){
 if(q&&q.id){if(ids.has(String(q.id)))failures.push({id:q.id,issue:'duplicate ID'});ids.add(String(q.id));}
 const format=renderer.detect(q);
 formats[format]=(formats[format]||0)+1;
 if(format==='Numeric Entry'&&/(?:\d+-100|°\d|\d+°)/.test(String(q.title||q.question||'')))failures.push({id:q.id,format,issue:'numeric stem contains a corrupted unit or temperature token'});
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
 batch007CaseRecords:batch007CaseRecords.length,
 batch007CaseGroups,
 batch007CaseMissingFeedback,
 batch007NumericRecords:batch007NumericRecords.length,
 batch007NumericMissingFeedback,
 batch007NumericUniqueRationales,
 batch007MatrixRecords:batch007MatrixRecords.length,
 batch007MatrixTopics,
 batch007MatrixMissingFeedback,
 batch003Records:batch003Records.length,
 batch003MissingFeedback,
 batch003UniqueRationales,
 batch008Records:batch008Records.length,
 batch008UniqueCases,
 batch008MissingFeedback,
 batch005Records:batch005Records.length,
 batch005MissingFeedback,
 batch005UniqueRationales,
 batch006Records:batch006Records.length,
 batch006MissingFeedback,
 batch006UniqueRationales,
 batch009Groups:batch009Groups.size,
 batch009GroupsWithEhr:batch009WithEhr,
 batch009RemediatedItems,
 batch009MissingClinicalData,
 batch009KeyMismatches,
 formatCounts:formats,
 examPages:modeChecks,
 failures:failures.length,
 failureSamples:failures.slice(0,25),
 note:'This validates loader integration and shared item rendering/scoring with correct-answer fixtures. It does not simulate browser interaction, timers, CAT adaptation, predictor calculations, or persistence.'
};
console.log(JSON.stringify(result,null,2));
if(failures.length||missingPanels.length||rendered!==bank.length||scored!==bank.length)process.exitCode=1;
