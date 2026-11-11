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
 ['Trend',{type:'Trend',trendData:{headers:['Time','BP'],rows:[{Time:'0800',BP:'120/80'},{Time:'1000',BP:'88/54'}]},options:['Notify provider','Document only'],correctAnswer:'Notify provider'}],
 ['Select N',{type:'Select N',options:['A','B','C'],correctAnswers:['A','B'],selectN:2}],
 ['Matrix / Grid',{type:'Matrix Multiple',rows:[{id:'r1',text:'Select all applicable findings',options:['A','B','C']}],columns:['A','B','C'],correctAnswers:{r1:['A','B']}}],
 ['Cloze (Drop-down)',{type:'Dropdown Rationale',clozeTemplate:'The rationale is {reason}.',options:{reason:['A','B']},correctAnswers:{reason:'A'}}],
 ['Numeric Entry',{type:'Numeric Entry',numericAnswer:42,unit:'mg'}]
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
 {choice:'Notify provider'},
 {choices:['A','B']},
 {matrix:{r1:['A','B']}},
 {cloze:{reason:'A'}},
 {numericEntry:42}
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
assert.ok(splitBowtieHtml.includes('Clinical scenario'),'scenario is explicitly labeled in the left pane');
assert.ok(!splitBowtieHtml.includes('No separate patient exhibits were supplied'),'scenario-only record does not show an empty-record placeholder');
assert.ok(splitBowtieHtml.includes('Complete the bowtie by selecting the priority problem'),'the task remains in the right pane');
const rightPaneHtml = splitBowtieHtml.slice(rightPaneIndex);
assert.ok(!rightPaneHtml.includes('A client is experiencing a sickle cell vaso-occlusive crisis'),'scenario is not repeated in the right pane');
assert.equal(api.grade(splitBowtieFixture,{condition:'Vaso-occlusive crisis',actions:['Administer prescribed analgesia','Provide prescribed hydration'],monitoring:['Pain and response to analgesia','Oxygenation and new chest symptoms']}),true,'bowtie scoring remains unchanged');
const distinctScenario = "A nurse is caring for an 81-year-old adult with dysphagia following a stroke. During a bedside water-swallow screen, the client coughs and develops a wet-sounding voice.";
const distinctTask = "Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.";
const separatedCase = {
 id:'QR-002040', type:'Bowtie', scenario:distinctScenario, clinicalScenario:distinctScenario,
 title:distinctTask, patientInfo:{age:'81-year-old adult',history:'Recent ischemic stroke.'},
 caseStudyContext:{title:'Post-stroke swallowing assessment',summary:'Swallowing safety has not been established; oral intake remains on hold pending formal evaluation.',scenario:distinctScenario},
 bowtieData:{conditions:['Stroke dysphagia'],actions:['Stop oral intake','Offer thin liquids'],monitoring:['Airway status','Oxygen saturation']},
 correctAnswers:{condition:'Stroke dysphagia',actions:['Stop oral intake','Offer thin liquids'],monitoring:['Airway status','Oxygen saturation']}
};
const separatedParts=api.splitPrompt(separatedCase);
assert.equal(separatedParts.scenario,distinctScenario,'dedicated clinical scenario remains separate from profile and case overview');
assert.equal(separatedParts.question,distinctTask,'bowtie task does not repeat the clinical scenario');
assert.ok(!separatedParts.scenario.includes('Recent ischemic stroke'),'patient profile is not appended to the scenario');
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


// Rebuilt NGN presentation contracts (regression coverage): matrix split, ordered feedback, paragraph highlight,
// sequential trend stages, bowtie follow-up ordering, and cloze stem de-duplication.
const matrixSingle={id:'MATRIX-SINGLE-PRESENTATION',type:'Matrix Single',matrixLeftPane:'A 74-year-old client arrives with shortness of breath. Oxygen saturation is 86% on room air. The client is using accessory muscles. Additional history is available in the chart.',matrixTask:'For each finding, select the most appropriate interpretation.',rows:[{id:'oxygen',text:'Oxygen saturation 86%',options:['Expected','Urgent'] }],correctAnswers:{oxygen:'Urgent'}};
const matrixSingleHtml=api.renderReact(matrixSingle,undefined,()=>{},false);
assert.ok(matrixSingleHtml.includes('Oxygen saturation is 86%'),'Matrix Single places concise clinical finding in the left pane');
assert.ok(matrixSingleHtml.includes('For each finding, select the most appropriate interpretation.'),'Matrix Single task appears in the right pane');
assert.ok(!matrixSingleHtml.includes('Additional history is available in the chart.'),'Matrix Single left pane truncates excess scenario sentences');
const ordered={id:'ORDER-FEEDBACK',type:'Extended Drag and Drop',availableItems:['Assess airway','Apply oxygen','Reassess saturation'],correctOrder:['Assess airway','Apply oxygen','Reassess saturation']};
const orderedHtml=api.renderReact(ordered,{order:['Apply oxygen','Assess airway','Reassess saturation']},()=>{},true);
assert.ok(orderedHtml.includes('Sequence review'),'submitted drag-and-drop displays sequence feedback');
assert.ok(orderedHtml.includes('Correct sequence'),'submitted drag-and-drop displays the answer sequence');
assert.ok(orderedHtml.includes('#fee2e2')&&orderedHtml.includes('#dcfce7'),'sequence feedback uses distinct incorrect and correct highlight colors');
const highlightParagraph={id:'HIGHLIGHT-PARAGRAPH',type:'Highlight',nursingNotes:'Nursing note: The client is newly confused and has cool, clammy skin. Blood pressure is 82/46 mm Hg. The client reports mild thirst.',highlightText:'The client is newly confused and has cool, clammy skin. Blood pressure is 82/46 mm Hg. The client reports mild thirst.',highlightSegments:[{id:'confusion',text:'newly confused'},{id:'bp',text:'Blood pressure is 82/46 mm Hg'}],correctHighlights:['confusion','bp']};
const highlightParagraphHtml=api.renderReact(highlightParagraph,{highlights:['confusion']},()=>{},false);
assert.ok(highlightParagraphHtml.includes('Nurses’ Notes'),'highlight nursing note is in the left pane');
assert.ok(highlightParagraphHtml.includes('cool, clammy skin.'),'highlight passage preserves the complete paragraph');
assert.ok(highlightParagraphHtml.includes('#fef08a'),'highlight selections use yellow');
const stagedTrend={id:'STAGED-TREND',type:'Trend',trendData:{stages:[{time:'0800',situation:'The client is alert with BP 118/74 mm Hg.',question:'Which finding is most important now?',options:['Stable perfusion','Severe shock'],correctAnswer:'Stable perfusion'},{time:'0830',situation:'The client becomes confused; BP is 84/50 mm Hg.',question:'What should the nurse do next?',options:['Activate rapid response','Continue routine observation'],correctAnswer:'Activate rapid response'}]}};
const stagedTrendHtml=api.renderReact(stagedTrend,{stageAnswers:{0:'Stable perfusion'}},()=>{},false);
assert.ok(stagedTrendHtml.includes('Stage 1')&&stagedTrendHtml.includes('Stage 2'),'trend displays sequential patient-state stages');
assert.ok(stagedTrendHtml.includes('The client becomes confused'),'later deterioration is shown as a new situation');
assert.equal(api.hasAnswer(stagedTrend,{stageAnswers:{0:'Stable perfusion'}}),false,'trend requires an answer at each stage');
assert.equal(api.hasAnswer(stagedTrend,{stageAnswers:{0:'Stable perfusion',1:'Activate rapid response'}}),true,'trend accepts completed stage responses');
assert.equal(api.grade(stagedTrend,{stageAnswers:{0:'Stable perfusion',1:'Activate rapid response'}}),true,'trend grades the complete sequence of clinical decisions');
const bowtieFollow={id:'BOWTIE-FOLLOWUP',type:'Bowtie',bowtieData:{conditions:['Sepsis'],actions:['Obtain cultures','Start prescribed antibiotics'],monitoring:['Blood pressure'],followUpQuestions:[{question:'After recognizing sepsis, arrange the nursing actions in order.',availableItems:['Obtain cultures','Administer prescribed antibiotics','Reassess response'],correctOrder:['Obtain cultures','Administer prescribed antibiotics','Reassess response']}]},correctAnswers:{condition:'Sepsis',actions:['Obtain cultures','Start prescribed antibiotics'],monitoring:['Blood pressure']}};
const bowtieFollowHtml=api.renderReact(bowtieFollow,{condition:'Sepsis',actions:['Obtain cultures','Start prescribed antibiotics'],monitoring:['Blood pressure'],followUps:{0:['Administer prescribed antibiotics','Obtain cultures','Reassess response']}},()=>{},false);
assert.ok(bowtieFollowHtml.includes('Follow-up 1')||bowtieFollowHtml.includes('After recognizing sepsis'),'bowtie supports a follow-up ordered-response task');
assert.ok(bowtieFollowHtml.includes('draggable="true"'),'bowtie follow-up supports drag-and-drop ordering');
const clozeDuplicate={id:'CLOZE-DEDUP',type:'Cloze (Drop-down)',question:'The client has dehydration. Complete the sentence.',clozeTemplate:'The client has dehydration. The priority intervention is {{action}}.',instruction:'Complete the sentence.',dropdowns:[{id:'action',options:['Administer prescribed fluids','Restrict all fluids'],correct:'Administer prescribed fluids'}],correctAnswers:{action:'Administer prescribed fluids'}};
const clozeDuplicateHtml=api.renderReact(clozeDuplicate,undefined,()=>{},false);
assert.ok(clozeDuplicateHtml.includes('Complete the sentence.'),'cloze task is retained in the right pane');
assert.equal((clozeDuplicateHtml.match(/The client has dehydration\./g)||[]).length,1,'cloze stem does not repeat the same question text above the blank sentence');

console.log('PASS: format render/detection, case-study panels, full-width items, drag-order protection, and draft adapters.');

const clean = context.window.QuickRNSharedRenderer.cleanClinicalText;
assert.equal(clean('Veracity: The nurse verifies the client\'s identity.'), 'The nurse verifies the client\'s identity.');
assert.equal(clean('Mantoux/TB screening: A client returns for the test reading.'), 'A client returns for the test reading.');
assert.equal(clean('Guillain-Barré syndrome: An adult reports progressive weakness.'), 'An adult reports progressive weakness.');

const highlightClinical={id:'HIGHLIGHT-CLINICAL',type:'Highlight',question:'Identify the significant cues.',nursingNotes:'At 0900 the client is alert and oriented. At 1000 the client becomes newly confused and reports severe shortness of breath.',highlightText:'At 1000 the client becomes newly confused and reports severe shortness of breath.',highlightSegments:[{id:'confusion',text:'newly confused'},{id:'dyspnea',text:'severe shortness of breath'}],correctHighlights:['confusion','dyspnea']};
const highlightHtml=api.renderReact(highlightClinical,{highlights:[]},()=>{},false);
assert.ok(highlightHtml.includes('Clinical Record'),'highlight shows provided nursing note in clinical record');
assert.ok(highlightHtml.includes('newly confused'),'highlight passage is rendered as selectable clinical cues');
assert.ok(highlightHtml.includes('quickRNToggleDraft("highlights"'),'highlight cues are interactive');
const highlightNoRecord={...highlightClinical,nursingNotes:undefined,highlightText:'The client develops new-onset chest pain and diaphoresis.'};
const highlightNoRecordHtml=api.renderReact(highlightNoRecord,{highlights:[]},()=>{},false);
assert.ok(highlightNoRecordHtml.includes('question-only'),'highlight without separate clinical record uses a single pane');
const selectN={id:'SELECT-N-INTERACTION',type:'Select N',selectN:2,question:'Which findings require action? Select two.',options:['New confusion','Mild thirst','Oxygen saturation 84%','Warm dry skin'],correctAnswers:['New confusion','Oxygen saturation 84%']};
const selectNHtml=api.renderReact(selectN,{choices:[]},()=>{},false);
assert.ok(selectNHtml.includes('role="checkbox"'),'Select N renders selectable checkbox controls');
assert.ok(selectNHtml.includes("quickRNToggleDraft('choices'"),'Select N options are wired to draft updates');
assert.equal(api.hasAnswer(selectN,{choices:['New confusion','Oxygen saturation 84%']}),true,'Select N accepts exactly the requested number of selections');
assert.equal(api.grade(selectN,{choices:['New confusion','Oxygen saturation 84%']}),true,'Select N grading compares the selected option values');
const clozeFeedback={...clozeDuplicate,correctAnswers:{action:'Administer prescribed fluids'}};
const clozeFeedbackHtml=api.renderReact(clozeFeedback,{cloze:{action:'Restrict all fluids'}},()=>{},true);
assert.ok(clozeFeedbackHtml.includes('qr-feedback-incorrect'),'submitted cloze answers show incorrect feedback');
assert.ok(clozeFeedbackHtml.includes('Correct: Administer prescribed fluids'),'submitted cloze shows the correct response');
const trendRich={id:'TREND-RICH',type:'Trend',trendData:{stages:[0,1,2].map((i)=>({time:['0800','1000','1200'][i],situation:'Patient status changes at time '+i,vitalSigns:{'Heart rate':[88,112,128][i],'Oxygen saturation':[97,91,86][i]},question:'What is the priority response now?',options:['Activate rapid response','Reassess in 1 hour','Document and continue routine care','Offer oral fluids'],correctAnswer:'Activate rapid response'}))}};
const trendHtml=api.renderReact(trendRich,{stageAnswers:{}},()=>{},false);
assert.equal((trendHtml.match(/class="qr-trend-stage"/g)||[]).length,3,'trend presents sequential time points');
assert.equal((trendHtml.match(/class="qr-choice/g)||[]).length,12,'each trend time point renders all four response options');
