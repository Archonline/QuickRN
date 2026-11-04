/* QuickRN original NCLEX expansion batch 004: QR-001920–QR-001939.
 * 20 distinct scenario-based draft items. Pending qualified nurse-educator review.
 * Additive loader shared by Self-Study, CAT, Predictor, and Timed modes.
 */
(function(root){
'use strict';
const bank=Array.isArray(root.questions)?root.questions:(typeof questions!=='undefined'?questions:[]);
if(!Array.isArray(root.questions))root.questions=bank;
const items=[
  {
    "id": "QR-001920",
    "type": "Single Choice",
    "category": "Management of Care",
    "topic": "Postoperative airway priority",
    "title": "A client 30 minutes after extubation develops inspiratory stridor, suprasternal retractions, and an SpO₂ of 89%. Which action should the nurse take first?",
    "options": [
      "Activate the rapid response team and prepare for immediate airway support.",
      "Offer ice chips to soothe the throat.",
      "Place the client flat and reassess in 15 minutes.",
      "Administer the next scheduled oral analgesic."
    ],
    "correctAnswer": "Activate the rapid response team and prepare for immediate airway support.",
    "rationale": "Stridor with retractions and hypoxemia indicates acute upper-airway compromise. Immediate escalation and airway support take priority over comfort measures or delayed reassessment.",
    "difficulty": "High"
  },
  {
    "id": "QR-001921",
    "type": "Single Choice",
    "category": "Safety and Infection Control",
    "topic": "Clostridioides difficile environmental cleaning",
    "title": "A client with confirmed C. difficile is transferred to another unit. Which environmental action is most appropriate before the room is reassigned?",
    "options": [
      "Clean high-touch surfaces with an EPA-registered sporicidal disinfectant.",
      "Use alcohol wipes on all surfaces.",
      "Fog the room with routine air freshener.",
      "Clean only visible stool contamination."
    ],
    "correctAnswer": "Clean high-touch surfaces with an EPA-registered sporicidal disinfectant.",
    "rationale": "C. difficile spores persist in the environment. Thorough terminal cleaning with an approved sporicidal product is needed; routine alcohol products are not reliably sporicidal.",
    "difficulty": "Moderate"
  },
  {
    "id": "QR-001922",
    "type": "Single Choice",
    "category": "Health Promotion and Maintenance",
    "topic": "Newborn safe sleep",
    "title": "A parent asks how to reduce the risk of sleep-related infant death. Which instruction should the nurse emphasize?",
    "options": [
      "Place the infant supine on a firm, flat sleep surface without loose bedding.",
      "Use a soft pillow to prevent positional flattening.",
      "Place the infant prone after every feeding.",
      "Use a weighted blanket to limit startling."
    ],
    "correctAnswer": "Place the infant supine on a firm, flat sleep surface without loose bedding.",
    "rationale": "Supine positioning on a firm, flat, separate sleep surface without pillows, blankets, or soft objects is a core safe-sleep recommendation.",
    "difficulty": "Easy"
  },
  {
    "id": "QR-001923",
    "type": "Single Choice",
    "category": "Psychosocial Integrity",
    "topic": "Suicide risk assessment",
    "title": "A client admitted for depression says, “My family would be better off without me.” Which response is the nurse's priority?",
    "options": [
      "Ask directly whether the client is thinking about suicide and has a plan.",
      "Explain that the family needs the client.",
      "Change the subject to a positive activity.",
      "Promise to keep the statement confidential."
    ],
    "correctAnswer": "Ask directly whether the client is thinking about suicide and has a plan.",
    "rationale": "A statement suggesting burdensomeness requires direct suicide-risk assessment, including ideation, plan, intent, and access to means. Safety takes priority over reassurance or secrecy.",
    "difficulty": "High"
  },
  {
    "id": "QR-001924",
    "type": "Single Choice",
    "category": "Basic Care and Comfort",
    "topic": "Enteral feeding aspiration prevention",
    "title": "A client receiving continuous gastric tube feeding begins coughing and has a new wet voice. What should the nurse do first?",
    "options": [
      "Stop the feeding and assess respiratory status and tube placement per protocol.",
      "Increase the feeding rate to finish the prescribed volume.",
      "Flush the tube with a large volume of water.",
      "Place the client supine to reduce coughing."
    ],
    "correctAnswer": "Stop the feeding and assess respiratory status and tube placement per protocol.",
    "rationale": "Coughing and a wet voice may indicate aspiration. Stop the feeding, assess airway and oxygenation, and verify tube placement according to policy before resuming.",
    "difficulty": "High"
  },
  {
    "id": "QR-001925",
    "type": "Single Choice",
    "category": "Pharmacological and Parenteral Therapies",
    "topic": "Magnesium sulfate toxicity",
    "title": "A client receiving magnesium sulfate for severe preeclampsia has absent deep-tendon reflexes, respirations of 10/min, and urine output of 20 mL/hr. Which action is most appropriate?",
    "options": [
      "Stop the infusion, notify the provider, and prepare the prescribed calcium gluconate.",
      "Increase the infusion because the client remains hypertensive.",
      "Encourage ambulation to improve circulation.",
      "Administer an additional magnesium bolus."
    ],
    "correctAnswer": "Stop the infusion, notify the provider, and prepare the prescribed calcium gluconate.",
    "rationale": "Loss of reflexes, respiratory depression, and oliguria suggest magnesium accumulation and toxicity. Stop magnesium, urgently escalate, support breathing, and prepare the prescribed antidote.",
    "difficulty": "High"
  },
  {
    "id": "QR-001926",
    "type": "Single Choice",
    "category": "Reduction of Risk Potential",
    "topic": "Post-thyroidectomy hypocalcemia",
    "title": "Six hours after thyroidectomy, a client reports tingling around the mouth and fingertips. Which assessment should the nurse perform promptly?",
    "options": [
      "Assess for neuromuscular irritability and obtain the prescribed calcium level.",
      "Assess bowel sounds for postoperative ileus.",
      "Measure abdominal girth.",
      "Ask about the client's usual caffeine intake."
    ],
    "correctAnswer": "Assess for neuromuscular irritability and obtain the prescribed calcium level.",
    "rationale": "Perioral and distal paresthesias may be early signs of hypocalcemia from parathyroid injury. Assess for tetany or laryngospasm and promptly evaluate calcium.",
    "difficulty": "High"
  },
  {
    "id": "QR-001927",
    "type": "Single Choice",
    "category": "Physiological Adaptation",
    "topic": "Acute compartment syndrome",
    "title": "A client with a tibial fracture reports escalating pain despite opioid medication. The lower leg is tense, and passive toe extension causes severe pain. What is the priority action?",
    "options": [
      "Notify the orthopedic team immediately for suspected compartment syndrome.",
      "Elevate the leg well above heart level and apply ice tightly.",
      "Reassure the client that pain is expected after fracture.",
      "Encourage active range-of-motion exercises."
    ],
    "correctAnswer": "Notify the orthopedic team immediately for suspected compartment syndrome.",
    "rationale": "Disproportionate pain, pain with passive stretch, and tense swelling are early warning signs of compartment syndrome. Urgent surgical evaluation is needed to prevent ischemic injury.",
    "difficulty": "High"
  },
  {
    "id": "QR-001928",
    "type": "Single Choice",
    "category": "Management of Care",
    "topic": "Delegation and unstable clients",
    "title": "The RN is assigning tasks to an experienced nursing assistant. Which client should the RN retain for direct assessment?",
    "options": [
      "A client newly reporting chest pressure and diaphoresis.",
      "A stable client needing assistance with bathing.",
      "A client requesting routine meal setup.",
      "A client with stable vital signs who needs ambulation assistance."
    ],
    "correctAnswer": "A client newly reporting chest pressure and diaphoresis.",
    "rationale": "New chest pressure with diaphoresis may indicate acute coronary syndrome and requires RN assessment and clinical judgment. Routine activities for stable clients may be delegated when appropriate.",
    "difficulty": "High"
  },
  {
    "id": "QR-001929",
    "type": "Single Choice",
    "category": "Safety and Infection Control",
    "topic": "Neutropenic precautions",
    "title": "A client receiving chemotherapy has an absolute neutrophil count of 350/mm³. Which visitor behavior should the nurse stop?",
    "options": [
      "Bringing a vase of fresh flowers into the room.",
      "Performing hand hygiene before contact.",
      "Wearing a mask when symptomatic and postponing the visit if ill.",
      "Following the unit's visitor screening process."
    ],
    "correctAnswer": "Bringing a vase of fresh flowers into the room.",
    "rationale": "Severe neutropenia increases infection risk. Fresh flowers and standing water can harbor microorganisms and are generally excluded from protective environments according to facility policy.",
    "difficulty": "Moderate"
  },
  {
    "id": "QR-001930",
    "type": "Single Choice",
    "category": "Health Promotion and Maintenance",
    "topic": "Gestational diabetes screening",
    "title": "A pregnant client at 26 weeks asks why glucose screening is recommended despite having no symptoms. Which response is best?",
    "options": [
      "Gestational diabetes can be asymptomatic, and screening identifies maternal and fetal risks that can be reduced with treatment.",
      "Screening is needed only when the client reports excessive thirst.",
      "A normal body weight eliminates the possibility of gestational diabetes.",
      "The test determines whether the fetus has congenital diabetes."
    ],
    "correctAnswer": "Gestational diabetes can be asymptomatic, and screening identifies maternal and fetal risks that can be reduced with treatment.",
    "rationale": "Gestational diabetes often has no obvious symptoms. Screening during the recommended gestational window supports timely treatment and reduces complications.",
    "difficulty": "Moderate"
  },
  {
    "id": "QR-001931",
    "type": "Single Choice",
    "category": "Psychosocial Integrity",
    "topic": "Alcohol withdrawal",
    "title": "A hospitalized client with heavy daily alcohol use becomes tremulous, diaphoretic, and tachycardic 12 hours after the last drink. Which action should the nurse anticipate?",
    "options": [
      "Initiate the facility's alcohol-withdrawal assessment and treatment protocol.",
      "Encourage the client to leave the unit to obtain alcohol.",
      "Administer an opioid for the tremor.",
      "Delay assessment until hallucinations occur."
    ],
    "correctAnswer": "Initiate the facility's alcohol-withdrawal assessment and treatment protocol.",
    "rationale": "Early alcohol withdrawal can progress to seizures and delirium. Prompt structured assessment, monitoring, and prescribed symptom-triggered treatment are indicated.",
    "difficulty": "High"
  },
  {
    "id": "QR-001932",
    "type": "Single Choice",
    "category": "Basic Care and Comfort",
    "topic": "Postoperative urinary retention",
    "title": "A client 8 hours after surgery has not voided and reports suprapubic pressure. Which action should the nurse take first?",
    "options": [
      "Assess bladder volume with a bladder scanner according to protocol.",
      "Insert an indwelling catheter without assessment.",
      "Restrict oral fluids for the rest of the day.",
      "Document the finding as expected and take no action."
    ],
    "correctAnswer": "Assess bladder volume with a bladder scanner according to protocol.",
    "rationale": "Suprapubic pressure and inability to void suggest retention. A bladder scan helps quantify volume and guide timely interventions while avoiding unnecessary catheterization.",
    "difficulty": "Moderate"
  },
  {
    "id": "QR-001933",
    "type": "Single Choice",
    "category": "Pharmacological and Parenteral Therapies",
    "topic": "Warfarin and bleeding",
    "title": "A client taking warfarin reports black, tarry stools and dizziness. What should the nurse advise the client to do?",
    "options": [
      "Seek emergency evaluation now and do not take another dose until urgently instructed.",
      "Take an extra dose because the stool may indicate clotting.",
      "Wait for the next routine INR appointment.",
      "Take ibuprofen for abdominal discomfort."
    ],
    "correctAnswer": "Seek emergency evaluation now and do not take another dose until urgently instructed.",
    "rationale": "Melena and dizziness may indicate significant gastrointestinal bleeding. Immediate evaluation is required; additional anticoagulant or NSAID exposure may worsen bleeding.",
    "difficulty": "High"
  },
  {
    "id": "QR-001934",
    "type": "Single Choice",
    "category": "Reduction of Risk Potential",
    "topic": "Contrast-associated kidney risk",
    "title": "A client with chronic kidney disease is scheduled for CT imaging with iodinated contrast. Which information is most important for the nurse to verify before the study?",
    "options": [
      "Recent renal function results and the prescribed contrast-risk mitigation plan.",
      "The client's preferred television channel.",
      "Whether the client has eaten spicy food this week.",
      "The time of the last routine dental cleaning."
    ],
    "correctAnswer": "Recent renal function results and the prescribed contrast-risk mitigation plan.",
    "rationale": "Renal function and individualized risk mitigation should be reviewed before iodinated contrast in a client with chronic kidney disease. Follow current orders and local protocol.",
    "difficulty": "Moderate"
  },
  {
    "id": "QR-001935",
    "type": "Single Choice",
    "category": "Physiological Adaptation",
    "topic": "Acute myocardial infarction",
    "title": "A client with suspected acute myocardial infarction has persistent chest pain and a 12-lead ECG showing ST elevation. Which action should the nurse prioritize?",
    "options": [
      "Activate the facility's reperfusion pathway and prepare for urgent coronary intervention.",
      "Schedule an outpatient stress test for next week.",
      "Encourage the client to walk to reduce anxiety.",
      "Wait for a second troponin result before escalating."
    ],
    "correctAnswer": "Activate the facility's reperfusion pathway and prepare for urgent coronary intervention.",
    "rationale": "ST-elevation myocardial infarction requires rapid reperfusion evaluation. Treatment should not be delayed while waiting for serial biomarkers when the clinical and ECG findings are diagnostic.",
    "difficulty": "High"
  },
  {
    "id": "QR-001936",
    "type": "Single Choice",
    "category": "Management of Care",
    "topic": "Blood transfusion reaction",
    "title": "Fifteen minutes after a red blood cell transfusion begins, a client develops chills, back pain, and dyspnea. What should the nurse do first?",
    "options": [
      "Stop the transfusion and maintain IV access with normal saline using new tubing.",
      "Slow the transfusion and reassess in 30 minutes.",
      "Discard the blood bag before notifying the blood bank.",
      "Administer the next unit to complete the order."
    ],
    "correctAnswer": "Stop the transfusion and maintain IV access with normal saline using new tubing.",
    "rationale": "These symptoms may indicate an acute transfusion reaction. Stop the blood immediately, maintain access with saline and new tubing, assess the client, and follow the reaction protocol.",
    "difficulty": "High"
  },
  {
    "id": "QR-001937",
    "type": "Single Choice",
    "category": "Safety and Infection Control",
    "topic": "Tuberculosis discharge teaching",
    "title": "A client with infectious pulmonary tuberculosis is being discharged on multidrug therapy. Which instruction is most important?",
    "options": [
      "Take every medication for the full prescribed course and keep all follow-up appointments.",
      "Stop the medications when the cough resolves.",
      "Share medications with household members who develop a cough.",
      "Skip doses on days when appetite is poor."
    ],
    "correctAnswer": "Take every medication for the full prescribed course and keep all follow-up appointments.",
    "rationale": "Consistent multidrug therapy and follow-up are essential to cure tuberculosis and reduce relapse and drug resistance. Public-health follow-up and infection-control instructions must also be followed.",
    "difficulty": "Moderate"
  },
  {
    "id": "QR-001938",
    "type": "Single Choice",
    "category": "Health Promotion and Maintenance",
    "topic": "Osteoporosis prevention",
    "title": "A postmenopausal client asks which activity can help preserve bone strength. Which recommendation is appropriate if there are no contraindications?",
    "options": [
      "Regular weight-bearing activity such as brisk walking, combined with resistance exercise.",
      "Avoid all exercise to prevent fractures.",
      "Perform only prolonged bed rest.",
      "Replace meals with calcium-free beverages."
    ],
    "correctAnswer": "Regular weight-bearing activity such as brisk walking, combined with resistance exercise.",
    "rationale": "Weight-bearing and resistance exercises support bone health, balance, and strength. Exercise should be individualized to fracture risk and functional status.",
    "difficulty": "Easy"
  },
  {
    "id": "QR-001939",
    "type": "Single Choice",
    "category": "Physiological Adaptation",
    "topic": "Diabetic ketoacidosis",
    "title": "A client receiving IV insulin for diabetic ketoacidosis has a potassium level that falls from 4.2 to 3.1 mEq/L. Which action should the nurse anticipate?",
    "options": [
      "Prompt potassium replacement and reassessment before continuing insulin per protocol.",
      "Increase the insulin rate to correct potassium.",
      "Restrict all potassium intake.",
      "Stop cardiac monitoring because glucose is improving."
    ],
    "correctAnswer": "Prompt potassium replacement and reassessment before continuing insulin per protocol.",
    "rationale": "Insulin shifts potassium intracellularly and can worsen hypokalemia. When potassium is low, replacement and protocol-directed adjustment of insulin are needed to reduce dysrhythmia risk.",
    "difficulty": "High"
  }
];
const known=new Set(bank.map(q=>q&&q.id).filter(Boolean).map(String));
items.forEach(q=>{if(!known.has(q.id)){bank.push(q);known.add(q.id);}});
root.quickRNExpansionBatch004Count=items.filter(q=>known.has(q.id)).length;
})(typeof window!=='undefined'?window:globalThis);
