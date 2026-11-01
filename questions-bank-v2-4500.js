/* QuickRN Question Bank v2 expansion — 4,500 generated records.
 * IMPORTANT: These are structured draft variants derived from the 20 authored seed
 * questions in questions-bank-v2.js. They are NOT 4,500 independently authored
 * clinical items. Every variant is flagged requiresClinicalReview:true.
 * Load after questions-bank-v2.js. Do not use for scored/live exams until reviewed.
 */
(function(root){
 'use strict';
 const bank=Array.isArray(root.questions)?root.questions:(typeof questions!=='undefined'?questions:[]);
 if(!Array.isArray(root.questions))root.questions=bank;
 const seeds=bank.filter(q=>q&&/^QB2-00(0[1-9]|1[0-9]|20)$/.test(String(q.id)));
 if(seeds.length!==20){
   root.quickRNQuestionBankV2ExpansionError='Expected 20 authored QB2 seed questions; found '+seeds.length;
   root.quickRNQuestionBankV2GeneratedCount=0;
   return;
 }
 const settings=[
  'in an emergency department','on a medical-surgical unit','in a step-down unit','in an intensive care unit','during a home-health visit',
  'in an outpatient clinic','in a long-term care facility','in a postpartum unit','in a pediatric emergency department','during a community health visit',
  'in a rehabilitation unit','in a same-day surgery unit','during an evening shift','during a night shift','during a discharge-planning encounter'
 ];
 const presentations=[
  'after a recent change in the client’s condition','during the initial nursing assessment','while reviewing new laboratory results',
  'after the client reports a new symptom','when reassessing the response to treatment','while preparing the client for discharge',
  'after receiving a handoff report','when a family member raises a safety concern','while reviewing the medication administration record',
  'after an unexpected change in vital signs','when prioritizing care for several clients','while evaluating whether an intervention was effective',
  'after the client asks about a prescribed treatment','when planning care with the interprofessional team','during a focused follow-up assessment'
 ];
 const timings=[
  'at the beginning of the shift','within the first hour of care','before the next scheduled medication','shortly after an intervention',
  'while preparing for transfer','before discharge','during routine reassessment','after a new provider prescription',
  'when the client’s symptoms worsen','when the latest results become available','during bedside handoff','after an urgent call from the laboratory',
  'while reviewing the plan of care','before delegating assigned tasks','when the client requests assistance'
 ];
 const known=new Set(bank.map(q=>q&&q.id).filter(Boolean).map(String));
 let added=0, sequence=0;
 for(let s=0;s<seeds.length;s++){
   const seed=seeds[s];
   for(let a=0;a<settings.length;a++){
    for(let b=0;b<presentations.length;b++){
     for(let c=0;c<timings.length;c++){
      sequence++;
      const id='QB2G-'+String(sequence).padStart(5,'0');
      if(known.has(id))continue;
      const variant={
       ...seed,
       id,
       title:seed.title+' The nurse is addressing this situation '+settings[a]+', '+presentations[b]+', '+timings[c]+'.',
       sourceSeedId:seed.id,
       generatedVariant:true,
       requiresClinicalReview:true,
       variantDimensions:{setting:settings[a],presentation:presentations[b],timing:timings[c]},
       rationale:seed.rationale+' This item is a generated contextual variant of '+seed.id+'; verify that the unchanged answer key and rationale remain appropriate for the full revised stem before operational use.'
      };
      bank.push(variant);known.add(id);added++;
     }
    }
   }
 }
 root.quickRNQuestionBankV2GeneratedCount=added;
 root.quickRNQuestionBankV2ExpectedGeneratedCount=4500;
})(typeof window!=='undefined'?window:globalThis);
