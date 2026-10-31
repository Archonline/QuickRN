/* Normalize shared clinical context for every question in a linked NGN case study. */
(function(root){
 'use strict';
 const bank=Array.isArray(root.questions)?root.questions:null;
 if(!bank)return;
 const groups=new Map();
 const keyOf=item=>String(item&&(item.caseGroupId||item.caseStudyContext?.id||item.caseStudy?.caseGroupId||item.caseStudy?.groupId||item.caseStudy?.id||item.case_study?.caseGroupId||item.case_study?.groupId||item.case_study?.id)||'').trim();
 bank.forEach(item=>{
  if(!item)return;
  const id=keyOf(item);
  if(!id)return;
  if(!groups.has(id))groups.set(id,[]);
  groups.get(id).push(item);
 });
 const sharedFields=['caseTitle','caseStudyText','case_study_text','scenario','clinicalScenario','patientScenario','situation','passage','context','stimulus','patientHistory','medicalHistory','physicalAssessment','assessmentFindings','clinicalData','chartData','emr','nursesNotes','vitalSigns','diagnosticResults','labResults','historyPhysical','medicationRecord','intakeOutput','exhibits','records','clinicalRecords','patientInformation','patient_information'];
 const mergeObject=(shared,own)=>Object.assign({},shared&&typeof shared==='object'&&!Array.isArray(shared)?shared:{},own&&typeof own==='object'&&!Array.isArray(own)?own:{});
 groups.forEach((items,groupId)=>{
  const first=items[0]||{};
  const sharedSummary=typeof first.patientInfo==='string'?first.patientInfo:(first.patientInfo&&(first.patientInfo.summary||first.patientInfo.description))||'';
  const sharedCase=first.caseStudy||first.case_study;
  const sharedEhr=first.ehr||first.clinicalRecord||first.medicalRecord;
  const sharedPatient=first.patientInfo||first.patientInformation||first.patient_information;
  items.forEach((item,index)=>{
   sharedFields.forEach(field=>{if((item[field]===undefined||item[field]===null||item[field]==='')&&first[field]!==undefined)item[field]=first[field];});
   if(sharedCase){const own=item.caseStudy||item.case_study;item.caseStudy=mergeObject(sharedCase,own);}
   if(sharedEhr){const own=item.ehr||item.clinicalRecord||item.medicalRecord;item.ehr=mergeObject(sharedEhr,own);}
   if(sharedPatient){
    if(typeof sharedPatient==='string'){if(!item.patientInfo)item.patientInfo=sharedPatient;}
    else item.patientInfo=mergeObject(sharedPatient,item.patientInfo||item.patientInformation||item.patient_information);
   }else if(sharedSummary&&!item.patientInfo)item.patientInfo=sharedSummary;
   const existing=item.caseStudyContext&&typeof item.caseStudyContext==='object'?item.caseStudyContext:{};
   const summary=typeof item.patientInfo==='string'?item.patientInfo:(item.patientInfo&&(item.patientInfo.summary||item.patientInfo.description))||sharedSummary;
   item.caseStudyContext=Object.assign({},existing,{
    id:groupId,
    title:item.caseTitle||first.caseTitle||existing.title||item.topic||'Clinical case study',
    category:item.category||first.category||existing.category||'',
    topic:item.topic||first.topic||existing.topic||'',
    summary:summary||existing.summary||'',
    stepIndex:Number(existing.stepIndex)||index+1,
    stepCount:items.length
   });
  });
 });
 root.quickRNQuestionBankNormalization={
  total:bank.length,
  caseStudyGroups:groups.size,
  caseStudyItems:[...groups.values()].reduce((sum,items)=>sum+items.length,0)
 };
})(typeof window!=='undefined'?window:globalThis);
