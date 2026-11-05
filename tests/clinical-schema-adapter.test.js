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
assert.ok(!cleaned.includes('&lt;div&gt;')&&!cleaned.includes('<div>A 6-year-old'),'HTML-encoded prompt markup is converted to readable text');
assert.ok(!cleaned.includes('&lt;p&gt;'),'HTML-encoded clinical markup is converted to readable text');
assert.equal((cleaned.match(/Child sitting upright and drooling/g)||[]).length,1,'duplicate clinical tab content is rendered once');
assert.ok(cleaned.includes('Bowtie'),'bowtie format remains intact');
const audit=api.auditBank([legacyHtml,{...legacyHtml,id:'QR-SCHEMA-TEST-HTML'}]);
assert.equal(audit.total,2,'bank audit counts all supplied records');
assert.equal(audit.uniqueIds,1,'bank audit detects duplicate question IDs');
assert.deepEqual(Array.from(audit.duplicateIds),['QR-SCHEMA-TEST-HTML'],'duplicate IDs are reported without silently deleting records');
assert.ok(api.validateQuestion(legacyHtml).valid,'complete NGN records pass structural quality validation');

console.log('PASS: new clinical schema maps patient profile and tabs, retains additional tabs, and separates scenario from task.');
