const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context={window:{},console};vm.createContext(context);
vm.runInContext(fs.readFileSync('js/shared-exam-renderer.js','utf8'),context,{filename:'shared-exam-renderer.js'});
const api=context.window.QuickRNSharedRenderer;
assert.ok(api,'shared renderer exports its public API');
const scenario='A 68-year-old client arrives with worsening shortness of breath and orthopnea.';
const q={
 id:'QR-SCHEMA-TEST-001',
 type:'Single Choice',
 category:'Adult Health',
 scenario,
 title:scenario+' Which action should the nurse take first?',
 patientProfile:{name:'J.D.',age:'68 years',history:'Heart failure'},
 caseGroupId:'CASE-SCHEMA-001',
 tabs:[
  {label:'Patient Information',content:'J.D., 68 years, history of heart failure'},
  {label:'Nurses’ Notes',content:'0815: Increasing work of breathing.'},
  {label:'Vital Signs',content:'BP 158/92 mm Hg; HR 108/min; RR 26/min; SpO2 89%.'},
  {label:'Laboratory Results',content:'BNP 1,180 pg/mL.'},
  {label:'Discharge Plan',content:'Reassess respiratory status after intervention.'}
 ],
 options:['Escalate care','Reassess in 4 hours','Document and continue routine care'],
 correctAnswer:'Escalate care'
};
const html=api.renderReact(q,undefined,()=>{},false);
assert.ok(html.includes('Clinical Record'),'new schema creates the left clinical record');
assert.ok(html.includes('Nurses’ Notes'),'nursing notes tab is retained');
assert.ok(html.includes('Vital Signs'),'vital-signs tab is retained');
assert.ok(html.includes('Diagnostic Results'),'laboratory results are mapped to the diagnostic-results section');
assert.ok(html.includes('Discharge Plan'),'additional tabs are rendered');
assert.ok(!html.includes('Clinical scenario'),'legacy scenario is not exposed as a separate clinical exhibit');
assert.ok(html.includes('A 68-year-old client arrives with worsening shortness of breath and orthopnea.'),'legacy scenario content is retained in the standardized clinical record');
assert.ok(html.includes('Which action should the nurse take first?'),'task remains in the question pane');
assert.ok(!html.includes('No separate patient exhibits were supplied'),'no empty clinical-record placeholder');
assert.equal((html.match(/J\.D\., 68 years, history of heart failure/g)||[]).length,0,'duplicate patient-information tab content is suppressed when profile is present');

const legacyHtml={
 id:'QR-SCHEMA-TEST-HTML',
 type:'Bowtie',
 title:'&lt;div&gt;A 6-year-old child has drooling and stridor.&lt;/div&gt; Select the priority action.',
 patientProfile:{age:'6 years',history:'Acute drooling and inspiratory stridor.'},
 tabs:[
  {label:'Patient Information',content:'Age 6 years; acute drooling and inspiratory stridor.'},
  {label:'Nurses’ Notes',content:'&lt;p&gt;Child sitting upright and drooling.&lt;/p&gt;'},
  {label:'Nurses Notes',content:'Child sitting upright and drooling.'},
  {label:'Vital Signs',content:'RR 32/min; SpO2 91%.'}
 ],
 bowtieData:{conditions:['Epiglottitis','Croup'],actions:['Keep child calm','Prepare expert airway support'],monitoring:['Oxygenation','Work of breathing']},
 correctAnswers:{condition:'Epiglottitis',actions:['Keep child calm','Prepare expert airway support'],monitoring:['Oxygenation','Work of breathing']},
 rationale:'Drooling and stridor suggest upper-airway compromise. Avoid throat inspection and prepare expert airway support.'
};
const cleaned=api.renderReact(legacyHtml,undefined,()=>{},false);
assert.ok(!cleaned.includes('&lt;div&gt;')&&cleaned.includes('A 6-year-old child has drooling and stridor.'),'HTML-encoded prompt markup is converted to readable text');
assert.ok(!cleaned.includes('&lt;p&gt;'),'HTML-encoded clinical markup is converted to readable text');
assert.equal((cleaned.match(/Child sitting upright and drooling/g)||[]).length,1,'duplicate clinical tab content is rendered once');
assert.equal(api.detect(legacyHtml),'Bowtie','bowtie format remains intact');
const audit=api.auditBank([legacyHtml,{...legacyHtml,id:'QR-SCHEMA-TEST-HTML'}]);
assert.equal(audit.total,2,'bank audit counts all supplied records');
assert.equal(audit.uniqueIds,1,'bank audit detects duplicate question IDs');
assert.deepEqual(Array.from(audit.duplicateIds),['QR-SCHEMA-TEST-HTML'],'duplicate IDs are reported without silently deleting records');
assert.ok(api.validateQuestion(legacyHtml).valid,'complete NGN records pass structural quality validation');


const orderedLegacy={
 id:'QR-SCHEMA-TEST-ORDER',type:'Extended Drag and Drop',
 title:'Place the PPE removal steps in the correct sequence.',
 options:['Remove gloves','Remove gown','Perform hand hygiene'],
 correctOrder:['Remove gloves','Remove gown','Perform hand hygiene'],
 rationale:'Remove contaminated PPE carefully and perform hand hygiene at the appropriate points.'
};
const orderedHtml=api.renderReact(orderedLegacy,undefined,()=>{},false);
assert.ok(orderedHtml.includes('Remove gloves'),'legacy ordered-response options are used when availableItems is absent');
assert.ok(api.validateQuestion(orderedLegacy).valid,'ordered response with legacy options passes structural validation');
const matrixLegacy={
 id:'QR-SCHEMA-TEST-MATRIX',type:'Matrix Multiple',
 title:'Classify each clinical cue.',
 rows:[{id:'cue1',text:'New confusion',options:['Expected','Requires follow-up']},{id:'cue2',text:'Stable vital signs',options:['Expected','Requires follow-up']}],
 correctAnswers:{cue1:['Requires follow-up'],cue2:['Expected']},
 rationale:'New confusion requires prompt assessment; stable vital signs are reassuring in this context.'
};
assert.ok(api.validateQuestion(matrixLegacy).valid,'matrix rows with row-level options pass structural validation without a global columns array');


const batchContext={window:{questions:[]},console};
vm.createContext(batchContext);
vm.runInContext(fs.readFileSync('questions-bank-ngn-expansion-2026-11-04-batch-004.js','utf8'),batchContext,{filename:'batch-004.js'});
const batch=batchContext.window.questions;
assert.equal(batch.length,500,'batch 004 retains all 500 source question records');
assert.ok(batch.some(item=>item.id==='QR-002150'),'the reviewed alcohol-withdrawal question is not silently removed');
assert.deepEqual(Array.from(batchContext.window.quickRNNGNB004DuplicateIds||[]),[],'batch 004 reports no conflicting IDs against the loaded bank');
const repairedTopics=['Acute ischemic stroke','Sepsis with hypotension','Diabetic ketoacidosis','Acute pulmonary edema','Hyperkalemia in kidney injury'];
const pilot=batch.filter(item=>repairedTopics.includes(item.topic));
assert.equal(pilot.length,50,'first five clinical case groups contain 50 records');
assert.equal(pilot.filter(item=>item.rationale).length,45,'45 pilot records have item-specific rationales');
assert.equal(pilot.filter(item=>item.type==='Trend'&&item.reviewStatus==='hold_for_content_revision').length,5,'five invalid trend records are explicitly held for real longitudinal data');
assert.ok(pilot.filter(item=>item.type==='Bowtie').every(item=>item.bowtieData.actions.length===4&&item.bowtieData.monitoring.length===4&&item.correctAnswers.actions.length===2&&item.correctAnswers.monitoring.length===2),'Bowtie action and monitoring choices have separate keyed fields');
assert.ok(pilot.filter(item=>item.type==='Dropdown Rationale').every(item=>item.correctAnswers.reason&&item.dropdowns.find(d=>d.id==='reason').options.every(option=>typeof option==='string')),'dropdown rationale items have a non-null keyed reason');
assert.ok(pilot.filter(item=>item.type==='Highlight').every(item=>item.correctHighlights.length>0&&item.correctHighlights.every(id=>item.highlightSegments.some(segment=>segment.id===id))),'highlight keys refer to actual clinical cue segments');
assert.ok(pilot.filter(item=>item.type==='Select N').every(item=>item.correctAnswers.length===2&&item.correctAnswers.every(answer=>item.options.includes(answer))),'Select-N answer keys match the available choices');
assert.ok(pilot.every(item=>/^QR-\\d{6}$/.test(item.id)),'existing canonical question ID shape is preserved');


const nextTopics=['Acute coronary syndrome','COPD exacerbation','Pulmonary embolism','Acute pancreatitis','Upper GI bleeding'];
const nextPilot=batch.filter(item=>nextTopics.includes(item.topic));
assert.equal(nextPilot.length,50,'case groups 6 through 10 contain 50 records');
assert.equal(nextPilot.filter(item=>item.rationale).length,45,'the second pilot batch has 45 case-specific rationales');
assert.equal(nextPilot.filter(item=>item.type==='Trend'&&item.reviewStatus==='hold_for_content_revision').length,5,'the second pilot batch holds its five invalid Trend records');
assert.ok(nextPilot.every(item=>item.webmasterReviewStatus),'all second-batch records have an explicit webmaster review status');

console.log('PASS: new clinical schema maps patient profile and tabs, retains additional tabs, and separates scenario from task.');
