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

// Hard-coded topic-to-video mappings sourced from QuickRN_YouTube_ID_Mapping_Cleaned.json.
// This Learning Center uses RegisteredNurseRN videos only.
const VIDEO_PROVIDERS=[
  {id:'registerednursern',label:'RegisteredNurseRN',query:'RegisteredNurseRN'}
];
let selectedProvider=null;
let topic='',recognition=null,currentVideoUrl='';
const VIDEO_ID_CATALOG={
  registerednursern:{
    "Developmental milestones by age": "zzpmz5zDnb8",
    "Pediatric vital signs and assessment": "pXrGIZOLz4k",
    "Piaget Erikson and Kohlberg": "zzpmz5zDnb8",
    "Immunization schedule and safety": "piO71GcUa1s",
    "Asthma and status asthmaticus": "pXrGIZOLz4k",
    "Croup vs epiglottitis": "QCgcUtWkWqE",
    "Bronchiolitis and RSV": "piO71GcUa1s",
    "Cystic fibrosis nursing care": "FugzsYln-8E",
    "Congenital heart defects": "qKlSOp5dPtw",
    "Kawasaki disease": "QCgcUtWkWqE",
    "Pediatric heart failure": "FugzsYln-8E",
    "Tetralogy of Fallot": "qKlSOp5dPtw",
    "Febrile seizures": "MUtoTIro8fU",
    "Meningitis in children": "MUtoTIro8fU",
    "Increased intracranial pressure": "2_uXDgUSH0k",
    "Pediatric cerebral palsy": "2_uXDgUSH0k",
    "Pyloric stenosis": "UCPyMN8DzkF",
    "Intussusception": "zzpmz5zDnb8",
    "Cleft lip and palate": "pXrGIZOLz4k",
    "Pediatric dehydration": "piO71GcUa1s",
    "Nephrotic syndrome": "QCgcUtWkWqE",
    "Post-streptococcal glomerulonephritis": "FugzsYln-8E",
    "Wilms tumor": "qKlSOp5dPtw",
    "Urinary tract infection in children": "MUtoTIro8fU",
    "Type 1 diabetes in children": "2_uXDgUSH0k",
    "Diabetic ketoacidosis": "UCPyMN8DzkF",
    "Congenital hypothyroidism": "zzpmz5zDnb8",
    "Phenylketonuria": "pXrGIZOLz4k",
    "Sickle cell crisis": "piO71GcUa1s",
    "Hemophilia": "QCgcUtWkWqE",
    "Leukemia in children": "FugzsYln-8E",
    "Iron deficiency anemia": "qKlSOp5dPtw",
    "Pediatric medication dosage": "MUtoTIro8fU",
    "Child abuse recognition and reporting": "2_uXDgUSH0k",
    "Poisoning and ingestion": "UCPyMN8DzkF",
    "Pediatric shock": "zzpmz5zDnb8",
    "Pediatric respiratory distress and failure": "pXrGIZOLz4k",
    "Pediatric dehydration and fluid resuscitation": "piO71GcUa1s",
    "Pediatric sepsis recognition": "QCgcUtWkWqE",
    "Pediatric burns and injury prevention": "FugzsYln-8E",
    "Autism spectrum disorder": "qKlSOp5dPtw",
    "Attention-deficit/hyperactivity disorder": "MUtoTIro8fU",
    "Down syndrome nursing considerations": "2_uXDgUSH0k",
    "Childhood developmental and learning disorders": "UCPyMN8DzkF",
    "Pediatric dysrhythmias": "zzpmz5zDnb8",
    "Rheumatic fever and rheumatic heart disease": "pXrGIZOLz4k",
    "Thalassemia in children": "piO71GcUa1s",
    "Aplastic anemia in children": "QCgcUtWkWqE",
    "Hypospadias and epispadias": "FugzsYln-8E",
    "Hydrocephalus and shunt complications": "qKlSOp5dPtw",
    "Type 1 diabetes sick-day management": "MUtoTIro8fU",
    "Adolescent eating and growth concerns": "2_uXDgUSH0k",
    "Heart failure": "mGchzG3Ya7c",
    "Acute coronary syndrome and myocardial infarction": "UCPyMN8DzkF",
    "Dysrhythmias and ECG interpretation": "zzpmz5zDnb8",
    "Hypertension and hypertensive crisis": "pXrGIZOLz4k",
    "COPD exacerbation": "piO71GcUa1s",
    "Asthma management": "GVTXJwv8ndY",
    "Pneumonia and respiratory failure": "QCgcUtWkWqE",
    "Pulmonary embolism": "FugzsYln-8E",
    "Stroke and thrombolytic care": "qKlSOp5dPtw",
    "Seizures and status epilepticus": "MUtoTIro8fU",
    "Parkinson disease": "2_uXDgUSH0k",
    "Diabetes mellitus and insulin": "UCPyMN8DzkF",
    "DKA vs HHS": "zzpmz5zDnb8",
    "Thyroid storm and myxedema": "pXrGIZOLz4k",
    "Adrenal insufficiency and Cushing syndrome": "piO71GcUa1s",
    "Acute kidney injury": "QCgcUtWkWqE",
    "Chronic kidney disease": "FugzsYln-8E",
    "Hemodialysis and peritoneal dialysis": "qKlSOp5dPtw",
    "Electrolyte imbalances": "-PaHC8fleO0",
    "GI bleeding": "MUtoTIro8fU",
    "Cirrhosis and hepatic encephalopathy": "Shx-hmyLdXA",
    "Pancreatitis": "2_uXDgUSH0k",
    "Inflammatory bowel disease": "UCPyMN8DzkF",
    "Fractures and compartment syndrome": "zzpmz5zDnb8",
    "Hip replacement precautions": "pXrGIZOLz4k",
    "Osteoporosis": "piO71GcUa1s",
    "Rheumatoid arthritis": "QCgcUtWkWqE",
    "Anemia and transfusion reactions": "FugzsYln-8E",
    "Neutropenia precautions": "qKlSOp5dPtw",
    "Cancer complications": "MUtoTIro8fU",
    "DVT and pulmonary embolism": "2_uXDgUSH0k",
    "Sepsis and septic shock": "UCPyMN8DzkF",
    "HIV and opportunistic infection": "zzpmz5zDnb8",
    "Burns and fluid resuscitation": "pXrGIZOLz4k",
    "Pressure injury prevention": "piO71GcUa1s",
    "Valvular heart disease": "QCgcUtWkWqE",
    "Infective endocarditis": "FugzsYln-8E",
    "Pericarditis and cardiac tamponade": "qKlSOp5dPtw",
    "Peripheral arterial disease and chronic venous insufficiency": "MUtoTIro8fU",
    "Aortic aneurysm and dissection": "2_uXDgUSH0k",
    "Cardiogenic shock and intra-aortic balloon pump basics": "UCPyMN8DzkF",
    "Acute respiratory distress syndrome": "zzpmz5zDnb8",
    "Mechanical ventilation and alarm priorities": "pXrGIZOLz4k",
    "Tracheostomy care and complications": "piO71GcUa1s",
    "Chest trauma and flail chest": "QCgcUtWkWqE",
    "Tuberculosis nursing care": "FugzsYln-8E",
    "Pleural effusion and pneumothorax": "qKlSOp5dPtw",
    "Guillain-Barré syndrome": "MUtoTIro8fU",
    "Myasthenia gravis and myasthenic crisis": "2_uXDgUSH0k",
    "Multiple sclerosis": "UCPyMN8DzkF",
    "Spinal cord injury and neurogenic shock": "zzpmz5zDnb8",
    "Meningitis and encephalitis in adults": "pXrGIZOLz4k",
    "Delirium versus dementia": "piO71GcUa1s",
    "Appendicitis and peritonitis": "QCgcUtWkWqE",
    "Bowel obstruction and ileus": "FugzsYln-8E",
    "Cholecystitis and cholelithiasis": "qKlSOp5dPtw",
    "Diverticulitis and diverticular disease": "MUtoTIro8fU",
    "Ostomy complications and care": "2_uXDgUSH0k",
    "Hepatitis and acute liver failure": "UCPyMN8DzkF",
    "Nephrotic and nephritic syndromes": "zzpmz5zDnb8",
    "Renal calculi and urinary obstruction": "pXrGIZOLz4k",
    "Dialysis access complications": "piO71GcUa1s",
    "Peritoneal dialysis peritonitis": "QCgcUtWkWqE",
    "Chronic kidney disease mineral-bone disorder": "FugzsYln-8E",
    "Urinary retention and bladder irrigation": "qKlSOp5dPtw",
    "SIADH and diabetes insipidus": "MUtoTIro8fU",
    "Adrenal crisis": "2_uXDgUSH0k",
    "Pheochromocytoma": "UCPyMN8DzkF",
    "Hyperparathyroidism and hypoparathyroidism": "zzpmz5zDnb8",
    "Thyroidectomy complications": "pXrGIZOLz4k",
    "Metabolic syndrome and obesity care": "piO71GcUa1s",
    "Disseminated intravascular coagulation": "QCgcUtWkWqE",
    "Thrombocytopenia and bleeding precautions": "FugzsYln-8E",
    "Aplastic anemia and pancytopenia": "qKlSOp5dPtw",
    "Polycythemia vera": "MUtoTIro8fU",
    "Sickle cell disease complications": "2_uXDgUSH0k",
    "Blood component administration and massive transfusion": "UCPyMN8DzkF",
    "Tumor lysis syndrome": "zzpmz5zDnb8",
    "Superior vena cava syndrome": "pXrGIZOLz4k",
    "Spinal cord compression in cancer": "piO71GcUa1s",
    "Chemotherapy precautions and extravasation": "QCgcUtWkWqE",
    "Radiation therapy safety": "FugzsYln-8E",
    "Neutropenic fever and oncologic emergencies": "qKlSOp5dPtw",
    "Systemic lupus erythematosus": "MUtoTIro8fU",
    "Rheumatoid arthritis complications": "2_uXDgUSH0k",
    "Anaphylaxis and angioedema": "UCPyMN8DzkF",
    "Organ transplant rejection": "zzpmz5zDnb8",
    "Immunosuppressant monitoring": "pXrGIZOLz4k",
    "HIV antiretroviral therapy and opportunistic infections": "piO71GcUa1s",
    "Medication administration rights": "TqVrR69Swr0",
    "Dosage calculations and dimensional analysis": "QCgcUtWkWqE",
    "High-alert medications": "FugzsYln-8E",
    "Medication reconciliation": "qKlSOp5dPtw",
    "ACE inhibitors and ARBs": "MUtoTIro8fU",
    "Beta blockers": "2_uXDgUSH0k",
    "Calcium channel blockers": "UCPyMN8DzkF",
    "Digoxin and toxicity": "zzpmz5zDnb8",
    "Heparin and aPTT monitoring": "pXrGIZOLz4k",
    "Warfarin and INR": "piO71GcUa1s",
    "DOACs and bleeding precautions": "QCgcUtWkWqE",
    "Thrombolytics": "FugzsYln-8E",
    "Insulin types and timing": "qKlSOp5dPtw",
    "Oral diabetes medications": "MUtoTIro8fU",
    "Corticosteroids": "2_uXDgUSH0k",
    "Thyroid medications": "UCPyMN8DzkF",
    "Penicillins and cephalosporins": "zzpmz5zDnb8",
    "Vancomycin and trough monitoring": "pXrGIZOLz4k",
    "Aminoglycosides": "piO71GcUa1s",
    "Antitubercular medications": "QCgcUtWkWqE",
    "Bronchodilators": "FugzsYln-8E",
    "Inhaled corticosteroids": "qKlSOp5dPtw",
    "Antiepileptic medications": "MUtoTIro8fU",
    "Opioids and reversal agents": "2_uXDgUSH0k",
    "SSRIs and serotonin syndrome": "UCPyMN8DzkF",
    "Lithium and toxicity": "zzpmz5zDnb8",
    "Antipsychotics and NMS": "pXrGIZOLz4k",
    "Benzodiazepines": "piO71GcUa1s",
    "Epinephrine": "QCgcUtWkWqE",
    "Amiodarone": "FugzsYln-8E",
    "Vasopressors": "qKlSOp5dPtw",
    "Naloxone and antidotes": "MUtoTIro8fU",
    "Antiplatelets and stroke medications": "2_uXDgUSH0k",
    "Antiparkinsonian medications": "UCPyMN8DzkF",
    "Anticonvulsants and therapeutic monitoring": "zzpmz5zDnb8",
    "Sedatives and neuromuscular blockers": "pXrGIZOLz4k",
    "Oxytocin and uterotonic medications": "piO71GcUa1s",
    "Magnesium sulfate monitoring": "QCgcUtWkWqE",
    "Newborn vitamin K and prophylaxis": "FugzsYln-8E",
    "Weight-based pediatric medication safety": "qKlSOp5dPtw",
    "Chemotherapy safety and hazardous drug handling": "MUtoTIro8fU",
    "Immunosuppressants and transplant medications": "2_uXDgUSH0k",
    "Biologic agents and immunomodulators": "UCPyMN8DzkF",
    "Colony-stimulating factors": "zzpmz5zDnb8",
    "Nonopioid analgesics and NSAIDs": "pXrGIZOLz4k",
    "Opioid safety and respiratory depression": "piO71GcUa1s",
    "Local anesthetics and toxicity": "QCgcUtWkWqE",
    "Reversal agents and antidote principles": "FugzsYln-8E",
    "MAOIs and food interactions": "qKlSOp5dPtw",
    "Antidepressant discontinuation and monitoring": "MUtoTIro8fU",
    "Antipsychotic metabolic monitoring": "2_uXDgUSH0k",
    "Anticoagulant reversal and bleeding response": "UCPyMN8DzkF",
    "Standard precautions and hand hygiene": "zzpmz5zDnb8",
    "Contact droplet and airborne precautions": "pXrGIZOLz4k",
    "Sterile technique and surgical asepsis": "piO71GcUa1s",
    "Fall prevention and restraint safety": "QCgcUtWkWqE",
    "Head-to-toe nursing assessment": "FugzsYln-8E",
    "Pain assessment and reassessment": "qKlSOp5dPtw",
    "Adult vital signs and early warning signs": "MUtoTIro8fU",
    "Focused respiratory and cardiovascular assessment": "2_uXDgUSH0k",
    "Fluid volume deficit vs excess": "UCPyMN8DzkF",
    "Sodium imbalances": "zzpmz5zDnb8",
    "Potassium imbalances": "pXrGIZOLz4k",
    "Calcium and magnesium imbalances": "piO71GcUa1s",
    "ABG interpretation and ROME": "QCgcUtWkWqE",
    "Common NCLEX laboratory values": "FugzsYln-8E",
    "CBC interpretation": "qKlSOp5dPtw",
    "Renal and liver function tests": "MUtoTIro8fU",
    "Safe patient transfer and body mechanics": "2_uXDgUSH0k",
    "Range of motion and immobility complications": "UCPyMN8DzkF",
    "Traction and cast care": "zzpmz5zDnb8",
    "Pressure injury prevention and staging": "pXrGIZOLz4k",
    "Enteral feeding and aspiration precautions": "piO71GcUa1s",
    "Parenteral nutrition and central-line safety": "QCgcUtWkWqE",
    "Urinary catheter care and CAUTI prevention": "FugzsYln-8E",
    "Bowel elimination and ostomy care": "qKlSOp5dPtw",
    "Preoperative checklist and informed consent": "MUtoTIro8fU",
    "Postoperative complications and priorities": "2_uXDgUSH0k",
    "Wound healing and dressing changes": "UCPyMN8DzkF",
    "Drains and surgical tubes": "zzpmz5zDnb8",
    "Oxygen delivery devices": "pXrGIZOLz4k",
    "Suctioning and airway management": "piO71GcUa1s",
    "Chest tube nursing care": "QCgcUtWkWqE",
    "Basic life support and rapid response": "FugzsYln-8E",
    "Shock types and hemodynamic monitoring": "qKlSOp5dPtw",
    "Rapid response and code blue roles": "MUtoTIro8fU",
    "Ventilator-associated event prevention": "2_uXDgUSH0k",
    "Acute respiratory failure priorities": "UCPyMN8DzkF",
    "Surgical time-out and site verification": "zzpmz5zDnb8",
    "Anesthesia complications and malignant hyperthermia": "pXrGIZOLz4k",
    "Post-anesthesia care and airway priorities": "piO71GcUa1s",
    "Procedural sedation monitoring": "QCgcUtWkWqE",
    "12-lead ECG and telemetry priorities": "FugzsYln-8E",
    "Cardiac catheterization nursing care": "qKlSOp5dPtw",
    "Lumbar puncture and post-procedure care": "MUtoTIro8fU",
    "Endoscopy and colonoscopy preparation": "2_uXDgUSH0k",
    "Central venous catheter care": "UCPyMN8DzkF",
    "PICC line complications": "zzpmz5zDnb8",
    "Blood transfusion verification and reactions": "pXrGIZOLz4k",
    "Extravasation and infiltration management": "piO71GcUa1s",
    "Acute and chronic pain management": "QCgcUtWkWqE",
    "Palliative care and hospice principles": "FugzsYln-8E",
    "Rehabilitation and assistive devices": "qKlSOp5dPtw",
    "End-of-life signs and family support": "MUtoTIro8fU",
    "Dysphagia screening and aspiration prevention": "2_uXDgUSH0k",
    "Malnutrition and refeeding syndrome": "UCPyMN8DzkF",
    "Parenteral nutrition complications": "zzpmz5zDnb8",
    "Obesity and bariatric surgery nursing care": "pXrGIZOLz4k",
    "Prenatal assessment and routine tests": "piO71GcUa1s",
    "Preeclampsia and eclampsia": "pnGyENcL2j0",
    "Gestational diabetes": "QCgcUtWkWqE",
    "Placenta previa vs placental abruption": "FugzsYln-8E",
    "Stages of labor": "qKlSOp5dPtw",
    "Fetal heart rate monitoring": "MUtoTIro8fU",
    "Labor pain management": "2_uXDgUSH0k",
    "Preterm labor and rupture of membranes": "UCPyMN8DzkF",
    "Postpartum assessment and fundal checks": "zzpmz5zDnb8",
    "Postpartum hemorrhage": "pXrGIZOLz4k",
    "Postpartum infection and endometritis": "piO71GcUa1s",
    "Postpartum mood disorders": "QCgcUtWkWqE",
    "APGAR and immediate newborn care": "FugzsYln-8E",
    "Newborn thermoregulation": "qKlSOp5dPtw",
    "Newborn reflexes and assessment": "MUtoTIro8fU",
    "Newborn feeding and jaundice": "2_uXDgUSH0k",
    "Ectopic pregnancy": "UCPyMN8DzkF",
    "Hyperemesis gravidarum": "zzpmz5zDnb8",
    "Rh incompatibility and Rho(D) immune globulin": "pXrGIZOLz4k",
    "Amniotic fluid embolism": "piO71GcUa1s",
    "Contraception and family planning": "QCgcUtWkWqE",
    "STI assessment and treatment teaching": "FugzsYln-8E",
    "Menstrual disorders and endometriosis": "qKlSOp5dPtw",
    "Infertility and reproductive procedures": "MUtoTIro8fU",
    "Multiple gestation": "2_uXDgUSH0k",
    "Gestational hypertension": "UCPyMN8DzkF",
    "HELLP syndrome": "zzpmz5zDnb8",
    "Intrauterine growth restriction": "pXrGIZOLz4k",
    "Oligohydramnios and polyhydramnios": "piO71GcUa1s",
    "Shoulder dystocia": "QCgcUtWkWqE",
    "Umbilical cord prolapse": "FugzsYln-8E",
    "Uterine rupture": "qKlSOp5dPtw",
    "Uterine tachysystole": "MUtoTIro8fU",
    "Trial of labor after cesarean considerations": "2_uXDgUSH0k",
    "Neonatal hypoglycemia": "UCPyMN8DzkF",
    "Neonatal respiratory distress syndrome": "zzpmz5zDnb8",
    "Neonatal abstinence syndrome": "pXrGIZOLz4k",
    "Neonatal sepsis": "piO71GcUa1s",
    "Hyperbilirubinemia and phototherapy": "QCgcUtWkWqE",
    "Polycystic ovary syndrome": "FugzsYln-8E",
    "Cervical and breast cancer screening": "qKlSOp5dPtw",
    "Menopause and hormone therapy teaching": "MUtoTIro8fU",
    "Genetic screening and prenatal testing": "2_uXDgUSH0k",
    "Therapeutic communication techniques": "UCPyMN8DzkF",
    "Suicide risk assessment and safety": "zzpmz5zDnb8",
    "Crisis intervention": "pXrGIZOLz4k",
    "Defense mechanisms and coping": "piO71GcUa1s",
    "Major depressive disorder": "QCgcUtWkWqE",
    "Bipolar disorder and mania": "FugzsYln-8E",
    "Lithium monitoring and toxicity": "qKlSOp5dPtw",
    "Electroconvulsive therapy nursing care": "MUtoTIro8fU",
    "Schizophrenia and positive vs negative symptoms": "2_uXDgUSH0k",
    "Antipsychotic adverse effects": "UCPyMN8DzkF",
    "Neuroleptic malignant syndrome": "zzpmz5zDnb8",
    "Delusions and hallucinations nursing responses": "pXrGIZOLz4k",
    "Panic disorder and anxiety levels": "piO71GcUa1s",
    "PTSD and trauma-informed care": "QCgcUtWkWqE",
    "Obsessive-compulsive disorder": "FugzsYln-8E",
    "Phobias and exposure therapy": "qKlSOp5dPtw",
    "Alcohol withdrawal and CIWA": "MUtoTIro8fU",
    "Opioid use and withdrawal": "2_uXDgUSH0k",
    "Anorexia and bulimia nursing care": "UCPyMN8DzkF",
    "Intoxication and overdose priorities": "zzpmz5zDnb8",
    "Delirium assessment and prevention": "pXrGIZOLz4k",
    "Alzheimer disease and dementia care": "piO71GcUa1s",
    "Personality disorders": "QCgcUtWkWqE",
    "Somatic symptom and dissociative disorders": "FugzsYln-8E",
    "Eating disorders in adolescents": "qKlSOp5dPtw",
    "ADHD and behavioral disorders": "MUtoTIro8fU",
    "Autism and therapeutic approaches": "2_uXDgUSH0k",
    "Self-harm and suicide prevention in adolescents": "UCPyMN8DzkF",
    "Acute agitation and de-escalation": "zzpmz5zDnb8",
    "Violence risk assessment": "pXrGIZOLz4k",
    "Seclusion and restraint safety": "piO71GcUa1s",
    "Grief, loss and end-of-life distress": "QCgcUtWkWqE",
    "RN LPN and UAP scope of practice": "FugzsYln-8E",
    "Five rights of delegation": "qKlSOp5dPtw",
    "Assignment and supervision": "MUtoTIro8fU",
    "When to intervene and reassess delegated care": "2_uXDgUSH0k",
    "ABCs and unstable vs stable clients": "UCPyMN8DzkF",
    "Acute vs chronic and new vs expected findings": "zzpmz5zDnb8",
    "Mass casualty triage": "pXrGIZOLz4k",
    "Who to see first NCLEX strategy": "piO71GcUa1s",
    "Informed consent and refusal": "QCgcUtWkWqE",
    "Confidentiality and HIPAA principles": "FugzsYln-8E",
    "Advance directives and client advocacy": "qKlSOp5dPtw",
    "Negligence malpractice and documentation": "MUtoTIro8fU",
    "Incident reports and error disclosure": "2_uXDgUSH0k",
    "Root cause analysis and just culture": "UCPyMN8DzkF",
    "Evidence-based practice and quality indicators": "zzpmz5zDnb8",
    "Safe handoff and SBAR communication": "pXrGIZOLz4k",
    "Discharge planning and readmission prevention": "piO71GcUa1s",
    "Interprofessional collaboration and referrals": "QCgcUtWkWqE",
    "Continuity of care and transfer safety": "FugzsYln-8E",
    "Case management and resource allocation": "qKlSOp5dPtw",
    "Capacity and surrogate decision-making": "MUtoTIro8fU",
    "Mandatory reporting and duty to protect": "2_uXDgUSH0k",
    "Cultural humility and interpreter use": "UCPyMN8DzkF",
    "Spiritual care and ethical conflict": "zzpmz5zDnb8",
    "Levels of prevention": "pXrGIZOLz4k",
    "Community assessment and health planning": "piO71GcUa1s",
    "Social determinants of health": "QCgcUtWkWqE",
    "Home health and vulnerable populations": "FugzsYln-8E",
    "Chain of infection and disease transmission": "qKlSOp5dPtw",
    "Outbreak investigation basics": "MUtoTIro8fU",
    "Immunization and vaccine principles": "2_uXDgUSH0k",
    "Tuberculosis and communicable disease control": "UCPyMN8DzkF",
    "Disaster triage and START": "zzpmz5zDnb8",
    "Bioterrorism and isolation response": "pXrGIZOLz4k",
    "Disaster phases and emergency planning": "piO71GcUa1s",
    "Community emergency shelter and continuity of care": "QCgcUtWkWqE",
    "Occupational exposure and needlestick response": "FugzsYln-8E",
    "Environmental health and disaster-related illness": "qKlSOp5dPtw",
    "School nursing and population screening": "MUtoTIro8fU",
    "Maternal-child community health programs": "2_uXDgUSH0k",
    "Home safety and medication reconciliation": "UCPyMN8DzkF",
    "Hospice eligibility concepts and symptom support": "zzpmz5zDnb8",
    "Care of older adults in the community": "pXrGIZOLz4k",
    "Housing insecurity, food insecurity and access to care": "piO71GcUa1s",
    "Age-related physiologic changes": "QCgcUtWkWqE",
    "Polypharmacy and potentially inappropriate medications": "FugzsYln-8E",
    "Falls, frailty and functional assessment": "qKlSOp5dPtw",
    "Pressure injury and skin integrity in older adults": "MUtoTIro8fU",
    "Primary and secondary trauma survey": "2_uXDgUSH0k",
    "Head injury and intracranial trauma": "UCPyMN8DzkF",
    "Spinal trauma and spinal precautions": "zzpmz5zDnb8",
    "Hemorrhage control and hypovolemic shock": "pXrGIZOLz4k",
    "Hemodynamic monitoring and shock": "piO71GcUa1s",
    "Acute coronary and respiratory deterioration": "QCgcUtWkWqE",
    "Multiorgan dysfunction syndrome": "FugzsYln-8E",
    "Sedation, delirium and ICU mobility": "qKlSOp5dPtw",
    "Preoperative risk assessment": "MUtoTIro8fU",
    "Intraoperative positioning and surgical safety": "2_uXDgUSH0k",
    "Postoperative airway and circulation priorities": "UCPyMN8DzkF",
    "Postoperative infection and venous thromboembolism prevention": "zzpmz5zDnb8",
    "Cancer staging and treatment goals": "pXrGIZOLz4k",
    "Safe handling of antineoplastic agents": "piO71GcUa1s",
    "Neutropenic and thrombocytopenic precautions": "QCgcUtWkWqE",
    "Oncologic emergencies and symptom management": "FugzsYln-8E",
    "Transmission-based precautions by organism": "qKlSOp5dPtw",
    "Healthcare-associated infection prevention": "MUtoTIro8fU",
    "C. difficile and multidrug-resistant organisms": "2_uXDgUSH0k",
    "Needlestick exposure and postexposure response": "UCPyMN8DzkF",
    "Solid-organ transplant assessment": "zzpmz5zDnb8",
    "Acute and chronic rejection": "pXrGIZOLz4k",
    "Graft-versus-host disease": "piO71GcUa1s",
    "Immunosuppression and infection prevention": "QCgcUtWkWqE",
    "Stroke rehabilitation and functional recovery": "FugzsYln-8E",
    "Spinal cord injury rehabilitation": "qKlSOp5dPtw",
    "Dysphagia and communication support": "MUtoTIro8fU",
    "Mobility aids and activities of daily living": "2_uXDgUSH0k",
    "Goals-of-care conversations": "UCPyMN8DzkF",
    "Symptom management near end of life": "zzpmz5zDnb8",
    "Advance care planning": "pXrGIZOLz4k",
    "Grief support and postmortem care": "piO71GcUa1s",
    "Critical laboratory values and escalation": "QCgcUtWkWqE",
    "Diagnostic imaging contrast precautions": "FugzsYln-8E",
    "Specimen collection and handling": "qKlSOp5dPtw",
    "Point-of-care testing and quality control": "MUtoTIro8fU",
    "Enteral access devices and tube complications": "2_uXDgUSH0k",
    "Parenteral nutrition monitoring": "UCPyMN8DzkF",
    "Electrolyte replacement safety": "zzpmz5zDnb8",
    "Refeeding syndrome recognition": "pXrGIZOLz4k",
    "Informed consent and decision-making capacity": "piO71GcUa1s",
    "Interpreter use and communication access": "QCgcUtWkWqE",
    "Religious and spiritual preferences in care": "FugzsYln-8E",
    "Moral distress and ethical consultation": "qKlSOp5dPtw",
    "Management of Care": "MUtoTIro8fU",
    "Safety and Infection Prevention and Control": "2_uXDgUSH0k",
    "Health Promotion and Maintenance": "UCPyMN8DzkF",
    "Psychosocial Integrity": "zzpmz5zDnb8",
    "Basic Care and Comfort": "pXrGIZOLz4k",
    "Pharmacological and Parenteral Therapies": "piO71GcUa1s",
    "Reduction of Risk Potential": "QCgcUtWkWqE",
    "Physiological Adaptation": "FugzsYln-8E"
  }
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
    return acc;,{});
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
  const body=['Please review this Learning Center video mapping.','','**Topic:** '+topicText,'**Channel:** '+provider.label,'**Video URL / ID:** '+(videoUrl||'No video currently mapped'),'**Report type:** Unavailable, broken, incorrect, or cannot be embedded','','Please verify the video and remap this topic if a suitable replacement is available.'].join('\n');
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
