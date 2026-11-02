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

// Provider-specific searches are built from the exact selected lesson topic.
// Search results are opened on the provider site; no API key or scraping is required.
const VIDEO_PROVIDERS=[
  {id:'registerednursern',label:'RegisteredNurseRN',kind:'youtube',query:'RegisteredNurseRN'},
  {id:'simplenursing',label:'Simple Nursing',kind:'youtube',query:'SimpleNursing'},
  {id:'picmonic',label:'Picmonic',kind:'web',query:'site:picmonic.com nursing'}
];
function providerSearchUrl(provider,topicName){
  const lesson=topicName+' nursing';
  const q=provider.kind==='youtube'?provider.query+' '+lesson:provider.query+' '+lesson;
  const base=provider.kind==='youtube'?'https://www.youtube.com/results?search_query=':'https://www.google.com/search?q=';
  return base+encodeURIComponent(q);
}

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
  const lesson=allTopics().find(x=>x.topic===topicText);
  const exactTopic=lesson?lesson.topic:topicText;
  const providerLinks=VIDEO_PROVIDERS.map(provider=>{
    const href=providerSearchUrl(provider,exactTopic);
    return '<a class="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-3 py-2 text-xs font-bold text-slate-700 hover:border-purple-400 hover:text-purple-700" href="'+safe(href)+'" target="_blank" rel="noopener noreferrer">'+safe(provider.label)+' <i class="fa-solid fa-arrow-up-right-from-square ml-1 text-[10px]"></i></a>';
  }).join('');
  $('player-shell').style.position='relative';
  $('player-shell').innerHTML='<div class="w-full h-full min-h-48 flex flex-col items-center justify-center gap-3 p-5 text-center text-white"><i class="fa-brands fa-youtube text-4xl text-red-500"></i><p class="text-base font-bold">'+safe(exactTopic)+'</p><p class="max-w-lg text-xs text-white/70">Choose a provider below to find lessons for this exact topic. Results open on the provider site because their search pages do not support reliable in-page embedding.</p><div class="flex flex-wrap justify-center gap-2">'+providerLinks+'</div></div>';
  $('player-caption').textContent='Video resources for: '+exactTopic;
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
else selectTopic("Heart failure"); // Show topic-matched provider options
})();
