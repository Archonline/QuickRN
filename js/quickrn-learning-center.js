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

// Video playback uses topic-specific YouTube search instead of unverified IDs.

let topic='',recognition=null,videoRequest=0;
const $=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const noteKey=()=> 'quickrn_learning_notes_v1';
function allTopics(){return Object.entries(DATA).flatMap(([category,systems])=>Object.entries(systems).flatMap(([system,topics])=>topics.map(topic=>({category,system,topic}))));}

function selectTopic(value){
  topic=value;
  $('notes-topic').textContent=value;
  $('topic-notes').value=loadNotes()[value]||'';
  renderPhrases();
  playBestVideoForQuery(value);
}

function loadNotes(){try{return JSON.parse(localStorage.getItem(noteKey())||'{}')}catch(e){return {}}}
function saveNotes(){const notes=loadNotes();notes[topic||'General']= $('topic-notes').value;localStorage.setItem(noteKey(),JSON.stringify(notes));$('voice-status').textContent='Notes saved in this browser.';}

function renderPhrases(){
  const phrases=[topic,topic+' pathophysiology and clinical manifestations',topic+' nursing assessment and priority interventions',topic+' NCLEX case study and patient education'];
  $('phrase-links').innerHTML=phrases.map((p,i)=>'<button type="button" class="lesson-link" data-phrase="'+safe(p)+'" aria-pressed="false"><span class="font-bold text-purple-700">'+(i+1)+'.</span> '+safe(p)+' <span class="block text-[10px] text-slate-500 mt-1">Search YouTube for this lesson</span></button>').join('');
}

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

async function playBestVideoForQuery(queryText) {
  const requestId=++videoRequest;
  showVideoMessage('Finding a playable lesson for '+queryText+'…');
  $('player-caption').textContent='Loading a verified YouTube lesson · '+queryText;
  try{
    const response=await fetch('/api/youtube-search?q='+encodeURIComponent(queryText),{headers:{'Accept':'application/json'}});
    const data=await response.json().catch(()=>({}));
    if(requestId!==videoRequest)return;
    if(!response.ok||!data.videoId){
      showVideoMessage(data.error||'No playable video is available for this topic yet.');
      $('player-caption').textContent='Video unavailable · '+queryText;
      return;
    }
    const id=String(data.videoId);
    if(!/^[A-Za-z0-9_-]{11}$/.test(id)){
      showVideoMessage('YouTube returned an invalid video ID.');
      return;
    }
    $('player-shell').style.position='relative';
    $('player-shell').innerHTML='<iframe class="w-full h-full border-0" src="https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&mute=1&playsinline=1&rel=0" title="'+safe(data.title||queryText)+'" allow="autoplay; encrypted-media; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    $('player-caption').textContent=(data.title||queryText)+' · '+(data.channel||'YouTube')+' · Autoplay starts muted; unmute in the player.';
  }catch(error){
    if(requestId!==videoRequest)return;
    showVideoMessage('Could not load a lesson video. Please try selecting the topic again.');
    $('player-caption').textContent='Unable to connect to YouTube.';
  }
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
  playBestVideoForQuery(phrase);
});




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
else selectTopic("Heart failure"); // Automatically load a verified, embeddable lesson
})();
