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
 if(/select[ -]?n|select exactly/.test(raw))return 'Select N';
 if(/single|one best answer|one answer|multiple choice/.test(raw))return 'Single Choice';
 if(raw.includes('multiple response')||raw.includes('sata')||raw.includes('select all')||raw.includes('select-n'))return 'Multiple Response';
 const answerKey=Array.isArray(q.correctAnswers)?q.correctAnswers:(Array.isArray(q.correctAnswer)?q.correctAnswer:null);
 if(answerKey)return answerKey.length>1?'Multiple Response':'Single Choice';
 return 'Single Choice';
}
function quickRNEscape(v){return String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function quickRNCleanClinicalText(value, metadata){
 let text=String(value??'').replace(/\r/g,'').trim();
 if(!text)return '';
 const meta=metadata&&typeof metadata==='object'?metadata:{};
 const labels=[meta.topic,meta.category,meta.subject,meta.caseTitle,meta.caseStudyTitle,meta.caseStudyContext?.title].filter(v=>typeof v==='string'&&v.trim()).map(v=>v.trim());
 for(let round=0;round<8;round++){
  const before=text;
  text=text.replace(/^\s*(?:\[[^\]]+\]\s*)+/,'');
  text=text.replace(/^\s*PATIENT\s+INFORMATION\s*[:—–-]?\s*/i,'');
  // Remove a numbered case heading together with its diagnosis/title, not just the number.
  text=text.replace(/^\s*CASE\s*#?\d+\s*[—–:-]\s*([^.!?\n]{2,110})[.]\s*(?=(?:A|An|The|This|That|Client|Patient|Nurse|When|Which|What)\b)/i,'');
  text=text.replace(/^\s*(?:QUESTION\s*ID|ITEM\s*ID|QID|ID|TOPIC|SUBJECT|CATEGORY|TYPE)\s*[:#-]\s*[^—–|;\n]{1,110}\s*(?:[—–|;]\s*|(?=\n)|$)/i,'');
  text=text.replace(/^\s*(?:NGN\s+)?(?:Cloze(?:\s*\(Drop[- ]?down\))?|Matrix(?:\s*(?:\/|or)\s*Grid)?|Bow\s*Tie|Bowtie|Highlight(?:\s*Text)?|Trend|Numeric(?:\s*Entry)?|Extended\s+Drag\s+and\s+Drop|Extended\s+Multiple\s+Response|Select\s+N)\s+(?:Item\s*)?\d{3,8}\s*[—–:|]\s*/i,'');
  text=text.replace(/^\s*(?:[A-Z]{2,10}[-_ ]\d{2,6}|(?:NGN\s+)?(?:EXTENDED\s+DRAG\s+AND\s+DROP|TRADITIONAL\s+NCLEX\s+PRACTICE|MULTIPLE\s+RESPONSE|SELECT\s+ALL\s+THAT\s+APPLY))\s*[-:|–—]\s*/i,'');
  text=text.replace(/^\s*(?:NGN|STANDARD)\s*[-:|–—]\s*/i,'');
  text=text.replace(/^\s*FOLLOW[- ]?UP\s*\d+\s*(?:[-:|–—]\s*)?/i,'');
  if(text===before)break;
  text=text.trim();
 }
 // When the source stores its topic/case label as a prefix, remove the label only.
 for(const label of labels){
  if(!label)continue;
  const prefix=text.slice(0,label.length);
  const rest=text.slice(label.length);
  if(prefix.toLowerCase()===label.toLowerCase()&&/^\s*[:—–|]/.test(rest)){
   text=rest.replace(/^\s*[:—–|]\s*/,'').trim();
   break;
  }
 }
 // Repeated case footers are navigation metadata, not part of the clinical record.
 const footer= /\s*[—–|·]\s*[^\n—–|·]{1,100}\s*[—–-]\s*clinical\s+case\s+#?\d+\s*[·|—–-]\s*item\s+\d+\s+of\s+\d+\s*$/i;
 text=text.split('\n').map(line=>{
  line=line.replace(footer,'').trim();
  line=line.replace(/([.!?])\s+[^.\n]{1,110}\s*[—–-]\s*clinical\s+case\s+#?\d+\s*[·|—–-]\s*item\s+\d+\s+of\s+\d+\s*$/i,'$1');
  line=line.replace(/^[^.\n]{1,110}\s*[—–-]\s*clinical\s+case\s+#?\d+\s*[·|—–-]\s*item\s+\d+\s+of\s+\d+\s*$/i,'');
  return line;
 }).filter(Boolean).join('\n').trim();
 return text;
}
function quickRNCleanPrompt(v, metadata){return quickRNCleanClinicalText(v,metadata);}
function quickRNSplitPrompt(q){
 q=q&&typeof q==='object'?q:{};
 const asText=v=>{
  if(v==null)return '';
  if(typeof v==='string'||typeof v==='number')return String(v);
  if(Array.isArray(v))return v.map(asText).filter(Boolean).join('\n\n');
  if(typeof v==='object')return String(v.summary||v.description||v.narrative||v.text||v.content||v.history||v.notes||v.patientInformation||'');
  return '';
 };
 const explicitFields=[
  q.scenario,q.clinicalScenario,q.patientScenario,q.situation,q.passage,q.context,q.stimulus,
  q.patientInfo,q.patientInformation,q.patient_information,q.patientHistory,q.medicalHistory,
  q.caseStudyText,q.case_study_text,q.clinicalRecord,q.clinicalNarrative,q.clinicalCues,
  q.caseStudyContext?.summary,q.caseStudyContext?.narrative,q.caseStudyContext?.description,
  typeof q.caseStudy==='string'?q.caseStudy:'',
  q.caseStudy?.scenario,q.caseStudy?.clinicalScenario,q.caseStudy?.summary,q.caseStudy?.description,
  q.caseStudy?.narrative,q.caseStudy?.history,q.caseStudy?.patientInformation,
  typeof q.case_study==='string'?q.case_study:'',
  q.case_study?.scenario,q.case_study?.summary,q.case_study?.description,q.case_study?.narrative,
  q.ehr?.summary,q.ehr?.narrative,q.ehr?.patientInformation,q.medicalRecord?.summary,
  q.patientRecord?.summary,q.chart?.summary
 ];
 const explicit=explicitFields.map(asText).map(v=>quickRNCleanClinicalText(v,q)).filter(Boolean);
 const scenarioParts=Array.from(new Set(explicit.map(v=>v.trim()).filter(Boolean)));
 let scenario=scenarioParts.join('\n\n');
 const rawSource=q.questionOnly||q.actualQuestion||q.question||q.stem||q.questionText||q.cleanTitle||q.title||q.prompt||'';
 const rawText=String(rawSource||'');
 const topicMatch=/^\s*([^:\n]{2,90}):\s+/.exec(rawText);
 const topic=String(q.topic||q.category||topicMatch?.[1]||'').trim();
 let source=quickRNCleanClinicalText(rawSource,Object.assign({},q,{topic:q.topic||q.category||topicMatch?.[1]||''}));
 let instruction=quickRNCleanClinicalText(q.instruction||'',q);
 if(!instruction&&q.cleanInstruction&&quickRNCleanClinicalText(q.cleanInstruction,q).toLowerCase()!==source.toLowerCase())instruction=quickRNCleanClinicalText(q.cleanInstruction,q);
 // Preserve the source wording of common NGN cue-review directions.
 const cueInstruction=/(?:^|[.!?]\s+|\n)\s*((?:Review the (?:clinical )?(?:cues|clinical record|patient record|chart|exhibits|case information)|Use the clinical cues|Analyze the clinical cues|Examine the exhibits)\b[^.!?\n]*(?:[.!?]|$))\s*$/i.exec(source);
 if(cueInstruction){
  const direction=cueInstruction[1].trim();
  const directionStart=source.toLowerCase().lastIndexOf(direction.toLowerCase());
  const before=source.slice(0,directionStart).trim();
  if(before){
   scenario=scenario||quickRNCleanClinicalText(before,q);
   source='';
   if(!instruction)instruction=direction;
  }else if(!instruction)instruction=direction;
 }
 // If the bank stores separate narrative paragraphs, retain the final direction as the right-pane prompt.
 if(!scenario){
  const blocks=source.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
  if(blocks.length>1&&/^(?:Review the|Use the|Analyze the|Examine the)\b/i.test(blocks[blocks.length-1])){
   scenario=blocks.slice(0,-1).map(v=>quickRNCleanClinicalText(v,q)).filter(Boolean).join('\n\n');
   if(!instruction)instruction=blocks[blocks.length-1];
   source='';
  }
 }
 // Traditional follow-up items keep the case narrative on the left and the final direct question on the right.
 if(!scenario&&source){
  const sentences=source.match(/[^.!?]+[.!?]+(?:[”’"']+)?|[^.!?]+$/g)||[source];
  const last=(sentences[sentences.length-1]||'').trim();
  if(sentences.length>1&&/^(?:which|what|when|where|who|how|select|identify|determine|calculate|complete|place|indicate|the nurse|the client)/i.test(last)){
   scenario=sentences.slice(0,-1).map(v=>quickRNCleanClinicalText(v,q)).filter(Boolean).join(' ').trim();
   source=last;
  }
 }
 scenario=quickRNCleanClinicalText(scenario,q);
 source=quickRNCleanClinicalText(source,q);
 if(scenario&&source.toLowerCase().startsWith(scenario.toLowerCase()))source=source.slice(scenario.length).trim();
 if(scenario&&instruction&&source&&source.toLowerCase()===instruction.toLowerCase())source='';
 let question=instruction||source||'';
 // This question family intentionally repeats the cleaned stem in the response pane.
 if(/^developmental milestones$/i.test(topic)&&scenario)question=scenario;
 return {scenario,question};
}
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
   response=opts.length?opts.map((o,i)=>{const val=quickRNOptionValue(o,i),txt=quickRNOptionText(o),on=selected.includes(val);const isCorrect=correctList.some(x=>String(x)===String(val)||String(x)===String(txt)||String(x)===String.fromCharCode(65+i));const feedback=submitted?(isCorrect?' qr-answer-correct':(on?' qr-answer-incorrect':'')):'';const action=multi?'quickRNToggleDraft("choices",'+JSON.stringify(val)+')':'quickRNSetDraft("choice",'+JSON.stringify(val)+')';const label=submitted?(isCorrect?(on?'Your correct choice':'Correct choice'):(on?'Your incorrect choice':'')):'';return "<button type='button' aria-pressed='"+on+"' class='qr-choice "+(on?'selected':'')+feedback+"' onclick='"+action+"'><span class='qr-choice-mark "+(multi?'is-checkbox':'is-radio')+"'>"+String.fromCharCode(65+i)+"</span><span class='qr-choice-copy'>"+quickRNEscape(txt)+(label?"<small class='qr-choice-feedback'>"+label+"</small>":"")+"</span></button>";}).join(''):'<div class="qr-missing">This item is missing its response options.</div>';
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
 return `<div class="qr-clinical-layout ${hasRecord?"has-record":"question-only"}">${record}<section class="qr-question-panel"><div class="qr-question-head"><h2>${quickRNEscape(title)}</h2>${prompt?`<p>${quickRNEscape(prompt)}</p>`:''}</div><div class="qr-response-area">${response}</div></section></div>`;
}
function quickRNHasAnswer(q,d){
 q=q||{};d=d&&typeof d==='object'?d:{};
 const f=quickRNDetectItemFormat(q),hasValue=v=>v!==undefined&&v!==null&&String(v).trim()!=='';
 if(f==='Single Choice')return hasValue(d.choice);
 if(f==='Extended Multiple Response'||f==='Multiple Response')return Array.isArray(d.choices)&&d.choices.length>0;
 if(f==='Matrix / Grid')return Object.values(d.matrix||{}).some(hasValue);
 if(f==='Cloze (Drop-down)')return Object.values(d.cloze||{}).some(hasValue);
 if(f==='Extended Drag and Drop')return Array.isArray(d.order)&&d.order.length>0;
 if(f==='Bowtie')return hasValue(d.condition)||(Array.isArray(d.actions)&&d.actions.length>0)||(Array.isArray(d.monitoring)&&d.monitoring.length>0);
 return false;
}
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
 if(f==='Multiple Response')return quickRNBaseRender({...q,ngnType:'Extended Multiple Response'},draft,submitted);if(f!=='Highlight'&&f!=='Trend')return quickRNBaseRender(q,draft,submitted);
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
 return '<div class="qr-clinical-layout '+(record? "has-record":"question-only")+'">'+record+'<section class="qr-question-panel"><div class="qr-question-head"><h2>'+title+'</h2>'+(prompt?'<p>'+prompt+'</p>':'')+'</div>'+trendPanel+'<div class="qr-response-area">'+response+'</div></section></div>';
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

/* Numeric Entry and Select-N response support. */
const quickRNDetectBase=quickRNDetectItemFormat;
quickRNDetectItemFormat=function(q){
 const raw=[q&&q.ngnType,q&&q.type,q&&q.format,q&&q.questionType,q&&q.itemType].filter(Boolean).join(' ').toLowerCase();
 if(/numeric[ _-]?entry|number[ _-]?entry/.test(raw)||q&&(q.numericAnswer!==undefined||q.correctNumericAnswer!==undefined||q.numericRange))return 'Numeric Entry';
 if(/select[ _-]?n/.test(raw)||q&&(q.selectN!==undefined||q.numberToSelect!==undefined||q.requiredSelections!==undefined))return 'Select N';
 return quickRNDetectBase(q);
};
const quickRNBaseToggle=quickRNToggleDraft;
quickRNToggleDraft=function(path,value){
 const q=window.quickRNCurrentQuestion||{};
 if(path==='choices'&&quickRNDetectItemFormat(q)==='Select N'){
  const limit=Number(q.selectN??q.numberToSelect??q.requiredSelections??0),current=Array.isArray(quickRNDraft.choices)?quickRNDraft.choices:[];
  if(limit>0&&!current.includes(value)&&current.length>=limit){if(typeof window.quickRNShowNotice==='function')window.quickRNShowNotice('Select exactly '+limit+' options.');return;}
 }
 quickRNBaseToggle(path,value);
};
const quickRNNumericBaseRender=quickRNRenderClinicalItem;
quickRNRenderClinicalItem=function(q,draft,submitted){
 const html=quickRNNumericBaseRender(q,draft,submitted),format=quickRNDetectItemFormat(q);
 if(format==='Numeric Entry'){
  const value=draft.numericEntry??'',unit=q.unit||q.numericUnit||'';
  const field='<div class="qr-numeric-entry"><label for="qr-numeric-answer">Enter a numeric answer'+(unit?' ('+quickRNEscape(unit)+')':'')+'</label><input id="qr-numeric-answer" type="number" inputmode="decimal" step="'+quickRNEscape(q.step??'any')+'" value="'+quickRNEscape(value)+'" placeholder="'+quickRNEscape(q.placeholder||'Enter number')+'" oninput="quickRNSetDraft(\'numericEntry\',this.value)"></div>';
  return html.replace(/<div class="qr-response-area">[\s\S]*?<\/div>/, '<div class="qr-response-area">'+field+'</div>');
 }
 if(format==='Select N'){
  const limit=Number(q.selectN??q.numberToSelect??q.requiredSelections??0);
  const notice='<p class="qr-help qr-select-n-instruction">Select exactly '+limit+' '+(limit===1?'option':'options')+'. <span class="qr-select-n-count">'+(draft.choices||[]).length+'/'+limit+' selected</span></p>';
  return html.replace('<div class="qr-response-area">','<div class="qr-response-area">'+notice);
 }
 return html;
};
const quickRNHasAnswerBase2=quickRNHasAnswer;
quickRNHasAnswer=function(q,d){
 const f=quickRNDetectItemFormat(q);
 if(f==='Numeric Entry')return d&&d.numericEntry!==undefined&&String(d.numericEntry).trim()!==''&&Number.isFinite(Number(d.numericEntry));
 if(f==='Select N'){const n=Number(q.selectN??q.numberToSelect??q.requiredSelections??0);return n>0&&Array.isArray(d.choices)&&d.choices.length===n;}
 return quickRNHasAnswerBase2(q,d);
};
const quickRNGradeBase2=quickRNGrade;
quickRNGrade=function(q,d){
 const f=quickRNDetectItemFormat(q);
 if(f==='Numeric Entry'){
  const value=Number(d&&d.numericEntry),answer=Number(q.correctNumericAnswer??q.numericAnswer??q.correctAnswer);
  if(!Number.isFinite(value)||!Number.isFinite(answer))return false;
  const range=q.numericRange||{};
  const min=range.min??q.acceptableMin,max=range.max??q.acceptableMax;
  if(min!==undefined||max!==undefined)return value>=(min??-Infinity)&&value<=(max??Infinity);
  const tolerance=Number(q.tolerance??q.numericTolerance??0);
  return Math.abs(value-answer)<=tolerance;
 }
 if(f==='Select N'){
  const correct=q.correctAnswers??q.correctAnswer??[],selected=d&&d.choices||[];
  const opts=Array.isArray(q.options)?q.options:[];
  const normalize=x=>{const found=opts.find((o,i)=>String(quickRNOptionValue(o,i))===String(x)||String(quickRNOptionText(o))===String(x));return found?quickRNOptionValue(found,opts.indexOf(found)):x;};
  const a=selected.map(normalize),b=(Array.isArray(correct)?correct:[correct]).map(normalize);
  return a.length===Number(q.selectN??q.numberToSelect??q.requiredSelections??b.length)&&a.length===b.length&&a.every(x=>b.includes(x));
 }
 return quickRNGradeBase2(q,d);
};
const quickRNAnswerSummaryBase2=quickRNAnswerSummary;
quickRNAnswerSummary=function(q,d){
 const f=quickRNDetectItemFormat(q);
 if(f==='Numeric Entry')return String(d&&d.numericEntry!==undefined&&d.numericEntry!==''?d.numericEntry:'Unanswered');
 if(f==='Select N')return (d&&d.choices||[]).join('; ')||'Unanswered';
 return quickRNAnswerSummaryBase2(q,d);
};
const quickRNFromLegacyBase2=quickRNFromLegacyDraft;
quickRNFromLegacyDraft=function(q,value){const f=quickRNDetectItemFormat(q);if(f==='Numeric Entry')return {numericEntry:value===undefined||value===null?'':String(value)};if(f==='Select N')return {choices:Array.isArray(value)?value:[]};return quickRNFromLegacyBase2(q,value);};
const quickRNToLegacyBase2=quickRNToLegacyDraft;
quickRNToLegacyDraft=function(q,d){const f=quickRNDetectItemFormat(q);if(f==='Numeric Entry')return d.numericEntry??'';if(f==='Select N')return d.choices||[];return quickRNToLegacyBase2(q,d);};

window.QuickRNSharedRenderer={
 detect:quickRNDetectItemFormat,
 toDraft:quickRNFromLegacyDraft,
 fromDraft:quickRNToLegacyDraft,
 cleanPrompt:quickRNCleanPrompt,
 cleanClinicalText:quickRNCleanClinicalText,
 splitPrompt:quickRNSplitPrompt,
 renderReact:function(q,legacyDraft,onUpdateDraft,submitted){window.quickRNCurrentQuestion=q;window.quickRNOnDraftChange=function(d){if(typeof onUpdateDraft==='function')onUpdateDraft(quickRNToLegacyDraft(q,d));};quickRNCurrentItemId=q.id||null;quickRNDraft=quickRNFromLegacyDraft(q,legacyDraft);const html=quickRNRenderClinicalItem(q,quickRNDraft,submitted);return submitted?'<div class="qr-submitted">'+html+'</div>':html;},
 hasAnswer:quickRNHasAnswer,
 grade:quickRNGrade,
 answerSummary:quickRNAnswerSummary
};
