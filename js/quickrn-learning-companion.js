/* QuickRN Learning Companion: structured teaching, evidence links, embedded topic video and video notes. */
(function(w,d){
 'use strict';
 const $=id=>d.getElementById(id);
 const esc=s=>String(s==null?'':s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const key=q=>'quickrn-video-notes:'+String(q&&q.id||q&&q.topic||'general');
 const topic=q=>String(q&&(q.topic||q.subcategory||q.category||q.title)||'NCLEX nursing review').replace(/<[^>]*>/g,' ').trim();
 function references(q){
  const t=encodeURIComponent(topic(q));
  return [
   {label:'NCSBN — NCLEX and Clinical Judgment',url:'https://www.ncsbn.org/exams/nclex.page'},
   {label:'PubMed — topic-specific clinical literature',url:'https://pubmed.ncbi.nlm.nih.gov/?term='+t},
   {label:'MedlinePlus — patient-care background',url:'https://medlineplus.gov/search/?query='+t}
  ];
 }
 function teaching(q){
  const old=$('qr-learning-companion');if(old)old.remove();
  const host=$('rationale-section');if(!host||host.classList.contains('hidden'))return;
  const rationale=String(q&& (q.rationale||q.explanation||q.detailedRationale)||'').trim();
  const correct=q&&(q.correctAnswerText??q.correctAnswer??q.correctAnswers??q.correctHighlights??q.correctNumericAnswer);
  const options=Array.isArray(q&&q.options)?q.options:[];
  const distractors=options.filter(o=>{const v=typeof o==='string'?o:(o.text||o.label||o.value||'');const c=Array.isArray(correct)?correct:[correct];return !c.some(x=>String(x)===String(v));});
  const box=d.createElement('section');box.id='qr-learning-companion';box.className='mt-4 rounded-xl border border-sky-200 bg-sky-50 p-4 space-y-3';
  box.innerHTML='<div class="flex items-center justify-between gap-2 flex-wrap"><h4 class="font-bold text-slate-900 text-sm"><i class="fa-solid fa-graduation-cap text-sky-700 mr-2"></i>Clinical reasoning companion</h4><span class="text-[10px] uppercase tracking-wide font-bold text-sky-800">Study mode</span></div>'+
   '<div><p class="text-xs font-bold text-slate-500 uppercase mb-1">Why this matters</p><p class="text-sm text-slate-700 leading-relaxed">'+esc(rationale||'Review the clinical cues, identify the immediate safety risk, and connect the findings to the nursing action.')+'</p></div>'+
   '<div><p class="text-xs font-bold text-slate-500 uppercase mb-1">Clinical judgment sequence</p><ol class="list-decimal pl-5 text-sm text-slate-700 space-y-1"><li><b>Recognize cues:</b> Identify abnormal, new, and worsening findings in the record.</li><li><b>Analyze cues:</b> Link the findings to the underlying pathophysiology and likely complication.</li><li><b>Prioritize hypotheses:</b> Address threats to airway, breathing, circulation, and immediate safety first.</li><li><b>Take action and evaluate:</b> Choose a safe intervention, then reassess the expected response.</li></ol></div>'+
   (distractors.length?'<div><p class="text-xs font-bold text-slate-500 uppercase mb-1">Distractor check</p><p class="text-sm text-slate-700">Do not choose an option simply because it is true. Ask whether it addresses the priority problem now. Reassess options that delay escalation, ignore deterioration, or introduce avoidable risk.</p></div>':'')+
   '<div><p class="text-xs font-bold text-slate-500 uppercase mb-1">Further reading</p><div class="flex flex-wrap gap-x-4 gap-y-2 text-xs">'+references(q).map(r=>'<a target="_blank" rel="noopener noreferrer" class="text-sky-800 underline" href="'+esc(r.url)+'">'+esc(r.label)+'</a>').join('')+'</div><p class="text-[11px] text-slate-500 mt-2">These are topic-specific reference searches, not a substitute for educator review or patient-specific clinical guidance.</p></div>';
  host.appendChild(box);
 }
 function videoItems(q){
  try{const api=w.QuickRNYoutube;if(api&&typeof api.getTwoVideos==='function')return api.getTwoVideos(q)||[];}catch(e){}
  const t=topic(q);return [{title:t+' — nursing review',embedUrl:'https://www.youtube.com/embed?listType=search&list='+encodeURIComponent(t+' nursing review')}];
 }
 function ensureModal(){
  if($('qr-video-study-modal'))return;
  const m=d.createElement('div');m.id='qr-video-study-modal';m.className='hidden fixed inset-0 z-[100] bg-slate-950/80 p-3 sm:p-6 items-center justify-center';
  m.innerHTML='<div class="w-full max-w-6xl max-h-[94vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"><header class="sticky top-0 z-10 flex items-center justify-between gap-3 p-4 border-b bg-white"><div><p class="text-[10px] uppercase tracking-widest text-sky-700 font-bold">QuickRN Video Study Room</p><h3 id="qr-video-title" class="font-bold text-slate-900">Topic video</h3></div><button type="button" id="qr-video-close" class="rounded-lg px-3 py-2 bg-slate-100 hover:bg-slate-200" aria-label="Close video">✕</button></header><div class="grid lg:grid-cols-[minmax(0,1.7fr)_minmax(260px,0.8fr)] gap-4 p-4"><div><div class="aspect-video bg-slate-950 rounded-xl overflow-hidden"><iframe id="qr-video-frame" class="w-full h-full" title="NCLEX topic video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p id="qr-video-caption" class="text-xs text-slate-500 mt-2">Topic-matched video search. Choose a relevant result in the player.</p></div><aside class="rounded-xl border border-slate-200 p-3 flex flex-col min-h-[300px]"><div class="flex items-center justify-between"><h4 class="font-bold text-slate-900">My video notes</h4><span class="text-[10px] text-emerald-700" id="qr-video-save-status">Saved locally</span></div><p class="text-xs text-slate-500 mt-1">Notes are saved in this browser and linked to this question.</p><textarea id="qr-video-notes" class="mt-3 w-full flex-1 min-h-[240px] resize-y border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none" placeholder="Key points, memory cues, questions to review…"></textarea><div class="flex gap-2 mt-3"><button type="button" id="qr-video-copy" class="px-3 py-2 text-xs font-semibold rounded-lg border">Copy notes</button><button type="button" id="qr-video-download" class="px-3 py-2 text-xs font-semibold rounded-lg bg-sky-700 text-white">Download notes</button></div></aside></div></div>';
  d.body.appendChild(m);
  const close=()=>{m.classList.add('hidden');m.classList.remove('flex');$('qr-video-frame').src='about:blank';};
  $('qr-video-close').addEventListener('click',close);
  m.addEventListener('click',e=>{if(e.target===m)close();});
  d.addEventListener('keydown',e=>{if(e.key==='Escape'&&!m.classList.contains('hidden'))close();});
  $('qr-video-notes').addEventListener('input',()=>{const q=w.quickRNCurrentQuestion||{};try{localStorage.setItem(key(q),$('qr-video-notes').value);$('qr-video-save-status').textContent='Saved';}catch(e){$('qr-video-save-status').textContent='Unable to save';}});
  $('qr-video-copy').addEventListener('click',()=>{const t=$('qr-video-notes').value;if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(t);});
  $('qr-video-download').addEventListener('click',()=>{const q=w.quickRNCurrentQuestion||{},blob=new Blob([$('qr-video-notes').value],{type:'text/plain'}),url=URL.createObjectURL(blob),a=d.createElement('a');a.href=url;a.download='QuickRN-notes-'+String(q.id||'video').replace(/[^a-z0-9_-]/gi,'-')+'.txt';a.click();URL.revokeObjectURL(url);});
 }
 function openVideo(){
  const q=w.quickRNCurrentQuestion||{},items=videoItems(q),first=items[0]||{},id=first.videoId||first.id||'';
  let src=first.embedUrl|| (id?'https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id):'');
  if(!src&&first.url){const match=String(first.url).match(/[?&]v=([A-Za-z0-9_-]{11})/);if(match)src='https://www.youtube-nocookie.com/embed/'+match[1];}
  if(!src)src='https://www.youtube.com/embed?listType=search&list='+encodeURIComponent(topic(q)+' nursing review');
  ensureModal();$('qr-video-title').textContent=topic(q)+' — Video Review';$('qr-video-caption').textContent=first.title||'Topic-matched video results';$('qr-video-frame').src=src;
  try{$('qr-video-notes').value=localStorage.getItem(key(q))||'';}catch(e){$('qr-video-notes').value='';}
  $('qr-video-save-status').textContent='Saved locally';const m=$('qr-video-study-modal');m.classList.remove('hidden');m.classList.add('flex');
 }
 function addVideoButton(){
  const host=$('video-resources');if(!host||host.querySelector('[data-qr-video-open]'))return;
  host.innerHTML='<div class="flex items-center justify-between gap-3 flex-wrap"><div><p class="text-xs font-bold uppercase tracking-wide text-slate-500">Continue learning</p><p class="text-sm text-slate-700">Watch a focused review for <b>'+esc(topic(w.quickRNCurrentQuestion||{}))+'</b>.</p></div><button type="button" data-qr-video-open class="px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-700"><i class="fa-solid fa-play mr-2"></i>Watch topic video + take notes</button></div>';
  host.querySelector('[data-qr-video-open]').addEventListener('click',openVideo);
 }
 function refresh(){
  const q=w.quickRNCurrentQuestion;if(!q)return;
  const r=$('rationale-section');if(r&&!r.classList.contains('hidden')){teaching(q);addVideoButton();}
 }
 function start(){
  ensureModal();
  const target=$('rationale-section');if(target)new MutationObserver(refresh).observe(target,{attributes:true,attributeFilter:['class'],childList:true,subtree:true});
  const video=$('video-resources');if(video)new MutationObserver(()=>{if($('rationale-section')&&!$('rationale-section').classList.contains('hidden'))addVideoButton();}).observe(video,{childList:true,subtree:true});
  refresh();
 }
 if(d.readyState==='loading')d.addEventListener('DOMContentLoaded',start);else start();
 w.QuickRNLearningCompanion={refresh,openVideo};
})(window,document);
