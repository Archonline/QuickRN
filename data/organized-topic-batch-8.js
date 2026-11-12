/* Organized NCLEX topic batch 8: 8 original, source-referenced questions.
 * Automated structural checks do not establish clinical approval.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100321",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Acute exacerbation of COPD",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with COPD is admitted with increased dyspnea and a respiratory rate of 30/min. The client is drowsy, has shallow respirations, and an oxygen saturation of 86% on room air. Which action should the nurse take first?",
    "options": [
      "Apply prescribed controlled oxygen and promptly reassess respiratory status",
      "Encourage the client to lie flat and rest",
      "Withhold oxygen because the client has COPD",
      "Offer oral fluids before reassessing"
    ],
    "correctAnswer": "Apply prescribed controlled oxygen and promptly reassess respiratory status",
    "rationale": "Hypoxemia with new drowsiness and shallow breathing suggests potentially serious respiratory compromise. Support oxygenation using the prescribed target range, assess work of breathing and mental status, and escalate promptly. Oxygen should not be withheld; it should be titrated and monitored.",
    "optionRationales": {
      "Apply prescribed controlled oxygen and promptly reassess respiratory status": "Correct. Treat hypoxemia while monitoring response and escalating concern for ventilatory failure.",
      "Encourage the client to lie flat and rest": "Incorrect. Upright positioning generally supports lung expansion; lying flat can worsen dyspnea.",
      "Withhold oxygen because the client has COPD": "Incorrect. Hypoxemia requires treatment. Oxygen is titrated carefully rather than withheld.",
      "Offer oral fluids before reassessing": "Incorrect. Fluids do not address the immediate breathing problem and may be unsafe if alertness is impaired."
    },
    "clinicalJudgmentTip": "Prioritize airway and breathing; new altered mental status in a client with respiratory distress is a deterioration cue.",
    "sourceReferences": [
      {
        "title": "COPD",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/copd",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Oxygen therapy",
        "publisher": "British Thoracic Society",
        "url": "https://www.brit-thoracic.org.uk/quality-improvement/guidelines/emergency-oxygen/",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Use the prescribed oxygen target and local emergency escalation protocol; an individual target may differ."
    ],
    "metadata": {
      "id": "QR-100321",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with COPD is admitted with increased dyspnea and a respiratory rate of 30/min. The client is drowsy, has shallow respirations, and an oxygen saturation of 86% on room air. Which action should the nurse take first?",
      "options": [
        "Apply prescribed controlled oxygen and promptly reassess respiratory status",
        "Encourage the client to lie flat and rest",
        "Withhold oxygen because the client has COPD",
        "Offer oral fluids before reassessing"
      ],
      "answerKey": "Apply prescribed controlled oxygen and promptly reassess respiratory status",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "COPD exacerbation with hypoxemia and new drowsiness."
    },
    "rationales": {
      "overall": "Hypoxemia plus altered alertness is an urgent respiratory warning. Provide controlled oxygen as prescribed, reassess, and escalate.",
      "options": {},
      "clinicalJudgmentTip": "Do not withhold oxygen from a hypoxemic client with COPD; titrate and monitor."
    }
  },
  {
    "id": "QR-100322",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hyperkalemia and cardiac monitoring",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "A client with acute kidney injury has a potassium level of 6.4 mEq/L. The ECG shows peaked T waves. Which actions should the nurse anticipate or implement promptly? Select all that apply.",
    "options": [
      "Place the client on continuous cardiac monitoring",
      "Notify the provider or activate the urgent escalation pathway",
      "Prepare to administer prescribed IV calcium gluconate",
      "Encourage a potassium-rich snack",
      "Repeat the potassium level only at the next routine morning draw",
      "Anticipate prescribed therapy to shift potassium into cells"
    ],
    "correctAnswer": [
      "Place the client on continuous cardiac monitoring",
      "Notify the provider or activate the urgent escalation pathway",
      "Prepare to administer prescribed IV calcium gluconate",
      "Anticipate prescribed therapy to shift potassium into cells"
    ],
    "rationale": "Severe hyperkalemia with ECG changes is an emergency because of the risk of lethal dysrhythmias. Continuous monitoring, urgent escalation, myocardial membrane stabilization with prescribed IV calcium, and potassium-shifting treatment may be required. Calcium does not lower serum potassium; additional therapy removes or shifts potassium.",
    "optionRationales": {
      "Place the client on continuous cardiac monitoring": "Correct. ECG changes signal cardiac toxicity and require close rhythm surveillance.",
      "Notify the provider or activate the urgent escalation pathway": "Correct. The potassium level and ECG findings require immediate treatment decisions.",
      "Prepare to administer prescribed IV calcium gluconate": "Correct. IV calcium stabilizes the myocardium when hyperkalemia causes ECG changes; it does not remove potassium.",
      "Encourage a potassium-rich snack": "Incorrect. Additional potassium can worsen the hyperkalemia.",
      "Repeat the potassium level only at the next routine morning draw": "Incorrect. Delaying reassessment and treatment is unsafe with ECG changes.",
      "Anticipate prescribed therapy to shift potassium into cells": "Correct. Insulin with glucose and selected other therapies may temporarily shift potassium intracellularly."
    },
    "clinicalJudgmentTip": "Treat hyperkalemia with ECG changes as an immediate threat; distinguish cardiac stabilization, intracellular shifting, and potassium removal.",
    "sourceReferences": [
      {
        "title": "Hyperkalemia",
        "publisher": "National Kidney Foundation",
        "url": "https://www.kidney.org/kidney-topics/potassium-and-your-ckd-diet",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Hyperkalemia: Emergency management",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/endocrine-and-metabolic-disorders/electrolyte-disorders/hyperkalemia",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Treatment selection and dosing depend on ECG findings, renal function, glucose, and current emergency protocols."
    ],
    "metadata": {
      "id": "QR-100322",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which actions should the nurse anticipate or implement promptly? Select all that apply.",
      "options": [
        "Place the client on continuous cardiac monitoring",
        "Notify the provider or activate the urgent escalation pathway",
        "Prepare to administer prescribed IV calcium gluconate",
        "Encourage a potassium-rich snack",
        "Repeat the potassium level only at the next routine morning draw",
        "Anticipate prescribed therapy to shift potassium into cells"
      ],
      "answerKey": [
        "Place the client on continuous cardiac monitoring",
        "Notify the provider or activate the urgent escalation pathway",
        "Prepare to administer prescribed IV calcium gluconate",
        "Anticipate prescribed therapy to shift potassium into cells"
      ],
      "scoring": {
        "method": "exact-match"
      }
    },
    "stimulus": {
      "clinicalContext": "Acute kidney injury; potassium 6.4 mEq/L; ECG with peaked T waves."
    },
    "rationales": {
      "overall": "ECG changes with hyperkalemia require urgent cardiac monitoring and treatment.",
      "options": {},
      "clinicalJudgmentTip": "Calcium stabilizes cardiac membranes; insulin-based therapy shifts potassium into cells; definitive removal is a separate step."
    }
  },
  {
    "id": "QR-100323",
    "schemaVersion": 2,
    "category": "Maternal Newborn",
    "topic": "Placental abruption",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "A client at 34 weeks' gestation reports sudden constant abdominal pain and vaginal bleeding. The uterus is firm and tender, and the fetal heart rate is  hakan  Category II. Which findings or actions are most concerning or appropriate? Select 3.",
    "options": [
      "Suspect placental abruption",
      "Assess maternal vital signs and quantify bleeding",
      "Initiate continuous fetal monitoring and notify the obstetric team",
      "Perform a digital vaginal examination immediately",
      "Reassure the client that painless bleeding is typical",
      "Apply fundal pressure to reduce bleeding"
    ],
    "correctAnswer": [
      "Suspect placental abruption",
      "Assess maternal vital signs and quantify bleeding",
      "Initiate continuous fetal monitoring and notify the obstetric team"
    ],
    "selectN": 3,
    "rationale": "Painful bleeding with a firm, tender uterus is concerning for placental abruption. Maternal hemorrhage and fetal compromise can develop rapidly, so assess maternal stability, monitor the fetus, and urgently involve the obstetric team. Avoid digital vaginal examination until placenta previa has been excluded.",
    "optionRationales": {
      "Suspect placental abruption": "Correct. Pain and uterine tenderness/rigidity are classic warning cues.",
      "Assess maternal vital signs and quantify bleeding": "Correct. Concealed bleeding can occur, so visible blood loss may underestimate severity.",
      "Initiate continuous fetal monitoring and notify the obstetric team": "Correct. Abruption can compromise placental perfusion and fetal oxygenation.",
      "Perform a digital vaginal examination immediately": "Incorrect. It is unsafe before placenta previa is excluded.",
      "Reassure the client that painless bleeding is typical": "Incorrect. The described bleeding is painful, and reassurance would delay urgent assessment.",
      "Apply fundal pressure to reduce bleeding": "Incorrect. Fundal pressure is not a treatment and may cause harm."
    },
    "clinicalJudgmentTip": "Painful bleeding plus a firm, tender uterus suggests abruption; stabilize the mother and assess fetal status without delaying escalation.",
    "sourceReferences": [
      {
        "title": "Placental abruption",
        "publisher": "Cleveland Clinic",
        "url": "https://my.clevelandclinic.org/health/diseases/9435-placental-abruption",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Bleeding during pregnancy",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/womens-health/faqs/bleeding-during-pregnancy",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "The exact response depends on maternal/fetal stability, gestational age, and the obstetric team's protocol."
    ],
    "metadata": {
      "id": "QR-100323",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which findings or actions are most concerning or appropriate? Select 3.",
      "options": [
        "Suspect placental abruption",
        "Assess maternal vital signs and quantify bleeding",
        "Initiate continuous fetal monitoring and notify the obstetric team",
        "Perform a digital vaginal examination immediately",
        "Reassure the client that painless bleeding is typical",
        "Apply fundal pressure to reduce bleeding"
      ],
      "answerKey": [
        "Suspect placental abruption",
        "Assess maternal vital signs and quantify bleeding",
        "Initiate continuous fetal monitoring and notify the obstetric team"
      ],
      "scoring": {
        "method": "exact-match"
      }
    },
    "stimulus": {
      "clinicalContext": "34 weeks' gestation; sudden constant abdominal pain; vaginal bleeding; firm, tender uterus; nonreassuring fetal heart rate pattern."
    },
    "rationales": {
      "overall": "The presentation is concerning for placental abruption and requires urgent maternal-fetal assessment.",
      "options": {},
      "clinicalJudgmentTip": "Avoid vaginal examination until placenta previa is ruled out."
    }
  },
  {
    "id": "QR-100324",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Sepsis recognition and early escalation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "A hospitalized client being treated for pneumonia develops new confusion, hypotension, tachycardia, and reduced urine output. Classify each finding by its clinical significance.",
    "matrixLeftPane": "Client with pneumonia: new confusion, BP 86/50 mm Hg, HR 124/min, urine output 15 mL/hr.",
    "matrixTask": "For each finding, select the most appropriate interpretation.",
    "matrixRows": [
      {
        "label": "New confusion",
        "options": [
          "Possible organ dysfunction",
          "Expected recovery finding",
          "Medication allergy only"
        ],
        "correctAnswer": "Possible organ dysfunction"
      },
      {
        "label": "Blood pressure 86/50 mm Hg",
        "options": [
          "Possible circulatory compromise",
          "Normal adult finding",
          "Isolated pain response"
        ],
        "correctAnswer": "Possible circulatory compromise"
      },
      {
        "label": "Urine output 15 mL/hr",
        "options": [
          "Possible impaired renal perfusion",
          "Adequate renal output",
          "Expected after oral fluids"
        ],
        "correctAnswer": "Possible impaired renal perfusion"
      },
      {
        "label": "Heart rate 124/min",
        "options": [
          "Possible systemic response to illness",
          "Normal resting rate",
          "Definitive evidence of fluid overload"
        ],
        "correctAnswer": "Possible systemic response to illness"
      }
    ],
    "correctAnswer": [
      "Possible organ dysfunction",
      "Possible circulatory compromise",
      "Possible impaired renal perfusion",
      "Possible systemic response to illness"
    ],
    "rationale": "The combined findings suggest possible sepsis with organ dysfunction and circulatory compromise. Escalate immediately, reassess ABCs and perfusion, and anticipate time-sensitive evaluation and treatment. No single finding alone establishes the diagnosis.",
    "optionRationales": {},
    "clinicalJudgmentTip": "Look for a pattern of acute change and impaired perfusion rather than relying on fever alone.",
    "sourceReferences": [
      {
        "title": "About Sepsis",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/sepsis/about/index.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Surviving Sepsis Campaign Guidelines",
        "publisher": "Society of Critical Care Medicine",
        "url": "https://www.sccm.org/SurvivingSepsisCampaign/Guidelines",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "These findings warrant urgent evaluation but are not, by themselves, a definitive sepsis diagnosis."
    ],
    "metadata": {
      "id": "QR-100324",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the most appropriate interpretation.",
      "rows": [
        {
          "label": "New confusion",
          "options": [
            "Possible organ dysfunction",
            "Expected recovery finding",
            "Medication allergy only"
          ],
          "answerKey": "Possible organ dysfunction"
        },
        {
          "label": "Blood pressure 86/50 mm Hg",
          "options": [
            "Possible circulatory compromise",
            "Normal adult finding",
            "Isolated pain response"
          ],
          "answerKey": "Possible circulatory compromise"
        },
        {
          "label": "Urine output 15 mL/hr",
          "options": [
            "Possible impaired renal perfusion",
            "Adequate renal output",
            "Expected after oral fluids"
          ],
          "answerKey": "Possible impaired renal perfusion"
        },
        {
          "label": "Heart rate 124/min",
          "options": [
            "Possible systemic response to illness",
            "Normal resting rate",
            "Definitive evidence of fluid overload"
          ],
          "answerKey": "Possible systemic response to illness"
        }
      ],
      "answerKey": [
        "Possible organ dysfunction",
        "Possible circulatory compromise",
        "Possible impaired renal perfusion",
        "Possible systemic response to illness"
      ],
      "scoring": {
        "method": "row-level"
      }
    },
    "stimulus": {
      "clinicalContext": "Pneumonia with acute mental-status change, hypotension, tachycardia, and oliguria."
    },
    "rationales": {
      "overall": "The combination suggests acute organ dysfunction and impaired perfusion requiring immediate escalation.",
      "options": {},
      "clinicalJudgmentTip": "Use the entire trend and clinical picture; do not wait for fever or a single laboratory result."
    },
    "rows": [
      {
        "id": "0",
        "text": "New confusion",
        "options": [
          "Possible organ dysfunction",
          "Expected recovery finding",
          "Medication allergy only"
        ]
      },
      {
        "id": "1",
        "text": "Blood pressure 86/50 mm Hg",
        "options": [
          "Possible circulatory compromise",
          "Normal adult finding",
          "Isolated pain response"
        ]
      },
      {
        "id": "2",
        "text": "Urine output 15 mL/hr",
        "options": [
          "Possible impaired renal perfusion",
          "Adequate renal output",
          "Expected after oral fluids"
        ]
      },
      {
        "id": "3",
        "text": "Heart rate 124/min",
        "options": [
          "Possible systemic response to illness",
          "Normal resting rate",
          "Definitive evidence of fluid overload"
        ]
      }
    ],
    "columns": [
      "Possible organ dysfunction",
      "Expected recovery finding",
      "Medication allergy only",
      "Possible circulatory compromise",
      "Normal adult finding",
      "Isolated pain response",
      "Possible impaired renal perfusion",
      "Adequate renal output",
      "Expected after oral fluids",
      "Possible systemic response to illness",
      "Normal resting rate",
      "Definitive evidence of fluid overload"
    ],
    "correctAnswers": {
      "0": "Possible organ dysfunction",
      "1": "Possible circulatory compromise",
      "2": "Possible impaired renal perfusion",
      "3": "Possible systemic response to illness"
    }
  },
  {
    "id": "QR-100325",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic eligibility",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client arrives with sudden aphasia and right-sided weakness that began 45 minutes ago. Which action is the priority before a thrombolytic decision is made?",
    "options": [
      "Activate the stroke response and obtain an urgent noncontrast head CT",
      "Give aspirin immediately before imaging",
      "Lower the blood pressure rapidly to a normal value without an order",
      "Offer food and fluids to assess swallowing"
    ],
    "correctAnswer": "Activate the stroke response and obtain an urgent noncontrast head CT",
    "rationale": "Acute stroke is time-sensitive. The stroke pathway and urgent brain imaging help distinguish ischemic from hemorrhagic stroke and guide reperfusion eligibility. Aspirin or thrombolytic therapy should not be given before hemorrhage is excluded and eligibility is assessed.",
    "optionRationales": {
      "Activate the stroke response and obtain an urgent noncontrast head CT": "Correct. Rapid imaging is needed to identify hemorrhage and guide treatment.",
      "Give aspirin immediately before imaging": "Incorrect. Antiplatelet therapy is generally withheld until intracranial hemorrhage is excluded.",
      "Lower the blood pressure rapidly to a normal value without an order": "Incorrect. Rapid uncontrolled reduction can worsen cerebral perfusion; follow stroke-specific orders and thresholds.",
      "Offer food and fluids to assess swallowing": "Incorrect. Keep the client NPO until swallowing safety is assessed."
    },
    "clinicalJudgmentTip": "Record last-known-well time, activate the stroke pathway, and obtain urgent imaging; do not delay for nonessential tasks.",
    "sourceReferences": [
      {
        "title": "Stroke Symptoms and Warning Signs",
        "publisher": "American Stroke Association",
        "url": "https://www.stroke.org/en/about-stroke/stroke-symptoms",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 Guideline for the Early Management of Patients With Acute Ischemic Stroke",
        "publisher": "American Heart Association",
        "url": "https://www.ahajournals.org/journal/str",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Specific reperfusion eligibility and blood-pressure thresholds depend on imaging, time window, contraindications, and current stroke protocol."
    ],
    "metadata": {
      "id": "QR-100325",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "Which action is the priority before a thrombolytic decision is made?",
      "options": [
        "Activate the stroke response and obtain an urgent noncontrast head CT",
        "Give aspirin immediately before imaging",
        "Lower the blood pressure rapidly to a normal value without an order",
        "Offer food and fluids to assess swallowing"
      ],
      "answerKey": "Activate the stroke response and obtain an urgent noncontrast head CT",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Sudden aphasia and unilateral weakness; last known well 45 minutes before arrival."
    },
    "rationales": {
      "overall": "Urgent imaging is necessary to distinguish ischemic from hemorrhagic stroke before reperfusion or antithrombotic treatment.",
      "options": {},
      "clinicalJudgmentTip": "Protect the time window: establish last-known-well and activate the stroke response immediately."
    }
  },
  {
    "id": "QR-100326",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Diabetic ketoacidosis and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Trend",
    "question": "A client with type 1 diabetes is admitted with diabetic ketoacidosis. Review the evolving assessment and answer the stage-specific questions.",
    "trendData": {
      "stages": [
        {
          "time": "Arrival",
          "situation": "The client is dehydrated, nauseated, and breathing deeply. Glucose is 520 mg/dL, potassium 5.4 mEq/L, bicarbonate 10 mEq/L, and blood pressure 92/58 mm Hg.",
          "question": "Which initial intervention is generally prioritized while the team evaluates the client?",
          "options": [
            "Begin prescribed isotonic IV fluid resuscitation",
            "Administer long-acting subcutaneous insulin and discharge",
            "Restrict all fluids",
            "Give potassium immediately without reviewing renal function or ECG"
          ],
          "correctAnswer": "Begin prescribed isotonic IV fluid resuscitation",
          "rationale": "Initial fluid resuscitation supports circulation and perfusion. Insulin and potassium decisions follow assessment of potassium, renal function, and the treatment protocol."
        },
        {
          "time": "2 hours after treatment begins",
          "situation": "After IV fluids, blood pressure is 108/66 mm Hg. The insulin infusion is prescribed. Potassium is now 3.2 mEq/L.",
          "question": "Which action should the nurse anticipate before continuing insulin therapy?",
          "options": [
            "Hold insulin temporarily and notify the provider for potassium replacement per protocol",
            "Increase the insulin infusion to normalize glucose faster",
            "Administer sodium bicarbonate routinely",
            "Stop cardiac monitoring"
          ],
          "correctAnswer": "Hold insulin temporarily and notify the provider for potassium replacement per protocol",
          "rationale": "Insulin drives potassium into cells and can worsen hypokalemia. With potassium below the usual safe threshold for insulin initiation, replace potassium and follow protocol before insulin proceeds."
        },
        {
          "time": "Later during treatment",
          "situation": "Glucose has fallen to 230 mg/dL, but bicarbonate remains 14 mEq/L and the anion gap remains elevated. The client is more alert.",
          "question": "Which interpretation should guide ongoing care?",
          "options": [
            "Continue DKA treatment and add dextrose as prescribed while monitoring closure of the anion gap",
            "Stop insulin because glucose is below 250 mg/dL",
            "Declare DKA resolved based on glucose alone",
            "Give an oral carbohydrate meal and discontinue IV therapy"
          ],
          "correctAnswer": "Continue DKA treatment and add dextrose as prescribed while monitoring closure of the anion gap",
          "rationale": "Glucose may improve before ketoacidosis resolves. Insulin is continued with dextrose as needed to clear ketones and close the anion gap, guided by serial labs and protocol."
        }
      ]
    },
    "correctAnswer": [
      "Begin prescribed isotonic IV fluid resuscitation",
      "Hold insulin temporarily and notify the provider for potassium replacement per protocol",
      "Continue DKA treatment and add dextrose as prescribed while monitoring closure of the anion gap"
    ],
    "rationale": "DKA treatment requires coordinated fluid replacement, insulin, potassium monitoring/replacement, and serial assessment. Insulin can precipitate dangerous hypokalemia; glucose improvement alone does not mean ketoacidosis has resolved.",
    "clinicalJudgmentTip": "Follow potassium before and during insulin therapy; track resolution of ketoacidosis, not glucose alone.",
    "sourceReferences": [
      {
        "title": "Diabetic Ketoacidosis",
        "publisher": "National Institute of Diabetes and Digestive and Kidney Diseases",
        "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/diabetes-complications/diabetic-ketoacidosis-dka",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Hyperglycemic Crises in Adults With Diabetes: A Consensus Report",
        "publisher": "Diabetes Care",
        "url": "https://diabetesjournals.org/care",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Potassium thresholds, fluid choice, and insulin timing must follow current institutional DKA protocols and the client's cardiac/renal status."
    ],
    "metadata": {
      "id": "QR-100326",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stages": [
        {
          "time": "Arrival",
          "situation": "The client is dehydrated, nauseated, and breathing deeply. Glucose is 520 mg/dL, potassium 5.4 mEq/L, bicarbonate 10 mEq/L, and blood pressure 92/58 mm Hg.",
          "question": "Which initial intervention is generally prioritized while the team evaluates the client?",
          "options": [
            "Begin prescribed isotonic IV fluid resuscitation",
            "Administer long-acting subcutaneous insulin and discharge",
            "Restrict all fluids",
            "Give potassium immediately without reviewing renal function or ECG"
          ],
          "correctAnswer": "Begin prescribed isotonic IV fluid resuscitation",
          "rationale": "Initial fluid resuscitation supports circulation and perfusion. Insulin and potassium decisions follow assessment of potassium, renal function, and the treatment protocol."
        },
        {
          "time": "2 hours after treatment begins",
          "situation": "After IV fluids, blood pressure is 108/66 mm Hg. The insulin infusion is prescribed. Potassium is now 3.2 mEq/L.",
          "question": "Which action should the nurse anticipate before continuing insulin therapy?",
          "options": [
            "Hold insulin temporarily and notify the provider for potassium replacement per protocol",
            "Increase the insulin infusion to normalize glucose faster",
            "Administer sodium bicarbonate routinely",
            "Stop cardiac monitoring"
          ],
          "correctAnswer": "Hold insulin temporarily and notify the provider for potassium replacement per protocol",
          "rationale": "Insulin drives potassium into cells and can worsen hypokalemia. With potassium below the usual safe threshold for insulin initiation, replace potassium and follow protocol before insulin proceeds."
        },
        {
          "time": "Later during treatment",
          "situation": "Glucose has fallen to 230 mg/dL, but bicarbonate remains 14 mEq/L and the anion gap remains elevated. The client is more alert.",
          "question": "Which interpretation should guide ongoing care?",
          "options": [
            "Continue DKA treatment and add dextrose as prescribed while monitoring closure of the anion gap",
            "Stop insulin because glucose is below 250 mg/dL",
            "Declare DKA resolved based on glucose alone",
            "Give an oral carbohydrate meal and discontinue IV therapy"
          ],
          "correctAnswer": "Continue DKA treatment and add dextrose as prescribed while monitoring closure of the anion gap",
          "rationale": "Glucose may improve before ketoacidosis resolves. Insulin is continued with dextrose as needed to clear ketones and close the anion gap, guided by serial labs and protocol."
        }
      ],
      "answerKey": [
        "Begin prescribed isotonic IV fluid resuscitation",
        "Hold insulin temporarily and notify the provider for potassium replacement per protocol",
        "Continue DKA treatment and add dextrose as prescribed while monitoring closure of the anion gap"
      ],
      "scoring": {
        "method": "stage-level"
      }
    },
    "stimulus": {
      "clinicalContext": "Three chronological DKA reassessments with glucose, potassium, bicarbonate, perfusion, and treatment response."
    },
    "rationales": {
      "overall": "DKA treatment must address volume depletion and ketosis while preventing insulin-associated hypokalemia.",
      "options": {},
      "clinicalJudgmentTip": "Do not stop insulin solely because glucose has improved; monitor the anion gap and acid-base status."
    }
  },
  {
    "id": "QR-100327",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Blood transfusion reaction",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Bowtie",
    "question": "Ten minutes after a packed red blood cell transfusion begins, a client develops chills, flank pain, dyspnea, and hypotension. Complete the bowtie by selecting the likely complication, two priority actions, and two parameters to monitor.",
    "bowtieData": {
      "conditions": [
        "Acute hemolytic transfusion reaction",
        "Mild expected temperature variation",
        "Iron-deficiency anemia"
      ],
      "actions": [
        "Stop the transfusion immediately",
        "Maintain IV access with normal saline using new tubing per policy",
        "Increase the transfusion rate",
        "Discard the blood bag before notifying the blood bank"
      ],
      "monitoring": [
        "Vital signs and respiratory status",
        "Urine output and evidence of hemoglobinuria",
        "Daily weight only",
        "Visual acuity"
      ]
    },
    "correctAnswer": {
      "condition": "Acute hemolytic transfusion reaction",
      "actions": [
        "Stop the transfusion immediately",
        "Maintain IV access with normal saline using new tubing per policy"
      ],
      "monitoring": [
        "Vital signs and respiratory status",
        "Urine output and evidence of hemoglobinuria"
      ]
    },
    "rationale": "The abrupt onset of chills, flank pain, dyspnea, and hypotension shortly after transfusion is concerning for an acute hemolytic reaction. Stop the transfusion, keep the vein open with normal saline using new tubing according to policy, assess and support the client, notify the provider and blood bank, and follow specimen/product return procedures.",
    "clinicalJudgmentTip": "For a suspected transfusion reaction, stop the blood first; do not restart the unit.",
    "sourceReferences": [
      {
        "title": "Blood Transfusion",
        "publisher": "AABB",
        "url": "https://www.aabb.org/",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Blood transfusion reactions",
        "publisher": "NHS Blood and Transplant",
        "url": "https://www.transfusionguidelines.org/transfusion-handbook",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Follow local transfusion-reaction policy for tubing, specimens, documentation, and return of the blood component."
    ],
    "metadata": {
      "id": "QR-100327",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "conditionOptions": [
        "Acute hemolytic transfusion reaction",
        "Mild expected temperature variation",
        "Iron-deficiency anemia"
      ],
      "conditionAnswer": "Acute hemolytic transfusion reaction",
      "actionOptions": [
        "Stop the transfusion immediately",
        "Maintain IV access with normal saline using new tubing per policy",
        "Increase the transfusion rate",
        "Discard the blood bag before notifying the blood bank"
      ],
      "actionAnswers": [
        "Stop the transfusion immediately",
        "Maintain IV access with normal saline using new tubing per policy"
      ],
      "monitorOptions": [
        "Vital signs and respiratory status",
        "Urine output and evidence of hemoglobinuria",
        "Daily weight only",
        "Visual acuity"
      ],
      "monitorAnswers": [
        "Vital signs and respiratory status",
        "Urine output and evidence of hemoglobinuria"
      ],
      "scoring": {
        "method": "partial-credit"
      }
    },
    "stimulus": {
      "clinicalContext": "Acute symptoms 10 minutes after packed red blood cell transfusion begins."
    },
    "rationales": {
      "overall": "Stop the transfusion immediately and initiate the transfusion-reaction protocol.",
      "options": {},
      "clinicalJudgmentTip": "Maintain IV access without infusing more blood; monitor for shock, respiratory compromise, and renal injury."
    }
  },
  {
    "id": "QR-100328",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Burn injury fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 3,
    "type": "Numeric Entry",
    "question": "An adult weighing 70 kg has a 30% total body surface area burn. Using the Parkland formula (4 mL × body weight in kg × %TBSA), calculate the total lactated Ringer's volume for the first 24 hours. Enter the volume in mL.",
    "numericEntry": {
      "acceptedAnswers": [
        8400
      ],
      "tolerance": 0,
      "unit": "mL",
      "rounding": "nearest whole mL"
    },
    "correctAnswer": 8400,
    "rationale": "4 mL × 70 kg × 30 = 8,400 mL over the first 24 hours. Half (4,200 mL) is generally administered in the first 8 hours from the time of burn, and the remaining half over the next 16 hours. Actual resuscitation is titrated to clinical response and protocol.",
    "clinicalJudgmentTip": "The first 8-hour period begins at the time of injury, not at hospital arrival; titrate fluids to perfusion and urine output.",
    "sourceReferences": [
      {
        "title": "Burn Patient Referral Guidelines",
        "publisher": "American Burn Association",
        "url": "https://www.ameriburn.org/resources/burnreferral",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Burns",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/injuries-poisoning/burns/burns",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "The Parkland formula is an initial estimate; fluid rates must be adjusted to patient response and burn-center protocol."
    ],
    "metadata": {
      "id": "QR-100328",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 3
    },
    "interaction": {
      "type": "Numeric Entry",
      "stem": "Enter the total lactated Ringer's volume for the first 24 hours in mL.",
      "acceptedAnswers": [
        8400
      ],
      "tolerance": 0,
      "unit": "mL",
      "answerKey": 8400,
      "scoring": {
        "method": "numeric-tolerance"
      }
    },
    "stimulus": {
      "clinicalContext": "Adult, 70 kg, 30% TBSA burn; use the specified Parkland estimate."
    },
    "rationales": {
      "overall": "4 × 70 × 30 = 8,400 mL for the first 24 hours. This is an estimate that requires titration.",
      "options": {},
      "clinicalJudgmentTip": "Calculate from the time of injury and reassess perfusion frequently."
    },
    "correctNumericAnswer": 8400,
    "numericRange": {
      "min": 8400,
      "max": 8400
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch8={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
