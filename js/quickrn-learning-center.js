(function(){
'use strict';
const DATA={
child:{
"Growth & Development":["Developmental milestones by age","Pediatric vital signs and assessment","Piaget Erikson and Kohlberg","Immunization schedule and safety"],
"Respiratory":["Asthma and status asthmaticus","Croup vs epiglottitis","Bronchiolitis and RSV","Cystic fibrosis nursing care"],
"Cardiovascular":["Congenital heart defects","Kawasaki disease","Pediatric heart failure","Tetralogy of Fallot"],
"Neurologic":["Febrile seizures","Meningitis in children","Increased intracranial pressure","Pediatric cerebral palsy"],
"Gastrointestinal & Nutrition":["Pyloric stenosis","Intussusception","Cleft lip and palate","Pediatric dehydration"],
"Renal & Genitourinary":["Nephrotic syndrome","Post-streptococcal glomerulonephritis","Wilms tumor","Urinary tract infection in children"],
"Endocrine & Metabolic":["Type 1 diabetes in children","Diabetic ketoacidosis","Congenital hypothyroidism","Phenylketonuria"],
"Hematology & Oncology":["Sickle cell crisis","Hemophilia","Leukemia in children","Iron deficiency anemia"],
"Emergency & Safety":["Pediatric medication dosage","Child abuse recognition and reporting","Poisoning and ingestion","Pediatric shock"]
},
adult:{
"Cardiovascular":["Heart failure","Acute coronary syndrome and myocardial infarction","Dysrhythmias and ECG interpretation","Hypertension and hypertensive crisis"],
"Respiratory":["COPD exacerbation","Asthma management","Pneumonia and respiratory failure","Pulmonary embolism"],
"Neurologic":["Stroke and thrombolytic care","Seizures and status epilepticus","Parkinson disease","Increased intracranial pressure"],
"Endocrine":["Diabetes mellitus and insulin","DKA vs HHS","Thyroid storm and myxedema","Adrenal insufficiency and Cushing syndrome"],
"Renal & Urinary":["Acute kidney injury","Chronic kidney disease","Hemodialysis and peritoneal dialysis","Electrolyte imbalances"],
"Gastrointestinal & Hepatic":["GI bleeding","Cirrhosis and hepatic encephalopathy","Pancreatitis","Inflammatory bowel disease"],
"Musculoskeletal":["Fractures and compartment syndrome","Hip replacement precautions","Osteoporosis","Rheumatoid arthritis"],
"Hematology & Oncology":["Anemia and transfusion reactions","Neutropenia precautions","Cancer complications","DVT and pulmonary embolism"],
"Immune & Integumentary":["Sepsis and septic shock","HIV and opportunistic infection","Burns and fluid resuscitation","Pressure injury prevention"]
},
pharm:{
"Medication Safety & Calculations":["Medication administration rights","Dosage calculations and dimensional analysis","High-alert medications","Medication reconciliation"],
"Cardiovascular Drugs":["ACE inhibitors and ARBs","Beta blockers","Calcium channel blockers","Digoxin and toxicity"],
"Anticoagulants & Hematology":["Heparin and aPTT monitoring","Warfarin and INR","DOACs and bleeding precautions","Thrombolytics"],
"Endocrine Drugs":["Insulin types and timing","Oral diabetes medications","Corticosteroids","Thyroid medications"],
"Antimicrobials":["Penicillins and cephalosporins","Vancomycin and trough monitoring","Aminoglycosides","Antitubercular medications"],
"Respiratory & Neurologic Drugs":["Bronchodilators","Inhaled corticosteroids","Antiepileptic medications","Opioids and reversal agents"],
"Psychiatric Medications":["SSRIs and serotonin syndrome","Lithium and toxicity","Antipsychotics and NMS","Benzodiazepines"],
"Emergency & Critical Care Drugs":["Epinephrine","Amiodarone","Vasopressors","Naloxone and antidotes"]
},
fundamentals:{
"Patient Safety & Infection Prevention":["Standard precautions and hand hygiene","Contact droplet and airborne precautions","Sterile technique and surgical asepsis","Fall prevention and restraint safety"],
"Assessment & Vital Signs":["Head-to-toe nursing assessment","Pain assessment and reassessment","Adult vital signs and early warning signs","Focused respiratory and cardiovascular assessment"],
"Fluids & Electrolytes":["Fluid volume deficit vs excess","Sodium imbalances","Potassium imbalances","Calcium and magnesium imbalances"],
"Acid-Base & Laboratory Values":["ABG interpretation and ROME","Common NCLEX laboratory values","CBC interpretation","Renal and liver function tests"],
"Mobility & Musculoskeletal Care":["Safe patient transfer and body mechanics","Range of motion and immobility complications","Traction and cast care","Pressure injury prevention and staging"],
"Nutrition & Elimination":["Enteral feeding and aspiration precautions","Parenteral nutrition and central-line safety","Urinary catheter care and CAUTI prevention","Bowel elimination and ostomy care"],
"Perioperative & Wound Care":["Preoperative checklist and informed consent","Postoperative complications and priorities","Wound healing and dressing changes","Drains and surgical tubes"],
"Oxygenation & Emergency Basics":["Oxygen delivery devices","Suctioning and airway management","Chest tube nursing care","Basic life support and rapid response"]
},
maternal:{
"Antepartum Nursing":["Prenatal assessment and routine tests","Preeclampsia and eclampsia","Gestational diabetes","Placenta previa vs placental abruption"],
"Intrapartum & Labor":["Stages of labor","Fetal heart rate monitoring","Labor pain management","Preterm labor and rupture of membranes"],
"Postpartum Nursing":["Postpartum assessment and fundal checks","Postpartum hemorrhage","Postpartum infection and endometritis","Postpartum mood disorders"],
"Newborn Care":["APGAR and immediate newborn care","Newborn thermoregulation","Newborn reflexes and assessment","Newborn feeding and jaundice"],
"Maternal Complications":["Ectopic pregnancy","Hyperemesis gravidarum","Rh incompatibility and Rho(D) immune globulin","Amniotic fluid embolism"],
"Reproductive Health":["Contraception and family planning","STI assessment and treatment teaching","Menstrual disorders and endometriosis","Infertility and reproductive procedures"]
},
mental:{
"Therapeutic Communication & Crisis":["Therapeutic communication techniques","Suicide risk assessment and safety","Crisis intervention","Defense mechanisms and coping"],
"Mood Disorders":["Major depressive disorder","Bipolar disorder and mania","Lithium monitoring and toxicity","Electroconvulsive therapy nursing care"],
"Psychotic Disorders":["Schizophrenia and positive vs negative symptoms","Antipsychotic adverse effects","Neuroleptic malignant syndrome","Delusions and hallucinations nursing responses"],
"Anxiety & Trauma":["Panic disorder and anxiety levels","PTSD and trauma-informed care","Obsessive-compulsive disorder","Phobias and exposure therapy"],
"Substance Use & Eating Disorders":["Alcohol withdrawal and CIWA","Opioid use and withdrawal","Anorexia and bulimia nursing care","Intoxication and overdose priorities"]
},
leadership:{
"Delegation & Assignment":["RN LPN and UAP scope of practice","Five rights of delegation","Assignment and supervision","When to intervene and reassess delegated care"],
"Prioritization & Triage":["ABCs and unstable vs stable clients","Acute vs chronic and new vs expected findings","Mass casualty triage","Who to see first NCLEX strategy"],
"Ethics & Legal Responsibilities":["Informed consent and refusal","Confidentiality and HIPAA principles","Advance directives and client advocacy","Negligence malpractice and documentation"],
"Quality & Safety":["Incident reports and error disclosure","Root cause analysis and just culture","Evidence-based practice and quality indicators","Safe handoff and SBAR communication"]
},
community:{
"Population & Community Health":["Levels of prevention","Community assessment and health planning","Social determinants of health","Home health and vulnerable populations"],
"Epidemiology & Communicable Disease":["Chain of infection and disease transmission","Outbreak investigation basics","Immunization and vaccine principles","Tuberculosis and communicable disease control"],
"Disaster & Emergency Preparedness":["Disaster triage and START","Bioterrorism and isolation response","Disaster phases and emergency planning","Community emergency shelter and continuity of care"]
}
};

// Only verified, topic-specific video IDs belong in this catalog.
// Missing entries intentionally show an unavailable placeholder instead of unrelated content.
const VIDEO_PROVIDERS=[
  {id:'registerednursern',label:'RegisteredNurseRN',query:'RegisteredNurseRN'},
  {id:'simplenursing',label:'Simple Nursing',query:'Simple Nursing'},
  {id:'picmonicvideo',label:'PicmonicVideo',query:'PicmonicVideo'}
];
let selectedProvider=null;
let topic='',recognition=null,currentVideoUrl='';
// Only manually reviewed video IDs are eligible for automatic playback.
const VIDEO_ID_CATALOG={
  simplenursing:{
    'Heart failure':'r5W1ns5C1ik'
  }
};
const $=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const noteKey=()=> 'quickrn_learning_notes_v1';
function allTopics(){return Object.entries(DATA).flatMap(([category,systems])=>Object.entries(systems).flatMap(([system,topics])=>topics.map(topic=>({category,system,topic}))));}
function loadNotes(){try{return JSON.parse(localStorage.getItem(noteKey())||'{}')}catch(e){return {};}}
function saveNotes(){const notes=loadNotes();notes[topic||'General']=$('topic-notes').value;localStorage.setItem(noteKey(),JSON.stringify(notes));$('voice-status').textContent='Notes saved in this browser.';}
function selectTopic(value){
  topic=value;
  selectedProvider=null;
  $('notes-topic').textContent=value;
  $('topic-notes').value=loadNotes()[value]||'';
  document.querySelectorAll('[data-topic]').forEach(b=>b.classList.toggle('is-active-topic',b.dataset.topic===value));
  renderCheatSheet(value);
  playTopicPlaylist(value);
}
function renderSystems(){
  const groups=allTopics().reduce((acc,item)=>{
    const labels={child:'Pediatrics',adult:'Adult Health',pharm:'Pharmacology',fundamentals:'Nursing Fundamentals',maternal:'Maternal-Newborn',mental:'Mental Health',leadership:'Leadership & Management',community:'Community Health'};
    const label=labels[item.category]||item.category;
    const key=label+' · '+item.system;(acc[key]||(acc[key]=[])).push(item.topic);return acc;
  },{});
  const total=Object.values(groups).reduce((n,a)=>n+a.length,0);
  $('topic-count').textContent=total+' topics';
  $('system-list').innerHTML=Object.entries(groups).map(([system,topics],i)=>
    '<details class="subject-card rounded-xl border overflow-hidden" '+(i===0?'open':'')+'><summary class="cursor-pointer px-3 py-3 font-bold text-xs flex justify-between gap-2"><span>'+safe(system)+'</span><span class="text-[11px] font-normal text-slate-500">'+topics.length+'</span></summary><div class="grid grid-cols-1 gap-1 p-2 border-t">'+topics.map(t=>'<button type="button" class="lesson-link topic-select" data-topic="'+safe(t)+'">'+safe(t)+'</button>').join('')+'</div></details>'
  ).join('');
}
function showVideoMessage(message){
  $('player-shell').innerHTML='<div class="w-full h-full min-h-48 flex flex-col items-center justify-center gap-2 p-5 text-center text-white"><i class="fa-brands fa-youtube text-4xl text-red-500"></i><p class="text-sm font-semibold">'+safe(message)+'</p></div>';
}
function renderProviderButtons(){
  const host=$('video-provider-controls');if(!host)return;
  host.innerHTML=VIDEO_PROVIDERS.map(p=>'<button type="button" class="video-provider-button'+(p.id===selectedProvider?' is-selected':'')+'" data-provider="'+p.id+'" aria-pressed="'+(p.id===selectedProvider?'true':'false')+'">'+safe(p.label)+'</button>').join('');
  host.querySelectorAll('[data-provider]').forEach(button=>button.addEventListener('click',()=>{
    if(!topic){$('player-caption').textContent='Choose a body system and topic first.';showVideoMessage('Step 1: choose a body system. Step 2: choose a topic. Then select a channel.');return;}selectedProvider=button.dataset.provider;renderProviderButtons();loadTopicVideo(topic,selectedProvider);
  }));
}
function buildVideoReportUrl(topicText,provider,videoUrl){
  const title='Learning Center video unavailable: '+topicText+' ('+provider.label+')';
  const body=[
    'Please review this Learning Center video mapping.',
    '',
    '**Topic:** '+topicText,
    '**Channel:** '+provider.label,
    '**Video URL / ID:** '+(videoUrl||'No video currently mapped'),
    '**Report type:** Unavailable, broken, incorrect, or cannot be embedded',
    '',
    'Please verify the video and remap this topic if a suitable replacement is available.'
  ].join('\n');
  return 'https://github.com/Archonline/QuickRN/issues/new?title='+encodeURIComponent(title)+'&body='+encodeURIComponent(body);
}
function videoReportLink(topicText,provider,videoUrl){
  const url=buildVideoReportUrl(topicText,provider,videoUrl);
  return '<a class="inline-flex items-center gap-2 rounded-lg border border-rose-300/60 px-3 py-2 text-xs font-semibold text-rose-100 hover:bg-rose-500/15" href="'+safe(url)+'" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-flag"></i>Report unavailable / broken video</a>';
}
function loadTopicVideo(topicText,providerId){
  const provider=VIDEO_PROVIDERS.find(p=>p.id===providerId);
  if(!provider)return;
  currentVideoUrl='';
  updateLearningFlow(4,'Channel selected. Checking for a verified lesson mapping.');
  const videoId=VIDEO_ID_CATALOG[providerId]&&VIDEO_ID_CATALOG[providerId][topicText];
  if(videoId&&/^[A-Za-z0-9_-]{11}$/.test(videoId)){
    currentVideoUrl='https://www.youtube.com/watch?v='+videoId;
    $('player-shell').innerHTML='<div class="w-full h-full flex flex-col"><div class="relative w-full flex-1 min-h-0"><iframe class="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/'+videoId+'?autoplay=1&playsinline=1&rel=0" title="'+safe(provider.label)+' — '+safe(topicText)+'" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><div class="flex shrink-0 justify-end bg-slate-900 p-2">'+videoReportLink(topicText,provider,currentVideoUrl)+'</div></div>';
    $('player-caption').textContent='Now playing: '+provider.label+' · '+topicText+' · Report a problem if this video is unavailable.';
    return;
  }
  $('player-shell').innerHTML='<div class="w-full h-full min-h-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white"><i class="fa-solid fa-circle-exclamation text-4xl text-amber-400"></i><p class="text-base font-bold">'+safe(provider.label)+' · '+safe(topicText)+'</p><p class="max-w-lg text-sm text-white/75">No verified video is currently mapped to this topic and channel. Please report an unavailable or incorrect lesson mapping so it can be reviewed.</p>'+videoReportLink(topicText,provider,'')+'</div>';
  $('player-caption').textContent='No verified video mapped: '+provider.label+' · '+topicText+'.';
}
// Topic-matched quick references. External images are previews with attribution; Google Images is a discovery link, not an image API.
const CHEAT_SHEET_IMAGES=[
  {match:/ECG|EKG|dysrhythmia|arrhythmia/i,title:'5 Lead EKG Placement',src:'https://nursing.com/wp-content/uploads/2019/11/cardiac-001-343x350-1.png',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/oxygen|COPD|asthma|airway|suction|chest tube|respiratory failure/i,title:'Hierarchy of Oxygen Delivery',src:'https://nursing.com/wp-content/uploads/2019/11/resp-002-343x350-1.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/hemodynamic|heart failure|cardiogenic shock|cardiovascular|myocardial infarction|acute coronary/i,title:'Hemodynamic Values',src:'https://nursing.com/wp-content/uploads/2019/11/cardiac-003-343x350-1.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/IV solution|intravenous fluid|fluid replacement/i,title:'Crystalloid IV Solutions',src:'https://nursing.com/wp-content/uploads/2019/11/pharm-001-copy-343x350-1.png',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/laboratory|lab value|CBC interpretation|renal and liver function/i,title:'63 Must-Know Lab Values',src:'https://nursing.com/wp-content/uploads/2019/12/labs-001-343x350-1.png',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/electrolyte|sodium|potassium|calcium|magnesium/i,title:'Electrolyte Abnormalities',src:'https://nursing.com/wp-content/uploads/2019/11/electrolyte-abnormalities-cheatsheet.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/insulin|diabetes mellitus|DKA|HHS/i,title:'Insulin Onset & Peak',src:'https://nursing.com/wp-content/uploads/2024/02/insulin-peak-and-onset.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'}
];
const CHEAT_SHEETS={
  'Heart failure':{focus:'Pump failure causes reduced cardiac output and/or congestion. Distinguish left-sided pulmonary findings from right-sided systemic venous congestion.',cues:['Dyspnea, orthopnea, crackles, hypoxemia or new confusion','Daily weight trend, edema, JVD, lung sounds and urine output','Review ejection fraction, renal function and potassium when available'],actions:['Position upright and assess oxygenation/work of breathing','Trend weight, intake/output, edema and response to prescribed diuresis','Reconcile medications and reinforce sodium/fluid instructions as prescribed'],red:'Acute respiratory distress, pink frothy sputum, hypotension, chest pain or rapidly worsening perfusion needs urgent escalation.',memory:'Daily weight is a sensitive trend: report rapid gain using the patient’s prescribed action-plan threshold.'},
  'Acute coronary syndrome and myocardial infarction':{focus:'Myocardial ischemia is time-sensitive. Recognize symptoms, obtain rapid ECG assessment and escalate suspected ACS.',cues:['Chest pressure or equivalent symptoms: dyspnea, diaphoresis, nausea, unusual fatigue','12-lead ECG and serial cardiac troponins per protocol','Assess hemodynamic stability, rhythm and pain characteristics'],actions:['Activate emergency/ACS pathway and obtain ECG promptly','Establish monitoring and IV access per protocol; prepare for ordered therapy','Reassess pain, rhythm, perfusion and response to treatment'],red:'Persistent ischemic symptoms, ST changes, dysrhythmia, shock or acute pulmonary edema are emergencies.',memory:'Do not delay escalation while waiting for a laboratory result when ACS is suspected.'},
  'COPD exacerbation':{focus:'An exacerbation increases airway inflammation and airflow limitation. Compare current work of breathing and gas exchange with baseline.',cues:['Increased dyspnea, sputum volume or purulence; accessory muscle use','Mental-status change, fatigue, diminished air movement or silent chest','SpO₂ and ABG/VBG interpreted with clinical status and prescribed target'],actions:['Position to ease breathing; titrate oxygen to the patient-specific prescribed target','Administer prescribed bronchodilators and corticosteroids; reassess response','Support secretion clearance and escalate for worsening fatigue or ventilation'],red:'Exhaustion, altered consciousness, cyanosis, silent chest or worsening hypercapnia requires urgent escalation.',memory:'A normalizing respiratory rate in a tiring patient can signal fatigue, not recovery.'},
  'Stroke and thrombolytic care':{focus:'Stroke care is time-critical. Differentiate ischemic from hemorrhagic stroke through urgent imaging before reperfusion decisions.',cues:['Last-known-well time, FAST findings and focused neurologic baseline','Point-of-care glucose to identify a mimic','Airway protection, swallowing ability, BP and anticoagulant history'],actions:['Activate stroke response and document last-known-well precisely','Keep NPO until swallow screening is completed','Prepare for urgent brain imaging; follow stroke-team BP and treatment protocol'],red:'Sudden focal deficit, declining consciousness, severe headache or airway compromise is an emergency.',memory:'Never give food, fluids or oral medication before swallow safety is established.'},
  'Diabetes mellitus and insulin':{focus:'Match insulin type and timing to meals, glucose trends, nutrition and the prescribed regimen.',cues:['Glucose trend, meal availability, symptoms of hypo/hyperglycemia','Renal function, potassium and current insulin orders','Injection site rotation and ability to self-manage safely'],actions:['Verify insulin type, dose, timing, route and glucose per policy','Coordinate prandial insulin with food availability and prescribed timing','Treat hypoglycemia promptly under protocol and recheck at the required interval'],red:'Severe hypoglycemia, altered consciousness, seizure, or suspected DKA/HHS needs immediate action.',memory:'Insulin is high-alert: independent double-checks follow local policy; never interchange products or timing.'},
  'DKA vs HHS':{focus:'Both are hyperglycemic emergencies. DKA features ketosis and metabolic acidosis; HHS typically has profound hyperosmolality and dehydration.',cues:['Glucose, electrolytes, anion gap, ketones and acid-base status','Volume status, mental status, urine output and precipitating illness','Potassium before and during insulin therapy'],actions:['Prioritize isotonic fluid resuscitation as prescribed and assess response','Follow protocol for potassium replacement and insulin sequence','Trend glucose, potassium, anion gap/osmolality and neurologic status'],red:'Shock, dysrhythmia, severe acidosis, altered consciousness or cerebral edema signs require urgent escalation.',memory:'Check potassium before starting insulin; insulin shifts potassium into cells.'},
  'Electrolyte imbalances':{focus:'Electrolyte changes can rapidly affect neurologic function, muscle strength and cardiac conduction.',cues:['Sodium: neurologic changes and seizure risk','Potassium: weakness and ECG changes; inspect renal function and medications','Calcium/magnesium: tetany, paresthesia, reflex changes and dysrhythmias'],actions:['Review trends, symptoms, ECG and renal function together','Use prescribed replacement route/rate and infusion safeguards','Reassess ECG, symptoms and repeat labs after correction'],red:'Seizure, significant ECG change, severe weakness, tetany or symptomatic extreme values need urgent escalation.',memory:'Never IV-push potassium. Follow institutional concentration, dilution and pump rules.'},
  'Insulin types and timing':{focus:'Know onset, peak and duration by the exact insulin product; times vary by formulation and patient.',cues:['Rapid-acting: meal-related; verify food is available','Regular: short-acting; may be used IV in selected protocols','NPH: intermediate with a peak; long-acting basal products have product-specific profiles'],actions:['Check exact product, concentration, dose and timing','Coordinate prandial insulin with meal delivery','Monitor for hypoglycemia during expected peak and when intake changes'],red:'Unexpected glucose drop, confusion, diaphoresis, seizure or reduced consciousness suggests hypoglycemia.',memory:'Do not mix or substitute insulin products unless the specific products and order permit it.'},
  'Sepsis and septic shock':{focus:'Sepsis is life-threatening organ dysfunction from a dysregulated response to infection. Early recognition and timely treatment matter.',cues:['Suspected infection plus altered mentation, hypotension, tachypnea or poor perfusion','Trend lactate when ordered, urine output, temperature and hemodynamics','Assess source, cultures and organ dysfunction'],actions:['Escalate concern early and follow the local sepsis pathway','Obtain cultures and administer prescribed antimicrobials without avoidable delay','Give prescribed fluids/vasopressors and reassess perfusion frequently'],red:'Hypotension, mottling, oliguria, rising lactate or altered mental status may indicate deterioration.',memory:'Reassess after every intervention; a single normal vital sign does not rule out sepsis.'},
  'Acute kidney injury':{focus:'AKI is an acute decline in kidney function. Identify reversible causes and prevent additional renal injury.',cues:['Creatinine trend and urine output trend, not a single value alone','Volume status, blood pressure, electrolytes and acid-base status','Medication list, nephrotoxins, recent contrast and obstruction risk'],actions:['Measure intake/output and daily weight accurately','Review nephrotoxic medications and renal-dose orders with the team','Monitor potassium, fluid balance and indications for urgent renal support'],red:'Hyperkalemic ECG changes, pulmonary edema, severe acidosis, uremic symptoms or anuria requires urgent escalation.',memory:'Low urine output is a clinical cue: verify measurement and promptly report sustained decline.'},
  'Pediatric vital signs and assessment':{focus:'Interpret pediatric findings by age, baseline and clinical appearance; adult thresholds do not apply to infants and children.',cues:['Age-specific heart rate, respiratory rate and blood pressure','Work of breathing, perfusion, interaction, hydration and urine output','Caregiver report of baseline behavior, intake and wet diapers'],actions:['Assess appearance and airway/breathing before focusing on numbers','Use age-appropriate equipment and validated reference ranges','Reassess after interventions and involve caregivers in baseline history'],red:'Apnea, grunting, retractions, cyanosis, poor perfusion, lethargy or inability to maintain hydration needs urgent escalation.',memory:'In children, hypotension can be a late sign of shock; assess perfusion and behavior early.'},
  'Asthma and status asthmaticus':{focus:'Asthma causes variable airflow obstruction. Severe exacerbation can progress to respiratory failure.',cues:['Wheeze, prolonged expiration, accessory muscle use and peak-flow trend if appropriate','Ability to speak, oxygenation, air movement and response to bronchodilator','A quiet or silent chest in a distressed patient is ominous'],actions:['Assess severity and administer prescribed rapid-relief therapy promptly','Reassess breath sounds, work of breathing and response','Prepare escalation support for poor response or fatigue'],red:'Silent chest, exhaustion, altered consciousness or worsening hypoxemia is an emergency.',memory:'Less wheezing is not always improvement if air movement is falling.'},
  'Preeclampsia and eclampsia':{focus:'Preeclampsia is a hypertensive disorder after 20 weeks with maternal organ involvement; severe features can threaten mother and fetus.',cues:['BP trend, severe headache, visual symptoms and RUQ/epigastric pain','Platelets, renal/liver function and urine protein as clinically indicated','Fetal movement and fetal assessment per obstetric plan'],actions:['Escalate severe-range BP or warning symptoms immediately','Institute seizure precautions and administer prescribed magnesium/antihypertensives','Monitor reflexes, respirations and urine output during magnesium therapy'],red:'Seizure, severe headache/visual changes, pulmonary edema or severe-range BP requires urgent obstetric response.',memory:'Magnesium toxicity: monitor respirations, reflexes and urine output; calcium gluconate is the antidote.'},
  'Fetal heart rate monitoring':{focus:'Interpret fetal heart rate baseline, variability, accelerations, decelerations and contraction pattern together.',cues:['Baseline 110–160 bpm and variability category','Early, variable and late decelerations in relation to contractions','Maternal BP, position, oxytocin and uterine tachysystole'],actions:['Reposition and address reversible causes according to local protocol','Stop or reduce uterotonic infusion when indicated by protocol and notify the team','Escalate persistent Category III or unresolved concerning patterns'],red:'Persistent bradycardia, recurrent late decelerations with minimal/absent variability or prolonged deceleration needs immediate response.',memory:'Assess the whole tracing and clinical picture; do not interpret one isolated feature alone.'},
  'Postpartum hemorrhage':{focus:'PPH is excessive postpartum bleeding. Identify cause rapidly using the 4 Ts: Tone, Trauma, Tissue, Thrombin.',cues:['Fundal tone/position, quantified blood loss and ongoing bleeding','Vital signs, mental status, perfusion and urine output','Placental completeness, lacerations and coagulation risk'],actions:['Call for help and activate the obstetric hemorrhage protocol','Massage a boggy uterus and administer prescribed uterotonics','Establish/maintain access, quantify blood loss and prepare ordered fluids/blood products'],red:'Heavy bleeding, boggy uterus, tachycardia, hypotension or altered mentation is an emergency.',memory:'A boggy uterus suggests atony; a firm uterus with ongoing bleeding suggests another cause such as trauma.'},
  'Therapeutic communication techniques':{focus:'Use open-ended, nonjudgmental, client-centered responses that encourage expression and clarify meaning.',cues:['Client’s stated concern, emotion, safety and immediate needs','Nonverbal cues and discrepancies between words and behavior','Cultural, language and developmental needs'],actions:['Use silence, reflection, clarification and broad openings','Validate feelings without reinforcing delusions or making false reassurance','Ask direct, clear questions when assessing suicide or immediate safety'],red:'Imminent self-harm, violence, inability to maintain safety or acute medical instability takes priority.',memory:'“Why” questions, advice-giving and false reassurance can shut down communication.'},
  'RN LPN and UAP scope of practice':{focus:'Delegation depends on client stability, task predictability, staff competence and jurisdictional scope rules.',cues:['Need for initial assessment, clinical judgment, teaching or evaluation','Stability and predictability of the client’s condition','Training, competency, policy and applicable nurse practice rules'],actions:['RN retains assessment, nursing judgment, care planning and evaluation','Delegate appropriate routine tasks to competent staff with clear directions','Provide supervision, availability and follow-up evaluation'],red:'Unstable clients or tasks requiring nursing judgment should not be delegated to unlicensed assistive personnel.',memory:'The RN may delegate a task, but accountability for appropriate delegation and supervision remains.'},
  'Standard precautions and hand hygiene':{focus:'Standard precautions apply to every patient. Add transmission-based precautions when infection risk requires them.',cues:['Expected exposure to blood/body fluids, mucous membranes or nonintact skin','Suspected/confirmed organism and transmission route','PPE needs based on task and isolation signage'],actions:['Perform hand hygiene at indicated moments and use task-appropriate PPE','Use safe injection practices and sharps disposal','Add contact, droplet or airborne precautions based on organism guidance'],red:'Unprotected exposure, sharps injury or breach involving a high-risk pathogen requires immediate reporting and exposure protocol.',memory:'Gloves do not replace hand hygiene.'},
  'ABG interpretation and ROME':{focus:'Interpret pH first, then PaCO₂ and HCO₃⁻; determine primary respiratory/metabolic process and compensation.',cues:['pH below 7.35 = acidemia; above 7.45 = alkalemia','PaCO₂ reflects respiratory component; HCO₃⁻ reflects metabolic component','Assess oxygenation and clinical context separately'],actions:['Use the same ABG sample and reference ranges','Identify primary process, compensation and possible mixed disorder','Correlate with respiratory status, medications and underlying cause'],red:'Severe acidemia/alkalemia, deteriorating consciousness or respiratory failure requires urgent escalation.',memory:'ROME: Respiratory Opposite, Metabolic Equal—use it to identify the primary direction, not to replace full interpretation.'}
};
function renderCheatSheet(topicText){
  const host=$('topic-cheat-sheet');if(!host)return;
  const sheet=CHEAT_SHEETS[topicText];
  const image=CHEAT_SHEET_IMAGES.find(item=>item.match.test(topicText));
  const googleUrl='https://www.google.com/search?tbm=isch&q='+encodeURIComponent(topicText+' nursing NCLEX cheat sheet');
  const sections=sheet?[
    ['Clinical focus',sheet.focus],
    ['Priority cues',sheet.cues],
    ['Nursing priorities',sheet.actions],
    ['Red flags',sheet.red],
    ['NCLEX memory cue',sheet.memory]
  ]:[
    ['Clinical focus','Review the pathophysiology and distinguish expected findings from signs of deterioration.'],
    ['Priority cues',['Identify the most important assessment findings for '+topicText+'.','Trend vital signs, relevant laboratory results and response to treatment.','Compare current findings with baseline and the patient’s risk factors.']],
    ['Nursing priorities',['Assess airway, breathing, circulation and immediate safety.','Use current evidence, local policy and the prescribed plan of care.','Reassess after interventions and escalate unexpected deterioration.']],
    ['NCLEX memory cue','Prioritize unstable patients, acute changes, safety threats and time-sensitive interventions. Verify topic-specific thresholds and protocols with current references.']
  ];
  const htmlSections=sections.map(([heading,body])=>'<section class="cheat-section"><h4>'+safe(heading)+'</h4>'+(Array.isArray(body)?'<ul>'+body.map(item=>'<li>'+safe(item)+'</li>').join('')+'</ul>':'<p>'+safe(body)+'</p>')+'</section>').join('');
  const imageHtml=image?'<a class="cheat-image-link" href="'+safe(image.url)+'" target="_blank" rel="noopener noreferrer"><img src="'+safe(image.src)+'" alt="'+safe(image.title)+' reference sheet" loading="lazy"><span>Image reference: '+safe(image.source)+' · Open source</span></a>':'<div class="cheat-image-empty"><i class="fa-regular fa-image"></i><span>No topic-specific image preview is curated yet. Search Google Images for visual references.</span></div>';
  host.innerHTML='<div class="flex flex-wrap items-center justify-between gap-2"><div><p class="text-[11px] font-bold uppercase tracking-wider text-teal-700">Topic quick sheet</p><h3 class="text-lg font-extrabold">'+safe(topicText)+'</h3></div><a class="cheat-google-link" href="'+safe(googleUrl)+'" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google"></i> Google Images</a></div><div class="cheat-sheet-grid">'+imageHtml+'<div class="cheat-sections">'+htmlSections+'</div></div><p class="cheat-disclaimer">Study aid only. Confirm medication doses, laboratory ranges, obstetric/pediatric thresholds and emergency actions against current institutional guidance and authoritative references.</p>';
}

function updateLearningFlow(step,message){document.querySelectorAll('[data-flow-step]').forEach(el=>{const n=Number(el.dataset.flowStep);el.classList.toggle('is-current',n===step);el.classList.toggle('is-complete',n<step);});const status=$('learning-flow-status');if(status)status.textContent='Step '+step+' of 4 · '+message;}
function playTopicPlaylist(topicText){updateLearningFlow(3,'Topic selected. Choose a channel to start the lesson.');renderProviderButtons();$('player-caption').textContent='Choose a channel to check whether a verified lesson is available for '+topicText+'.';showVideoMessage('Topic selected: '+topicText+'. Choose your preferred channel below to continue.');}
// Event Listeners
$('system-list').addEventListener('click',e=>{const summary=e.target.closest('summary');if(summary){updateLearningFlow(2,'Body system selected. Now choose a topic from its list.');}const b=e.target.closest('[data-topic]');if(b)selectTopic(b.dataset.topic);});




$('save-notes').addEventListener('click',saveNotes);
$('topic-notes').addEventListener('input',()=>{if(topic){const n=loadNotes();n[topic]=$('topic-notes').value;localStorage.setItem(noteKey(),JSON.stringify(n));}});

const exportNotes=$('export-notes');
if(exportNotes)exportNotes.addEventListener('click',()=>{const blob=new Blob([$('topic-notes').value],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(topic||'QuickRN-study-notes').replace(/[^a-z0-9]+/gi,'-')+'.txt';a.click();URL.revokeObjectURL(a.href);});

$('voice-notes').addEventListener('click',()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){$('voice-status').textContent='Speech recognition is not supported in this browser. Try Chrome or Edge.';return;}
  if(recognition){recognition.stop();recognition=null;$('voice-notes').innerHTML='<i class="fa-solid fa-microphone mr-1"></i>Dictate notes';return;}
  recognition=new SR();recognition.continuous=true;recognition.interimResults=true;recognition.lang='en-US';
  const initial=$('topic-notes').value;
  recognition.onresult=e=>{let finalText='',interim='';for(let i=e.resultIndex;i<e.results.length;i++){const text=e.results[i][0].transcript;if(e.results[i].isFinal)finalText+=text+' ';else interim+=text;}$('topic-notes').value=initial+(initial?'\n':'')+finalText+(interim?'\n'+interim:'');if(finalText)saveNotes();};
  recognition.onerror=e=>{$('voice-status').textContent='Speech recognition: '+e.error;};
  recognition.onend=()=>{recognition=null;$('voice-notes').innerHTML='<i class="fa-solid fa-microphone mr-1"></i>Dictate notes';};
  recognition.start();$('voice-notes').innerHTML='<i class="fa-solid fa-stop mr-1"></i>Stop dictation';$('voice-status').textContent='Listening…';
});

renderSystems();
renderProviderButtons();
const requestedTopic=new URLSearchParams(window.location.search).get('topic');
if(requestedTopic)selectTopic(requestedTopic);
})();
