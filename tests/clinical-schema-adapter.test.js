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
assert.ok(html.includes('Which action should the nurse take first?'),'task remains in the question pane');
assert.ok(!html.includes('No separate patient exhibits were supplied'),'no empty clinical-record placeholder');
assert.equal((html.match(/J\.D\., 68 years, history of heart failure/g)||[]).length,0,'duplicate patient-information tab content is suppressed when profile is present');
console.log('PASS: new clinical schema maps patient profile and tabs, retains additional tabs, and separates scenario from task.');
