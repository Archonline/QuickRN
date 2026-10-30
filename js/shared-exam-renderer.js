/* Shared NCLEX-style renderer and interaction layer for all exam modes. */
function quickRNDetectItemFormat(q){
 q=q&&typeof q==='object'?q:{};
 const raw=[q.ngnType,q.type,q.format,q.questionType,q.itemType].filter(Boolean).join(' ').replace(/_/g,' ').toLowerCase();
 if(raw.includes('highlight')||q.highlightText||q.highlightSegments||q.correctHighlights)return 'Highlight';
 if(raw.includes('trend')||q.trendData||q.trends||q.trendTable)return 'Trend';
 if(raw.includes('matrix')||raw.includes('grid')||(q.rows&&q.columns)||q.matrixData)return 'Matrix / Grid';
 if(raw.includes('cloze')||raw.includes('drop-down')||raw.includes('dropdown')||q.clozeTemplate||q.dropdowns||(q.options&&!Array.isArray(q.options)&&typeof q.options==='object'))return 'Cloze (Drop-down)';
 if(raw.includes('drag')||raw.includes('order')||q.availableItems||q.correctOrder)return 'Extended Drag and Drop';
 if(raw.includes('bowtie')||q.bowtieData)return 'Bowtie';
 if(raw.includes('extended multiple response'))return 'Extended Multiple Response';
 if(/single[_ -]?(?:choice|answer|best)|single best answer/.test(raw))return 'Single Choice';
 if(raw.includes('multiple response')||raw.includes('sata')||raw.includes('select all')||raw.includes('select-n'))return 'Multiple Response';
 if(Array.isArray(q.correctAnswers)||Array.isArray(q.correctAnswer))return 'Multiple Response';
 return 'Single Choice';
}
function quickRNEscape(v){return String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function quickRNCleanPrompt(v){return String(v||'').replace(/^\s*(?:\[[^\]]+\]\s*)/,'').replace(/^\s*(?:[A-Z]{2,10}[-_ ]\d{2,6}|(?:NGN\s+)?(?:EXTENDED\s+DRAG\s+AND\s+DROP|TRADITIONAL\s+NCLEX\s+PRACTICE|MULTIPLE\s+RESPONSE|SELECT\s+ALL\s+THAT\s+APPLY))\s*[-:|–—]\s*/i,'').replace(/^\s*(?:NGN|STANDARD|CATEGORY\s*:[^:]+)\s*[-:|]\s*/i,'').trim();}
function quickRNOptionText(o){return typeof o==='string'?o:(o?.text||o?.label||o?.value||'');}
function quickRNOptionValue(o,i){return typeof o==='string'?o:(o?.id||o?.value||o?.text||String.fromCharCode(65+i));}
function quickRNInitialOrder(q){
 const items=[...(Array.isArray(q.availableItems)?q.availableItems:[])];
 if(items.length<2||!q.id)return items;
 let seed=0;for(const ch of String(q.id))seed=(seed*31+ch.charCodeAt(0))>>>0;
 for(let i=items.length-1;i>0;i--){seed=(seed*1664525+1013904223)>>>0;const j=seed%(i+1);[items[i],items[j]]=[items[j],items[i]];}
 const correct=Array.isArray(q.correctOrder)?q.correctOrder:[];
 if(correct.length===items.length&&items.every((v,i)=>String(v)===String(correct[i])))items.push(items.shift());
 return items;
}
function quickRNNormalizeDraft(q, existing){
 const f=quickRNDetectItemFormat(q); if(f==='Extended Drag and Drop'){if(existing&&Array.isArray(existing.order))return JSON.parse(JSON.stringify(existing));return {order:Array.isArray(existing)?[...existing]:quickRNInitialOrder(q)};}
 if(existing && typeof existing==='object' && !Array.isArray(existing)) return JSON.parse(JSON.stringify(existing));
 if(f==='Extended Multiple Response'||f==='Multiple Response')return {choices:Array.isArray(existing)?existing:[]};
 if(f==='Single Choice')return {choice:typeof existing==='string'?existing:''};
 return {};
}
let quickRNDraft={}; let quickRNCurrentItemId=null; let quickRNDraggedIndex=null;
function quickRNInitDraft(q, existing){if(quickRNCurrentItemId!==q.id){quickRNCurrentItemId=q.id;quickRNDraft=quickRNNormalizeDraft(q,existing);}}
function quickRNCommitDraft(){if(typeof window.quickRNOnDraftChange==='function')window.quickRNOnDraftChange(quickRNDraft);}
function quickRNSetDraft(path,value){quickRNDraft={...(quickRNDraft||{})};quickRNDraft[path]=value;quickRNCommitDraft();if(typeof window.quickRNRenderAgain==='function')window.quickRNRenderAgain();}
function quickRNToggleDraft(path,value){const a=Array.isArray(quickRNDraft[path])?[...quickRNDraft[path]]:[];quickRNDraft[path]=a.includes(value)?a.filter(x=>x!==value):(['actions','monitoring'].includes(path)&&a.length>=2?a:[...a,value]);quickRNCommitDraft();if(typeof window.quickRNRenderAgain==='function')window.quickRNRenderAgain();}
function quickRNMoveDraft(from,to){const a=[...(quickRNDraft.order||[])];if(from<0||to<0||from>=a.length||to>=a.length)return;const [v]=a.splice(from,1);a.splice(to,0,v);quickRNDraft={...quickRNDraft,order:a};quickRNCommitDraft();if(typeof window.quickRNRenderAgain==='function')window.quickRNRenderAgain();}
function quickRNDragStart(e,i){quickRNDraggedIndex=i;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',String(i));}
function quickRNDrop(e,i){e.preventDefault();const from=quickRNDraggedIndex!==null?quickRNDraggedIndex:Number(e.dataTransfer.getData('text/plain'));quickRNDraggedIndex=null;quickRNMoveDraft(from,i);}
function quickRNRenderClinicalItem(q,draft,submitted=false){
 const f=quickRNDetectItemFormat(q), ehr=q.ehr||{}, patient=q.patientInfo||{};
 const cleanField=v=>{let t=quickRNCleanPrompt(v);for(const prefix of [q.category,q.topic,q.ngnType,q.type]){if(prefix&&t.toLowerCase().startsWith(String(prefix).toLowerCase())){const rest=t.slice(String(prefix).length);if(/^\s*[-:|]\s*/.test(rest))t=rest.replace(/^\s*[-:|]\s*/,'');}}return t;};
 const title=cleanField(q.cleanTitle||q.title||q.promptTitle||q.questionText||q.question||'Clinical question');
 const rawPrompt=cleanField(q.cleanInstruction||q.instruction||((q.title||q.promptTitle)&&q.questionText&&q.title!==q.questionText?q.questionText:''));
 const prompt=rawPrompt&&rawPrompt.toLowerCase()!==title.toLowerCase()?rawPrompt:'';
 const tabs=[['Nurses’ Notes',ehr.nursesNotes],['Vital Signs',ehr.vitalSigns],['Diagnostic Results',ehr.diagnosticResults],['History & Physical',ehr.historyPhysical]];
 const caseContext=q.caseStudyContext||{};
 const patientSummary=typeof q.patientInfo==='string'?q.patientInfo:(patient.summary||patient.history||patient.notes||patient.description||caseContext.summary||q.caseStudy||q.case_study||'');
 const hasRecord=!!(q.ehr||patientSummary||q.caseStudyContext||q.patientInfo||q.caseStudy||q.case_study);
 const patientName=patient.name||patient.patientName||caseContext.title||q.caseTitle||'Patient';
 const caseMeta=caseContext.stepIndex?'<div class="qr-patient-meta">Case study · Item '+quickRNEscape(caseContext.stepIndex)+' of '+quickRNEscape(caseContext.stepCount||caseContext.stepIndex)+'</div>':(patient.age||patient.code?'<div class="qr-patient-meta">'+quickRNEscape(patient.age||'')+(patient.code?' · '+quickRNEscape(patient.code):'')+'</div>':'');
 const recordSections=tabs.filter(t=>t[1]).map(t=>'<section class="qr-ehr-section"><h4>'+t[0]+'</h4><div>'+t[1]+'</div></section>').join('');
 const summarySection=patientSummary?'<section class="qr-ehr-section"><h4>'+(caseContext.title?'Case overview':'Patient information')+'</h4><div>'+quickRNEscape(patientSummary)+'</div></section>':'';
 let record=hasRecord?'<aside class="qr-ehr"><div class="qr-ehr-head"><strong><i class="fa-solid fa-hospital-user"></i> Clinical Record</strong><span>'+quickRNEscape(patientName)+'</span></div>'+caseMeta+'<div class="qr-ehr-body">'+recordSections+summarySection+(!recordSections&&!summarySection?'<section class="qr-ehr-section"><h4>Clinical record</h4><div>No separate patient exhibits were supplied for this item.</div></section>':'')+'</div></aside>':'';
 let response='';
 if(f==='Single Choice'||f==='Multiple Response'||f==='Extended Multiple Response'){
   const opts=Array.isArray(q.options)?q.options:[]; const multi=f==='Multiple Response'||f==='Extended Multiple Response'; const selected=multi?(draft.choices||[]):[draft.choice];
   const correctRaw=multi?(q.correctAnswers??q.correctAnswer??[]):[q.correctAnswerText??q.correctAnswer];
   const correctList=Array.isArray(correctRaw)?correctRaw:[correctRaw];
   response=opts.length?opts.map((o,i)=>{const val=quickRNOptionValue(o,i),txt=quickRNOptionText(o),on=selected.includes(val);const isCorrect=correctList.some(x=>String(x)===String(val)||String(x)===String(txt)||String(x)===String.fromCharCode(65+i));const feedback=submitted?(isCorrect?' qr-answer-correct':(on?' qr-answer-incorrect':'')):'';const action=multi?'quickRNToggleDraft("choices",'+JSON.stringify(val)+')':'quickRNSetDraft("choice",'+JSON.stringify(val)+')';return "<button type='button' aria-pressed='"+on+"' class='qr-choice "+(on?'selected':'')+feedback+"' onclick='"+action+"'><span class='qr-choice-mark "+(multi?'is-checkbox':'is-radio')+"'>"+(multi?(on?'✓':''):String.fromCharCode(65+i))+"</span><span>"+quickRNEscape(txt)+"</span></button>";}).join(''):'<div class="qr-missing">This item is missing its response options.</div>';
 } else if(f==='Matrix / Grid'){
   const rows=q.rows||q.matrixData?.rows||[], cols=q.columns||q.matrixData?.columns||[]; response=rows.length&&cols.length?`<div class="qr-table-wrap"><table class="qr-matrix"><thead><tr><th>Clinical finding / intervention</th>${cols.map(c=>`<th>${quickRNEscape(c)}</th>`).join('')}</tr></thead><tbody>${rows.map((r,i)=>{const id=r.id||String(i);return `<tr><td>${quickRNEscape(r.text||r.label||r)}</td>${cols.map(c=>`<td><label><input type="radio" name="qr-matrix-${quickRNEscape(id)}" ${draft.matrix?.[id]===c?'checked':''} onchange="quickRNSetDraft('matrix',{...(quickRNDraft.matrix||{}),${JSON.stringify(id)}:${JSON.stringify(c)}})"><span class="sr-only">${quickRNEscape(c)}</span></label></td>`).join('')}</tr>`}).join('')}</tbody></table></div>`:`<div class="qr-missing">Matrix rows or columns are missing from this item.</div>`;
 } else if(f==='Cloze (Drop-down)'){
   const template=q.clozeTemplate||q.template||q.questionText||q.question||''; const opts=q.options||q.dropdowns||{}; const parts=String(template).split(/(\{[^}]+\})/g); response=`<div class="qr-cloze">${parts.map(p=>{if(/^\{[^}]+\}$/.test(p)){const k=p.slice(1,-1).trim(), choices=opts[k]||[];return `<select aria-label="${quickRNEscape(k)}" onchange="quickRNSetDraft('cloze',{...(quickRNDraft.cloze||{}),${JSON.stringify(k)}:this.value})"><option value="">Select…</option>${choices.map(c=>`<option ${draft.cloze?.[k]===c?'selected':''} value="${quickRNEscape(c)}">${quickRNEscape(c)}</option>`).join('')}</select>`}return `<span>${quickRNEscape(p)}</span>`}).join('')}</div>`;
 } else if(f==='Extended Drag and Drop'){
   const items=draft.order||q.availableItems||[]; response=items.length?`<p class="qr-help">Drag items into the correct order. You can also use the arrow buttons.</p><div class="qr-sort-list">${items.map((v,i)=>`<div class="qr-sort-item" draggable="true" ondragstart="quickRNDragStart(event,${i})" ondragover="event.preventDefault()" ondrop="quickRNDrop(event,${i})"><span class="qr-drag-handle" aria-label="Drag to reorder"><i class="fa-solid fa-grip-vertical"></i></span><b>Step ${i+1}</b><span class="qr-sort-text">${quickRNEscape(v)}</span><span class="qr-sort-actions"><button type="button" onclick="quickRNMoveDraft(${i},${i-1})" ${i===0?'disabled':''} aria-label="Move up">↑</button><button type="button" onclick="quickRNMoveDraft(${i},${i+1})" ${i===items.length-1?'disabled':''} aria-label="Move down">↓</button></span></div>`).join('')}</div>`:`<div class="qr-missing">This drag-and-drop item has no availableItems list.</div>`;
 } else if(f==='Bowtie'){
   const b=q.bowtieData||{}; const correctDraft=draft||{}; const group=(key,label,kind)=>`<section class="qr-bowtie-group"><h4>${label}</h4>${(b[key]||[]).map(v=>{const on=kind==='condition'?correctDraft.condition===v:(correctDraft[kind]||[]).includes(v);return `<label class="qr-bowtie-option"><input type="${kind==='condition'?'radio':'checkbox'}" name="qr-bowtie-${kind}" ${on?'checked':''} onchange="${kind==='condition'?`quickRNSetDraft('condition',${JSON.stringify(v)})`:`quickRNToggleDraft('${kind}',${JSON.stringify(v)})`}"><span>${quickRNEscape(v)}</span></label>`}).join('')}</section>`;
   response=`<div class="qr-bowtie">${group('actions','Actions to Take','actions')}${group('conditions','Potential Condition','condition')}${group('monitoring','Parameters to Monitor','monitoring')}</div>`;
 }
 return `<div class="qr-clinical-layout ${hasRecord?"has-record":"question-only"}">${record}<section class="qr-question-panel"><div class="qr-question-head"><h2>${quickRNEscape(title)}</h2>${prompt?`<p>${quickRNEscape(prompt)}</p>`:''}</div><div class="qr-response-area">${response}</div><div class="qr-report-row"><button type="button" class="qr-report-button" onclick="quickRNOpenReport()"><i class="fa-solid fa-flag"></i> Report this item</button></div></section></div>`;
}
function quickRNHasAnswer(q,d){const f=quickRNDetectItemFormat(q);if(f==='Single Choice')return !!d.choice;if(f==='Extended Multiple Response'||f==='Multiple Response')return (d.choices||[]).length>0;if(f==='Matrix / Grid'){const rows=q.rows||q.matrixData?.rows||[];return rows.length>0&&Object.keys(d.matrix||{}).length===rows.length;}if(f==='Cloze (Drop-down)'){const keys=Object.keys(q.correctAnswers||q.options||{});return keys.length>0&&keys.every(k=>!!d.cloze?.[k]);}if(f==='Extended Drag and Drop')return (d.order||[]).length>0;if(f==='Bowtie')return !!d.condition&&(d.actions||[]).length===2&&(d.monitoring||[]).length===2;return false;}
function quickRNGrade(q,d){const f=quickRNDetectItemFormat(q), opts=Array.isArray(q.options)?q.options:[];const eq=(a,b)=>String(a??'')===String(b??'');const sameSet=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every(x=>b.includes(x));
 if(f==='Single Choice'){const c=q.correctAnswerText??q.correctAnswer;const v=d.choice;const ix=opts.findIndex((o,i)=>eq(quickRNOptionValue(o,i),v));const txt=ix>=0?quickRNOptionText(opts[ix]):v;return eq(v,c)||eq(txt,c)||eq(v,String.fromCharCode(65+ix));}
 if(f==='Extended Multiple Response'||f==='Multiple Response'){const correct=q.correctAnswers??q.correctAnswer??[];const norm=x=>Array.isArray(x)?x:[x];const ids=norm(correct).map(x=>{const found=opts.find((o,i)=>eq(quickRNOptionValue(o,i),x)||eq(quickRNOptionText(o),x));if(found)return quickRNOptionValue(found,opts.indexOf(found));if(typeof x==='string'&&/^[A-Z]$/.test(x)&&opts[x.charCodeAt(0)-65]!==undefined)return quickRNOptionValue(opts[x.charCodeAt(0)-65],x.charCodeAt(0)-65);return x});const textCorrect=norm(correct).map(x=>{const found=opts.find((o,i)=>eq(quickRNOptionValue(o,i),x)||eq(quickRNOptionText(o),x));if(found)return quickRNOptionText(found);if(typeof x==='string'&&/^[A-Z]$/.test(x)&&opts[x.charCodeAt(0)-65]!==undefined)return quickRNOptionText(opts[x.charCodeAt(0)-65]);return x});return sameSet(d.choices||[],ids)||sameSet((d.choices||[]).map(v=>{const i=opts.findIndex((o,j)=>eq(quickRNOptionValue(o,j),v));return i>=0?quickRNOptionText(opts[i]):v}),textCorrect);}
 if(f==='Matrix / Grid'){const rows=q.rows||q.matrixData?.rows||[], c=q.correctAnswers||{};return rows.length>0&&rows.every((r,i)=>{const id=r.id||String(i);return eq(d.matrix?.[id],c[id]);});}
 if(f==='Cloze (Drop-down)'){const c=q.correctAnswers||{};const keys=Object.keys(c);return keys.length>0&&keys.every(k=>eq(d.cloze?.[k],c[k]));}
 if(f==='Extended Drag and Drop'){const c=q.correctOrder||[];return c.length>0&&sameSet(d.order||[],c)&&c.every((v,i)=>eq((d.order||[])[i],v));}
 if(f==='Bowtie'){const c=q.correctAnswers||{},a=d.actions||[],m=d.monitoring||[];return eq(d.condition,c.condition)&&sameSet(a,c.actions||[])&&sameSet(m,c.monitoring||[]);}
 return false;
}
function quickRNAnswerSummary(q,d){const f=quickRNDetectItemFormat(q),opts=Array.isArray(q.options)?q.options:[];if(f==='Single Choice'){const v=d?.choice;const i=opts.findIndex((o,j)=>String(quickRNOptionValue(o,j))===String(v));return i>=0?quickRNOptionText(opts[i]):String(v||'Unanswered');}if(f==='Extended Multiple Response'||f==='Multiple Response')return (d?.choices||[]).map(v=>{const i=opts.findIndex((o,j)=>String(quickRNOptionValue(o,j))===String(v));return i>=0?quickRNOptionText(opts[i]):v}).join('; ')||'Unanswered';if(f==='Extended Drag and Drop')return (d?.order||[]).map((v,i)=>`${i+1}. ${v}`).join('\n')||'Unanswered';return JSON.stringify(d||{},null,2);}
function quickRNReviewEHR(q){const e=q.ehr||{};const parts=[['Nurses’ Notes',e.nursesNotes],['Vital Signs',e.vitalSigns],['Diagnostic Results',e.diagnosticResults],['History & Physical',e.historyPhysical]].filter(x=>x[1]);return parts.length?`<div class="qr-review-ehr"><h4>Clinical Record</h4>${parts.map(x=>`<div><b>${x[0]}</b><p>${x[1]}</p></div>`).join('')}</div>`:'';}
function quickRNOpenReport(){const q=window.quickRNCurrentQuestion;if(!q)return;const old=document.getElementById('qr-report-modal');if(old)old.remove();const box=document.createElement('div');box.id='qr-report-modal';box.className='qr-modal-backdrop';box.innerHTML=`<form class="qr-report-modal" id="qr-report-form"><h3>Report question issue</h3><label>Issue type<select name="reason"><option>Incorrect answer key</option><option>Typo or unclear wording</option><option>Missing clinical record or response data</option><option>Incorrect question format / interaction</option><option>Other</option></select></label><label>Details<textarea name="details" rows="4" required placeholder="Describe the problem…"></textarea></label><div><button type="button" onclick="document.getElementById('qr-report-modal').remove()">Cancel</button><button type="submit">Save report</button></div></form>`;document.body.appendChild(box);box.querySelector('form').addEventListener('submit',e=>{e.preventDefault();const fd=new FormData(e.currentTarget);let reports=[];try{reports=JSON.parse(localStorage.getItem('quickrn_question_reports')||'[]')}catch{};reports.push({id:'REP-'+Date.now(),itemId:q.id||'',mode:window.quickRNExamMode||'Exam',reason:fd.get('reason'),details:fd.get('details'),timestamp:new Date().toISOString(),questionSnapshot:q,userAnswer:quickRNDraft||{}});localStorage.setItem('quickrn_question_reports',JSON.stringify(reports));box.innerHTML='<div class="qr-report-modal"><h3>Report saved</h3><p>The item and report details are now available in Saved.</p><a href="saved.html">Open Saved Items</a><button onclick="document.getElementById(\'qr-report-modal\').remove()">Close</button></div>';});}



        


/* NGN case-study extensions: Highlight and Trend. Existing formats continue through the base renderer. */
const quickRNBaseDetect = quickRNDetectItemFormat;
quickRNDetectItemFormat = function(q) {
 const raw=[q.ngnType,q.type,q.format,q.questionType,q.itemType].filter(Boolean).join(' ').replace(/_/g,' ').toLowerCase();
 if(raw.includes('highlight')||q.highlightText||q.highlightSegments||q.correctHighlights)return 'Highlight';
 if(raw.includes('trend')||q.trendData||q.trends||q.trendTable)return 'Trend';
 if(raw.includes('extended multiple response'))return 'Extended Multiple Response';
 if(raw.includes('multiple response')||raw.includes('select all')||raw.includes('sata'))return 'Multiple Response';
 return quickRNBaseDetect(q);
};
const quickRNBaseNormalize = quickRNNormalizeDraft;
quickRNNormalizeDraft = function(q,existing) {
 const f=quickRNDetectItemFormat(q);
 if(f==='Highlight')return {highlights:Array.isArray(existing)?existing:(existing?.highlights||[])};
 if(f==='Trend')return Array.isArray(q.correctAnswers)?{choices:Array.isArray(existing)?existing:(existing?.choices||[])}:{choice:typeof existing==='string'?existing:(existing?.choice||'')};
 return quickRNBaseNormalize(q,existing);
};
const quickRNBaseRender = quickRNRenderClinicalItem;
quickRNRenderClinicalItem = function(q,draft,submitted=false) {
 const f=quickRNDetectItemFormat(q);
 if(f==='Multiple Response')return quickRNBaseRender({...q,ngnType:'Extended Multiple Response'},draft);if(f!=='Highlight'&&f!=='Trend')return quickRNBaseRender(q,draft);
 const esc=quickRNEscape, patient=q.patientInfo||{}, ehr=q.ehr||{};
 const cleanTitle=quickRNCleanPrompt(q.cleanTitle||q.title||q.promptTitle||q.questionText||q.question||'Clinical question');
 const cleanPrompt=quickRNCleanPrompt(q.cleanInstruction||q.instruction||'');
 const title=esc(cleanTitle), prompt=esc(cleanPrompt.toLowerCase()===cleanTitle.toLowerCase()?'':cleanPrompt);
 const record=(q.ehr||q.patientInfo||q.caseStudy||q.case_study)?'<aside class="qr-ehr"><div class="qr-ehr-head"><strong>Clinical Record</strong><span>'+esc(patient.name||patient.patientName||'Patient')+'</span></div><div class="qr-ehr-body">'+[['Nurses’ Notes',ehr.nursesNotes],['Vital Signs',ehr.vitalSigns],['Diagnostic Results',ehr.diagnosticResults],['History & Physical',ehr.historyPhysical]].filter(x=>x[1]).map(x=>'<section class="qr-ehr-section"><h4>'+x[0]+'</h4><div>'+x[1]+'</div></section>').join('')+(q.caseStudy||q.case_study?'<section class="qr-ehr-section"><h4>Case information</h4><div>'+esc(q.caseStudy||q.case_study)+'</div></section>':'')+'</div></aside>':'';
 let response='',trendPanel='';
 if(f==='Highlight'){
   const raw=q.highlightSegments||q.segments;
   const source=q.highlightText||q.passage||q.caseStudyText||q.textToHighlight||q.questionText||q.question||'';
   const segments=Array.isArray(raw)&&raw.length?raw.map((x,i)=>({id:String(x.id??i),text:String(x.text??x.label??x)})):String(source).match(/[^.!?]+[.!?]?/g)?.map((text,i)=>({id:String(i),text:text.trim()}))||[];
   response=segments.length?'<div class="qr-highlight-instructions">Select the symptoms and clinical information that require attention.</div><div class="qr-highlight-list">'+segments.map(seg=>{const on=(draft.highlights||[]).includes(seg.id)||(draft.highlights||[]).includes(seg.text);const correct=(q.correctHighlights||q.correctAnswers?.highlights||[]).some(x=>String(x)===String(seg.id)||String(x)===String(seg.text));const feedback=submitted?(correct?' is-correct':(on?' is-incorrect':'')):'';return "<button type='button' class='qr-highlight-segment "+(on?'is-selected':'')+feedback+"' aria-pressed='"+on+"' onclick='quickRNToggleDraft(\"highlights\","+JSON.stringify(seg.id)+")'><span class='qr-highlight-check'>"+(on?'✓':'+')+"</span>"+esc(seg.text)+"</button>";}).join('')+'</div>':'<div class="qr-missing">This highlight item has no passage or highlightable segments.</div>';
 } else {
   const data=q.trendData||q.trends||q.trendTable||{}, rows=Array.isArray(data)?data:(data.rows||data.observations||[]), headers=Array.isArray(data.headers)?data.headers:(rows.length?Object.keys(rows[0]):[]);
   trendPanel='<section class="qr-trend-panel"><h3>Clinical Trends</h3>'+(data.title?'<p>'+esc(data.title)+'</p>':'')+(rows.length?'<div class="qr-table-wrap"><table class="qr-trend-table"><thead><tr>'+headers.map(h=>'<th>'+esc(h)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+headers.map(h=>'<td>'+esc(row[h]??'')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>':'<div class="qr-missing">Trend data is missing from this item.</div>')+'</section>';
   const opts=Array.isArray(q.options)?q.options:[],multi=Array.isArray(q.correctAnswers),selected=multi?(draft.choices||[]):[draft.choice],correctRaw=multi?q.correctAnswers:[q.correctAnswerText??q.correctAnswer],correctList=Array.isArray(correctRaw)?correctRaw:[correctRaw];
   response=opts.length?opts.map((o,i)=>{const val=quickRNOptionValue(o,i),txt=quickRNOptionText(o),on=selected.includes(val),isCorrect=correctList.some(x=>String(x)===String(val)||String(x)===String(txt)||String(x)===String.fromCharCode(65+i)),feedback=submitted?(isCorrect?' qr-answer-correct':(on?' qr-answer-incorrect':'')):'';const action=multi?'quickRNToggleDraft("choices",'+JSON.stringify(val)+')':'quickRNSetDraft("choice",'+JSON.stringify(val)+')';return "<button type='button' aria-pressed='"+on+"' class='qr-choice "+(on?'selected':'')+feedback+"' onclick='"+action+"'><span class='qr-choice-mark "+(multi?'is-checkbox':'is-radio')+"'>"+(multi?(on?'✓':''):String.fromCharCode(65+i))+"</span><span>"+quickRNEscape(txt)+"</span></button>";}).join(''):'<div class="qr-missing">This item is missing its response options.</div>';
 }
 return '<div class="qr-clinical-layout '+(record? "has-record":"question-only")+'">'+record+'<section class="qr-question-panel"><div class="qr-question-head"><h2>'+title+'</h2>'+(prompt?'<p>'+prompt+'</p>':'')+'</div>'+trendPanel+'<div class="qr-response-area">'+response+'</div><div class="qr-report-row"><button type="button" class="qr-report-button" onclick="quickRNOpenReport()">Report this item</button></div></section></div>';
};
const quickRNBaseHasAnswer=quickRNHasAnswer;
quickRNHasAnswer=function(q,d){const f=quickRNDetectItemFormat(q);if(f==='Multiple Response')return quickRNBaseHasAnswer({...q,ngnType:'Extended Multiple Response'},d);if(f==='Highlight')return (d.highlights||[]).length>0;if(f==='Trend')return Array.isArray(q.correctAnswers)?(d.choices||[]).length>0:!!d.choice;return quickRNBaseHasAnswer(q,d);};
const quickRNBaseGrade=quickRNGrade;
quickRNGrade=function(q,d){
 const f=quickRNDetectItemFormat(q),eq=(a,b)=>String(a??'')===String(b??''),same=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every(x=>b.includes(x));
 if(f==='Multiple Response')return quickRNBaseGrade({...q,ngnType:'Extended Multiple Response'},d);
 if(f==='Highlight'){const correct=q.correctHighlights||q.correctAnswers?.highlights||[];return correct.length>0&&same((d.highlights||[]).map(String),correct.map(String));}
 if(f==='Trend'){
  const opts=Array.isArray(q.options)?q.options:[];
  if(Array.isArray(q.correctAnswers)){const correct=q.correctAnswers.map(x=>{const i=opts.findIndex((o,j)=>eq(quickRNOptionValue(o,j),x)||eq(quickRNOptionText(o),x));return i>=0?quickRNOptionValue(opts[i],i):x;});return same(d.choices||[],correct);}
  const v=d.choice,c=q.correctAnswerText??q.correctAnswer,i=opts.findIndex((o,j)=>eq(quickRNOptionValue(o,j),v));return eq(v,c)||eq(i>=0?quickRNOptionText(opts[i]):v,c)||eq(v,String.fromCharCode(65+i));
 }
 return quickRNBaseGrade(q,d);
};
const quickRNBaseSummary=quickRNAnswerSummary;
quickRNAnswerSummary=function(q,d){const f=quickRNDetectItemFormat(q);if(f==='Multiple Response')return quickRNBaseSummary({...q,ngnType:'Extended Multiple Response'},d);if(f==='Highlight')return (d.highlights||[]).join('; ')||'No highlights selected';if(f==='Trend')return Array.isArray(q.correctAnswers)?(d.choices||[]).join('; ')||'Unanswered':String(d.choice||'Unanswered');return quickRNBaseSummary(q,d);};
function quickRNFromLegacyDraft(q,value){const f=quickRNDetectItemFormat(q);if(f==='Single Choice')return {choice:typeof value==='string'?value:''};if(f==='Multiple Response'||f==='Extended Multiple Response')return {choices:Array.isArray(value)?value:[]};if(f==='Extended Drag and Drop')return {order:Array.isArray(value)?value:quickRNInitialOrder(q)};if(f==='Highlight')return {highlights:Array.isArray(value)?value:[]};if(f==='Trend')return Array.isArray(q.correctAnswers)?{choices:Array.isArray(value)?value:[]}:{choice:typeof value==='string'?value:''};if(f==='Cloze (Drop-down)')return {cloze:value||{}};if(f==='Matrix / Grid')return {matrix:value||{}};if(f==='Bowtie')return value||{condition:'',actions:[],monitoring:[]};return value||{};}
function quickRNToLegacyDraft(q,d){const f=quickRNDetectItemFormat(q);if(f==='Single Choice')return d.choice||'';if(f==='Multiple Response'||f==='Extended Multiple Response')return d.choices||[];if(f==='Extended Drag and Drop')return d.order||[];if(f==='Highlight')return d.highlights||[];if(f==='Trend')return Array.isArray(q.correctAnswers)?(d.choices||[]):(d.choice||'');if(f==='Cloze (Drop-down)')return d.cloze||{};if(f==='Matrix / Grid')return d.matrix||{};if(f==='Bowtie')return {condition:d.condition||'',actions:d.actions||[],monitoring:d.monitoring||[]};return d;}
window.QuickRNSharedRenderer={
 detect:quickRNDetectItemFormat,
 toDraft:quickRNFromLegacyDraft,
 fromDraft:quickRNToLegacyDraft,
 cleanPrompt:quickRNCleanPrompt,
 renderReact:function(q,legacyDraft,onUpdateDraft,submitted){window.quickRNCurrentQuestion=q;window.quickRNOnDraftChange=function(d){if(typeof onUpdateDraft==='function')onUpdateDraft(quickRNToLegacyDraft(q,d));};quickRNCurrentItemId=q.id||null;quickRNDraft=quickRNFromLegacyDraft(q,legacyDraft);const html=quickRNRenderClinicalItem(q,quickRNDraft,submitted);return submitted?'<div class="qr-submitted">'+html+'</div>':html;},
 hasAnswer:quickRNHasAnswer,
 grade:quickRNGrade,
 answerSummary:quickRNAnswerSummary
};
