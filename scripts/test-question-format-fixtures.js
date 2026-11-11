'use strict';
const assert=require('node:assert/strict');
const schema=require('../js/quickrn-question-schema-v2.js');
const common=(id,type,answerKey,extra={})=>({
 metadata:{id:'QR-'+String(id).padStart(6,'0'),category:'Adult Health',clientNeeds:'Physiological Adaptation',cjmmStep:'Analyze Cues',difficulty:3},
 interaction:{stem:'A nurse reviews a client assessment and determines the safest evidence-based nursing response. Which response is supported by the clinical findings?',type,options:['Assess the client','Document the finding','Notify the provider'],answerKey,scoring:{method:['Multiple Response','Select N','Matrix Single','Matrix Multiple','Cloze (Drop-down)','Dropdown Rationale','Bowtie','Extended Drag and Drop','Extended Multiple Response','Highlight','Trend'].includes(type)?'plus_minus':'0/1'}},
 rationales:{overall:'The response is based on the client assessment and prioritizes safe nursing care.',options:{'Assess the client':'Assessment supports a safe clinical decision.','Document the finding':'Documentation does not replace needed assessment or intervention.','Notify the provider':'Escalation is appropriate when indicated by the assessment.'},clinicalJudgmentTip:'Reassess the client and connect each action to the available clinical cues.'},
 ...extra
});
const fixtures=[
 common(1,'Single Choice','Assess the client'),
 common(2,'Multiple Response',['Assess the client','Notify the provider']),
 common(3,'Select N',['Assess the client','Notify the provider'],{selectN:2}),
 common(4,'Matrix Single',{r1:'Yes'},{rows:[{id:'r1',text:'Finding requires follow-up',options:['Yes','No']}],columns:['Yes','No']}),
 common(5,'Matrix Multiple',{r1:['A','B']},{rows:[{id:'r1',text:'Select applicable findings',options:['A','B','C']}],columns:['A','B','C']}),
 common(6,'Cloze (Drop-down)',{priority:'Assess the client'},{clozeTemplate:'The priority is {{priority}}.',dropdowns:[{id:'priority',options:['Assess the client','Document the finding'],correct:'Assess the client'}]}),
 common(7,'Dropdown Rationale',{reason:'The finding may indicate deterioration'},{clozeTemplate:'The rationale is {{reason}}.',dropdowns:[{id:'reason',options:['The finding may indicate deterioration','The finding is expected'],correct:'The finding may indicate deterioration'}]}),
 common(8,'Bowtie',{condition:'Clinical deterioration',actions:['Assess the client'],monitoring:['Vital signs']},{bowtieData:{conditions:['Clinical deterioration','Stable status'],actions:['Assess the client'],monitoring:['Vital signs']}}),
 common(9,'Extended Drag and Drop',['Assess','Intervene','Reassess'],{availableItems:['Assess','Intervene','Reassess'],correctOrder:['Assess','Intervene','Reassess']}),
 common(10,'Extended Multiple Response',['Assess the client','Notify the provider']),
 common(11,'Highlight',['s1'],{highlightSegments:[{id:'s1',text:'The client has a new concerning finding.'}],correctHighlights:['s1']}),
 common(12,'Trend',['Worsening'],{trendData:{rows:[['Time','Finding'],['0800','Stable'],['1000','Worsening']]}}),
 common(13,'Numeric Entry',42,{numericAnswer:42})
];
assert.equal(schema.FORMATS.length,13);
const failures=[];
fixtures.forEach((fixture,index)=>{
 try{
  const normalized=schema.normalize({...fixture});
  const issues=schema.validate(normalized,index);
  if(issues.length)failures.push({format:fixture.interaction.type,issues});
 }catch(error){failures.push({format:fixture.interaction.type,error:error.message});}
});
if(failures.length){
 console.error(JSON.stringify(failures,null,2));
 process.exitCode=1;
}else console.log('All 13 QuickRN question formats passed schema fixture validation.');
