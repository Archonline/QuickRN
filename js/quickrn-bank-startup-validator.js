/* Fail-closed startup validation for the canonical QuickRN question bank. */
(function(root){
 'use strict';
 const bank=root.QuickRNQuestionBank?.items;
 const schema=root.QuickRNQuestionSchemaV2;
 const report={status:'blocked',total:Array.isArray(bank)?bank.length:0,errors:[],validatedAt:new Date().toISOString()};
 const add=(code,message,id)=>report.errors.push({code,message,id:id||null});
 if(!Array.isArray(bank))add('BANK_NOT_ARRAY','Canonical question bank did not load as an array.');
 if(!schema||typeof schema.validate!=='function'||typeof schema.normalizeBank!=='function')add('SCHEMA_NOT_READY','Question schema v2 must load before the bank validator.');
 if(Array.isArray(bank)&&schema&&typeof schema.validate==='function'){
  // Reject an explicitly unknown source format before normalization can infer a fallback.
  bank.forEach((item,index)=>{
   const rawType=item?.interaction?.type??item?.type??item?.ngnType??item?.format??item?.questionType??item?.itemType;
   if(rawType!=null&&!schema.FORMATS.includes(String(rawType).trim())){
    add('V2_UNKNOWN_FORMAT','Unsupported question format: '+String(rawType),item?.metadata?.id||item?.id||'index:'+index);
   }
  });
  schema.normalizeBank(bank);
  const ids=new Set();
  bank.forEach((item,index)=>{
   const id=String(item?.metadata?.id||item?.id||'').trim();
   if(!/^QR-\\d{6}$/.test(id))add('INVALID_ID','Every active item requires a canonical QR-###### ID.',id||'index:'+index);
   if(ids.has(id))add('DUPLICATE_ID','Question IDs must be unique.',id);
   ids.add(id);
   schema.validate(item,index).forEach(issue=>add(issue.code,issue.message,id));
  });
 }
 report.status=report.errors.length?'blocked':'passed';
 root.QuickRNBankStartupValidation=report;
 if(report.status!=='passed'){
  root.quickRNBankReady=false;
  if(root.console&&typeof root.console.error==='function')root.console.error('[QuickRN] Bank startup blocked; no questions may be served.',report);
 }else root.quickRNBankReady=true;
})(typeof window!=='undefined'?window:globalThis);
