/* Consistent QuickRN item-level NGN scoring for exam summaries. */
(function(root){
 'use strict';
 const own=(o,k)=>Object.prototype.hasOwnProperty.call(o||{},k);
 const str=v=>String(v==null?'':v).trim();
 const arr=v=>Array.isArray(v)?v:(v==null?[]:[v]);
 function format(q){
  if(root.QuickRNSharedRenderer&&root.QuickRNSharedRenderer.detect)return root.QuickRNSharedRenderer.detect(q);
  const raw=[q&&q.ngnType,q&&q.type,q&&q.format,q&&q.questionType,q&&q.itemType].filter(Boolean).join(' ').toLowerCase();
  if(raw.includes('highlight'))return 'Highlight';if(raw.includes('trend'))return 'Trend';
  if(raw.includes('matrix')||raw.includes('grid'))return 'Matrix / Grid';
  if(raw.includes('cloze')||raw.includes('drop-down')||raw.includes('dropdown'))return 'Cloze (Drop-down)';
  if(raw.includes('drag')||raw.includes('order'))return 'Extended Drag and Drop';
  if(raw.includes('bowtie'))return 'Bowtie';
  if(raw.includes('multiple response')||raw.includes('sata')||Array.isArray(q&&q.correctAnswers))return 'Multiple Response';
  return 'Single Choice';
 }
 function optionValue(o,i){return typeof o==='string'?o:(o&& (o.id??o.value??o.text) || String.fromCharCode(65+i));}
 function optionText(o){return typeof o==='string'?o:(o&&(o.text??o.label??o.value)||'');}
 function canonical(q,v){
  const opts=Array.isArray(q.options)?q.options:[];
  const value=str(v);
  const i=opts.findIndex((o,j)=>[optionValue(o,j),optionText(o),String.fromCharCode(65+j)].some(x=>str(x)===value));
  return i>=0?str(optionValue(opts[i],i)):value;
 }
 function normalized(q,answer){
  let a=answer;
  if(a&&typeof a==='object'&&a.submitted&&own(a,'answer'))a=a.answer;
  if(a&&typeof a==='object'&&own(a,'selectedOption'))a=a.selectedOption;
  if(a==null)return {};
  const f=format(q);
  if(f==='Single Choice'||(f==='Trend'&&!Array.isArray(q.correctAnswers)))return typeof a==='object'&&!Array.isArray(a)?a:(typeof a==='string'?{choice:a}:{});
  if(f==='Multiple Response'||f==='Extended Multiple Response'||(f==='Trend'&&Array.isArray(q.correctAnswers)))return Array.isArray(a)?{choices:a}:(a.choices?a:{choices:[]});
  if(f==='Highlight')return Array.isArray(a)?{highlights:a}:(a.highlights?a:{highlights:[]});
  if(f==='Matrix / Grid')return a.matrix?a:{matrix:a};
  if(f==='Cloze (Drop-down)')return a.cloze?a:{cloze:a};
  if(f==='Extended Drag and Drop')return Array.isArray(a)?{order:a}:(a.order?a:{order:[]});
  if(f==='Bowtie')return a;
  return a;
 }
 function setScore(selected,correct){
  const c=arr(correct).map(str),s=arr(selected).map(str);
  if(!c.length)return {earned:0,max:0};
  const hits=s.filter(x=>c.includes(x)).length;
  const misses=s.filter(x=>!c.includes(x)).length;
  return {earned:Math.max(0,Math.min(c.length,hits-misses)),max:c.length};
 }
 function grade(q,answer){
  q=q||{};const f=format(q),d=normalized(q,answer),c=q.correctAnswers||{};
  let earned=0,max=0;
  if(f==='Single Choice'||(f==='Trend'&&!Array.isArray(q.correctAnswers))){
   const target=q.correctAnswerText??q.correctAnswer;const selected=d.choice??answer;
   earned=(canonical(q,selected)===canonical(q,target)||str(selected)===str(target))?1:0;max=1;
  }else if(f==='Multiple Response'||f==='Extended Multiple Response'||(f==='Trend'&&Array.isArray(q.correctAnswers))){
   const correct=arr(q.correctAnswers??q.correctAnswer).map(v=>canonical(q,v));
   const result=setScore(arr(d.choices).map(v=>canonical(q,v)),correct);earned=result.earned;max=result.max;
  }else if(f==='Highlight'){
   const result=setScore(d.highlights??[],q.correctHighlights??c.highlights??c.correctHighlights??[]);earned=result.earned;max=result.max;
  }else if(f==='Matrix / Grid'){
   const rows=q.rows||q.matrixData?.rows||[],answers=d.matrix||{},correct=c.matrix||c;
   const ids=rows.length?rows.map((r,i)=>str(r.id??i)):Object.keys(correct);
   max=ids.length;ids.forEach(id=>{if(str(answers[id])===str(correct[id]))earned++;});
  }else if(f==='Cloze (Drop-down)'){
   const correct=c.cloze||c,answers=d.cloze||{},keys=Object.keys(correct);max=keys.length;keys.forEach(k=>{if(str(answers[k])===str(correct[k]))earned++;});
  }else if(f==='Extended Drag and Drop'){
   const correct=q.correctOrder||c.order||[],selected=d.order||[];max=correct.length;correct.forEach((v,i)=>{if(str(selected[i])===str(v))earned++;});
  }else if(f==='Bowtie'){
   const correct=c.bowtie||c,selected=d||{};
   if(own(correct,'condition')){max++;if(str(selected.condition)===str(correct.condition))earned++;}
   const actions=setScore(selected.actions,correct.actions);earned+=actions.earned;max+=actions.max;
   const monitoring=setScore(selected.monitoring,correct.monitoring);earned+=monitoring.earned;max+=monitoring.max;
  }else{const target=q.correctAnswerText??q.correctAnswer;earned=str(answer)===str(target)?1:0;max=1;}
  max=Math.max(1,max);earned=Math.max(0,Math.min(max,earned));
  return {format:f,earned,max,isCorrect:earned===max,percentage:Math.round(earned/max*100)};
 }
 function summarize(records){
  let earned=0,max=0,answered=0,fullyCorrect=0;
  (records||[]).forEach(r=>{
   if(!r)return;
   const q=r.q||r.question||r.item;
   const answer=own(r,'answer')?r.answer:(own(r,'draft')?r.draft:(own(r,'userAns')?r.userAns:(own(r,'selectedOption')?r.selectedOption:undefined)));
   if(!q||answer===undefined||answer===null)return;
   const result=grade(q,answer);earned+=result.earned;max+=result.max;answered++;if(result.isCorrect)fullyCorrect++;
  });
  return {earned,max,answered,fullyCorrect,partialOrIncorrect:answered-fullyCorrect,unanswered:Math.max(0,(records||[]).length-answered),percentage:max?Math.round(earned/max*100):0};
 }
 const api={format,normalize:normalized,grade,summarize};
 root.QuickRNNgnScoring=api;
 if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
