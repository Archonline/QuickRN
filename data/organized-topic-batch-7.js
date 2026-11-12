/* Organized NCLEX topic batch 7: 20 original adult-health/oncology questions.
 * Includes multiple-response, cloze, bowtie, and single-choice items.
 * Automated checks do not certify clinical accuracy.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100301",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Pheochromocytoma",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client reports episodic severe headache, palpitations, diaphoresis, and markedly elevated blood pressure. Which condition should the nurse suspect?",
    "options": [
      "Pheochromocytoma",
      "Hypothyroidism",
      "Addison disease",
      "Iron-deficiency anemia"
    ],
    "correctAnswer": "Pheochromocytoma",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Pheochromocytoma": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Hypothyroidism": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Addison disease": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Iron-deficiency anemia": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Pheochromocytoma",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000340.htm",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100301",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client reports episodic severe headache, palpitations, diaphoresis, and markedly elevated blood pressure. Which condition should the nurse suspect?",
      "options": [
        "Pheochromocytoma",
        "Hypothyroidism",
        "Addison disease",
        "Iron-deficiency anemia"
      ],
      "answerKey": "Pheochromocytoma",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client reports episodic severe headache, palpitations, diaphoresis, and markedly elevated blood pressure. Which condition should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Pheochromocytoma": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Hypothyroidism": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Addison disease": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Iron-deficiency anemia": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100302",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hyperparathyroidism and hypoparathyroidism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client develops perioral tingling and muscle spasms after thyroid surgery. Which electrolyte imbalance should the nurse suspect?",
    "options": [
      "Hypocalcemia",
      "Hypernatremia",
      "Hypermagnesemia",
      "Hyperkalemia"
    ],
    "correctAnswer": "Hypocalcemia",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Hypocalcemia": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Hypernatremia": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Hypermagnesemia": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Hyperkalemia": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Hyperparathyroidism and hypoparathyroidism",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000365.htm",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100302",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client develops perioral tingling and muscle spasms after thyroid surgery. Which electrolyte imbalance should the nurse suspect?",
      "options": [
        "Hypocalcemia",
        "Hypernatremia",
        "Hypermagnesemia",
        "Hyperkalemia"
      ],
      "answerKey": "Hypocalcemia",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client develops perioral tingling and muscle spasms after thyroid surgery. Which electrolyte imbalance should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Hypocalcemia": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Hypernatremia": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Hypermagnesemia": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Hyperkalemia": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100303",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Thyroidectomy complications",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "Four hours after thyroidectomy, a client develops stridor and increasing respiratory distress. What is the priority action?",
    "options": [
      "Activate emergency airway response and prepare for immediate airway support",
      "Offer ice chips and reassess in 1 hour",
      "Place the client flat",
      "Encourage coughing against resistance"
    ],
    "correctAnswer": "Activate emergency airway response and prepare for immediate airway support",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Activate emergency airway response and prepare for immediate airway support": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Offer ice chips and reassess in 1 hour": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Place the client flat": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Encourage coughing against resistance": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Thyroidectomy complications",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/002931.htm",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100303",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "Four hours after thyroidectomy, a client develops stridor and increasing respiratory distress. What is the priority action?",
      "options": [
        "Activate emergency airway response and prepare for immediate airway support",
        "Offer ice chips and reassess in 1 hour",
        "Place the client flat",
        "Encourage coughing against resistance"
      ],
      "answerKey": "Activate emergency airway response and prepare for immediate airway support",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Four hours after thyroidectomy, a client develops stridor and increasing respiratory distress. What is the priority action?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Activate emergency airway response and prepare for immediate airway support": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Offer ice chips and reassess in 1 hour": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Place the client flat": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Encourage coughing against resistance": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100304",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Metabolic syndrome and obesity care",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which findings are components of metabolic syndrome that increase cardiovascular risk?",
    "options": [
      "Increased waist circumference",
      "Elevated blood pressure",
      "Elevated fasting glucose",
      "Low HDL cholesterol",
      "Low triglycerides"
    ],
    "correctAnswer": [
      "Increased waist circumference",
      "Elevated blood pressure",
      "Elevated fasting glucose",
      "Low HDL cholesterol"
    ],
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Increased waist circumference": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Elevated blood pressure": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Elevated fasting glucose": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Low HDL cholesterol": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Low triglycerides": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Metabolic syndrome and obesity care",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/metabolic-syndrome",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100304",
      "category": "Adult Health",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which findings are components of metabolic syndrome that increase cardiovascular risk?",
      "options": [
        "Increased waist circumference",
        "Elevated blood pressure",
        "Elevated fasting glucose",
        "Low HDL cholesterol",
        "Low triglycerides"
      ],
      "answerKey": [
        "Increased waist circumference",
        "Elevated blood pressure",
        "Elevated fasting glucose",
        "Low HDL cholesterol"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "Which findings are components of metabolic syndrome that increase cardiovascular risk?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Increased waist circumference": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Elevated blood pressure": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Elevated fasting glucose": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Low HDL cholesterol": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Low triglycerides": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100305",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Disseminated intravascular coagulation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "A client with sepsis develops oozing from IV sites, petechiae, and new organ dysfunction. Which findings are consistent with disseminated intravascular coagulation?",
    "options": [
      "Prolonged clotting times",
      "Decreased fibrinogen",
      "Elevated D-dimer",
      "Thrombocytopenia",
      "Isolated elevated hemoglobin"
    ],
    "correctAnswer": [
      "Prolonged clotting times",
      "Decreased fibrinogen",
      "Elevated D-dimer",
      "Thrombocytopenia"
    ],
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Prolonged clotting times": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Decreased fibrinogen": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Elevated D-dimer": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Thrombocytopenia": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Isolated elevated hemoglobin": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Disseminated intravascular coagulation",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000573.htm",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100305",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client with sepsis develops oozing from IV sites, petechiae, and new organ dysfunction. Which findings are consistent with disseminated intravascular coagulation?",
      "options": [
        "Prolonged clotting times",
        "Decreased fibrinogen",
        "Elevated D-dimer",
        "Thrombocytopenia",
        "Isolated elevated hemoglobin"
      ],
      "answerKey": [
        "Prolonged clotting times",
        "Decreased fibrinogen",
        "Elevated D-dimer",
        "Thrombocytopenia"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with sepsis develops oozing from IV sites, petechiae, and new organ dysfunction. Which findings are consistent with disseminated intravascular coagulation?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Prolonged clotting times": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Decreased fibrinogen": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Elevated D-dimer": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Thrombocytopenia": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Isolated elevated hemoglobin": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100306",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Thrombocytopenia and bleeding precautions",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Cloze (Drop-down)",
    "question": "Complete the bleeding-precaution instruction.",
    "options": {},
    "correctAnswer": "",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "intramuscular": "Intramuscular injections can cause bleeding or hematoma in severe thrombocytopenia.",
      "noninvasive": "Noninvasive procedures do not create the same bleeding risk.",
      "oral": "Oral care may be performed gently using a soft toothbrush."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Thrombocytopenia and bleeding precautions",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000586.htm",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100306",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Cloze (Drop-down)",
      "stem": "Complete the statement: For a client with severe thrombocytopenia, avoid {{1}} procedures and use a soft toothbrush to reduce mucosal trauma.",
      "options": [
        {
          "id": "1",
          "options": [
            "intramuscular",
            "noninvasive",
            "oral"
          ],
          "correct": "intramuscular"
        }
      ],
      "answerKey": {
        "1": "intramuscular"
      },
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Complete the statement: For a client with severe thrombocytopenia, avoid {{1}} procedures and use a soft toothbrush to reduce mucosal trauma."
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "intramuscular": "Intramuscular injections can cause bleeding or hematoma in severe thrombocytopenia.",
        "noninvasive": "Noninvasive procedures do not create the same bleeding risk.",
        "oral": "Oral care may be performed gently using a soft toothbrush."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    },
    "instruction": "Complete the bleeding-precaution instruction.",
    "clozeTemplate": "For a client with severe thrombocytopenia, avoid {{1}} procedures and use a soft toothbrush to reduce mucosal trauma.",
    "dropdowns": [
      {
        "id": "1",
        "options": [
          "intramuscular",
          "noninvasive",
          "oral"
        ],
        "correct": "intramuscular"
      }
    ],
    "correctAnswers": {
      "1": "intramuscular"
    }
  },
  {
    "id": "QR-100307",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Aplastic anemia and pancytopenia",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with aplastic anemia has pancytopenia. Which complication requires the most immediate prevention and monitoring?",
    "options": [
      "Infection and bleeding",
      "Hyperthyroidism",
      "Fluid overload from excess sodium",
      "Acute glaucoma"
    ],
    "correctAnswer": "Infection and bleeding",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Infection and bleeding": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Hyperthyroidism": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Fluid overload from excess sodium": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Acute glaucoma": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Aplastic anemia and pancytopenia",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000554.htm",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100307",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with aplastic anemia has pancytopenia. Which complication requires the most immediate prevention and monitoring?",
      "options": [
        "Infection and bleeding",
        "Hyperthyroidism",
        "Fluid overload from excess sodium",
        "Acute glaucoma"
      ],
      "answerKey": "Infection and bleeding",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with aplastic anemia has pancytopenia. Which complication requires the most immediate prevention and monitoring?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Infection and bleeding": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Hyperthyroidism": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Fluid overload from excess sodium": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Acute glaucoma": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100308",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Polycythemia vera",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with polycythemia vera reports headache and blurred vision. Which complication is the nurse most concerned about?",
    "options": [
      "Thrombosis from increased blood viscosity",
      "Severe hypoglycemia",
      "Acute hypocalcemia",
      "Pulmonary aspiration"
    ],
    "correctAnswer": "Thrombosis from increased blood viscosity",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Thrombosis from increased blood viscosity": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Severe hypoglycemia": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Acute hypocalcemia": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Pulmonary aspiration": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Polycythemia vera",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000589.htm",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100308",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with polycythemia vera reports headache and blurred vision. Which complication is the nurse most concerned about?",
      "options": [
        "Thrombosis from increased blood viscosity",
        "Severe hypoglycemia",
        "Acute hypocalcemia",
        "Pulmonary aspiration"
      ],
      "answerKey": "Thrombosis from increased blood viscosity",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with polycythemia vera reports headache and blurred vision. Which complication is the nurse most concerned about?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Thrombosis from increased blood viscosity": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Severe hypoglycemia": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Acute hypocalcemia": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Pulmonary aspiration": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100309",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Sickle cell disease complications",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with sickle cell disease develops fever, chest pain, cough, and oxygen desaturation. Which complication should the nurse suspect?",
    "options": [
      "Acute chest syndrome",
      "Uncomplicated vaso-occlusive pain only",
      "Iron deficiency",
      "Chronic constipation"
    ],
    "correctAnswer": "Acute chest syndrome",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Acute chest syndrome": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Uncomplicated vaso-occlusive pain only": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Iron deficiency": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Chronic constipation": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Sickle cell disease complications",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cdc.gov/sickle-cell/about/index.html",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100309",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with sickle cell disease develops fever, chest pain, cough, and oxygen desaturation. Which complication should the nurse suspect?",
      "options": [
        "Acute chest syndrome",
        "Uncomplicated vaso-occlusive pain only",
        "Iron deficiency",
        "Chronic constipation"
      ],
      "answerKey": "Acute chest syndrome",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with sickle cell disease develops fever, chest pain, cough, and oxygen desaturation. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Acute chest syndrome": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Uncomplicated vaso-occlusive pain only": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Iron deficiency": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Chronic constipation": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100310",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Blood component administration and massive transfusion",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "During a blood transfusion, the client develops chills, dyspnea, and hypotension. What should the nurse do first?",
    "options": [
      "Stop the transfusion and maintain IV access with normal saline using new tubing per policy",
      "Increase the transfusion rate",
      "Discard the blood bag before notifying the blood bank",
      "Administer the remaining unit rapidly"
    ],
    "correctAnswer": "Stop the transfusion and maintain IV access with normal saline using new tubing per policy",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Stop the transfusion and maintain IV access with normal saline using new tubing per policy": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Increase the transfusion rate": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Discard the blood bag before notifying the blood bank": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Administer the remaining unit rapidly": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Blood component administration and massive transfusion",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100310",
      "category": "Adult Health",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "During a blood transfusion, the client develops chills, dyspnea, and hypotension. What should the nurse do first?",
      "options": [
        "Stop the transfusion and maintain IV access with normal saline using new tubing per policy",
        "Increase the transfusion rate",
        "Discard the blood bag before notifying the blood bank",
        "Administer the remaining unit rapidly"
      ],
      "answerKey": "Stop the transfusion and maintain IV access with normal saline using new tubing per policy",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "During a blood transfusion, the client develops chills, dyspnea, and hypotension. What should the nurse do first?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Stop the transfusion and maintain IV access with normal saline using new tubing per policy": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Increase the transfusion rate": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Discard the blood bag before notifying the blood bank": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Administer the remaining unit rapidly": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100311",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Tumor lysis syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client receiving chemotherapy develops hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia. Which complication is most likely?",
    "options": [
      "Tumor lysis syndrome",
      "SIADH",
      "Superior vena cava syndrome",
      "Neutropenic enterocolitis"
    ],
    "correctAnswer": "Tumor lysis syndrome",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Tumor lysis syndrome": "This option should be evaluated against the client's current assessment and safety priorities.",
      "SIADH": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Superior vena cava syndrome": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Neutropenic enterocolitis": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Tumor lysis syndrome",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100311",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client receiving chemotherapy develops hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia. Which complication is most likely?",
      "options": [
        "Tumor lysis syndrome",
        "SIADH",
        "Superior vena cava syndrome",
        "Neutropenic enterocolitis"
      ],
      "answerKey": "Tumor lysis syndrome",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving chemotherapy develops hyperkalemia, hyperphosphatemia, hyperuricemia, and hypocalcemia. Which complication is most likely?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Tumor lysis syndrome": "This option should be evaluated against the client's current assessment and safety priorities.",
        "SIADH": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Superior vena cava syndrome": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Neutropenic enterocolitis": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100312",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Superior vena cava syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "A client with lung cancer develops facial and neck swelling, distended neck veins, dyspnea, and headache. Which actions are appropriate?",
    "options": [
      "Elevate the head of the bed",
      "Notify the oncology team promptly",
      "Assess respiratory status and oxygenation",
      "Place the client flat",
      "Apply tight compression around the neck"
    ],
    "correctAnswer": [
      "Elevate the head of the bed",
      "Notify the oncology team promptly",
      "Assess respiratory status and oxygenation"
    ],
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Elevate the head of the bed": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Notify the oncology team promptly": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Assess respiratory status and oxygenation": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Place the client flat": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Apply tight compression around the neck": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Superior vena cava syndrome",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/superior-vena-cava-syndrome",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100312",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client with lung cancer develops facial and neck swelling, distended neck veins, dyspnea, and headache. Which actions are appropriate?",
      "options": [
        "Elevate the head of the bed",
        "Notify the oncology team promptly",
        "Assess respiratory status and oxygenation",
        "Place the client flat",
        "Apply tight compression around the neck"
      ],
      "answerKey": [
        "Elevate the head of the bed",
        "Notify the oncology team promptly",
        "Assess respiratory status and oxygenation"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with lung cancer develops facial and neck swelling, distended neck veins, dyspnea, and headache. Which actions are appropriate?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Elevate the head of the bed": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Notify the oncology team promptly": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Assess respiratory status and oxygenation": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Place the client flat": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Apply tight compression around the neck": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100313",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Spinal cord compression in cancer",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with metastatic cancer reports new severe back pain, leg weakness, and urinary retention. What is the priority response?",
    "options": [
      "Treat as possible metastatic spinal cord compression and obtain emergency evaluation",
      "Schedule routine follow-up in 1 month",
      "Encourage spinal flexion exercises",
      "Apply heat and reassess tomorrow"
    ],
    "correctAnswer": "Treat as possible metastatic spinal cord compression and obtain emergency evaluation",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Treat as possible metastatic spinal cord compression and obtain emergency evaluation": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Schedule routine follow-up in 1 month": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Encourage spinal flexion exercises": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Apply heat and reassess tomorrow": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Spinal cord compression in cancer",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/spinal-cord-compression",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100313",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with metastatic cancer reports new severe back pain, leg weakness, and urinary retention. What is the priority response?",
      "options": [
        "Treat as possible metastatic spinal cord compression and obtain emergency evaluation",
        "Schedule routine follow-up in 1 month",
        "Encourage spinal flexion exercises",
        "Apply heat and reassess tomorrow"
      ],
      "answerKey": "Treat as possible metastatic spinal cord compression and obtain emergency evaluation",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with metastatic cancer reports new severe back pain, leg weakness, and urinary retention. What is the priority response?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Treat as possible metastatic spinal cord compression and obtain emergency evaluation": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Schedule routine follow-up in 1 month": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Encourage spinal flexion exercises": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Apply heat and reassess tomorrow": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100314",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Chemotherapy precautions and extravasation",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client receiving vesicant chemotherapy reports burning at the IV site and swelling is visible. What should the nurse do first?",
    "options": [
      "Stop the infusion, leave the catheter in place, and follow the extravasation protocol",
      "Flush the line forcefully",
      "Remove the catheter immediately and massage the site",
      "Increase the infusion rate"
    ],
    "correctAnswer": "Stop the infusion, leave the catheter in place, and follow the extravasation protocol",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Stop the infusion, leave the catheter in place, and follow the extravasation protocol": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Flush the line forcefully": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Remove the catheter immediately and massage the site": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Increase the infusion rate": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Chemotherapy precautions and extravasation",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cancer.gov/about-cancer/treatment/side-effects/chemotherapy",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100314",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client receiving vesicant chemotherapy reports burning at the IV site and swelling is visible. What should the nurse do first?",
      "options": [
        "Stop the infusion, leave the catheter in place, and follow the extravasation protocol",
        "Flush the line forcefully",
        "Remove the catheter immediately and massage the site",
        "Increase the infusion rate"
      ],
      "answerKey": "Stop the infusion, leave the catheter in place, and follow the extravasation protocol",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving vesicant chemotherapy reports burning at the IV site and swelling is visible. What should the nurse do first?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Stop the infusion, leave the catheter in place, and follow the extravasation protocol": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Flush the line forcefully": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Remove the catheter immediately and massage the site": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Increase the infusion rate": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100315",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Radiation therapy safety",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client receiving external-beam radiation asks whether family members can become radioactive from being near the client. Which response is correct?",
    "options": [
      "External-beam radiation does not make the client radioactive",
      "Family members must avoid all contact for 6 months",
      "The client should discard all clothing after each treatment",
      "The client must remain in a lead-lined room at home"
    ],
    "correctAnswer": "External-beam radiation does not make the client radioactive",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "External-beam radiation does not make the client radioactive": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Family members must avoid all contact for 6 months": "This option should be evaluated against the client's current assessment and safety priorities.",
      "The client should discard all clothing after each treatment": "This option should be evaluated against the client's current assessment and safety priorities.",
      "The client must remain in a lead-lined room at home": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Radiation therapy safety",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.cancer.gov/about-cancer/treatment/types/radiation-therapy",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100315",
      "category": "Adult Health",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client receiving external-beam radiation asks whether family members can become radioactive from being near the client. Which response is correct?",
      "options": [
        "External-beam radiation does not make the client radioactive",
        "Family members must avoid all contact for 6 months",
        "The client should discard all clothing after each treatment",
        "The client must remain in a lead-lined room at home"
      ],
      "answerKey": "External-beam radiation does not make the client radioactive",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving external-beam radiation asks whether family members can become radioactive from being near the client. Which response is correct?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "External-beam radiation does not make the client radioactive": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Family members must avoid all contact for 6 months": "This option should be evaluated against the client's current assessment and safety priorities.",
        "The client should discard all clothing after each treatment": "This option should be evaluated against the client's current assessment and safety priorities.",
        "The client must remain in a lead-lined room at home": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100316",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Neutropenic fever and oncologic emergencies",
    "clientNeeds": "Febrile neutropenia with possible sepsis",
    "cjmmStep": "Safety and Infection Control",
    "difficulty": 4,
    "type": "Prioritize Hypotheses",
    "question": "A client receiving chemotherapy has fever 38.5°C, ANC 300/mm³, and hypotension. Complete the bowtie by identifying the priority condition, two actions, and two monitoring parameters.",
    "options": [
      "Febrile neutropenia with possible sepsis"
    ],
    "correctAnswer": "Activate the emergency febrile-neutropenia pathway|Obtain ordered cultures and administer empiric antimicrobials promptly|Delay treatment until cultures are final|Blood pressure and perfusion|Temperature and clinical response",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Febrile neutropenia with possible sepsis": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Neutropenic fever and oncologic emergencies",
        "publisher": "Relevant government health agency or professional organization",
        "url": "Bowtie",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100316",
      "category": "Adult Health",
      "clientNeeds": "Febrile neutropenia with possible sepsis",
      "cjmmStep": "Safety and Infection Control",
      "difficulty": 4
    },
    "interaction": {
      "type": "Prioritize Hypotheses",
      "stem": "A client receiving chemotherapy has fever 38.5°C, ANC 300/mm³, and hypotension. Complete the bowtie by identifying the priority condition, two actions, and two monitoring parameters.",
      "options": [
        "Febrile neutropenia with possible sepsis"
      ],
      "answerKey": "Activate the emergency febrile-neutropenia pathway|Obtain ordered cultures and administer empiric antimicrobials promptly|Delay treatment until cultures are final|Blood pressure and perfusion|Temperature and clinical response",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving chemotherapy has fever 38.5°C, ANC 300/mm³, and hypotension. Complete the bowtie by identifying the priority condition, two actions, and two monitoring parameters."
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Febrile neutropenia with possible sepsis": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100317",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Systemic lupus erythematosus",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with systemic lupus erythematosus reports new facial edema, frothy urine, and elevated blood pressure. Which complication should the nurse suspect?",
    "options": [
      "Lupus nephritis",
      "Acute otitis media",
      "Cholecystitis",
      "Hypothyroidism"
    ],
    "correctAnswer": "Lupus nephritis",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Lupus nephritis": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Acute otitis media": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Cholecystitis": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Hypothyroidism": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Systemic lupus erythematosus",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.niams.nih.gov/health-topics/lupus",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100317",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with systemic lupus erythematosus reports new facial edema, frothy urine, and elevated blood pressure. Which complication should the nurse suspect?",
      "options": [
        "Lupus nephritis",
        "Acute otitis media",
        "Cholecystitis",
        "Hypothyroidism"
      ],
      "answerKey": "Lupus nephritis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with systemic lupus erythematosus reports new facial edema, frothy urine, and elevated blood pressure. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Lupus nephritis": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Acute otitis media": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Cholecystitis": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Hypothyroidism": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100318",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Rheumatoid arthritis complications",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with longstanding rheumatoid arthritis reports new neck pain, hand weakness, and tingling. Which complication requires urgent evaluation before cervical manipulation or procedures?",
    "options": [
      "Atlantoaxial instability",
      "Uncomplicated muscle strain",
      "Seasonal allergies",
      "Osteoporosis without fracture"
    ],
    "correctAnswer": "Atlantoaxial instability",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Atlantoaxial instability": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Uncomplicated muscle strain": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Seasonal allergies": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Osteoporosis without fracture": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Rheumatoid arthritis complications",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.niams.nih.gov/health-topics/rheumatoid-arthritis",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100318",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with longstanding rheumatoid arthritis reports new neck pain, hand weakness, and tingling. Which complication requires urgent evaluation before cervical manipulation or procedures?",
      "options": [
        "Atlantoaxial instability",
        "Uncomplicated muscle strain",
        "Seasonal allergies",
        "Osteoporosis without fracture"
      ],
      "answerKey": "Atlantoaxial instability",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with longstanding rheumatoid arthritis reports new neck pain, hand weakness, and tingling. Which complication requires urgent evaluation before cervical manipulation or procedures?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Atlantoaxial instability": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Uncomplicated muscle strain": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Seasonal allergies": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Osteoporosis without fracture": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100319",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Anaphylaxis and angioedema",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client develops generalized urticaria, wheezing, tongue swelling, and hypotension after receiving an antibiotic. Which medication is the priority?",
    "options": [
      "Intramuscular epinephrine",
      "Oral antihistamine alone",
      "Inhaled corticosteroid alone",
      "Acetaminophen"
    ],
    "correctAnswer": "Intramuscular epinephrine",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Intramuscular epinephrine": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Oral antihistamine alone": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Inhaled corticosteroid alone": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Acetaminophen": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Anaphylaxis and angioedema",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.niaid.nih.gov/diseases-conditions/anaphylaxis",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100319",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client develops generalized urticaria, wheezing, tongue swelling, and hypotension after receiving an antibiotic. Which medication is the priority?",
      "options": [
        "Intramuscular epinephrine",
        "Oral antihistamine alone",
        "Inhaled corticosteroid alone",
        "Acetaminophen"
      ],
      "answerKey": "Intramuscular epinephrine",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client develops generalized urticaria, wheezing, tongue swelling, and hypotension after receiving an antibiotic. Which medication is the priority?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Intramuscular epinephrine": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Oral antihistamine alone": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Inhaled corticosteroid alone": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Acetaminophen": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  },
  {
    "id": "QR-100320",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Organ transplant rejection",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A kidney transplant recipient reports reduced urine output, fever, graft-site tenderness, and rising creatinine. Which complication should the nurse suspect?",
    "options": [
      "Acute transplant rejection",
      "Expected graft adaptation",
      "Uncomplicated seasonal allergy",
      "Hypoglycemia"
    ],
    "correctAnswer": "Acute transplant rejection",
    "rationale": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
    "optionRationales": {
      "Acute transplant rejection": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Expected graft adaptation": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Uncomplicated seasonal allergy": "This option should be evaluated against the client's current assessment and safety priorities.",
      "Hypoglycemia": "This option should be evaluated against the client's current assessment and safety priorities."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Organ transplant rejection",
        "publisher": "Relevant government health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/kidney-transplant",
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
      "Original educational practice item; verify current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100320",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A kidney transplant recipient reports reduced urine output, fever, graft-site tenderness, and rising creatinine. Which complication should the nurse suspect?",
      "options": [
        "Acute transplant rejection",
        "Expected graft adaptation",
        "Uncomplicated seasonal allergy",
        "Hypoglycemia"
      ],
      "answerKey": "Acute transplant rejection",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A kidney transplant recipient reports reduced urine output, fever, graft-site tenderness, and rising creatinine. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The client's findings and clinical context support the keyed response. Prioritize immediate threats, follow current evidence-based protocols, and reassess for complications.",
      "options": {
        "Acute transplant rejection": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Expected graft adaptation": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Uncomplicated seasonal allergy": "This option should be evaluated against the client's current assessment and safety priorities.",
        "Hypoglycemia": "This option should be evaluated against the client's current assessment and safety priorities."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the highest-risk complication and take timely, protocol-based action."
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch7={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
