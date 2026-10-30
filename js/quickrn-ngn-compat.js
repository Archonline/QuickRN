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
 else if(/select n|select exactly/.test(raw)||q.nRequired||q.selectN||q.numberToSelect)f='Select N';
 else if(/bow ?tie/.test(raw)||q.bowtieConfig||q.bowtieData)f='Bowtie';
 else if(/dropdown rationale|dropdown cloze|cloze|drop down/.test(raw)||q.dropdowns||q.clozeTemplate)f='Cloze (Drop-down)';
 else if(/highlight/.test(raw)||q.tokens||q.highlightText||q.highlightSegments)f='Highlight';
 else if(/numeric/.test(raw)||q.correctValue!==undefined||q.acceptedRange)f='Numeric Entry';
 else if(/ordered|drag|reorder/.test(raw)||q.items||q.availableItems||q.correctOrder)f='Extended Drag and Drop';
 else if(/extended multiple response/.test(raw))f='Extended Multiple Response';
 else if(/sata|select all|multiple response/.test(raw))f='Multiple Response';
 else if(/single|one best answer|one answer|multiple choice/.test(raw))f='Single Choice';
 else if(Array.isArray(q.correctAnswers))f=q.correctAnswers.length>1?'Multiple Response':'Single Choice';
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
 if(f==='Select N')q.selectN=Number(q.selectN||q.nRequired||q.numberToSelect||q.requiredSelections||0);
 if(f==='Bowtie'){const b=q.bowtieConfig||{},old=q.bowtieData||{},c=b.correct||q.correctAnswers||{};q.bowtieData={actions:old.actions||b.actionsPool||[],conditions:old.conditions||b.conditionsPool||[],monitoring:old.monitoring||old.params||b.paramsPool||b.parametersPool||[]};q.correctAnswers={condition:c.condition||'',actions:c.actions||[],monitoring:c.monitoring||c.params||c.parameters||[]};}
 if(f==='Cloze (Drop-down)'){if(Array.isArray(q.dropdowns)){const om={},cm={};q.dropdowns.forEach(d=>{om[d.id]=d.options||[];if(d.correct!==undefined)cm[d.id]=d.correct;});q.options=q.options&&!Array.isArray(q.options)?q.options:om;q.correctAnswers=q.correctAnswers||cm;}q.clozeTemplate=s(q.clozeTemplate||q.templateText||q.template||q.questionText||q.question||'').replace(/\[([A-Za-z0-9_-]+)\]/g,'{$1}');}
 if(f==='Highlight'&&Array.isArray(q.tokens)){q.highlightSegments=q.tokens.filter(t=>t.selectable!==false).map(t=>({id:String(q.tokens.indexOf(t)),text:t.text||t.label||''}));q.correctHighlights=q.tokens.map((t,i)=>t.correct?String(i):null).filter(x=>x!==null);}
 if(f==='Matrix Multiple'||f==='Matrix Single'){q.matrixMode=f==='Matrix Multiple'?'multiple':'single';q.rows=q.rows||(q.matrixData&&q.matrixData.rows)||[];q.columns=q.columns||(q.matrixData&&q.matrixData.columns)||[];const c={...(q.correctAnswers||{})};q.rows.forEach((r,i)=>{const id=r.id||String(i);if(c[id]===undefined&&r.correct!==undefined)c[id]=r.correct;if(Array.isArray(r.correct))q.matrixMode='multiple';});q.correctAnswers=c;}
 if(f==='Numeric Entry'){q.correctNumericAnswer=q.correctNumericAnswer??q.correctValue??q.numericAnswer??q.correctAnswer;if(Array.isArray(q.acceptedRange))q.numericRange={min:q.acceptedRange[0],max:q.acceptedRange[1]};q.unit=q.unit||q.numericUnit||'';}
 if(f==='Extended Drag and Drop'&&Array.isArray(q.items)){const ordered=[...q.items].sort((a,b)=>Number(a.correctOrder||0)-Number(b.correctOrder||0));q.availableItems=q.items.map(x=>typeof x==='string'?x:s(x.text||x.label||x.value));q.correctOrder=q.correctOrder||ordered.map(x=>typeof x==='string'?x:s(x.text||x.label||x.value));}
 q.__quickRNCompat=true;return q;
}
function setCell(id,col,multi){const m={...((quickRNDraft&&quickRNDraft.matrix)||{})};if(multi){const a=Array.isArray(m[id])?[...m[id]]:[];m[id]=a.includes(col)?a.filter(x=>x!==col):[...a,col];}else m[id]=col;root.quickRNSetDraft('matrix',m);}
root.quickRNCompatSetMatrixCell=setCell;
function render(q,d,submitted){
 const x=canon(q);
 if(x.ngnType==='Matrix Multiple'||x.ngnType==='Matrix Single'){
  const multi=x.matrixMode==='multiple',m=d.matrix||{},cols=x.columns||[],rows=x.rows||[];
  const h=cols.map(c=>'<th>'+esc(c)+'</th>').join('');
  const body=rows.map((r,i)=>{const id=r.id||String(i),v=m[id];return '<tr><td>'+esc(r.text||r.label||r)+'</td>'+cols.map(c=>{const on=multi?Array.isArray(v)&&v.includes(c):v===c;return '<td><label class="qr-matrix-cell"><input type="'+(multi?'checkbox':'radio')+'" name="qr-matrix-'+esc(id)+'" '+(on?'checked':'')+' onchange="quickRNCompatSetMatrixCell('+JSON.stringify(id)+','+JSON.stringify(c)+','+multi+')"><span class="sr-only">'+api.cleanPrompt(c)+'</span></label></td>';}).join('')+'</tr>';}).join('');
  return '<div class="qr-clinical-layout question-only"><section class="qr-question-panel"><div class="qr-question-head"><h2>'+esc(x.title)+'</h2><p>'+esc(x.instruction)+'</p></div><div class="qr-response-area"><div class="qr-table-wrap"><table class="qr-matrix"><thead><tr><th>Clinical finding / statement</th>'+h+'</tr></thead><tbody>'+body+'</tbody></table></div></div></section></div>';
 }
 return baseRender(x,d,submitted);
}
function grade(q,d){const x=canon(q);return root.QuickRNNgnScoring?.grade(x,d)||baseGrade(x,d);}
function has(q,d){
 const x=canon(q),a=d&&typeof d==='object'?d:{},value=v=>v!==undefined&&v!==null&&String(v).trim()!=='',nonempty=v=>Array.isArray(v)?v.length>0&&v.some(nonempty):v&&typeof v==='object'?Object.values(v).some(nonempty):value(v);
 const f=x.ngnType;
 if(f==='Single Choice')return value(a.choice??a.selectedOption??a.answer);
 if(f==='Multiple Response'||f==='Extended Multiple Response')return Array.isArray(a.choices)&&a.choices.length>0;
 if(f==='Select N'){const n=Number(x.selectN||x.nRequired||x.numberToSelect||x.requiredSelections||0);return n>0&&Array.isArray(a.choices)&&a.choices.length===n;}
 if(f==='Matrix Multiple'||f==='Matrix Single')return nonempty(a.matrix||a);
 if(f==='Cloze (Drop-down)')return nonempty(a.cloze||a);
 if(f==='Bowtie')return value(a.condition)||(a.actions||[]).length>0||(a.monitoring||a.params||[]).length>0;
 if(f==='Numeric Entry')return value(a.numericEntry??a.value??a.numeric)&&Number.isFinite(Number(a.numericEntry??a.value??a.numeric));
 if(f==='Highlight')return nonempty(a.highlights??a.highlighted??a.tokens??a.selected);
 if(f==='Trend')return nonempty(a.choice??a.choices??a.response??a.trend??a);
 if(f==='Extended Drag and Drop')return Array.isArray(a.order)&&a.order.length>0;
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
