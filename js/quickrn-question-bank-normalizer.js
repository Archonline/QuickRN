/* Normalize the production question bank's shared case-study context at load time. */
(function(root){
 'use strict';
 const bank=Array.isArray(root.questions)?root.questions:null;
 if(!bank)return;
 const groups=new Map();
 bank.forEach(item=>{
  if(!item||item.ngnType!=='case_study'||!item.caseGroupId)return;
  const group=groups.get(item.caseGroupId)||[];
  group.push(item);
  groups.set(item.caseGroupId,group);
 });
 groups.forEach((items,groupId)=>{
  const first=items[0]||{};
  const sharedSummary=typeof first.patientInfo==='string'?first.patientInfo:
   (first.patientInfo&&(first.patientInfo.summary||first.patientInfo.description))||'';
  items.forEach((item,index)=>{
   const summary=typeof item.patientInfo==='string'?item.patientInfo:sharedSummary;
   item.caseStudyContext={
    id:groupId,
    title:item.caseTitle||first.caseTitle||item.topic||'Clinical case study',
    category:item.category||first.category||'',
    topic:item.topic||first.topic||'',
    summary,
    stepIndex:index+1,
    stepCount:items.length
   };
  });
 });
 root.quickRNQuestionBankNormalization={
  total:bank.length,
  caseStudyGroups:groups.size,
  caseStudyItems:[...groups.values()].reduce((sum,items)=>sum+items.length,0)
 };
})(typeof window!=='undefined'?window:globalThis);
