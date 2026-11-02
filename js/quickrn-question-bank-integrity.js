/* Runtime integrity audit for all question-bank records loaded by the four exam modes. */
(function(root){
 'use strict';
 const bank=Array.isArray(root.questions)?root.questions:[];
 const issues=[],seenIds=new Set();
 const text=v=>String(v==null?'':v).replace(/&(#x[0-9a-f]+|#\d+|lt|gt|amp|quot|apos|nbsp);/gi,' ').replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim().toLowerCase();
 const hasValue=v=>{if(v==null||v==='')return false;if(Array.isArray(v))return v.some(hasValue);if(typeof v==='object')return Object.values(v).some(hasValue);return String(v).trim()!=='';};
 const walk=(v,path,id)=>{
  if(typeof v==='string'){
   if(/&lt;\/?(?:div|p|strong|span|section|ul|li|br|table|h[1-6])\b/i.test(v))issues.push({id,code:'HTML_ESCAPED_AS_TEXT',path});
   if(/<\/?(?:div|p|strong|span|section|ul|li|br|table|h[1-6])\b/i.test(v))issues.push({id,code:'RAW_HTML_IN_DATA',path});
  }else if(Array.isArray(v))v.forEach((x,i)=>walk(x,path+'['+i+']',id));
  else if(v&&typeof v==='object')Object.keys(v).forEach(k=>walk(v[k],path+'.'+k,id));
 };
 bank.forEach((q,index)=>{
  if(!q||typeof q!=='object'){issues.push({id:'index:'+index,code:'INVALID_RECORD'});return;}
  const id=String(q.id||'').trim()||'index:'+index;
  if(!q.id)issues.push({id,code:'MISSING_ID'});
  if(seenIds.has(id))issues.push({id,code:'DUPLICATE_ID'});seenIds.add(id);
  if(!String(q.title||q.question||q.stem||q.questionText||'').trim())issues.push({id,code:'MISSING_STEM'});
  ['patientInfo','patientInformation','patient_information','ehr','caseStudy','case_study','caseStudyContext'].forEach(k=>{if(q[k]!=null)walk(q[k],k,id);});
  const kind=String(q.type||q.format||q.questionType||q.ngnType||'').toLowerCase();
  const isNgn=!!(q.isNGN||q.caseGroupId||q.caseStudyContext||/bowtie|matrix|cloze|highlight|trend|drag.?and.?drop|extended multiple response|select n/.test(kind));
  const hasClinical=hasValue(q.patientInfo)||hasValue(q.patientInformation)||hasValue(q.patient_information)||hasValue(q.ehr)||hasValue(q.caseStudy)||hasValue(q.case_study)||hasValue(q.caseStudyContext)||hasValue(q.scenario)||hasValue(q.clinicalScenario)||hasValue(q.patientScenario);
  if(isNgn&&!hasClinical)issues.push({id,code:'NGN_MISSING_CLINICAL_CONTEXT'});
  const sections=[];
  const add=(label,value)=>{const valueText=text(value);if(valueText)sections.push({label,value:valueText});};
  if(q.patientInfo&&typeof q.patientInfo==='object')Object.entries(q.patientInfo).forEach(([k,v])=>add('patientInfo.'+k,v));
  else add('patientInfo',q.patientInfo);
  if(q.ehr&&typeof q.ehr==='object')Object.entries(q.ehr).forEach(([k,v])=>add('ehr.'+k,v));
  const seenContent=new Map();
  sections.forEach(s=>{if(seenContent.has(s.value))issues.push({id,code:'DUPLICATE_PATIENT_CONTENT',fields:[seenContent.get(s.value),s.label]});else seenContent.set(s.value,s.label);});
 });
 root.quickRNQuestionBankAudit={total:bank.length,issueCount:issues.length,issues,passed:issues.length===0,checkedAt:new Date().toISOString()};
 if(issues.length&&root.console&&typeof root.console.warn==='function')root.console.warn('[QuickRN] Question-bank integrity audit found '+issues.length+' issue(s).',issues);
})(typeof window!=='undefined'?window:globalThis);
