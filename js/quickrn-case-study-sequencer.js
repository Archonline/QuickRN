/* Keep linked NGN case studies intact when selecting and ordering Self-Study questions. */
(function(root){
 'use strict';
 const keyOf=q=>String(q&&(q.caseGroupId||q.caseStudyContext?.id||q.caseStudy?.caseGroupId||q.caseStudy?.groupId||q.caseStudy?.id||q.case_study?.caseGroupId||q.case_study?.groupId||q.case_study?.id)||'').trim();
 const sequenceOf=q=>{
  const values=[q?.caseQuestionNumber,q?.caseQuestionIndex,q?.questionSequence,q?.sequenceNumber,q?.stepNumber,q?.questionNumber,q?.questionIndex,q?.caseStudyContext?.stepIndex];
  for(const value of values){const n=Number(value);if(value!==undefined&&value!==null&&value!==''&&Number.isFinite(n))return n;}
  return null;
 };
 function units(list){
  const groups=new Map(),result=[];
  (list||[]).forEach((q,index)=>{
   const key=keyOf(q);
   if(!key){result.push({key:'item:'+String(q?.id??index),items:[q],index});return;}
   if(!groups.has(key)){const unit={key:'case:'+key,items:[],index};groups.set(key,unit);result.push(unit);}
   groups.get(key).items.push(q);
  });
  result.forEach(unit=>{
   if(unit.items.length<2)return;
   const ranked=unit.items.map((item,index)=>({item,index,sequence:sequenceOf(item)}));
   if(ranked.every(x=>x.sequence!==null)&&new Set(ranked.map(x=>x.sequence)).size===ranked.length){
    ranked.sort((a,b)=>a.sequence-b.sequence||a.index-b.index);
    unit.items=ranked.map(x=>x.item);
   }
  });
  return result;
 }
 function shuffled(values,random){
  const out=values.slice(),rng=typeof random==='function'?random:Math.random;
  for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
  return out;
 }
 function expandRelated(selected,all){
  const ids=new Set((selected||[]).map(q=>String(q?.id??'')));
  const selectedKeys=new Set((selected||[]).map(keyOf).filter(Boolean));
  return units(all||selected).filter(unit=>unit.items.some(q=>ids.has(String(q?.id??''))||selectedKeys.has(keyOf(q)))).flatMap(unit=>unit.items);
 }
 function randomizeAll(list,random){return shuffled(units(list),random).flatMap(unit=>unit.items);}
 function pick(list,count,seen,random){
  const source=units(list),seenIds=seen instanceof Set?seen:new Set(seen||[]);
  let fresh=source.filter(unit=>!unit.items.every(q=>seenIds.has(String(q?.id??''))));
  if(!fresh.length)fresh=source;
  const target=Math.max(0,Number(count)||0),chosen=[];
  for(const unit of shuffled(fresh,random)){
   if(chosen.length>=target)break;
   chosen.push(...unit.items);
  }
  return chosen;
 }
 root.QuickRNCaseStudySequencer={keyOf,units,expandRelated,randomizeAll,pick};
 if(typeof module!=='undefined'&&module.exports)module.exports=root.QuickRNCaseStudySequencer;
})(typeof window!=='undefined'?window:globalThis);
