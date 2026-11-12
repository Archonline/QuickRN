/* Ten additional original six-question linked NGN case studies (groups 011–020).
 * Questions within each group are sequenced 1–6 and must never be shuffled independently.
 * Structural validation does not replace qualified clinical review.
 */
(function(root){
 'use strict';
 const bank=root.questions;
 if(!Array.isArray(bank))throw new Error('Canonical bank must load before linked case-study batch 2.');
 if(bank.some(q=>String(q?.id||'').startsWith('QR-100121')))throw new Error('Linked case-study batch 2 already exists.');
 const cases=[[
  {
    "id": "QR-100121",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-011",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Acute Pulmonary Embolism With Hemodynamic Instability",
    "caseStudyContext": {
      "id": "QR-CS-011",
      "title": "Acute Pulmonary Embolism With Hemodynamic Instability",
      "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "sat",
      "hr",
      "surgery"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "sat": "This cue contributes to recognition of the immediate clinical threat.",
      "hr": "This cue contributes to recognition of the immediate clinical threat.",
      "surgery": "This cue contributes to recognition of the immediate clinical threat.",
      "temp": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Venous Thromboembolism: Diagnosis and Treatment",
        "publisher": "CDC",
        "url": "https://www.cdc.gov/blood-clots/hcp/diagnosis-treatment/index.html",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100121",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago.",
    "providerOrders": "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy.",
    "nursingNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain. SpO₂ 86%. Heart rate 128/min. Recent major orthopedic surgery. Afebrile.",
    "nursesNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain. SpO₂ 86%. Heart rate 128/min. Recent major orthopedic surgery. Afebrile.",
    "vitalSigns": "08:10: Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air.",
    "diagnosticResults": "Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air. Clinical interpretation: Acute cardiopulmonary emergency; escalate immediately.",
    "stimulus": {
      "caseGroupId": "QR-CS-011",
      "patientProfile": {
        "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
      },
      "tabs": {
        "history": [
          "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago."
        ],
        "nursesNotes": [
          "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
        ],
        "providerOrders": [
          "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy."
        ],
        "vitalSigns": [
          "08:10: Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air."
        ],
        "labResults": [
          "Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air. Clinical interpretation: Acute cardiopulmonary emergency; escalate immediately."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "sat": "This cue contributes to recognition of the immediate clinical threat.",
        "hr": "This cue contributes to recognition of the immediate clinical threat.",
        "surgery": "This cue contributes to recognition of the immediate clinical threat.",
        "temp": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "sat",
        "hr",
        "surgery"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain. SpO₂ 86%. Heart rate 128/min. Recent major orthopedic surgery. Afebrile.",
    "highlightSegments": [
      {
        "id": "sat",
        "text": "SpO₂ 86%"
      },
      {
        "id": "hr",
        "text": "Heart rate 128/min"
      },
      {
        "id": "surgery",
        "text": "Recent major orthopedic surgery"
      },
      {
        "id": "temp",
        "text": "Afebrile"
      }
    ],
    "correctHighlights": [
      "sat",
      "hr",
      "surgery"
    ]
  },
  {
    "id": "QR-100122",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-011",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Acute Pulmonary Embolism With Hemodynamic Instability",
    "caseStudyContext": {
      "id": "QR-CS-011",
      "title": "Acute Pulmonary Embolism With Hemodynamic Instability",
      "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "sat": "Immediate respiratory concern",
      "hr": "Acute cardiopulmonary compromise",
      "surgery": "Thromboembolic risk factor",
      "temp": "Does not exclude pulmonary embolism"
    },
    "rationale": "This item assesses analyze cues in the context of Pulmonary embolism.",
    "optionRationales": {
      "sat": "Immediate respiratory concern",
      "hr": "Acute cardiopulmonary compromise",
      "surgery": "Thromboembolic risk factor",
      "temp": "Does not exclude pulmonary embolism"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Venous Thromboembolism: Diagnosis and Treatment",
        "publisher": "CDC",
        "url": "https://www.cdc.gov/blood-clots/hcp/diagnosis-treatment/index.html",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100122",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago.",
    "providerOrders": "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy.",
    "nursingNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "nursesNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "vitalSigns": "08:10: Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air.",
    "diagnosticResults": "Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air. Clinical interpretation: Acute cardiopulmonary emergency; escalate immediately.",
    "stimulus": {
      "caseGroupId": "QR-CS-011",
      "patientProfile": {
        "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
      },
      "tabs": {
        "history": [
          "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago."
        ],
        "nursesNotes": [
          "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
        ],
        "providerOrders": [
          "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy."
        ],
        "vitalSigns": [
          "08:10: Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air."
        ],
        "labResults": [
          "Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air. Clinical interpretation: Acute cardiopulmonary emergency; escalate immediately."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Pulmonary embolism.",
      "options": {
        "sat": "Immediate respiratory concern",
        "hr": "Acute cardiopulmonary compromise",
        "surgery": "Thromboembolic risk factor",
        "temp": "Does not exclude pulmonary embolism"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "sat": [
          "Immediate respiratory concern",
          "Acute cardiopulmonary compromise",
          "Thromboembolic risk factor",
          "Does not exclude pulmonary embolism"
        ],
        "hr": [
          "Immediate respiratory concern",
          "Acute cardiopulmonary compromise",
          "Thromboembolic risk factor",
          "Does not exclude pulmonary embolism"
        ],
        "surgery": [
          "Immediate respiratory concern",
          "Acute cardiopulmonary compromise",
          "Thromboembolic risk factor",
          "Does not exclude pulmonary embolism"
        ],
        "temp": [
          "Immediate respiratory concern",
          "Acute cardiopulmonary compromise",
          "Thromboembolic risk factor",
          "Does not exclude pulmonary embolism"
        ]
      },
      "answerKey": {
        "sat": "Immediate respiratory concern",
        "hr": "Acute cardiopulmonary compromise",
        "surgery": "Thromboembolic risk factor",
        "temp": "Does not exclude pulmonary embolism"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "sat",
        "text": "SpO₂ 86%"
      },
      {
        "id": "hr",
        "text": "Heart rate 128/min"
      },
      {
        "id": "surgery",
        "text": "Recent major orthopedic surgery"
      },
      {
        "id": "temp",
        "text": "Afebrile"
      }
    ],
    "columns": [
      "Immediate respiratory concern",
      "Acute cardiopulmonary compromise",
      "Thromboembolic risk factor",
      "Does not exclude pulmonary embolism"
    ],
    "correctAnswers": {
      "sat": "Immediate respiratory concern",
      "hr": "Acute cardiopulmonary compromise",
      "surgery": "Thromboembolic risk factor",
      "temp": "Does not exclude pulmonary embolism"
    }
  },
  {
    "id": "QR-100123",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-011",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Acute Pulmonary Embolism With Hemodynamic Instability",
    "caseStudyContext": {
      "id": "QR-CS-011",
      "title": "Acute Pulmonary Embolism With Hemodynamic Instability",
      "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Activate rapid response and support oxygenation.",
      "Maintain cardiac monitoring and prepare urgent evaluation.",
      "Assess for hemodynamic instability.",
      "Encourage ambulation during acute instability.",
      "Wait for D-dimer before escalation."
    ],
    "correctAnswer": [
      "Activate rapid response and support oxygenation.",
      "Maintain cardiac monitoring and prepare urgent evaluation.",
      "Assess for hemodynamic instability."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Pulmonary embolism.",
    "optionRationales": {
      "Activate rapid response and support oxygenation.": "Correct priority for the current clinical threat.",
      "Maintain cardiac monitoring and prepare urgent evaluation.": "Correct priority for the current clinical threat.",
      "Assess for hemodynamic instability.": "Correct priority for the current clinical threat.",
      "Encourage ambulation during acute instability.": "Not the priority; this may delay or compromise care.",
      "Wait for D-dimer before escalation.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Venous Thromboembolism: Diagnosis and Treatment",
        "publisher": "CDC",
        "url": "https://www.cdc.gov/blood-clots/hcp/diagnosis-treatment/index.html",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100123",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago.",
    "providerOrders": "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy.",
    "nursingNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "nursesNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "vitalSigns": "08:25: BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen.",
    "diagnosticResults": "BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen. Clinical interpretation: Possible hemodynamic compromise; urgent stabilization and reperfusion evaluation.",
    "stimulus": {
      "caseGroupId": "QR-CS-011",
      "patientProfile": {
        "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
      },
      "tabs": {
        "history": [
          "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago."
        ],
        "nursesNotes": [
          "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
        ],
        "providerOrders": [
          "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy."
        ],
        "vitalSigns": [
          "08:25: BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen."
        ],
        "labResults": [
          "BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen. Clinical interpretation: Possible hemodynamic compromise; urgent stabilization and reperfusion evaluation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Pulmonary embolism.",
      "options": {
        "Activate rapid response and support oxygenation.": "Correct priority for the current clinical threat.",
        "Maintain cardiac monitoring and prepare urgent evaluation.": "Correct priority for the current clinical threat.",
        "Assess for hemodynamic instability.": "Correct priority for the current clinical threat.",
        "Encourage ambulation during acute instability.": "Not the priority; this may delay or compromise care.",
        "Wait for D-dimer before escalation.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Activate rapid response and support oxygenation.",
        "Maintain cardiac monitoring and prepare urgent evaluation.",
        "Assess for hemodynamic instability.",
        "Encourage ambulation during acute instability.",
        "Wait for D-dimer before escalation."
      ],
      "answerKey": [
        "Activate rapid response and support oxygenation.",
        "Maintain cardiac monitoring and prepare urgent evaluation.",
        "Assess for hemodynamic instability."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100124",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-011",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Acute Pulmonary Embolism With Hemodynamic Instability",
    "caseStudyContext": {
      "id": "QR-CS-011",
      "title": "Acute Pulmonary Embolism With Hemodynamic Instability",
      "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Acute pulmonary embolism with hypoxemia and possible right-heart strain",
      "actions": [
        "Provide oxygen and escalate respiratory/hemodynamic instability.",
        "Prepare prescribed anticoagulation or reperfusion therapy after urgent evaluation."
      ],
      "monitoring": [
        "Oxygen saturation, respiratory effort, blood pressure, and heart rhythm",
        "Bleeding and clinical response after anticoagulation"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Pulmonary embolism.",
    "optionRationales": {
      "condition": "Acute pulmonary embolism with hypoxemia and possible right-heart strain",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Venous Thromboembolism: Diagnosis and Treatment",
        "publisher": "CDC",
        "url": "https://www.cdc.gov/blood-clots/hcp/diagnosis-treatment/index.html",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100124",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago.",
    "providerOrders": "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy.",
    "nursingNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "nursesNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "vitalSigns": "08:25: BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen.",
    "diagnosticResults": "BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen. Clinical interpretation: Possible hemodynamic compromise; urgent stabilization and reperfusion evaluation.",
    "stimulus": {
      "caseGroupId": "QR-CS-011",
      "patientProfile": {
        "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
      },
      "tabs": {
        "history": [
          "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago."
        ],
        "nursesNotes": [
          "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
        ],
        "providerOrders": [
          "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy."
        ],
        "vitalSigns": [
          "08:25: BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen."
        ],
        "labResults": [
          "BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen. Clinical interpretation: Possible hemodynamic compromise; urgent stabilization and reperfusion evaluation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Pulmonary embolism.",
      "options": {
        "condition": "Acute pulmonary embolism with hypoxemia and possible right-heart strain",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute pulmonary embolism with hypoxemia and possible right-heart strain",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Provide oxygen and escalate respiratory/hemodynamic instability.",
          "Prepare prescribed anticoagulation or reperfusion therapy after urgent evaluation.",
          "Encourage unassisted ambulation during acute instability."
        ],
        "monitoring": [
          "Oxygen saturation, respiratory effort, blood pressure, and heart rhythm",
          "Bleeding and clinical response after anticoagulation"
        ]
      },
      "answerKey": {
        "condition": "Acute pulmonary embolism with hypoxemia and possible right-heart strain",
        "actions": [
          "Provide oxygen and escalate respiratory/hemodynamic instability.",
          "Prepare prescribed anticoagulation or reperfusion therapy after urgent evaluation."
        ],
        "monitoring": [
          "Oxygen saturation, respiratory effort, blood pressure, and heart rhythm",
          "Bleeding and clinical response after anticoagulation"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Acute pulmonary embolism with hypoxemia and possible right-heart strain",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Provide oxygen and escalate respiratory/hemodynamic instability.",
        "Prepare prescribed anticoagulation or reperfusion therapy after urgent evaluation.",
        "Encourage unassisted ambulation during acute instability."
      ],
      "monitoring": [
        "Oxygen saturation, respiratory effort, blood pressure, and heart rhythm",
        "Bleeding and clinical response after anticoagulation"
      ]
    },
    "correctAnswers": {
      "condition": "Acute pulmonary embolism with hypoxemia and possible right-heart strain",
      "actions": [
        "Provide oxygen and escalate respiratory/hemodynamic instability.",
        "Prepare prescribed anticoagulation or reperfusion therapy after urgent evaluation."
      ],
      "monitoring": [
        "Oxygen saturation, respiratory effort, blood pressure, and heart rhythm",
        "Bleeding and clinical response after anticoagulation"
      ]
    }
  },
  {
    "id": "QR-100125",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-011",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Acute Pulmonary Embolism With Hemodynamic Instability",
    "caseStudyContext": {
      "id": "QR-CS-011",
      "title": "Acute Pulmonary Embolism With Hemodynamic Instability",
      "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Activate emergency response for worsening hypoxemia or hypotension.",
      "Maintain oxygen and continuous cardiopulmonary monitoring.",
      "Prepare ordered diagnostic studies and prescribed treatment.",
      "Massage the affected leg vigorously."
    ],
    "correctAnswer": [
      "Activate emergency response for worsening hypoxemia or hypotension.",
      "Maintain oxygen and continuous cardiopulmonary monitoring.",
      "Prepare ordered diagnostic studies and prescribed treatment."
    ],
    "rationale": "This item assesses take action in the context of Pulmonary embolism.",
    "optionRationales": {
      "Activate emergency response for worsening hypoxemia or hypotension.": "Correct. This supports immediate safety and treatment.",
      "Maintain oxygen and continuous cardiopulmonary monitoring.": "Correct. This supports immediate safety and treatment.",
      "Prepare ordered diagnostic studies and prescribed treatment.": "Correct. This supports immediate safety and treatment.",
      "Massage the affected leg vigorously.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Venous Thromboembolism: Diagnosis and Treatment",
        "publisher": "CDC",
        "url": "https://www.cdc.gov/blood-clots/hcp/diagnosis-treatment/index.html",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100125",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago.",
    "providerOrders": "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy.",
    "nursingNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "nursesNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "vitalSigns": "After treatment: BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support.",
    "diagnosticResults": "BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support. Clinical interpretation: Improving perfusion and oxygenation; continue monitoring.",
    "stimulus": {
      "caseGroupId": "QR-CS-011",
      "patientProfile": {
        "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
      },
      "tabs": {
        "history": [
          "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago."
        ],
        "nursesNotes": [
          "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
        ],
        "providerOrders": [
          "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy."
        ],
        "vitalSigns": [
          "After treatment: BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support."
        ],
        "labResults": [
          "BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support. Clinical interpretation: Improving perfusion and oxygenation; continue monitoring."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Pulmonary embolism.",
      "options": {
        "Activate emergency response for worsening hypoxemia or hypotension.": "Correct. This supports immediate safety and treatment.",
        "Maintain oxygen and continuous cardiopulmonary monitoring.": "Correct. This supports immediate safety and treatment.",
        "Prepare ordered diagnostic studies and prescribed treatment.": "Correct. This supports immediate safety and treatment.",
        "Massage the affected leg vigorously.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Activate emergency response for worsening hypoxemia or hypotension.",
        "Maintain oxygen and continuous cardiopulmonary monitoring.",
        "Prepare ordered diagnostic studies and prescribed treatment.",
        "Massage the affected leg vigorously."
      ],
      "answerKey": [
        "Activate emergency response for worsening hypoxemia or hypotension.",
        "Maintain oxygen and continuous cardiopulmonary monitoring.",
        "Prepare ordered diagnostic studies and prescribed treatment."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100126",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-011",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Acute Pulmonary Embolism With Hemodynamic Instability",
    "caseStudyContext": {
      "id": "QR-CS-011",
      "title": "Acute Pulmonary Embolism With Hemodynamic Instability",
      "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Acute cardiopulmonary emergency; escalate immediately.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Acute cardiopulmonary emergency; escalate immediately.",
    "rationale": "Acute pulmonary embolism after major orthopedic surgery impairs pulmonary perfusion. Hypoxemia and tachycardia are early warning cues; falling blood pressure and persistent tachycardia suggest right-ventricular strain and obstructive shock. Improved hemodynamics and oxygenation after treatment indicate response, but continued monitoring is essential.",
    "optionRationales": {
      "Acute cardiopulmonary emergency; escalate immediately.": "Correct. Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Possible hemodynamic compromise; urgent stabilization and reperfusion evaluation.": "Correct. BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen. This interpretation matches the clinical progression.",
      "Improving perfusion and oxygenation; continue monitoring.": "Correct. BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Venous Thromboembolism: Diagnosis and Treatment",
        "publisher": "CDC",
        "url": "https://www.cdc.gov/blood-clots/hcp/diagnosis-treatment/index.html",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100126",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago.",
    "providerOrders": "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy.",
    "nursingNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "nursesNotes": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain.",
    "vitalSigns": "After treatment: BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support.",
    "diagnosticResults": "BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support. Clinical interpretation: Improving perfusion and oxygenation; continue monitoring.",
    "stimulus": {
      "caseGroupId": "QR-CS-011",
      "patientProfile": {
        "summary": "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
      },
      "tabs": {
        "history": [
          "Recent major orthopedic surgery and limited mobility; sudden breathlessness and sharp chest pain began 20 minutes ago."
        ],
        "nursesNotes": [
          "58-year-old client, postoperative day 4 after total knee arthroplasty, develops sudden dyspnea and pleuritic chest pain."
        ],
        "providerOrders": [
          "Activate rapid response; continuous cardiac and oxygen monitoring; urgent diagnostic evaluation; oxygen and prescribed anticoagulation or reperfusion therapy."
        ],
        "vitalSigns": [
          "After treatment: BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support."
        ],
        "labResults": [
          "BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support. Clinical interpretation: Improving perfusion and oxygenation; continue monitoring."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Pulmonary embolism.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Acute cardiopulmonary emergency; escalate immediately.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Acute cardiopulmonary emergency; escalate immediately.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Acute Pulmonary Embolism With Hemodynamic Instability — clinical progression",
      "stages": [
        {
          "time": "08:10",
          "situation": "Sudden dyspnea, pleuritic pain, HR 128/min, SpO₂ 86% room air.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Acute cardiopulmonary emergency; escalate immediately.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Acute cardiopulmonary emergency; escalate immediately."
        },
        {
          "time": "08:25",
          "situation": "BP falls to 84/50 mmHg, HR 136/min, client restless despite oxygen.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Possible hemodynamic compromise; urgent stabilization and reperfusion evaluation.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Possible hemodynamic compromise; urgent stabilization and reperfusion evaluation."
        },
        {
          "time": "After treatment",
          "situation": "BP 108/68 mmHg, HR 98/min, SpO₂ 95% with lower oxygen support.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Improving perfusion and oxygenation; continue monitoring.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Improving perfusion and oxygenation; continue monitoring."
        }
      ]
    }
  },
  {
    "id": "QR-100127",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-012",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
    "caseStudyContext": {
      "id": "QR-CS-012",
      "title": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
      "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sickle cell disease and acute chest syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "fever",
      "infiltrate",
      "sat"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "fever": "This cue contributes to recognition of the immediate clinical threat.",
      "infiltrate": "This cue contributes to recognition of the immediate clinical threat.",
      "sat": "This cue contributes to recognition of the immediate clinical threat.",
      "pain": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Sickle Cell Disease",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/sickle-cell-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100127",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission.",
    "providerOrders": "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation.",
    "nursingNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia. New fever. New pulmonary infiltrate. SpO₂ 89%. Baseline leg pain unchanged.",
    "nursesNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia. New fever. New pulmonary infiltrate. SpO₂ 89%. Baseline leg pain unchanged.",
    "vitalSigns": "10:00: Pain crisis; SpO₂ 97% room air; no cough or fever.",
    "diagnosticResults": "Pain crisis; SpO₂ 97% room air; no cough or fever. Clinical interpretation: Continue pain management and surveillance.",
    "stimulus": {
      "caseGroupId": "QR-CS-012",
      "patientProfile": {
        "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
      },
      "tabs": {
        "history": [
          "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission."
        ],
        "nursesNotes": [
          "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
        ],
        "providerOrders": [
          "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation."
        ],
        "vitalSigns": [
          "10:00: Pain crisis; SpO₂ 97% room air; no cough or fever."
        ],
        "labResults": [
          "Pain crisis; SpO₂ 97% room air; no cough or fever. Clinical interpretation: Continue pain management and surveillance."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "fever": "This cue contributes to recognition of the immediate clinical threat.",
        "infiltrate": "This cue contributes to recognition of the immediate clinical threat.",
        "sat": "This cue contributes to recognition of the immediate clinical threat.",
        "pain": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "fever",
        "infiltrate",
        "sat"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia. New fever. New pulmonary infiltrate. SpO₂ 89%. Baseline leg pain unchanged.",
    "highlightSegments": [
      {
        "id": "fever",
        "text": "New fever"
      },
      {
        "id": "infiltrate",
        "text": "New pulmonary infiltrate"
      },
      {
        "id": "sat",
        "text": "SpO₂ 89%"
      },
      {
        "id": "pain",
        "text": "Baseline leg pain unchanged"
      }
    ],
    "correctHighlights": [
      "fever",
      "infiltrate",
      "sat"
    ]
  },
  {
    "id": "QR-100128",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-012",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
    "caseStudyContext": {
      "id": "QR-CS-012",
      "title": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
      "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sickle cell disease and acute chest syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "fever": "Possible infection or acute chest syndrome",
      "infiltrate": "Supports acute chest syndrome",
      "sat": "Hypoxemia requiring intervention",
      "pain": "Not sufficient alone to diagnose acute chest syndrome"
    },
    "rationale": "This item assesses analyze cues in the context of Sickle cell disease and acute chest syndrome.",
    "optionRationales": {
      "fever": "Possible infection or acute chest syndrome",
      "infiltrate": "Supports acute chest syndrome",
      "sat": "Hypoxemia requiring intervention",
      "pain": "Not sufficient alone to diagnose acute chest syndrome"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Sickle Cell Disease",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/sickle-cell-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100128",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission.",
    "providerOrders": "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation.",
    "nursingNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "nursesNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "vitalSigns": "10:00: Pain crisis; SpO₂ 97% room air; no cough or fever.",
    "diagnosticResults": "Pain crisis; SpO₂ 97% room air; no cough or fever. Clinical interpretation: Continue pain management and surveillance.",
    "stimulus": {
      "caseGroupId": "QR-CS-012",
      "patientProfile": {
        "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
      },
      "tabs": {
        "history": [
          "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission."
        ],
        "nursesNotes": [
          "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
        ],
        "providerOrders": [
          "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation."
        ],
        "vitalSigns": [
          "10:00: Pain crisis; SpO₂ 97% room air; no cough or fever."
        ],
        "labResults": [
          "Pain crisis; SpO₂ 97% room air; no cough or fever. Clinical interpretation: Continue pain management and surveillance."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Sickle cell disease and acute chest syndrome.",
      "options": {
        "fever": "Possible infection or acute chest syndrome",
        "infiltrate": "Supports acute chest syndrome",
        "sat": "Hypoxemia requiring intervention",
        "pain": "Not sufficient alone to diagnose acute chest syndrome"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "fever": [
          "Possible infection or acute chest syndrome",
          "Supports acute chest syndrome",
          "Hypoxemia requiring intervention",
          "Not sufficient alone to diagnose acute chest syndrome"
        ],
        "infiltrate": [
          "Possible infection or acute chest syndrome",
          "Supports acute chest syndrome",
          "Hypoxemia requiring intervention",
          "Not sufficient alone to diagnose acute chest syndrome"
        ],
        "sat": [
          "Possible infection or acute chest syndrome",
          "Supports acute chest syndrome",
          "Hypoxemia requiring intervention",
          "Not sufficient alone to diagnose acute chest syndrome"
        ],
        "pain": [
          "Possible infection or acute chest syndrome",
          "Supports acute chest syndrome",
          "Hypoxemia requiring intervention",
          "Not sufficient alone to diagnose acute chest syndrome"
        ]
      },
      "answerKey": {
        "fever": "Possible infection or acute chest syndrome",
        "infiltrate": "Supports acute chest syndrome",
        "sat": "Hypoxemia requiring intervention",
        "pain": "Not sufficient alone to diagnose acute chest syndrome"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "fever",
        "text": "New fever"
      },
      {
        "id": "infiltrate",
        "text": "New pulmonary infiltrate"
      },
      {
        "id": "sat",
        "text": "SpO₂ 89%"
      },
      {
        "id": "pain",
        "text": "Baseline leg pain unchanged"
      }
    ],
    "columns": [
      "Possible infection or acute chest syndrome",
      "Supports acute chest syndrome",
      "Hypoxemia requiring intervention",
      "Not sufficient alone to diagnose acute chest syndrome"
    ],
    "correctAnswers": {
      "fever": "Possible infection or acute chest syndrome",
      "infiltrate": "Supports acute chest syndrome",
      "sat": "Hypoxemia requiring intervention",
      "pain": "Not sufficient alone to diagnose acute chest syndrome"
    }
  },
  {
    "id": "QR-100129",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-012",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
    "caseStudyContext": {
      "id": "QR-CS-012",
      "title": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
      "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sickle cell disease and acute chest syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Recognize acute chest syndrome and notify the provider urgently.",
      "Assess oxygenation and respiratory effort.",
      "Prepare prescribed oxygen, antimicrobial therapy, and escalation.",
      "Withhold all analgesia.",
      "Encourage vigorous exercise."
    ],
    "correctAnswer": [
      "Recognize acute chest syndrome and notify the provider urgently.",
      "Assess oxygenation and respiratory effort.",
      "Prepare prescribed oxygen, antimicrobial therapy, and escalation."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Sickle cell disease and acute chest syndrome.",
    "optionRationales": {
      "Recognize acute chest syndrome and notify the provider urgently.": "Correct priority for the current clinical threat.",
      "Assess oxygenation and respiratory effort.": "Correct priority for the current clinical threat.",
      "Prepare prescribed oxygen, antimicrobial therapy, and escalation.": "Correct priority for the current clinical threat.",
      "Withhold all analgesia.": "Not the priority; this may delay or compromise care.",
      "Encourage vigorous exercise.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Sickle Cell Disease",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/sickle-cell-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100129",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission.",
    "providerOrders": "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation.",
    "nursingNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "nursesNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "vitalSigns": "14:00: Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate.",
    "diagnosticResults": "Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate. Clinical interpretation: Acute chest syndrome; urgent treatment and respiratory monitoring.",
    "stimulus": {
      "caseGroupId": "QR-CS-012",
      "patientProfile": {
        "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
      },
      "tabs": {
        "history": [
          "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission."
        ],
        "nursesNotes": [
          "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
        ],
        "providerOrders": [
          "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation."
        ],
        "vitalSigns": [
          "14:00: Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate."
        ],
        "labResults": [
          "Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate. Clinical interpretation: Acute chest syndrome; urgent treatment and respiratory monitoring."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Sickle cell disease and acute chest syndrome.",
      "options": {
        "Recognize acute chest syndrome and notify the provider urgently.": "Correct priority for the current clinical threat.",
        "Assess oxygenation and respiratory effort.": "Correct priority for the current clinical threat.",
        "Prepare prescribed oxygen, antimicrobial therapy, and escalation.": "Correct priority for the current clinical threat.",
        "Withhold all analgesia.": "Not the priority; this may delay or compromise care.",
        "Encourage vigorous exercise.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Recognize acute chest syndrome and notify the provider urgently.",
        "Assess oxygenation and respiratory effort.",
        "Prepare prescribed oxygen, antimicrobial therapy, and escalation.",
        "Withhold all analgesia.",
        "Encourage vigorous exercise."
      ],
      "answerKey": [
        "Recognize acute chest syndrome and notify the provider urgently.",
        "Assess oxygenation and respiratory effort.",
        "Prepare prescribed oxygen, antimicrobial therapy, and escalation."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100130",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-012",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
    "caseStudyContext": {
      "id": "QR-CS-012",
      "title": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
      "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sickle cell disease and acute chest syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Acute chest syndrome in a client with sickle cell disease",
      "actions": [
        "Support oxygenation and escalate respiratory deterioration.",
        "Administer prescribed analgesia and treatment for suspected infection."
      ],
      "monitoring": [
        "Oxygen saturation, respiratory effort, and chest findings",
        "Temperature, hemoglobin, and response to treatment"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Sickle cell disease and acute chest syndrome.",
    "optionRationales": {
      "condition": "Acute chest syndrome in a client with sickle cell disease",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Sickle Cell Disease",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/sickle-cell-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100130",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission.",
    "providerOrders": "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation.",
    "nursingNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "nursesNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "vitalSigns": "14:00: Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate.",
    "diagnosticResults": "Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate. Clinical interpretation: Acute chest syndrome; urgent treatment and respiratory monitoring.",
    "stimulus": {
      "caseGroupId": "QR-CS-012",
      "patientProfile": {
        "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
      },
      "tabs": {
        "history": [
          "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission."
        ],
        "nursesNotes": [
          "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
        ],
        "providerOrders": [
          "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation."
        ],
        "vitalSigns": [
          "14:00: Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate."
        ],
        "labResults": [
          "Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate. Clinical interpretation: Acute chest syndrome; urgent treatment and respiratory monitoring."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Sickle cell disease and acute chest syndrome.",
      "options": {
        "condition": "Acute chest syndrome in a client with sickle cell disease",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute chest syndrome in a client with sickle cell disease",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Support oxygenation and escalate respiratory deterioration.",
          "Administer prescribed analgesia and treatment for suspected infection.",
          "Restrict all fluids without an order."
        ],
        "monitoring": [
          "Oxygen saturation, respiratory effort, and chest findings",
          "Temperature, hemoglobin, and response to treatment"
        ]
      },
      "answerKey": {
        "condition": "Acute chest syndrome in a client with sickle cell disease",
        "actions": [
          "Support oxygenation and escalate respiratory deterioration.",
          "Administer prescribed analgesia and treatment for suspected infection."
        ],
        "monitoring": [
          "Oxygen saturation, respiratory effort, and chest findings",
          "Temperature, hemoglobin, and response to treatment"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Acute chest syndrome in a client with sickle cell disease",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Support oxygenation and escalate respiratory deterioration.",
        "Administer prescribed analgesia and treatment for suspected infection.",
        "Restrict all fluids without an order."
      ],
      "monitoring": [
        "Oxygen saturation, respiratory effort, and chest findings",
        "Temperature, hemoglobin, and response to treatment"
      ]
    },
    "correctAnswers": {
      "condition": "Acute chest syndrome in a client with sickle cell disease",
      "actions": [
        "Support oxygenation and escalate respiratory deterioration.",
        "Administer prescribed analgesia and treatment for suspected infection."
      ],
      "monitoring": [
        "Oxygen saturation, respiratory effort, and chest findings",
        "Temperature, hemoglobin, and response to treatment"
      ]
    }
  },
  {
    "id": "QR-100131",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-012",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
    "caseStudyContext": {
      "id": "QR-CS-012",
      "title": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
      "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sickle cell disease and acute chest syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Apply oxygen as prescribed and reassess saturation.",
      "Notify the team and prepare ordered chest evaluation and treatment.",
      "Provide prescribed pain management while monitoring respiration.",
      "Delay escalation until analgesia wears off."
    ],
    "correctAnswer": [
      "Apply oxygen as prescribed and reassess saturation.",
      "Notify the team and prepare ordered chest evaluation and treatment.",
      "Provide prescribed pain management while monitoring respiration."
    ],
    "rationale": "This item assesses take action in the context of Sickle cell disease and acute chest syndrome.",
    "optionRationales": {
      "Apply oxygen as prescribed and reassess saturation.": "Correct. This supports immediate safety and treatment.",
      "Notify the team and prepare ordered chest evaluation and treatment.": "Correct. This supports immediate safety and treatment.",
      "Provide prescribed pain management while monitoring respiration.": "Correct. This supports immediate safety and treatment.",
      "Delay escalation until analgesia wears off.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Sickle Cell Disease",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/sickle-cell-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100131",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission.",
    "providerOrders": "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation.",
    "nursingNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "nursesNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "vitalSigns": "After treatment: Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved.",
    "diagnosticResults": "Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved. Clinical interpretation: Clinical improvement; continue treatment and monitor.",
    "stimulus": {
      "caseGroupId": "QR-CS-012",
      "patientProfile": {
        "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
      },
      "tabs": {
        "history": [
          "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission."
        ],
        "nursesNotes": [
          "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
        ],
        "providerOrders": [
          "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation."
        ],
        "vitalSigns": [
          "After treatment: Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved."
        ],
        "labResults": [
          "Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved. Clinical interpretation: Clinical improvement; continue treatment and monitor."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Sickle cell disease and acute chest syndrome.",
      "options": {
        "Apply oxygen as prescribed and reassess saturation.": "Correct. This supports immediate safety and treatment.",
        "Notify the team and prepare ordered chest evaluation and treatment.": "Correct. This supports immediate safety and treatment.",
        "Provide prescribed pain management while monitoring respiration.": "Correct. This supports immediate safety and treatment.",
        "Delay escalation until analgesia wears off.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Apply oxygen as prescribed and reassess saturation.",
        "Notify the team and prepare ordered chest evaluation and treatment.",
        "Provide prescribed pain management while monitoring respiration.",
        "Delay escalation until analgesia wears off."
      ],
      "answerKey": [
        "Apply oxygen as prescribed and reassess saturation.",
        "Notify the team and prepare ordered chest evaluation and treatment.",
        "Provide prescribed pain management while monitoring respiration."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100132",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-012",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
    "caseStudyContext": {
      "id": "QR-CS-012",
      "title": "Sickle Cell Crisis Complicated by Acute Chest Syndrome",
      "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Sickle cell disease and acute chest syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Continue pain management and surveillance.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Continue pain management and surveillance.",
    "rationale": "New fever, cough, chest pain, hypoxemia, and a pulmonary infiltrate in sickle cell disease indicate acute chest syndrome, a life-threatening pulmonary complication. Improved oxygenation after treatment indicates response, not resolution of the need for monitoring.",
    "optionRationales": {
      "Continue pain management and surveillance.": "Correct. Pain crisis; SpO₂ 97% room air; no cough or fever. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Acute chest syndrome; urgent treatment and respiratory monitoring.": "Correct. Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate. This interpretation matches the clinical progression.",
      "Clinical improvement; continue treatment and monitor.": "Correct. Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Sickle Cell Disease",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/sickle-cell-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100132",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission.",
    "providerOrders": "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation.",
    "nursingNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "nursesNotes": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia.",
    "vitalSigns": "After treatment: Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved.",
    "diagnosticResults": "Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved. Clinical interpretation: Clinical improvement; continue treatment and monitor.",
    "stimulus": {
      "caseGroupId": "QR-CS-012",
      "patientProfile": {
        "summary": "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
      },
      "tabs": {
        "history": [
          "Known HbSS disease; vaso-occlusive episodes; pain 9/10; new cough and fever during admission."
        ],
        "nursesNotes": [
          "24-year-old with HbSS admitted for severe back and leg pain, later develops fever, cough, chest pain, and hypoxemia."
        ],
        "providerOrders": [
          "Assess pain and respiratory status; prescribed analgesia and fluids; chest imaging and cultures as ordered; oxygen for hypoxemia; hematology consultation."
        ],
        "vitalSigns": [
          "After treatment: Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved."
        ],
        "labResults": [
          "Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved. Clinical interpretation: Clinical improvement; continue treatment and monitor."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Sickle cell disease and acute chest syndrome.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Continue pain management and surveillance.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Continue pain management and surveillance.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Sickle Cell Crisis Complicated by Acute Chest Syndrome — clinical progression",
      "stages": [
        {
          "time": "10:00",
          "situation": "Pain crisis; SpO₂ 97% room air; no cough or fever.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Continue pain management and surveillance.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Continue pain management and surveillance."
        },
        {
          "time": "14:00",
          "situation": "Fever 38.5°C, cough, chest pain, SpO₂ 89%, new infiltrate.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Acute chest syndrome; urgent treatment and respiratory monitoring.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Acute chest syndrome; urgent treatment and respiratory monitoring."
        },
        {
          "time": "After treatment",
          "situation": "Afebrile, SpO₂ 95% on lower oxygen support, work of breathing improved.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Clinical improvement; continue treatment and monitor.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Clinical improvement; continue treatment and monitor."
        }
      ]
    }
  },
  {
    "id": "QR-100133",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-013",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
    "caseStudyContext": {
      "id": "QR-CS-013",
      "title": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
      "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and acute variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "bp",
      "hr",
      "blood"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "bp": "This cue contributes to recognition of the immediate clinical threat.",
      "hr": "This cue contributes to recognition of the immediate clinical threat.",
      "blood": "This cue contributes to recognition of the immediate clinical threat.",
      "jaundice": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Cirrhosis",
        "publisher": "NIDDK",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100133",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning.",
    "providerOrders": "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring.",
    "nursingNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension. BP 82/48 mmHg. HR 132/min. Active hematemesis. Chronic jaundice unchanged.",
    "nursesNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension. BP 82/48 mmHg. HR 132/min. Active hematemesis. Chronic jaundice unchanged.",
    "vitalSigns": "07:30: Melena and dizziness; BP 98/60 mmHg; HR 112/min.",
    "diagnosticResults": "Melena and dizziness; BP 98/60 mmHg; HR 112/min. Clinical interpretation: Suspect active GI blood loss; urgent evaluation.",
    "stimulus": {
      "caseGroupId": "QR-CS-013",
      "patientProfile": {
        "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning."
        ],
        "nursesNotes": [
          "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring."
        ],
        "vitalSigns": [
          "07:30: Melena and dizziness; BP 98/60 mmHg; HR 112/min."
        ],
        "labResults": [
          "Melena and dizziness; BP 98/60 mmHg; HR 112/min. Clinical interpretation: Suspect active GI blood loss; urgent evaluation."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "bp": "This cue contributes to recognition of the immediate clinical threat.",
        "hr": "This cue contributes to recognition of the immediate clinical threat.",
        "blood": "This cue contributes to recognition of the immediate clinical threat.",
        "jaundice": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "bp",
        "hr",
        "blood"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension. BP 82/48 mmHg. HR 132/min. Active hematemesis. Chronic jaundice unchanged.",
    "highlightSegments": [
      {
        "id": "bp",
        "text": "BP 82/48 mmHg"
      },
      {
        "id": "hr",
        "text": "HR 132/min"
      },
      {
        "id": "blood",
        "text": "Active hematemesis"
      },
      {
        "id": "jaundice",
        "text": "Chronic jaundice unchanged"
      }
    ],
    "correctHighlights": [
      "bp",
      "hr",
      "blood"
    ]
  },
  {
    "id": "QR-100134",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-013",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
    "caseStudyContext": {
      "id": "QR-CS-013",
      "title": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
      "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and acute variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "bp": "Hemodynamic instability",
      "hr": "Compensatory tachycardia",
      "blood": "Ongoing upper GI hemorrhage",
      "jaundice": "Not an acute bleeding severity marker"
    },
    "rationale": "This item assesses analyze cues in the context of Cirrhosis and acute variceal bleeding.",
    "optionRationales": {
      "bp": "Hemodynamic instability",
      "hr": "Compensatory tachycardia",
      "blood": "Ongoing upper GI hemorrhage",
      "jaundice": "Not an acute bleeding severity marker"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Cirrhosis",
        "publisher": "NIDDK",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100134",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning.",
    "providerOrders": "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring.",
    "nursingNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "nursesNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "vitalSigns": "07:30: Melena and dizziness; BP 98/60 mmHg; HR 112/min.",
    "diagnosticResults": "Melena and dizziness; BP 98/60 mmHg; HR 112/min. Clinical interpretation: Suspect active GI blood loss; urgent evaluation.",
    "stimulus": {
      "caseGroupId": "QR-CS-013",
      "patientProfile": {
        "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning."
        ],
        "nursesNotes": [
          "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring."
        ],
        "vitalSigns": [
          "07:30: Melena and dizziness; BP 98/60 mmHg; HR 112/min."
        ],
        "labResults": [
          "Melena and dizziness; BP 98/60 mmHg; HR 112/min. Clinical interpretation: Suspect active GI blood loss; urgent evaluation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Cirrhosis and acute variceal bleeding.",
      "options": {
        "bp": "Hemodynamic instability",
        "hr": "Compensatory tachycardia",
        "blood": "Ongoing upper GI hemorrhage",
        "jaundice": "Not an acute bleeding severity marker"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "bp": [
          "Hemodynamic instability",
          "Compensatory tachycardia",
          "Ongoing upper GI hemorrhage",
          "Not an acute bleeding severity marker"
        ],
        "hr": [
          "Hemodynamic instability",
          "Compensatory tachycardia",
          "Ongoing upper GI hemorrhage",
          "Not an acute bleeding severity marker"
        ],
        "blood": [
          "Hemodynamic instability",
          "Compensatory tachycardia",
          "Ongoing upper GI hemorrhage",
          "Not an acute bleeding severity marker"
        ],
        "jaundice": [
          "Hemodynamic instability",
          "Compensatory tachycardia",
          "Ongoing upper GI hemorrhage",
          "Not an acute bleeding severity marker"
        ]
      },
      "answerKey": {
        "bp": "Hemodynamic instability",
        "hr": "Compensatory tachycardia",
        "blood": "Ongoing upper GI hemorrhage",
        "jaundice": "Not an acute bleeding severity marker"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "bp",
        "text": "BP 82/48 mmHg"
      },
      {
        "id": "hr",
        "text": "HR 132/min"
      },
      {
        "id": "blood",
        "text": "Active hematemesis"
      },
      {
        "id": "jaundice",
        "text": "Chronic jaundice unchanged"
      }
    ],
    "columns": [
      "Hemodynamic instability",
      "Compensatory tachycardia",
      "Ongoing upper GI hemorrhage",
      "Not an acute bleeding severity marker"
    ],
    "correctAnswers": {
      "bp": "Hemodynamic instability",
      "hr": "Compensatory tachycardia",
      "blood": "Ongoing upper GI hemorrhage",
      "jaundice": "Not an acute bleeding severity marker"
    }
  },
  {
    "id": "QR-100135",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-013",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
    "caseStudyContext": {
      "id": "QR-CS-013",
      "title": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
      "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and acute variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Stabilize airway and circulation and activate emergency response.",
      "Establish large-bore IV access and prepare resuscitation.",
      "Prepare urgent endoscopic management.",
      "Give oral fluids during active hematemesis.",
      "Wait for hemoglobin before escalation."
    ],
    "correctAnswer": [
      "Stabilize airway and circulation and activate emergency response.",
      "Establish large-bore IV access and prepare resuscitation.",
      "Prepare urgent endoscopic management."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Cirrhosis and acute variceal bleeding.",
    "optionRationales": {
      "Stabilize airway and circulation and activate emergency response.": "Correct priority for the current clinical threat.",
      "Establish large-bore IV access and prepare resuscitation.": "Correct priority for the current clinical threat.",
      "Prepare urgent endoscopic management.": "Correct priority for the current clinical threat.",
      "Give oral fluids during active hematemesis.": "Not the priority; this may delay or compromise care.",
      "Wait for hemoglobin before escalation.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Cirrhosis",
        "publisher": "NIDDK",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100135",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning.",
    "providerOrders": "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring.",
    "nursingNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "nursesNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "vitalSigns": "08:00: Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin.",
    "diagnosticResults": "Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin. Clinical interpretation: Hemorrhagic shock; activate emergency resuscitation.",
    "stimulus": {
      "caseGroupId": "QR-CS-013",
      "patientProfile": {
        "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning."
        ],
        "nursesNotes": [
          "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring."
        ],
        "vitalSigns": [
          "08:00: Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin."
        ],
        "labResults": [
          "Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin. Clinical interpretation: Hemorrhagic shock; activate emergency resuscitation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Cirrhosis and acute variceal bleeding.",
      "options": {
        "Stabilize airway and circulation and activate emergency response.": "Correct priority for the current clinical threat.",
        "Establish large-bore IV access and prepare resuscitation.": "Correct priority for the current clinical threat.",
        "Prepare urgent endoscopic management.": "Correct priority for the current clinical threat.",
        "Give oral fluids during active hematemesis.": "Not the priority; this may delay or compromise care.",
        "Wait for hemoglobin before escalation.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Stabilize airway and circulation and activate emergency response.",
        "Establish large-bore IV access and prepare resuscitation.",
        "Prepare urgent endoscopic management.",
        "Give oral fluids during active hematemesis.",
        "Wait for hemoglobin before escalation."
      ],
      "answerKey": [
        "Stabilize airway and circulation and activate emergency response.",
        "Establish large-bore IV access and prepare resuscitation.",
        "Prepare urgent endoscopic management."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100136",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-013",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
    "caseStudyContext": {
      "id": "QR-CS-013",
      "title": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
      "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and acute variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Acute upper gastrointestinal hemorrhage, likely variceal, with hypovolemic shock",
      "actions": [
        "Support airway and circulation; prepare blood products as prescribed.",
        "Prepare urgent endoscopy and prescribed vasoactive/antibiotic therapy."
      ],
      "monitoring": [
        "Blood pressure, heart rate, mental status, and ongoing blood loss",
        "Hemoglobin, coagulation, renal function, and response to resuscitation"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Cirrhosis and acute variceal bleeding.",
    "optionRationales": {
      "condition": "Acute upper gastrointestinal hemorrhage, likely variceal, with hypovolemic shock",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Cirrhosis",
        "publisher": "NIDDK",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100136",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning.",
    "providerOrders": "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring.",
    "nursingNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "nursesNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "vitalSigns": "08:00: Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin.",
    "diagnosticResults": "Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin. Clinical interpretation: Hemorrhagic shock; activate emergency resuscitation.",
    "stimulus": {
      "caseGroupId": "QR-CS-013",
      "patientProfile": {
        "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning."
        ],
        "nursesNotes": [
          "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring."
        ],
        "vitalSigns": [
          "08:00: Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin."
        ],
        "labResults": [
          "Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin. Clinical interpretation: Hemorrhagic shock; activate emergency resuscitation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Cirrhosis and acute variceal bleeding.",
      "options": {
        "condition": "Acute upper gastrointestinal hemorrhage, likely variceal, with hypovolemic shock",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute upper gastrointestinal hemorrhage, likely variceal, with hypovolemic shock",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Support airway and circulation; prepare blood products as prescribed.",
          "Prepare urgent endoscopy and prescribed vasoactive/antibiotic therapy.",
          "Give oral fluids during active hematemesis."
        ],
        "monitoring": [
          "Blood pressure, heart rate, mental status, and ongoing blood loss",
          "Hemoglobin, coagulation, renal function, and response to resuscitation"
        ]
      },
      "answerKey": {
        "condition": "Acute upper gastrointestinal hemorrhage, likely variceal, with hypovolemic shock",
        "actions": [
          "Support airway and circulation; prepare blood products as prescribed.",
          "Prepare urgent endoscopy and prescribed vasoactive/antibiotic therapy."
        ],
        "monitoring": [
          "Blood pressure, heart rate, mental status, and ongoing blood loss",
          "Hemoglobin, coagulation, renal function, and response to resuscitation"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Acute upper gastrointestinal hemorrhage, likely variceal, with hypovolemic shock",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Support airway and circulation; prepare blood products as prescribed.",
        "Prepare urgent endoscopy and prescribed vasoactive/antibiotic therapy.",
        "Give oral fluids during active hematemesis."
      ],
      "monitoring": [
        "Blood pressure, heart rate, mental status, and ongoing blood loss",
        "Hemoglobin, coagulation, renal function, and response to resuscitation"
      ]
    },
    "correctAnswers": {
      "condition": "Acute upper gastrointestinal hemorrhage, likely variceal, with hypovolemic shock",
      "actions": [
        "Support airway and circulation; prepare blood products as prescribed.",
        "Prepare urgent endoscopy and prescribed vasoactive/antibiotic therapy."
      ],
      "monitoring": [
        "Blood pressure, heart rate, mental status, and ongoing blood loss",
        "Hemoglobin, coagulation, renal function, and response to resuscitation"
      ]
    }
  },
  {
    "id": "QR-100137",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-013",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
    "caseStudyContext": {
      "id": "QR-CS-013",
      "title": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
      "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and acute variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Keep NPO and prepare urgent endoscopic intervention.",
      "Maintain IV access and administer prescribed resuscitation.",
      "Monitor for recurrent hematemesis and worsening shock.",
      "Encourage independent ambulation."
    ],
    "correctAnswer": [
      "Keep NPO and prepare urgent endoscopic intervention.",
      "Maintain IV access and administer prescribed resuscitation.",
      "Monitor for recurrent hematemesis and worsening shock."
    ],
    "rationale": "This item assesses take action in the context of Cirrhosis and acute variceal bleeding.",
    "optionRationales": {
      "Keep NPO and prepare urgent endoscopic intervention.": "Correct. This supports immediate safety and treatment.",
      "Maintain IV access and administer prescribed resuscitation.": "Correct. This supports immediate safety and treatment.",
      "Monitor for recurrent hematemesis and worsening shock.": "Correct. This supports immediate safety and treatment.",
      "Encourage independent ambulation.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Cirrhosis",
        "publisher": "NIDDK",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100137",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning.",
    "providerOrders": "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring.",
    "nursingNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "nursesNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "vitalSigns": "After intervention: No further hematemesis; BP 108/66 mmHg; HR 94/min.",
    "diagnosticResults": "No further hematemesis; BP 108/66 mmHg; HR 94/min. Clinical interpretation: Improving hemodynamics; monitor for rebleeding.",
    "stimulus": {
      "caseGroupId": "QR-CS-013",
      "patientProfile": {
        "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning."
        ],
        "nursesNotes": [
          "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring."
        ],
        "vitalSigns": [
          "After intervention: No further hematemesis; BP 108/66 mmHg; HR 94/min."
        ],
        "labResults": [
          "No further hematemesis; BP 108/66 mmHg; HR 94/min. Clinical interpretation: Improving hemodynamics; monitor for rebleeding."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Cirrhosis and acute variceal bleeding.",
      "options": {
        "Keep NPO and prepare urgent endoscopic intervention.": "Correct. This supports immediate safety and treatment.",
        "Maintain IV access and administer prescribed resuscitation.": "Correct. This supports immediate safety and treatment.",
        "Monitor for recurrent hematemesis and worsening shock.": "Correct. This supports immediate safety and treatment.",
        "Encourage independent ambulation.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Keep NPO and prepare urgent endoscopic intervention.",
        "Maintain IV access and administer prescribed resuscitation.",
        "Monitor for recurrent hematemesis and worsening shock.",
        "Encourage independent ambulation."
      ],
      "answerKey": [
        "Keep NPO and prepare urgent endoscopic intervention.",
        "Maintain IV access and administer prescribed resuscitation.",
        "Monitor for recurrent hematemesis and worsening shock."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100138",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-013",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
    "caseStudyContext": {
      "id": "QR-CS-013",
      "title": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis",
      "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Cirrhosis and acute variceal bleeding",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Suspect active GI blood loss; urgent evaluation.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Suspect active GI blood loss; urgent evaluation.",
    "rationale": "Melena and dizziness suggest GI blood loss. Large-volume hematemesis with hypotension and tachycardia indicates hemorrhagic shock, likely from variceal bleeding. Improved hemodynamics after resuscitation are reassuring, but recurrent bleeding and perfusion must be monitored.",
    "optionRationales": {
      "Suspect active GI blood loss; urgent evaluation.": "Correct. Melena and dizziness; BP 98/60 mmHg; HR 112/min. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Hemorrhagic shock; activate emergency resuscitation.": "Correct. Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin. This interpretation matches the clinical progression.",
      "Improving hemodynamics; monitor for rebleeding.": "Correct. No further hematemesis; BP 108/66 mmHg; HR 94/min. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Cirrhosis",
        "publisher": "NIDDK",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100138",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning.",
    "providerOrders": "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring.",
    "nursingNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "nursesNotes": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension.",
    "vitalSigns": "After intervention: No further hematemesis; BP 108/66 mmHg; HR 94/min.",
    "diagnosticResults": "No further hematemesis; BP 108/66 mmHg; HR 94/min. Clinical interpretation: Improving hemodynamics; monitor for rebleeding.",
    "stimulus": {
      "caseGroupId": "QR-CS-013",
      "patientProfile": {
        "summary": "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Cirrhosis and portal hypertension; black stools for 2 days and bright red hematemesis this morning."
        ],
        "nursesNotes": [
          "61-year-old with cirrhosis presents with large-volume hematemesis, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency response; large-bore IV access; blood products and urgent endoscopy; prescribed vasoactive and antibiotic therapy; hemodynamic monitoring."
        ],
        "vitalSigns": [
          "After intervention: No further hematemesis; BP 108/66 mmHg; HR 94/min."
        ],
        "labResults": [
          "No further hematemesis; BP 108/66 mmHg; HR 94/min. Clinical interpretation: Improving hemodynamics; monitor for rebleeding."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Cirrhosis and acute variceal bleeding.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Suspect active GI blood loss; urgent evaluation.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Suspect active GI blood loss; urgent evaluation.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Upper Gastrointestinal Variceal Hemorrhage in Cirrhosis — clinical progression",
      "stages": [
        {
          "time": "07:30",
          "situation": "Melena and dizziness; BP 98/60 mmHg; HR 112/min.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Suspect active GI blood loss; urgent evaluation.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Suspect active GI blood loss; urgent evaluation."
        },
        {
          "time": "08:00",
          "situation": "Large hematemesis; BP 82/48 mmHg; HR 132/min; cool clammy skin.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Hemorrhagic shock; activate emergency resuscitation.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Hemorrhagic shock; activate emergency resuscitation."
        },
        {
          "time": "After intervention",
          "situation": "No further hematemesis; BP 108/66 mmHg; HR 94/min.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Improving hemodynamics; monitor for rebleeding.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Improving hemodynamics; monitor for rebleeding."
        }
      ]
    }
  },
  {
    "id": "QR-100139",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-014",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Thyroid Storm Triggered by Infection",
    "caseStudyContext": {
      "id": "QR-CS-014",
      "title": "Thyroid Storm Triggered by Infection",
      "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Thyroid storm",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "temp",
      "hr",
      "mental"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "temp": "This cue contributes to recognition of the immediate clinical threat.",
      "hr": "This cue contributes to recognition of the immediate clinical threat.",
      "mental": "This cue contributes to recognition of the immediate clinical threat.",
      "tsh": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Thyroid Storm",
        "publisher": "Endotext, NCBI Bookshelf",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK278927/",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100139",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations.",
    "providerOrders": "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment.",
    "nursingNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting. Temperature 40.1°C. HR 156/min with atrial fibrillation. Agitation and confusion. Suppressed TSH.",
    "nursesNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting. Temperature 40.1°C. HR 156/min with atrial fibrillation. Agitation and confusion. Suppressed TSH.",
    "vitalSigns": "11:00: Fever 38.2°C, tremor, HR 118/min, alert.",
    "diagnosticResults": "Fever 38.2°C, tremor, HR 118/min, alert. Clinical interpretation: Assess progression and report suspected thyrotoxicosis.",
    "stimulus": {
      "caseGroupId": "QR-CS-014",
      "patientProfile": {
        "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
      },
      "tabs": {
        "history": [
          "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations."
        ],
        "nursesNotes": [
          "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
        ],
        "providerOrders": [
          "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment."
        ],
        "vitalSigns": [
          "11:00: Fever 38.2°C, tremor, HR 118/min, alert."
        ],
        "labResults": [
          "Fever 38.2°C, tremor, HR 118/min, alert. Clinical interpretation: Assess progression and report suspected thyrotoxicosis."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "temp": "This cue contributes to recognition of the immediate clinical threat.",
        "hr": "This cue contributes to recognition of the immediate clinical threat.",
        "mental": "This cue contributes to recognition of the immediate clinical threat.",
        "tsh": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "temp",
        "hr",
        "mental"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting. Temperature 40.1°C. HR 156/min with atrial fibrillation. Agitation and confusion. Suppressed TSH.",
    "highlightSegments": [
      {
        "id": "temp",
        "text": "Temperature 40.1°C"
      },
      {
        "id": "hr",
        "text": "HR 156/min with atrial fibrillation"
      },
      {
        "id": "mental",
        "text": "Agitation and confusion"
      },
      {
        "id": "tsh",
        "text": "Suppressed TSH"
      }
    ],
    "correctHighlights": [
      "temp",
      "hr",
      "mental"
    ]
  },
  {
    "id": "QR-100140",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-014",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Thyroid Storm Triggered by Infection",
    "caseStudyContext": {
      "id": "QR-CS-014",
      "title": "Thyroid Storm Triggered by Infection",
      "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Thyroid storm",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "temp": "Severe hyperthermia",
      "hr": "Cardiovascular instability",
      "mental": "Acute neurologic dysfunction",
      "tsh": "Supports thyrotoxicosis but does not alone grade severity"
    },
    "rationale": "This item assesses analyze cues in the context of Thyroid storm.",
    "optionRationales": {
      "temp": "Severe hyperthermia",
      "hr": "Cardiovascular instability",
      "mental": "Acute neurologic dysfunction",
      "tsh": "Supports thyrotoxicosis but does not alone grade severity"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Thyroid Storm",
        "publisher": "Endotext, NCBI Bookshelf",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK278927/",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100140",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations.",
    "providerOrders": "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment.",
    "nursingNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "nursesNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "vitalSigns": "11:00: Fever 38.2°C, tremor, HR 118/min, alert.",
    "diagnosticResults": "Fever 38.2°C, tremor, HR 118/min, alert. Clinical interpretation: Assess progression and report suspected thyrotoxicosis.",
    "stimulus": {
      "caseGroupId": "QR-CS-014",
      "patientProfile": {
        "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
      },
      "tabs": {
        "history": [
          "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations."
        ],
        "nursesNotes": [
          "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
        ],
        "providerOrders": [
          "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment."
        ],
        "vitalSigns": [
          "11:00: Fever 38.2°C, tremor, HR 118/min, alert."
        ],
        "labResults": [
          "Fever 38.2°C, tremor, HR 118/min, alert. Clinical interpretation: Assess progression and report suspected thyrotoxicosis."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Thyroid storm.",
      "options": {
        "temp": "Severe hyperthermia",
        "hr": "Cardiovascular instability",
        "mental": "Acute neurologic dysfunction",
        "tsh": "Supports thyrotoxicosis but does not alone grade severity"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "temp": [
          "Severe hyperthermia",
          "Cardiovascular instability",
          "Acute neurologic dysfunction",
          "Supports thyrotoxicosis but does not alone grade severity"
        ],
        "hr": [
          "Severe hyperthermia",
          "Cardiovascular instability",
          "Acute neurologic dysfunction",
          "Supports thyrotoxicosis but does not alone grade severity"
        ],
        "mental": [
          "Severe hyperthermia",
          "Cardiovascular instability",
          "Acute neurologic dysfunction",
          "Supports thyrotoxicosis but does not alone grade severity"
        ],
        "tsh": [
          "Severe hyperthermia",
          "Cardiovascular instability",
          "Acute neurologic dysfunction",
          "Supports thyrotoxicosis but does not alone grade severity"
        ]
      },
      "answerKey": {
        "temp": "Severe hyperthermia",
        "hr": "Cardiovascular instability",
        "mental": "Acute neurologic dysfunction",
        "tsh": "Supports thyrotoxicosis but does not alone grade severity"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "temp",
        "text": "Temperature 40.1°C"
      },
      {
        "id": "hr",
        "text": "HR 156/min with atrial fibrillation"
      },
      {
        "id": "mental",
        "text": "Agitation and confusion"
      },
      {
        "id": "tsh",
        "text": "Suppressed TSH"
      }
    ],
    "columns": [
      "Severe hyperthermia",
      "Cardiovascular instability",
      "Acute neurologic dysfunction",
      "Supports thyrotoxicosis but does not alone grade severity"
    ],
    "correctAnswers": {
      "temp": "Severe hyperthermia",
      "hr": "Cardiovascular instability",
      "mental": "Acute neurologic dysfunction",
      "tsh": "Supports thyrotoxicosis but does not alone grade severity"
    }
  },
  {
    "id": "QR-100141",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-014",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Thyroid Storm Triggered by Infection",
    "caseStudyContext": {
      "id": "QR-CS-014",
      "title": "Thyroid Storm Triggered by Infection",
      "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Thyroid storm",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Recognize thyroid storm and urgently escalate.",
      "Initiate continuous cardiac and temperature monitoring.",
      "Prepare prescribed multimodal treatment and treatment of the trigger.",
      "Administer iodine before antithyroid medication.",
      "Use aspirin routinely for fever."
    ],
    "correctAnswer": [
      "Recognize thyroid storm and urgently escalate.",
      "Initiate continuous cardiac and temperature monitoring.",
      "Prepare prescribed multimodal treatment and treatment of the trigger."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Thyroid storm.",
    "optionRationales": {
      "Recognize thyroid storm and urgently escalate.": "Correct priority for the current clinical threat.",
      "Initiate continuous cardiac and temperature monitoring.": "Correct priority for the current clinical threat.",
      "Prepare prescribed multimodal treatment and treatment of the trigger.": "Correct priority for the current clinical threat.",
      "Administer iodine before antithyroid medication.": "Not the priority; this may delay or compromise care.",
      "Use aspirin routinely for fever.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Thyroid Storm",
        "publisher": "Endotext, NCBI Bookshelf",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK278927/",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100141",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations.",
    "providerOrders": "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment.",
    "nursingNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "nursesNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "vitalSigns": "12:00: Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion.",
    "diagnosticResults": "Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion. Clinical interpretation: Thyroid storm; emergency stabilization and multimodal therapy.",
    "stimulus": {
      "caseGroupId": "QR-CS-014",
      "patientProfile": {
        "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
      },
      "tabs": {
        "history": [
          "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations."
        ],
        "nursesNotes": [
          "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
        ],
        "providerOrders": [
          "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment."
        ],
        "vitalSigns": [
          "12:00: Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion."
        ],
        "labResults": [
          "Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion. Clinical interpretation: Thyroid storm; emergency stabilization and multimodal therapy."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Thyroid storm.",
      "options": {
        "Recognize thyroid storm and urgently escalate.": "Correct priority for the current clinical threat.",
        "Initiate continuous cardiac and temperature monitoring.": "Correct priority for the current clinical threat.",
        "Prepare prescribed multimodal treatment and treatment of the trigger.": "Correct priority for the current clinical threat.",
        "Administer iodine before antithyroid medication.": "Not the priority; this may delay or compromise care.",
        "Use aspirin routinely for fever.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Recognize thyroid storm and urgently escalate.",
        "Initiate continuous cardiac and temperature monitoring.",
        "Prepare prescribed multimodal treatment and treatment of the trigger.",
        "Administer iodine before antithyroid medication.",
        "Use aspirin routinely for fever."
      ],
      "answerKey": [
        "Recognize thyroid storm and urgently escalate.",
        "Initiate continuous cardiac and temperature monitoring.",
        "Prepare prescribed multimodal treatment and treatment of the trigger."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100142",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-014",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Thyroid Storm Triggered by Infection",
    "caseStudyContext": {
      "id": "QR-CS-014",
      "title": "Thyroid Storm Triggered by Infection",
      "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Thyroid storm",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Thyroid storm with hyperthermia and cardiovascular instability",
      "actions": [
        "Prepare antithyroid therapy followed by iodine at the directed interval.",
        "Support cooling and administer prescribed beta blockade and corticosteroid."
      ],
      "monitoring": [
        "Heart rhythm, heart rate, blood pressure, and temperature",
        "Mental status, fluid balance, and response to therapy"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Thyroid storm.",
    "optionRationales": {
      "condition": "Thyroid storm with hyperthermia and cardiovascular instability",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Thyroid Storm",
        "publisher": "Endotext, NCBI Bookshelf",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK278927/",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100142",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations.",
    "providerOrders": "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment.",
    "nursingNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "nursesNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "vitalSigns": "12:00: Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion.",
    "diagnosticResults": "Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion. Clinical interpretation: Thyroid storm; emergency stabilization and multimodal therapy.",
    "stimulus": {
      "caseGroupId": "QR-CS-014",
      "patientProfile": {
        "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
      },
      "tabs": {
        "history": [
          "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations."
        ],
        "nursesNotes": [
          "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
        ],
        "providerOrders": [
          "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment."
        ],
        "vitalSigns": [
          "12:00: Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion."
        ],
        "labResults": [
          "Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion. Clinical interpretation: Thyroid storm; emergency stabilization and multimodal therapy."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Thyroid storm.",
      "options": {
        "condition": "Thyroid storm with hyperthermia and cardiovascular instability",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Thyroid storm with hyperthermia and cardiovascular instability",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Prepare antithyroid therapy followed by iodine at the directed interval.",
          "Support cooling and administer prescribed beta blockade and corticosteroid.",
          "Give aspirin as routine antipyretic."
        ],
        "monitoring": [
          "Heart rhythm, heart rate, blood pressure, and temperature",
          "Mental status, fluid balance, and response to therapy"
        ]
      },
      "answerKey": {
        "condition": "Thyroid storm with hyperthermia and cardiovascular instability",
        "actions": [
          "Prepare antithyroid therapy followed by iodine at the directed interval.",
          "Support cooling and administer prescribed beta blockade and corticosteroid."
        ],
        "monitoring": [
          "Heart rhythm, heart rate, blood pressure, and temperature",
          "Mental status, fluid balance, and response to therapy"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Thyroid storm with hyperthermia and cardiovascular instability",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Prepare antithyroid therapy followed by iodine at the directed interval.",
        "Support cooling and administer prescribed beta blockade and corticosteroid.",
        "Give aspirin as routine antipyretic."
      ],
      "monitoring": [
        "Heart rhythm, heart rate, blood pressure, and temperature",
        "Mental status, fluid balance, and response to therapy"
      ]
    },
    "correctAnswers": {
      "condition": "Thyroid storm with hyperthermia and cardiovascular instability",
      "actions": [
        "Prepare antithyroid therapy followed by iodine at the directed interval.",
        "Support cooling and administer prescribed beta blockade and corticosteroid."
      ],
      "monitoring": [
        "Heart rhythm, heart rate, blood pressure, and temperature",
        "Mental status, fluid balance, and response to therapy"
      ]
    }
  },
  {
    "id": "QR-100143",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-014",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Thyroid Storm Triggered by Infection",
    "caseStudyContext": {
      "id": "QR-CS-014",
      "title": "Thyroid Storm Triggered by Infection",
      "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Thyroid storm",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Initiate continuous cardiac monitoring and urgent escalation.",
      "Implement prescribed cooling and fluid management.",
      "Administer medications in prescribed sequence and monitor response.",
      "Wait for thyroid hormone results before treatment."
    ],
    "correctAnswer": [
      "Initiate continuous cardiac monitoring and urgent escalation.",
      "Implement prescribed cooling and fluid management.",
      "Administer medications in prescribed sequence and monitor response."
    ],
    "rationale": "This item assesses take action in the context of Thyroid storm.",
    "optionRationales": {
      "Initiate continuous cardiac monitoring and urgent escalation.": "Correct. This supports immediate safety and treatment.",
      "Implement prescribed cooling and fluid management.": "Correct. This supports immediate safety and treatment.",
      "Administer medications in prescribed sequence and monitor response.": "Correct. This supports immediate safety and treatment.",
      "Wait for thyroid hormone results before treatment.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Thyroid Storm",
        "publisher": "Endotext, NCBI Bookshelf",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK278927/",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100143",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations.",
    "providerOrders": "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment.",
    "nursingNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "nursesNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "vitalSigns": "After treatment: Temperature 38.0°C, HR 104/min, improved orientation.",
    "diagnosticResults": "Temperature 38.0°C, HR 104/min, improved orientation. Clinical interpretation: Response to treatment; continue close monitoring.",
    "stimulus": {
      "caseGroupId": "QR-CS-014",
      "patientProfile": {
        "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
      },
      "tabs": {
        "history": [
          "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations."
        ],
        "nursesNotes": [
          "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
        ],
        "providerOrders": [
          "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment."
        ],
        "vitalSigns": [
          "After treatment: Temperature 38.0°C, HR 104/min, improved orientation."
        ],
        "labResults": [
          "Temperature 38.0°C, HR 104/min, improved orientation. Clinical interpretation: Response to treatment; continue close monitoring."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Thyroid storm.",
      "options": {
        "Initiate continuous cardiac monitoring and urgent escalation.": "Correct. This supports immediate safety and treatment.",
        "Implement prescribed cooling and fluid management.": "Correct. This supports immediate safety and treatment.",
        "Administer medications in prescribed sequence and monitor response.": "Correct. This supports immediate safety and treatment.",
        "Wait for thyroid hormone results before treatment.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Initiate continuous cardiac monitoring and urgent escalation.",
        "Implement prescribed cooling and fluid management.",
        "Administer medications in prescribed sequence and monitor response.",
        "Wait for thyroid hormone results before treatment."
      ],
      "answerKey": [
        "Initiate continuous cardiac monitoring and urgent escalation.",
        "Implement prescribed cooling and fluid management.",
        "Administer medications in prescribed sequence and monitor response."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100144",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-014",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Thyroid Storm Triggered by Infection",
    "caseStudyContext": {
      "id": "QR-CS-014",
      "title": "Thyroid Storm Triggered by Infection",
      "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Thyroid storm",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Assess progression and report suspected thyrotoxicosis.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Assess progression and report suspected thyrotoxicosis.",
    "rationale": "Extreme hyperthermia, severe tachycardia, atrial fibrillation, and altered mental status in Graves disease indicate thyroid storm. Excess thyroid hormone drives hypermetabolism and cardiovascular instability; urgent multimodal therapy and treatment of the trigger are required.",
    "optionRationales": {
      "Assess progression and report suspected thyrotoxicosis.": "Correct. Fever 38.2°C, tremor, HR 118/min, alert. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Thyroid storm; emergency stabilization and multimodal therapy.": "Correct. Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion. This interpretation matches the clinical progression.",
      "Response to treatment; continue close monitoring.": "Correct. Temperature 38.0°C, HR 104/min, improved orientation. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Thyroid Storm",
        "publisher": "Endotext, NCBI Bookshelf",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK278927/",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100144",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations.",
    "providerOrders": "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment.",
    "nursingNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "nursesNotes": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting.",
    "vitalSigns": "After treatment: Temperature 38.0°C, HR 104/min, improved orientation.",
    "diagnosticResults": "Temperature 38.0°C, HR 104/min, improved orientation. Clinical interpretation: Response to treatment; continue close monitoring.",
    "stimulus": {
      "caseGroupId": "QR-CS-014",
      "patientProfile": {
        "summary": "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
      },
      "tabs": {
        "history": [
          "Graves disease; missed antithyroid medication; infection symptoms preceding acute agitation and palpitations."
        ],
        "nursesNotes": [
          "39-year-old with poorly controlled Graves disease presents with fever, agitation, severe tachycardia, and vomiting."
        ],
        "providerOrders": [
          "Continuous cardiac monitoring; urgent evaluation; prescribed beta blocker, antithyroid medication, iodine after antithyroid drug, corticosteroid, cooling, and trigger treatment."
        ],
        "vitalSigns": [
          "After treatment: Temperature 38.0°C, HR 104/min, improved orientation."
        ],
        "labResults": [
          "Temperature 38.0°C, HR 104/min, improved orientation. Clinical interpretation: Response to treatment; continue close monitoring."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Thyroid storm.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Assess progression and report suspected thyrotoxicosis.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Assess progression and report suspected thyrotoxicosis.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Thyroid Storm Triggered by Infection — clinical progression",
      "stages": [
        {
          "time": "11:00",
          "situation": "Fever 38.2°C, tremor, HR 118/min, alert.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Assess progression and report suspected thyrotoxicosis.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Assess progression and report suspected thyrotoxicosis."
        },
        {
          "time": "12:00",
          "situation": "Temperature 40.1°C, HR 156/min, atrial fibrillation, confusion.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Thyroid storm; emergency stabilization and multimodal therapy.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Thyroid storm; emergency stabilization and multimodal therapy."
        },
        {
          "time": "After treatment",
          "situation": "Temperature 38.0°C, HR 104/min, improved orientation.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Response to treatment; continue close monitoring.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Response to treatment; continue close monitoring."
        }
      ]
    }
  },
  {
    "id": "QR-100145",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-015",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Myasthenic Crisis With Impending Respiratory Failure",
    "caseStudyContext": {
      "id": "QR-CS-015",
      "title": "Myasthenic Crisis With Impending Respiratory Failure",
      "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenia gravis and myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "swallow",
      "cough",
      "fvc"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "swallow": "This cue contributes to recognition of the immediate clinical threat.",
      "cough": "This cue contributes to recognition of the immediate clinical threat.",
      "fvc": "This cue contributes to recognition of the immediate clinical threat.",
      "itch": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Myasthenia Gravis",
        "publisher": "National Institute of Neurological Disorders and Stroke",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100145",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness.",
    "providerOrders": "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection.",
    "nursingNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection. Difficulty swallowing saliva. Weak cough. Declining forced vital capacity. Mild localized itching.",
    "nursesNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection. Difficulty swallowing saliva. Weak cough. Declining forced vital capacity. Mild localized itching.",
    "vitalSigns": "09:00: Mild ptosis and fatigable speech; respiratory mechanics near baseline.",
    "diagnosticResults": "Mild ptosis and fatigable speech; respiratory mechanics near baseline. Clinical interpretation: Monitor closely and assess triggers.",
    "stimulus": {
      "caseGroupId": "QR-CS-015",
      "patientProfile": {
        "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
      },
      "tabs": {
        "history": [
          "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness."
        ],
        "nursesNotes": [
          "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
        ],
        "providerOrders": [
          "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection."
        ],
        "vitalSigns": [
          "09:00: Mild ptosis and fatigable speech; respiratory mechanics near baseline."
        ],
        "labResults": [
          "Mild ptosis and fatigable speech; respiratory mechanics near baseline. Clinical interpretation: Monitor closely and assess triggers."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "swallow": "This cue contributes to recognition of the immediate clinical threat.",
        "cough": "This cue contributes to recognition of the immediate clinical threat.",
        "fvc": "This cue contributes to recognition of the immediate clinical threat.",
        "itch": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "swallow",
        "cough",
        "fvc"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection. Difficulty swallowing saliva. Weak cough. Declining forced vital capacity. Mild localized itching.",
    "highlightSegments": [
      {
        "id": "swallow",
        "text": "Difficulty swallowing saliva"
      },
      {
        "id": "cough",
        "text": "Weak cough"
      },
      {
        "id": "fvc",
        "text": "Declining forced vital capacity"
      },
      {
        "id": "itch",
        "text": "Mild localized itching"
      }
    ],
    "correctHighlights": [
      "swallow",
      "cough",
      "fvc"
    ]
  },
  {
    "id": "QR-100146",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-015",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Myasthenic Crisis With Impending Respiratory Failure",
    "caseStudyContext": {
      "id": "QR-CS-015",
      "title": "Myasthenic Crisis With Impending Respiratory Failure",
      "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenia gravis and myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "swallow": "Bulbar weakness and aspiration risk",
      "cough": "Impaired airway clearance",
      "fvc": "Worsening respiratory muscle weakness",
      "itch": "Not a sign of respiratory crisis"
    },
    "rationale": "This item assesses analyze cues in the context of Myasthenia gravis and myasthenic crisis.",
    "optionRationales": {
      "swallow": "Bulbar weakness and aspiration risk",
      "cough": "Impaired airway clearance",
      "fvc": "Worsening respiratory muscle weakness",
      "itch": "Not a sign of respiratory crisis"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Myasthenia Gravis",
        "publisher": "National Institute of Neurological Disorders and Stroke",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100146",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness.",
    "providerOrders": "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection.",
    "nursingNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "nursesNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "vitalSigns": "09:00: Mild ptosis and fatigable speech; respiratory mechanics near baseline.",
    "diagnosticResults": "Mild ptosis and fatigable speech; respiratory mechanics near baseline. Clinical interpretation: Monitor closely and assess triggers.",
    "stimulus": {
      "caseGroupId": "QR-CS-015",
      "patientProfile": {
        "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
      },
      "tabs": {
        "history": [
          "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness."
        ],
        "nursesNotes": [
          "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
        ],
        "providerOrders": [
          "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection."
        ],
        "vitalSigns": [
          "09:00: Mild ptosis and fatigable speech; respiratory mechanics near baseline."
        ],
        "labResults": [
          "Mild ptosis and fatigable speech; respiratory mechanics near baseline. Clinical interpretation: Monitor closely and assess triggers."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Myasthenia gravis and myasthenic crisis.",
      "options": {
        "swallow": "Bulbar weakness and aspiration risk",
        "cough": "Impaired airway clearance",
        "fvc": "Worsening respiratory muscle weakness",
        "itch": "Not a sign of respiratory crisis"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "swallow": [
          "Bulbar weakness and aspiration risk",
          "Impaired airway clearance",
          "Worsening respiratory muscle weakness",
          "Not a sign of respiratory crisis"
        ],
        "cough": [
          "Bulbar weakness and aspiration risk",
          "Impaired airway clearance",
          "Worsening respiratory muscle weakness",
          "Not a sign of respiratory crisis"
        ],
        "fvc": [
          "Bulbar weakness and aspiration risk",
          "Impaired airway clearance",
          "Worsening respiratory muscle weakness",
          "Not a sign of respiratory crisis"
        ],
        "itch": [
          "Bulbar weakness and aspiration risk",
          "Impaired airway clearance",
          "Worsening respiratory muscle weakness",
          "Not a sign of respiratory crisis"
        ]
      },
      "answerKey": {
        "swallow": "Bulbar weakness and aspiration risk",
        "cough": "Impaired airway clearance",
        "fvc": "Worsening respiratory muscle weakness",
        "itch": "Not a sign of respiratory crisis"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "swallow",
        "text": "Difficulty swallowing saliva"
      },
      {
        "id": "cough",
        "text": "Weak cough"
      },
      {
        "id": "fvc",
        "text": "Declining forced vital capacity"
      },
      {
        "id": "itch",
        "text": "Mild localized itching"
      }
    ],
    "columns": [
      "Bulbar weakness and aspiration risk",
      "Impaired airway clearance",
      "Worsening respiratory muscle weakness",
      "Not a sign of respiratory crisis"
    ],
    "correctAnswers": {
      "swallow": "Bulbar weakness and aspiration risk",
      "cough": "Impaired airway clearance",
      "fvc": "Worsening respiratory muscle weakness",
      "itch": "Not a sign of respiratory crisis"
    }
  },
  {
    "id": "QR-100147",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-015",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Myasthenic Crisis With Impending Respiratory Failure",
    "caseStudyContext": {
      "id": "QR-CS-015",
      "title": "Myasthenic Crisis With Impending Respiratory Failure",
      "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenia gravis and myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Escalate immediately for possible myasthenic crisis.",
      "Assess airway protection and respiratory mechanics.",
      "Keep NPO pending swallowing and airway assessment.",
      "Encourage oral fluids.",
      "Assume anxiety causes weak speech."
    ],
    "correctAnswer": [
      "Escalate immediately for possible myasthenic crisis.",
      "Assess airway protection and respiratory mechanics.",
      "Keep NPO pending swallowing and airway assessment."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Myasthenia gravis and myasthenic crisis.",
    "optionRationales": {
      "Escalate immediately for possible myasthenic crisis.": "Correct priority for the current clinical threat.",
      "Assess airway protection and respiratory mechanics.": "Correct priority for the current clinical threat.",
      "Keep NPO pending swallowing and airway assessment.": "Correct priority for the current clinical threat.",
      "Encourage oral fluids.": "Not the priority; this may delay or compromise care.",
      "Assume anxiety causes weak speech.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Myasthenia Gravis",
        "publisher": "National Institute of Neurological Disorders and Stroke",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100147",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness.",
    "providerOrders": "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection.",
    "nursingNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "nursesNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "vitalSigns": "11:00: Dysphagia, weak cough, pooling secretions, declining respiratory mechanics.",
    "diagnosticResults": "Dysphagia, weak cough, pooling secretions, declining respiratory mechanics. Clinical interpretation: Impending respiratory failure; urgent airway and critical-care escalation.",
    "stimulus": {
      "caseGroupId": "QR-CS-015",
      "patientProfile": {
        "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
      },
      "tabs": {
        "history": [
          "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness."
        ],
        "nursesNotes": [
          "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
        ],
        "providerOrders": [
          "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection."
        ],
        "vitalSigns": [
          "11:00: Dysphagia, weak cough, pooling secretions, declining respiratory mechanics."
        ],
        "labResults": [
          "Dysphagia, weak cough, pooling secretions, declining respiratory mechanics. Clinical interpretation: Impending respiratory failure; urgent airway and critical-care escalation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Myasthenia gravis and myasthenic crisis.",
      "options": {
        "Escalate immediately for possible myasthenic crisis.": "Correct priority for the current clinical threat.",
        "Assess airway protection and respiratory mechanics.": "Correct priority for the current clinical threat.",
        "Keep NPO pending swallowing and airway assessment.": "Correct priority for the current clinical threat.",
        "Encourage oral fluids.": "Not the priority; this may delay or compromise care.",
        "Assume anxiety causes weak speech.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Escalate immediately for possible myasthenic crisis.",
        "Assess airway protection and respiratory mechanics.",
        "Keep NPO pending swallowing and airway assessment.",
        "Encourage oral fluids.",
        "Assume anxiety causes weak speech."
      ],
      "answerKey": [
        "Escalate immediately for possible myasthenic crisis.",
        "Assess airway protection and respiratory mechanics.",
        "Keep NPO pending swallowing and airway assessment."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100148",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-015",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Myasthenic Crisis With Impending Respiratory Failure",
    "caseStudyContext": {
      "id": "QR-CS-015",
      "title": "Myasthenic Crisis With Impending Respiratory Failure",
      "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenia gravis and myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Myasthenic crisis with bulbar and respiratory muscle weakness",
      "actions": [
        "Prepare ICU-level monitoring and possible ventilatory support.",
        "Maintain aspiration precautions and airway-protection plan."
      ],
      "monitoring": [
        "Respiratory mechanics, oxygenation, cough strength, and secretion handling",
        "Swallowing, speech, and progression of weakness"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Myasthenia gravis and myasthenic crisis.",
    "optionRationales": {
      "condition": "Myasthenic crisis with bulbar and respiratory muscle weakness",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Myasthenia Gravis",
        "publisher": "National Institute of Neurological Disorders and Stroke",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100148",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness.",
    "providerOrders": "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection.",
    "nursingNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "nursesNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "vitalSigns": "11:00: Dysphagia, weak cough, pooling secretions, declining respiratory mechanics.",
    "diagnosticResults": "Dysphagia, weak cough, pooling secretions, declining respiratory mechanics. Clinical interpretation: Impending respiratory failure; urgent airway and critical-care escalation.",
    "stimulus": {
      "caseGroupId": "QR-CS-015",
      "patientProfile": {
        "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
      },
      "tabs": {
        "history": [
          "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness."
        ],
        "nursesNotes": [
          "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
        ],
        "providerOrders": [
          "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection."
        ],
        "vitalSigns": [
          "11:00: Dysphagia, weak cough, pooling secretions, declining respiratory mechanics."
        ],
        "labResults": [
          "Dysphagia, weak cough, pooling secretions, declining respiratory mechanics. Clinical interpretation: Impending respiratory failure; urgent airway and critical-care escalation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Myasthenia gravis and myasthenic crisis.",
      "options": {
        "condition": "Myasthenic crisis with bulbar and respiratory muscle weakness",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Myasthenic crisis with bulbar and respiratory muscle weakness",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Prepare ICU-level monitoring and possible ventilatory support.",
          "Maintain aspiration precautions and airway-protection plan.",
          "Give sedating medication to reduce respiratory effort."
        ],
        "monitoring": [
          "Respiratory mechanics, oxygenation, cough strength, and secretion handling",
          "Swallowing, speech, and progression of weakness"
        ]
      },
      "answerKey": {
        "condition": "Myasthenic crisis with bulbar and respiratory muscle weakness",
        "actions": [
          "Prepare ICU-level monitoring and possible ventilatory support.",
          "Maintain aspiration precautions and airway-protection plan."
        ],
        "monitoring": [
          "Respiratory mechanics, oxygenation, cough strength, and secretion handling",
          "Swallowing, speech, and progression of weakness"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Myasthenic crisis with bulbar and respiratory muscle weakness",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Prepare ICU-level monitoring and possible ventilatory support.",
        "Maintain aspiration precautions and airway-protection plan.",
        "Give sedating medication to reduce respiratory effort."
      ],
      "monitoring": [
        "Respiratory mechanics, oxygenation, cough strength, and secretion handling",
        "Swallowing, speech, and progression of weakness"
      ]
    },
    "correctAnswers": {
      "condition": "Myasthenic crisis with bulbar and respiratory muscle weakness",
      "actions": [
        "Prepare ICU-level monitoring and possible ventilatory support.",
        "Maintain aspiration precautions and airway-protection plan."
      ],
      "monitoring": [
        "Respiratory mechanics, oxygenation, cough strength, and secretion handling",
        "Swallowing, speech, and progression of weakness"
      ]
    }
  },
  {
    "id": "QR-100149",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-015",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Myasthenic Crisis With Impending Respiratory Failure",
    "caseStudyContext": {
      "id": "QR-CS-015",
      "title": "Myasthenic Crisis With Impending Respiratory Failure",
      "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenia gravis and myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Keep NPO and institute aspiration precautions pending evaluation.",
      "Notify critical care and prepare airway equipment.",
      "Trend respiratory mechanics and ability to clear secretions.",
      "Give oral fluids despite unsafe swallowing."
    ],
    "correctAnswer": [
      "Keep NPO and institute aspiration precautions pending evaluation.",
      "Notify critical care and prepare airway equipment.",
      "Trend respiratory mechanics and ability to clear secretions."
    ],
    "rationale": "This item assesses take action in the context of Myasthenia gravis and myasthenic crisis.",
    "optionRationales": {
      "Keep NPO and institute aspiration precautions pending evaluation.": "Correct. This supports immediate safety and treatment.",
      "Notify critical care and prepare airway equipment.": "Correct. This supports immediate safety and treatment.",
      "Trend respiratory mechanics and ability to clear secretions.": "Correct. This supports immediate safety and treatment.",
      "Give oral fluids despite unsafe swallowing.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Myasthenia Gravis",
        "publisher": "National Institute of Neurological Disorders and Stroke",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100149",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness.",
    "providerOrders": "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection.",
    "nursingNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "nursesNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "vitalSigns": "After treatment: Secretions controlled, cough stronger, respiratory mechanics improving.",
    "diagnosticResults": "Secretions controlled, cough stronger, respiratory mechanics improving. Clinical interpretation: Improving function; continue monitoring and precautions.",
    "stimulus": {
      "caseGroupId": "QR-CS-015",
      "patientProfile": {
        "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
      },
      "tabs": {
        "history": [
          "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness."
        ],
        "nursesNotes": [
          "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
        ],
        "providerOrders": [
          "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection."
        ],
        "vitalSigns": [
          "After treatment: Secretions controlled, cough stronger, respiratory mechanics improving."
        ],
        "labResults": [
          "Secretions controlled, cough stronger, respiratory mechanics improving. Clinical interpretation: Improving function; continue monitoring and precautions."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Myasthenia gravis and myasthenic crisis.",
      "options": {
        "Keep NPO and institute aspiration precautions pending evaluation.": "Correct. This supports immediate safety and treatment.",
        "Notify critical care and prepare airway equipment.": "Correct. This supports immediate safety and treatment.",
        "Trend respiratory mechanics and ability to clear secretions.": "Correct. This supports immediate safety and treatment.",
        "Give oral fluids despite unsafe swallowing.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Keep NPO and institute aspiration precautions pending evaluation.",
        "Notify critical care and prepare airway equipment.",
        "Trend respiratory mechanics and ability to clear secretions.",
        "Give oral fluids despite unsafe swallowing."
      ],
      "answerKey": [
        "Keep NPO and institute aspiration precautions pending evaluation.",
        "Notify critical care and prepare airway equipment.",
        "Trend respiratory mechanics and ability to clear secretions."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100150",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-015",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Myasthenic Crisis With Impending Respiratory Failure",
    "caseStudyContext": {
      "id": "QR-CS-015",
      "title": "Myasthenic Crisis With Impending Respiratory Failure",
      "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Adult Health",
    "topic": "Myasthenia gravis and myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Monitor closely and assess triggers.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Monitor closely and assess triggers.",
    "rationale": "Dysphagia, weak cough, pooled secretions, and declining forced vital capacity indicate bulbar and respiratory muscle weakness with impending ventilatory failure in myasthenia gravis. Improved cough and respiratory mechanics indicate response, but airway protection still requires close observation.",
    "optionRationales": {
      "Monitor closely and assess triggers.": "Correct. Mild ptosis and fatigable speech; respiratory mechanics near baseline. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Impending respiratory failure; urgent airway and critical-care escalation.": "Correct. Dysphagia, weak cough, pooling secretions, declining respiratory mechanics. This interpretation matches the clinical progression.",
      "Improving function; continue monitoring and precautions.": "Correct. Secretions controlled, cough stronger, respiratory mechanics improving. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Myasthenia Gravis",
        "publisher": "National Institute of Neurological Disorders and Stroke",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100150",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness.",
    "providerOrders": "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection.",
    "nursingNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "nursesNotes": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection.",
    "vitalSigns": "After treatment: Secretions controlled, cough stronger, respiratory mechanics improving.",
    "diagnosticResults": "Secretions controlled, cough stronger, respiratory mechanics improving. Clinical interpretation: Improving function; continue monitoring and precautions.",
    "stimulus": {
      "caseGroupId": "QR-CS-015",
      "patientProfile": {
        "summary": "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
      },
      "tabs": {
        "history": [
          "Myasthenia gravis treated with pyridostigmine; recent respiratory infection; progressive bulbar weakness."
        ],
        "nursesNotes": [
          "47-year-old with myasthenia gravis develops dysphagia, weak cough, nasal speech, and declining respiratory mechanics after respiratory infection."
        ],
        "providerOrders": [
          "Urgent critical-care evaluation; serial respiratory mechanics; aspiration precautions; prepare airway support; review medications and treat infection."
        ],
        "vitalSigns": [
          "After treatment: Secretions controlled, cough stronger, respiratory mechanics improving."
        ],
        "labResults": [
          "Secretions controlled, cough stronger, respiratory mechanics improving. Clinical interpretation: Improving function; continue monitoring and precautions."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Myasthenia gravis and myasthenic crisis.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Monitor closely and assess triggers.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Monitor closely and assess triggers.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Myasthenic Crisis With Impending Respiratory Failure — clinical progression",
      "stages": [
        {
          "time": "09:00",
          "situation": "Mild ptosis and fatigable speech; respiratory mechanics near baseline.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Monitor closely and assess triggers.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Monitor closely and assess triggers."
        },
        {
          "time": "11:00",
          "situation": "Dysphagia, weak cough, pooling secretions, declining respiratory mechanics.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Impending respiratory failure; urgent airway and critical-care escalation.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Impending respiratory failure; urgent airway and critical-care escalation."
        },
        {
          "time": "After treatment",
          "situation": "Secretions controlled, cough stronger, respiratory mechanics improving.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Improving function; continue monitoring and precautions.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Improving function; continue monitoring and precautions."
        }
      ]
    }
  },
  {
    "id": "QR-100151",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-016",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Pediatric Gastroenteritis With Severe Dehydration",
    "caseStudyContext": {
      "id": "QR-CS-016",
      "title": "Pediatric Gastroenteritis With Severe Dehydration",
      "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dehydration and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "refill",
      "urine",
      "mental"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "refill": "This cue contributes to recognition of the immediate clinical threat.",
      "urine": "This cue contributes to recognition of the immediate clinical threat.",
      "mental": "This cue contributes to recognition of the immediate clinical threat.",
      "tears": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Diarrhoeal Disease",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100151",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids.",
    "providerOrders": "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate.",
    "nursingNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output. Capillary refill 5 seconds. No wet diaper for 10 hours. Lethargy. Tears present with crying.",
    "nursesNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output. Capillary refill 5 seconds. No wet diaper for 10 hours. Lethargy. Tears present with crying.",
    "vitalSigns": "14:00: Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert.",
    "diagnosticResults": "Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert. Clinical interpretation: Assess hydration and initiate appropriate rehydration.",
    "stimulus": {
      "caseGroupId": "QR-CS-016",
      "patientProfile": {
        "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
      },
      "tabs": {
        "history": [
          "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids."
        ],
        "nursesNotes": [
          "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
        ],
        "providerOrders": [
          "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate."
        ],
        "vitalSigns": [
          "14:00: Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert."
        ],
        "labResults": [
          "Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert. Clinical interpretation: Assess hydration and initiate appropriate rehydration."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "refill": "This cue contributes to recognition of the immediate clinical threat.",
        "urine": "This cue contributes to recognition of the immediate clinical threat.",
        "mental": "This cue contributes to recognition of the immediate clinical threat.",
        "tears": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "refill",
        "urine",
        "mental"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output. Capillary refill 5 seconds. No wet diaper for 10 hours. Lethargy. Tears present with crying.",
    "highlightSegments": [
      {
        "id": "refill",
        "text": "Capillary refill 5 seconds"
      },
      {
        "id": "urine",
        "text": "No wet diaper for 10 hours"
      },
      {
        "id": "mental",
        "text": "Lethargy"
      },
      {
        "id": "tears",
        "text": "Tears present with crying"
      }
    ],
    "correctHighlights": [
      "refill",
      "urine",
      "mental"
    ]
  },
  {
    "id": "QR-100152",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-016",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Pediatric Gastroenteritis With Severe Dehydration",
    "caseStudyContext": {
      "id": "QR-CS-016",
      "title": "Pediatric Gastroenteritis With Severe Dehydration",
      "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dehydration and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "refill": "Poor peripheral perfusion",
      "urine": "Significant fluid deficit",
      "mental": "Possible severe dehydration or shock",
      "tears": "Does not exclude severe dehydration"
    },
    "rationale": "This item assesses analyze cues in the context of Pediatric dehydration and fluid resuscitation.",
    "optionRationales": {
      "refill": "Poor peripheral perfusion",
      "urine": "Significant fluid deficit",
      "mental": "Possible severe dehydration or shock",
      "tears": "Does not exclude severe dehydration"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Diarrhoeal Disease",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100152",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids.",
    "providerOrders": "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate.",
    "nursingNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "nursesNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "vitalSigns": "14:00: Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert.",
    "diagnosticResults": "Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert. Clinical interpretation: Assess hydration and initiate appropriate rehydration.",
    "stimulus": {
      "caseGroupId": "QR-CS-016",
      "patientProfile": {
        "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
      },
      "tabs": {
        "history": [
          "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids."
        ],
        "nursesNotes": [
          "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
        ],
        "providerOrders": [
          "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate."
        ],
        "vitalSigns": [
          "14:00: Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert."
        ],
        "labResults": [
          "Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert. Clinical interpretation: Assess hydration and initiate appropriate rehydration."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Pediatric dehydration and fluid resuscitation.",
      "options": {
        "refill": "Poor peripheral perfusion",
        "urine": "Significant fluid deficit",
        "mental": "Possible severe dehydration or shock",
        "tears": "Does not exclude severe dehydration"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "refill": [
          "Poor peripheral perfusion",
          "Significant fluid deficit",
          "Possible severe dehydration or shock",
          "Does not exclude severe dehydration"
        ],
        "urine": [
          "Poor peripheral perfusion",
          "Significant fluid deficit",
          "Possible severe dehydration or shock",
          "Does not exclude severe dehydration"
        ],
        "mental": [
          "Poor peripheral perfusion",
          "Significant fluid deficit",
          "Possible severe dehydration or shock",
          "Does not exclude severe dehydration"
        ],
        "tears": [
          "Poor peripheral perfusion",
          "Significant fluid deficit",
          "Possible severe dehydration or shock",
          "Does not exclude severe dehydration"
        ]
      },
      "answerKey": {
        "refill": "Poor peripheral perfusion",
        "urine": "Significant fluid deficit",
        "mental": "Possible severe dehydration or shock",
        "tears": "Does not exclude severe dehydration"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "refill",
        "text": "Capillary refill 5 seconds"
      },
      {
        "id": "urine",
        "text": "No wet diaper for 10 hours"
      },
      {
        "id": "mental",
        "text": "Lethargy"
      },
      {
        "id": "tears",
        "text": "Tears present with crying"
      }
    ],
    "columns": [
      "Poor peripheral perfusion",
      "Significant fluid deficit",
      "Possible severe dehydration or shock",
      "Does not exclude severe dehydration"
    ],
    "correctAnswers": {
      "refill": "Poor peripheral perfusion",
      "urine": "Significant fluid deficit",
      "mental": "Possible severe dehydration or shock",
      "tears": "Does not exclude severe dehydration"
    }
  },
  {
    "id": "QR-100153",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-016",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Pediatric Gastroenteritis With Severe Dehydration",
    "caseStudyContext": {
      "id": "QR-CS-016",
      "title": "Pediatric Gastroenteritis With Severe Dehydration",
      "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dehydration and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Recognize possible hypovolemic shock and escalate.",
      "Assess airway, breathing, circulation, mental status, and weight.",
      "Prepare prescribed isotonic IV fluid resuscitation.",
      "Give large volumes of plain water rapidly by mouth to a lethargic child.",
      "Wait for stool testing."
    ],
    "correctAnswer": [
      "Recognize possible hypovolemic shock and escalate.",
      "Assess airway, breathing, circulation, mental status, and weight.",
      "Prepare prescribed isotonic IV fluid resuscitation."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Pediatric dehydration and fluid resuscitation.",
    "optionRationales": {
      "Recognize possible hypovolemic shock and escalate.": "Correct priority for the current clinical threat.",
      "Assess airway, breathing, circulation, mental status, and weight.": "Correct priority for the current clinical threat.",
      "Prepare prescribed isotonic IV fluid resuscitation.": "Correct priority for the current clinical threat.",
      "Give large volumes of plain water rapidly by mouth to a lethargic child.": "Not the priority; this may delay or compromise care.",
      "Wait for stool testing.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Diarrhoeal Disease",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100153",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids.",
    "providerOrders": "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate.",
    "nursingNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "nursesNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "vitalSigns": "15:00: Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours.",
    "diagnosticResults": "Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours. Clinical interpretation: Severe dehydration with poor perfusion; urgent IV resuscitation.",
    "stimulus": {
      "caseGroupId": "QR-CS-016",
      "patientProfile": {
        "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
      },
      "tabs": {
        "history": [
          "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids."
        ],
        "nursesNotes": [
          "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
        ],
        "providerOrders": [
          "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate."
        ],
        "vitalSigns": [
          "15:00: Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours."
        ],
        "labResults": [
          "Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours. Clinical interpretation: Severe dehydration with poor perfusion; urgent IV resuscitation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Pediatric dehydration and fluid resuscitation.",
      "options": {
        "Recognize possible hypovolemic shock and escalate.": "Correct priority for the current clinical threat.",
        "Assess airway, breathing, circulation, mental status, and weight.": "Correct priority for the current clinical threat.",
        "Prepare prescribed isotonic IV fluid resuscitation.": "Correct priority for the current clinical threat.",
        "Give large volumes of plain water rapidly by mouth to a lethargic child.": "Not the priority; this may delay or compromise care.",
        "Wait for stool testing.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Recognize possible hypovolemic shock and escalate.",
        "Assess airway, breathing, circulation, mental status, and weight.",
        "Prepare prescribed isotonic IV fluid resuscitation.",
        "Give large volumes of plain water rapidly by mouth to a lethargic child.",
        "Wait for stool testing."
      ],
      "answerKey": [
        "Recognize possible hypovolemic shock and escalate.",
        "Assess airway, breathing, circulation, mental status, and weight.",
        "Prepare prescribed isotonic IV fluid resuscitation."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100154",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-016",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Pediatric Gastroenteritis With Severe Dehydration",
    "caseStudyContext": {
      "id": "QR-CS-016",
      "title": "Pediatric Gastroenteritis With Severe Dehydration",
      "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dehydration and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Severe dehydration with impaired perfusion from gastroenteritis",
      "actions": [
        "Administer prescribed isotonic IV fluid and reassess perfusion.",
        "Monitor glucose, electrolytes, urine output, and weight."
      ],
      "monitoring": [
        "Mental status, heart rate, capillary refill, blood pressure, and urine output",
        "Glucose, electrolytes, weight, and fluid response"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Pediatric dehydration and fluid resuscitation.",
    "optionRationales": {
      "condition": "Severe dehydration with impaired perfusion from gastroenteritis",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Diarrhoeal Disease",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100154",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids.",
    "providerOrders": "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate.",
    "nursingNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "nursesNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "vitalSigns": "15:00: Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours.",
    "diagnosticResults": "Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours. Clinical interpretation: Severe dehydration with poor perfusion; urgent IV resuscitation.",
    "stimulus": {
      "caseGroupId": "QR-CS-016",
      "patientProfile": {
        "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
      },
      "tabs": {
        "history": [
          "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids."
        ],
        "nursesNotes": [
          "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
        ],
        "providerOrders": [
          "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate."
        ],
        "vitalSigns": [
          "15:00: Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours."
        ],
        "labResults": [
          "Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours. Clinical interpretation: Severe dehydration with poor perfusion; urgent IV resuscitation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Pediatric dehydration and fluid resuscitation.",
      "options": {
        "condition": "Severe dehydration with impaired perfusion from gastroenteritis",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Severe dehydration with impaired perfusion from gastroenteritis",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Administer prescribed isotonic IV fluid and reassess perfusion.",
          "Monitor glucose, electrolytes, urine output, and weight.",
          "Use oral rehydration alone despite lethargy and poor perfusion."
        ],
        "monitoring": [
          "Mental status, heart rate, capillary refill, blood pressure, and urine output",
          "Glucose, electrolytes, weight, and fluid response"
        ]
      },
      "answerKey": {
        "condition": "Severe dehydration with impaired perfusion from gastroenteritis",
        "actions": [
          "Administer prescribed isotonic IV fluid and reassess perfusion.",
          "Monitor glucose, electrolytes, urine output, and weight."
        ],
        "monitoring": [
          "Mental status, heart rate, capillary refill, blood pressure, and urine output",
          "Glucose, electrolytes, weight, and fluid response"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Severe dehydration with impaired perfusion from gastroenteritis",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Administer prescribed isotonic IV fluid and reassess perfusion.",
        "Monitor glucose, electrolytes, urine output, and weight.",
        "Use oral rehydration alone despite lethargy and poor perfusion."
      ],
      "monitoring": [
        "Mental status, heart rate, capillary refill, blood pressure, and urine output",
        "Glucose, electrolytes, weight, and fluid response"
      ]
    },
    "correctAnswers": {
      "condition": "Severe dehydration with impaired perfusion from gastroenteritis",
      "actions": [
        "Administer prescribed isotonic IV fluid and reassess perfusion.",
        "Monitor glucose, electrolytes, urine output, and weight."
      ],
      "monitoring": [
        "Mental status, heart rate, capillary refill, blood pressure, and urine output",
        "Glucose, electrolytes, weight, and fluid response"
      ]
    }
  },
  {
    "id": "QR-100155",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-016",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Pediatric Gastroenteritis With Severe Dehydration",
    "caseStudyContext": {
      "id": "QR-CS-016",
      "title": "Pediatric Gastroenteritis With Severe Dehydration",
      "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dehydration and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Initiate prescribed isotonic fluid resuscitation and reassess.",
      "Monitor urine output and electrolytes.",
      "Start oral rehydration when alert and able to tolerate it.",
      "Give antidiarrheal medication without an order."
    ],
    "correctAnswer": [
      "Initiate prescribed isotonic fluid resuscitation and reassess.",
      "Monitor urine output and electrolytes.",
      "Start oral rehydration when alert and able to tolerate it."
    ],
    "rationale": "This item assesses take action in the context of Pediatric dehydration and fluid resuscitation.",
    "optionRationales": {
      "Initiate prescribed isotonic fluid resuscitation and reassess.": "Correct. This supports immediate safety and treatment.",
      "Monitor urine output and electrolytes.": "Correct. This supports immediate safety and treatment.",
      "Start oral rehydration when alert and able to tolerate it.": "Correct. This supports immediate safety and treatment.",
      "Give antidiarrheal medication without an order.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Diarrhoeal Disease",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100155",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids.",
    "providerOrders": "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate.",
    "nursingNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "nursesNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "vitalSigns": "After resuscitation: Alert, capillary refill 2 seconds, urine output resumes.",
    "diagnosticResults": "Alert, capillary refill 2 seconds, urine output resumes. Clinical interpretation: Perfusion improving; continue replacement and monitor.",
    "stimulus": {
      "caseGroupId": "QR-CS-016",
      "patientProfile": {
        "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
      },
      "tabs": {
        "history": [
          "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids."
        ],
        "nursesNotes": [
          "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
        ],
        "providerOrders": [
          "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate."
        ],
        "vitalSigns": [
          "After resuscitation: Alert, capillary refill 2 seconds, urine output resumes."
        ],
        "labResults": [
          "Alert, capillary refill 2 seconds, urine output resumes. Clinical interpretation: Perfusion improving; continue replacement and monitor."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Pediatric dehydration and fluid resuscitation.",
      "options": {
        "Initiate prescribed isotonic fluid resuscitation and reassess.": "Correct. This supports immediate safety and treatment.",
        "Monitor urine output and electrolytes.": "Correct. This supports immediate safety and treatment.",
        "Start oral rehydration when alert and able to tolerate it.": "Correct. This supports immediate safety and treatment.",
        "Give antidiarrheal medication without an order.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Initiate prescribed isotonic fluid resuscitation and reassess.",
        "Monitor urine output and electrolytes.",
        "Start oral rehydration when alert and able to tolerate it.",
        "Give antidiarrheal medication without an order."
      ],
      "answerKey": [
        "Initiate prescribed isotonic fluid resuscitation and reassess.",
        "Monitor urine output and electrolytes.",
        "Start oral rehydration when alert and able to tolerate it."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100156",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-016",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Pediatric Gastroenteritis With Severe Dehydration",
    "caseStudyContext": {
      "id": "QR-CS-016",
      "title": "Pediatric Gastroenteritis With Severe Dehydration",
      "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dehydration and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Assess hydration and initiate appropriate rehydration.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Assess hydration and initiate appropriate rehydration.",
    "rationale": "Vomiting and diarrhea cause fluid loss. Delayed capillary refill, tachycardia, oliguria, and lethargy indicate worsening intravascular depletion and poor tissue perfusion; urgent isotonic fluid resuscitation and reassessment are required.",
    "optionRationales": {
      "Assess hydration and initiate appropriate rehydration.": "Correct. Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Severe dehydration with poor perfusion; urgent IV resuscitation.": "Correct. Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours. This interpretation matches the clinical progression.",
      "Perfusion improving; continue replacement and monitor.": "Correct. Alert, capillary refill 2 seconds, urine output resumes. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Diarrhoeal Disease",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/diarrhoeal-disease",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100156",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids.",
    "providerOrders": "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate.",
    "nursingNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "nursesNotes": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output.",
    "vitalSigns": "After resuscitation: Alert, capillary refill 2 seconds, urine output resumes.",
    "diagnosticResults": "Alert, capillary refill 2 seconds, urine output resumes. Clinical interpretation: Perfusion improving; continue replacement and monitor.",
    "stimulus": {
      "caseGroupId": "QR-CS-016",
      "patientProfile": {
        "summary": "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
      },
      "tabs": {
        "history": [
          "Previously healthy toddler; watery stools and vomiting; no wet diaper for 10 hours; unable to retain oral fluids."
        ],
        "nursesNotes": [
          "18-month-old with vomiting and diarrhea is lethargic, has dry mucosa, delayed capillary refill, and reduced urine output."
        ],
        "providerOrders": [
          "Assess perfusion and weight; prescribed isotonic IV fluid for shock; monitor glucose and electrolytes; reassess frequently; oral rehydration when appropriate."
        ],
        "vitalSigns": [
          "After resuscitation: Alert, capillary refill 2 seconds, urine output resumes."
        ],
        "labResults": [
          "Alert, capillary refill 2 seconds, urine output resumes. Clinical interpretation: Perfusion improving; continue replacement and monitor."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Pediatric dehydration and fluid resuscitation.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Assess hydration and initiate appropriate rehydration.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Assess hydration and initiate appropriate rehydration.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Pediatric Gastroenteritis With Severe Dehydration — clinical progression",
      "stages": [
        {
          "time": "14:00",
          "situation": "Vomiting and diarrhea; dry mouth; capillary refill 3 seconds; alert.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Assess hydration and initiate appropriate rehydration.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Assess hydration and initiate appropriate rehydration."
        },
        {
          "time": "15:00",
          "situation": "Lethargic, capillary refill 5 seconds, tachycardia, no urine for 10 hours.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Severe dehydration with poor perfusion; urgent IV resuscitation.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Severe dehydration with poor perfusion; urgent IV resuscitation."
        },
        {
          "time": "After resuscitation",
          "situation": "Alert, capillary refill 2 seconds, urine output resumes.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Perfusion improving; continue replacement and monitor.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Perfusion improving; continue replacement and monitor."
        }
      ]
    }
  },
  {
    "id": "QR-100157",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-017",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Newborn Hypoglycemia in an At-Risk Infant",
    "caseStudyContext": {
      "id": "QR-CS-017",
      "title": "Newborn Hypoglycemia in an At-Risk Infant",
      "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Neonatal hypoglycemia",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "glucose",
      "jitter",
      "feed"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "glucose": "This cue contributes to recognition of the immediate clinical threat.",
      "jitter": "This cue contributes to recognition of the immediate clinical threat.",
      "feed": "This cue contributes to recognition of the immediate clinical threat.",
      "cry": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Postnatal Glucose Homeostasis in Late Preterm and Term Infants",
        "publisher": "American Academy of Pediatrics",
        "url": "https://publications.aap.org/pediatrics/article/127/3/575/65084/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100157",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life.",
    "providerOrders": "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose.",
    "nursingNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring. Bedside glucose 28 mg/dL. Jitteriness. Poor feeding and weak suck. Strong cry when stimulated.",
    "nursesNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring. Bedside glucose 28 mg/dL. Jitteriness. Poor feeding and weak suck. Strong cry when stimulated.",
    "vitalSigns": "02:00: At-risk infant; screening glucose 42 mg/dL; asymptomatic.",
    "diagnosticResults": "At-risk infant; screening glucose 42 mg/dL; asymptomatic. Clinical interpretation: Follow screening and feeding protocol with reassessment.",
    "stimulus": {
      "caseGroupId": "QR-CS-017",
      "patientProfile": {
        "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
      },
      "tabs": {
        "history": [
          "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life."
        ],
        "nursesNotes": [
          "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
        ],
        "providerOrders": [
          "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose."
        ],
        "vitalSigns": [
          "02:00: At-risk infant; screening glucose 42 mg/dL; asymptomatic."
        ],
        "labResults": [
          "At-risk infant; screening glucose 42 mg/dL; asymptomatic. Clinical interpretation: Follow screening and feeding protocol with reassessment."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "glucose": "This cue contributes to recognition of the immediate clinical threat.",
        "jitter": "This cue contributes to recognition of the immediate clinical threat.",
        "feed": "This cue contributes to recognition of the immediate clinical threat.",
        "cry": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "glucose",
        "jitter",
        "feed"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring. Bedside glucose 28 mg/dL. Jitteriness. Poor feeding and weak suck. Strong cry when stimulated.",
    "highlightSegments": [
      {
        "id": "glucose",
        "text": "Bedside glucose 28 mg/dL"
      },
      {
        "id": "jitter",
        "text": "Jitteriness"
      },
      {
        "id": "feed",
        "text": "Poor feeding and weak suck"
      },
      {
        "id": "cry",
        "text": "Strong cry when stimulated"
      }
    ],
    "correctHighlights": [
      "glucose",
      "jitter",
      "feed"
    ]
  },
  {
    "id": "QR-100158",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-017",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Newborn Hypoglycemia in an At-Risk Infant",
    "caseStudyContext": {
      "id": "QR-CS-017",
      "title": "Newborn Hypoglycemia in an At-Risk Infant",
      "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Neonatal hypoglycemia",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "glucose": "Low glucose requiring immediate protocol-based response",
      "jitter": "Possible symptomatic hypoglycemia",
      "feed": "May impair safe oral intake",
      "cry": "Does not rule out hypoglycemia"
    },
    "rationale": "This item assesses analyze cues in the context of Neonatal hypoglycemia.",
    "optionRationales": {
      "glucose": "Low glucose requiring immediate protocol-based response",
      "jitter": "Possible symptomatic hypoglycemia",
      "feed": "May impair safe oral intake",
      "cry": "Does not rule out hypoglycemia"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Postnatal Glucose Homeostasis in Late Preterm and Term Infants",
        "publisher": "American Academy of Pediatrics",
        "url": "https://publications.aap.org/pediatrics/article/127/3/575/65084/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100158",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life.",
    "providerOrders": "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose.",
    "nursingNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "nursesNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "vitalSigns": "02:00: At-risk infant; screening glucose 42 mg/dL; asymptomatic.",
    "diagnosticResults": "At-risk infant; screening glucose 42 mg/dL; asymptomatic. Clinical interpretation: Follow screening and feeding protocol with reassessment.",
    "stimulus": {
      "caseGroupId": "QR-CS-017",
      "patientProfile": {
        "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
      },
      "tabs": {
        "history": [
          "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life."
        ],
        "nursesNotes": [
          "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
        ],
        "providerOrders": [
          "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose."
        ],
        "vitalSigns": [
          "02:00: At-risk infant; screening glucose 42 mg/dL; asymptomatic."
        ],
        "labResults": [
          "At-risk infant; screening glucose 42 mg/dL; asymptomatic. Clinical interpretation: Follow screening and feeding protocol with reassessment."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Neonatal hypoglycemia.",
      "options": {
        "glucose": "Low glucose requiring immediate protocol-based response",
        "jitter": "Possible symptomatic hypoglycemia",
        "feed": "May impair safe oral intake",
        "cry": "Does not rule out hypoglycemia"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "glucose": [
          "Low glucose requiring immediate protocol-based response",
          "Possible symptomatic hypoglycemia",
          "May impair safe oral intake",
          "Does not rule out hypoglycemia"
        ],
        "jitter": [
          "Low glucose requiring immediate protocol-based response",
          "Possible symptomatic hypoglycemia",
          "May impair safe oral intake",
          "Does not rule out hypoglycemia"
        ],
        "feed": [
          "Low glucose requiring immediate protocol-based response",
          "Possible symptomatic hypoglycemia",
          "May impair safe oral intake",
          "Does not rule out hypoglycemia"
        ],
        "cry": [
          "Low glucose requiring immediate protocol-based response",
          "Possible symptomatic hypoglycemia",
          "May impair safe oral intake",
          "Does not rule out hypoglycemia"
        ]
      },
      "answerKey": {
        "glucose": "Low glucose requiring immediate protocol-based response",
        "jitter": "Possible symptomatic hypoglycemia",
        "feed": "May impair safe oral intake",
        "cry": "Does not rule out hypoglycemia"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "glucose",
        "text": "Bedside glucose 28 mg/dL"
      },
      {
        "id": "jitter",
        "text": "Jitteriness"
      },
      {
        "id": "feed",
        "text": "Poor feeding and weak suck"
      },
      {
        "id": "cry",
        "text": "Strong cry when stimulated"
      }
    ],
    "columns": [
      "Low glucose requiring immediate protocol-based response",
      "Possible symptomatic hypoglycemia",
      "May impair safe oral intake",
      "Does not rule out hypoglycemia"
    ],
    "correctAnswers": {
      "glucose": "Low glucose requiring immediate protocol-based response",
      "jitter": "Possible symptomatic hypoglycemia",
      "feed": "May impair safe oral intake",
      "cry": "Does not rule out hypoglycemia"
    }
  },
  {
    "id": "QR-100159",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-017",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Newborn Hypoglycemia in an At-Risk Infant",
    "caseStudyContext": {
      "id": "QR-CS-017",
      "title": "Newborn Hypoglycemia in an At-Risk Infant",
      "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Neonatal hypoglycemia",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Initiate neonatal hypoglycemia protocol and notify clinician.",
      "Assess symptoms and ability to feed safely.",
      "Prepare treatment based on symptoms and protocol.",
      "Wait until next scheduled feed.",
      "Assume jitteriness is normal."
    ],
    "correctAnswer": [
      "Initiate neonatal hypoglycemia protocol and notify clinician.",
      "Assess symptoms and ability to feed safely.",
      "Prepare treatment based on symptoms and protocol."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Neonatal hypoglycemia.",
    "optionRationales": {
      "Initiate neonatal hypoglycemia protocol and notify clinician.": "Correct priority for the current clinical threat.",
      "Assess symptoms and ability to feed safely.": "Correct priority for the current clinical threat.",
      "Prepare treatment based on symptoms and protocol.": "Correct priority for the current clinical threat.",
      "Wait until next scheduled feed.": "Not the priority; this may delay or compromise care.",
      "Assume jitteriness is normal.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Postnatal Glucose Homeostasis in Late Preterm and Term Infants",
        "publisher": "American Academy of Pediatrics",
        "url": "https://publications.aap.org/pediatrics/article/127/3/575/65084/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100159",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life.",
    "providerOrders": "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose.",
    "nursingNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "nursesNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "vitalSigns": "03:00: Jittery, weak suck, bedside glucose 28 mg/dL.",
    "diagnosticResults": "Jittery, weak suck, bedside glucose 28 mg/dL. Clinical interpretation: Symptomatic hypoglycemia; immediate protocol-based treatment.",
    "stimulus": {
      "caseGroupId": "QR-CS-017",
      "patientProfile": {
        "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
      },
      "tabs": {
        "history": [
          "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life."
        ],
        "nursesNotes": [
          "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
        ],
        "providerOrders": [
          "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose."
        ],
        "vitalSigns": [
          "03:00: Jittery, weak suck, bedside glucose 28 mg/dL."
        ],
        "labResults": [
          "Jittery, weak suck, bedside glucose 28 mg/dL. Clinical interpretation: Symptomatic hypoglycemia; immediate protocol-based treatment."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Neonatal hypoglycemia.",
      "options": {
        "Initiate neonatal hypoglycemia protocol and notify clinician.": "Correct priority for the current clinical threat.",
        "Assess symptoms and ability to feed safely.": "Correct priority for the current clinical threat.",
        "Prepare treatment based on symptoms and protocol.": "Correct priority for the current clinical threat.",
        "Wait until next scheduled feed.": "Not the priority; this may delay or compromise care.",
        "Assume jitteriness is normal.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Initiate neonatal hypoglycemia protocol and notify clinician.",
        "Assess symptoms and ability to feed safely.",
        "Prepare treatment based on symptoms and protocol.",
        "Wait until next scheduled feed.",
        "Assume jitteriness is normal."
      ],
      "answerKey": [
        "Initiate neonatal hypoglycemia protocol and notify clinician.",
        "Assess symptoms and ability to feed safely.",
        "Prepare treatment based on symptoms and protocol."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100160",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-017",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Newborn Hypoglycemia in an At-Risk Infant",
    "caseStudyContext": {
      "id": "QR-CS-017",
      "title": "Newborn Hypoglycemia in an At-Risk Infant",
      "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Neonatal hypoglycemia",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Symptomatic neonatal hypoglycemia in an infant of a diabetic mother",
      "actions": [
        "Provide protocol-directed glucose treatment; IV dextrose when indicated.",
        "Recheck glucose at protocol-defined interval and assess neurologic status."
      ],
      "monitoring": [
        "Repeat glucose and neurologic symptoms",
        "Feeding tolerance, temperature, and response to treatment"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Neonatal hypoglycemia.",
    "optionRationales": {
      "condition": "Symptomatic neonatal hypoglycemia in an infant of a diabetic mother",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Postnatal Glucose Homeostasis in Late Preterm and Term Infants",
        "publisher": "American Academy of Pediatrics",
        "url": "https://publications.aap.org/pediatrics/article/127/3/575/65084/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100160",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life.",
    "providerOrders": "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose.",
    "nursingNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "nursesNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "vitalSigns": "03:00: Jittery, weak suck, bedside glucose 28 mg/dL.",
    "diagnosticResults": "Jittery, weak suck, bedside glucose 28 mg/dL. Clinical interpretation: Symptomatic hypoglycemia; immediate protocol-based treatment.",
    "stimulus": {
      "caseGroupId": "QR-CS-017",
      "patientProfile": {
        "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
      },
      "tabs": {
        "history": [
          "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life."
        ],
        "nursesNotes": [
          "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
        ],
        "providerOrders": [
          "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose."
        ],
        "vitalSigns": [
          "03:00: Jittery, weak suck, bedside glucose 28 mg/dL."
        ],
        "labResults": [
          "Jittery, weak suck, bedside glucose 28 mg/dL. Clinical interpretation: Symptomatic hypoglycemia; immediate protocol-based treatment."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Neonatal hypoglycemia.",
      "options": {
        "condition": "Symptomatic neonatal hypoglycemia in an infant of a diabetic mother",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Symptomatic neonatal hypoglycemia in an infant of a diabetic mother",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Provide protocol-directed glucose treatment; IV dextrose when indicated.",
          "Recheck glucose at protocol-defined interval and assess neurologic status.",
          "Wait several hours before rechecking."
        ],
        "monitoring": [
          "Repeat glucose and neurologic symptoms",
          "Feeding tolerance, temperature, and response to treatment"
        ]
      },
      "answerKey": {
        "condition": "Symptomatic neonatal hypoglycemia in an infant of a diabetic mother",
        "actions": [
          "Provide protocol-directed glucose treatment; IV dextrose when indicated.",
          "Recheck glucose at protocol-defined interval and assess neurologic status."
        ],
        "monitoring": [
          "Repeat glucose and neurologic symptoms",
          "Feeding tolerance, temperature, and response to treatment"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Symptomatic neonatal hypoglycemia in an infant of a diabetic mother",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Provide protocol-directed glucose treatment; IV dextrose when indicated.",
        "Recheck glucose at protocol-defined interval and assess neurologic status.",
        "Wait several hours before rechecking."
      ],
      "monitoring": [
        "Repeat glucose and neurologic symptoms",
        "Feeding tolerance, temperature, and response to treatment"
      ]
    },
    "correctAnswers": {
      "condition": "Symptomatic neonatal hypoglycemia in an infant of a diabetic mother",
      "actions": [
        "Provide protocol-directed glucose treatment; IV dextrose when indicated.",
        "Recheck glucose at protocol-defined interval and assess neurologic status."
      ],
      "monitoring": [
        "Repeat glucose and neurologic symptoms",
        "Feeding tolerance, temperature, and response to treatment"
      ]
    }
  },
  {
    "id": "QR-100161",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-017",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Newborn Hypoglycemia in an At-Risk Infant",
    "caseStudyContext": {
      "id": "QR-CS-017",
      "title": "Newborn Hypoglycemia in an At-Risk Infant",
      "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Neonatal hypoglycemia",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Notify neonatal clinician and implement protocol.",
      "Treat promptly according to symptoms and protocol.",
      "Recheck glucose and document response.",
      "Discharge after one normal reading."
    ],
    "correctAnswer": [
      "Notify neonatal clinician and implement protocol.",
      "Treat promptly according to symptoms and protocol.",
      "Recheck glucose and document response."
    ],
    "rationale": "This item assesses take action in the context of Neonatal hypoglycemia.",
    "optionRationales": {
      "Notify neonatal clinician and implement protocol.": "Correct. This supports immediate safety and treatment.",
      "Treat promptly according to symptoms and protocol.": "Correct. This supports immediate safety and treatment.",
      "Recheck glucose and document response.": "Correct. This supports immediate safety and treatment.",
      "Discharge after one normal reading.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Postnatal Glucose Homeostasis in Late Preterm and Term Infants",
        "publisher": "American Academy of Pediatrics",
        "url": "https://publications.aap.org/pediatrics/article/127/3/575/65084/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100161",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life.",
    "providerOrders": "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose.",
    "nursingNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "nursesNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "vitalSigns": "After treatment: Glucose 55 mg/dL and jitteriness resolves.",
    "diagnosticResults": "Glucose 55 mg/dL and jitteriness resolves. Clinical interpretation: Initial response reassuring; continue repeat checks and feeding support.",
    "stimulus": {
      "caseGroupId": "QR-CS-017",
      "patientProfile": {
        "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
      },
      "tabs": {
        "history": [
          "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life."
        ],
        "nursesNotes": [
          "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
        ],
        "providerOrders": [
          "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose."
        ],
        "vitalSigns": [
          "After treatment: Glucose 55 mg/dL and jitteriness resolves."
        ],
        "labResults": [
          "Glucose 55 mg/dL and jitteriness resolves. Clinical interpretation: Initial response reassuring; continue repeat checks and feeding support."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Neonatal hypoglycemia.",
      "options": {
        "Notify neonatal clinician and implement protocol.": "Correct. This supports immediate safety and treatment.",
        "Treat promptly according to symptoms and protocol.": "Correct. This supports immediate safety and treatment.",
        "Recheck glucose and document response.": "Correct. This supports immediate safety and treatment.",
        "Discharge after one normal reading.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Notify neonatal clinician and implement protocol.",
        "Treat promptly according to symptoms and protocol.",
        "Recheck glucose and document response.",
        "Discharge after one normal reading."
      ],
      "answerKey": [
        "Notify neonatal clinician and implement protocol.",
        "Treat promptly according to symptoms and protocol.",
        "Recheck glucose and document response."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100162",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-017",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Newborn Hypoglycemia in an At-Risk Infant",
    "caseStudyContext": {
      "id": "QR-CS-017",
      "title": "Newborn Hypoglycemia in an At-Risk Infant",
      "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Neonatal hypoglycemia",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Follow screening and feeding protocol with reassessment.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Follow screening and feeding protocol with reassessment.",
    "rationale": "Infants of mothers with diabetes are at risk for neonatal hypoglycemia because fetal hyperinsulinemia persists after placental glucose delivery stops. Jitteriness, poor feeding, and glucose 28 mg/dL indicate symptomatic hypoglycemia requiring immediate protocol-based treatment and repeat checks.",
    "optionRationales": {
      "Follow screening and feeding protocol with reassessment.": "Correct. At-risk infant; screening glucose 42 mg/dL; asymptomatic. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Symptomatic hypoglycemia; immediate protocol-based treatment.": "Correct. Jittery, weak suck, bedside glucose 28 mg/dL. This interpretation matches the clinical progression.",
      "Initial response reassuring; continue repeat checks and feeding support.": "Correct. Glucose 55 mg/dL and jitteriness resolves. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Postnatal Glucose Homeostasis in Late Preterm and Term Infants",
        "publisher": "American Academy of Pediatrics",
        "url": "https://publications.aap.org/pediatrics/article/127/3/575/65084/Postnatal-Glucose-Homeostasis-in-Late-Preterm-and",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100162",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life.",
    "providerOrders": "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose.",
    "nursingNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "nursesNotes": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring.",
    "vitalSigns": "After treatment: Glucose 55 mg/dL and jitteriness resolves.",
    "diagnosticResults": "Glucose 55 mg/dL and jitteriness resolves. Clinical interpretation: Initial response reassuring; continue repeat checks and feeding support.",
    "stimulus": {
      "caseGroupId": "QR-CS-017",
      "patientProfile": {
        "summary": "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
      },
      "tabs": {
        "history": [
          "Term newborn, large for gestational age; maternal diabetes; delayed feeding; jitteriness at 2 hours of life."
        ],
        "nursesNotes": [
          "Large-for-gestational-age newborn of a diabetic mother becomes jittery and has low bedside glucose during early monitoring."
        ],
        "providerOrders": [
          "Follow neonatal hypoglycemia protocol; confirm bedside result per policy without delaying symptomatic treatment; feed, dextrose gel, or IV dextrose per symptoms and protocol; recheck glucose."
        ],
        "vitalSigns": [
          "After treatment: Glucose 55 mg/dL and jitteriness resolves."
        ],
        "labResults": [
          "Glucose 55 mg/dL and jitteriness resolves. Clinical interpretation: Initial response reassuring; continue repeat checks and feeding support."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Neonatal hypoglycemia.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Follow screening and feeding protocol with reassessment.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Follow screening and feeding protocol with reassessment.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Newborn Hypoglycemia in an At-Risk Infant — clinical progression",
      "stages": [
        {
          "time": "02:00",
          "situation": "At-risk infant; screening glucose 42 mg/dL; asymptomatic.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Follow screening and feeding protocol with reassessment.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Follow screening and feeding protocol with reassessment."
        },
        {
          "time": "03:00",
          "situation": "Jittery, weak suck, bedside glucose 28 mg/dL.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Symptomatic hypoglycemia; immediate protocol-based treatment.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Symptomatic hypoglycemia; immediate protocol-based treatment."
        },
        {
          "time": "After treatment",
          "situation": "Glucose 55 mg/dL and jitteriness resolves.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Initial response reassuring; continue repeat checks and feeding support.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Initial response reassuring; continue repeat checks and feeding support."
        }
      ]
    }
  },
  {
    "id": "QR-100163",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-018",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
    "caseStudyContext": {
      "id": "QR-CS-018",
      "title": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
      "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Ectopic pregnancy",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "pain",
      "shoulder",
      "bp"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "pain": "This cue contributes to recognition of the immediate clinical threat.",
      "shoulder": "This cue contributes to recognition of the immediate clinical threat.",
      "bp": "This cue contributes to recognition of the immediate clinical threat.",
      "spot": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Ectopic Pregnancy",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100163",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope.",
    "providerOrders": "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO.",
    "nursingNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension. Sudden unilateral pelvic pain. Shoulder-tip pain. BP 80/46 mmHg. Scant vaginal spotting.",
    "nursesNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension. Sudden unilateral pelvic pain. Shoulder-tip pain. BP 80/46 mmHg. Scant vaginal spotting.",
    "vitalSigns": "09:00: Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg.",
    "diagnosticResults": "Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg. Clinical interpretation: Urgent evaluation for ectopic pregnancy.",
    "stimulus": {
      "caseGroupId": "QR-CS-018",
      "patientProfile": {
        "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope."
        ],
        "nursesNotes": [
          "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO."
        ],
        "vitalSigns": [
          "09:00: Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg."
        ],
        "labResults": [
          "Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg. Clinical interpretation: Urgent evaluation for ectopic pregnancy."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "pain": "This cue contributes to recognition of the immediate clinical threat.",
        "shoulder": "This cue contributes to recognition of the immediate clinical threat.",
        "bp": "This cue contributes to recognition of the immediate clinical threat.",
        "spot": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "pain",
        "shoulder",
        "bp"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension. Sudden unilateral pelvic pain. Shoulder-tip pain. BP 80/46 mmHg. Scant vaginal spotting.",
    "highlightSegments": [
      {
        "id": "pain",
        "text": "Sudden unilateral pelvic pain"
      },
      {
        "id": "shoulder",
        "text": "Shoulder-tip pain"
      },
      {
        "id": "bp",
        "text": "BP 80/46 mmHg"
      },
      {
        "id": "spot",
        "text": "Scant vaginal spotting"
      }
    ],
    "correctHighlights": [
      "pain",
      "shoulder",
      "bp"
    ]
  },
  {
    "id": "QR-100164",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-018",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
    "caseStudyContext": {
      "id": "QR-CS-018",
      "title": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
      "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Ectopic pregnancy",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "pain": "Possible ectopic pregnancy complication",
      "shoulder": "Possible diaphragmatic irritation from intraperitoneal blood",
      "bp": "Hemodynamic instability",
      "spot": "Visible blood may underestimate internal hemorrhage"
    },
    "rationale": "This item assesses analyze cues in the context of Ectopic pregnancy.",
    "optionRationales": {
      "pain": "Possible ectopic pregnancy complication",
      "shoulder": "Possible diaphragmatic irritation from intraperitoneal blood",
      "bp": "Hemodynamic instability",
      "spot": "Visible blood may underestimate internal hemorrhage"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Ectopic Pregnancy",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100164",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope.",
    "providerOrders": "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO.",
    "nursingNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "nursesNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "vitalSigns": "09:00: Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg.",
    "diagnosticResults": "Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg. Clinical interpretation: Urgent evaluation for ectopic pregnancy.",
    "stimulus": {
      "caseGroupId": "QR-CS-018",
      "patientProfile": {
        "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope."
        ],
        "nursesNotes": [
          "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO."
        ],
        "vitalSigns": [
          "09:00: Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg."
        ],
        "labResults": [
          "Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg. Clinical interpretation: Urgent evaluation for ectopic pregnancy."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Ectopic pregnancy.",
      "options": {
        "pain": "Possible ectopic pregnancy complication",
        "shoulder": "Possible diaphragmatic irritation from intraperitoneal blood",
        "bp": "Hemodynamic instability",
        "spot": "Visible blood may underestimate internal hemorrhage"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "pain": [
          "Possible ectopic pregnancy complication",
          "Possible diaphragmatic irritation from intraperitoneal blood",
          "Hemodynamic instability",
          "Visible blood may underestimate internal hemorrhage"
        ],
        "shoulder": [
          "Possible ectopic pregnancy complication",
          "Possible diaphragmatic irritation from intraperitoneal blood",
          "Hemodynamic instability",
          "Visible blood may underestimate internal hemorrhage"
        ],
        "bp": [
          "Possible ectopic pregnancy complication",
          "Possible diaphragmatic irritation from intraperitoneal blood",
          "Hemodynamic instability",
          "Visible blood may underestimate internal hemorrhage"
        ],
        "spot": [
          "Possible ectopic pregnancy complication",
          "Possible diaphragmatic irritation from intraperitoneal blood",
          "Hemodynamic instability",
          "Visible blood may underestimate internal hemorrhage"
        ]
      },
      "answerKey": {
        "pain": "Possible ectopic pregnancy complication",
        "shoulder": "Possible diaphragmatic irritation from intraperitoneal blood",
        "bp": "Hemodynamic instability",
        "spot": "Visible blood may underestimate internal hemorrhage"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "pain",
        "text": "Sudden unilateral pelvic pain"
      },
      {
        "id": "shoulder",
        "text": "Shoulder-tip pain"
      },
      {
        "id": "bp",
        "text": "BP 80/46 mmHg"
      },
      {
        "id": "spot",
        "text": "Scant vaginal spotting"
      }
    ],
    "columns": [
      "Possible ectopic pregnancy complication",
      "Possible diaphragmatic irritation from intraperitoneal blood",
      "Hemodynamic instability",
      "Visible blood may underestimate internal hemorrhage"
    ],
    "correctAnswers": {
      "pain": "Possible ectopic pregnancy complication",
      "shoulder": "Possible diaphragmatic irritation from intraperitoneal blood",
      "bp": "Hemodynamic instability",
      "spot": "Visible blood may underestimate internal hemorrhage"
    }
  },
  {
    "id": "QR-100165",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-018",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
    "caseStudyContext": {
      "id": "QR-CS-018",
      "title": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
      "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Ectopic pregnancy",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Recognize possible rupture and hemorrhagic shock; activate response.",
      "Support circulation and prepare urgent surgical management.",
      "Keep NPO and establish IV access.",
      "Assume scant vaginal bleeding excludes hemorrhage.",
      "Schedule routine outpatient ultrasound."
    ],
    "correctAnswer": [
      "Recognize possible rupture and hemorrhagic shock; activate response.",
      "Support circulation and prepare urgent surgical management.",
      "Keep NPO and establish IV access."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Ectopic pregnancy.",
    "optionRationales": {
      "Recognize possible rupture and hemorrhagic shock; activate response.": "Correct priority for the current clinical threat.",
      "Support circulation and prepare urgent surgical management.": "Correct priority for the current clinical threat.",
      "Keep NPO and establish IV access.": "Correct priority for the current clinical threat.",
      "Assume scant vaginal bleeding excludes hemorrhage.": "Not the priority; this may delay or compromise care.",
      "Schedule routine outpatient ultrasound.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Ectopic Pregnancy",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100165",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope.",
    "providerOrders": "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO.",
    "nursingNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "nursesNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "vitalSigns": "09:30: Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg.",
    "diagnosticResults": "Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg. Clinical interpretation: Suspect rupture with internal hemorrhage; emergency response.",
    "stimulus": {
      "caseGroupId": "QR-CS-018",
      "patientProfile": {
        "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope."
        ],
        "nursesNotes": [
          "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO."
        ],
        "vitalSigns": [
          "09:30: Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg."
        ],
        "labResults": [
          "Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg. Clinical interpretation: Suspect rupture with internal hemorrhage; emergency response."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Ectopic pregnancy.",
      "options": {
        "Recognize possible rupture and hemorrhagic shock; activate response.": "Correct priority for the current clinical threat.",
        "Support circulation and prepare urgent surgical management.": "Correct priority for the current clinical threat.",
        "Keep NPO and establish IV access.": "Correct priority for the current clinical threat.",
        "Assume scant vaginal bleeding excludes hemorrhage.": "Not the priority; this may delay or compromise care.",
        "Schedule routine outpatient ultrasound.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Recognize possible rupture and hemorrhagic shock; activate response.",
        "Support circulation and prepare urgent surgical management.",
        "Keep NPO and establish IV access.",
        "Assume scant vaginal bleeding excludes hemorrhage.",
        "Schedule routine outpatient ultrasound."
      ],
      "answerKey": [
        "Recognize possible rupture and hemorrhagic shock; activate response.",
        "Support circulation and prepare urgent surgical management.",
        "Keep NPO and establish IV access."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100166",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-018",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
    "caseStudyContext": {
      "id": "QR-CS-018",
      "title": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
      "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Ectopic pregnancy",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Ruptured ectopic pregnancy with suspected intra-abdominal hemorrhage",
      "actions": [
        "Prepare urgent surgery and blood-product resuscitation as prescribed.",
        "Support circulation, IV access, and hemodynamic monitoring."
      ],
      "monitoring": [
        "Blood pressure, heart rate, mental status, and ongoing hemorrhage",
        "Hemoglobin, type and crossmatch, and resuscitation response"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Ectopic pregnancy.",
    "optionRationales": {
      "condition": "Ruptured ectopic pregnancy with suspected intra-abdominal hemorrhage",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Ectopic Pregnancy",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100166",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope.",
    "providerOrders": "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO.",
    "nursingNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "nursesNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "vitalSigns": "09:30: Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg.",
    "diagnosticResults": "Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg. Clinical interpretation: Suspect rupture with internal hemorrhage; emergency response.",
    "stimulus": {
      "caseGroupId": "QR-CS-018",
      "patientProfile": {
        "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope."
        ],
        "nursesNotes": [
          "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO."
        ],
        "vitalSigns": [
          "09:30: Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg."
        ],
        "labResults": [
          "Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg. Clinical interpretation: Suspect rupture with internal hemorrhage; emergency response."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Ectopic pregnancy.",
      "options": {
        "condition": "Ruptured ectopic pregnancy with suspected intra-abdominal hemorrhage",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Ruptured ectopic pregnancy with suspected intra-abdominal hemorrhage",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Prepare urgent surgery and blood-product resuscitation as prescribed.",
          "Support circulation, IV access, and hemodynamic monitoring.",
          "Use methotrexate as sole treatment despite shock."
        ],
        "monitoring": [
          "Blood pressure, heart rate, mental status, and ongoing hemorrhage",
          "Hemoglobin, type and crossmatch, and resuscitation response"
        ]
      },
      "answerKey": {
        "condition": "Ruptured ectopic pregnancy with suspected intra-abdominal hemorrhage",
        "actions": [
          "Prepare urgent surgery and blood-product resuscitation as prescribed.",
          "Support circulation, IV access, and hemodynamic monitoring."
        ],
        "monitoring": [
          "Blood pressure, heart rate, mental status, and ongoing hemorrhage",
          "Hemoglobin, type and crossmatch, and resuscitation response"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Ruptured ectopic pregnancy with suspected intra-abdominal hemorrhage",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Prepare urgent surgery and blood-product resuscitation as prescribed.",
        "Support circulation, IV access, and hemodynamic monitoring.",
        "Use methotrexate as sole treatment despite shock."
      ],
      "monitoring": [
        "Blood pressure, heart rate, mental status, and ongoing hemorrhage",
        "Hemoglobin, type and crossmatch, and resuscitation response"
      ]
    },
    "correctAnswers": {
      "condition": "Ruptured ectopic pregnancy with suspected intra-abdominal hemorrhage",
      "actions": [
        "Prepare urgent surgery and blood-product resuscitation as prescribed.",
        "Support circulation, IV access, and hemodynamic monitoring."
      ],
      "monitoring": [
        "Blood pressure, heart rate, mental status, and ongoing hemorrhage",
        "Hemoglobin, type and crossmatch, and resuscitation response"
      ]
    }
  },
  {
    "id": "QR-100167",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-018",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
    "caseStudyContext": {
      "id": "QR-CS-018",
      "title": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
      "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Ectopic pregnancy",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Activate emergency obstetric and surgical response.",
      "Maintain NPO and establish IV access.",
      "Prepare urgent operative management and blood products.",
      "Delay escalation because vaginal bleeding is scant."
    ],
    "correctAnswer": [
      "Activate emergency obstetric and surgical response.",
      "Maintain NPO and establish IV access.",
      "Prepare urgent operative management and blood products."
    ],
    "rationale": "This item assesses take action in the context of Ectopic pregnancy.",
    "optionRationales": {
      "Activate emergency obstetric and surgical response.": "Correct. This supports immediate safety and treatment.",
      "Maintain NPO and establish IV access.": "Correct. This supports immediate safety and treatment.",
      "Prepare urgent operative management and blood products.": "Correct. This supports immediate safety and treatment.",
      "Delay escalation because vaginal bleeding is scant.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Ectopic Pregnancy",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100167",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope.",
    "providerOrders": "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO.",
    "nursingNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "nursesNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "vitalSigns": "After surgery: BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation.",
    "diagnosticResults": "BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation. Clinical interpretation: Hemodynamic stabilization; continue postoperative surveillance.",
    "stimulus": {
      "caseGroupId": "QR-CS-018",
      "patientProfile": {
        "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope."
        ],
        "nursesNotes": [
          "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO."
        ],
        "vitalSigns": [
          "After surgery: BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation."
        ],
        "labResults": [
          "BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation. Clinical interpretation: Hemodynamic stabilization; continue postoperative surveillance."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Ectopic pregnancy.",
      "options": {
        "Activate emergency obstetric and surgical response.": "Correct. This supports immediate safety and treatment.",
        "Maintain NPO and establish IV access.": "Correct. This supports immediate safety and treatment.",
        "Prepare urgent operative management and blood products.": "Correct. This supports immediate safety and treatment.",
        "Delay escalation because vaginal bleeding is scant.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Activate emergency obstetric and surgical response.",
        "Maintain NPO and establish IV access.",
        "Prepare urgent operative management and blood products.",
        "Delay escalation because vaginal bleeding is scant."
      ],
      "answerKey": [
        "Activate emergency obstetric and surgical response.",
        "Maintain NPO and establish IV access.",
        "Prepare urgent operative management and blood products."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100168",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-018",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
    "caseStudyContext": {
      "id": "QR-CS-018",
      "title": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock",
      "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Ectopic pregnancy",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Urgent evaluation for ectopic pregnancy.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Urgent evaluation for ectopic pregnancy.",
    "rationale": "Unilateral pelvic pain and spotting in early pregnancy require evaluation for ectopic pregnancy. Shoulder-tip pain, pallor, near-syncope, and hypotension suggest rupture with intraperitoneal bleeding. Surgery and resuscitation may restore stability, but postoperative perfusion and bleeding require surveillance.",
    "optionRationales": {
      "Urgent evaluation for ectopic pregnancy.": "Correct. Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Suspect rupture with internal hemorrhage; emergency response.": "Correct. Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg. This interpretation matches the clinical progression.",
      "Hemodynamic stabilization; continue postoperative surveillance.": "Correct. BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Ectopic Pregnancy",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/womens-health/faqs/ectopic-pregnancy",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100168",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope.",
    "providerOrders": "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO.",
    "nursingNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "nursesNotes": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension.",
    "vitalSigns": "After surgery: BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation.",
    "diagnosticResults": "BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation. Clinical interpretation: Hemodynamic stabilization; continue postoperative surveillance.",
    "stimulus": {
      "caseGroupId": "QR-CS-018",
      "patientProfile": {
        "summary": "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
      },
      "tabs": {
        "history": [
          "Positive pregnancy test; no confirmed intrauterine pregnancy; sudden worsening pain and near-syncope."
        ],
        "nursesNotes": [
          "29-year-old with 7 weeks amenorrhea presents with unilateral pelvic pain, shoulder-tip pain, dizziness, and hypotension."
        ],
        "providerOrders": [
          "Emergency obstetric response; IV access; blood products and urgent surgical evaluation; hemodynamic monitoring; NPO."
        ],
        "vitalSigns": [
          "After surgery: BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation."
        ],
        "labResults": [
          "BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation. Clinical interpretation: Hemodynamic stabilization; continue postoperative surveillance."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Ectopic pregnancy.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Urgent evaluation for ectopic pregnancy.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Urgent evaluation for ectopic pregnancy.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Ruptured Ectopic Pregnancy With Hemorrhagic Shock — clinical progression",
      "stages": [
        {
          "time": "09:00",
          "situation": "Positive pregnancy test, unilateral pain, scant spotting, BP 108/68 mmHg.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Urgent evaluation for ectopic pregnancy.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Urgent evaluation for ectopic pregnancy."
        },
        {
          "time": "09:30",
          "situation": "Shoulder-tip pain, pallor, near-syncope, BP 80/46 mmHg.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Suspect rupture with internal hemorrhage; emergency response.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Suspect rupture with internal hemorrhage; emergency response."
        },
        {
          "time": "After surgery",
          "situation": "BP 110/70 mmHg, alert, pain reduced after surgery and resuscitation.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Hemodynamic stabilization; continue postoperative surveillance.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Hemodynamic stabilization; continue postoperative surveillance."
        }
      ]
    }
  },
  {
    "id": "QR-100169",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-019",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Postpartum Endometritis Progressing to Sepsis",
    "caseStudyContext": {
      "id": "QR-CS-019",
      "title": "Postpartum Endometritis Progressing to Sepsis",
      "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Postpartum endometritis and sepsis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "fever",
      "uterus",
      "lochia"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "fever": "This cue contributes to recognition of the immediate clinical threat.",
      "uterus": "This cue contributes to recognition of the immediate clinical threat.",
      "lochia": "This cue contributes to recognition of the immediate clinical threat.",
      "milk": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Postpartum Endometritis",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-endometritis",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100169",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia.",
    "providerOrders": "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics.",
    "nursingNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia. Temperature 39.2°C. Fundal tenderness. Foul-smelling lochia. Breast fullness without erythema.",
    "nursesNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia. Temperature 39.2°C. Fundal tenderness. Foul-smelling lochia. Breast fullness without erythema.",
    "vitalSigns": "07:00: Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia.",
    "diagnosticResults": "Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia. Clinical interpretation: Suspect endometritis; promptly notify provider.",
    "stimulus": {
      "caseGroupId": "QR-CS-019",
      "patientProfile": {
        "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
      },
      "tabs": {
        "history": [
          "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia."
        ],
        "nursesNotes": [
          "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
        ],
        "providerOrders": [
          "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics."
        ],
        "vitalSigns": [
          "07:00: Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia."
        ],
        "labResults": [
          "Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia. Clinical interpretation: Suspect endometritis; promptly notify provider."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "fever": "This cue contributes to recognition of the immediate clinical threat.",
        "uterus": "This cue contributes to recognition of the immediate clinical threat.",
        "lochia": "This cue contributes to recognition of the immediate clinical threat.",
        "milk": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "fever",
        "uterus",
        "lochia"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia. Temperature 39.2°C. Fundal tenderness. Foul-smelling lochia. Breast fullness without erythema.",
    "highlightSegments": [
      {
        "id": "fever",
        "text": "Temperature 39.2°C"
      },
      {
        "id": "uterus",
        "text": "Fundal tenderness"
      },
      {
        "id": "lochia",
        "text": "Foul-smelling lochia"
      },
      {
        "id": "milk",
        "text": "Breast fullness without erythema"
      }
    ],
    "correctHighlights": [
      "fever",
      "uterus",
      "lochia"
    ]
  },
  {
    "id": "QR-100170",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-019",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Postpartum Endometritis Progressing to Sepsis",
    "caseStudyContext": {
      "id": "QR-CS-019",
      "title": "Postpartum Endometritis Progressing to Sepsis",
      "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Postpartum endometritis and sepsis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "fever": "Systemic infection cue",
      "uterus": "Supports uterine infection",
      "lochia": "Supports postpartum endometritis",
      "milk": "Not the leading source suggested by this pattern"
    },
    "rationale": "This item assesses analyze cues in the context of Postpartum endometritis and sepsis.",
    "optionRationales": {
      "fever": "Systemic infection cue",
      "uterus": "Supports uterine infection",
      "lochia": "Supports postpartum endometritis",
      "milk": "Not the leading source suggested by this pattern"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Postpartum Endometritis",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-endometritis",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100170",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia.",
    "providerOrders": "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics.",
    "nursingNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "nursesNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "vitalSigns": "07:00: Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia.",
    "diagnosticResults": "Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia. Clinical interpretation: Suspect endometritis; promptly notify provider.",
    "stimulus": {
      "caseGroupId": "QR-CS-019",
      "patientProfile": {
        "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
      },
      "tabs": {
        "history": [
          "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia."
        ],
        "nursesNotes": [
          "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
        ],
        "providerOrders": [
          "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics."
        ],
        "vitalSigns": [
          "07:00: Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia."
        ],
        "labResults": [
          "Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia. Clinical interpretation: Suspect endometritis; promptly notify provider."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Postpartum endometritis and sepsis.",
      "options": {
        "fever": "Systemic infection cue",
        "uterus": "Supports uterine infection",
        "lochia": "Supports postpartum endometritis",
        "milk": "Not the leading source suggested by this pattern"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "fever": [
          "Systemic infection cue",
          "Supports uterine infection",
          "Supports postpartum endometritis",
          "Not the leading source suggested by this pattern"
        ],
        "uterus": [
          "Systemic infection cue",
          "Supports uterine infection",
          "Supports postpartum endometritis",
          "Not the leading source suggested by this pattern"
        ],
        "lochia": [
          "Systemic infection cue",
          "Supports uterine infection",
          "Supports postpartum endometritis",
          "Not the leading source suggested by this pattern"
        ],
        "milk": [
          "Systemic infection cue",
          "Supports uterine infection",
          "Supports postpartum endometritis",
          "Not the leading source suggested by this pattern"
        ]
      },
      "answerKey": {
        "fever": "Systemic infection cue",
        "uterus": "Supports uterine infection",
        "lochia": "Supports postpartum endometritis",
        "milk": "Not the leading source suggested by this pattern"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "fever",
        "text": "Temperature 39.2°C"
      },
      {
        "id": "uterus",
        "text": "Fundal tenderness"
      },
      {
        "id": "lochia",
        "text": "Foul-smelling lochia"
      },
      {
        "id": "milk",
        "text": "Breast fullness without erythema"
      }
    ],
    "columns": [
      "Systemic infection cue",
      "Supports uterine infection",
      "Supports postpartum endometritis",
      "Not the leading source suggested by this pattern"
    ],
    "correctAnswers": {
      "fever": "Systemic infection cue",
      "uterus": "Supports uterine infection",
      "lochia": "Supports postpartum endometritis",
      "milk": "Not the leading source suggested by this pattern"
    }
  },
  {
    "id": "QR-100171",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-019",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Postpartum Endometritis Progressing to Sepsis",
    "caseStudyContext": {
      "id": "QR-CS-019",
      "title": "Postpartum Endometritis Progressing to Sepsis",
      "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Postpartum endometritis and sepsis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Recognize postpartum uterine infection and possible systemic progression.",
      "Notify obstetric team and obtain ordered cultures promptly.",
      "Prepare prescribed IV antibiotics and fluid resuscitation.",
      "Wait for all cultures before antibiotics.",
      "Recommend tampons."
    ],
    "correctAnswer": [
      "Recognize postpartum uterine infection and possible systemic progression.",
      "Notify obstetric team and obtain ordered cultures promptly.",
      "Prepare prescribed IV antibiotics and fluid resuscitation."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Postpartum endometritis and sepsis.",
    "optionRationales": {
      "Recognize postpartum uterine infection and possible systemic progression.": "Correct priority for the current clinical threat.",
      "Notify obstetric team and obtain ordered cultures promptly.": "Correct priority for the current clinical threat.",
      "Prepare prescribed IV antibiotics and fluid resuscitation.": "Correct priority for the current clinical threat.",
      "Wait for all cultures before antibiotics.": "Not the priority; this may delay or compromise care.",
      "Recommend tampons.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Postpartum Endometritis",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-endometritis",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100171",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia.",
    "providerOrders": "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics.",
    "nursingNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "nursesNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "vitalSigns": "08:00: Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L.",
    "diagnosticResults": "Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L. Clinical interpretation: Possible sepsis with impaired perfusion; urgent escalation.",
    "stimulus": {
      "caseGroupId": "QR-CS-019",
      "patientProfile": {
        "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
      },
      "tabs": {
        "history": [
          "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia."
        ],
        "nursesNotes": [
          "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
        ],
        "providerOrders": [
          "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics."
        ],
        "vitalSigns": [
          "08:00: Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L."
        ],
        "labResults": [
          "Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L. Clinical interpretation: Possible sepsis with impaired perfusion; urgent escalation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Postpartum endometritis and sepsis.",
      "options": {
        "Recognize postpartum uterine infection and possible systemic progression.": "Correct priority for the current clinical threat.",
        "Notify obstetric team and obtain ordered cultures promptly.": "Correct priority for the current clinical threat.",
        "Prepare prescribed IV antibiotics and fluid resuscitation.": "Correct priority for the current clinical threat.",
        "Wait for all cultures before antibiotics.": "Not the priority; this may delay or compromise care.",
        "Recommend tampons.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Recognize postpartum uterine infection and possible systemic progression.",
        "Notify obstetric team and obtain ordered cultures promptly.",
        "Prepare prescribed IV antibiotics and fluid resuscitation.",
        "Wait for all cultures before antibiotics.",
        "Recommend tampons."
      ],
      "answerKey": [
        "Recognize postpartum uterine infection and possible systemic progression.",
        "Notify obstetric team and obtain ordered cultures promptly.",
        "Prepare prescribed IV antibiotics and fluid resuscitation."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100172",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-019",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Postpartum Endometritis Progressing to Sepsis",
    "caseStudyContext": {
      "id": "QR-CS-019",
      "title": "Postpartum Endometritis Progressing to Sepsis",
      "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Postpartum endometritis and sepsis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Postpartum endometritis with possible sepsis",
      "actions": [
        "Obtain ordered cultures promptly without delaying time-critical antibiotics.",
        "Administer prescribed IV broad-spectrum antibiotics and fluids."
      ],
      "monitoring": [
        "Temperature, heart rate, blood pressure, lactate, and urine output",
        "Uterine tenderness, lochia, and antibiotic response"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Postpartum endometritis and sepsis.",
    "optionRationales": {
      "condition": "Postpartum endometritis with possible sepsis",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Postpartum Endometritis",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-endometritis",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100172",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia.",
    "providerOrders": "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics.",
    "nursingNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "nursesNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "vitalSigns": "08:00: Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L.",
    "diagnosticResults": "Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L. Clinical interpretation: Possible sepsis with impaired perfusion; urgent escalation.",
    "stimulus": {
      "caseGroupId": "QR-CS-019",
      "patientProfile": {
        "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
      },
      "tabs": {
        "history": [
          "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia."
        ],
        "nursesNotes": [
          "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
        ],
        "providerOrders": [
          "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics."
        ],
        "vitalSigns": [
          "08:00: Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L."
        ],
        "labResults": [
          "Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L. Clinical interpretation: Possible sepsis with impaired perfusion; urgent escalation."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Postpartum endometritis and sepsis.",
      "options": {
        "condition": "Postpartum endometritis with possible sepsis",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Postpartum endometritis with possible sepsis",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Obtain ordered cultures promptly without delaying time-critical antibiotics.",
          "Administer prescribed IV broad-spectrum antibiotics and fluids.",
          "Monitor urine output, perfusion, and response."
        ],
        "monitoring": [
          "Temperature, heart rate, blood pressure, lactate, and urine output",
          "Uterine tenderness, lochia, and antibiotic response"
        ]
      },
      "answerKey": {
        "condition": "Postpartum endometritis with possible sepsis",
        "actions": [
          "Obtain ordered cultures promptly without delaying time-critical antibiotics.",
          "Administer prescribed IV broad-spectrum antibiotics and fluids."
        ],
        "monitoring": [
          "Temperature, heart rate, blood pressure, lactate, and urine output",
          "Uterine tenderness, lochia, and antibiotic response"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Postpartum endometritis with possible sepsis",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Obtain ordered cultures promptly without delaying time-critical antibiotics.",
        "Administer prescribed IV broad-spectrum antibiotics and fluids.",
        "Monitor urine output, perfusion, and response."
      ],
      "monitoring": [
        "Temperature, heart rate, blood pressure, lactate, and urine output",
        "Uterine tenderness, lochia, and antibiotic response"
      ]
    },
    "correctAnswers": {
      "condition": "Postpartum endometritis with possible sepsis",
      "actions": [
        "Obtain ordered cultures promptly without delaying time-critical antibiotics.",
        "Administer prescribed IV broad-spectrum antibiotics and fluids."
      ],
      "monitoring": [
        "Temperature, heart rate, blood pressure, lactate, and urine output",
        "Uterine tenderness, lochia, and antibiotic response"
      ]
    }
  },
  {
    "id": "QR-100173",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-019",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Postpartum Endometritis Progressing to Sepsis",
    "caseStudyContext": {
      "id": "QR-CS-019",
      "title": "Postpartum Endometritis Progressing to Sepsis",
      "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Postpartum endometritis and sepsis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Notify obstetric team and activate sepsis pathway if indicated.",
      "Obtain ordered cultures and lactate promptly.",
      "Administer prescribed IV antibiotics and fluids.",
      "Discharge because postpartum fever is expected."
    ],
    "correctAnswer": [
      "Notify obstetric team and activate sepsis pathway if indicated.",
      "Obtain ordered cultures and lactate promptly.",
      "Administer prescribed IV antibiotics and fluids."
    ],
    "rationale": "This item assesses take action in the context of Postpartum endometritis and sepsis.",
    "optionRationales": {
      "Notify obstetric team and activate sepsis pathway if indicated.": "Correct. This supports immediate safety and treatment.",
      "Obtain ordered cultures and lactate promptly.": "Correct. This supports immediate safety and treatment.",
      "Administer prescribed IV antibiotics and fluids.": "Correct. This supports immediate safety and treatment.",
      "Discharge because postpartum fever is expected.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Postpartum Endometritis",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-endometritis",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100173",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia.",
    "providerOrders": "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics.",
    "nursingNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "nursesNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "vitalSigns": "After treatment: BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving.",
    "diagnosticResults": "BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving. Clinical interpretation: Improving response; continue antibiotics and monitor.",
    "stimulus": {
      "caseGroupId": "QR-CS-019",
      "patientProfile": {
        "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
      },
      "tabs": {
        "history": [
          "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia."
        ],
        "nursesNotes": [
          "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
        ],
        "providerOrders": [
          "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics."
        ],
        "vitalSigns": [
          "After treatment: BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving."
        ],
        "labResults": [
          "BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving. Clinical interpretation: Improving response; continue antibiotics and monitor."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Postpartum endometritis and sepsis.",
      "options": {
        "Notify obstetric team and activate sepsis pathway if indicated.": "Correct. This supports immediate safety and treatment.",
        "Obtain ordered cultures and lactate promptly.": "Correct. This supports immediate safety and treatment.",
        "Administer prescribed IV antibiotics and fluids.": "Correct. This supports immediate safety and treatment.",
        "Discharge because postpartum fever is expected.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Notify obstetric team and activate sepsis pathway if indicated.",
        "Obtain ordered cultures and lactate promptly.",
        "Administer prescribed IV antibiotics and fluids.",
        "Discharge because postpartum fever is expected."
      ],
      "answerKey": [
        "Notify obstetric team and activate sepsis pathway if indicated.",
        "Obtain ordered cultures and lactate promptly.",
        "Administer prescribed IV antibiotics and fluids."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100174",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-019",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Postpartum Endometritis Progressing to Sepsis",
    "caseStudyContext": {
      "id": "QR-CS-019",
      "title": "Postpartum Endometritis Progressing to Sepsis",
      "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Maternal-Newborn Nursing",
    "topic": "Postpartum endometritis and sepsis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Suspect endometritis; promptly notify provider.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Suspect endometritis; promptly notify provider.",
    "rationale": "Postpartum fever, uterine tenderness, and foul lochia suggest endometritis. Worsening fever, tachycardia, hypotension, and elevated lactate suggest progression to sepsis with impaired perfusion. Improvement in hemodynamics and urine output indicates response to treatment.",
    "optionRationales": {
      "Suspect endometritis; promptly notify provider.": "Correct. Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Possible sepsis with impaired perfusion; urgent escalation.": "Correct. Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L. This interpretation matches the clinical progression.",
      "Improving response; continue antibiotics and monitor.": "Correct. BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Postpartum Endometritis",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/gynecology-and-obstetrics/postpartum-care-and-associated-disorders/postpartum-endometritis",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100174",
      "category": "Maternal-Newborn Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia.",
    "providerOrders": "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics.",
    "nursingNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "nursesNotes": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia.",
    "vitalSigns": "After treatment: BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving.",
    "diagnosticResults": "BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving. Clinical interpretation: Improving response; continue antibiotics and monitor.",
    "stimulus": {
      "caseGroupId": "QR-CS-019",
      "patientProfile": {
        "summary": "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
      },
      "tabs": {
        "history": [
          "Cesarean birth 3 days ago; prolonged rupture of membranes; lower abdominal pain, chills, and malodorous lochia."
        ],
        "nursesNotes": [
          "32-year-old on postpartum day 3 after cesarean birth develops fever, uterine tenderness, foul lochia, and tachycardia."
        ],
        "providerOrders": [
          "Notify obstetric team; obtain ordered cultures and lactate; prescribed broad-spectrum IV antibiotics and fluids; monitor urine output and hemodynamics."
        ],
        "vitalSigns": [
          "After treatment: BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving."
        ],
        "labResults": [
          "BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving. Clinical interpretation: Improving response; continue antibiotics and monitor."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Postpartum endometritis and sepsis.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Suspect endometritis; promptly notify provider.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Suspect endometritis; promptly notify provider.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Postpartum Endometritis Progressing to Sepsis — clinical progression",
      "stages": [
        {
          "time": "07:00",
          "situation": "Postpartum day 3; temperature 38.1°C, uterine tenderness, malodorous lochia.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Suspect endometritis; promptly notify provider.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Suspect endometritis; promptly notify provider."
        },
        {
          "time": "08:00",
          "situation": "Temperature 39.2°C, HR 126/min, BP 90/54 mmHg, lactate 3.5 mmol/L.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Possible sepsis with impaired perfusion; urgent escalation.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Possible sepsis with impaired perfusion; urgent escalation."
        },
        {
          "time": "After treatment",
          "situation": "BP 112/68 mmHg, HR 96/min, temperature decreasing, urine output improving.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Improving response; continue antibiotics and monitor.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Improving response; continue antibiotics and monitor."
        }
      ]
    }
  },
  {
    "id": "QR-100175",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-020",
    "caseQuestionNumber": 1,
    "caseStudySequence": 1,
    "caseTitle": "Suicide Risk Assessment and Immediate Safety Planning",
    "caseStudyContext": {
      "id": "QR-CS-020",
      "title": "Suicide Risk Assessment and Immediate Safety Planning",
      "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
      "stepIndex": 1,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk and therapeutic safety",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Highlight",
    "question": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
    "options": [],
    "correctAnswer": [
      "plan",
      "means",
      "withdraw"
    ],
    "rationale": "Select the assessment findings that support recognition of the immediate clinical threat.",
    "optionRationales": {
      "plan": "This cue contributes to recognition of the immediate clinical threat.",
      "means": "This cue contributes to recognition of the immediate clinical threat.",
      "withdraw": "This cue contributes to recognition of the immediate clinical threat.",
      "support": "This finding is less specific or not the priority cue."
    },
    "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding.",
    "sourceReferences": [
      {
        "title": "Suicide Prevention",
        "publisher": "National Institute of Mental Health",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100175",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "history": "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required.",
    "providerOrders": "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition.",
    "nursingNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live. Current suicidal thoughts with a specific plan. Access to means identified in plan. Marked social withdrawal. Identifies trusted support.",
    "nursesNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live. Current suicidal thoughts with a specific plan. Access to means identified in plan. Marked social withdrawal. Identifies trusted support.",
    "vitalSigns": "13:00: Client expresses hopelessness but has not answered direct questions about intent or plan.",
    "diagnosticResults": "Client expresses hopelessness but has not answered direct questions about intent or plan. Clinical interpretation: Ask directly and compassionately about thoughts, intent, plan, and access to means.",
    "stimulus": {
      "caseGroupId": "QR-CS-020",
      "patientProfile": {
        "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
      },
      "tabs": {
        "history": [
          "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required."
        ],
        "nursesNotes": [
          "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
        ],
        "providerOrders": [
          "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition."
        ],
        "vitalSigns": [
          "13:00: Client expresses hopelessness but has not answered direct questions about intent or plan."
        ],
        "labResults": [
          "Client expresses hopelessness but has not answered direct questions about intent or plan. Clinical interpretation: Ask directly and compassionately about thoughts, intent, plan, and access to means."
        ]
      }
    },
    "rationales": {
      "overall": "Select the assessment findings that support recognition of the immediate clinical threat.",
      "options": {
        "plan": "This cue contributes to recognition of the immediate clinical threat.",
        "means": "This cue contributes to recognition of the immediate clinical threat.",
        "withdraw": "This cue contributes to recognition of the immediate clinical threat.",
        "support": "This finding is less specific or not the priority cue."
      },
      "clinicalJudgmentTip": "Recognize the cue cluster rather than relying on one isolated finding."
    },
    "interaction": {
      "type": "Highlight",
      "stem": "Review the nursing note. Highlight the cues that most strongly indicate the immediate clinical threat.",
      "options": [],
      "answerKey": [
        "plan",
        "means",
        "withdraw"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "highlightText": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live. Current suicidal thoughts with a specific plan. Access to means identified in plan. Marked social withdrawal. Identifies trusted support.",
    "highlightSegments": [
      {
        "id": "plan",
        "text": "Current suicidal thoughts with a specific plan"
      },
      {
        "id": "means",
        "text": "Access to means identified in plan"
      },
      {
        "id": "withdraw",
        "text": "Marked social withdrawal"
      },
      {
        "id": "support",
        "text": "Identifies trusted support"
      }
    ],
    "correctHighlights": [
      "plan",
      "means",
      "withdraw"
    ]
  },
  {
    "id": "QR-100176",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-020",
    "caseQuestionNumber": 2,
    "caseStudySequence": 2,
    "caseTitle": "Suicide Risk Assessment and Immediate Safety Planning",
    "caseStudyContext": {
      "id": "QR-CS-020",
      "title": "Suicide Risk Assessment and Immediate Safety Planning",
      "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
      "stepIndex": 2,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk and therapeutic safety",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Matrix Single",
    "question": "For each finding, select the interpretation that best fits this client's condition.",
    "options": {},
    "correctAnswer": {
      "plan": "High-acuity risk cue requiring immediate assessment",
      "means": "Increases immediate safety concern",
      "withdraw": "Relevant risk cue",
      "support": "Potential protective factor, not a reason to dismiss risk"
    },
    "rationale": "This item assesses analyze cues in the context of Suicide risk and therapeutic safety.",
    "optionRationales": {
      "plan": "High-acuity risk cue requiring immediate assessment",
      "means": "Increases immediate safety concern",
      "withdraw": "Relevant risk cue",
      "support": "Potential protective factor, not a reason to dismiss risk"
    },
    "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity.",
    "sourceReferences": [
      {
        "title": "Suicide Prevention",
        "publisher": "National Institute of Mental Health",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100176",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "history": "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required.",
    "providerOrders": "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition.",
    "nursingNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "nursesNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "vitalSigns": "13:00: Client expresses hopelessness but has not answered direct questions about intent or plan.",
    "diagnosticResults": "Client expresses hopelessness but has not answered direct questions about intent or plan. Clinical interpretation: Ask directly and compassionately about thoughts, intent, plan, and access to means.",
    "stimulus": {
      "caseGroupId": "QR-CS-020",
      "patientProfile": {
        "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
      },
      "tabs": {
        "history": [
          "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required."
        ],
        "nursesNotes": [
          "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
        ],
        "providerOrders": [
          "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition."
        ],
        "vitalSigns": [
          "13:00: Client expresses hopelessness but has not answered direct questions about intent or plan."
        ],
        "labResults": [
          "Client expresses hopelessness but has not answered direct questions about intent or plan. Clinical interpretation: Ask directly and compassionately about thoughts, intent, plan, and access to means."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses analyze cues in the context of Suicide risk and therapeutic safety.",
      "options": {
        "plan": "High-acuity risk cue requiring immediate assessment",
        "means": "Increases immediate safety concern",
        "withdraw": "Relevant risk cue",
        "support": "Potential protective factor, not a reason to dismiss risk"
      },
      "clinicalJudgmentTip": "Connect each finding to pathophysiology and current acuity."
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "For each finding, select the interpretation that best fits this client's condition.",
      "options": {
        "plan": [
          "High-acuity risk cue requiring immediate assessment",
          "Increases immediate safety concern",
          "Relevant risk cue",
          "Potential protective factor, not a reason to dismiss risk"
        ],
        "means": [
          "High-acuity risk cue requiring immediate assessment",
          "Increases immediate safety concern",
          "Relevant risk cue",
          "Potential protective factor, not a reason to dismiss risk"
        ],
        "withdraw": [
          "High-acuity risk cue requiring immediate assessment",
          "Increases immediate safety concern",
          "Relevant risk cue",
          "Potential protective factor, not a reason to dismiss risk"
        ],
        "support": [
          "High-acuity risk cue requiring immediate assessment",
          "Increases immediate safety concern",
          "Relevant risk cue",
          "Potential protective factor, not a reason to dismiss risk"
        ]
      },
      "answerKey": {
        "plan": "High-acuity risk cue requiring immediate assessment",
        "means": "Increases immediate safety concern",
        "withdraw": "Relevant risk cue",
        "support": "Potential protective factor, not a reason to dismiss risk"
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "matrixLeftPane": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "matrixTask": "Classify each clinical finding.",
    "rows": [
      {
        "id": "plan",
        "text": "Current suicidal thoughts with a specific plan"
      },
      {
        "id": "means",
        "text": "Access to means identified in plan"
      },
      {
        "id": "withdraw",
        "text": "Marked social withdrawal"
      },
      {
        "id": "support",
        "text": "Identifies trusted support"
      }
    ],
    "columns": [
      "High-acuity risk cue requiring immediate assessment",
      "Increases immediate safety concern",
      "Relevant risk cue",
      "Potential protective factor, not a reason to dismiss risk"
    ],
    "correctAnswers": {
      "plan": "High-acuity risk cue requiring immediate assessment",
      "means": "Increases immediate safety concern",
      "withdraw": "Relevant risk cue",
      "support": "Potential protective factor, not a reason to dismiss risk"
    }
  },
  {
    "id": "QR-100177",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-020",
    "caseQuestionNumber": 3,
    "caseStudySequence": 3,
    "caseTitle": "Suicide Risk Assessment and Immediate Safety Planning",
    "caseStudyContext": {
      "id": "QR-CS-020",
      "title": "Suicide Risk Assessment and Immediate Safety Planning",
      "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
      "stepIndex": 3,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk and therapeutic safety",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which THREE nursing priorities should be addressed first? Select 3.",
    "options": [
      "Maintain immediate safety and observation based on risk and policy.",
      "Ask directly about thoughts, plan, intent, and access to means.",
      "Arrange urgent behavioral health evaluation and collaborative safety planning.",
      "Promise absolute secrecy.",
      "Leave client alone for routine follow-up."
    ],
    "correctAnswer": [
      "Maintain immediate safety and observation based on risk and policy.",
      "Ask directly about thoughts, plan, intent, and access to means.",
      "Arrange urgent behavioral health evaluation and collaborative safety planning."
    ],
    "rationale": "This item assesses prioritize hypotheses in the context of Suicide risk and therapeutic safety.",
    "optionRationales": {
      "Maintain immediate safety and observation based on risk and policy.": "Correct priority for the current clinical threat.",
      "Ask directly about thoughts, plan, intent, and access to means.": "Correct priority for the current clinical threat.",
      "Arrange urgent behavioral health evaluation and collaborative safety planning.": "Correct priority for the current clinical threat.",
      "Promise absolute secrecy.": "Not the priority; this may delay or compromise care.",
      "Leave client alone for routine follow-up.": "Not the priority; this may delay or compromise care."
    },
    "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care.",
    "sourceReferences": [
      {
        "title": "Suicide Prevention",
        "publisher": "National Institute of Mental Health",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100177",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "history": "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required.",
    "providerOrders": "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition.",
    "nursingNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "nursesNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "vitalSigns": "13:20: Client confirms current suicidal thoughts, a specific plan, and access to means.",
    "diagnosticResults": "Client confirms current suicidal thoughts, a specific plan, and access to means. Clinical interpretation: Acute safety emergency; initiate observation and urgent behavioral health response.",
    "stimulus": {
      "caseGroupId": "QR-CS-020",
      "patientProfile": {
        "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
      },
      "tabs": {
        "history": [
          "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required."
        ],
        "nursesNotes": [
          "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
        ],
        "providerOrders": [
          "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition."
        ],
        "vitalSigns": [
          "13:20: Client confirms current suicidal thoughts, a specific plan, and access to means."
        ],
        "labResults": [
          "Client confirms current suicidal thoughts, a specific plan, and access to means. Clinical interpretation: Acute safety emergency; initiate observation and urgent behavioral health response."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses prioritize hypotheses in the context of Suicide risk and therapeutic safety.",
      "options": {
        "Maintain immediate safety and observation based on risk and policy.": "Correct priority for the current clinical threat.",
        "Ask directly about thoughts, plan, intent, and access to means.": "Correct priority for the current clinical threat.",
        "Arrange urgent behavioral health evaluation and collaborative safety planning.": "Correct priority for the current clinical threat.",
        "Promise absolute secrecy.": "Not the priority; this may delay or compromise care.",
        "Leave client alone for routine follow-up.": "Not the priority; this may delay or compromise care."
      },
      "clinicalJudgmentTip": "Prioritize immediate threats and avoid actions that delay care."
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which THREE nursing priorities should be addressed first? Select 3.",
      "options": [
        "Maintain immediate safety and observation based on risk and policy.",
        "Ask directly about thoughts, plan, intent, and access to means.",
        "Arrange urgent behavioral health evaluation and collaborative safety planning.",
        "Promise absolute secrecy.",
        "Leave client alone for routine follow-up."
      ],
      "answerKey": [
        "Maintain immediate safety and observation based on risk and policy.",
        "Ask directly about thoughts, plan, intent, and access to means.",
        "Arrange urgent behavioral health evaluation and collaborative safety planning."
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100178",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-020",
    "caseQuestionNumber": 4,
    "caseStudySequence": 4,
    "caseTitle": "Suicide Risk Assessment and Immediate Safety Planning",
    "caseStudyContext": {
      "id": "QR-CS-020",
      "title": "Suicide Risk Assessment and Immediate Safety Planning",
      "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
      "stepIndex": 4,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk and therapeutic safety",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Bowtie",
    "question": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
    "options": [],
    "correctAnswer": {
      "condition": "Acute suicide risk requiring immediate safety assessment and protective interventions",
      "actions": [
        "Maintain safe environment and observation based on assessed risk.",
        "Complete direct, nonjudgmental assessment and urgent behavioral health referral."
      ],
      "monitoring": [
        "Current suicidal thoughts, intent, plan, access to means, and behavior",
        "Engagement, observation needs, and safe disposition"
      ]
    },
    "rationale": "This item assesses generate solutions in the context of Suicide risk and therapeutic safety.",
    "optionRationales": {
      "condition": "Acute suicide risk requiring immediate safety assessment and protective interventions",
      "actions": "These actions address the immediate threat.",
      "monitoring": "These parameters evaluate response and identify complications."
    },
    "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring.",
    "sourceReferences": [
      {
        "title": "Suicide Prevention",
        "publisher": "National Institute of Mental Health",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100178",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "history": "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required.",
    "providerOrders": "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition.",
    "nursingNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "nursesNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "vitalSigns": "13:20: Client confirms current suicidal thoughts, a specific plan, and access to means.",
    "diagnosticResults": "Client confirms current suicidal thoughts, a specific plan, and access to means. Clinical interpretation: Acute safety emergency; initiate observation and urgent behavioral health response.",
    "stimulus": {
      "caseGroupId": "QR-CS-020",
      "patientProfile": {
        "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
      },
      "tabs": {
        "history": [
          "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required."
        ],
        "nursesNotes": [
          "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
        ],
        "providerOrders": [
          "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition."
        ],
        "vitalSigns": [
          "13:20: Client confirms current suicidal thoughts, a specific plan, and access to means."
        ],
        "labResults": [
          "Client confirms current suicidal thoughts, a specific plan, and access to means. Clinical interpretation: Acute safety emergency; initiate observation and urgent behavioral health response."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses generate solutions in the context of Suicide risk and therapeutic safety.",
      "options": {
        "condition": "Acute suicide risk requiring immediate safety assessment and protective interventions",
        "actions": "These actions address the immediate threat.",
        "monitoring": "These parameters evaluate response and identify complications."
      },
      "clinicalJudgmentTip": "Link the likely condition to targeted actions and measurable monitoring."
    },
    "interaction": {
      "type": "Bowtie",
      "stem": "Complete the bowtie by selecting the most likely condition, two priority actions, and two parameters to monitor.",
      "options": {
        "conditions": [
          "Acute suicide risk requiring immediate safety assessment and protective interventions",
          "A less likely alternative that does not explain the acute cue cluster",
          "A nonurgent chronic condition"
        ],
        "actions": [
          "Maintain safe environment and observation based on assessed risk.",
          "Complete direct, nonjudgmental assessment and urgent behavioral health referral.",
          "Rely on a verbal promise of safety instead of assessment."
        ],
        "monitoring": [
          "Current suicidal thoughts, intent, plan, access to means, and behavior",
          "Engagement, observation needs, and safe disposition"
        ]
      },
      "answerKey": {
        "condition": "Acute suicide risk requiring immediate safety assessment and protective interventions",
        "actions": [
          "Maintain safe environment and observation based on assessed risk.",
          "Complete direct, nonjudgmental assessment and urgent behavioral health referral."
        ],
        "monitoring": [
          "Current suicidal thoughts, intent, plan, access to means, and behavior",
          "Engagement, observation needs, and safe disposition"
        ]
      },
      "scoring": {
        "method": "plus_minus"
      }
    },
    "bowtieData": {
      "conditions": [
        "Acute suicide risk requiring immediate safety assessment and protective interventions",
        "A less likely alternative that does not explain the acute cue cluster",
        "A nonurgent chronic condition"
      ],
      "actions": [
        "Maintain safe environment and observation based on assessed risk.",
        "Complete direct, nonjudgmental assessment and urgent behavioral health referral.",
        "Rely on a verbal promise of safety instead of assessment."
      ],
      "monitoring": [
        "Current suicidal thoughts, intent, plan, access to means, and behavior",
        "Engagement, observation needs, and safe disposition"
      ]
    },
    "correctAnswers": {
      "condition": "Acute suicide risk requiring immediate safety assessment and protective interventions",
      "actions": [
        "Maintain safe environment and observation based on assessed risk.",
        "Complete direct, nonjudgmental assessment and urgent behavioral health referral."
      ],
      "monitoring": [
        "Current suicidal thoughts, intent, plan, access to means, and behavior",
        "Engagement, observation needs, and safe disposition"
      ]
    }
  },
  {
    "id": "QR-100179",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-020",
    "caseQuestionNumber": 5,
    "caseStudySequence": 5,
    "caseTitle": "Suicide Risk Assessment and Immediate Safety Planning",
    "caseStudyContext": {
      "id": "QR-CS-020",
      "title": "Suicide Risk Assessment and Immediate Safety Planning",
      "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
      "stepIndex": 5,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk and therapeutic safety",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which nursing actions are appropriate now? Select all that apply.",
    "options": [
      "Ensure required observation level and immediate safety.",
      "Secure hazards according to facility protocol and assessed risk.",
      "Notify behavioral health team and document direct assessment.",
      "Dismiss statement as attention-seeking."
    ],
    "correctAnswer": [
      "Ensure required observation level and immediate safety.",
      "Secure hazards according to facility protocol and assessed risk.",
      "Notify behavioral health team and document direct assessment."
    ],
    "rationale": "This item assesses take action in the context of Suicide risk and therapeutic safety.",
    "optionRationales": {
      "Ensure required observation level and immediate safety.": "Correct. This supports immediate safety and treatment.",
      "Secure hazards according to facility protocol and assessed risk.": "Correct. This supports immediate safety and treatment.",
      "Notify behavioral health team and document direct assessment.": "Correct. This supports immediate safety and treatment.",
      "Dismiss statement as attention-seeking.": "Incorrect. This is unsafe or delays appropriate care."
    },
    "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess.",
    "sourceReferences": [
      {
        "title": "Suicide Prevention",
        "publisher": "National Institute of Mental Health",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100179",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "history": "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required.",
    "providerOrders": "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition.",
    "nursingNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "nursesNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "vitalSigns": "After evaluation: Client is in a protected setting, engaged with team, and safety/disposition planning is underway.",
    "diagnosticResults": "Client is in a protected setting, engaged with team, and safety/disposition planning is underway. Clinical interpretation: Maintain safety measures and reassess; do not rely on a verbal promise.",
    "stimulus": {
      "caseGroupId": "QR-CS-020",
      "patientProfile": {
        "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
      },
      "tabs": {
        "history": [
          "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required."
        ],
        "nursesNotes": [
          "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
        ],
        "providerOrders": [
          "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition."
        ],
        "vitalSigns": [
          "After evaluation: Client is in a protected setting, engaged with team, and safety/disposition planning is underway."
        ],
        "labResults": [
          "Client is in a protected setting, engaged with team, and safety/disposition planning is underway. Clinical interpretation: Maintain safety measures and reassess; do not rely on a verbal promise."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses take action in the context of Suicide risk and therapeutic safety.",
      "options": {
        "Ensure required observation level and immediate safety.": "Correct. This supports immediate safety and treatment.",
        "Secure hazards according to facility protocol and assessed risk.": "Correct. This supports immediate safety and treatment.",
        "Notify behavioral health team and document direct assessment.": "Correct. This supports immediate safety and treatment.",
        "Dismiss statement as attention-seeking.": "Incorrect. This is unsafe or delays appropriate care."
      },
      "clinicalJudgmentTip": "Carry out time-sensitive interventions, communicate deterioration, and reassess."
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing actions are appropriate now? Select all that apply.",
      "options": [
        "Ensure required observation level and immediate safety.",
        "Secure hazards according to facility protocol and assessed risk.",
        "Notify behavioral health team and document direct assessment.",
        "Dismiss statement as attention-seeking."
      ],
      "answerKey": [
        "Ensure required observation level and immediate safety.",
        "Secure hazards according to facility protocol and assessed risk.",
        "Notify behavioral health team and document direct assessment."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    }
  },
  {
    "id": "QR-100180",
    "schemaVersion": 2,
    "caseGroupId": "QR-CS-020",
    "caseQuestionNumber": 6,
    "caseStudySequence": 6,
    "caseTitle": "Suicide Risk Assessment and Immediate Safety Planning",
    "caseStudyContext": {
      "id": "QR-CS-020",
      "title": "Suicide Risk Assessment and Immediate Safety Planning",
      "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
      "stepIndex": 6,
      "stepCount": 6
    },
    "isNGN": true,
    "category": "Mental Health",
    "topic": "Suicide risk and therapeutic safety",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Trend",
    "question": "Review the evolving findings and select the best interpretation at each time point.",
    "options": [
      "Ask directly and compassionately about thoughts, intent, plan, and access to means.",
      "The findings are expected and require no further assessment.",
      "The client is stable and can be discharged without reassessment.",
      "Delay action until all pending tests are finalized."
    ],
    "correctAnswer": "Ask directly and compassionately about thoughts, intent, plan, and access to means.",
    "rationale": "Suicide risk must be assessed directly. Current suicidal thoughts with a specific plan and access to means indicate an acute safety emergency requiring a protected setting, observation, and urgent behavioral-health evaluation. Safety planning does not eliminate risk or replace reassessment.",
    "optionRationales": {
      "Ask directly and compassionately about thoughts, intent, plan, and access to means.": "Correct. Client expresses hopelessness but has not answered direct questions about intent or plan. This interpretation matches the clinical progression.",
      "The findings are expected and require no further assessment.": "Incorrect. The evolving abnormal findings are not expected and require reassessment.",
      "The client is stable and can be discharged without reassessment.": "Incorrect. The client has not demonstrated sustained stability or completed treatment and reassessment.",
      "Delay action until all pending tests are finalized.": "Incorrect. Delaying action during deterioration can cause preventable harm.",
      "Acute safety emergency; initiate observation and urgent behavioral health response.": "Correct. Client confirms current suicidal thoughts, a specific plan, and access to means. This interpretation matches the clinical progression.",
      "Maintain safety measures and reassess; do not rely on a verbal promise.": "Correct. Client is in a protected setting, engaged with team, and safety/disposition planning is underway. This interpretation matches the clinical progression."
    },
    "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating.",
    "sourceReferences": [
      {
        "title": "Suicide Prevention",
        "publisher": "National Institute of Mental Health",
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
      "Original educational scenario; apply current institutional protocols and patient-specific orders. Structural validation is not clinical approval."
    ],
    "metadata": {
      "id": "QR-100180",
      "category": "Mental Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "history": "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required.",
    "providerOrders": "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition.",
    "nursingNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "nursesNotes": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live.",
    "vitalSigns": "After evaluation: Client is in a protected setting, engaged with team, and safety/disposition planning is underway.",
    "diagnosticResults": "Client is in a protected setting, engaged with team, and safety/disposition planning is underway. Clinical interpretation: Maintain safety measures and reassess; do not rely on a verbal promise.",
    "stimulus": {
      "caseGroupId": "QR-CS-020",
      "patientProfile": {
        "summary": "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
      },
      "tabs": {
        "history": [
          "Recent relationship loss; worsening depression and social withdrawal; direct suicide assessment and immediate safety evaluation required."
        ],
        "nursesNotes": [
          "19-year-old presents with severe depression, hopelessness, and a recent statement about not wanting to live."
        ],
        "providerOrders": [
          "Complete direct suicide risk assessment; observation based on risk and policy; remove hazards per protocol; involve behavioral health team; collaborative safety planning and disposition."
        ],
        "vitalSigns": [
          "After evaluation: Client is in a protected setting, engaged with team, and safety/disposition planning is underway."
        ],
        "labResults": [
          "Client is in a protected setting, engaged with team, and safety/disposition planning is underway. Clinical interpretation: Maintain safety measures and reassess; do not rely on a verbal promise."
        ]
      }
    },
    "rationales": {
      "overall": "This item assesses evaluate outcomes in the context of Suicide risk and therapeutic safety.",
      "options": {
        "undefined": "Correct interpretation of the patient's status at this time point."
      },
      "clinicalJudgmentTip": "Compare chronological findings to determine whether the patient is improving or deteriorating."
    },
    "interaction": {
      "type": "Trend",
      "stem": "Review the evolving findings and select the best interpretation at each time point.",
      "options": [
        "Ask directly and compassionately about thoughts, intent, plan, and access to means.",
        "The findings are expected and require no further assessment.",
        "The client is stable and can be discharged without reassessment.",
        "Delay action until all pending tests are finalized."
      ],
      "answerKey": "Ask directly and compassionately about thoughts, intent, plan, and access to means.",
      "scoring": {
        "method": "plus_minus"
      }
    },
    "trendData": {
      "title": "Suicide Risk Assessment and Immediate Safety Planning — clinical progression",
      "stages": [
        {
          "time": "13:00",
          "situation": "Client expresses hopelessness but has not answered direct questions about intent or plan.",
          "question": "What is the best interpretation of the current findings?",
          "options": [
            "Ask directly and compassionately about thoughts, intent, plan, and access to means.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Ask directly and compassionately about thoughts, intent, plan, and access to means."
        },
        {
          "time": "13:20",
          "situation": "Client confirms current suicidal thoughts, a specific plan, and access to means.",
          "question": "How should the nurse interpret this change?",
          "options": [
            "Acute safety emergency; initiate observation and urgent behavioral health response.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Acute safety emergency; initiate observation and urgent behavioral health response."
        },
        {
          "time": "After evaluation",
          "situation": "Client is in a protected setting, engaged with team, and safety/disposition planning is underway.",
          "question": "Which interpretation best reflects the client's current response?",
          "options": [
            "Maintain safety measures and reassess; do not rely on a verbal promise.",
            "The findings are expected and require no further assessment.",
            "The client is stable and can be discharged without reassessment.",
            "Delay action until all pending tests are finalized."
          ],
          "correctAnswer": "Maintain safety measures and reassess; do not rely on a verbal promise."
        }
      ]
    }
  }
]];
 bank.push(...cases);
 root.QuickRNLinkedCaseStudies={groups:20,items:120,firstId:'QR-100042',lastId:'QR-100180'};
})(typeof window!=='undefined'?window:globalThis);
