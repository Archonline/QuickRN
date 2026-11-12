/* Organized NCLEX topic batch 4: 20 original adult-health questions.
 * Includes multiple-response, matrix-single, extended multiple-response, and numeric-entry items.
 * Automated checks do not certify clinical accuracy.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100241",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Stroke and thrombolytic care",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client develops sudden aphasia and unilateral arm weakness 25 minutes ago. Which actions should the nurse take immediately?",
    "options": [
      "Activate the stroke response",
      "Establish the last-known-well time",
      "Prepare for urgent brain imaging",
      "Give oral aspirin before brain imaging",
      "Offer water to assess swallowing"
    ],
    "correctAnswer": [
      "Activate the stroke response",
      "Establish the last-known-well time",
      "Prepare for urgent brain imaging"
    ],
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Activate the stroke response": "This response is consistent with the clinical principle tested in this item.",
      "Establish the last-known-well time": "This response is consistent with the clinical principle tested in this item.",
      "Prepare for urgent brain imaging": "This response is consistent with the clinical principle tested in this item.",
      "Give oral aspirin before brain imaging": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Offer water to assess swallowing": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Stroke and thrombolytic care",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100241",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client develops sudden aphasia and unilateral arm weakness 25 minutes ago. Which actions should the nurse take immediately?",
      "options": [
        "Activate the stroke response",
        "Establish the last-known-well time",
        "Prepare for urgent brain imaging",
        "Give oral aspirin before brain imaging",
        "Offer water to assess swallowing"
      ],
      "answerKey": [
        "Activate the stroke response",
        "Establish the last-known-well time",
        "Prepare for urgent brain imaging"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client develops sudden aphasia and unilateral arm weakness 25 minutes ago. Which actions should the nurse take immediately?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Activate the stroke response": "This response is consistent with the clinical principle tested in this item.",
        "Establish the last-known-well time": "This response is consistent with the clinical principle tested in this item.",
        "Prepare for urgent brain imaging": "This response is consistent with the clinical principle tested in this item.",
        "Give oral aspirin before brain imaging": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Offer water to assess swallowing": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100242",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Seizures and status epilepticus",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A hospitalized client begins a generalized tonic-clonic seizure. Which action is appropriate?",
    "options": [
      "Protect the head and clear nearby hazards",
      "Turn the client to the side when possible",
      "Time the seizure",
      "Restrain the extremities",
      "Insert an object into the mouth"
    ],
    "correctAnswer": "Protect the head and clear nearby hazards",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Protect the head and clear nearby hazards": "This response is consistent with the clinical principle tested in this item.",
      "Turn the client to the side when possible": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Time the seizure": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Restrain the extremities": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Insert an object into the mouth": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Seizures and status epilepticus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/003200.htm",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100242",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A hospitalized client begins a generalized tonic-clonic seizure. Which action is appropriate?",
      "options": [
        "Protect the head and clear nearby hazards",
        "Turn the client to the side when possible",
        "Time the seizure",
        "Restrain the extremities",
        "Insert an object into the mouth"
      ],
      "answerKey": "Protect the head and clear nearby hazards",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A hospitalized client begins a generalized tonic-clonic seizure. Which action is appropriate?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Protect the head and clear nearby hazards": "This response is consistent with the clinical principle tested in this item.",
        "Turn the client to the side when possible": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Time the seizure": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Restrain the extremities": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Insert an object into the mouth": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100243",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Parkinson disease",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with Parkinson disease has difficulty initiating movement and a shuffling gait. Which intervention best reduces fall risk during ambulation?",
    "options": [
      "Use cueing strategies and allow time to initiate each step",
      "Pull the client forward by the arms",
      "Encourage rapid turns to improve balance",
      "Ask the client to carry several objects while walking"
    ],
    "correctAnswer": "Use cueing strategies and allow time to initiate each step",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Use cueing strategies and allow time to initiate each step": "This response is consistent with the clinical principle tested in this item.",
      "Pull the client forward by the arms": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Encourage rapid turns to improve balance": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Ask the client to carry several objects while walking": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Parkinson disease",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/parkinsons-disease",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100243",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with Parkinson disease has difficulty initiating movement and a shuffling gait. Which intervention best reduces fall risk during ambulation?",
      "options": [
        "Use cueing strategies and allow time to initiate each step",
        "Pull the client forward by the arms",
        "Encourage rapid turns to improve balance",
        "Ask the client to carry several objects while walking"
      ],
      "answerKey": "Use cueing strategies and allow time to initiate each step",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with Parkinson disease has difficulty initiating movement and a shuffling gait. Which intervention best reduces fall risk during ambulation?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Use cueing strategies and allow time to initiate each step": "This response is consistent with the clinical principle tested in this item.",
        "Pull the client forward by the arms": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Encourage rapid turns to improve balance": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Ask the client to carry several objects while walking": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100244",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Increased intracranial pressure",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Matrix Single",
    "question": "A client with a severe head injury is being monitored for increased intracranial pressure. Match each finding to the most appropriate interpretation.",
    "options": [
      "Decreasing level of consciousness",
      "New unilateral pupil dilation",
      "Bradycardia with widening pulse pressure",
      "Stable orientation and equal reactive pupils"
    ],
    "correctAnswer": "Decreasing level of consciousness",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "loc": "Declining consciousness is an early warning sign.",
      "pupil": "New pupil asymmetry may indicate neurologic deterioration.",
      "cushing": "This pattern is concerning for increased intracranial pressure.",
      "stable": "Stable findings are reassuring but still require monitoring."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Increased intracranial pressure",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000793.htm",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100244",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Matrix Single",
      "stem": "A client with a severe head injury is being monitored for increased intracranial pressure. Match each finding to the most appropriate interpretation.",
      "options": {
        "loc": [
          "Concerning for increased intracranial pressure",
          "Reassuring neurologic finding"
        ],
        "pupil": [
          "Concerning for increased intracranial pressure",
          "Reassuring neurologic finding"
        ],
        "cushing": [
          "Concerning for increased intracranial pressure",
          "Reassuring neurologic finding"
        ],
        "stable": [
          "Concerning for increased intracranial pressure",
          "Reassuring neurologic finding"
        ]
      },
      "answerKey": {
        "loc": "Concerning for increased intracranial pressure",
        "pupil": "Concerning for increased intracranial pressure",
        "cushing": "Concerning for increased intracranial pressure",
        "stable": "Reassuring neurologic finding"
      },
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with a severe head injury is being monitored for increased intracranial pressure. Match each finding to the most appropriate interpretation."
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "loc": "Declining consciousness is an early warning sign.",
        "pupil": "New pupil asymmetry may indicate neurologic deterioration.",
        "cushing": "This pattern is concerning for increased intracranial pressure.",
        "stable": "Stable findings are reassuring but still require monitoring."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    },
    "matrixLeftPane": "The client has a severe head injury and new neurologic changes.",
    "matrixTask": "Match each finding to the most appropriate interpretation.",
    "rows": [
      {
        "id": "loc",
        "label": "Decreasing level of consciousness"
      },
      {
        "id": "pupil",
        "label": "New unilateral pupil dilation"
      },
      {
        "id": "cushing",
        "label": "Bradycardia with widening pulse pressure"
      },
      {
        "id": "stable",
        "label": "Stable orientation and equal reactive pupils"
      }
    ],
    "columns": [
      "Concerning for increased intracranial pressure",
      "Reassuring neurologic finding"
    ],
    "correctAnswers": {
      "loc": "Concerning for increased intracranial pressure",
      "pupil": "Concerning for increased intracranial pressure",
      "cushing": "Concerning for increased intracranial pressure",
      "stable": "Reassuring neurologic finding"
    }
  },
  {
    "id": "QR-100245",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Diabetes mellitus and insulin",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A nurse is teaching a client who uses insulin. Which safety actions should be included?",
    "options": [
      "Verify the insulin type and dose against the prescription",
      "Coordinate rapid-acting insulin with meal availability",
      "Monitor glucose and recognize hypoglycemia symptoms",
      "Use the same injection site repeatedly without rotation",
      "Share insulin pens between family members"
    ],
    "correctAnswer": [
      "Verify the insulin type and dose against the prescription",
      "Coordinate rapid-acting insulin with meal availability",
      "Monitor glucose and recognize hypoglycemia symptoms"
    ],
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Verify the insulin type and dose against the prescription": "This response is consistent with the clinical principle tested in this item.",
      "Coordinate rapid-acting insulin with meal availability": "This response is consistent with the clinical principle tested in this item.",
      "Monitor glucose and recognize hypoglycemia symptoms": "This response is consistent with the clinical principle tested in this item.",
      "Use the same injection site repeatedly without rotation": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Share insulin pens between family members": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Diabetes mellitus and insulin",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.cdc.gov/diabetes/about/about-insulin.html",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100245",
      "category": "Adult Health",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A nurse is teaching a client who uses insulin. Which safety actions should be included?",
      "options": [
        "Verify the insulin type and dose against the prescription",
        "Coordinate rapid-acting insulin with meal availability",
        "Monitor glucose and recognize hypoglycemia symptoms",
        "Use the same injection site repeatedly without rotation",
        "Share insulin pens between family members"
      ],
      "answerKey": [
        "Verify the insulin type and dose against the prescription",
        "Coordinate rapid-acting insulin with meal availability",
        "Monitor glucose and recognize hypoglycemia symptoms"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A nurse is teaching a client who uses insulin. Which safety actions should be included?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Verify the insulin type and dose against the prescription": "This response is consistent with the clinical principle tested in this item.",
        "Coordinate rapid-acting insulin with meal availability": "This response is consistent with the clinical principle tested in this item.",
        "Monitor glucose and recognize hypoglycemia symptoms": "This response is consistent with the clinical principle tested in this item.",
        "Use the same injection site repeatedly without rotation": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Share insulin pens between family members": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100246",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "DKA vs HHS",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with diabetes has glucose 580 mg/dL, deep rapid respirations, abdominal pain, positive serum ketones, and metabolic acidosis. Which condition is most likely?",
    "options": [
      "Diabetic ketoacidosis",
      "Hyperosmolar hyperglycemic state without ketoacidosis",
      "Mild hypoglycemia",
      "Diabetes insipidus"
    ],
    "correctAnswer": "Diabetic ketoacidosis",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Diabetic ketoacidosis": "This response is consistent with the clinical principle tested in this item.",
      "Hyperosmolar hyperglycemic state without ketoacidosis": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Mild hypoglycemia": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Diabetes insipidus": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for DKA vs HHS",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100246",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with diabetes has glucose 580 mg/dL, deep rapid respirations, abdominal pain, positive serum ketones, and metabolic acidosis. Which condition is most likely?",
      "options": [
        "Diabetic ketoacidosis",
        "Hyperosmolar hyperglycemic state without ketoacidosis",
        "Mild hypoglycemia",
        "Diabetes insipidus"
      ],
      "answerKey": "Diabetic ketoacidosis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with diabetes has glucose 580 mg/dL, deep rapid respirations, abdominal pain, positive serum ketones, and metabolic acidosis. Which condition is most likely?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Diabetic ketoacidosis": "This response is consistent with the clinical principle tested in this item.",
        "Hyperosmolar hyperglycemic state without ketoacidosis": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Mild hypoglycemia": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Diabetes insipidus": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100247",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Thyroid storm and myxedema",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client with untreated hyperthyroidism is febrile, extremely tachycardic, agitated, and vomiting. Which findings support concern for thyroid storm?",
    "options": [
      "High fever",
      "Marked tachycardia",
      "Agitation or altered mental status",
      "Hypothermia with bradycardia",
      "Severe gastrointestinal symptoms"
    ],
    "correctAnswer": [
      "High fever",
      "Marked tachycardia",
      "Agitation or altered mental status",
      "Severe gastrointestinal symptoms"
    ],
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "High fever": "This response is consistent with the clinical principle tested in this item.",
      "Marked tachycardia": "This response is consistent with the clinical principle tested in this item.",
      "Agitation or altered mental status": "This response is consistent with the clinical principle tested in this item.",
      "Hypothermia with bradycardia": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Severe gastrointestinal symptoms": "This response is consistent with the clinical principle tested in this item."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Thyroid storm and myxedema",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000400.htm",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100247",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client with untreated hyperthyroidism is febrile, extremely tachycardic, agitated, and vomiting. Which findings support concern for thyroid storm?",
      "options": [
        "High fever",
        "Marked tachycardia",
        "Agitation or altered mental status",
        "Hypothermia with bradycardia",
        "Severe gastrointestinal symptoms"
      ],
      "answerKey": [
        "High fever",
        "Marked tachycardia",
        "Agitation or altered mental status",
        "Severe gastrointestinal symptoms"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with untreated hyperthyroidism is febrile, extremely tachycardic, agitated, and vomiting. Which findings support concern for thyroid storm?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "High fever": "This response is consistent with the clinical principle tested in this item.",
        "Marked tachycardia": "This response is consistent with the clinical principle tested in this item.",
        "Agitation or altered mental status": "This response is consistent with the clinical principle tested in this item.",
        "Hypothermia with bradycardia": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Severe gastrointestinal symptoms": "This response is consistent with the clinical principle tested in this item."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100248",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Adrenal insufficiency and Cushing syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with adrenal insufficiency develops vomiting, profound weakness, hypotension, and confusion during an infection. Which complication should the nurse suspect?",
    "options": [
      "Adrenal crisis",
      "Cushing syndrome",
      "Diabetes insipidus",
      "Uncomplicated viral illness"
    ],
    "correctAnswer": "Adrenal crisis",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Adrenal crisis": "This response is consistent with the clinical principle tested in this item.",
      "Cushing syndrome": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Diabetes insipidus": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Uncomplicated viral illness": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Adrenal insufficiency and Cushing syndrome",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000378.htm",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100248",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with adrenal insufficiency develops vomiting, profound weakness, hypotension, and confusion during an infection. Which complication should the nurse suspect?",
      "options": [
        "Adrenal crisis",
        "Cushing syndrome",
        "Diabetes insipidus",
        "Uncomplicated viral illness"
      ],
      "answerKey": "Adrenal crisis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with adrenal insufficiency develops vomiting, profound weakness, hypotension, and confusion during an infection. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Adrenal crisis": "This response is consistent with the clinical principle tested in this item.",
        "Cushing syndrome": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Diabetes insipidus": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Uncomplicated viral illness": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100249",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Acute kidney injury",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with acute kidney injury has a rising creatinine and urine output of 20 mL/hr. Which prescription should the nurse question?",
    "options": [
      "An NSAID for routine pain without reviewing renal risk",
      "Strict intake and output monitoring",
      "Daily weights",
      "Repeat renal function and electrolyte testing"
    ],
    "correctAnswer": "An NSAID for routine pain without reviewing renal risk",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "An NSAID for routine pain without reviewing renal risk": "This response is consistent with the clinical principle tested in this item.",
      "Strict intake and output monitoring": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Daily weights": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Repeat renal function and electrolyte testing": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Acute kidney injury",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100249",
      "category": "Adult Health",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with acute kidney injury has a rising creatinine and urine output of 20 mL/hr. Which prescription should the nurse question?",
      "options": [
        "An NSAID for routine pain without reviewing renal risk",
        "Strict intake and output monitoring",
        "Daily weights",
        "Repeat renal function and electrolyte testing"
      ],
      "answerKey": "An NSAID for routine pain without reviewing renal risk",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with acute kidney injury has a rising creatinine and urine output of 20 mL/hr. Which prescription should the nurse question?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "An NSAID for routine pain without reviewing renal risk": "This response is consistent with the clinical principle tested in this item.",
        "Strict intake and output monitoring": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Daily weights": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Repeat renal function and electrolyte testing": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100250",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Chronic kidney disease",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with advanced chronic kidney disease reports muscle weakness. The ECG shows peaked T waves. Which electrolyte imbalance should the nurse suspect?",
    "options": [
      "Hyperkalemia",
      "Hypocalcemia",
      "Hyponatremia",
      "Hypophosphatemia"
    ],
    "correctAnswer": "Hyperkalemia",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Hyperkalemia": "This response is consistent with the clinical principle tested in this item.",
      "Hypocalcemia": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Hyponatremia": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Hypophosphatemia": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Chronic kidney disease",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100250",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with advanced chronic kidney disease reports muscle weakness. The ECG shows peaked T waves. Which electrolyte imbalance should the nurse suspect?",
      "options": [
        "Hyperkalemia",
        "Hypocalcemia",
        "Hyponatremia",
        "Hypophosphatemia"
      ],
      "answerKey": "Hyperkalemia",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with advanced chronic kidney disease reports muscle weakness. The ECG shows peaked T waves. Which electrolyte imbalance should the nurse suspect?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Hyperkalemia": "This response is consistent with the clinical principle tested in this item.",
        "Hypocalcemia": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Hyponatremia": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Hypophosphatemia": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100251",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hemodialysis and peritoneal dialysis",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client has a left-arm arteriovenous fistula for hemodialysis. Which nursing actions are appropriate?",
    "options": [
      "Assess for a palpable thrill and audible bruit",
      "Avoid blood pressure measurements in the access arm",
      "Avoid venipuncture in the access arm",
      "Use the access arm for routine IV insertion",
      "Report absence of the thrill promptly"
    ],
    "correctAnswer": [
      "Assess for a palpable thrill and audible bruit",
      "Avoid blood pressure measurements in the access arm",
      "Avoid venipuncture in the access arm",
      "Report absence of the thrill promptly"
    ],
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Assess for a palpable thrill and audible bruit": "This response is consistent with the clinical principle tested in this item.",
      "Avoid blood pressure measurements in the access arm": "This response is consistent with the clinical principle tested in this item.",
      "Avoid venipuncture in the access arm": "This response is consistent with the clinical principle tested in this item.",
      "Use the access arm for routine IV insertion": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Report absence of the thrill promptly": "This response is consistent with the clinical principle tested in this item."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Hemodialysis and peritoneal dialysis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/hemodialysis",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100251",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client has a left-arm arteriovenous fistula for hemodialysis. Which nursing actions are appropriate?",
      "options": [
        "Assess for a palpable thrill and audible bruit",
        "Avoid blood pressure measurements in the access arm",
        "Avoid venipuncture in the access arm",
        "Use the access arm for routine IV insertion",
        "Report absence of the thrill promptly"
      ],
      "answerKey": [
        "Assess for a palpable thrill and audible bruit",
        "Avoid blood pressure measurements in the access arm",
        "Avoid venipuncture in the access arm",
        "Report absence of the thrill promptly"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client has a left-arm arteriovenous fistula for hemodialysis. Which nursing actions are appropriate?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Assess for a palpable thrill and audible bruit": "This response is consistent with the clinical principle tested in this item.",
        "Avoid blood pressure measurements in the access arm": "This response is consistent with the clinical principle tested in this item.",
        "Avoid venipuncture in the access arm": "This response is consistent with the clinical principle tested in this item.",
        "Use the access arm for routine IV insertion": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Report absence of the thrill promptly": "This response is consistent with the clinical principle tested in this item."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100252",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Electrolyte imbalances",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "Which assessment findings are associated with potentially dangerous potassium disturbances?",
    "options": [
      "Peaked T waves with hyperkalemia",
      "Muscle weakness with hypokalemia",
      "New dysrhythmia",
      "Improved muscle strength with severe potassium abnormality",
      "ECG changes in a client with renal failure"
    ],
    "correctAnswer": [
      "Peaked T waves with hyperkalemia",
      "Muscle weakness with hypokalemia",
      "New dysrhythmia",
      "ECG changes in a client with renal failure"
    ],
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Peaked T waves with hyperkalemia": "This response is consistent with the clinical principle tested in this item.",
      "Muscle weakness with hypokalemia": "This response is consistent with the clinical principle tested in this item.",
      "New dysrhythmia": "This response is consistent with the clinical principle tested in this item.",
      "Improved muscle strength with severe potassium abnormality": "This response does not best address the clinical cues or safety priority in this scenario.",
      "ECG changes in a client with renal failure": "This response is consistent with the clinical principle tested in this item."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Electrolyte imbalances",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/fluidandelectrolytebalance.html",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100252",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which assessment findings are associated with potentially dangerous potassium disturbances?",
      "options": [
        "Peaked T waves with hyperkalemia",
        "Muscle weakness with hypokalemia",
        "New dysrhythmia",
        "Improved muscle strength with severe potassium abnormality",
        "ECG changes in a client with renal failure"
      ],
      "answerKey": [
        "Peaked T waves with hyperkalemia",
        "Muscle weakness with hypokalemia",
        "New dysrhythmia",
        "ECG changes in a client with renal failure"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "Which assessment findings are associated with potentially dangerous potassium disturbances?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Peaked T waves with hyperkalemia": "This response is consistent with the clinical principle tested in this item.",
        "Muscle weakness with hypokalemia": "This response is consistent with the clinical principle tested in this item.",
        "New dysrhythmia": "This response is consistent with the clinical principle tested in this item.",
        "Improved muscle strength with severe potassium abnormality": "This response does not best address the clinical cues or safety priority in this scenario.",
        "ECG changes in a client with renal failure": "This response is consistent with the clinical principle tested in this item."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100253",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "GI bleeding",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with suspected upper gastrointestinal bleeding becomes pale and diaphoretic. Heart rate is 132/min and blood pressure is 84/50 mmHg. What is the priority?",
    "options": [
      "Activate emergency response and support circulation while preparing prescribed resuscitation",
      "Offer oral fluids",
      "Schedule a routine outpatient endoscopy",
      "Assist the client to ambulate"
    ],
    "correctAnswer": "Activate emergency response and support circulation while preparing prescribed resuscitation",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Activate emergency response and support circulation while preparing prescribed resuscitation": "This response is consistent with the clinical principle tested in this item.",
      "Offer oral fluids": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Schedule a routine outpatient endoscopy": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Assist the client to ambulate": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for GI bleeding",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/003133.htm",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100253",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with suspected upper gastrointestinal bleeding becomes pale and diaphoretic. Heart rate is 132/min and blood pressure is 84/50 mmHg. What is the priority?",
      "options": [
        "Activate emergency response and support circulation while preparing prescribed resuscitation",
        "Offer oral fluids",
        "Schedule a routine outpatient endoscopy",
        "Assist the client to ambulate"
      ],
      "answerKey": "Activate emergency response and support circulation while preparing prescribed resuscitation",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with suspected upper gastrointestinal bleeding becomes pale and diaphoretic. Heart rate is 132/min and blood pressure is 84/50 mmHg. What is the priority?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Activate emergency response and support circulation while preparing prescribed resuscitation": "This response is consistent with the clinical principle tested in this item.",
        "Offer oral fluids": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Schedule a routine outpatient endoscopy": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Assist the client to ambulate": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100254",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Cirrhosis and hepatic encephalopathy",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with cirrhosis becomes confused and has asterixis. Which prescribed therapy should the nurse anticipate to reduce ammonia absorption?",
    "options": [
      "Lactulose",
      "Ibuprofen",
      "Potassium chloride",
      "Loperamide"
    ],
    "correctAnswer": "Lactulose",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Lactulose": "This response is consistent with the clinical principle tested in this item.",
      "Ibuprofen": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Potassium chloride": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Loperamide": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Cirrhosis and hepatic encephalopathy",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100254",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with cirrhosis becomes confused and has asterixis. Which prescribed therapy should the nurse anticipate to reduce ammonia absorption?",
      "options": [
        "Lactulose",
        "Ibuprofen",
        "Potassium chloride",
        "Loperamide"
      ],
      "answerKey": "Lactulose",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with cirrhosis becomes confused and has asterixis. Which prescribed therapy should the nurse anticipate to reduce ammonia absorption?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Lactulose": "This response is consistent with the clinical principle tested in this item.",
        "Ibuprofen": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Potassium chloride": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Loperamide": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100255",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Pancreatitis",
    "clientNeeds": "Reduction of Risk Potential",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Numeric Entry",
    "question": "A client with acute pancreatitis has a serum lipase result of 680 U/L. Enter the reported lipase value.",
    "options": [],
    "correctAnswer": "680",
    "rationale": "The item asks for the reported serum lipase value; enter 680 U/L.",
    "optionRationales": {
      "value": "The item asks for the reported serum lipase value; enter 680 U/L."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Pancreatitis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/pancreatitis",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100255",
      "category": "Adult Health",
      "clientNeeds": "Reduction of Risk Potential",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Numeric Entry",
      "stem": "A client with acute pancreatitis has a serum lipase result of 680 U/L. Enter the reported lipase value.",
      "options": [],
      "answerKey": 680,
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with acute pancreatitis has a serum lipase result of 680 U/L. Enter the reported lipase value."
    },
    "rationales": {
      "overall": "The item asks for the reported serum lipase value; enter 680 U/L.",
      "options": {
        "value": "The item asks for the reported serum lipase value; enter 680 U/L."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    },
    "correctNumericAnswer": 680,
    "numericAnswer": 680,
    "unit": "U/L"
  },
  {
    "id": "QR-100256",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Inflammatory bowel disease",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Extended Multiple Response",
    "question": "A client with Crohn disease is experiencing a flare with frequent diarrhea and abdominal pain. Which nursing actions are appropriate?",
    "options": [
      "Monitor hydration and electrolyte status",
      "Assess stool frequency and characteristics",
      "Provide prescribed nutrition support and individualized diet teaching",
      "Encourage the client to stop prescribed maintenance therapy",
      "Assess for fever or worsening abdominal pain"
    ],
    "correctAnswer": [
      "Monitor hydration and electrolyte status",
      "Assess stool frequency and characteristics",
      "Provide prescribed nutrition support and individualized diet teaching",
      "Assess for fever or worsening abdominal pain"
    ],
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Monitor hydration and electrolyte status": "This response is consistent with the clinical principle tested in this item.",
      "Assess stool frequency and characteristics": "This response is consistent with the clinical principle tested in this item.",
      "Provide prescribed nutrition support and individualized diet teaching": "This response is consistent with the clinical principle tested in this item.",
      "Encourage the client to stop prescribed maintenance therapy": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Assess for fever or worsening abdominal pain": "This response is consistent with the clinical principle tested in this item."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Inflammatory bowel disease",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/inflammatory-bowel-disease",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100256",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Extended Multiple Response",
      "stem": "A client with Crohn disease is experiencing a flare with frequent diarrhea and abdominal pain. Which nursing actions are appropriate?",
      "options": [
        "Monitor hydration and electrolyte status",
        "Assess stool frequency and characteristics",
        "Provide prescribed nutrition support and individualized diet teaching",
        "Encourage the client to stop prescribed maintenance therapy",
        "Assess for fever or worsening abdominal pain"
      ],
      "answerKey": [
        "Monitor hydration and electrolyte status",
        "Assess stool frequency and characteristics",
        "Provide prescribed nutrition support and individualized diet teaching",
        "Assess for fever or worsening abdominal pain"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with Crohn disease is experiencing a flare with frequent diarrhea and abdominal pain. Which nursing actions are appropriate?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Monitor hydration and electrolyte status": "This response is consistent with the clinical principle tested in this item.",
        "Assess stool frequency and characteristics": "This response is consistent with the clinical principle tested in this item.",
        "Provide prescribed nutrition support and individualized diet teaching": "This response is consistent with the clinical principle tested in this item.",
        "Encourage the client to stop prescribed maintenance therapy": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Assess for fever or worsening abdominal pain": "This response is consistent with the clinical principle tested in this item."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100257",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Fractures and compartment syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with a tibial fracture reports severe pain unrelieved by prescribed analgesia and pain with passive toe movement. Which complication should the nurse suspect?",
    "options": [
      "Acute compartment syndrome",
      "Expected postoperative soreness",
      "Venous insufficiency",
      "Osteoarthritis"
    ],
    "correctAnswer": "Acute compartment syndrome",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Acute compartment syndrome": "This response is consistent with the clinical principle tested in this item.",
      "Expected postoperative soreness": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Venous insufficiency": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Osteoarthritis": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Fractures and compartment syndrome",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://orthoinfo.aaos.org/en/diseases--conditions/compartment-syndrome",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100257",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with a tibial fracture reports severe pain unrelieved by prescribed analgesia and pain with passive toe movement. Which complication should the nurse suspect?",
      "options": [
        "Acute compartment syndrome",
        "Expected postoperative soreness",
        "Venous insufficiency",
        "Osteoarthritis"
      ],
      "answerKey": "Acute compartment syndrome",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with a tibial fracture reports severe pain unrelieved by prescribed analgesia and pain with passive toe movement. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Acute compartment syndrome": "This response is consistent with the clinical principle tested in this item.",
        "Expected postoperative soreness": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Venous insufficiency": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Osteoarthritis": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100258",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hip replacement precautions",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client is learning precautions after a posterior total hip replacement. Which movement should the client avoid during early recovery?",
    "options": [
      "Flexing the hip beyond the prescribed limit while bending forward",
      "Using an elevated chair as instructed",
      "Keeping the legs separated with an abduction pillow as prescribed",
      "Using an assistive device for transfers"
    ],
    "correctAnswer": "Flexing the hip beyond the prescribed limit while bending forward",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Flexing the hip beyond the prescribed limit while bending forward": "This response is consistent with the clinical principle tested in this item.",
      "Using an elevated chair as instructed": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Keeping the legs separated with an abduction pillow as prescribed": "This response does not best address the clinical cues or safety priority in this scenario.",
      "Using an assistive device for transfers": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Hip replacement precautions",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://orthoinfo.aaos.org/en/treatment/total-hip-replacement",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100258",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client is learning precautions after a posterior total hip replacement. Which movement should the client avoid during early recovery?",
      "options": [
        "Flexing the hip beyond the prescribed limit while bending forward",
        "Using an elevated chair as instructed",
        "Keeping the legs separated with an abduction pillow as prescribed",
        "Using an assistive device for transfers"
      ],
      "answerKey": "Flexing the hip beyond the prescribed limit while bending forward",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client is learning precautions after a posterior total hip replacement. Which movement should the client avoid during early recovery?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Flexing the hip beyond the prescribed limit while bending forward": "This response is consistent with the clinical principle tested in this item.",
        "Using an elevated chair as instructed": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Keeping the legs separated with an abduction pillow as prescribed": "This response does not best address the clinical cues or safety priority in this scenario.",
        "Using an assistive device for transfers": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  },
  {
    "id": "QR-100259",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Osteoporosis",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Numeric Entry",
    "question": "A client has a DXA T-score of -2.7. Enter the reported T-score.",
    "options": [],
    "correctAnswer": "-2.7",
    "rationale": "The item asks for the reported DXA T-score; enter -2.7.",
    "optionRationales": {
      "value": "The item asks for the reported DXA T-score; enter -2.7."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Osteoporosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niams.nih.gov/health-topics/osteoporosis",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100259",
      "category": "Adult Health",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Numeric Entry",
      "stem": "A client has a DXA T-score of -2.7. Enter the reported T-score.",
      "options": [],
      "answerKey": -2.7,
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client has a DXA T-score of -2.7. Enter the reported T-score."
    },
    "rationales": {
      "overall": "The item asks for the reported DXA T-score; enter -2.7.",
      "options": {
        "value": "The item asks for the reported DXA T-score; enter -2.7."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    },
    "correctNumericAnswer": -2.7,
    "numericAnswer": -2.7,
    "unit": "T-score"
  },
  {
    "id": "QR-100260",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Rheumatoid arthritis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with rheumatoid arthritis reports morning stiffness and symmetric swelling of the metacarpophalangeal joints. Which interpretation is most appropriate?",
    "options": [
      "Findings are consistent with active inflammatory rheumatoid arthritis",
      "Findings are diagnostic of an acute gout attack only",
      "The pattern is typical of osteoarthritis alone",
      "The findings indicate a traumatic tendon rupture"
    ],
    "correctAnswer": "Findings are consistent with active inflammatory rheumatoid arthritis",
    "rationale": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
    "optionRationales": {
      "Findings are consistent with active inflammatory rheumatoid arthritis": "This response is consistent with the clinical principle tested in this item.",
      "Findings are diagnostic of an acute gout attack only": "This response does not best address the clinical cues or safety priority in this scenario.",
      "The pattern is typical of osteoarthritis alone": "This response does not best address the clinical cues or safety priority in this scenario.",
      "The findings indicate a traumatic tendon rupture": "This response does not best address the clinical cues or safety priority in this scenario."
    },
    "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Rheumatoid arthritis",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational practice item; apply current protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100260",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with rheumatoid arthritis reports morning stiffness and symmetric swelling of the metacarpophalangeal joints. Which interpretation is most appropriate?",
      "options": [
        "Findings are consistent with active inflammatory rheumatoid arthritis",
        "Findings are diagnostic of an acute gout attack only",
        "The pattern is typical of osteoarthritis alone",
        "The findings indicate a traumatic tendon rupture"
      ],
      "answerKey": "Findings are consistent with active inflammatory rheumatoid arthritis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with rheumatoid arthritis reports morning stiffness and symmetric swelling of the metacarpophalangeal joints. Which interpretation is most appropriate?"
    },
    "rationales": {
      "overall": "The assessment findings and clinical context support the keyed response. Use the client's current status, evidence-based nursing priorities, and prescribed care plan to guide action.",
      "options": {
        "Findings are consistent with active inflammatory rheumatoid arthritis": "This response is consistent with the clinical principle tested in this item.",
        "Findings are diagnostic of an acute gout attack only": "This response does not best address the clinical cues or safety priority in this scenario.",
        "The pattern is typical of osteoarthritis alone": "This response does not best address the clinical cues or safety priority in this scenario.",
        "The findings indicate a traumatic tendon rupture": "This response does not best address the clinical cues or safety priority in this scenario."
      },
      "clinicalJudgmentTip": "Interpret the findings in context, prioritize immediate safety, and reassess after nursing interventions."
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch4={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
