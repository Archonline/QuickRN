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
  {id:'registerednursern',label:'RegisteredNurseRN',query:'RegisteredNurseRN'},
  {id:'simplenursing',label:'Simple Nursing',query:'Simple Nursing'},
  {id:'picmonicvideo',label:'PicmonicVideo',query:'PicmonicVideo'}
];
let selectedProvider=null;
let topic='',recognition=null;
const VIDEO_CATALOG={}; // Add reviewed YouTube video IDs here for in-player autoplay.
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
  playTopicPlaylist(value);
}
function renderSystems(){
  const groups=allTopics().reduce((acc,item)=>{
    const label=item.category==='child'?'Pediatrics':item.category==='adult'?'Adult Health':'Pharmacology';
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
function buildYouTubeSearchUrl(topicText,provider){
  const query=provider.query+' '+topicText+' nursing';
  return 'https://www.youtube.com/results?search_query='+encodeURIComponent(query);
}
function loadTopicVideo(topicText,providerId){
  const provider=VIDEO_PROVIDERS.find(p=>p.id===providerId);
  if(!provider)return;
  updateLearningFlow(4,'Channel selected. Starting a verified matching lesson if available.');
  const videoId=VIDEO_CATALOG[providerId]&&VIDEO_CATALOG[providerId][topicText];
  if(videoId&&/^[A-Za-z0-9_-]{11}$/.test(videoId)){$('player-shell').innerHTML='<iframe class="w-full h-full min-h-48" src="https://www.youtube-nocookie.com/embed/'+videoId+'?autoplay=1&playsinline=1&rel=0" title="'+safe(provider.label)+' — '+safe(topicText)+'" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';$('player-caption').textContent='Now playing: '+provider.label+' · '+topicText;return;}
  const url=buildYouTubeSearchUrl(topicText,provider);
  $('player-shell').innerHTML='<div class="w-full h-full min-h-48 flex flex-col items-center justify-center gap-3 p-6 text-center text-white"><i class="fa-brands fa-youtube text-5xl text-red-500"></i><p class="text-base font-bold">'+safe(provider.label)+' · '+safe(topicText)+'</p><p class="max-w-lg text-sm text-white/75">No verified video is mapped yet. Search YouTube, copy a lesson link, and paste it below to watch inside QuickRN while taking notes.</p><a class="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10" href="'+safe(url)+'" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-youtube"></i>Find a lesson on YouTube</a><form id="quickrn-video-form" class="w-full max-w-xl flex flex-col sm:flex-row gap-2"><input id="quickrn-video-url" type="url" inputmode="url" placeholder="Paste YouTube video URL here" aria-label="YouTube video URL" class="min-w-0 flex-1 rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm text-slate-900 outline-none focus:ring-2 focus:ring-cyan-400"><button type="submit" class="rounded-lg bg-cyan-600 px-4 py-3 text-sm font-bold text-white hover:bg-cyan-500">Play inside QuickRN</button></form><p id="quickrn-video-error" class="text-xs text-rose-300" role="status"></p><p class="text-xs text-white/60">Your Study Notebook stays open beside the player. Some YouTube videos do not allow embedding.</p></div>';
  const videoForm=$('quickrn-video-form');
  if(videoForm)videoForm.addEventListener('submit',event=>{
    event.preventDefault();
    const videoId=extractYouTubeVideoId($('quickrn-video-url').value.trim());
    if(!videoId){$('quickrn-video-error').textContent='Please paste a valid YouTube video link (youtube.com or youtu.be).';return;}
    $('player-shell').innerHTML='<iframe class="w-full h-full min-h-48" src="https://www.youtube-nocookie.com/embed/'+videoId+'?autoplay=1&playsinline=1&rel=0" title="QuickRN lesson video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>';
    $('player-caption').textContent='Playing a YouTube lesson inside QuickRN · '+topicText;
  });
  $('player-caption').textContent='Search YouTube for '+provider.label+' · '+topicText+', then paste a video link to play it here.';
}
function extractYouTubeVideoId(value){
  try{
    const parsed=new URL(value);
    const host=parsed.hostname.replace(/^www\./,'').toLowerCase();
    let id='';
    if(host==='youtu.be')id=parsed.pathname.split('/').filter(Boolean)[0]||'';
    else if(host==='youtube.com'||host==='m.youtube.com'||host==='music.youtube.com'){
      if(parsed.pathname==='/watch')id=parsed.searchParams.get('v')||'';
      else {const parts=parsed.pathname.split('/').filter(Boolean);if(['embed','shorts','live'].includes(parts[0]))id=parts[1]||'';}
    }
    return /^[A-Za-z0-9_-]{11}$/.test(id)?id:'';
  }catch(error){return '';}
}
}
function updateLearningFlow(step,message){document.querySelectorAll('[data-flow-step]').forEach(el=>{const n=Number(el.dataset.flowStep);el.classList.toggle('is-current',n===step);el.classList.toggle('is-complete',n<step);});const status=$('learning-flow-status');if(status)status.textContent='Step '+step+' of 4 · '+message;}
function playTopicPlaylist(topicText){updateLearningFlow(3,'Topic selected. Choose a channel to start the lesson.');renderProviderButtons();$('player-caption').textContent='Choose a channel to play '+topicText+'.';showVideoMessage('Topic selected: '+topicText+'. Choose your preferred channel below to continue.');}
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
