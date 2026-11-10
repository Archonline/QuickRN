/* QuickRN AI question replacement — webmaster-only, on-device generation.
 * Replacements are archived and stored per browser. They are not published to the shared
 * bank until a server-side shared store is configured and a clinician verifies the item.
 */
(function(root){
 'use strict';
 const ADMIN_EMAIL='toughluckstyle@gmail.com';
 const OVERRIDE_KEY='quickrn_ai_question_replacements_v1';
 const ARCHIVE_KEY='quickrn_ai_question_archive_v1';
 const PENDING_KEY='quickrn_ai_question_replacement_queue_v1';
 const MODEL='onnx-community/Qwen2.5-0.5B-Instruct';
 let generator=null,loading=null,busy=false;
 const read=(key,fallback)=>{try{const v=JSON.parse(localStorage.getItem(key)||'null');return v==null?fallback:v;}catch(_){return fallback;}};
 const write=(key,value)=>{try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){console.warn('[QuickRN replacement] Storage unavailable',e);return false;}};
 const isAdmin=()=>{try{return localStorage.getItem('quickrn_signed_out')!=='true'&&(localStorage.getItem('quickrn_user_email')||'').trim().toLowerCase()===ADMIN_EMAIL;}catch(_){return false;}};
 const plain=v=>String(v==null?'':v).replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();
 const formatOf=q=>String(q?.ngnType||q?.type||q?.format||q?.questionType||'Single Choice');
 function applyOverride(raw){
  if(!raw||!raw.id)return raw;
  const replacements=read(OVERRIDE_KEY,{});
  const replacement=replacements[String(raw.id)];
  return replacement&&replacement.question?replacement.question:raw;
 }
 function ensureButton(){
  if(!isAdmin())return;
  const prompt=document.getElementById('question-prompt');
  if(!prompt||document.getElementById('quickrn-ai-replace-button'))return;
  const row=document.createElement('div');row.className='mt-2 flex justify-end';
  row.innerHTML='<button id="quickrn-ai-replace-button" type="button" class="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900 hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"><i class="fa-solid fa-wand-magic-sparkles" aria-hidden="true"></i><span>Mark for AI Replacement</span></button><span id="quickrn-ai-replace-status" class="ml-2 self-center text-xs text-slate-500" aria-live="polite"></span>';
  prompt.insertAdjacentElement('afterend',row);
  row.querySelector('button').addEventListener('click',markAndGenerate);
 }
 function setStatus(message){const el=document.getElementById('quickrn-ai-replace-status');if(el)el.textContent=message;}
 async function loadGenerator(){
  if(generator)return generator;if(loading)return loading;
  loading=(async()=>{const mod=await import('https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1');const pipe=mod.pipeline;mod.env.allowLocalModels=false;mod.env.allowRemoteModels=true;mod.env.useBrowserCache=true;generator=await pipe('text-generation',MODEL,{dtype:navigator.gpu?'q4f16':'q4',device:navigator.gpu?'webgpu':'wasm'});return generator;})();
  try{return await loading;}finally{loading=null;}
 }
 function parseJSON(raw){
  let s=String(raw||'').trim().replace(/^\uFEFF/,'');
  s=s.replace(/^\s*```(?:json)?/i,'').replace(/```\s*$/,'').trim();
  const start=s.indexOf('{'),end=s.lastIndexOf('}');
  if(start<0||end<=start)throw new Error('AI did not return a JSON question record.');
  return JSON.parse(s.slice(start,end+1));
 }
 async function generate(original,reason){
  const model=await loadGenerator();
  const required={id:original.id,type:formatOf(original),difficulty:original.difficulty,topic:original.topic||original.category||original.keyPhrase,clientNeeds:original.clientNeeds||original.clientNeed||original.nclexCategory,question:original.question||original.questionText||original.stem||original.title,options:original.options,correctAnswer:original.correctAnswer||original.answer||original.correct, rationale:original.rationale||original.explanation};
  const prompt='Create one NEW, clinically careful NCLEX-RN practice question to replace the defective item below. Preserve the same question format, client-needs category, topic, and difficulty. Do not copy the stem or merely change names/numbers. Keep the exact data shape needed for the format; include a complete answer key, scoring data for NGN, and a teaching rationale. Never invent unsafe medication doses. Return ONLY one JSON object compatible with the provided source item structure, with the same id. Include all fields needed by this format. Do not add markdown.\nDefect: '+reason+'\nSource item shape and metadata: '+JSON.stringify(required)+'\nFull source item: '+JSON.stringify(original);
  const result=await model([{role:'system',content:'You are a conservative nursing assessment item writer. Clinical safety and internally consistent scoring are mandatory. If uncertain, do not fabricate.'},{role:'user',content:prompt}],{max_new_tokens:1100,do_sample:false,temperature:0.2});
  const generated=result?.[0]?.generated_text;
  const answer=Array.isArray(generated)?generated[generated.length-1]?.content:generated;
  return parseJSON(answer);
 }
 function basicValidate(candidate,original){
  const issues=[];
  if(!candidate||typeof candidate!=='object'||Array.isArray(candidate))issues.push('not an object');
  const stem=plain(candidate.question||candidate.questionText||candidate.stem||candidate.title||candidate.prompt);
  if(stem.length<35)issues.push('question stem is missing or too short');
  if(String(candidate.id)!==String(original.id))issues.push('question ID changed');
  const oldStem=plain(original.question||original.questionText||original.stem||original.title||original.prompt).toLowerCase();
  if(stem.toLowerCase()===oldStem)issues.push('question stem was not replaced');
  const fmt=String(candidate.ngnType||candidate.type||candidate.format||candidate.questionType||'');
  if(formatOf(original).toLowerCase()!==fmt.toLowerCase()&&!fmt.toLowerCase().includes(formatOf(original).toLowerCase())&&!formatOf(original).toLowerCase().includes(fmt.toLowerCase()))issues.push('question format changed');
  if(!plain(candidate.rationale||candidate.explanation))issues.push('rationale missing');
  const options=candidate.options||candidate.choices||candidate.answers;
  const answer=candidate.correctAnswer??candidate.answer??candidate.correct??candidate.answerKey??candidate.correctAnswers;
  if(!options||((Array.isArray(options)&&options.length<2)||(typeof options==='object'&&!Array.isArray(options)&&!Object.keys(options).length)))issues.push('answer options missing');
  if(answer===undefined||answer===null||answer===''||(Array.isArray(answer)&&!answer.length)||(typeof answer==='object'&&!Array.isArray(answer)&&!Object.keys(answer).length))issues.push('answer key missing');
  const schema=root.QuickRNQuestionSchemaV2;
  if(candidate.metadata&&candidate.interaction&&schema&&typeof schema.validate==='function'){
   try{const errors=schema.validate(candidate,0);if(Array.isArray(errors)&&errors.length)issues.push('schema: '+errors.slice(0,4).map(x=>x.code||x.message||String(x)).join(', '));}catch(e){issues.push('schema validation failed');}
  }
  return issues;
 }
 async function markAndGenerate(){
  if(busy)return;
  const original=root.quickRNCurrentQuestion;
  if(!original||!original.id){setStatus('No current question found.');return;}
  busy=true;const button=document.getElementById('quickrn-ai-replace-button');if(button){button.disabled=true;button.classList.add('opacity-50');}
  const reason=window.prompt('Why should this question be replaced? (e.g. malformed, clinically inaccurate, duplicate, poor rationale)')||'Malformed or low-quality item';
  const pending=read(PENDING_KEY,[]);if(!pending.some(x=>String(x.id)===String(original.id)))pending.push({id:String(original.id),status:'generating',reason,markedAt:new Date().toISOString(),format:formatOf(original)});write(PENDING_KEY,pending);
  setStatus('Marked · loading free on-device AI…');
  try{
   const candidate=await generate(original,reason);
   const issues=basicValidate(candidate,original);
   if(issues.length)throw new Error('Replacement failed validation: '+issues.join('; '));
   candidate.id=String(original.id);candidate.replacementOf=String(original.id);candidate.replacementStatus='pending_clinical_review';candidate.aiGenerated=true;candidate.aiGeneratedAt=new Date().toISOString();
   const archived=read(ARCHIVE_KEY,[]);archived.push({id:String(original.id),archivedAt:new Date().toISOString(),reason,original});write(ARCHIVE_KEY,archived);
   const replacements=read(OVERRIDE_KEY,{});replacements[String(original.id)]={question:candidate,status:'pending_clinical_review',reason,replacedAt:new Date().toISOString()};if(!write(OVERRIDE_KEY,replacements))throw new Error('Browser storage is full; replacement was not saved.');
   const queue=read(PENDING_KEY,[]).filter(x=>String(x.id)!==String(original.id));queue.push({id:String(original.id),status:'replacement_generated_pending_clinical_review',reason,markedAt:new Date().toISOString(),replacedAt:new Date().toISOString()});write(PENDING_KEY,queue);
   if(typeof root.QuickRNExamReplaceCurrentQuestion==='function')root.QuickRNExamReplaceCurrentQuestion(candidate);
   setStatus('Replaced in this browser · pending clinical review');
  }catch(error){const queue=read(PENDING_KEY,[]).map(x=>String(x.id)===String(original.id)?{...x,status:'generation_failed',error:String(error.message||error)}:x);write(PENDING_KEY,queue);setStatus('Not replaced · '+String(error.message||error).slice(0,110));}
  finally{busy=false;if(button){button.disabled=false;button.classList.remove('opacity-50');}}
 }
 root.QuickRNQuestionReplacement={applyOverride,markAndGenerate,isAdmin,getQueue:()=>read(PENDING_KEY,[]),getArchive:()=>read(ARCHIVE_KEY,[])};
 const init=()=>{ensureButton();const observer=new MutationObserver(ensureButton);observer.observe(document.body,{childList:true,subtree:true});};
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})(window);
