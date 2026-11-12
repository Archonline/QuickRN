/* Ten complete six-question linked NGN case studies (groups 021–030).
 * Within each group the CJMM sequence is fixed; only whole case groups may be shuffled.
 * Automated validation is structural, not clinical certification.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load before linked case studies.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-021",
    "caseTitle": "Older adult with evolving sepsis and organ dysfunction",
    "caseStudyContext": {
      "id": "QR-CS-021",
      "title": "Older adult with evolving sepsis and organ dysfunction",
      "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sepsis and septic shock",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "nursingNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "nursesNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "vitalSigns": "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air.",
    "diagnosticResults": "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³.",
    "providerOrders": "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output",
    "stimulus": {
      "caseGroupId": "QR-CS-021",
      "patientProfile": {
        "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
      },
      "tabs": {
        "history": [
          "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
        ],
        "nursesNotes": [
          "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen."
        ],
        "vitalSigns": [
          "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air."
        ],
        "labResults": [
          "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³."
        ],
        "providerOrders": [
          "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Sepsis and septic shock",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100621",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "confusion",
      "bp",
      "rr"
    ],
    "rationale": "The combination of new confusion and restlessness, blood pressure 86/48 mmhg, respiratory rate 30/min supports recognition of Septic shock with suspected infection-related organ dysfunction.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100621",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "confusion",
        "bp",
        "rr"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of new confusion and restlessness, blood pressure 86/48 mmhg, respiratory rate 30/min supports recognition of Septic shock with suspected infection-related organ dysfunction.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "New confusion and restlessness. Blood pressure 86/48 mmHg. Respiratory rate 30/min. Declining urine output. Temperature 38.7°C. An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "highlightSegments": [
      {
        "id": "confusion",
        "text": "New confusion and restlessness"
      },
      {
        "id": "bp",
        "text": "Blood pressure 86/48 mmHg"
      },
      {
        "id": "rr",
        "text": "Respiratory rate 30/min"
      },
      {
        "id": "urine",
        "text": "Declining urine output"
      },
      {
        "id": "fever",
        "text": "Temperature 38.7°C"
      }
    ],
    "correctHighlights": [
      "confusion",
      "bp",
      "rr"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-021",
    "caseTitle": "Older adult with evolving sepsis and organ dysfunction",
    "caseStudyContext": {
      "id": "QR-CS-021",
      "title": "Older adult with evolving sepsis and organ dysfunction",
      "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sepsis and septic shock",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "nursingNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "nursesNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "vitalSigns": "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air.",
    "diagnosticResults": "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³.",
    "providerOrders": "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output",
    "stimulus": {
      "caseGroupId": "QR-CS-021",
      "patientProfile": {
        "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
      },
      "tabs": {
        "history": [
          "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
        ],
        "nursesNotes": [
          "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen."
        ],
        "vitalSigns": [
          "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air."
        ],
        "labResults": [
          "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³."
        ],
        "providerOrders": [
          "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Sepsis and septic shock",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100622",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "New confusion and restlessness",
      "Blood pressure 86/48 mmHg",
      "Respiratory rate 30/min",
      "Declining urine output"
    ],
    "correctAnswer": {
      "confusion": "Acute organ dysfunction cue",
      "bp": "Circulatory compromise",
      "rr": "Respiratory stress",
      "urine": "Possible renal hypoperfusion"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Septic shock with suspected infection-related organ dysfunction.",
    "optionRationales": {
      "New confusion and restlessness": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Blood pressure 86/48 mmHg": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Respiratory rate 30/min": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Declining urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100622",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "confusion": [
          "Acute organ dysfunction cue",
          "Circulatory compromise",
          "Respiratory stress",
          "Possible renal hypoperfusion"
        ],
        "bp": [
          "Acute organ dysfunction cue",
          "Circulatory compromise",
          "Respiratory stress",
          "Possible renal hypoperfusion"
        ],
        "rr": [
          "Acute organ dysfunction cue",
          "Circulatory compromise",
          "Respiratory stress",
          "Possible renal hypoperfusion"
        ],
        "urine": [
          "Acute organ dysfunction cue",
          "Circulatory compromise",
          "Respiratory stress",
          "Possible renal hypoperfusion"
        ]
      },
      "answerKey": {
        "confusion": "Acute organ dysfunction cue",
        "bp": "Circulatory compromise",
        "rr": "Respiratory stress",
        "urine": "Possible renal hypoperfusion"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Septic shock with suspected infection-related organ dysfunction.",
      "options": {
        "New confusion and restlessness": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Blood pressure 86/48 mmHg": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Respiratory rate 30/min": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Declining urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "confusion",
        "label": "New confusion and restlessness"
      },
      {
        "id": "bp",
        "label": "Blood pressure 86/48 mmHg"
      },
      {
        "id": "rr",
        "label": "Respiratory rate 30/min"
      },
      {
        "id": "urine",
        "label": "Declining urine output"
      }
    ],
    "columns": [
      "Acute organ dysfunction cue",
      "Circulatory compromise",
      "Respiratory stress",
      "Possible renal hypoperfusion"
    ],
    "correctAnswers": {
      "confusion": "Acute organ dysfunction cue",
      "bp": "Circulatory compromise",
      "rr": "Respiratory stress",
      "urine": "Possible renal hypoperfusion"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-021",
    "caseTitle": "Older adult with evolving sepsis and organ dysfunction",
    "caseStudyContext": {
      "id": "QR-CS-021",
      "title": "Older adult with evolving sepsis and organ dysfunction",
      "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sepsis and septic shock",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "nursingNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "nursesNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "vitalSigns": "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air.",
    "diagnosticResults": "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³.",
    "providerOrders": "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output",
    "stimulus": {
      "caseGroupId": "QR-CS-021",
      "patientProfile": {
        "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
      },
      "tabs": {
        "history": [
          "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
        ],
        "nursesNotes": [
          "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen."
        ],
        "vitalSigns": [
          "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air."
        ],
        "labResults": [
          "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³."
        ],
        "providerOrders": [
          "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Sepsis and septic shock",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100623",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Septic shock with suspected infection-related organ dysfunction",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate the sepsis response and notify the responsible clinician immediately.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials.",
        "Begin prescribed isotonic fluid resuscitation and reassess perfusion."
      ],
      "monitoring": [
        "Blood pressure, mental status, capillary refill, and urine output",
        "Lactate trend, oxygenation, and response to fluids and antimicrobials"
      ]
    },
    "correctAnswer": {
      "condition": "Septic shock with suspected infection-related organ dysfunction",
      "actions": [
        "Activate the sepsis response and notify the responsible clinician immediately.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials."
      ],
      "monitoring": [
        "Blood pressure, mental status, capillary refill, and urine output",
        "Lactate trend, oxygenation, and response to fluids and antimicrobials"
      ]
    },
    "rationale": "The most likely condition is Septic shock with suspected infection-related organ dysfunction. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Septic shock with suspected infection-related organ dysfunction": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate the sepsis response and notify the responsible clinician immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Obtain ordered cultures and lactate without delaying timely antimicrobials.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Begin prescribed isotonic fluid resuscitation and reassess perfusion.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Blood pressure, mental status, capillary refill, and urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Lactate trend, oxygenation, and response to fluids and antimicrobials": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100623",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Septic shock with suspected infection-related organ dysfunction",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Activate the sepsis response and notify the responsible clinician immediately.",
          "Obtain ordered cultures and lactate without delaying timely antimicrobials.",
          "Begin prescribed isotonic fluid resuscitation and reassess perfusion."
        ],
        "monitoring": [
          "Blood pressure, mental status, capillary refill, and urine output",
          "Lactate trend, oxygenation, and response to fluids and antimicrobials"
        ]
      },
      "answerKey": {
        "condition": "Septic shock with suspected infection-related organ dysfunction",
        "actions": [
          "Activate the sepsis response and notify the responsible clinician immediately.",
          "Obtain ordered cultures and lactate without delaying timely antimicrobials."
        ],
        "monitoring": [
          "Blood pressure, mental status, capillary refill, and urine output",
          "Lactate trend, oxygenation, and response to fluids and antimicrobials"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Septic shock with suspected infection-related organ dysfunction. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Septic shock with suspected infection-related organ dysfunction": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate the sepsis response and notify the responsible clinician immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Begin prescribed isotonic fluid resuscitation and reassess perfusion.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Blood pressure, mental status, capillary refill, and urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Lactate trend, oxygenation, and response to fluids and antimicrobials": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Septic shock with suspected infection-related organ dysfunction",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate the sepsis response and notify the responsible clinician immediately.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials.",
        "Begin prescribed isotonic fluid resuscitation and reassess perfusion."
      ],
      "monitoring": [
        "Blood pressure, mental status, capillary refill, and urine output",
        "Lactate trend, oxygenation, and response to fluids and antimicrobials"
      ]
    },
    "correctAnswers": {
      "condition": "Septic shock with suspected infection-related organ dysfunction",
      "actions": [
        "Activate the sepsis response and notify the responsible clinician immediately.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials."
      ],
      "monitoring": [
        "Blood pressure, mental status, capillary refill, and urine output",
        "Lactate trend, oxygenation, and response to fluids and antimicrobials"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-021",
    "caseTitle": "Older adult with evolving sepsis and organ dysfunction",
    "caseStudyContext": {
      "id": "QR-CS-021",
      "title": "Older adult with evolving sepsis and organ dysfunction",
      "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sepsis and septic shock",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "nursingNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "nursesNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "vitalSigns": "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air.",
    "diagnosticResults": "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³.",
    "providerOrders": "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output",
    "stimulus": {
      "caseGroupId": "QR-CS-021",
      "patientProfile": {
        "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
      },
      "tabs": {
        "history": [
          "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
        ],
        "nursesNotes": [
          "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen."
        ],
        "vitalSigns": [
          "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air."
        ],
        "labResults": [
          "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³."
        ],
        "providerOrders": [
          "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Sepsis and septic shock",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100624",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Activate the sepsis response and notify the responsible clinician immediately.",
      "Obtain ordered cultures and lactate without delaying timely antimicrobials.",
      "Begin prescribed isotonic fluid resuscitation and reassess perfusion.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Activate the sepsis response and notify the responsible clinician immediately.",
      "Obtain ordered cultures and lactate without delaying timely antimicrobials.",
      "Begin prescribed isotonic fluid resuscitation and reassess perfusion."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Septic shock with suspected infection-related organ dysfunction while supporting timely reassessment.",
    "optionRationales": {
      "Activate the sepsis response and notify the responsible clinician immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Obtain ordered cultures and lactate without delaying timely antimicrobials.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Begin prescribed isotonic fluid resuscitation and reassess perfusion.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100624",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Activate the sepsis response and notify the responsible clinician immediately.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials.",
        "Begin prescribed isotonic fluid resuscitation and reassess perfusion.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Activate the sepsis response and notify the responsible clinician immediately.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials.",
        "Begin prescribed isotonic fluid resuscitation and reassess perfusion."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Septic shock with suspected infection-related organ dysfunction while supporting timely reassessment.",
      "options": {
        "Activate the sepsis response and notify the responsible clinician immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Obtain ordered cultures and lactate without delaying timely antimicrobials.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Begin prescribed isotonic fluid resuscitation and reassess perfusion.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-021",
    "caseTitle": "Older adult with evolving sepsis and organ dysfunction",
    "caseStudyContext": {
      "id": "QR-CS-021",
      "title": "Older adult with evolving sepsis and organ dysfunction",
      "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sepsis and septic shock",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "nursingNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "nursesNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "vitalSigns": "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air.",
    "diagnosticResults": "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³.",
    "providerOrders": "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output",
    "stimulus": {
      "caseGroupId": "QR-CS-021",
      "patientProfile": {
        "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
      },
      "tabs": {
        "history": [
          "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
        ],
        "nursesNotes": [
          "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen."
        ],
        "vitalSigns": [
          "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air."
        ],
        "labResults": [
          "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³."
        ],
        "providerOrders": [
          "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Sepsis and septic shock",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100625",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Reassess perfusion and urine output",
      "Administer prescribed broad-spectrum antimicrobials",
      "Obtain ordered cultures and lactate promptly",
      "Activate rapid response/sepsis pathway"
    ],
    "correctAnswer": [
      "Activate rapid response/sepsis pathway",
      "Obtain ordered cultures and lactate promptly",
      "Administer prescribed broad-spectrum antimicrobials",
      "Reassess perfusion and urine output"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Septic shock with suspected infection-related organ dysfunction.",
    "optionRationales": {
      "Reassess perfusion and urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed broad-spectrum antimicrobials": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Obtain ordered cultures and lactate promptly": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate rapid response/sepsis pathway": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100625",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Reassess perfusion and urine output",
        "Administer prescribed broad-spectrum antimicrobials",
        "Obtain ordered cultures and lactate promptly",
        "Activate rapid response/sepsis pathway"
      ],
      "answerKey": [
        "Activate rapid response/sepsis pathway",
        "Obtain ordered cultures and lactate promptly",
        "Administer prescribed broad-spectrum antimicrobials",
        "Reassess perfusion and urine output"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Septic shock with suspected infection-related organ dysfunction.",
      "options": {
        "Reassess perfusion and urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed broad-spectrum antimicrobials": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Obtain ordered cultures and lactate promptly": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate rapid response/sepsis pathway": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Reassess perfusion and urine output",
      "Administer prescribed broad-spectrum antimicrobials",
      "Obtain ordered cultures and lactate promptly",
      "Activate rapid response/sepsis pathway"
    ],
    "correctOrder": [
      "Activate rapid response/sepsis pathway",
      "Obtain ordered cultures and lactate promptly",
      "Administer prescribed broad-spectrum antimicrobials",
      "Reassess perfusion and urine output"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-021",
    "caseTitle": "Older adult with evolving sepsis and organ dysfunction",
    "caseStudyContext": {
      "id": "QR-CS-021",
      "title": "Older adult with evolving sepsis and organ dysfunction",
      "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sepsis and septic shock",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output.",
    "nursingNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "nursesNotes": "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen.",
    "vitalSigns": "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air.",
    "diagnosticResults": "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³.",
    "providerOrders": "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output",
    "stimulus": {
      "caseGroupId": "QR-CS-021",
      "patientProfile": {
        "summary": "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
      },
      "tabs": {
        "history": [
          "An 82-year-old admitted with pneumonia develops new confusion, tachypnea, hypotension, and declining urine output."
        ],
        "nursesNotes": [
          "The client is increasingly confused and restless. Respiratory rate is 30/min, blood pressure is 86/48 mmHg, heart rate is 124/min, temperature is 38.7°C, and urine output has fallen."
        ],
        "vitalSigns": [
          "HR 124/min; BP 86/48 mmHg; RR 30/min; temperature 38.7°C; SpO₂ 91% on room air."
        ],
        "labResults": [
          "Lactate 4.1 mmol/L; creatinine increased from baseline; WBC 18,000/mm³."
        ],
        "providerOrders": [
          "Activate rapid response/sepsis pathway; Obtain ordered cultures and lactate promptly; Administer prescribed broad-spectrum antimicrobials; Reassess perfusion and urine output"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Sepsis and septic shock",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100626",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Sepsis with impaired perfusion; escalate immediately.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Sepsis with impaired perfusion; escalate immediately.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Sepsis with impaired perfusion; escalate immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100626",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Sepsis with impaired perfusion; escalate immediately.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Sepsis with impaired perfusion; escalate immediately.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Sepsis with impaired perfusion; escalate immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Older adult with evolving sepsis and organ dysfunction — clinical progression",
      "stages": [
        {
          "time": "Initial assessment",
          "situation": "Confusion, HR 124/min, BP 86/48 mmHg, RR 30/min.",
          "question": "Sepsis with impaired perfusion; escalate immediately.",
          "options": [
            "Sepsis with impaired perfusion; escalate immediately.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Sepsis with impaired perfusion; escalate immediately."
        },
        {
          "time": "After initial resuscitation",
          "situation": "BP 94/56 mmHg, persistent tachycardia, urine output remains low.",
          "question": "Ongoing perfusion impairment; continue protocol-directed resuscitation and reassessment.",
          "options": [
            "Ongoing perfusion impairment; continue protocol-directed resuscitation and reassessment.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Ongoing perfusion impairment; continue protocol-directed resuscitation and reassessment."
        },
        {
          "time": "After treatment",
          "situation": "BP 108/64 mmHg, improved alertness, urine output begins to rise.",
          "question": "Improving perfusion; continue close monitoring and reassess organ function.",
          "options": [
            "Improving perfusion; continue close monitoring and reassess organ function.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Improving perfusion; continue close monitoring and reassess organ function."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-022",
    "caseTitle": "Pediatric status asthmaticus with escalating respiratory failure",
    "caseStudyContext": {
      "id": "QR-CS-022",
      "title": "Pediatric status asthmaticus with escalating respiratory failure",
      "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Asthma and status asthmaticus",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "nursingNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "nursesNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "vitalSigns": "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued.",
    "diagnosticResults": "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening.",
    "providerOrders": "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support",
    "stimulus": {
      "caseGroupId": "QR-CS-022",
      "patientProfile": {
        "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
      },
      "tabs": {
        "history": [
          "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
        ],
        "nursesNotes": [
          "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement."
        ],
        "vitalSigns": [
          "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued."
        ],
        "labResults": [
          "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening."
        ],
        "providerOrders": [
          "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Asthma and status asthmaticus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/asthma",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100627",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "speech",
      "retractions",
      "air"
    ],
    "rationale": "The combination of speaks only one or two words at a time, intercostal retractions, markedly reduced air movement supports recognition of Severe asthma exacerbation with impending respiratory failure.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100627",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "speech",
        "retractions",
        "air"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of speaks only one or two words at a time, intercostal retractions, markedly reduced air movement supports recognition of Severe asthma exacerbation with impending respiratory failure.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Speaks only one or two words at a time. Intercostal retractions. Markedly reduced air movement. SpO₂ 88% despite initial oxygen. Increasing fatigue. A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "highlightSegments": [
      {
        "id": "speech",
        "text": "Speaks only one or two words at a time"
      },
      {
        "id": "retractions",
        "text": "Intercostal retractions"
      },
      {
        "id": "air",
        "text": "Markedly reduced air movement"
      },
      {
        "id": "sat",
        "text": "SpO₂ 88% despite initial oxygen"
      },
      {
        "id": "fatigue",
        "text": "Increasing fatigue"
      }
    ],
    "correctHighlights": [
      "speech",
      "retractions",
      "air"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-022",
    "caseTitle": "Pediatric status asthmaticus with escalating respiratory failure",
    "caseStudyContext": {
      "id": "QR-CS-022",
      "title": "Pediatric status asthmaticus with escalating respiratory failure",
      "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Asthma and status asthmaticus",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "nursingNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "nursesNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "vitalSigns": "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued.",
    "diagnosticResults": "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening.",
    "providerOrders": "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support",
    "stimulus": {
      "caseGroupId": "QR-CS-022",
      "patientProfile": {
        "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
      },
      "tabs": {
        "history": [
          "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
        ],
        "nursesNotes": [
          "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement."
        ],
        "vitalSigns": [
          "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued."
        ],
        "labResults": [
          "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening."
        ],
        "providerOrders": [
          "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Asthma and status asthmaticus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/asthma",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100628",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Speaks only one or two words at a time",
      "Intercostal retractions",
      "Markedly reduced air movement",
      "SpO₂ 88% despite initial oxygen"
    ],
    "correctAnswer": {
      "speech": "Severe respiratory distress",
      "retractions": "Increased work of breathing",
      "air": "Impending ventilatory failure cue",
      "sat": "Hypoxemia"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Severe asthma exacerbation with impending respiratory failure.",
    "optionRationales": {
      "Speaks only one or two words at a time": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Intercostal retractions": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Markedly reduced air movement": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "SpO₂ 88% despite initial oxygen": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100628",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "speech": [
          "Severe respiratory distress",
          "Increased work of breathing",
          "Impending ventilatory failure cue",
          "Hypoxemia"
        ],
        "retractions": [
          "Severe respiratory distress",
          "Increased work of breathing",
          "Impending ventilatory failure cue",
          "Hypoxemia"
        ],
        "air": [
          "Severe respiratory distress",
          "Increased work of breathing",
          "Impending ventilatory failure cue",
          "Hypoxemia"
        ],
        "sat": [
          "Severe respiratory distress",
          "Increased work of breathing",
          "Impending ventilatory failure cue",
          "Hypoxemia"
        ]
      },
      "answerKey": {
        "speech": "Severe respiratory distress",
        "retractions": "Increased work of breathing",
        "air": "Impending ventilatory failure cue",
        "sat": "Hypoxemia"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Severe asthma exacerbation with impending respiratory failure.",
      "options": {
        "Speaks only one or two words at a time": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Intercostal retractions": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Markedly reduced air movement": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "SpO₂ 88% despite initial oxygen": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "speech",
        "label": "Speaks only one or two words at a time"
      },
      {
        "id": "retractions",
        "label": "Intercostal retractions"
      },
      {
        "id": "air",
        "label": "Markedly reduced air movement"
      },
      {
        "id": "sat",
        "label": "SpO₂ 88% despite initial oxygen"
      }
    ],
    "columns": [
      "Severe respiratory distress",
      "Increased work of breathing",
      "Impending ventilatory failure cue",
      "Hypoxemia"
    ],
    "correctAnswers": {
      "speech": "Severe respiratory distress",
      "retractions": "Increased work of breathing",
      "air": "Impending ventilatory failure cue",
      "sat": "Hypoxemia"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-022",
    "caseTitle": "Pediatric status asthmaticus with escalating respiratory failure",
    "caseStudyContext": {
      "id": "QR-CS-022",
      "title": "Pediatric status asthmaticus with escalating respiratory failure",
      "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Asthma and status asthmaticus",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "nursingNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "nursesNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "vitalSigns": "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued.",
    "diagnosticResults": "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening.",
    "providerOrders": "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support",
    "stimulus": {
      "caseGroupId": "QR-CS-022",
      "patientProfile": {
        "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
      },
      "tabs": {
        "history": [
          "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
        ],
        "nursesNotes": [
          "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement."
        ],
        "vitalSigns": [
          "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued."
        ],
        "labResults": [
          "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening."
        ],
        "providerOrders": [
          "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Asthma and status asthmaticus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/asthma",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100629",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Severe asthma exacerbation with impending respiratory failure",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate emergency respiratory support and notify the airway team.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.",
        "Prepare for escalation of ventilatory support if the child deteriorates."
      ],
      "monitoring": [
        "Work of breathing, air entry, speech, mental status, and oxygen saturation",
        "Response to bronchodilator therapy and need for ventilatory support"
      ]
    },
    "correctAnswer": {
      "condition": "Severe asthma exacerbation with impending respiratory failure",
      "actions": [
        "Activate emergency respiratory support and notify the airway team.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy."
      ],
      "monitoring": [
        "Work of breathing, air entry, speech, mental status, and oxygen saturation",
        "Response to bronchodilator therapy and need for ventilatory support"
      ]
    },
    "rationale": "The most likely condition is Severe asthma exacerbation with impending respiratory failure. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Severe asthma exacerbation with impending respiratory failure": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate emergency respiratory support and notify the airway team.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare for escalation of ventilatory support if the child deteriorates.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Work of breathing, air entry, speech, mental status, and oxygen saturation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Response to bronchodilator therapy and need for ventilatory support": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100629",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Severe asthma exacerbation with impending respiratory failure",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Activate emergency respiratory support and notify the airway team.",
          "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.",
          "Prepare for escalation of ventilatory support if the child deteriorates."
        ],
        "monitoring": [
          "Work of breathing, air entry, speech, mental status, and oxygen saturation",
          "Response to bronchodilator therapy and need for ventilatory support"
        ]
      },
      "answerKey": {
        "condition": "Severe asthma exacerbation with impending respiratory failure",
        "actions": [
          "Activate emergency respiratory support and notify the airway team.",
          "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy."
        ],
        "monitoring": [
          "Work of breathing, air entry, speech, mental status, and oxygen saturation",
          "Response to bronchodilator therapy and need for ventilatory support"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Severe asthma exacerbation with impending respiratory failure. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Severe asthma exacerbation with impending respiratory failure": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate emergency respiratory support and notify the airway team.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare for escalation of ventilatory support if the child deteriorates.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Work of breathing, air entry, speech, mental status, and oxygen saturation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Response to bronchodilator therapy and need for ventilatory support": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Severe asthma exacerbation with impending respiratory failure",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate emergency respiratory support and notify the airway team.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.",
        "Prepare for escalation of ventilatory support if the child deteriorates."
      ],
      "monitoring": [
        "Work of breathing, air entry, speech, mental status, and oxygen saturation",
        "Response to bronchodilator therapy and need for ventilatory support"
      ]
    },
    "correctAnswers": {
      "condition": "Severe asthma exacerbation with impending respiratory failure",
      "actions": [
        "Activate emergency respiratory support and notify the airway team.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy."
      ],
      "monitoring": [
        "Work of breathing, air entry, speech, mental status, and oxygen saturation",
        "Response to bronchodilator therapy and need for ventilatory support"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-022",
    "caseTitle": "Pediatric status asthmaticus with escalating respiratory failure",
    "caseStudyContext": {
      "id": "QR-CS-022",
      "title": "Pediatric status asthmaticus with escalating respiratory failure",
      "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Asthma and status asthmaticus",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "nursingNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "nursesNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "vitalSigns": "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued.",
    "diagnosticResults": "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening.",
    "providerOrders": "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support",
    "stimulus": {
      "caseGroupId": "QR-CS-022",
      "patientProfile": {
        "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
      },
      "tabs": {
        "history": [
          "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
        ],
        "nursesNotes": [
          "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement."
        ],
        "vitalSigns": [
          "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued."
        ],
        "labResults": [
          "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening."
        ],
        "providerOrders": [
          "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Asthma and status asthmaticus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/asthma",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100630",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Activate emergency respiratory support and notify the airway team.",
      "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.",
      "Prepare for escalation of ventilatory support if the child deteriorates.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Activate emergency respiratory support and notify the airway team.",
      "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.",
      "Prepare for escalation of ventilatory support if the child deteriorates."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Severe asthma exacerbation with impending respiratory failure while supporting timely reassessment.",
    "optionRationales": {
      "Activate emergency respiratory support and notify the airway team.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare for escalation of ventilatory support if the child deteriorates.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100630",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Activate emergency respiratory support and notify the airway team.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.",
        "Prepare for escalation of ventilatory support if the child deteriorates.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Activate emergency respiratory support and notify the airway team.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.",
        "Prepare for escalation of ventilatory support if the child deteriorates."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Severe asthma exacerbation with impending respiratory failure while supporting timely reassessment.",
      "options": {
        "Activate emergency respiratory support and notify the airway team.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed inhaled bronchodilator and systemic corticosteroid therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare for escalation of ventilatory support if the child deteriorates.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-022",
    "caseTitle": "Pediatric status asthmaticus with escalating respiratory failure",
    "caseStudyContext": {
      "id": "QR-CS-022",
      "title": "Pediatric status asthmaticus with escalating respiratory failure",
      "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Asthma and status asthmaticus",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "nursingNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "nursesNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "vitalSigns": "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued.",
    "diagnosticResults": "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening.",
    "providerOrders": "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support",
    "stimulus": {
      "caseGroupId": "QR-CS-022",
      "patientProfile": {
        "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
      },
      "tabs": {
        "history": [
          "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
        ],
        "nursesNotes": [
          "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement."
        ],
        "vitalSigns": [
          "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued."
        ],
        "labResults": [
          "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening."
        ],
        "providerOrders": [
          "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Asthma and status asthmaticus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/asthma",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100631",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Prepare escalation of airway support",
      "Provide oxygen and continuous reassessment",
      "Administer prescribed rescue bronchodilator therapy",
      "Activate emergency respiratory response"
    ],
    "correctAnswer": [
      "Activate emergency respiratory response",
      "Administer prescribed rescue bronchodilator therapy",
      "Provide oxygen and continuous reassessment",
      "Prepare escalation of airway support"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Severe asthma exacerbation with impending respiratory failure.",
    "optionRationales": {
      "Prepare escalation of airway support": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Provide oxygen and continuous reassessment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed rescue bronchodilator therapy": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate emergency respiratory response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100631",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Prepare escalation of airway support",
        "Provide oxygen and continuous reassessment",
        "Administer prescribed rescue bronchodilator therapy",
        "Activate emergency respiratory response"
      ],
      "answerKey": [
        "Activate emergency respiratory response",
        "Administer prescribed rescue bronchodilator therapy",
        "Provide oxygen and continuous reassessment",
        "Prepare escalation of airway support"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Severe asthma exacerbation with impending respiratory failure.",
      "options": {
        "Prepare escalation of airway support": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Provide oxygen and continuous reassessment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed rescue bronchodilator therapy": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate emergency respiratory response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Prepare escalation of airway support",
      "Provide oxygen and continuous reassessment",
      "Administer prescribed rescue bronchodilator therapy",
      "Activate emergency respiratory response"
    ],
    "correctOrder": [
      "Activate emergency respiratory response",
      "Administer prescribed rescue bronchodilator therapy",
      "Provide oxygen and continuous reassessment",
      "Prepare escalation of airway support"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-022",
    "caseTitle": "Pediatric status asthmaticus with escalating respiratory failure",
    "caseStudyContext": {
      "id": "QR-CS-022",
      "title": "Pediatric status asthmaticus with escalating respiratory failure",
      "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Asthma and status asthmaticus",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy.",
    "nursingNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "nursesNotes": "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement.",
    "vitalSigns": "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued.",
    "diagnosticResults": "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening.",
    "providerOrders": "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support",
    "stimulus": {
      "caseGroupId": "QR-CS-022",
      "patientProfile": {
        "summary": "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
      },
      "tabs": {
        "history": [
          "A 9-year-old with asthma has worsening respiratory distress despite repeated prescribed rescue therapy."
        ],
        "nursesNotes": [
          "The child is sitting upright, speaking one or two words at a time, with intercostal retractions and markedly reduced air movement."
        ],
        "vitalSigns": [
          "HR 148/min; RR 38/min; SpO₂ 88% despite initial oxygen; child appears fatigued."
        ],
        "labResults": [
          "Peak expiratory flow is markedly reduced from personal best; blood gas assessment is ordered because fatigue is worsening."
        ],
        "providerOrders": [
          "Activate emergency respiratory response; Administer prescribed rescue bronchodilator therapy; Provide oxygen and continuous reassessment; Prepare escalation of airway support"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Asthma and status asthmaticus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nhlbi.nih.gov/health/asthma",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100632",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Severe exacerbation; initiate emergency treatment and close monitoring.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Severe exacerbation; initiate emergency treatment and close monitoring.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Severe exacerbation; initiate emergency treatment and close monitoring.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100632",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Severe exacerbation; initiate emergency treatment and close monitoring.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Severe exacerbation; initiate emergency treatment and close monitoring.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Severe exacerbation; initiate emergency treatment and close monitoring.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Pediatric status asthmaticus with escalating respiratory failure — clinical progression",
      "stages": [
        {
          "time": "Arrival",
          "situation": "Retractions, short phrases, wheezing, SpO₂ 88%.",
          "question": "Severe exacerbation; initiate emergency treatment and close monitoring.",
          "options": [
            "Severe exacerbation; initiate emergency treatment and close monitoring.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Severe exacerbation; initiate emergency treatment and close monitoring."
        },
        {
          "time": "After initial therapy",
          "situation": "Wheezing becomes quieter but air entry is poorer and the child is drowsy.",
          "question": "Worsening airflow and fatigue; suspect impending respiratory failure.",
          "options": [
            "Worsening airflow and fatigue; suspect impending respiratory failure.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Worsening airflow and fatigue; suspect impending respiratory failure."
        },
        {
          "time": "After escalation",
          "situation": "Child is more alert with improved air entry and SpO₂ 95% on reduced oxygen.",
          "question": "Improving ventilation; continue frequent reassessment and prescribed controller plan.",
          "options": [
            "Improving ventilation; continue frequent reassessment and prescribed controller plan.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Improving ventilation; continue frequent reassessment and prescribed controller plan."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-023",
    "caseTitle": "Acute ischemic stroke with changing neurologic findings",
    "caseStudyContext": {
      "id": "QR-CS-023",
      "title": "Acute ischemic stroke with changing neurologic findings",
      "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic care",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "nursingNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "nursesNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "vitalSigns": "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%.",
    "diagnosticResults": "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending.",
    "providerOrders": "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening",
    "stimulus": {
      "caseGroupId": "QR-CS-023",
      "patientProfile": {
        "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
      },
      "tabs": {
        "history": [
          "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
        ],
        "nursesNotes": [
          "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20."
        ],
        "vitalSigns": [
          "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%."
        ],
        "labResults": [
          "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending."
        ],
        "providerOrders": [
          "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Stroke and thrombolytic care",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/stroke",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100633",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "aphasia",
      "weakness",
      "face"
    ],
    "rationale": "The combination of sudden aphasia, right arm weakness, right facial droop supports recognition of Acute ischemic stroke requiring time-sensitive evaluation.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100633",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "aphasia",
        "weakness",
        "face"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of sudden aphasia, right arm weakness, right facial droop supports recognition of Acute ischemic stroke requiring time-sensitive evaluation.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Sudden aphasia. Right arm weakness. Right facial droop. Last known well at 07:20. Point-of-care glucose 112 mg/dL. A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "highlightSegments": [
      {
        "id": "aphasia",
        "text": "Sudden aphasia"
      },
      {
        "id": "weakness",
        "text": "Right arm weakness"
      },
      {
        "id": "face",
        "text": "Right facial droop"
      },
      {
        "id": "time",
        "text": "Last known well at 07:20"
      },
      {
        "id": "glucose",
        "text": "Point-of-care glucose 112 mg/dL"
      }
    ],
    "correctHighlights": [
      "aphasia",
      "weakness",
      "face"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-023",
    "caseTitle": "Acute ischemic stroke with changing neurologic findings",
    "caseStudyContext": {
      "id": "QR-CS-023",
      "title": "Acute ischemic stroke with changing neurologic findings",
      "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic care",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "nursingNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "nursesNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "vitalSigns": "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%.",
    "diagnosticResults": "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending.",
    "providerOrders": "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening",
    "stimulus": {
      "caseGroupId": "QR-CS-023",
      "patientProfile": {
        "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
      },
      "tabs": {
        "history": [
          "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
        ],
        "nursesNotes": [
          "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20."
        ],
        "vitalSigns": [
          "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%."
        ],
        "labResults": [
          "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending."
        ],
        "providerOrders": [
          "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Stroke and thrombolytic care",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/stroke",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100634",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Sudden aphasia",
      "Right arm weakness",
      "Right facial droop",
      "Last known well at 07:20"
    ],
    "correctAnswer": {
      "aphasia": "Acute focal neurologic deficit",
      "weakness": "Acute focal neurologic deficit",
      "face": "Acute focal neurologic deficit",
      "time": "Time-critical treatment eligibility cue"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Acute ischemic stroke requiring time-sensitive evaluation.",
    "optionRationales": {
      "Sudden aphasia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Right arm weakness": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Right facial droop": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Last known well at 07:20": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100634",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "aphasia": [
          "Acute focal neurologic deficit",
          "Time-critical treatment eligibility cue"
        ],
        "weakness": [
          "Acute focal neurologic deficit",
          "Time-critical treatment eligibility cue"
        ],
        "face": [
          "Acute focal neurologic deficit",
          "Time-critical treatment eligibility cue"
        ],
        "time": [
          "Acute focal neurologic deficit",
          "Time-critical treatment eligibility cue"
        ]
      },
      "answerKey": {
        "aphasia": "Acute focal neurologic deficit",
        "weakness": "Acute focal neurologic deficit",
        "face": "Acute focal neurologic deficit",
        "time": "Time-critical treatment eligibility cue"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Acute ischemic stroke requiring time-sensitive evaluation.",
      "options": {
        "Sudden aphasia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Right arm weakness": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Right facial droop": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Last known well at 07:20": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "aphasia",
        "label": "Sudden aphasia"
      },
      {
        "id": "weakness",
        "label": "Right arm weakness"
      },
      {
        "id": "face",
        "label": "Right facial droop"
      },
      {
        "id": "time",
        "label": "Last known well at 07:20"
      }
    ],
    "columns": [
      "Acute focal neurologic deficit",
      "Time-critical treatment eligibility cue"
    ],
    "correctAnswers": {
      "aphasia": "Acute focal neurologic deficit",
      "weakness": "Acute focal neurologic deficit",
      "face": "Acute focal neurologic deficit",
      "time": "Time-critical treatment eligibility cue"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-023",
    "caseTitle": "Acute ischemic stroke with changing neurologic findings",
    "caseStudyContext": {
      "id": "QR-CS-023",
      "title": "Acute ischemic stroke with changing neurologic findings",
      "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic care",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "nursingNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "nursesNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "vitalSigns": "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%.",
    "diagnosticResults": "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending.",
    "providerOrders": "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening",
    "stimulus": {
      "caseGroupId": "QR-CS-023",
      "patientProfile": {
        "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
      },
      "tabs": {
        "history": [
          "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
        ],
        "nursesNotes": [
          "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20."
        ],
        "vitalSigns": [
          "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%."
        ],
        "labResults": [
          "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending."
        ],
        "providerOrders": [
          "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Stroke and thrombolytic care",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/stroke",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100635",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Acute ischemic stroke requiring time-sensitive evaluation",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate the stroke response and establish the last-known-well time.",
        "Obtain urgent brain imaging and follow the stroke protocol.",
        "Keep the client NPO until swallowing safety is assessed."
      ],
      "monitoring": [
        "Neurologic status and NIH Stroke Scale findings",
        "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment"
      ]
    },
    "correctAnswer": {
      "condition": "Acute ischemic stroke requiring time-sensitive evaluation",
      "actions": [
        "Activate the stroke response and establish the last-known-well time.",
        "Obtain urgent brain imaging and follow the stroke protocol."
      ],
      "monitoring": [
        "Neurologic status and NIH Stroke Scale findings",
        "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment"
      ]
    },
    "rationale": "The most likely condition is Acute ischemic stroke requiring time-sensitive evaluation. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Acute ischemic stroke requiring time-sensitive evaluation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate the stroke response and establish the last-known-well time.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Obtain urgent brain imaging and follow the stroke protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Keep the client NPO until swallowing safety is assessed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Neurologic status and NIH Stroke Scale findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100635",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute ischemic stroke requiring time-sensitive evaluation",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Activate the stroke response and establish the last-known-well time.",
          "Obtain urgent brain imaging and follow the stroke protocol.",
          "Keep the client NPO until swallowing safety is assessed."
        ],
        "monitoring": [
          "Neurologic status and NIH Stroke Scale findings",
          "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment"
        ]
      },
      "answerKey": {
        "condition": "Acute ischemic stroke requiring time-sensitive evaluation",
        "actions": [
          "Activate the stroke response and establish the last-known-well time.",
          "Obtain urgent brain imaging and follow the stroke protocol."
        ],
        "monitoring": [
          "Neurologic status and NIH Stroke Scale findings",
          "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Acute ischemic stroke requiring time-sensitive evaluation. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Acute ischemic stroke requiring time-sensitive evaluation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate the stroke response and establish the last-known-well time.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Obtain urgent brain imaging and follow the stroke protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Keep the client NPO until swallowing safety is assessed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Neurologic status and NIH Stroke Scale findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Acute ischemic stroke requiring time-sensitive evaluation",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate the stroke response and establish the last-known-well time.",
        "Obtain urgent brain imaging and follow the stroke protocol.",
        "Keep the client NPO until swallowing safety is assessed."
      ],
      "monitoring": [
        "Neurologic status and NIH Stroke Scale findings",
        "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment"
      ]
    },
    "correctAnswers": {
      "condition": "Acute ischemic stroke requiring time-sensitive evaluation",
      "actions": [
        "Activate the stroke response and establish the last-known-well time.",
        "Obtain urgent brain imaging and follow the stroke protocol."
      ],
      "monitoring": [
        "Neurologic status and NIH Stroke Scale findings",
        "Blood pressure, glucose, oxygenation, and response to time-sensitive treatment"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-023",
    "caseTitle": "Acute ischemic stroke with changing neurologic findings",
    "caseStudyContext": {
      "id": "QR-CS-023",
      "title": "Acute ischemic stroke with changing neurologic findings",
      "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic care",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "nursingNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "nursesNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "vitalSigns": "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%.",
    "diagnosticResults": "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending.",
    "providerOrders": "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening",
    "stimulus": {
      "caseGroupId": "QR-CS-023",
      "patientProfile": {
        "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
      },
      "tabs": {
        "history": [
          "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
        ],
        "nursesNotes": [
          "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20."
        ],
        "vitalSigns": [
          "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%."
        ],
        "labResults": [
          "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending."
        ],
        "providerOrders": [
          "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Stroke and thrombolytic care",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/stroke",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100636",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Activate the stroke response and establish the last-known-well time.",
      "Obtain urgent brain imaging and follow the stroke protocol.",
      "Keep the client NPO until swallowing safety is assessed.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Activate the stroke response and establish the last-known-well time.",
      "Obtain urgent brain imaging and follow the stroke protocol.",
      "Keep the client NPO until swallowing safety is assessed."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Acute ischemic stroke requiring time-sensitive evaluation while supporting timely reassessment.",
    "optionRationales": {
      "Activate the stroke response and establish the last-known-well time.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Obtain urgent brain imaging and follow the stroke protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Keep the client NPO until swallowing safety is assessed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100636",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Activate the stroke response and establish the last-known-well time.",
        "Obtain urgent brain imaging and follow the stroke protocol.",
        "Keep the client NPO until swallowing safety is assessed.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Activate the stroke response and establish the last-known-well time.",
        "Obtain urgent brain imaging and follow the stroke protocol.",
        "Keep the client NPO until swallowing safety is assessed."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Acute ischemic stroke requiring time-sensitive evaluation while supporting timely reassessment.",
      "options": {
        "Activate the stroke response and establish the last-known-well time.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Obtain urgent brain imaging and follow the stroke protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Keep the client NPO until swallowing safety is assessed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-023",
    "caseTitle": "Acute ischemic stroke with changing neurologic findings",
    "caseStudyContext": {
      "id": "QR-CS-023",
      "title": "Acute ischemic stroke with changing neurologic findings",
      "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic care",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "nursingNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "nursesNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "vitalSigns": "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%.",
    "diagnosticResults": "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending.",
    "providerOrders": "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening",
    "stimulus": {
      "caseGroupId": "QR-CS-023",
      "patientProfile": {
        "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
      },
      "tabs": {
        "history": [
          "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
        ],
        "nursesNotes": [
          "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20."
        ],
        "vitalSigns": [
          "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%."
        ],
        "labResults": [
          "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending."
        ],
        "providerOrders": [
          "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Stroke and thrombolytic care",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/stroke",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100637",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Maintain NPO status until swallow screening",
      "Complete focused neurologic assessment and glucose check",
      "Obtain urgent noncontrast head CT",
      "Activate stroke response and document last-known-well"
    ],
    "correctAnswer": [
      "Activate stroke response and document last-known-well",
      "Obtain urgent noncontrast head CT",
      "Complete focused neurologic assessment and glucose check",
      "Maintain NPO status until swallow screening"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute ischemic stroke requiring time-sensitive evaluation.",
    "optionRationales": {
      "Maintain NPO status until swallow screening": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Complete focused neurologic assessment and glucose check": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Obtain urgent noncontrast head CT": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate stroke response and document last-known-well": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100637",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Maintain NPO status until swallow screening",
        "Complete focused neurologic assessment and glucose check",
        "Obtain urgent noncontrast head CT",
        "Activate stroke response and document last-known-well"
      ],
      "answerKey": [
        "Activate stroke response and document last-known-well",
        "Obtain urgent noncontrast head CT",
        "Complete focused neurologic assessment and glucose check",
        "Maintain NPO status until swallow screening"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute ischemic stroke requiring time-sensitive evaluation.",
      "options": {
        "Maintain NPO status until swallow screening": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Complete focused neurologic assessment and glucose check": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Obtain urgent noncontrast head CT": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate stroke response and document last-known-well": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Maintain NPO status until swallow screening",
      "Complete focused neurologic assessment and glucose check",
      "Obtain urgent noncontrast head CT",
      "Activate stroke response and document last-known-well"
    ],
    "correctOrder": [
      "Activate stroke response and document last-known-well",
      "Obtain urgent noncontrast head CT",
      "Complete focused neurologic assessment and glucose check",
      "Maintain NPO status until swallow screening"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-023",
    "caseTitle": "Acute ischemic stroke with changing neurologic findings",
    "caseStudyContext": {
      "id": "QR-CS-023",
      "title": "Acute ischemic stroke with changing neurologic findings",
      "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic care",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation.",
    "nursingNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "nursesNotes": "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20.",
    "vitalSigns": "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%.",
    "diagnosticResults": "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending.",
    "providerOrders": "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening",
    "stimulus": {
      "caseGroupId": "QR-CS-023",
      "patientProfile": {
        "summary": "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
      },
      "tabs": {
        "history": [
          "A 68-year-old develops sudden aphasia and right-sided weakness while at home; neurologic findings change during emergency evaluation."
        ],
        "nursesNotes": [
          "The client has sudden aphasia, right facial droop, and right arm weakness. Family reports the client was last known well at 07:20."
        ],
        "vitalSigns": [
          "BP 178/96 mmHg; HR 96/min; RR 18/min; SpO₂ 97%."
        ],
        "labResults": [
          "Point-of-care glucose 112 mg/dL; urgent noncontrast head CT is pending."
        ],
        "providerOrders": [
          "Activate stroke response and document last-known-well; Obtain urgent noncontrast head CT; Complete focused neurologic assessment and glucose check; Maintain NPO status until swallow screening"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Stroke and thrombolytic care",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/stroke",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100638",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Acute stroke is suspected; activate stroke pathway and determine treatment window.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Acute stroke is suspected; activate stroke pathway and determine treatment window.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Acute stroke is suspected; activate stroke pathway and determine treatment window.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100638",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Acute stroke is suspected; activate stroke pathway and determine treatment window.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Acute stroke is suspected; activate stroke pathway and determine treatment window.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Acute stroke is suspected; activate stroke pathway and determine treatment window.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Acute ischemic stroke with changing neurologic findings — clinical progression",
      "stages": [
        {
          "time": "Initial evaluation",
          "situation": "Aphasia and right arm weakness; last known well 07:20.",
          "question": "Acute stroke is suspected; activate stroke pathway and determine treatment window.",
          "options": [
            "Acute stroke is suspected; activate stroke pathway and determine treatment window.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Acute stroke is suspected; activate stroke pathway and determine treatment window."
        },
        {
          "time": "During imaging preparation",
          "situation": "New worsening right arm drift and increased aphasia.",
          "question": "Neurologic deterioration; notify stroke team immediately and reassess.",
          "options": [
            "Neurologic deterioration; notify stroke team immediately and reassess.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Neurologic deterioration; notify stroke team immediately and reassess."
        },
        {
          "time": "After acute treatment decision",
          "situation": "Neurologic findings are stable; no new deficits on repeat assessment.",
          "question": "Continue frequent neurologic monitoring and prevent aspiration and secondary injury.",
          "options": [
            "Continue frequent neurologic monitoring and prevent aspiration and secondary injury.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Continue frequent neurologic monitoring and prevent aspiration and secondary injury."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-024",
    "caseTitle": "Postpartum hemorrhage with evolving hemodynamic instability",
    "caseStudyContext": {
      "id": "QR-CS-024",
      "title": "Postpartum hemorrhage with evolving hemodynamic instability",
      "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal Newborn",
    "topic": "Postpartum hemorrhage",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "nursingNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "nursesNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "vitalSigns": "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy.",
    "diagnosticResults": "Hemoglobin is decreasing; type and crossmatch are in progress.",
    "providerOrders": "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response",
    "stimulus": {
      "caseGroupId": "QR-CS-024",
      "patientProfile": {
        "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
      },
      "tabs": {
        "history": [
          "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
        ],
        "nursesNotes": [
          "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness."
        ],
        "vitalSigns": [
          "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy."
        ],
        "labResults": [
          "Hemoglobin is decreasing; type and crossmatch are in progress."
        ],
        "providerOrders": [
          "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Postpartum hemorrhage",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100639",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "boggy",
      "bleeding",
      "hr"
    ],
    "rationale": "The combination of boggy uterine fundus, heavy ongoing vaginal bleeding, heart rate 132/min supports recognition of Postpartum hemorrhage from uterine atony with hypovolemia.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100639",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "boggy",
        "bleeding",
        "hr"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of boggy uterine fundus, heavy ongoing vaginal bleeding, heart rate 132/min supports recognition of Postpartum hemorrhage from uterine atony with hypovolemia.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Boggy uterine fundus. Heavy ongoing vaginal bleeding. Heart rate 132/min. Blood pressure 88/52 mmHg. Reports dizziness. A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "highlightSegments": [
      {
        "id": "boggy",
        "text": "Boggy uterine fundus"
      },
      {
        "id": "bleeding",
        "text": "Heavy ongoing vaginal bleeding"
      },
      {
        "id": "hr",
        "text": "Heart rate 132/min"
      },
      {
        "id": "bp",
        "text": "Blood pressure 88/52 mmHg"
      },
      {
        "id": "dizzy",
        "text": "Reports dizziness"
      }
    ],
    "correctHighlights": [
      "boggy",
      "bleeding",
      "hr"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-024",
    "caseTitle": "Postpartum hemorrhage with evolving hemodynamic instability",
    "caseStudyContext": {
      "id": "QR-CS-024",
      "title": "Postpartum hemorrhage with evolving hemodynamic instability",
      "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal Newborn",
    "topic": "Postpartum hemorrhage",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "nursingNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "nursesNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "vitalSigns": "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy.",
    "diagnosticResults": "Hemoglobin is decreasing; type and crossmatch are in progress.",
    "providerOrders": "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response",
    "stimulus": {
      "caseGroupId": "QR-CS-024",
      "patientProfile": {
        "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
      },
      "tabs": {
        "history": [
          "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
        ],
        "nursesNotes": [
          "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness."
        ],
        "vitalSigns": [
          "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy."
        ],
        "labResults": [
          "Hemoglobin is decreasing; type and crossmatch are in progress."
        ],
        "providerOrders": [
          "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Postpartum hemorrhage",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100640",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Boggy uterine fundus",
      "Heavy ongoing vaginal bleeding",
      "Heart rate 132/min",
      "Blood pressure 88/52 mmHg"
    ],
    "correctAnswer": {
      "boggy": "Uterine atony cue",
      "bleeding": "Active hemorrhage",
      "hr": "Compensatory tachycardia",
      "bp": "Hemodynamic instability"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Postpartum hemorrhage from uterine atony with hypovolemia.",
    "optionRationales": {
      "Boggy uterine fundus": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Heavy ongoing vaginal bleeding": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Heart rate 132/min": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Blood pressure 88/52 mmHg": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100640",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "boggy": [
          "Uterine atony cue",
          "Active hemorrhage",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ],
        "bleeding": [
          "Uterine atony cue",
          "Active hemorrhage",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ],
        "hr": [
          "Uterine atony cue",
          "Active hemorrhage",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ],
        "bp": [
          "Uterine atony cue",
          "Active hemorrhage",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ]
      },
      "answerKey": {
        "boggy": "Uterine atony cue",
        "bleeding": "Active hemorrhage",
        "hr": "Compensatory tachycardia",
        "bp": "Hemodynamic instability"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Postpartum hemorrhage from uterine atony with hypovolemia.",
      "options": {
        "Boggy uterine fundus": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Heavy ongoing vaginal bleeding": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Heart rate 132/min": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Blood pressure 88/52 mmHg": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "boggy",
        "label": "Boggy uterine fundus"
      },
      {
        "id": "bleeding",
        "label": "Heavy ongoing vaginal bleeding"
      },
      {
        "id": "hr",
        "label": "Heart rate 132/min"
      },
      {
        "id": "bp",
        "label": "Blood pressure 88/52 mmHg"
      }
    ],
    "columns": [
      "Uterine atony cue",
      "Active hemorrhage",
      "Compensatory tachycardia",
      "Hemodynamic instability"
    ],
    "correctAnswers": {
      "boggy": "Uterine atony cue",
      "bleeding": "Active hemorrhage",
      "hr": "Compensatory tachycardia",
      "bp": "Hemodynamic instability"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-024",
    "caseTitle": "Postpartum hemorrhage with evolving hemodynamic instability",
    "caseStudyContext": {
      "id": "QR-CS-024",
      "title": "Postpartum hemorrhage with evolving hemodynamic instability",
      "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal Newborn",
    "topic": "Postpartum hemorrhage",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "nursingNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "nursesNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "vitalSigns": "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy.",
    "diagnosticResults": "Hemoglobin is decreasing; type and crossmatch are in progress.",
    "providerOrders": "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response",
    "stimulus": {
      "caseGroupId": "QR-CS-024",
      "patientProfile": {
        "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
      },
      "tabs": {
        "history": [
          "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
        ],
        "nursesNotes": [
          "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness."
        ],
        "vitalSigns": [
          "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy."
        ],
        "labResults": [
          "Hemoglobin is decreasing; type and crossmatch are in progress."
        ],
        "providerOrders": [
          "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Postpartum hemorrhage",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100641",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Postpartum hemorrhage from uterine atony with hypovolemia",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
        "Massage the fundus and administer prescribed uterotonic therapy.",
        "Establish large-bore IV access and prepare ordered blood products."
      ],
      "monitoring": [
        "Quantified blood loss, uterine tone, and response to uterotonics",
        "Heart rate, blood pressure, mental status, and urine output"
      ]
    },
    "correctAnswer": {
      "condition": "Postpartum hemorrhage from uterine atony with hypovolemia",
      "actions": [
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
        "Massage the fundus and administer prescribed uterotonic therapy."
      ],
      "monitoring": [
        "Quantified blood loss, uterine tone, and response to uterotonics",
        "Heart rate, blood pressure, mental status, and urine output"
      ]
    },
    "rationale": "The most likely condition is Postpartum hemorrhage from uterine atony with hypovolemia. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Postpartum hemorrhage from uterine atony with hypovolemia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Call for obstetric emergency assistance and initiate the hemorrhage protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Massage the fundus and administer prescribed uterotonic therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Quantified blood loss, uterine tone, and response to uterotonics": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Heart rate, blood pressure, mental status, and urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100641",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Postpartum hemorrhage from uterine atony with hypovolemia",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
          "Massage the fundus and administer prescribed uterotonic therapy.",
          "Establish large-bore IV access and prepare ordered blood products."
        ],
        "monitoring": [
          "Quantified blood loss, uterine tone, and response to uterotonics",
          "Heart rate, blood pressure, mental status, and urine output"
        ]
      },
      "answerKey": {
        "condition": "Postpartum hemorrhage from uterine atony with hypovolemia",
        "actions": [
          "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
          "Massage the fundus and administer prescribed uterotonic therapy."
        ],
        "monitoring": [
          "Quantified blood loss, uterine tone, and response to uterotonics",
          "Heart rate, blood pressure, mental status, and urine output"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Postpartum hemorrhage from uterine atony with hypovolemia. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Postpartum hemorrhage from uterine atony with hypovolemia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Massage the fundus and administer prescribed uterotonic therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Quantified blood loss, uterine tone, and response to uterotonics": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Heart rate, blood pressure, mental status, and urine output": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Postpartum hemorrhage from uterine atony with hypovolemia",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
        "Massage the fundus and administer prescribed uterotonic therapy.",
        "Establish large-bore IV access and prepare ordered blood products."
      ],
      "monitoring": [
        "Quantified blood loss, uterine tone, and response to uterotonics",
        "Heart rate, blood pressure, mental status, and urine output"
      ]
    },
    "correctAnswers": {
      "condition": "Postpartum hemorrhage from uterine atony with hypovolemia",
      "actions": [
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
        "Massage the fundus and administer prescribed uterotonic therapy."
      ],
      "monitoring": [
        "Quantified blood loss, uterine tone, and response to uterotonics",
        "Heart rate, blood pressure, mental status, and urine output"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-024",
    "caseTitle": "Postpartum hemorrhage with evolving hemodynamic instability",
    "caseStudyContext": {
      "id": "QR-CS-024",
      "title": "Postpartum hemorrhage with evolving hemodynamic instability",
      "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal Newborn",
    "topic": "Postpartum hemorrhage",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "nursingNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "nursesNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "vitalSigns": "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy.",
    "diagnosticResults": "Hemoglobin is decreasing; type and crossmatch are in progress.",
    "providerOrders": "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response",
    "stimulus": {
      "caseGroupId": "QR-CS-024",
      "patientProfile": {
        "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
      },
      "tabs": {
        "history": [
          "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
        ],
        "nursesNotes": [
          "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness."
        ],
        "vitalSigns": [
          "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy."
        ],
        "labResults": [
          "Hemoglobin is decreasing; type and crossmatch are in progress."
        ],
        "providerOrders": [
          "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Postpartum hemorrhage",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100642",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
      "Massage the fundus and administer prescribed uterotonic therapy.",
      "Establish large-bore IV access and prepare ordered blood products.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
      "Massage the fundus and administer prescribed uterotonic therapy.",
      "Establish large-bore IV access and prepare ordered blood products."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Postpartum hemorrhage from uterine atony with hypovolemia while supporting timely reassessment.",
    "optionRationales": {
      "Call for obstetric emergency assistance and initiate the hemorrhage protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Massage the fundus and administer prescribed uterotonic therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100642",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
        "Massage the fundus and administer prescribed uterotonic therapy.",
        "Establish large-bore IV access and prepare ordered blood products.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.",
        "Massage the fundus and administer prescribed uterotonic therapy.",
        "Establish large-bore IV access and prepare ordered blood products."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Postpartum hemorrhage from uterine atony with hypovolemia while supporting timely reassessment.",
      "options": {
        "Call for obstetric emergency assistance and initiate the hemorrhage protocol.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Massage the fundus and administer prescribed uterotonic therapy.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-024",
    "caseTitle": "Postpartum hemorrhage with evolving hemodynamic instability",
    "caseStudyContext": {
      "id": "QR-CS-024",
      "title": "Postpartum hemorrhage with evolving hemodynamic instability",
      "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal Newborn",
    "topic": "Postpartum hemorrhage",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "nursingNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "nursesNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "vitalSigns": "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy.",
    "diagnosticResults": "Hemoglobin is decreasing; type and crossmatch are in progress.",
    "providerOrders": "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response",
    "stimulus": {
      "caseGroupId": "QR-CS-024",
      "patientProfile": {
        "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
      },
      "tabs": {
        "history": [
          "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
        ],
        "nursesNotes": [
          "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness."
        ],
        "vitalSigns": [
          "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy."
        ],
        "labResults": [
          "Hemoglobin is decreasing; type and crossmatch are in progress."
        ],
        "providerOrders": [
          "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Postpartum hemorrhage",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100643",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Reassess bleeding and hemodynamic response",
      "Establish IV access and prepare blood products",
      "Perform fundal massage and administer prescribed uterotonic",
      "Activate obstetric hemorrhage response"
    ],
    "correctAnswer": [
      "Activate obstetric hemorrhage response",
      "Perform fundal massage and administer prescribed uterotonic",
      "Establish IV access and prepare blood products",
      "Reassess bleeding and hemodynamic response"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Postpartum hemorrhage from uterine atony with hypovolemia.",
    "optionRationales": {
      "Reassess bleeding and hemodynamic response": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Establish IV access and prepare blood products": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Perform fundal massage and administer prescribed uterotonic": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate obstetric hemorrhage response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100643",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Reassess bleeding and hemodynamic response",
        "Establish IV access and prepare blood products",
        "Perform fundal massage and administer prescribed uterotonic",
        "Activate obstetric hemorrhage response"
      ],
      "answerKey": [
        "Activate obstetric hemorrhage response",
        "Perform fundal massage and administer prescribed uterotonic",
        "Establish IV access and prepare blood products",
        "Reassess bleeding and hemodynamic response"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Postpartum hemorrhage from uterine atony with hypovolemia.",
      "options": {
        "Reassess bleeding and hemodynamic response": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Establish IV access and prepare blood products": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Perform fundal massage and administer prescribed uterotonic": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate obstetric hemorrhage response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Reassess bleeding and hemodynamic response",
      "Establish IV access and prepare blood products",
      "Perform fundal massage and administer prescribed uterotonic",
      "Activate obstetric hemorrhage response"
    ],
    "correctOrder": [
      "Activate obstetric hemorrhage response",
      "Perform fundal massage and administer prescribed uterotonic",
      "Establish IV access and prepare blood products",
      "Reassess bleeding and hemodynamic response"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-024",
    "caseTitle": "Postpartum hemorrhage with evolving hemodynamic instability",
    "caseStudyContext": {
      "id": "QR-CS-024",
      "title": "Postpartum hemorrhage with evolving hemodynamic instability",
      "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal Newborn",
    "topic": "Postpartum hemorrhage",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia.",
    "nursingNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "nursesNotes": "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness.",
    "vitalSigns": "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy.",
    "diagnosticResults": "Hemoglobin is decreasing; type and crossmatch are in progress.",
    "providerOrders": "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response",
    "stimulus": {
      "caseGroupId": "QR-CS-024",
      "patientProfile": {
        "summary": "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
      },
      "tabs": {
        "history": [
          "A client 30 minutes after vaginal birth has heavy vaginal bleeding, a boggy uterus, and progressive tachycardia."
        ],
        "nursesNotes": [
          "The fundus is boggy and above the umbilicus. Heavy vaginal bleeding continues despite initial pad changes; the client reports dizziness."
        ],
        "vitalSigns": [
          "HR 132/min; BP 88/52 mmHg; RR 24/min; skin pale and clammy."
        ],
        "labResults": [
          "Hemoglobin is decreasing; type and crossmatch are in progress."
        ],
        "providerOrders": [
          "Activate obstetric hemorrhage response; Perform fundal massage and administer prescribed uterotonic; Establish IV access and prepare blood products; Reassess bleeding and hemodynamic response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Postpartum hemorrhage",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2017/10/postpartum-hemorrhage",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100644",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Hemorrhage with instability; activate emergency response.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Hemorrhage with instability; activate emergency response.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Hemorrhage with instability; activate emergency response.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100644",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Hemorrhage with instability; activate emergency response.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Hemorrhage with instability; activate emergency response.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Hemorrhage with instability; activate emergency response.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Postpartum hemorrhage with evolving hemodynamic instability — clinical progression",
      "stages": [
        {
          "time": "Initial postpartum assessment",
          "situation": "Boggy fundus, heavy bleeding, HR 132/min, BP 88/52 mmHg.",
          "question": "Hemorrhage with instability; activate emergency response.",
          "options": [
            "Hemorrhage with instability; activate emergency response.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Hemorrhage with instability; activate emergency response."
        },
        {
          "time": "After initial interventions",
          "situation": "Fundus firms briefly but bleeding continues and BP remains low.",
          "question": "Persistent hemorrhage; escalate treatment and prepare blood products.",
          "options": [
            "Persistent hemorrhage; escalate treatment and prepare blood products.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Persistent hemorrhage; escalate treatment and prepare blood products."
        },
        {
          "time": "After definitive treatment",
          "situation": "Bleeding decreases, fundus remains firm, HR and BP improve.",
          "question": "Treatment response is improving; continue close postpartum surveillance.",
          "options": [
            "Treatment response is improving; continue close postpartum surveillance.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Treatment response is improving; continue close postpartum surveillance."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-025",
    "caseTitle": "Diabetic ketoacidosis with potassium and fluid shifts",
    "caseStudyContext": {
      "id": "QR-CS-025",
      "title": "Diabetic ketoacidosis with potassium and fluid shifts",
      "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Diabetic ketoacidosis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "nursingNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "nursesNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "vitalSigns": "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C.",
    "diagnosticResults": "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones.",
    "providerOrders": "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met",
    "stimulus": {
      "caseGroupId": "QR-CS-025",
      "patientProfile": {
        "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
      },
      "tabs": {
        "history": [
          "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
        ],
        "nursesNotes": [
          "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations."
        ],
        "vitalSigns": [
          "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C."
        ],
        "labResults": [
          "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones."
        ],
        "providerOrders": [
          "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Diabetic ketoacidosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-ketoacidosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100645",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "glucose",
      "ph",
      "bicarb"
    ],
    "rationale": "The combination of glucose 486 mg/dl, ph 7.18, bicarbonate 10 meq/l supports recognition of Diabetic ketoacidosis with significant volume depletion.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100645",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "glucose",
        "ph",
        "bicarb"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of glucose 486 mg/dl, ph 7.18, bicarbonate 10 meq/l supports recognition of Diabetic ketoacidosis with significant volume depletion.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Glucose 486 mg/dL. pH 7.18. Bicarbonate 10 mEq/L. Positive serum ketones. Dry mucous membranes and hypotension. A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "highlightSegments": [
      {
        "id": "glucose",
        "text": "Glucose 486 mg/dL"
      },
      {
        "id": "ph",
        "text": "pH 7.18"
      },
      {
        "id": "bicarb",
        "text": "Bicarbonate 10 mEq/L"
      },
      {
        "id": "ketones",
        "text": "Positive serum ketones"
      },
      {
        "id": "dehydration",
        "text": "Dry mucous membranes and hypotension"
      }
    ],
    "correctHighlights": [
      "glucose",
      "ph",
      "bicarb"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-025",
    "caseTitle": "Diabetic ketoacidosis with potassium and fluid shifts",
    "caseStudyContext": {
      "id": "QR-CS-025",
      "title": "Diabetic ketoacidosis with potassium and fluid shifts",
      "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Diabetic ketoacidosis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "nursingNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "nursesNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "vitalSigns": "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C.",
    "diagnosticResults": "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones.",
    "providerOrders": "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met",
    "stimulus": {
      "caseGroupId": "QR-CS-025",
      "patientProfile": {
        "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
      },
      "tabs": {
        "history": [
          "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
        ],
        "nursesNotes": [
          "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations."
        ],
        "vitalSigns": [
          "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C."
        ],
        "labResults": [
          "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones."
        ],
        "providerOrders": [
          "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Diabetic ketoacidosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-ketoacidosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100646",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Glucose 486 mg/dL",
      "pH 7.18",
      "Bicarbonate 10 mEq/L",
      "Positive serum ketones"
    ],
    "correctAnswer": {
      "glucose": "Hyperglycemia",
      "ph": "Metabolic acidosis",
      "bicarb": "Metabolic acidosis",
      "ketones": "Ketosis"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Diabetic ketoacidosis with significant volume depletion.",
    "optionRationales": {
      "Glucose 486 mg/dL": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "pH 7.18": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Bicarbonate 10 mEq/L": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Positive serum ketones": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100646",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "glucose": [
          "Hyperglycemia",
          "Metabolic acidosis",
          "Ketosis"
        ],
        "ph": [
          "Hyperglycemia",
          "Metabolic acidosis",
          "Ketosis"
        ],
        "bicarb": [
          "Hyperglycemia",
          "Metabolic acidosis",
          "Ketosis"
        ],
        "ketones": [
          "Hyperglycemia",
          "Metabolic acidosis",
          "Ketosis"
        ]
      },
      "answerKey": {
        "glucose": "Hyperglycemia",
        "ph": "Metabolic acidosis",
        "bicarb": "Metabolic acidosis",
        "ketones": "Ketosis"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Diabetic ketoacidosis with significant volume depletion.",
      "options": {
        "Glucose 486 mg/dL": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "pH 7.18": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Bicarbonate 10 mEq/L": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Positive serum ketones": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "glucose",
        "label": "Glucose 486 mg/dL"
      },
      {
        "id": "ph",
        "label": "pH 7.18"
      },
      {
        "id": "bicarb",
        "label": "Bicarbonate 10 mEq/L"
      },
      {
        "id": "ketones",
        "label": "Positive serum ketones"
      }
    ],
    "columns": [
      "Hyperglycemia",
      "Metabolic acidosis",
      "Ketosis"
    ],
    "correctAnswers": {
      "glucose": "Hyperglycemia",
      "ph": "Metabolic acidosis",
      "bicarb": "Metabolic acidosis",
      "ketones": "Ketosis"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-025",
    "caseTitle": "Diabetic ketoacidosis with potassium and fluid shifts",
    "caseStudyContext": {
      "id": "QR-CS-025",
      "title": "Diabetic ketoacidosis with potassium and fluid shifts",
      "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Diabetic ketoacidosis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "nursingNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "nursesNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "vitalSigns": "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C.",
    "diagnosticResults": "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones.",
    "providerOrders": "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met",
    "stimulus": {
      "caseGroupId": "QR-CS-025",
      "patientProfile": {
        "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
      },
      "tabs": {
        "history": [
          "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
        ],
        "nursesNotes": [
          "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations."
        ],
        "vitalSigns": [
          "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C."
        ],
        "labResults": [
          "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones."
        ],
        "providerOrders": [
          "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Diabetic ketoacidosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-ketoacidosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100647",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Diabetic ketoacidosis with significant volume depletion",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium.",
        "Monitor potassium and cardiac rhythm closely during treatment."
      ],
      "monitoring": [
        "Potassium, glucose, bicarbonate, anion gap, and ketones",
        "Neurologic status, fluid balance, and cardiac rhythm"
      ]
    },
    "correctAnswer": {
      "condition": "Diabetic ketoacidosis with significant volume depletion",
      "actions": [
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium."
      ],
      "monitoring": [
        "Potassium, glucose, bicarbonate, anion gap, and ketones",
        "Neurologic status, fluid balance, and cardiac rhythm"
      ]
    },
    "rationale": "The most likely condition is Diabetic ketoacidosis with significant volume depletion. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Diabetic ketoacidosis with significant volume depletion": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Begin prescribed isotonic IV fluid replacement and frequent reassessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Initiate insulin infusion according to the DKA protocol after evaluating potassium.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Monitor potassium and cardiac rhythm closely during treatment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Potassium, glucose, bicarbonate, anion gap, and ketones": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Neurologic status, fluid balance, and cardiac rhythm": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100647",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Diabetic ketoacidosis with significant volume depletion",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
          "Initiate insulin infusion according to the DKA protocol after evaluating potassium.",
          "Monitor potassium and cardiac rhythm closely during treatment."
        ],
        "monitoring": [
          "Potassium, glucose, bicarbonate, anion gap, and ketones",
          "Neurologic status, fluid balance, and cardiac rhythm"
        ]
      },
      "answerKey": {
        "condition": "Diabetic ketoacidosis with significant volume depletion",
        "actions": [
          "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
          "Initiate insulin infusion according to the DKA protocol after evaluating potassium."
        ],
        "monitoring": [
          "Potassium, glucose, bicarbonate, anion gap, and ketones",
          "Neurologic status, fluid balance, and cardiac rhythm"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Diabetic ketoacidosis with significant volume depletion. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Diabetic ketoacidosis with significant volume depletion": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Monitor potassium and cardiac rhythm closely during treatment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Potassium, glucose, bicarbonate, anion gap, and ketones": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Neurologic status, fluid balance, and cardiac rhythm": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Diabetic ketoacidosis with significant volume depletion",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium.",
        "Monitor potassium and cardiac rhythm closely during treatment."
      ],
      "monitoring": [
        "Potassium, glucose, bicarbonate, anion gap, and ketones",
        "Neurologic status, fluid balance, and cardiac rhythm"
      ]
    },
    "correctAnswers": {
      "condition": "Diabetic ketoacidosis with significant volume depletion",
      "actions": [
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium."
      ],
      "monitoring": [
        "Potassium, glucose, bicarbonate, anion gap, and ketones",
        "Neurologic status, fluid balance, and cardiac rhythm"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-025",
    "caseTitle": "Diabetic ketoacidosis with potassium and fluid shifts",
    "caseStudyContext": {
      "id": "QR-CS-025",
      "title": "Diabetic ketoacidosis with potassium and fluid shifts",
      "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Diabetic ketoacidosis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "nursingNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "nursesNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "vitalSigns": "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C.",
    "diagnosticResults": "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones.",
    "providerOrders": "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met",
    "stimulus": {
      "caseGroupId": "QR-CS-025",
      "patientProfile": {
        "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
      },
      "tabs": {
        "history": [
          "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
        ],
        "nursesNotes": [
          "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations."
        ],
        "vitalSigns": [
          "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C."
        ],
        "labResults": [
          "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones."
        ],
        "providerOrders": [
          "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Diabetic ketoacidosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-ketoacidosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100648",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
      "Initiate insulin infusion according to the DKA protocol after evaluating potassium.",
      "Monitor potassium and cardiac rhythm closely during treatment.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
      "Initiate insulin infusion according to the DKA protocol after evaluating potassium.",
      "Monitor potassium and cardiac rhythm closely during treatment."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Diabetic ketoacidosis with significant volume depletion while supporting timely reassessment.",
    "optionRationales": {
      "Begin prescribed isotonic IV fluid replacement and frequent reassessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Initiate insulin infusion according to the DKA protocol after evaluating potassium.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Monitor potassium and cardiac rhythm closely during treatment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100648",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium.",
        "Monitor potassium and cardiac rhythm closely during treatment.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium.",
        "Monitor potassium and cardiac rhythm closely during treatment."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Diabetic ketoacidosis with significant volume depletion while supporting timely reassessment.",
      "options": {
        "Begin prescribed isotonic IV fluid replacement and frequent reassessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Initiate insulin infusion according to the DKA protocol after evaluating potassium.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Monitor potassium and cardiac rhythm closely during treatment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-025",
    "caseTitle": "Diabetic ketoacidosis with potassium and fluid shifts",
    "caseStudyContext": {
      "id": "QR-CS-025",
      "title": "Diabetic ketoacidosis with potassium and fluid shifts",
      "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Diabetic ketoacidosis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "nursingNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "nursesNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "vitalSigns": "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C.",
    "diagnosticResults": "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones.",
    "providerOrders": "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met",
    "stimulus": {
      "caseGroupId": "QR-CS-025",
      "patientProfile": {
        "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
      },
      "tabs": {
        "history": [
          "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
        ],
        "nursesNotes": [
          "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations."
        ],
        "vitalSigns": [
          "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C."
        ],
        "labResults": [
          "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones."
        ],
        "providerOrders": [
          "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Diabetic ketoacidosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-ketoacidosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100649",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Transition to subcutaneous insulin when criteria are met",
      "Monitor glucose and electrolytes frequently",
      "Verify potassium and begin insulin per DKA protocol",
      "Initiate protocol-directed isotonic IV fluids"
    ],
    "correctAnswer": [
      "Initiate protocol-directed isotonic IV fluids",
      "Verify potassium and begin insulin per DKA protocol",
      "Monitor glucose and electrolytes frequently",
      "Transition to subcutaneous insulin when criteria are met"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Diabetic ketoacidosis with significant volume depletion.",
    "optionRationales": {
      "Transition to subcutaneous insulin when criteria are met": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Monitor glucose and electrolytes frequently": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Verify potassium and begin insulin per DKA protocol": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Initiate protocol-directed isotonic IV fluids": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100649",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Transition to subcutaneous insulin when criteria are met",
        "Monitor glucose and electrolytes frequently",
        "Verify potassium and begin insulin per DKA protocol",
        "Initiate protocol-directed isotonic IV fluids"
      ],
      "answerKey": [
        "Initiate protocol-directed isotonic IV fluids",
        "Verify potassium and begin insulin per DKA protocol",
        "Monitor glucose and electrolytes frequently",
        "Transition to subcutaneous insulin when criteria are met"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Diabetic ketoacidosis with significant volume depletion.",
      "options": {
        "Transition to subcutaneous insulin when criteria are met": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Monitor glucose and electrolytes frequently": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Verify potassium and begin insulin per DKA protocol": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Initiate protocol-directed isotonic IV fluids": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Transition to subcutaneous insulin when criteria are met",
      "Monitor glucose and electrolytes frequently",
      "Verify potassium and begin insulin per DKA protocol",
      "Initiate protocol-directed isotonic IV fluids"
    ],
    "correctOrder": [
      "Initiate protocol-directed isotonic IV fluids",
      "Verify potassium and begin insulin per DKA protocol",
      "Monitor glucose and electrolytes frequently",
      "Transition to subcutaneous insulin when criteria are met"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-025",
    "caseTitle": "Diabetic ketoacidosis with potassium and fluid shifts",
    "caseStudyContext": {
      "id": "QR-CS-025",
      "title": "Diabetic ketoacidosis with potassium and fluid shifts",
      "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Diabetic ketoacidosis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations.",
    "nursingNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "nursesNotes": "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations.",
    "vitalSigns": "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C.",
    "diagnosticResults": "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones.",
    "providerOrders": "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met",
    "stimulus": {
      "caseGroupId": "QR-CS-025",
      "patientProfile": {
        "summary": "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
      },
      "tabs": {
        "history": [
          "A 22-year-old with type 1 diabetes presents with vomiting, abdominal pain, dehydration, and deep rapid respirations."
        ],
        "nursesNotes": [
          "The client is thirsty, nauseated, and lethargic with dry mucous membranes and deep rapid respirations."
        ],
        "vitalSigns": [
          "HR 126/min; BP 94/58 mmHg; RR 30/min; temperature 37.2°C."
        ],
        "labResults": [
          "Glucose 486 mg/dL; pH 7.18; bicarbonate 10 mEq/L; potassium 5.4 mEq/L; positive serum ketones."
        ],
        "providerOrders": [
          "Initiate protocol-directed isotonic IV fluids; Verify potassium and begin insulin per DKA protocol; Monitor glucose and electrolytes frequently; Transition to subcutaneous insulin when criteria are met"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Diabetic ketoacidosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/diabetes/overview/preventing-problems/diabetic-ketoacidosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100650",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "DKA with acidosis and volume depletion; begin protocol-directed care.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "DKA with acidosis and volume depletion; begin protocol-directed care.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "DKA with acidosis and volume depletion; begin protocol-directed care.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100650",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "DKA with acidosis and volume depletion; begin protocol-directed care.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "DKA with acidosis and volume depletion; begin protocol-directed care.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "DKA with acidosis and volume depletion; begin protocol-directed care.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Diabetic ketoacidosis with potassium and fluid shifts — clinical progression",
      "stages": [
        {
          "time": "Admission",
          "situation": "Glucose 486 mg/dL, pH 7.18, bicarbonate 10 mEq/L, ketones positive.",
          "question": "DKA with acidosis and volume depletion; begin protocol-directed care.",
          "options": [
            "DKA with acidosis and volume depletion; begin protocol-directed care.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "DKA with acidosis and volume depletion; begin protocol-directed care."
        },
        {
          "time": "During insulin therapy",
          "situation": "Glucose falls; potassium decreases to 3.6 mEq/L.",
          "question": "Potassium is falling; monitor closely and replace per protocol to prevent dysrhythmia.",
          "options": [
            "Potassium is falling; monitor closely and replace per protocol to prevent dysrhythmia.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Potassium is falling; monitor closely and replace per protocol to prevent dysrhythmia."
        },
        {
          "time": "Resolution phase",
          "situation": "Acidosis and ketones improve; client tolerates oral intake.",
          "question": "DKA is resolving; transition therapy safely with overlap per protocol.",
          "options": [
            "DKA is resolving; transition therapy safely with overlap per protocol.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "DKA is resolving; transition therapy safely with overlap per protocol."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-026",
    "caseTitle": "Acute coronary syndrome with dysrhythmia risk",
    "caseStudyContext": {
      "id": "QR-CS-026",
      "title": "Acute coronary syndrome with dysrhythmia risk",
      "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute coronary syndrome and myocardial infarction",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "nursingNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "nursesNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "vitalSigns": "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%.",
    "diagnosticResults": "ECG shows ST-segment elevation in contiguous leads; troponin is elevated.",
    "providerOrders": "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration",
    "stimulus": {
      "caseGroupId": "QR-CS-026",
      "patientProfile": {
        "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
      },
      "tabs": {
        "history": [
          "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
        ],
        "nursesNotes": [
          "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago."
        ],
        "vitalSigns": [
          "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%."
        ],
        "labResults": [
          "ECG shows ST-segment elevation in contiguous leads; troponin is elevated."
        ],
        "providerOrders": [
          "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute coronary syndrome and myocardial infarction",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.heart.org/en/health-topics/heart-attack",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100651",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "pain",
      "sweat",
      "ecg"
    ],
    "rationale": "The combination of crushing substernal pressure radiating to the jaw, diaphoresis and nausea, st-segment elevation in contiguous leads supports recognition of Acute myocardial infarction with risk for life-threatening dysrhythmia.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100651",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "pain",
        "sweat",
        "ecg"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of crushing substernal pressure radiating to the jaw, diaphoresis and nausea, st-segment elevation in contiguous leads supports recognition of Acute myocardial infarction with risk for life-threatening dysrhythmia.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Crushing substernal pressure radiating to the jaw. Diaphoresis and nausea. ST-segment elevation in contiguous leads. Elevated troponin. New ventricular ectopy. A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "highlightSegments": [
      {
        "id": "pain",
        "text": "Crushing substernal pressure radiating to the jaw"
      },
      {
        "id": "sweat",
        "text": "Diaphoresis and nausea"
      },
      {
        "id": "ecg",
        "text": "ST-segment elevation in contiguous leads"
      },
      {
        "id": "troponin",
        "text": "Elevated troponin"
      },
      {
        "id": "ectopy",
        "text": "New ventricular ectopy"
      }
    ],
    "correctHighlights": [
      "pain",
      "sweat",
      "ecg"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-026",
    "caseTitle": "Acute coronary syndrome with dysrhythmia risk",
    "caseStudyContext": {
      "id": "QR-CS-026",
      "title": "Acute coronary syndrome with dysrhythmia risk",
      "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute coronary syndrome and myocardial infarction",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "nursingNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "nursesNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "vitalSigns": "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%.",
    "diagnosticResults": "ECG shows ST-segment elevation in contiguous leads; troponin is elevated.",
    "providerOrders": "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration",
    "stimulus": {
      "caseGroupId": "QR-CS-026",
      "patientProfile": {
        "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
      },
      "tabs": {
        "history": [
          "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
        ],
        "nursesNotes": [
          "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago."
        ],
        "vitalSigns": [
          "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%."
        ],
        "labResults": [
          "ECG shows ST-segment elevation in contiguous leads; troponin is elevated."
        ],
        "providerOrders": [
          "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute coronary syndrome and myocardial infarction",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.heart.org/en/health-topics/heart-attack",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100652",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Crushing substernal pressure radiating to the jaw",
      "Diaphoresis and nausea",
      "ST-segment elevation in contiguous leads",
      "Elevated troponin"
    ],
    "correctAnswer": {
      "pain": "Acute myocardial ischemia cue",
      "sweat": "Autonomic response to ischemia",
      "ecg": "Acute myocardial injury pattern",
      "troponin": "Myocardial injury marker"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Acute myocardial infarction with risk for life-threatening dysrhythmia.",
    "optionRationales": {
      "Crushing substernal pressure radiating to the jaw": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Diaphoresis and nausea": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "ST-segment elevation in contiguous leads": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Elevated troponin": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100652",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "pain": [
          "Acute myocardial ischemia cue",
          "Autonomic response to ischemia",
          "Acute myocardial injury pattern",
          "Myocardial injury marker"
        ],
        "sweat": [
          "Acute myocardial ischemia cue",
          "Autonomic response to ischemia",
          "Acute myocardial injury pattern",
          "Myocardial injury marker"
        ],
        "ecg": [
          "Acute myocardial ischemia cue",
          "Autonomic response to ischemia",
          "Acute myocardial injury pattern",
          "Myocardial injury marker"
        ],
        "troponin": [
          "Acute myocardial ischemia cue",
          "Autonomic response to ischemia",
          "Acute myocardial injury pattern",
          "Myocardial injury marker"
        ]
      },
      "answerKey": {
        "pain": "Acute myocardial ischemia cue",
        "sweat": "Autonomic response to ischemia",
        "ecg": "Acute myocardial injury pattern",
        "troponin": "Myocardial injury marker"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Acute myocardial infarction with risk for life-threatening dysrhythmia.",
      "options": {
        "Crushing substernal pressure radiating to the jaw": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Diaphoresis and nausea": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "ST-segment elevation in contiguous leads": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Elevated troponin": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "pain",
        "label": "Crushing substernal pressure radiating to the jaw"
      },
      {
        "id": "sweat",
        "label": "Diaphoresis and nausea"
      },
      {
        "id": "ecg",
        "label": "ST-segment elevation in contiguous leads"
      },
      {
        "id": "troponin",
        "label": "Elevated troponin"
      }
    ],
    "columns": [
      "Acute myocardial ischemia cue",
      "Autonomic response to ischemia",
      "Acute myocardial injury pattern",
      "Myocardial injury marker"
    ],
    "correctAnswers": {
      "pain": "Acute myocardial ischemia cue",
      "sweat": "Autonomic response to ischemia",
      "ecg": "Acute myocardial injury pattern",
      "troponin": "Myocardial injury marker"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-026",
    "caseTitle": "Acute coronary syndrome with dysrhythmia risk",
    "caseStudyContext": {
      "id": "QR-CS-026",
      "title": "Acute coronary syndrome with dysrhythmia risk",
      "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute coronary syndrome and myocardial infarction",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "nursingNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "nursesNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "vitalSigns": "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%.",
    "diagnosticResults": "ECG shows ST-segment elevation in contiguous leads; troponin is elevated.",
    "providerOrders": "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration",
    "stimulus": {
      "caseGroupId": "QR-CS-026",
      "patientProfile": {
        "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
      },
      "tabs": {
        "history": [
          "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
        ],
        "nursesNotes": [
          "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago."
        ],
        "vitalSigns": [
          "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%."
        ],
        "labResults": [
          "ECG shows ST-segment elevation in contiguous leads; troponin is elevated."
        ],
        "providerOrders": [
          "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute coronary syndrome and myocardial infarction",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.heart.org/en/health-topics/heart-attack",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100653",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Acute myocardial infarction with risk for life-threatening dysrhythmia",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
        "Maintain continuous cardiac monitoring and obtain IV access.",
        "Administer prescribed antiplatelet and other indicated therapy after contraindication screening."
      ],
      "monitoring": [
        "Chest pain, ECG rhythm, blood pressure, and oxygenation",
        "Signs of heart failure, shock, and response to reperfusion"
      ]
    },
    "correctAnswer": {
      "condition": "Acute myocardial infarction with risk for life-threatening dysrhythmia",
      "actions": [
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
        "Maintain continuous cardiac monitoring and obtain IV access."
      ],
      "monitoring": [
        "Chest pain, ECG rhythm, blood pressure, and oxygenation",
        "Signs of heart failure, shock, and response to reperfusion"
      ]
    },
    "rationale": "The most likely condition is Acute myocardial infarction with risk for life-threatening dysrhythmia. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Acute myocardial infarction with risk for life-threatening dysrhythmia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Maintain continuous cardiac monitoring and obtain IV access.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed antiplatelet and other indicated therapy after contraindication screening.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Chest pain, ECG rhythm, blood pressure, and oxygenation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Signs of heart failure, shock, and response to reperfusion": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100653",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute myocardial infarction with risk for life-threatening dysrhythmia",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
          "Maintain continuous cardiac monitoring and obtain IV access.",
          "Administer prescribed antiplatelet and other indicated therapy after contraindication screening."
        ],
        "monitoring": [
          "Chest pain, ECG rhythm, blood pressure, and oxygenation",
          "Signs of heart failure, shock, and response to reperfusion"
        ]
      },
      "answerKey": {
        "condition": "Acute myocardial infarction with risk for life-threatening dysrhythmia",
        "actions": [
          "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
          "Maintain continuous cardiac monitoring and obtain IV access."
        ],
        "monitoring": [
          "Chest pain, ECG rhythm, blood pressure, and oxygenation",
          "Signs of heart failure, shock, and response to reperfusion"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Acute myocardial infarction with risk for life-threatening dysrhythmia. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Acute myocardial infarction with risk for life-threatening dysrhythmia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Maintain continuous cardiac monitoring and obtain IV access.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed antiplatelet and other indicated therapy after contraindication screening.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Chest pain, ECG rhythm, blood pressure, and oxygenation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Signs of heart failure, shock, and response to reperfusion": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Acute myocardial infarction with risk for life-threatening dysrhythmia",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
        "Maintain continuous cardiac monitoring and obtain IV access.",
        "Administer prescribed antiplatelet and other indicated therapy after contraindication screening."
      ],
      "monitoring": [
        "Chest pain, ECG rhythm, blood pressure, and oxygenation",
        "Signs of heart failure, shock, and response to reperfusion"
      ]
    },
    "correctAnswers": {
      "condition": "Acute myocardial infarction with risk for life-threatening dysrhythmia",
      "actions": [
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
        "Maintain continuous cardiac monitoring and obtain IV access."
      ],
      "monitoring": [
        "Chest pain, ECG rhythm, blood pressure, and oxygenation",
        "Signs of heart failure, shock, and response to reperfusion"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-026",
    "caseTitle": "Acute coronary syndrome with dysrhythmia risk",
    "caseStudyContext": {
      "id": "QR-CS-026",
      "title": "Acute coronary syndrome with dysrhythmia risk",
      "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute coronary syndrome and myocardial infarction",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "nursingNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "nursesNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "vitalSigns": "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%.",
    "diagnosticResults": "ECG shows ST-segment elevation in contiguous leads; troponin is elevated.",
    "providerOrders": "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration",
    "stimulus": {
      "caseGroupId": "QR-CS-026",
      "patientProfile": {
        "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
      },
      "tabs": {
        "history": [
          "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
        ],
        "nursesNotes": [
          "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago."
        ],
        "vitalSigns": [
          "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%."
        ],
        "labResults": [
          "ECG shows ST-segment elevation in contiguous leads; troponin is elevated."
        ],
        "providerOrders": [
          "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute coronary syndrome and myocardial infarction",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.heart.org/en/health-topics/heart-attack",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100654",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
      "Maintain continuous cardiac monitoring and obtain IV access.",
      "Administer prescribed antiplatelet and other indicated therapy after contraindication screening.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
      "Maintain continuous cardiac monitoring and obtain IV access.",
      "Administer prescribed antiplatelet and other indicated therapy after contraindication screening."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Acute myocardial infarction with risk for life-threatening dysrhythmia while supporting timely reassessment.",
    "optionRationales": {
      "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Maintain continuous cardiac monitoring and obtain IV access.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed antiplatelet and other indicated therapy after contraindication screening.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100654",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
        "Maintain continuous cardiac monitoring and obtain IV access.",
        "Administer prescribed antiplatelet and other indicated therapy after contraindication screening.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.",
        "Maintain continuous cardiac monitoring and obtain IV access.",
        "Administer prescribed antiplatelet and other indicated therapy after contraindication screening."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Acute myocardial infarction with risk for life-threatening dysrhythmia while supporting timely reassessment.",
      "options": {
        "Activate the acute coronary syndrome pathway and prepare for urgent reperfusion evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Maintain continuous cardiac monitoring and obtain IV access.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed antiplatelet and other indicated therapy after contraindication screening.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-026",
    "caseTitle": "Acute coronary syndrome with dysrhythmia risk",
    "caseStudyContext": {
      "id": "QR-CS-026",
      "title": "Acute coronary syndrome with dysrhythmia risk",
      "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute coronary syndrome and myocardial infarction",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "nursingNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "nursesNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "vitalSigns": "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%.",
    "diagnosticResults": "ECG shows ST-segment elevation in contiguous leads; troponin is elevated.",
    "providerOrders": "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration",
    "stimulus": {
      "caseGroupId": "QR-CS-026",
      "patientProfile": {
        "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
      },
      "tabs": {
        "history": [
          "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
        ],
        "nursesNotes": [
          "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago."
        ],
        "vitalSigns": [
          "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%."
        ],
        "labResults": [
          "ECG shows ST-segment elevation in contiguous leads; troponin is elevated."
        ],
        "providerOrders": [
          "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute coronary syndrome and myocardial infarction",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.heart.org/en/health-topics/heart-attack",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100655",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Monitor for dysrhythmia and hemodynamic deterioration",
      "Prepare for urgent reperfusion and prescribed medications",
      "Obtain and interpret 12-lead ECG promptly",
      "Activate the acute coronary syndrome response"
    ],
    "correctAnswer": [
      "Activate the acute coronary syndrome response",
      "Obtain and interpret 12-lead ECG promptly",
      "Prepare for urgent reperfusion and prescribed medications",
      "Monitor for dysrhythmia and hemodynamic deterioration"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute myocardial infarction with risk for life-threatening dysrhythmia.",
    "optionRationales": {
      "Monitor for dysrhythmia and hemodynamic deterioration": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare for urgent reperfusion and prescribed medications": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Obtain and interpret 12-lead ECG promptly": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate the acute coronary syndrome response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100655",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Monitor for dysrhythmia and hemodynamic deterioration",
        "Prepare for urgent reperfusion and prescribed medications",
        "Obtain and interpret 12-lead ECG promptly",
        "Activate the acute coronary syndrome response"
      ],
      "answerKey": [
        "Activate the acute coronary syndrome response",
        "Obtain and interpret 12-lead ECG promptly",
        "Prepare for urgent reperfusion and prescribed medications",
        "Monitor for dysrhythmia and hemodynamic deterioration"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute myocardial infarction with risk for life-threatening dysrhythmia.",
      "options": {
        "Monitor for dysrhythmia and hemodynamic deterioration": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare for urgent reperfusion and prescribed medications": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Obtain and interpret 12-lead ECG promptly": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate the acute coronary syndrome response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Monitor for dysrhythmia and hemodynamic deterioration",
      "Prepare for urgent reperfusion and prescribed medications",
      "Obtain and interpret 12-lead ECG promptly",
      "Activate the acute coronary syndrome response"
    ],
    "correctOrder": [
      "Activate the acute coronary syndrome response",
      "Obtain and interpret 12-lead ECG promptly",
      "Prepare for urgent reperfusion and prescribed medications",
      "Monitor for dysrhythmia and hemodynamic deterioration"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-026",
    "caseTitle": "Acute coronary syndrome with dysrhythmia risk",
    "caseStudyContext": {
      "id": "QR-CS-026",
      "title": "Acute coronary syndrome with dysrhythmia risk",
      "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute coronary syndrome and myocardial infarction",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy.",
    "nursingNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "nursesNotes": "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago.",
    "vitalSigns": "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%.",
    "diagnosticResults": "ECG shows ST-segment elevation in contiguous leads; troponin is elevated.",
    "providerOrders": "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration",
    "stimulus": {
      "caseGroupId": "QR-CS-026",
      "patientProfile": {
        "summary": "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
      },
      "tabs": {
        "history": [
          "A 61-year-old with chest pressure, diaphoresis, and nausea develops ischemic ECG changes and ventricular ectopy."
        ],
        "nursesNotes": [
          "The client reports crushing substernal pressure radiating to the jaw with diaphoresis and nausea. The pain began 35 minutes ago."
        ],
        "vitalSigns": [
          "HR 112/min; BP 102/64 mmHg; RR 22/min; SpO₂ 94%."
        ],
        "labResults": [
          "ECG shows ST-segment elevation in contiguous leads; troponin is elevated."
        ],
        "providerOrders": [
          "Activate the acute coronary syndrome response; Obtain and interpret 12-lead ECG promptly; Prepare for urgent reperfusion and prescribed medications; Monitor for dysrhythmia and hemodynamic deterioration"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute coronary syndrome and myocardial infarction",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.heart.org/en/health-topics/heart-attack",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100656",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Acute myocardial infarction; time-sensitive reperfusion evaluation.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Acute myocardial infarction; time-sensitive reperfusion evaluation.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Acute myocardial infarction; time-sensitive reperfusion evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100656",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Acute myocardial infarction; time-sensitive reperfusion evaluation.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Acute myocardial infarction; time-sensitive reperfusion evaluation.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Acute myocardial infarction; time-sensitive reperfusion evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Acute coronary syndrome with dysrhythmia risk — clinical progression",
      "stages": [
        {
          "time": "Initial presentation",
          "situation": "Chest pressure, ST elevation, diaphoresis, HR 112/min.",
          "question": "Acute myocardial infarction; time-sensitive reperfusion evaluation.",
          "options": [
            "Acute myocardial infarction; time-sensitive reperfusion evaluation.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Acute myocardial infarction; time-sensitive reperfusion evaluation."
        },
        {
          "time": "Before reperfusion",
          "situation": "Frequent ventricular ectopy and BP 90/58 mmHg.",
          "question": "Electrical and hemodynamic instability; escalate and prepare emergency treatment.",
          "options": [
            "Electrical and hemodynamic instability; escalate and prepare emergency treatment.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Electrical and hemodynamic instability; escalate and prepare emergency treatment."
        },
        {
          "time": "After reperfusion",
          "situation": "Chest pain decreases and ST elevation begins to resolve.",
          "question": "Possible reperfusion response; continue rhythm and perfusion monitoring.",
          "options": [
            "Possible reperfusion response; continue rhythm and perfusion monitoring.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Possible reperfusion response; continue rhythm and perfusion monitoring."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-027",
    "caseTitle": "Myasthenic crisis with impending ventilatory failure",
    "caseStudyContext": {
      "id": "QR-CS-027",
      "title": "Myasthenic crisis with impending ventilatory failure",
      "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "nursingNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "nursesNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "vitalSigns": "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment.",
    "diagnosticResults": "Respiratory mechanics show declining forced vital capacity and negative inspiratory force.",
    "providerOrders": "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment",
    "stimulus": {
      "caseGroupId": "QR-CS-027",
      "patientProfile": {
        "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
      },
      "tabs": {
        "history": [
          "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
        ],
        "nursesNotes": [
          "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright."
        ],
        "vitalSigns": [
          "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment."
        ],
        "labResults": [
          "Respiratory mechanics show declining forced vital capacity and negative inspiratory force."
        ],
        "providerOrders": [
          "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Myasthenic crisis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100657",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "dysphagia",
      "cough",
      "speech"
    ],
    "rationale": "The combination of worsening difficulty swallowing, weak cough, nasal speech supports recognition of Myasthenic crisis with risk of ventilatory failure and aspiration.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100657",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "dysphagia",
        "cough",
        "speech"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of worsening difficulty swallowing, weak cough, nasal speech supports recognition of Myasthenic crisis with risk of ventilatory failure and aspiration.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Worsening difficulty swallowing. Weak cough. Nasal speech. Difficulty holding the head upright. Declining forced vital capacity. A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "highlightSegments": [
      {
        "id": "dysphagia",
        "text": "Worsening difficulty swallowing"
      },
      {
        "id": "cough",
        "text": "Weak cough"
      },
      {
        "id": "speech",
        "text": "Nasal speech"
      },
      {
        "id": "head",
        "text": "Difficulty holding the head upright"
      },
      {
        "id": "fvc",
        "text": "Declining forced vital capacity"
      }
    ],
    "correctHighlights": [
      "dysphagia",
      "cough",
      "speech"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-027",
    "caseTitle": "Myasthenic crisis with impending ventilatory failure",
    "caseStudyContext": {
      "id": "QR-CS-027",
      "title": "Myasthenic crisis with impending ventilatory failure",
      "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "nursingNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "nursesNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "vitalSigns": "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment.",
    "diagnosticResults": "Respiratory mechanics show declining forced vital capacity and negative inspiratory force.",
    "providerOrders": "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment",
    "stimulus": {
      "caseGroupId": "QR-CS-027",
      "patientProfile": {
        "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
      },
      "tabs": {
        "history": [
          "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
        ],
        "nursesNotes": [
          "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright."
        ],
        "vitalSigns": [
          "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment."
        ],
        "labResults": [
          "Respiratory mechanics show declining forced vital capacity and negative inspiratory force."
        ],
        "providerOrders": [
          "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Myasthenic crisis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100658",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Worsening difficulty swallowing",
      "Weak cough",
      "Nasal speech",
      "Difficulty holding the head upright"
    ],
    "correctAnswer": {
      "dysphagia": "Bulbar weakness cue",
      "cough": "Poor airway clearance cue",
      "speech": "Bulbar muscle weakness",
      "head": "Progressive muscle weakness"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Myasthenic crisis with risk of ventilatory failure and aspiration.",
    "optionRationales": {
      "Worsening difficulty swallowing": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Weak cough": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Nasal speech": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Difficulty holding the head upright": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100658",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "dysphagia": [
          "Bulbar weakness cue",
          "Poor airway clearance cue",
          "Bulbar muscle weakness",
          "Progressive muscle weakness"
        ],
        "cough": [
          "Bulbar weakness cue",
          "Poor airway clearance cue",
          "Bulbar muscle weakness",
          "Progressive muscle weakness"
        ],
        "speech": [
          "Bulbar weakness cue",
          "Poor airway clearance cue",
          "Bulbar muscle weakness",
          "Progressive muscle weakness"
        ],
        "head": [
          "Bulbar weakness cue",
          "Poor airway clearance cue",
          "Bulbar muscle weakness",
          "Progressive muscle weakness"
        ]
      },
      "answerKey": {
        "dysphagia": "Bulbar weakness cue",
        "cough": "Poor airway clearance cue",
        "speech": "Bulbar muscle weakness",
        "head": "Progressive muscle weakness"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Myasthenic crisis with risk of ventilatory failure and aspiration.",
      "options": {
        "Worsening difficulty swallowing": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Weak cough": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Nasal speech": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Difficulty holding the head upright": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "dysphagia",
        "label": "Worsening difficulty swallowing"
      },
      {
        "id": "cough",
        "label": "Weak cough"
      },
      {
        "id": "speech",
        "label": "Nasal speech"
      },
      {
        "id": "head",
        "label": "Difficulty holding the head upright"
      }
    ],
    "columns": [
      "Bulbar weakness cue",
      "Poor airway clearance cue",
      "Bulbar muscle weakness",
      "Progressive muscle weakness"
    ],
    "correctAnswers": {
      "dysphagia": "Bulbar weakness cue",
      "cough": "Poor airway clearance cue",
      "speech": "Bulbar muscle weakness",
      "head": "Progressive muscle weakness"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-027",
    "caseTitle": "Myasthenic crisis with impending ventilatory failure",
    "caseStudyContext": {
      "id": "QR-CS-027",
      "title": "Myasthenic crisis with impending ventilatory failure",
      "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "nursingNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "nursesNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "vitalSigns": "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment.",
    "diagnosticResults": "Respiratory mechanics show declining forced vital capacity and negative inspiratory force.",
    "providerOrders": "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment",
    "stimulus": {
      "caseGroupId": "QR-CS-027",
      "patientProfile": {
        "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
      },
      "tabs": {
        "history": [
          "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
        ],
        "nursesNotes": [
          "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright."
        ],
        "vitalSigns": [
          "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment."
        ],
        "labResults": [
          "Respiratory mechanics show declining forced vital capacity and negative inspiratory force."
        ],
        "providerOrders": [
          "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Myasthenic crisis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100659",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Myasthenic crisis with risk of ventilatory failure and aspiration",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Escalate immediately to the critical care and airway teams.",
        "Prepare for ventilatory support and protect the airway.",
        "Keep the client NPO pending swallowing and airway assessment."
      ],
      "monitoring": [
        "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation",
        "Swallowing safety, cough strength, and secretion clearance"
      ]
    },
    "correctAnswer": {
      "condition": "Myasthenic crisis with risk of ventilatory failure and aspiration",
      "actions": [
        "Escalate immediately to the critical care and airway teams.",
        "Prepare for ventilatory support and protect the airway."
      ],
      "monitoring": [
        "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation",
        "Swallowing safety, cough strength, and secretion clearance"
      ]
    },
    "rationale": "The most likely condition is Myasthenic crisis with risk of ventilatory failure and aspiration. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Myasthenic crisis with risk of ventilatory failure and aspiration": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Escalate immediately to the critical care and airway teams.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare for ventilatory support and protect the airway.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Keep the client NPO pending swallowing and airway assessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Swallowing safety, cough strength, and secretion clearance": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100659",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Myasthenic crisis with risk of ventilatory failure and aspiration",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Escalate immediately to the critical care and airway teams.",
          "Prepare for ventilatory support and protect the airway.",
          "Keep the client NPO pending swallowing and airway assessment."
        ],
        "monitoring": [
          "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation",
          "Swallowing safety, cough strength, and secretion clearance"
        ]
      },
      "answerKey": {
        "condition": "Myasthenic crisis with risk of ventilatory failure and aspiration",
        "actions": [
          "Escalate immediately to the critical care and airway teams.",
          "Prepare for ventilatory support and protect the airway."
        ],
        "monitoring": [
          "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation",
          "Swallowing safety, cough strength, and secretion clearance"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Myasthenic crisis with risk of ventilatory failure and aspiration. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Myasthenic crisis with risk of ventilatory failure and aspiration": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Escalate immediately to the critical care and airway teams.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare for ventilatory support and protect the airway.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Keep the client NPO pending swallowing and airway assessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Swallowing safety, cough strength, and secretion clearance": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Myasthenic crisis with risk of ventilatory failure and aspiration",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Escalate immediately to the critical care and airway teams.",
        "Prepare for ventilatory support and protect the airway.",
        "Keep the client NPO pending swallowing and airway assessment."
      ],
      "monitoring": [
        "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation",
        "Swallowing safety, cough strength, and secretion clearance"
      ]
    },
    "correctAnswers": {
      "condition": "Myasthenic crisis with risk of ventilatory failure and aspiration",
      "actions": [
        "Escalate immediately to the critical care and airway teams.",
        "Prepare for ventilatory support and protect the airway."
      ],
      "monitoring": [
        "Forced vital capacity, negative inspiratory force, respiratory effort, and oxygenation",
        "Swallowing safety, cough strength, and secretion clearance"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-027",
    "caseTitle": "Myasthenic crisis with impending ventilatory failure",
    "caseStudyContext": {
      "id": "QR-CS-027",
      "title": "Myasthenic crisis with impending ventilatory failure",
      "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "nursingNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "nursesNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "vitalSigns": "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment.",
    "diagnosticResults": "Respiratory mechanics show declining forced vital capacity and negative inspiratory force.",
    "providerOrders": "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment",
    "stimulus": {
      "caseGroupId": "QR-CS-027",
      "patientProfile": {
        "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
      },
      "tabs": {
        "history": [
          "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
        ],
        "nursesNotes": [
          "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright."
        ],
        "vitalSigns": [
          "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment."
        ],
        "labResults": [
          "Respiratory mechanics show declining forced vital capacity and negative inspiratory force."
        ],
        "providerOrders": [
          "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Myasthenic crisis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100660",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Escalate immediately to the critical care and airway teams.",
      "Prepare for ventilatory support and protect the airway.",
      "Keep the client NPO pending swallowing and airway assessment.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Escalate immediately to the critical care and airway teams.",
      "Prepare for ventilatory support and protect the airway.",
      "Keep the client NPO pending swallowing and airway assessment."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Myasthenic crisis with risk of ventilatory failure and aspiration while supporting timely reassessment.",
    "optionRationales": {
      "Escalate immediately to the critical care and airway teams.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare for ventilatory support and protect the airway.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Keep the client NPO pending swallowing and airway assessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100660",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Escalate immediately to the critical care and airway teams.",
        "Prepare for ventilatory support and protect the airway.",
        "Keep the client NPO pending swallowing and airway assessment.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Escalate immediately to the critical care and airway teams.",
        "Prepare for ventilatory support and protect the airway.",
        "Keep the client NPO pending swallowing and airway assessment."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Myasthenic crisis with risk of ventilatory failure and aspiration while supporting timely reassessment.",
      "options": {
        "Escalate immediately to the critical care and airway teams.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare for ventilatory support and protect the airway.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Keep the client NPO pending swallowing and airway assessment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-027",
    "caseTitle": "Myasthenic crisis with impending ventilatory failure",
    "caseStudyContext": {
      "id": "QR-CS-027",
      "title": "Myasthenic crisis with impending ventilatory failure",
      "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "nursingNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "nursesNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "vitalSigns": "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment.",
    "diagnosticResults": "Respiratory mechanics show declining forced vital capacity and negative inspiratory force.",
    "providerOrders": "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment",
    "stimulus": {
      "caseGroupId": "QR-CS-027",
      "patientProfile": {
        "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
      },
      "tabs": {
        "history": [
          "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
        ],
        "nursesNotes": [
          "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright."
        ],
        "vitalSigns": [
          "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment."
        ],
        "labResults": [
          "Respiratory mechanics show declining forced vital capacity and negative inspiratory force."
        ],
        "providerOrders": [
          "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Myasthenic crisis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100661",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Prepare ventilatory support and prescribed crisis treatment",
      "Trend respiratory mechanics frequently",
      "Maintain NPO and aspiration precautions",
      "Escalate for critical care and airway assessment"
    ],
    "correctAnswer": [
      "Escalate for critical care and airway assessment",
      "Maintain NPO and aspiration precautions",
      "Trend respiratory mechanics frequently",
      "Prepare ventilatory support and prescribed crisis treatment"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Myasthenic crisis with risk of ventilatory failure and aspiration.",
    "optionRationales": {
      "Prepare ventilatory support and prescribed crisis treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Trend respiratory mechanics frequently": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Maintain NPO and aspiration precautions": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Escalate for critical care and airway assessment": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100661",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Prepare ventilatory support and prescribed crisis treatment",
        "Trend respiratory mechanics frequently",
        "Maintain NPO and aspiration precautions",
        "Escalate for critical care and airway assessment"
      ],
      "answerKey": [
        "Escalate for critical care and airway assessment",
        "Maintain NPO and aspiration precautions",
        "Trend respiratory mechanics frequently",
        "Prepare ventilatory support and prescribed crisis treatment"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Myasthenic crisis with risk of ventilatory failure and aspiration.",
      "options": {
        "Prepare ventilatory support and prescribed crisis treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Trend respiratory mechanics frequently": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Maintain NPO and aspiration precautions": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Escalate for critical care and airway assessment": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Prepare ventilatory support and prescribed crisis treatment",
      "Trend respiratory mechanics frequently",
      "Maintain NPO and aspiration precautions",
      "Escalate for critical care and airway assessment"
    ],
    "correctOrder": [
      "Escalate for critical care and airway assessment",
      "Maintain NPO and aspiration precautions",
      "Trend respiratory mechanics frequently",
      "Prepare ventilatory support and prescribed crisis treatment"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-027",
    "caseTitle": "Myasthenic crisis with impending ventilatory failure",
    "caseStudyContext": {
      "id": "QR-CS-027",
      "title": "Myasthenic crisis with impending ventilatory failure",
      "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection.",
    "nursingNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "nursesNotes": "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright.",
    "vitalSigns": "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment.",
    "diagnosticResults": "Respiratory mechanics show declining forced vital capacity and negative inspiratory force.",
    "providerOrders": "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment",
    "stimulus": {
      "caseGroupId": "QR-CS-027",
      "patientProfile": {
        "summary": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
      },
      "tabs": {
        "history": [
          "A client with myasthenia gravis develops worsening dysphagia, weak cough, and declining respiratory muscle strength after an infection."
        ],
        "nursesNotes": [
          "The client has nasal speech, difficulty swallowing, weak cough, and increasing difficulty holding the head upright."
        ],
        "vitalSigns": [
          "RR 28/min; SpO₂ 93%; respiratory effort is increasing; vital capacity is declining on serial assessment."
        ],
        "labResults": [
          "Respiratory mechanics show declining forced vital capacity and negative inspiratory force."
        ],
        "providerOrders": [
          "Escalate for critical care and airway assessment; Maintain NPO and aspiration precautions; Trend respiratory mechanics frequently; Prepare ventilatory support and prescribed crisis treatment"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Myasthenic crisis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/myasthenia-gravis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100662",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Impending myasthenic crisis; escalate before hypoxemia develops.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Impending myasthenic crisis; escalate before hypoxemia develops.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Impending myasthenic crisis; escalate before hypoxemia develops.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100662",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Impending myasthenic crisis; escalate before hypoxemia develops.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Impending myasthenic crisis; escalate before hypoxemia develops.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Impending myasthenic crisis; escalate before hypoxemia develops.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Myasthenic crisis with impending ventilatory failure — clinical progression",
      "stages": [
        {
          "time": "Early deterioration",
          "situation": "Dysphagia, weak cough, nasal speech, declining respiratory mechanics.",
          "question": "Impending myasthenic crisis; escalate before hypoxemia develops.",
          "options": [
            "Impending myasthenic crisis; escalate before hypoxemia develops.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Impending myasthenic crisis; escalate before hypoxemia develops."
        },
        {
          "time": "Serial reassessment",
          "situation": "Vital capacity declines further and the client cannot clear secretions.",
          "question": "Ventilatory failure risk is increasing; prepare airway support.",
          "options": [
            "Ventilatory failure risk is increasing; prepare airway support.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Ventilatory failure risk is increasing; prepare airway support."
        },
        {
          "time": "After treatment",
          "situation": "Respiratory mechanics stabilize and secretion clearance improves.",
          "question": "Response is stabilizing; continue respiratory and swallowing reassessment.",
          "options": [
            "Response is stabilizing; continue respiratory and swallowing reassessment.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Response is stabilizing; continue respiratory and swallowing reassessment."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-028",
    "caseTitle": "Acute kidney injury with dangerous electrolyte changes",
    "caseStudyContext": {
      "id": "QR-CS-028",
      "title": "Acute kidney injury with dangerous electrolyte changes",
      "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute kidney injury and hyperkalemia",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "nursingNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "nursesNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "vitalSigns": "HR 58/min; BP 148/86 mmHg; RR 20/min.",
    "diagnosticResults": "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves.",
    "providerOrders": "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response",
    "stimulus": {
      "caseGroupId": "QR-CS-028",
      "patientProfile": {
        "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
      },
      "tabs": {
        "history": [
          "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
        ],
        "nursesNotes": [
          "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor."
        ],
        "vitalSigns": [
          "HR 58/min; BP 148/86 mmHg; RR 20/min."
        ],
        "labResults": [
          "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves."
        ],
        "providerOrders": [
          "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute kidney injury and hyperkalemia",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/acute-kidney-injury",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100663",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "urine",
      "k",
      "ecg"
    ],
    "rationale": "The combination of urine output 15 ml/hr, potassium 6.7 meq/l, new peaked t waves supports recognition of Acute kidney injury complicated by life-threatening hyperkalemia.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100663",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "urine",
        "k",
        "ecg"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of urine output 15 ml/hr, potassium 6.7 meq/l, new peaked t waves supports recognition of Acute kidney injury complicated by life-threatening hyperkalemia.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Urine output 15 mL/hr. Potassium 6.7 mEq/L. New peaked T waves. Creatinine 3.2 mg/dL. Reports generalized weakness. A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "highlightSegments": [
      {
        "id": "urine",
        "text": "Urine output 15 mL/hr"
      },
      {
        "id": "k",
        "text": "Potassium 6.7 mEq/L"
      },
      {
        "id": "ecg",
        "text": "New peaked T waves"
      },
      {
        "id": "creatinine",
        "text": "Creatinine 3.2 mg/dL"
      },
      {
        "id": "weak",
        "text": "Reports generalized weakness"
      }
    ],
    "correctHighlights": [
      "urine",
      "k",
      "ecg"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-028",
    "caseTitle": "Acute kidney injury with dangerous electrolyte changes",
    "caseStudyContext": {
      "id": "QR-CS-028",
      "title": "Acute kidney injury with dangerous electrolyte changes",
      "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute kidney injury and hyperkalemia",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "nursingNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "nursesNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "vitalSigns": "HR 58/min; BP 148/86 mmHg; RR 20/min.",
    "diagnosticResults": "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves.",
    "providerOrders": "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response",
    "stimulus": {
      "caseGroupId": "QR-CS-028",
      "patientProfile": {
        "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
      },
      "tabs": {
        "history": [
          "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
        ],
        "nursesNotes": [
          "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor."
        ],
        "vitalSigns": [
          "HR 58/min; BP 148/86 mmHg; RR 20/min."
        ],
        "labResults": [
          "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves."
        ],
        "providerOrders": [
          "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute kidney injury and hyperkalemia",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/acute-kidney-injury",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100664",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Urine output 15 mL/hr",
      "Potassium 6.7 mEq/L",
      "New peaked T waves",
      "Creatinine 3.2 mg/dL"
    ],
    "correctAnswer": {
      "urine": "Oliguria",
      "k": "Severe hyperkalemia",
      "ecg": "Cardiac toxicity cue",
      "creatinine": "Acute renal dysfunction"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Acute kidney injury complicated by life-threatening hyperkalemia.",
    "optionRationales": {
      "Urine output 15 mL/hr": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Potassium 6.7 mEq/L": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "New peaked T waves": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Creatinine 3.2 mg/dL": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100664",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "urine": [
          "Oliguria",
          "Severe hyperkalemia",
          "Cardiac toxicity cue",
          "Acute renal dysfunction"
        ],
        "k": [
          "Oliguria",
          "Severe hyperkalemia",
          "Cardiac toxicity cue",
          "Acute renal dysfunction"
        ],
        "ecg": [
          "Oliguria",
          "Severe hyperkalemia",
          "Cardiac toxicity cue",
          "Acute renal dysfunction"
        ],
        "creatinine": [
          "Oliguria",
          "Severe hyperkalemia",
          "Cardiac toxicity cue",
          "Acute renal dysfunction"
        ]
      },
      "answerKey": {
        "urine": "Oliguria",
        "k": "Severe hyperkalemia",
        "ecg": "Cardiac toxicity cue",
        "creatinine": "Acute renal dysfunction"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Acute kidney injury complicated by life-threatening hyperkalemia.",
      "options": {
        "Urine output 15 mL/hr": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Potassium 6.7 mEq/L": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "New peaked T waves": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Creatinine 3.2 mg/dL": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "urine",
        "label": "Urine output 15 mL/hr"
      },
      {
        "id": "k",
        "label": "Potassium 6.7 mEq/L"
      },
      {
        "id": "ecg",
        "label": "New peaked T waves"
      },
      {
        "id": "creatinine",
        "label": "Creatinine 3.2 mg/dL"
      }
    ],
    "columns": [
      "Oliguria",
      "Severe hyperkalemia",
      "Cardiac toxicity cue",
      "Acute renal dysfunction"
    ],
    "correctAnswers": {
      "urine": "Oliguria",
      "k": "Severe hyperkalemia",
      "ecg": "Cardiac toxicity cue",
      "creatinine": "Acute renal dysfunction"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-028",
    "caseTitle": "Acute kidney injury with dangerous electrolyte changes",
    "caseStudyContext": {
      "id": "QR-CS-028",
      "title": "Acute kidney injury with dangerous electrolyte changes",
      "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute kidney injury and hyperkalemia",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "nursingNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "nursesNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "vitalSigns": "HR 58/min; BP 148/86 mmHg; RR 20/min.",
    "diagnosticResults": "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves.",
    "providerOrders": "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response",
    "stimulus": {
      "caseGroupId": "QR-CS-028",
      "patientProfile": {
        "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
      },
      "tabs": {
        "history": [
          "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
        ],
        "nursesNotes": [
          "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor."
        ],
        "vitalSigns": [
          "HR 58/min; BP 148/86 mmHg; RR 20/min."
        ],
        "labResults": [
          "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves."
        ],
        "providerOrders": [
          "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute kidney injury and hyperkalemia",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/acute-kidney-injury",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100665",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Acute kidney injury complicated by life-threatening hyperkalemia",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Place the client on continuous cardiac monitoring and notify the provider immediately.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated.",
        "Prepare potassium-shifting and potassium-removal therapies as ordered."
      ],
      "monitoring": [
        "ECG rhythm, potassium, and response to emergency hyperkalemia treatment",
        "Urine output, renal function, and fluid status"
      ]
    },
    "correctAnswer": {
      "condition": "Acute kidney injury complicated by life-threatening hyperkalemia",
      "actions": [
        "Place the client on continuous cardiac monitoring and notify the provider immediately.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated."
      ],
      "monitoring": [
        "ECG rhythm, potassium, and response to emergency hyperkalemia treatment",
        "Urine output, renal function, and fluid status"
      ]
    },
    "rationale": "The most likely condition is Acute kidney injury complicated by life-threatening hyperkalemia. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Acute kidney injury complicated by life-threatening hyperkalemia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Place the client on continuous cardiac monitoring and notify the provider immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare prescribed IV calcium to stabilize the myocardium when indicated.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare potassium-shifting and potassium-removal therapies as ordered.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "ECG rhythm, potassium, and response to emergency hyperkalemia treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Urine output, renal function, and fluid status": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100665",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute kidney injury complicated by life-threatening hyperkalemia",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Place the client on continuous cardiac monitoring and notify the provider immediately.",
          "Prepare prescribed IV calcium to stabilize the myocardium when indicated.",
          "Prepare potassium-shifting and potassium-removal therapies as ordered."
        ],
        "monitoring": [
          "ECG rhythm, potassium, and response to emergency hyperkalemia treatment",
          "Urine output, renal function, and fluid status"
        ]
      },
      "answerKey": {
        "condition": "Acute kidney injury complicated by life-threatening hyperkalemia",
        "actions": [
          "Place the client on continuous cardiac monitoring and notify the provider immediately.",
          "Prepare prescribed IV calcium to stabilize the myocardium when indicated."
        ],
        "monitoring": [
          "ECG rhythm, potassium, and response to emergency hyperkalemia treatment",
          "Urine output, renal function, and fluid status"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Acute kidney injury complicated by life-threatening hyperkalemia. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Acute kidney injury complicated by life-threatening hyperkalemia": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Place the client on continuous cardiac monitoring and notify the provider immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare potassium-shifting and potassium-removal therapies as ordered.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "ECG rhythm, potassium, and response to emergency hyperkalemia treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Urine output, renal function, and fluid status": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Acute kidney injury complicated by life-threatening hyperkalemia",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Place the client on continuous cardiac monitoring and notify the provider immediately.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated.",
        "Prepare potassium-shifting and potassium-removal therapies as ordered."
      ],
      "monitoring": [
        "ECG rhythm, potassium, and response to emergency hyperkalemia treatment",
        "Urine output, renal function, and fluid status"
      ]
    },
    "correctAnswers": {
      "condition": "Acute kidney injury complicated by life-threatening hyperkalemia",
      "actions": [
        "Place the client on continuous cardiac monitoring and notify the provider immediately.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated."
      ],
      "monitoring": [
        "ECG rhythm, potassium, and response to emergency hyperkalemia treatment",
        "Urine output, renal function, and fluid status"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-028",
    "caseTitle": "Acute kidney injury with dangerous electrolyte changes",
    "caseStudyContext": {
      "id": "QR-CS-028",
      "title": "Acute kidney injury with dangerous electrolyte changes",
      "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute kidney injury and hyperkalemia",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "nursingNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "nursesNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "vitalSigns": "HR 58/min; BP 148/86 mmHg; RR 20/min.",
    "diagnosticResults": "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves.",
    "providerOrders": "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response",
    "stimulus": {
      "caseGroupId": "QR-CS-028",
      "patientProfile": {
        "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
      },
      "tabs": {
        "history": [
          "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
        ],
        "nursesNotes": [
          "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor."
        ],
        "vitalSigns": [
          "HR 58/min; BP 148/86 mmHg; RR 20/min."
        ],
        "labResults": [
          "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves."
        ],
        "providerOrders": [
          "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute kidney injury and hyperkalemia",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/acute-kidney-injury",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100666",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Place the client on continuous cardiac monitoring and notify the provider immediately.",
      "Prepare prescribed IV calcium to stabilize the myocardium when indicated.",
      "Prepare potassium-shifting and potassium-removal therapies as ordered.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Place the client on continuous cardiac monitoring and notify the provider immediately.",
      "Prepare prescribed IV calcium to stabilize the myocardium when indicated.",
      "Prepare potassium-shifting and potassium-removal therapies as ordered."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Acute kidney injury complicated by life-threatening hyperkalemia while supporting timely reassessment.",
    "optionRationales": {
      "Place the client on continuous cardiac monitoring and notify the provider immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare prescribed IV calcium to stabilize the myocardium when indicated.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare potassium-shifting and potassium-removal therapies as ordered.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100666",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Place the client on continuous cardiac monitoring and notify the provider immediately.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated.",
        "Prepare potassium-shifting and potassium-removal therapies as ordered.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Place the client on continuous cardiac monitoring and notify the provider immediately.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated.",
        "Prepare potassium-shifting and potassium-removal therapies as ordered."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Acute kidney injury complicated by life-threatening hyperkalemia while supporting timely reassessment.",
      "options": {
        "Place the client on continuous cardiac monitoring and notify the provider immediately.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare prescribed IV calcium to stabilize the myocardium when indicated.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare potassium-shifting and potassium-removal therapies as ordered.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-028",
    "caseTitle": "Acute kidney injury with dangerous electrolyte changes",
    "caseStudyContext": {
      "id": "QR-CS-028",
      "title": "Acute kidney injury with dangerous electrolyte changes",
      "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute kidney injury and hyperkalemia",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "nursingNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "nursesNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "vitalSigns": "HR 58/min; BP 148/86 mmHg; RR 20/min.",
    "diagnosticResults": "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves.",
    "providerOrders": "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response",
    "stimulus": {
      "caseGroupId": "QR-CS-028",
      "patientProfile": {
        "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
      },
      "tabs": {
        "history": [
          "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
        ],
        "nursesNotes": [
          "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor."
        ],
        "vitalSigns": [
          "HR 58/min; BP 148/86 mmHg; RR 20/min."
        ],
        "labResults": [
          "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves."
        ],
        "providerOrders": [
          "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute kidney injury and hyperkalemia",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/acute-kidney-injury",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100667",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Recheck potassium and ECG response",
      "Implement ordered potassium-shifting and removal therapies",
      "Administer prescribed membrane-stabilizing therapy when indicated",
      "Escalate immediately and maintain cardiac monitoring"
    ],
    "correctAnswer": [
      "Escalate immediately and maintain cardiac monitoring",
      "Administer prescribed membrane-stabilizing therapy when indicated",
      "Implement ordered potassium-shifting and removal therapies",
      "Recheck potassium and ECG response"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute kidney injury complicated by life-threatening hyperkalemia.",
    "optionRationales": {
      "Recheck potassium and ECG response": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Implement ordered potassium-shifting and removal therapies": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed membrane-stabilizing therapy when indicated": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Escalate immediately and maintain cardiac monitoring": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100667",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Recheck potassium and ECG response",
        "Implement ordered potassium-shifting and removal therapies",
        "Administer prescribed membrane-stabilizing therapy when indicated",
        "Escalate immediately and maintain cardiac monitoring"
      ],
      "answerKey": [
        "Escalate immediately and maintain cardiac monitoring",
        "Administer prescribed membrane-stabilizing therapy when indicated",
        "Implement ordered potassium-shifting and removal therapies",
        "Recheck potassium and ECG response"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute kidney injury complicated by life-threatening hyperkalemia.",
      "options": {
        "Recheck potassium and ECG response": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Implement ordered potassium-shifting and removal therapies": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed membrane-stabilizing therapy when indicated": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Escalate immediately and maintain cardiac monitoring": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Recheck potassium and ECG response",
      "Implement ordered potassium-shifting and removal therapies",
      "Administer prescribed membrane-stabilizing therapy when indicated",
      "Escalate immediately and maintain cardiac monitoring"
    ],
    "correctOrder": [
      "Escalate immediately and maintain cardiac monitoring",
      "Administer prescribed membrane-stabilizing therapy when indicated",
      "Implement ordered potassium-shifting and removal therapies",
      "Recheck potassium and ECG response"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-028",
    "caseTitle": "Acute kidney injury with dangerous electrolyte changes",
    "caseStudyContext": {
      "id": "QR-CS-028",
      "title": "Acute kidney injury with dangerous electrolyte changes",
      "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Acute kidney injury and hyperkalemia",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes.",
    "nursingNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "nursesNotes": "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor.",
    "vitalSigns": "HR 58/min; BP 148/86 mmHg; RR 20/min.",
    "diagnosticResults": "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves.",
    "providerOrders": "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response",
    "stimulus": {
      "caseGroupId": "QR-CS-028",
      "patientProfile": {
        "summary": "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
      },
      "tabs": {
        "history": [
          "A hospitalized client with acute kidney injury develops oliguria, rising creatinine, and hyperkalemia with ECG changes."
        ],
        "nursesNotes": [
          "Urine output has fallen to 15 mL/hr. The client reports weakness and has new peaked T waves on the cardiac monitor."
        ],
        "vitalSigns": [
          "HR 58/min; BP 148/86 mmHg; RR 20/min."
        ],
        "labResults": [
          "Potassium 6.7 mEq/L; creatinine 3.2 mg/dL; bicarbonate 17 mEq/L; peaked T waves."
        ],
        "providerOrders": [
          "Escalate immediately and maintain cardiac monitoring; Administer prescribed membrane-stabilizing therapy when indicated; Implement ordered potassium-shifting and removal therapies; Recheck potassium and ECG response"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Acute kidney injury and hyperkalemia",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/acute-kidney-injury",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100668",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100668",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Acute kidney injury with dangerous electrolyte changes — clinical progression",
      "stages": [
        {
          "time": "Initial assessment",
          "situation": "Oliguria, potassium 6.7 mEq/L, peaked T waves.",
          "question": "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.",
          "options": [
            "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Life-threatening hyperkalemia; immediate cardiac stabilization and treatment."
        },
        {
          "time": "After initial therapy",
          "situation": "ECG changes improve but potassium remains elevated.",
          "question": "Continue potassium-lowering therapy and repeat ECG/laboratory monitoring.",
          "options": [
            "Continue potassium-lowering therapy and repeat ECG/laboratory monitoring.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Continue potassium-lowering therapy and repeat ECG/laboratory monitoring."
        },
        {
          "time": "After definitive treatment",
          "situation": "Potassium decreases and ECG normalizes; urine output remains low.",
          "question": "Cardiac risk improves but AKI persists; continue renal and fluid monitoring.",
          "options": [
            "Cardiac risk improves but AKI persists; continue renal and fluid monitoring.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Cardiac risk improves but AKI persists; continue renal and fluid monitoring."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-029",
    "caseTitle": "Cirrhosis with acute variceal hemorrhage",
    "caseStudyContext": {
      "id": "QR-CS-029",
      "title": "Cirrhosis with acute variceal hemorrhage",
      "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and upper GI variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "nursingNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "nursesNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "vitalSigns": "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%.",
    "diagnosticResults": "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated.",
    "providerOrders": "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis",
    "stimulus": {
      "caseGroupId": "QR-CS-029",
      "patientProfile": {
        "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
      },
      "tabs": {
        "history": [
          "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
        ],
        "nursesNotes": [
          "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless."
        ],
        "vitalSigns": [
          "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%."
        ],
        "labResults": [
          "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated."
        ],
        "providerOrders": [
          "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Cirrhosis and upper GI variceal bleeding",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100669",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "hematemesis",
      "melena",
      "hr"
    ],
    "rationale": "The combination of vomiting bright red blood, black tarry stool, heart rate 128/min supports recognition of Acute variceal hemorrhage with hypovolemic shock risk.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100669",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "hematemesis",
        "melena",
        "hr"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of vomiting bright red blood, black tarry stool, heart rate 128/min supports recognition of Acute variceal hemorrhage with hypovolemic shock risk.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "Vomiting bright red blood. Black tarry stool. Heart rate 128/min. Blood pressure 88/54 mmHg. Hemoglobin 7.4 g/dL. A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "highlightSegments": [
      {
        "id": "hematemesis",
        "text": "Vomiting bright red blood"
      },
      {
        "id": "melena",
        "text": "Black tarry stool"
      },
      {
        "id": "hr",
        "text": "Heart rate 128/min"
      },
      {
        "id": "bp",
        "text": "Blood pressure 88/54 mmHg"
      },
      {
        "id": "hgb",
        "text": "Hemoglobin 7.4 g/dL"
      }
    ],
    "correctHighlights": [
      "hematemesis",
      "melena",
      "hr"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-029",
    "caseTitle": "Cirrhosis with acute variceal hemorrhage",
    "caseStudyContext": {
      "id": "QR-CS-029",
      "title": "Cirrhosis with acute variceal hemorrhage",
      "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and upper GI variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "nursingNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "nursesNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "vitalSigns": "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%.",
    "diagnosticResults": "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated.",
    "providerOrders": "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis",
    "stimulus": {
      "caseGroupId": "QR-CS-029",
      "patientProfile": {
        "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
      },
      "tabs": {
        "history": [
          "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
        ],
        "nursesNotes": [
          "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless."
        ],
        "vitalSigns": [
          "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%."
        ],
        "labResults": [
          "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated."
        ],
        "providerOrders": [
          "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Cirrhosis and upper GI variceal bleeding",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100670",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "Vomiting bright red blood",
      "Black tarry stool",
      "Heart rate 128/min",
      "Blood pressure 88/54 mmHg"
    ],
    "correctAnswer": {
      "hematemesis": "Active upper GI hemorrhage",
      "melena": "GI bleeding cue",
      "hr": "Compensatory tachycardia",
      "bp": "Hemodynamic instability"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Acute variceal hemorrhage with hypovolemic shock risk.",
    "optionRationales": {
      "Vomiting bright red blood": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Black tarry stool": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Heart rate 128/min": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Blood pressure 88/54 mmHg": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100670",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "hematemesis": [
          "Active upper GI hemorrhage",
          "GI bleeding cue",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ],
        "melena": [
          "Active upper GI hemorrhage",
          "GI bleeding cue",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ],
        "hr": [
          "Active upper GI hemorrhage",
          "GI bleeding cue",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ],
        "bp": [
          "Active upper GI hemorrhage",
          "GI bleeding cue",
          "Compensatory tachycardia",
          "Hemodynamic instability"
        ]
      },
      "answerKey": {
        "hematemesis": "Active upper GI hemorrhage",
        "melena": "GI bleeding cue",
        "hr": "Compensatory tachycardia",
        "bp": "Hemodynamic instability"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Acute variceal hemorrhage with hypovolemic shock risk.",
      "options": {
        "Vomiting bright red blood": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Black tarry stool": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Heart rate 128/min": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Blood pressure 88/54 mmHg": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "hematemesis",
        "label": "Vomiting bright red blood"
      },
      {
        "id": "melena",
        "label": "Black tarry stool"
      },
      {
        "id": "hr",
        "label": "Heart rate 128/min"
      },
      {
        "id": "bp",
        "label": "Blood pressure 88/54 mmHg"
      }
    ],
    "columns": [
      "Active upper GI hemorrhage",
      "GI bleeding cue",
      "Compensatory tachycardia",
      "Hemodynamic instability"
    ],
    "correctAnswers": {
      "hematemesis": "Active upper GI hemorrhage",
      "melena": "GI bleeding cue",
      "hr": "Compensatory tachycardia",
      "bp": "Hemodynamic instability"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-029",
    "caseTitle": "Cirrhosis with acute variceal hemorrhage",
    "caseStudyContext": {
      "id": "QR-CS-029",
      "title": "Cirrhosis with acute variceal hemorrhage",
      "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and upper GI variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "nursingNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "nursesNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "vitalSigns": "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%.",
    "diagnosticResults": "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated.",
    "providerOrders": "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis",
    "stimulus": {
      "caseGroupId": "QR-CS-029",
      "patientProfile": {
        "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
      },
      "tabs": {
        "history": [
          "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
        ],
        "nursesNotes": [
          "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless."
        ],
        "vitalSigns": [
          "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%."
        ],
        "labResults": [
          "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated."
        ],
        "providerOrders": [
          "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Cirrhosis and upper GI variceal bleeding",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100671",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Acute variceal hemorrhage with hypovolemic shock risk",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate emergency response and support airway and circulation.",
        "Establish large-bore IV access and prepare ordered blood products.",
        "Prepare prescribed vasoactive therapy and urgent endoscopic intervention."
      ],
      "monitoring": [
        "Hemodynamics, mental status, oxygenation, and ongoing blood loss",
        "Hemoglobin, coagulation status, and response to hemorrhage treatment"
      ]
    },
    "correctAnswer": {
      "condition": "Acute variceal hemorrhage with hypovolemic shock risk",
      "actions": [
        "Activate emergency response and support airway and circulation.",
        "Establish large-bore IV access and prepare ordered blood products."
      ],
      "monitoring": [
        "Hemodynamics, mental status, oxygenation, and ongoing blood loss",
        "Hemoglobin, coagulation status, and response to hemorrhage treatment"
      ]
    },
    "rationale": "The most likely condition is Acute variceal hemorrhage with hypovolemic shock risk. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Acute variceal hemorrhage with hypovolemic shock risk": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate emergency response and support airway and circulation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare prescribed vasoactive therapy and urgent endoscopic intervention.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Hemodynamics, mental status, oxygenation, and ongoing blood loss": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Hemoglobin, coagulation status, and response to hemorrhage treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100671",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute variceal hemorrhage with hypovolemic shock risk",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Activate emergency response and support airway and circulation.",
          "Establish large-bore IV access and prepare ordered blood products.",
          "Prepare prescribed vasoactive therapy and urgent endoscopic intervention."
        ],
        "monitoring": [
          "Hemodynamics, mental status, oxygenation, and ongoing blood loss",
          "Hemoglobin, coagulation status, and response to hemorrhage treatment"
        ]
      },
      "answerKey": {
        "condition": "Acute variceal hemorrhage with hypovolemic shock risk",
        "actions": [
          "Activate emergency response and support airway and circulation.",
          "Establish large-bore IV access and prepare ordered blood products."
        ],
        "monitoring": [
          "Hemodynamics, mental status, oxygenation, and ongoing blood loss",
          "Hemoglobin, coagulation status, and response to hemorrhage treatment"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Acute variceal hemorrhage with hypovolemic shock risk. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Acute variceal hemorrhage with hypovolemic shock risk": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate emergency response and support airway and circulation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare prescribed vasoactive therapy and urgent endoscopic intervention.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Hemodynamics, mental status, oxygenation, and ongoing blood loss": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Hemoglobin, coagulation status, and response to hemorrhage treatment": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Acute variceal hemorrhage with hypovolemic shock risk",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Activate emergency response and support airway and circulation.",
        "Establish large-bore IV access and prepare ordered blood products.",
        "Prepare prescribed vasoactive therapy and urgent endoscopic intervention."
      ],
      "monitoring": [
        "Hemodynamics, mental status, oxygenation, and ongoing blood loss",
        "Hemoglobin, coagulation status, and response to hemorrhage treatment"
      ]
    },
    "correctAnswers": {
      "condition": "Acute variceal hemorrhage with hypovolemic shock risk",
      "actions": [
        "Activate emergency response and support airway and circulation.",
        "Establish large-bore IV access and prepare ordered blood products."
      ],
      "monitoring": [
        "Hemodynamics, mental status, oxygenation, and ongoing blood loss",
        "Hemoglobin, coagulation status, and response to hemorrhage treatment"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-029",
    "caseTitle": "Cirrhosis with acute variceal hemorrhage",
    "caseStudyContext": {
      "id": "QR-CS-029",
      "title": "Cirrhosis with acute variceal hemorrhage",
      "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and upper GI variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "nursingNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "nursesNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "vitalSigns": "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%.",
    "diagnosticResults": "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated.",
    "providerOrders": "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis",
    "stimulus": {
      "caseGroupId": "QR-CS-029",
      "patientProfile": {
        "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
      },
      "tabs": {
        "history": [
          "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
        ],
        "nursesNotes": [
          "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless."
        ],
        "vitalSigns": [
          "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%."
        ],
        "labResults": [
          "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated."
        ],
        "providerOrders": [
          "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Cirrhosis and upper GI variceal bleeding",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100672",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Activate emergency response and support airway and circulation.",
      "Establish large-bore IV access and prepare ordered blood products.",
      "Prepare prescribed vasoactive therapy and urgent endoscopic intervention.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Activate emergency response and support airway and circulation.",
      "Establish large-bore IV access and prepare ordered blood products.",
      "Prepare prescribed vasoactive therapy and urgent endoscopic intervention."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Acute variceal hemorrhage with hypovolemic shock risk while supporting timely reassessment.",
    "optionRationales": {
      "Activate emergency response and support airway and circulation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Prepare prescribed vasoactive therapy and urgent endoscopic intervention.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100672",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Activate emergency response and support airway and circulation.",
        "Establish large-bore IV access and prepare ordered blood products.",
        "Prepare prescribed vasoactive therapy and urgent endoscopic intervention.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Activate emergency response and support airway and circulation.",
        "Establish large-bore IV access and prepare ordered blood products.",
        "Prepare prescribed vasoactive therapy and urgent endoscopic intervention."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Acute variceal hemorrhage with hypovolemic shock risk while supporting timely reassessment.",
      "options": {
        "Activate emergency response and support airway and circulation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Establish large-bore IV access and prepare ordered blood products.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Prepare prescribed vasoactive therapy and urgent endoscopic intervention.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-029",
    "caseTitle": "Cirrhosis with acute variceal hemorrhage",
    "caseStudyContext": {
      "id": "QR-CS-029",
      "title": "Cirrhosis with acute variceal hemorrhage",
      "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and upper GI variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "nursingNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "nursesNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "vitalSigns": "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%.",
    "diagnosticResults": "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated.",
    "providerOrders": "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis",
    "stimulus": {
      "caseGroupId": "QR-CS-029",
      "patientProfile": {
        "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
      },
      "tabs": {
        "history": [
          "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
        ],
        "nursesNotes": [
          "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless."
        ],
        "vitalSigns": [
          "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%."
        ],
        "labResults": [
          "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated."
        ],
        "providerOrders": [
          "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Cirrhosis and upper GI variceal bleeding",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100673",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Prepare for urgent endoscopic hemostasis",
      "Administer prescribed vasoactive therapy and antibiotics",
      "Establish IV access and prepare blood products",
      "Activate emergency GI bleed response"
    ],
    "correctAnswer": [
      "Activate emergency GI bleed response",
      "Establish IV access and prepare blood products",
      "Administer prescribed vasoactive therapy and antibiotics",
      "Prepare for urgent endoscopic hemostasis"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute variceal hemorrhage with hypovolemic shock risk.",
    "optionRationales": {
      "Prepare for urgent endoscopic hemostasis": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Administer prescribed vasoactive therapy and antibiotics": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Establish IV access and prepare blood products": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Activate emergency GI bleed response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100673",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Prepare for urgent endoscopic hemostasis",
        "Administer prescribed vasoactive therapy and antibiotics",
        "Establish IV access and prepare blood products",
        "Activate emergency GI bleed response"
      ],
      "answerKey": [
        "Activate emergency GI bleed response",
        "Establish IV access and prepare blood products",
        "Administer prescribed vasoactive therapy and antibiotics",
        "Prepare for urgent endoscopic hemostasis"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Acute variceal hemorrhage with hypovolemic shock risk.",
      "options": {
        "Prepare for urgent endoscopic hemostasis": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Administer prescribed vasoactive therapy and antibiotics": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Establish IV access and prepare blood products": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Activate emergency GI bleed response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Prepare for urgent endoscopic hemostasis",
      "Administer prescribed vasoactive therapy and antibiotics",
      "Establish IV access and prepare blood products",
      "Activate emergency GI bleed response"
    ],
    "correctOrder": [
      "Activate emergency GI bleed response",
      "Establish IV access and prepare blood products",
      "Administer prescribed vasoactive therapy and antibiotics",
      "Prepare for urgent endoscopic hemostasis"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-029",
    "caseTitle": "Cirrhosis with acute variceal hemorrhage",
    "caseStudyContext": {
      "id": "QR-CS-029",
      "title": "Cirrhosis with acute variceal hemorrhage",
      "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and upper GI variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "difficulty": 4,
    "history": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension.",
    "nursingNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "nursesNotes": "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless.",
    "vitalSigns": "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%.",
    "diagnosticResults": "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated.",
    "providerOrders": "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis",
    "stimulus": {
      "caseGroupId": "QR-CS-029",
      "patientProfile": {
        "summary": "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
      },
      "tabs": {
        "history": [
          "A client with cirrhosis presents with hematemesis, melena, tachycardia, and hypotension."
        ],
        "nursesNotes": [
          "The client vomits bright red blood and passes black tarry stool. The client is pale, diaphoretic, and increasingly restless."
        ],
        "vitalSigns": [
          "HR 128/min; BP 88/54 mmHg; RR 24/min; SpO₂ 93%."
        ],
        "labResults": [
          "Hemoglobin 7.4 g/dL; platelets 82,000/mm³; INR elevated."
        ],
        "providerOrders": [
          "Activate emergency GI bleed response; Establish IV access and prepare blood products; Administer prescribed vasoactive therapy and antibiotics; Prepare for urgent endoscopic hemostasis"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Cirrhosis and upper GI variceal bleeding",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/liver-disease/cirrhosis",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100674",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Major upper GI bleed with instability; resuscitate and escalate.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Major upper GI bleed with instability; resuscitate and escalate.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Major upper GI bleed with instability; resuscitate and escalate.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100674",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Major upper GI bleed with instability; resuscitate and escalate.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Major upper GI bleed with instability; resuscitate and escalate.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Major upper GI bleed with instability; resuscitate and escalate.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Cirrhosis with acute variceal hemorrhage — clinical progression",
      "stages": [
        {
          "time": "Arrival",
          "situation": "Hematemeis, melena, HR 128/min, BP 88/54 mmHg.",
          "question": "Major upper GI bleed with instability; resuscitate and escalate.",
          "options": [
            "Major upper GI bleed with instability; resuscitate and escalate.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Major upper GI bleed with instability; resuscitate and escalate."
        },
        {
          "time": "During resuscitation",
          "situation": "Continued hematemesis with persistent hypotension.",
          "question": "Ongoing hemorrhage; prepare urgent definitive hemostasis and blood products.",
          "options": [
            "Ongoing hemorrhage; prepare urgent definitive hemostasis and blood products.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Ongoing hemorrhage; prepare urgent definitive hemostasis and blood products."
        },
        {
          "time": "After endoscopic treatment",
          "situation": "No further hematemesis; BP and heart rate improve.",
          "question": "Bleeding appears controlled; continue monitoring for rebleeding and organ dysfunction.",
          "options": [
            "Bleeding appears controlled; continue monitoring for rebleeding and organ dysfunction.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Bleeding appears controlled; continue monitoring for rebleeding and organ dysfunction."
        }
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-030",
    "caseTitle": "Suicide risk assessment and immediate behavioral-health safety",
    "caseStudyContext": {
      "id": "QR-CS-030",
      "title": "Suicide risk assessment and immediate behavioral-health safety",
      "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk assessment and safety",
    "clientNeeds": "Psychosocial Integrity",
    "difficulty": 4,
    "history": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "nursingNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "nursesNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "vitalSigns": "Vital signs stable; no acute medical injury identified.",
    "diagnosticResults": "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required.",
    "providerOrders": "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed",
    "stimulus": {
      "caseGroupId": "QR-CS-030",
      "patientProfile": {
        "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
      },
      "tabs": {
        "history": [
          "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
        ],
        "nursesNotes": [
          "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages."
        ],
        "vitalSigns": [
          "Vital signs stable; no acute medical injury identified."
        ],
        "labResults": [
          "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required."
        ],
        "providerOrders": [
          "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Suicide risk assessment and safety",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nimh.nih.gov/health/topics/suicide-prevention",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100675",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "cjmmStep": "Recognize Cues",
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "plan",
      "method",
      "access"
    ],
    "rationale": "The combination of states a specific plan to end their life tonight, identifies a method, reports access to the means supports recognition of Imminent suicide risk requiring immediate safety intervention.",
    "optionRationales": {},
    "metadata": {
      "id": "QR-100675",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "plan",
        "method",
        "access"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The combination of states a specific plan to end their life tonight, identifies a method, reports access to the means supports recognition of Imminent suicide risk requiring immediate safety intervention.",
      "options": {},
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "highlightText": "States a specific plan to end their life tonight. Identifies a method. Reports access to the means. Withdrawn and stopped responding to family. Expresses current intent. A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "highlightSegments": [
      {
        "id": "plan",
        "text": "States a specific plan to end their life tonight"
      },
      {
        "id": "method",
        "text": "Identifies a method"
      },
      {
        "id": "access",
        "text": "Reports access to the means"
      },
      {
        "id": "withdrawal",
        "text": "Withdrawn and stopped responding to family"
      },
      {
        "id": "intent",
        "text": "Expresses current intent"
      }
    ],
    "correctHighlights": [
      "plan",
      "method",
      "access"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-030",
    "caseTitle": "Suicide risk assessment and immediate behavioral-health safety",
    "caseStudyContext": {
      "id": "QR-CS-030",
      "title": "Suicide risk assessment and immediate behavioral-health safety",
      "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk assessment and safety",
    "clientNeeds": "Psychosocial Integrity",
    "difficulty": 4,
    "history": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "nursingNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "nursesNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "vitalSigns": "Vital signs stable; no acute medical injury identified.",
    "diagnosticResults": "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required.",
    "providerOrders": "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed",
    "stimulus": {
      "caseGroupId": "QR-CS-030",
      "patientProfile": {
        "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
      },
      "tabs": {
        "history": [
          "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
        ],
        "nursesNotes": [
          "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages."
        ],
        "vitalSigns": [
          "Vital signs stable; no acute medical injury identified."
        ],
        "labResults": [
          "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required."
        ],
        "providerOrders": [
          "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Suicide risk assessment and safety",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nimh.nih.gov/health/topics/suicide-prevention",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100676",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "cjmmStep": "Analyze Cues",
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits the client's condition.",
    "options": [
      "States a specific plan to end their life tonight",
      "Identifies a method",
      "Reports access to the means",
      "Withdrawn and stopped responding to family"
    ],
    "correctAnswer": {
      "plan": "Specific suicide plan",
      "method": "Plan specificity",
      "access": "Access to lethal means",
      "withdrawal": "Behavioral warning cue"
    },
    "rationale": "Each cue contributes a different part of the clinical picture. Together, they support Imminent suicide risk requiring immediate safety intervention.",
    "optionRationales": {
      "States a specific plan to end their life tonight": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Identifies a method": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Reports access to the means": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Withdrawn and stopped responding to family": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100676",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits the client's condition.",
      "options": {
        "plan": [
          "Specific suicide plan",
          "Plan specificity",
          "Access to lethal means",
          "Behavioral warning cue"
        ],
        "method": [
          "Specific suicide plan",
          "Plan specificity",
          "Access to lethal means",
          "Behavioral warning cue"
        ],
        "access": [
          "Specific suicide plan",
          "Plan specificity",
          "Access to lethal means",
          "Behavioral warning cue"
        ],
        "withdrawal": [
          "Specific suicide plan",
          "Plan specificity",
          "Access to lethal means",
          "Behavioral warning cue"
        ]
      },
      "answerKey": {
        "plan": "Specific suicide plan",
        "method": "Plan specificity",
        "access": "Access to lethal means",
        "withdrawal": "Behavioral warning cue"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Each cue contributes a different part of the clinical picture. Together, they support Imminent suicide risk requiring immediate safety intervention.",
      "options": {
        "States a specific plan to end their life tonight": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Identifies a method": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Reports access to the means": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Withdrawn and stopped responding to family": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "matrixLeftPane": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "plan",
        "label": "States a specific plan to end their life tonight"
      },
      {
        "id": "method",
        "label": "Identifies a method"
      },
      {
        "id": "access",
        "label": "Reports access to the means"
      },
      {
        "id": "withdrawal",
        "label": "Withdrawn and stopped responding to family"
      }
    ],
    "columns": [
      "Specific suicide plan",
      "Plan specificity",
      "Access to lethal means",
      "Behavioral warning cue"
    ],
    "correctAnswers": {
      "plan": "Specific suicide plan",
      "method": "Plan specificity",
      "access": "Access to lethal means",
      "withdrawal": "Behavioral warning cue"
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-030",
    "caseTitle": "Suicide risk assessment and immediate behavioral-health safety",
    "caseStudyContext": {
      "id": "QR-CS-030",
      "title": "Suicide risk assessment and immediate behavioral-health safety",
      "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk assessment and safety",
    "clientNeeds": "Psychosocial Integrity",
    "difficulty": 4,
    "history": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "nursingNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "nursesNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "vitalSigns": "Vital signs stable; no acute medical injury identified.",
    "diagnosticResults": "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required.",
    "providerOrders": "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed",
    "stimulus": {
      "caseGroupId": "QR-CS-030",
      "patientProfile": {
        "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
      },
      "tabs": {
        "history": [
          "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
        ],
        "nursesNotes": [
          "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages."
        ],
        "vitalSigns": [
          "Vital signs stable; no acute medical injury identified."
        ],
        "labResults": [
          "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required."
        ],
        "providerOrders": [
          "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Suicide risk assessment and safety",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nimh.nih.gov/health/topics/suicide-prevention",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100677",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "cjmmStep": "Prioritize Hypotheses",
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": {
      "conditions": [
        "Imminent suicide risk requiring immediate safety intervention",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Maintain continuous observation at the level required by policy and do not leave the client alone.",
        "Initiate immediate safety precautions and remove accessible hazards.",
        "Notify the behavioral-health team and arrange urgent evaluation."
      ],
      "monitoring": [
        "Current intent, plan, access to means, and changes in behavior",
        "Observation level, environmental safety, and response to crisis intervention"
      ]
    },
    "correctAnswer": {
      "condition": "Imminent suicide risk requiring immediate safety intervention",
      "actions": [
        "Maintain continuous observation at the level required by policy and do not leave the client alone.",
        "Initiate immediate safety precautions and remove accessible hazards."
      ],
      "monitoring": [
        "Current intent, plan, access to means, and changes in behavior",
        "Observation level, environmental safety, and response to crisis intervention"
      ]
    },
    "rationale": "The most likely condition is Imminent suicide risk requiring immediate safety intervention. Prioritize the immediate stabilization actions and monitor for response and complications.",
    "optionRationales": {
      "Imminent suicide risk requiring immediate safety intervention": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Maintain continuous observation at the level required by policy and do not leave the client alone.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Initiate immediate safety precautions and remove accessible hazards.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Notify the behavioral-health team and arrange urgent evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Current intent, plan, access to means, and changes in behavior": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Observation level, environmental safety, and response to crisis intervention": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100677",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Imminent suicide risk requiring immediate safety intervention",
          "A stable chronic condition unrelated to the acute findings",
          "A minor self-limited problem"
        ],
        "actions": [
          "Maintain continuous observation at the level required by policy and do not leave the client alone.",
          "Initiate immediate safety precautions and remove accessible hazards.",
          "Notify the behavioral-health team and arrange urgent evaluation."
        ],
        "monitoring": [
          "Current intent, plan, access to means, and changes in behavior",
          "Observation level, environmental safety, and response to crisis intervention"
        ]
      },
      "answerKey": {
        "condition": "Imminent suicide risk requiring immediate safety intervention",
        "actions": [
          "Maintain continuous observation at the level required by policy and do not leave the client alone.",
          "Initiate immediate safety precautions and remove accessible hazards."
        ],
        "monitoring": [
          "Current intent, plan, access to means, and changes in behavior",
          "Observation level, environmental safety, and response to crisis intervention"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The most likely condition is Imminent suicide risk requiring immediate safety intervention. Prioritize the immediate stabilization actions and monitor for response and complications.",
      "options": {
        "Imminent suicide risk requiring immediate safety intervention": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A stable chronic condition unrelated to the acute findings": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "A minor self-limited problem": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Maintain continuous observation at the level required by policy and do not leave the client alone.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Initiate immediate safety precautions and remove accessible hazards.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Notify the behavioral-health team and arrange urgent evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Current intent, plan, access to means, and changes in behavior": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Observation level, environmental safety, and response to crisis intervention": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "bowtieData": {
      "conditions": [
        "Imminent suicide risk requiring immediate safety intervention",
        "A stable chronic condition unrelated to the acute findings",
        "A minor self-limited problem"
      ],
      "actions": [
        "Maintain continuous observation at the level required by policy and do not leave the client alone.",
        "Initiate immediate safety precautions and remove accessible hazards.",
        "Notify the behavioral-health team and arrange urgent evaluation."
      ],
      "monitoring": [
        "Current intent, plan, access to means, and changes in behavior",
        "Observation level, environmental safety, and response to crisis intervention"
      ]
    },
    "correctAnswers": {
      "condition": "Imminent suicide risk requiring immediate safety intervention",
      "actions": [
        "Maintain continuous observation at the level required by policy and do not leave the client alone.",
        "Initiate immediate safety precautions and remove accessible hazards."
      ],
      "monitoring": [
        "Current intent, plan, access to means, and changes in behavior",
        "Observation level, environmental safety, and response to crisis intervention"
      ]
    }
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-030",
    "caseTitle": "Suicide risk assessment and immediate behavioral-health safety",
    "caseStudyContext": {
      "id": "QR-CS-030",
      "title": "Suicide risk assessment and immediate behavioral-health safety",
      "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk assessment and safety",
    "clientNeeds": "Psychosocial Integrity",
    "difficulty": 4,
    "history": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "nursingNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "nursesNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "vitalSigns": "Vital signs stable; no acute medical injury identified.",
    "diagnosticResults": "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required.",
    "providerOrders": "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed",
    "stimulus": {
      "caseGroupId": "QR-CS-030",
      "patientProfile": {
        "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
      },
      "tabs": {
        "history": [
          "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
        ],
        "nursesNotes": [
          "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages."
        ],
        "vitalSigns": [
          "Vital signs stable; no acute medical injury identified."
        ],
        "labResults": [
          "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required."
        ],
        "providerOrders": [
          "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Suicide risk assessment and safety",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nimh.nih.gov/health/topics/suicide-prevention",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100678",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "cjmmStep": "Generate Solutions",
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Maintain continuous observation at the level required by policy and do not leave the client alone.",
      "Initiate immediate safety precautions and remove accessible hazards.",
      "Notify the behavioral-health team and arrange urgent evaluation.",
      "Wait for all pending results before escalating.",
      "Encourage activity despite acute instability."
    ],
    "correctAnswer": [
      "Maintain continuous observation at the level required by policy and do not leave the client alone.",
      "Initiate immediate safety precautions and remove accessible hazards.",
      "Notify the behavioral-health team and arrange urgent evaluation."
    ],
    "rationale": "The three keyed priorities address the immediate threat in Imminent suicide risk requiring immediate safety intervention while supporting timely reassessment.",
    "optionRationales": {
      "Maintain continuous observation at the level required by policy and do not leave the client alone.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Initiate immediate safety precautions and remove accessible hazards.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Notify the behavioral-health team and arrange urgent evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100678",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Maintain continuous observation at the level required by policy and do not leave the client alone.",
        "Initiate immediate safety precautions and remove accessible hazards.",
        "Notify the behavioral-health team and arrange urgent evaluation.",
        "Wait for all pending results before escalating.",
        "Encourage activity despite acute instability."
      ],
      "answerKey": [
        "Maintain continuous observation at the level required by policy and do not leave the client alone.",
        "Initiate immediate safety precautions and remove accessible hazards.",
        "Notify the behavioral-health team and arrange urgent evaluation."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "rationales": {
      "overall": "The three keyed priorities address the immediate threat in Imminent suicide risk requiring immediate safety intervention while supporting timely reassessment.",
      "options": {
        "Maintain continuous observation at the level required by policy and do not leave the client alone.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Initiate immediate safety precautions and remove accessible hazards.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Notify the behavioral-health team and arrange urgent evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Wait for all pending results before escalating.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Encourage activity despite acute instability.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-030",
    "caseTitle": "Suicide risk assessment and immediate behavioral-health safety",
    "caseStudyContext": {
      "id": "QR-CS-030",
      "title": "Suicide risk assessment and immediate behavioral-health safety",
      "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk assessment and safety",
    "clientNeeds": "Psychosocial Integrity",
    "difficulty": 4,
    "history": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "nursingNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "nursesNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "vitalSigns": "Vital signs stable; no acute medical injury identified.",
    "diagnosticResults": "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required.",
    "providerOrders": "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed",
    "stimulus": {
      "caseGroupId": "QR-CS-030",
      "patientProfile": {
        "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
      },
      "tabs": {
        "history": [
          "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
        ],
        "nursesNotes": [
          "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages."
        ],
        "vitalSigns": [
          "Vital signs stable; no acute medical injury identified."
        ],
        "labResults": [
          "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required."
        ],
        "providerOrders": [
          "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Suicide risk assessment and safety",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nimh.nih.gov/health/topics/suicide-prevention",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100679",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "cjmmStep": "Take Action",
    "type": "Extended Drag and Drop",
    "question": "Place the nursing actions in the safest priority sequence.",
    "options": [
      "Develop a collaborative safety plan when immediate danger is addressed",
      "Notify behavioral-health provider and arrange urgent assessment",
      "Initiate observation and environmental precautions per policy",
      "Stay with the client and activate immediate safety response"
    ],
    "correctAnswer": [
      "Stay with the client and activate immediate safety response",
      "Initiate observation and environmental precautions per policy",
      "Notify behavioral-health provider and arrange urgent assessment",
      "Develop a collaborative safety plan when immediate danger is addressed"
    ],
    "rationale": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Imminent suicide risk requiring immediate safety intervention.",
    "optionRationales": {
      "Develop a collaborative safety plan when immediate danger is addressed": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Notify behavioral-health provider and arrange urgent assessment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Initiate observation and environmental precautions per policy": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Stay with the client and activate immediate safety response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100679",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Drag and Drop",
      "stem": "Place the nursing actions in the safest priority sequence.",
      "options": [
        "Develop a collaborative safety plan when immediate danger is addressed",
        "Notify behavioral-health provider and arrange urgent assessment",
        "Initiate observation and environmental precautions per policy",
        "Stay with the client and activate immediate safety response"
      ],
      "answerKey": [
        "Stay with the client and activate immediate safety response",
        "Initiate observation and environmental precautions per policy",
        "Notify behavioral-health provider and arrange urgent assessment",
        "Develop a collaborative safety plan when immediate danger is addressed"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "Sequence the response from immediate escalation and stabilization through treatment and reassessment for Imminent suicide risk requiring immediate safety intervention.",
      "options": {
        "Develop a collaborative safety plan when immediate danger is addressed": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Notify behavioral-health provider and arrange urgent assessment": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Initiate observation and environmental precautions per policy": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Stay with the client and activate immediate safety response": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "availableItems": [
      "Develop a collaborative safety plan when immediate danger is addressed",
      "Notify behavioral-health provider and arrange urgent assessment",
      "Initiate observation and environmental precautions per policy",
      "Stay with the client and activate immediate safety response"
    ],
    "correctOrder": [
      "Stay with the client and activate immediate safety response",
      "Initiate observation and environmental precautions per policy",
      "Notify behavioral-health provider and arrange urgent assessment",
      "Develop a collaborative safety plan when immediate danger is addressed"
    ]
  },
  {
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-030",
    "caseTitle": "Suicide risk assessment and immediate behavioral-health safety",
    "caseStudyContext": {
      "id": "QR-CS-030",
      "title": "Suicide risk assessment and immediate behavioral-health safety",
      "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk assessment and safety",
    "clientNeeds": "Psychosocial Integrity",
    "difficulty": 4,
    "history": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means.",
    "nursingNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "nursesNotes": "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages.",
    "vitalSigns": "Vital signs stable; no acute medical injury identified.",
    "diagnosticResults": "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required.",
    "providerOrders": "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed",
    "stimulus": {
      "caseGroupId": "QR-CS-030",
      "patientProfile": {
        "summary": "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
      },
      "tabs": {
        "history": [
          "A client admitted for depression tells the nurse about a specific suicide plan and access to the identified means."
        ],
        "nursesNotes": [
          "The client states, 'I have a plan to end my life tonight,' identifies a method, and reports access to the means. The client is withdrawn and has stopped responding to family messages."
        ],
        "vitalSigns": [
          "Vital signs stable; no acute medical injury identified."
        ],
        "labResults": [
          "No laboratory findings explain the expressed intent; immediate structured suicide risk assessment is required."
        ],
        "providerOrders": [
          "Stay with the client and activate immediate safety response; Initiate observation and environmental precautions per policy; Notify behavioral-health provider and arrange urgent assessment; Develop a collaborative safety plan when immediate danger is addressed"
        ]
      }
    },
    "sourceReferences": [
      {
        "title": "Clinical guidance and patient-care reference for Suicide risk assessment and safety",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nimh.nih.gov/health/topics/suicide-prevention",
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
      "Original educational case; apply current institutional protocols, patient-specific orders, and qualified clinical judgment."
    ],
    "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response.",
    "id": "QR-100680",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "cjmmStep": "Evaluate Outcomes",
    "type": "Trend",
    "question": "Review the evolving findings. Select the best interpretation at the current time point.",
    "options": [
      "Imminent risk; maintain safety and urgent evaluation.",
      "The client is stable and no further assessment is needed.",
      "Delay intervention until every pending result is available.",
      "This change is unrelated to the presenting condition."
    ],
    "correctAnswer": "Imminent risk; maintain safety and urgent evaluation.",
    "rationale": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
    "optionRationales": {
      "Imminent risk; maintain safety and urgent evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
      "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
    },
    "metadata": {
      "id": "QR-100680",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings. Select the best interpretation at the current time point.",
      "options": [
        "Imminent risk; maintain safety and urgent evaluation.",
        "The client is stable and no further assessment is needed.",
        "Delay intervention until every pending result is available.",
        "This change is unrelated to the presenting condition."
      ],
      "answerKey": "Imminent risk; maintain safety and urgent evaluation.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "rationales": {
      "overall": "The trajectory shows how the client's response changes over time. Reassess each new finding and adjust care according to the evolving status.",
      "options": {
        "Imminent risk; maintain safety and urgent evaluation.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "The client is stable and no further assessment is needed.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "Delay intervention until every pending result is available.": "This response must be evaluated against the client's evolving cues and immediate safety priorities.",
        "This change is unrelated to the presenting condition.": "This response must be evaluated against the client's evolving cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving clinical cues to recognize deterioration, prioritize immediate threats, take safe action, and evaluate the response."
    },
    "trendData": {
      "title": "Suicide risk assessment and immediate behavioral-health safety — clinical progression",
      "stages": [
        {
          "time": "Initial disclosure",
          "situation": "Specific plan, stated intent, and access to means.",
          "question": "Imminent risk; maintain safety and urgent evaluation.",
          "options": [
            "Imminent risk; maintain safety and urgent evaluation.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Imminent risk; maintain safety and urgent evaluation."
        },
        {
          "time": "During assessment",
          "situation": "Client remains distressed and confirms intent if discharged today.",
          "question": "Risk remains high; continue observation and safety precautions.",
          "options": [
            "Risk remains high; continue observation and safety precautions.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Risk remains high; continue observation and safety precautions."
        },
        {
          "time": "After crisis intervention",
          "situation": "Client engages with the team and agrees to a collaborative safety plan; access to means is addressed.",
          "question": "Continue reassessment and follow-up; do not equate temporary engagement with absence of risk.",
          "options": [
            "Continue reassessment and follow-up; do not equate temporary engagement with absence of risk.",
            "The client is stable and no further assessment is needed.",
            "Delay intervention until every pending result is available.",
            "This change is unrelated to the presenting condition."
          ],
          "correctAnswer": "Continue reassessment and follow-up; do not equate temporary engagement with absence of risk."
        }
      ]
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedLinkedCases={groups:10,items:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
