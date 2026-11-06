/* QuickRN Question Schema v2: lossless canonical adapter for legacy and new bank records. */
(function(root){
 'use strict';
 const CJMM=['Recognize Cues','Analyze Cues','Prioritize Hypotheses','Generate Solutions','Take Action','Evaluate Outcomes'];
 const SCORING=['plus_minus','0/1','rationale'];
 const FORMATS=['Single Choice','Multiple Response','Select N','Matrix Single','Matrix Multiple','Cloze (Drop-down)','Dropdown Rationale','Bowtie','Extended Drag and Drop','Extended Multiple Response','Highlight','Trend','Numeric Entry'];
 const own=(o,k)=>Object.prototype.hasOwnProperty.call(o||{},k);
 const first=(...xs)=>xs.find(v=>v!==undefined&&v!==null&&v!=='');
 const normalizeDifficulty=v=>{if(Number.isInteger(Number(v))&&Number(v)>=1&&Number(v)<=5)return Number(v);const s=String(v??'').trim().toLowerCase();return ({easy:1,low:1,basic:1,moderate:3,medium:3,intermediate:3,hard:5,high:5,advanced:5,'very hard':5})[s]??v;};
 const normalizeCJMM=v=>{const s=String(v??'').trim().toLowerCase().replace(/[_-]+/g,' ').replace(/\s+/g,' ');const aliases={'recognize cues':'Recognize Cues','recognising cues':'Recognize Cues','recognizing cues':'Recognize Cues','analyze cues':'Analyze Cues','analyse cues':'Analyze Cues','prioritize hypotheses':'Prioritize Hypotheses','prioritise hypotheses':'Prioritize Hypotheses','generate solutions':'Generate Solutions','take action':'Take Action','evaluate outcomes':'Evaluate Outcomes'};return aliases[s]||v;};
 function inferCJMM(q){const s=String(first(q.question,q.questionText,q.stem,q.title,q.instruction)||'').toLowerCase();if(/evaluate|response to (the )?intervention|indicates? improvement|effective|outcome/.test(s))return 'Evaluate Outcomes';if(/priority (problem|hypothesis)|which client should.*(see|assess|care for) first|which problem is (most )?urgent|prioriti[sz]e/.test(s))return 'Prioritize Hypotheses';
  if(/which client is most appropriate to assign|which client should be assigned|which assignment is appropriate|what specific instruction should be given|which task should be delegated|which intervention should be planned|which nursing responses? should/.test(s))return 'Generate Solutions';if(/plan of care|which interventions? should.*plan|which outcomes? should.*establish|develop.*plan/.test(s))return 'Generate Solutions';if(/which action|what should the nurse do|which intervention should.*implement|take first|administer/.test(s))return 'Take Action';if(/most likely (cause|condition|problem)|interpret|indicates? (that|the)|what does .* suggest|analy[sz]e/.test(s))return 'Analyze Cues';if(/which finding|which cue|which assessment data|which observation|which symptom/.test(s))return 'Recognize Cues';return undefined;}
 function canonicalClientNeed(q){const allowed=['Management of Care','Safety and Infection Control','Health Promotion and Maintenance','Psychosocial Integrity','Basic Care and Comfort','Pharmacological and Parenteral Therapies','Reduction of Risk Potential','Physiological Adaptation'];const candidate=first(q.clientNeeds,q.clientNeed,q.client_needs,q.nclexClientNeed,q.nclexClientNeeds,q.clientNeedCategory,q.category);return allowed.includes(candidate)?candidate:undefined;}
 function inferScoring(type){return ['Multiple Response','Select N','Matrix Single','Matrix Multiple','Bowtie','Highlight','Cloze (Drop-down)','Dropdown Rationale','Extended Drag and Drop','Extended Multiple Response','Trend'].includes(type)?'plus_minus':'0/1';}
 const obj=v=>v&&typeof v==='object'&&!Array.isArray(v)?v:{};
 const arr=v=>Array.isArray(v)?v:[];
 function detectFormat(q){
  const s=[q.ngnType,q.type,q.format,q.questionType,q.itemType].filter(Boolean).join(' ').replace(/_/g,' ').toLowerCase();
  if(s.includes('numeric')||q.numericAnswer!==undefined||q.correctNumericAnswer!==undefined||q.numericRange)return 'Numeric Entry';
  if(s.includes('select n')||q.selectN!==undefined||q.numberToSelect!==undefined||q.requiredSelections!==undefined)return 'Select N';
  if(s.includes('highlight')||q.highlightSegments||q.correctHighlights)return 'Highlight';
  if(s.includes('trend')||q.trendData||q.trends||q.trendTable)return 'Trend';
  if(s.includes('matrix')||s.includes('grid')||q.matrixData||(q.rows&&q.columns))return /multiple/.test(s)?'Matrix Multiple':'Matrix Single';
  if(s.includes('dropdown rationale')||q.dropdownRationale===true)return 'Dropdown Rationale';
  if(s.includes('cloze')||s.includes('drop-down')||s.includes('dropdown')||q.clozeTemplate||q.dropdowns)return 'Cloze (Drop-down)';
  if(s.includes('bowtie')||q.bowtieData)return 'Bowtie';
  if(s.includes('drag')||s.includes('order')||q.availableItems||q.correctOrder)return 'Extended Drag and Drop';
  if(s.includes('extended multiple response'))return 'Extended Multiple Response';
  if(s.includes('multiple response')||s.includes('sata')||s.includes('select all'))return 'Multiple Response';
  if(s.includes('single')||s.includes('multiple choice'))return 'Single Choice';
  return Array.isArray(q.correctAnswers)&&q.correctAnswers.length>1?'Multiple Response':'Single Choice';
 }
 function optionLabel(option){return typeof option==='string'||typeof option==='number'?String(option):String(first(option?.text,option?.label,option?.value,option?.id)||'');}
 function draftOptionRationales(q){
  if(q.optionRationales&&Object.keys(obj(q.optionRationales)).length)return null;
  const format=detectFormat(q),entries=[],rationale=String(first(q.rationale,q.generalRationale,q.explanation)||'').trim(),topic=String(first(q.topic,q.category,q.subject)||'this clinical situation');
  if(!rationale)return null;
  const add=(group,choices,correctValues)=>{
   const correct=Array.isArray(correctValues)?correctValues:(correctValues===undefined||correctValues===null||correctValues===''?[]:[correctValues]);
   if(!correct.length)return;
   (choices||[]).forEach(choice=>{
    const label=optionLabel(choice);if(!label)return;
    const candidates=[label,choice?.id,choice?.value,choice?.text,choice?.label].filter(value=>value!==undefined&&value!==null).map(String);
    const isCorrect=correct.some(value=>candidates.includes(String(value)));
    const key=group?group+' :: '+label:label;
    const correctText=correct.map(optionLabel).filter(Boolean).join(', ');
    entries.push([key,isCorrect?'Correct. '+rationale:'Not the best response for '+topic+'. '+label+' does not address the priority concern as directly as '+(correctText||'the keyed response')+'. '+rationale]);
   });
  };
  if(format==='Bowtie'){
   const key=obj(q.correctAnswers||q.bowtieData?.correct||{});
   const data=q.bowtieData||{};
   add('condition',data.conditions,key.condition);
   add('action',data.actions,key.actions);
   add('monitor',data.monitoring,key.monitoring||key.parameters);
  }else if(format==='Matrix Single'||format==='Matrix Multiple'){
   const key=obj(q.correctAnswers?.matrix||q.correctAnswers||{});
   (q.rows||q.matrixData?.rows||[]).forEach((row,index)=>add('row '+String(row.id??index),row.options||q.columns||[],key[row.id??String(index)]??row.correct));
  }else if(format==='Cloze (Drop-down)'||format==='Dropdown Rationale'){
   const key=obj(q.correctAnswers?.cloze||q.correctAnswers||q.clozeAnswers||{});
   (q.dropdowns||[]).forEach(dropdown=>add('dropdown '+dropdown.id,dropdown.options,key[dropdown.id]??dropdown.correct));
  }else if(format==='Highlight'){
   add('highlight',(q.highlightSegments||[]).map(segment=>segment.id),q.correctHighlights||q.correctAnswers?.highlights||[]);
  }else if(format==='Extended Drag and Drop'){
   add('sequence',q.availableItems||q.items||q.options||[],q.correctOrder||q.correctAnswers?.order||[]);
  }else if(format==='Trend'){
   add('response',q.options||[],q.correctAnswer??q.correctAnswers?.choice??q.correctAnswers);
  }else if(format!=='Numeric Entry'&&Array.isArray(q.options)){
   add('response',q.options,q.correctAnswers??q.correctAnswer);
  }
  return entries.length?Object.fromEntries(entries):null;
 }
 function draftClinicalJudgmentTip(q){
  const topic=String(first(q.topic,q.category,q.subject)||'the client’s clinical presentation');
  const rationale=String(first(q.rationale,q.generalRationale,q.explanation)||'').trim();
  if(!rationale)return null;
  return 'Clinical Judgment Tip: For '+topic+', connect the assessment cues to the priority risk, select the safest evidence-based response, and reassess the expected outcome. '+rationale;
 }
 function normalize(q){
  if(!q||typeof q!=='object')return q;
  const oldMeta=obj(q.metadata),oldInteraction=obj(q.interaction),oldStimulus=obj(q.stimulus),oldStimulusText=typeof q.stimulus==='string'?q.stimulus:'',oldRationales=obj(q.rationales);
  const metadata=Object.assign({},oldMeta,{
   id:first(oldMeta.id,q.id),
   category:first(oldMeta.category,q.category,q.subject),
   clientNeeds:first(oldMeta.clientNeeds,q.clientNeeds,q.clientNeed,q.client_needs,q.nclexClientNeed,q.nclexClientNeeds,q.clientNeedCategory,canonicalClientNeed(q)),
   cjmmStep:normalizeCJMM(first(oldMeta.cjmmStep,q.cjmmStep,q.clinicalJudgmentStep,q.cjmm_stage,inferCJMM(q))),
   difficulty:normalizeDifficulty(first(oldMeta.difficulty,q.difficulty,q.difficultyLevel,q.level)),
   difficultyLabel:first(oldMeta.difficultyLabel,q.difficulty,q.difficultyLevel,q.level)
  });
  const tabs=obj(first(oldStimulus.tabs,q.ehr?.tabs,q.clinicalRecord?.tabs,q.medicalRecord?.tabs));
  const canonicalTabs=Object.assign({},tabs);
  [['history',first(tabs.history,q.history,q.patientHistory,q.medicalHistory,q.historyPhysical,q.caseStudyContext?.medicalHistory,q.caseStudyContext?.historyPhysical)],['nursesNotes',first(tabs.nursesNotes,tabs.nurses_notes,q.nursesNotes,q.nurseNotes,q.caseStudyContext?.nursesNotes)],['vitalSigns',first(tabs.vitalSigns,tabs.vital_signs,q.vitalSigns,q.vitals,q.caseStudyContext?.vitalSigns)],['labResults',first(tabs.labResults,tabs.lab_results,q.labResults,q.diagnosticResults,q.caseStudyContext?.labResults)],['providerOrders',first(tabs.providerOrders,tabs.provider_orders,q.providerOrders,q.orders,q.caseStudyContext?.orders)]].forEach(([name,value])=>{if(value!==undefined)canonicalTabs[name]=(typeof value==='string'||typeof value==='number')?[String(value)]:value;});
  const stimulus=Object.assign({},oldStimulus,oldStimulusText?{legacyText:oldStimulusText}:{},{
   caseGroupId:first(oldStimulus.caseGroupId,q.caseGroupId,q.caseStudyId,q.caseStudyContext?.id),
   patientProfile:first(oldStimulus.patientProfile,q.patientProfile,q.patientInfo,q.patientInformation,q.caseStudy?.patientInfo,q.caseStudy?.patientProfile,q.caseStudyContext?.patientInfo,q.caseStudyContext?.patientProfile,q.caseStudyContext?.summary?{summary:q.caseStudyContext.summary,medicalHistory:q.caseStudyContext.medicalHistory}:undefined,q.clinicalRecord?.patientInfo,q.medicalRecord?.patientInfo),
   tabs:canonicalTabs
  });
  const interaction=Object.assign({},oldInteraction,{
   type:first(oldInteraction.type,detectFormat(q)),
   stem:first(oldInteraction.stem,q.stem,q.question,q.questionText,q.title,q.cleanTitle),
   options:first(oldInteraction.options,q.options),
   answerKey:first(oldInteraction.answerKey,q.answerKey,q.correctAnswers,q.correctAnswer,q.correctAnswerText,q.correctHighlights,q.correctOrder,q.correctNumericAnswer,q.numericAnswer),
   scoring:Object.assign({},obj(oldInteraction.scoring),{
    method:first(oldInteraction.scoring?.method,q.scoring?.method,q.scoringMethod,q.scoreMethod,q.scoringRule,inferScoring(detectFormat(q)))
   })
  });
  const rationales=Object.assign({},oldRationales,{
   overall:first(oldRationales.overall,q.rationale,q.generalRationale,q.explanation),
   options:first(oldRationales.options,q.optionRationales,q.rationaleByOption,q.rationalesByOption,Array.isArray(q.options)&&q.options.some(o=>o&&typeof o==='object'&&o.rationale)?Object.fromEntries(q.options.filter(o=>o&&typeof o==='object'&&o.rationale).map(o=>[first(o.id,o.value,o.text,o.label),o.rationale])):undefined),
   clinicalJudgmentTip:first(oldRationales.clinicalJudgmentTip,q.clinicalJudgmentTip,q.cjmmTip)
  });
  // Preserve every source field. Canonical blocks are additive; unknown legacy data is never discarded.
  q.schemaVersion=2;q.metadata=metadata;q.stimulus=stimulus;q.interaction=interaction;q.rationales=rationales;
  // Bridge canonical v2 fields to the legacy renderer contract without deleting source fields.
  if(q.id==null&&metadata.id!=null)q.id=metadata.id;
  if(q.category==null&&metadata.category!=null)q.category=metadata.category;
  if(q.clientNeeds==null&&metadata.clientNeeds!=null)q.clientNeeds=metadata.clientNeeds;
  if(q.cjmmStep==null&&metadata.cjmmStep!=null)q.cjmmStep=metadata.cjmmStep;
  if(q.difficulty==null&&metadata.difficulty!=null)q.difficulty=metadata.difficulty;
  if(q.question==null&&interaction.stem!=null)q.question=interaction.stem;
  if(q.type==null&&interaction.type!=null)q.type=interaction.type;
  if(q.options==null&&interaction.options!=null)q.options=interaction.options;
  if(q.correctAnswers==null&&interaction.answerKey!=null&&typeof interaction.answerKey==='object'&&!Array.isArray(interaction.answerKey))q.correctAnswers=interaction.answerKey;
  else if(q.correctAnswers==null&&Array.isArray(interaction.answerKey))q.correctAnswers=interaction.answerKey;
  if(q.correctHighlights==null&&interaction.type==='Highlight'&&Array.isArray(interaction.answerKey))q.correctHighlights=interaction.answerKey;
  if(q.correctOrder==null&&interaction.type==='Extended Drag and Drop'&&Array.isArray(interaction.answerKey))q.correctOrder=interaction.answerKey;
  if(q.correctNumericAnswer==null&&interaction.type==='Numeric Entry'&&typeof interaction.answerKey==='number')q.correctNumericAnswer=interaction.answerKey;
  if(q.correctAnswer==null&&interaction.answerKey!=null&&!Array.isArray(interaction.answerKey)&&typeof interaction.answerKey!=='object')q.correctAnswer=interaction.answerKey;
  if(q.rationale==null&&rationales.overall!=null)q.rationale=rationales.overall;
  if(q.optionRationales==null&&rationales.options!=null)q.optionRationales=rationales.options;
  if(q.clinicalJudgmentTip==null&&rationales.clinicalJudgmentTip!=null)q.clinicalJudgmentTip=rationales.clinicalJudgmentTip;
  if(q.patientInfo==null&&stimulus.patientProfile!=null)q.patientInfo=stimulus.patientProfile;
  if(q.ehr==null&&Object.keys(canonicalTabs).length){const tabText=value=>Array.isArray(value)?value.map(item=>typeof item==='string'?item:JSON.stringify(item)).join('\n'):value;q.ehr={nursesNotes:tabText(canonicalTabs.nursesNotes),vitalSigns:tabText(canonicalTabs.vitalSigns),diagnosticResults:tabText(canonicalTabs.labResults),historyPhysical:tabText(canonicalTabs.history),orders:tabText(canonicalTabs.providerOrders)};}
  if(q.scoringMethod==null&&interaction.scoring?.method!=null)q.scoringMethod=interaction.scoring.method;
  let generatedReviewDraft=false;
  if(!q.optionRationales){const drafted=draftOptionRationales(q);if(drafted){q.optionRationales=drafted;rationales.options=drafted;generatedReviewDraft=true;}}
  if(!q.clinicalJudgmentTip){const tip=draftClinicalJudgmentTip(q);if(tip){q.clinicalJudgmentTip=tip;rationales.clinicalJudgmentTip=tip;generatedReviewDraft=true;}}
  if(generatedReviewDraft)q.rationaleStatus='draft_for_webmaster_review';
  return q;
 }
 function validate(q,index){
  const issues=[],id=q?.metadata?.id||q?.id||'record-'+(index+1),m=obj(q?.metadata),it=obj(q?.interaction),sc=obj(it.scoring),r=obj(q?.rationales);
  const issue=(code,message)=>issues.push({index,id,code,message});
  if(!m.id)issue('V2_MISSING_ID','Metadata requires a unique ID.');
  if(!m.category)issue('V2_MISSING_CATEGORY','Metadata requires a clinical category.');
  if(!m.clientNeeds)issue('V2_MISSING_CLIENT_NEEDS','Metadata requires an NCLEX Client Needs classification.');
  if(!CJMM.includes(m.cjmmStep))issue('V2_INVALID_CJMM','Metadata requires one of the six CJMM stages.');
  if(!Number.isInteger(Number(m.difficulty))||Number(m.difficulty)<1||Number(m.difficulty)>5)issue('V2_INVALID_DIFFICULTY','Difficulty must be an integer from 1 to 5.');
  if(!it.stem)issue('V2_MISSING_STEM','Interaction requires a question stem.');
  if(!it.type||!FORMATS.includes(it.type))issue('V2_UNKNOWN_FORMAT','Interaction type must be one of the 13 supported formats.');
  if(!SCORING.includes(sc.method))issue('V2_INVALID_SCORING','Scoring method must be plus_minus, 0/1, or rationale.');
  if(!r.overall)issue('V2_MISSING_OVERALL_RATIONALE','Rationales require an overall clinical explanation.');
  if(!r.options||typeof r.options!=='object'||!Object.keys(r.options).length||Object.values(r.options).some(v=>!v||typeof v!=='string'||!v.trim()))issue('V2_MISSING_OPTION_RATIONALES','Rationales require non-empty option/response-specific explanations.');
  if(!r.clinicalJudgmentTip)issue('V2_MISSING_CJ_TIP','Rationales require a Clinical Judgment Tip.');
  const key=it.answerKey,opts=it.options;
  if(['Single Choice','Multiple Response','Select N','Trend'].includes(it.type)&&(!Array.isArray(opts)||!opts.length))issue('V2_MISSING_OPTIONS','This format requires response options.');
  if(key===undefined||key===null||key===''||(Array.isArray(key)&&!key.length)||(typeof key==='object'&&!Array.isArray(key)&&!Object.keys(key).length))issue('V2_MISSING_ANSWER_KEY','Interaction requires a non-empty answer key.');
  const optionValues=arr(opts).flatMap(v=>typeof v==='object'&&v!==null?[v.id,v.value,v.text,v.label].filter(x=>x!==undefined&&x!==null).map(String):[String(v)]);
  const keyValues=Array.isArray(key)?key:(typeof key==='string'||typeof key==='number'?[key]:[]);
  if(['Single Choice','Multiple Response','Select N','Trend'].includes(it.type)&&keyValues.length&&optionValues.length&&keyValues.some(v=>!optionValues.includes(String(v))))issue('V2_ANSWER_KEY_NOT_IN_OPTIONS','Answer key contains a response not present in the option list.');
  if(it.type==='Select N'&&(!Number.isInteger(Number(q.selectN??q.numberToSelect??q.requiredSelections))||Number(q.selectN??q.numberToSelect??q.requiredSelections)<1||keyValues.length!==Number(q.selectN??q.numberToSelect??q.requiredSelections)))issue('V2_INVALID_SELECT_N','Select N requires a positive selection count matching the keyed responses.');
  if(it.type==='Highlight'&&!(Array.isArray(q.correctHighlights)||Array.isArray(key)||Array.isArray(key?.highlights)))issue('V2_INVALID_HIGHLIGHT_KEY','Highlight items require keyed segment IDs.');
  if((it.type==='Matrix Single'||it.type==='Matrix Multiple')&&!(q.correctAnswers&&typeof q.correctAnswers==='object'&&!Array.isArray(q.correctAnswers)))issue('V2_INVALID_MATRIX_KEY','Matrix items require a row-to-column answer map.');
  if(it.type==='Bowtie'&&!(q.correctAnswers&&typeof q.correctAnswers==='object'&&!Array.isArray(q.correctAnswers)))issue('V2_INVALID_BOWTIE_KEY','Bowtie items require keyed condition, actions, and monitoring parameters.');
  if(it.type==='Numeric Entry'&&q.correctNumericAnswer===undefined&&q.numericAnswer===undefined&&!(typeof key==='number'||(key&&typeof key==='object'&&('value' in key||'min' in key||'max' in key))))issue('V2_INVALID_NUMERIC_KEY','Numeric entry requires a numeric value or accepted range.');
  if(it.type==='Extended Drag and Drop'&&!(Array.isArray(q.correctOrder)&&q.correctOrder.length))issue('V2_INVALID_ORDER_KEY','Ordered response requires a complete correct sequence.');
  if(['Cloze (Drop-down)','Dropdown Rationale'].includes(it.type)&&!(q.dropdowns||q.clozeTemplate||q.options&&typeof q.options==='object'))issue('V2_INVALID_CLOZE_DATA','Cloze items require dropdown choices and a template.');
  if(['Bowtie','Matrix Single','Matrix Multiple','Cloze (Drop-down)','Dropdown Rationale','Highlight','Numeric Entry','Extended Drag and Drop'].includes(it.type)&&(!q.stimulus||!Object.keys(q.stimulus).length)&&!q.bowtieData&&!q.matrixData&&!q.highlightSegments&&!q.trendData&&!q.dropdowns&&!q.clozeTemplate&&!q.availableItems&&!q.numericRange)issue('V2_MISSING_FORMAT_DATA','This NGN format requires its format-specific clinical or interaction data.');
  if(q.caseGroupId||q.stimulus?.caseGroupId){
   const tabs=obj(q.stimulus?.tabs);
   Object.entries(tabs).forEach(([name,value])=>{if(value!=null&&!Array.isArray(value)&&typeof value!=='object')issue('V2_INVALID_EHR_TAB','EHR tab '+name+' must be an array or key-value object.');});
   if(!q.stimulus?.patientProfile&&!Object.values(tabs).some(v=>v&&((Array.isArray(v)&&v.length)||(!Array.isArray(v)&&Object.keys(obj(v)).length))))issue('V2_CASE_STIMULUS_EMPTY','Linked NGN case requires patient information or at least one populated EHR tab.');
  }
  return issues;
 }
 function normalizeBank(bank){
  const records=arr(bank);records.forEach(normalize);
  return {total:records.length,normalized:records.filter(q=>q&&q.schemaVersion===2).length};
 }
 const api={version:2,CJMM,SCORING,FORMATS,detectFormat,normalize,normalizeBank,validate};
 root.QuickRNQuestionSchemaV2=api;
 const initialBank=Array.isArray(root.questions)?root.questions:(Array.isArray(root.embeddedQuestionsData)?root.embeddedQuestionsData:null);
 if(initialBank)normalizeBank(initialBank);
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
