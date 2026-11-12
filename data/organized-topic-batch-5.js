/* Organized NCLEX topic batch 5: 20 original adult-health questions.
 * Includes Select N, Cloze, Bowtie, multiple-response, extended multiple-response, and numeric entry.
 * Automated checks do not certify clinical accuracy.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100261",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Anemia and transfusion reactions",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client receiving packed red blood cells develops chills, fever, and new back pain. What should the nurse do first?",
    "options": [
      "Stop the transfusion immediately",
      "Slow the transfusion rate",
      "Give the next unit",
      "Reassess in 30 minutes"
    ],
    "correctAnswer": "Stop the transfusion immediately",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Stop the transfusion immediately": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Slow the transfusion rate": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Give the next unit": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Reassess in 30 minutes": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Anemia and transfusion reactions",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.redcrossblood.org/biomedical-services/blood-diagnostic-testing/blood-transfusion-safety.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100261",
      "category": "Adult Health",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client receiving packed red blood cells develops chills, fever, and new back pain. What should the nurse do first?",
      "options": [
        "Stop the transfusion immediately",
        "Slow the transfusion rate",
        "Give the next unit",
        "Reassess in 30 minutes"
      ],
      "answerKey": "Stop the transfusion immediately",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving packed red blood cells develops chills, fever, and new back pain. What should the nurse do first?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Stop the transfusion immediately": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Slow the transfusion rate": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Give the next unit": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Reassess in 30 minutes": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100262",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Neutropenia precautions",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client receiving chemotherapy has an absolute neutrophil count of 400/mm³ and a temperature of 38.3°C (100.9°F). What is the priority?",
    "options": [
      "Notify the oncology team immediately and initiate the febrile-neutropenia pathway",
      "Give an antipyretic and wait until morning",
      "Obtain a rectal temperature",
      "Place fresh flowers in the room"
    ],
    "correctAnswer": "Notify the oncology team immediately and initiate the febrile-neutropenia pathway",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Notify the oncology team immediately and initiate the febrile-neutropenia pathway": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Give an antipyretic and wait until morning": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Obtain a rectal temperature": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Place fresh flowers in the room": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Neutropenia precautions",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/infection",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100262",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client receiving chemotherapy has an absolute neutrophil count of 400/mm³ and a temperature of 38.3°C (100.9°F). What is the priority?",
      "options": [
        "Notify the oncology team immediately and initiate the febrile-neutropenia pathway",
        "Give an antipyretic and wait until morning",
        "Obtain a rectal temperature",
        "Place fresh flowers in the room"
      ],
      "answerKey": "Notify the oncology team immediately and initiate the febrile-neutropenia pathway",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving chemotherapy has an absolute neutrophil count of 400/mm³ and a temperature of 38.3°C (100.9°F). What is the priority?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Notify the oncology team immediately and initiate the febrile-neutropenia pathway": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Give an antipyretic and wait until morning": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Obtain a rectal temperature": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Place fresh flowers in the room": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100263",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Cancer complications",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client develops muscle cramps and dysrhythmias shortly after chemotherapy. Laboratory results show hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia. Which complication should the nurse suspect?",
    "options": [
      "Tumor lysis syndrome",
      "Superior vena cava syndrome",
      "SIADH",
      "Disseminated intravascular coagulation"
    ],
    "correctAnswer": "Tumor lysis syndrome",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Tumor lysis syndrome": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Superior vena cava syndrome": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "SIADH": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Disseminated intravascular coagulation": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Cancer complications",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/tumor-lysis-syndrome",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100263",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client develops muscle cramps and dysrhythmias shortly after chemotherapy. Laboratory results show hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia. Which complication should the nurse suspect?",
      "options": [
        "Tumor lysis syndrome",
        "Superior vena cava syndrome",
        "SIADH",
        "Disseminated intravascular coagulation"
      ],
      "answerKey": "Tumor lysis syndrome",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client develops muscle cramps and dysrhythmias shortly after chemotherapy. Laboratory results show hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Tumor lysis syndrome": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Superior vena cava syndrome": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "SIADH": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Disseminated intravascular coagulation": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100264",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "DVT and pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Select N",
    "question": "A postoperative client develops unilateral calf swelling and tenderness. Which THREE actions are appropriate? Select 3.",
    "options": [
      "Notify the provider and arrange prompt evaluation",
      "Assess for new dyspnea or chest pain",
      "Avoid massaging the affected leg",
      "Massage the calf to improve circulation",
      "Encourage vigorous ambulation before evaluation"
    ],
    "correctAnswer": [
      "Notify the provider and arrange prompt evaluation",
      "Assess for new dyspnea or chest pain",
      "Avoid massaging the affected leg"
    ],
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Notify the provider and arrange prompt evaluation": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Assess for new dyspnea or chest pain": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Avoid massaging the affected leg": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Massage the calf to improve circulation": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Encourage vigorous ambulation before evaluation": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for DVT and pulmonary embolism",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cdc.gov/blood-clots/about/index.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100264",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "A postoperative client develops unilateral calf swelling and tenderness. Which THREE actions are appropriate? Select 3.",
      "options": [
        "Notify the provider and arrange prompt evaluation",
        "Assess for new dyspnea or chest pain",
        "Avoid massaging the affected leg",
        "Massage the calf to improve circulation",
        "Encourage vigorous ambulation before evaluation"
      ],
      "answerKey": [
        "Notify the provider and arrange prompt evaluation",
        "Assess for new dyspnea or chest pain",
        "Avoid massaging the affected leg"
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "stimulus": {
      "clinicalContext": "A postoperative client develops unilateral calf swelling and tenderness. Which THREE actions are appropriate? Select 3."
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Notify the provider and arrange prompt evaluation": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Assess for new dyspnea or chest pain": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Avoid massaging the affected leg": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Massage the calf to improve circulation": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Encourage vigorous ambulation before evaluation": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100265",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Sepsis and septic shock",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Cloze (Drop-down)",
    "question": "Complete the sentence using the appropriate sepsis-care terms.",
    "options": [],
    "correctAnswer": "",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "cultures": "Blood cultures help identify the pathogen when obtained promptly without delaying antimicrobials.",
      "lactate": "Lactate can help assess tissue hypoperfusion and response to resuscitation.",
      "glucose": "Glucose is important but is not the blanked sepsis perfusion marker.",
      "calcium": "Calcium is not the intended perfusion marker.",
      "bilirubin": "Bilirubin may assess organ function but is not the intended perfusion marker."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Sepsis and septic shock",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cdc.gov/sepsis/hcp/clinical-care/",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100265",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Cloze (Drop-down)",
      "stem": "Complete the sentence using the appropriate sepsis-care terms.",
      "options": [],
      "answerKey": {
        "1": "cultures",
        "2": "lactate"
      },
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Complete the statement: When sepsis is suspected, obtain ordered blood {{1}}, measure serum {{2}}, and administer prescribed antimicrobials promptly without avoidable delay."
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "cultures": "Blood cultures help identify the pathogen when obtained promptly without delaying antimicrobials.",
        "lactate": "Lactate can help assess tissue hypoperfusion and response to resuscitation.",
        "glucose": "Glucose is important but is not the blanked sepsis perfusion marker.",
        "calcium": "Calcium is not the intended perfusion marker.",
        "bilirubin": "Bilirubin may assess organ function but is not the intended perfusion marker."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    },
    "instruction": "Complete the sentence using the appropriate sepsis-care terms.",
    "clozeTemplate": "When sepsis is suspected, obtain ordered blood {{1}}, measure serum {{2}}, and administer prescribed antimicrobials promptly without avoidable delay.",
    "dropdowns": [
      {
        "id": "1",
        "options": [
          "cultures",
          "glucose",
          "lipids"
        ],
        "correct": "cultures"
      },
      {
        "id": "2",
        "options": [
          "lactate",
          "calcium",
          "bilirubin"
        ],
        "correct": "lactate"
      }
    ],
    "correctAnswers": {
      "1": "cultures",
      "2": "lactate"
    }
  },
  {
    "id": "QR-100266",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "HIV and opportunistic infection",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with advanced HIV has a CD4 count of 140 cells/mm³ and progressive dyspnea with a dry cough. Which opportunistic infection should the nurse suspect?",
    "options": [
      "Pneumocystis jirovecii pneumonia",
      "Acute otitis media",
      "Uncomplicated cystitis",
      "Localized tinea pedis"
    ],
    "correctAnswer": "Pneumocystis jirovecii pneumonia",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Pneumocystis jirovecii pneumonia": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Acute otitis media": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Uncomplicated cystitis": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Localized tinea pedis": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for HIV and opportunistic infection",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://clinicalinfo.hiv.gov/en/guidelines",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100266",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with advanced HIV has a CD4 count of 140 cells/mm³ and progressive dyspnea with a dry cough. Which opportunistic infection should the nurse suspect?",
      "options": [
        "Pneumocystis jirovecii pneumonia",
        "Acute otitis media",
        "Uncomplicated cystitis",
        "Localized tinea pedis"
      ],
      "answerKey": "Pneumocystis jirovecii pneumonia",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with advanced HIV has a CD4 count of 140 cells/mm³ and progressive dyspnea with a dry cough. Which opportunistic infection should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Pneumocystis jirovecii pneumonia": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Acute otitis media": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Uncomplicated cystitis": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Localized tinea pedis": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100267",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Burns and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "A client with extensive burns is hypotensive and has decreasing urine output. Complete the bowtie: identify the most likely problem, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Burn-related hypovolemic shock",
        "Isolated contact dermatitis",
        "Uncomplicated muscle strain"
      ],
      "actions": [
        "Begin prescribed isotonic fluid resuscitation",
        "Assess airway and prepare for early airway support",
        "Restrict IV fluids",
        "Delay assessment until blisters resolve"
      ],
      "monitoring": [
        "Urine output and hemodynamic response",
        "Serum potassium and cardiac rhythm"
      ]
    },
    "correctAnswer": {
      "condition": "Burn-related hypovolemic shock",
      "actions": [
        "Begin prescribed isotonic fluid resuscitation",
        "Assess airway and prepare for early airway support"
      ],
      "monitoring": [
        "Urine output and hemodynamic response",
        "Serum potassium and cardiac rhythm"
      ]
    },
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Burn-related hypovolemic shock": "This option is evaluated against the priority risks in major burn injury.",
      "Isolated contact dermatitis": "This option is evaluated against the priority risks in major burn injury.",
      "Uncomplicated muscle strain": "This option is evaluated against the priority risks in major burn injury.",
      "Begin prescribed isotonic fluid resuscitation": "This option is evaluated against the priority risks in major burn injury.",
      "Assess airway and prepare for early airway support": "This option is evaluated against the priority risks in major burn injury.",
      "Restrict IV fluids": "This option is evaluated against the priority risks in major burn injury.",
      "Delay assessment until blisters resolve": "This option is evaluated against the priority risks in major burn injury.",
      "Urine output and hemodynamic response": "This option is evaluated against the priority risks in major burn injury.",
      "Serum potassium and cardiac rhythm": "This option is evaluated against the priority risks in major burn injury."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Burns and fluid resuscitation",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.ameriburn.org/resources/burnreferral",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100267",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "A client with extensive burns is hypotensive and has decreasing urine output. Complete the bowtie: identify the most likely problem, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Burn-related hypovolemic shock",
          "Isolated contact dermatitis",
          "Uncomplicated muscle strain"
        ],
        "actions": [
          "Begin prescribed isotonic fluid resuscitation",
          "Assess airway and prepare for early airway support",
          "Restrict IV fluids",
          "Delay assessment until blisters resolve"
        ],
        "monitoring": [
          "Urine output and hemodynamic response",
          "Serum potassium and cardiac rhythm"
        ]
      },
      "answerKey": {
        "condition": "Burn-related hypovolemic shock",
        "actions": [
          "Begin prescribed isotonic fluid resuscitation",
          "Assess airway and prepare for early airway support"
        ],
        "monitoring": [
          "Urine output and hemodynamic response",
          "Serum potassium and cardiac rhythm"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with extensive burns is hypotensive and has decreasing urine output. Complete the bowtie: identify the most likely problem, two priority actions, and two parameters to monitor."
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Burn-related hypovolemic shock": "This option is evaluated against the priority risks in major burn injury.",
        "Isolated contact dermatitis": "This option is evaluated against the priority risks in major burn injury.",
        "Uncomplicated muscle strain": "This option is evaluated against the priority risks in major burn injury.",
        "Begin prescribed isotonic fluid resuscitation": "This option is evaluated against the priority risks in major burn injury.",
        "Assess airway and prepare for early airway support": "This option is evaluated against the priority risks in major burn injury.",
        "Restrict IV fluids": "This option is evaluated against the priority risks in major burn injury.",
        "Delay assessment until blisters resolve": "This option is evaluated against the priority risks in major burn injury.",
        "Urine output and hemodynamic response": "This option is evaluated against the priority risks in major burn injury.",
        "Serum potassium and cardiac rhythm": "This option is evaluated against the priority risks in major burn injury."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    },
    "bowtieData": {
      "conditions": [
        "Burn-related hypovolemic shock",
        "Isolated contact dermatitis",
        "Uncomplicated muscle strain"
      ],
      "actions": [
        "Begin prescribed isotonic fluid resuscitation",
        "Assess airway and prepare for early airway support",
        "Restrict IV fluids",
        "Delay assessment until blisters resolve"
      ],
      "monitoring": [
        "Urine output and hemodynamic response",
        "Serum potassium and cardiac rhythm"
      ]
    },
    "correctAnswers": {
      "condition": "Burn-related hypovolemic shock",
      "actions": [
        "Begin prescribed isotonic fluid resuscitation",
        "Assess airway and prepare for early airway support"
      ],
      "monitoring": [
        "Urine output and hemodynamic response",
        "Serum potassium and cardiac rhythm"
      ]
    }
  },
  {
    "id": "QR-100268",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Pressure injury prevention",
    "clientNeeds": "Basic Care and Comfort",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which interventions help prevent pressure injuries in an immobile client?",
    "options": [
      "Reposition according to individualized risk and skin assessment",
      "Offload the heels and protect bony prominences",
      "Manage moisture and incontinence promptly",
      "Massage reddened bony prominences vigorously",
      "Assess nutrition and support adequate intake"
    ],
    "correctAnswer": [
      "Reposition according to individualized risk and skin assessment",
      "Offload the heels and protect bony prominences",
      "Manage moisture and incontinence promptly",
      "Assess nutrition and support adequate intake"
    ],
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Reposition according to individualized risk and skin assessment": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Offload the heels and protect bony prominences": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Manage moisture and incontinence promptly": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Massage reddened bony prominences vigorously": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Assess nutrition and support adequate intake": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Pressure injury prevention",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.ahrq.gov/patient-safety/settings/hospital/resource/pressureinjury/index.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100268",
      "category": "Adult Health",
      "clientNeeds": "Basic Care and Comfort",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which interventions help prevent pressure injuries in an immobile client?",
      "options": [
        "Reposition according to individualized risk and skin assessment",
        "Offload the heels and protect bony prominences",
        "Manage moisture and incontinence promptly",
        "Massage reddened bony prominences vigorously",
        "Assess nutrition and support adequate intake"
      ],
      "answerKey": [
        "Reposition according to individualized risk and skin assessment",
        "Offload the heels and protect bony prominences",
        "Manage moisture and incontinence promptly",
        "Assess nutrition and support adequate intake"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "Which interventions help prevent pressure injuries in an immobile client?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Reposition according to individualized risk and skin assessment": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Offload the heels and protect bony prominences": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Manage moisture and incontinence promptly": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Massage reddened bony prominences vigorously": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Assess nutrition and support adequate intake": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100269",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Valvular heart disease",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with mitral stenosis reports worsening exertional dyspnea and orthopnea. Which complication should the nurse assess for?",
    "options": [
      "Pulmonary congestion and atrial fibrillation",
      "Acute appendicitis",
      "Nephrotic syndrome",
      "Hypoglycemia"
    ],
    "correctAnswer": "Pulmonary congestion and atrial fibrillation",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Pulmonary congestion and atrial fibrillation": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Acute appendicitis": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Nephrotic syndrome": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Hypoglycemia": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Valvular heart disease",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/heart-valve-diseases",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100269",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with mitral stenosis reports worsening exertional dyspnea and orthopnea. Which complication should the nurse assess for?",
      "options": [
        "Pulmonary congestion and atrial fibrillation",
        "Acute appendicitis",
        "Nephrotic syndrome",
        "Hypoglycemia"
      ],
      "answerKey": "Pulmonary congestion and atrial fibrillation",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with mitral stenosis reports worsening exertional dyspnea and orthopnea. Which complication should the nurse assess for?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Pulmonary congestion and atrial fibrillation": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Acute appendicitis": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Nephrotic syndrome": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Hypoglycemia": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100270",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Infective endocarditis",
    "clientNeeds": "Reduction of Risk Potential",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A hemodynamically stable client is suspected of having infective endocarditis. Which action should the nurse anticipate before the first antibiotic dose when feasible?",
    "options": [
      "Obtain ordered blood cultures from separate sites",
      "Administer antibiotics before obtaining any cultures",
      "Restrict all oral fluids",
      "Begin vigorous exercise"
    ],
    "correctAnswer": "Obtain ordered blood cultures from separate sites",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Obtain ordered blood cultures from separate sites": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Administer antibiotics before obtaining any cultures": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Restrict all oral fluids": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Begin vigorous exercise": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Infective endocarditis",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cdc.gov/heart-disease/about/endocarditis.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100270",
      "category": "Adult Health",
      "clientNeeds": "Reduction of Risk Potential",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A hemodynamically stable client is suspected of having infective endocarditis. Which action should the nurse anticipate before the first antibiotic dose when feasible?",
      "options": [
        "Obtain ordered blood cultures from separate sites",
        "Administer antibiotics before obtaining any cultures",
        "Restrict all oral fluids",
        "Begin vigorous exercise"
      ],
      "answerKey": "Obtain ordered blood cultures from separate sites",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A hemodynamically stable client is suspected of having infective endocarditis. Which action should the nurse anticipate before the first antibiotic dose when feasible?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Obtain ordered blood cultures from separate sites": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Administer antibiotics before obtaining any cultures": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Restrict all oral fluids": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Begin vigorous exercise": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100271",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Pericarditis and cardiac tamponade",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with pericardial effusion develops hypotension, jugular venous distention, and muffled heart sounds. Which complication should the nurse suspect?",
    "options": [
      "Cardiac tamponade",
      "Stable chronic pericarditis",
      "Uncomplicated pleural effusion",
      "Mitral valve prolapse"
    ],
    "correctAnswer": "Cardiac tamponade",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Cardiac tamponade": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Stable chronic pericarditis": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Uncomplicated pleural effusion": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Mitral valve prolapse": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Pericarditis and cardiac tamponade",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000194.htm",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100271",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with pericardial effusion develops hypotension, jugular venous distention, and muffled heart sounds. Which complication should the nurse suspect?",
      "options": [
        "Cardiac tamponade",
        "Stable chronic pericarditis",
        "Uncomplicated pleural effusion",
        "Mitral valve prolapse"
      ],
      "answerKey": "Cardiac tamponade",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with pericardial effusion develops hypotension, jugular venous distention, and muffled heart sounds. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Cardiac tamponade": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Stable chronic pericarditis": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Uncomplicated pleural effusion": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Mitral valve prolapse": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100272",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Peripheral arterial disease and chronic venous insufficiency",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client has cool feet, diminished pedal pulses, dependent rubor, and leg pain that worsens with elevation. Which condition is most consistent with these findings?",
    "options": [
      "Peripheral arterial disease",
      "Chronic venous insufficiency",
      "Lymphedema",
      "Cellulitis"
    ],
    "correctAnswer": "Peripheral arterial disease",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Peripheral arterial disease": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Chronic venous insufficiency": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Lymphedema": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Cellulitis": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Peripheral arterial disease and chronic venous insufficiency",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/peripheral-artery-disease",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100272",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client has cool feet, diminished pedal pulses, dependent rubor, and leg pain that worsens with elevation. Which condition is most consistent with these findings?",
      "options": [
        "Peripheral arterial disease",
        "Chronic venous insufficiency",
        "Lymphedema",
        "Cellulitis"
      ],
      "answerKey": "Peripheral arterial disease",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client has cool feet, diminished pedal pulses, dependent rubor, and leg pain that worsens with elevation. Which condition is most consistent with these findings?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Peripheral arterial disease": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Chronic venous insufficiency": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Lymphedema": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Cellulitis": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100273",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Aortic aneurysm and dissection",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client reports sudden severe tearing chest pain radiating to the back. Blood pressure differs significantly between arms. What is the priority response?",
    "options": [
      "Activate emergency evaluation for possible aortic dissection",
      "Arrange routine outpatient follow-up",
      "Encourage ambulation",
      "Apply heat to the chest"
    ],
    "correctAnswer": "Activate emergency evaluation for possible aortic dissection",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Activate emergency evaluation for possible aortic dissection": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Arrange routine outpatient follow-up": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Encourage ambulation": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Apply heat to the chest": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Aortic aneurysm and dissection",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/aortic-aneurysm",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100273",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client reports sudden severe tearing chest pain radiating to the back. Blood pressure differs significantly between arms. What is the priority response?",
      "options": [
        "Activate emergency evaluation for possible aortic dissection",
        "Arrange routine outpatient follow-up",
        "Encourage ambulation",
        "Apply heat to the chest"
      ],
      "answerKey": "Activate emergency evaluation for possible aortic dissection",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client reports sudden severe tearing chest pain radiating to the back. Blood pressure differs significantly between arms. What is the priority response?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Activate emergency evaluation for possible aortic dissection": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Arrange routine outpatient follow-up": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Encourage ambulation": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Apply heat to the chest": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100274",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Cardiogenic shock and intra-aortic balloon pump basics",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client after a large myocardial infarction is cool and clammy, hypotensive, confused, and has crackles. Which condition should the nurse suspect?",
    "options": [
      "Cardiogenic shock",
      "Hypovolemic shock from dehydration",
      "Uncomplicated anxiety",
      "Chronic venous insufficiency"
    ],
    "correctAnswer": "Cardiogenic shock",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Cardiogenic shock": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Hypovolemic shock from dehydration": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Uncomplicated anxiety": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Chronic venous insufficiency": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Cardiogenic shock and intra-aortic balloon pump basics",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/heart-failure",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100274",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client after a large myocardial infarction is cool and clammy, hypotensive, confused, and has crackles. Which condition should the nurse suspect?",
      "options": [
        "Cardiogenic shock",
        "Hypovolemic shock from dehydration",
        "Uncomplicated anxiety",
        "Chronic venous insufficiency"
      ],
      "answerKey": "Cardiogenic shock",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client after a large myocardial infarction is cool and clammy, hypotensive, confused, and has crackles. Which condition should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Cardiogenic shock": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Hypovolemic shock from dehydration": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Uncomplicated anxiety": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Chronic venous insufficiency": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100275",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Acute respiratory distress syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with sepsis develops severe hypoxemia despite supplemental oxygen and bilateral pulmonary opacities. Which ventilator strategy should the nurse anticipate?",
    "options": [
      "Lung-protective ventilation with low tidal volumes as prescribed",
      "Routine high tidal volumes to fully expand the lungs",
      "Avoiding PEEP in all cases",
      "Discontinuing oxygen once intubated"
    ],
    "correctAnswer": "Lung-protective ventilation with low tidal volumes as prescribed",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Lung-protective ventilation with low tidal volumes as prescribed": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Routine high tidal volumes to fully expand the lungs": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Avoiding PEEP in all cases": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Discontinuing oxygen once intubated": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Acute respiratory distress syndrome",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/ards",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100275",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with sepsis develops severe hypoxemia despite supplemental oxygen and bilateral pulmonary opacities. Which ventilator strategy should the nurse anticipate?",
      "options": [
        "Lung-protective ventilation with low tidal volumes as prescribed",
        "Routine high tidal volumes to fully expand the lungs",
        "Avoiding PEEP in all cases",
        "Discontinuing oxygen once intubated"
      ],
      "answerKey": "Lung-protective ventilation with low tidal volumes as prescribed",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with sepsis develops severe hypoxemia despite supplemental oxygen and bilateral pulmonary opacities. Which ventilator strategy should the nurse anticipate?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Lung-protective ventilation with low tidal volumes as prescribed": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Routine high tidal volumes to fully expand the lungs": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Avoiding PEEP in all cases": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Discontinuing oxygen once intubated": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100276",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Mechanical ventilation and alarm priorities",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Numeric Entry",
    "question": "A client has a predicted body weight of 70 kg and a prescribed low tidal volume of 6 mL/kg. Enter the tidal volume in mL.",
    "options": [],
    "correctAnswer": "420",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "value": "70 kg × 6 mL/kg = 420 mL."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Mechanical ventilation and alarm priorities",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/ards",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100276",
      "category": "Adult Health",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Numeric Entry",
      "stem": "A client has a predicted body weight of 70 kg and a prescribed low tidal volume of 6 mL/kg. Enter the tidal volume in mL.",
      "options": [],
      "answerKey": 420,
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client has a predicted body weight of 70 kg and a prescribed low tidal volume of 6 mL/kg. Enter the tidal volume in mL."
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "value": "70 kg × 6 mL/kg = 420 mL."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    },
    "correctNumericAnswer": 420,
    "numericAnswer": 420,
    "unit": "mL"
  },
  {
    "id": "QR-100277",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Tracheostomy care and complications",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with a tracheostomy becomes acutely distressed and the tube is displaced. What should the nurse do first?",
    "options": [
      "Call for emergency assistance and provide oxygen while following the tracheostomy emergency protocol",
      "Leave the client to search for supplies",
      "Force the tube back without assessing the tract",
      "Give oral fluids"
    ],
    "correctAnswer": "Call for emergency assistance and provide oxygen while following the tracheostomy emergency protocol",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Call for emergency assistance and provide oxygen while following the tracheostomy emergency protocol": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Leave the client to search for supplies": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Force the tube back without assessing the tract": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Give oral fluids": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Tracheostomy care and complications",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/002955.htm",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100277",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with a tracheostomy becomes acutely distressed and the tube is displaced. What should the nurse do first?",
      "options": [
        "Call for emergency assistance and provide oxygen while following the tracheostomy emergency protocol",
        "Leave the client to search for supplies",
        "Force the tube back without assessing the tract",
        "Give oral fluids"
      ],
      "answerKey": "Call for emergency assistance and provide oxygen while following the tracheostomy emergency protocol",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with a tracheostomy becomes acutely distressed and the tube is displaced. What should the nurse do first?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Call for emergency assistance and provide oxygen while following the tracheostomy emergency protocol": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Leave the client to search for supplies": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Force the tube back without assessing the tract": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Give oral fluids": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100278",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Chest trauma and flail chest",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "After blunt chest trauma, a client has a segment of the chest wall that moves inward during inspiration and outward during expiration. How should the nurse interpret this finding?",
    "options": [
      "Flail chest with paradoxical chest movement",
      "Simple rib contusion",
      "Tension pneumothorax ruled out",
      "Normal chest wall movement"
    ],
    "correctAnswer": "Flail chest with paradoxical chest movement",
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Flail chest with paradoxical chest movement": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Simple rib contusion": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Tension pneumothorax ruled out": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Normal chest wall movement": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Chest trauma and flail chest",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000029.htm",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100278",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "After blunt chest trauma, a client has a segment of the chest wall that moves inward during inspiration and outward during expiration. How should the nurse interpret this finding?",
      "options": [
        "Flail chest with paradoxical chest movement",
        "Simple rib contusion",
        "Tension pneumothorax ruled out",
        "Normal chest wall movement"
      ],
      "answerKey": "Flail chest with paradoxical chest movement",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "After blunt chest trauma, a client has a segment of the chest wall that moves inward during inspiration and outward during expiration. How should the nurse interpret this finding?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Flail chest with paradoxical chest movement": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Simple rib contusion": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Tension pneumothorax ruled out": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Normal chest wall movement": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100279",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Tuberculosis nursing care",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Extended Multiple Response",
    "question": "A client is admitted with suspected infectious pulmonary tuberculosis. Which interventions are appropriate?",
    "options": [
      "Place the client in an airborne infection isolation room",
      "Use a fit-tested N95 or higher-level respirator when entering",
      "Have the client wear a surgical mask during necessary transport",
      "Use only droplet precautions",
      "Support adherence to the prescribed multidrug regimen"
    ],
    "correctAnswer": [
      "Place the client in an airborne infection isolation room",
      "Use a fit-tested N95 or higher-level respirator when entering",
      "Have the client wear a surgical mask during necessary transport",
      "Support adherence to the prescribed multidrug regimen"
    ],
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Place the client in an airborne infection isolation room": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Use a fit-tested N95 or higher-level respirator when entering": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Have the client wear a surgical mask during necessary transport": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Use only droplet precautions": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Support adherence to the prescribed multidrug regimen": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Tuberculosis nursing care",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cdc.gov/tb/hcp/infection-control/index.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100279",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Multiple Response",
      "stem": "A client is admitted with suspected infectious pulmonary tuberculosis. Which interventions are appropriate?",
      "options": [
        "Place the client in an airborne infection isolation room",
        "Use a fit-tested N95 or higher-level respirator when entering",
        "Have the client wear a surgical mask during necessary transport",
        "Use only droplet precautions",
        "Support adherence to the prescribed multidrug regimen"
      ],
      "answerKey": [
        "Place the client in an airborne infection isolation room",
        "Use a fit-tested N95 or higher-level respirator when entering",
        "Have the client wear a surgical mask during necessary transport",
        "Support adherence to the prescribed multidrug regimen"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client is admitted with suspected infectious pulmonary tuberculosis. Which interventions are appropriate?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Place the client in an airborne infection isolation room": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Use a fit-tested N95 or higher-level respirator when entering": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Have the client wear a surgical mask during necessary transport": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Use only droplet precautions": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Support adherence to the prescribed multidrug regimen": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    }
  },
  {
    "id": "QR-100280",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Pleural effusion and pneumothorax",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Select N",
    "question": "A client with a chest tube suddenly develops severe dyspnea, absent breath sounds on the affected side, and hypotension. Which actions should the nurse take? Select 3.",
    "options": [
      "Activate emergency response",
      "Assess the chest tube system and insertion site without delaying escalation",
      "Provide oxygen and prepare for urgent intervention",
      "Clamp the chest tube routinely",
      "Encourage the client to walk"
    ],
    "correctAnswer": [
      "Activate emergency response",
      "Assess the chest tube system and insertion site without delaying escalation",
      "Provide oxygen and prepare for urgent intervention"
    ],
    "rationale": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
    "optionRationales": {
      "Activate emergency response": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Assess the chest tube system and insertion site without delaying escalation": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Provide oxygen and prepare for urgent intervention": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Clamp the chest tube routinely": "This response is evaluated against the client's current clinical cues and safety priorities.",
      "Encourage the client to walk": "This response is evaluated against the client's current clinical cues and safety priorities."
    },
    "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical guidance for Pleural effusion and pneumothorax",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000087.htm",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "2026 NCLEX-RN Test Plan",
        "publisher": "NCSBN",
        "url": "https://www.nclex.com/test-plans.page",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Original educational item; follow current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100280",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "A client with a chest tube suddenly develops severe dyspnea, absent breath sounds on the affected side, and hypotension. Which actions should the nurse take? Select 3.",
      "options": [
        "Activate emergency response",
        "Assess the chest tube system and insertion site without delaying escalation",
        "Provide oxygen and prepare for urgent intervention",
        "Clamp the chest tube routinely",
        "Encourage the client to walk"
      ],
      "answerKey": [
        "Activate emergency response",
        "Assess the chest tube system and insertion site without delaying escalation",
        "Provide oxygen and prepare for urgent intervention"
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "stimulus": {
      "clinicalContext": "A client with a chest tube suddenly develops severe dyspnea, absent breath sounds on the affected side, and hypotension. Which actions should the nurse take? Select 3."
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Use the assessment data to identify the immediate safety risk and follow current evidence-based protocols.",
      "options": {
        "Activate emergency response": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Assess the chest tube system and insertion site without delaying escalation": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Provide oxygen and prepare for urgent intervention": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Clamp the chest tube routinely": "This response is evaluated against the client's current clinical cues and safety priorities.",
        "Encourage the client to walk": "This response is evaluated against the client's current clinical cues and safety priorities."
      },
      "clinicalJudgmentTip": "Recognize time-sensitive deterioration, prioritize safety, and reassess the response to interventions."
    },
    "selectN": 3,
    "numberToSelect": 3
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch5={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
