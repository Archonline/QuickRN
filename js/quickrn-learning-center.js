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

// Curated RegisteredNurseRN lecture playlists (not the channel uploads feed).
// Playlist IDs are linked from the educator's nursing video index.
const VIDEO_PLAYLISTS={
  general:{name:'NCLEX Review Lectures',id:'PLQrdx7rRsKfWwTsEG3KPPQx9rWa8AqMIk'},
  pediatric:{name:'Pediatric Nursing',id:'PLQrdx7rRsKfXmfA3CoozS5N767bLpnrbm'},
  fundamentals:{name:'Nursing Fundamentals',id:'PLQrdx7rRsKfV7rYMLXUs8L8IJAbDecClE'},
  cardiovascular:{name:'Medical-Surgical Cardiovascular',id:'PLQrdx7rRsKfUB0GvScYEb9ILzg5mZQ7m7'},
  renal:{name:'Medical-Surgical Renal',id:'PLQrdx7rRsKfUBQ80h1YhmXlnMCv7tJPsL'},
  respiratory:{name:'Medical-Surgical Respiratory',id:'PLQrdx7rRsKfUumcstoW1ru6t8onTa5rGL'},
  endocrine:{name:'Medical-Surgical Endocrine',id:'PLQrdx7rRsKfVqW-S8Lj7cHEI1Cyh8y6qP'},
  pharmacology:{name:'Nursing Pharmacology',id:'PLQrdx7rRsKfWpel1Ymwd9IQe0noyzAjeS'},
  medication:{name:'Medication Administration',id:'PLQrdx7rRsKfWnUmBHphXkW4m4aiRTIzkG'},
  maternity:{name:'Maternity Nursing',id:'PLQrdx7rRsKfXiZ3a-IbRaUJXMa8mXyuOL'},
  ekg:{name:'EKG/ECG Interpretation',id:'PLQrdx7rRsKfU-A9UTclI0tOYrNJ1N5SNt'},
  fluids:{name:'Fluid and Electrolytes',id:'PLQrdx7rRsKfWJSZ9pL8L3Q1dzdlxUzeKv'}
};
function recommendedPlaylist(topicName){
  const item=allTopics().find(x=>x.topic===topicName);
  const text=(topicName+' '+(item?.system||'')).toLowerCase();
  if(item?.category==='child')return 'pediatric';
  if(item?.category==='pharm')return /medication|dosage|administration|safety|reconciliation/.test(text)?'medication':'pharmacology';
  if(/ecg|ekg|dysrhythmia|arrhythmia/.test(text))return 'ekg';
  if(/fluid|electrolyte|dehydration|sodium|potassium/.test(text))return 'fluids';
  if(/maternity|pregnan|newborn|obstetric/.test(text))return 'maternity';
  if(/cardiovascular|heart|cardiac|hypertension|coronary/.test(text))return 'cardiovascular';
  if(/renal|urinary|kidney|dialysis/.test(text))return 'renal';
  if(/respiratory|copd|asthma|pneumonia|pulmonary/.test(text))return 'respiratory';
  if(/endocrine|diabetes|thyroid|adrenal|dk[a-z]/.test(text))return 'endocrine';
  if(/fundamental|assessment|vital signs|infection control/.test(text))return 'fundamentals';
  return 'general';
};

let topic='',recognition=null;
const $=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const noteKey=()=> 'quickrn_learning_notes_v1';
function allTopics(){return Object.entries(DATA).flatMap(([category,systems])=>Object.entries(systems).flatMap(([system,topics])=>topics.map(topic=>({category,system,topic}))));}

function selectTopic(value){
  topic=value;
  $('notes-topic').textContent=value;
  $('topic-notes').value=loadNotes()[value]||'';
  playTopicPlaylist(value);
}

function loadNotes(){try{return JSON.parse(localStorage.getItem(noteKey())||'{}')}catch(e){return {}}}
function saveNotes(){const notes=loadNotes();notes[topic||'General']= $('topic-notes').value;localStorage.setItem(noteKey(),JSON.stringify(notes));$('voice-status').textContent='Notes saved in this browser.';}

function renderSystems(){
  const groups=allTopics().reduce((acc,item)=>{const label=item.category==='child'?'Child Health':item.category==='adult'?'Adult Health':'Pharmacology';const key=label+' · '+item.system;(acc[key]||(acc[key]=[])).push(item.topic);return acc;},{});
  const total=Object.values(groups).reduce((n,a)=>n+a.length,0);
  $('topic-count').textContent=total+' topics';
  $('system-list').innerHTML=Object.entries(groups).map(([system,topics],i)=>'<details class="subject-card rounded-xl border overflow-hidden" '+(i===0?'open':'')+'><summary class="cursor-pointer px-4 py-3 font-bold text-sm flex justify-between gap-2"><span>'+safe(system)+'</span><span class="text-xs font-normal text-slate-500">'+topics.length+' topics</span></summary><div class="grid grid-cols-1 sm:grid-cols-2 gap-2 p-3 border-t">'+topics.map(t=>'<button type="button" class="lesson-link topic-select" data-topic="'+safe(t)+'">'+safe(t)+'</button>').join('')+'</div></details>').join('');
}

function showVideoMessage(message){
  $('player-shell').style.position='relative';
  $('player-shell').innerHTML='<div class="w-full h-full flex flex-col items-center justify-center gap-2 p-5 text-center text-white"><i class="fa-brands fa-youtube text-4xl text-red-500"></i><p class="text-sm font-semibold">'+safe(message)+'</p></div>';
}

function playTopicPlaylist(topicText) {
  const playlistKey=recommendedPlaylist(topicText);
  const playlist=VIDEO_PLAYLISTS[playlistKey]||VIDEO_PLAYLISTS.general;
  const embedUrl='https://www.youtube-nocookie.com/embed/videoseries?list='+playlist.id+'&autoplay=1&mute=1&playsinline=1&rel=0';
  $('player-shell').style.position='relative';
  $('player-shell').innerHTML='<iframe class="w-full h-full border-0" src="'+embedUrl+'" title="'+safe(playlist.name)+' nursing lecture playlist" allow="autoplay; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
  $('player-caption').textContent='Curated full-lesson playlist: '+playlist.name+' · Topic: '+topicText+'. Autoplay starts muted; select a lesson in the playlist if needed.';
}
// Event Listeners
$('system-list').addEventListener('click',e=>{const b=e.target.closest('[data-topic]');if(b)selectTopic(b.dataset.topic);});
document.getElementById('learning-topic-sidebar')?.addEventListener('click',e=>{const b=e.target.closest('[data-learning-topic]');if(b){selectTopic(b.dataset.learningTopic);document.querySelectorAll('[data-learning-topic]').forEach(x=>x.classList.toggle('bg-slate-100',x===b));document.querySelector('.learning-layout>section')?.scrollIntoView({behavior:'smooth',block:'start'});}});



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
else selectTopic("Heart failure"); // Load a curated long-form nursing lecture playlist
})();
