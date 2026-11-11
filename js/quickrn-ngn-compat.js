/* Unified QuickRN NGN compatibility layer for all four exam modes. */
(function(root){
'use strict';
const api=root.QuickRNSharedRenderer;
if(!api||root.QuickRNNGNCompatLoaded)return;
root.QuickRNNGNCompatLoaded=true;
const baseRender=root.quickRNRenderClinicalItem,baseToDraft=api.toDraft,baseFromDraft=api.fromDraft,baseGrade=api.grade,baseHasAnswer=api.hasAnswer,baseSummary=api.answerSummary;
const s=v=>String(v==null?'':v),ov=(o,i)=>typeof o==='string'?o:(o&&(o.id||o.value||o.text||o.label))||String.fromCharCode(65+i),ot=o=>typeof o==='string'?o:(o&&(o.text||o.label||o.value))||'';
const same=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every(x=>b.includes(x));
const esc=v=>root.quickRNEscape?root.quickRNEscape(v):s(v);
function canon(src){
 if(!src||typeof src!=='object')return {};
 if(src.__quickRNCompat)return src;
 const q={...src},raw=[q.type,q.format,q.questionType,q.itemType,q.ngnType].filter(Boolean).join(' ').replace(/[_-]/g,' ').toLowerCase();
 let f='Single Choice';
 if(/matrix.*multiple|multiple.*matrix/.test(raw))f='Matrix Multiple';
 else if(/matrix|grid/.test(raw)||(q.rows&&q.columns))f='Matrix Single';
 else if(/select n|select exactly/.test(raw)||q.nRequired||q.selectN!==undefined||q.numberToSelect!==undefined||q.requiredSelections!==undefined||q.selectCount!==undefined)f='Select N';
 else if(/bow ?tie/.test(raw)||q.bowtieConfig||q.bowtieData||q.bowtie)f='Bowtie';
 else if(/dropdown rationale|dropdown cloze|cloze|drop down|dropdown/.test(raw)||q.dropdowns||q.clozeTemplate||q.clozeOptions)f='Cloze (Drop-down)';
 else if(/highlight/.test(raw)||q.tokens||q.highlightText||q.highlightSegments||q.correctHighlights)f='Highlight';
 else if(/trend/.test(raw)||q.trendData||q.trends||q.trendTable)f='Trend';
 else if(/numeric|number entry/.test(raw)||q.correctValue!==undefined||q.correctNumericAnswer!==undefined||q.numericAnswer!==undefined||q.numericRange||q.acceptedRange)f='Numeric Entry';
 else if(/ordered|drag|reorder/.test(raw)||q.items||q.availableItems||q.correctOrder)f='Extended Drag and Drop';
 else if(/extended multiple response/.test(raw))f='Extended Multiple Response';
 else if(/sata|select all|multiple response/.test(raw))f='Multiple Response';
 else if(/single|one best answer|one answer|multiple choice/.test(raw))f='Single Choice';
 else if(Array.isArray(q.correctAnswers)||Array.isArray(q.correctAnswer)){const key=q.correctAnswers??q.correctAnswer;f=key.length>1?'Multiple Response':'Single Choice';}
 const cleanText=v=>api.cleanPrompt(s(v));
 q.ngnType=f;
 q.title=cleanText(q.title||q.promptTitle||q.questionText||q.question||q.prompt||'Clinical question');
 q.instruction=cleanText(q.instruction||(q.prompt&&q.prompt!==q.title?q.prompt:''));
 q.cleanTitle=cleanText(q.cleanTitle||q.title);
 q.cleanInstruction=cleanText(q.cleanInstruction||q.instruction);
 const tabs=q.caseStudy&&Array.isArray(q.caseStudy.tabs)?q.caseStudy.tabs:[];
 if(!q.ehr&&tabs.length){q.ehr={};['nursesNotes','vitalSigns','diagnosticResults','historyPhysical'].forEach((key,i)=>{if(tabs[i])q.ehr[key]=s(tabs[i].content||tabs[i].text);});}
 const opts=Array.isArray(q.options)?q.options:[];
 if(f==='Single Choice'){
  const singleKey=q.correctAnswerText??q.correctAnswer??q.correctAnswers;
  if(Array.isArray(singleKey)&&singleKey.length)q.correctAnswer=singleKey[0];
  else if(q.correctAnswer==null&&q.correctAnswerText==null&&singleKey!==undefined)q.correctAnswer=singleKey;
  if(q.correctAnswer==null&&q.correctAnswerText==null){const x=opts.find(o=>o&&typeof o==='object'&&o.correct);if(x)q.correctAnswer=x.id||x.value||x.text||x.label;}
 }
 if((f==='Multiple Response'||f==='Select N')&&!Array.isArray(q.correctAnswers)){const a=opts.map((o,i)=>({o,i})).filter(x=>x.o&&typeof x.o==='object'&&x.o.correct).map(x=>ov(x.o,x.i));if(a.length)q.correctAnswers=a;}
 if(f==='Select N'){
  const answerKey=q.correctAnswers??q.correctAnswer??q.interaction?.answerKey;
  q.selectN=Number(q.selectN||q.nRequired||q.numberToSelect||q.requiredSelections||q.selectCount||(Array.isArray(answerKey)?answerKey.length:0));
  if(q.correctAnswers==null&&Array.isArray(answerKey))q.correctAnswers=answerKey;
 }
 if(f==='Bowtie'){const b=q.bowtieConfig||{},old=q.bowtieData||{},c=b.correct||q.correctAnswers?.bowtie||q.correctAnswers||{};q.bowtieData={actions:old.actions||b.actionsPool||[],conditions:old.conditions||b.conditionsPool||[],monitoring:old.monitoring||old.params||b.paramsPool||b.parametersPool||[]};q.correctAnswers={condition:c.condition||'',actions:c.actions||[],monitoring:c.monitoring||c.params||c.parameters||[]};}
 if(f==='Cloze (Drop-down)'){if(Array.isArray(q.dropdowns)){const om={},cm={};q.dropdowns.forEach(d=>{om[d.id]=d.options||[];if(d.correct!==undefined)cm[d.id]=d.correct;});q.options=q.options&&!Array.isArray(q.options)?q.options:om;q.correctAnswers=q.correctAnswers||cm;}q.clozeTemplate=s(q.clozeTemplate||q.templateText||q.template||q.questionText||q.question||'').replace(/\[([A-Za-z0-9_-]+)\]/g,'{$1}');}
 if(f==='Highlight'&&Array.isArray(q.tokens)){q.highlightSegments=q.tokens.filter(t=>t.selectable!==false).map(t=>({id:String(q.tokens.indexOf(t)),text:t.text||t.label||''}));q.correctHighlights=q.tokens.map((t,i)=>t.correct?String(i):null).filter(x=>x!==null);}
 if(f==='Matrix Multiple'||f==='Matrix Single'){q.matrixMode=f==='Matrix Multiple'?'multiple':'single';q.rows=q.rows||(q.matrixData&&q.matrixData.rows)||[];q.columns=q.columns||(q.matrixData&&q.matrixData.columns)||[];const c={...(q.correctAnswers||{})};q.rows.forEach((r,i)=>{const id=r.id||String(i);if(c[id]===undefined&&r.correct!==undefined)c[id]=r.correct;if(Array.isArray(r.correct))q.matrixMode='multiple';});q.correctAnswers=c;}
 if(f==='Numeric Entry'){q.correctNumericAnswer=q.correctNumericAnswer??q.correctValue??q.numericAnswer??q.correctAnswer;if(Array.isArray(q.acceptedRange))q.numericRange={min:q.acceptedRange[0],max:q.acceptedRange[1]};q.unit=q.unit||q.numericUnit||'';}
 if(f==='Extended Drag and Drop'&&Array.isArray(q.items)){const ordered=[...q.items].sort((a,b)=>Number(a.correctOrder||0)-Number(b.correctOrder||0));q.availableItems=q.items.map(x=>typeof x==='string'?x:s(x.text||x.label||x.value));q.correctOrder=q.correctOrder||ordered.map(x=>typeof x==='string'?x:s(x.text||x.label||x.value));}
 q.__quickRNCompat=true;return q;
}
function setCell(id,col,multi){const m={...((quickRNDraft&&quickRNDraft.matrix)||{})};if(multi){const a=Array.isArray(m[id])?[...m[id]]:[];m[id]=a.includes(col)?a.filter(x=>x!==col):[...a,col];}else m[id]=col;root.quickRNSetDraft('matrix',m);}
root.quickRNCompatSetMatrixCell=setCell;

function renderSelectN(x,d,submitted){
 const opts=Array.isArray(x.options)?x.options:[],limit=Number(x.selectN||x.nRequired||x.numberToSelect||x.requiredSelections||x.selectCount||(Array.isArray(x.correctAnswers)?x.correctAnswers.length:Array.isArray(x.correctAnswer)?x.correctAnswer.length:0)),selected=Array.isArray(d.choices)?d.choices:[],correct=Array.isArray(x.correctAnswers??x.correctAnswer)?(x.correctAnswers??x.correctAnswer):[x.correctAnswers??x.correctAnswer],norm=v=>s(v).trim().toLowerCase();
 const buttons=opts.map((o,i)=>{const value=ov(o,i),label=ot(o),on=selected.some(v=>norm(v)===norm(value)||norm(v)===norm(label)),key=!!(o&&typeof o==='object'&&o.correct)||correct.some(v=>norm(v)===norm(value)||norm(v)===norm(label)),style=submitted?(key?'background:#dcfce7;border:2px solid #16a34a;color:#166534':(on?'background:#fee2e2;border:2px solid #dc2626;color:#991b1b':'')):'';return '<button type="button" class="qr-choice '+(on?'selected':'')+'" data-qr-selectn-value="'+esc(value)+'" aria-pressed="'+on+'" '+(submitted?'disabled':'')+' style="'+style+'"><span class="qr-choice-mark is-checkbox">'+(on?'✓':String.fromCharCode(65+i)+'.')+'</span><span class="qr-choice-copy">'+esc(label)+(submitted?(key?'<small class="qr-feedback-correct"> ✓ Correct answer</small>':(on?'<small class="qr-feedback-incorrect"> ✕ Incorrect</small>':'')):'')+'</span></button>';}).join('');
 return '<div class="qr-clinical-layout question-only"><section class="qr-question-panel"><div class="qr-question-head"><h2>'+esc(x.selectNInstruction||x.instruction||x.question||x.stem||'Select the required nursing actions.')+'</h2></div><div class="qr-response-area"><p class="qr-help">Select exactly '+limit+' '+(limit===1?'answer':'answers')+'. <span class="qr-select-n-count">'+selected.length+'/'+limit+' selected</span></p>'+buttons+'</div></section></div>';
}
function renderTrend(x,d,submitted){
 const stages=Array.isArray(x.trendData?.stages)?x.trendData.stages:[],answers=d.stageAnswers||{};
 const html=stages.map((stage,i)=>{const observations=stage.vitalSigns||stage.vitals||stage.observations||stage.data||{},rows=Array.isArray(observations)?observations.map((v,j)=>Array.isArray(v)?v:[v.label||v.name||('Finding '+(j+1)),v.value??v.result??'']):Object.entries(observations).map(([k,v])=>[k,typeof v==='object'?(v.value??v.result??JSON.stringify(v)):v]);const table=rows.length?'<div class="qr-table-wrap"><table class="qr-trend-table"><tbody>'+rows.map(row=>'<tr><th>'+esc(row[0])+'</th><td>'+esc(row[1])+'</td></tr>').join('')+'</tbody></table></div>':'';const options=Array.isArray(stage.options)?stage.options:(Array.isArray(stage.distractors)?[stage.correctAnswer??stage.answerKey,...stage.distractors]:[]),correct=stage.correctAnswer??stage.answerKey,buttons=options.map((o,j)=>{const value=ov(o,j),label=ot(o),on=String(answers[i]??'')===String(value)||String(answers[i]??'')===String(label),key=String(correct)===String(value)||String(correct)===String(label),style=submitted?(key?'background:#dcfce7;border:2px solid #16a34a;color:#166534':(on?'background:#fee2e2;border:2px solid #dc2626;color:#991b1b':'')):'';return '<button type="button" class="qr-choice '+(on?'selected':'')+'" data-qr-trend-stage="'+i+'" data-qr-trend-value="'+esc(value)+'" aria-pressed="'+on+'" '+(submitted?'disabled':'')+' style="'+style+'"><span class="qr-choice-mark is-radio">'+String.fromCharCode(65+j)+'.</span><span class="qr-choice-copy">'+esc(label)+(submitted?(key?'<small class="qr-feedback-correct"> ✓ Correct answer</small>':(on?'<small class="qr-feedback-incorrect"> ✕ Incorrect</small>':'')):'')+'</span></button>';}).join('');return '<section class="qr-trend-stage" style="border:1px solid #cbd5e1;border-radius:10px;padding:14px;margin-bottom:14px"><h3 style="font-weight:800;margin-bottom:8px">Time point '+(i+1)+' · '+esc(stage.time||stage.timestamp||stage.interval||'')+'</h3><div class="qr-trend-situation" style="padding:12px;background:#f8fafc;border-left:4px solid #2563a6;border-radius:6px;margin-bottom:10px"><strong>Clinical situation</strong><p>'+esc(stage.situation||stage.patientStatus||stage.update||stage.clinicalSituation||'')+'</p></div>'+table+'<p style="font-weight:700;margin:12px 0">'+esc(stage.question||'Based on the change in the patient’s condition, what should the nurse do next?')+'</p>'+buttons+'</section>';}).join('');
 return '<div class="qr-clinical-layout question-only"><section class="qr-question-panel"><div class="qr-question-head"><h2>'+esc(x.trendData?.title||x.topic||'Patient trend over time')+'</h2><p>Review each time point in order. Compare the updated clinical findings with the previous assessment and determine how the patient is responding.</p></div><div class="qr-response-area">'+(html||'<p class="qr-missing">This Trend item has no chronological clinical stages and must be revised before use.</p>')+'</div></section></div>';
}
function renderCloze(x,d,submitted){
 const defs=Array.isArray(x.dropdowns)?x.dropdowns:Object.entries(x.options||{}).map(([id,options])=>({id,options,correct:x.correctAnswers?.[id]})),answers=d.cloze||{},correctMap=x.correctAnswers||x.correctAnswer||{},template=s(x.clozeTemplate||x.template||x.question||x.stem||''),pattern=/\{\{([^}]+)\}\}|\{([^}]+)\}|\[\[([^\]]+)\]\]|\[blank\]|_{2,}/gi;let idx=0;
 const make=token=>{const i=idx++,name=token&&!/^_+$/.test(token)&&token!=='[blank]'?token.trim():'',def=defs.find((v,j)=>String(v.id??v.key??j)===name)||defs[i]||{},key=String(def.id??def.key??name??i),options=def.options||def.choices||[],value=s(answers[key]??''),expected=def.correct??def.answer??correctMap[key],ok=expected!=null&&value.trim().toLowerCase()===s(expected).trim().toLowerCase();return '<label class="qr-cloze-blank"><select data-cloze-key="'+esc(key)+'" aria-label="Blank '+(i+1)+'" '+(submitted?'disabled':'')+' style="padding:7px;border:1px solid #94a3b8;border-radius:6px;'+(submitted?(ok?'background:#dcfce7;border:2px solid #16a34a':'background:#fee2e2;border:2px solid #dc2626'):'')+'"><option value="">Select…</option>'+options.map(o=>{const v=typeof o==='object'?ov(o,0):s(o),label=typeof o==='object'?ot(o):s(o);return '<option value="'+esc(v)+'" '+(v===value?'selected':'')+'>'+esc(label)+'</option>';}).join('')+'</select>'+(submitted?'<strong class="'+(ok?'qr-feedback-correct':'qr-feedback-incorrect')+'">'+(ok?' ✓ Correct':' ✕ Incorrect · Correct: '+esc(expected))+'</strong>':'')+'</label>';};
 const body=template.replace(pattern,(m,a,b,c)=>make(a||b||c||'')),instruction=s(x.instruction||x.cleanInstruction||'Complete the clinical statement by selecting the best response for each blank.');
 return '<div class="qr-clinical-layout question-only"><section class="qr-question-panel"><div class="qr-question-head"><p>'+esc(instruction)+'</p></div><div class="qr-response-area"><div class="qr-cloze" style="font-size:1rem;line-height:2">'+body+'</div></div></section></div>';
}
function render(q,d,submitted){const x=canon(q);if(x.ngnType==='Matrix Multiple'||x.ngnType==='Matrix Single'){x.type='Matrix / Grid';x.ngnType='Matrix / Grid';}if(x.ngnType==='Trend'&&Array.isArray(x.trendData?.stages))return renderTrend(x,d||{},submitted);if(x.ngnType==='Select N')return renderSelectN(x,d||{},submitted);if(x.ngnType==='Cloze (Drop-down)')return renderCloze(x,d||{},submitted);return baseRender(x,d,submitted);}
function grade(q,d){const x=canon(q);if(x.ngnType==='Trend'&&Array.isArray(x.trendData?.stages)){const stages=x.trendData.stages,correct=stages.filter((stage,i)=>String(d?.stageAnswers?.[i]??'')===String(stage.correctAnswer??stage.answerKey??'')).length;return {isCorrect:correct===stages.length,earned:correct,max:stages.length,score:stages.length?correct/stages.length:0,scoringMethod:'stage-by-stage'};}return root.QuickRNNgnScoring?.grade(x,d)||baseGrade(x,d);}
function has(q,d){
 const x=canon(q),a=d&&typeof d==='object'?d:{},value=v=>v!==undefined&&v!==null&&String(v).trim()!=='',nonempty=v=>Array.isArray(v)?v.length>0&&v.some(nonempty):v&&typeof v==='object'?Object.values(v).some(nonempty):value(v);
 const f=x.ngnType;
 if(f==='Single Choice')return value(a.choice??a.selectedOption??a.answer);
 if(f==='Multiple Response'||f==='Extended Multiple Response')return Array.isArray(a.choices)&&a.choices.length>0;
 if(f==='Select N'){const n=Number(x.selectN||x.nRequired||x.numberToSelect||x.requiredSelections||x.selectCount||(Array.isArray(x.correctAnswers)?x.correctAnswers.length:Array.isArray(x.correctAnswer)?x.correctAnswer.length:0));return n>0&&Array.isArray(a.choices)&&a.choices.length===n;} if(f==='Trend'&&Array.isArray(x.trendData?.stages))return x.trendData.stages.length>0&&x.trendData.stages.every((stage,i)=>a.stageAnswers?.[i]!==undefined&&String(a.stageAnswers[i]).trim()!=='');
 if(f==='Matrix Multiple'||f==='Matrix Single'){const rows=x.rows||[];const matrix=a.matrix||a;return rows.length>0&&rows.some((row,i)=>{const id=String(row.id??i);return nonempty(matrix[id]);});}
 if(f==='Cloze (Drop-down)'){const defs=Array.isArray(x.dropdowns)?x.dropdowns:[];const keys=defs.length?defs.map((d,i)=>String(d.id??d.key??d.name??i)):Object.keys(x.correctAnswers||x.options||{});const cloze=a.cloze||a.dropdownChoices||a;return keys.length>0&&keys.some(key=>value(cloze[key]));}
 if(f==='Bowtie')return value(a.condition)||(Array.isArray(a.actions)&&a.actions.length>0)||(Array.isArray(a.monitoring||a.params)&&(a.monitoring||a.params).length>0);
 if(f==='Numeric Entry')return value(a.numericEntry??a.value??a.numeric)&&Number.isFinite(Number(a.numericEntry??a.value??a.numeric));
 if(f==='Highlight')return nonempty(a.highlights??a.highlighted??a.tokens??a.selected);
 if(f==='Trend')return nonempty(a.choice??a.choices??a.response??a.trend??a);
 if(f==='Extended Drag and Drop'){const expected=x.correctOrder||[];return Array.isArray(a.order)&&expected.length>0&&a.order.length>0;}
 return baseHasAnswer(x,a)||nonempty(a);
}
api.detect=q=>{const x=canon(q);return x.ngnType;};
api.toDraft=(q,v)=>baseToDraft(canon(q),v);
api.fromDraft=(q,d)=>baseFromDraft(canon(q),d);
api.grade=grade;api.hasAnswer=has;
root.quickRNGrade=grade;root.quickRNHasAnswer=has;root.quickRNDetectItemFormat=api.detect;root.quickRNAnswerSummary=api.answerSummary;
root.quickRNNormalizeDraft=(q,value)=>baseToDraft(canon(q),value);
root.quickRNFromLegacyDraft=(q,value)=>baseToDraft(canon(q),value);
root.quickRNToLegacyDraft=(q,draft)=>baseFromDraft(canon(q),draft);
api.answerSummary=(q,d)=>{const x=canon(q);return x.ngnType==='Matrix Multiple'||x.ngnType==='Matrix Single'?JSON.stringify(d.matrix||{},null,2):baseSummary(x,d);};
root.quickRNAnswerSummary=api.answerSummary;
api.renderReact=function(q,legacy,onUpdate,submitted,responseOnly){const x=canon(q);root.quickRNCurrentQuestion=x;quickRNCurrentItemId=x.id||null;const d=baseToDraft(x,legacy);quickRNDraft=d;root.quickRNOnDraftChange=function(next){if(typeof onUpdate==='function')onUpdate(baseFromDraft(x,next));};let html=submitted?'<div class="qr-submitted">'+render(x,d,true)+'</div>':render(x,d,false);if(responseOnly){const start=html.indexOf('<div class="qr-response-area">'),end=html.indexOf('<div class="qr-report-row">',start);if(start>=0&&end>start)return html.slice(start,end);}return html;};
root.quickRNRenderClinicalItem=function(q,d,submitted){const item=canon(q);root.quickRNCurrentQuestion=item;quickRNCurrentItemId=item.id||null;quickRNDraft=d||{};return render(item,quickRNDraft,!!submitted);};

const style=document.createElement('style');style.id='quickrn-unified-ngn-layout';
style.textContent=[
'.qr-clinical-layout{display:grid!important;grid-template-columns:minmax(0,40%) minmax(0,60%);gap:12px;align-items:stretch;width:100%;min-width:0;height:100%;min-height:0}',
'.qr-clinical-layout.question-only{grid-template-columns:minmax(0,1fr)}',
'.qr-ehr,.qr-question-panel{background:#fff;border:1px solid #cbd5e1;border-radius:10px;min-width:0;min-height:0;overflow:hidden;display:flex;flex-direction:column}',
'.qr-ehr-head{display:flex;justify-content:space-between;gap:10px;align-items:center;background:#0B2240;color:#fff;padding:12px 14px;font-size:12px;font-weight:800;flex:0 0 auto}',
'.qr-ehr-body{padding:12px;flex:1;min-height:0;max-height:none;overflow-y:auto;overscroll-behavior:contain}',
'.qr-ehr-section{border:1px solid #dbe3ec;border-radius:8px;margin-bottom:10px;overflow:hidden}.qr-ehr-section h4{background:#f1f5f9;padding:8px 10px;font-size:11px;text-transform:uppercase;font-weight:800;color:#0B2240}.qr-ehr-section>div{padding:10px;font-size:13px;line-height:1.55;color:#1e293b;overflow-wrap:anywhere}',
'.qr-question-head{padding:16px 18px;background:#f8fafc;border-bottom:1px solid #e2e8f0;flex:0 0 auto}.qr-question-head h2{font-size:clamp(16px,1.3vw,20px);font-weight:800;line-height:1.4;color:#0f172a}.qr-question-head p{margin-top:8px;font-size:13px;line-height:1.5;color:#475569}',
'.qr-response-area{padding:14px 18px;display:flex;flex-direction:column;gap:10px;flex:1;min-height:0;overflow-y:auto;overscroll-behavior:contain}',
'.qr-choice{width:100%;display:flex;align-items:flex-start;gap:12px;text-align:left;padding:12px 14px;background:#f8fafc;border:1px solid #cbd5e1;border-radius:9px;color:#1e293b;font-size:13px;line-height:1.5}.qr-choice.selected{border:2px solid #2563a6;background:#eff6ff;color:#0B2240;font-weight:700}',
'.qr-table-wrap{width:100%;overflow-x:auto}.qr-matrix{width:100%;border-collapse:collapse;font-size:12px}.qr-matrix th,.qr-matrix td{border:1px solid #cbd5e1;padding:9px;text-align:center;vertical-align:middle}.qr-matrix th{background:#f1f5f9;font-weight:800}.qr-matrix td:first-child,.qr-matrix th:first-child{text-align:left;min-width:160px}.qr-matrix input{width:17px;height:17px;accent-color:#0e7490}.qr-matrix-cell{display:inline-flex;align-items:center;justify-content:center;min-width:28px;min-height:28px}',
'.qr-cloze{font-size:14px;line-height:2.2;color:#1e293b}.qr-cloze select{margin:3px;padding:6px 9px;border:1px solid #94a3b8;border-radius:7px;background:#fff;max-width:100%}',
'.qr-bowtie{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.qr-bowtie-group{background:#f8fafc;border:1px solid #cbd5e1;border-radius:9px;padding:10px;min-width:0}.qr-bowtie-option{display:flex;gap:8px;align-items:flex-start;padding:8px 4px;font-size:12px;line-height:1.4}',
'.qr-sort-list{display:flex;flex-direction:column;gap:8px}.qr-sort-item{display:flex;align-items:center;gap:10px;border:1px solid #cbd5e1;background:#f8fafc;border-radius:9px;padding:10px;min-width:0}.qr-sort-text{flex:1;font-size:13px;line-height:1.45;overflow-wrap:anywhere}',
'.qr-highlight-instructions{padding:10px 12px;border:1px solid #bfdbfe;background:#eff6ff;border-radius:9px;font-size:12px;color:#1e3a8a;font-weight:600}.qr-highlight-list{display:flex;flex-direction:column;gap:7px}.qr-highlight-segment{display:flex;align-items:flex-start;gap:10px;text-align:left;width:100%;padding:10px 12px;border:1px solid #cbd5e1;border-radius:9px;background:#fff;color:#1e293b;font-size:13px;line-height:1.5}.qr-highlight-segment.is-selected{background:#fef3c7;border:2px solid #d97706;color:#78350f}',
'.qr-numeric-entry{display:flex;flex-direction:column;gap:8px}.qr-numeric-entry label{font-size:12px;font-weight:800;color:#475569}.qr-numeric-entry input{width:min(260px,100%);padding:10px;border:1px solid #cbd5e1;border-radius:8px;font:600 16px ui-monospace,monospace}',
'.qr-report-row{padding:0 18px 14px;display:flex;justify-content:flex-end;flex:0 0 auto}.qr-report-button{padding:7px 11px;border-radius:7px;border:1px solid #fecaca;background:#fff1f2;color:#9f1239;font-size:11px;font-weight:800}',
'@media(max-width:900px){.qr-clinical-layout{grid-template-columns:minmax(0,1fr)!important;height:auto;min-height:0}.qr-ehr-body{max-height:38vh;min-height:120px}.qr-question-panel{min-height:360px}.qr-bowtie{grid-template-columns:1fr}}',
'@media(min-width:901px){body:has(.qr-clinical-layout){height:100vh;overflow:hidden}main:has(.qr-clinical-layout){min-height:0!important;overflow:hidden!important}.qr-clinical-layout{max-height:calc(100vh - 150px)}}',
'body.quickrn-selfstudy .qr-clinical-layout{display:block!important;height:auto!important;max-height:none!important}body.quickrn-selfstudy .qr-question-head{display:none!important}body.quickrn-selfstudy .qr-question-panel{border:0!important;display:block!important;overflow:visible!important}body.quickrn-selfstudy .qr-response-area{padding:0!important;overflow:visible!important}body.quickrn-selfstudy .qr-clinical-layout:has(.qr-ehr){display:grid!important;grid-template-columns:minmax(0,40%) minmax(0,60%);height:100%!important;max-height:calc(100vh - 150px)!important}body.quickrn-selfstudy .qr-clinical-layout:has(.qr-ehr) .qr-question-panel{display:flex!important}body.quickrn-selfstudy .qr-clinical-layout:has(.qr-ehr) .qr-response-area{overflow-y:auto!important}'
].join('\n');
(document.head||document.documentElement).appendChild(style);
})(window);
