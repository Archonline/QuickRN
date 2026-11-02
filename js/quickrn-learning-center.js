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

// Only verified, topic-specific video IDs belong in this catalog.
// Missing entries intentionally show an unavailable placeholder instead of unrelated content.
const VIDEO_PROVIDERS=[
  {id:'registerednursern',label:'RegisteredNurseRN'},
  {id:'simplenursing',label:'Simple Nursing'},
  {id:'picmonic',label:'Picmonic'}
];
const TOPIC_VIDEOS={};
let selectedProvider='registerednursern';
function showVideoMessage(message){
  $('player-shell').innerHTML='<div class="w-full h-full min-h-48 flex flex-col items-center justify-center gap-2 p-5 text-center text-white"><i class="fa-solid fa-circle-play text-4xl text-slate-400"></i><p class="text-sm font-semibold">'+safe(message)+'</p></div>';
}
function renderProviderButtons(topicText){
  const host=$('video-provider-controls');
  if(!host)return;
  host.innerHTML=VIDEO_PROVIDERS.map(provider=>'<button type="button" class="video-provider-button'+(provider.id===selectedProvider?' is-selected':'')+'" data-provider="'+provider.id+'" aria-pressed="'+(provider.id===selectedProvider?'true':'false')+'">'+safe(provider.label)+'</button>').join('');
  host.querySelectorAll('[data-provider]').forEach(button=>button.addEventListener('click',()=>{
    selectedProvider=button.dataset.provider;
    renderProviderButtons(topicText);
    loadTopicVideo(topicText,selectedProvider);
  }));
}
function loadTopicVideo(topicText,providerId){
  const lesson=allTopics().find(x=>x.topic===topicText);
  const canonical=lesson?lesson.topic:topicText;
  const videoId=TOPIC_VIDEOS[canonical]&&TOPIC_VIDEOS[canonical][providerId];
  if(!videoId){
    showVideoMessage('Video not available for this topic from '+(VIDEO_PROVIDERS.find(p=>p.id===providerId)?.label||'this provider')+'. Please select another provider.');
    $('player-caption').textContent='No verified video available for: '+canonical;
    return;
  }
  // A catalog entry must be a verified YouTube video ID; playback starts automatically.
  $('player-shell').innerHTML='<iframe class="w-full h-full min-h-48" src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(videoId)+'?autoplay=1&rel=0" title="'+safe(canonical)+' - '+safe(providerId)+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
  $('player-caption').textContent='Now playing: '+canonical+' · '+(VIDEO_PROVIDERS.find(p=>p.id===providerId)?.label||providerId);
}
function playTopicPlaylist(topicText){
  const lesson=allTopics().find(x=>x.topic===topicText);
  const exactTopic=lesson?lesson.topic:topicText;
  renderProviderButtons(exactTopic);
  loadTopicVideo(exactTopic,selectedProvider);
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
