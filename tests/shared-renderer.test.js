#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={window:{},console};vm.runInNewContext(fs.readFileSync('js/shared-exam-renderer.js','utf8'),context);
const api=context.window.QuickRNSharedRenderer;
const fixtures=[
 ['Single Choice',{type:'Single Best Answer',options:['A','B'],correctAnswer:'A'}],
 ['Multiple Response',{type:'Multiple Response',options:['A','B'],correctAnswers:['A']}],
 ['Matrix / Grid',{type:'Matrix',rows:[{id:'r1',text:'Finding'}],columns:['Yes','No'],correctAnswers:{r1:'Yes'}}],
 ['Cloze (Drop-down)',{type:'Cloze',clozeTemplate:'The client has {finding}.',options:{finding:['A','B']},correctAnswers:{finding:'A'}}],
 ['Extended Drag and Drop',{type:'Drag and Drop',availableItems:['A','B'],correctOrder:['A','B']}],
 ['Bowtie',{type:'Bowtie',bowtieData:{actions:['A','B'],conditions:['C'],monitoring:['M','N']},correctAnswers:{condition:'C',actions:['A','B'],monitoring:['M','N']}}],
 ['Extended Multiple Response',{type:'Extended Multiple Response',options:['A','B'],correctAnswers:['A']}],
 ['Highlight',{type:'Highlight',highlightSegments:[{id:'s1',text:'New confusion.'},{id:'s2',text:'Stable appetite.'}],correctHighlights:['s1']}],
 ['Trend',{type:'Trend',trendData:{headers:['Time','BP'],rows:[{Time:'0800',BP:'120/80'},{Time:'1000',BP:'88/54'}]},options:['Notify provider','Document only'],correctAnswer:'Notify provider'}]
];
for(const [expected,q] of fixtures)assert.equal(api.detect(q),expected,expected+' detection');
const highlight=fixtures[7][1];
const highlightHtml=api.renderReact(highlight,undefined,()=>{},false);
assert.match(highlightHtml,/qr-highlight-inline-text/,'highlight findings render inline in the question text');
assert.match(highlightHtml,/qr-highlight-inline-token/,'each highlightable finding is an inline selectable token');
assert.doesNotMatch(highlightHtml,/qr-highlight-list|qr-highlight-check/,'highlight items are not rendered as separate SATA-style option cards');
assert.equal(api.hasAnswer(highlight,{highlights:['s1']}),true);
assert.equal(api.grade(highlight,{highlights:['s1']}),true);
assert.equal(api.grade(highlight,{highlights:['s2']}),false);
const trend=fixtures[8][1];
assert.equal(api.hasAnswer(trend,{choice:'Notify provider'}),true);
assert.equal(api.grade(trend,{choice:'Notify provider'}),true);
// NGN responses may be submitted before every matrix cell, cloze blank, or bowtie section is complete.
assert.equal(api.hasAnswer(fixtures[2][1],{matrix:{r1:'Yes'}}),true,'partial matrix response can be submitted');
assert.equal(api.hasAnswer(fixtures[3][1],{cloze:{finding:'A'}}),true,'partial cloze response can be submitted');
assert.equal(api.hasAnswer(fixtures[5][1],{condition:'C'}),true,'partial bowtie response can be submitted');
assert.equal(api.hasAnswer(fixtures[5][1],{actions:['A']}),true,'partial bowtie action can be submitted');
assert.equal(api.hasAnswer(fixtures[2][1],{matrix:{}}),false,'empty matrix response remains unanswered');
assert.equal(api.hasAnswer(fixtures[3][1],{cloze:{}}),false,'empty cloze response remains unanswered');
assert.equal(api.hasAnswer(fixtures[5][1],{}),false,'empty bowtie response remains unanswered');

const answerDrafts=[
 {choice:'A'},
 {choices:['A']},
 {matrix:{r1:'Yes'}},
 {cloze:{finding:'A'}},
 {order:['A','B']},
 {condition:'C',actions:['A','B'],monitoring:['M','N']},
 {choices:['A']},
 {highlights:['s1']},
 {choice:'Notify provider'}
];
for(let i=0;i<fixtures.length;i++){
 const [format,q]=fixtures[i],draft=answerDrafts[i];
 assert.equal(api.hasAnswer(q,draft),true,format+' answer completeness');
 assert.equal(api.grade(q,draft),true,format+' answer grading');
 const html=context.quickRNRenderClinicalItem(q,draft);
 assert.ok(html.includes('qr-question-panel'),format+' markup');
}

for(let i=0;i<fixtures.length;i++){
 const [format,q]=fixtures[i],draft=answerDrafts[i];
 const legacy=api.fromDraft(q,draft);
 const restored=api.toDraft(q,legacy);
 assert.equal(api.hasAnswer(q,restored),true,format+' legacy draft adapter');
 assert.equal(api.grade(q,restored),true,format+' legacy draft grading');
}
assert.equal(api.detect({isNGN:true,highlightText:'Finding.',correctHighlights:['0']}),'Highlight');
assert.equal(api.detect({type:'NGN Trend Item',trendData:{rows:[]},options:['A']}),'Trend');
assert.equal(api.detect({type:'Extended Multiple Response',options:['A'],correctAnswers:['A']}),'Extended Multiple Response');
assert.equal(api.detect({ngnType:'not_applicable',type:'single_choice',correctAnswer:'D',correctAnswers:['D'],options:[{id:'A'},{id:'B'},{id:'C'},{id:'D'}]}),'Single Choice');

const singleFeedback = api.renderReact(fixtures[0][1],'B',()=>{},true);
assert.match(singleFeedback,/qr-answer-correct/,'submitted single-choice review marks the correct answer');
assert.match(singleFeedback,/qr-answer-incorrect/,'submitted single-choice review marks the selected wrong answer');
const multiFeedback = api.renderReact(fixtures[1][1],['B'],()=>{},true);
assert.match(multiFeedback,/is-checkbox/,'multiple-response choices use checkbox controls');
assert.match(multiFeedback,/qr-answer-correct/,'submitted SATA review marks correct options');
assert.match(multiFeedback,/qr-answer-incorrect/,'submitted SATA review marks selected incorrect options');
assert.doesNotMatch(api.renderReact(fixtures[0][1],'A',()=>{},false),/qr-item-format/,'question type labels are not printed above the question');
assert.match(context.quickRNCleanPrompt('SATA-046: Select the correct intervention.'),/Select the correct intervention\./,'item IDs are removed from displayed prompt text');

const noRecord = {type:'Single Best Answer',options:['A','B'],correctAnswer:'A'};
const noRecordHtml = api.renderReact(noRecord,undefined,()=>{},false);
assert.ok(noRecordHtml.includes('question-only'),'items without exhibits render as a full-width question panel');
assert.ok(!noRecordHtml.includes('class="qr-ehr"'),'items without exhibits do not render an empty clinical-record column');
const caseFixture = {id:'CASE-TEST-1',type:'single_choice',ngnType:'case_study',caseTitle:'Acute case',patientInfo:'BP 88/54 mmHg; HR 122/min.',caseStudyContext:{title:'Acute case',summary:'BP 88/54 mmHg; HR 122/min.',stepIndex:2,stepCount:5},options:['A','B'],correctAnswer:'A'};
const caseHtml = api.renderReact(caseFixture,undefined,()=>{},false);
assert.ok(caseHtml.includes('Case overview'),'case-study patient information is rendered');
assert.ok(caseHtml.includes('Item 2 of 5'),'case-study progress is rendered');
const splitBowtieFixture = {id:'QR-003390',type:'Bowtie',scenario:'A client is experiencing a sickle cell vaso-occlusive crisis. The client reports severe pain, with no evidence of acute chest syndrome at the initial assessment.',title:'Complete the bowtie by selecting the priority problem, two actions, and two parameters to monitor.',bowtieData:{conditions:['Vaso-occlusive crisis'],actions:['Administer prescribed analgesia','Provide prescribed hydration'],monitoring:['Pain and response to analgesia','Oxygenation and new chest symptoms']},correctAnswers:{condition:'Vaso-occlusive crisis',actions:['Administer prescribed analgesia','Provide prescribed hydration'],monitoring:['Pain and response to analgesia','Oxygenation and new chest symptoms']}};
const splitBowtieHtml = api.renderReact(splitBowtieFixture,undefined,()=>{},false);
const leftPaneIndex = splitBowtieHtml.indexOf('class="qr-ehr');
const rightPaneIndex = splitBowtieHtml.indexOf('class="qr-question-panel');
assert.ok(leftPaneIndex >= 0 && leftPaneIndex < rightPaneIndex,'QR-003390 clinical scenario renders in the left pane');
assert.ok(splitBowtieHtml.includes('Presenting Information'),'clinical narrative is presented in the left pane without the legacy scenario heading');
assert.ok(!splitBowtieHtml.includes('No separate patient exhibits were supplied'),'scenario-only record does not show an empty-record placeholder');
assert.ok(splitBowtieHtml.includes('Complete the bowtie by selecting the priority problem'),'the task remains in the right pane');
const rightPaneHtml = splitBowtieHtml.slice(rightPaneIndex);
assert.ok(!rightPaneHtml.includes('A client is experiencing a sickle cell vaso-occlusive crisis'),'scenario is not repeated in the right pane');
assert.equal(api.grade(splitBowtieFixture,{condition:'Vaso-occlusive crisis',actions:['Administer prescribed analgesia','Provide prescribed hydration'],monitoring:['Pain and response to analgesia','Oxygenation and new chest symptoms']}),true,'bowtie scoring remains unchanged');
const dragFixture = {id:'DND-TEST-1',type:'Drag and Drop',availableItems:['First','Second','Third'],correctOrder:['First','Second','Third']};
assert.notDeepEqual(api.toDraft(dragFixture,undefined).order,dragFixture.correctOrder,'drag-and-drop does not expose the answer order on first render');

// Production-shaped NGN regression cases: row-specific Matrix options, nested keys,
// dropdown rationale, numeric accepted ranges, and clinical scenario separation.
const matrixByRow = {
 id:'MATRIX-PER-ROW', type:'Matrix Multiple',
 rows:[
  {id:'cue',text:'New confusion and hypotension',options:['Priority cue','Routine finding','Not relevant']},
  {id:'action',text:'Activate rapid response',options:['Appropriate','Inappropriate']}
 ],
 correctAnswers:{matrix:{cue:['Priority cue'],action:['Appropriate']}}
};
assert.equal(api.detect(matrixByRow),'Matrix / Grid');
const matrixHtml=api.renderReact(matrixByRow,{matrix:{cue:['Priority cue'],action:['Appropriate']}},()=>{},false);
assert.match(matrixHtml,/Priority cue/,'matrix renders row-specific response choices');
assert.match(matrixHtml,/type="checkbox"/,'matrix multiple rows render checkbox choices');
assert.doesNotMatch(matrixHtml,/Matrix rows or columns are missing/,'matrix rows with local options do not require a global columns array');
const dropdownRationale={id:'DROPDOWN-RATIONALE',type:'Dropdown Rationale',clozeTemplate:'The finding indicates {{problem}}; the nurse should {{action}}.',dropdowns:[{id:'problem',options:['Sepsis','Expected response'],correct:'Sepsis'},{id:'action',options:['Escalate care','Wait until next shift'],correct:'Escalate care'}],correctAnswers:{problem:'Sepsis',action:'Escalate care'}};
assert.equal(api.detect(dropdownRationale),'Cloze (Drop-down)');
assert.match(api.renderReact(dropdownRationale,{cloze:{problem:'Sepsis'}},()=>{},false),/<select/,'dropdown-rationale blanks render as selects');
const numericRange={id:'NUMERIC-RANGE',type:'Numeric Entry',correctValue:75,acceptedRange:[74.9,75.1],unit:'mL'};
assert.equal(api.detect(numericRange),'Numeric Entry');
assert.match(api.renderReact(numericRange,{numericEntry:'75'},()=>{},false),/id="qr-numeric-answer"/,'numeric-entry control is rendered');
const splitHighlight={id:'HIGHLIGHT-SPLIT',type:'Highlight',scenario:'A client develops sudden confusion and hypotension.',title:'A client develops sudden confusion and hypotension. Highlight the findings that require immediate attention.',highlightSegments:[{id:'s1',text:'Sudden confusion'},{id:'s2',text:'Stable appetite'}],correctHighlights:['s1']};
const splitHighlightHtml=api.renderReact(splitHighlight,undefined,()=>{},false);
assert.ok(splitHighlightHtml.indexOf('Clinical Record')<splitHighlightHtml.indexOf('qr-question-panel'),'highlight scenario appears in the clinical record pane');
assert.ok(!splitHighlightHtml.slice(splitHighlightHtml.indexOf('qr-question-panel')).includes('A client develops sudden confusion and hypotension.'),'highlight scenario is not repeated in the task pane');

console.log('PASS: format render/detection, case-study panels, full-width items, drag-order protection, and draft adapters.');
const blankClinicalFields={id:'EMPTY-RECORD',type:'Single Choice',title:'Which action?',options:['A','B'],correctAnswer:'A',caseGroupId:'',patientProfile:{},tabs:{},ehr:{},caseStudyContext:{}};
const blankClinicalHtml=api.renderReact(blankClinicalFields,undefined,()=>{},false);
assert.doesNotMatch(blankClinicalHtml,/class="qr-ehr"/,'empty caseGroupId, patientProfile, tabs, ehr, and case context never render an empty clinical-record pane');
assert.doesNotMatch(blankClinicalHtml,/caseGroupId|patientProfile|Clinical scenario|Clinical Record/,'empty schema metadata and scenario placeholders are never printed');
const objectVitals={id:'VITALS-OBJECT',type:'Single Choice',title:'Which action should the nurse take?',scenario:'A client is admitted with acute respiratory distress.',patientInfo:{age:'68 years',temperature:'38.6 °C',respiratoryRate:'30/min',heartRate:'124/min',pulseRate:'124/min',bloodPressure:'86/48 mm Hg',oxygenSaturation:'88% on room air'},options:['A','B'],correctAnswer:'A'};
const objectVitalsHtml=api.renderReact(objectVitals,undefined,()=>{},false);
assert.match(objectVitalsHtml,/Vital Signs/,'patient profile vital-sign fields are promoted into the EHR Vital Signs tab');
assert.match(objectVitalsHtml,/Temperature: 38\.6 °C/,'temperature is visible in EHR');
assert.match(objectVitalsHtml,/Respiratory Rate: 30\/min/,'respiratory rate is visible in EHR');
assert.match(objectVitalsHtml,/Heart Rate: 124\/min/,'heart rate is visible in EHR');
assert.match(objectVitalsHtml,/Pulse Rate: 124\/min/,'pulse rate is visible in EHR');
assert.match(objectVitalsHtml,/Blood Pressure: 86\/48 mm Hg/,'blood pressure is visible in EHR');
assert.match(objectVitalsHtml,/Oxygen Saturation: 88% on room air/,'oxygen saturation is visible in EHR');
const htmlClinical={id:'HTML-CLEAN',type:'Single Choice',title:'Which action?',scenario:'<p>CLINICAL SCENARIO</p><p>A client reports new chest pain.</p>',options:['A','B'],correctAnswer:'A'};
const htmlClinicalHtml=api.renderReact(htmlClinical,undefined,()=>{},false);
assert.doesNotMatch(htmlClinicalHtml,/CLINICAL SCENARIO|<p>|<\/p>/,'legacy HTML tags and scenario headings are removed from clinical text');
assert.match(htmlClinicalHtml,/A client reports new chest pain/,'clinical narrative remains readable after HTML cleanup');

const scenarioVitals={id:'VITALS-FROM-SCENARIO',type:'Single Choice',scenario:'A client arrives with temperature 38.6 °C, respiratory rate 30/min, heart rate 124/min, pulse rate 122/min, blood pressure 86/48 mm Hg, and oxygen saturation 88%.',title:'Which action is the priority?',options:['A','B'],correctAnswer:'A'};
const scenarioVitalsHtml=api.renderReact(scenarioVitals,undefined,()=>{},false);
assert.match(scenarioVitalsHtml,/Temperature: 38\.6 C/,'explicit temperature in the scenario is promoted to the EHR');
assert.ok(scenarioVitalsHtml.includes('Respiratory Rate: 30 /min'),'explicit respiratory rate is promoted to the EHR');
assert.ok(scenarioVitalsHtml.includes('Heart Rate: 124 /min'),'explicit heart rate is promoted to the EHR');
assert.ok(scenarioVitalsHtml.includes('Pulse Rate: 122 /min'),'explicit pulse rate is promoted to the EHR');
assert.ok(scenarioVitalsHtml.includes('Blood Pressure: 86/48 mm Hg'),'explicit blood pressure is promoted to the EHR');
assert.ok(scenarioVitalsHtml.includes('Oxygen Saturation: 88 %'),'explicit oxygen saturation is promoted to the EHR');

const scenarioLabs={id:'LABS-FROM-SCENARIO',type:'Single Choice',scenario:'Laboratory results: sodium 128 mEq/L, potassium 6.2 mEq/L, glucose 450 mg/dL, BUN 38 mg/dL, creatinine 2.1 mg/dL, and lactate 3.8 mmol/L.',title:'Which action is the priority?',options:['A','B'],correctAnswer:'A'};
const scenarioLabsHtml=api.renderReact(scenarioLabs,undefined,()=>{},false);
assert.match(scenarioLabsHtml,/Diagnostic Results/,'explicit laboratory data is promoted into the EHR');
assert.ok(scenarioLabsHtml.includes('Sodium: 128 mEq/L'),'sodium value is shown');
assert.ok(scenarioLabsHtml.includes('Potassium: 6.2 mEq/L'),'potassium value is shown');
assert.ok(scenarioLabsHtml.includes('Glucose: 450 mg/dL'),'glucose value is shown');
assert.ok(scenarioLabsHtml.includes('Creatinine: 2.1 mg/dL'),'creatinine value is shown');
assert.ok(scenarioLabsHtml.includes('Lactate: 3.8 mmol/L'),'lactate value is shown');

const clean = context.window.QuickRNSharedRenderer.cleanClinicalText;
assert.equal(clean('Veracity: The nurse verifies the client\'s identity.'), 'The nurse verifies the client\'s identity.');
assert.equal(clean('Mantoux/TB screening: A client returns for the test reading.'), 'A client returns for the test reading.');
assert.equal(clean('Guillain-Barré syndrome: An adult reports progressive weakness.'), 'An adult reports progressive weakness.');
