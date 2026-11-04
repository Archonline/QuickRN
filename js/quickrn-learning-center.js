(function(){
'use strict';
const DATA={
child:{
"Growth & Development":["Developmental milestones by age","Pediatric vital signs and assessment","Piaget Erikson and Kohlberg","Immunization schedule and safety"],
"Respiratory":["Asthma and status asthmaticus","Croup vs epiglottitis","Bronchiolitis and RSV","Cystic fibrosis nursing care"],
"Cardiovascular":["Congenital heart defects","Kawasaki disease","Pediatric heart failure","Tetralogy of Fallot"],
"Neurologic":["Febrile seizures","Meningitis in children","Increased intracranial pressure","Pediatric cerebral palsy"],
"Gastrointestinal & Nutrition":["Pyloric stenosis","Intussusception","Cleft lip and palate","Pediatric dehydration"],
"Renal & Genitourinary":["Nephrotic syndrome","Post-streptococcal glomerulonephritis","Wilms tumor","Urinary tract infection in children"],
"Endocrine & Metabolic":["Type 1 diabetes in children","Diabetic ketoacidosis","Congenital hypothyroidism","Phenylketonuria"],
"Hematology & Oncology":["Sickle cell crisis","Hemophilia","Leukemia in children","Iron deficiency anemia"],
"Emergency & Safety":["Pediatric medication dosage","Child abuse recognition and reporting","Poisoning and ingestion","Pediatric shock"]
},
adult:{
"Cardiovascular":["Heart failure","Acute coronary syndrome and myocardial infarction","Dysrhythmias and ECG interpretation","Hypertension and hypertensive crisis"],
"Respiratory":["COPD exacerbation","Asthma management","Pneumonia and respiratory failure","Pulmonary embolism"],
"Neurologic":["Stroke and thrombolytic care","Seizures and status epilepticus","Parkinson disease","Increased intracranial pressure"],
"Endocrine":["Diabetes mellitus and insulin","DKA vs HHS","Thyroid storm and myxedema","Adrenal insufficiency and Cushing syndrome"],
"Renal & Urinary":["Acute kidney injury","Chronic kidney disease","Hemodialysis and peritoneal dialysis","Electrolyte imbalances"],
"Gastrointestinal & Hepatic":["GI bleeding","Cirrhosis and hepatic encephalopathy","Pancreatitis","Inflammatory bowel disease"],
"Musculoskeletal":["Fractures and compartment syndrome","Hip replacement precautions","Osteoporosis","Rheumatoid arthritis"],
"Hematology & Oncology":["Anemia and transfusion reactions","Neutropenia precautions","Cancer complications","DVT and pulmonary embolism"],
"Immune & Integumentary":["Sepsis and septic shock","HIV and opportunistic infection","Burns and fluid resuscitation","Pressure injury prevention"]
},
pharm:{
"Medication Safety & Calculations":["Medication administration rights","Dosage calculations and dimensional analysis","High-alert medications","Medication reconciliation"],
"Cardiovascular Drugs":["ACE inhibitors and ARBs","Beta blockers","Calcium channel blockers","Digoxin and toxicity"],
"Anticoagulants & Hematology":["Heparin and aPTT monitoring","Warfarin and INR","DOACs and bleeding precautions","Thrombolytics"],
"Endocrine Drugs":["Insulin types and timing","Oral diabetes medications","Corticosteroids","Thyroid medications"],
"Antimicrobials":["Penicillins and cephalosporins","Vancomycin and trough monitoring","Aminoglycosides","Antitubercular medications"],
"Respiratory & Neurologic Drugs":["Bronchodilators","Inhaled corticosteroids","Antiepileptic medications","Opioids and reversal agents"],
"Psychiatric Medications":["SSRIs and serotonin syndrome","Lithium and toxicity","Antipsychotics and NMS","Benzodiazepines"],
"Emergency & Critical Care Drugs":["Epinephrine","Amiodarone","Vasopressors","Naloxone and antidotes"]
},
fundamentals:{
"Patient Safety & Infection Prevention":["Standard precautions and hand hygiene","Contact droplet and airborne precautions","Sterile technique and surgical asepsis","Fall prevention and restraint safety"],
"Assessment & Vital Signs":["Head-to-toe nursing assessment","Pain assessment and reassessment","Adult vital signs and early warning signs","Focused respiratory and cardiovascular assessment"],
"Fluids & Electrolytes":["Fluid volume deficit vs excess","Sodium imbalances","Potassium imbalances","Calcium and magnesium imbalances"],
"Acid-Base & Laboratory Values":["ABG interpretation and ROME","Common NCLEX laboratory values","CBC interpretation","Renal and liver function tests"],
"Mobility & Musculoskeletal Care":["Safe patient transfer and body mechanics","Range of motion and immobility complications","Traction and cast care","Pressure injury prevention and staging"],
"Nutrition & Elimination":["Enteral feeding and aspiration precautions","Parenteral nutrition and central-line safety","Urinary catheter care and CAUTI prevention","Bowel elimination and ostomy care"],
"Perioperative & Wound Care":["Preoperative checklist and informed consent","Postoperative complications and priorities","Wound healing and dressing changes","Drains and surgical tubes"],
"Oxygenation & Emergency Basics":["Oxygen delivery devices","Suctioning and airway management","Chest tube nursing care","Basic life support and rapid response"]
},
maternal:{
"Antepartum Nursing":["Prenatal assessment and routine tests","Preeclampsia and eclampsia","Gestational diabetes","Placenta previa vs placental abruption"],
"Intrapartum & Labor":["Stages of labor","Fetal heart rate monitoring","Labor pain management","Preterm labor and rupture of membranes"],
"Postpartum Nursing":["Postpartum assessment and fundal checks","Postpartum hemorrhage","Postpartum infection and endometritis","Postpartum mood disorders"],
"Newborn Care":["APGAR and immediate newborn care","Newborn thermoregulation","Newborn reflexes and assessment","Newborn feeding and jaundice"],
"Maternal Complications":["Ectopic pregnancy","Hyperemesis gravidarum","Rh incompatibility and Rho(D) immune globulin","Amniotic fluid embolism"],
"Reproductive Health":["Contraception and family planning","STI assessment and treatment teaching","Menstrual disorders and endometriosis","Infertility and reproductive procedures"]
},
mental:{
"Therapeutic Communication & Crisis":["Therapeutic communication techniques","Suicide risk assessment and safety","Crisis intervention","Defense mechanisms and coping"],
"Mood Disorders":["Major depressive disorder","Bipolar disorder and mania","Lithium monitoring and toxicity","Electroconvulsive therapy nursing care"],
"Psychotic Disorders":["Schizophrenia and positive vs negative symptoms","Antipsychotic adverse effects","Neuroleptic malignant syndrome","Delusions and hallucinations nursing responses"],
"Anxiety & Trauma":["Panic disorder and anxiety levels","PTSD and trauma-informed care","Obsessive-compulsive disorder","Phobias and exposure therapy"],
"Substance Use & Eating Disorders":["Alcohol withdrawal and CIWA","Opioid use and withdrawal","Anorexia and bulimia nursing care","Intoxication and overdose priorities"]
},
leadership:{
"Delegation & Assignment":["RN LPN and UAP scope of practice","Five rights of delegation","Assignment and supervision","When to intervene and reassess delegated care"],
"Prioritization & Triage":["ABCs and unstable vs stable clients","Acute vs chronic and new vs expected findings","Mass casualty triage","Who to see first NCLEX strategy"],
"Ethics & Legal Responsibilities":["Informed consent and refusal","Confidentiality and HIPAA principles","Advance directives and client advocacy","Negligence malpractice and documentation"],
"Quality & Safety":["Incident reports and error disclosure","Root cause analysis and just culture","Evidence-based practice and quality indicators","Safe handoff and SBAR communication"]
},
community:{
"Population & Community Health":["Levels of prevention","Community assessment and health planning","Social determinants of health","Home health and vulnerable populations"],
"Epidemiology & Communicable Disease":["Chain of infection and disease transmission","Outbreak investigation basics","Immunization and vaccine principles","Tuberculosis and communicable disease control"],
"Disaster & Emergency Preparedness":["Disaster triage and START","Bioterrorism and isolation response","Disaster phases and emergency planning","Community emergency shelter and continuity of care"]
}
};


/* NCLEX-RN coverage expansion aligned to the 2026 test-plan content domains.
   Existing lessons are retained; these additional topics broaden specialty and
   high-frequency clinical coverage without creating duplicate topic labels. */
Object.assign(DATA.adult,{
  "Cardiovascular — Advanced":["Valvular heart disease","Infective endocarditis","Pericarditis and cardiac tamponade","Peripheral arterial disease and chronic venous insufficiency","Aortic aneurysm and dissection","Cardiogenic shock and intra-aortic balloon pump basics"],
  "Respiratory — Advanced":["Acute respiratory distress syndrome","Mechanical ventilation and alarm priorities","Tracheostomy care and complications","Chest trauma and flail chest","Tuberculosis nursing care","Pleural effusion and pneumothorax"],
  "Neurologic — Advanced":["Guillain-Barré syndrome","Myasthenia gravis and myasthenic crisis","Multiple sclerosis","Spinal cord injury and neurogenic shock","Meningitis and encephalitis in adults","Delirium versus dementia"],
  "Gastrointestinal — Advanced":["Appendicitis and peritonitis","Bowel obstruction and ileus","Cholecystitis and cholelithiasis","Diverticulitis and diverticular disease","Ostomy complications and care","Hepatitis and acute liver failure"],
  "Renal — Advanced":["Nephrotic and nephritic syndromes","Renal calculi and urinary obstruction","Dialysis access complications","Peritoneal dialysis peritonitis","Chronic kidney disease mineral-bone disorder","Urinary retention and bladder irrigation"],
  "Endocrine — Advanced":["SIADH and diabetes insipidus","Adrenal crisis","Pheochromocytoma","Hyperparathyroidism and hypoparathyroidism","Thyroidectomy complications","Metabolic syndrome and obesity care"],
  "Hematology — Advanced":["Disseminated intravascular coagulation","Thrombocytopenia and bleeding precautions","Aplastic anemia and pancytopenia","Polycythemia vera","Sickle cell disease complications","Blood component administration and massive transfusion"],
  "Oncology Nursing":["Tumor lysis syndrome","Superior vena cava syndrome","Spinal cord compression in cancer","Chemotherapy precautions and extravasation","Radiation therapy safety","Neutropenic fever and oncologic emergencies"],
  "Immune & Inflammatory Disorders":["Systemic lupus erythematosus","Rheumatoid arthritis complications","Anaphylaxis and angioedema","Organ transplant rejection","Immunosuppressant monitoring","HIV antiretroviral therapy and opportunistic infections"]
});
Object.assign(DATA.child,{
  "Pediatric Emergency & Critical Care":["Pediatric respiratory distress and failure","Pediatric dehydration and fluid resuscitation","Pediatric sepsis recognition","Pediatric burns and injury prevention"],
  "Pediatric Development & Special Needs":["Autism spectrum disorder","Attention-deficit/hyperactivity disorder","Down syndrome nursing considerations","Childhood developmental and learning disorders"],
  "Pediatric Cardiac & Hematologic Disorders":["Pediatric dysrhythmias","Rheumatic fever and rheumatic heart disease","Thalassemia in children","Aplastic anemia in children"],
  "Pediatric Renal & Endocrine Disorders":["Hypospadias and epispadias","Hydrocephalus and shunt complications","Type 1 diabetes sick-day management","Adolescent eating and growth concerns"]
});
Object.assign(DATA.maternal,{
  "High-Risk Pregnancy":["Multiple gestation","Gestational hypertension","HELLP syndrome","Intrauterine growth restriction","Oligohydramnios and polyhydramnios"],
  "Labor & Birth Emergencies":["Shoulder dystocia","Umbilical cord prolapse","Uterine rupture","Uterine tachysystole","Trial of labor after cesarean considerations"],
  "Newborn Complications":["Neonatal hypoglycemia","Neonatal respiratory distress syndrome","Neonatal abstinence syndrome","Neonatal sepsis","Hyperbilirubinemia and phototherapy"],
  "Reproductive & Genetic Health":["Polycystic ovary syndrome","Cervical and breast cancer screening","Menopause and hormone therapy teaching","Genetic screening and prenatal testing"]
});
Object.assign(DATA.mental,{
  "Cognitive & Neurocognitive Disorders":["Delirium assessment and prevention","Alzheimer disease and dementia care","Personality disorders","Somatic symptom and dissociative disorders"],
  "Child & Adolescent Mental Health":["Eating disorders in adolescents","ADHD and behavioral disorders","Autism and therapeutic approaches","Self-harm and suicide prevention in adolescents"],
  "Psychiatric Crisis & Safety":["Acute agitation and de-escalation","Violence risk assessment","Seclusion and restraint safety","Grief, loss and end-of-life distress"]
});
Object.assign(DATA.fundamentals,{
  "Critical Care & Emergency Nursing":["Shock types and hemodynamic monitoring","Rapid response and code blue roles","Ventilator-associated event prevention","Acute respiratory failure priorities"],
  "Perioperative & Procedural Nursing":["Surgical time-out and site verification","Anesthesia complications and malignant hyperthermia","Post-anesthesia care and airway priorities","Procedural sedation monitoring"],
  "Diagnostic Procedures & Monitoring":["12-lead ECG and telemetry priorities","Cardiac catheterization nursing care","Lumbar puncture and post-procedure care","Endoscopy and colonoscopy preparation"],
  "Blood & Vascular Access":["Central venous catheter care","PICC line complications","Blood transfusion verification and reactions","Extravasation and infiltration management"],
  "Pain, Palliative & Rehabilitation Care":["Acute and chronic pain management","Palliative care and hospice principles","Rehabilitation and assistive devices","End-of-life signs and family support"],
  "Nutrition & Metabolic Support — Advanced":["Dysphagia screening and aspiration prevention","Malnutrition and refeeding syndrome","Parenteral nutrition complications","Obesity and bariatric surgery nursing care"]
});
Object.assign(DATA.pharm,{
  "Neurologic & Emergency Medications":["Antiplatelets and stroke medications","Antiparkinsonian medications","Anticonvulsants and therapeutic monitoring","Sedatives and neuromuscular blockers"],
  "Maternal & Pediatric Medications":["Oxytocin and uterotonic medications","Magnesium sulfate monitoring","Newborn vitamin K and prophylaxis","Weight-based pediatric medication safety"],
  "Oncology & Immunology Medications":["Chemotherapy safety and hazardous drug handling","Immunosuppressants and transplant medications","Biologic agents and immunomodulators","Colony-stimulating factors"],
  "Pain & Anesthesia Medications":["Nonopioid analgesics and NSAIDs","Opioid safety and respiratory depression","Local anesthetics and toxicity","Reversal agents and antidote principles"],
  "Psychiatric & Other High-Risk Medications":["MAOIs and food interactions","Antidepressant discontinuation and monitoring","Antipsychotic metabolic monitoring","Anticoagulant reversal and bleeding response"]
});
Object.assign(DATA.leadership,{
  "Care Coordination & Transitions":["Discharge planning and readmission prevention","Interprofessional collaboration and referrals","Continuity of care and transfer safety","Case management and resource allocation"],
  "Legal, Ethical & Cultural Practice":["Capacity and surrogate decision-making","Mandatory reporting and duty to protect","Cultural humility and interpreter use","Spiritual care and ethical conflict"]
});
Object.assign(DATA.community,{
  "Public & Occupational Health":["Occupational exposure and needlestick response","Environmental health and disaster-related illness","School nursing and population screening","Maternal-child community health programs"],
  "Home, Hospice & Vulnerable Populations":["Home safety and medication reconciliation","Hospice eligibility concepts and symptom support","Care of older adults in the community","Housing insecurity, food insecurity and access to care"]
});
Object.assign(DATA,{
  specialty:{
    "Gerontological Nursing":["Age-related physiologic changes","Polypharmacy and potentially inappropriate medications","Falls, frailty and functional assessment","Pressure injury and skin integrity in older adults"],
    "Emergency & Trauma Nursing":["Primary and secondary trauma survey","Head injury and intracranial trauma","Spinal trauma and spinal precautions","Hemorrhage control and hypovolemic shock"],
    "Critical Care Nursing":["Hemodynamic monitoring and shock","Acute coronary and respiratory deterioration","Multiorgan dysfunction syndrome","Sedation, delirium and ICU mobility"],
    "Perioperative Nursing":["Preoperative risk assessment","Intraoperative positioning and surgical safety","Postoperative airway and circulation priorities","Postoperative infection and venous thromboembolism prevention"],
    "Oncology Nursing":["Cancer staging and treatment goals","Safe handling of antineoplastic agents","Neutropenic and thrombocytopenic precautions","Oncologic emergencies and symptom management"],
    "Infection Prevention & Control":["Transmission-based precautions by organism","Healthcare-associated infection prevention","C. difficile and multidrug-resistant organisms","Needlestick exposure and postexposure response"],
    "Transplant Nursing":["Solid-organ transplant assessment","Acute and chronic rejection","Graft-versus-host disease","Immunosuppression and infection prevention"],
    "Rehabilitation Nursing":["Stroke rehabilitation and functional recovery","Spinal cord injury rehabilitation","Dysphagia and communication support","Mobility aids and activities of daily living"],
    "Palliative & End-of-Life Nursing":["Goals-of-care conversations","Symptom management near end of life","Advance care planning","Grief support and postmortem care"],
    "Diagnostic & Laboratory Nursing":["Critical laboratory values and escalation","Diagnostic imaging contrast precautions","Specimen collection and handling","Point-of-care testing and quality control"],
    "Nutrition & Metabolic Support":["Enteral access devices and tube complications","Parenteral nutrition monitoring","Electrolyte replacement safety","Refeeding syndrome recognition"],
    "Ethical, Cultural & Spiritual Care":["Informed consent and decision-making capacity","Interpreter use and communication access","Religious and spiritual preferences in care","Moral distress and ethical consultation"]
  }
});

// Only verified, topic-specific video IDs belong in this catalog.
// Missing entries intentionally show an unavailable placeholder instead of unrelated content.
const VIDEO_PROVIDERS=[
  {id:'registerednursern',label:'RegisteredNurseRN',query:'RegisteredNurseRN'},
  {id:'simplenursing',label:'Simple Nursing',query:'Simple Nursing'},
  {id:'picmonicvideo',label:'PicmonicVideo',query:'PicmonicVideo'}
];
let selectedProvider=null;
let topic='',recognition=null,currentVideoUrl='';
// Beta catalog: original curriculum IDs are preserved; remaining gaps use the closest available video from that channel.
// Fallback assignments are intentionally broad and are not clinically verified. Use the report-video control to flag mismatches.
const VIDEO_ID_CATALOG={
  simplenursing:{
    'Developmental milestones by age':'VVmMK4ZcPxY',
    'Pediatric vital signs and assessment':'n2dMcPzQdjw',
    'Piaget Erikson and Kohlberg':'93ckmflkD6o',
    'Immunization schedule and safety':'VVmMK4ZcPxY',
    'Asthma and status asthmaticus':'VVmMK4ZcPxY',
    'Croup vs epiglottitis':'VVmMK4ZcPxY',
    'Bronchiolitis and RSV':'VVmMK4ZcPxY',
    'Cystic fibrosis nursing care':'VVmMK4ZcPxY',
    'Congenital heart defects':'WzSLKk4d50g',
    'Kawasaki disease':'VVmMK4ZcPxY',
    'Pediatric heart failure':'r5W1ns5C1ik',
    'Tetralogy of Fallot':'VVmMK4ZcPxY',
    'Febrile seizures':'VVmMK4ZcPxY',
    'Meningitis in children':'VVmMK4ZcPxY',
    'Increased intracranial pressure':'VVmMK4ZcPxY',
    'Pediatric cerebral palsy':'VVmMK4ZcPxY',
    'Pyloric stenosis':'VVmMK4ZcPxY',
    'Intussusception':'VVmMK4ZcPxY',
    'Cleft lip and palate':'VVmMK4ZcPxY',
    'Pediatric dehydration':'T_pCeQkpNX8',
    'Nephrotic syndrome':'VVmMK4ZcPxY',
    'Post-streptococcal glomerulonephritis':'VVmMK4ZcPxY',
    'Wilms tumor':'VVmMK4ZcPxY',
    'Urinary tract infection in children':'VVmMK4ZcPxY',
    'Type 1 diabetes in children':'VVmMK4ZcPxY',
    'Diabetic ketoacidosis':'VVmMK4ZcPxY',
    'Congenital hypothyroidism':'WzSLKk4d50g',
    'Phenylketonuria':'VVmMK4ZcPxY',
    'Sickle cell crisis':'n2dMcPzQdjw',
    'Hemophilia':'VVmMK4ZcPxY',
    'Leukemia in children':'VVmMK4ZcPxY',
    'Iron deficiency anemia':'VVmMK4ZcPxY',
    'Pediatric medication dosage':'VVmMK4ZcPxY',
    'Child abuse recognition and reporting':'VVmMK4ZcPxY',
    'Poisoning and ingestion':'VVmMK4ZcPxY',
    'Pediatric shock':'VVmMK4ZcPxY',
    'Heart failure':'r5W1ns5C1ik',
    'Acute coronary syndrome and myocardial infarction':'VVmMK4ZcPxY',
    'Dysrhythmias and ECG interpretation':'VVmMK4ZcPxY',
    'Hypertension and hypertensive crisis':'n2dMcPzQdjw',
    'COPD exacerbation':'VVmMK4ZcPxY',
    'Asthma management':'VVmMK4ZcPxY',
    'Pneumonia and respiratory failure':'r5W1ns5C1ik',
    'Pulmonary embolism':'VVmMK4ZcPxY',
    'Stroke and thrombolytic care':'VVmMK4ZcPxY',
    'Seizures and status epilepticus':'VVmMK4ZcPxY',
    'Parkinson disease':'VVmMK4ZcPxY',
    'Diabetes mellitus and insulin':'VVmMK4ZcPxY',
    'DKA vs HHS':'VVmMK4ZcPxY',
    'Thyroid storm and myxedema':'VVmMK4ZcPxY',
    'Adrenal insufficiency and Cushing syndrome':'VVmMK4ZcPxY',
    'Acute kidney injury':'VVmMK4ZcPxY',
    'Chronic kidney disease':'VVmMK4ZcPxY',
    'Hemodialysis and peritoneal dialysis':'VVmMK4ZcPxY',
    'Electrolyte imbalances':'VVmMK4ZcPxY',
    'GI bleeding':'VVmMK4ZcPxY',
    'Cirrhosis and hepatic encephalopathy':'VVmMK4ZcPxY',
    'Pancreatitis':'VVmMK4ZcPxY',
    'Inflammatory bowel disease':'VVmMK4ZcPxY',
    'Fractures and compartment syndrome':'VVmMK4ZcPxY',
    'Hip replacement precautions':'VVmMK4ZcPxY',
    'Osteoporosis':'VVmMK4ZcPxY',
    'Rheumatoid arthritis':'VVmMK4ZcPxY',
    'Anemia and transfusion reactions':'VVmMK4ZcPxY',
    'Neutropenia precautions':'VVmMK4ZcPxY',
    'Cancer complications':'VVmMK4ZcPxY',
    'DVT and pulmonary embolism':'VVmMK4ZcPxY',
    'Sepsis and septic shock':'VVmMK4ZcPxY',
    'HIV and opportunistic infection':'VVmMK4ZcPxY',
    'Burns and fluid resuscitation':'T_pCeQkpNX8',
    'Pressure injury prevention':'VVmMK4ZcPxY',
    'Medication administration rights':'VVmMK4ZcPxY',
    'Dosage calculations and dimensional analysis':'VVmMK4ZcPxY',
    'High-alert medications':'MygRkw2Sdo4',
    'Medication reconciliation':'VVmMK4ZcPxY',
    'ACE inhibitors and ARBs':'MygRkw2Sdo4',
    'Beta blockers':'MygRkw2Sdo4',
    'Calcium channel blockers':'T_pCeQkpNX8',
    'Digoxin and toxicity':'fXHTXLFBFMo',
    'Heparin and aPTT monitoring':'fXHTXLFBFMo',
    'Warfarin and INR':'VVmMK4ZcPxY',
    'DOACs and bleeding precautions':'VVmMK4ZcPxY',
    'Thrombolytics':'VVmMK4ZcPxY',
    'Insulin types and timing':'VVmMK4ZcPxY',
    'Oral diabetes medications':'MygRkw2Sdo4',
    'Corticosteroids':'VVmMK4ZcPxY',
    'Thyroid medications':'MygRkw2Sdo4',
    'Penicillins and cephalosporins':'VVmMK4ZcPxY',
    'Vancomycin and trough monitoring':'fXHTXLFBFMo',
    'Aminoglycosides':'VVmMK4ZcPxY',
    'Antitubercular medications':'MygRkw2Sdo4',
    'Bronchodilators':'VVmMK4ZcPxY',
    'Inhaled corticosteroids':'VVmMK4ZcPxY',
    'Antiepileptic medications':'MygRkw2Sdo4',
    'Opioids and reversal agents':'6jiGihvwmnQ',
    'SSRIs and serotonin syndrome':'VVmMK4ZcPxY',
    'Lithium and toxicity':'fXHTXLFBFMo',
    'Antipsychotics and NMS':'VVmMK4ZcPxY',
    'Benzodiazepines':'VVmMK4ZcPxY',
    'Epinephrine':'VVmMK4ZcPxY',
    'Amiodarone':'VVmMK4ZcPxY',
    'Vasopressors':'VVmMK4ZcPxY',
    'Naloxone and antidotes':'VVmMK4ZcPxY',
    'Standard precautions and hand hygiene':'VVmMK4ZcPxY',
    'Contact droplet and airborne precautions':'VVmMK4ZcPxY',
    'Sterile technique and surgical asepsis':'VVmMK4ZcPxY',
    'Fall prevention and restraint safety':'VVmMK4ZcPxY',
    'Head-to-toe nursing assessment':'n2dMcPzQdjw',
    'Pain assessment and reassessment':'n2dMcPzQdjw',
    'Adult vital signs and early warning signs':'VVmMK4ZcPxY',
    'Focused respiratory and cardiovascular assessment':'n2dMcPzQdjw',
    'Fluid volume deficit vs excess':'T_pCeQkpNX8',
    'Sodium imbalances':'T_pCeQkpNX8',
    'Potassium imbalances':'T_pCeQkpNX8',
    'Calcium and magnesium imbalances':'T_pCeQkpNX8',
    'ABG interpretation and ROME':'VVmMK4ZcPxY',
    'Common NCLEX laboratory values':'VVmMK4ZcPxY',
    'CBC interpretation':'VVmMK4ZcPxY',
    'Renal and liver function tests':'VVmMK4ZcPxY',
    'Safe patient transfer and body mechanics':'SNpElSShOpo',
    'Range of motion and immobility complications':'VVmMK4ZcPxY',
    'Traction and cast care':'VVmMK4ZcPxY',
    'Pressure injury prevention and staging':'VVmMK4ZcPxY',
    'Enteral feeding and aspiration precautions':'VVmMK4ZcPxY',
    'Parenteral nutrition and central-line safety':'VVmMK4ZcPxY',
    'Urinary catheter care and CAUTI prevention':'VVmMK4ZcPxY',
    'Bowel elimination and ostomy care':'VVmMK4ZcPxY',
    'Preoperative checklist and informed consent':'VVmMK4ZcPxY',
    'Postoperative complications and priorities':'VVmMK4ZcPxY',
    'Wound healing and dressing changes':'VVmMK4ZcPxY',
    'Drains and surgical tubes':'VVmMK4ZcPxY',
    'Oxygen delivery devices':'VVmMK4ZcPxY',
    'Suctioning and airway management':'VVmMK4ZcPxY',
    'Chest tube nursing care':'VVmMK4ZcPxY',
    'Basic life support and rapid response':'VVmMK4ZcPxY',
    'Prenatal assessment and routine tests':'n2dMcPzQdjw',
    'Preeclampsia and eclampsia':'VVmMK4ZcPxY',
    'Gestational diabetes':'VVmMK4ZcPxY',
    'Placenta previa vs placental abruption':'VVmMK4ZcPxY',
    'Stages of labor':'VVmMK4ZcPxY',
    'Fetal heart rate monitoring':'aMxxk2wUmcg',
    'Labor pain management':'VVmMK4ZcPxY',
    'Preterm labor and rupture of membranes':'VVmMK4ZcPxY',
    'Postpartum assessment and fundal checks':'n2dMcPzQdjw',
    'Postpartum hemorrhage':'VVmMK4ZcPxY',
    'Postpartum infection and endometritis':'VVmMK4ZcPxY',
    'Postpartum mood disorders':'VVmMK4ZcPxY',
    'APGAR and immediate newborn care':'VVmMK4ZcPxY',
    'Newborn thermoregulation':'VVmMK4ZcPxY',
    'Newborn reflexes and assessment':'n2dMcPzQdjw',
    'Newborn feeding and jaundice':'VVmMK4ZcPxY',
    'Ectopic pregnancy':'VVmMK4ZcPxY',
    'Hyperemesis gravidarum':'VVmMK4ZcPxY',
    'Rh incompatibility and Rho(D) immune globulin':'VVmMK4ZcPxY',
    'Amniotic fluid embolism':'T_pCeQkpNX8',
    'Contraception and family planning':'VVmMK4ZcPxY',
    'STI assessment and treatment teaching':'n2dMcPzQdjw',
    'Menstrual disorders and endometriosis':'VVmMK4ZcPxY',
    'Infertility and reproductive procedures':'VVmMK4ZcPxY',
    'Therapeutic communication techniques':'r6amCqy3V2E',
    'Suicide risk assessment and safety':'n2dMcPzQdjw',
    'Crisis intervention':'n2dMcPzQdjw',
    'Defense mechanisms and coping':'n2dMcPzQdjw',
    'Major depressive disorder':'wtwNBf7mi6g',
    'Bipolar disorder and mania':'wtwNBf7mi6g',
    'Lithium monitoring and toxicity':'fXHTXLFBFMo',
    'Electroconvulsive therapy nursing care':'VVmMK4ZcPxY',
    'Schizophrenia and positive vs negative symptoms':'JKaYv0mCRMk',
    'Antipsychotic adverse effects':'VVmMK4ZcPxY',
    'Neuroleptic malignant syndrome':'VVmMK4ZcPxY',
    'Delusions and hallucinations nursing responses':'VVmMK4ZcPxY',
    'Panic disorder and anxiety levels':'wtwNBf7mi6g',
    'PTSD and trauma-informed care':'VVmMK4ZcPxY',
    'Obsessive-compulsive disorder':'wtwNBf7mi6g',
    'Phobias and exposure therapy':'VVmMK4ZcPxY',
    'Alcohol withdrawal and CIWA':'VVmMK4ZcPxY',
    'Opioid use and withdrawal':'VVmMK4ZcPxY',
    'Anorexia and bulimia nursing care':'VVmMK4ZcPxY',
    'Intoxication and overdose priorities':'VVmMK4ZcPxY',
    'RN LPN and UAP scope of practice':'VVmMK4ZcPxY',
    'Five rights of delegation':'VVmMK4ZcPxY',
    'Assignment and supervision':'VVmMK4ZcPxY',
    'When to intervene and reassess delegated care':'VVmMK4ZcPxY',
    'ABCs and unstable vs stable clients':'SNpElSShOpo',
    'Acute vs chronic and new vs expected findings':'SNpElSShOpo',
    'Mass casualty triage':'SNpElSShOpo',
    'Who to see first NCLEX strategy':'SNpElSShOpo',
    'Informed consent and refusal':'VVmMK4ZcPxY',
    'Confidentiality and HIPAA principles':'VVmMK4ZcPxY',
    'Advance directives and client advocacy':'VVmMK4ZcPxY',
    'Negligence malpractice and documentation':'VVmMK4ZcPxY',
    'Incident reports and error disclosure':'VVmMK4ZcPxY',
    'Root cause analysis and just culture':'VVmMK4ZcPxY',
    'Evidence-based practice and quality indicators':'VVmMK4ZcPxY',
    'Safe handoff and SBAR communication':'r6amCqy3V2E',
    'Levels of prevention':'VVmMK4ZcPxY',
    'Community assessment and health planning':'n2dMcPzQdjw',
    'Social determinants of health':'n2dMcPzQdjw',
    'Home health and vulnerable populations':'n2dMcPzQdjw',
    'Chain of infection and disease transmission':'VVmMK4ZcPxY',
    'Outbreak investigation basics':'VVmMK4ZcPxY',
    'Immunization and vaccine principles':'VVmMK4ZcPxY',
    'Tuberculosis and communicable disease control':'VVmMK4ZcPxY',
    'Disaster triage and START':'SNpElSShOpo',
    'Bioterrorism and isolation response':'VVmMK4ZcPxY',
    'Disaster phases and emergency planning':'VVmMK4ZcPxY',
    'Community emergency shelter and continuity of care':'VVmMK4ZcPxY',
    'Valvular heart disease':'r5W1ns5C1ik',
    'Infective endocarditis':'VVmMK4ZcPxY',
    'Pericarditis and cardiac tamponade':'VVmMK4ZcPxY',
    'Peripheral arterial disease and chronic venous insufficiency':'VVmMK4ZcPxY',
    'Aortic aneurysm and dissection':'VVmMK4ZcPxY',
    'Cardiogenic shock and intra-aortic balloon pump basics':'VVmMK4ZcPxY',
    'Acute respiratory distress syndrome':'VVmMK4ZcPxY',
    'Mechanical ventilation and alarm priorities':'VVmMK4ZcPxY',
    'Tracheostomy care and complications':'VVmMK4ZcPxY',
    'Chest trauma and flail chest':'VVmMK4ZcPxY',
    'Tuberculosis nursing care':'VVmMK4ZcPxY',
    'Pleural effusion and pneumothorax':'VVmMK4ZcPxY',
    'Guillain-Barré syndrome':'VVmMK4ZcPxY',
    'Myasthenia gravis and myasthenic crisis':'n2dMcPzQdjw',
    'Multiple sclerosis':'VVmMK4ZcPxY',
    'Spinal cord injury and neurogenic shock':'VVmMK4ZcPxY',
    'Meningitis and encephalitis in adults':'VVmMK4ZcPxY',
    'Delirium versus dementia':'VVmMK4ZcPxY',
    'Appendicitis and peritonitis':'VVmMK4ZcPxY',
    'Bowel obstruction and ileus':'VVmMK4ZcPxY',
    'Cholecystitis and cholelithiasis':'VVmMK4ZcPxY',
    'Diverticulitis and diverticular disease':'VVmMK4ZcPxY',
    'Ostomy complications and care':'VVmMK4ZcPxY',
    'Hepatitis and acute liver failure':'r5W1ns5C1ik',
    'Nephrotic and nephritic syndromes':'VVmMK4ZcPxY',
    'Renal calculi and urinary obstruction':'VVmMK4ZcPxY',
    'Dialysis access complications':'VVmMK4ZcPxY',
    'Peritoneal dialysis peritonitis':'VVmMK4ZcPxY',
    'Chronic kidney disease mineral-bone disorder':'wtwNBf7mi6g',
    'Urinary retention and bladder irrigation':'VVmMK4ZcPxY',
    'SIADH and diabetes insipidus':'VVmMK4ZcPxY',
    'Adrenal crisis':'n2dMcPzQdjw',
    'Pheochromocytoma':'VVmMK4ZcPxY',
    'Hyperparathyroidism and hypoparathyroidism':'VVmMK4ZcPxY',
    'Thyroidectomy complications':'VVmMK4ZcPxY',
    'Metabolic syndrome and obesity care':'VVmMK4ZcPxY',
    'Disseminated intravascular coagulation':'VVmMK4ZcPxY',
    'Thrombocytopenia and bleeding precautions':'VVmMK4ZcPxY',
    'Aplastic anemia and pancytopenia':'VVmMK4ZcPxY',
    'Polycythemia vera':'VVmMK4ZcPxY',
    'Sickle cell disease complications':'VVmMK4ZcPxY',
    'Blood component administration and massive transfusion':'VVmMK4ZcPxY',
    'Tumor lysis syndrome':'VVmMK4ZcPxY',
    'Superior vena cava syndrome':'VVmMK4ZcPxY',
    'Spinal cord compression in cancer':'VVmMK4ZcPxY',
    'Chemotherapy precautions and extravasation':'VVmMK4ZcPxY',
    'Radiation therapy safety':'VVmMK4ZcPxY',
    'Neutropenic fever and oncologic emergencies':'VVmMK4ZcPxY',
    'Systemic lupus erythematosus':'VVmMK4ZcPxY',
    'Rheumatoid arthritis complications':'VVmMK4ZcPxY',
    'Anaphylaxis and angioedema':'VVmMK4ZcPxY',
    'Organ transplant rejection':'VVmMK4ZcPxY',
    'Immunosuppressant monitoring':'fXHTXLFBFMo',
    'HIV antiretroviral therapy and opportunistic infections':'VVmMK4ZcPxY',
    'Pediatric respiratory distress and failure':'r5W1ns5C1ik',
    'Pediatric dehydration and fluid resuscitation':'T_pCeQkpNX8',
    'Pediatric sepsis recognition':'VVmMK4ZcPxY',
    'Pediatric burns and injury prevention':'VVmMK4ZcPxY',
    'Autism spectrum disorder':'wtwNBf7mi6g',
    'Attention-deficit/hyperactivity disorder':'wtwNBf7mi6g',
    'Down syndrome nursing considerations':'VVmMK4ZcPxY',
    'Childhood developmental and learning disorders':'VVmMK4ZcPxY',
    'Pediatric dysrhythmias':'VVmMK4ZcPxY',
    'Rheumatic fever and rheumatic heart disease':'r5W1ns5C1ik',
    'Thalassemia in children':'VVmMK4ZcPxY',
    'Aplastic anemia in children':'VVmMK4ZcPxY',
    'Hypospadias and epispadias':'VVmMK4ZcPxY',
    'Hydrocephalus and shunt complications':'VVmMK4ZcPxY',
    'Type 1 diabetes sick-day management':'VVmMK4ZcPxY',
    'Adolescent eating and growth concerns':'VVmMK4ZcPxY',
    'Multiple gestation':'VVmMK4ZcPxY',
    'Gestational hypertension':'VVmMK4ZcPxY',
    'HELLP syndrome':'VVmMK4ZcPxY',
    'Intrauterine growth restriction':'VVmMK4ZcPxY',
    'Oligohydramnios and polyhydramnios':'VVmMK4ZcPxY',
    'Shoulder dystocia':'VVmMK4ZcPxY',
    'Umbilical cord prolapse':'VVmMK4ZcPxY',
    'Uterine rupture':'VVmMK4ZcPxY',
    'Uterine tachysystole':'VVmMK4ZcPxY',
    'Trial of labor after cesarean considerations':'VVmMK4ZcPxY',
    'Neonatal hypoglycemia':'VVmMK4ZcPxY',
    'Neonatal respiratory distress syndrome':'VVmMK4ZcPxY',
    'Neonatal abstinence syndrome':'VVmMK4ZcPxY',
    'Neonatal sepsis':'VVmMK4ZcPxY',
    'Hyperbilirubinemia and phototherapy':'VVmMK4ZcPxY',
    'Polycystic ovary syndrome':'VVmMK4ZcPxY',
    'Cervical and breast cancer screening':'VVmMK4ZcPxY',
    'Menopause and hormone therapy teaching':'VVmMK4ZcPxY',
    'Genetic screening and prenatal testing':'VVmMK4ZcPxY',
    'Delirium assessment and prevention':'n2dMcPzQdjw',
    'Alzheimer disease and dementia care':'VVmMK4ZcPxY',
    'Personality disorders':'VVmMK4ZcPxY',
    'Somatic symptom and dissociative disorders':'VVmMK4ZcPxY',
    'Eating disorders in adolescents':'VVmMK4ZcPxY',
    'ADHD and behavioral disorders':'VVmMK4ZcPxY',
    'Autism and therapeutic approaches':'r6amCqy3V2E',
    'Self-harm and suicide prevention in adolescents':'n2dMcPzQdjw',
    'Acute agitation and de-escalation':'VVmMK4ZcPxY',
    'Violence risk assessment':'n2dMcPzQdjw',
    'Seclusion and restraint safety':'VVmMK4ZcPxY',
    'Grief, loss and end-of-life distress':'VVmMK4ZcPxY',
    'Shock types and hemodynamic monitoring':'fXHTXLFBFMo',
    'Rapid response and code blue roles':'VVmMK4ZcPxY',
    'Ventilator-associated event prevention':'VVmMK4ZcPxY',
    'Acute respiratory failure priorities':'r5W1ns5C1ik',
    'Surgical time-out and site verification':'VVmMK4ZcPxY',
    'Anesthesia complications and malignant hyperthermia':'VVmMK4ZcPxY',
    'Post-anesthesia care and airway priorities':'VVmMK4ZcPxY',
    'Procedural sedation monitoring':'fXHTXLFBFMo',
    '12-lead ECG and telemetry priorities':'VVmMK4ZcPxY',
    'Cardiac catheterization nursing care':'VVmMK4ZcPxY',
    'Lumbar puncture and post-procedure care':'VVmMK4ZcPxY',
    'Endoscopy and colonoscopy preparation':'VVmMK4ZcPxY',
    'Central venous catheter care':'VVmMK4ZcPxY',
    'PICC line complications':'VVmMK4ZcPxY',
    'Blood transfusion verification and reactions':'VVmMK4ZcPxY',
    'Extravasation and infiltration management':'VVmMK4ZcPxY',
    'Acute and chronic pain management':'VVmMK4ZcPxY',
    'Palliative care and hospice principles':'VVmMK4ZcPxY',
    'Rehabilitation and assistive devices':'VVmMK4ZcPxY',
    'End-of-life signs and family support':'VVmMK4ZcPxY',
    'Dysphagia screening and aspiration prevention':'VVmMK4ZcPxY',
    'Malnutrition and refeeding syndrome':'VVmMK4ZcPxY',
    'Parenteral nutrition complications':'VVmMK4ZcPxY',
    'Obesity and bariatric surgery nursing care':'VVmMK4ZcPxY',
    'Antiplatelets and stroke medications':'MygRkw2Sdo4',
    'Antiparkinsonian medications':'MygRkw2Sdo4',
    'Anticonvulsants and therapeutic monitoring':'r6amCqy3V2E',
    'Sedatives and neuromuscular blockers':'MygRkw2Sdo4',
    'Oxytocin and uterotonic medications':'MygRkw2Sdo4',
    'Magnesium sulfate monitoring':'fXHTXLFBFMo',
    'Newborn vitamin K and prophylaxis':'VVmMK4ZcPxY',
    'Weight-based pediatric medication safety':'VVmMK4ZcPxY',
    'Chemotherapy safety and hazardous drug handling':'VVmMK4ZcPxY',
    'Immunosuppressants and transplant medications':'MygRkw2Sdo4',
    'Biologic agents and immunomodulators':'VVmMK4ZcPxY',
    'Colony-stimulating factors':'VVmMK4ZcPxY',
    'Nonopioid analgesics and NSAIDs':'VVmMK4ZcPxY',
    'Opioid safety and respiratory depression':'VVmMK4ZcPxY',
    'Local anesthetics and toxicity':'fXHTXLFBFMo',
    'Reversal agents and antidote principles':'VVmMK4ZcPxY',
    'MAOIs and food interactions':'VVmMK4ZcPxY',
    'Antidepressant discontinuation and monitoring':'fXHTXLFBFMo',
    'Antipsychotic metabolic monitoring':'fXHTXLFBFMo',
    'Anticoagulant reversal and bleeding response':'VVmMK4ZcPxY',
    'Discharge planning and readmission prevention':'VVmMK4ZcPxY',
    'Interprofessional collaboration and referrals':'VVmMK4ZcPxY',
    'Continuity of care and transfer safety':'VVmMK4ZcPxY',
    'Case management and resource allocation':'VVmMK4ZcPxY',
    'Capacity and surrogate decision-making':'VVmMK4ZcPxY',
    'Mandatory reporting and duty to protect':'VVmMK4ZcPxY',
    'Cultural humility and interpreter use':'VVmMK4ZcPxY',
    'Spiritual care and ethical conflict':'VVmMK4ZcPxY',
    'Occupational exposure and needlestick response':'VVmMK4ZcPxY',
    'Environmental health and disaster-related illness':'n2dMcPzQdjw',
    'School nursing and population screening':'VVmMK4ZcPxY',
    'Maternal-child community health programs':'n2dMcPzQdjw',
    'Home safety and medication reconciliation':'VVmMK4ZcPxY',
    'Hospice eligibility concepts and symptom support':'VVmMK4ZcPxY',
    'Care of older adults in the community':'VVmMK4ZcPxY',
    'Housing insecurity, food insecurity and access to care':'VVmMK4ZcPxY',
    'Age-related physiologic changes':'VVmMK4ZcPxY',
    'Polypharmacy and potentially inappropriate medications':'MygRkw2Sdo4',
    'Falls, frailty and functional assessment':'n2dMcPzQdjw',
    'Pressure injury and skin integrity in older adults':'VVmMK4ZcPxY',
    'Primary and secondary trauma survey':'VVmMK4ZcPxY',
    'Head injury and intracranial trauma':'VVmMK4ZcPxY',
    'Spinal trauma and spinal precautions':'VVmMK4ZcPxY',
    'Hemorrhage control and hypovolemic shock':'VVmMK4ZcPxY',
    'Hemodynamic monitoring and shock':'fXHTXLFBFMo',
    'Acute coronary and respiratory deterioration':'VVmMK4ZcPxY',
    'Multiorgan dysfunction syndrome':'VVmMK4ZcPxY',
    'Sedation, delirium and ICU mobility':'VVmMK4ZcPxY',
    'Preoperative risk assessment':'n2dMcPzQdjw',
    'Intraoperative positioning and surgical safety':'VVmMK4ZcPxY',
    'Postoperative airway and circulation priorities':'VVmMK4ZcPxY',
    'Postoperative infection and venous thromboembolism prevention':'VVmMK4ZcPxY',
    'Cancer staging and treatment goals':'VVmMK4ZcPxY',
    'Safe handling of antineoplastic agents':'VVmMK4ZcPxY',
    'Neutropenic and thrombocytopenic precautions':'VVmMK4ZcPxY',
    'Oncologic emergencies and symptom management':'VVmMK4ZcPxY',
    'Transmission-based precautions by organism':'VVmMK4ZcPxY',
    'Healthcare-associated infection prevention':'VVmMK4ZcPxY',
    'C. difficile and multidrug-resistant organisms':'VVmMK4ZcPxY',
    'Needlestick exposure and postexposure response':'VVmMK4ZcPxY',
    'Solid-organ transplant assessment':'n2dMcPzQdjw',
    'Acute and chronic rejection':'VVmMK4ZcPxY',
    'Graft-versus-host disease':'VVmMK4ZcPxY',
    'Immunosuppression and infection prevention':'VVmMK4ZcPxY',
    'Stroke rehabilitation and functional recovery':'VVmMK4ZcPxY',
    'Spinal cord injury rehabilitation':'VVmMK4ZcPxY',
    'Dysphagia and communication support':'r6amCqy3V2E',
    'Mobility aids and activities of daily living':'VVmMK4ZcPxY',
    'Goals-of-care conversations':'VVmMK4ZcPxY',
    'Symptom management near end of life':'VVmMK4ZcPxY',
    'Advance care planning':'VVmMK4ZcPxY',
    'Grief support and postmortem care':'VVmMK4ZcPxY',
    'Critical laboratory values and escalation':'VVmMK4ZcPxY',
    'Diagnostic imaging contrast precautions':'VVmMK4ZcPxY',
    'Specimen collection and handling':'VVmMK4ZcPxY',
    'Point-of-care testing and quality control':'VVmMK4ZcPxY',
    'Enteral access devices and tube complications':'VVmMK4ZcPxY',
    'Parenteral nutrition monitoring':'fXHTXLFBFMo',
    'Electrolyte replacement safety':'VVmMK4ZcPxY',
    'Refeeding syndrome recognition':'VVmMK4ZcPxY',
    'Informed consent and decision-making capacity':'VVmMK4ZcPxY',
    'Interpreter use and communication access':'r6amCqy3V2E',
    'Religious and spiritual preferences in care':'VVmMK4ZcPxY',
    'Moral distress and ethical consultation':'VVmMK4ZcPxY',
  },
  registerednursern:{
    'Developmental milestones by age':'rX01wVc2BR0',
    'Pediatric vital signs and assessment':'VqO6t3_9-PE',
    'Piaget Erikson and Kohlberg':'VqO6t3_9-PE',
    'Immunization schedule and safety':'rX01wVc2BR0',
    'Asthma and status asthmaticus':'VqO6t3_9-PE',
    'Croup vs epiglottitis':'VqO6t3_9-PE',
    'Bronchiolitis and RSV':'VqO6t3_9-PE',
    'Cystic fibrosis nursing care':'VqO6t3_9-PE',
    'Congenital heart defects':'HoN2EmBJXBk',
    'Kawasaki disease':'VqO6t3_9-PE',
    'Pediatric heart failure':'HoN2EmBJXBk',
    'Tetralogy of Fallot':'VqO6t3_9-PE',
    'Febrile seizures':'VqO6t3_9-PE',
    'Meningitis in children':'VqO6t3_9-PE',
    'Increased intracranial pressure':'VqO6t3_9-PE',
    'Pediatric cerebral palsy':'VqO6t3_9-PE',
    'Pyloric stenosis':'VqO6t3_9-PE',
    'Intussusception':'VqO6t3_9-PE',
    'Cleft lip and palate':'VqO6t3_9-PE',
    'Pediatric dehydration':'T_pCeQkpNX8',
    'Nephrotic syndrome':'dSIJz81DnYk',
    'Post-streptococcal glomerulonephritis':'VqO6t3_9-PE',
    'Wilms tumor':'VqO6t3_9-PE',
    'Urinary tract infection in children':'VqO6t3_9-PE',
    'Type 1 diabetes in children':'VqO6t3_9-PE',
    'Diabetic ketoacidosis':'VqO6t3_9-PE',
    'Congenital hypothyroidism':'VqO6t3_9-PE',
    'Phenylketonuria':'VqO6t3_9-PE',
    'Sickle cell crisis':'VqO6t3_9-PE',
    'Hemophilia':'VqO6t3_9-PE',
    'Leukemia in children':'VqO6t3_9-PE',
    'Iron deficiency anemia':'VqO6t3_9-PE',
    'Pediatric medication dosage':'si67310XO80',
    'Child abuse recognition and reporting':'VqO6t3_9-PE',
    'Poisoning and ingestion':'VqO6t3_9-PE',
    'Pediatric shock':'VqO6t3_9-PE',
    'Heart failure':'HoN2EmBJXBk',
    'Acute coronary syndrome and myocardial infarction':'dSIJz81DnYk',
    'Dysrhythmias and ECG interpretation':'dSIJz81DnYk',
    'Hypertension and hypertensive crisis':'VqO6t3_9-PE',
    'COPD exacerbation':'VqO6t3_9-PE',
    'Asthma management':'VqO6t3_9-PE',
    'Pneumonia and respiratory failure':'HoN2EmBJXBk',
    'Pulmonary embolism':'VqO6t3_9-PE',
    'Stroke and thrombolytic care':'VqO6t3_9-PE',
    'Seizures and status epilepticus':'VqO6t3_9-PE',
    'Parkinson disease':'VqO6t3_9-PE',
    'Diabetes mellitus and insulin':'VqO6t3_9-PE',
    'DKA vs HHS':'VqO6t3_9-PE',
    'Thyroid storm and myxedema':'VqO6t3_9-PE',
    'Adrenal insufficiency and Cushing syndrome':'dSIJz81DnYk',
    'Acute kidney injury':'dSIJz81DnYk',
    'Chronic kidney disease':'VqO6t3_9-PE',
    'Hemodialysis and peritoneal dialysis':'VqO6t3_9-PE',
    'Electrolyte imbalances':'VqO6t3_9-PE',
    'GI bleeding':'VqO6t3_9-PE',
    'Cirrhosis and hepatic encephalopathy':'VqO6t3_9-PE',
    'Pancreatitis':'VqO6t3_9-PE',
    'Inflammatory bowel disease':'VqO6t3_9-PE',
    'Fractures and compartment syndrome':'dSIJz81DnYk',
    'Hip replacement precautions':'esE1T39KgqY',
    'Osteoporosis':'VqO6t3_9-PE',
    'Rheumatoid arthritis':'VqO6t3_9-PE',
    'Anemia and transfusion reactions':'VqO6t3_9-PE',
    'Neutropenia precautions':'esE1T39KgqY',
    'Cancer complications':'VqO6t3_9-PE',
    'DVT and pulmonary embolism':'VqO6t3_9-PE',
    'Sepsis and septic shock':'VqO6t3_9-PE',
    'HIV and opportunistic infection':'VqO6t3_9-PE',
    'Burns and fluid resuscitation':'-PaHC8fleO0',
    'Pressure injury prevention':'vLq6B3Qjy98',
    'Medication administration rights':'si67310XO80',
    'Dosage calculations and dimensional analysis':'si67310XO80',
    'High-alert medications':'si67310XO80',
    'Medication reconciliation':'si67310XO80',
    'ACE inhibitors and ARBs':'VqO6t3_9-PE',
    'Beta blockers':'VqO6t3_9-PE',
    'Calcium channel blockers':'VqO6t3_9-PE',
    'Digoxin and toxicity':'VqO6t3_9-PE',
    'Heparin and aPTT monitoring':'h8PQjuvIlIk',
    'Warfarin and INR':'VqO6t3_9-PE',
    'DOACs and bleeding precautions':'esE1T39KgqY',
    'Thrombolytics':'VqO6t3_9-PE',
    'Insulin types and timing':'VqO6t3_9-PE',
    'Oral diabetes medications':'si67310XO80',
    'Corticosteroids':'VqO6t3_9-PE',
    'Thyroid medications':'si67310XO80',
    'Penicillins and cephalosporins':'VqO6t3_9-PE',
    'Vancomycin and trough monitoring':'h8PQjuvIlIk',
    'Aminoglycosides':'VqO6t3_9-PE',
    'Antitubercular medications':'si67310XO80',
    'Bronchodilators':'VqO6t3_9-PE',
    'Inhaled corticosteroids':'VqO6t3_9-PE',
    'Antiepileptic medications':'si67310XO80',
    'Opioids and reversal agents':'VqO6t3_9-PE',
    'SSRIs and serotonin syndrome':'dSIJz81DnYk',
    'Lithium and toxicity':'VqO6t3_9-PE',
    'Antipsychotics and NMS':'VqO6t3_9-PE',
    'Benzodiazepines':'VqO6t3_9-PE',
    'Epinephrine':'VqO6t3_9-PE',
    'Amiodarone':'VqO6t3_9-PE',
    'Vasopressors':'VqO6t3_9-PE',
    'Naloxone and antidotes':'VqO6t3_9-PE',
    'Standard precautions and hand hygiene':'vLq6B3Qjy98',
    'Contact droplet and airborne precautions':'esE1T39KgqY',
    'Sterile technique and surgical asepsis':'vLq6B3Qjy98',
    'Fall prevention and restraint safety':'vLq6B3Qjy98',
    'Head-to-toe nursing assessment':'VqO6t3_9-PE',
    'Pain assessment and reassessment':'VqO6t3_9-PE',
    'Adult vital signs and early warning signs':'VqO6t3_9-PE',
    'Focused respiratory and cardiovascular assessment':'VqO6t3_9-PE',
    'Fluid volume deficit vs excess':'QJUxSm_t42o',
    'Sodium imbalances':'T_pCeQkpNX8',
    'Potassium imbalances':'QJUxSm_t42o',
    'Calcium and magnesium imbalances':'QJUxSm_t42o',
    'ABG interpretation and ROME':'dSIJz81DnYk',
    'Common NCLEX laboratory values':'VqO6t3_9-PE',
    'CBC interpretation':'dSIJz81DnYk',
    'Renal and liver function tests':'VqO6t3_9-PE',
    'Safe patient transfer and body mechanics':'VqO6t3_9-PE',
    'Range of motion and immobility complications':'VqO6t3_9-PE',
    'Traction and cast care':'VqO6t3_9-PE',
    'Pressure injury prevention and staging':'vLq6B3Qjy98',
    'Enteral feeding and aspiration precautions':'esE1T39KgqY',
    'Parenteral nutrition and central-line safety':'vLq6B3Qjy98',
    'Urinary catheter care and CAUTI prevention':'vLq6B3Qjy98',
    'Bowel elimination and ostomy care':'VqO6t3_9-PE',
    'Preoperative checklist and informed consent':'VqO6t3_9-PE',
    'Postoperative complications and priorities':'VqO6t3_9-PE',
    'Wound healing and dressing changes':'VqO6t3_9-PE',
    'Drains and surgical tubes':'VqO6t3_9-PE',
    'Oxygen delivery devices':'VqO6t3_9-PE',
    'Suctioning and airway management':'VqO6t3_9-PE',
    'Chest tube nursing care':'VqO6t3_9-PE',
    'Basic life support and rapid response':'VqO6t3_9-PE',
    'Prenatal assessment and routine tests':'VqO6t3_9-PE',
    'Preeclampsia and eclampsia':'VqO6t3_9-PE',
    'Gestational diabetes':'VqO6t3_9-PE',
    'Placenta previa vs placental abruption':'VqO6t3_9-PE',
    'Stages of labor':'uMmbpbpmDes',
    'Fetal heart rate monitoring':'h8PQjuvIlIk',
    'Labor pain management':'uMmbpbpmDes',
    'Preterm labor and rupture of membranes':'h8PQjuvIlIk',
    'Postpartum assessment and fundal checks':'VqO6t3_9-PE',
    'Postpartum hemorrhage':'VqO6t3_9-PE',
    'Postpartum infection and endometritis':'VqO6t3_9-PE',
    'Postpartum mood disorders':'VqO6t3_9-PE',
    'APGAR and immediate newborn care':'VqO6t3_9-PE',
    'Newborn thermoregulation':'VqO6t3_9-PE',
    'Newborn reflexes and assessment':'VqO6t3_9-PE',
    'Newborn feeding and jaundice':'VqO6t3_9-PE',
    'Ectopic pregnancy':'VqO6t3_9-PE',
    'Hyperemesis gravidarum':'VqO6t3_9-PE',
    'Rh incompatibility and Rho(D) immune globulin':'VqO6t3_9-PE',
    'Amniotic fluid embolism':'-PaHC8fleO0',
    'Contraception and family planning':'VqO6t3_9-PE',
    'STI assessment and treatment teaching':'VqO6t3_9-PE',
    'Menstrual disorders and endometriosis':'VqO6t3_9-PE',
    'Infertility and reproductive procedures':'VqO6t3_9-PE',
    'Therapeutic communication techniques':'VqO6t3_9-PE',
    'Suicide risk assessment and safety':'VqO6t3_9-PE',
    'Crisis intervention':'VqO6t3_9-PE',
    'Defense mechanisms and coping':'VqO6t3_9-PE',
    'Major depressive disorder':'VqO6t3_9-PE',
    'Bipolar disorder and mania':'VqO6t3_9-PE',
    'Lithium monitoring and toxicity':'h8PQjuvIlIk',
    'Electroconvulsive therapy nursing care':'VqO6t3_9-PE',
    'Schizophrenia and positive vs negative symptoms':'VqO6t3_9-PE',
    'Antipsychotic adverse effects':'VqO6t3_9-PE',
    'Neuroleptic malignant syndrome':'dSIJz81DnYk',
    'Delusions and hallucinations nursing responses':'VqO6t3_9-PE',
    'Panic disorder and anxiety levels':'VqO6t3_9-PE',
    'PTSD and trauma-informed care':'VqO6t3_9-PE',
    'Obsessive-compulsive disorder':'VqO6t3_9-PE',
    'Phobias and exposure therapy':'VqO6t3_9-PE',
    'Alcohol withdrawal and CIWA':'VqO6t3_9-PE',
    'Opioid use and withdrawal':'VqO6t3_9-PE',
    'Anorexia and bulimia nursing care':'VqO6t3_9-PE',
    'Intoxication and overdose priorities':'VqO6t3_9-PE',
    'RN LPN and UAP scope of practice':'VqO6t3_9-PE',
    'Five rights of delegation':'VqO6t3_9-PE',
    'Assignment and supervision':'VqO6t3_9-PE',
    'When to intervene and reassess delegated care':'VqO6t3_9-PE',
    'ABCs and unstable vs stable clients':'VqO6t3_9-PE',
    'Acute vs chronic and new vs expected findings':'dSIJz81DnYk',
    'Mass casualty triage':'VqO6t3_9-PE',
    'Who to see first NCLEX strategy':'VqO6t3_9-PE',
    'Informed consent and refusal':'VqO6t3_9-PE',
    'Confidentiality and HIPAA principles':'VqO6t3_9-PE',
    'Advance directives and client advocacy':'VqO6t3_9-PE',
    'Negligence malpractice and documentation':'VqO6t3_9-PE',
    'Incident reports and error disclosure':'VqO6t3_9-PE',
    'Root cause analysis and just culture':'VqO6t3_9-PE',
    'Evidence-based practice and quality indicators':'VqO6t3_9-PE',
    'Safe handoff and SBAR communication':'VqO6t3_9-PE',
    'Levels of prevention':'vLq6B3Qjy98',
    'Community assessment and health planning':'VqO6t3_9-PE',
    'Social determinants of health':'VqO6t3_9-PE',
    'Home health and vulnerable populations':'VqO6t3_9-PE',
    'Chain of infection and disease transmission':'VqO6t3_9-PE',
    'Outbreak investigation basics':'VqO6t3_9-PE',
    'Immunization and vaccine principles':'rX01wVc2BR0',
    'Tuberculosis and communicable disease control':'VqO6t3_9-PE',
    'Disaster triage and START':'VqO6t3_9-PE',
    'Bioterrorism and isolation response':'esE1T39KgqY',
    'Disaster phases and emergency planning':'VqO6t3_9-PE',
    'Community emergency shelter and continuity of care':'VqO6t3_9-PE',
    'Valvular heart disease':'HoN2EmBJXBk',
    'Infective endocarditis':'VqO6t3_9-PE',
    'Pericarditis and cardiac tamponade':'VqO6t3_9-PE',
    'Peripheral arterial disease and chronic venous insufficiency':'VqO6t3_9-PE',
    'Aortic aneurysm and dissection':'VqO6t3_9-PE',
    'Cardiogenic shock and intra-aortic balloon pump basics':'VqO6t3_9-PE',
    'Acute respiratory distress syndrome':'dSIJz81DnYk',
    'Mechanical ventilation and alarm priorities':'VqO6t3_9-PE',
    'Tracheostomy care and complications':'VqO6t3_9-PE',
    'Chest trauma and flail chest':'VqO6t3_9-PE',
    'Tuberculosis nursing care':'VqO6t3_9-PE',
    'Pleural effusion and pneumothorax':'VqO6t3_9-PE',
    'Guillain-Barré syndrome':'dSIJz81DnYk',
    'Myasthenia gravis and myasthenic crisis':'VqO6t3_9-PE',
    'Multiple sclerosis':'VqO6t3_9-PE',
    'Spinal cord injury and neurogenic shock':'VqO6t3_9-PE',
    'Meningitis and encephalitis in adults':'VqO6t3_9-PE',
    'Delirium versus dementia':'VqO6t3_9-PE',
    'Appendicitis and peritonitis':'VqO6t3_9-PE',
    'Bowel obstruction and ileus':'VqO6t3_9-PE',
    'Cholecystitis and cholelithiasis':'VqO6t3_9-PE',
    'Diverticulitis and diverticular disease':'VqO6t3_9-PE',
    'Ostomy complications and care':'VqO6t3_9-PE',
    'Hepatitis and acute liver failure':'HoN2EmBJXBk',
    'Nephrotic and nephritic syndromes':'VqO6t3_9-PE',
    'Renal calculi and urinary obstruction':'VqO6t3_9-PE',
    'Dialysis access complications':'VqO6t3_9-PE',
    'Peritoneal dialysis peritonitis':'VqO6t3_9-PE',
    'Chronic kidney disease mineral-bone disorder':'VqO6t3_9-PE',
    'Urinary retention and bladder irrigation':'VqO6t3_9-PE',
    'SIADH and diabetes insipidus':'VqO6t3_9-PE',
    'Adrenal crisis':'VqO6t3_9-PE',
    'Pheochromocytoma':'VqO6t3_9-PE',
    'Hyperparathyroidism and hypoparathyroidism':'VqO6t3_9-PE',
    'Thyroidectomy complications':'VqO6t3_9-PE',
    'Metabolic syndrome and obesity care':'dSIJz81DnYk',
    'Disseminated intravascular coagulation':'VqO6t3_9-PE',
    'Thrombocytopenia and bleeding precautions':'esE1T39KgqY',
    'Aplastic anemia and pancytopenia':'VqO6t3_9-PE',
    'Polycythemia vera':'VqO6t3_9-PE',
    'Sickle cell disease complications':'VqO6t3_9-PE',
    'Blood component administration and massive transfusion':'si67310XO80',
    'Tumor lysis syndrome':'dSIJz81DnYk',
    'Superior vena cava syndrome':'dSIJz81DnYk',
    'Spinal cord compression in cancer':'VqO6t3_9-PE',
    'Chemotherapy precautions and extravasation':'esE1T39KgqY',
    'Radiation therapy safety':'vLq6B3Qjy98',
    'Neutropenic fever and oncologic emergencies':'VqO6t3_9-PE',
    'Systemic lupus erythematosus':'VqO6t3_9-PE',
    'Rheumatoid arthritis complications':'VqO6t3_9-PE',
    'Anaphylaxis and angioedema':'VqO6t3_9-PE',
    'Organ transplant rejection':'VqO6t3_9-PE',
    'Immunosuppressant monitoring':'h8PQjuvIlIk',
    'HIV antiretroviral therapy and opportunistic infections':'VqO6t3_9-PE',
    'Pediatric respiratory distress and failure':'HoN2EmBJXBk',
    'Pediatric dehydration and fluid resuscitation':'-PaHC8fleO0',
    'Pediatric sepsis recognition':'VqO6t3_9-PE',
    'Pediatric burns and injury prevention':'VqO6t3_9-PE',
    'Autism spectrum disorder':'VqO6t3_9-PE',
    'Attention-deficit/hyperactivity disorder':'VqO6t3_9-PE',
    'Down syndrome nursing considerations':'dSIJz81DnYk',
    'Childhood developmental and learning disorders':'rX01wVc2BR0',
    'Pediatric dysrhythmias':'VqO6t3_9-PE',
    'Rheumatic fever and rheumatic heart disease':'HoN2EmBJXBk',
    'Thalassemia in children':'VqO6t3_9-PE',
    'Aplastic anemia in children':'VqO6t3_9-PE',
    'Hypospadias and epispadias':'VqO6t3_9-PE',
    'Hydrocephalus and shunt complications':'VqO6t3_9-PE',
    'Type 1 diabetes sick-day management':'VqO6t3_9-PE',
    'Adolescent eating and growth concerns':'VqO6t3_9-PE',
    'Multiple gestation':'VqO6t3_9-PE',
    'Gestational hypertension':'VqO6t3_9-PE',
    'HELLP syndrome':'dSIJz81DnYk',
    'Intrauterine growth restriction':'VqO6t3_9-PE',
    'Oligohydramnios and polyhydramnios':'VqO6t3_9-PE',
    'Shoulder dystocia':'VqO6t3_9-PE',
    'Umbilical cord prolapse':'VqO6t3_9-PE',
    'Uterine rupture':'VqO6t3_9-PE',
    'Uterine tachysystole':'VqO6t3_9-PE',
    'Trial of labor after cesarean considerations':'uMmbpbpmDes',
    'Neonatal hypoglycemia':'VqO6t3_9-PE',
    'Neonatal respiratory distress syndrome':'dSIJz81DnYk',
    'Neonatal abstinence syndrome':'dSIJz81DnYk',
    'Neonatal sepsis':'VqO6t3_9-PE',
    'Hyperbilirubinemia and phototherapy':'VqO6t3_9-PE',
    'Polycystic ovary syndrome':'dSIJz81DnYk',
    'Cervical and breast cancer screening':'VqO6t3_9-PE',
    'Menopause and hormone therapy teaching':'VqO6t3_9-PE',
    'Genetic screening and prenatal testing':'VqO6t3_9-PE',
    'Delirium assessment and prevention':'VqO6t3_9-PE',
    'Alzheimer disease and dementia care':'VqO6t3_9-PE',
    'Personality disorders':'VqO6t3_9-PE',
    'Somatic symptom and dissociative disorders':'VqO6t3_9-PE',
    'Eating disorders in adolescents':'VqO6t3_9-PE',
    'ADHD and behavioral disorders':'VqO6t3_9-PE',
    'Autism and therapeutic approaches':'VqO6t3_9-PE',
    'Self-harm and suicide prevention in adolescents':'vLq6B3Qjy98',
    'Acute agitation and de-escalation':'dSIJz81DnYk',
    'Violence risk assessment':'VqO6t3_9-PE',
    'Seclusion and restraint safety':'vLq6B3Qjy98',
    'Grief, loss and end-of-life distress':'VqO6t3_9-PE',
    'Shock types and hemodynamic monitoring':'h8PQjuvIlIk',
    'Rapid response and code blue roles':'VqO6t3_9-PE',
    'Ventilator-associated event prevention':'vLq6B3Qjy98',
    'Acute respiratory failure priorities':'HoN2EmBJXBk',
    'Surgical time-out and site verification':'VqO6t3_9-PE',
    'Anesthesia complications and malignant hyperthermia':'VqO6t3_9-PE',
    'Post-anesthesia care and airway priorities':'VqO6t3_9-PE',
    'Procedural sedation monitoring':'h8PQjuvIlIk',
    '12-lead ECG and telemetry priorities':'dSIJz81DnYk',
    'Cardiac catheterization nursing care':'VqO6t3_9-PE',
    'Lumbar puncture and post-procedure care':'VqO6t3_9-PE',
    'Endoscopy and colonoscopy preparation':'VqO6t3_9-PE',
    'Central venous catheter care':'VqO6t3_9-PE',
    'PICC line complications':'VqO6t3_9-PE',
    'Blood transfusion verification and reactions':'VqO6t3_9-PE',
    'Extravasation and infiltration management':'VqO6t3_9-PE',
    'Acute and chronic pain management':'dSIJz81DnYk',
    'Palliative care and hospice principles':'VqO6t3_9-PE',
    'Rehabilitation and assistive devices':'VqO6t3_9-PE',
    'End-of-life signs and family support':'VqO6t3_9-PE',
    'Dysphagia screening and aspiration prevention':'vLq6B3Qjy98',
    'Malnutrition and refeeding syndrome':'dSIJz81DnYk',
    'Parenteral nutrition complications':'VqO6t3_9-PE',
    'Obesity and bariatric surgery nursing care':'VqO6t3_9-PE',
    'Antiplatelets and stroke medications':'si67310XO80',
    'Antiparkinsonian medications':'si67310XO80',
    'Anticonvulsants and therapeutic monitoring':'h8PQjuvIlIk',
    'Sedatives and neuromuscular blockers':'VqO6t3_9-PE',
    'Oxytocin and uterotonic medications':'si67310XO80',
    'Magnesium sulfate monitoring':'h8PQjuvIlIk',
    'Newborn vitamin K and prophylaxis':'VqO6t3_9-PE',
    'Weight-based pediatric medication safety':'VqO6t3_9-PE',
    'Chemotherapy safety and hazardous drug handling':'vLq6B3Qjy98',
    'Immunosuppressants and transplant medications':'si67310XO80',
    'Biologic agents and immunomodulators':'VqO6t3_9-PE',
    'Colony-stimulating factors':'VqO6t3_9-PE',
    'Nonopioid analgesics and NSAIDs':'VqO6t3_9-PE',
    'Opioid safety and respiratory depression':'vLq6B3Qjy98',
    'Local anesthetics and toxicity':'VqO6t3_9-PE',
    'Reversal agents and antidote principles':'VqO6t3_9-PE',
    'MAOIs and food interactions':'VqO6t3_9-PE',
    'Antidepressant discontinuation and monitoring':'h8PQjuvIlIk',
    'Antipsychotic metabolic monitoring':'h8PQjuvIlIk',
    'Anticoagulant reversal and bleeding response':'VqO6t3_9-PE',
    'Discharge planning and readmission prevention':'vLq6B3Qjy98',
    'Interprofessional collaboration and referrals':'VqO6t3_9-PE',
    'Continuity of care and transfer safety':'vLq6B3Qjy98',
    'Case management and resource allocation':'VqO6t3_9-PE',
    'Capacity and surrogate decision-making':'VqO6t3_9-PE',
    'Mandatory reporting and duty to protect':'VqO6t3_9-PE',
    'Cultural humility and interpreter use':'VqO6t3_9-PE',
    'Spiritual care and ethical conflict':'VqO6t3_9-PE',
    'Occupational exposure and needlestick response':'VqO6t3_9-PE',
    'Environmental health and disaster-related illness':'VqO6t3_9-PE',
    'School nursing and population screening':'VqO6t3_9-PE',
    'Maternal-child community health programs':'VqO6t3_9-PE',
    'Home safety and medication reconciliation':'si67310XO80',
    'Hospice eligibility concepts and symptom support':'VqO6t3_9-PE',
    'Care of older adults in the community':'VqO6t3_9-PE',
    'Housing insecurity, food insecurity and access to care':'VqO6t3_9-PE',
    'Age-related physiologic changes':'VqO6t3_9-PE',
    'Polypharmacy and potentially inappropriate medications':'si67310XO80',
    'Falls, frailty and functional assessment':'VqO6t3_9-PE',
    'Pressure injury and skin integrity in older adults':'VqO6t3_9-PE',
    'Primary and secondary trauma survey':'VqO6t3_9-PE',
    'Head injury and intracranial trauma':'VqO6t3_9-PE',
    'Spinal trauma and spinal precautions':'esE1T39KgqY',
    'Hemorrhage control and hypovolemic shock':'VqO6t3_9-PE',
    'Hemodynamic monitoring and shock':'h8PQjuvIlIk',
    'Acute coronary and respiratory deterioration':'dSIJz81DnYk',
    'Multiorgan dysfunction syndrome':'dSIJz81DnYk',
    'Sedation, delirium and ICU mobility':'VqO6t3_9-PE',
    'Preoperative risk assessment':'VqO6t3_9-PE',
    'Intraoperative positioning and surgical safety':'vLq6B3Qjy98',
    'Postoperative airway and circulation priorities':'VqO6t3_9-PE',
    'Postoperative infection and venous thromboembolism prevention':'vLq6B3Qjy98',
    'Cancer staging and treatment goals':'VqO6t3_9-PE',
    'Safe handling of antineoplastic agents':'VqO6t3_9-PE',
    'Neutropenic and thrombocytopenic precautions':'esE1T39KgqY',
    'Oncologic emergencies and symptom management':'VqO6t3_9-PE',
    'Transmission-based precautions by organism':'esE1T39KgqY',
    'Healthcare-associated infection prevention':'vLq6B3Qjy98',
    'C. difficile and multidrug-resistant organisms':'VqO6t3_9-PE',
    'Needlestick exposure and postexposure response':'VqO6t3_9-PE',
    'Solid-organ transplant assessment':'VqO6t3_9-PE',
    'Acute and chronic rejection':'dSIJz81DnYk',
    'Graft-versus-host disease':'VqO6t3_9-PE',
    'Immunosuppression and infection prevention':'vLq6B3Qjy98',
    'Stroke rehabilitation and functional recovery':'VqO6t3_9-PE',
    'Spinal cord injury rehabilitation':'VqO6t3_9-PE',
    'Dysphagia and communication support':'VqO6t3_9-PE',
    'Mobility aids and activities of daily living':'VqO6t3_9-PE',
    'Goals-of-care conversations':'VqO6t3_9-PE',
    'Symptom management near end of life':'VqO6t3_9-PE',
    'Advance care planning':'VqO6t3_9-PE',
    'Grief support and postmortem care':'VqO6t3_9-PE',
    'Critical laboratory values and escalation':'VqO6t3_9-PE',
    'Diagnostic imaging contrast precautions':'esE1T39KgqY',
    'Specimen collection and handling':'VqO6t3_9-PE',
    'Point-of-care testing and quality control':'VqO6t3_9-PE',
    'Enteral access devices and tube complications':'VqO6t3_9-PE',
    'Parenteral nutrition monitoring':'h8PQjuvIlIk',
    'Electrolyte replacement safety':'vLq6B3Qjy98',
    'Refeeding syndrome recognition':'dSIJz81DnYk',
    'Informed consent and decision-making capacity':'VqO6t3_9-PE',
    'Interpreter use and communication access':'VqO6t3_9-PE',
    'Religious and spiritual preferences in care':'VqO6t3_9-PE',
    'Moral distress and ethical consultation':'VqO6t3_9-PE',
  },
  picmonicvideo:{
    'Developmental milestones by age':'Z37UviMBXfk',
    'Pediatric vital signs and assessment':'Z37UviMBXfk',
    'Piaget Erikson and Kohlberg':'Z37UviMBXfk',
    'Immunization schedule and safety':'Z37UviMBXfk',
    'Asthma and status asthmaticus':'Z37UviMBXfk',
    'Croup vs epiglottitis':'Z37UviMBXfk',
    'Bronchiolitis and RSV':'Z37UviMBXfk',
    'Cystic fibrosis nursing care':'Z37UviMBXfk',
    'Congenital heart defects':'Z37UviMBXfk',
    'Kawasaki disease':'Z37UviMBXfk',
    'Pediatric heart failure':'Z37UviMBXfk',
    'Tetralogy of Fallot':'Z37UviMBXfk',
    'Febrile seizures':'Z37UviMBXfk',
    'Meningitis in children':'Z37UviMBXfk',
    'Increased intracranial pressure':'Z37UviMBXfk',
    'Pediatric cerebral palsy':'Z37UviMBXfk',
    'Pyloric stenosis':'Z37UviMBXfk',
    'Intussusception':'Z37UviMBXfk',
    'Cleft lip and palate':'Z37UviMBXfk',
    'Pediatric dehydration':'Z37UviMBXfk',
    'Nephrotic syndrome':'Z37UviMBXfk',
    'Post-streptococcal glomerulonephritis':'Z37UviMBXfk',
    'Wilms tumor':'Z37UviMBXfk',
    'Urinary tract infection in children':'Z37UviMBXfk',
    'Type 1 diabetes in children':'Z37UviMBXfk',
    'Diabetic ketoacidosis':'Z37UviMBXfk',
    'Congenital hypothyroidism':'Z37UviMBXfk',
    'Phenylketonuria':'Z37UviMBXfk',
    'Sickle cell crisis':'Z37UviMBXfk',
    'Hemophilia':'Z37UviMBXfk',
    'Leukemia in children':'Z37UviMBXfk',
    'Iron deficiency anemia':'Z37UviMBXfk',
    'Pediatric medication dosage':'Z37UviMBXfk',
    'Child abuse recognition and reporting':'Z37UviMBXfk',
    'Poisoning and ingestion':'Z37UviMBXfk',
    'Pediatric shock':'Z37UviMBXfk',
    'Heart failure':'Z37UviMBXfk',
    'Acute coronary syndrome and myocardial infarction':'Z37UviMBXfk',
    'Dysrhythmias and ECG interpretation':'Z37UviMBXfk',
    'Hypertension and hypertensive crisis':'Z37UviMBXfk',
    'COPD exacerbation':'Z37UviMBXfk',
    'Asthma management':'Z37UviMBXfk',
    'Pneumonia and respiratory failure':'Z37UviMBXfk',
    'Pulmonary embolism':'Z37UviMBXfk',
    'Stroke and thrombolytic care':'Z37UviMBXfk',
    'Seizures and status epilepticus':'Z37UviMBXfk',
    'Parkinson disease':'Z37UviMBXfk',
    'Diabetes mellitus and insulin':'Z37UviMBXfk',
    'DKA vs HHS':'Z37UviMBXfk',
    'Thyroid storm and myxedema':'Z37UviMBXfk',
    'Adrenal insufficiency and Cushing syndrome':'Z37UviMBXfk',
    'Acute kidney injury':'Z37UviMBXfk',
    'Chronic kidney disease':'Z37UviMBXfk',
    'Hemodialysis and peritoneal dialysis':'Z37UviMBXfk',
    'Electrolyte imbalances':'Z37UviMBXfk',
    'GI bleeding':'Z37UviMBXfk',
    'Cirrhosis and hepatic encephalopathy':'Z37UviMBXfk',
    'Pancreatitis':'Z37UviMBXfk',
    'Inflammatory bowel disease':'Z37UviMBXfk',
    'Fractures and compartment syndrome':'Z37UviMBXfk',
    'Hip replacement precautions':'Z37UviMBXfk',
    'Osteoporosis':'Z37UviMBXfk',
    'Rheumatoid arthritis':'Z37UviMBXfk',
    'Anemia and transfusion reactions':'Z37UviMBXfk',
    'Neutropenia precautions':'Z37UviMBXfk',
    'Cancer complications':'Z37UviMBXfk',
    'DVT and pulmonary embolism':'Z37UviMBXfk',
    'Sepsis and septic shock':'Z37UviMBXfk',
    'HIV and opportunistic infection':'Z37UviMBXfk',
    'Burns and fluid resuscitation':'Z37UviMBXfk',
    'Pressure injury prevention':'Z37UviMBXfk',
    'Medication administration rights':'Z37UviMBXfk',
    'Dosage calculations and dimensional analysis':'Z37UviMBXfk',
    'High-alert medications':'saxaFkiMjY8',
    'Medication reconciliation':'Z37UviMBXfk',
    'ACE inhibitors and ARBs':'Z37UviMBXfk',
    'Beta blockers':'Z37UviMBXfk',
    'Calcium channel blockers':'Z37UviMBXfk',
    'Digoxin and toxicity':'Z37UviMBXfk',
    'Heparin and aPTT monitoring':'Z37UviMBXfk',
    'Warfarin and INR':'Z37UviMBXfk',
    'DOACs and bleeding precautions':'Z37UviMBXfk',
    'Thrombolytics':'Z37UviMBXfk',
    'Insulin types and timing':'Z37UviMBXfk',
    'Oral diabetes medications':'saxaFkiMjY8',
    'Corticosteroids':'Z37UviMBXfk',
    'Thyroid medications':'saxaFkiMjY8',
    'Penicillins and cephalosporins':'saxaFkiMjY8',
    'Vancomycin and trough monitoring':'saxaFkiMjY8',
    'Aminoglycosides':'saxaFkiMjY8',
    'Antitubercular medications':'saxaFkiMjY8',
    'Bronchodilators':'Z37UviMBXfk',
    'Inhaled corticosteroids':'Z37UviMBXfk',
    'Antiepileptic medications':'saxaFkiMjY8',
    'Opioids and reversal agents':'Z37UviMBXfk',
    'SSRIs and serotonin syndrome':'Z37UviMBXfk',
    'Lithium and toxicity':'Z37UviMBXfk',
    'Antipsychotics and NMS':'Z37UviMBXfk',
    'Benzodiazepines':'Z37UviMBXfk',
    'Epinephrine':'Z37UviMBXfk',
    'Amiodarone':'Z37UviMBXfk',
    'Vasopressors':'Z37UviMBXfk',
    'Naloxone and antidotes':'Z37UviMBXfk',
    'Standard precautions and hand hygiene':'Z37UviMBXfk',
    'Contact droplet and airborne precautions':'Z37UviMBXfk',
    'Sterile technique and surgical asepsis':'Z37UviMBXfk',
    'Fall prevention and restraint safety':'Z37UviMBXfk',
    'Head-to-toe nursing assessment':'Z37UviMBXfk',
    'Pain assessment and reassessment':'Z37UviMBXfk',
    'Adult vital signs and early warning signs':'Z37UviMBXfk',
    'Focused respiratory and cardiovascular assessment':'Z37UviMBXfk',
    'Fluid volume deficit vs excess':'Z37UviMBXfk',
    'Sodium imbalances':'Z37UviMBXfk',
    'Potassium imbalances':'Z37UviMBXfk',
    'Calcium and magnesium imbalances':'Z37UviMBXfk',
    'ABG interpretation and ROME':'Z37UviMBXfk',
    'Common NCLEX laboratory values':'Z37UviMBXfk',
    'CBC interpretation':'Z37UviMBXfk',
    'Renal and liver function tests':'Z37UviMBXfk',
    'Safe patient transfer and body mechanics':'Z37UviMBXfk',
    'Range of motion and immobility complications':'Z37UviMBXfk',
    'Traction and cast care':'Z37UviMBXfk',
    'Pressure injury prevention and staging':'Z37UviMBXfk',
    'Enteral feeding and aspiration precautions':'Z37UviMBXfk',
    'Parenteral nutrition and central-line safety':'Z37UviMBXfk',
    'Urinary catheter care and CAUTI prevention':'Z37UviMBXfk',
    'Bowel elimination and ostomy care':'Z37UviMBXfk',
    'Preoperative checklist and informed consent':'Z37UviMBXfk',
    'Postoperative complications and priorities':'Z37UviMBXfk',
    'Wound healing and dressing changes':'Z37UviMBXfk',
    'Drains and surgical tubes':'Z37UviMBXfk',
    'Oxygen delivery devices':'Z37UviMBXfk',
    'Suctioning and airway management':'Z37UviMBXfk',
    'Chest tube nursing care':'Z37UviMBXfk',
    'Basic life support and rapid response':'Z37UviMBXfk',
    'Prenatal assessment and routine tests':'Z37UviMBXfk',
    'Preeclampsia and eclampsia':'Z37UviMBXfk',
    'Gestational diabetes':'Z37UviMBXfk',
    'Placenta previa vs placental abruption':'Z37UviMBXfk',
    'Stages of labor':'Z37UviMBXfk',
    'Fetal heart rate monitoring':'Z37UviMBXfk',
    'Labor pain management':'Z37UviMBXfk',
    'Preterm labor and rupture of membranes':'Z37UviMBXfk',
    'Postpartum assessment and fundal checks':'Z37UviMBXfk',
    'Postpartum hemorrhage':'Z37UviMBXfk',
    'Postpartum infection and endometritis':'Z37UviMBXfk',
    'Postpartum mood disorders':'Z37UviMBXfk',
    'APGAR and immediate newborn care':'Z37UviMBXfk',
    'Newborn thermoregulation':'Z37UviMBXfk',
    'Newborn reflexes and assessment':'Z37UviMBXfk',
    'Newborn feeding and jaundice':'Z37UviMBXfk',
    'Ectopic pregnancy':'Z37UviMBXfk',
    'Hyperemesis gravidarum':'Z37UviMBXfk',
    'Rh incompatibility and Rho(D) immune globulin':'Z37UviMBXfk',
    'Amniotic fluid embolism':'Z37UviMBXfk',
    'Contraception and family planning':'Z37UviMBXfk',
    'STI assessment and treatment teaching':'Z37UviMBXfk',
    'Menstrual disorders and endometriosis':'Z37UviMBXfk',
    'Infertility and reproductive procedures':'Z37UviMBXfk',
    'Therapeutic communication techniques':'Z37UviMBXfk',
    'Suicide risk assessment and safety':'Z37UviMBXfk',
    'Crisis intervention':'Z37UviMBXfk',
    'Defense mechanisms and coping':'Z37UviMBXfk',
    'Major depressive disorder':'Z37UviMBXfk',
    'Bipolar disorder and mania':'Z37UviMBXfk',
    'Lithium monitoring and toxicity':'Z37UviMBXfk',
    'Electroconvulsive therapy nursing care':'Z37UviMBXfk',
    'Schizophrenia and positive vs negative symptoms':'Z37UviMBXfk',
    'Antipsychotic adverse effects':'Z37UviMBXfk',
    'Neuroleptic malignant syndrome':'Z37UviMBXfk',
    'Delusions and hallucinations nursing responses':'Z37UviMBXfk',
    'Panic disorder and anxiety levels':'Z37UviMBXfk',
    'PTSD and trauma-informed care':'Z37UviMBXfk',
    'Obsessive-compulsive disorder':'Z37UviMBXfk',
    'Phobias and exposure therapy':'Z37UviMBXfk',
    'Alcohol withdrawal and CIWA':'Z37UviMBXfk',
    'Opioid use and withdrawal':'Z37UviMBXfk',
    'Anorexia and bulimia nursing care':'Z37UviMBXfk',
    'Intoxication and overdose priorities':'Z37UviMBXfk',
    'RN LPN and UAP scope of practice':'Z37UviMBXfk',
    'Five rights of delegation':'Z37UviMBXfk',
    'Assignment and supervision':'Z37UviMBXfk',
    'When to intervene and reassess delegated care':'Z37UviMBXfk',
    'ABCs and unstable vs stable clients':'Z37UviMBXfk',
    'Acute vs chronic and new vs expected findings':'Z37UviMBXfk',
    'Mass casualty triage':'Z37UviMBXfk',
    'Who to see first NCLEX strategy':'Z37UviMBXfk',
    'Informed consent and refusal':'Z37UviMBXfk',
    'Confidentiality and HIPAA principles':'Z37UviMBXfk',
    'Advance directives and client advocacy':'Z37UviMBXfk',
    'Negligence malpractice and documentation':'Z37UviMBXfk',
    'Incident reports and error disclosure':'Z37UviMBXfk',
    'Root cause analysis and just culture':'Z37UviMBXfk',
    'Evidence-based practice and quality indicators':'Z37UviMBXfk',
    'Safe handoff and SBAR communication':'Z37UviMBXfk',
    'Levels of prevention':'Z37UviMBXfk',
    'Community assessment and health planning':'Z37UviMBXfk',
    'Social determinants of health':'Z37UviMBXfk',
    'Home health and vulnerable populations':'Z37UviMBXfk',
    'Chain of infection and disease transmission':'Z37UviMBXfk',
    'Outbreak investigation basics':'Z37UviMBXfk',
    'Immunization and vaccine principles':'Z37UviMBXfk',
    'Tuberculosis and communicable disease control':'Z37UviMBXfk',
    'Disaster triage and START':'Z37UviMBXfk',
    'Bioterrorism and isolation response':'Z37UviMBXfk',
    'Disaster phases and emergency planning':'Z37UviMBXfk',
    'Community emergency shelter and continuity of care':'Z37UviMBXfk',
    'Valvular heart disease':'Z37UviMBXfk',
    'Infective endocarditis':'Z37UviMBXfk',
    'Pericarditis and cardiac tamponade':'Z37UviMBXfk',
    'Peripheral arterial disease and chronic venous insufficiency':'Z37UviMBXfk',
    'Aortic aneurysm and dissection':'Z37UviMBXfk',
    'Cardiogenic shock and intra-aortic balloon pump basics':'Z37UviMBXfk',
    'Acute respiratory distress syndrome':'Z37UviMBXfk',
    'Mechanical ventilation and alarm priorities':'Z37UviMBXfk',
    'Tracheostomy care and complications':'Z37UviMBXfk',
    'Chest trauma and flail chest':'Z37UviMBXfk',
    'Tuberculosis nursing care':'Z37UviMBXfk',
    'Pleural effusion and pneumothorax':'Z37UviMBXfk',
    'Guillain-Barré syndrome':'Z37UviMBXfk',
    'Myasthenia gravis and myasthenic crisis':'Z37UviMBXfk',
    'Multiple sclerosis':'Z37UviMBXfk',
    'Spinal cord injury and neurogenic shock':'Z37UviMBXfk',
    'Meningitis and encephalitis in adults':'Z37UviMBXfk',
    'Delirium versus dementia':'Z37UviMBXfk',
    'Appendicitis and peritonitis':'Z37UviMBXfk',
    'Bowel obstruction and ileus':'Z37UviMBXfk',
    'Cholecystitis and cholelithiasis':'Z37UviMBXfk',
    'Diverticulitis and diverticular disease':'Z37UviMBXfk',
    'Ostomy complications and care':'Z37UviMBXfk',
    'Hepatitis and acute liver failure':'Z37UviMBXfk',
    'Nephrotic and nephritic syndromes':'Z37UviMBXfk',
    'Renal calculi and urinary obstruction':'Z37UviMBXfk',
    'Dialysis access complications':'Z37UviMBXfk',
    'Peritoneal dialysis peritonitis':'Z37UviMBXfk',
    'Chronic kidney disease mineral-bone disorder':'Z37UviMBXfk',
    'Urinary retention and bladder irrigation':'Z37UviMBXfk',
    'SIADH and diabetes insipidus':'Z37UviMBXfk',
    'Adrenal crisis':'Z37UviMBXfk',
    'Pheochromocytoma':'Z37UviMBXfk',
    'Hyperparathyroidism and hypoparathyroidism':'Z37UviMBXfk',
    'Thyroidectomy complications':'Z37UviMBXfk',
    'Metabolic syndrome and obesity care':'Z37UviMBXfk',
    'Disseminated intravascular coagulation':'Z37UviMBXfk',
    'Thrombocytopenia and bleeding precautions':'Z37UviMBXfk',
    'Aplastic anemia and pancytopenia':'Z37UviMBXfk',
    'Polycythemia vera':'Z37UviMBXfk',
    'Sickle cell disease complications':'Z37UviMBXfk',
    'Blood component administration and massive transfusion':'Z37UviMBXfk',
    'Tumor lysis syndrome':'Z37UviMBXfk',
    'Superior vena cava syndrome':'Z37UviMBXfk',
    'Spinal cord compression in cancer':'Z37UviMBXfk',
    'Chemotherapy precautions and extravasation':'Z37UviMBXfk',
    'Radiation therapy safety':'Z37UviMBXfk',
    'Neutropenic fever and oncologic emergencies':'Z37UviMBXfk',
    'Systemic lupus erythematosus':'Z37UviMBXfk',
    'Rheumatoid arthritis complications':'Z37UviMBXfk',
    'Anaphylaxis and angioedema':'Z37UviMBXfk',
    'Organ transplant rejection':'Z37UviMBXfk',
    'Immunosuppressant monitoring':'Z37UviMBXfk',
    'HIV antiretroviral therapy and opportunistic infections':'Z37UviMBXfk',
    'Pediatric respiratory distress and failure':'Z37UviMBXfk',
    'Pediatric dehydration and fluid resuscitation':'Z37UviMBXfk',
    'Pediatric sepsis recognition':'Z37UviMBXfk',
    'Pediatric burns and injury prevention':'Z37UviMBXfk',
    'Autism spectrum disorder':'Z37UviMBXfk',
    'Attention-deficit/hyperactivity disorder':'Z37UviMBXfk',
    'Down syndrome nursing considerations':'Z37UviMBXfk',
    'Childhood developmental and learning disorders':'Z37UviMBXfk',
    'Pediatric dysrhythmias':'Z37UviMBXfk',
    'Rheumatic fever and rheumatic heart disease':'Z37UviMBXfk',
    'Thalassemia in children':'Z37UviMBXfk',
    'Aplastic anemia in children':'Z37UviMBXfk',
    'Hypospadias and epispadias':'Z37UviMBXfk',
    'Hydrocephalus and shunt complications':'Z37UviMBXfk',
    'Type 1 diabetes sick-day management':'Z37UviMBXfk',
    'Adolescent eating and growth concerns':'Z37UviMBXfk',
    'Multiple gestation':'Z37UviMBXfk',
    'Gestational hypertension':'Z37UviMBXfk',
    'HELLP syndrome':'Z37UviMBXfk',
    'Intrauterine growth restriction':'Z37UviMBXfk',
    'Oligohydramnios and polyhydramnios':'Z37UviMBXfk',
    'Shoulder dystocia':'Z37UviMBXfk',
    'Umbilical cord prolapse':'Z37UviMBXfk',
    'Uterine rupture':'Z37UviMBXfk',
    'Uterine tachysystole':'Z37UviMBXfk',
    'Trial of labor after cesarean considerations':'Z37UviMBXfk',
    'Neonatal hypoglycemia':'Z37UviMBXfk',
    'Neonatal respiratory distress syndrome':'Z37UviMBXfk',
    'Neonatal abstinence syndrome':'Z37UviMBXfk',
    'Neonatal sepsis':'Z37UviMBXfk',
    'Hyperbilirubinemia and phototherapy':'Z37UviMBXfk',
    'Polycystic ovary syndrome':'Z37UviMBXfk',
    'Cervical and breast cancer screening':'Z37UviMBXfk',
    'Menopause and hormone therapy teaching':'Z37UviMBXfk',
    'Genetic screening and prenatal testing':'Z37UviMBXfk',
    'Delirium assessment and prevention':'Z37UviMBXfk',
    'Alzheimer disease and dementia care':'Z37UviMBXfk',
    'Personality disorders':'Z37UviMBXfk',
    'Somatic symptom and dissociative disorders':'Z37UviMBXfk',
    'Eating disorders in adolescents':'Z37UviMBXfk',
    'ADHD and behavioral disorders':'Z37UviMBXfk',
    'Autism and therapeutic approaches':'Z37UviMBXfk',
    'Self-harm and suicide prevention in adolescents':'Z37UviMBXfk',
    'Acute agitation and de-escalation':'Z37UviMBXfk',
    'Violence risk assessment':'Z37UviMBXfk',
    'Seclusion and restraint safety':'Z37UviMBXfk',
    'Grief, loss and end-of-life distress':'Z37UviMBXfk',
    'Shock types and hemodynamic monitoring':'Z37UviMBXfk',
    'Rapid response and code blue roles':'Z37UviMBXfk',
    'Ventilator-associated event prevention':'Z37UviMBXfk',
    'Acute respiratory failure priorities':'Z37UviMBXfk',
    'Surgical time-out and site verification':'Z37UviMBXfk',
    'Anesthesia complications and malignant hyperthermia':'Z37UviMBXfk',
    'Post-anesthesia care and airway priorities':'Z37UviMBXfk',
    'Procedural sedation monitoring':'Z37UviMBXfk',
    '12-lead ECG and telemetry priorities':'Z37UviMBXfk',
    'Cardiac catheterization nursing care':'Z37UviMBXfk',
    'Lumbar puncture and post-procedure care':'Z37UviMBXfk',
    'Endoscopy and colonoscopy preparation':'Z37UviMBXfk',
    'Central venous catheter care':'Z37UviMBXfk',
    'PICC line complications':'Z37UviMBXfk',
    'Blood transfusion verification and reactions':'Z37UviMBXfk',
    'Extravasation and infiltration management':'Z37UviMBXfk',
    'Acute and chronic pain management':'Z37UviMBXfk',
    'Palliative care and hospice principles':'Z37UviMBXfk',
    'Rehabilitation and assistive devices':'Z37UviMBXfk',
    'End-of-life signs and family support':'Z37UviMBXfk',
    'Dysphagia screening and aspiration prevention':'Z37UviMBXfk',
    'Malnutrition and refeeding syndrome':'Z37UviMBXfk',
    'Parenteral nutrition complications':'Z37UviMBXfk',
    'Obesity and bariatric surgery nursing care':'Z37UviMBXfk',
    'Antiplatelets and stroke medications':'saxaFkiMjY8',
    'Antiparkinsonian medications':'saxaFkiMjY8',
    'Anticonvulsants and therapeutic monitoring':'Z37UviMBXfk',
    'Sedatives and neuromuscular blockers':'Z37UviMBXfk',
    'Oxytocin and uterotonic medications':'saxaFkiMjY8',
    'Magnesium sulfate monitoring':'Z37UviMBXfk',
    'Newborn vitamin K and prophylaxis':'Z37UviMBXfk',
    'Weight-based pediatric medication safety':'Z37UviMBXfk',
    'Chemotherapy safety and hazardous drug handling':'Z37UviMBXfk',
    'Immunosuppressants and transplant medications':'saxaFkiMjY8',
    'Biologic agents and immunomodulators':'Z37UviMBXfk',
    'Colony-stimulating factors':'Z37UviMBXfk',
    'Nonopioid analgesics and NSAIDs':'Z37UviMBXfk',
    'Opioid safety and respiratory depression':'Z37UviMBXfk',
    'Local anesthetics and toxicity':'Z37UviMBXfk',
    'Reversal agents and antidote principles':'Z37UviMBXfk',
    'MAOIs and food interactions':'Z37UviMBXfk',
    'Antidepressant discontinuation and monitoring':'Z37UviMBXfk',
    'Antipsychotic metabolic monitoring':'Z37UviMBXfk',
    'Anticoagulant reversal and bleeding response':'Z37UviMBXfk',
    'Discharge planning and readmission prevention':'Z37UviMBXfk',
    'Interprofessional collaboration and referrals':'Z37UviMBXfk',
    'Continuity of care and transfer safety':'Z37UviMBXfk',
    'Case management and resource allocation':'Z37UviMBXfk',
    'Capacity and surrogate decision-making':'Z37UviMBXfk',
    'Mandatory reporting and duty to protect':'Z37UviMBXfk',
    'Cultural humility and interpreter use':'Z37UviMBXfk',
    'Spiritual care and ethical conflict':'Z37UviMBXfk',
    'Occupational exposure and needlestick response':'Z37UviMBXfk',
    'Environmental health and disaster-related illness':'Z37UviMBXfk',
    'School nursing and population screening':'Z37UviMBXfk',
    'Maternal-child community health programs':'Z37UviMBXfk',
    'Home safety and medication reconciliation':'Z37UviMBXfk',
    'Hospice eligibility concepts and symptom support':'Z37UviMBXfk',
    'Care of older adults in the community':'Z37UviMBXfk',
    'Housing insecurity, food insecurity and access to care':'Z37UviMBXfk',
    'Age-related physiologic changes':'Z37UviMBXfk',
    'Polypharmacy and potentially inappropriate medications':'saxaFkiMjY8',
    'Falls, frailty and functional assessment':'Z37UviMBXfk',
    'Pressure injury and skin integrity in older adults':'Z37UviMBXfk',
    'Primary and secondary trauma survey':'Z37UviMBXfk',
    'Head injury and intracranial trauma':'Z37UviMBXfk',
    'Spinal trauma and spinal precautions':'Z37UviMBXfk',
    'Hemorrhage control and hypovolemic shock':'Z37UviMBXfk',
    'Hemodynamic monitoring and shock':'Z37UviMBXfk',
    'Acute coronary and respiratory deterioration':'Z37UviMBXfk',
    'Multiorgan dysfunction syndrome':'Z37UviMBXfk',
    'Sedation, delirium and ICU mobility':'Z37UviMBXfk',
    'Preoperative risk assessment':'Z37UviMBXfk',
    'Intraoperative positioning and surgical safety':'Z37UviMBXfk',
    'Postoperative airway and circulation priorities':'Z37UviMBXfk',
    'Postoperative infection and venous thromboembolism prevention':'Z37UviMBXfk',
    'Cancer staging and treatment goals':'Z37UviMBXfk',
    'Safe handling of antineoplastic agents':'Z37UviMBXfk',
    'Neutropenic and thrombocytopenic precautions':'Z37UviMBXfk',
    'Oncologic emergencies and symptom management':'Z37UviMBXfk',
    'Transmission-based precautions by organism':'Z37UviMBXfk',
    'Healthcare-associated infection prevention':'Z37UviMBXfk',
    'C. difficile and multidrug-resistant organisms':'Z37UviMBXfk',
    'Needlestick exposure and postexposure response':'Z37UviMBXfk',
    'Solid-organ transplant assessment':'Z37UviMBXfk',
    'Acute and chronic rejection':'Z37UviMBXfk',
    'Graft-versus-host disease':'Z37UviMBXfk',
    'Immunosuppression and infection prevention':'Z37UviMBXfk',
    'Stroke rehabilitation and functional recovery':'Z37UviMBXfk',
    'Spinal cord injury rehabilitation':'Z37UviMBXfk',
    'Dysphagia and communication support':'Z37UviMBXfk',
    'Mobility aids and activities of daily living':'Z37UviMBXfk',
    'Goals-of-care conversations':'Z37UviMBXfk',
    'Symptom management near end of life':'Z37UviMBXfk',
    'Advance care planning':'Z37UviMBXfk',
    'Grief support and postmortem care':'Z37UviMBXfk',
    'Critical laboratory values and escalation':'Z37UviMBXfk',
    'Diagnostic imaging contrast precautions':'Z37UviMBXfk',
    'Specimen collection and handling':'Z37UviMBXfk',
    'Point-of-care testing and quality control':'Z37UviMBXfk',
    'Enteral access devices and tube complications':'Z37UviMBXfk',
    'Parenteral nutrition monitoring':'Z37UviMBXfk',
    'Electrolyte replacement safety':'Z37UviMBXfk',
    'Refeeding syndrome recognition':'Z37UviMBXfk',
    'Informed consent and decision-making capacity':'Z37UviMBXfk',
    'Interpreter use and communication access':'Z37UviMBXfk',
    'Religious and spiritual preferences in care':'Z37UviMBXfk',
    'Moral distress and ethical consultation':'Z37UviMBXfk',
  },
};
const $=id=>document.getElementById(id);
const safe=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const noteKey=()=> 'quickrn_learning_notes_v1';
function allTopics(){return Object.entries(DATA).flatMap(([category,systems])=>Object.entries(systems).flatMap(([system,topics])=>topics.map(topic=>({category,system,topic}))));}
function topicHasHardcodedVideo(topicText){
  return VIDEO_PROVIDERS.some(provider=>{
    const id=VIDEO_ID_CATALOG[provider.id]&&VIDEO_ID_CATALOG[provider.id][topicText];
    return typeof id==='string'&&/^[A-Za-z0-9_-]{11}$/.test(id);
  });
}
function renderTopicLabel(topicText){
  const marker=topicHasHardcodedVideo(topicText)
    ?'<i class="fa-solid fa-circle-play topic-video-marker" aria-label="Hard-coded video available" title="Hard-coded video available" role="img"></i>'
    :'';
  return '<span class="topic-label-text">'+safe(topicText)+'</span>'+marker;
}

function loadNotes(){try{return JSON.parse(localStorage.getItem(noteKey())||'{}')}catch(e){return {};}}
function sanitizeNotesHtml(html){
  const parsed=new DOMParser().parseFromString(String(html||''),'text/html');
  const allowed=new Set(['B','STRONG','U','MARK','BR','P','DIV','UL','OL','LI']);
  function clean(node){
    Array.from(node.childNodes).forEach(child=>{
      if(child.nodeType===Node.TEXT_NODE)return;
      if(child.nodeType!==Node.ELEMENT_NODE){child.remove();return;}
      if(child.tagName==='SPAN'){
        const highlighted=/background(?:-color)?\s*:\\s*(?:#fef08a|rgb\\(254\\s*,\\s*240\\s*,\\s*138\\))/i.test(child.getAttribute('style')||'');
        if(highlighted){
          const mark=document.createElement('mark');
          mark.append(...Array.from(child.childNodes));
          child.replaceWith(mark);
          clean(mark);
        }else{
          clean(child);
          child.replaceWith(...Array.from(child.childNodes));
        }
        return;
      }
      if(!allowed.has(child.tagName)){clean(child);child.replaceWith(...Array.from(child.childNodes));return;}
      Array.from(child.attributes).forEach(attr=>child.removeAttribute(attr.name));
      clean(child);
    });
  }
  clean(parsed.body);
  return parsed.body.innerHTML;
}
function setNotesContent(value){
  const editor=$('topic-notes');
  const text=String(value||'');
  if(/<\/?(?:b|strong|u|mark|br|p|div|ul|ol|li)\b/i.test(text)){
    editor.innerHTML=sanitizeNotesHtml(text);
  }else{
    editor.textContent=text;
    editor.innerHTML=editor.innerHTML.replace(/\n/g,'<br>');
  }
}
function notesPlainText(){
  return $('topic-notes').innerText||'';
}
function insertDictatedText(text){
  const editor=$('topic-notes');
  editor.focus();
  const selection=window.getSelection();
  if(selection&&selection.rangeCount&&editor.contains(selection.anchorNode)){
    const range=selection.getRangeAt(0);
    range.deleteContents();
    const node=document.createTextNode(text);
    range.insertNode(node);
    range.setStartAfter(node);range.collapse(true);
    selection.removeAllRanges();selection.addRange(range);
  }else{
    editor.appendChild(document.createTextNode(text));
  }
}

function saveNotes(){const notes=loadNotes();notes[topic||'General']=sanitizeNotesHtml($('topic-notes').innerHTML);localStorage.setItem(noteKey(),JSON.stringify(notes));$('voice-status').textContent='Notes saved in this browser.';}
function selectTopic(value){
  // Stop an active dictation session before changing the note context.
  if(recognition){recognition.stop();recognition=null;}
  topic=value;
  selectedProvider=null;
  $('notes-topic').textContent=value;
  const savedNotes=loadNotes();
  const hasSavedNotes=Object.prototype.hasOwnProperty.call(savedNotes,value);
  setNotesContent(hasSavedNotes?savedNotes[value]:'');
  $('voice-status').textContent=hasSavedNotes
    ? 'Loaded your saved notes for '+value+'. Changes are saved automatically in this browser.'
    : 'No saved notes for '+value+' yet. Your notes will be saved automatically as you type.';
  const voiceButton=$('voice-notes');
  if(voiceButton)voiceButton.innerHTML='<i class="fa-solid fa-microphone mr-1"></i>Dictate notes';
  document.querySelectorAll('[data-topic]').forEach(b=>b.classList.toggle('is-active-topic',b.dataset.topic===value));
  renderCheatSheet(value);
  playTopicPlaylist(value);
}
const CLIENT_NEEDS=[
  {name:'Safe and Effective Care Environment',subs:[
    {name:'Management of Care',test:item=>item.category==='leadership'&&!/Quality & Safety/.test(item.system)},
    {name:'Safety and Infection Prevention and Control',test:item=>item.category==='fundamentals'&&/Patient Safety/.test(item.system)||item.category==='leadership'&&/Quality & Safety/.test(item.system)||item.category==='community'&&/Disaster/.test(item.system)||/child abuse|poisoning|ingestion|precautions|hand hygiene|sterile technique/i.test(item.topic)}
  ]},
  {name:'Health Promotion and Maintenance',subs:[
    {name:'Health Promotion and Maintenance',test:item=>item.category==='maternal'&&!/preeclampsia|eclampsia|hemorrhage|ectopic|embolism|hyperemesis|previa|abruption|preterm labor|gestational diabetes/i.test(item.topic)||item.category==='community'&& !/Disaster/.test(item.system)||item.category==='child'&&/Growth & Development/.test(item.system)}
  ]},
  {name:'Psychosocial Integrity',subs:[
    {name:'Psychosocial Integrity',test:item=>item.category==='mental'||/Postpartum mood disorders|Therapeutic communication/.test(item.topic)}
  ]},
  {name:'Physiological Integrity',subs:[
    {name:'Basic Care and Comfort',test:item=>item.category==='fundamentals'&&/Mobility|Nutrition & Elimination/.test(item.system)||/pain management|feeding|comfort|elimination|ostomy/i.test(item.topic)},
    {name:'Pharmacological and Parenteral Therapies',test:item=>item.category==='pharm'||/medication|insulin|anticoagulant|antidote|drug toxicity|pharmac/i.test(item.topic)},
    {name:'Reduction of Risk Potential',test:item=>item.category==='fundamentals'&&/Assessment & Vital Signs|Fluids & Electrolytes|Acid-Base|Perioperative/.test(item.system)||/monitoring|assessment|laboratory|lab values|complication|precautions|screening|diagnostic|transfusion|dialysis/i.test(item.topic)},
    {name:'Physiological Adaptation',test:item=>true}
  ]}
];
function clientNeedFor(item){
  for(const group of CLIENT_NEEDS)for(const sub of group.subs){
    if(sub.name==='Physiological Adaptation')continue;
    if(sub.test(item))return {group:group.name,sub:sub.name};
  }
  return {group:'Physiological Integrity',sub:'Physiological Adaptation'};
}
function renderSystems(){
  const items=allTopics();
  const labels={child:'Pediatrics',adult:'Adult Health',pharm:'Pharmacology',fundamentals:'Nursing Fundamentals',maternal:'Maternal-Newborn',mental:'Mental Health',leadership:'Leadership & Management',community:'Community Health',specialty:'Clinical Specialties'};
  const needs=CLIENT_NEEDS.map(group=>{
    const subs=group.subs.map(sub=>({name:sub.name,topics:items.filter(item=>{const assigned=clientNeedFor(item);return assigned.group===group.name&&assigned.sub===sub.name;}).map(item=>item.topic)})).filter(sub=>sub.topics.length);
    return {name:group.name,subs};
  }).filter(group=>group.subs.length);
  $('client-needs-list').innerHTML=needs.map((group,i)=>
    '<details class="subject-card rounded-xl border overflow-hidden" '+(i===0?'open':'')+'><summary class="cursor-pointer px-3 py-3 font-bold text-xs flex justify-between gap-2"><span>'+safe(group.name)+'</span><span class="text-[11px] font-normal text-slate-500">'+group.subs.reduce((n,sub)=>n+sub.topics.length,0)+'</span></summary><div class="p-2 border-t space-y-2">'+group.subs.map(sub=>'<details class="rounded-lg bg-slate-50 overflow-hidden"><summary class="cursor-pointer px-2 py-2 text-[11px] font-bold text-slate-700 flex justify-between gap-2"><span>'+safe(sub.name)+'</span><span class="font-normal text-slate-500">'+sub.topics.length+'</span></summary><div class="grid grid-cols-1 gap-1 p-2">'+sub.topics.map(t=>'<button type="button" class="lesson-link topic-select" data-topic="'+safe(t)+'">'+renderTopicLabel(t)+'</button>').join('')+'</div></details>').join('')+'</div></details>'
  ).join('');
  const systems=items.reduce((acc,item)=>{
    const label=labels[item.category]||item.category;
    const key=label+' · '+item.system;
    (acc[key]||(acc[key]=[])).push(item.topic);
    return acc;
  },{});
  const total=items.length;
  $('topic-count').textContent=total+' topics';
  $('system-list').innerHTML=Object.entries(systems).map(([system,topics],i)=>
    '<details class="subject-card rounded-xl border overflow-hidden" '+(i===0?'open':'')+'><summary class="cursor-pointer px-3 py-3 font-bold text-xs flex justify-between gap-2"><span>'+safe(system)+'</span><span class="text-[11px] font-normal text-slate-500">'+topics.length+'</span></summary><div class="grid grid-cols-1 gap-1 p-2 border-t">'+topics.map(t=>'<button type="button" class="lesson-link topic-select" data-topic="'+safe(t)+'">'+renderTopicLabel(t)+'</button>').join('')+'</div></details>'
  ).join('');
}
function showVideoMessage(message){
  $('player-shell').innerHTML='<div class="w-full h-full min-h-48 flex flex-col items-center justify-center gap-2 p-5 text-center text-white"><i class="fa-brands fa-youtube text-4xl text-red-500"></i><p class="text-sm font-semibold">'+safe(message)+'</p></div>';
}
function renderProviderButtons(){
  const host=$('video-provider-controls');if(!host)return;
  host.innerHTML=VIDEO_PROVIDERS.map(p=>'<button type="button" class="video-provider-button'+(p.id===selectedProvider?' is-selected':'')+'" data-provider="'+p.id+'" aria-pressed="'+(p.id===selectedProvider?'true':'false')+'">'+safe(p.label)+'</button>').join('');
  host.querySelectorAll('[data-provider]').forEach(button=>button.addEventListener('click',()=>{
    if(!topic){$('player-caption').textContent='Choose a body system and topic first.';showVideoMessage('Step 1: choose a body system. Step 2: choose a topic. Then select a channel.');return;}selectedProvider=button.dataset.provider;renderProviderButtons();loadTopicVideo(topic,selectedProvider);
  }));
}
function buildVideoReportUrl(topicText,provider,videoUrl){
  const title='Learning Center video unavailable: '+topicText+' ('+provider.label+')';
  const body=['Please review this Learning Center video mapping.','','**Topic:** '+topicText,'**Channel:** '+provider.label,'**Video URL / ID:** '+(videoUrl||'No video currently mapped'),'**Report type:** Unavailable, broken, incorrect, or cannot be embedded','','Please verify the video and remap this topic if a suitable replacement is available.'].join('\\n');
  return window.QuickRNReport?window.QuickRNReport.buildUrl('Video Report',title,body):'https://github.com/Archonline/QuickRN/issues/new?title='+encodeURIComponent('[Video Report] '+title)+'&body='+encodeURIComponent(body);
}
function videoReportLink(topicText,provider,videoUrl){
  const url=buildVideoReportUrl(topicText,provider,videoUrl);
  return '<a class="inline-flex items-center gap-2 rounded-lg border border-rose-300/60 px-3 py-2 text-xs font-semibold text-rose-100 hover:bg-rose-500/15" href="'+safe(url)+'" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-flag"></i>Report unavailable / broken video</a>';
}
function loadTopicVideo(topicText,providerId){
  const provider=VIDEO_PROVIDERS.find(p=>p.id===providerId);
  if(!provider)return;
  currentVideoUrl='';
  updateLearningFlow(4,'Channel selected. Checking for a verified lesson mapping.');
  const videoId=VIDEO_ID_CATALOG[providerId]&&VIDEO_ID_CATALOG[providerId][topicText];
  if(videoId&&/^[A-Za-z0-9_-]{11}$/.test(videoId)){
    currentVideoUrl='https://www.youtube.com/watch?v='+videoId;
    $('player-shell').innerHTML='<div class="w-full h-full flex flex-col"><div class="relative w-full flex-1 min-h-0"><iframe class="absolute inset-0 w-full h-full" src="https://www.youtube-nocookie.com/embed/'+videoId+'?autoplay=1&playsinline=1&rel=0" title="'+safe(provider.label)+' — '+safe(topicText)+'" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div><div class="flex shrink-0 justify-end bg-slate-900 p-2">'+videoReportLink(topicText,provider,currentVideoUrl)+'</div></div>';
    $('player-caption').textContent='Now playing: '+provider.label+' · '+topicText+' · Report a problem if this video is unavailable.';
    return;
  }
  $('player-shell').innerHTML='<div class="w-full h-full min-h-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white"><i class="fa-solid fa-circle-exclamation text-4xl text-amber-400"></i><p class="text-base font-bold">'+safe(provider.label)+' · '+safe(topicText)+'</p><p class="max-w-lg text-sm text-white/75">No verified video is currently mapped to this topic and channel. Please report an unavailable or incorrect lesson mapping so it can be reviewed.</p>'+videoReportLink(topicText,provider,'')+'</div>';
  $('player-caption').textContent='No verified video mapped: '+provider.label+' · '+topicText+'.';
}
// Topic-matched quick references. External images are previews with attribution; Google Images is a discovery link, not an image API.
const CHEAT_SHEET_IMAGES=[
  {match:/ECG|EKG|dysrhythmia|arrhythmia/i,title:'5 Lead EKG Placement',src:'https://nursing.com/wp-content/uploads/2019/11/cardiac-001-343x350-1.png',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/oxygen|COPD|asthma|airway|suction|chest tube|respiratory failure/i,title:'Hierarchy of Oxygen Delivery',src:'https://nursing.com/wp-content/uploads/2019/11/resp-002-343x350-1.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/hemodynamic|heart failure|cardiogenic shock|cardiovascular|myocardial infarction|acute coronary/i,title:'Hemodynamic Values',src:'https://nursing.com/wp-content/uploads/2019/11/cardiac-003-343x350-1.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/IV solution|intravenous fluid|fluid replacement/i,title:'Crystalloid IV Solutions',src:'https://nursing.com/wp-content/uploads/2019/11/pharm-001-copy-343x350-1.png',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/laboratory|lab value|CBC interpretation|renal and liver function/i,title:'63 Must-Know Lab Values',src:'https://nursing.com/wp-content/uploads/2019/12/labs-001-343x350-1.png',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/electrolyte|sodium|potassium|calcium|magnesium/i,title:'Electrolyte Abnormalities',src:'https://nursing.com/wp-content/uploads/2019/11/electrolyte-abnormalities-cheatsheet.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'},
  {match:/insulin|diabetes mellitus|DKA|HHS/i,title:'Insulin Onset & Peak',src:'https://nursing.com/wp-content/uploads/2024/02/insulin-peak-and-onset.webp',source:'NURSING.com',url:'https://nursing.com/cheat-sheets/'}
];
const CHEAT_SHEETS={
  'Heart failure':{focus:'Pump failure causes reduced cardiac output and/or congestion. Distinguish left-sided pulmonary findings from right-sided systemic venous congestion.',cues:['Dyspnea, orthopnea, crackles, hypoxemia or new confusion','Daily weight trend, edema, JVD, lung sounds and urine output','Review ejection fraction, renal function and potassium when available'],actions:['Position upright and assess oxygenation/work of breathing','Trend weight, intake/output, edema and response to prescribed diuresis','Reconcile medications and reinforce sodium/fluid instructions as prescribed'],red:'Acute respiratory distress, pink frothy sputum, hypotension, chest pain or rapidly worsening perfusion needs urgent escalation.',memory:'Daily weight is a sensitive trend: report rapid gain using the patient’s prescribed action-plan threshold.'},
  'Acute coronary syndrome and myocardial infarction':{focus:'Myocardial ischemia is time-sensitive. Recognize symptoms, obtain rapid ECG assessment and escalate suspected ACS.',cues:['Chest pressure or equivalent symptoms: dyspnea, diaphoresis, nausea, unusual fatigue','12-lead ECG and serial cardiac troponins per protocol','Assess hemodynamic stability, rhythm and pain characteristics'],actions:['Activate emergency/ACS pathway and obtain ECG promptly','Establish monitoring and IV access per protocol; prepare for ordered therapy','Reassess pain, rhythm, perfusion and response to treatment'],red:'Persistent ischemic symptoms, ST changes, dysrhythmia, shock or acute pulmonary edema are emergencies.',memory:'Do not delay escalation while waiting for a laboratory result when ACS is suspected.'},
  'COPD exacerbation':{focus:'An exacerbation increases airway inflammation and airflow limitation. Compare current work of breathing and gas exchange with baseline.',cues:['Increased dyspnea, sputum volume or purulence; accessory muscle use','Mental-status change, fatigue, diminished air movement or silent chest','SpO₂ and ABG/VBG interpreted with clinical status and prescribed target'],actions:['Position to ease breathing; titrate oxygen to the patient-specific prescribed target','Administer prescribed bronchodilators and corticosteroids; reassess response','Support secretion clearance and escalate for worsening fatigue or ventilation'],red:'Exhaustion, altered consciousness, cyanosis, silent chest or worsening hypercapnia requires urgent escalation.',memory:'A normalizing respiratory rate in a tiring patient can signal fatigue, not recovery.'},
  'Stroke and thrombolytic care':{focus:'Stroke care is time-critical. Differentiate ischemic from hemorrhagic stroke through urgent imaging before reperfusion decisions.',cues:['Last-known-well time, FAST findings and focused neurologic baseline','Point-of-care glucose to identify a mimic','Airway protection, swallowing ability, BP and anticoagulant history'],actions:['Activate stroke response and document last-known-well precisely','Keep NPO until swallow screening is completed','Prepare for urgent brain imaging; follow stroke-team BP and treatment protocol'],red:'Sudden focal deficit, declining consciousness, severe headache or airway compromise is an emergency.',memory:'Never give food, fluids or oral medication before swallow safety is established.'},
  'Diabetes mellitus and insulin':{focus:'Match insulin type and timing to meals, glucose trends, nutrition and the prescribed regimen.',cues:['Glucose trend, meal availability, symptoms of hypo/hyperglycemia','Renal function, potassium and current insulin orders','Injection site rotation and ability to self-manage safely'],actions:['Verify insulin type, dose, timing, route and glucose per policy','Coordinate prandial insulin with food availability and prescribed timing','Treat hypoglycemia promptly under protocol and recheck at the required interval'],red:'Severe hypoglycemia, altered consciousness, seizure, or suspected DKA/HHS needs immediate action.',memory:'Insulin is high-alert: independent double-checks follow local policy; never interchange products or timing.'},
  'DKA vs HHS':{focus:'Both are hyperglycemic emergencies. DKA features ketosis and metabolic acidosis; HHS typically has profound hyperosmolality and dehydration.',cues:['Glucose, electrolytes, anion gap, ketones and acid-base status','Volume status, mental status, urine output and precipitating illness','Potassium before and during insulin therapy'],actions:['Prioritize isotonic fluid resuscitation as prescribed and assess response','Follow protocol for potassium replacement and insulin sequence','Trend glucose, potassium, anion gap/osmolality and neurologic status'],red:'Shock, dysrhythmia, severe acidosis, altered consciousness or cerebral edema signs require urgent escalation.',memory:'Check potassium before starting insulin; insulin shifts potassium into cells.'},
  'Electrolyte imbalances':{focus:'Electrolyte changes can rapidly affect neurologic function, muscle strength and cardiac conduction.',cues:['Sodium: neurologic changes and seizure risk','Potassium: weakness and ECG changes; inspect renal function and medications','Calcium/magnesium: tetany, paresthesia, reflex changes and dysrhythmias'],actions:['Review trends, symptoms, ECG and renal function together','Use prescribed replacement route/rate and infusion safeguards','Reassess ECG, symptoms and repeat labs after correction'],red:'Seizure, significant ECG change, severe weakness, tetany or symptomatic extreme values need urgent escalation.',memory:'Never IV-push potassium. Follow institutional concentration, dilution and pump rules.'},
  'Insulin types and timing':{focus:'Know onset, peak and duration by the exact insulin product; times vary by formulation and patient.',cues:['Rapid-acting: meal-related; verify food is available','Regular: short-acting; may be used IV in selected protocols','NPH: intermediate with a peak; long-acting basal products have product-specific profiles'],actions:['Check exact product, concentration, dose and timing','Coordinate prandial insulin with meal delivery','Monitor for hypoglycemia during expected peak and when intake changes'],red:'Unexpected glucose drop, confusion, diaphoresis, seizure or reduced consciousness suggests hypoglycemia.',memory:'Do not mix or substitute insulin products unless the specific products and order permit it.'},
  'Sepsis and septic shock':{focus:'Sepsis is life-threatening organ dysfunction from a dysregulated response to infection. Early recognition and timely treatment matter.',cues:['Suspected infection plus altered mentation, hypotension, tachypnea or poor perfusion','Trend lactate when ordered, urine output, temperature and hemodynamics','Assess source, cultures and organ dysfunction'],actions:['Escalate concern early and follow the local sepsis pathway','Obtain cultures and administer prescribed antimicrobials without avoidable delay','Give prescribed fluids/vasopressors and reassess perfusion frequently'],red:'Hypotension, mottling, oliguria, rising lactate or altered mental status may indicate deterioration.',memory:'Reassess after every intervention; a single normal vital sign does not rule out sepsis.'},
  'Acute kidney injury':{focus:'AKI is an acute decline in kidney function. Identify reversible causes and prevent additional renal injury.',cues:['Creatinine trend and urine output trend, not a single value alone','Volume status, blood pressure, electrolytes and acid-base status','Medication list, nephrotoxins, recent contrast and obstruction risk'],actions:['Measure intake/output and daily weight accurately','Review nephrotoxic medications and renal-dose orders with the team','Monitor potassium, fluid balance and indications for urgent renal support'],red:'Hyperkalemic ECG changes, pulmonary edema, severe acidosis, uremic symptoms or anuria requires urgent escalation.',memory:'Low urine output is a clinical cue: verify measurement and promptly report sustained decline.'},
  'Pediatric vital signs and assessment':{focus:'Interpret pediatric findings by age, baseline and clinical appearance; adult thresholds do not apply to infants and children.',cues:['Age-specific heart rate, respiratory rate and blood pressure','Work of breathing, perfusion, interaction, hydration and urine output','Caregiver report of baseline behavior, intake and wet diapers'],actions:['Assess appearance and airway/breathing before focusing on numbers','Use age-appropriate equipment and validated reference ranges','Reassess after interventions and involve caregivers in baseline history'],red:'Apnea, grunting, retractions, cyanosis, poor perfusion, lethargy or inability to maintain hydration needs urgent escalation.',memory:'In children, hypotension can be a late sign of shock; assess perfusion and behavior early.'},
  'Asthma and status asthmaticus':{focus:'Asthma causes variable airflow obstruction. Severe exacerbation can progress to respiratory failure.',cues:['Wheeze, prolonged expiration, accessory muscle use and peak-flow trend if appropriate','Ability to speak, oxygenation, air movement and response to bronchodilator','A quiet or silent chest in a distressed patient is ominous'],actions:['Assess severity and administer prescribed rapid-relief therapy promptly','Reassess breath sounds, work of breathing and response','Prepare escalation support for poor response or fatigue'],red:'Silent chest, exhaustion, altered consciousness or worsening hypoxemia is an emergency.',memory:'Less wheezing is not always improvement if air movement is falling.'},
  'Preeclampsia and eclampsia':{focus:'Preeclampsia is a hypertensive disorder after 20 weeks with maternal organ involvement; severe features can threaten mother and fetus.',cues:['BP trend, severe headache, visual symptoms and RUQ/epigastric pain','Platelets, renal/liver function and urine protein as clinically indicated','Fetal movement and fetal assessment per obstetric plan'],actions:['Escalate severe-range BP or warning symptoms immediately','Institute seizure precautions and administer prescribed magnesium/antihypertensives','Monitor reflexes, respirations and urine output during magnesium therapy'],red:'Seizure, severe headache/visual changes, pulmonary edema or severe-range BP requires urgent obstetric response.',memory:'Magnesium toxicity: monitor respirations, reflexes and urine output; calcium gluconate is the antidote.'},
  'Fetal heart rate monitoring':{focus:'Interpret fetal heart rate baseline, variability, accelerations, decelerations and contraction pattern together.',cues:['Baseline 110–160 bpm and variability category','Early, variable and late decelerations in relation to contractions','Maternal BP, position, oxytocin and uterine tachysystole'],actions:['Reposition and address reversible causes according to local protocol','Stop or reduce uterotonic infusion when indicated by protocol and notify the team','Escalate persistent Category III or unresolved concerning patterns'],red:'Persistent bradycardia, recurrent late decelerations with minimal/absent variability or prolonged deceleration needs immediate response.',memory:'Assess the whole tracing and clinical picture; do not interpret one isolated feature alone.'},
  'Postpartum hemorrhage':{focus:'PPH is excessive postpartum bleeding. Identify cause rapidly using the 4 Ts: Tone, Trauma, Tissue, Thrombin.',cues:['Fundal tone/position, quantified blood loss and ongoing bleeding','Vital signs, mental status, perfusion and urine output','Placental completeness, lacerations and coagulation risk'],actions:['Call for help and activate the obstetric hemorrhage protocol','Massage a boggy uterus and administer prescribed uterotonics','Establish/maintain access, quantify blood loss and prepare ordered fluids/blood products'],red:'Heavy bleeding, boggy uterus, tachycardia, hypotension or altered mentation is an emergency.',memory:'A boggy uterus suggests atony; a firm uterus with ongoing bleeding suggests another cause such as trauma.'},
  'Therapeutic communication techniques':{focus:'Use open-ended, nonjudgmental, client-centered responses that encourage expression and clarify meaning.',cues:['Client’s stated concern, emotion, safety and immediate needs','Nonverbal cues and discrepancies between words and behavior','Cultural, language and developmental needs'],actions:['Use silence, reflection, clarification and broad openings','Validate feelings without reinforcing delusions or making false reassurance','Ask direct, clear questions when assessing suicide or immediate safety'],red:'Imminent self-harm, violence, inability to maintain safety or acute medical instability takes priority.',memory:'“Why” questions, advice-giving and false reassurance can shut down communication.'},
  'RN LPN and UAP scope of practice':{focus:'Delegation depends on client stability, task predictability, staff competence and jurisdictional scope rules.',cues:['Need for initial assessment, clinical judgment, teaching or evaluation','Stability and predictability of the client’s condition','Training, competency, policy and applicable nurse practice rules'],actions:['RN retains assessment, nursing judgment, care planning and evaluation','Delegate appropriate routine tasks to competent staff with clear directions','Provide supervision, availability and follow-up evaluation'],red:'Unstable clients or tasks requiring nursing judgment should not be delegated to unlicensed assistive personnel.',memory:'The RN may delegate a task, but accountability for appropriate delegation and supervision remains.'},
  'Standard precautions and hand hygiene':{focus:'Standard precautions apply to every patient. Add transmission-based precautions when infection risk requires them.',cues:['Expected exposure to blood/body fluids, mucous membranes or nonintact skin','Suspected/confirmed organism and transmission route','PPE needs based on task and isolation signage'],actions:['Perform hand hygiene at indicated moments and use task-appropriate PPE','Use safe injection practices and sharps disposal','Add contact, droplet or airborne precautions based on organism guidance'],red:'Unprotected exposure, sharps injury or breach involving a high-risk pathogen requires immediate reporting and exposure protocol.',memory:'Gloves do not replace hand hygiene.'},
  'ABG interpretation and ROME':{focus:'Interpret pH first, then PaCO₂ and HCO₃⁻; determine primary respiratory/metabolic process and compensation.',cues:['pH below 7.35 = acidemia; above 7.45 = alkalemia','PaCO₂ reflects respiratory component; HCO₃⁻ reflects metabolic component','Assess oxygenation and clinical context separately'],actions:['Use the same ABG sample and reference ranges','Identify primary process, compensation and possible mixed disorder','Correlate with respiratory status, medications and underlying cause'],red:'Severe acidemia/alkalemia, deteriorating consciousness or respiratory failure requires urgent escalation.',memory:'ROME: Respiratory Opposite, Metabolic Equal—use it to identify the primary direction, not to replace full interpretation.'}
};
// Openly licensed nursing references (Open RN books are CC BY 4.0).
// Each selected topic receives resources mapped from its parent library category,
// plus a direct NCBI Bookshelf search for that exact topic.
const OPEN_NURSING_RESOURCES={
  fundamentals:[
    {title:'Nursing Fundamentals, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK610815/'},
    {title:'Nursing Skills, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK596735/'},
    {title:'Nursing Advanced Skills',url:'https://www.ncbi.nlm.nih.gov/books/NBK594492/'}
  ],
  adult:[
    {title:'Health Alterations',url:'https://www.ncbi.nlm.nih.gov/books/NBK613078/'},
    {title:'Nursing Advanced Skills',url:'https://www.ncbi.nlm.nih.gov/books/NBK594492/'},
    {title:'Nursing Fundamentals, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK610815/'}
  ],
  child:[
    {title:'Nursing Health Promotion',url:'https://www.ncbi.nlm.nih.gov/books/NBK615319/'},
    {title:'Health Alterations',url:'https://www.ncbi.nlm.nih.gov/books/NBK613078/'},
    {title:'Nursing Fundamentals, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK610815/'}
  ],
  maternal:[
    {title:'Nursing Health Promotion',url:'https://www.ncbi.nlm.nih.gov/books/NBK615319/'},
    {title:'Health Alterations',url:'https://www.ncbi.nlm.nih.gov/books/NBK613078/'}
  ],
  pharm:[
    {title:'Nursing Pharmacology, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK595000/'},
    {title:'Nursing Fundamentals, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK610815/'}
  ],
  mental:[
    {title:'Mental Health & Community Concepts, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK616982/'},
    {title:'Nursing Health Promotion',url:'https://www.ncbi.nlm.nih.gov/books/NBK615319/'}
  ],
  leadership:[
    {title:'Nursing Management & Professional Concepts, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK610445/'},
    {title:'Nursing Fundamentals, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK610815/'}
  ],
  community:[
    {title:'Mental Health & Community Concepts, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK616982/'},
    {title:'Nursing Health Promotion',url:'https://www.ncbi.nlm.nih.gov/books/NBK615319/'}
  ],
  specialty:[
    {title:'Health Alterations',url:'https://www.ncbi.nlm.nih.gov/books/NBK613078/'},
    {title:'Nursing Advanced Skills',url:'https://www.ncbi.nlm.nih.gov/books/NBK594492/'},
    {title:'Nursing Skills, 2e',url:'https://www.ncbi.nlm.nih.gov/books/NBK596735/'}
  ]
};
function openNursingResourcesFor(topicText){
  const match=allTopics().find(item=>item.topic===topicText);
  const category=match&&match.category;
  const resources=OPEN_NURSING_RESOURCES[category]||OPEN_NURSING_RESOURCES.fundamentals;
  const queryUrl='https://www.ncbi.nlm.nih.gov/books/?term='+encodeURIComponent(topicText+' nursing');
  const links=resources.map(item=>'<a class="open-oer-link" href="'+item.url+'" target="_blank" rel="noopener noreferrer">'+safe(item.title)+' <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>').join('');
  return '<section class="open-oer-panel" aria-label="Open educational nursing references"><div><strong><i class="fa-solid fa-book-open" aria-hidden="true"></i> Open-access study sheets & references</strong><span>Free Open RN nursing textbooks · CC BY 4.0</span></div><div class="open-oer-links">'+links+'<a class="open-oer-link open-oer-search" href="'+queryUrl+'" target="_blank" rel="noopener noreferrer">Search this topic in NCBI Bookshelf <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i></a></div><small>Open RN materials are openly licensed educational resources. Follow each source’s attribution and license terms when reusing or adapting content.</small></section>';
}
function renderCheatSheet(topicText){
  const host=$('topic-cheat-sheet');if(!host)return;
  const sheet=CHEAT_SHEETS[topicText];
  const image=CHEAT_SHEET_IMAGES.find(item=>item.match.test(topicText));
  const googleUrl='https://www.google.com/search?tbm=isch&q='+encodeURIComponent(topicText+' nursing NCLEX cheat sheet');
  const sections=sheet?[
    ['Clinical focus',sheet.focus],
    ['Priority cues',sheet.cues],
    ['Nursing priorities',sheet.actions],
    ['Red flags',sheet.red],
    ['NCLEX memory cue',sheet.memory]
  ]:[
    ['Clinical focus','Review the pathophysiology and distinguish expected findings from signs of deterioration.'],
    ['Priority cues',['Identify the most important assessment findings for '+topicText+'.','Trend vital signs, relevant laboratory results and response to treatment.','Compare current findings with baseline and the patient’s risk factors.']],
    ['Nursing priorities',['Assess airway, breathing, circulation and immediate safety.','Use current evidence, local policy and the prescribed plan of care.','Reassess after interventions and escalate unexpected deterioration.']],
    ['NCLEX memory cue','Prioritize unstable patients, acute changes, safety threats and time-sensitive interventions. Verify topic-specific thresholds and protocols with current references.']
  ];
  const htmlSections=sections.map(([heading,body])=>'<section class="cheat-section"><h4>'+safe(heading)+'</h4>'+(Array.isArray(body)?'<ul>'+body.map(item=>'<li>'+safe(item)+'</li>').join('')+'</ul>':'<p>'+safe(body)+'</p>')+'</section>').join('');
  const imageHtml=image?'<a class="cheat-image-link" href="'+safe(image.url)+'" target="_blank" rel="noopener noreferrer"><img src="'+safe(image.src)+'" alt="'+safe(image.title)+' reference sheet" loading="lazy"><span>Image reference: '+safe(image.source)+' · Open source</span></a>':'<div class="cheat-image-empty"><i class="fa-regular fa-image"></i><span>No topic-specific image preview is curated yet. Search Google Images for visual references.</span></div>';
  host.innerHTML='<div class="flex flex-wrap items-center justify-between gap-2"><div><p class="text-[11px] font-bold uppercase tracking-wider text-teal-700">Topic quick sheet</p><h3 class="text-lg font-extrabold">'+safe(topicText)+'</h3></div><a class="cheat-google-link" href="'+safe(googleUrl)+'" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google"></i> Google Images</a></div><div class="cheat-sheet-grid">'+imageHtml+'<div class="cheat-sections">'+htmlSections+'</div></div>'+openNursingResourcesFor(topicText)+'<p class="cheat-disclaimer">Study aid only. Confirm medication doses, laboratory ranges, obstetric/pediatric thresholds and emergency actions against current institutional guidance and authoritative references.</p>';
}

function updateLearningFlow(step,message){document.querySelectorAll('[data-flow-step]').forEach(el=>{const n=Number(el.dataset.flowStep);el.classList.toggle('is-current',n===step);el.classList.toggle('is-complete',n<step);});const status=$('learning-flow-status');if(status)status.textContent='Step '+step+' of 4 · '+message;}
function playTopicPlaylist(topicText){updateLearningFlow(3,'Topic selected. Choose a channel to start the lesson.');renderProviderButtons();$('player-caption').textContent='Choose a channel to check whether a verified lesson is available for '+topicText+'.';showVideoMessage('Topic selected: '+topicText+'. Choose your preferred channel below to continue.');}
// Sidebar can collapse to a slim rail to give the lesson and notebook more room.
const sidebar=$('learning-topic-sidebar');
const sidebarToggle=$('toggle-learning-sidebar');
const sidebarPreferenceKey='quickrn-learning-sidebar-collapsed';
function setSidebarCollapsed(collapsed){
  sidebar.classList.toggle('is-collapsed',collapsed);
  document.querySelector('.learning-layout').classList.toggle('sidebar-collapsed',collapsed);
  sidebarToggle.setAttribute('aria-expanded',String(!collapsed));
  sidebarToggle.setAttribute('aria-label',collapsed?'Expand Learning Library sidebar':'Collapse Learning Library sidebar');
  sidebarToggle.title=collapsed?'Expand sidebar':'Collapse sidebar';
  localStorage.setItem(sidebarPreferenceKey,collapsed?'1':'0');
}
setSidebarCollapsed(localStorage.getItem(sidebarPreferenceKey)==='1');
sidebarToggle.addEventListener('click',()=>setSidebarCollapsed(!sidebar.classList.contains('is-collapsed')));

// Event Listeners
['system-list','client-needs-list'].forEach(listId=>$(listId).addEventListener('click',e=>{const summary=e.target.closest('summary');if(summary)updateLearningFlow(2,'Category selected. Choose a topic from its list.');const b=e.target.closest('[data-topic]');if(b)selectTopic(b.dataset.topic);}));
function filterLearningLibrary(){
  const field=$('learning-library-search'),query=(field.value||'').trim().toLowerCase();
  let visible=0;
  ['system-list','client-needs-list'].forEach(listId=>{
    const host=$(listId);
    host.querySelectorAll('[data-topic]').forEach(button=>{
      const match=!query||button.textContent.toLowerCase().includes(query);
      button.hidden=!match;
      if(match&&listId==='system-list')visible++;
    });
    host.querySelectorAll('details').forEach(details=>{
      const matching=details.querySelector('[data-topic]:not([hidden])');
      details.hidden=!!query&&!matching;
      if(query&&matching)details.open=true;
    });
  });
  $('learning-library-search-status').textContent=query?visible+' matching topics':'Browse all topics by NCLEX category or clinical specialty.';
}
$('learning-library-search').addEventListener('input',filterLearningLibrary);




$('save-notes').addEventListener('click',saveNotes);
$('topic-notes').addEventListener('input',()=>{if(topic){const n=loadNotes();n[topic]=sanitizeNotesHtml($('topic-notes').innerHTML);localStorage.setItem(noteKey(),JSON.stringify(n));}});
let savedNoteSelection=null;
const noteEditor=$('topic-notes');
document.querySelectorAll('[data-note-format]').forEach(button=>{
  button.addEventListener('mousedown',event=>{
    const selection=window.getSelection();
    if(selection&&selection.rangeCount&&noteEditor.contains(selection.anchorNode)&&noteEditor.contains(selection.focusNode))savedNoteSelection=selection.getRangeAt(0).cloneRange();
    event.preventDefault();
  });
  button.addEventListener('click',()=>{
    const editor=$('topic-notes');
    const selection=window.getSelection();
    if(savedNoteSelection&&editor.contains(savedNoteSelection.commonAncestorContainer)){
      editor.focus();selection.removeAllRanges();selection.addRange(savedNoteSelection);
    }else editor.focus();
    const format=button.dataset.noteFormat;
    if(format==='bold')document.execCommand('bold',false,null);
    else if(format==='underline')document.execCommand('underline',false,null);
    else if(format==='highlight'){
      if(!selection||selection.isCollapsed){$('voice-status').textContent='Select the text you want to format first.';return;}
      const range=selection.getRangeAt(0);
      const highlighted=Array.from(editor.querySelectorAll('mark')).some(mark=>{
        try{return range.intersectsNode(mark);}catch(_){return false;}
      });
      if(highlighted){
        // Extract only the selected portion, remove its mark wrappers, and put it back.
        // This also handles selecting only part of a highlighted phrase.
        const fragment=range.extractContents();
        fragment.querySelectorAll('mark').forEach(mark=>mark.replaceWith(...Array.from(mark.childNodes)));
        range.insertNode(fragment);
        range.collapse(false);
        selection.removeAllRanges();selection.addRange(range);
      }else{
        document.execCommand('hiliteColor',false,'#fef08a');
      }
    }
    savedNoteSelection=null;
    saveNotes();
  });
});

const exportNotes=$('export-notes');
if(exportNotes)exportNotes.addEventListener('click',()=>{const blob=new Blob([notesPlainText()],{type:'text/plain;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(topic||'QuickRN-study-notes').replace(/[^a-z0-9]+/gi,'-')+'.txt';a.click();URL.revokeObjectURL(a.href);});

$('voice-notes').addEventListener('click',()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){$('voice-status').textContent='Speech recognition is not supported in this browser. Try Chrome or Edge.';return;}
  if(recognition){recognition.stop();recognition=null;$('voice-notes').innerHTML='<i class="fa-solid fa-microphone mr-1"></i>Dictate notes';return;}
  recognition=new SR();recognition.continuous=true;recognition.interimResults=true;recognition.lang='en-US';
  recognition.onresult=e=>{let finalText='';for(let i=e.resultIndex;i<e.results.length;i++){if(e.results[i].isFinal)finalText+=e.results[i][0].transcript+' ';}if(finalText){const existing=notesPlainText();insertDictatedText((existing?'\n':'')+finalText);saveNotes();}};
  recognition.onerror=e=>{$('voice-status').textContent='Speech recognition: '+e.error;};
  recognition.onend=()=>{recognition=null;$('voice-notes').innerHTML='<i class="fa-solid fa-microphone mr-1"></i>Dictate notes';};
  recognition.start();$('voice-notes').innerHTML='<i class="fa-solid fa-stop mr-1"></i>Stop dictation';$('voice-status').textContent='Listening…';
});

renderSystems();
renderProviderButtons();
const requestedTopic=new URLSearchParams(window.location.search).get('topic');
if(requestedTopic)selectTopic(requestedTopic);
})();
