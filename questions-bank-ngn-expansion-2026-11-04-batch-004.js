/* QuickRN NGN expansion batch 004 — 499 unique original items across 50 clinical case scenarios.
 * Ten NGN formats per scenario: bowtie, matrix single/multiple, cloze, dropdown rationale,
 * highlight, trend, extended drag-and-drop, extended multiple response, and select-N.
 * pending webmaster review; do not treat as validated clinical guidance.
 */
(function(root){
'use strict';
const bank=Array.isArray(root.questions)?root.questions:(typeof questions!=='undefined'?questions:[]);
if(!Array.isArray(root.questions))root.questions=bank;
const items=[
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001920",
  "type": "Bowtie",
  "title": "A nurse is caring for a 72-year-old adult with acute ischemic stroke. Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Acute ischemic stroke requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Activate stroke pathway and obtain urgent noncontrast head CT",
    "Give aspirin before imaging",
    "Rapidly lower blood pressure to normal",
    "Imaging excludes hemorrhage and guides time-sensitive reperfusion decisions."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Acute ischemic stroke requiring urgent clinical management",
   "actions": [
    "Activate stroke pathway and obtain urgent noncontrast head CT",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001921",
  "type": "Matrix Single",
  "title": "For each cue in this Acute ischemic stroke scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
   },
   {
    "id": "cue2",
    "text": "Activate stroke pathway and obtain urgent noncontrast head CT"
   },
   {
    "id": "cue3",
    "text": "Give aspirin before imaging"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001922",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Acute ischemic stroke, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
   },
   {
    "id": "cue2",
    "text": "Activate stroke pathway and obtain urgent noncontrast head CT"
   },
   {
    "id": "cue3",
    "text": "Rapidly lower blood pressure to normal"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001923",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Acute ischemic stroke.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Acute ischemic stroke requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Acute ischemic stroke requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Activate stroke pathway and obtain urgent noncontrast head CT",
     "Give aspirin before imaging",
     "Rapidly lower blood pressure to normal"
    ],
    "correct": "Activate stroke pathway and obtain urgent noncontrast head CT"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Acute ischemic stroke requiring urgent intervention",
   "action": "Activate stroke pathway and obtain urgent noncontrast head CT",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001924",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Acute ischemic stroke case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Acute ischemic stroke requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Acute ischemic stroke requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Activate stroke pathway and obtain urgent noncontrast head CT",
     "Give aspirin before imaging",
     "Rapidly lower blood pressure to normal"
    ],
    "correct": "Activate stroke pathway and obtain urgent noncontrast head CT"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Acute ischemic stroke requiring urgent clinical management",
   "response": "Activate stroke pathway and obtain urgent noncontrast head CT"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001925",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Acute ischemic stroke scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
   },
   {
    "id": "h2",
    "text": "Activate stroke pathway and obtain urgent noncontrast head CT"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give aspirin before imaging"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001926",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Acute ischemic stroke. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Activate stroke pathway and obtain urgent noncontrast head CT",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give aspirin before imaging",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Activate stroke pathway and obtain urgent noncontrast head CT",
   "Give aspirin before imaging",
   "Rapidly lower blood pressure to normal",
   "Imaging excludes hemorrhage and guides time-sensitive reperfusion decisions."
  ],
  "correctAnswer": "Activate stroke pathway and obtain urgent noncontrast head CT"
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001927",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Acute ischemic stroke scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Activate stroke pathway and obtain urgent noncontrast head CT",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Activate stroke pathway and obtain urgent noncontrast head CT",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001928",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Acute ischemic stroke? Select all that apply.",
  "options": [
   "Activate stroke pathway and obtain urgent noncontrast head CT",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give aspirin before imaging",
   "Rapidly lower blood pressure to normal"
  ],
  "correctAnswers": [
   "Activate stroke pathway and obtain urgent noncontrast head CT",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute ischemic stroke",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "72-year-old adult",
   "history": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent."
  },
  "ehr": {
   "assessment": "Sudden aphasia and unilateral arm weakness began 40 minutes ago; glucose 104 mg/dL; airway patent.",
   "priorityAssessment": "Activate stroke pathway and obtain urgent noncontrast head CT"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-001",
  "id": "QR-001929",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Acute ischemic stroke scenario.",
  "options": [
   "Activate stroke pathway and obtain urgent noncontrast head CT",
   "Give aspirin before imaging",
   "Rapidly lower blood pressure to normal",
   "Imaging excludes hemorrhage and guides time-sensitive reperfusion decisions.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Activate stroke pathway and obtain urgent noncontrast head CT",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001930",
  "type": "Bowtie",
  "title": "A nurse is caring for a 76-year-old adult with sepsis with hypotension. Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Sepsis with hypotension requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Escalate immediately and initiate prescribed sepsis resuscitation",
    "Delay treatment until culture results return",
    "Restrict all IV fluids without reassessment",
    "Hypotension, elevated lactate, and altered mentation indicate impaired perfusion requiring urgent escalation."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Sepsis with hypotension requiring urgent clinical management",
   "actions": [
    "Escalate immediately and initiate prescribed sepsis resuscitation",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001931",
  "type": "Matrix Single",
  "title": "For each cue in this Sepsis with hypotension scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
   },
   {
    "id": "cue2",
    "text": "Escalate immediately and initiate prescribed sepsis resuscitation"
   },
   {
    "id": "cue3",
    "text": "Delay treatment until culture results return"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001932",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Sepsis with hypotension, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
   },
   {
    "id": "cue2",
    "text": "Escalate immediately and initiate prescribed sepsis resuscitation"
   },
   {
    "id": "cue3",
    "text": "Restrict all IV fluids without reassessment"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001933",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Sepsis with hypotension.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Sepsis with hypotension requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Sepsis with hypotension requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Escalate immediately and initiate prescribed sepsis resuscitation",
     "Delay treatment until culture results return",
     "Restrict all IV fluids without reassessment"
    ],
    "correct": "Escalate immediately and initiate prescribed sepsis resuscitation"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Sepsis with hypotension requiring urgent intervention",
   "action": "Escalate immediately and initiate prescribed sepsis resuscitation",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001934",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Sepsis with hypotension case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Sepsis with hypotension requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Sepsis with hypotension requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Escalate immediately and initiate prescribed sepsis resuscitation",
     "Delay treatment until culture results return",
     "Restrict all IV fluids without reassessment"
    ],
    "correct": "Escalate immediately and initiate prescribed sepsis resuscitation"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Sepsis with hypotension requiring urgent clinical management",
   "response": "Escalate immediately and initiate prescribed sepsis resuscitation"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001935",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Sepsis with hypotension scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
   },
   {
    "id": "h2",
    "text": "Escalate immediately and initiate prescribed sepsis resuscitation"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Delay treatment until culture results return"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001936",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Sepsis with hypotension. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Escalate immediately and initiate prescribed sepsis resuscitation",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Delay treatment until culture results return",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Escalate immediately and initiate prescribed sepsis resuscitation",
   "Delay treatment until culture results return",
   "Restrict all IV fluids without reassessment",
   "Hypotension, elevated lactate, and altered mentation indicate impaired perfusion requiring urgent escalation."
  ],
  "correctAnswer": "Escalate immediately and initiate prescribed sepsis resuscitation"
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001937",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Sepsis with hypotension scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Escalate immediately and initiate prescribed sepsis resuscitation",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Escalate immediately and initiate prescribed sepsis resuscitation",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001938",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Sepsis with hypotension? Select all that apply.",
  "options": [
   "Escalate immediately and initiate prescribed sepsis resuscitation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Delay treatment until culture results return",
   "Restrict all IV fluids without reassessment"
  ],
  "correctAnswers": [
   "Escalate immediately and initiate prescribed sepsis resuscitation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Sepsis with hypotension",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "76-year-old adult",
   "history": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion."
  },
  "ehr": {
   "assessment": "Fever 39.1 C, HR 126/min, BP 82/46 mm Hg, lactate 4.3 mmol/L, new confusion.",
   "priorityAssessment": "Escalate immediately and initiate prescribed sepsis resuscitation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-002",
  "id": "QR-001939",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Sepsis with hypotension scenario.",
  "options": [
   "Escalate immediately and initiate prescribed sepsis resuscitation",
   "Delay treatment until culture results return",
   "Restrict all IV fluids without reassessment",
   "Hypotension, elevated lactate, and altered mentation indicate impaired perfusion requiring urgent escalation.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Escalate immediately and initiate prescribed sepsis resuscitation",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001940",
  "type": "Bowtie",
  "title": "A nurse is caring for a 23-year-old adult with diabetic ketoacidosis. Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Diabetic ketoacidosis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Begin prescribed isotonic fluid replacement and monitor potassium closely",
    "Give IV insulin before checking potassium",
    "Give bicarbonate routinely to every client",
    "DKA causes volume depletion and total-body potassium deficit; insulin timing depends on serum potassium."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Diabetic ketoacidosis requiring urgent clinical management",
   "actions": [
    "Begin prescribed isotonic fluid replacement and monitor potassium closely",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001941",
  "type": "Matrix Single",
  "title": "For each cue in this Diabetic ketoacidosis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
   },
   {
    "id": "cue2",
    "text": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
   },
   {
    "id": "cue3",
    "text": "Give IV insulin before checking potassium"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001942",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Diabetic ketoacidosis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
   },
   {
    "id": "cue2",
    "text": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
   },
   {
    "id": "cue3",
    "text": "Give bicarbonate routinely to every client"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001943",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Diabetic ketoacidosis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Diabetic ketoacidosis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Diabetic ketoacidosis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Begin prescribed isotonic fluid replacement and monitor potassium closely",
     "Give IV insulin before checking potassium",
     "Give bicarbonate routinely to every client"
    ],
    "correct": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Diabetic ketoacidosis requiring urgent intervention",
   "action": "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001944",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Diabetic ketoacidosis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Diabetic ketoacidosis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Diabetic ketoacidosis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Begin prescribed isotonic fluid replacement and monitor potassium closely",
     "Give IV insulin before checking potassium",
     "Give bicarbonate routinely to every client"
    ],
    "correct": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Diabetic ketoacidosis requiring urgent clinical management",
   "response": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001945",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Diabetic ketoacidosis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
   },
   {
    "id": "h2",
    "text": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give IV insulin before checking potassium"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001946",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Diabetic ketoacidosis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Begin prescribed isotonic fluid replacement and monitor potassium closely",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give IV insulin before checking potassium",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "Give IV insulin before checking potassium",
   "Give bicarbonate routinely to every client",
   "DKA causes volume depletion and total-body potassium deficit; insulin timing depends on serum potassium."
  ],
  "correctAnswer": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001947",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Diabetic ketoacidosis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001948",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Diabetic ketoacidosis? Select all that apply.",
  "options": [
   "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give IV insulin before checking potassium",
   "Give bicarbonate routinely to every client"
  ],
  "correctAnswers": [
   "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Diabetic ketoacidosis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "23-year-old adult",
   "history": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L."
  },
  "ehr": {
   "assessment": "Type 1 diabetes with vomiting; glucose 480 mg/dL, pH 7.17, bicarbonate 9 mEq/L, potassium 5.2 mEq/L.",
   "priorityAssessment": "Begin prescribed isotonic fluid replacement and monitor potassium closely"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-003",
  "id": "QR-001949",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Diabetic ketoacidosis scenario.",
  "options": [
   "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "Give IV insulin before checking potassium",
   "Give bicarbonate routinely to every client",
   "DKA causes volume depletion and total-body potassium deficit; insulin timing depends on serum potassium.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Begin prescribed isotonic fluid replacement and monitor potassium closely",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001950",
  "type": "Bowtie",
  "title": "A nurse is caring for a 68-year-old adult with acute pulmonary edema. Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Acute pulmonary edema requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Position upright, support oxygenation, and activate urgent response",
    "Encourage oral fluids",
    "Place supine and reassess in one hour",
    "Acute pulmonary edema threatens gas exchange and requires immediate respiratory and hemodynamic support."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Acute pulmonary edema requiring urgent clinical management",
   "actions": [
    "Position upright, support oxygenation, and activate urgent response",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001951",
  "type": "Matrix Single",
  "title": "For each cue in this Acute pulmonary edema scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
   },
   {
    "id": "cue2",
    "text": "Position upright, support oxygenation, and activate urgent response"
   },
   {
    "id": "cue3",
    "text": "Encourage oral fluids"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001952",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Acute pulmonary edema, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
   },
   {
    "id": "cue2",
    "text": "Position upright, support oxygenation, and activate urgent response"
   },
   {
    "id": "cue3",
    "text": "Place supine and reassess in one hour"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001953",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Acute pulmonary edema.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Acute pulmonary edema requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Acute pulmonary edema requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Position upright, support oxygenation, and activate urgent response",
     "Encourage oral fluids",
     "Place supine and reassess in one hour"
    ],
    "correct": "Position upright, support oxygenation, and activate urgent response"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Acute pulmonary edema requiring urgent intervention",
   "action": "Position upright, support oxygenation, and activate urgent response",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001954",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Acute pulmonary edema case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Acute pulmonary edema requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Acute pulmonary edema requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Position upright, support oxygenation, and activate urgent response",
     "Encourage oral fluids",
     "Place supine and reassess in one hour"
    ],
    "correct": "Position upright, support oxygenation, and activate urgent response"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Acute pulmonary edema requiring urgent clinical management",
   "response": "Position upright, support oxygenation, and activate urgent response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001955",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Acute pulmonary edema scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
   },
   {
    "id": "h2",
    "text": "Position upright, support oxygenation, and activate urgent response"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Encourage oral fluids"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001956",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Acute pulmonary edema. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Position upright, support oxygenation, and activate urgent response",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Encourage oral fluids",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Position upright, support oxygenation, and activate urgent response",
   "Encourage oral fluids",
   "Place supine and reassess in one hour",
   "Acute pulmonary edema threatens gas exchange and requires immediate respiratory and hemodynamic support."
  ],
  "correctAnswer": "Position upright, support oxygenation, and activate urgent response"
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001957",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Acute pulmonary edema scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Position upright, support oxygenation, and activate urgent response",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Position upright, support oxygenation, and activate urgent response",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001958",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Acute pulmonary edema? Select all that apply.",
  "options": [
   "Position upright, support oxygenation, and activate urgent response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Encourage oral fluids",
   "Place supine and reassess in one hour"
  ],
  "correctAnswers": [
   "Position upright, support oxygenation, and activate urgent response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pulmonary edema",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "68-year-old adult",
   "history": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension."
  },
  "ehr": {
   "assessment": "Severe dyspnea, pink frothy sputum, SpO2 84%, bilateral crackles, and hypertension.",
   "priorityAssessment": "Position upright, support oxygenation, and activate urgent response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-004",
  "id": "QR-001959",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Acute pulmonary edema scenario.",
  "options": [
   "Position upright, support oxygenation, and activate urgent response",
   "Encourage oral fluids",
   "Place supine and reassess in one hour",
   "Acute pulmonary edema threatens gas exchange and requires immediate respiratory and hemodynamic support.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Position upright, support oxygenation, and activate urgent response",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001960",
  "type": "Bowtie",
  "title": "A nurse is caring for a 70-year-old adult with hyperkalemia in kidney injury. Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Hyperkalemia in kidney injury requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
    "Offer a high-potassium snack",
    "Wait for the next routine chemistry panel",
    "Severe hyperkalemia with ECG changes can cause fatal dysrhythmias."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Hyperkalemia in kidney injury requiring urgent clinical management",
   "actions": [
    "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001961",
  "type": "Matrix Single",
  "title": "For each cue in this Hyperkalemia in kidney injury scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
   },
   {
    "id": "cue2",
    "text": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
   },
   {
    "id": "cue3",
    "text": "Offer a high-potassium snack"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001962",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Hyperkalemia in kidney injury, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
   },
   {
    "id": "cue2",
    "text": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
   },
   {
    "id": "cue3",
    "text": "Wait for the next routine chemistry panel"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001963",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Hyperkalemia in kidney injury.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Hyperkalemia in kidney injury requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Hyperkalemia in kidney injury requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
     "Offer a high-potassium snack",
     "Wait for the next routine chemistry panel"
    ],
    "correct": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Hyperkalemia in kidney injury requiring urgent intervention",
   "action": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001964",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Hyperkalemia in kidney injury case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Hyperkalemia in kidney injury requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Hyperkalemia in kidney injury requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
     "Offer a high-potassium snack",
     "Wait for the next routine chemistry panel"
    ],
    "correct": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Hyperkalemia in kidney injury requiring urgent clinical management",
   "response": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001965",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Hyperkalemia in kidney injury scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
   },
   {
    "id": "h2",
    "text": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Offer a high-potassium snack"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001966",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Hyperkalemia in kidney injury. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Offer a high-potassium snack",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "Offer a high-potassium snack",
   "Wait for the next routine chemistry panel",
   "Severe hyperkalemia with ECG changes can cause fatal dysrhythmias."
  ],
  "correctAnswer": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001967",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Hyperkalemia in kidney injury scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001968",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Hyperkalemia in kidney injury? Select all that apply.",
  "options": [
   "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Offer a high-potassium snack",
   "Wait for the next routine chemistry panel"
  ],
  "correctAnswers": [
   "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Hyperkalemia in kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine."
  },
  "ehr": {
   "assessment": "Oliguria, potassium 6.4 mEq/L, peaked T waves, and rising creatinine.",
   "priorityAssessment": "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-005",
  "id": "QR-001969",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Hyperkalemia in kidney injury scenario.",
  "options": [
   "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "Offer a high-potassium snack",
   "Wait for the next routine chemistry panel",
   "Severe hyperkalemia with ECG changes can cause fatal dysrhythmias.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Escalate urgently and prepare prescribed membrane-stabilizing and potassium-shifting treatment",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001970",
  "type": "Bowtie",
  "title": "A nurse is caring for a 59-year-old adult with acute coronary syndrome. Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Acute coronary syndrome requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
    "Encourage the client to walk",
    "Delay assessment until pain resolves",
    "Time-sensitive evaluation and reperfusion reduce myocardial injury."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Acute coronary syndrome requiring urgent clinical management",
   "actions": [
    "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001971",
  "type": "Matrix Single",
  "title": "For each cue in this Acute coronary syndrome scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
   },
   {
    "id": "cue2",
    "text": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
   },
   {
    "id": "cue3",
    "text": "Encourage the client to walk"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001972",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Acute coronary syndrome, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
   },
   {
    "id": "cue2",
    "text": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
   },
   {
    "id": "cue3",
    "text": "Delay assessment until pain resolves"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001973",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Acute coronary syndrome.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Acute coronary syndrome requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Acute coronary syndrome requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
     "Encourage the client to walk",
     "Delay assessment until pain resolves"
    ],
    "correct": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Acute coronary syndrome requiring urgent intervention",
   "action": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001974",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Acute coronary syndrome case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Acute coronary syndrome requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Acute coronary syndrome requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
     "Encourage the client to walk",
     "Delay assessment until pain resolves"
    ],
    "correct": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Acute coronary syndrome requiring urgent clinical management",
   "response": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001975",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Acute coronary syndrome scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
   },
   {
    "id": "h2",
    "text": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Encourage the client to walk"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001976",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Acute coronary syndrome. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Encourage the client to walk",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "Encourage the client to walk",
   "Delay assessment until pain resolves",
   "Time-sensitive evaluation and reperfusion reduce myocardial injury."
  ],
  "correctAnswer": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001977",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Acute coronary syndrome scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001978",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Acute coronary syndrome? Select all that apply.",
  "options": [
   "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Encourage the client to walk",
   "Delay assessment until pain resolves"
  ],
  "correctAnswers": [
   "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute coronary syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "59-year-old adult",
   "history": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation."
  },
  "ehr": {
   "assessment": "Crushing chest pressure, diaphoresis, nausea, and new ST-segment elevation.",
   "priorityAssessment": "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-006",
  "id": "QR-001979",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Acute coronary syndrome scenario.",
  "options": [
   "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "Encourage the client to walk",
   "Delay assessment until pain resolves",
   "Time-sensitive evaluation and reperfusion reduce myocardial injury.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Activate the acute coronary syndrome pathway and obtain immediate ECG/provider response",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001980",
  "type": "Bowtie",
  "title": "A nurse is caring for a 67-year-old adult with copd exacerbation. Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "COPD exacerbation requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
    "Withhold all oxygen",
    "Encourage sedatives for dyspnea",
    "Treat hypoxemia while monitoring response and ventilation; avoid withholding indicated oxygen."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "COPD exacerbation requiring urgent clinical management",
   "actions": [
    "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001981",
  "type": "Matrix Single",
  "title": "For each cue in this COPD exacerbation scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
   },
   {
    "id": "cue2",
    "text": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
   },
   {
    "id": "cue3",
    "text": "Withhold all oxygen"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001982",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to COPD exacerbation, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
   },
   {
    "id": "cue2",
    "text": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
   },
   {
    "id": "cue3",
    "text": "Encourage sedatives for dyspnea"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001983",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with COPD exacerbation.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "COPD exacerbation requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "COPD exacerbation requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
     "Withhold all oxygen",
     "Encourage sedatives for dyspnea"
    ],
    "correct": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "COPD exacerbation requiring urgent intervention",
   "action": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001984",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the COPD exacerbation case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "COPD exacerbation requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "COPD exacerbation requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
     "Withhold all oxygen",
     "Encourage sedatives for dyspnea"
    ],
    "correct": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "COPD exacerbation requiring urgent clinical management",
   "response": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  }
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001985",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this COPD exacerbation scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
   },
   {
    "id": "h2",
    "text": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Withhold all oxygen"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001986",
  "type": "Trend",
  "title": "Review the evolving observations for the client with COPD exacerbation. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Withhold all oxygen",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "Withhold all oxygen",
   "Encourage sedatives for dyspnea",
   "Treat hypoxemia while monitoring response and ventilation; avoid withholding indicated oxygen."
  ],
  "correctAnswer": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001987",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the COPD exacerbation scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001988",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with COPD exacerbation? Select all that apply.",
  "options": [
   "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Withhold all oxygen",
   "Encourage sedatives for dyspnea"
  ],
  "correctAnswers": [
   "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "COPD exacerbation",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "67-year-old adult",
   "history": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air."
  },
  "ehr": {
   "assessment": "Increased sputum, wheezing, accessory muscle use, and SpO2 86% on room air.",
   "priorityAssessment": "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-007",
  "id": "QR-001989",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this COPD exacerbation scenario.",
  "options": [
   "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "Withhold all oxygen",
   "Encourage sedatives for dyspnea",
   "Treat hypoxemia while monitoring response and ventilation; avoid withholding indicated oxygen.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Assess respiratory status and administer prescribed controlled oxygen and bronchodilator therapy",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001990",
  "type": "Bowtie",
  "title": "A nurse is caring for a 44-year-old adult with pulmonary embolism. Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Pulmonary embolism requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
    "Massage the affected calf",
    "Encourage unassisted ambulation",
    "The presentation suggests venous thromboembolism with possible pulmonary embolism."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Pulmonary embolism requiring urgent clinical management",
   "actions": [
    "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001991",
  "type": "Matrix Single",
  "title": "For each cue in this Pulmonary embolism scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
   },
   {
    "id": "cue2",
    "text": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
   },
   {
    "id": "cue3",
    "text": "Massage the affected calf"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001992",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Pulmonary embolism, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
   },
   {
    "id": "cue2",
    "text": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
   },
   {
    "id": "cue3",
    "text": "Encourage unassisted ambulation"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001993",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Pulmonary embolism.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Pulmonary embolism requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Pulmonary embolism requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
     "Massage the affected calf",
     "Encourage unassisted ambulation"
    ],
    "correct": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Pulmonary embolism requiring urgent intervention",
   "action": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001994",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Pulmonary embolism case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Pulmonary embolism requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Pulmonary embolism requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
     "Massage the affected calf",
     "Encourage unassisted ambulation"
    ],
    "correct": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Pulmonary embolism requiring urgent clinical management",
   "response": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001995",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Pulmonary embolism scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
   },
   {
    "id": "h2",
    "text": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Massage the affected calf"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001996",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Pulmonary embolism. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Massage the affected calf",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "Massage the affected calf",
   "Encourage unassisted ambulation",
   "The presentation suggests venous thromboembolism with possible pulmonary embolism."
  ],
  "correctAnswer": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001997",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Pulmonary embolism scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001998",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Pulmonary embolism? Select all that apply.",
  "options": [
   "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Massage the affected calf",
   "Encourage unassisted ambulation"
  ],
  "correctAnswers": [
   "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Pulmonary embolism",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "44-year-old adult",
   "history": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery."
  },
  "ehr": {
   "assessment": "Sudden pleuritic chest pain, tachycardia, dyspnea, and unilateral calf swelling after surgery.",
   "priorityAssessment": "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-008",
  "id": "QR-001999",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Pulmonary embolism scenario.",
  "options": [
   "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "Massage the affected calf",
   "Encourage unassisted ambulation",
   "The presentation suggests venous thromboembolism with possible pulmonary embolism.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Provide oxygen as indicated and activate urgent evaluation for pulmonary embolism",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002000",
  "type": "Bowtie",
  "title": "A nurse is caring for a 51-year-old adult with acute pancreatitis. Severe epigastric pain radiating to the back, vomiting, and elevated lipase. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Acute pancreatitis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Maintain prescribed IV fluids, analgesia, and close monitoring",
    "Offer a high-fat meal",
    "Apply deep abdominal massage",
    "Pancreatitis care includes supportive treatment, hydration, pain control, and monitoring for complications."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Acute pancreatitis requiring urgent clinical management",
   "actions": [
    "Maintain prescribed IV fluids, analgesia, and close monitoring",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002001",
  "type": "Matrix Single",
  "title": "For each cue in this Acute pancreatitis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
   },
   {
    "id": "cue2",
    "text": "Maintain prescribed IV fluids, analgesia, and close monitoring"
   },
   {
    "id": "cue3",
    "text": "Offer a high-fat meal"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002002",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Acute pancreatitis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
   },
   {
    "id": "cue2",
    "text": "Maintain prescribed IV fluids, analgesia, and close monitoring"
   },
   {
    "id": "cue3",
    "text": "Apply deep abdominal massage"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002003",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Acute pancreatitis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Acute pancreatitis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Acute pancreatitis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Maintain prescribed IV fluids, analgesia, and close monitoring",
     "Offer a high-fat meal",
     "Apply deep abdominal massage"
    ],
    "correct": "Maintain prescribed IV fluids, analgesia, and close monitoring"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Acute pancreatitis requiring urgent intervention",
   "action": "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002004",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Acute pancreatitis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Acute pancreatitis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Acute pancreatitis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Maintain prescribed IV fluids, analgesia, and close monitoring",
     "Offer a high-fat meal",
     "Apply deep abdominal massage"
    ],
    "correct": "Maintain prescribed IV fluids, analgesia, and close monitoring"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Acute pancreatitis requiring urgent clinical management",
   "response": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002005",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Acute pancreatitis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
   },
   {
    "id": "h2",
    "text": "Maintain prescribed IV fluids, analgesia, and close monitoring"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Offer a high-fat meal"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002006",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Acute pancreatitis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Maintain prescribed IV fluids, analgesia, and close monitoring",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Offer a high-fat meal",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "Offer a high-fat meal",
   "Apply deep abdominal massage",
   "Pancreatitis care includes supportive treatment, hydration, pain control, and monitoring for complications."
  ],
  "correctAnswer": "Maintain prescribed IV fluids, analgesia, and close monitoring"
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002007",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Acute pancreatitis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002008",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Acute pancreatitis? Select all that apply.",
  "options": [
   "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Offer a high-fat meal",
   "Apply deep abdominal massage"
  ],
  "correctAnswers": [
   "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute pancreatitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "51-year-old adult",
   "history": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase."
  },
  "ehr": {
   "assessment": "Severe epigastric pain radiating to the back, vomiting, and elevated lipase.",
   "priorityAssessment": "Maintain prescribed IV fluids, analgesia, and close monitoring"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-009",
  "id": "QR-002009",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Acute pancreatitis scenario.",
  "options": [
   "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "Offer a high-fat meal",
   "Apply deep abdominal massage",
   "Pancreatitis care includes supportive treatment, hydration, pain control, and monitoring for complications.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Maintain prescribed IV fluids, analgesia, and close monitoring",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002010",
  "type": "Bowtie",
  "title": "A nurse is caring for a 63-year-old adult with upper gi bleeding. Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Upper GI bleeding requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Assess circulation, establish IV access, and urgently notify the provider",
    "Give an oral laxative",
    "Assist the client to walk to the bathroom alone",
    "Tachycardia and hypotension with GI bleeding suggest hemodynamic compromise."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Upper GI bleeding requiring urgent clinical management",
   "actions": [
    "Assess circulation, establish IV access, and urgently notify the provider",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002011",
  "type": "Matrix Single",
  "title": "For each cue in this Upper GI bleeding scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
   },
   {
    "id": "cue2",
    "text": "Assess circulation, establish IV access, and urgently notify the provider"
   },
   {
    "id": "cue3",
    "text": "Give an oral laxative"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002012",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Upper GI bleeding, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
   },
   {
    "id": "cue2",
    "text": "Assess circulation, establish IV access, and urgently notify the provider"
   },
   {
    "id": "cue3",
    "text": "Assist the client to walk to the bathroom alone"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002013",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Upper GI bleeding.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Upper GI bleeding requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Upper GI bleeding requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Assess circulation, establish IV access, and urgently notify the provider",
     "Give an oral laxative",
     "Assist the client to walk to the bathroom alone"
    ],
    "correct": "Assess circulation, establish IV access, and urgently notify the provider"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Upper GI bleeding requiring urgent intervention",
   "action": "Assess circulation, establish IV access, and urgently notify the provider",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002014",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Upper GI bleeding case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Upper GI bleeding requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Upper GI bleeding requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Assess circulation, establish IV access, and urgently notify the provider",
     "Give an oral laxative",
     "Assist the client to walk to the bathroom alone"
    ],
    "correct": "Assess circulation, establish IV access, and urgently notify the provider"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Upper GI bleeding requiring urgent clinical management",
   "response": "Assess circulation, establish IV access, and urgently notify the provider"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002015",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Upper GI bleeding scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
   },
   {
    "id": "h2",
    "text": "Assess circulation, establish IV access, and urgently notify the provider"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give an oral laxative"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002016",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Upper GI bleeding. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Assess circulation, establish IV access, and urgently notify the provider",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give an oral laxative",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Assess circulation, establish IV access, and urgently notify the provider",
   "Give an oral laxative",
   "Assist the client to walk to the bathroom alone",
   "Tachycardia and hypotension with GI bleeding suggest hemodynamic compromise."
  ],
  "correctAnswer": "Assess circulation, establish IV access, and urgently notify the provider"
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002017",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Upper GI bleeding scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Assess circulation, establish IV access, and urgently notify the provider",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Assess circulation, establish IV access, and urgently notify the provider",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002018",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Upper GI bleeding? Select all that apply.",
  "options": [
   "Assess circulation, establish IV access, and urgently notify the provider",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give an oral laxative",
   "Assist the client to walk to the bathroom alone"
  ],
  "correctAnswers": [
   "Assess circulation, establish IV access, and urgently notify the provider",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Upper GI bleeding",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "63-year-old adult",
   "history": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness."
  },
  "ehr": {
   "assessment": "Coffee-ground emesis, melena, HR 122/min, BP 88/52 mm Hg, and dizziness.",
   "priorityAssessment": "Assess circulation, establish IV access, and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-010",
  "id": "QR-002019",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Upper GI bleeding scenario.",
  "options": [
   "Assess circulation, establish IV access, and urgently notify the provider",
   "Give an oral laxative",
   "Assist the client to walk to the bathroom alone",
   "Tachycardia and hypotension with GI bleeding suggest hemodynamic compromise.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Assess circulation, establish IV access, and urgently notify the provider",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002020",
  "type": "Bowtie",
  "title": "A nurse is caring for a 58-year-old adult with cirrhosis with encephalopathy. Known cirrhosis with new confusion, asterixis, and elevated ammonia. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Cirrhosis with encephalopathy requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Institute safety measures and administer prescribed lactulose while monitoring response",
    "Restrict all bowel movements",
    "Give sedatives without assessment",
    "Hepatic encephalopathy requires treatment of precipitating factors and prescribed ammonia-lowering therapy."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Cirrhosis with encephalopathy requiring urgent clinical management",
   "actions": [
    "Institute safety measures and administer prescribed lactulose while monitoring response",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002021",
  "type": "Matrix Single",
  "title": "For each cue in this Cirrhosis with encephalopathy scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
   },
   {
    "id": "cue2",
    "text": "Institute safety measures and administer prescribed lactulose while monitoring response"
   },
   {
    "id": "cue3",
    "text": "Restrict all bowel movements"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002022",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Cirrhosis with encephalopathy, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
   },
   {
    "id": "cue2",
    "text": "Institute safety measures and administer prescribed lactulose while monitoring response"
   },
   {
    "id": "cue3",
    "text": "Give sedatives without assessment"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002023",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Cirrhosis with encephalopathy.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Cirrhosis with encephalopathy requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Cirrhosis with encephalopathy requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Institute safety measures and administer prescribed lactulose while monitoring response",
     "Restrict all bowel movements",
     "Give sedatives without assessment"
    ],
    "correct": "Institute safety measures and administer prescribed lactulose while monitoring response"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Cirrhosis with encephalopathy requiring urgent intervention",
   "action": "Institute safety measures and administer prescribed lactulose while monitoring response",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002024",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Cirrhosis with encephalopathy case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Cirrhosis with encephalopathy requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Cirrhosis with encephalopathy requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Institute safety measures and administer prescribed lactulose while monitoring response",
     "Restrict all bowel movements",
     "Give sedatives without assessment"
    ],
    "correct": "Institute safety measures and administer prescribed lactulose while monitoring response"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Cirrhosis with encephalopathy requiring urgent clinical management",
   "response": "Institute safety measures and administer prescribed lactulose while monitoring response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002025",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Cirrhosis with encephalopathy scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
   },
   {
    "id": "h2",
    "text": "Institute safety measures and administer prescribed lactulose while monitoring response"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Restrict all bowel movements"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002026",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Cirrhosis with encephalopathy. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Institute safety measures and administer prescribed lactulose while monitoring response",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Restrict all bowel movements",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Institute safety measures and administer prescribed lactulose while monitoring response",
   "Restrict all bowel movements",
   "Give sedatives without assessment",
   "Hepatic encephalopathy requires treatment of precipitating factors and prescribed ammonia-lowering therapy."
  ],
  "correctAnswer": "Institute safety measures and administer prescribed lactulose while monitoring response"
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002027",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Cirrhosis with encephalopathy scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Institute safety measures and administer prescribed lactulose while monitoring response",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Institute safety measures and administer prescribed lactulose while monitoring response",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002028",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Cirrhosis with encephalopathy? Select all that apply.",
  "options": [
   "Institute safety measures and administer prescribed lactulose while monitoring response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Restrict all bowel movements",
   "Give sedatives without assessment"
  ],
  "correctAnswers": [
   "Institute safety measures and administer prescribed lactulose while monitoring response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Cirrhosis with encephalopathy",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "58-year-old adult",
   "history": "Known cirrhosis with new confusion, asterixis, and elevated ammonia."
  },
  "ehr": {
   "assessment": "Known cirrhosis with new confusion, asterixis, and elevated ammonia.",
   "priorityAssessment": "Institute safety measures and administer prescribed lactulose while monitoring response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-011",
  "id": "QR-002029",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Cirrhosis with encephalopathy scenario.",
  "options": [
   "Institute safety measures and administer prescribed lactulose while monitoring response",
   "Restrict all bowel movements",
   "Give sedatives without assessment",
   "Hepatic encephalopathy requires treatment of precipitating factors and prescribed ammonia-lowering therapy.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Institute safety measures and administer prescribed lactulose while monitoring response",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002030",
  "type": "Bowtie",
  "title": "A nurse is caring for a 74-year-old adult with acute kidney injury. Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Acute kidney injury requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Report oliguria and trend renal function, electrolytes, and fluid balance",
    "Encourage unmeasured fluid intake regardless of status",
    "Ignore the trend if blood pressure is normal",
    "Oliguria and rising creatinine indicate worsening renal function requiring assessment and escalation."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Acute kidney injury requiring urgent clinical management",
   "actions": [
    "Report oliguria and trend renal function, electrolytes, and fluid balance",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002031",
  "type": "Matrix Single",
  "title": "For each cue in this Acute kidney injury scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Report oliguria and trend renal function, electrolytes, and fluid balance"
   },
   {
    "id": "cue3",
    "text": "Encourage unmeasured fluid intake regardless of status"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002032",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Acute kidney injury, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Report oliguria and trend renal function, electrolytes, and fluid balance"
   },
   {
    "id": "cue3",
    "text": "Ignore the trend if blood pressure is normal"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002033",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Acute kidney injury.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Acute kidney injury requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Acute kidney injury requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Report oliguria and trend renal function, electrolytes, and fluid balance",
     "Encourage unmeasured fluid intake regardless of status",
     "Ignore the trend if blood pressure is normal"
    ],
    "correct": "Report oliguria and trend renal function, electrolytes, and fluid balance"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Acute kidney injury requiring urgent intervention",
   "action": "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002034",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Acute kidney injury case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Acute kidney injury requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Acute kidney injury requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Report oliguria and trend renal function, electrolytes, and fluid balance",
     "Encourage unmeasured fluid intake regardless of status",
     "Ignore the trend if blood pressure is normal"
    ],
    "correct": "Report oliguria and trend renal function, electrolytes, and fluid balance"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Acute kidney injury requiring urgent clinical management",
   "response": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002035",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Acute kidney injury scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
   },
   {
    "id": "h2",
    "text": "Report oliguria and trend renal function, electrolytes, and fluid balance"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Encourage unmeasured fluid intake regardless of status"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002036",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Acute kidney injury. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Report oliguria and trend renal function, electrolytes, and fluid balance",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Encourage unmeasured fluid intake regardless of status",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "Encourage unmeasured fluid intake regardless of status",
   "Ignore the trend if blood pressure is normal",
   "Oliguria and rising creatinine indicate worsening renal function requiring assessment and escalation."
  ],
  "correctAnswer": "Report oliguria and trend renal function, electrolytes, and fluid balance"
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002037",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Acute kidney injury scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002038",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Acute kidney injury? Select all that apply.",
  "options": [
   "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Encourage unmeasured fluid intake regardless of status",
   "Ignore the trend if blood pressure is normal"
  ],
  "correctAnswers": [
   "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Acute kidney injury",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "74-year-old adult",
   "history": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL."
  },
  "ehr": {
   "assessment": "Urine output falls to 15 mL/hr; creatinine rises from 1.1 to 2.4 mg/dL.",
   "priorityAssessment": "Report oliguria and trend renal function, electrolytes, and fluid balance"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-012",
  "id": "QR-002039",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Acute kidney injury scenario.",
  "options": [
   "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "Encourage unmeasured fluid intake regardless of status",
   "Ignore the trend if blood pressure is normal",
   "Oliguria and rising creatinine indicate worsening renal function requiring assessment and escalation.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Report oliguria and trend renal function, electrolytes, and fluid balance",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002040",
  "type": "Bowtie",
  "title": "A nurse is caring for a 81-year-old adult with stroke dysphagia. Coughing and wet voice occur during a bedside water swallow after stroke. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Stroke dysphagia requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Stop oral intake and request formal swallowing assessment",
    "Offer thin liquids through a straw",
    "Place the client flat during meals",
    "Coughing and wet voice suggest aspiration risk; oral intake should stop pending evaluation."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Stroke dysphagia requiring urgent clinical management",
   "actions": [
    "Stop oral intake and request formal swallowing assessment",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002041",
  "type": "Matrix Single",
  "title": "For each cue in this Stroke dysphagia scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Coughing and wet voice occur during a bedside water swallow after stroke."
   },
   {
    "id": "cue2",
    "text": "Stop oral intake and request formal swallowing assessment"
   },
   {
    "id": "cue3",
    "text": "Offer thin liquids through a straw"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002042",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Stroke dysphagia, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Coughing and wet voice occur during a bedside water swallow after stroke."
   },
   {
    "id": "cue2",
    "text": "Stop oral intake and request formal swallowing assessment"
   },
   {
    "id": "cue3",
    "text": "Place the client flat during meals"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002043",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Stroke dysphagia.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Stroke dysphagia requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Stroke dysphagia requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Stop oral intake and request formal swallowing assessment",
     "Offer thin liquids through a straw",
     "Place the client flat during meals"
    ],
    "correct": "Stop oral intake and request formal swallowing assessment"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Stroke dysphagia requiring urgent intervention",
   "action": "Stop oral intake and request formal swallowing assessment",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002044",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Stroke dysphagia case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Stroke dysphagia requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Stroke dysphagia requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Stop oral intake and request formal swallowing assessment",
     "Offer thin liquids through a straw",
     "Place the client flat during meals"
    ],
    "correct": "Stop oral intake and request formal swallowing assessment"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Stroke dysphagia requiring urgent clinical management",
   "response": "Stop oral intake and request formal swallowing assessment"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002045",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Stroke dysphagia scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Coughing and wet voice occur during a bedside water swallow after stroke."
   },
   {
    "id": "h2",
    "text": "Stop oral intake and request formal swallowing assessment"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Offer thin liquids through a straw"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002046",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Stroke dysphagia. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Coughing and wet voice occur during a bedside water swallow after stroke.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Stop oral intake and request formal swallowing assessment",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Offer thin liquids through a straw",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Stop oral intake and request formal swallowing assessment",
   "Offer thin liquids through a straw",
   "Place the client flat during meals",
   "Coughing and wet voice suggest aspiration risk; oral intake should stop pending evaluation."
  ],
  "correctAnswer": "Stop oral intake and request formal swallowing assessment"
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002047",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Stroke dysphagia scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Stop oral intake and request formal swallowing assessment",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Stop oral intake and request formal swallowing assessment",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002048",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Stroke dysphagia? Select all that apply.",
  "options": [
   "Stop oral intake and request formal swallowing assessment",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Offer thin liquids through a straw",
   "Place the client flat during meals"
  ],
  "correctAnswers": [
   "Stop oral intake and request formal swallowing assessment",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Stroke dysphagia",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "81-year-old adult",
   "history": "Coughing and wet voice occur during a bedside water swallow after stroke."
  },
  "ehr": {
   "assessment": "Coughing and wet voice occur during a bedside water swallow after stroke.",
   "priorityAssessment": "Stop oral intake and request formal swallowing assessment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-013",
  "id": "QR-002049",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Stroke dysphagia scenario.",
  "options": [
   "Stop oral intake and request formal swallowing assessment",
   "Offer thin liquids through a straw",
   "Place the client flat during meals",
   "Coughing and wet voice suggest aspiration risk; oral intake should stop pending evaluation.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Stop oral intake and request formal swallowing assessment",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002050",
  "type": "Bowtie",
  "title": "A nurse is caring for a 64-year-old adult with blood transfusion reaction. Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Blood transfusion reaction requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
    "Flush the blood product into the client",
    "Restart after an antipyretic",
    "A suspected acute transfusion reaction requires stopping the product and following the reaction protocol."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Blood transfusion reaction requiring urgent clinical management",
   "actions": [
    "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002051",
  "type": "Matrix Single",
  "title": "For each cue in this Blood transfusion reaction scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
   },
   {
    "id": "cue2",
    "text": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
   },
   {
    "id": "cue3",
    "text": "Flush the blood product into the client"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002052",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Blood transfusion reaction, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
   },
   {
    "id": "cue2",
    "text": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
   },
   {
    "id": "cue3",
    "text": "Restart after an antipyretic"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002053",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Blood transfusion reaction.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Blood transfusion reaction requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Blood transfusion reaction requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
     "Flush the blood product into the client",
     "Restart after an antipyretic"
    ],
    "correct": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Blood transfusion reaction requiring urgent intervention",
   "action": "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002054",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Blood transfusion reaction case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Blood transfusion reaction requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Blood transfusion reaction requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
     "Flush the blood product into the client",
     "Restart after an antipyretic"
    ],
    "correct": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Blood transfusion reaction requiring urgent clinical management",
   "response": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002055",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Blood transfusion reaction scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
   },
   {
    "id": "h2",
    "text": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Flush the blood product into the client"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002056",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Blood transfusion reaction. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Flush the blood product into the client",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "Flush the blood product into the client",
   "Restart after an antipyretic",
   "A suspected acute transfusion reaction requires stopping the product and following the reaction protocol."
  ],
  "correctAnswer": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002057",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Blood transfusion reaction scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002058",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Blood transfusion reaction? Select all that apply.",
  "options": [
   "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Flush the blood product into the client",
   "Restart after an antipyretic"
  ],
  "correctAnswers": [
   "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Blood transfusion reaction",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "64-year-old adult",
   "history": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts."
  },
  "ehr": {
   "assessment": "Fever, chills, flank pain, and hypotension develop 10 minutes after transfusion starts.",
   "priorityAssessment": "Stop the transfusion and maintain IV access with new tubing and saline per protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-014",
  "id": "QR-002059",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Blood transfusion reaction scenario.",
  "options": [
   "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "Flush the blood product into the client",
   "Restart after an antipyretic",
   "A suspected acute transfusion reaction requires stopping the product and following the reaction protocol.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Stop the transfusion and maintain IV access with new tubing and saline per protocol",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002060",
  "type": "Bowtie",
  "title": "A nurse is caring for a 46-year-old adult with neutropenic fever. Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Neutropenic fever requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Notify the provider immediately and initiate febrile-neutropenia protocol",
    "Give a rectal suppository",
    "Wait until morning to repeat temperature",
    "Fever with severe neutropenia is an oncologic emergency."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Neutropenic fever requiring urgent clinical management",
   "actions": [
    "Notify the provider immediately and initiate febrile-neutropenia protocol",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002061",
  "type": "Matrix Single",
  "title": "For each cue in this Neutropenic fever scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
   },
   {
    "id": "cue2",
    "text": "Notify the provider immediately and initiate febrile-neutropenia protocol"
   },
   {
    "id": "cue3",
    "text": "Give a rectal suppository"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002062",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Neutropenic fever, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
   },
   {
    "id": "cue2",
    "text": "Notify the provider immediately and initiate febrile-neutropenia protocol"
   },
   {
    "id": "cue3",
    "text": "Wait until morning to repeat temperature"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002063",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Neutropenic fever.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Neutropenic fever requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Neutropenic fever requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Notify the provider immediately and initiate febrile-neutropenia protocol",
     "Give a rectal suppository",
     "Wait until morning to repeat temperature"
    ],
    "correct": "Notify the provider immediately and initiate febrile-neutropenia protocol"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Neutropenic fever requiring urgent intervention",
   "action": "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002064",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Neutropenic fever case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Neutropenic fever requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Neutropenic fever requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Notify the provider immediately and initiate febrile-neutropenia protocol",
     "Give a rectal suppository",
     "Wait until morning to repeat temperature"
    ],
    "correct": "Notify the provider immediately and initiate febrile-neutropenia protocol"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Neutropenic fever requiring urgent clinical management",
   "response": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002065",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Neutropenic fever scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
   },
   {
    "id": "h2",
    "text": "Notify the provider immediately and initiate febrile-neutropenia protocol"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give a rectal suppository"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002066",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Neutropenic fever. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Notify the provider immediately and initiate febrile-neutropenia protocol",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give a rectal suppository",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "Give a rectal suppository",
   "Wait until morning to repeat temperature",
   "Fever with severe neutropenia is an oncologic emergency."
  ],
  "correctAnswer": "Notify the provider immediately and initiate febrile-neutropenia protocol"
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002067",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Neutropenic fever scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002068",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Neutropenic fever? Select all that apply.",
  "options": [
   "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give a rectal suppository",
   "Wait until morning to repeat temperature"
  ],
  "correctAnswers": [
   "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Neutropenic fever",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "46-year-old adult",
   "history": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3."
  },
  "ehr": {
   "assessment": "Chemotherapy client has temperature 38.5 C and absolute neutrophil count 400/mm3.",
   "priorityAssessment": "Notify the provider immediately and initiate febrile-neutropenia protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-015",
  "id": "QR-002069",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Neutropenic fever scenario.",
  "options": [
   "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "Give a rectal suppository",
   "Wait until morning to repeat temperature",
   "Fever with severe neutropenia is an oncologic emergency.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Notify the provider immediately and initiate febrile-neutropenia protocol",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002070",
  "type": "Bowtie",
  "title": "A nurse is caring for a 55-year-old adult with chest tube disconnection. Chest drainage tubing separates from the collection system; client is dyspneic. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Chest tube disconnection requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Re-establish the water seal per facility emergency protocol and assess respiratory status",
    "Clamp the tube for an extended period",
    "Leave the system disconnected",
    "A disconnection compromises the closed drainage system; follow emergency policy and reassess."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Chest tube disconnection requiring urgent clinical management",
   "actions": [
    "Re-establish the water seal per facility emergency protocol and assess respiratory status",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002071",
  "type": "Matrix Single",
  "title": "For each cue in this Chest tube disconnection scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Chest drainage tubing separates from the collection system; client is dyspneic."
   },
   {
    "id": "cue2",
    "text": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
   },
   {
    "id": "cue3",
    "text": "Clamp the tube for an extended period"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002072",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Chest tube disconnection, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Chest drainage tubing separates from the collection system; client is dyspneic."
   },
   {
    "id": "cue2",
    "text": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
   },
   {
    "id": "cue3",
    "text": "Leave the system disconnected"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002073",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Chest tube disconnection.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Chest tube disconnection requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Chest tube disconnection requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Re-establish the water seal per facility emergency protocol and assess respiratory status",
     "Clamp the tube for an extended period",
     "Leave the system disconnected"
    ],
    "correct": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Chest tube disconnection requiring urgent intervention",
   "action": "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002074",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Chest tube disconnection case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Chest tube disconnection requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Chest tube disconnection requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Re-establish the water seal per facility emergency protocol and assess respiratory status",
     "Clamp the tube for an extended period",
     "Leave the system disconnected"
    ],
    "correct": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Chest tube disconnection requiring urgent clinical management",
   "response": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002075",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Chest tube disconnection scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Chest drainage tubing separates from the collection system; client is dyspneic."
   },
   {
    "id": "h2",
    "text": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Clamp the tube for an extended period"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002076",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Chest tube disconnection. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Chest drainage tubing separates from the collection system; client is dyspneic.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Re-establish the water seal per facility emergency protocol and assess respiratory status",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Clamp the tube for an extended period",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "Clamp the tube for an extended period",
   "Leave the system disconnected",
   "A disconnection compromises the closed drainage system; follow emergency policy and reassess."
  ],
  "correctAnswer": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002077",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Chest tube disconnection scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002078",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Chest tube disconnection? Select all that apply.",
  "options": [
   "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Clamp the tube for an extended period",
   "Leave the system disconnected"
  ],
  "correctAnswers": [
   "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Chest tube disconnection",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "55-year-old adult",
   "history": "Chest drainage tubing separates from the collection system; client is dyspneic."
  },
  "ehr": {
   "assessment": "Chest drainage tubing separates from the collection system; client is dyspneic.",
   "priorityAssessment": "Re-establish the water seal per facility emergency protocol and assess respiratory status"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-016",
  "id": "QR-002079",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Chest tube disconnection scenario.",
  "options": [
   "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "Clamp the tube for an extended period",
   "Leave the system disconnected",
   "A disconnection compromises the closed drainage system; follow emergency policy and reassess.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Re-establish the water seal per facility emergency protocol and assess respiratory status",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002080",
  "type": "Bowtie",
  "title": "A nurse is caring for a 70-year-old adult with opioid respiratory depression. After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Opioid respiratory depression requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Support airway and ventilation, summon help, and prepare prescribed naloxone",
    "Administer another opioid dose",
    "Offer food and fluids",
    "Bradypnea and reduced consciousness indicate potentially life-threatening opioid toxicity."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Opioid respiratory depression requiring urgent clinical management",
   "actions": [
    "Support airway and ventilation, summon help, and prepare prescribed naloxone",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002081",
  "type": "Matrix Single",
  "title": "For each cue in this Opioid respiratory depression scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
   },
   {
    "id": "cue2",
    "text": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
   },
   {
    "id": "cue3",
    "text": "Administer another opioid dose"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002082",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Opioid respiratory depression, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
   },
   {
    "id": "cue2",
    "text": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
   },
   {
    "id": "cue3",
    "text": "Offer food and fluids"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002083",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Opioid respiratory depression.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Opioid respiratory depression requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Opioid respiratory depression requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Support airway and ventilation, summon help, and prepare prescribed naloxone",
     "Administer another opioid dose",
     "Offer food and fluids"
    ],
    "correct": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Opioid respiratory depression requiring urgent intervention",
   "action": "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002084",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Opioid respiratory depression case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Opioid respiratory depression requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Opioid respiratory depression requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Support airway and ventilation, summon help, and prepare prescribed naloxone",
     "Administer another opioid dose",
     "Offer food and fluids"
    ],
    "correct": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Opioid respiratory depression requiring urgent clinical management",
   "response": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002085",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Opioid respiratory depression scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
   },
   {
    "id": "h2",
    "text": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Administer another opioid dose"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002086",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Opioid respiratory depression. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Support airway and ventilation, summon help, and prepare prescribed naloxone",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Administer another opioid dose",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "Administer another opioid dose",
   "Offer food and fluids",
   "Bradypnea and reduced consciousness indicate potentially life-threatening opioid toxicity."
  ],
  "correctAnswer": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002087",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Opioid respiratory depression scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002088",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Opioid respiratory depression? Select all that apply.",
  "options": [
   "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Administer another opioid dose",
   "Offer food and fluids"
  ],
  "correctAnswers": [
   "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Opioid respiratory depression",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "70-year-old adult",
   "history": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%."
  },
  "ehr": {
   "assessment": "After IV opioid, client is difficult to arouse with RR 7/min and SpO2 86%.",
   "priorityAssessment": "Support airway and ventilation, summon help, and prepare prescribed naloxone"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-017",
  "id": "QR-002089",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Opioid respiratory depression scenario.",
  "options": [
   "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "Administer another opioid dose",
   "Offer food and fluids",
   "Bradypnea and reduced consciousness indicate potentially life-threatening opioid toxicity.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Support airway and ventilation, summon help, and prepare prescribed naloxone",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002090",
  "type": "Bowtie",
  "title": "A nurse is caring for a 61-year-old adult with heparin-induced thrombocytopenia. Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Heparin-induced thrombocytopenia requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Stop all heparin sources and urgently notify the provider",
    "Increase the heparin infusion",
    "Give vitamin K routinely",
    "HIT can cause thrombosis despite thrombocytopenia; all heparin exposure must stop pending evaluation."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Heparin-induced thrombocytopenia requiring urgent clinical management",
   "actions": [
    "Stop all heparin sources and urgently notify the provider",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002091",
  "type": "Matrix Single",
  "title": "For each cue in this Heparin-induced thrombocytopenia scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
   },
   {
    "id": "cue2",
    "text": "Stop all heparin sources and urgently notify the provider"
   },
   {
    "id": "cue3",
    "text": "Increase the heparin infusion"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002092",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Heparin-induced thrombocytopenia, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
   },
   {
    "id": "cue2",
    "text": "Stop all heparin sources and urgently notify the provider"
   },
   {
    "id": "cue3",
    "text": "Give vitamin K routinely"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002093",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Heparin-induced thrombocytopenia.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Heparin-induced thrombocytopenia requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Heparin-induced thrombocytopenia requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Stop all heparin sources and urgently notify the provider",
     "Increase the heparin infusion",
     "Give vitamin K routinely"
    ],
    "correct": "Stop all heparin sources and urgently notify the provider"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Heparin-induced thrombocytopenia requiring urgent intervention",
   "action": "Stop all heparin sources and urgently notify the provider",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002094",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Heparin-induced thrombocytopenia case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Heparin-induced thrombocytopenia requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Heparin-induced thrombocytopenia requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Stop all heparin sources and urgently notify the provider",
     "Increase the heparin infusion",
     "Give vitamin K routinely"
    ],
    "correct": "Stop all heparin sources and urgently notify the provider"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Heparin-induced thrombocytopenia requiring urgent clinical management",
   "response": "Stop all heparin sources and urgently notify the provider"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002095",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Heparin-induced thrombocytopenia scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
   },
   {
    "id": "h2",
    "text": "Stop all heparin sources and urgently notify the provider"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Increase the heparin infusion"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002096",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Heparin-induced thrombocytopenia. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Stop all heparin sources and urgently notify the provider",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Increase the heparin infusion",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Stop all heparin sources and urgently notify the provider",
   "Increase the heparin infusion",
   "Give vitamin K routinely",
   "HIT can cause thrombosis despite thrombocytopenia; all heparin exposure must stop pending evaluation."
  ],
  "correctAnswer": "Stop all heparin sources and urgently notify the provider"
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002097",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Heparin-induced thrombocytopenia scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Stop all heparin sources and urgently notify the provider",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Stop all heparin sources and urgently notify the provider",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002098",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Heparin-induced thrombocytopenia? Select all that apply.",
  "options": [
   "Stop all heparin sources and urgently notify the provider",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Increase the heparin infusion",
   "Give vitamin K routinely"
  ],
  "correctAnswers": [
   "Stop all heparin sources and urgently notify the provider",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Heparin-induced thrombocytopenia",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "61-year-old adult",
   "history": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain."
  },
  "ehr": {
   "assessment": "Platelets fall by more than 50% on day 7 of heparin; new unilateral leg pain.",
   "priorityAssessment": "Stop all heparin sources and urgently notify the provider"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-018",
  "id": "QR-002099",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Heparin-induced thrombocytopenia scenario.",
  "options": [
   "Stop all heparin sources and urgently notify the provider",
   "Increase the heparin infusion",
   "Give vitamin K routinely",
   "HIT can cause thrombosis despite thrombocytopenia; all heparin exposure must stop pending evaluation.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Stop all heparin sources and urgently notify the provider",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002100",
  "type": "Bowtie",
  "title": "A nurse is caring for a 79-year-old adult with digoxin toxicity. Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Digoxin toxicity requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Hold digoxin and notify the provider for evaluation",
    "Give the scheduled dose",
    "Encourage extra digoxin to improve rate control",
    "Bradycardia, visual symptoms, and hypokalemia increase concern for digoxin toxicity."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Digoxin toxicity requiring urgent clinical management",
   "actions": [
    "Hold digoxin and notify the provider for evaluation",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002101",
  "type": "Matrix Single",
  "title": "For each cue in this Digoxin toxicity scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
   },
   {
    "id": "cue2",
    "text": "Hold digoxin and notify the provider for evaluation"
   },
   {
    "id": "cue3",
    "text": "Give the scheduled dose"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002102",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Digoxin toxicity, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
   },
   {
    "id": "cue2",
    "text": "Hold digoxin and notify the provider for evaluation"
   },
   {
    "id": "cue3",
    "text": "Encourage extra digoxin to improve rate control"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002103",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Digoxin toxicity.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Digoxin toxicity requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Digoxin toxicity requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Hold digoxin and notify the provider for evaluation",
     "Give the scheduled dose",
     "Encourage extra digoxin to improve rate control"
    ],
    "correct": "Hold digoxin and notify the provider for evaluation"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Digoxin toxicity requiring urgent intervention",
   "action": "Hold digoxin and notify the provider for evaluation",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002104",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Digoxin toxicity case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Digoxin toxicity requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Digoxin toxicity requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Hold digoxin and notify the provider for evaluation",
     "Give the scheduled dose",
     "Encourage extra digoxin to improve rate control"
    ],
    "correct": "Hold digoxin and notify the provider for evaluation"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Digoxin toxicity requiring urgent clinical management",
   "response": "Hold digoxin and notify the provider for evaluation"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002105",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Digoxin toxicity scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
   },
   {
    "id": "h2",
    "text": "Hold digoxin and notify the provider for evaluation"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give the scheduled dose"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002106",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Digoxin toxicity. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Hold digoxin and notify the provider for evaluation",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give the scheduled dose",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Hold digoxin and notify the provider for evaluation",
   "Give the scheduled dose",
   "Encourage extra digoxin to improve rate control",
   "Bradycardia, visual symptoms, and hypokalemia increase concern for digoxin toxicity."
  ],
  "correctAnswer": "Hold digoxin and notify the provider for evaluation"
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002107",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Digoxin toxicity scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Hold digoxin and notify the provider for evaluation",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Hold digoxin and notify the provider for evaluation",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002108",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Digoxin toxicity? Select all that apply.",
  "options": [
   "Hold digoxin and notify the provider for evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give the scheduled dose",
   "Encourage extra digoxin to improve rate control"
  ],
  "correctAnswers": [
   "Hold digoxin and notify the provider for evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Digoxin toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "79-year-old adult",
   "history": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L."
  },
  "ehr": {
   "assessment": "Nausea, yellow-green visual changes, pulse 48/min, and potassium 3.0 mEq/L.",
   "priorityAssessment": "Hold digoxin and notify the provider for evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-019",
  "id": "QR-002109",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Digoxin toxicity scenario.",
  "options": [
   "Hold digoxin and notify the provider for evaluation",
   "Give the scheduled dose",
   "Encourage extra digoxin to improve rate control",
   "Bradycardia, visual symptoms, and hypokalemia increase concern for digoxin toxicity.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Hold digoxin and notify the provider for evaluation",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002110",
  "type": "Bowtie",
  "title": "A nurse is caring for a 38-year-old adult with lithium toxicity. Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Lithium toxicity requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Hold lithium and obtain urgent prescriber evaluation and serum level",
    "Give the next dose with food",
    "Encourage strenuous exercise",
    "Neurologic and gastrointestinal changes can signal lithium toxicity."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Lithium toxicity requiring urgent clinical management",
   "actions": [
    "Hold lithium and obtain urgent prescriber evaluation and serum level",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002111",
  "type": "Matrix Single",
  "title": "For each cue in this Lithium toxicity scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
   },
   {
    "id": "cue2",
    "text": "Hold lithium and obtain urgent prescriber evaluation and serum level"
   },
   {
    "id": "cue3",
    "text": "Give the next dose with food"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002112",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Lithium toxicity, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
   },
   {
    "id": "cue2",
    "text": "Hold lithium and obtain urgent prescriber evaluation and serum level"
   },
   {
    "id": "cue3",
    "text": "Encourage strenuous exercise"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002113",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Lithium toxicity.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Lithium toxicity requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Lithium toxicity requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Hold lithium and obtain urgent prescriber evaluation and serum level",
     "Give the next dose with food",
     "Encourage strenuous exercise"
    ],
    "correct": "Hold lithium and obtain urgent prescriber evaluation and serum level"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Lithium toxicity requiring urgent intervention",
   "action": "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002114",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Lithium toxicity case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Lithium toxicity requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Lithium toxicity requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Hold lithium and obtain urgent prescriber evaluation and serum level",
     "Give the next dose with food",
     "Encourage strenuous exercise"
    ],
    "correct": "Hold lithium and obtain urgent prescriber evaluation and serum level"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Lithium toxicity requiring urgent clinical management",
   "response": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002115",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Lithium toxicity scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
   },
   {
    "id": "h2",
    "text": "Hold lithium and obtain urgent prescriber evaluation and serum level"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give the next dose with food"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002116",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Lithium toxicity. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Hold lithium and obtain urgent prescriber evaluation and serum level",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give the next dose with food",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "Give the next dose with food",
   "Encourage strenuous exercise",
   "Neurologic and gastrointestinal changes can signal lithium toxicity."
  ],
  "correctAnswer": "Hold lithium and obtain urgent prescriber evaluation and serum level"
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002117",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Lithium toxicity scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002118",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Lithium toxicity? Select all that apply.",
  "options": [
   "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give the next dose with food",
   "Encourage strenuous exercise"
  ],
  "correctAnswers": [
   "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Lithium toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "38-year-old adult",
   "history": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion."
  },
  "ehr": {
   "assessment": "Client taking lithium develops coarse tremor, ataxia, diarrhea, and confusion.",
   "priorityAssessment": "Hold lithium and obtain urgent prescriber evaluation and serum level"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-020",
  "id": "QR-002119",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Lithium toxicity scenario.",
  "options": [
   "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "Give the next dose with food",
   "Encourage strenuous exercise",
   "Neurologic and gastrointestinal changes can signal lithium toxicity.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Hold lithium and obtain urgent prescriber evaluation and serum level",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002120",
  "type": "Bowtie",
  "title": "A nurse is caring for a 32-year-old adult with serotonin syndrome. After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Serotonin syndrome requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Hold serotonergic agents and obtain urgent medical evaluation",
    "Administer another serotonergic dose",
    "Use restraints as the only intervention",
    "Autonomic instability and neuromuscular hyperactivity suggest serotonin toxicity."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Serotonin syndrome requiring urgent clinical management",
   "actions": [
    "Hold serotonergic agents and obtain urgent medical evaluation",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002121",
  "type": "Matrix Single",
  "title": "For each cue in this Serotonin syndrome scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
   },
   {
    "id": "cue2",
    "text": "Hold serotonergic agents and obtain urgent medical evaluation"
   },
   {
    "id": "cue3",
    "text": "Administer another serotonergic dose"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002122",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Serotonin syndrome, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
   },
   {
    "id": "cue2",
    "text": "Hold serotonergic agents and obtain urgent medical evaluation"
   },
   {
    "id": "cue3",
    "text": "Use restraints as the only intervention"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002123",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Serotonin syndrome.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Serotonin syndrome requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Serotonin syndrome requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Hold serotonergic agents and obtain urgent medical evaluation",
     "Administer another serotonergic dose",
     "Use restraints as the only intervention"
    ],
    "correct": "Hold serotonergic agents and obtain urgent medical evaluation"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Serotonin syndrome requiring urgent intervention",
   "action": "Hold serotonergic agents and obtain urgent medical evaluation",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002124",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Serotonin syndrome case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Serotonin syndrome requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Serotonin syndrome requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Hold serotonergic agents and obtain urgent medical evaluation",
     "Administer another serotonergic dose",
     "Use restraints as the only intervention"
    ],
    "correct": "Hold serotonergic agents and obtain urgent medical evaluation"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Serotonin syndrome requiring urgent clinical management",
   "response": "Hold serotonergic agents and obtain urgent medical evaluation"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002125",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Serotonin syndrome scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
   },
   {
    "id": "h2",
    "text": "Hold serotonergic agents and obtain urgent medical evaluation"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Administer another serotonergic dose"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002126",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Serotonin syndrome. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Hold serotonergic agents and obtain urgent medical evaluation",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Administer another serotonergic dose",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Hold serotonergic agents and obtain urgent medical evaluation",
   "Administer another serotonergic dose",
   "Use restraints as the only intervention",
   "Autonomic instability and neuromuscular hyperactivity suggest serotonin toxicity."
  ],
  "correctAnswer": "Hold serotonergic agents and obtain urgent medical evaluation"
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002127",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Serotonin syndrome scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Hold serotonergic agents and obtain urgent medical evaluation",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Hold serotonergic agents and obtain urgent medical evaluation",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002128",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Serotonin syndrome? Select all that apply.",
  "options": [
   "Hold serotonergic agents and obtain urgent medical evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Administer another serotonergic dose",
   "Use restraints as the only intervention"
  ],
  "correctAnswers": [
   "Hold serotonergic agents and obtain urgent medical evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Serotonin syndrome",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old adult",
   "history": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever."
  },
  "ehr": {
   "assessment": "After serotonergic medication change, client has agitation, diaphoresis, hyperreflexia, and fever.",
   "priorityAssessment": "Hold serotonergic agents and obtain urgent medical evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-021",
  "id": "QR-002129",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Serotonin syndrome scenario.",
  "options": [
   "Hold serotonergic agents and obtain urgent medical evaluation",
   "Administer another serotonergic dose",
   "Use restraints as the only intervention",
   "Autonomic instability and neuromuscular hyperactivity suggest serotonin toxicity.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Hold serotonergic agents and obtain urgent medical evaluation",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002130",
  "type": "Bowtie",
  "title": "A nurse is caring for a 29-year-old adult with suicide risk. Client with depression reports a specific suicide plan, access to means, and intent today. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Suicide risk requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Maintain immediate safety observation and initiate emergency psychiatric response",
    "Leave the client alone to rest",
    "Promise to keep the plan secret",
    "Specific plan, access, and intent indicate acute risk requiring immediate protective action."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Suicide risk requiring urgent clinical management",
   "actions": [
    "Maintain immediate safety observation and initiate emergency psychiatric response",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002131",
  "type": "Matrix Single",
  "title": "For each cue in this Suicide risk scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client with depression reports a specific suicide plan, access to means, and intent today."
   },
   {
    "id": "cue2",
    "text": "Maintain immediate safety observation and initiate emergency psychiatric response"
   },
   {
    "id": "cue3",
    "text": "Leave the client alone to rest"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002132",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Suicide risk, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client with depression reports a specific suicide plan, access to means, and intent today."
   },
   {
    "id": "cue2",
    "text": "Maintain immediate safety observation and initiate emergency psychiatric response"
   },
   {
    "id": "cue3",
    "text": "Promise to keep the plan secret"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002133",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Suicide risk.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Suicide risk requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Suicide risk requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Maintain immediate safety observation and initiate emergency psychiatric response",
     "Leave the client alone to rest",
     "Promise to keep the plan secret"
    ],
    "correct": "Maintain immediate safety observation and initiate emergency psychiatric response"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Suicide risk requiring urgent intervention",
   "action": "Maintain immediate safety observation and initiate emergency psychiatric response",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002134",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Suicide risk case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Suicide risk requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Suicide risk requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Maintain immediate safety observation and initiate emergency psychiatric response",
     "Leave the client alone to rest",
     "Promise to keep the plan secret"
    ],
    "correct": "Maintain immediate safety observation and initiate emergency psychiatric response"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Suicide risk requiring urgent clinical management",
   "response": "Maintain immediate safety observation and initiate emergency psychiatric response"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002135",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Suicide risk scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client with depression reports a specific suicide plan, access to means, and intent today."
   },
   {
    "id": "h2",
    "text": "Maintain immediate safety observation and initiate emergency psychiatric response"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Leave the client alone to rest"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002136",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Suicide risk. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client with depression reports a specific suicide plan, access to means, and intent today.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Maintain immediate safety observation and initiate emergency psychiatric response",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Leave the client alone to rest",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Maintain immediate safety observation and initiate emergency psychiatric response",
   "Leave the client alone to rest",
   "Promise to keep the plan secret",
   "Specific plan, access, and intent indicate acute risk requiring immediate protective action."
  ],
  "correctAnswer": "Maintain immediate safety observation and initiate emergency psychiatric response"
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002137",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Suicide risk scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Maintain immediate safety observation and initiate emergency psychiatric response",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Maintain immediate safety observation and initiate emergency psychiatric response",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002138",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Suicide risk? Select all that apply.",
  "options": [
   "Maintain immediate safety observation and initiate emergency psychiatric response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Leave the client alone to rest",
   "Promise to keep the plan secret"
  ],
  "correctAnswers": [
   "Maintain immediate safety observation and initiate emergency psychiatric response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Suicide risk",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "29-year-old adult",
   "history": "Client with depression reports a specific suicide plan, access to means, and intent today."
  },
  "ehr": {
   "assessment": "Client with depression reports a specific suicide plan, access to means, and intent today.",
   "priorityAssessment": "Maintain immediate safety observation and initiate emergency psychiatric response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-022",
  "id": "QR-002139",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Suicide risk scenario.",
  "options": [
   "Maintain immediate safety observation and initiate emergency psychiatric response",
   "Leave the client alone to rest",
   "Promise to keep the plan secret",
   "Specific plan, access, and intent indicate acute risk requiring immediate protective action.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Maintain immediate safety observation and initiate emergency psychiatric response",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002140",
  "type": "Bowtie",
  "title": "A nurse is caring for a 25-year-old adult with acute mania. Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Acute mania requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
    "Encourage competitive group activities",
    "Challenge grandiose statements in front of peers",
    "A low-stimulation environment, consistent limits, and portable nutrition support safety."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Acute mania requiring urgent clinical management",
   "actions": [
    "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002141",
  "type": "Matrix Single",
  "title": "For each cue in this Acute mania scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
   },
   {
    "id": "cue2",
    "text": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
   },
   {
    "id": "cue3",
    "text": "Encourage competitive group activities"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002142",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Acute mania, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
   },
   {
    "id": "cue2",
    "text": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
   },
   {
    "id": "cue3",
    "text": "Challenge grandiose statements in front of peers"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002143",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Acute mania.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Acute mania requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Acute mania requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
     "Encourage competitive group activities",
     "Challenge grandiose statements in front of peers"
    ],
    "correct": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Acute mania requiring urgent intervention",
   "action": "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002144",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Acute mania case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Acute mania requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Acute mania requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
     "Encourage competitive group activities",
     "Challenge grandiose statements in front of peers"
    ],
    "correct": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Acute mania requiring urgent clinical management",
   "response": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002145",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Acute mania scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
   },
   {
    "id": "h2",
    "text": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Encourage competitive group activities"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002146",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Acute mania. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Encourage competitive group activities",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "Encourage competitive group activities",
   "Challenge grandiose statements in front of peers",
   "A low-stimulation environment, consistent limits, and portable nutrition support safety."
  ],
  "correctAnswer": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002147",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Acute mania scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002148",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Acute mania? Select all that apply.",
  "options": [
   "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Encourage competitive group activities",
   "Challenge grandiose statements in front of peers"
  ],
  "correctAnswers": [
   "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Acute mania",
  "clientNeed": "Psychosocial Integrity",
  "difficulty": "High",
  "patientInfo": {
   "age": "25-year-old adult",
   "history": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals."
  },
  "ehr": {
   "assessment": "Client has slept 2 hours in 3 days, is intrusive, and cannot sit for meals.",
   "priorityAssessment": "Reduce stimulation, set clear limits, and offer high-calorie finger foods"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-023",
  "id": "QR-002149",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Acute mania scenario.",
  "options": [
   "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "Encourage competitive group activities",
   "Challenge grandiose statements in front of peers",
   "A low-stimulation environment, consistent limits, and portable nutrition support safety.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Reduce stimulation, set clear limits, and offer high-calorie finger foods",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": "52-year-old adult. Last alcohol intake was 18 hours ago. The client has tremor, diaphoresis, tachycardia, and visual disturbances.",
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002150",
  "type": "Bowtie",
  "title": "Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Acute alcohol withdrawal with risk for progression",
    "Expected uncomplicated recovery",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Initiate a structured withdrawal assessment (such as CIWA-Ar) and administer the prescribed benzodiazepine protocol.",
    "Institute seizure and fall precautions and maintain a calm, low-stimulation environment.",
    "Give alcohol to prevent withdrawal seizures.",
    "Leave the client unmonitored until the next routine assessment."
   ],
   "monitoring": [
    "CIWA-Ar score and changes in withdrawal symptoms.",
    "Vital signs, respiratory status, and response to prescribed treatment.",
    "Unrelated routine measurement.",
    "Delay reassessment until the end of the shift."
   ]
  },
  "correctAnswers": {
   "condition": "Acute alcohol withdrawal with risk for progression",
   "actions": [
    "Initiate a structured withdrawal assessment (such as CIWA-Ar) and administer the prescribed benzodiazepine protocol.",
    "Institute seizure and fall precautions and maintain a calm, low-stimulation environment."
   ],
   "monitoring": [
    "CIWA-Ar score and changes in withdrawal symptoms.",
    "Vital signs, respiratory status, and response to prescribed treatment."
   ]
  },
  "rationale": "The findings 18 hours after the last drink are consistent with acute alcohol withdrawal. Withdrawal commonly begins within 6–24 hours after alcohol cessation and may progress to seizures or delirium tremens. Tremor, diaphoresis, tachycardia, and visual disturbances indicate clinically significant central nervous system hyperexcitability. Perform a structured assessment such as CIWA-Ar and administer prescribed benzodiazepines according to the authorized protocol. Institute seizure and fall precautions, maintain a calm low-stimulation environment, and provide supportive care including thiamine and hydration as prescribed. Monitor the CIWA-Ar score, vital signs, respiratory status, and response to treatment. Escalate promptly for worsening confusion, hallucinations, seizures, unstable vital signs, or respiratory depression. Do not administer alcohol as treatment."
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002151",
  "type": "Matrix Single",
  "title": "For each cue in this Alcohol withdrawal scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
   },
   {
    "id": "cue2",
    "text": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
   },
   {
    "id": "cue3",
    "text": "Give alcohol to prevent seizures"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002152",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Alcohol withdrawal, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
   },
   {
    "id": "cue2",
    "text": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
   },
   {
    "id": "cue3",
    "text": "Leave the client unmonitored"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002153",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Alcohol withdrawal.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Alcohol withdrawal requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Alcohol withdrawal requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
     "Give alcohol to prevent seizures",
     "Leave the client unmonitored"
    ],
    "correct": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Alcohol withdrawal requiring urgent intervention",
   "action": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002154",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Alcohol withdrawal case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Alcohol withdrawal requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Alcohol withdrawal requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
     "Give alcohol to prevent seizures",
     "Leave the client unmonitored"
    ],
    "correct": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Alcohol withdrawal requiring urgent clinical management",
   "response": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  }
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002155",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Alcohol withdrawal scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
   },
   {
    "id": "h2",
    "text": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give alcohol to prevent seizures"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002156",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Alcohol withdrawal. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give alcohol to prevent seizures",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "Give alcohol to prevent seizures",
   "Leave the client unmonitored",
   "Withdrawal can progress to seizures and delirium; structured monitoring and prescribed treatment are needed."
  ],
  "correctAnswer": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002157",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Alcohol withdrawal scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002158",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Alcohol withdrawal? Select all that apply.",
  "options": [
   "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give alcohol to prevent seizures",
   "Leave the client unmonitored"
  ],
  "correctAnswers": [
   "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Mental Health",
  "topic": "Alcohol withdrawal",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "52-year-old adult",
   "history": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances."
  },
  "ehr": {
   "assessment": "18 hours after last drink, client has tremor, diaphoresis, tachycardia, and visual disturbances.",
   "priorityAssessment": "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-024",
  "id": "QR-002159",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Alcohol withdrawal scenario.",
  "options": [
   "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "Give alcohol to prevent seizures",
   "Leave the client unmonitored",
   "Withdrawal can progress to seizures and delirium; structured monitoring and prescribed treatment are needed.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Initiate withdrawal assessment and administer prescribed benzodiazepine protocol",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002160",
  "type": "Bowtie",
  "title": "A nurse is caring for a 30-year-old pregnant client at 35 weeks with preeclampsia with severe features. BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Preeclampsia with severe features requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
    "Encourage vigorous ambulation",
    "Delay assessment until the next prenatal visit",
    "Severe-range hypertension with neurologic symptoms requires urgent maternal-fetal management."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Preeclampsia with severe features requiring urgent clinical management",
   "actions": [
    "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002161",
  "type": "Matrix Single",
  "title": "For each cue in this Preeclampsia with severe features scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
   },
   {
    "id": "cue2",
    "text": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
   },
   {
    "id": "cue3",
    "text": "Encourage vigorous ambulation"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002162",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Preeclampsia with severe features, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
   },
   {
    "id": "cue2",
    "text": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
   },
   {
    "id": "cue3",
    "text": "Delay assessment until the next prenatal visit"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002163",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Preeclampsia with severe features.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Preeclampsia with severe features requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Preeclampsia with severe features requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
     "Encourage vigorous ambulation",
     "Delay assessment until the next prenatal visit"
    ],
    "correct": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Preeclampsia with severe features requiring urgent intervention",
   "action": "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002164",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Preeclampsia with severe features case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Preeclampsia with severe features requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Preeclampsia with severe features requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
     "Encourage vigorous ambulation",
     "Delay assessment until the next prenatal visit"
    ],
    "correct": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Preeclampsia with severe features requiring urgent clinical management",
   "response": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002165",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Preeclampsia with severe features scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
   },
   {
    "id": "h2",
    "text": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Encourage vigorous ambulation"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002166",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Preeclampsia with severe features. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Encourage vigorous ambulation",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "Encourage vigorous ambulation",
   "Delay assessment until the next prenatal visit",
   "Severe-range hypertension with neurologic symptoms requires urgent maternal-fetal management."
  ],
  "correctAnswer": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002167",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Preeclampsia with severe features scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002168",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Preeclampsia with severe features? Select all that apply.",
  "options": [
   "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Encourage vigorous ambulation",
   "Delay assessment until the next prenatal visit"
  ],
  "correctAnswers": [
   "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Preeclampsia with severe features",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "30-year-old pregnant client at 35 weeks",
   "history": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain."
  },
  "ehr": {
   "assessment": "BP 168/112 mm Hg, severe headache, visual spots, and epigastric pain.",
   "priorityAssessment": "Escalate urgently and implement prescribed seizure prophylaxis and BP management"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-025",
  "id": "QR-002169",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Preeclampsia with severe features scenario.",
  "options": [
   "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "Encourage vigorous ambulation",
   "Delay assessment until the next prenatal visit",
   "Severe-range hypertension with neurologic symptoms requires urgent maternal-fetal management.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Escalate urgently and implement prescribed seizure prophylaxis and BP management",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002170",
  "type": "Bowtie",
  "title": "A nurse is caring for a 28-year-old pregnant client with magnesium sulfate toxicity. On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Magnesium sulfate toxicity requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
    "Increase infusion rate",
    "Recheck in four hours",
    "Respiratory depression, absent reflexes, and oliguria suggest magnesium toxicity."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Magnesium sulfate toxicity requiring urgent clinical management",
   "actions": [
    "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002171",
  "type": "Matrix Single",
  "title": "For each cue in this Magnesium sulfate toxicity scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
   },
   {
    "id": "cue2",
    "text": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
   },
   {
    "id": "cue3",
    "text": "Increase infusion rate"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002172",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Magnesium sulfate toxicity, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
   },
   {
    "id": "cue2",
    "text": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
   },
   {
    "id": "cue3",
    "text": "Recheck in four hours"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002173",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Magnesium sulfate toxicity.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Magnesium sulfate toxicity requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Magnesium sulfate toxicity requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
     "Increase infusion rate",
     "Recheck in four hours"
    ],
    "correct": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Magnesium sulfate toxicity requiring urgent intervention",
   "action": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002174",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Magnesium sulfate toxicity case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Magnesium sulfate toxicity requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Magnesium sulfate toxicity requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
     "Increase infusion rate",
     "Recheck in four hours"
    ],
    "correct": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Magnesium sulfate toxicity requiring urgent clinical management",
   "response": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002175",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Magnesium sulfate toxicity scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
   },
   {
    "id": "h2",
    "text": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Increase infusion rate"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002176",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Magnesium sulfate toxicity. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Increase infusion rate",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "Increase infusion rate",
   "Recheck in four hours",
   "Respiratory depression, absent reflexes, and oliguria suggest magnesium toxicity."
  ],
  "correctAnswer": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002177",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Magnesium sulfate toxicity scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002178",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Magnesium sulfate toxicity? Select all that apply.",
  "options": [
   "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Increase infusion rate",
   "Recheck in four hours"
  ],
  "correctAnswers": [
   "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Magnesium sulfate toxicity",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "28-year-old pregnant client",
   "history": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr."
  },
  "ehr": {
   "assessment": "On magnesium infusion: RR 9/min, absent reflexes, and urine output 18 mL/hr.",
   "priorityAssessment": "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-026",
  "id": "QR-002179",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Magnesium sulfate toxicity scenario.",
  "options": [
   "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "Increase infusion rate",
   "Recheck in four hours",
   "Respiratory depression, absent reflexes, and oliguria suggest magnesium toxicity.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Stop infusion, summon help, support breathing, and prepare prescribed calcium gluconate",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002180",
  "type": "Bowtie",
  "title": "A nurse is caring for a 32-year-old postpartum client with postpartum hemorrhage. Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Postpartum hemorrhage requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
    "Leave client to ambulate",
    "Apply fundal pressure without assessment",
    "Uterine atony is a common cause of postpartum hemorrhage and requires immediate action."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Postpartum hemorrhage requiring urgent clinical management",
   "actions": [
    "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002181",
  "type": "Matrix Single",
  "title": "For each cue in this Postpartum hemorrhage scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
   },
   {
    "id": "cue2",
    "text": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
   },
   {
    "id": "cue3",
    "text": "Leave client to ambulate"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002182",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Postpartum hemorrhage, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
   },
   {
    "id": "cue2",
    "text": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
   },
   {
    "id": "cue3",
    "text": "Apply fundal pressure without assessment"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002183",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Postpartum hemorrhage.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Postpartum hemorrhage requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Postpartum hemorrhage requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
     "Leave client to ambulate",
     "Apply fundal pressure without assessment"
    ],
    "correct": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Postpartum hemorrhage requiring urgent intervention",
   "action": "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002184",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Postpartum hemorrhage case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Postpartum hemorrhage requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Postpartum hemorrhage requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
     "Leave client to ambulate",
     "Apply fundal pressure without assessment"
    ],
    "correct": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Postpartum hemorrhage requiring urgent clinical management",
   "response": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002185",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Postpartum hemorrhage scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
   },
   {
    "id": "h2",
    "text": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Leave client to ambulate"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002186",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Postpartum hemorrhage. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Leave client to ambulate",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "Leave client to ambulate",
   "Apply fundal pressure without assessment",
   "Uterine atony is a common cause of postpartum hemorrhage and requires immediate action."
  ],
  "correctAnswer": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002187",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Postpartum hemorrhage scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002188",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Postpartum hemorrhage? Select all that apply.",
  "options": [
   "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Leave client to ambulate",
   "Apply fundal pressure without assessment"
  ],
  "correctAnswers": [
   "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum hemorrhage",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "32-year-old postpartum client",
   "history": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg."
  },
  "ehr": {
   "assessment": "Heavy bleeding, boggy fundus, HR 128/min, and BP 86/50 mm Hg.",
   "priorityAssessment": "Call for help, massage the fundus, and initiate prescribed hemorrhage response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-027",
  "id": "QR-002189",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Postpartum hemorrhage scenario.",
  "options": [
   "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "Leave client to ambulate",
   "Apply fundal pressure without assessment",
   "Uterine atony is a common cause of postpartum hemorrhage and requires immediate action.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Call for help, massage the fundus, and initiate prescribed hemorrhage response",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002190",
  "type": "Bowtie",
  "title": "A nurse is caring for a 27-year-old pregnant client at 32 weeks with placenta previa. Painless bright-red vaginal bleeding; placenta documented over cervical os. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Placenta previa requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Avoid vaginal examination and notify obstetric team urgently",
    "Perform digital cervical examination",
    "Encourage intercourse to assess bleeding",
    "Placenta previa can hemorrhage with cervical manipulation; avoid vaginal examination."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Placenta previa requiring urgent clinical management",
   "actions": [
    "Avoid vaginal examination and notify obstetric team urgently",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002191",
  "type": "Matrix Single",
  "title": "For each cue in this Placenta previa scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
   },
   {
    "id": "cue2",
    "text": "Avoid vaginal examination and notify obstetric team urgently"
   },
   {
    "id": "cue3",
    "text": "Perform digital cervical examination"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002192",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Placenta previa, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
   },
   {
    "id": "cue2",
    "text": "Avoid vaginal examination and notify obstetric team urgently"
   },
   {
    "id": "cue3",
    "text": "Encourage intercourse to assess bleeding"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002193",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Placenta previa.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Placenta previa requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Placenta previa requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Avoid vaginal examination and notify obstetric team urgently",
     "Perform digital cervical examination",
     "Encourage intercourse to assess bleeding"
    ],
    "correct": "Avoid vaginal examination and notify obstetric team urgently"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Placenta previa requiring urgent intervention",
   "action": "Avoid vaginal examination and notify obstetric team urgently",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002194",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Placenta previa case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Placenta previa requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Placenta previa requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Avoid vaginal examination and notify obstetric team urgently",
     "Perform digital cervical examination",
     "Encourage intercourse to assess bleeding"
    ],
    "correct": "Avoid vaginal examination and notify obstetric team urgently"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Placenta previa requiring urgent clinical management",
   "response": "Avoid vaginal examination and notify obstetric team urgently"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002195",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Placenta previa scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
   },
   {
    "id": "h2",
    "text": "Avoid vaginal examination and notify obstetric team urgently"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Perform digital cervical examination"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002196",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Placenta previa. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Avoid vaginal examination and notify obstetric team urgently",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Perform digital cervical examination",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Avoid vaginal examination and notify obstetric team urgently",
   "Perform digital cervical examination",
   "Encourage intercourse to assess bleeding",
   "Placenta previa can hemorrhage with cervical manipulation; avoid vaginal examination."
  ],
  "correctAnswer": "Avoid vaginal examination and notify obstetric team urgently"
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002197",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Placenta previa scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Avoid vaginal examination and notify obstetric team urgently",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Avoid vaginal examination and notify obstetric team urgently",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002198",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Placenta previa? Select all that apply.",
  "options": [
   "Avoid vaginal examination and notify obstetric team urgently",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Perform digital cervical examination",
   "Encourage intercourse to assess bleeding"
  ],
  "correctAnswers": [
   "Avoid vaginal examination and notify obstetric team urgently",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Placenta previa",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "27-year-old pregnant client at 32 weeks",
   "history": "Painless bright-red vaginal bleeding; placenta documented over cervical os."
  },
  "ehr": {
   "assessment": "Painless bright-red vaginal bleeding; placenta documented over cervical os.",
   "priorityAssessment": "Avoid vaginal examination and notify obstetric team urgently"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-028",
  "id": "QR-002199",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Placenta previa scenario.",
  "options": [
   "Avoid vaginal examination and notify obstetric team urgently",
   "Perform digital cervical examination",
   "Encourage intercourse to assess bleeding",
   "Placenta previa can hemorrhage with cervical manipulation; avoid vaginal examination.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Avoid vaginal examination and notify obstetric team urgently",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002200",
  "type": "Bowtie",
  "title": "A nurse is caring for a 24-year-old postpartum client with postpartum endometritis. Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Postpartum endometritis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Notify provider and administer prescribed antimicrobial therapy",
    "Reassure that fever is expected",
    "Delay reporting until discharge",
    "Fever, uterine tenderness, and malodorous lochia suggest postpartum infection."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Postpartum endometritis requiring urgent clinical management",
   "actions": [
    "Notify provider and administer prescribed antimicrobial therapy",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002201",
  "type": "Matrix Single",
  "title": "For each cue in this Postpartum endometritis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
   },
   {
    "id": "cue2",
    "text": "Notify provider and administer prescribed antimicrobial therapy"
   },
   {
    "id": "cue3",
    "text": "Reassure that fever is expected"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002202",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Postpartum endometritis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
   },
   {
    "id": "cue2",
    "text": "Notify provider and administer prescribed antimicrobial therapy"
   },
   {
    "id": "cue3",
    "text": "Delay reporting until discharge"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002203",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Postpartum endometritis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Postpartum endometritis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Postpartum endometritis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Notify provider and administer prescribed antimicrobial therapy",
     "Reassure that fever is expected",
     "Delay reporting until discharge"
    ],
    "correct": "Notify provider and administer prescribed antimicrobial therapy"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Postpartum endometritis requiring urgent intervention",
   "action": "Notify provider and administer prescribed antimicrobial therapy",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002204",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Postpartum endometritis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Postpartum endometritis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Postpartum endometritis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Notify provider and administer prescribed antimicrobial therapy",
     "Reassure that fever is expected",
     "Delay reporting until discharge"
    ],
    "correct": "Notify provider and administer prescribed antimicrobial therapy"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Postpartum endometritis requiring urgent clinical management",
   "response": "Notify provider and administer prescribed antimicrobial therapy"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002205",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Postpartum endometritis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
   },
   {
    "id": "h2",
    "text": "Notify provider and administer prescribed antimicrobial therapy"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Reassure that fever is expected"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002206",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Postpartum endometritis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Notify provider and administer prescribed antimicrobial therapy",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Reassure that fever is expected",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Notify provider and administer prescribed antimicrobial therapy",
   "Reassure that fever is expected",
   "Delay reporting until discharge",
   "Fever, uterine tenderness, and malodorous lochia suggest postpartum infection."
  ],
  "correctAnswer": "Notify provider and administer prescribed antimicrobial therapy"
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002207",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Postpartum endometritis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Notify provider and administer prescribed antimicrobial therapy",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Notify provider and administer prescribed antimicrobial therapy",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002208",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Postpartum endometritis? Select all that apply.",
  "options": [
   "Notify provider and administer prescribed antimicrobial therapy",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Reassure that fever is expected",
   "Delay reporting until discharge"
  ],
  "correctAnswers": [
   "Notify provider and administer prescribed antimicrobial therapy",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Postpartum endometritis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "24-year-old postpartum client",
   "history": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3."
  },
  "ehr": {
   "assessment": "Fever, uterine tenderness, and foul-smelling lochia on postpartum day 3.",
   "priorityAssessment": "Notify provider and administer prescribed antimicrobial therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-029",
  "id": "QR-002209",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Postpartum endometritis scenario.",
  "options": [
   "Notify provider and administer prescribed antimicrobial therapy",
   "Reassure that fever is expected",
   "Delay reporting until discharge",
   "Fever, uterine tenderness, and malodorous lochia suggest postpartum infection.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Notify provider and administer prescribed antimicrobial therapy",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002210",
  "type": "Bowtie",
  "title": "A nurse is caring for a Newborn, 2 hours old with newborn hypoglycemia. Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Newborn hypoglycemia requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
    "Wait for symptoms to resolve",
    "Give plain water",
    "Symptomatic neonatal hypoglycemia requires prompt protocol-based treatment and reassessment."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Newborn hypoglycemia requiring urgent clinical management",
   "actions": [
    "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002211",
  "type": "Matrix Single",
  "title": "For each cue in this Newborn hypoglycemia scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
   },
   {
    "id": "cue3",
    "text": "Wait for symptoms to resolve"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002212",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Newborn hypoglycemia, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
   },
   {
    "id": "cue3",
    "text": "Give plain water"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002213",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Newborn hypoglycemia.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Newborn hypoglycemia requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Newborn hypoglycemia requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
     "Wait for symptoms to resolve",
     "Give plain water"
    ],
    "correct": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Newborn hypoglycemia requiring urgent intervention",
   "action": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002214",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Newborn hypoglycemia case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Newborn hypoglycemia requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Newborn hypoglycemia requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
     "Wait for symptoms to resolve",
     "Give plain water"
    ],
    "correct": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Newborn hypoglycemia requiring urgent clinical management",
   "response": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  }
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002215",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Newborn hypoglycemia scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
   },
   {
    "id": "h2",
    "text": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Wait for symptoms to resolve"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002216",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Newborn hypoglycemia. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Wait for symptoms to resolve",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "Wait for symptoms to resolve",
   "Give plain water",
   "Symptomatic neonatal hypoglycemia requires prompt protocol-based treatment and reassessment."
  ],
  "correctAnswer": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002217",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Newborn hypoglycemia scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002218",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Newborn hypoglycemia? Select all that apply.",
  "options": [
   "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Wait for symptoms to resolve",
   "Give plain water"
  ],
  "correctAnswers": [
   "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Maternal Newborn",
  "topic": "Newborn hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "Newborn, 2 hours old",
   "history": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL."
  },
  "ehr": {
   "assessment": "Infant of diabetic mother is jittery, poorly feeding, and has glucose 32 mg/dL.",
   "priorityAssessment": "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-030",
  "id": "QR-002219",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Newborn hypoglycemia scenario.",
  "options": [
   "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "Wait for symptoms to resolve",
   "Give plain water",
   "Symptomatic neonatal hypoglycemia requires prompt protocol-based treatment and reassessment.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Follow neonatal hypoglycemia protocol and promptly provide prescribed feeding or glucose treatment",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002220",
  "type": "Bowtie",
  "title": "A nurse is caring for a 4-year-old child with pediatric epiglottitis. Drooling, tripod position, muffled voice, fever, and stridor. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Pediatric epiglottitis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Keep child calm and prepare controlled airway management; do not inspect throat",
    "Use a tongue blade to inspect the pharynx",
    "Force the child supine",
    "Suspected epiglottitis can cause sudden airway obstruction; avoid agitation and throat examination."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Pediatric epiglottitis requiring urgent clinical management",
   "actions": [
    "Keep child calm and prepare controlled airway management; do not inspect throat",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002221",
  "type": "Matrix Single",
  "title": "For each cue in this Pediatric epiglottitis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Drooling, tripod position, muffled voice, fever, and stridor."
   },
   {
    "id": "cue2",
    "text": "Keep child calm and prepare controlled airway management; do not inspect throat"
   },
   {
    "id": "cue3",
    "text": "Use a tongue blade to inspect the pharynx"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002222",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Pediatric epiglottitis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Drooling, tripod position, muffled voice, fever, and stridor."
   },
   {
    "id": "cue2",
    "text": "Keep child calm and prepare controlled airway management; do not inspect throat"
   },
   {
    "id": "cue3",
    "text": "Force the child supine"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002223",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Pediatric epiglottitis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Pediatric epiglottitis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Pediatric epiglottitis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Keep child calm and prepare controlled airway management; do not inspect throat",
     "Use a tongue blade to inspect the pharynx",
     "Force the child supine"
    ],
    "correct": "Keep child calm and prepare controlled airway management; do not inspect throat"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Pediatric epiglottitis requiring urgent intervention",
   "action": "Keep child calm and prepare controlled airway management; do not inspect throat",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002224",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Pediatric epiglottitis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Pediatric epiglottitis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Pediatric epiglottitis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Keep child calm and prepare controlled airway management; do not inspect throat",
     "Use a tongue blade to inspect the pharynx",
     "Force the child supine"
    ],
    "correct": "Keep child calm and prepare controlled airway management; do not inspect throat"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Pediatric epiglottitis requiring urgent clinical management",
   "response": "Keep child calm and prepare controlled airway management; do not inspect throat"
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002225",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Pediatric epiglottitis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Drooling, tripod position, muffled voice, fever, and stridor."
   },
   {
    "id": "h2",
    "text": "Keep child calm and prepare controlled airway management; do not inspect throat"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Use a tongue blade to inspect the pharynx"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002226",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Pediatric epiglottitis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Drooling, tripod position, muffled voice, fever, and stridor.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Keep child calm and prepare controlled airway management; do not inspect throat",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Use a tongue blade to inspect the pharynx",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Keep child calm and prepare controlled airway management; do not inspect throat",
   "Use a tongue blade to inspect the pharynx",
   "Force the child supine",
   "Suspected epiglottitis can cause sudden airway obstruction; avoid agitation and throat examination."
  ],
  "correctAnswer": "Keep child calm and prepare controlled airway management; do not inspect throat"
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002227",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Pediatric epiglottitis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Keep child calm and prepare controlled airway management; do not inspect throat",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Keep child calm and prepare controlled airway management; do not inspect throat",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002228",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Pediatric epiglottitis? Select all that apply.",
  "options": [
   "Keep child calm and prepare controlled airway management; do not inspect throat",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Use a tongue blade to inspect the pharynx",
   "Force the child supine"
  ],
  "correctAnswers": [
   "Keep child calm and prepare controlled airway management; do not inspect throat",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric epiglottitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "4-year-old child",
   "history": "Drooling, tripod position, muffled voice, fever, and stridor."
  },
  "ehr": {
   "assessment": "Drooling, tripod position, muffled voice, fever, and stridor.",
   "priorityAssessment": "Keep child calm and prepare controlled airway management; do not inspect throat"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-031",
  "id": "QR-002229",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Pediatric epiglottitis scenario.",
  "options": [
   "Keep child calm and prepare controlled airway management; do not inspect throat",
   "Use a tongue blade to inspect the pharynx",
   "Force the child supine",
   "Suspected epiglottitis can cause sudden airway obstruction; avoid agitation and throat examination.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Keep child calm and prepare controlled airway management; do not inspect throat",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002230",
  "type": "Bowtie",
  "title": "A nurse is caring for a 8-month-old infant with bronchiolitis. Tachypnea, retractions, poor feeding, and SpO2 88%. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Bronchiolitis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Assess airway and breathing and provide prescribed oxygen and supportive care",
    "Offer large-volume oral feeds during severe distress",
    "Use cough suppressant routinely",
    "Hypoxemia and increased work of breathing require respiratory support and careful hydration."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Bronchiolitis requiring urgent clinical management",
   "actions": [
    "Assess airway and breathing and provide prescribed oxygen and supportive care",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002231",
  "type": "Matrix Single",
  "title": "For each cue in this Bronchiolitis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Tachypnea, retractions, poor feeding, and SpO2 88%."
   },
   {
    "id": "cue2",
    "text": "Assess airway and breathing and provide prescribed oxygen and supportive care"
   },
   {
    "id": "cue3",
    "text": "Offer large-volume oral feeds during severe distress"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002232",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Bronchiolitis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Tachypnea, retractions, poor feeding, and SpO2 88%."
   },
   {
    "id": "cue2",
    "text": "Assess airway and breathing and provide prescribed oxygen and supportive care"
   },
   {
    "id": "cue3",
    "text": "Use cough suppressant routinely"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002233",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Bronchiolitis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Bronchiolitis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Bronchiolitis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Assess airway and breathing and provide prescribed oxygen and supportive care",
     "Offer large-volume oral feeds during severe distress",
     "Use cough suppressant routinely"
    ],
    "correct": "Assess airway and breathing and provide prescribed oxygen and supportive care"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Bronchiolitis requiring urgent intervention",
   "action": "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002234",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Bronchiolitis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Bronchiolitis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Bronchiolitis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Assess airway and breathing and provide prescribed oxygen and supportive care",
     "Offer large-volume oral feeds during severe distress",
     "Use cough suppressant routinely"
    ],
    "correct": "Assess airway and breathing and provide prescribed oxygen and supportive care"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Bronchiolitis requiring urgent clinical management",
   "response": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  }
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002235",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Bronchiolitis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Tachypnea, retractions, poor feeding, and SpO2 88%."
   },
   {
    "id": "h2",
    "text": "Assess airway and breathing and provide prescribed oxygen and supportive care"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Offer large-volume oral feeds during severe distress"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002236",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Bronchiolitis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Tachypnea, retractions, poor feeding, and SpO2 88%.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Assess airway and breathing and provide prescribed oxygen and supportive care",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Offer large-volume oral feeds during severe distress",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "Offer large-volume oral feeds during severe distress",
   "Use cough suppressant routinely",
   "Hypoxemia and increased work of breathing require respiratory support and careful hydration."
  ],
  "correctAnswer": "Assess airway and breathing and provide prescribed oxygen and supportive care"
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002237",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Bronchiolitis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002238",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Bronchiolitis? Select all that apply.",
  "options": [
   "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Offer large-volume oral feeds during severe distress",
   "Use cough suppressant routinely"
  ],
  "correctAnswers": [
   "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Bronchiolitis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "8-month-old infant",
   "history": "Tachypnea, retractions, poor feeding, and SpO2 88%."
  },
  "ehr": {
   "assessment": "Tachypnea, retractions, poor feeding, and SpO2 88%.",
   "priorityAssessment": "Assess airway and breathing and provide prescribed oxygen and supportive care"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-032",
  "id": "QR-002239",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Bronchiolitis scenario.",
  "options": [
   "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "Offer large-volume oral feeds during severe distress",
   "Use cough suppressant routinely",
   "Hypoxemia and increased work of breathing require respiratory support and careful hydration.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Assess airway and breathing and provide prescribed oxygen and supportive care",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002240",
  "type": "Bowtie",
  "title": "A nurse is caring for a 18-month-old child with pediatric dehydration. Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Pediatric dehydration requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
    "Give undiluted juice as sole replacement",
    "Restrict fluids",
    "Delayed refill and oliguria indicate volume depletion requiring appropriate rehydration."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Pediatric dehydration requiring urgent clinical management",
   "actions": [
    "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002241",
  "type": "Matrix Single",
  "title": "For each cue in this Pediatric dehydration scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
   },
   {
    "id": "cue2",
    "text": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
   },
   {
    "id": "cue3",
    "text": "Give undiluted juice as sole replacement"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002242",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Pediatric dehydration, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
   },
   {
    "id": "cue2",
    "text": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
   },
   {
    "id": "cue3",
    "text": "Restrict fluids"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002243",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Pediatric dehydration.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Pediatric dehydration requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Pediatric dehydration requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
     "Give undiluted juice as sole replacement",
     "Restrict fluids"
    ],
    "correct": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Pediatric dehydration requiring urgent intervention",
   "action": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002244",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Pediatric dehydration case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Pediatric dehydration requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Pediatric dehydration requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
     "Give undiluted juice as sole replacement",
     "Restrict fluids"
    ],
    "correct": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Pediatric dehydration requiring urgent clinical management",
   "response": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  }
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002245",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Pediatric dehydration scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
   },
   {
    "id": "h2",
    "text": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give undiluted juice as sole replacement"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002246",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Pediatric dehydration. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give undiluted juice as sole replacement",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "Give undiluted juice as sole replacement",
   "Restrict fluids",
   "Delayed refill and oliguria indicate volume depletion requiring appropriate rehydration."
  ],
  "correctAnswer": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002247",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Pediatric dehydration scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002248",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Pediatric dehydration? Select all that apply.",
  "options": [
   "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give undiluted juice as sole replacement",
   "Restrict fluids"
  ],
  "correctAnswers": [
   "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Pediatric dehydration",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "18-month-old child",
   "history": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output."
  },
  "ehr": {
   "assessment": "Diarrhea, sunken eyes, delayed capillary refill, and decreased urine output.",
   "priorityAssessment": "Assess perfusion and initiate prescribed oral or IV rehydration based on severity"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-033",
  "id": "QR-002249",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Pediatric dehydration scenario.",
  "options": [
   "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "Give undiluted juice as sole replacement",
   "Restrict fluids",
   "Delayed refill and oliguria indicate volume depletion requiring appropriate rehydration.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Assess perfusion and initiate prescribed oral or IV rehydration based on severity",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002250",
  "type": "Bowtie",
  "title": "A nurse is caring for a 2-year-old child with febrile seizure. Child has generalized seizure with fever; movements stop after 90 seconds. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Febrile seizure requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Protect from injury, position side-lying, and assess airway after seizure",
    "Restrain limbs and place object in mouth",
    "Give oral medication during seizure",
    "Seizure first aid prioritizes injury prevention and airway protection; nothing goes in the mouth."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Febrile seizure requiring urgent clinical management",
   "actions": [
    "Protect from injury, position side-lying, and assess airway after seizure",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002251",
  "type": "Matrix Single",
  "title": "For each cue in this Febrile seizure scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Child has generalized seizure with fever; movements stop after 90 seconds."
   },
   {
    "id": "cue2",
    "text": "Protect from injury, position side-lying, and assess airway after seizure"
   },
   {
    "id": "cue3",
    "text": "Restrain limbs and place object in mouth"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002252",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Febrile seizure, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Child has generalized seizure with fever; movements stop after 90 seconds."
   },
   {
    "id": "cue2",
    "text": "Protect from injury, position side-lying, and assess airway after seizure"
   },
   {
    "id": "cue3",
    "text": "Give oral medication during seizure"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002253",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Febrile seizure.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Febrile seizure requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Febrile seizure requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Protect from injury, position side-lying, and assess airway after seizure",
     "Restrain limbs and place object in mouth",
     "Give oral medication during seizure"
    ],
    "correct": "Protect from injury, position side-lying, and assess airway after seizure"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Febrile seizure requiring urgent intervention",
   "action": "Protect from injury, position side-lying, and assess airway after seizure",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002254",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Febrile seizure case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Febrile seizure requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Febrile seizure requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Protect from injury, position side-lying, and assess airway after seizure",
     "Restrain limbs and place object in mouth",
     "Give oral medication during seizure"
    ],
    "correct": "Protect from injury, position side-lying, and assess airway after seizure"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Febrile seizure requiring urgent clinical management",
   "response": "Protect from injury, position side-lying, and assess airway after seizure"
  }
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002255",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Febrile seizure scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Child has generalized seizure with fever; movements stop after 90 seconds."
   },
   {
    "id": "h2",
    "text": "Protect from injury, position side-lying, and assess airway after seizure"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Restrain limbs and place object in mouth"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002256",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Febrile seizure. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Child has generalized seizure with fever; movements stop after 90 seconds.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Protect from injury, position side-lying, and assess airway after seizure",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Restrain limbs and place object in mouth",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Protect from injury, position side-lying, and assess airway after seizure",
   "Restrain limbs and place object in mouth",
   "Give oral medication during seizure",
   "Seizure first aid prioritizes injury prevention and airway protection; nothing goes in the mouth."
  ],
  "correctAnswer": "Protect from injury, position side-lying, and assess airway after seizure"
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002257",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Febrile seizure scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Protect from injury, position side-lying, and assess airway after seizure",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Protect from injury, position side-lying, and assess airway after seizure",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002258",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Febrile seizure? Select all that apply.",
  "options": [
   "Protect from injury, position side-lying, and assess airway after seizure",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Restrain limbs and place object in mouth",
   "Give oral medication during seizure"
  ],
  "correctAnswers": [
   "Protect from injury, position side-lying, and assess airway after seizure",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Febrile seizure",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "2-year-old child",
   "history": "Child has generalized seizure with fever; movements stop after 90 seconds."
  },
  "ehr": {
   "assessment": "Child has generalized seizure with fever; movements stop after 90 seconds.",
   "priorityAssessment": "Protect from injury, position side-lying, and assess airway after seizure"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-034",
  "id": "QR-002259",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Febrile seizure scenario.",
  "options": [
   "Protect from injury, position side-lying, and assess airway after seizure",
   "Restrain limbs and place object in mouth",
   "Give oral medication during seizure",
   "Seizure first aid prioritizes injury prevention and airway protection; nothing goes in the mouth.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Protect from injury, position side-lying, and assess airway after seizure",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002260",
  "type": "Bowtie",
  "title": "A nurse is caring for a 3-year-old child with croup. Barking cough, hoarseness, and inspiratory stridor when agitated. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Croup requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
    "Inspect throat with tongue depressor",
    "Encourage crying to assess voice",
    "Agitation worsens upper-airway obstruction; calm handling and prescribed treatment are priorities."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Croup requiring urgent clinical management",
   "actions": [
    "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002261",
  "type": "Matrix Single",
  "title": "For each cue in this Croup scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Barking cough, hoarseness, and inspiratory stridor when agitated."
   },
   {
    "id": "cue2",
    "text": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
   },
   {
    "id": "cue3",
    "text": "Inspect throat with tongue depressor"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002262",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Croup, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Barking cough, hoarseness, and inspiratory stridor when agitated."
   },
   {
    "id": "cue2",
    "text": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
   },
   {
    "id": "cue3",
    "text": "Encourage crying to assess voice"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002263",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Croup.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Croup requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Croup requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
     "Inspect throat with tongue depressor",
     "Encourage crying to assess voice"
    ],
    "correct": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Croup requiring urgent intervention",
   "action": "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002264",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Croup case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Croup requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Croup requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
     "Inspect throat with tongue depressor",
     "Encourage crying to assess voice"
    ],
    "correct": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Croup requiring urgent clinical management",
   "response": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  }
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002265",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Croup scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Barking cough, hoarseness, and inspiratory stridor when agitated."
   },
   {
    "id": "h2",
    "text": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Inspect throat with tongue depressor"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002266",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Croup. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Barking cough, hoarseness, and inspiratory stridor when agitated.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Inspect throat with tongue depressor",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "Inspect throat with tongue depressor",
   "Encourage crying to assess voice",
   "Agitation worsens upper-airway obstruction; calm handling and prescribed treatment are priorities."
  ],
  "correctAnswer": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002267",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Croup scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002268",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Croup? Select all that apply.",
  "options": [
   "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Inspect throat with tongue depressor",
   "Encourage crying to assess voice"
  ],
  "correctAnswers": [
   "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Croup",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "3-year-old child",
   "history": "Barking cough, hoarseness, and inspiratory stridor when agitated."
  },
  "ehr": {
   "assessment": "Barking cough, hoarseness, and inspiratory stridor when agitated.",
   "priorityAssessment": "Keep child calm and administer prescribed corticosteroid or nebulized therapy"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-035",
  "id": "QR-002269",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Croup scenario.",
  "options": [
   "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "Inspect throat with tongue depressor",
   "Encourage crying to assess voice",
   "Agitation worsens upper-airway obstruction; calm handling and prescribed treatment are priorities.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Keep child calm and administer prescribed corticosteroid or nebulized therapy",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002270",
  "type": "Bowtie",
  "title": "A nurse is caring for a 7-year-old child with meningitis. Fever, severe headache, neck stiffness, and photophobia. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Meningitis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Initiate appropriate isolation and urgent evaluation",
    "Place in a shared playroom",
    "Delay precautions until culture confirmation",
    "Suspected bacterial meningitis requires prompt precautions and evaluation."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Meningitis requiring urgent clinical management",
   "actions": [
    "Initiate appropriate isolation and urgent evaluation",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002271",
  "type": "Matrix Single",
  "title": "For each cue in this Meningitis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever, severe headache, neck stiffness, and photophobia."
   },
   {
    "id": "cue2",
    "text": "Initiate appropriate isolation and urgent evaluation"
   },
   {
    "id": "cue3",
    "text": "Place in a shared playroom"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002272",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Meningitis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Fever, severe headache, neck stiffness, and photophobia."
   },
   {
    "id": "cue2",
    "text": "Initiate appropriate isolation and urgent evaluation"
   },
   {
    "id": "cue3",
    "text": "Delay precautions until culture confirmation"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002273",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Meningitis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Meningitis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Meningitis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Initiate appropriate isolation and urgent evaluation",
     "Place in a shared playroom",
     "Delay precautions until culture confirmation"
    ],
    "correct": "Initiate appropriate isolation and urgent evaluation"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Meningitis requiring urgent intervention",
   "action": "Initiate appropriate isolation and urgent evaluation",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002274",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Meningitis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Meningitis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Meningitis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Initiate appropriate isolation and urgent evaluation",
     "Place in a shared playroom",
     "Delay precautions until culture confirmation"
    ],
    "correct": "Initiate appropriate isolation and urgent evaluation"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Meningitis requiring urgent clinical management",
   "response": "Initiate appropriate isolation and urgent evaluation"
  }
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002275",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Meningitis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Fever, severe headache, neck stiffness, and photophobia."
   },
   {
    "id": "h2",
    "text": "Initiate appropriate isolation and urgent evaluation"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Place in a shared playroom"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002276",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Meningitis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Fever, severe headache, neck stiffness, and photophobia.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Initiate appropriate isolation and urgent evaluation",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Place in a shared playroom",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Initiate appropriate isolation and urgent evaluation",
   "Place in a shared playroom",
   "Delay precautions until culture confirmation",
   "Suspected bacterial meningitis requires prompt precautions and evaluation."
  ],
  "correctAnswer": "Initiate appropriate isolation and urgent evaluation"
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002277",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Meningitis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Initiate appropriate isolation and urgent evaluation",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Initiate appropriate isolation and urgent evaluation",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002278",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Meningitis? Select all that apply.",
  "options": [
   "Initiate appropriate isolation and urgent evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Place in a shared playroom",
   "Delay precautions until culture confirmation"
  ],
  "correctAnswers": [
   "Initiate appropriate isolation and urgent evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Meningitis",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "7-year-old child",
   "history": "Fever, severe headache, neck stiffness, and photophobia."
  },
  "ehr": {
   "assessment": "Fever, severe headache, neck stiffness, and photophobia.",
   "priorityAssessment": "Initiate appropriate isolation and urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-036",
  "id": "QR-002279",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Meningitis scenario.",
  "options": [
   "Initiate appropriate isolation and urgent evaluation",
   "Place in a shared playroom",
   "Delay precautions until culture confirmation",
   "Suspected bacterial meningitis requires prompt precautions and evaluation.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Initiate appropriate isolation and urgent evaluation",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002280",
  "type": "Bowtie",
  "title": "A nurse is caring for a 12-year-old child with sickle cell pain crisis. Severe limb pain, fever absent, and oxygen saturation 97%. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Sickle cell pain crisis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Provide prescribed analgesia, hydration, and assessment for complications",
    "Apply ice packs to painful areas",
    "Withhold analgesia until imaging",
    "Vaso-occlusive pain requires timely analgesia and supportive care; cold can worsen vasoconstriction."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Sickle cell pain crisis requiring urgent clinical management",
   "actions": [
    "Provide prescribed analgesia, hydration, and assessment for complications",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002281",
  "type": "Matrix Single",
  "title": "For each cue in this Sickle cell pain crisis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Severe limb pain, fever absent, and oxygen saturation 97%."
   },
   {
    "id": "cue2",
    "text": "Provide prescribed analgesia, hydration, and assessment for complications"
   },
   {
    "id": "cue3",
    "text": "Apply ice packs to painful areas"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002282",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Sickle cell pain crisis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Severe limb pain, fever absent, and oxygen saturation 97%."
   },
   {
    "id": "cue2",
    "text": "Provide prescribed analgesia, hydration, and assessment for complications"
   },
   {
    "id": "cue3",
    "text": "Withhold analgesia until imaging"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002283",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Sickle cell pain crisis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Sickle cell pain crisis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Sickle cell pain crisis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Provide prescribed analgesia, hydration, and assessment for complications",
     "Apply ice packs to painful areas",
     "Withhold analgesia until imaging"
    ],
    "correct": "Provide prescribed analgesia, hydration, and assessment for complications"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Sickle cell pain crisis requiring urgent intervention",
   "action": "Provide prescribed analgesia, hydration, and assessment for complications",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002284",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Sickle cell pain crisis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Sickle cell pain crisis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Sickle cell pain crisis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Provide prescribed analgesia, hydration, and assessment for complications",
     "Apply ice packs to painful areas",
     "Withhold analgesia until imaging"
    ],
    "correct": "Provide prescribed analgesia, hydration, and assessment for complications"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Sickle cell pain crisis requiring urgent clinical management",
   "response": "Provide prescribed analgesia, hydration, and assessment for complications"
  }
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002285",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Sickle cell pain crisis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Severe limb pain, fever absent, and oxygen saturation 97%."
   },
   {
    "id": "h2",
    "text": "Provide prescribed analgesia, hydration, and assessment for complications"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Apply ice packs to painful areas"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002286",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Sickle cell pain crisis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Severe limb pain, fever absent, and oxygen saturation 97%.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Provide prescribed analgesia, hydration, and assessment for complications",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Apply ice packs to painful areas",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Provide prescribed analgesia, hydration, and assessment for complications",
   "Apply ice packs to painful areas",
   "Withhold analgesia until imaging",
   "Vaso-occlusive pain requires timely analgesia and supportive care; cold can worsen vasoconstriction."
  ],
  "correctAnswer": "Provide prescribed analgesia, hydration, and assessment for complications"
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002287",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Sickle cell pain crisis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Provide prescribed analgesia, hydration, and assessment for complications",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Provide prescribed analgesia, hydration, and assessment for complications",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002288",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Sickle cell pain crisis? Select all that apply.",
  "options": [
   "Provide prescribed analgesia, hydration, and assessment for complications",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Apply ice packs to painful areas",
   "Withhold analgesia until imaging"
  ],
  "correctAnswers": [
   "Provide prescribed analgesia, hydration, and assessment for complications",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Child Health",
  "topic": "Sickle cell pain crisis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "12-year-old child",
   "history": "Severe limb pain, fever absent, and oxygen saturation 97%."
  },
  "ehr": {
   "assessment": "Severe limb pain, fever absent, and oxygen saturation 97%.",
   "priorityAssessment": "Provide prescribed analgesia, hydration, and assessment for complications"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-037",
  "id": "QR-002289",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Sickle cell pain crisis scenario.",
  "options": [
   "Provide prescribed analgesia, hydration, and assessment for complications",
   "Apply ice packs to painful areas",
   "Withhold analgesia until imaging",
   "Vaso-occlusive pain requires timely analgesia and supportive care; cold can worsen vasoconstriction.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Provide prescribed analgesia, hydration, and assessment for complications",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002290",
  "type": "Bowtie",
  "title": "A nurse is caring for a 35-year-old adult with anaphylaxis. After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Anaphylaxis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Administer IM epinephrine per emergency protocol and activate response",
    "Give oral antihistamine as the only treatment",
    "Wait for rash to spread",
    "IM epinephrine is first-line treatment for anaphylaxis with airway or circulatory compromise."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Anaphylaxis requiring urgent clinical management",
   "actions": [
    "Administer IM epinephrine per emergency protocol and activate response",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002291",
  "type": "Matrix Single",
  "title": "For each cue in this Anaphylaxis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
   },
   {
    "id": "cue2",
    "text": "Administer IM epinephrine per emergency protocol and activate response"
   },
   {
    "id": "cue3",
    "text": "Give oral antihistamine as the only treatment"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002292",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Anaphylaxis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
   },
   {
    "id": "cue2",
    "text": "Administer IM epinephrine per emergency protocol and activate response"
   },
   {
    "id": "cue3",
    "text": "Wait for rash to spread"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002293",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Anaphylaxis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Anaphylaxis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Anaphylaxis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Administer IM epinephrine per emergency protocol and activate response",
     "Give oral antihistamine as the only treatment",
     "Wait for rash to spread"
    ],
    "correct": "Administer IM epinephrine per emergency protocol and activate response"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Anaphylaxis requiring urgent intervention",
   "action": "Administer IM epinephrine per emergency protocol and activate response",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002294",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Anaphylaxis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Anaphylaxis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Anaphylaxis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Administer IM epinephrine per emergency protocol and activate response",
     "Give oral antihistamine as the only treatment",
     "Wait for rash to spread"
    ],
    "correct": "Administer IM epinephrine per emergency protocol and activate response"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Anaphylaxis requiring urgent clinical management",
   "response": "Administer IM epinephrine per emergency protocol and activate response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002295",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Anaphylaxis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
   },
   {
    "id": "h2",
    "text": "Administer IM epinephrine per emergency protocol and activate response"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give oral antihistamine as the only treatment"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002296",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Anaphylaxis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Administer IM epinephrine per emergency protocol and activate response",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give oral antihistamine as the only treatment",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Administer IM epinephrine per emergency protocol and activate response",
   "Give oral antihistamine as the only treatment",
   "Wait for rash to spread",
   "IM epinephrine is first-line treatment for anaphylaxis with airway or circulatory compromise."
  ],
  "correctAnswer": "Administer IM epinephrine per emergency protocol and activate response"
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002297",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Anaphylaxis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Administer IM epinephrine per emergency protocol and activate response",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Administer IM epinephrine per emergency protocol and activate response",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002298",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Anaphylaxis? Select all that apply.",
  "options": [
   "Administer IM epinephrine per emergency protocol and activate response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give oral antihistamine as the only treatment",
   "Wait for rash to spread"
  ],
  "correctAnswers": [
   "Administer IM epinephrine per emergency protocol and activate response",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Anaphylaxis",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "35-year-old adult",
   "history": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg."
  },
  "ehr": {
   "assessment": "After antibiotic dose, client develops wheezing, facial swelling, and BP 78/42 mm Hg.",
   "priorityAssessment": "Administer IM epinephrine per emergency protocol and activate response"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-038",
  "id": "QR-002299",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Anaphylaxis scenario.",
  "options": [
   "Administer IM epinephrine per emergency protocol and activate response",
   "Give oral antihistamine as the only treatment",
   "Wait for rash to spread",
   "IM epinephrine is first-line treatment for anaphylaxis with airway or circulatory compromise.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Administer IM epinephrine per emergency protocol and activate response",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002300",
  "type": "Bowtie",
  "title": "A nurse is caring for a 66-year-old adult with severe hypoglycemia. Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Severe hypoglycemia requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Give prescribed IV dextrose or glucagon per protocol and reassess",
    "Give juice by mouth",
    "Administer more insulin",
    "An unconscious or unsafe-to-swallow client needs nonoral rapid glucose treatment."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Severe hypoglycemia requiring urgent clinical management",
   "actions": [
    "Give prescribed IV dextrose or glucagon per protocol and reassess",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002301",
  "type": "Matrix Single",
  "title": "For each cue in this Severe hypoglycemia scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Give prescribed IV dextrose or glucagon per protocol and reassess"
   },
   {
    "id": "cue3",
    "text": "Give juice by mouth"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002302",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Severe hypoglycemia, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Give prescribed IV dextrose or glucagon per protocol and reassess"
   },
   {
    "id": "cue3",
    "text": "Administer more insulin"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002303",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Severe hypoglycemia.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Severe hypoglycemia requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Severe hypoglycemia requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Give prescribed IV dextrose or glucagon per protocol and reassess",
     "Give juice by mouth",
     "Administer more insulin"
    ],
    "correct": "Give prescribed IV dextrose or glucagon per protocol and reassess"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Severe hypoglycemia requiring urgent intervention",
   "action": "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002304",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Severe hypoglycemia case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Severe hypoglycemia requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Severe hypoglycemia requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Give prescribed IV dextrose or glucagon per protocol and reassess",
     "Give juice by mouth",
     "Administer more insulin"
    ],
    "correct": "Give prescribed IV dextrose or glucagon per protocol and reassess"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Severe hypoglycemia requiring urgent clinical management",
   "response": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002305",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Severe hypoglycemia scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
   },
   {
    "id": "h2",
    "text": "Give prescribed IV dextrose or glucagon per protocol and reassess"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give juice by mouth"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002306",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Severe hypoglycemia. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Give prescribed IV dextrose or glucagon per protocol and reassess",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give juice by mouth",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "Give juice by mouth",
   "Administer more insulin",
   "An unconscious or unsafe-to-swallow client needs nonoral rapid glucose treatment."
  ],
  "correctAnswer": "Give prescribed IV dextrose or glucagon per protocol and reassess"
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002307",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Severe hypoglycemia scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002308",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Severe hypoglycemia? Select all that apply.",
  "options": [
   "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give juice by mouth",
   "Administer more insulin"
  ],
  "correctAnswers": [
   "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Severe hypoglycemia",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "66-year-old adult",
   "history": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL."
  },
  "ehr": {
   "assessment": "Client taking insulin is confused, diaphoretic, and unable to swallow; glucose 38 mg/dL.",
   "priorityAssessment": "Give prescribed IV dextrose or glucagon per protocol and reassess"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-039",
  "id": "QR-002309",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Severe hypoglycemia scenario.",
  "options": [
   "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "Give juice by mouth",
   "Administer more insulin",
   "An unconscious or unsafe-to-swallow client needs nonoral rapid glucose treatment.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Give prescribed IV dextrose or glucagon per protocol and reassess",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002310",
  "type": "Bowtie",
  "title": "A nurse is caring for a 73-year-old adult with warfarin bleeding. Client on warfarin has black stools, dizziness, and INR 5.8. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Warfarin bleeding requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Hold warfarin and urgently report suspected bleeding for reversal plan",
    "Give next warfarin dose",
    "Recommend aspirin",
    "Melena and elevated INR suggest clinically significant bleeding requiring urgent evaluation."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Warfarin bleeding requiring urgent clinical management",
   "actions": [
    "Hold warfarin and urgently report suspected bleeding for reversal plan",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002311",
  "type": "Matrix Single",
  "title": "For each cue in this Warfarin bleeding scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client on warfarin has black stools, dizziness, and INR 5.8."
   },
   {
    "id": "cue2",
    "text": "Hold warfarin and urgently report suspected bleeding for reversal plan"
   },
   {
    "id": "cue3",
    "text": "Give next warfarin dose"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002312",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Warfarin bleeding, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client on warfarin has black stools, dizziness, and INR 5.8."
   },
   {
    "id": "cue2",
    "text": "Hold warfarin and urgently report suspected bleeding for reversal plan"
   },
   {
    "id": "cue3",
    "text": "Recommend aspirin"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002313",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Warfarin bleeding.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Warfarin bleeding requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Warfarin bleeding requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Hold warfarin and urgently report suspected bleeding for reversal plan",
     "Give next warfarin dose",
     "Recommend aspirin"
    ],
    "correct": "Hold warfarin and urgently report suspected bleeding for reversal plan"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Warfarin bleeding requiring urgent intervention",
   "action": "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002314",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Warfarin bleeding case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Warfarin bleeding requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Warfarin bleeding requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Hold warfarin and urgently report suspected bleeding for reversal plan",
     "Give next warfarin dose",
     "Recommend aspirin"
    ],
    "correct": "Hold warfarin and urgently report suspected bleeding for reversal plan"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Warfarin bleeding requiring urgent clinical management",
   "response": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002315",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Warfarin bleeding scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client on warfarin has black stools, dizziness, and INR 5.8."
   },
   {
    "id": "h2",
    "text": "Hold warfarin and urgently report suspected bleeding for reversal plan"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give next warfarin dose"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002316",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Warfarin bleeding. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client on warfarin has black stools, dizziness, and INR 5.8.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Hold warfarin and urgently report suspected bleeding for reversal plan",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give next warfarin dose",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "Give next warfarin dose",
   "Recommend aspirin",
   "Melena and elevated INR suggest clinically significant bleeding requiring urgent evaluation."
  ],
  "correctAnswer": "Hold warfarin and urgently report suspected bleeding for reversal plan"
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002317",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Warfarin bleeding scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002318",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Warfarin bleeding? Select all that apply.",
  "options": [
   "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give next warfarin dose",
   "Recommend aspirin"
  ],
  "correctAnswers": [
   "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Warfarin bleeding",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "73-year-old adult",
   "history": "Client on warfarin has black stools, dizziness, and INR 5.8."
  },
  "ehr": {
   "assessment": "Client on warfarin has black stools, dizziness, and INR 5.8.",
   "priorityAssessment": "Hold warfarin and urgently report suspected bleeding for reversal plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-040",
  "id": "QR-002319",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Warfarin bleeding scenario.",
  "options": [
   "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "Give next warfarin dose",
   "Recommend aspirin",
   "Melena and elevated INR suggest clinically significant bleeding requiring urgent evaluation.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Hold warfarin and urgently report suspected bleeding for reversal plan",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002320",
  "type": "Bowtie",
  "title": "A nurse is caring for a 54-year-old adult with insulin administration. Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Insulin administration requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Clarify timing and coordinate insulin with food availability",
    "Give rapid-acting insulin and leave",
    "Double the dose",
    "Rapid-acting insulin should be coordinated with food intake to reduce hypoglycemia risk."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Insulin administration requiring urgent clinical management",
   "actions": [
    "Clarify timing and coordinate insulin with food availability",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002321",
  "type": "Matrix Single",
  "title": "For each cue in this Insulin administration scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Clarify timing and coordinate insulin with food availability"
   },
   {
    "id": "cue3",
    "text": "Give rapid-acting insulin and leave"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002322",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Insulin administration, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
   },
   {
    "id": "cue2",
    "text": "Clarify timing and coordinate insulin with food availability"
   },
   {
    "id": "cue3",
    "text": "Double the dose"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002323",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Insulin administration.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Insulin administration requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Insulin administration requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Clarify timing and coordinate insulin with food availability",
     "Give rapid-acting insulin and leave",
     "Double the dose"
    ],
    "correct": "Clarify timing and coordinate insulin with food availability"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Insulin administration requiring urgent intervention",
   "action": "Clarify timing and coordinate insulin with food availability",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002324",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Insulin administration case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Insulin administration requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Insulin administration requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Clarify timing and coordinate insulin with food availability",
     "Give rapid-acting insulin and leave",
     "Double the dose"
    ],
    "correct": "Clarify timing and coordinate insulin with food availability"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Insulin administration requiring urgent clinical management",
   "response": "Clarify timing and coordinate insulin with food availability"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002325",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Insulin administration scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
   },
   {
    "id": "h2",
    "text": "Clarify timing and coordinate insulin with food availability"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Give rapid-acting insulin and leave"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002326",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Insulin administration. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Clarify timing and coordinate insulin with food availability",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Give rapid-acting insulin and leave",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Clarify timing and coordinate insulin with food availability",
   "Give rapid-acting insulin and leave",
   "Double the dose",
   "Rapid-acting insulin should be coordinated with food intake to reduce hypoglycemia risk."
  ],
  "correctAnswer": "Clarify timing and coordinate insulin with food availability"
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002327",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Insulin administration scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Clarify timing and coordinate insulin with food availability",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Clarify timing and coordinate insulin with food availability",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002328",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Insulin administration? Select all that apply.",
  "options": [
   "Clarify timing and coordinate insulin with food availability",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Give rapid-acting insulin and leave",
   "Double the dose"
  ],
  "correctAnswers": [
   "Clarify timing and coordinate insulin with food availability",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Insulin administration",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "54-year-old adult",
   "history": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL."
  },
  "ehr": {
   "assessment": "Before rapid-acting insulin, meal tray is delayed and glucose is 112 mg/dL.",
   "priorityAssessment": "Clarify timing and coordinate insulin with food availability"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-041",
  "id": "QR-002329",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Insulin administration scenario.",
  "options": [
   "Clarify timing and coordinate insulin with food availability",
   "Give rapid-acting insulin and leave",
   "Double the dose",
   "Rapid-acting insulin should be coordinated with food intake to reduce hypoglycemia risk.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Clarify timing and coordinate insulin with food availability",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002330",
  "type": "Bowtie",
  "title": "A nurse is caring for a 60-year-old adult with central line infection. Client with central venous catheter develops rigors during infusion and fever. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Central line infection requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
    "Ignore symptoms if insertion site looks normal",
    "Remove line without order or protocol",
    "Bloodstream infection can occur without visible site inflammation; prompt assessment and protocol are needed."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Central line infection requiring urgent clinical management",
   "actions": [
    "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002331",
  "type": "Matrix Single",
  "title": "For each cue in this Central line infection scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client with central venous catheter develops rigors during infusion and fever."
   },
   {
    "id": "cue2",
    "text": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
   },
   {
    "id": "cue3",
    "text": "Ignore symptoms if insertion site looks normal"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002332",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Central line infection, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client with central venous catheter develops rigors during infusion and fever."
   },
   {
    "id": "cue2",
    "text": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
   },
   {
    "id": "cue3",
    "text": "Remove line without order or protocol"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002333",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Central line infection.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Central line infection requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Central line infection requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
     "Ignore symptoms if insertion site looks normal",
     "Remove line without order or protocol"
    ],
    "correct": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Central line infection requiring urgent intervention",
   "action": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002334",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Central line infection case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Central line infection requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Central line infection requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
     "Ignore symptoms if insertion site looks normal",
     "Remove line without order or protocol"
    ],
    "correct": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Central line infection requiring urgent clinical management",
   "response": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  }
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002335",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Central line infection scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client with central venous catheter develops rigors during infusion and fever."
   },
   {
    "id": "h2",
    "text": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Ignore symptoms if insertion site looks normal"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002336",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Central line infection. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client with central venous catheter develops rigors during infusion and fever.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Ignore symptoms if insertion site looks normal",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "Ignore symptoms if insertion site looks normal",
   "Remove line without order or protocol",
   "Bloodstream infection can occur without visible site inflammation; prompt assessment and protocol are needed."
  ],
  "correctAnswer": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002337",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Central line infection scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002338",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Central line infection? Select all that apply.",
  "options": [
   "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Ignore symptoms if insertion site looks normal",
   "Remove line without order or protocol"
  ],
  "correctAnswers": [
   "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Safety",
  "topic": "Central line infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "60-year-old adult",
   "history": "Client with central venous catheter develops rigors during infusion and fever."
  },
  "ehr": {
   "assessment": "Client with central venous catheter develops rigors during infusion and fever.",
   "priorityAssessment": "Stop infusion as indicated, assess, notify provider, and follow line infection protocol"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-042",
  "id": "QR-002339",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Central line infection scenario.",
  "options": [
   "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "Ignore symptoms if insertion site looks normal",
   "Remove line without order or protocol",
   "Bloodstream infection can occur without visible site inflammation; prompt assessment and protocol are needed.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Stop infusion as indicated, assess, notify provider, and follow line infection protocol",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002340",
  "type": "Bowtie",
  "title": "A nurse is caring for a 82-year-old adult with pressure injury. Immobile client has nonblanchable redness over sacrum with intact skin. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Pressure injury requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Offload pressure, reposition, and protect skin",
    "Massage reddened area",
    "Use a donut ring",
    "Nonblanchable erythema over intact skin is consistent with stage 1 pressure injury; relieve pressure."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Pressure injury requiring urgent clinical management",
   "actions": [
    "Offload pressure, reposition, and protect skin",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002341",
  "type": "Matrix Single",
  "title": "For each cue in this Pressure injury scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Immobile client has nonblanchable redness over sacrum with intact skin."
   },
   {
    "id": "cue2",
    "text": "Offload pressure, reposition, and protect skin"
   },
   {
    "id": "cue3",
    "text": "Massage reddened area"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002342",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Pressure injury, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Immobile client has nonblanchable redness over sacrum with intact skin."
   },
   {
    "id": "cue2",
    "text": "Offload pressure, reposition, and protect skin"
   },
   {
    "id": "cue3",
    "text": "Use a donut ring"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002343",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Pressure injury.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Pressure injury requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Pressure injury requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Offload pressure, reposition, and protect skin",
     "Massage reddened area",
     "Use a donut ring"
    ],
    "correct": "Offload pressure, reposition, and protect skin"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Pressure injury requiring urgent intervention",
   "action": "Offload pressure, reposition, and protect skin",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002344",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Pressure injury case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Pressure injury requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Pressure injury requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Offload pressure, reposition, and protect skin",
     "Massage reddened area",
     "Use a donut ring"
    ],
    "correct": "Offload pressure, reposition, and protect skin"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Pressure injury requiring urgent clinical management",
   "response": "Offload pressure, reposition, and protect skin"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002345",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Pressure injury scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Immobile client has nonblanchable redness over sacrum with intact skin."
   },
   {
    "id": "h2",
    "text": "Offload pressure, reposition, and protect skin"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Massage reddened area"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002346",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Pressure injury. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Immobile client has nonblanchable redness over sacrum with intact skin.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Offload pressure, reposition, and protect skin",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Massage reddened area",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Offload pressure, reposition, and protect skin",
   "Massage reddened area",
   "Use a donut ring",
   "Nonblanchable erythema over intact skin is consistent with stage 1 pressure injury; relieve pressure."
  ],
  "correctAnswer": "Offload pressure, reposition, and protect skin"
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002347",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Pressure injury scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Offload pressure, reposition, and protect skin",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Offload pressure, reposition, and protect skin",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002348",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Pressure injury? Select all that apply.",
  "options": [
   "Offload pressure, reposition, and protect skin",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Massage reddened area",
   "Use a donut ring"
  ],
  "correctAnswers": [
   "Offload pressure, reposition, and protect skin",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Pressure injury",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "82-year-old adult",
   "history": "Immobile client has nonblanchable redness over sacrum with intact skin."
  },
  "ehr": {
   "assessment": "Immobile client has nonblanchable redness over sacrum with intact skin.",
   "priorityAssessment": "Offload pressure, reposition, and protect skin"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-043",
  "id": "QR-002349",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Pressure injury scenario.",
  "options": [
   "Offload pressure, reposition, and protect skin",
   "Massage reddened area",
   "Use a donut ring",
   "Nonblanchable erythema over intact skin is consistent with stage 1 pressure injury; relieve pressure.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Offload pressure, reposition, and protect skin",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002350",
  "type": "Bowtie",
  "title": "A nurse is caring for a 78-year-old adult with aspiration risk. Client with dysphagia coughs and develops wet voice while eating. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Aspiration risk requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Stop feeding, assess respiratory status, and follow swallowing plan",
    "Offer thin water to clear throat",
    "Continue feeding more slowly without reassessment",
    "Cough and wet voice suggest aspiration; stop intake and assess."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Aspiration risk requiring urgent clinical management",
   "actions": [
    "Stop feeding, assess respiratory status, and follow swallowing plan",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002351",
  "type": "Matrix Single",
  "title": "For each cue in this Aspiration risk scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client with dysphagia coughs and develops wet voice while eating."
   },
   {
    "id": "cue2",
    "text": "Stop feeding, assess respiratory status, and follow swallowing plan"
   },
   {
    "id": "cue3",
    "text": "Offer thin water to clear throat"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002352",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Aspiration risk, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client with dysphagia coughs and develops wet voice while eating."
   },
   {
    "id": "cue2",
    "text": "Stop feeding, assess respiratory status, and follow swallowing plan"
   },
   {
    "id": "cue3",
    "text": "Continue feeding more slowly without reassessment"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002353",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Aspiration risk.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Aspiration risk requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Aspiration risk requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Stop feeding, assess respiratory status, and follow swallowing plan",
     "Offer thin water to clear throat",
     "Continue feeding more slowly without reassessment"
    ],
    "correct": "Stop feeding, assess respiratory status, and follow swallowing plan"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Aspiration risk requiring urgent intervention",
   "action": "Stop feeding, assess respiratory status, and follow swallowing plan",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002354",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Aspiration risk case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Aspiration risk requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Aspiration risk requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Stop feeding, assess respiratory status, and follow swallowing plan",
     "Offer thin water to clear throat",
     "Continue feeding more slowly without reassessment"
    ],
    "correct": "Stop feeding, assess respiratory status, and follow swallowing plan"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Aspiration risk requiring urgent clinical management",
   "response": "Stop feeding, assess respiratory status, and follow swallowing plan"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002355",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Aspiration risk scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client with dysphagia coughs and develops wet voice while eating."
   },
   {
    "id": "h2",
    "text": "Stop feeding, assess respiratory status, and follow swallowing plan"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Offer thin water to clear throat"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002356",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Aspiration risk. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client with dysphagia coughs and develops wet voice while eating.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Stop feeding, assess respiratory status, and follow swallowing plan",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Offer thin water to clear throat",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Stop feeding, assess respiratory status, and follow swallowing plan",
   "Offer thin water to clear throat",
   "Continue feeding more slowly without reassessment",
   "Cough and wet voice suggest aspiration; stop intake and assess."
  ],
  "correctAnswer": "Stop feeding, assess respiratory status, and follow swallowing plan"
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002357",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Aspiration risk scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Stop feeding, assess respiratory status, and follow swallowing plan",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Stop feeding, assess respiratory status, and follow swallowing plan",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002358",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Aspiration risk? Select all that apply.",
  "options": [
   "Stop feeding, assess respiratory status, and follow swallowing plan",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Offer thin water to clear throat",
   "Continue feeding more slowly without reassessment"
  ],
  "correctAnswers": [
   "Stop feeding, assess respiratory status, and follow swallowing plan",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Aspiration risk",
  "clientNeed": "Basic Care and Comfort",
  "difficulty": "High",
  "patientInfo": {
   "age": "78-year-old adult",
   "history": "Client with dysphagia coughs and develops wet voice while eating."
  },
  "ehr": {
   "assessment": "Client with dysphagia coughs and develops wet voice while eating.",
   "priorityAssessment": "Stop feeding, assess respiratory status, and follow swallowing plan"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-044",
  "id": "QR-002359",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Aspiration risk scenario.",
  "options": [
   "Stop feeding, assess respiratory status, and follow swallowing plan",
   "Offer thin water to clear throat",
   "Continue feeding more slowly without reassessment",
   "Cough and wet voice suggest aspiration; stop intake and assess.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Stop feeding, assess respiratory status, and follow swallowing plan",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002360",
  "type": "Bowtie",
  "title": "A nurse is caring for a 69-year-old adult with fall after sedation. Client received sedative and attempts to get out of bed unassisted. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Fall after sedation requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Initiate fall precautions and assist with mobility",
    "Encourage independent walking",
    "Keep call bell out of reach",
    "Sedation increases fall risk; environmental precautions and assisted mobility are appropriate."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Fall after sedation requiring urgent clinical management",
   "actions": [
    "Initiate fall precautions and assist with mobility",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002361",
  "type": "Matrix Single",
  "title": "For each cue in this Fall after sedation scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client received sedative and attempts to get out of bed unassisted."
   },
   {
    "id": "cue2",
    "text": "Initiate fall precautions and assist with mobility"
   },
   {
    "id": "cue3",
    "text": "Encourage independent walking"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002362",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Fall after sedation, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Client received sedative and attempts to get out of bed unassisted."
   },
   {
    "id": "cue2",
    "text": "Initiate fall precautions and assist with mobility"
   },
   {
    "id": "cue3",
    "text": "Keep call bell out of reach"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002363",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Fall after sedation.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Fall after sedation requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Fall after sedation requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Initiate fall precautions and assist with mobility",
     "Encourage independent walking",
     "Keep call bell out of reach"
    ],
    "correct": "Initiate fall precautions and assist with mobility"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Fall after sedation requiring urgent intervention",
   "action": "Initiate fall precautions and assist with mobility",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002364",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Fall after sedation case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Fall after sedation requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Fall after sedation requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Initiate fall precautions and assist with mobility",
     "Encourage independent walking",
     "Keep call bell out of reach"
    ],
    "correct": "Initiate fall precautions and assist with mobility"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Fall after sedation requiring urgent clinical management",
   "response": "Initiate fall precautions and assist with mobility"
  }
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002365",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Fall after sedation scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Client received sedative and attempts to get out of bed unassisted."
   },
   {
    "id": "h2",
    "text": "Initiate fall precautions and assist with mobility"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Encourage independent walking"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002366",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Fall after sedation. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Client received sedative and attempts to get out of bed unassisted.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Initiate fall precautions and assist with mobility",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Encourage independent walking",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Initiate fall precautions and assist with mobility",
   "Encourage independent walking",
   "Keep call bell out of reach",
   "Sedation increases fall risk; environmental precautions and assisted mobility are appropriate."
  ],
  "correctAnswer": "Initiate fall precautions and assist with mobility"
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002367",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Fall after sedation scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Initiate fall precautions and assist with mobility",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Initiate fall precautions and assist with mobility",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002368",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Fall after sedation? Select all that apply.",
  "options": [
   "Initiate fall precautions and assist with mobility",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Encourage independent walking",
   "Keep call bell out of reach"
  ],
  "correctAnswers": [
   "Initiate fall precautions and assist with mobility",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Fundamentals",
  "topic": "Fall after sedation",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "69-year-old adult",
   "history": "Client received sedative and attempts to get out of bed unassisted."
  },
  "ehr": {
   "assessment": "Client received sedative and attempts to get out of bed unassisted.",
   "priorityAssessment": "Initiate fall precautions and assist with mobility"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-045",
  "id": "QR-002369",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Fall after sedation scenario.",
  "options": [
   "Initiate fall precautions and assist with mobility",
   "Encourage independent walking",
   "Keep call bell out of reach",
   "Sedation increases fall risk; environmental precautions and assisted mobility are appropriate.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Initiate fall precautions and assist with mobility",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002370",
  "type": "Bowtie",
  "title": "A nurse is caring for a 71-year-old adult with blood pressure medication. Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Blood pressure medication requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Hold dose as appropriate and notify prescriber for parameters",
    "Administer without reassessment",
    "Give a second dose",
    "Hypotension with symptoms warrants reassessment and clarification before medication administration."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Blood pressure medication requiring urgent clinical management",
   "actions": [
    "Hold dose as appropriate and notify prescriber for parameters",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002371",
  "type": "Matrix Single",
  "title": "For each cue in this Blood pressure medication scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
   },
   {
    "id": "cue2",
    "text": "Hold dose as appropriate and notify prescriber for parameters"
   },
   {
    "id": "cue3",
    "text": "Administer without reassessment"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002372",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Blood pressure medication, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
   },
   {
    "id": "cue2",
    "text": "Hold dose as appropriate and notify prescriber for parameters"
   },
   {
    "id": "cue3",
    "text": "Give a second dose"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002373",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Blood pressure medication.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Blood pressure medication requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Blood pressure medication requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Hold dose as appropriate and notify prescriber for parameters",
     "Administer without reassessment",
     "Give a second dose"
    ],
    "correct": "Hold dose as appropriate and notify prescriber for parameters"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Blood pressure medication requiring urgent intervention",
   "action": "Hold dose as appropriate and notify prescriber for parameters",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002374",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Blood pressure medication case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Blood pressure medication requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Blood pressure medication requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Hold dose as appropriate and notify prescriber for parameters",
     "Administer without reassessment",
     "Give a second dose"
    ],
    "correct": "Hold dose as appropriate and notify prescriber for parameters"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Blood pressure medication requiring urgent clinical management",
   "response": "Hold dose as appropriate and notify prescriber for parameters"
  }
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002375",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Blood pressure medication scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
   },
   {
    "id": "h2",
    "text": "Hold dose as appropriate and notify prescriber for parameters"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Administer without reassessment"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002376",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Blood pressure medication. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Hold dose as appropriate and notify prescriber for parameters",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Administer without reassessment",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Hold dose as appropriate and notify prescriber for parameters",
   "Administer without reassessment",
   "Give a second dose",
   "Hypotension with symptoms warrants reassessment and clarification before medication administration."
  ],
  "correctAnswer": "Hold dose as appropriate and notify prescriber for parameters"
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002377",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Blood pressure medication scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Hold dose as appropriate and notify prescriber for parameters",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Hold dose as appropriate and notify prescriber for parameters",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002378",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Blood pressure medication? Select all that apply.",
  "options": [
   "Hold dose as appropriate and notify prescriber for parameters",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Administer without reassessment",
   "Give a second dose"
  ],
  "correctAnswers": [
   "Hold dose as appropriate and notify prescriber for parameters",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Pharmacology",
  "topic": "Blood pressure medication",
  "clientNeed": "Pharmacological and Parenteral Therapies",
  "difficulty": "High",
  "patientInfo": {
   "age": "71-year-old adult",
   "history": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness."
  },
  "ehr": {
   "assessment": "Before antihypertensive dose, BP is 86/50 mm Hg and client reports dizziness.",
   "priorityAssessment": "Hold dose as appropriate and notify prescriber for parameters"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-046",
  "id": "QR-002379",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Blood pressure medication scenario.",
  "options": [
   "Hold dose as appropriate and notify prescriber for parameters",
   "Administer without reassessment",
   "Give a second dose",
   "Hypotension with symptoms warrants reassessment and clarification before medication administration.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Hold dose as appropriate and notify prescriber for parameters",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002380",
  "type": "Bowtie",
  "title": "A nurse is caring for a 57-year-old adult with postoperative atelectasis. Postoperative day 1, shallow breathing, low-grade fever, and diminished bases. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Postoperative atelectasis requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
    "Maintain strict bed rest",
    "Suppress all coughing",
    "Lung expansion and mobility help prevent and treat postoperative atelectasis."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Postoperative atelectasis requiring urgent clinical management",
   "actions": [
    "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002381",
  "type": "Matrix Single",
  "title": "For each cue in this Postoperative atelectasis scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
   },
   {
    "id": "cue2",
    "text": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
   },
   {
    "id": "cue3",
    "text": "Maintain strict bed rest"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002382",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Postoperative atelectasis, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
   },
   {
    "id": "cue2",
    "text": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
   },
   {
    "id": "cue3",
    "text": "Suppress all coughing"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002383",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Postoperative atelectasis.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Postoperative atelectasis requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Postoperative atelectasis requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
     "Maintain strict bed rest",
     "Suppress all coughing"
    ],
    "correct": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Postoperative atelectasis requiring urgent intervention",
   "action": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002384",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Postoperative atelectasis case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Postoperative atelectasis requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Postoperative atelectasis requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
     "Maintain strict bed rest",
     "Suppress all coughing"
    ],
    "correct": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Postoperative atelectasis requiring urgent clinical management",
   "response": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002385",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Postoperative atelectasis scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
   },
   {
    "id": "h2",
    "text": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Maintain strict bed rest"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002386",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Postoperative atelectasis. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Maintain strict bed rest",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "Maintain strict bed rest",
   "Suppress all coughing",
   "Lung expansion and mobility help prevent and treat postoperative atelectasis."
  ],
  "correctAnswer": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002387",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Postoperative atelectasis scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002388",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Postoperative atelectasis? Select all that apply.",
  "options": [
   "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Maintain strict bed rest",
   "Suppress all coughing"
  ],
  "correctAnswers": [
   "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Postoperative atelectasis",
  "clientNeed": "Reduction of Risk Potential",
  "difficulty": "High",
  "patientInfo": {
   "age": "57-year-old adult",
   "history": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases."
  },
  "ehr": {
   "assessment": "Postoperative day 1, shallow breathing, low-grade fever, and diminished bases.",
   "priorityAssessment": "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-047",
  "id": "QR-002389",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Postoperative atelectasis scenario.",
  "options": [
   "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "Maintain strict bed rest",
   "Suppress all coughing",
   "Lung expansion and mobility help prevent and treat postoperative atelectasis.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Encourage coughing, deep breathing, mobility, and incentive spirometry as ordered",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002390",
  "type": "Bowtie",
  "title": "A nurse is caring for a 22-year-old adult with compartment syndrome. After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Compartment syndrome requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Notify orthopedic team immediately and prepare for urgent evaluation",
    "Elevate limb excessively above heart and wait",
    "Apply tight compression wrap",
    "Pain out of proportion and pain with passive stretch are early warning signs of compartment syndrome."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Compartment syndrome requiring urgent clinical management",
   "actions": [
    "Notify orthopedic team immediately and prepare for urgent evaluation",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002391",
  "type": "Matrix Single",
  "title": "For each cue in this Compartment syndrome scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
   },
   {
    "id": "cue2",
    "text": "Notify orthopedic team immediately and prepare for urgent evaluation"
   },
   {
    "id": "cue3",
    "text": "Elevate limb excessively above heart and wait"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002392",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Compartment syndrome, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
   },
   {
    "id": "cue2",
    "text": "Notify orthopedic team immediately and prepare for urgent evaluation"
   },
   {
    "id": "cue3",
    "text": "Apply tight compression wrap"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002393",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Compartment syndrome.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Compartment syndrome requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Compartment syndrome requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Notify orthopedic team immediately and prepare for urgent evaluation",
     "Elevate limb excessively above heart and wait",
     "Apply tight compression wrap"
    ],
    "correct": "Notify orthopedic team immediately and prepare for urgent evaluation"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Compartment syndrome requiring urgent intervention",
   "action": "Notify orthopedic team immediately and prepare for urgent evaluation",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002394",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Compartment syndrome case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Compartment syndrome requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Compartment syndrome requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Notify orthopedic team immediately and prepare for urgent evaluation",
     "Elevate limb excessively above heart and wait",
     "Apply tight compression wrap"
    ],
    "correct": "Notify orthopedic team immediately and prepare for urgent evaluation"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Compartment syndrome requiring urgent clinical management",
   "response": "Notify orthopedic team immediately and prepare for urgent evaluation"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002395",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Compartment syndrome scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
   },
   {
    "id": "h2",
    "text": "Notify orthopedic team immediately and prepare for urgent evaluation"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Elevate limb excessively above heart and wait"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002396",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Compartment syndrome. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Notify orthopedic team immediately and prepare for urgent evaluation",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Elevate limb excessively above heart and wait",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Notify orthopedic team immediately and prepare for urgent evaluation",
   "Elevate limb excessively above heart and wait",
   "Apply tight compression wrap",
   "Pain out of proportion and pain with passive stretch are early warning signs of compartment syndrome."
  ],
  "correctAnswer": "Notify orthopedic team immediately and prepare for urgent evaluation"
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002397",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Compartment syndrome scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Notify orthopedic team immediately and prepare for urgent evaluation",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Notify orthopedic team immediately and prepare for urgent evaluation",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002398",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Compartment syndrome? Select all that apply.",
  "options": [
   "Notify orthopedic team immediately and prepare for urgent evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Elevate limb excessively above heart and wait",
   "Apply tight compression wrap"
  ],
  "correctAnswers": [
   "Notify orthopedic team immediately and prepare for urgent evaluation",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Compartment syndrome",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "22-year-old adult",
   "history": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia."
  },
  "ehr": {
   "assessment": "After tibial fracture, severe pain with passive stretch and paresthesia despite analgesia.",
   "priorityAssessment": "Notify orthopedic team immediately and prepare for urgent evaluation"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-048",
  "id": "QR-002399",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Compartment syndrome scenario.",
  "options": [
   "Notify orthopedic team immediately and prepare for urgent evaluation",
   "Elevate limb excessively above heart and wait",
   "Apply tight compression wrap",
   "Pain out of proportion and pain with passive stretch are early warning signs of compartment syndrome.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Notify orthopedic team immediately and prepare for urgent evaluation",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002400",
  "type": "Bowtie",
  "title": "A nurse is caring for a 48-year-old adult with increased intracranial pressure. Head injury client develops decreasing LOC, vomiting, and unequal pupils. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "Increased intracranial pressure requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
    "Perform repeated deep suction without indication",
    "Place in Trendelenburg",
    "Declining consciousness and pupillary change suggest neurologic deterioration and possible herniation."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "Increased intracranial pressure requiring urgent clinical management",
   "actions": [
    "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002401",
  "type": "Matrix Single",
  "title": "For each cue in this Increased intracranial pressure scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
   },
   {
    "id": "cue2",
    "text": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
   },
   {
    "id": "cue3",
    "text": "Perform repeated deep suction without indication"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002402",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to Increased intracranial pressure, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
   },
   {
    "id": "cue2",
    "text": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
   },
   {
    "id": "cue3",
    "text": "Place in Trendelenburg"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002403",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with Increased intracranial pressure.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "Increased intracranial pressure requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "Increased intracranial pressure requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
     "Perform repeated deep suction without indication",
     "Place in Trendelenburg"
    ],
    "correct": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "Increased intracranial pressure requiring urgent intervention",
   "action": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002404",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the Increased intracranial pressure case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "Increased intracranial pressure requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "Increased intracranial pressure requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
     "Perform repeated deep suction without indication",
     "Place in Trendelenburg"
    ],
    "correct": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "Increased intracranial pressure requiring urgent clinical management",
   "response": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  }
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002405",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this Increased intracranial pressure scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
   },
   {
    "id": "h2",
    "text": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Perform repeated deep suction without indication"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002406",
  "type": "Trend",
  "title": "Review the evolving observations for the client with Increased intracranial pressure. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Perform repeated deep suction without indication",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "Perform repeated deep suction without indication",
   "Place in Trendelenburg",
   "Declining consciousness and pupillary change suggest neurologic deterioration and possible herniation."
  ],
  "correctAnswer": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002407",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the Increased intracranial pressure scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002408",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with Increased intracranial pressure? Select all that apply.",
  "options": [
   "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Perform repeated deep suction without indication",
   "Place in Trendelenburg"
  ],
  "correctAnswers": [
   "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Adult Health",
  "topic": "Increased intracranial pressure",
  "clientNeed": "Physiological Adaptation",
  "difficulty": "High",
  "patientInfo": {
   "age": "48-year-old adult",
   "history": "Head injury client develops decreasing LOC, vomiting, and unequal pupils."
  },
  "ehr": {
   "assessment": "Head injury client develops decreasing LOC, vomiting, and unequal pupils.",
   "priorityAssessment": "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-049",
  "id": "QR-002409",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this Increased intracranial pressure scenario.",
  "options": [
   "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "Perform repeated deep suction without indication",
   "Place in Trendelenburg",
   "Declining consciousness and pupillary change suggest neurologic deterioration and possible herniation.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Escalate immediately, protect airway, and minimize stimuli while preparing urgent intervention",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002410",
  "type": "Bowtie",
  "title": "A nurse is caring for a 65-year-old adult with c. difficile infection. Frequent watery diarrhea with positive C. difficile test. Complete the bowtie by identifying the likely clinical problem, selecting two appropriate nursing actions, and choosing two parameters to monitor.",
  "bowtieData": {
   "conditions": [
    "C. difficile infection requiring urgent clinical management",
    "Expected finding without complication",
    "Unrelated chronic condition"
   ],
   "actions": [
    "Use contact precautions and soap-and-water hand hygiene",
    "Use alcohol gel as sole hand hygiene",
    "Share equipment between clients",
    "C. difficile spores require contact precautions, dedicated equipment, and soap-and-water hand hygiene."
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs",
    "Unrelated routine measurement",
    "Delay all reassessment until end of shift"
   ]
  },
  "correctAnswers": {
   "condition": "C. difficile infection requiring urgent clinical management",
   "actions": [
    "Use contact precautions and soap-and-water hand hygiene",
    "Airway, breathing, circulation, and change in clinical status"
   ],
   "monitoring": [
    "Airway, breathing, circulation, and change in clinical status",
    "Response to treatment and relevant vital signs"
   ]
  }
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002411",
  "type": "Matrix Single",
  "title": "For each cue in this C. difficile infection scenario, select the best nursing interpretation.",
  "rows": [
   {
    "id": "cue1",
    "text": "Frequent watery diarrhea with positive C. difficile test."
   },
   {
    "id": "cue2",
    "text": "Use contact precautions and soap-and-water hand hygiene"
   },
   {
    "id": "cue3",
    "text": "Use alcohol gel as sole hand hygiene"
   }
  ],
  "columns": [
   "Priority response",
   "Unsafe or delayed response",
   "Requires further assessment"
  ],
  "correctAnswers": {
   "cue1": "Priority response",
   "cue2": "Priority response",
   "cue3": "Unsafe or delayed response"
  }
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002412",
  "type": "Matrix Multiple",
  "title": "For each assessment cue related to C. difficile infection, select all applicable nursing considerations.",
  "rows": [
   {
    "id": "cue1",
    "text": "Frequent watery diarrhea with positive C. difficile test."
   },
   {
    "id": "cue2",
    "text": "Use contact precautions and soap-and-water hand hygiene"
   },
   {
    "id": "cue3",
    "text": "Share equipment between clients"
   }
  ],
  "columns": [
   "Needs prompt escalation",
   "Requires focused reassessment",
   "Routine finding requiring no action"
  ],
  "correctAnswers": {
   "cue1": [
    "Needs prompt escalation",
    "Requires focused reassessment"
   ],
   "cue2": [
    "Needs prompt escalation"
   ],
   "cue3": [
    "Requires focused reassessment"
   ]
  }
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002413",
  "type": "Cloze (Drop-down)",
  "title": "Complete the clinical judgment statement for the client with C. difficile infection.",
  "clozeTemplate": "The most likely concern is {{problem}}. The nurse should {{action}} and closely monitor {{monitor}}.",
  "dropdowns": [
   {
    "id": "problem",
    "options": [
     "C. difficile infection requiring urgent intervention",
     "Expected recovery finding",
     "Medication side effect unrelated to presentation"
    ],
    "correct": "C. difficile infection requiring urgent intervention"
   },
   {
    "id": "action",
    "options": [
     "Use contact precautions and soap-and-water hand hygiene",
     "Use alcohol gel as sole hand hygiene",
     "Share equipment between clients"
    ],
    "correct": "Use contact precautions and soap-and-water hand hygiene"
   },
   {
    "id": "monitor",
    "options": [
     "Airway and hemodynamic status",
     "Hair and nail growth",
     "Routine meal preference only"
    ],
    "correct": "Airway and hemodynamic status"
   }
  ],
  "correctAnswers": {
   "problem": "C. difficile infection requiring urgent intervention",
   "action": "Use contact precautions and soap-and-water hand hygiene",
   "monitor": "Airway and hemodynamic status"
  }
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002414",
  "type": "Dropdown Rationale",
  "title": "Choose the best interpretation, response, and rationale for the C. difficile infection case.",
  "clozeTemplate": "The findings suggest {{interpretation}}. The nurse should {{response}} because {{reason}}.",
  "dropdowns": [
   {
    "id": "interpretation",
    "options": [
     "C. difficile infection requiring urgent clinical management",
     "An expected finding that needs no follow-up",
     "A condition ruled out by the available cues"
    ],
    "correct": "C. difficile infection requiring urgent clinical management"
   },
   {
    "id": "response",
    "options": [
     "Use contact precautions and soap-and-water hand hygiene",
     "Use alcohol gel as sole hand hygiene",
     "Share equipment between clients"
    ],
    "correct": "Use contact precautions and soap-and-water hand hygiene"
   },
   {
    "id": "reason",
    "options": [
     null,
     "The finding is unrelated to the current assessment.",
     "Waiting is preferred whenever a client is unstable."
    ]
   }
  ],
  "correctAnswers": {
   "interpretation": "C. difficile infection requiring urgent clinical management",
   "response": "Use contact precautions and soap-and-water hand hygiene"
  }
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002415",
  "type": "Highlight",
  "title": "Highlight the cues that require priority nursing follow-up in this C. difficile infection scenario.",
  "highlightSegments": [
   {
    "id": "h1",
    "text": "Frequent watery diarrhea with positive C. difficile test."
   },
   {
    "id": "h2",
    "text": "Use contact precautions and soap-and-water hand hygiene"
   },
   {
    "id": "h3",
    "text": "The client requests a preferred television channel."
   },
   {
    "id": "h4",
    "text": "Use alcohol gel as sole hand hygiene"
   },
   {
    "id": "h5",
    "text": "The client asks when the next meal will arrive."
   }
  ],
  "correctHighlights": [
   "h1",
   "h2"
  ]
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002416",
  "type": "Trend",
  "title": "Review the evolving observations for the client with C. difficile infection. Which trend requires the most urgent response?",
  "trendData": {
   "columns": [
    "Time",
    "Clinical observation",
    "Nursing significance"
   ],
   "rows": [
    [
     "0800",
     "Frequent watery diarrhea with positive C. difficile test.",
     "Initial abnormal presentation"
    ],
    [
     "1000",
     "Use contact precautions and soap-and-water hand hygiene",
     "Priority intervention indicated"
    ],
    [
     "1200",
     "Use alcohol gel as sole hand hygiene",
     "Unsafe alternative; reassess and escalate"
    ]
   ]
  },
  "options": [
   "Use contact precautions and soap-and-water hand hygiene",
   "Use alcohol gel as sole hand hygiene",
   "Share equipment between clients",
   "C. difficile spores require contact precautions, dedicated equipment, and soap-and-water hand hygiene."
  ],
  "correctAnswer": "Use contact precautions and soap-and-water hand hygiene"
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002417",
  "type": "Extended Drag and Drop",
  "title": "Place the nursing actions for the C. difficile infection scenario in a safe sequence.",
  "availableItems": [
   "Reassess the response and document/escalate changes.",
   "Use contact precautions and soap-and-water hand hygiene",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Verify the client and review the current assessment."
  ],
  "correctOrder": [
   "Verify the client and review the current assessment.",
   "Perform focused assessment of airway, breathing, circulation, and relevant cues.",
   "Use contact precautions and soap-and-water hand hygiene",
   "Reassess the response and document/escalate changes."
  ]
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002418",
  "type": "Extended Multiple Response",
  "title": "Which actions or findings are appropriate for the nurse caring for this client with C. difficile infection? Select all that apply.",
  "options": [
   "Use contact precautions and soap-and-water hand hygiene",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present.",
   "Use alcohol gel as sole hand hygiene",
   "Share equipment between clients"
  ],
  "correctAnswers": [
   "Use contact precautions and soap-and-water hand hygiene",
   "Reassess airway, breathing, circulation, and vital signs.",
   "Notify the appropriate clinician when deterioration or emergency cues are present."
  ]
 },
 {
  "category": "Safety",
  "topic": "C. difficile infection",
  "clientNeed": "Safety and Infection Control",
  "difficulty": "High",
  "patientInfo": {
   "age": "65-year-old adult",
   "history": "Frequent watery diarrhea with positive C. difficile test."
  },
  "ehr": {
   "assessment": "Frequent watery diarrhea with positive C. difficile test.",
   "priorityAssessment": "Use contact precautions and soap-and-water hand hygiene"
  },
  "source": "QuickRN original NGN beta draft",
  "reviewStatus": "pending_webmaster_review",
  "caseGroupId": "QR-NGN-CASE-050",
  "id": "QR-002419",
  "type": "Select N",
  "selectN": 2,
  "title": "Select the two priority nursing responses for this C. difficile infection scenario.",
  "options": [
   "Use contact precautions and soap-and-water hand hygiene",
   "Use alcohol gel as sole hand hygiene",
   "Share equipment between clients",
   "C. difficile spores require contact precautions, dedicated equipment, and soap-and-water hand hygiene.",
   "Reassess airway, breathing, circulation, and vital signs."
  ],
  "correctAnswers": [
   "Use contact precautions and soap-and-water hand hygiene",
   "Reassess airway, breathing, circulation, and vital signs."
  ]
 }
];

function qrKeyed(values,key){return (Array.isArray(values)?values.flat(Infinity):values&&typeof values==='object'?Object.values(values).flat(Infinity):[values]).some(x=>typeof x==='string'&&x.trim().toLowerCase()===(typeof key==='string'?key.trim().toLowerCase():''));}
function qrExplain(q,option,correct){
 const cue=(q.patientInfo&&q.patientInfo.history)||(q.ehr&&q.ehr.assessment)||'the documented clinical findings';
 const priority=(q.ehr&&q.ehr.priorityAssessment)||'the priority nursing response';
 return correct
 ? 'Keyed for this item. In the context of '+q.topic+', this choice is supported by the case cues ('+cue+') and is consistent with the stated priority response: '+priority+'. Reassess the client and follow applicable orders and emergency protocols.'
 : 'Not keyed as the best response for this item. Compare this choice with the case cues ('+cue+') and the stated priority response ('+priority+'). It does not take precedence over the keyed response in this scenario; verify whether it is unsupported, unsafe, or lower priority before selecting it.';
}
items.forEach(q=>{
 q.reviewStatus='pending_webmaster_review';
 q.validationStatus='automated_validation_pending';
 q.rationaleStatus='draft_for_webmaster_review';
 const cue=(q.patientInfo&&q.patientInfo.history)||(q.ehr&&q.ehr.assessment)||'the clinical findings in the case';
 const priority=(q.ehr&&q.ehr.priorityAssessment)||'the priority nursing response';
 q.rationale='Clinical reasoning for '+q.topic+': The case presents '+cue+'. The priority response is '+priority+'. Use the time-sensitive findings to identify the immediate risk, select the action that addresses that risk, and reassess the client response. Confirm this explanation during webmaster review.';
 q.clinicalJudgmentTip='Recognize the significant cues in '+q.topic+'; connect '+cue+' to the immediate risk; prioritize '+priority+'; then evaluate the client response and escalate unexpected changes.';
 q.optionRationales={};
 if(q.type==='Bowtie'&&q.bowtieData){
  ['conditions','actions','monitoring'].forEach(group=>{const keys=q.correctAnswers&&q.correctAnswers[group];q.optionRationales[group]=q.bowtieData[group].map(option=>({option,correct:qrKeyed(keys,option),rationale:qrExplain(q,option,qrKeyed(keys,option))}));});
 }else if((q.type==='Matrix Single'||q.type==='Matrix Multiple')&&Array.isArray(q.rows)){
  q.optionRationales=q.rows.map((row,index)=>{const key=q.correctAnswers&&(q.correctAnswers[row.id]!==undefined?q.correctAnswers[row.id]:q.correctAnswers[String(index)]);return {rowId:row.id||String(index),row:row.text,columns:q.columns.map(column=>({option:column,correct:qrKeyed(key,column),rationale:qrExplain(q,column,qrKeyed(key,column))}))};});
 }else if(Array.isArray(q.dropdowns)){
  q.optionRationales=q.dropdowns.map(drop=>({dropdownId:drop.id,options:(drop.options||[]).map(option=>({option,correct:!!drop.correct&&option===drop.correct,rationale:qrExplain(q,option,!!drop.correct&&option===drop.correct)}))}));
 }else if(Array.isArray(q.highlightSegments)){
  const ids=new Set(q.correctHighlights||[]);q.optionRationales=q.highlightSegments.map(seg=>({segmentId:seg.id,option:seg.text,correct:ids.has(seg.id),rationale:qrExplain(q,seg.text,ids.has(seg.id))}));
 }else if(Array.isArray(q.options)){
  const keys=q.correctAnswers!==undefined?q.correctAnswers:q.correctAnswer;q.optionRationales=q.options.map(option=>({option,correct:qrKeyed(keys,option),rationale:qrExplain(q,option,qrKeyed(keys,option))}));
 }else if(Array.isArray(q.availableItems)){
  const keys=q.correctOrder||[];q.optionRationales=q.availableItems.map(option=>({option,correct:qrKeyed(keys,option),rationale:qrExplain(q,option,qrKeyed(keys,option))}));
 }
 if(q.type==='Dropdown Rationale'&&Array.isArray(q.dropdowns)){
  const reason=q.dropdowns.find(x=>x.id==='reason');
  if(reason&&Array.isArray(reason.options)){
   const explanation='The priority response addresses the time-sensitive risk identified in the client assessment.';
   reason.options=reason.options.map(x=>x===null?explanation:x);if(!reason.options.includes(explanation))reason.options.push(explanation);
   reason.correct=explanation;q.correctAnswers=q.correctAnswers||{};q.correctAnswers.reason=explanation;
  }
 }
 const clean=v=>{if(typeof v!=='string')return v;if(/unrelated chronic condition/i.test(v))return 'A stable chronic finding that does not explain the acute presentation';if(/unrelated routine measurement/i.test(v))return 'A routine measurement that does not change the immediate nursing priority';if(/delay all reassessment until end of shift/i.test(v))return 'Defer reassessment until the next scheduled routine observation';if(/expected finding without complication/i.test(v))return 'A finding not supported by the current assessment cues';if(/routine finding requiring no action/i.test(v))return 'A finding requiring focused reassessment rather than routine observation alone';return v;};
 const walk=v=>{if(Array.isArray(v)){v.forEach((x,i)=>v[i]=walk(x));return v;}if(v&&typeof v==='object'){Object.keys(v).forEach(k=>v[k]=walk(v[k]));return v;}return clean(v);};walk(q);
});
const strokeBowtie=items.find(q=>q.id==='QR-001920');
if(strokeBowtie){const action='Maintain airway, complete a focused neurologic assessment, and document the last-known-well time.';strokeBowtie.bowtieData.actions=[strokeBowtie.bowtieData.actions[0],action,'Give aspirin before imaging','Rapidly lower blood pressure to normal'];strokeBowtie.correctAnswers.actions=[strokeBowtie.bowtieData.actions[0],action];strokeBowtie.correctAnswers.monitoring=['Airway, breathing, circulation, and change in clinical status','Response to treatment and relevant vital signs'];}
const strokeMatrix=items.find(q=>q.id==='QR-001922');if(strokeMatrix)strokeMatrix.correctAnswers.cue3=['Requires focused reassessment','Unsafe or delayed response'];
const strokeHighlight=items.find(q=>q.id==='QR-001925');if(strokeHighlight)strokeHighlight.correctHighlights=['h1'];
const strokeTrend=items.find(q=>q.id==='QR-001926');if(strokeTrend)strokeTrend.options=['Activate stroke pathway and obtain urgent noncontrast head CT','Give aspirin before imaging','Rapidly lower blood pressure to normal','Wait until the next routine assessment before escalating'];

const qrCaseRationales={"QR-NGN-CASE-001":"Imaging excludes hemorrhage and guides time-sensitive reperfusion decisions.","QR-NGN-CASE-002":"Hypotension, elevated lactate, and altered mentation indicate impaired perfusion requiring urgent escalation.","QR-NGN-CASE-003":"DKA causes volume depletion and total-body potassium deficit; insulin timing depends on serum potassium.","QR-NGN-CASE-004":"Acute pulmonary edema threatens gas exchange and requires immediate respiratory and hemodynamic support.","QR-NGN-CASE-005":"Severe hyperkalemia with ECG changes can cause fatal dysrhythmias.","QR-NGN-CASE-006":"Time-sensitive evaluation and reperfusion reduce myocardial injury.","QR-NGN-CASE-007":"Treat hypoxemia while monitoring response and ventilation; avoid withholding indicated oxygen.","QR-NGN-CASE-008":"The presentation suggests venous thromboembolism with possible pulmonary embolism.","QR-NGN-CASE-009":"Pancreatitis care includes supportive treatment, hydration, pain control, and monitoring for complications.","QR-NGN-CASE-010":"Tachycardia and hypotension with GI bleeding suggest hemodynamic compromise.","QR-NGN-CASE-011":"Hepatic encephalopathy requires treatment of precipitating factors and prescribed ammonia-lowering therapy.","QR-NGN-CASE-012":"Oliguria and rising creatinine indicate worsening renal function requiring assessment and escalation.","QR-NGN-CASE-013":"Coughing and wet voice suggest aspiration risk; oral intake should stop pending evaluation.","QR-NGN-CASE-014":"A suspected acute transfusion reaction requires stopping the product and following the reaction protocol.","QR-NGN-CASE-015":"Fever with severe neutropenia is an oncologic emergency.","QR-NGN-CASE-016":"A disconnection compromises the closed drainage system; follow emergency policy and reassess.","QR-NGN-CASE-017":"Bradypnea and reduced consciousness indicate potentially life-threatening opioid toxicity.","QR-NGN-CASE-018":"HIT can cause thrombosis despite thrombocytopenia; all heparin exposure must stop pending evaluation.","QR-NGN-CASE-019":"Bradycardia, visual symptoms, and hypokalemia increase concern for digoxin toxicity.","QR-NGN-CASE-020":"Neurologic and gastrointestinal changes can signal lithium toxicity.","QR-NGN-CASE-021":"Autonomic instability and neuromuscular hyperactivity suggest serotonin toxicity.","QR-NGN-CASE-022":"Specific plan, access, and intent indicate acute risk requiring immediate protective action.","QR-NGN-CASE-023":"A low-stimulation environment, consistent limits, and portable nutrition support safety.","QR-NGN-CASE-024":"Alcohol withdrawal can progress to seizures and delirium; structured monitoring and prescribed treatment are needed.","QR-NGN-CASE-025":"Severe-range hypertension with neurologic symptoms requires urgent maternal-fetal management.","QR-NGN-CASE-026":"Respiratory depression, absent reflexes, and oliguria suggest magnesium toxicity.","QR-NGN-CASE-027":"Uterine atony is a common cause of postpartum hemorrhage and requires immediate action.","QR-NGN-CASE-028":"Placenta previa can hemorrhage with cervical manipulation; avoid vaginal examination.","QR-NGN-CASE-029":"Fever, uterine tenderness, and malodorous lochia suggest postpartum infection.","QR-NGN-CASE-030":"Symptomatic neonatal hypoglycemia requires prompt protocol-based treatment and reassessment.","QR-NGN-CASE-031":"Suspected epiglottitis can cause sudden airway obstruction; avoid agitation and throat examination.","QR-NGN-CASE-032":"Hypoxemia and increased work of breathing require respiratory support and careful hydration.","QR-NGN-CASE-033":"Delayed refill and oliguria indicate volume depletion requiring appropriate rehydration.","QR-NGN-CASE-034":"Seizure first aid prioritizes injury prevention and airway protection; nothing goes in the mouth.","QR-NGN-CASE-035":"Agitation worsens upper-airway obstruction; calm handling and prescribed treatment are priorities.","QR-NGN-CASE-036":"Suspected bacterial meningitis requires prompt precautions and evaluation.","QR-NGN-CASE-037":"Vaso-occlusive pain requires timely analgesia and supportive care; cold can worsen vasoconstriction.","QR-NGN-CASE-038":"IM epinephrine is first-line treatment for anaphylaxis with airway or circulatory compromise.","QR-NGN-CASE-039":"An unconscious or unsafe-to-swallow client needs nonoral rapid glucose treatment.","QR-NGN-CASE-040":"Melena and elevated INR suggest clinically significant bleeding requiring urgent evaluation.","QR-NGN-CASE-041":"Rapid-acting insulin should be coordinated with food intake to reduce hypoglycemia risk.","QR-NGN-CASE-042":"Bloodstream infection can occur without visible site inflammation; prompt assessment and protocol are needed.","QR-NGN-CASE-043":"Nonblanchable erythema over intact skin is consistent with stage 1 pressure injury; relieve pressure.","QR-NGN-CASE-044":"Cough and wet voice suggest aspiration; stop intake and assess.","QR-NGN-CASE-045":"Sedation increases fall risk; environmental precautions and assisted mobility are appropriate.","QR-NGN-CASE-046":"Hypotension with symptoms warrants reassessment and clarification before medication administration.","QR-NGN-CASE-047":"Lung expansion and mobility help prevent and treat postoperative atelectasis.","QR-NGN-CASE-048":"Pain out of proportion and pain with passive stretch are early warning signs of compartment syndrome.","QR-NGN-CASE-049":"Declining consciousness and pupillary change suggest neurologic deterioration and possible herniation.","QR-NGN-CASE-050":"C. difficile spores require contact precautions, dedicated equipment, and soap-and-water hand hygiene."};
items.forEach(q=>{
 const caseReason=qrCaseRationales[q.caseGroupId]||'Use the documented findings and the stated priority response to guide safe nursing decisions.';
 q.caseRationale=caseReason;
 const cue=(q.patientInfo&&q.patientInfo.history)||(q.ehr&&q.ehr.assessment)||'the documented clinical findings';
 const priority=(q.ehr&&q.ehr.priorityAssessment)||'the priority nursing response';
 if(q.type==='Bowtie')q.rationale=caseReason+' The bowtie links the priority condition to the selected nursing actions and measurable monitoring parameters.';
 else if(q.type==='Matrix Single'||q.type==='Matrix Multiple')q.rationale=caseReason+' Classify each row independently; use the specific cue and the available clinical-response categories rather than applying one classification to every row.';
 else if(q.type==='Cloze (Drop-down)')q.rationale=caseReason+' Each keyed selection completes the clinical judgment statement by connecting the likely problem, immediate response, and focused monitoring.';
 else if(q.type==='Dropdown Rationale')q.rationale=caseReason+' Select the interpretation and response supported by the assessment, then choose the explanation that states why the response is needed.';
 else if(q.type==='Highlight')q.rationale=caseReason+' Highlight the assessment cues that support the immediate concern; do not select unrelated preferences or routine information.';
 else if(q.type==='Trend')q.rationale=caseReason+' Interpret the change over time in relation to the client’s baseline and identify the trend that requires timely nursing action.';
 else if(q.type==='Extended Drag and Drop')q.rationale=caseReason+' Sequence the actions so that focused assessment and urgent intervention occur before reassessment and documentation of the response.';
 else if(q.type==='Extended Multiple Response')q.rationale=caseReason+' Select all actions supported by the case cues; include urgent intervention and reassessment, and exclude actions that delay or worsen care.';
 else if(q.type==='Select N')q.rationale=caseReason+' Select exactly '+q.selectN+' responses that best address the immediate risk and the priority nursing needs.';
 q.clinicalJudgmentTip='Prioritize the cue(s) in this case: '+cue+' The immediate response is '+priority+'. Reassess for the expected response and escalate any deterioration.';
});

// Repair the repeated bowtie mapping defect: monitoring parameters must not be keyed as nursing actions.
items.filter(q=>q.type==='Bowtie'&&q.bowtieData&&Array.isArray(q.correctAnswers&&q.correctAnswers.actions)&&q.correctAnswers.actions.includes('Airway, breathing, circulation, and change in clinical status')).forEach(q=>{
 const first=q.correctAnswers.actions.find(x=>x!=='Airway, breathing, circulation, and change in clinical status')||q.bowtieData.actions[0];
 const second='Perform a focused reassessment and promptly escalate any deterioration while the prescribed intervention is initiated.';
 const distractors=(q.bowtieData.actions||[]).filter(x=>x!==first&&!/indicate|requires|suggest|because|guides|causes|threatens|care includes|can cause|presentation|requires immediate|is a common cause/i.test(x)).filter(x=>x!=='Airway, breathing, circulation, and change in clinical status');
 q.bowtieData.actions=[first,second,...distractors].slice(0,4);
 q.correctAnswers.actions=[first,second];
});

if(strokeMatrix){strokeMatrix.columns=['Needs prompt escalation','Requires focused reassessment','Unsafe or delayed response','Routine finding requiring no action'];strokeMatrix.correctAnswers.cue3=['Unsafe or delayed response'];}


// Rebuild option-level feedback after all answer-key and placeholder corrections above.
items.forEach(q=>{
 const explain=(option,correct)=>{const cue=(q.patientInfo&&q.patientInfo.history)||(q.ehr&&q.ehr.assessment)||'the documented clinical findings';const priority=(q.ehr&&q.ehr.priorityAssessment)||'the priority nursing response';const caseReason=q.caseRationale||'Use the documented findings to guide safe nursing decisions.';return correct?'Keyed for this item. '+caseReason+' This response addresses the priority concern: '+priority+'.':'Not keyed for this item. '+caseReason+' Compare this option with the case cues ('+cue+') and the priority response ('+priority+'); it is not the best response for this specific decision.';};
 const key=(values,option)=>{const arr=Array.isArray(values)?values.flat(Infinity):values&&typeof values==='object'?Object.values(values).flat(Infinity):[values];return arr.some(x=>typeof x==='string'&&x.trim().toLowerCase()===String(option).trim().toLowerCase());};
 if(q.type==='Bowtie'&&q.bowtieData){q.optionRationales={};['conditions','actions','monitoring'].forEach(group=>{const answerKey=group==='conditions'?q.correctAnswers.condition:q.correctAnswers[group];q.optionRationales[group]=q.bowtieData[group].map(option=>({option,correct:key(answerKey,option),rationale:explain(option,key(answerKey,option))}));});}
 else if((q.type==='Matrix Single'||q.type==='Matrix Multiple')&&Array.isArray(q.rows)){q.optionRationales=q.rows.map((row,index)=>{const answerKey=q.correctAnswers&&(q.correctAnswers[row.id]!==undefined?q.correctAnswers[row.id]:q.correctAnswers[String(index)]);return {rowId:row.id||String(index),row:row.text,columns:q.columns.map(option=>({option,correct:key(answerKey,option),rationale:explain(option,key(answerKey,option))}))};});}
 else if(Array.isArray(q.dropdowns)){q.optionRationales=q.dropdowns.map(drop=>({dropdownId:drop.id,options:(drop.options||[]).map(option=>({option,correct:!!drop.correct&&option===drop.correct,rationale:explain(option,!!drop.correct&&option===drop.correct)}))}));}
 else if(Array.isArray(q.highlightSegments)){const ids=new Set(q.correctHighlights||[]);q.optionRationales=q.highlightSegments.map(seg=>({segmentId:seg.id,option:seg.text,correct:ids.has(seg.id),rationale:explain(seg.text,ids.has(seg.id))}));}
 else if(Array.isArray(q.options)){const answers=q.correctAnswers!==undefined?q.correctAnswers:q.correctAnswer;q.optionRationales=q.options.map(option=>({option,correct:key(answers,option),rationale:explain(option,key(answers,option))}));}
 else if(Array.isArray(q.availableItems)){const answers=q.correctOrder||[];q.optionRationales=q.availableItems.map(option=>({option,correct:key(answers,option),rationale:explain(option,key(answers,option))}));}
});
items.forEach(q=>{const match=/^QR-(\d{6})$/.exec(String(q.id||''));const n=match?Number(match[1]):0;if(n>=1920&&n<=1939){q.legacyId=q.id;q.id='QR-'+String(4523+n-1920).padStart(6,'0');}});
const duplicateAlcoholWithdrawal=items.findIndex(q=>q.id==='QR-002150');
if(duplicateAlcoholWithdrawal>=0)items.splice(duplicateAlcoholWithdrawal,1);
const existing=new Set(bank.map(q=>String(q&&q.id||'')));
let added=0;
items.forEach(q=>{if(!existing.has(q.id)){bank.push(q);existing.add(q.id);added++;}});
root.questions=bank;
root.quickRNNGNB004Count=added;
})(typeof window!=='undefined'?window:globalThis);
