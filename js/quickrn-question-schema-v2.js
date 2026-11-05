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
 function completeTeaching(q){
  const fmt=detectFormat(q),stem=String(first(q.question,q.questionText,q.stem,q.title)||''),topic=String(first(q.topic,q.category,'the clinical condition')),overall=String(first(q.rationales?.overall,q.rationale,q.generalRationale,q.explanation,'')||'');
  const flatten=v=>Array.isArray(v)?v.flatMap(flatten):v&&typeof v==='object'?Object.values(v).flatMap(flatten):v==null?[]:[String(v)];
  const keySource=first(q.answerKey,q.correctAnswers,q.correctAnswer,q.correctAnswerText,q.correctHighlights,q.correctOrder,q.correctNumericAnswer),keyed=flatten(keySource),correctSet=new Set(keyed);
  const map=Object.assign({},obj(q.rationales?.options),obj(q.optionRationales),obj(q.rationaleByOption),obj(q.rationalesByOption));
  const choices=[],add=v=>{if(typeof v==='string'&&v.trim()&&!choices.includes(v))choices.push(v);};
  if(Array.isArray(q.options))q.options.forEach(v=>add(typeof v==='object'?first(v.text,v.label,v.value,v.id):v));
  else if(q.options&&typeof q.options==='object')Object.values(q.options).forEach(v=>arr(v).forEach(add));
  arr(q.availableItems).forEach(add);arr(q.draggableItems).forEach(add);
  const b=obj(q.bowtieData);['conditions','actions','monitoring'].forEach(k=>arr(b[k]).forEach(add));
  arr(q.rows).forEach(r=>{add(r.text);arr(r.options).forEach(add);});
  arr(q.dropdowns).forEach(d=>arr(d.options).forEach(add));
  arr(q.highlightSegments).forEach(s=>add(s.text));
  arr(q.trendData?.rows).forEach(r=>arr(r).forEach(add));
  if(['Cloze (Drop-down)','Dropdown Rationale'].includes(fmt)){
   const keys=obj(first(q.answerKey,q.correctAnswers,q.correctAnswer)),source=obj(q.options);
   if(!arr(q.dropdowns).length&&Object.keys(keys).length){
    const distractors=(correct)=>{
     const s=String(correct).toLowerCase();
     if(/hypocalcemia/.test(s))return ['Hyperkalemia','Thyroid storm','Hyponatremia'];
     if(/parathyroid/.test(s))return ['Vagus nerve','Carotid body','Recurrent laryngeal nerve'];
     if(/calcium gluconate/.test(s))return ['Levothyroxine','Potassium chloride','Sodium bicarbonate'];
     if(/isotonic/.test(s))return ['Hypotonic fluid','Dextrose 5% in water as initial resuscitation','Fluid restriction'];
     if(/potassium/.test(s))return ['Sodium','Calcium','Magnesium'];
     if(/delay/.test(s))return ['Administer insulin before checking potassium','Increase the insulin infusion','Omit fluid replacement'];
     if(/consistent/.test(s))return ['Eliminate vitamin K','Double the warfarin dose','Stop all vegetables'];
     if(/black tarry/.test(s))return ['Pale stools','Clear urine','Clay-colored sputum'];
     if(/bleeding/.test(s))return ['Thromboembolism','Infection','Hypoglycemia'];
     if(/ectopic pregnancy/.test(s))return ['Appendicitis','Ovarian cyst','Normal intrauterine pregnancy'];
     if(/hemorrhagic shock/.test(s))return ['Septic shock','Pulmonary edema','Hypoglycemia'];
     if(/surgical management/.test(s))return ['Routine outpatient follow-up','Expectant management despite instability','Oral analgesia alone'];
     if(/hyperosmolar hyperglycemic state/.test(s))return ['Diabetic ketoacidosis','Hypoglycemia','SIADH'];
     if(/osmolality and electrolytes/.test(s))return ['CBC only','Thyroid tests only','Liver enzymes only'];
     if(/thyroid storm/.test(s))return ['Myxedema coma','Adrenal crisis','Panic attack'];
     if(/beta blocker and antithyroid/.test(s))return ['Levothyroxine alone','Potassium replacement alone','Insulin and glucagon'];
     if(/^npo$/i.test(s))return ['Regular diet','Clear liquids','Thickened liquids before swallow assessment'];
     if(/last-known-well/.test(s))return ['Hospital arrival time','Time symptoms were discovered','Time of last meal'];
     if(/noncontrast head ct/.test(s))return ['MRI with contrast first','Chest radiograph','Carotid ultrasound'];
     if(/apical/.test(s))return ['Radial','Pedal','Carotid'];
     if(/withhold/.test(s))return ['Administer as scheduled','Double the next dose','Give with food'];
     if(/prescriber/.test(s))return ['Dietary services','Housekeeping','Client visitor'];
     return ['An alternative that does not match the documented clinical findings','A less appropriate response for this presentation','An unrelated finding or intervention'];
    };
    q.dropdowns=Object.keys(keys).map(id=>{const correct=keys[id],opts=arr(source[id]);return {id,options:[...new Set([...opts,String(correct),...distractors(correct)])],correct};});
   }
   if(!q.clozeTemplate)q.clozeTemplate=stem;
   arr(q.dropdowns).forEach(d=>{d.id=first(d.id,'blank_'+(arr(q.dropdowns).indexOf(d)+1));const correct=first(d.correct,keys[d.id]);if(correct!==undefined){d.correct=correct;d.options=[...new Set([...arr(d.options),String(correct)])];}d.options.forEach(add);});
   q.correctAnswers=q.correctAnswers||Object.fromEntries(arr(q.dropdowns).filter(d=>d.correct!==undefined).map(d=>[d.id,d.correct]));
  }
  if(fmt==='Highlight')arr(q.highlightSegments).forEach(s=>{if(arr(q.correctHighlights).includes(s.id))correctSet.add(s.text);});
  if(fmt==='Numeric Entry'){
   const n=q.correctNumericAnswer??q.numericAnswer??q.correctValue??q.correctAnswer,u=q.unit||q.units||'requested units';
   map['Accepted numeric response']=map['Accepted numeric response']||('The keyed value is '+n+' '+u+'. Use the formula and values in the stem, preserve units, and round only at the final step.');
   map['Response outside accepted tolerance']=map['Response outside accepted tolerance']||('A value outside the accepted tolerance may reflect a unit conversion, arithmetic, or rounding error. Recalculate using the requested unit.');
  }
  choices.forEach(choice=>{if(map[choice])return;map[choice]=correctSet.has(String(choice))?'Correct. This is a keyed response for '+topic+'. The clinical rationale is: '+(overall||stem):'This option is not the best response to the question asked. Compare it with the keyed response ('+keyed.slice(0,4).join('; ')+') and the clinical rationale: '+(overall||stem);});
  if(fmt==='Matrix Single'||fmt==='Matrix Multiple'){
   const matrix=obj(q.correctAnswers?.matrix||q.correctAnswers);
   arr(q.rows).forEach(r=>arr(r.options).forEach(option=>{const k=matrix[r.id],ok=Array.isArray(k)?k.includes(option):k===option;map[r.id+' — '+option]=map[r.id+' — '+option]||(ok?'Correct classification for this row. '+overall:'This classification does not match the clinical meaning of the row. Reassess the cue and compare it with the keyed classification. '+overall);}));
  }
  if(fmt==='Highlight')arr(q.highlightSegments).forEach(s=>{const ok=arr(q.correctHighlights).includes(s.id);map[s.id+' — '+s.text]=map[s.id+' — '+s.text]||(ok?'Correct highlight: this cue supports the clinical concern in the stem. '+overall:'This segment is not a priority cue for the task asked. '+overall);});
  q.optionRationales=map;
  q.rationale=first(q.rationale,overall||('The keyed response is '+keyed.join('; ')+'. It best addresses the clinical decision in the stem: '+stem));
  q.clinicalJudgmentTip=first(q.clinicalJudgmentTip,q.cjmmTip,'For '+topic+', identify the cues in the stem, compare them with baseline and risk factors, prioritize the immediate threat, choose the response supported by the clinical rationale, and evaluate the outcome using relevant assessment findings.');
  q.rationales=Object.assign({},obj(q.rationales),{overall:q.rationales?.overall||q.rationale,options:map,clinicalJudgmentTip:q.rationales?.clinicalJudgmentTip||q.clinicalJudgmentTip});
  if(q.caseGroupId||q.caseStudyId){
   const src=first(q.caseStudyContext,q.caseStudy,q.patientInfo,q.clinicalScenario,q.scenario,{});
   if(!q.patientProfile)q.patientProfile=typeof src==='string'?{presentingConcern:src}:obj(src);
   if(!q.scenario)q.scenario=first(src?.scenario,src?.summary,typeof src==='string'?src:undefined,q.clinicalScenario,q.patientInfo?.history,stem);
   q.clinicalScenario=q.clinicalScenario||q.scenario||stem;
   const s=String(q.scenario||stem)+' '+(typeof src==='string'?src:JSON.stringify(src||{}));
   const matchValue=re=>{const m=s.match(re);return m?m[1]:null;};
   const fever=/fever|febrile|sepsis|infection|meningitis|pneumonia|endometritis|temperature\s*3[89]/i.test(s);
   const resp=/dyspnea|respiratory distress|wheez|stridor|hypoxemia|pulmonary|bronchiolitis|COPD|asthma|airway/i.test(s);
   const shock=/hypotension|shock|hemorrhage|anaphylaxis|BP\s*(?:7\d|8\d|9\d)\//i.test(s);
   const e=obj(q.ehr),tabs=obj(e.tabs),v=obj(tabs.vitalSigns);
   tabs.nursesNotes=tabs.nursesNotes||[{time:'Case presentation',note:q.scenario||stem}];
   tabs.vitalSigns=Object.assign({},v,{
    temperature:v.temperature||matchValue(/(?:temperature|temp)\s*[:=]?\s*([\d.]+\s*°?C)/i)||(fever?'38.5 °C (simulated)':'36.8 °C (simulated)'),
    heartRate:v.heartRate||matchValue(/(?:heart rate|HR)\s*[:=]?\s*(\d+\s*\/min)/i)||(shock?'122/min (simulated)':'92/min (simulated)'),
    respiratoryRate:v.respiratoryRate||matchValue(/(?:respiratory rate|RR)\s*[:=]?\s*(\d+\s*\/min)/i)||(resp?'28/min (simulated)':'18/min (simulated)'),
    bloodPressure:v.bloodPressure||matchValue(/(?:blood pressure|BP)\s*[:=]?\s*([\d/]+\s*mm Hg)/i)||(shock?'86/50 mm Hg (simulated)':'122/76 mm Hg (simulated)'),
    oxygenSaturation:v.oxygenSaturation||matchValue(/(?:oxygen saturation|SpO2)\s*[:=]?\s*(\d+%)/i)||(resp?'89% (simulated)':'97% (simulated)')
   });
   tabs.vitalSigns.provenance='Explicit case values are retained; missing values are simulated educational data and require clinical review.';
   tabs.labResults=tabs.labResults||{availableInCase:s.match(/(?:lactate|glucose|potassium|sodium|creatinine|hemoglobin|INR|ANC)\s*[:=]?\s*[\d.]+[^,.;]*/gi)||[],note:'Use only results documented in the case stimulus; obtain additional ordered tests as indicated.'};
   tabs.providerOrders=tabs.providerOrders||{orders:src?.orders||src?.priorityAction||'Implement prescribed orders and clarify missing or conflicting instructions.'};
   q.ehr=Object.assign({},e,{tabs});
  }
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
  [['history',first(tabs.history,q.history,q.patientHistory,q.medicalHistory,q.historyPhysical)],['nursesNotes',first(tabs.nursesNotes,tabs.nurses_notes,q.nursesNotes,q.nurseNotes)],['vitalSigns',first(tabs.vitalSigns,tabs.vital_signs,q.vitalSigns,q.vitals)],['labResults',first(tabs.labResults,tabs.lab_results,q.labResults,q.diagnosticResults)],['providerOrders',first(tabs.providerOrders,tabs.provider_orders,q.providerOrders,q.orders)]].forEach(([name,value])=>{if(value!==undefined)canonicalTabs[name]=value;});
  const stimulus=Object.assign({},oldStimulus,oldStimulusText?{legacyText:oldStimulusText}:{},{
   caseGroupId:first(oldStimulus.caseGroupId,q.caseGroupId,q.caseStudyId,q.caseStudyContext?.id),
   patientProfile:first(oldStimulus.patientProfile,q.patientProfile,q.patientInfo,q.patientInformation,q.caseStudy,q.caseStudyContext,q.clinicalRecord,q.clinicalScenario,q.scenario,q.ehr),
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
  if(q.ehr==null&&Object.keys(canonicalTabs).length)q.ehr={tabs:canonicalTabs};
  if(q.scoringMethod==null&&interaction.scoring?.method!=null)q.scoringMethod=interaction.scoring.method;
  completeTeaching(q);
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
  const groups=new Map();records.forEach(q=>{const g=q&&(q.caseGroupId||q.caseStudyId||q.stimulus?.caseGroupId);if(g){if(!groups.has(g))groups.set(g,[]);groups.get(g).push(q);}});
  groups.forEach(items=>{const used=new Set(items.map(q=>Number(q.caseQuestionNumber||q.sequenceNumber||q.caseStudySequence)).filter(n=>Number.isInteger(n)&&n>0));let next=1;items.forEach(q=>{if(!Number.isInteger(Number(q.caseQuestionNumber||q.sequenceNumber||q.caseStudySequence))){while(used.has(next))next++;q.caseQuestionNumber=next;q.caseStudySequence=next;used.add(next++);}else{q.caseQuestionNumber=Number(q.caseQuestionNumber||q.sequenceNumber||q.caseStudySequence);q.caseStudySequence=q.caseQuestionNumber;}});});
  return {total:records.length,normalized:records.filter(q=>q&&q.schemaVersion===2).length};
 }
 const api={version:2,CJMM,SCORING,FORMATS,detectFormat,normalize,normalizeBank,validate};
 root.QuickRNQuestionSchemaV2=api;
 const initialBank=Array.isArray(root.questions)?root.questions:(Array.isArray(root.embeddedQuestionsData)?root.embeddedQuestionsData:null);
 if(initialBank)normalizeBank(initialBank);
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
