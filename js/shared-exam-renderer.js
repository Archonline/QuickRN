/* Shared NCLEX-style renderer and interaction layer for all exam modes. */
function quickRNDetectItemFormat(q){
 q=q&&typeof q==='object'?q:{};
 const raw=[q.ngnType,q.type,q.format,q.questionType,q.itemType].filter(Boolean).join(' ').replace(/[_-]/g,' ').toLowerCase();
 // Resolve the most specific NGN format before generic words such as "multiple".
 if(/matrix|grid/.test(raw)||(q.rows&&q.columns)||q.matrixData)return 'Matrix / Grid';
 if(/dropdown rationale|cloze|drop down|dropdown/.test(raw)||q.clozeTemplate||q.template||q.dropdowns||q.clozeOptions||(q.options&&!Array.isArray(q.options)&&typeof q.options==='object'))return 'Cloze (Drop-down)';
 if(/bow ?tie/.test(raw)||q.bowtieData||q.bowtie)return 'Bowtie';
 if(/highlight/.test(raw)||q.highlightText||q.highlightSegments||q.correctHighlights)return 'Highlight';
 if(/trend/.test(raw)||q.trendData||q.trends||q.trendTable)return 'Trend';
 if(/numeric|number entry/.test(raw)||q.numericAnswer!==undefined||q.correctNumericAnswer!==undefined||q.correctValue!==undefined||q.numericRange||q.acceptedRange)return 'Numeric Entry';
 if(/select ?n|select exactly/.test(raw)||q.selectN!==undefined||q.numberToSelect!==undefined||q.requiredSelections!==undefined||q.selectCount!==undefined)return 'Select N';
 if(/drag|ordered response|order these|put in order/.test(raw)||q.availableItems||q.correctOrder)return 'Extended Drag and Drop';
 if(/extended multiple response/.test(raw))return 'Extended Multiple Response';
 if(/multiple response|sata|select all that apply/.test(raw))return 'Multiple Response';
 if(/single|one best answer|one answer|multiple choice/.test(raw))return 'Single Choice';
 const answerKey=Array.isArray(q.correctAnswers)?q.correctAnswers:(Array.isArray(q.correctAnswer)?q.correctAnswer:null);
 if(answerKey)return answerKey.length>1?'Multiple Response':'Single Choice';
 return 'Single Choice';
}
function quickRNEscape(v){return String(v==null?'':v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function quickRNDecodeClinicalEntities(value){
 let text=String(value==null?'':value);
 const decode=source=>source.replace(/&(#x[0-9a-f]+|#\d+|amp|lt|gt|quot|apos|nbsp);/gi,(match,entity)=>{
  const key=entity.toLowerCase();
  if(key==='amp')return '&';if(key==='lt')return '<';if(key==='gt')return '>';if(key==='quot')return '"';if(key==='apos')return "'";if(key==='nbsp')return ' ';
  const code=key.startsWith('#x')?parseInt(key.slice(2),16):parseInt(key.slice(1),10);
  return Number.isFinite(code)&&code>0&&code<=0x10ffff?String.fromCodePoint(code):match;
 });
 // Some imported records are double-escaped (for example &amp;lt;div&amp;gt;).
 for(let pass=0;pass<3;pass++){const next=decode(text);if(next===text)break;text=next;}
 return text;
}
function quickRNPlainClinicalText(value){
 let text=quickRNDecodeClinicalEntities(value).replace(/\r/g,'');
 if(/<\/?[a-z][^>]*>/i.test(text))text=text.replace(/<\/?[a-z][^>]*>/gi,' ');
 return text.replace(/\s+/g,' ').trim();
}
function quickRNPatientInfoText(patient){
 if(patient==null)return '';
 if(typeof patient!=='object'||Array.isArray(patient))return quickRNPlainClinicalText(patient);
 const labels={name:'Name',patientName:'Name',age:'Age',sex:'Sex',gender:'Gender',weight:'Weight',height:'Height',history:'History',medicalHistory:'Medical history',allergies:'Allergies',code:'Patient ID',summary:'Summary',description:'Description',notes:'Notes'};
 const preferred=['age','sex','gender','weight','height','history','medicalHistory','allergies','code','summary','description','notes'];
 const keys=[...preferred.filter(k=>patient[k]!=null&&patient[k]!==''),...Object.keys(patient).filter(k=>!preferred.includes(k)&&!['name','patientName'].includes(k)&&patient[k]!=null&&patient[k]!=='')];
 const seen=new Set(),lines=[];
 keys.forEach(key=>{
  const value=quickRNPlainClinicalText(patient[key]);if(!value)return;
  const normalized=value.toLowerCase();if(seen.has(normalized))return;seen.add(normalized);
  const label=labels[key]||key.replace(/([A-Z])/g,' $1').replace(/^./,c=>c.toUpperCase());
  lines.push(label+': '+value);
 });
 return lines.join('\n');
}
function quickRNCleanClinicalText(value, metadata){
 let text=String(value??'').replace(/\r/g,'').trim();
 if(!text)return '';
 // Remove short diagnosis/topic prefixes such as “Cystic fibrosis:” and “HELLP syndrome:”.
 text=text.replace(/^\s*([^:\n]{2,90}):\s*(?=(?:A|An|The|This|That|Client|Patient|Nurse|When|Which|What|Review|Use|Analyze|Interpret|Complete|Select|Determine|Identify|Ages?\b|\d{1,3}[- ]year[- ]old)\b)/i,'');
 const meta=metadata&&typeof metadata==='object'?metadata:{};
 const labels=[meta.topic,meta.category,meta.subject,meta.caseTitle,meta.caseStudyTitle,meta.caseStudyContext?.title].filter(v=>typeof v==='string'&&v.trim()).map(v=>v.trim());
 for(let round=0;round<8;round++){
  const before=text;
  text=text.replace(/^\s*(?:\[[^\]]+\]\s*)+/,'');
  text=text.replace(/^\s*PATIENT\s+INFORMATION\s*[:—–-]?\s*/i,'');
  // Remove a standalone numbered case heading, or its inline diagnosis/title prefix.
  text=text.replace(/^\s*CASE\s*#?\d+\s*[—–:-]\s*([^.!?\n]{2,110})\s*(?=\n|$)/i,'');
  text=text.replace(/^\s*CASE\s*#?\d+\s*[—–:-]\s*([^.!?\n]{2,110})[.:]\s*(?=(?:A|An|The|This|That|Client|Patient|Nurse|When|Which|What)\b)/i,'');
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
  if(typeof v==='string'||typeof v==='number')return quickRNPlainClinicalText(v);
  if(Array.isArray(v))return v.map(asText).filter(Boolean).join('\n\n');
  if(typeof v==='object')return quickRNPatientInfoText(v);
  return '';
 };
 const primaryScenarioFields=[q.scenario,q.clinicalScenario,q.patientScenario,q.situation,q.passage];
 const hasDedicatedScenario=primaryScenarioFields.some(value=>asText(value).trim());
 const explicitFields=hasDedicatedScenario
  ? [...primaryScenarioFields,q.caseStudyContext?.scenario,q.caseStudyContext?.narrative,
     typeof q.caseStudy==='string'?q.caseStudy:'',q.caseStudy?.scenario,q.caseStudy?.narrative,
     typeof q.case_study==='string'?q.case_study:'',q.case_study?.scenario,q.case_study?.narrative]
  : [
     q.scenario,q.clinicalScenario,q.patientScenario,q.situation,q.passage,q.context,
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
 const rawSource=[q.questionOnly,q.actualQuestion,q.question,q.stem,q.questionText,q.cleanTitle,q.title,q.prompt].map(asText).find(value=>value.trim())||'';
 const rawText=String(rawSource||'');
 const topicMatch=/^\s*([^:\n]{2,90}):\s+/.exec(rawText);
 const hasFormatLead=/^\s*(?:NGN\s+)?(?:Cloze(?:\s*\(Drop[- ]?down\))?|Matrix(?:\s*(?:\/|or)\s*Grid)?|Bow\s*Tie|Bowtie|Highlight(?:\s*Text)?|Trend|Numeric(?:\s*Entry)?|Extended\s+Drag\s+and\s+Drop|Extended\s+Multiple\s+Response|Select\s+N)\s+(?:Item\s*)?\d{3,8}\s*[—–:|]/i.test(rawText);
 const sourceMeta=Object.assign({},q,{topic:hasFormatLead?'':(topicMatch?.[1]||q.topic||q.category||'')});
 let source=quickRNCleanClinicalText(rawSource,sourceMeta);
 let instruction=quickRNCleanClinicalText(q.instruction||'',q);
 if(!instruction&&q.cleanInstruction&&quickRNCleanClinicalText(q.cleanInstruction,q).toLowerCase()!==source.toLowerCase())instruction=quickRNCleanClinicalText(q.cleanInstruction,q);
 // Preserve the source wording of common NGN cue-review directions.
 const cueInstruction=/(?:^|[.!?]\s+|\n)\s*((?:Review the (?:clinical )?(?:cues|clinical record|patient record|chart|exhibits|case information)|Use the clinical cues|Analyze the clinical cues|Examine the exhibits)\b[^.!?\n]*(?:[.!?]|$))\s*$/i.exec(source);
 if(cueInstruction){
  const direction=cueInstruction[1].trim();
  const directionStart=source.toLowerCase().lastIndexOf(direction.toLowerCase());
  const before=source.slice(0,directionStart).trim();
  if(before){
   scenario=scenario||quickRNCleanClinicalText(before,sourceMeta);
   source='';
   if(!instruction)instruction=direction;
  }else if(!instruction)instruction=direction;
 }
 // If the bank stores separate narrative paragraphs, retain the final direction as the right-pane prompt.
 if(!scenario){
  const blocks=source.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
  if(blocks.length>1&&/^(?:Review the|Use the|Analyze the|Examine the)\b/i.test(blocks[blocks.length-1])){
   scenario=blocks.slice(0,-1).map(v=>quickRNCleanClinicalText(v,sourceMeta)).filter(Boolean).join('\n\n');
   if(!instruction)instruction=blocks[blocks.length-1];
   source='';
  }
 }
 // Traditional follow-up items keep the case narrative on the left and the final direct question on the right.
 if(!scenario&&source){
  const sentences=source.match(/[^.!?]+[.!?]+(?:[”’"']+)?|[^.!?]+$/g)||[source];
  const last=(sentences[sentences.length-1]||'').trim();
  if(sentences.length>1&&/^(?:which|what|when|where|who|how|select|identify|determine|calculate|complete|place|indicate|the nurse|the client)/i.test(last)){
   scenario=sentences.slice(0,-1).map(v=>quickRNCleanClinicalText(v,sourceMeta)).filter(Boolean).join(' ').trim();
   source=last;
  }
 }
 scenario=quickRNCleanClinicalText(scenario,sourceMeta);
 source=quickRNCleanClinicalText(source,q);
 if(scenario&&source.toLowerCase().startsWith(scenario.toLowerCase()))source=source.slice(scenario.length).trim();
 if(scenario&&instruction&&source&&source.toLowerCase()===instruction.toLowerCase())source='';
 // The item stem/question is the actual test prompt. The separate instruction field often contains only boilerplate such as 'Select the single best answer.'
 // Use the instruction as a fallback only when the stem was fully moved into the clinical scenario or is otherwise empty.
 let question=source||instruction||'';
 // Certain cue-review items intentionally repeat the cleaned stem in the response pane.
 if(scenario&&!q.instruction&&/^Review the clinical cues and complete the clinical judgment item\.?$/i.test(instruction))question=scenario;
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
function quickRNSetClozeDraft(select){if(!select)return;const key=select.getAttribute('data-cloze-key')||'0';quickRNSetDraft('cloze',{...(quickRNDraft.cloze||{}),[key]:select.value});}
function quickRNSetMatrixCell(id,value,multiple){const matrix={...(quickRNDraft.matrix||{})},current=Array.isArray(matrix[id])?[...matrix[id]]:(matrix[id]===undefined||matrix[id]===null||matrix[id]===''?[]:[matrix[id]]);if(multiple){matrix[id]=current.includes(value)?current.filter(x=>String(x)!==String(value)):[...current,value];}else matrix[id]=value;quickRNSetDraft('matrix',matrix);}
function quickRNToggleDraft(path,value){const a=Array.isArray(quickRNDraft[path])?[...quickRNDraft[path]]:[];quickRNDraft[path]=a.includes(value)?a.filter(x=>x!==value):(['actions','monitoring'].includes(path)&&a.length>=2?a:[...a,value]);quickRNCommitDraft();if(typeof window.quickRNRenderAgain==='function')window.quickRNRenderAgain();}
function quickRNMoveDraft(from,to){const a=[...(quickRNDraft.order||[])];if(from<0||to<0||from>=a.length||to>=a.length)return;const [v]=a.splice(from,1);a.splice(to,0,v);quickRNDraft={...quickRNDraft,order:a};quickRNCommitDraft();if(typeof window.quickRNRenderAgain==='function')window.quickRNRenderAgain();}
function quickRNDragStart(e,i){quickRNDraggedIndex=i;e.dataTransfer.effectAllowed='move';e.dataTransfer.setData('text/plain',String(i));}
function quickRNDrop(e,i){e.preventDefault();const from=quickRNDraggedIndex!==null?quickRNDraggedIndex:Number(e.dataTransfer.getData('text/plain'));quickRNDraggedIndex=null;quickRNMoveDraft(from,i);}
function quickRNAdaptClinicalSchema(input){
 const source=input&&typeof input==='object'?input:{};
 const q={...source};
 const plain=value=>quickRNPlainClinicalText(value);
 const meaningful=value=>{
  if(value==null||value==='')return false;
  if(Array.isArray(value))return value.some(meaningful);
  if(typeof value==='object')return Object.values(value).some(meaningful);
  return String(value).trim()!=='';
 };
 const entries=Array.isArray(q.tabs)?q.tabs.map((tab,index)=>{
  if(typeof tab==='string')return ['Clinical information '+(index+1),tab];
  if(!tab||typeof tab!=='object')return ['', ''];
  const label=tab.label||tab.title||tab.name||tab.tabName||tab.heading||('Clinical information '+(index+1));
  const content=tab.content??tab.value??tab.text??tab.body??tab.details??tab.data??'';
  return [String(label),content];
 }):(q.tabs&&typeof q.tabs==='object'?Object.entries(q.tabs).map(([label,tab])=>[label,tab&&typeof tab==='object'?(tab.content??tab.value??tab.text??tab.body??tab.details??tab.data??''):tab]):[]);
 const hasProfileSummary=meaningful(q.patientProfile)||meaningful(q.patientInfo)||meaningful(q.patientInformation)||meaningful(q.patient_information);
 const isPatientInfoTab=label=>/^(patient\s*(information|info|profile)|demographics|patient\s*details)$/i.test(String(label||'').trim().replace(/\s+/g,' '));
 // Patient profile is already rendered once as the patient summary. Suppress
 // a second tab with the same purpose, while retaining all clinical-data tabs.
 const tabs=entries.filter(entry=>meaningful(entry[1])&&!(hasProfileSummary&&isPatientInfoTab(entry[0]))).map(([label,value])=>[String(label||'Clinical information'),value]);
 // Split the original stem before mapping patientProfile into legacy patientInfo;
 // otherwise demographics can be mistaken for the question's narrative.
 const split=quickRNSplitPrompt(q);
 const profile=q.patientProfile;
 if(meaningful(profile)&&!meaningful(q.patientInfo))q.patientInfo=profile;
 const context=q.caseStudyContext&&typeof q.caseStudyContext==='object'?q.caseStudyContext:{};
 if(meaningful(q.caseGroupId))q.caseStudyContext={...context,id:context.id||String(q.caseGroupId),title:context.title||q.caseTitle||'Clinical case'};
 const existingEhr=q.ehr&&typeof q.ehr==='object'?{...q.ehr}:{};
 const standardLabels={'nurses notes':'nursesNotes','nurse notes':'nursesNotes','vital signs':'vitalSigns','diagnostic results':'diagnosticResults','lab results':'diagnosticResults','laboratory results':'diagnosticResults','history & physical':'historyPhysical','history and physical':'historyPhysical'};
 const extraTabs=[];
 tabs.forEach(([label,value])=>{
  const key=standardLabels[String(label).toLowerCase().replace(/\s+/g,' ').trim()];
  if(key){if(!meaningful(existingEhr[key]))existingEhr[key]=value;}
  else extraTabs.push([label,value]);
 });
 if(extraTabs.length)existingEhr.additionalTabs=extraTabs;
 // A scenario embedded in a traditional stem belongs in the left clinical pane,
 // even when a separate patient profile or chart tabs are also supplied.
 if(meaningful(split.scenario)){
  const existingNotes=plain(existingEhr.nursesNotes),scenario=plain(split.scenario);
  const alreadyInNotes=existingNotes&&existingNotes.toLowerCase().includes(scenario.toLowerCase());
  const additionalTabs=Array.isArray(existingEhr.additionalTabs)?existingEhr.additionalTabs.slice():[];
  if(!alreadyInNotes&&!additionalTabs.some(tab=>Array.isArray(tab)&&String(tab[1]||'').toLowerCase().includes(scenario.toLowerCase())))additionalTabs.unshift(['Clinical scenario',split.scenario]);
  q.ehr={...existingEhr,...(additionalTabs.length?{additionalTabs}:{} )};
 }else if(Object.keys(existingEhr).length)q.ehr=existingEhr;
 return q;
}
function quickRNRenderClinicalItem(q,draft,submitted=false){
 const promptSplit=quickRNSplitPrompt(q);
 q=quickRNAdaptClinicalSchema(q);
 const f=quickRNDetectItemFormat(q), ehr=q.ehr||{}, patient=q.patientInfo||{};
 const cleanField=v=>{let t=quickRNCleanPrompt(v);for(const prefix of [q.category,q.topic,q.ngnType,q.type]){if(prefix&&t.toLowerCase().startsWith(String(prefix).toLowerCase())){const rest=t.slice(String(prefix).length);if(/^\s*[-:|]\s*/.test(rest))t=rest.replace(/^\s*[-:|]\s*/,'');}}return t;};
 const stripLeadingScenario=value=>{
  const text=cleanField(value),scenario=quickRNCleanClinicalText(promptSplit.scenario||'',q);
  if(text&&scenario&&text.toLowerCase().startsWith(scenario.toLowerCase()))return text.slice(scenario.length).replace(/^[\s.!?—–:;-]+/,'').trim();
  return text;
 };
 const title=stripLeadingScenario(q.cleanTitle||q.title||q.promptTitle||q.questionText||q.question||'Clinical question')||cleanField(promptSplit.question||'Clinical question');
 const rawPrompt=stripLeadingScenario(q.cleanInstruction||q.instruction||((q.title||q.promptTitle)&&q.questionText&&q.title!==q.questionText?q.questionText:''));
 const prompt=rawPrompt&&rawPrompt.toLowerCase()!==title.toLowerCase()?rawPrompt:'';
 const tabs=[['Nurses’ Notes',ehr.nursesNotes],['Vital Signs',ehr.vitalSigns],['Diagnostic Results',ehr.diagnosticResults],['History & Physical',ehr.historyPhysical],...(Array.isArray(ehr.additionalTabs)?ehr.additionalTabs:[])];
 const caseContext=q.caseStudyContext||{};
 const patientSummary=typeof q.patientInfo==='string'?quickRNPlainClinicalText(q.patientInfo):(quickRNPatientInfoText(patient)||quickRNPlainClinicalText(caseContext.summary||q.caseStudy||q.case_study||''));
 const hasClinicalValue=value=>{if(value==null||value==='')return false;if(Array.isArray(value))return value.some(hasClinicalValue);if(typeof value==='object')return Object.values(value).some(hasClinicalValue);return String(value).trim()!=='';};
 const hasRecord=!!(patientSummary||hasClinicalValue(q.ehr)||hasClinicalValue(q.patientInfo)||hasClinicalValue(q.patientProfile)||hasClinicalValue(q.caseStudy)||hasClinicalValue(q.case_study)||tabs.some(t=>hasClinicalValue(t[1])&&quickRNPlainClinicalText(t[1])));
 const patientName=quickRNPlainClinicalText(patient.name||patient.patientName||caseContext.title||q.caseTitle||'Patient');
 const caseMeta=caseContext.stepIndex?'<div class="qr-patient-meta">Case study · Item '+quickRNEscape(caseContext.stepIndex)+' of '+quickRNEscape(caseContext.stepCount||caseContext.stepIndex)+'</div>':(patient.code?'<div class="qr-patient-meta">'+quickRNEscape(patient.code)+'</div>':'');
 const seenRecordSections=new Set(patientSummary?[quickRNPlainClinicalText(patientSummary).toLowerCase()]:[]);const recordSections=tabs.map(t=>[t[0],quickRNPlainClinicalText(t[1])]).filter(t=>{if(!t[1])return false;const key=t[1].toLowerCase();if(seenRecordSections.has(key))return false;seenRecordSections.add(key);return true;}).map(t=>'<section class="qr-ehr-section"><h4>'+t[0]+'</h4><div>'+quickRNEscape(t[1])+'</div></section>').join('');
 const scenarioText=quickRNPlainClinicalText(promptSplit.scenario||'');const normalizeClinical=v=>quickRNPlainClinicalText(v).toLowerCase();const duplicateSummary=patientSummary&&scenarioText&&normalizeClinical(patientSummary)===normalizeClinical(scenarioText)&&!caseContext.title&&!caseContext.summary;const summarySection=patientSummary&&!duplicateSummary?'<section class="qr-ehr-section"><h4>'+(caseContext.title?'Case overview':'Patient information')+'</h4><div>'+quickRNEscape(patientSummary).replace(/\n/g,'<br>')+'</div></section>':'';
 let record=hasRecord?'<aside class="qr-ehr'+(f==='Single Choice'?' qr-single-choice-scenario':'')+'"><div class="qr-ehr-head"><strong><i class="fa-solid fa-hospital-user"></i> Clinical Record</strong><span>'+quickRNEscape(patientName)+'</span></div>'+caseMeta+'<div class="qr-ehr-body">'+recordSections+summarySection+(!recordSections&&!summarySection?'<section class="qr-ehr-section"><h4>Clinical scenario</h4><div>'+quickRNEscape(scenarioText||'')+'</div></section>':'')+'</div></aside>':'';
 let response='';
 if(f==='Single Choice'||f==='Multiple Response'||f==='Extended Multiple Response'||f==='Select N'){
   const opts=Array.isArray(q.options)?q.options:[]; const multi=f==='Multiple Response'||f==='Extended Multiple Response'||f==='Select N'; const selected=multi?(draft.choices||[]):[draft.choice];
   const correctRaw=q.correctAnswers??q.correctAnswer??q.correctAnswerText??q.correctOption??q.correct??[];
   const correctList=Array.isArray(correctRaw)?correctRaw:[correctRaw];
   const normalize=v=>String(v??'').trim().toLowerCase();
   response=opts.length?opts.map((o,i)=>{const val=quickRNOptionValue(o,i),txt=quickRNOptionText(o),letter=String.fromCharCode(65+i),on=selected.some(x=>normalize(x)===normalize(val)||normalize(x)===normalize(txt)||normalize(x)===normalize(letter));const keyed=correctList.some(x=>[val,txt,letter].some(candidate=>normalize(x)===normalize(candidate)));const isCorrect=!!(o&&typeof o==='object'&&o.correct===true)||keyed;const feedback=submitted?(isCorrect?' qr-answer-correct':' qr-answer-incorrect'):'';const action=multi?'quickRNToggleDraft("choices",'+JSON.stringify(val)+')':'quickRNSetDraft("choice",'+JSON.stringify(val)+')';const status=submitted?(isCorrect?'<small class="qr-choice-feedback qr-feedback-correct" aria-label="Correct answer">✓ Correct answer'+(on?' · Your choice':'')+'</small>':'<small class="qr-choice-feedback qr-feedback-incorrect" aria-label="Incorrect answer">✕ Incorrect</small>'):'';return "<button type='button' aria-pressed='"+on+"' "+(submitted?"aria-disabled='true'":"")+" class='qr-choice "+(on?'selected':'')+feedback+"' onclick='"+(submitted?'':action)+"'><span class='qr-choice-mark "+(multi?'is-checkbox':'is-radio')+"'>"+String.fromCharCode(65+i)+".</span><span class='qr-choice-copy'>"+quickRNEscape(txt)+(status?"<span class='qr-choice-status'>"+status+"</span>":"")+"</span></button>";}).join(''):'<div class="qr-missing">This item is missing its response options.</div>';
 } else if(f==='Matrix / Grid'){
   const rows=q.rows||q.matrixData?.rows||[], suppliedCols=q.columns||q.matrixData?.columns||[], rawCorrect=q.correctAnswers?.matrix||q.correctAnswers||{}, correctMap=rawCorrect.matrix||rawCorrect;
   const label=v=>typeof v==='object'&&v!==null?String(v.text??v.label??v.value??v.name??v.id??''):String(v??'');
   response=rows.length?'<div class="qr-table-wrap"><table class="qr-matrix"><thead><tr><th>Clinical finding / intervention</th><th>Response options</th></tr></thead><tbody>'+rows.map((r,i)=>{const id=String(r.id??i),rowOptions=Array.isArray(r.options)&&r.options.length?r.options:suppliedCols,expected=correctMap[id]??r.correct??r.correctAnswers,actual=draft.matrix?.[id],multiple=Array.isArray(expected)||r.multiple===true||/multiple/i.test(String(q.ngnType||q.type||q.format||'')),actualValues=Array.isArray(actual)?actual.map(String):[String(actual??'')],expectedValues=Array.isArray(expected)?expected.map(String):[String(expected??'')],rowCorrect=expected!==undefined&&expected!==null&&(multiple?actualValues.length===expectedValues.length&&expectedValues.every(v=>actualValues.includes(v)):String(actual??'')===String(expected));return '<tr class="'+(submitted?(rowCorrect?'qr-matrix-row-correct':'qr-matrix-row-incorrect'):'')+'"><td>'+quickRNEscape(label(r.text??r.label??r))+(submitted?'<div class="qr-matrix-row-feedback">'+(rowCorrect?'<span class="qr-feedback-correct">✓ Correct</span>':'<span class="qr-feedback-incorrect">✕ Incorrect · Correct answer: '+quickRNEscape(expectedValues.join(', ')||'Not provided')+'</span>')+'</div>':'')+'</td><td><div class="qr-matrix-options">'+rowOptions.map(c=>{const value=label(c),selected=actualValues.includes(value),isCorrect=expectedValues.includes(value),feedback=submitted?(isCorrect?' qr-answer-correct':(selected?' qr-answer-incorrect':'')):'';return '<label class="qr-matrix-option'+feedback+'"><input type="'+(multiple?'checkbox':'radio')+'" name="qr-matrix-'+quickRNEscape(id)+'" '+(selected?'checked':'')+' '+(submitted?'disabled':'')+' onchange="quickRNSetMatrixCell('+JSON.stringify(id)+','+JSON.stringify(value)+','+multiple+')"><span class="qr-matrix-option-label">'+quickRNEscape(value)+'</span>'+(submitted&&isCorrect?'<span class="qr-choice-feedback qr-feedback-correct" aria-label="Correct answer">✓</span>':'')+(submitted&&selected&&!isCorrect?'<span class="qr-choice-feedback qr-feedback-incorrect" aria-label="Incorrect answer">✕</span>':'')+'</label>';}).join('')+'</div></td></tr>';}).join('')+'</tbody></table></div>':'<div class="qr-missing">Matrix rows or response options are missing from this item.</div>';
 } else if(f==='Cloze (Drop-down)'){
   const template=String(q.clozeTemplate||q.template||q.questionText||q.question||q.stem||'');
   const rawDefs=q.dropdowns||q.clozeOptions||q.blankOptions||{};
   const defs=Array.isArray(rawDefs)?rawDefs:Object.entries(rawDefs||{}).map(([id,value])=>value&&typeof value==='object'&&!Array.isArray(value)?{id,...value}:{id,options:value});
   const optionGroups=q.options&&!Array.isArray(q.options)?q.options:{};
   const rawCorrectMap=q.correctAnswers&&typeof q.correctAnswers==='object'?q.correctAnswers:{}; const correctMap=rawCorrectMap.cloze||rawCorrectMap;
   const getDef=(key,index)=>defs.find((d,i)=>String(d.id??d.key??d.name??i)===String(key))||defs[index]||{};
   const getOptions=(key,index,def)=>def.options||def.choices||def.values||optionGroups[key]||(Array.isArray(q.options)?(defs.length<=1?q.options:(Array.isArray(q.options[index])?q.options[index]:q.options)):[]);
   const optionValue=v=>typeof v==='object'&&v!==null?String(v.value??v.id??v.text??v.label??''):String(v);
   const optionLabel=v=>typeof v==='object'&&v!==null?String(v.text??v.label??v.value??v.id??''):String(v);
   const tokenPattern=/\{\{([^}]+)\}\}|\{([^}]+)\}|\[\[([^\]]+)\]\]|\[blank\]|_{2,}/gi;
   let blankIndex=0;
   const renderBlank=token=>{
    const index=blankIndex++,tokenKey=token&&token!=='[blank]'&&!/^_+$/.test(token)?token.trim():'';
    const matched=defs.find((d,i)=>String(d.id??d.key??d.name??i)===tokenKey),def=matched||defs[index]||{},key=matched?tokenKey:String(def.id??def.key??def.name??(tokenKey||index));
    const choices=getOptions(key,index,def)||[],selected=String(draft.cloze?.[key]??'');
    const correct=def.correct??def.answer??correctMap[key]??(Array.isArray(q.correctAnswers)?q.correctAnswers[index]:undefined);
    const isCorrect=correct!==undefined&&correct!==null&&(String(correct)===selected||choices.some(v=>optionValue(v)===selected&&[optionValue(v),optionLabel(v)].includes(String(correct))));
    const indicator=submitted?'<span class="qr-cloze-result '+(isCorrect?'is-correct':'is-incorrect')+'" aria-label="'+(isCorrect?'Correct':'Incorrect')+'">'+(isCorrect?'✓':'✕')+'</span>':'';
    return '<label class="qr-cloze-blank"><span class="sr-only">'+quickRNEscape(def.label||def.name||('Blank '+(index+1)))+'</span><select aria-label="'+quickRNEscape(def.label||key)+'" '+(submitted?'disabled':'')+' data-cloze-key="'+quickRNEscape(key)+'" onchange="quickRNSetClozeDraft(this)"><option value="">Select…</option>'+choices.map(v=>'<option value="'+quickRNEscape(optionValue(v))+'" '+(selected===optionValue(v)?'selected':'')+'>'+quickRNEscape(optionLabel(v))+'</option>').join('')+'</select>'+indicator+'</label>';
   };
   let rendered=template.replace(tokenPattern,(match,a,b,c)=>renderBlank(a||b||c||''));
   if(blankIndex===0&&defs.length)rendered=quickRNEscape(template)+'<div class="qr-cloze-fields">'+defs.map((d,i)=>renderBlank(String(d.id??d.key??d.name??i))).join('')+'</div>';
   response='<div class="qr-cloze">'+rendered+'</div>';
 } else if(f==='Extended Drag and Drop'){
   const items=draft.order||q.availableItems||[]; response=items.length?`<p class="qr-help">Drag items into the correct order. You can also use the arrow buttons.</p><div class="qr-sort-list">${items.map((v,i)=>`<div class="qr-sort-item" draggable="true" ondragstart="quickRNDragStart(event,${i})" ondragover="event.preventDefault()" ondrop="quickRNDrop(event,${i})"><span class="qr-drag-handle" aria-label="Drag to reorder"><i class="fa-solid fa-grip-vertical"></i></span><b>Step ${i+1}</b><span class="qr-sort-text">${quickRNEscape(v)}</span><span class="qr-sort-actions"><button type="button" onclick="quickRNMoveDraft(${i},${i-1})" ${i===0?'disabled':''} aria-label="Move up">↑</button><button type="button" onclick="quickRNMoveDraft(${i},${i+1})" ${i===items.length-1?'disabled':''} aria-label="Move down">↓</button></span></div>`).join('')}</div>`:`<div class="qr-missing">This drag-and-drop item has no availableItems list.</div>`;
 } else if(f==='Highlight'){
   const segments=Array.isArray(q.highlightSegments)?q.highlightSegments:(Array.isArray(q.segments)?q.segments:[]);
   const chosen=Array.isArray(draft.highlights)?draft.highlights:[];
   response=segments.length?'<p class="qr-help">Select each finding that requires follow-up. You may submit a partially completed response.</p>'+segments.map((item,i)=>{const id=String(item.id??i),label=String(item.text??item.label??item.value??item),on=chosen.includes(id);return '<button type="button" class="qr-choice '+(on?'selected':'')+'" aria-pressed="'+on+'" onclick="quickRNToggleDraft(\'highlights\','+JSON.stringify(id)+')"><span class="qr-choice-mark is-checkbox">'+(on?'✓':'')+'</span><span class="qr-choice-copy">'+quickRNEscape(label)+'</span></button>';}).join(''):'<div class="qr-missing">This highlight item has no selectable text segments.</div>';
 } else if(f==='Numeric Entry'){
   const value=draft.numericEntry??draft.value??'';
   response='<label class="block text-sm font-semibold text-slate-700">Enter your numeric response<input type="number" inputmode="decimal" step="any" class="mt-2 w-full rounded-lg border border-slate-300 p-3 text-base" value="'+quickRNEscape(value)+'" '+(submitted?'disabled':'')+' oninput="quickRNSetDraft(\'numericEntry\',this.value)"></label>';
 } else if(f==='Trend'){
   const data=q.trendData||q.trends||q.trendTable||q.trend||[];
   const rows=Array.isArray(data)?data:(Array.isArray(data.rows)?data.rows:[]);
   const cols=Array.isArray(data.columns)?data.columns:[];
   const table=rows.length?'<div class="qr-table-wrap"><table class="qr-matrix"><tbody>'+rows.map(row=>'<tr>'+((Array.isArray(row)?row:Object.values(row)).map(cell=>'<td>'+quickRNEscape(cell)+'</td>').join(''))+'</tr>').join('')+'</tbody></table></div>':'';
   const opts=Array.isArray(q.options)?q.options:[];
   response=table+(cols.length?'<p class="qr-help">'+quickRNEscape(cols.join(' · '))+'</p>':'')+(opts.length?opts.map((o,i)=>{const val=quickRNOptionValue(o,i),on=String(draft.choice??'')===String(val);return '<button type="button" class="qr-choice '+(on?'selected':'')+'" aria-pressed="'+on+'" onclick="quickRNSetDraft(\'choice\','+JSON.stringify(val)+')"><span class="qr-choice-mark is-radio">'+String.fromCharCode(65+i)+'</span><span class="qr-choice-copy">'+quickRNEscape(quickRNOptionText(o))+'</span></button>';}).join(''):'<label class="block text-sm font-semibold text-slate-700">Interpret the trend and enter your response<input type="text" class="mt-2 w-full rounded-lg border border-slate-300 p-3" value="'+quickRNEscape(draft.trendResponse??draft.numericEntry??'')+'" '+(submitted?'disabled':'')+' oninput="quickRNSetDraft(\'trendResponse\',this.value)"></label>');
 } else if(f==='Bowtie'){
   const b=q.bowtieData||q.bowtie||{}, rawCorrect=q.correctAnswers||q.correctAnswer||{}, correct=rawCorrect.bowtie||rawCorrect, answerCondition=correct.condition??correct.potentialCondition??'', answerActions=Array.isArray(correct.actions)?correct.actions:[], answerMonitoring=Array.isArray(correct.monitoring)?correct.monitoring:(Array.isArray(correct.params)?correct.params:[]);
   const same=(a,b)=>String(a??'').trim().toLowerCase()===String(b??'').trim().toLowerCase();
   const group=(key,label,kind)=>{const values=b[key]||(key==='conditions'?(b.conditionOptions||b.potentialConditions||b.condition||[]):key==='monitoring'?(b.parameters||b.monitoringOptions||[]):[])||[],expected=kind==='condition'?[answerCondition]:(kind==='actions'?answerActions:answerMonitoring);return `<section class="qr-bowtie-group"><h4>${label}</h4>${values.map(v=>{const on=kind==='condition'?same(draft.condition,v):(draft[kind]||[]).some(x=>same(x,v));const isCorrect=expected.some(x=>same(x,v)),isWrong=submitted&&on&&!isCorrect,inlineStyle=submitted&&isCorrect?'border:2px solid #16a34a;background:#f0fdf4;color:#166534;border-radius:7px;padding:9px;':(isWrong?'border:2px solid #dc2626;background:#fef2f2;color:#991b1b;border-radius:7px;padding:9px;':'');const status=submitted?(isCorrect?'<small style="display:block;color:#15803d;font-size:10px;font-weight:800">✓ Correct answer'+(on?' · Your choice':'')+'</small>':(isWrong?'<small style="display:block;color:#b91c1c;font-size:10px;font-weight:800">✕ Incorrect selection</small>':'')):'';return `<label class="qr-bowtie-option" style="${inlineStyle}"><input type="${kind==='condition'?'radio':'checkbox'}" name="qr-bowtie-${kind}" ${on?'checked':''} ${submitted?'disabled':''} onchange="${kind==='condition'?`quickRNSetDraft('condition',${JSON.stringify(v)})`:`quickRNToggleDraft('${kind}',${JSON.stringify(v)})`}"><span style="display:flex;flex-direction:column;gap:4px;min-width:0">${quickRNEscape(v)}${status}</span></label>`}).join('')||'<p class="qr-missing">No response options are configured for this group.</p>'}</section>`;};
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
 if(f==='Highlight')return Array.isArray(d.highlights)&&d.highlights.length>0;
 if(f==='Numeric Entry')return hasValue(d.numericEntry??d.value);
 if(f==='Trend')return hasValue(d.choice)||hasValue(d.trendResponse)||hasValue(d.numericEntry);
 if(f==='Select N')return Array.isArray(d.choices)&&d.choices.length>0;
 return false;
}
function quickRNGrade(q,d){const f=quickRNDetectItemFormat(q), opts=Array.isArray(q.options)?q.options:[];const eq=(a,b)=>String(a??'')===String(b??'');const sameSet=(a,b)=>Array.isArray(a)&&Array.isArray(b)&&a.length===b.length&&a.every(x=>b.includes(x));
 if(f==='Single Choice'){const c=q.correctAnswerText??q.correctAnswer;const v=d.choice;const ix=opts.findIndex((o,i)=>eq(quickRNOptionValue(o,i),v));const txt=ix>=0?quickRNOptionText(opts[ix]):v;return eq(v,c)||eq(txt,c)||eq(v,String.fromCharCode(65+ix));}
 if(f==='Extended Multiple Response'||f==='Multiple Response'){const correct=q.correctAnswers??q.correctAnswer??[];const norm=x=>Array.isArray(x)?x:[x];const ids=norm(correct).map(x=>{const found=opts.find((o,i)=>eq(quickRNOptionValue(o,i),x)||eq(quickRNOptionText(o),x));if(found)return quickRNOptionValue(found,opts.indexOf(found));if(typeof x==='string'&&/^[A-Z]$/.test(x)&&opts[x.charCodeAt(0)-65]!==undefined)return quickRNOptionValue(opts[x.charCodeAt(0)-65],x.charCodeAt(0)-65);return x});const textCorrect=norm(correct).map(x=>{const found=opts.find((o,i)=>eq(quickRNOptionValue(o,i),x)||eq(quickRNOptionText(o),x));if(found)return quickRNOptionText(found);if(typeof x==='string'&&/^[A-Z]$/.test(x)&&opts[x.charCodeAt(0)-65]!==undefined)return quickRNOptionText(opts[x.charCodeAt(0)-65]);return x});return sameSet(d.choices||[],ids)||sameSet((d.choices||[]).map(v=>{const i=opts.findIndex((o,j)=>eq(quickRNOptionValue(o,j),v));return i>=0?quickRNOptionText(opts[i]):v}),textCorrect);}
 if(f==='Matrix / Grid'||f==='Matrix Multiple'||f==='Matrix Single'){const rows=q.rows||q.matrixData?.rows||[], raw=q.correctAnswers?.matrix||q.correctAnswers||{}, c=raw.matrix||raw;return rows.length>0&&rows.every((r,i)=>{const id=r.id||String(i),expected=c[id]??r.correct,actual=d.matrix?.[id];return Array.isArray(expected)?sameSet(Array.isArray(actual)?actual:[actual],expected):eq(actual,expected);});}
 if(f==='Cloze (Drop-down)'){
  const defs=Array.isArray(q.dropdowns)?q.dropdowns:Object.entries(q.dropdowns||{}).map(([id,value])=>value&&typeof value==='object'&&!Array.isArray(value)?{id,...value}:{id,options:value});
  const correctMap=q.correctAnswers&&typeof q.correctAnswers==='object'?q.correctAnswers:{};
  const keys=defs.length?defs.map((x,i)=>String(x.id??x.key??x.name??i)):Object.keys(correctMap);
  const norm=(value,def)=>{if(value&&typeof value==='object')return String(value.value??value.id??value.text??value.label??'');const choices=def?.options||def?.choices||def?.values||[];const found=choices.find(v=>String(typeof v==='object'?(v.value??v.id??v.text??v.label??''):v)===String(value)||String(typeof v==='object'?(v.text??v.label??v.value??v.id??''):v)===String(value));return found?String(typeof found==='object'?(found.value??found.id??found.text??found.label??''):found):String(value??'');};
  return keys.length>0&&keys.every((k,i)=>{const def=defs[i]||{};const expected=def.correct??def.answer??correctMap[k]??(Array.isArray(q.correctAnswers)?q.correctAnswers[i]:undefined);return expected!==undefined&&expected!==null&&norm(d.cloze?.[k],def)===norm(expected,def);});
 }
 if(f==='Extended Drag and Drop'){const c=q.correctOrder||[];return c.length>0&&sameSet(d.order||[],c)&&c.every((v,i)=>eq((d.order||[])[i],v));}
 if(f==='Bowtie'){const c=q.correctAnswers||{},a=d.actions||[],m=d.monitoring||[];return eq(d.condition,c.condition)&&sameSet(a,c.actions||[])&&sameSet(m,c.monitoring||[]);}
 return false;
}
function quickRNAnswerSummary(q,d){const f=quickRNDetectItemFormat(q),opts=Array.isArray(q.options)?q.options:[];if(f==='Single Choice'){const v=d?.choice;const i=opts.findIndex((o,j)=>String(quickRNOptionValue(o,j))===String(v));return i>=0?quickRNOptionText(opts[i]):String(v||'Unanswered');}if(f==='Extended Multiple Response'||f==='Multiple Response')return (d?.choices||[]).map(v=>{const i=opts.findIndex((o,j)=>String(quickRNOptionValue(o,j))===String(v));return i>=0?quickRNOptionText(opts[i]):v}).join('; ')||'Unanswered';if(f==='Extended Drag and Drop')return (d?.order||[]).map((v,i)=>`${i+1}. ${v}`).join('\n')||'Unanswered';return JSON.stringify(d||{},null,2);}
function quickRNReviewEHR(q){const e=q.ehr||{};const parts=[['Nurses’ Notes',e.nursesNotes],['Vital Signs',e.vitalSigns],['Diagnostic Results',e.diagnosticResults],['History & Physical',e.historyPhysical]].filter(x=>x[1]);return parts.length?`<div class="qr-review-ehr"><h4>Clinical Record</h4>${parts.map(x=>`<div><b>${x[0]}</b><p>${x[1]}</p></div>`).join('')}</div>`:'';}
function quickRNOpenReport(){if(window.QuickRNQuestionReporting?.open){window.QuickRNQuestionReporting.open();return;}}



        


/* NGN case-study extensions: Highlight and Trend. Existing formats continue through the base renderer. */
const quickRNBaseDetect = quickRNDetectItemFormat;
quickRNDetectItemFormat = function(q) {
 q=q&&typeof q==='object'?q:{};
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
 q=quickRNAdaptClinicalSchema(q); const esc=quickRNEscape, patient=q.patientInfo||{}, ehr=q.ehr||{};
 const promptSplit=quickRNSplitPrompt(q),scenarioText=quickRNCleanClinicalText(promptSplit.scenario||'',q); let cleanTitle=quickRNCleanPrompt(q.cleanTitle||q.title||q.promptTitle||(f==='Highlight'?'Highlight the findings':'')||q.questionText||q.question||'Clinical question'); if(scenarioText&&cleanTitle.toLowerCase().startsWith(scenarioText.toLowerCase()))cleanTitle=cleanTitle.slice(scenarioText.length).replace(/^[\s.!?—–:;-]+/,'').trim();
 const cleanPrompt=quickRNCleanPrompt(q.cleanInstruction||q.instruction||'');
 const title=esc(cleanTitle), prompt=esc(cleanPrompt.toLowerCase()===cleanTitle.toLowerCase()?'':cleanPrompt);
 const patientSummary=typeof q.patientInfo==='string'?quickRNPlainClinicalText(q.patientInfo):quickRNPatientInfoText(patient);
 const ehrEntries=[['Nurses’ Notes',ehr.nursesNotes],['Vital Signs',ehr.vitalSigns],['Diagnostic Results',ehr.diagnosticResults||ehr.labResults],['History & Physical',ehr.historyPhysical],['Clinical Assessment',ehr.assessment],['Priority Assessment',ehr.priorityAssessment],...(Array.isArray(ehr.additionalTabs)?ehr.additionalTabs:[])];
 const seenRecordText=new Set(),recordSections=ehrEntries.map(x=>[String(x[0]||'Clinical information'),quickRNPlainClinicalText(x[1])]).filter(x=>{if(!x[1])return false;const key=x[1].toLowerCase();if(seenRecordText.has(key)||patientSummary.toLowerCase()===key)return false;seenRecordText.add(key);return true;}).map(x=>'<section class="qr-ehr-section"><h4>'+esc(x[0])+'</h4><div>'+esc(x[1])+'</div></section>').join('');
 const caseStudyText=typeof q.caseStudy==='string'?quickRNPlainClinicalText(q.caseStudy):quickRNPatientInfoText(q.caseStudy||q.case_study||{});
 const record=patientSummary||recordSections||caseStudyText?'<aside class="qr-ehr"><div class="qr-ehr-head"><strong>Clinical Record</strong><span>'+esc(patient.name||patient.patientName||'Patient')+'</span></div><div class="qr-ehr-body">'+(patientSummary?'<section class="qr-ehr-section"><h4>Patient information</h4><div>'+esc(patientSummary).replace(/\n/g,'<br>')+'</div></section>':'')+recordSections+(caseStudyText&&!recordSections.toLowerCase().includes(esc(caseStudyText).toLowerCase())?'<section class="qr-ehr-section"><h4>Case information</h4><div>'+esc(caseStudyText)+'</div></section>':'')+'</div></aside>':'';
 let response='',trendPanel='';
 if(f==='Highlight'){
   const raw=q.highlightSegments||q.segments;
   const source=q.highlightText||q.passage||q.caseStudyText||q.textToHighlight||q.questionText||q.question||'';
   const fallbackText=String(source||'').trim();
   let prefix='';
   let fallbackParts=fallbackText.includes(';')?fallbackText.split(/;\s*/).map(text=>text.trim()).filter(Boolean):(fallbackText.match(/[^.!?]+[.!?]?/g)||[]).map(text=>text.trim()).filter(Boolean);
   // In inline highlight items, keep the instruction in the stem and make only the clinical findings selectable.
   if(!(Array.isArray(raw)&&raw.length)&&fallbackParts.length){
     const first=fallbackParts[0],colon=first.lastIndexOf(':');
     if(colon>=0){prefix=first.slice(0,colon+1)+' ';fallbackParts[0]=first.slice(colon+1).trim();}
   }
   const segments=Array.isArray(raw)&&raw.length?raw.map((x,i)=>({id:String(x.id??i),text:String(x.text??x.label??x)})):fallbackParts.map((text,i)=>({id:String(i),text}));
   const rawCorrect=q.correctHighlights||q.correctAnswers?.highlights||q.correctAnswers?.correctHighlights||[]; const correctSet=Array.isArray(rawCorrect)?rawCorrect:[rawCorrect];
   const inlineSegments=segments.map((seg,i)=>{
     const on=(draft.highlights||[]).includes(seg.id)||(draft.highlights||[]).includes(seg.text);
     const correct=correctSet.some(x=>String(x)===String(seg.id)||String(x)===String(seg.text));
     const feedback=submitted?(correct?'background:#dcfce7;color:#166534;border-bottom:2px solid #16a34a;':(on?'background:#fee2e2;color:#991b1b;border-bottom:2px solid #dc2626;':'')):'';
     const style='display:inline;padding:2px 3px;margin:0 1px;border:0;border-bottom:2px dotted #64748b;border-radius:3px;background:'+(on?'#dbeafe':'transparent')+';color:inherit;font:inherit;line-height:inherit;cursor:'+(submitted?'default':'pointer')+';'+feedback;
     const separator=i<segments.length-1?'; ':'';
     return "<button type='button' class='qr-highlight-inline-token "+(on?'is-selected':'')+"' style='"+style+"' aria-pressed='"+on+"' "+(submitted?'disabled':'')+" onclick='quickRNToggleDraft(\"highlights\","+JSON.stringify(seg.id)+")'>"+esc(seg.text)+"</button>"+separator;
   }).join('');
   response=segments.length?'<div class="qr-highlight-instructions">Highlight the findings that require immediate attention by selecting the words or phrases in the question.</div><div class="qr-highlight-inline-text" style="font-size:1rem;line-height:2.1;white-space:normal">'+esc(prefix)+inlineSegments+'</div>':'<div class="qr-missing">This highlight item has no passage or highlightable segments.</div>';
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
 if(f==='Highlight'){const raw=q.correctHighlights||q.correctAnswers?.highlights||q.correctAnswers?.correctHighlights||[];const correct=Array.isArray(raw)?raw:[raw];return correct.length>0&&same((d.highlights||[]).map(String),correct.map(String));}
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
  const value=draft.numericEntry??draft.value??'',unit=q.unit||q.numericUnit||'';
  const field='<div class="qr-numeric-entry"><label for="qr-numeric-answer">Enter a numeric answer'+(unit?' ('+quickRNEscape(unit)+')':'')+'</label><input id="qr-numeric-answer" type="number" inputmode="decimal" step="'+quickRNEscape(q.step??'any')+'" value="'+quickRNEscape(value)+'" placeholder="'+quickRNEscape(q.placeholder||'Enter number')+'" '+(submitted?'disabled':'')+' oninput="quickRNSetDraft(\'numericEntry\',this.value)"></div>';
  const start=html.indexOf('<div class="qr-response-area">'),end=html.lastIndexOf('</section></div>');
  return start>=0&&end>start?html.slice(0,start)+'<div class="qr-response-area">'+field+'</div>'+html.slice(end):html;
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

const quickRNGradeWithPolytomousScoring=quickRNGrade;
quickRNGrade=function(q,d){
 const scoring=window.QuickRNNgnScoring;
 if(scoring&&typeof scoring.grade==='function'){
  const format=scoring.format(q);
  if(['Single Choice','Multiple Response','Select N','Highlight','Matrix','Cloze','Bowtie','Ordered','Numeric'].includes(format))return scoring.grade(q,d);
 }
 return quickRNGradeWithPolytomousScoring(q,d);
};


/* Select-N rendering hardening: keep the checkbox UI, selection limit, and grading
   consistent across Self-Study, Timed, Predictor, and CAT modes. */
function quickRNSelectNLimit(q){
 const explicit=Number(q&& (q.selectN??q.numberToSelect??q.requiredSelections??q.selectCount));
 if(Number.isInteger(explicit)&&explicit>0)return explicit;
 const correct=q&&(q.correctAnswers??q.correctAnswer);
 return Array.isArray(correct)?correct.length:(correct==null?0:1);
}
const quickRNSelectNBaseToggle=quickRNToggleDraft;
quickRNToggleDraft=function(path,value){
 const q=window.quickRNCurrentQuestion||{};
 if(path==='choices'&&quickRNDetectItemFormat(q)==='Select N'){
  const current=Array.isArray(quickRNDraft.choices)?quickRNDraft.choices:[];
  const exists=current.some(x=>String(x)===String(value));
  const limit=quickRNSelectNLimit(q);
  if(!exists&&limit>0&&current.length>=limit){
   if(typeof window.quickRNShowNotice==='function')window.quickRNShowNotice('Select exactly '+limit+' options. Remove a selection before choosing another.');
   return;
  }
 }
 quickRNSelectNBaseToggle(path,value);
};
const quickRNSelectNBaseRender=quickRNRenderClinicalItem;
quickRNRenderClinicalItem=function(q,draft,submitted){
 if(quickRNDetectItemFormat(q)!=='Select N')return quickRNSelectNBaseRender(q,draft,submitted);
 const html=quickRNSelectNBaseRender(q,draft,submitted);
 const opts=Array.isArray(q.options)?q.options:[];
 const selected=Array.isArray(draft&&draft.choices)?draft.choices:[];
 const limit=quickRNSelectNLimit(q);
 const norm=x=>String(x??'').trim().toLowerCase();
 const correctRaw=q.correctAnswers??q.correctAnswer??[];
 const correct=Array.isArray(correctRaw)?correctRaw:[correctRaw];
 const choices=opts.length?opts.map((o,i)=>{
  const value=quickRNOptionValue(o,i),label=quickRNOptionText(o),letter=String.fromCharCode(65+i);
  const on=selected.some(x=>[value,label,letter].some(y=>norm(x)===norm(y)));
  const isCorrect=!!(o&&typeof o==='object'&&o.correct===true)||correct.some(x=>[value,label,letter].some(y=>norm(x)===norm(y)));
  const feedback=submitted?(isCorrect?' qr-answer-correct':(on?' qr-answer-incorrect':'')):'';
  const status=submitted?(isCorrect?'<small class="qr-choice-feedback qr-feedback-correct">✓ Correct answer'+(on?' · Your choice':'')+'</small>':(on?'<small class="qr-choice-feedback qr-feedback-incorrect">✕ Incorrect</small>':'')):'';
  const action="quickRNToggleDraft('choices',"+JSON.stringify(value)+")";
  return "<button type='button' role='checkbox' aria-checked='"+on+"' aria-pressed='"+on+"' "+(submitted?"disabled":"")+" class='qr-choice "+(on?'selected':'')+feedback+"' onclick='"+(submitted?'':action)+"'><span class='qr-choice-mark is-checkbox'>"+(on?'✓':letter+'.')+"</span><span class='qr-choice-copy'>"+quickRNEscape(label)+(status?"<span class='qr-choice-status'>"+status+"</span>":"")+"</span></button>";
 }).join(''):'<div class="qr-missing">This Select N item is missing its response options.</div>';
 const notice='<p class="qr-help qr-select-n-instruction">Select exactly '+limit+' '+(limit===1?'option':'options')+'. <span class="qr-select-n-count">'+selected.length+'/'+limit+' selected</span></p>';
 const response='<div class="qr-response-area">'+notice+choices+'</div>';
 return html.replace(/<div class="qr-response-area">[\s\S]*?<\/div><\/section><\/div>$/,response+'</section></div>');
};
const quickRNSelectNBaseHasAnswer=quickRNHasAnswer;
quickRNHasAnswer=function(q,d){
 if(quickRNDetectItemFormat(q)==='Select N'){
  const n=quickRNSelectNLimit(q),values=Array.isArray(d&&d.choices)?d.choices:[];
  return n>0&&values.length===n&&new Set(values.map(String)).size===n;
 }
 return quickRNSelectNBaseHasAnswer(q,d);
};
const quickRNSelectNBaseGrade=quickRNGrade;
quickRNGrade=function(q,d){
 if(quickRNDetectItemFormat(q)==='Select N'){
  const opts=Array.isArray(q.options)?q.options:[],selected=Array.isArray(d&&d.choices)?d.choices:[];
  const raw=q.correctAnswers??q.correctAnswer??[],correct=Array.isArray(raw)?raw:[raw];
  const normalize=x=>{
   const i=opts.findIndex((o,j)=>[quickRNOptionValue(o,j),quickRNOptionText(o),String.fromCharCode(65+j)].some(v=>String(v??'').trim().toLowerCase()===String(x??'').trim().toLowerCase()));
   return i>=0?String(quickRNOptionValue(opts[i],i)):String(x??'');
  };
  const a=selected.map(normalize),b=correct.map(normalize);
  return quickRNSelectNLimit(q)>0&&a.length===quickRNSelectNLimit(q)&&a.length===b.length&&new Set(a).size===a.length&&a.every(x=>b.includes(x));
 }
 return quickRNSelectNBaseGrade(q,d);
};
const quickRNSelectNBaseSummary=quickRNAnswerSummary;
quickRNAnswerSummary=function(q,d){
 if(quickRNDetectItemFormat(q)==='Select N'){
  const opts=Array.isArray(q.options)?q.options:[],values=Array.isArray(d&&d.choices)?d.choices:[];
  return values.map(v=>{const i=opts.findIndex((o,j)=>String(quickRNOptionValue(o,j))===String(v));return i>=0?quickRNOptionText(opts[i]):String(v);}).join('; ')||'Unanswered';
 }
 return quickRNSelectNBaseSummary(q,d);
};

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


/* Rebuilt NGN presentation contracts: shared by Self-Study, Timed, Predictor and CAT. */
const quickRNContractBaseRender=quickRNRenderClinicalItem;
function quickRNContractText(v){return quickRNPlainClinicalText(v==null?'':v);}
function quickRNContractTruncate(v,max=180){const text=quickRNContractText(v);const sentences=text.match(/[^.!?]+[.!?]+|[^.!?]+$/g)||[text];let out='';for(const sentence of sentences){const next=(out+' '+sentence.trim()).trim();if(next.length>max)break;out=next;}if(!out)out=text.slice(0,max);return out.length<text.length?out.replace(/[\s,;:]+$/,'')+'…':out;}
function quickRNContractEsc(v){return quickRNEscape(v==null?'':v);}
function quickRNContractRecord(q,notes){
 const safe=quickRNContractText(notes);
 if(!safe)return '';
 const title=quickRNContractEsc(q.patientInfo?.name||q.patientInfo?.patientName||'Patient');
 return '<aside class="qr-ehr has-record"><div class="qr-ehr-head"><strong>Clinical Record</strong><span>'+title+'</span></div><div class="qr-ehr-body"><section class="qr-ehr-section"><h4>Nurses’ Notes</h4><div>'+quickRNContractEsc(safe).replace(/\n/g,'<br>')+'</div></section></div></aside>';
}
function quickRNContractReplaceResponse(html,content){
 const start=html.indexOf('<div class="qr-response-area">'),end=html.lastIndexOf('</div></section></div>');
 if(start<0||end<start)return html;
 return html.slice(0,start)+'<div class="qr-response-area">'+content+html.slice(end);
}
let quickRNContractDraggedFollowUp=null;
function quickRNContractStartFollowUp(event,from,index){quickRNContractDraggedFollowUp={from,index};if(event?.dataTransfer){event.dataTransfer.effectAllowed='move';event.dataTransfer.setData('text/plain',String(from));}}
function quickRNContractDropFollowUp(event,to,index){if(event?.preventDefault)event.preventDefault();if(quickRNContractDraggedFollowUp&&quickRNContractDraggedFollowUp.index===index)quickRNContractMoveFollowUp(quickRNContractDraggedFollowUp.from,to,index);quickRNContractDraggedFollowUp=null;}
function quickRNContractMoveFollowUp(from,to,index){
 const q=window.quickRNCurrentQuestion||{},draft=quickRNDraft||{},sets={...(draft.followUps||{})},arr=Array.isArray(sets[index])?[...sets[index]]:[];
 if(from<0||to<0||from>=arr.length||to>=arr.length)return;
 const [item]=arr.splice(from,1);arr.splice(to,0,item);sets[index]=arr;quickRNSetDraft('followUps',sets);
}
function quickRNContractToggleFollowUp(index,item){
 const q=window.quickRNCurrentQuestion||{},sets={...(quickRNDraft.followUps||{})},arr=Array.isArray(sets[index])?[...sets[index]]:[];
 sets[index]=arr.includes(item)?arr.filter(x=>x!==item):[...arr,item];quickRNSetDraft('followUps',sets);
}
function quickRNContractRender(q,draft,submitted=false){
 const f=quickRNDetectItemFormat(q);
 if(f==='Matrix / Grid' && /matrix single/i.test(String(q.type||q.ngnType||q.format||''))){
  const left=quickRNContractTruncate(q.matrixLeftPane||q.leftPaneText||q.clinicalFinding||q.situation||q.scenario||q.nursingNotes||q.ehr?.nursesNotes);
  const task=quickRNContractText(q.matrixTask||q.task||q.instruction||q.matrixInstruction||q.question);
  const transformed={...q,question:task||q.question,stem:task||q.stem,title:task||q.title,ehr:{...(q.ehr||{}),nursesNotes:left||q.ehr?.nursesNotes}};
  return quickRNContractBaseRender(transformed,draft,submitted);
 }
 if(f==='Extended Drag and Drop'){
  const html=quickRNContractBaseRender(q,draft,submitted);
  if(!submitted)return html;
  const correct=Array.isArray(q.correctOrder)?q.correctOrder:[];
  const placed=Array.isArray(draft.order)?draft.order:[];
  const rows=placed.map((item,i)=>{const ok=String(item)===String(correct[i]);return '<li style="padding:9px 12px;margin:5px 0;border-radius:7px;border:1px solid '+(ok?'#86efac':'#fca5a5')+';background:'+(ok?'#dcfce7':'#fee2e2')+';color:'+(ok?'#166534':'#991b1b')+'"><strong>'+(i+1)+'. '+(ok?'Correct position':'Incorrect position')+'</strong> — '+quickRNContractEsc(item)+'</li>';}).join('');
  const key=correct.map((item,i)=>'<li style="padding:7px 10px">'+(i+1)+'. '+quickRNContractEsc(item)+'</li>').join('');
  const feedback='<section class="qr-sequence-feedback"><h3>Sequence review</h3><p>Green indicates the item is in its correct position; red indicates an item that is out of sequence.</p><ol style="list-style:none;padding:0">'+rows+'</ol><h4>Correct sequence</h4><ol>'+key+'</ol></section>';
  return html.replace('</div></section></div>',feedback+'</div></section></div>');
 }
 if(f==='Highlight'){
  const notes=q.nursingNotes||q.ehr?.nursesNotes||q.ehr?.tabs?.nursesNotes||q.leftPane?.nursesNotes||q.scenario||q.clinicalScenario;
  const segments=Array.isArray(q.highlightSegments)?q.highlightSegments:(Array.isArray(q.segments)?q.segments:[]);
  const source=quickRNContractText(q.highlightText||q.passage||q.situation||q.scenario||q.clinicalScenario||q.questionText||q.question||'');
  const cues=segments.length?segments.map((x,i)=>({id:String(x.id??i),text:quickRNContractText(x.text??x.label??x)})):(source?[{id:'paragraph',text:source}]:[]);
  const selected=Array.isArray(draft.highlights)?draft.highlights:[];
  const correctRaw=q.correctHighlights||q.correctAnswers?.highlights||q.correctAnswers?.correctHighlights||[];
  const correct=Array.isArray(correctRaw)?correctRaw:[correctRaw];
  let textBody='';
  if(source){
   const ranges=cues.map(cue=>{const raw=segments.find((x,i)=>String(x.id??i)===cue.id)||{};let a=Number(raw.start??raw.startIndex),b=Number(raw.end??raw.endIndex);if(!Number.isFinite(a)||!Number.isFinite(b)||b<=a){const pos=source.toLowerCase().indexOf(cue.text.toLowerCase());a=pos;b=pos<0?pos:pos+cue.text.length;}return {cue,start:a,end:b};}).filter(x=>x.start>=0&&x.end>x.start&&x.end<=source.length).sort((a,b)=>a.start-b.start);
   let cursor=0;const pieces=[];
   ranges.forEach(range=>{if(range.start<cursor)return;pieces.push(quickRNContractEsc(source.slice(cursor,range.start)));const on=selected.includes(range.cue.id)||selected.includes(range.cue.text),isKey=correct.some(x=>String(x)===range.cue.id||String(x)===range.cue.text),color=submitted?(isKey?'#fef08a':(on?'#fecaca':'transparent')):(on?'#fef08a':'transparent');pieces.push('<mark class="qr-highlight-inline-token" role="button" tabindex="'+(submitted?'-1':'0')+'" aria-pressed="'+on+'" onclick=\'quickRNToggleDraft("highlights",'+JSON.stringify(range.cue.id)+')\' style="background:'+color+';color:#1f2937;border-radius:3px;padding:1px 2px;cursor:'+(submitted?'default':'pointer')+'">'+quickRNContractEsc(source.slice(range.start,range.end))+'</mark>');cursor=range.end;});
   pieces.push(quickRNContractEsc(source.slice(cursor)));textBody=pieces.join('');
  }else{
   textBody=cues.map((cue,i)=>{const on=selected.includes(cue.id)||selected.includes(cue.text),isKey=correct.some(x=>String(x)===cue.id||String(x)===cue.text),color=submitted?(isKey?'#fef08a':(on?'#fecaca':'transparent')):(on?'#fef08a':'transparent');return '<mark class="qr-highlight-inline-token" role="button" tabindex="'+(submitted?'-1':'0')+'" aria-pressed="'+on+'" onclick=\'quickRNToggleDraft("highlights",'+JSON.stringify(cue.id)+')\' style="background:'+color+';color:#1f2937;border-radius:3px;padding:1px 2px;cursor:'+(submitted?'default':'pointer')+'">'+quickRNContractEsc(cue.text)+'</mark>';}).join(' ');
  }
  const left=quickRNContractRecord(q,notes);
  const prompt=quickRNContractEsc(q.highlightInstruction||q.instruction||'Highlight the cues and symptoms that are clinically significant.');
  const response='<div class="qr-highlight-instructions">'+prompt+'</div><p class="qr-help">Select words or phrases in the nursing note. Selected cues are highlighted yellow.</p><div class="qr-highlight-paragraph qr-highlight-inline-text" style="font-size:1rem;line-height:2;white-space:normal;padding:14px;border:1px solid #dbe3ee;border-radius:10px;background:#fff">'+(textBody||quickRNContractEsc(source))+'</div>'+(submitted?'<div class="qr-highlight-key"><strong>Correct cues</strong><p>'+correct.map(x=>quickRNContractEsc(cues.find(c=>c.id===String(x)||c.text===String(x))?.text||x)).join('; ')+'</p></div>':'');
  return '<div class="qr-clinical-layout '+(left?'has-record':'question-only')+'">'+left+'<section class="qr-question-panel"><div class="qr-question-head"><h2>'+quickRNContractEsc(q.highlightTitle||'Clinical cues')+'</h2></div><div class="qr-response-area">'+response+'</div></section></div>';
 }
 if(f==='Trend' && Array.isArray(q.trendData?.stages) && q.trendData.stages.length){
  const stages=q.trendData.stages,answers=draft.stageAnswers||{},optsFor=stage=>stage.options||[];
  const response=stages.map((stage,i)=>{const selected=answers[i]??'',correct=stage.correctAnswer??stage.answerKey,opts=optsFor(stage);const buttons=opts.map((opt,j)=>{const value=typeof opt==='object'?(opt.value??opt.text??opt.label):opt,label=typeof opt==='object'?(opt.text??opt.label??opt.value):opt,on=String(selected)===String(value),isKey=String(correct)===String(value)||String(correct)===String(label),style=submitted?(isKey?'background:#dcfce7;border-color:#16a34a;color:#166534':(on?'background:#fee2e2;border-color:#dc2626;color:#991b1b':'')):'';return '<button type="button" class="qr-choice '+(on?'selected':'')+'" style="'+style+'" '+(submitted?'disabled':'')+' onclick="quickRNSetTrendStage('+i+','+JSON.stringify(String(value))+')"><span class="qr-choice-mark is-radio">'+String.fromCharCode(65+j)+'.</span><span>'+quickRNContractEsc(label)+'</span>'+(submitted&&isKey?' <b>✓ Correct</b>':(submitted&&on?' <b>✕ Incorrect</b>':''))+'</button>';}).join('');return '<section class="qr-trend-stage"><h3>Stage '+(i+1)+(stage.time?' · '+quickRNContractEsc(stage.time):'')+'</h3><p>'+quickRNContractEsc(stage.situation||stage.patientStatus||stage.update||'')+'</p>'+(stage.data?'<pre>'+quickRNContractEsc(typeof stage.data==='string'?stage.data:JSON.stringify(stage.data,null,2))+'</pre>':'')+'<p class="qr-trend-question">'+quickRNContractEsc(stage.question||'What should the nurse do next?')+'</p>'+buttons+'</section>';}).join('');
  const left=quickRNContractRecord(q,q.nursingNotes||q.ehr?.nursesNotes||q.ehr?.tabs?.nursesNotes);
  return '<div class="qr-clinical-layout '+(left?'has-record':'question-only')+'">'+left+'<section class="qr-question-panel"><div class="qr-question-head"><h2>'+quickRNContractEsc(q.trendTitle||q.topic||'Patient trend')+'</h2></div><div class="qr-response-area">'+response+'</div></section></div>';
 }
 if(f==='Bowtie' && Array.isArray(q.bowtieData?.followUpQuestions)&&q.bowtieData.followUpQuestions.length){
  let html=quickRNContractBaseRender(q,draft,submitted);
  const follow=q.bowtieData.followUpQuestions.map((item,i)=>{const options=item.items||item.availableItems||item.options||[],placed=(draft.followUps||{})[i]||options,correct=item.correctOrder||[],rows=placed.map((v,j)=>{const ok=String(v)===String(correct[j]);return '<div class="qr-sort-item" draggable="true" ondragstart="quickRNContractStartFollowUp(event,'+j+','+i+')" ondragover="event.preventDefault()" ondrop="quickRNContractDropFollowUp(event,'+j+','+i+')" style="'+(submitted?'background:'+(ok?'#dcfce7':'#fee2e2')+';border-color:'+(ok?'#16a34a':'#dc2626'):'')+'"><span class="qr-sort-text">'+quickRNContractEsc(v)+'</span><span class="qr-sort-actions"><button type="button" '+(submitted?'disabled':'')+' onclick="quickRNContractMoveFollowUp('+j+','+(j-1)+','+i+')">↑</button><button type="button" '+(submitted?'disabled':'')+' onclick="quickRNContractMoveFollowUp('+j+','+(j+1)+','+i+')">↓</button></span></div>';}).join('');return '<section class="qr-bowtie-followup"><h3>'+quickRNContractEsc(item.question||('Follow-up '+(i+1)))+'</h3><p>Arrange the nursing actions in the correct sequence.</p><div class="qr-sort-list">'+rows+'</div>'+(submitted?'<p><strong>Correct sequence:</strong> '+correct.map(quickRNContractEsc).join(' → ')+'</p>':'')+'</section>';}).join('');
  return html.replace('</div></section></div>',follow+'</div></section></div>');
 }
 if(f==='Cloze (Drop-down)'){
  const template=String(q.clozeTemplate||q.template||'').trim(),title=quickRNContractText(q.cleanTitle||q.title||q.questionText||q.question||''),titleLead=(title.match(/^[^.!?]+[.!?]?/)||[''])[0].trim();
  if(template&&title&&((title&&template.toLowerCase().includes(title.toLowerCase()))||(titleLead.length>12&&template.toLowerCase().startsWith(titleLead.toLowerCase())))){
   const task=quickRNContractText(q.instruction||q.cleanInstruction||'Complete the sentence by selecting the best response for each blank.');
   q={...q,title:task,cleanTitle:task,question:task,questionText:task,stem:task};
  }
 }
 return quickRNContractBaseRender(q,draft,submitted);
}
function quickRNSetTrendStage(index,value){const answers={...(quickRNDraft.stageAnswers||{})};answers[index]=value;quickRNSetDraft('stageAnswers',answers);}
const quickRNContractHasAnswer=quickRNHasAnswer;
quickRNHasAnswer=function(q,d){
 if(quickRNDetectItemFormat(q)==='Trend'&&Array.isArray(q.trendData?.stages))return q.trendData.stages.every((s,i)=>d?.stageAnswers?.[i]!==undefined&&String(d.stageAnswers[i]).trim()!=='');
 if(quickRNDetectItemFormat(q)==='Bowtie'&&Array.isArray(q.bowtieData?.followUpQuestions)&&q.bowtieData.followUpQuestions.length)return quickRNContractHasAnswer(q,d)&&q.bowtieData.followUpQuestions.every((x,i)=>Array.isArray(d?.followUps?.[i])&&d.followUps[i].length>0);
 return quickRNContractHasAnswer(q,d);
};
const quickRNContractGrade=quickRNGrade;
quickRNGrade=function(q,d){
 const f=quickRNDetectItemFormat(q);
 if(f==='Trend'&&Array.isArray(q.trendData?.stages))return q.trendData.stages.every((s,i)=>String(d?.stageAnswers?.[i]??'')===String(s.correctAnswer??s.answerKey??''));
 if(f==='Bowtie'&&Array.isArray(q.bowtieData?.followUpQuestions)){
  const base=quickRNContractGrade(q,d);return base&&q.bowtieData.followUpQuestions.every((x,i)=>{const actual=d?.followUps?.[i]||[],correct=x.correctOrder||[];return actual.length===correct.length&&actual.every((v,j)=>String(v)===String(correct[j]));});
 }
 return quickRNContractGrade(q,d);
};
const quickRNContractFromLegacy=quickRNFromLegacyDraft;
quickRNFromLegacyDraft=function(q,value){
 const format=quickRNDetectItemFormat(q);
 if(format==='Trend'&&Array.isArray(q.trendData?.stages))return value&&typeof value==='object'?JSON.parse(JSON.stringify(value)):{stageAnswers:{}};
 if(format==='Bowtie'&&Array.isArray(q.bowtieData?.followUpQuestions))return value&&typeof value==='object'?JSON.parse(JSON.stringify(value)):{condition:'',actions:[],monitoring:[],followUps:{}};
 return quickRNContractFromLegacy(q,value);
};
const quickRNContractToLegacy=quickRNToLegacyDraft;
quickRNToLegacyDraft=function(q,d){
 const format=quickRNDetectItemFormat(q);
 if((format==='Trend'&&Array.isArray(q.trendData?.stages))||(format==='Bowtie'&&Array.isArray(q.bowtieData?.followUpQuestions)))return JSON.parse(JSON.stringify(d||{}));
 return quickRNContractToLegacy(q,d);
};
quickRNRenderClinicalItem=quickRNContractRender;
window.quickRNContractMoveFollowUp=quickRNContractMoveFollowUp;
window.quickRNContractStartFollowUp=quickRNContractStartFollowUp;
window.quickRNContractDropFollowUp=quickRNContractDropFollowUp;
window.quickRNSetTrendStage=quickRNSetTrendStage;
if(window.QuickRNSharedRenderer){window.QuickRNSharedRenderer.renderReact=function(q,legacyDraft,onUpdateDraft,submitted){window.quickRNCurrentQuestion=q;window.quickRNOnDraftChange=function(d){if(typeof onUpdateDraft==='function')onUpdateDraft(quickRNToLegacyDraft(q,d));};quickRNCurrentItemId=q.id||null;quickRNDraft=quickRNFromLegacyDraft(q,legacyDraft);return submitted?'<div class="qr-submitted">'+quickRNRenderClinicalItem(q,quickRNDraft,submitted)+'</div>':quickRNRenderClinicalItem(q,quickRNDraft,submitted);};window.QuickRNSharedRenderer.hasAnswer=quickRNHasAnswer;window.QuickRNSharedRenderer.grade=quickRNGrade;window.QuickRNSharedRenderer.toDraft=quickRNFromLegacyDraft;window.QuickRNSharedRenderer.fromDraft=quickRNToLegacyDraft;}
