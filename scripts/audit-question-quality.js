#!/usr/bin/env node
'use strict';
// Read-only content-quality audit. Never normalizes IDs, edits records, or changes scoring.
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),context={console,window:{}};
const schema=require('../js/quickrn-question-schema-v2');
function load(p){const f=path.join(root,p);if(fs.existsSync(f))vm.runInNewContext(fs.readFileSync(f,'utf8'),context,{timeout:120000,filename:f});}
load('questions.js');context.questions=context.questions||context.window.questions||[];context.window=context;context.globalThis=context;
[
'js/quickrn-ngn-case-study-addon.js','questions-ngn-supplement.js','questions-bank-v2.js','questions-bank-v2-curated.js','questions-bank-v3-clinical.js',
'questions-bank-expansion-2026-11-04.js','questions-bank-expansion-2026-11-04-batch-002.js','questions-bank-expansion-2026-11-04-batch-003.js',
'questions-bank-ngn-expansion-2026-11-04-batch-004.js','questions-bank-ngn-case-studies-2026-11-04-batch-005.js',
'questions-bank-ngn-supplement-2026-11-04-batch-006.js','questions-bank-numeric-entry-2026-11-04-batch-007.js',
'questions-bank-matrix-grid-2026-11-04-batch-008.js','questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js',
'questions-bank-ngn-priority-2026-11-04-batch-007.js'
].forEach(load);
const bank=Array.isArray(context.questions)?context.questions:[];
schema.normalizeBank(bank); // Audit the same lossless runtime-normalized content consumed by the exam modes.
const formats=['Single Choice','Multiple Response','Select N','Matrix Single','Matrix Multiple','Cloze (Drop-down)','Dropdown Rationale','Bowtie','Extended Drag and Drop','Extended Multiple Response','Highlight','Trend','Numeric Entry'];
function format(q){
const s=[q.ngnType,q.type,q.format,q.questionType,q.itemType].filter(Boolean).join(' ').replace(/_/g,' ').toLowerCase();
if(/numeric/.test(s)||q.numericAnswer!==undefined||q.correctNumericAnswer!==undefined||q.numericRange)return 'Numeric Entry';
if(/select n/.test(s)||q.selectN!==undefined||q.numberToSelect!==undefined||q.requiredSelections!==undefined)return 'Select N';
if(/highlight/.test(s)||q.highlightSegments||q.correctHighlights)return 'Highlight';
if(/trend/.test(s)||q.trendData||q.trends||q.trendTable)return 'Trend';
if(/matrix|grid/.test(s)||q.matrixData||(q.rows&&q.columns)){const r=q.rows||q.matrixData?.rows||[],a=q.correctAnswers||{};return /multiple/.test(s)||r.some((x,i)=>Array.isArray(a[x.id||String(i)])&&a[x.id||String(i)].length>1)?'Matrix Multiple':'Matrix Single';}
if(/dropdown rationale|drop-down rationale/.test(s)||q.dropdownRationale===true)return 'Dropdown Rationale';
if(/cloze|drop-down|dropdown/.test(s)||q.clozeTemplate||q.dropdowns)return 'Cloze (Drop-down)';
if(/bowtie/.test(s)||q.bowtieData)return 'Bowtie';
if(/drag|ordered|order response/.test(s)||q.availableItems||q.correctOrder)return 'Extended Drag and Drop';
if(/extended multiple response/.test(s))return 'Extended Multiple Response';
if(/multiple response|select all|sata/.test(s)||Array.isArray(q.correctAnswers))return 'Multiple Response';
return 'Single Choice';
}
const findings=[],counts=Object.fromEntries(formats.map(x=>[x,0])),seen=new Map(),groups=new Map();
const add=(q,i,severity,code,message)=>findings.push({id:q.id||null,index:i,format:format(q),severity,code,message});
const txt=v=>typeof v==='string'?v:Array.isArray(v)?v.map(txt).join(' '):v&&typeof v==='object'?Object.entries(v).map(([k,x])=>k+' '+txt(x)).join(' '):'';
const html=/(?:<\s*\/?\s*[a-z][^>]*>|&(?:nbsp|lt|gt|amp|quot|#\d+);)/i;
const weakDistractor=/(?:hair and nail growth|routine meal preference|unrelated routine measurement|delay all reassessment until end of shift|give aspirin before imaging|rapidly lower blood pressure to normal)/i;
bank.forEach((q,i)=>{
if(!q||typeof q!=='object'){findings.push({index:i,severity:'error',code:'INVALID_RECORD',message:'Record is not an object.'});return;}
const f=format(q);counts[f]=(counts[f]||0)+1;const id=String(q.id||q.metadata?.id||'');
if(id&&seen.has(id))add(q,i,'error','DUPLICATE_ID','Question ID also appears at index '+seen.get(id)+'.');else if(id)seen.set(id,i);
const stem=String(q.question||q.stem||q.title||q.questionText||'').trim();
if(!stem||stem.length<35)add(q,i,'error','WEAK_OR_MISSING_STEM','Prompt is missing or too short to establish a clinical decision.');
if(/which action is appropriate\?|what should the nurse do\?|review the clinical cues and complete the clinical judgment item/i.test(stem))add(q,i,'warning','GENERIC_TASK_ONLY','Prompt uses a generic task without a specific decision target.');
const opts=Array.isArray(q.options)?q.options:Array.isArray(q.interaction?.options)?q.interaction.options:[];
const labels=opts.map(x=>typeof x==='string'?x:String(x?.text||x?.label||x?.value||''));
if(labels.length&&new Set(labels.map(x=>x.trim().toLowerCase())).size!==labels.length)add(q,i,'error','DUPLICATE_OPTIONS','Choice list contains repeated option text: '+optionText.join(' | '));
if(labels.some(x=>weakDistractor.test(x)))add(q,i,'error','IMPLAUSIBLE_DISTRACTOR','One or more distractors are obviously unrelated or clinically unsafe as written.');
const rationale=q.rationales?.options||q.optionRationales||q.rationalesByOption||{};
if(labels.length&&['Single Choice','Multiple Response','Select N','Extended Multiple Response','Trend'].includes(f)){
const missing=labels.filter((o,j)=>{const keys=[String.fromCharCode(65+j),String(j+1),String(o),String(opts[j]?.id||''),String(opts[j]?.value||''),String(opts[j]?.text||''),String(opts[j]?.label||'')];return !keys.some(k=>k&&Object.prototype.hasOwnProperty.call(rationale,k));});
if(missing.length)add(q,i,'warning','OPTION_RATIONALES_INCOMPLETE',missing.length+' visible option(s) lack an option-specific rationale.');
}
if(!String(q.rationales?.overall||q.rationale||q.explanation||'').trim())add(q,i,'error','MISSING_RATIONALE','No overall clinical rationale is supplied.');
if(!String(q.rationales?.clinicalJudgmentTip||q.clinicalJudgmentTip||q.clinicalJudgmentTips||'').trim())add(q,i,'warning','MISSING_CLINICAL_JUDGMENT_TIP','Clinical Judgment Tip is missing.');
const clinical=[q.patientInfo,q.patientProfile,q.patientInformation,q.ehr,q.tabs,q.clinicalRecord,q.patientRecord,q.caseStudyContext,q.caseStudy,q.scenario,q.clinicalScenario].map(txt).join(' ');
if(html.test(clinical))add(q,i,'error','BROKEN_HTML_IN_CLINICAL_RECORD','Clinical context contains raw HTML or unresolved entities.');
const group=q.caseGroupId||q.caseStudyId;
if(group){
if(!groups.has(group))groups.set(group,[]);groups.get(group).push(q);
if(!String(q.caseStudyContext?.scenario||q.caseStudy?.scenario||q.scenario||q.clinicalScenario||'').trim())add(q,i,'error','CASE_SCENARIO_MISSING','Linked item lacks a separately stored case scenario.');
if(!Number.isInteger(Number(q.caseQuestionNumber||q.sequenceNumber||q.caseStudySequence)))add(q,i,'error','CASE_SEQUENCE_MISSING','Linked item lacks an explicit sequence number.');
if(!Object.keys(q.patientProfile||q.patientInfo||q.patientRecord||{}).length)add(q,i,'error','CASE_PATIENT_PROFILE_MISSING','Linked case lacks a structured patient profile.');
if(!Object.keys(q.ehr||{}).length&&!Array.isArray(q.tabs))add(q,i,'error','CASE_EHR_MISSING','Linked case lacks structured EHR exhibits.');
if(!/(?:BP|blood pressure|bloodPressure).*(?:HR|heart rate|heartRate)|(?:HR|heart rate|heartRate).*(?:RR|respiratory rate|respiratoryRate)|(?:RR|respiratory rate|respiratoryRate).*(?:temp|temperature)/i.test(clinical))add(q,i,'warning','VITAL_SIGNS_INCOMPLETE','Clinical record does not visibly include BP, HR, RR and temperature.');
}
if(f==='Single Choice'){const key=q.correctAnswer??q.correctAnswerText??q.interaction?.answerKey;if(key===undefined||key===null||key==='')add(q,i,'error','SINGLE_CHOICE_KEY_MISSING','Single-choice item has no answer key.');else if(opts.length&&!labels.some((v,j)=>String(v)===String(key)||String(opts[j]?.id||'')===String(key)||String(opts[j]?.value||'')===String(key)))add(q,i,'error','SINGLE_CHOICE_KEY_NOT_VISIBLE','Single-choice key does not match a visible option.');}
if(f==='Multiple Response'||f==='Extended Multiple Response'){const keys=q.correctAnswers??q.interaction?.answerKey;if(!Array.isArray(keys)||!keys.length)add(q,i,'error','MULTI_RESPONSE_KEY_MISSING','Multi-response item needs a non-empty answer array.');else if(opts.length&&keys.some(k=>!labels.includes(String(k))&&!opts.some(o=>String(o?.id||'')===String(k)||String(o?.value||'')===String(k))))add(q,i,'error','MULTI_RESPONSE_KEY_NOT_VISIBLE','One or more correct answers are not visible options.');}
if(f==='Select N'){const n=Number(q.selectN??q.numberToSelect??q.requiredSelections),keys=q.correctAnswers??q.interaction?.answerKey;if(!Number.isInteger(n)||n<1||!Array.isArray(keys)||keys.length!==n)add(q,i,'error','SELECT_N_MAPPING_INVALID','Select-N count must match the number of keyed answers.');}
if(f==='Numeric Entry'&&q.correctNumericAnswer===undefined&&q.numericAnswer===undefined&&q.correctValue===undefined&&q.correctAnswer===undefined)add(q,i,'error','NUMERIC_KEY_MISSING','Numeric entry item has no numeric answer or accepted value.');
if(f==='Highlight'&&!(q.correctHighlights||q.correctAnswers?.highlights||q.highlightAnswer))add(q,i,'error','HIGHLIGHT_KEY_MISSING','Highlight item has no keyed segment(s).');
if(f==='Trend'&&!(q.trendData||q.trends||q.trendTable||q.exhibits))add(q,i,'error','TREND_EXHIBIT_MISSING','Trend item has no longitudinal exhibit or trend data.');
if(f==='Extended Drag and Drop'){const items=q.availableItems||q.draggableItems||[],order=q.correctOrder||q.correctAnswers;if(!items.length||!Array.isArray(order)||!order.length||order.length!==items.length)add(q,i,'error','DRAG_DROP_MAPPING_INVALID','Drag-and-drop item must map every available item into a complete ordered answer.');}
if(f==='Matrix Single'||f==='Matrix Multiple'){const rows=q.rows||q.matrixData?.rows||[],cols=q.columns||q.matrixData?.columns||[...new Set(rows.flatMap(r=>r.options||[]))],a=q.correctAnswers?.matrix||q.correctAnswers||{};if(!rows.length||!cols.length||rows.some((r,j)=>{const k=a[r.id||String(j)];return k===undefined||(Array.isArray(k)?k.some(v=>!cols.includes(v)):!cols.includes(k));}))add(q,i,'error','MATRIX_ANSWER_MAPPING_INVALID','Every matrix row must map to visible column choice(s).');}
if(f==='Bowtie'){const b=q.bowtieData||{},a=q.correctAnswers||{};if(!b.conditions?.length||!b.actions?.length||!b.monitoring?.length||!a.condition||!a.actions?.length||!a.monitoring?.length)add(q,i,'error','BOWTIE_MAPPING_INCOMPLETE','Bowtie requires condition, action and monitoring choices with answer mappings.');}
if(f==='Cloze (Drop-down)'||f==='Dropdown Rationale'){const ds=Array.isArray(q.dropdowns)?q.dropdowns:[];if(!ds.length||ds.some(d=>!d.id||!d.options?.length||d.correct===undefined))add(q,i,'error','CLOZE_MAPPING_INCOMPLETE','Each blank requires an ID, visible choices and a correct mapping.');}
});
for(const [group,items] of groups){const seq=items.map(q=>Number(q.caseQuestionNumber||q.sequenceNumber||q.caseStudySequence)).filter(Number.isFinite).sort((a,b)=>a-b);if(seq.length&&new Set(seq).size!==seq.length)findings.push({caseGroupId:group,severity:'error',code:'CASE_SEQUENCE_DUPLICATE',message:'Case group has duplicate sequence numbers.'});if(seq.length&&seq.some((n,j)=>n!==j+1))findings.push({caseGroupId:group,severity:'warning',code:'CASE_SEQUENCE_GAP',message:'Case sequence is not contiguous from 1.'});}
const summary={generatedAt:new Date().toISOString(),totalRecords:bank.length,uniqueIds:seen.size,caseGroups:groups.size,formatCounts:counts,formatsMissing:formats.filter(x=>!counts[x]),errors:findings.filter(x=>x.severity==='error').length,warnings:findings.filter(x=>x.severity==='warning').length,findings};
fs.mkdirSync(path.join(root,'reports'),{recursive:true});fs.writeFileSync(path.join(root,'reports/question-content-quality-audit.json'),JSON.stringify(summary,null,2));
fs.writeFileSync(path.join(root,'reports/question-content-quality-audit.md'),['# QuickRN question content quality audit','', '- Loaded records: '+summary.totalRecords,'- Unique IDs: '+summary.uniqueIds,'- Case groups: '+summary.caseGroups,'- Errors: '+summary.errors,'- Warnings: '+summary.warnings,'- Missing formats: '+(summary.formatsMissing.join(', ')||'None'),'','## Format coverage','',...Object.entries(counts).map(([k,v])=>'- '+k+': '+v),'','## Findings','',...findings.slice(0,500).map(x=>'- **'+x.severity.toUpperCase()+' '+x.code+'** '+(x.id||x.caseGroupId||('record '+x.index))+' — '+x.message)].join('\n'));
console.log(JSON.stringify({totalRecords:summary.totalRecords,uniqueIds:summary.uniqueIds,caseGroups:summary.caseGroups,formatCounts:counts,formatsMissing:summary.formatsMissing,errors:summary.errors,warnings:summary.warnings},null,2));
if(summary.errors||summary.formatsMissing.length)process.exitCode=1;
