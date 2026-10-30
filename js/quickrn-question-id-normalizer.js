/* Ensure stable, unique IDs before exam state, bookmarks, and metrics consume the bank. */
(function(root){
 'use strict';
 const bank=Array.isArray(root.questions)?root.questions:(Array.isArray(root.embeddedQuestionsData)?root.embeddedQuestionsData:null);
 if(!bank)return;
 const reserved=new Set(bank.filter(item=>item&&item.id).map(item=>String(item.id).trim()));
 const used=new Set();let normalized=0;
 bank.forEach((item,index)=>{
  if(!item||typeof item!=='object')return;
  const base=String(item.id||('Q-'+(index+1))).trim()||('Q-'+(index+1));
  let candidate=base,suffix=2;
  if(used.has(candidate)){
   do{candidate=base+'-DUP'+suffix;suffix++;}while(reserved.has(candidate)||used.has(candidate));
  }
  if(candidate!==item.id){item.id=candidate;normalized++;}
  used.add(candidate);
 });
 root.quickRNQuestionIdNormalization={total:bank.length,normalized};
})(typeof window!=='undefined'?window:globalThis);
