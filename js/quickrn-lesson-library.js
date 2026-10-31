/* QuickRN subject and video lesson library. Uses YouTube search links rather than fabricated video IDs. */
(function(root){
 'use strict';
 const subjects=[
  {name:'Fundamentals',icon:'fa-kit-medical',topics:['Nursing process and clinical judgment','Safety and infection prevention','Vital signs and assessment','Medication administration']},
  {name:'Adult Health',icon:'fa-heart-pulse',topics:['Cardiovascular disorders','Respiratory disorders','Endocrine disorders','Renal and neurologic disorders']},
  {name:'Pharmacology',icon:'fa-pills',topics:['Medication safety and calculations','Cardiac medications','Antibiotics and anti-infectives','Insulin and endocrine medications']},
  {name:'Maternal & Newborn',icon:'fa-baby',topics:['Antepartum complications','Labor and delivery','Postpartum nursing','Newborn assessment']},
  {name:'Child Health',icon:'fa-child',topics:['Growth and development','Pediatric respiratory disorders','Pediatric cardiac disorders','Pediatric emergencies']},
  {name:'Mental Health',icon:'fa-brain',topics:['Therapeutic communication','Mood and anxiety disorders','Psychosis and schizophrenia','Substance use and crisis care']},
  {name:'Leadership',icon:'fa-users',topics:['Delegation and assignment','Prioritization and triage','Ethics and legal responsibilities','Quality improvement and safety']}
 ];
 const searchUrl=topic=>'https://www.youtube.com/results?search_query='+encodeURIComponent('NCLEX RN '+topic+' nursing lecture');
 function renderSubjectLessonLibrary(){
  const host=document.getElementById('quickrn-subject-library');if(!host)return;
  host.innerHTML=subjects.map((subject,index)=>'<details class="group rounded-lg border border-slate-200 bg-white overflow-hidden" '+(index===0?'open':'')+'><summary class="cursor-pointer list-none flex items-center justify-between gap-2 px-3 py-2 hover:bg-slate-50"><span class="flex items-center gap-2 min-w-0"><i class="fa-solid '+subject.icon+' text-emerald-600 w-4 text-center"></i><strong class="text-xs text-slate-800">'+subject.name+'</strong></span><span class="text-[10px] text-slate-400">'+subject.topics.length+' lessons <i class="fa-solid fa-chevron-down ml-1"></i></span></summary><div class="border-t border-slate-100 p-2 grid grid-cols-1 gap-1">'+subject.topics.map(topic=>'<a target="_blank" rel="noopener noreferrer" href="'+searchUrl(topic)+'" class="flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-[11px] text-slate-700 hover:bg-emerald-50 hover:text-emerald-800"><span>'+topic+'</span><span class="shrink-0 text-red-600"><i class="fa-brands fa-youtube"></i> Watch</span></a>').join('')+'</div></details>').join('');
 }
 root.renderSubjectLessonLibrary=renderSubjectLessonLibrary;
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',renderSubjectLessonLibrary);else renderSubjectLessonLibrary();
})(window);
