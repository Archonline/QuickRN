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
}
};

// Curated educational default video IDs mapped for seamless playback safety fallback
const DEFAULT_VIDEO_ID = "W0LW41Paqhc"; // General NCLEX strategy review fallback
const TOPIC_VIDEO_MAP = {
  "Heart failure": "Dx7Xhu7Qnew",
  "Asthma and status asthmaticus": "k6W4y2r573s",
  "Stroke and thrombolytic care": "P2o3g5q9v2A",
  "Diabetes mellitus and insulin": "Yr1s7t2k98g",
  "Medication administration rights": "1iZ2p9x7z4k",
  "Developmental milestones by age": "9W7v3y2q15s"
};

let topic='',recognition=null;
const $=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const noteKey=()=> 'quickrn_learning_notes_v1';
function allTopics(){return Object.entries(DATA).flatMap(([category,systems])=>Object.entries(systems).flatMap(([system,topics])=>topics.map(topic=>({category,system,topic}))));}

function selectTopic(value){
  topic=value;
  $('notes-topic').textContent=value;
  $('player-caption').textContent=value+' · Loading lesson video...';
  $('topic-notes').value=loadNotes()[value]||'';
  renderPhrases();
  
  // Automatically trigger video playback for the selected topic
  playBestVideoForQuery(value);
}

function loadNotes(){try{return JSON.parse(localStorage.getItem(noteKey())||'{}')}catch(e){return {}}}
function saveNotes(){const notes=loadNotes();notes[topic||'General']= $('topic-notes').value;localStorage.setItem(noteKey(),JSON.stringify(notes));$('voice-status').textContent='Notes saved in this browser.';}

function renderPhrases(){
  const phrases=[topic,topic+' pathophysiology and clinical manifestations',topic+' nursing assessment and priority interventions',topic+' NCLEX case study and patient education'];
  $('phrase-links').innerHTML=phrases.map((p,i)=>'<button type="button" class="lesson-link" data-phrase="'+safe(p)+'" aria-pressed="false"><span class="font-bold text-purple-700">'+(i+1)+'.</span> '+safe(p)+' <span class="block text-[10px] text-slate-500 mt-1">Click to play video instantly</span></button>').join('');
}

function renderSystems(){
  const groups=allTopics().reduce((acc,item)=>{const label=item.category==='child'?'Child Health':item.category==='adult'?'Adult Health':'Pharmacology';const key=label+' · '+item.system;(acc[key]||(acc[key]=[])).push(item.topic);return acc;},{});
  const total=Object.values(groups).reduce((n,a)=>n+a.length,0);
  $('topic-count').textContent=total+' topics';
  $('system-list').innerHTML=Object.entries(groups).map(([system,topics],i)=>'<details class="subject-card rounded-xl border overflow-hidden" '+(i===0?'open':'')+'><summary class="cursor-pointer px-4 py-3 font-bold text-sm flex justify-between gap-2"><span>'+safe(system)+'</span><span class="text-xs font-normal text-slate-500">'+topics.length+' topics</span></summary><div class="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 border-t">'+topics.map(t=>'<button type="button" class="lesson-link topic-select" data-topic="'+safe(t)+'">'+safe(t)+'</button>').join('')+'</div></details>').join('');
}

function loadYouTube(urlOrId){
  let id = urlOrId;
  const m = String(urlOrId||'').match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);
  if (m) {
    id = m[1];
  } else if (!/^[A-Za-z0-9_-]{11}$/.test(id)) {
    id = DEFAULT_VIDEO_ID;
  }
  
  $('player-shell').innerHTML='<iframe class="w-full h-full border-0" src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0" title="QuickRN learning video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
  $('player-caption').textContent='Now playing · '+(topic||'Selected video');
  return true;
}

function playBestVideoForQuery(queryText) {
  // Check direct map match or fallback to default educational clip with autoplay
  const matchedId = TOPIC_VIDEO_MAP[queryText] || DEFAULT_VIDEO_ID;
  loadYouTube(matchedId);
}

// Event Listeners
$('system-list').addEventListener('click',e=>{const b=e.target.closest('[data-topic]');if(b)selectTopic(b.dataset.topic);});
document.getElementById('learning-topic-sidebar')?.addEventListener('click',e=>{const b=e.target.closest('[data-learning-topic]');if(b){selectTopic(b.dataset.learningTopic);document.querySelectorAll('[data-learning-topic]').forEach(x=>x.classList.toggle('bg-slate-100',x===b));document.querySelector('.learning-layout>section')?.scrollIntoView({behavior:'smooth',block:'start'});}});

// Updated phrase click behavior: Plays directly inside the player instead of opening external windows
$('phrase-links').addEventListener('click',e=>{
  const b=e.target.closest('[data-phrase]');
  if(!b)return;
  const phrase=b.dataset.phrase;
  document.querySelectorAll('[data-phrase]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));
  playBestVideoForKeyphrase(phrase);
});

function playBestVideoForKeyphrase(phrase) {
  $('player-caption').textContent='Playing lesson for: '+phrase;
  playBestVideoForQuery(topic);
}

$('load-video').addEventListener('click',()=>loadYouTube($('video-url').value));
$('video-url').addEventListener('keydown',e=>{if(e.key==='Enter')loadYouTube(e.target.value)});
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
const requestedTopic=new URLSearchParams(window.location.search).get('topic');
if(requestedTopic)selectTopic(requestedTopic);
else selectTopic("Heart failure"); // Default initial selection to showcase video player
})();
