/* QuickRN rebuilt exam application. Shared reference shell: correct_view.html */
(function(){
'use strict';
const mode=document.body.getAttribute('data-exam-mode')||'selfstudy';
const titles={selfstudy:'Self-Study',timed:'Timed Practice',predictor:'NCLEX Predictor',cat:'CAT Adaptive Exam'};
const descriptions={selfstudy:'Practice at your own pace with immediate clinical feedback.',timed:'Fixed-length examination with a countdown timer. Review unlocks after submission.',predictor:'Fixed-form readiness assessment using up to 150 unique questions. Results are limited when fewer than 150 questions are available.',cat:'Computerized adaptive testing simulation that adjusts item difficulty and stops when the ability estimate is stable. At least 85 responses are required for a readiness decision.'};
const $=id=>document.getElementById(id);
function isAdaptiveMode(){return mode==='cat';}
function isNCLEXExamMode(){return mode==='cat'||mode==='predictor';}
const renderer=()=>window.QuickRNSharedRenderer;
let bank=[],pool=[],session=[],originalSession=[],currentIndex=0,answers={},bookmarks=new Set(),notes={},timerSeconds=0,timerInterval=null,paused=false,started=false,finished=false,activeTab=0,activeCaseKey='',formatFilter='ALL',maxItems=0,catDecision=null,reviewMode=false,elapsedSeconds=0,breaksOffered=new Set(),timerDeadlineMs=null,elapsedStartedAt=null,timerWarnings=new Set();
const ANSWER_KEY='quickrn_exam_answers_'+mode+'_v2',BOOKMARK_KEY='quickrn_exam_bookmarks_v1',NOTES_KEY='quickrn_question_notes_v1';
function readJSON(key,fallback){try{const v=JSON.parse(localStorage.getItem(key)||'null');return v==null?fallback:v;}catch(e){return fallback;}}
function writeJSON(key,value){try{localStorage.setItem(key,JSON.stringify(value));return true;}catch(e){notice('Your browser storage is full. Some progress may not be saved.');return false;}}
const initialStudentState=readJSON('quickrn_student_state',{})||{};answers=readJSON(ANSWER_KEY,{})||{};bookmarks=new Set([...(readJSON(BOOKMARK_KEY,[])||[]),...(initialStudentState.studentStats?.favorites||[])].map(String));notes={...(initialStudentState.questionNotes||{}),...(readJSON(NOTES_KEY,{})||{})};
function notice(message){let n=$('quickrn-notice');if(!n){n=document.createElement('div');n.id='quickrn-notice';n.className='fixed top-20 left-1/2 -translate-x-1/2 z-[90] bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl text-xs font-semibold';document.body.appendChild(n);}n.textContent=message;n.classList.remove('hidden');clearTimeout(notice._timer);notice._timer=setTimeout(()=>n.classList.add('hidden'),2600);}
function stripQuestionLead(value, metadata){
 const api=renderer(),cleaner=api?.cleanClinicalText||api?.cleanPrompt;
 let text=typeof cleaner==='function'?cleaner(String(value||''),metadata||{}):String(value||'').trim();
 const topic=String(metadata?.topic||metadata?.keyPhrase||metadata?.category||'').trim();
 if(topic&&text.slice(0,topic.length).toLowerCase()===topic.toLowerCase()&&/^\s*:/u.test(text.slice(topic.length)))text=text.slice(topic.length).replace(/^\s*:\s*/,'').trim();
 const lead=/^\s*(?:[A-Z][A-Za-z0-9 /&()'’-]{1,70}):\s+(?=(?:A|An|The|This|That|Client|Patient|Nurse|When|Which|What|Review|Use|Analyze|Interpret|Complete|Select|Determine|Identify)\\b)/;
 if(lead.test(text))text=text.replace(lead,'').trim();
 const patterns=[/^\s*(?:\[[^\]]+\]\s*)+/i,/^\s*(?:QUESTION\s*ID|ITEM\s*ID|QID|ID|TOPIC|SUBJECT|CATEGORY|TYPE)\s*[:#-]\s*[^—–|;\n]{1,110}\s*(?:[—–|;]\s*|(?=\n)|$)/i,/^\s*FOLLOW[- ]?UP\s*\d+\s*(?:[-:|–—]\s*)?/i,/^\s*PATIENT\s+INFORMATION\s*[:—–-]?\s*/i];
 for(let i=0;i<8;i++){const before=text;patterns.forEach(p=>text=text.replace(p,'').trim());if(text===before)break;}
 return text;
}
function splitTopicHeading(value, metadata){
 const raw=String(value||''),meta=metadata||{};
 const match=/^\s*([^:\n]{2,90}):\s+(?=(?:A|An|The|This|That|Client|Patient|Nurse|When|Which|What|Review|Use|Analyze|Interpret|Complete|Select|Determine|Identify)\b)/i.exec(raw);
 const topic=String(meta.topic||meta.category||match?.[1]||'').trim();
 return {topic,text:stripQuestionLead(raw,meta)};
}
function stripClinicalLead(value, metadata){return stripQuestionLead(value,metadata);}
function clean(value, metadata){return stripQuestionLead(String(value||''),metadata);}
function rawBank(){if(window.quickRNBankReady!==true)return [];if(Array.isArray(window.questions))return window.questions;if(Array.isArray(window.embeddedQuestionsData))return window.embeddedQuestionsData;if(Array.isArray(window.externalQuestions))return window.externalQuestions;return [];}
function bankAssetReport(){
 const manifest=window.QuickRNQuestionBankManifest||{},fallback=['question-bank.js'],expected=Array.isArray(manifest.sourceModules)&&manifest.sourceModules.length?manifest.sourceModules:fallback;
 const scriptEls=[...document.querySelectorAll('script[src]')],audit=window.QuickRNBankLoadAudit?.assets||{};
 const byName=new Map(scriptEls.map(el=>[String(el.src||'').split('/').pop(),el]));
 const modules=expected.map(path=>{const name=String(path).split('/').pop(),el=byName.get(name),event=audit[name];return {path,name,present:!!el,status:!el?'missing':event?.status||'unconfirmed',src:el?.src||''};});
 const missing=modules.filter(x=>x.status==='missing'),failed=modules.filter(x=>x.status==='failed'),unconfirmed=modules.filter(x=>x.status==='unconfirmed');
 return {expectedCount:Number(manifest.expectedUniqueProductionRecords)||null,expectedModules:modules.length,modules,missing,failed,unconfirmed};
}
function suppressObsoleteBankStatus(){
 const pattern=/unique questions loaded/i;
 const scan=()=>{
  document.querySelectorAll('body *').forEach(el=>{
   if(el.children.length!==0)return;
   const value=String(el.textContent||'').replace(/\s+/g,' ').trim();
   if(!pattern.test(value)||!/expected\s+[\d,]+/i.test(value)||!/file loads unconfirmed/i.test(value))return;
   const wrapper=el.closest('[role="status"],[aria-live="polite"],.toast,.notification,.alert,.bank-load-status')||el;
   if(wrapper&&wrapper!==document.body&&!wrapper.matches('header,main,body'))wrapper.remove();
  });
 };
 scan();
 if(!document.body||document.body.dataset.quickrnBankStatusGuard==='1')return;
 document.body.dataset.quickrnBankStatusGuard='1';
 const observer=new MutationObserver(scan);
 observer.observe(document.body,{childList:true,subtree:true,characterData:true});
}
function renderBankStatus(uniqueCount,sourceCount,skipped,duplicates){
 const report=bankAssetReport(),expected=report.expectedCount,exact=expected===null||expected===uniqueCount;
 const allAssetsOk=!report.missing.length&&!report.failed.length&&!report.unconfirmed.length;
 window.quickRNQuestionBankDiagnostics={...report,uniqueLoaded:uniqueCount,rawRecords:sourceCount,invalidSkipped:skipped,duplicateIdsSkipped:duplicates,manifestCountMatches:exact,allModuleLoadsConfirmed:allAssetsOk};
}
function refreshQuestionBankCapacity(){
 const eligible=bank.filter(q=>q?.reviewStatus!=='quarantined_content_quality'&&hasClinicalContextForExam(q)).length;
 const total=bank.length,select=$('session-count');
 const status=$('question-bank-capacity');
 if(status){
  const requirement=mode==='predictor'?150:mode==='cat'?85:0;
  status.textContent=requirement&&eligible<requirement
   ?eligible+' eligible questions loaded. '+titles[mode]+' requires '+requirement+' unique questions; '+(requirement-eligible)+' more are needed.'
   :eligible+' eligible questions loaded across '+new Set(bank.map(questionFormatKey)).size+' question formats.';
  status.className='mt-2 rounded-lg border px-3 py-2 text-xs '+(requirement&&eligible<requirement?'border-amber-200 bg-amber-50 text-amber-900':'border-emerald-200 bg-emerald-50 text-emerald-800');
 }
 if(!select||!(mode==='selfstudy'||mode==='timed'))return;
 const values=mode==='selfstudy'?[15,30]:[10,20,30,eligible];
 const unique=[...new Set(values.filter(n=>Number.isInteger(n)&&n>0&&n<=eligible))];
 const options=unique.map(n=>[String(n),n===eligible?'All '+eligible+' available':n+' questions']);
 if(mode==='selfstudy')options.push(['all','All '+eligible+' available']);
 const previous=select.value;
 select.innerHTML=options.map(([value,label])=>'<option value="'+value+'">'+label+'</option>').join('');
 if(options.some(([value])=>value===previous))select.value=previous;
 else select.value=String(Math.min(mode==='selfstudy'?15:20,eligible));
}
function normalizeQuestion(q,index){const item=Object.assign({},q||{});item.id=String(item.id||item.questionId||('QR-'+(index+1)));item.ngnType=renderer()?.detect(item)||item.ngnType||item.type||'Single Choice';const stripMeta=v=>clean(String(v||''),item);const titleSource=item.questionOnly||item.actualQuestion||item.question||item.stem||item.cleanTitle||item.title||item.promptTitle||item.questionText||('NCLEX Item '+(index+1));item.cleanTitle=stripMeta(titleSource);const promptParts=[...new Set([item.questionText,item.question,item.instruction,item.prompt].filter(v=>v!==undefined&&v!==null&&String(v).trim()).map(stripMeta).filter(v=>v&&v.toLowerCase()!==item.cleanTitle.toLowerCase()))];item.cleanInstruction=stripMeta(item.cleanInstruction||promptParts.join(' '));item.keyPhrase=item.keyPhrase||item.topic||item.category||'Clinical Nursing';if(typeof item.difficulty!=='number'){const rawDifficulty=String(item.difficulty??'').toLowerCase();const numericDifficulty=Number(rawDifficulty);item.difficulty=Number.isFinite(numericDifficulty)?numericDifficulty:(rawDifficulty.includes('easy')?-1:rawDifficulty.includes('hard')?1:0);}return item;}
function showBankLoadError(message){const host=$('case-study-content');if(host)host.innerHTML='<div role="alert" class="m-4 rounded-xl border border-rose-200 bg-rose-50 p-5 text-sm text-rose-900"><strong>QuickRN could not prepare the question bank.</strong><p class="mt-2">'+escapeHTML(message||'The question data is unavailable or could not be processed.')+'</p><p class="mt-2 text-xs">Check the question-bank asset and reload this exam. Your saved progress is preserved.</p><button type="button" class="mt-3 rounded-lg bg-slate-900 px-4 py-2 text-xs font-bold text-white" onclick="location.reload()">Retry loading exam</button></div>';const pill=$('session-info-pill');if(pill)pill.textContent='Question bank unavailable';}
function loadBank(){const source=rawBank();if(!Array.isArray(source)){showBankLoadError('question-bank.js did not expose a question array.');return false;}bank=[];source.forEach((item,index)=>{try{const q=normalizeQuestion(item,index);if(q&&q.id)bank.push(q);}catch(error){console.warn('QuickRN skipped an invalid question record at index '+index,error);}});if(!bank.length){showBankLoadError('No valid question records were found in the loaded question bank.');return false;}return true;}
function loadBankProgressively(){
 const source=rawBank(),button=$('setup-start');
 if(!Array.isArray(source)||!source.length){const report=bankAssetReport();renderBankStatus(0,0,0,0);showBankLoadError('No question records were exposed by the loaded bank scripts. '+(report.failed.length?'Failed files: '+report.failed.map(x=>x.path).join(', '):'Check the bank module diagnostics.'));return;}
 bank=[];let cursor=0,skipped=0,duplicates=0;const seenIds=new Set(),chunkSize=250;
 if(button){button.disabled=true;button.textContent='Preparing questions…';button.classList.add('opacity-60','cursor-wait');}
 const processChunk=()=>{try{
  const end=Math.min(cursor+chunkSize,source.length);
  for(;cursor<end;cursor++){try{
   const raw=source[cursor],rawId=String(raw?.id||raw?.questionId||'').trim();
   if(!raw||!rawId){skipped++;continue;}
   if(seenIds.has(rawId)){duplicates++;continue;}
   const item=normalizeQuestion(raw,cursor);
   if(item&&item.id){seenIds.add(String(item.id));bank.push(item);}else skipped++;
  }catch(error){skipped++;console.warn('QuickRN skipped question '+cursor,error);}}
  if(cursor<source.length){window.setTimeout(processChunk,0);return;}
  if(!bank.length){if(button){button.disabled=false;button.textContent=mode==='selfstudy'?'Start Studying':'Start '+titles[mode];}renderBankStatus(0,source.length,skipped,duplicates);showBankLoadError('All '+source.length+' source records failed validation.');return;}
  buildFormatFilterOptions();refreshNeedsReviewOption();renderBankStatus(bank.length,source.length,skipped,duplicates);refreshQuestionBankCapacity();
  if(button){button.disabled=false;button.textContent=mode==='selfstudy'?'Start Studying':'Start '+titles[mode];button.classList.remove('opacity-60','cursor-wait');}
  if(isNCLEXExamMode())startExamSession();
 }catch(error){console.error('QuickRN bank preparation failed',error);renderBankStatus(bank.length,source.length,skipped,duplicates);showBankLoadError('The question bank stopped while processing record '+cursor+'. '+(error?.message||''));if(button){button.disabled=false;button.textContent='Retry loading questions';}}};
 window.setTimeout(processChunk,0);
}
function isNGN(q){const f=String(renderer()?.detect(q)||q.ngnType||'');return !!(q.isNGN||q.caseGroupId||q.caseStudyContext||['Matrix Single','Matrix Multiple','Matrix / Grid','Cloze (Drop-down)','Bowtie','Extended Drag and Drop','Extended Multiple Response','Highlight','Trend','Numeric Entry','Select N'].includes(f)||/\bNGN\b/i.test([q.type,q.format,q.questionType,q.itemType,q.ngnType].join(' ')));}
function shuffle(list){const a=list.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function diversityShuffle(list){const buckets=new Map();shuffle(list).forEach(q=>{const type=String(renderer()?.detect(q)||q.ngnType||'Other');const topic=String(q.topic||q.category||q.keyPhrase||'General').toLowerCase().replace(/\s+/g,' ').trim().slice(0,60);const key=type+'|'+topic;if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(q);});const groups=shuffle([...buckets.values()]),result=[];while(groups.length){for(let i=0;i<groups.length;i++){const group=groups[i];if(group.length)result.push(group.shift());if(!group.length){groups.splice(i,1);i--;}}}return result;}
const SEEN_QUESTION_KEY='quickrn_seen_question_ids_v1';
function seenQuestionIds(){return new Set([...(readJSON(SEEN_QUESTION_KEY,[])||[]),...(readJSON('quickrn_used_q_ids',[])||[])].map(String));}
function rememberQuestionSeen(q){
 if(mode!=='selfstudy'||!q)return;
 const ids=seenQuestionIds(),sequencer=window.QuickRNCaseStudySequencer;
 const group=sequencer?.units?sequencer.units(bank).find(unit=>unit.items.some(item=>String(item.id)===String(q.id))):null;
 (group?.items||[q]).forEach(item=>ids.add(String(item.id)));
 writeJSON(SEEN_QUESTION_KEY,[...ids]);
 if(isQuickRNWebmaster()){const educatorSeen=new Set((readJSON(EDUCATOR_SEEN_KEY,[])||[]).map(String));educatorSeen.add(String(q.id));writeJSON(EDUCATOR_SEEN_KEY,[...educatorSeen]);}
}
function unseenSelfStudyPool(list){
 const seen=seenQuestionIds(),sequencer=window.QuickRNCaseStudySequencer;
 if(sequencer?.units)return sequencer.units(list).filter(unit=>!unit.items.some(q=>seen.has(String(q.id)))).flatMap(unit=>unit.items);
 return list.filter(q=>!seen.has(String(q.id)));
}
function randomizedSelfStudyPick(list,count){
 const fresh=unseenSelfStudyPool(list),sequencer=window.QuickRNCaseStudySequencer;
 if(!fresh.length)return [];
 if(sequencer?.pick)return sequencer.pick(fresh,count,new Set());
 return diversityShuffle(fresh).slice(0,Math.max(0,count));
}
const EDUCATOR_REVIEW_KEY='quickrn_educator_reviewed_ids_v1';
const EDUCATOR_REVISION_KEY='quickrn_educator_revision_requested_ids_v1';
const EDUCATOR_SEEN_KEY='quickrn_webmaster_seen_question_ids_v1';
function isQuickRNWebmaster(){try{return localStorage.getItem('quickrn_signed_out')!=='true'&&(localStorage.getItem('quickrn_user_email')||'').trim().toLowerCase()==='toughluckstyle@gmail.com';}catch(_){return false;}}
function educatorIds(key){return new Set((readJSON(key,[])||[]).map(String));}
let educatorReviewBackfillDone=false;
function backfillEducatorReviewed(){
 if(educatorReviewBackfillDone||!isQuickRNWebmaster())return;
 educatorReviewBackfillDone=true;
 const reviewed=educatorIds(EDUCATOR_REVIEW_KEY),revision=educatorIds(EDUCATOR_REVISION_KEY);
 const previouslySeen=new Set((readJSON(EDUCATOR_SEEN_KEY,[])||[]).map(String));
 previouslySeen.forEach(id=>{if(!revision.has(id))reviewed.add(id);});
 writeJSON(EDUCATOR_REVIEW_KEY,[...reviewed]);
}
function setEducatorQuestionStatus(qid,status){
 if(!isQuickRNWebmaster()||!qid)return false;
 const reviewed=educatorIds(EDUCATOR_REVIEW_KEY),revision=educatorIds(EDUCATOR_REVISION_KEY),id=String(qid);
 if(status==='revision'){revision.add(id);reviewed.delete(id);}
 else if(status==='reviewed'&&!revision.has(id)){reviewed.add(id);}
 writeJSON(EDUCATOR_REVIEW_KEY,[...reviewed]);writeJSON(EDUCATOR_REVISION_KEY,[...revision]);
 updateEducatorReviewIndicator(id);refreshNeedsReviewOption();return true;
}
function updateEducatorReviewIndicator(){const badge=document.getElementById('quickrn-educator-review-status');if(badge)badge.remove();}
window.QuickRNEducatorReview={isWebmaster:isQuickRNWebmaster,markRevisionRequested:function(qid){return setEducatorQuestionStatus(qid,'revision');},getReviewedIds:function(){return [...educatorIds(EDUCATOR_REVIEW_KEY)];},getRevisionRequestedIds:function(){return [...educatorIds(EDUCATOR_REVISION_KEY)];}};
function currentQuestion(){return session[currentIndex]||null;}
function currentRecord(q){if(!q)return {};if(!answers[q.id])answers[q.id]={draft:null,submitted:false};return answers[q.id];}
function saveState(){writeJSON(ANSWER_KEY,answers);writeJSON(BOOKMARK_KEY,[...bookmarks]);writeJSON(NOTES_KEY,notes);const shared=readJSON('quickrn_student_state',{})||{};shared.studentStats=shared.studentStats||{};shared.studentStats.favorites=[...bookmarks];shared.questionNotes={...(shared.questionNotes||{}),...notes};writeJSON('quickrn_student_state',shared);}

function canonicalFormatFilter(value){const raw=String(value||'ALL'),key=raw.toLowerCase();const aliases={single:'Single Choice','single best answer':'Single Choice',sata:'Multiple Response','sata / multiple response':'Multiple Response',select_n:'Select N',matrix:'Matrix Single',matrix_single:'Matrix Single',matrix_multiple:'Matrix Multiple','matrix / grid':'Matrix Single',cloze:'Cloze (Drop-down)',dropdown_rationale:'Dropdown Rationale',highlight:'Highlight',trend:'Trend',numeric:'Numeric Entry',ordered:'Extended Drag and Drop',bowtie:'Bowtie','extended response':'Extended Multiple Response',extended_multiple_response:'Extended Multiple Response'};return aliases[key]||raw;}
function questionFormatKey(q){const detected=String(renderer()?.detect(q)||q?.ngnType||q?.type||'');const raw=[q?.type,q?.format,q?.questionType,q?.itemType,q?.ngnType].filter(Boolean).join(' ').replace(/[_-]/g,' ').toLowerCase();if(/dropdown rationale/.test(raw))return 'Dropdown Rationale';if(/matrix.*multiple|multiple.*matrix/.test(raw))return 'Matrix Multiple';if(/matrix.*single|single.*matrix/.test(raw))return 'Matrix Single';if(/^Matrix/.test(detected)||/matrix|grid/.test(raw)){const rows=Array.isArray(q?.rows)?q.rows:[];return rows.some(row=>Array.isArray(row?.correct)||Array.isArray(row?.correctAnswers))?'Matrix Multiple':'Matrix Single';}if(detected==='Extended Multiple Response'||raw.includes('extended multiple response'))return 'Extended Multiple Response';if(detected==='Multiple Response')return 'Multiple Response';if(detected==='Cloze (Drop-down)'||/dropdown cloze|cloze|drop down/.test(raw))return 'Cloze (Drop-down)';if(detected==='Ordered Response')return 'Extended Drag and Drop';return detected;}
function formatFilterMatches(q,value){const selected=canonicalFormatFilter(value);return selected==='ALL'||questionFormatKey(q)===selected;}
function buildFormatFilterOptions(){const select=$('format-filter');if(!select)return;const formats=[['Single Choice','Single Choice'],['Multiple Response','SATA / Multiple Response'],['Select N','Select N'],['Matrix Single','Matrix — Single Response'],['Matrix Multiple','Matrix — Multiple Response'],['Cloze (Drop-down)','Cloze / Drop-down'],['Dropdown Rationale','Dropdown Rationale'],['Bowtie','Bowtie'],['Extended Drag and Drop','Ordered Response / Drag-and-Drop'],['Extended Multiple Response','Extended Multiple Response'],['Highlight','Highlight Text'],['Trend','Trend Interpretation'],['Numeric Entry','Numeric Entry']];const counts=new Map(formats.map(([value])=>[value,0]));for(const q of bank){const key=questionFormatKey(q);if(counts.has(key))counts.set(key,counts.get(key)+1);}select.innerHTML='<option value="ALL">All Question Types ('+bank.length.toLocaleString()+')</option>'+formats.map(([value,label])=>'<option value="'+value+'" '+(counts.get(value)===0?'disabled':'')+'>'+label+' ('+counts.get(value)+')</option>').join('');select.value=canonicalFormatFilter(formatFilter)||'ALL';}
function hasClinicalContextForExam(q){
 if(!q||typeof q!=='object')return false;
 const hasValue=value=>{
  if(value==null||value==='')return false;
  if(Array.isArray(value))return value.some(hasValue);
  if(typeof value==='object')return Object.values(value).some(hasValue);
  return String(value).trim()!=='';
 };
 const hasTabDetails=value=>{
  const details=tab=>{
   if(typeof tab==='string')return hasValue(tab);
   if(!tab||typeof tab!=='object')return false;
   return ['content','value','text','body','details','data','description'].some(key=>hasValue(tab[key]));
  };
  return Array.isArray(value)?value.some(details):(value&&typeof value==='object'?Object.values(value).some(details):false);
 };
 // A caseGroupId is only a grouping key; it is not clinical content by itself.
 const structured=['patientProfile','patientInfo','patientInformation','patient_information','ehr','caseStudy','case_study','clinicalRecord','medicalRecord','patientScenario','clinicalScenario','scenario','stimulus','passage','context','caseStudyText','rows','trendData','highlightSegments','dropdowns','bowtieData','availableItems','correctOrder','numericAnswer','correctNumericAnswer','numericRange'];
 if(structured.some(key=>hasValue(q[key]))||hasTabDetails(q.tabs))return true;
 const context=q.caseStudyContext;
 if(context&&['summary','description','narrative','scenario','patientInformation','clinicalScenario'].some(key=>hasValue(context[key])))return true;
 const split=renderer()?.splitPrompt;
 if(typeof split==='function'){
  try{const parts=split(q);if(hasValue(parts?.scenario))return true;}catch(error){console.warn('[QuickRN] Could not inspect clinical scenario for item '+(q.id||'unknown'),error);}
 }
 return false;
}
function filteredPool(){let list=bank.filter(q=>q?.reviewStatus!=='quarantined_content_quality'&&hasClinicalContextForExam(q));formatFilter=canonicalFormatFilter(formatFilter);if(formatFilter!=='ALL')list=list.filter(q=>formatFilterMatches(q,formatFilter));const params=new URLSearchParams(window.location.search||'');const raw=params.get('q')||'';const terms=raw.split('|').map(x=>x.trim().toLowerCase()).filter(Boolean);if(terms.length){list=list.filter(q=>{const haystack=[q.clientNeeds,q.clientNeed,q.nclexCategory,q.category,q.topic,q.title,q.cleanTitle,q.keyPhrase,q.questionText,q.question,q.prompt,q.stem,q.rationale].flat().filter(Boolean).join(' ').toLowerCase();const domainName=String(window.QuickRNCoach?.classifyClientNeed(q)?.name||'').toLowerCase();return terms.some(term=>haystack.includes(term)||domainName.includes(term));});}const sequencer=window.QuickRNCaseStudySequencer;return sequencer?.expandRelated?sequencer.expandRelated(list,bank):list;}
function balancedPick(list,count){const sequencer=window.QuickRNCaseStudySequencer,units=sequencer?.units?sequencer.units(list):list.map((q,index)=>({key:'item:'+index,items:[q]})),caseUnits=shuffle(units.filter(unit=>unit.items.length>1&&unit.items.some(isNGN))),standalone=shuffle(units.filter(unit=>unit.items.length===1&&unit.items.some(isNGN))),traditional=shuffle(units.filter(unit=>!unit.items.some(isNGN)));const caseTarget=count>=85?3:count>=55?2:count>=35?1:0;let picked=[],used=new Set(),caseCount=0;for(const unit of caseUnits){if(caseCount>=caseTarget)break;picked.push(...unit.items);unit.items.forEach(q=>used.add(q.id));caseCount++;}const standaloneTarget=Math.min(standalone.length,Math.ceil(count*.10));let standaloneCount=0;for(const unit of standalone){if(standaloneCount>=standaloneTarget)break;picked.push(...unit.items);unit.items.forEach(q=>used.add(q.id));standaloneCount+=unit.items.length;}for(const unit of traditional){if(picked.length>=count)break;const remaining=unit.items.filter(q=>!used.has(q.id));if(remaining.length){picked.push(...remaining);remaining.forEach(q=>used.add(q.id));}}if(picked.length<count){for(const unit of shuffle(units)){if(picked.length>=count)break;const remaining=unit.items.filter(q=>!used.has(q.id));if(remaining.length){picked.push(...remaining);remaining.forEach(q=>used.add(q.id));}}}return picked;}
function difficultyValue(q){const v=q.difficulty;if(typeof v==='number'&&Number.isFinite(v))return Math.max(-3,Math.min(3,v));const s=String(v||'').toLowerCase();if(s.includes('easy'))return -1;if(s.includes('hard'))return 1;if(s.includes('very'))return 1.5;return 0;}
function answeredResponses(){return session.slice(0,currentIndex+1).map(q=>{const a=answers[q.id]||{};if(!a.submitted)return null;const d=renderer().toDraft(q,a.draft),g=renderer().grade(q,d);return {q,earned:g&&typeof g==='object'?Number(g.earned)||0:(g?1:0),max:g&&typeof g==='object'?Number(g.max)||1:1,correct:g&&typeof g==='object'?!!g.isCorrect:!!g};}).filter(Boolean);}
function chooseAdaptiveQuestion(){const used=new Set(session.map(q=>q.id));let candidates=pool.filter(q=>!used.has(q.id));if(!candidates.length)return null;const previous=session[session.length-1],sequencer=window.QuickRNCaseStudySequencer,caseKey=sequencer?.keyOf(previous);if(caseKey){const linked=candidates.filter(q=>sequencer.keyOf(q)===caseKey);if(linked.length){const sequence=q=>Number(q.caseQuestionNumber??q.caseQuestionIndex??q.questionSequence??q.sequenceNumber??q.stepNumber??q.questionNumber??q.questionIndex??q.caseStudyContext?.stepIndex??Number.MAX_SAFE_INTEGER);linked.sort((a,b)=>sequence(a)-sequence(b));return linked[0];}}const responses=answeredResponses();if(sequencer?.units){const caseUnits=sequencer.units(pool).filter(unit=>unit.items.length>1),caseKeys=new Set(caseUnits.map(unit=>sequencer.keyOf(unit.items[0])).filter(Boolean)),usedCaseKeys=new Set(session.map(q=>sequencer.keyOf(q)).filter(key=>key&&caseKeys.has(key))),thresholds=[6,30,55],threshold=thresholds[Math.min(usedCaseKeys.size,2)];if(usedCaseKeys.size<3&&responses.length>=threshold&&responses.length<85){const freshCaseItems=candidates.filter(q=>{const key=sequencer.keyOf(q);return key&&caseKeys.has(key)&&!usedCaseKeys.has(key);});const freshUnits=sequencer.units(freshCaseItems).filter(unit=>unit.items.length>1);if(freshUnits.length){const unit=freshUnits[Math.floor(Math.random()*freshUnits.length)];return unit.items[0];}}}const estimate=window.QuickRNCAT?.estimate(responses)||{theta:0};let targetNGN=previous?!isNGN(previous):null;if(targetNGN!==null){const matching=candidates.filter(q=>isNGN(q)===targetNGN);if(matching.length>0)candidates=matching;}candidates.sort((a,b)=>Math.abs(difficultyValue(a)-estimate.theta)-Math.abs(difficultyValue(b)-estimate.theta));const shortlist=candidates.slice(0,Math.min(8,candidates.length));return shortlist[Math.floor(Math.random()*shortlist.length)];}
function needsReviewPool(){if(!isQuickRNWebmaster())return [];backfillEducatorReviewed();const reviewed=educatorIds(EDUCATOR_REVIEW_KEY);return bank.filter(q=>!reviewed.has(String(q.id)));}
function refreshNeedsReviewOption(){if(!isQuickRNWebmaster())return;const option=$('session-count')?.querySelector('option[value="needs-review"]');if(option)option.textContent='Needs Review ('+needsReviewPool().length+')';}
function setupOptions(){const timerHost=$('timer-display')?.parentElement;if(timerHost)timerHost.classList.toggle('hidden',mode==='selfstudy');const formatSelect=$('format-filter'),setup=$('setup-modal');if(formatSelect&&setup){let wrap=$('setup-format-filter-wrap');if(!wrap){wrap=document.createElement('div');wrap.id='setup-format-filter-wrap';wrap.className='mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3';wrap.innerHTML='<label for="format-filter" class="mb-2 block text-xs font-bold uppercase tracking-wide text-slate-600">Question types</label>';const countSelect=$('session-count'),target=countSelect?.parentElement||setup;target.insertBefore(wrap,countSelect?.nextSibling||null);}formatSelect.className='w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800';wrap.appendChild(formatSelect);}const select=$('session-count');const countLabel=document.querySelector('label[for="session-count"]');if(select){const chooseCount=mode==='selfstudy'||mode==='timed';select.classList.toggle('hidden',!chooseCount);if(countLabel)countLabel.classList.toggle('hidden',!chooseCount);let opts=[];if(mode==='selfstudy'){opts=[['15','15 questions'],['50','50 questions'],['85','85 questions'],['150','150 questions'],['all','All available questions']];if(isQuickRNWebmaster())opts.unshift(['needs-review','Needs Review ('+needsReviewPool().length+')']);}else if(mode==='timed')opts=[['40','40 questions'],['60','60 questions'],['85','85 questions — NCLEX-length'],['150','150 questions — full-length']];select.innerHTML=opts.map(o=>'<option value="'+o[0]+'">'+o[1]+'</option>').join('');if(chooseCount)select.value=mode==='selfstudy'?'15':'40';}if(isNCLEXExamMode()){maxItems=150;formatSelect?.parentElement?.classList.add('hidden');select?.classList.add('hidden');countLabel?.classList.add('hidden');setup?.classList.add('hidden');return;}$('setup-title').textContent=titles[mode]+' Setup';$('setup-description').textContent=descriptions[mode];$('setup-start').textContent=mode==='selfstudy'?'Start Studying':'Start '+titles[mode];$('setup-modal').classList.remove('hidden');}
function startExamSession(){
 try{
  if(!bank.length&&!loadBank())return;
  const selectedCount=$('session-count')?.value||(mode==='selfstudy'?'15':'40');
  const needsReviewMode=mode==='selfstudy'&&selectedCount==='needs-review'&&isQuickRNWebmaster();
  formatFilter=canonicalFormatFilter($('format-filter')?.value||'ALL');
  pool=needsReviewMode?bank.slice():filteredPool();
  const required=mode==='predictor'?150:mode==='cat'?85:0;
  window.quickRNExamDiagnostics={mode,stage:'pool-ready',sourceCount:rawBank().length,normalizedCount:bank.length,poolCount:pool.length,requiredCount:required,sessionCount:0,bankDiagnostics:window.quickRNQuestionBankDiagnostics||null};
  if(!pool.length){showBankLoadError('The question bank loaded ('+bank.length+' records), but no eligible questions were available for this exam.');return;}
  if(required&&pool.length<required){showBankLoadError(titles[mode]+' requires '+required+' unique questions, but only '+pool.length+' are available. The exam was not started with an incomplete pool.');return;}
  const selected=(mode==='selfstudy'||mode==='timed')?selectedCount:'150';
  maxItems=(mode==='selfstudy'||mode==='timed')?(selected==='all'?pool.length:Number(selected)):150;
  if(mode==='selfstudy'){
   if(needsReviewMode){const outstanding=needsReviewPool();if(!outstanding.length){notice('All questions have been marked Educator Reviewed. No questions remain in your review queue.');return;}maxItems=outstanding.length;session=window.QuickRNCaseStudySequencer?.randomizeAll?window.QuickRNCaseStudySequencer.randomizeAll(outstanding):diversityShuffle(outstanding.slice());}
   else{const focused=!!(new URLSearchParams(window.location.search||'').get('q'));const freshPool=unseenSelfStudyPool(pool);if(!freshPool.length){notice(formatFilter==='ALL'?'You have exhausted all available Self-Study questions. No questions will be repeated.':'No unseen questions remain in this filter. Choose All Question Types to continue with other unused questions.');return;}if(focused){maxItems=freshPool.length;session=window.QuickRNCaseStudySequencer?.randomizeAll?window.QuickRNCaseStudySequencer.randomizeAll(freshPool):diversityShuffle(freshPool.slice());}else{const requested=selected==='all'?freshPool.length:Math.min(maxItems,freshPool.length);session=randomizedSelfStudyPick(freshPool,requested);}}
  }else if(mode==='cat'){
   maxItems=Math.min(150,pool.length);session=[];
   const first=chooseFirstAdaptive();if(first)session.push(first);
  }else if(mode==='predictor'){
   maxItems=150;session=balancedPick(pool,maxItems);
  }else{
   maxItems=Math.min(maxItems||150,pool.length,150);session=balancedPick(pool,maxItems);
  }
  if(!session.length){showBankLoadError('The question bank contains '+pool.length+' eligible items, but session selection returned no questions.');return;}
  if(mode==='predictor'&&session.length<150){showBankLoadError('Predictor could select only '+session.length+' of the required 150 unique questions.');return;}
  originalSession=session.slice();if(!needsReviewMode)session.forEach(q=>{delete answers[q.id];});
  currentIndex=0;started=true;finished=false;paused=false;reviewMode=false;breaksOffered=new Set();timerWarnings=new Set();catDecision=null;elapsedSeconds=0;elapsedStartedAt=null;timerDeadlineMs=null;
  timerSeconds=mode==='selfstudy'?0:mode==='timed'?session.length*72:5*60*60;
  $('setup-modal')?.classList.add('hidden');$('summary-screen')?.classList.add('hidden');if($('exam-footer'))$('exam-footer').style.display='flex';
  window.quickRNExamDiagnostics={mode,stage:'session-started',sourceCount:rawBank().length,normalizedCount:bank.length,poolCount:pool.length,requiredCount:required,sessionCount:session.length,firstQuestionId:session[0]?.id||null};
  startTimer();renderCurrent();updateTimerDisplay();saveState();
 }catch(error){
  console.error('QuickRN '+mode+' session startup failed',error);
  started=false;clearInterval(timerInterval);
  showBankLoadError('The '+titles[mode]+' session could not start: '+(error?.message||String(error)));
 }
}
function chooseFirstAdaptive(){const list=pool.slice();list.sort((a,b)=>Math.abs(difficultyValue(a))-Math.abs(difficultyValue(b)));const selected=shuffle(list.slice(0,Math.min(10,list.length)))[0]||list[0]||null;const sequencer=window.QuickRNCaseStudySequencer,key=sequencer?.keyOf(selected);if(!key)return selected;const sequence=q=>Number(q.caseQuestionNumber??q.caseQuestionIndex??q.questionSequence??q.sequenceNumber??q.stepNumber??q.questionNumber??q.questionIndex??q.caseStudyContext?.stepIndex??Number.MAX_SAFE_INTEGER);return pool.filter(q=>sequencer.keyOf(q)===key).sort((a,b)=>sequence(a)-sequence(b))[0]||selected;}
function startTimer(){clearInterval(timerInterval);if(mode==='selfstudy'){elapsedStartedAt=Date.now()-Math.max(0,elapsedSeconds||0)*1000;const tickStudy=()=>{if(!started||finished)return;elapsedSeconds=Math.max(0,Math.floor((Date.now()-elapsedStartedAt)/1000));updateTimerDisplay();};tickStudy();timerInterval=setInterval(tickStudy,1000);return;}if(!paused||!timerDeadlineMs)timerDeadlineMs=Date.now()+Math.max(0,timerSeconds)*1000;const tick=()=>{if(paused||finished)return;timerSeconds=Math.max(0,Math.ceil((timerDeadlineMs-Date.now())/1000));updateTimerDisplay();if(timerSeconds<=300&&timerSeconds>60&&!timerWarnings.has(300)){timerWarnings.add(300);notice('Five minutes remaining. Review unanswered items and pace your final responses.');}if(timerSeconds<=60&&timerSeconds>0&&!timerWarnings.has(60)){timerWarnings.add(60);notice('One minute remaining. Submit any response you want included in your results.');}if(timerSeconds<=0){clearInterval(timerInterval);finishExam('Time limit reached.');}};tick();timerInterval=setInterval(tick,250);}
function updateTimerDisplay(){if(mode==='selfstudy'){if($('timer-display')?.parentElement)$('timer-display').parentElement.classList.add('hidden');return;}const s=timerSeconds;const h=String(Math.floor(s/3600)).padStart(2,'0'),m=String(Math.floor((s%3600)/60)).padStart(2,'0'),sec=String(s%60).padStart(2,'0');if($('timer-display'))$('timer-display').textContent=h+':'+m+':'+sec;}
 function promptSegments(q){
  const pick=v=>{if(v===undefined||v===null)return '';if(typeof v==='string'||typeof v==='number')return String(v).trim();if(Array.isArray(v))return v.map(pick).filter(Boolean).join('\n\n');if(typeof v==='object')return pick(v.text||v.prompt||v.stem||v.question||v.title||v.content||v.description||v.summary||v.narrative||v.history||v.notes);return '';};
  const candidates=[q.prompt,q.questionText,q.question,q.stem,q.title,q.cleanTitle,q.actualQuestion,q.questionOnly,q.instruction].map(pick).filter(Boolean).sort((a,b)=>b.length-a.length);
  const source=candidates[0]||'';
  const split=renderer()?.splitPrompt?.({...q,questionOnly:undefined,actualQuestion:undefined,question:source,stem:source,prompt:source});
  let scenario=pick(split?.scenario),question=pick(split?.question);
  const explicit=[q.scenario,q.clinicalScenario,q.patientScenario,q.situation,q.passage,q.context,q.stimulus,q.caseStudyText,q.case_study_text].map(pick).filter(Boolean);
  if(!scenario&&explicit.length)scenario=explicit.join('\n\n');
  if(!scenario&&source){
   const blocks=source.split(/\n\s*\n/).map(x=>x.trim()).filter(Boolean);
   if(blocks.length>1){const last=blocks[blocks.length-1];if(/^(?:Review|Use|Analyze|Examine|Which|What|When|Where|Who|How|Select|Identify|Determine|Calculate|Complete|Place|Indicate|The nurse|The client)\b/i.test(last)){scenario=blocks.slice(0,-1).join('\n\n');question=question||last;}}
   if(!scenario){
    const sentences=source.match(/[^.!?]+[.!?]+(?:[”’"']+)?|[^.!?]+$/g)||[source];
    const last=(sentences[sentences.length-1]||'').trim();
    if(sentences.length>1&&/^(?:which|what|when|where|who|how|select|identify|determine|calculate|complete|place|indicate|the nurse|the client|review the|use the|analyze the|examine the)/i.test(last)){scenario=sentences.slice(0,-1).join(' ').trim();question=question||last;}
   }
  }
  question=question||pick(q.questionOnly)||pick(q.actualQuestion)||pick(q.question)||pick(q.stem)||pick(q.questionText)||pick(q.cleanTitle)||pick(q.title)||pick(q.prompt)||pick(q.instruction);
  if(scenario&&question.toLowerCase()===scenario.toLowerCase())question='';
  return {scenario,question:question||'Review the clinical record and select the best response.'};
 }
function renderCurrent(){const q=currentQuestion();if(!q)return;window.quickRNCurrentQuestion=q;rememberQuestionSeen(q);if(isQuickRNWebmaster()){backfillEducatorReviewed();setEducatorQuestionStatus(q.id,'reviewed');}updateEducatorReviewIndicator(q.id);const examStyle=isNCLEXExamMode();$('qid-display')?.parentElement?.parentElement?.classList.toggle('hidden',examStyle);$('format-filter')?.parentElement?.classList.toggle('hidden',examStyle);$('badge-item-type')?.parentElement?.parentElement?.classList.toggle('hidden',examStyle);document.querySelector('[onclick="toggleFeedbackModal()"]')?.classList.toggle('hidden',examStyle);$('qid-display').textContent=q.id;$('qid-display').classList.remove('hidden');$('qid-display').className='text-xs font-bold tracking-wide bg-cyan-900/35 border border-cyan-100/30 rounded px-2 py-1';$('q-num-display').textContent=String(currentIndex+1);$('q-total-display').textContent=isAdaptiveMode()?String(maxItems):String(session.length);const itemFormat=renderer()?.detect(q)||'Question';$('badge-item-type').textContent=(isNGN(q)?'NGN · ':'')+itemFormat;$('badge-item-type').classList.remove('hidden');const d=q.difficulty;$('badge-difficulty').textContent=typeof d==='string'?d.toUpperCase():(Number(d)<=-.5?'EASY':Number(d)>=.5?'HARD':'MEDIUM');$('client-need-display').textContent='';const parts=promptSegments(q);const visiblePrompt=parts.question||clean(q.cleanTitle||q.title||q.promptTitle||q.questionText||q.question||'Review the clinical record and select the best response.',q);$('question-prompt').innerHTML='<div class="font-semibold text-slate-800">'+escapeHTML(visiblePrompt||'Review the clinical record and select the best response.')+'</div>';renderCasePanel(q,parts);renderAnswerArea(q);$('left-panel').scrollTop=0;$('right-panel').scrollTop=0;const rec=currentRecord(q);if(mode!=='selfstudy'||!rec.submitted){const videoHost=$('video-resources');if(videoHost)videoHost.innerHTML='';}$('rationale-section').classList.add('hidden');$('rationale-section').style.display='none';clearSubmissionError();if((mode==='selfstudy'||reviewMode)&&rec.submitted)showRationale(q,rec);$('submit-btn').parentElement.classList.toggle('hidden',mode!=='selfstudy'||!!rec.submitted);$('submit-btn').disabled=false;$('prev-btn').classList.toggle('hidden',mode!=='selfstudy');$('prev-btn').disabled=currentIndex===0;$('next-btn').disabled=false;$('next-btn').innerHTML=currentIndex===session.length-1&&!isAdaptiveMode()?'Finish <i class="fa-solid fa-flag-checkered"></i>':'Next <i class="fa-solid fa-chevron-right"></i>';$('mark-icon').className=bookmarks.has(q.id)?'fa-solid fa-bookmark':'fa-regular fa-bookmark';$('mark-btn').classList.toggle('text-yellow-200',bookmarks.has(q.id));if($('notes-textarea'))$('notes-textarea').value=notes[q.id]||'';updateProgress();saveState();}
function escapeHTML(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function quickRNStandardLabRange(name,unit){
 const n=String(name||'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
 const u=String(unit||'').toLowerCase().replace(/[µμ]/g,'u').replace(/\s+/g,'');
 const match=p=>p.test(n),unitOk=p=>!u||p.test(u);
 if(match(/^(sodium|na)$/)&&unitOk(/^(meq\/l|mmol\/l)$/))return u==='mmol/l'?'135–145 mmol/L':'135–145 mEq/L';
 if(match(/^(potassium|k)$/)&&unitOk(/^(meq\/l|mmol\/l)$/))return u==='mmol/l'?'3.5–5.0 mmol/L':'3.5–5.0 mEq/L';
 if(match(/^(chloride|cl)$/)&&unitOk(/^(meq\/l|mmol\/l)$/))return u==='mmol/l'?'98–106 mmol/L':'98–106 mEq/L';
 if(match(/^(bicarbonate|co2|hco3)$/)&&unitOk(/^(meq\/l|mmol\/l)$/))return u==='mmol/l'?'22–29 mmol/L':'22–29 mEq/L';
 if(match(/^(bun|blood urea nitrogen)$/)&&unitOk(/^mg\/dl$/))return '7–20 mg/dL';
 if(match(/^(bun|blood urea nitrogen)$/)&&unitOk(/^mmol\/l$/))return '2.5–7.1 mmol/L';
 if(match(/^(creatinine|creat)$/)&&unitOk(/^mg\/dl$/))return '0.6–1.3 mg/dL (adult; varies with age and sex)';
 if(match(/^(creatinine|creat)$/)&&unitOk(/^umol\/l$/))return '53–115 µmol/L (adult; varies with age and sex)';
 if(match(/^(glucose|blood glucose)$/)&&unitOk(/^mg\/dl$/))return '70–100 mg/dL (fasting)';
 if(match(/^(glucose|blood glucose)$/)&&unitOk(/^mmol\/l$/))return '3.9–5.6 mmol/L (fasting)';
 if(match(/^(calcium|ca)$/)&&unitOk(/^mg\/dl$/))return '8.5–10.5 mg/dL';
 if(match(/^(magnesium|mg)$/)&&unitOk(/^mg\/dl$/))return '1.7–2.2 mg/dL';
 if(match(/^(phosphorus|phosphate|phos)$/)&&unitOk(/^mg\/dl$/))return '2.5–4.5 mg/dL';
 if(match(/^(wbc|white blood cells?|white blood cell count)$/))return '4,500–11,000/µL (4.5–11.0 × 10³/µL)';
 if(match(/^(hemoglobin|hgb|hb)$/)&&unitOk(/^g\/dl$/))return 'Female: 12–16 g/dL; male: 13.5–17.5 g/dL (adult)';
 if(match(/^(hematocrit|hct)$/)&&unitOk(/^%$/))return 'Female: 36–46%; male: 41–53% (adult)';
 if(match(/^(rbc|red blood cells?|red blood cell count)$/))return 'Female: 4.2–5.4 million/µL; male: 4.7–6.1 million/µL (adult)';
 if(match(/^(platelets?|platelet count)$/))return '150,000–400,000/µL (150–400 × 10³/µL)';
 if(match(/^(pt|prothrombin time)$/)&&unitOk(/^(sec|seconds?)$/))return '11–13.5 seconds';
 if(match(/^(inr|international normalized ratio)$/))return '0.8–1.1 (not receiving anticoagulants)';
 if(match(/^(aptt|ptt|activated partial thromboplastin time)$/)&&unitOk(/^(sec|seconds?)$/))return '25–35 seconds';
 if(match(/^(ph|arterial ph|abg ph)$/))return '7.35–7.45';
 if(match(/^(paco2|pa co2|arterial co2)$/)&&unitOk(/^mmhg$/))return '35–45 mmHg';
 if(match(/^(pao2|pa o2|arterial o2)$/)&&unitOk(/^mmhg$/))return '80–100 mmHg';
 if(match(/^(lactate|lactic acid)$/)&&unitOk(/^mmol\/l$/))return '0.5–2.2 mmol/L';
 if(match(/^albumin$/)&&unitOk(/^g\/dl$/))return '3.5–5.0 g/dL';
 if(match(/^(ast|aspartate aminotransferase)$/)&&unitOk(/^(u\/l|iu\/l)$/))return '10–40 U/L';
 if(match(/^(alt|alanine aminotransferase)$/)&&unitOk(/^(u\/l|iu\/l)$/))return '7–56 U/L';
 if(match(/^(total bilirubin|bilirubin)$/)&&unitOk(/^mg\/dl$/))return '0.1–1.2 mg/dL';
 if(match(/^(tsh|thyroid stimulating hormone)$/)&&unitOk(/^(miu\/l|uiu\/ml)$/))return '0.4–4.0 mIU/L';
 return '';
}
function addLabReferenceRanges(value){
 const raw=String(value||'');
 if(/qr-lab-result|qr-lab-reference-range|qr-lab-reference-missing/i.test(raw))return raw;
 let matched=false,missing=false;
 const lines=raw.split('\n').map(line=>{
  if(/(?:reference|normal)\s+range|ref(?:erence)?\s*:/i.test(line))return line;
  const m=line.match(/^\s*([A-Za-z][A-Za-z0-9 /()_-]{1,45}?)\s*(?:[:=]\s*|\s+)(-?\d+(?:\.\d+)?)\s*([A-Za-zµμ/%0-9.^/-]*)\s*$/);
  if(!m){if(/\b\d+(?:\.\d+)?\b/.test(line))missing=true;return line;}
  const range=quickRNStandardLabRange(m[1],m[3]);
  if(!range){missing=true;return line;}
  matched=true;
  return line+'  (Typical adult reference range: '+range+')';
 });
 let result=lines.join('\n');
 if(matched)result+='\n\nTypical adult reference ranges are educational; age, pregnancy, units, and laboratory methods may change the applicable range.';
 if(missing)result+='\n\nA range for one or more other numeric results was not available in the source item; verify the age- and facility-specific laboratory range.';
 return result;
}
function asText(v){
 if(v==null)return '';
 if(typeof v==='string'||typeof v==='number')return String(v);
 if(Array.isArray(v))return v.map(asText).join('<br>');
 if(typeof v==='object'){
  const name=v.test||v.name||v.analyte||v.label||v.parameter||v.testName||'';
  const value=v.value??v.result??v.measurement??v.observedValue;
  const unit=v.unit||v.units||'';
  const suppliedRange=v.referenceRange??v.normalRange??v.normal??v.range??v.referenceValues;const range=suppliedRange!==undefined&&suppliedRange!==null&&String(suppliedRange).trim()?suppliedRange:quickRNStandardLabRange(name,unit);
  if(value!==undefined&&value!==null){
   const rangeText=range!==undefined&&range!==null&&String(range).trim()?'<span class="qr-lab-reference-range"><strong>'+(suppliedRange?'Reference range:':'Typical adult reference range:')+'</strong> '+escapeHTML(typeof range==='object'?JSON.stringify(range):range)+'</span>':'<span class="qr-lab-reference-missing">Reference range not supplied in source record</span>';
   return '<div class="qr-lab-result"><strong>'+escapeHTML(name||'Result')+':</strong> '+escapeHTML(value)+' '+escapeHTML(unit)+' '+rangeText+'</div>';
  }
  if(Array.isArray(v.results)||Array.isArray(v.values))return asText(v.results||v.values);
  return Object.entries(v).map(([key,value])=>'<div><strong>'+escapeHTML(key)+':</strong> '+asText(value)+'</div>').join('');
 }
 return String(v);
}

function safeClinicalHTML(value){
 if(typeof value!=='string')return asText(value);
 const template=document.createElement('template');
 template.innerHTML=value;
 const allowed=new Set(['BR','P','B','STRONG','I','EM','U','UL','OL','LI','TABLE','THEAD','TBODY','TR','TH','TD','DIV','SPAN']);
 const forbidden=new Set(['SCRIPT','STYLE','IFRAME','OBJECT','EMBED','SVG','MATH','FORM','INPUT','BUTTON','VIDEO','AUDIO','LINK','META']);
 const walk=node=>[...node.childNodes].forEach(child=>{
  if(child.nodeType!==1)return;
  if(forbidden.has(child.tagName)){child.remove();return;}
  walk(child);
  if(!allowed.has(child.tagName)){child.replaceWith(...child.childNodes);return;}
  [...child.attributes].forEach(attr=>{const name=attr.name.toLowerCase();if(!(['colspan','rowspan'].includes(name)&&/^\d{1,2}$/.test(attr.value)))child.removeAttribute(attr.name);});
 });
 walk(template.content);
 return template.innerHTML;
}

function caseTabs(q){
 const tabs=[],seen=new Set();
 const normalizedKey=key=>String(key||'').replace(/[^a-z0-9]/gi,'').toLowerCase();
 const vitalValue=value=>{
  if(value==null)return '';
  if(Array.isArray(value))return value.map(vitalValue).filter(Boolean).join(', ');
  if(typeof value==='object'){
   const reading=value.value??value.reading??value.result??value.measurement;
   if(reading!==undefined&&reading!==null)return String(reading)+(value.unit||value.units?' '+(value.unit||value.units):'');
   return Object.entries(value).map(([key,item])=>key+': '+vitalValue(item)).filter(Boolean).join('; ');
  }
  return String(value).trim();
 };
 function formatVitalSigns(value){
  if(typeof value==='string')return value.split(/\r?\n/).map(escapeHTML).join('<br>');
  if(!value||typeof value!=='object'||Array.isArray(value))return asText(value);
  const entries=Object.entries(value),definitions=[
   ['Temperature',['temperature','temp']],['Heart rate',['heartrate','hr']],['Pulse rate',['pulserate','pulse']],
   ['Respiratory rate',['respiratoryrate','rr']],['Blood pressure',['bloodpressure','bp']],
   ['Oxygen saturation',['oxygensaturation','spo2']],['Oxygen support',['oxygensupport','oxygendevice','oxygendelivery']],
   ['Pain score',['painscore','pain']]
  ];
  const used=new Set(),rows=[];
  definitions.forEach(([label,aliases])=>{const entry=entries.find(([key,item])=>aliases.includes(normalizedKey(key))&&vitalValue(item));if(entry){used.add(normalizedKey(entry[0]));rows.push([label,vitalValue(entry[1])]);}});
  const metadata=new Set(['provenance','sourcenote','note','recordedat','timestamp','source','assessmentnote']);
  entries.forEach(([key,item])=>{const nk=normalizedKey(key);if(used.has(nk)||metadata.has(nk)||!vitalValue(item))return;const label=String(key).replace(/([a-z0-9])([A-Z])/g,'$1 $2').replace(/[_-]+/g,' ').replace(/\b\w/g,ch=>ch.toUpperCase());rows.push([label,vitalValue(item)]);});
  const note=value.sourceNote||value.note||value.provenance||'';
  return '<table><thead><tr><th>Vital sign</th><th>Recorded value</th></tr></thead><tbody>'+rows.map(([label,item])=>'<tr><td><strong>'+escapeHTML(label)+'</strong></td><td>'+escapeHTML(item)+'</td></tr>').join('')+'</tbody></table>'+(note?'<p><strong>Case data note:</strong> '+escapeHTML(note)+'</p>':'');
 }
 const add=(label,content)=>{
  if(content===undefined||content===null)return;
  if(/^(patient\s*(information|info|profile|details)|demographics)$/i.test(String(label||'').trim().replace(/\s+/g,' '))&&(q.patientProfile||q.patientInfo||q.patientInformation||q.patient_information))return;
  const isVitalSigns=/^vital\s*signs?$/i.test(String(label||'').trim());
  const raw=isVitalSigns?formatVitalSigns(content):(typeof content==='string'?content:asText(content));
  let text=stripClinicalLead(String(raw||''),q);
  if(!text.trim())return;
  if(/diagnostic|lab result|laboratory/i.test(label)&&/\b\d+(?:\.\d+)?\b/.test(text))text=addLabReferenceRanges(text);
  const key=(label+' '+text).replace(/\s+/g,' ').toLowerCase();
  if(seen.has(key))return;
  seen.add(key);tabs.push({label,content:text});
 };
 const addCollection=(collection,prefix)=>{
  if(Array.isArray(collection))collection.forEach((item,index)=>add(item?.title||item?.label||prefix+' '+(index+1),item?.content||item?.text||item?.value||item?.summary||item));
  else if(collection&&typeof collection==='object')Object.entries(collection).forEach(([label,value])=>add(label,value));
 };
 const cs=q.caseStudy||q.case_study||q.caseStudyData||q.clinicalCase||q.caseRecord;const context=q.caseStudyContext||q.caseContext||q.clinicalCaseContext||{};if(q.tabs)addCollection(q.tabs,'Clinical information');
 if(cs&&Array.isArray(cs.tabs))addCollection(cs.tabs,'Clinical Notes');if(context&&Array.isArray(context.tabs))addCollection(context.tabs,'Clinical Notes');
 if(context&&typeof context==='object'){[['Clinical Scenario',context.scenario||context.clinicalScenario||context.situation],['Case Overview',context.summary||context.description||context.narrative],['Medical History',context.medicalHistory||context.history],['Patient Information',context.patientInformation||context.patientInfo],['Nurses’ Notes',context.nursesNotes||context.notes],['Vital Signs',context.vitalSigns],['Lab Results',context.labResults],['Orders',context.orders||context.providerOrders]].forEach(([label,value])=>add(label,value));['exhibits','records','tabs','clinicalRecords'].forEach(key=>addCollection(context[key],key));}if(cs&&typeof cs==='object'){
  [['Clinical Scenario',cs.scenario||cs.clinicalScenario||cs.situation],['Case Overview',cs.summary||cs.description||cs.narrative],['Medical History',cs.medicalHistory||cs.history],['Patient Information',cs.patientInformation||cs.patientInfo],['Nurses’ Notes',cs.nursesNotes||cs.notes],['Vital Signs',cs.vitalSigns],['Lab Results',cs.labResults],['Diagnostic Results',cs.diagnosticResults],['Orders',cs.orders||cs.providerOrders],['History & Physical',cs.historyPhysical]].forEach(([label,value])=>add(label,value));
  ['exhibits','records','tabs','clinicalRecords'].forEach(key=>addCollection(cs[key],key));
 }
 const ehr=q.ehr||q.ehrData||q.clinicalRecord||q.clinicalRecords||q.medicalRecord||{},ehrTabs=ehr.tabs&&typeof ehr.tabs==='object'?ehr.tabs:{};
 [['Nurses’ Notes',ehrTabs.nursesNotes||ehrTabs.nurses_notes],['Vital Signs',ehrTabs.vitalSigns||ehrTabs.vital_signs],['Lab Results',ehrTabs.labResults||ehrTabs.lab_results],['Orders',ehrTabs.providerOrders||ehrTabs.provider_orders||ehrTabs.orders],['History & Physical',ehrTabs.historyPhysical||ehrTabs.history_physical||ehrTabs.history]].forEach(([label,value])=>add(label,value));
 addCollection(ehrTabs.additionalTabs,'Clinical information');addCollection(ehr.additionalTabs,'Clinical information');
 [['Nurses’ Notes',ehr.nursesNotes||ehr.notes||q.nursesNotes],['Vital Signs',ehr.vitalSigns||q.vitalSigns],['Lab Results',ehr.labResults||q.labResults],['Diagnostic Results',ehr.diagnosticResults||q.diagnosticResults],['Orders',ehr.orders||ehr.providerOrders||q.orders||q.providerOrders],['History & Physical',ehr.historyPhysical||q.historyPhysical],['Clinical Assessment',ehr.assessment||q.assessment],['Priority Assessment',ehr.priorityAssessment||q.priorityAssessment],['Medication Record',ehr.medicationRecord||q.medicationRecord],['Intake & Output',ehr.intakeOutput||q.intakeOutput],['Patient Information',ehr.patientInformation||q.patientInfo||q.patientInformation||q.patient_information],['Clinical Scenario',q.scenario||q.clinicalScenario||q.patientScenario||q.situation||q.passage||q.stimulus||q.caseStudyText||q.case_study_text],['Patient History',q.patientHistory||q.medicalHistory],['Physical Assessment',q.physicalAssessment||q.assessmentFindings],['Clinical Data',q.clinicalData||q.chartData||q.emr]].forEach(([label,value])=>add(label,value));
 if(typeof cs==='string')add('Clinical Scenario',cs);
 const patient=q.patientProfile||q.patientInfo||q.patientInformation||q.patient_information;
 if(typeof patient==='string')add('Patient Information',patient);
 else if(patient&&typeof patient==='object')add('Patient Information',patient.summary||patient.description||patient.history||patient.notes||patient);
 if(context.summary)add('Case Overview',context.summary);if(context.scenario||context.clinicalScenario)add('Clinical Scenario',context.scenario||context.clinicalScenario);
 addCollection(q.exhibits,'Exhibit');
 return tabs;
}
function ensureClinicalScenarioStyle(){if(document.getElementById('quickrn-clinical-scenario-style'))return;const style=document.createElement('style');style.id='quickrn-clinical-scenario-style';style.textContent='#case-study-content .qr-clinical-scenario-text{font-size:18px!important;font-weight:700!important;line-height:1.65!important;color:#1e293b}#case-study-content .qr-clinical-scenario-text p,#case-study-content .qr-clinical-scenario-text li{font-size:inherit!important;font-weight:700!important;line-height:inherit!important}#case-study-content table{width:100%;border-collapse:collapse;background:#fff;font-size:13px;table-layout:fixed}#case-study-content th,#case-study-content td{padding:9px 10px;border:1px solid #dce5ed;text-align:left;vertical-align:top;overflow-wrap:anywhere}#case-study-content th{background:#f1f5f9;color:#334155;font-weight:800}#right-panel{min-height:0!important;overflow-y:auto!important;overflow-x:hidden!important;overscroll-behavior:contain}#answer-workspace{min-height:0!important;flex:0 0 auto!important}#rationale-section{position:static!important;inset:auto!important;z-index:auto!important;max-height:none!important;overflow:visible!important;flex:0 0 auto!important}';document.head.appendChild(style);}
function renderCasePanel(q,parts){ensureClinicalScenarioStyle();const tabs=caseTabs(q),hasCase=tabs.length>0,caseKey=window.QuickRNCaseStudySequencer?.keyOf(q)||String(q.id||'');if(caseKey!==activeCaseKey){activeCaseKey=caseKey;activeTab=0;}const tabIndex=hasCase?Math.min(activeTab,tabs.length-1):0,left=$('left-panel'),right=$('right-panel'),main=left?.parentElement,tabHost=$('case-study-tabs'),content=$('case-study-content'),prompt=$('question-prompt');if(!left||!right||!prompt)return;const answerWorkspace=$('answer-workspace');if(main){main.classList.remove('question-only-layout');main.style.display='flex';main.style.flexDirection='row';}left.classList.remove('hidden');right.classList.remove('hidden');left.style.display='flex';left.style.visibility='visible';left.style.width='50%';left.style.flex='1 1 50%';left.style.minHeight='0';left.style.maxHeight='100%';right.style.width='50%';right.style.flex='1 1 50%';right.style.minHeight='0';right.style.height='100%';right.style.maxHeight='100%';right.style.overflowY='auto';right.style.overflowX='hidden';right.style.boxSizing='border-box';right.style.flexDirection='column';right.style.alignItems='stretch';right.style.overscrollBehavior='contain';if(answerWorkspace){answerWorkspace.style.flex='0 0 auto';answerWorkspace.style.minHeight='0';answerWorkspace.style.width='100%';answerWorkspace.style.overflow='visible';}const moveStemLeft=String(q.id||'')==='QR-000420';if(moveStemLeft){prompt.classList.add('qr-left-question-stem');if(prompt.parentElement!==left||prompt.nextElementSibling!==tabHost)left.insertBefore(prompt,tabHost);}else{prompt.classList.remove('qr-left-question-stem');if(prompt.parentElement!==right||prompt.nextElementSibling!==answerWorkspace)right.insertBefore(prompt,answerWorkspace);}content.classList.remove('hidden');tabHost.classList.toggle('hidden',!hasCase);left.classList.remove('question-only-panel');left.classList.toggle('case-record-panel',hasCase);left.style.overflowY='auto';left.style.overflowX='hidden';content.style.flex='1 1 auto';content.style.minHeight='140px';content.style.overflowY='auto';const rationale=$('rationale-section');if(rationale){rationale.classList.add('hidden');rationale.style.display='none';const actionRow=$('submit-btn')?.parentElement;if(rationale.parentElement!==right){if(actionRow)right.insertBefore(rationale,actionRow);else right.appendChild(rationale);}rationale.style.position='static';rationale.style.inset='auto';rationale.style.zIndex='auto';rationale.style.left='auto';rationale.style.top='auto';rationale.style.transform='none';const rationaleCard=rationale.firstElementChild;if(rationaleCard){rationaleCard.style.position='static';rationaleCard.style.inset='auto';rationaleCard.style.left='auto';rationaleCard.style.top='auto';rationaleCard.style.transform='none';rationaleCard.style.width='100%';rationaleCard.style.maxWidth='none';rationaleCard.style.boxSizing='border-box';}rationale.style.display='none';rationale.style.boxSizing='border-box';rationale.style.width='100%';rationale.style.maxWidth='none';rationale.style.height='auto';rationale.style.maxHeight='none';rationale.style.flex='0 0 auto';rationale.style.overflowY='visible';rationale.style.overflowX='hidden';rationale.style.margin='18px 0 8px';rationale.style.padding='0';rationale.style.background='transparent';rationale.style.alignItems='stretch';rationale.style.justifyContent='flex-start';}const videoResources=$('video-resources');if(videoResources&&videoResources.parentElement!==left)left.appendChild(videoResources);if(hasCase){tabHost.innerHTML=tabs.map((t,i)=>'<button type="button" data-tab="'+i+'" onclick="switchCaseTab('+i+')" class="px-4 py-3 whitespace-nowrap border-b-2 '+(i===tabIndex?'border-cyan-600 text-cyan-800 bg-white':'border-transparent text-slate-500 hover:text-slate-800')+'">'+escapeHTML(t.label)+'</button>').join('');const firstTabText=/^vital\s*signs?$/i.test(tabs[tabIndex].label)?tabs[tabIndex].content:(renderer()?.cleanClinicalText(tabs[tabIndex].content,q)??stripClinicalLead(tabs[tabIndex].content,q));const firstTabClass=/clinical scenario|case overview|patient information/i.test(tabs[tabIndex].label)?'qr-clinical-scenario-text':'qr-clinical-record-text';content.innerHTML='<div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">'+escapeHTML(tabs[tabIndex].label)+'</div><div class="'+firstTabClass+'">'+(typeof firstTabText==='string'&&/<[a-z][\s\\S]*>/i.test(firstTabText)?safeClinicalHTML(firstTabText):asText(firstTabText))+'</div>';}else{tabHost.innerHTML='';const scenario=stripClinicalLead(parts?.scenario||'',q);content.innerHTML=scenario?'<div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Clinical Scenario</div><div class="qr-clinical-scenario-text whitespace-pre-line"><strong>'+escapeHTML(scenario)+'</strong></div>':'<div class="h-full min-h-[180px] flex flex-col items-center justify-center text-center text-slate-500 p-6"><div class="text-3xl mb-3 text-slate-300"><i class="fa-solid fa-clipboard-list"></i></div><strong class="text-sm text-slate-600">Clinical information</strong><p class="text-xs mt-2 max-w-xs">No separate patient record or case exhibits are attached to this item.</p></div>';if(!moveStemLeft)right.insertBefore(prompt,answerWorkspace);if(videoResources)left.appendChild(videoResources);}}
function switchCaseTab(index){const q=currentQuestion();if(!q)return;const tabs=caseTabs(q);if(!tabs[index])return;activeTab=index;document.querySelectorAll('#case-study-tabs button').forEach((b,i)=>{b.className='px-4 py-3 whitespace-nowrap border-b-2 '+(i===index?'border-cyan-600 text-cyan-800 bg-white':'border-transparent text-slate-500 hover:text-slate-800');});const tabText=/^vital\s*signs?$/i.test(tabs[index].label)?tabs[index].content:renderer().cleanClinicalText(tabs[index].content,q),tabClass=/clinical scenario|case overview|patient information/i.test(tabs[index].label)?'qr-clinical-scenario-text':'qr-clinical-record-text';$('case-study-content').innerHTML='<div class="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">'+escapeHTML(tabs[index].label)+'</div><div class="'+tabClass+' leading-relaxed text-sm">'+(typeof tabText==='string'&&/<[a-z][\s\\S]*>/i.test(tabText)?safeClinicalHTML(tabText):escapeHTML(tabText))+'</div>';}
function clearSubmissionError(){const status=$('status-message');if(!status)return;status.textContent='';status.classList.add('hidden');status.classList.remove('text-red-700','bg-red-50','border','border-red-200','rounded','px-3','py-2');status.removeAttribute('role');}
function showSubmissionError(){const status=$('status-message');if(status){status.textContent='Please enter or select an answer before submitting.';status.classList.remove('hidden');status.classList.add('text-red-700','bg-red-50','border','border-red-200','rounded','px-3','py-2');status.setAttribute('role','alert');}const workspace=$('answer-workspace');if(workspace)workspace.scrollIntoView({behavior:'smooth',block:'nearest'});}
function renderAnswerArea(q){const r=currentRecord(q),api=renderer();if(!api||typeof api.renderReact!=='function'){$('answer-workspace').textContent='The shared question renderer did not load.';return;}const temp=document.createElement('div');const submitted=!!r.submitted;temp.innerHTML=api.renderReact(q,r.draft,function(legacy){if(mode==='selfstudy'&&r.submitted)return;r.draft=legacy;r.submitted=false;clearSubmissionError();saveState();},submitted);const response=temp.querySelector('.qr-response-area');$('answer-workspace').innerHTML=response?response.innerHTML:temp.innerHTML;$('answer-workspace').classList.toggle('answer-locked',submitted);}
function updateProgress(){const done=session.filter(q=>answers[q.id]?.submitted).length;$('session-info-pill')?.replaceChildren(document.createTextNode(done+' answered'));if(isAdaptiveMode())$('q-total-display').textContent=String(maxItems);}
function enableRationaleDragging(){
 const overlay=$('rationale-section'),card=overlay?.firstElementChild,handle=card?.firstElementChild;
 if(!overlay||!card||!handle||handle.dataset.dragReady==='1')return;
 handle.dataset.dragReady='1';handle.classList.add('qr-rationale-drag-handle');handle.title='Drag to move this rationale panel';
 let active=null;
 handle.addEventListener('pointerdown',event=>{
  if(event.target.closest('button,a,input,select,textarea'))return;
  const rect=card.getBoundingClientRect();active={x:event.clientX,y:event.clientY,left:rect.left,top:rect.top};
  card.style.position='fixed';card.style.margin='0';card.style.left=rect.left+'px';card.style.top=rect.top+'px';card.style.transform='none';
  handle.setPointerCapture?.(event.pointerId);event.preventDefault();
 });
 handle.addEventListener('pointermove',event=>{
  if(!active)return;const width=card.offsetWidth,height=card.offsetHeight;
  const left=Math.max(8,Math.min(window.innerWidth-width-8,active.left+event.clientX-active.x));
  const top=Math.max(8,Math.min(window.innerHeight-height-8,active.top+event.clientY-active.y));
  card.style.left=left+'px';card.style.top=top+'px';
 });
 const stop=()=>{active=null;};handle.addEventListener('pointerup',stop);handle.addEventListener('pointercancel',stop);
}
function closeRationale(){const panel=$('rationale-section');if(panel){panel.classList.add('hidden');panel.style.display='none';}}
function hasResponseValue(value){if(Array.isArray(value))return value.length>0&&value.some(hasResponseValue);if(value&&typeof value==='object')return Object.values(value).some(hasResponseValue);if(typeof value==='number')return Number.isFinite(value);if(typeof value==='boolean')return value;return value!==undefined&&value!==null&&String(value).trim()!=='';}
function collectRenderedResponse(q,draft){
 const workspace=$('answer-workspace'),format=String(renderer()?.detect(q)||'').toLowerCase(),next=draft&&typeof draft==='object'?{...draft}:{};
 if(!workspace)return next;
 if(format.includes('matrix')||format.includes('grid')){
  const table=workspace.querySelector('.qr-matrix');
  if(table){
   const matrix={...(next.matrix||{})},headers=[...table.querySelectorAll('thead th')].map(x=>x.textContent.trim());
   table.querySelectorAll('tbody tr').forEach((tr,index)=>{
    const cells=[...tr.querySelectorAll('td')],inputs=[...tr.querySelectorAll('input')],chosen=inputs.filter(x=>x.checked);
    const name=inputs[0]?.name||'',id=name.startsWith('qr-matrix-')?name.slice(10):String(index);
    if(!chosen.length)return;
    const values=chosen.map(input=>input.closest('label')?.querySelector('.qr-matrix-option-label')?.textContent?.trim()||'').filter(Boolean);
    if(inputs.some(x=>x.type==='checkbox'))matrix[id]=values;else matrix[id]=values[0]||'';
   });
   next.matrix=matrix;
  }
 }
 if(format.includes('bowtie')){
  const groups=[...workspace.querySelectorAll('.qr-bowtie-group')];
  groups.forEach(group=>{
   const heading=(group.querySelector('h4')?.textContent||'').toLowerCase();
   const selected=[...group.querySelectorAll('input:checked')].map(input=>input.closest('label')?.querySelector('span')?.textContent?.trim()||'').filter(Boolean);
   if(heading.includes('condition'))next.condition=selected[0]||next.condition||'';
   else if(heading.includes('action'))next.actions=selected;
   else if(heading.includes('monitor'))next.monitoring=selected;
  });
 }
 return next;
}
function canSubmitResponse(q,draft,legacyDraft){
 const api=renderer(),format=String(api?.detect(q)||'').toLowerCase(),d=draft&&typeof draft==='object'?draft:{},raw=legacyDraft&&typeof legacyDraft==='object'?legacyDraft:{};
 const filled=v=>{if(Array.isArray(v))return v.some(filled);if(v&&typeof v==='object')return Object.values(v).some(filled);return v!==undefined&&v!==null&&String(v).trim()!=='';};
 // The legacy renderer stores Matrix and Cloze answers as the selected-cell / blank maps.
 // Normalize both representations so compatibility-layer conversions cannot hide a real selection.
 if(format.includes('matrix')||format.includes('grid'))return !!api?.hasAnswer(q,d)||!!api?.hasAnswer(q,raw);
 if(format.includes('cloze')||format.includes('drop-down')||format.includes('dropdown'))return !!api?.hasAnswer(q,d)||!!api?.hasAnswer(q,raw);
 if(format.includes('bowtie'))return !!api?.hasAnswer(q,d)||!!api?.hasAnswer(q,raw);
 if(format==='single choice')return filled(d.choice)||filled(d.selectedOption)||filled(d.selected)||filled(raw.choice)||filled(raw.selectedOption)||filled(typeof legacyDraft==='string'?legacyDraft:'')||!!api?.hasAnswer(q,d);
 if(format==='select n')return Array.isArray(d.choices)&&d.choices.length>0||Array.isArray(raw.choices)&&raw.choices.length>0;
 return !!(api?.hasAnswer(q,d)||api?.hasAnswer(q,raw)||filled(d)||filled(raw));
}
function submitAnswer(){
 const q=currentQuestion();if(!q||finished)return false;
 const r=currentRecord(q);if(r.submitted)return true;
 const api=renderer(),legacyDraft=r.draft??{};
 let draft=api.toDraft(q,legacyDraft)||{};
 draft=collectRenderedResponse(q,draft);
 if(!canSubmitResponse(q,draft,legacyDraft)){showSubmissionError();return false;}
 clearSubmissionError();
 const format=String(api.detect(q)||'').toLowerCase();
 if(format.includes('matrix')||format.includes('grid'))draft.matrix=draft.matrix||legacyDraft.matrix||legacyDraft;
 if(format.includes('cloze')||format.includes('drop-down')||format.includes('dropdown'))draft.cloze=draft.cloze||legacyDraft.cloze||legacyDraft;
 if(format.includes('bowtie'))draft={...draft,condition:draft.condition??legacyDraft.condition??'',actions:draft.actions||legacyDraft.actions||[],monitoring:draft.monitoring||legacyDraft.monitoring||legacyDraft.params||[]};
 r.draft=api.fromDraft(q,draft);
 r.submitted=true;r.lastSubmittedAt=new Date().toISOString();
 const detail=api.grade(q,draft);
 r.result=detail&&typeof detail==='object'?detail:{isCorrect:!!detail,earned:detail?1:0,max:1};
 r.isCorrect=!!r.result.isCorrect;saveState();renderAnswerArea(q);
 const status=$('status-message');if(status){status.textContent='';status.classList.add('hidden');}
 recordMetric(q,r);$('submit-btn').parentElement.classList.add('hidden');
 if(mode==='selfstudy'){showRationale(q,r);}else{$('rationale-section')?.classList.add('hidden');if($('rationale-section'))$('rationale-section').style.display='none';setTimeout(()=>navigateQuestion(1),0);}
 updateProgress();return true;
}
function recordMetric(q,r){if(r.metricRecorded)return;r.metricRecorded=true;try{window.QuickRNQuestionMetrics?.record(q,!!r.isCorrect,mode);}catch(e){}try{window.QuickRNCoach?.recordClientNeedAttempt(q,!!r.isCorrect);}catch(e){}saveState();}
function rationaleText(v){if(v==null)return '';if(typeof v==='string'||typeof v==='number')return String(v);if(Array.isArray(v))return v.map(rationaleText).filter(Boolean).join(' ');if(typeof v==='object')return String(v.rationale||v.explanation||v.feedback||v.text||v.description||'');return '';}
function buildTeachingRationale(q,r,result){
 const suppliedRationale=rationaleText(q.rationale||q.explanation||q.generalRationale||q.rationales);const core=suppliedRationale||(String(q.id||'')==='QR-002150'?'The findings are consistent with acute alcohol withdrawal. Symptoms commonly begin within 6–24 hours after the last alcohol intake as the central nervous system becomes hyperexcitable after chronic alcohol exposure is abruptly stopped. Tremor, diaphoresis, tachycardia, and visual disturbances indicate clinically significant withdrawal and may progress to seizures or delirium tremens. Administer a prescribed benzodiazepine using the facility’s symptom-triggered protocol (such as CIWA-Ar) to reduce withdrawal severity and prevent complications. Institute seizure and fall precautions, maintain a calm low-stimulation environment, and provide supportive hydration and thiamine as prescribed. Monitor the CIWA-Ar score and vital signs (especially heart rate, blood pressure, temperature, respiratory rate, and oxygenation) for worsening autonomic instability, oversedation, or respiratory depression. Escalate promptly for worsening confusion, hallucinations, seizures, or unstable vital signs.':'A detailed clinical rationale has not yet been supplied for this question.');
 const correctText=rationaleText(q.correctAnswerText||q.correctAnswer||q.correctOption)||'Review the keyed response shown above.';
 const pearl=rationaleText(q.clinicalPearl||q.keyTakeaway||q.clinicalPrinciple||q.teachingPoint||q.memoryAid||q.testTakingTip);
 const pearlText=pearl||core.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().slice(0,360)||'Use the patient’s most important clinical cue to select the safest, most appropriate nursing response.';
 return '<section class="space-y-2"><p class="text-sm leading-relaxed text-slate-700"><strong>'+escapeHTML(correctText)+'</strong></p><div class="text-sm leading-relaxed text-slate-700">'+safeClinicalHTML(core)+'</div></section><section class="rounded-lg border border-cyan-200 bg-cyan-50 p-4 space-y-1"><h4 class="text-xs font-black uppercase tracking-wide text-cyan-900">Clinical principle to remember</h4><p class="text-sm leading-relaxed text-slate-800">'+safeClinicalHTML(pearlText)+'</p></section>';
}
function showRationale(q,r){
 if(mode==='selfstudy'&&r?.submitted)renderLearningResources(q);else{const videoHost=$('video-resources');if(videoHost)videoHost.innerHTML='';}
 const graded=renderer().grade(q,renderer().toDraft(q,r.draft)),result=r.result||(graded&&typeof graded==='object'?graded:{isCorrect:!!graded,earned:graded?1:0});
 const rationaleMarkup=buildTeachingRationale(q,r,result),template=document.createElement('template');template.innerHTML=rationaleMarkup;const firstRationaleSection=template.content.querySelector('section');const keyedAnswerLine=firstRationaleSection?.querySelector('p');if(keyedAnswerLine?.querySelector('strong'))keyedAnswerLine.remove();template.content.querySelectorAll('h3,h4,h5').forEach(heading=>{if(/^(best answer|clinical principle to remember|clinical study approach)$/i.test(heading.textContent.trim())){const block=heading.closest('section')||heading.parentElement?.parentElement;if(block)block.remove();}});
  $('rationale-section').classList.remove('hidden');$('rationale-section').style.display='block';
 $('result-badge').textContent=result.isCorrect?'CORRECT':'INCORRECT';$('result-badge').className='px-3 py-1 rounded text-xs font-bold uppercase text-white '+(result.isCorrect?'bg-green-600':'bg-red-600');
 $('score-earned').textContent='Score: '+result.earned+'/'+result.max+(result.scoringMethod?' · '+result.scoringMethod:'');$('peer-stats')?.parentElement?.remove();$('rationale-text').innerHTML=template.innerHTML;
 const insight=window.QuickRNCoach?.buildTutorInsight(q,!!r.isCorrect);
 if($('coach-insight'))$('coach-insight').innerHTML=insight?'<div class="rounded-lg border border-cyan-100 bg-cyan-50 p-4"><div class="text-xs font-black uppercase tracking-wider text-cyan-900">Clinical Study Coach</div><p class="text-sm text-slate-700 mt-2">'+escapeHTML(insight.guidance)+'</p><p class="text-xs text-slate-600 mt-2">'+escapeHTML(insight.outcome)+'</p></div>':'';
 if($('confidence-saved'))$('confidence-saved').textContent=r.confidence?'Saved confidence: '+({1:'Guessing',2:'Somewhat sure',3:'Very sure'}[r.confidence]):'Optional · helps identify confidence gaps';
 $('rationale-section').classList.remove('hidden');$('rationale-section').style.display='block';
}
function renderLearningResources(q){
 const host=$('video-resources');if(!host)return;
 const videos=(window.QuickRNYoutube?.getTwoVideos(q)||[]).slice(0,2);
 const cards=videos.map((v,index)=>{
  let id=String(v.id||v.videoId||v.youtubeId||'').trim();
  if(!/^[A-Za-z0-9_-]{11}$/.test(id)){const match=String(v.url||v.embedUrl||'').match(/(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/);id=match?match[1]:'';}
  const title=escapeHTML(v.title||'NCLEX video lesson'),channel=escapeHTML(v.channel||v.provider||'YouTube');
  if(id)return '<article class="mb-4 overflow-hidden rounded-lg border border-slate-200 bg-white"><div class="px-3 py-2"><div class="text-sm font-semibold text-slate-800">'+title+'</div><div class="text-xs text-slate-500">'+channel+'</div></div><div class="aspect-video bg-black"><iframe class="h-full w-full" loading="lazy" src="https://www.youtube-nocookie.com/embed/'+encodeURIComponent(id)+'" title="'+title+'" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div></article>';
  const url=String(v.url||v.searchUrl||window.QuickRNYoutube?.getVideoSearchUrl(q,index?'clinical':'review')||'');
  return '<a target="_blank" rel="noopener noreferrer" href="'+escapeHTML(url)+'" class="mb-3 flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 hover:bg-slate-50"><span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600"><i class="fa-brands fa-youtube"></i></span><span class="min-w-0"><strong class="block text-sm text-slate-800">'+title+'</strong><span class="block text-xs text-slate-500">'+channel+' · Open video results</span></span></a>';
 }).join('');
 host.innerHTML='<div class="mb-3"><div class="text-sm font-bold text-slate-800">Video lessons</div><p class="mt-1 text-xs text-slate-500">Watch a matched lesson or open the topic-specific YouTube results.</p></div>'+(cards||'<p class="text-xs text-slate-500">No video recommendations are available for this question.</p>');
}
function reviewSupport(q,wasCorrect){const insight=window.QuickRNCoach?.buildTutorInsight(q,wasCorrect);const coach='<div class="mt-3 rounded-lg bg-cyan-50 border border-cyan-100 p-3"><div class="text-xs font-black uppercase tracking-wider text-cyan-900">Clinical Study Coach</div><p class="text-xs text-slate-700 mt-2">'+escapeHTML(insight?.guidance||'Connect the key clinical cue to the safest nursing action.')+'</p><p class="text-xs text-slate-600 mt-1">'+escapeHTML(insight?.outcome||'Review the rationale and apply the concept to a new clinical scenario.')+'</p></div>';if(mode!=='selfstudy')return coach;const videos=window.QuickRNYoutube?.getTwoVideos(q)||[];return coach+(videos.length?'<div class="mt-3"><div class="text-xs font-black uppercase tracking-wider text-slate-500 mb-2">Related video review</div>'+videos.map(v=>'<a target="_blank" rel="noopener" href="'+escapeHTML(v.url)+'" class="block border rounded-lg p-2 mb-2 text-xs text-cyan-800 hover:bg-cyan-50"><strong>'+escapeHTML(v.title)+'</strong><span class="block text-slate-500 mt-1">'+escapeHTML(v.channel||'Video resource')+'</span></a>').join('')+'</div>':'');}
function gradeAll(){let earned=0,max=0,answered=0,fullyCorrect=0,partialCorrect=0,results=[];session.forEach(q=>{const r=currentRecord(q);const d=renderer().toDraft(q,r.draft);if(mode!=='selfstudy'&&!r.submitted&&hasResponseValue(d)){r.submitted=true;r.draft=renderer().fromDraft(q,d);}if(!r.submitted)return;const graded=renderer().grade(q,d),g=graded&&typeof graded==='object'?graded:{earned:graded?1:0,max:1,isCorrect:!!graded};r.result=g;r.isCorrect=!!g.isCorrect;earned+=g.earned||0;max+=g.max||1;answered++;if(g.isCorrect)fullyCorrect++;else if((g.earned||0)>0)partialCorrect++;recordMetric(q,r);results.push({q,r,g});});return {earned,max,answered,fullyCorrect,wrong:answered-fullyCorrect-partialCorrect,partialCorrect,accuracy:answered?Math.round(fullyCorrect/answered*100):0,percentage:max?Math.round(earned/max*100):0,unanswered:session.length-answered,results};}
function finishExam(reason){if(finished)return;finished=true;paused=true;clearInterval(timerInterval);originalSession=session.slice();const score=gradeAll();const studyStreak=mode==='selfstudy'?updateStudyStreak():null;const responses=answeredResponses();if(isAdaptiveMode()&&window.QuickRNCAT){const timedOut=/time limit reached/i.test(String(reason||'')),maxReached=responses.length>=150;catDecision=window.QuickRNCAT.evaluate(responses,timedOut||maxReached);if(timedOut&&responses.length<85)catDecision={...catDecision,status:'FAIL',reason:'Fewer than 85 items were completed before the five-hour time limit.'};}const probability=catDecision&&catDecision.items>=85?catDecision.passProbability:null;const state=readJSON('quickrn_student_state',{})||{};state.studentStats=state.studentStats||{};const st=state.studentStats;st.testsTaken=(st.testsTaken||0)+1;st.totalAnswered=(st.totalAnswered||0)+score.answered;st.correctCount=(st.correctCount||0)+score.fullyCorrect;st.mistakeCount=(st.mistakeCount||0)+score.wrong;if(probability!==null)st.passingProbability=probability;st.examHistory=Array.isArray(st.examHistory)?st.examHistory:[];const history={completed:true,completionStatus:'completed',mode:titles[mode],totalAnswered:score.answered,totalItems:session.length,scorePercent:score.percentage,accuracyPercent:score.accuracy,earnedPoints:score.earned,maxPoints:score.max,correctCount:score.fullyCorrect,partialCorrectCount:score.partialCorrect,wrongCount:score.wrong,unansweredCount:score.unanswered,durationSeconds:elapsedSeconds,passingProbability:probability,status:catDecision?.status||null,decisionReason:catDecision?.reason||null,theta:catDecision?Number(catDecision.theta.toFixed(3)):null,standardError:catDecision?Number(catDecision.se.toFixed(3)):null,completedAt:new Date().toISOString(),reason:reason||'Completed'};st.examHistory.push(history);state.studentStats=st;writeJSON('quickrn_student_state',state);const used=readJSON('quickrn_used_q_ids',[])||[];const add=session.filter(q=>answers[q.id]?.submitted).map(q=>q.id);writeJSON('quickrn_used_q_ids',[...new Set(used.concat(add))]);showSummary(score,history,reason,studyStreak);}
function showSummary(score,history,reason,studyStreak){const isAdaptive=isAdaptiveMode();let resultLabel='Practice complete';if(isAdaptive&&catDecision)resultLabel=catDecision.status==='PASS'?'Practice standard met':catDecision.status==='FAIL'?'Below practice standard':'Inconclusive result';if(mode==='predictor'&&session.length<150)resultLabel='Limited practice result — '+session.length+' of 150 items';const theta=catDecision?'<div class="rounded-lg bg-slate-50 border p-4"><div class="text-xs text-slate-500">Ability estimate (θ)</div><div class="text-2xl font-black">'+catDecision.theta.toFixed(2)+'</div><div class="text-xs text-slate-500 mt-1">Standard error: '+catDecision.se.toFixed(2)+'</div></div>':'';const formatMap={},judgmentMap={},difficultyMap={};score.results.forEach(x=>{const fmt=window.QuickRNNgnScoring?.format(x.q)||renderer().detect(x.q)||'Other';formatMap[fmt]=(formatMap[fmt]||0)+1;const rawDifficulty=x.q.difficulty;const level=typeof rawDifficulty==='number'?(rawDifficulty<=-.5?'Easy':rawDifficulty>=.5?'Hard':'Medium'):String(rawDifficulty||'Unspecified').replace(/\b\w/g,c=>c.toUpperCase());const dm=difficultyMap[level]||(difficultyMap[level]={attempted:0,correct:0,earned:0,max:0});dm.attempted++;dm.earned+=Number(x.g.earned)||0;dm.max+=Number(x.g.max)||1;if(x.g.isCorrect)dm.correct++;const stages=['Recognize cues','Analyze cues','Prioritize hypotheses','Generate solutions','Take action','Evaluate outcomes'];const explicitStep=x.q.clinicalJudgmentStep||x.q.cjmmStep||x.q.ngnStep||x.q.judgmentStep;const sequenceValue=x.q.caseQuestionNumber??x.q.caseQuestionIndex??x.q.questionSequence??x.q.sequenceNumber??x.q.stepNumber??x.q.caseStudyContext?.stepIndex;const sequenceNumber=Number(sequenceValue);const step=explicitStep||(sequenceValue!==undefined&&Number.isFinite(sequenceNumber)?stages[Math.max(0,Math.min(5,sequenceNumber===0?0:sequenceNumber-1))]:null);if(step){const label=stages.includes(String(step))?String(step):String(step).replace(/[-_]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());const jm=judgmentMap[label]||(judgmentMap[label]={attempted:0,correct:0,earned:0,max:0});jm.attempted++;jm.earned+=Number(x.g.earned)||0;jm.max+=Number(x.g.max)||1;if(x.g.isCorrect)jm.correct++;}});const formatHtml='<div class="px-5 pb-5"><h3 class="font-bold text-slate-900 mb-3">Item format breakdown</h3><div class="flex flex-wrap gap-2">'+Object.entries(formatMap).map(([k,v])=>'<span class="rounded-full border bg-slate-50 px-3 py-1 text-xs">'+escapeHTML(k)+': <strong>'+v+'</strong></span>').join('')+'</div></div>';const judgmentHtml=Object.keys(judgmentMap).length?'<div class="px-5 pb-5"><h3 class="font-bold text-slate-900 mb-3">Clinical judgment skills</h3><div class="grid grid-cols-2 md:grid-cols-3 gap-2">'+Object.entries(judgmentMap).map(([k,v])=>'<div class="border rounded-lg p-3 text-xs"><strong>'+escapeHTML(k)+'</strong><div class="text-slate-500 mt-1">'+v.correct+'/'+v.attempted+' fully correct · '+Math.round(v.earned/Math.max(1,v.max)*100)+'% points</div></div>').join('')+'</div></div>':'';const difficultyHtml='<div class="px-5 pb-5"><h3 class="font-bold text-slate-900 mb-3">Performance by item difficulty</h3><div class="grid grid-cols-2 md:grid-cols-4 gap-2">'+Object.entries(difficultyMap).map(([k,v])=>'<div class="border rounded-lg p-3 text-xs"><strong>'+escapeHTML(k)+'</strong><div class="text-slate-500 mt-1">'+v.correct+'/'+v.attempted+' fully correct</div><div class="mt-1 font-bold text-slate-800">'+Math.round(v.earned/Math.max(1,v.max)*100)+'% points</div></div>').join('')+'</div></div>';const domainMap={};score.results.forEach(x=>{const d=window.QuickRNCoach?.classifyClientNeed(x.q);const key=d?.name||'Other / Unclassified';domainMap[key]=domainMap[key]||{attempted:0,earned:0,max:0,correct:0};domainMap[key].attempted++;domainMap[key].earned+=x.g.earned||0;domainMap[key].max+=x.g.max||1;if(x.g.isCorrect)domainMap[key].correct++;});const domainHtml='<div class="px-5 pb-5"><h3 class="font-bold text-slate-900 mb-3">Client Needs performance</h3><div class="grid grid-cols-1 md:grid-cols-2 gap-2">'+Object.entries(domainMap).map(([name,v])=>'<div class="border rounded-lg p-3"><div class="text-xs font-bold">'+escapeHTML(name)+'</div><div class="text-xs text-slate-500 mt-1">'+v.attempted+' item(s) · '+v.correct+'/'+v.attempted+' fully correct ('+Math.round(v.correct/Math.max(1,v.attempted)*100)+'% accuracy) · '+Math.round(v.earned/v.max*100)+'% partial-credit score</div><div class="h-2 bg-slate-100 rounded-full mt-2 overflow-hidden"><div class="h-full bg-cyan-600" style="width:'+Math.round(v.earned/v.max*100)+'%"></div></div></div>').join('')+'</div></div>';const hasProbability=isAdaptive&&catDecision&&catDecision.items>=85;const prob='<div class="rounded-lg bg-cyan-50 border border-cyan-100 p-4"><div class="text-xs text-cyan-800">'+(hasProbability?'Estimated passing probability':isAdaptive?'Readiness estimate':mode==='predictor'?'Predictor score':'Session score')+'</div><div class="text-3xl font-black text-cyan-900">'+(hasProbability?history.passingProbability+'%':isAdaptive?'Not enough responses':score.percentage+'%')+'</div><div class="text-xs text-cyan-700 mt-1">'+(hasProbability?'Model-based practice estimate; not an official NCLEX prediction.':isAdaptive?'CAT estimates ability from adaptive responses; this is not an official NCLEX result.':mode==='predictor'?'Practice score from a fixed-form assessment; not an official NCLEX prediction.':'Partial-credit score for this session.')+'</div></div>';$('summary-screen').innerHTML='<div class="min-h-full bg-slate-100 p-4 md:p-8 overflow-y-auto"><div class="max-w-5xl mx-auto bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden"><div class="bg-archer-darkBlue text-white p-6 flex flex-wrap justify-between gap-4"><div><div class="text-xs uppercase tracking-widest text-cyan-200">QuickRN · '+escapeHTML(titles[mode])+'</div><h2 class="text-2xl font-black mt-1">'+escapeHTML(resultLabel)+'</h2><p class="text-sm text-slate-300 mt-2">'+escapeHTML(reason||'Session submitted')+'</p></div></div><div class="grid grid-cols-2 md:grid-cols-4 gap-3 p-5"><div class="rounded-lg border p-4"><div class="text-xs text-slate-500">Items answered</div><div class="text-2xl font-black">'+score.answered+'</div></div><div class="rounded-lg border p-4"><div class="text-xs text-slate-500">Fully correct</div><div class="text-2xl font-black">'+score.fullyCorrect+'</div></div><div class="rounded-lg border p-4"><div class="text-xs text-slate-500">Points earned</div><div class="text-2xl font-black">'+score.earned+'/'+score.max+'</div></div>'+prob+'</div><div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 px-5 pb-5"><div class="rounded-lg border p-3"><div class="text-xs text-slate-500">Item accuracy</div><div class="text-xl font-black">'+score.accuracy+'%</div></div><div class="rounded-lg border p-3"><div class="text-xs text-slate-500">Partial-credit score</div><div class="text-xl font-black">'+score.percentage+'%</div></div><div class="rounded-lg border p-3"><div class="text-xs text-slate-500">Partially correct</div><div class="text-xl font-black">'+score.partialCorrect+'</div></div><div class="rounded-lg border p-3"><div class="text-xs text-slate-500">Incorrect</div><div class="text-xl font-black">'+score.wrong+'</div></div><div class="rounded-lg border p-3"><div class="text-xs text-slate-500">Unanswered</div><div class="text-xl font-black">'+score.unanswered+'</div></div><div class="rounded-lg border p-3"><div class="text-xs text-slate-500">Total items</div><div class="text-xl font-black">'+session.length+'</div></div><div class="rounded-lg border p-3"><div class="text-xs text-slate-500">Time elapsed</div><div class="text-xl font-black">'+Math.floor(elapsedSeconds/60)+'m '+(elapsedSeconds%60)+'s</div><div class="text-[10px] text-slate-500 mt-1">'+(score.answered?Math.round(elapsedSeconds/score.answered):0)+' sec per answered item</div></div></div>'+(mode==='selfstudy'&&studyStreak?'<div class="mx-5 mb-5 rounded-lg border border-cyan-100 bg-cyan-50 p-3 text-xs text-cyan-900"><strong>Study streak:</strong> '+studyStreak.streak+' day(s) · <strong>Completed sessions:</strong> '+studyStreak.totalSessions+'</div>':'')+(isAdaptive?'<div class="grid grid-cols-1 md:grid-cols-2 gap-3 px-5 pb-5">'+theta+'<div class="rounded-lg border p-4"><div class="text-xs text-slate-500">Decision</div><div class="text-xl font-black">'+escapeHTML(catDecision?.status||'CONTINUE')+'</div><p class="text-xs text-slate-500 mt-2">'+escapeHTML(catDecision?.reason||'Assessment ended')+'</p></div></div>':'')+formatHtml+judgmentHtml+difficultyHtml+domainHtml+'<div class="p-5 border-t"><h3 class="font-bold text-slate-900 mb-3">Question review</h3><div class="space-y-3">'+score.results.map((x,i)=>'<details class="border rounded-lg p-3"><summary class="cursor-pointer flex flex-wrap gap-2 justify-between text-sm"><span><strong>'+(i+1)+'.</strong> '+escapeHTML(clean(x.q.cleanTitle||x.q.title||x.q.questionText||x.q.question).slice(0,140))+'</span><span class="'+(x.g.isCorrect?'text-green-700':'text-red-700')+' font-bold">'+(x.g.earned||0)+'/'+(x.g.max||1)+'</span></summary><div class="mt-3 text-sm text-slate-600"><p><strong>Your response:</strong> '+escapeHTML(renderer().answerSummary(x.q,renderer().toDraft(x.q,x.r.draft)))+'</p><div class="mt-2"><strong>Rationale:</strong><div class="mt-1">'+safeClinicalHTML(String(x.q.rationale||x.q.explanation||'No rationale supplied.'))+'</div></div>'+reviewSupport(x.q,x.g.isCorrect)+'<button type="button" data-summary-bookmark="'+escapeHTML(x.q.id)+'" onclick="toggleSummaryBookmark(\''+escapeHTML(x.q.id)+'\')" class="mt-3 rounded-lg border px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50"><i class="fa-'+(bookmarks.has(x.q.id)?'solid':'regular')+' fa-bookmark mr-1"></i>'+(bookmarks.has(x.q.id)?'Remove bookmark':'Bookmark question')+'</button></div></details>').join('')+'</div></div><div class="p-5 border-t flex justify-end"><button onclick="returnToDashboard()" class="bg-archer-cyan text-white font-bold px-6 py-3 rounded-lg">Return to Dashboard</button></div></div></div>';$('summary-screen').setAttribute('role','dialog');$('summary-screen').setAttribute('aria-modal','true');$('summary-screen').setAttribute('aria-label','Test summary');$('summary-screen').classList.remove('hidden');const footer=$('exam-footer')||document.querySelector('body>footer');if(footer)footer.style.display='none';}
function navigateQuestion(direction){if(!started||finished)return;if(direction<0&&mode!=='selfstudy')return;const next=currentIndex+direction;if(next<0)return;if(direction>0&&mode!=='selfstudy'){const record=currentRecord(currentQuestion());if(!record.submitted){submitAnswer();return;}}if(direction>0&&isAdaptiveMode()){if(currentIndex===session.length-1){const responses=answeredResponses();const forced=responses.length>=maxItems||responses.length>=150;const decision=window.QuickRNCAT?.evaluate(responses,forced);if(decision)catDecision=decision;if(decision&&(decision.status==='PASS'||decision.status==='FAIL'||forced)){finishExam(decision.reason);return;}if((responses.length===45||responses.length===90)&&!breaksOffered.has(responses.length)){breaksOffered.add(responses.length);notice('Scheduled break point reached. You may take a break before continuing.');}const nextQ=chooseAdaptiveQuestion();if(!nextQ){finishExam('Question bank exhausted before a decision could be reached.');return;}session.push(nextQ);currentIndex++;renderCurrent();return;}}if(next>=session.length){if(mode==='selfstudy'||mode==='timed'||mode==='predictor'){finishExam('All selected questions completed.');return;}return;}currentIndex=next;renderCurrent();}
function confirmEndTest(){if(!started){returnToDashboard();return;}let confirmed=true;try{confirmed=typeof window.confirm!=='function'||window.confirm('End this '+titles[mode]+' session and view the results?');}catch(_){confirmed=true;}if(confirmed){finishExam('Ended by student.');}}
function toggleMarkQuestion(){const q=currentQuestion();if(!q)return;if(bookmarks.has(q.id))bookmarks.delete(q.id);else bookmarks.add(q.id);saveState();$('mark-icon').className=bookmarks.has(q.id)?'fa-solid fa-bookmark':'fa-regular fa-bookmark';notice(bookmarks.has(q.id)?'Question bookmarked.':'Bookmark removed.');}

function toggleSummaryBookmark(id){id=String(id||'');if(!id)return;if(bookmarks.has(id))bookmarks.delete(id);else bookmarks.add(id);saveState();const button=[...document.querySelectorAll('[data-summary-bookmark]')].find(b=>b.dataset.summaryBookmark===id);if(button){const saved=bookmarks.has(id);button.innerHTML='<i class="fa-'+(saved?'solid':'regular')+' fa-bookmark mr-1"></i>'+(saved?'Remove bookmark':'Bookmark question');}notice(bookmarks.has(id)?'Question bookmarked.':'Bookmark removed.');}
function toggleCalculator(){$('calc-modal')?.classList.toggle('hidden');}
function calcInput(v){const s=$('calc-screen');if(!s)return;if(v==='C'){s.value='0';return;}s.value=s.value==='0'?v:s.value+v;}
function calcEquals(){const s=$('calc-screen');if(!s)return;try{s.value=window.QuickRNCoach?.safeCalculate(s.value)??'Error';}catch(e){s.value='Error';}}
function toggleNotesModal(){const m=$('notes-modal');if(!m)return;const opening=m.classList.contains('hidden');m.classList.toggle('hidden');const q=currentQuestion();if(opening&&q)$('notes-textarea').value=notes[q.id]||'';}
function saveNotes(){const q=currentQuestion();if(q){notes[q.id]=$('notes-textarea').value;saveState();}toggleNotesModal();notice('Note saved on this device.');}
function toggleFeedbackModal(){const m=$('feedback-modal');if(!m)return;m.classList.toggle('hidden');const q=currentQuestion();if(!m.classList.contains('hidden')&&q)$('fb-qid').textContent=q.id;}
function submitFeedback(){const q=currentQuestion(),detail=$('feedback-details')?.value.trim()||'',reason=$('feedback-category')?.value||'General feedback';if(!detail){notice('Please describe your feedback before submitting.');return;}const question={id:q?.id||null,category:q?.category||null,topic:q?.topic||null,type:q?.ngnType||q?.type||null,prompt:clean(q?.cleanTitle||q?.title||q?.questionText||q?.question||'').slice(0,2500)};const body=['Please review this QuickRN exam / question feedback.','','**Exam mode:** '+titles[mode],'**Page:** '+location.pathname,'**Question ID:** '+(question.id||'Not available'),'**Category / topic:** '+[question.category,question.topic].filter(Boolean).join(' / '),'**Issue type:** '+reason,'**Details:** '+detail,'','**Question:**',question.prompt||'Not available','','**Reported at:** '+new Date().toISOString()].join('\n');if(window.QuickRNReport)window.QuickRNReport.openIssue('Exam Feedback',(question.id||titles[mode]+' feedback'),body);else window.open('https://github.com/Archonline/QuickRN/issues/new?title='+encodeURIComponent('[Exam Feedback] '+(question.id||titles[mode]))+'&body='+encodeURIComponent(body),'_blank','noopener');$('feedback-modal').classList.add('hidden');$('feedback-details').value='';notice('A prefilled GitHub report is open. Review it and select Submit new issue to send it.');}
function switchFormatFilter(value){formatFilter=canonicalFormatFilter(value);if(!started){if($('format-filter'))$('format-filter').value=formatFilter;notice('Question filter set for the next session.');return;}if(mode!=='selfstudy'){notice('The question filter applies when starting a new session.');return;}const q=currentQuestion();const list=originalSession.filter(x=>formatFilterMatches(x,formatFilter));if(!list.length){notice('No matching question types are available in this current session. Start a new session with this filter.');return;}session=list;currentIndex=Math.max(0,session.findIndex(x=>x.id===q?.id));renderCurrent();}
function openBookmarksModal(){const items=bank.filter(q=>bookmarks.has(q.id));const overlay=document.createElement('div');overlay.id='quickrn-bookmark-overlay';overlay.className='fixed inset-0 z-[85] bg-slate-950/60 flex items-center justify-center p-4';overlay.innerHTML='<div class="w-full max-w-xl max-h-[80vh] overflow-y-auto bg-white rounded-xl shadow-2xl"><div class="bg-archer-darkBlue text-white p-4 flex justify-between"><strong>Saved questions ('+items.length+')</strong><button type="button" onclick="closeBookmarksModal()">Close ✕</button></div><div class="p-4 space-y-2">'+(items.length?items.map(q=>'<button type="button" class="w-full text-left border rounded-lg p-3 hover:bg-cyan-50" onclick="goToBookmarkedQuestion(\''+escapeHTML(q.id)+'\')"><strong class="text-xs">'+escapeHTML(q.id)+'</strong><span class="block text-sm mt-1">'+escapeHTML(clean(q.cleanTitle||q.title||q.questionText||q.question).slice(0,180))+'</span></button>').join(''):'<p class="text-sm text-slate-500">No saved questions yet.</p>')+'</div></div>';document.body.appendChild(overlay);}function closeBookmarksModal(){document.getElementById('quickrn-bookmark-overlay')?.remove();}function goToBookmarkedQuestion(id){const index=session.findIndex(q=>q.id===id);if(index<0){notice('This saved item is not part of the current session.');return;}currentIndex=index;closeBookmarksModal();renderCurrent();}function returnToDashboard(){saveState();window.location.href='dashboard.html';}

function updateStudyStreak(){const key='quickrn_study_streak_v1',state=readJSON(key,{streak:0,lastDate:null,totalSessions:0})||{streak:0,lastDate:null,totalSessions:0};const today=new Date().toISOString().slice(0,10),yesterday=new Date(Date.now()-86400000).toISOString().slice(0,10);if(state.lastDate!==today){state.streak=state.lastDate===yesterday?(state.streak||0)+1:1;state.lastDate=today;}state.totalSessions=(state.totalSessions||0)+1;writeJSON(key,state);return state;}
function saveStudyConfidence(value){const q=currentQuestion();if(!q||![1,2,3].includes(Number(value)))return;const r=currentRecord(q);r.confidence=Number(value);saveState();if($('confidence-saved'))$('confidence-saved').textContent='Saved confidence: '+({1:'Guessing',2:'Somewhat sure',3:'Very sure'}[r.confidence]);notice('Confidence saved with this question.');}
function startMissedReview(){const missed=session.filter(q=>{const r=answers[q.id];return r&&r.submitted&&!(r.result?.isCorrect??r.isCorrect);});if(!missed.length){notice('No missed questions in this session.');return;}session=missed.slice();originalSession=missed.slice();currentIndex=0;session.forEach(q=>{delete answers[q.id];});started=true;finished=false;paused=false;reviewMode=true;elapsedSeconds=0;elapsedStartedAt=null;$('summary-screen').classList.add('hidden');$('exam-footer').style.display='flex';startTimer();renderCurrent();notice('Started a retry session with '+session.length+' missed question(s).');}
function installKeyboardShortcuts(){
 document.addEventListener('keydown',event=>{
  const target=event.target,tag=String(target&&target.tagName||'').toLowerCase();
  if(tag==='input'||tag==='textarea'||tag==='select'||(target&&target.isContentEditable))return;
  if(!started||finished)return;
  if(event.altKey&&event.key==='ArrowLeft'){event.preventDefault();navigateQuestion(-1);return;}
  if(event.altKey&&event.key==='ArrowRight'){event.preventDefault();navigateQuestion(1);return;}
  if((event.ctrlKey||event.metaKey)&&event.key==='Enter'){event.preventDefault();submitAnswer();return;}
  if(event.key==='Escape'&&document.getElementById('quickrn-bookmark-overlay'))closeBookmarksModal();
 });
}

function init(){const summary=$('summary-screen');if(summary&&!summary.dataset.dismissGuard){summary.dataset.dismissGuard='1';summary.addEventListener('click',event=>{if(event.target===summary){event.preventDefault();event.stopPropagation();}});summary.addEventListener('keydown',event=>{if(event.key==='Escape'&&!summary.classList.contains('hidden')){event.preventDefault();event.stopPropagation();}});}installKeyboardShortcuts();document.title='QuickRN | '+titles[mode];$('mode-label').textContent=titles[mode];if($('mode-subtitle'))$('mode-subtitle').textContent=descriptions[mode];if(!$('format-filter')){const fs=document.createElement('select');fs.id='format-filter';fs.onchange=()=>switchFormatFilter(fs.value);fs.className='w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800';($('setup-modal')||document.body).appendChild(fs);}setupOptions();if(!isNCLEXExamMode())$('setup-modal').classList.remove('hidden');else $('setup-modal')?.classList.add('hidden');suppressObsoleteBankStatus();loadBankProgressively();}
window.startExamSession=startExamSession;window.saveStudyConfidence=saveStudyConfidence;window.startMissedReview=startMissedReview;window.switchFormatFilter=switchFormatFilter;window.navigateQuestion=navigateQuestion;window.submitAnswer=submitAnswer;window.confirmEndTest=confirmEndTest;window.toggleMarkQuestion=toggleMarkQuestion;window.toggleCalculator=toggleCalculator;window.calcInput=calcInput;window.calcEquals=calcEquals;window.toggleNotesModal=toggleNotesModal;window.saveNotes=saveNotes;window.toggleFeedbackModal=toggleFeedbackModal;window.submitFeedback=submitFeedback;window.switchCaseTab=switchCaseTab;window.returnToDashboard=returnToDashboard;window.openBookmarksModal=openBookmarksModal;window.closeBookmarksModal=closeBookmarksModal;window.goToBookmarkedQuestion=goToBookmarkedQuestion;window.toggleSummaryBookmark=toggleSummaryBookmark;
window.quickRNRenderAgain=function(){if(started&&!finished)renderAnswerArea(currentQuestion());};window.closeRationale=closeRationale;
document.addEventListener('DOMContentLoaded',init);
})();