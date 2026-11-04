/* Keep canonical question IDs unique before bookmarks, exam state, and metrics consume the bank. */
(function(root){
 'use strict';
 const bank=Array.isArray(root.questions)?root.questions:(Array.isArray(root.embeddedQuestionsData)?root.embeddedQuestionsData:null);
 if(!bank)return;
 const reserved=new Set(bank.filter(item=>item&&/^QR-\d{6}$/.test(String(item.id||'').trim())).map(item=>String(item.id).trim()));
 const used=new Set();let normalized=0;const changes=[];
 let nextNumber=Math.max(0,...Array.from(reserved,id=>Number(id.slice(3))))+1;
 bank.forEach((item,index)=>{
  if(!item||typeof item!=='object')return;
  const original=String(item.id||'').trim();
  let candidate=original||('QR-'+String(nextNumber++).padStart(6,'0'));
  if(used.has(candidate)){
   const previousId=candidate;
   do{candidate='QR-'+String(nextNumber++).padStart(6,'0');}while(reserved.has(candidate)||used.has(candidate));
   item.legacyId=item.legacyId||previousId;
   item.previousQuestionId=previousId;
   changes.push({index,previousId,id:candidate});
  }else if(!original){changes.push({index,previousId:null,id:candidate});}
  if(candidate!==item.id){item.id=candidate;normalized++;}
  used.add(candidate);
 });
 root.quickRNQuestionIdNormalization={total:bank.length,normalized,changes};
})(typeof window!=='undefined'?window:globalThis);
