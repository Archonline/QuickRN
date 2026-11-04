/* Repairs the standalone alcohol-withdrawal bowtie record without treating it as a linked sequence. */
(function(root){
 'use strict';
 const bank=Array.isArray(root.questions)?root.questions:[];
 const q=bank.find(item=>String(item&&item.id||'')==='QR-002150');
 if(!q)return;
 delete q.caseGroupId;
 q.caseStudy={
  id:'QR-002150-CASE',
  summary:'Alcohol withdrawal with autonomic and perceptual symptoms',
  scenario:'A 52-year-old adult is assessed 18 hours after the last alcohol intake. The client has tremor, diaphoresis, tachycardia, and visual disturbances.',
  medicalHistory:'History of alcohol use. Verify usual intake, prior withdrawal seizures or delirium tremens, comorbidities, current medications, and allergies.',
  nursesNotes:'18 hours after the last drink: tremor, diaphoresis, tachycardia, and visual disturbances. Complete a structured withdrawal assessment and evaluate risk for progression.',
  vitalSigns:'Tachycardia is present. Obtain and trend the complete vital-sign set, including blood pressure, pulse, respiratory rate, temperature, and oxygen saturation.',
  labResults:'No laboratory values were supplied with this item. Review ordered glucose, electrolytes, magnesium, liver and renal function as clinically indicated.',
  orders:'Use a structured withdrawal assessment such as CIWA-Ar; administer the prescribed benzodiazepine protocol; institute seizure and fall precautions; provide supportive care as prescribed.'
 };
 q.ehr={
  nursesNotes:q.caseStudy.nursesNotes,
  vitalSigns:q.caseStudy.vitalSigns,
  diagnosticResults:q.caseStudy.labResults,
  historyPhysical:q.caseStudy.medicalHistory,
  orders:q.caseStudy.orders
 };
})(typeof window!=='undefined'?window:globalThis);
