/* Organized NCLEX topic batch 6: 20 original adult-health questions.
 * Includes matrix-multiple, extended multiple-response, numeric-entry, dropdown-rationale, Select N, and single-choice items.
 * Automated checks do not certify clinical accuracy.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100281",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Guillain-Barré syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with Guillain-Barré syndrome has ascending weakness and reports new difficulty swallowing. Which complication is the priority concern?",
    "options": [
      "Respiratory muscle failure and aspiration",
      "Chronic hypertension",
      "Hyperglycemia",
      "Peripheral edema"
    ],
    "correctAnswer": "Respiratory muscle failure and aspiration",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Respiratory muscle failure and aspiration": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Chronic hypertension": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Hyperglycemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Peripheral edema": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Guillain-Barré syndrome",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/guillain-barre-syndrome",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100281",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with Guillain-Barré syndrome has ascending weakness and reports new difficulty swallowing. Which complication is the priority concern?",
      "options": [
        "Respiratory muscle failure and aspiration",
        "Chronic hypertension",
        "Hyperglycemia",
        "Peripheral edema"
      ],
      "answerKey": "Respiratory muscle failure and aspiration",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with Guillain-Barré syndrome has ascending weakness and reports new difficulty swallowing. Which complication is the priority concern?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Respiratory muscle failure and aspiration": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Chronic hypertension": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Hyperglycemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Peripheral edema": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100282",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Myasthenia gravis and myasthenic crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and shallow respirations. What is the priority nursing action?",
    "options": [
      "Escalate immediately for respiratory assessment and possible ventilatory support",
      "Offer a large meal to improve strength",
      "Encourage unassisted ambulation",
      "Delay assessment until oxygen saturation falls"
    ],
    "correctAnswer": "Escalate immediately for respiratory assessment and possible ventilatory support",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Escalate immediately for respiratory assessment and possible ventilatory support": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Offer a large meal to improve strength": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Encourage unassisted ambulation": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Delay assessment until oxygen saturation falls": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Myasthenia gravis and myasthenic crisis",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100282",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and shallow respirations. What is the priority nursing action?",
      "options": [
        "Escalate immediately for respiratory assessment and possible ventilatory support",
        "Offer a large meal to improve strength",
        "Encourage unassisted ambulation",
        "Delay assessment until oxygen saturation falls"
      ],
      "answerKey": "Escalate immediately for respiratory assessment and possible ventilatory support",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with myasthenia gravis develops worsening dysphagia, weak cough, and shallow respirations. What is the priority nursing action?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Escalate immediately for respiratory assessment and possible ventilatory support": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Offer a large meal to improve strength": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Encourage unassisted ambulation": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Delay assessment until oxygen saturation falls": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100283",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Multiple sclerosis",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with multiple sclerosis reports worsening fatigue and weakness after a hot shower. Which teaching is appropriate?",
    "options": [
      "Use cooling strategies and avoid overheating",
      "Increase exposure to hot tubs",
      "Stop prescribed disease-modifying therapy during fatigue",
      "Restrict all fluids"
    ],
    "correctAnswer": "Use cooling strategies and avoid overheating",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Use cooling strategies and avoid overheating": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Increase exposure to hot tubs": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Stop prescribed disease-modifying therapy during fatigue": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Restrict all fluids": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Multiple sclerosis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.ninds.nih.gov/health-information/disorders/multiple-sclerosis",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100283",
      "category": "Adult Health",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with multiple sclerosis reports worsening fatigue and weakness after a hot shower. Which teaching is appropriate?",
      "options": [
        "Use cooling strategies and avoid overheating",
        "Increase exposure to hot tubs",
        "Stop prescribed disease-modifying therapy during fatigue",
        "Restrict all fluids"
      ],
      "answerKey": "Use cooling strategies and avoid overheating",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with multiple sclerosis reports worsening fatigue and weakness after a hot shower. Which teaching is appropriate?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Use cooling strategies and avoid overheating": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Increase exposure to hot tubs": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Stop prescribed disease-modifying therapy during fatigue": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Restrict all fluids": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100284",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Spinal cord injury and neurogenic shock",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with a high spinal cord injury is hypotensive, bradycardic, and has warm, dry skin. Which type of shock should the nurse suspect?",
    "options": [
      "Neurogenic shock",
      "Hypovolemic shock",
      "Septic shock",
      "Cardiogenic shock"
    ],
    "correctAnswer": "Neurogenic shock",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Neurogenic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Hypovolemic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Septic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Cardiogenic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Spinal cord injury and neurogenic shock",
        "publisher": "Relevant public health agency or professional organization",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100284",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with a high spinal cord injury is hypotensive, bradycardic, and has warm, dry skin. Which type of shock should the nurse suspect?",
      "options": [
        "Neurogenic shock",
        "Hypovolemic shock",
        "Septic shock",
        "Cardiogenic shock"
      ],
      "answerKey": "Neurogenic shock",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with a high spinal cord injury is hypotensive, bradycardic, and has warm, dry skin. Which type of shock should the nurse suspect?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Neurogenic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Hypovolemic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Septic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Cardiogenic shock": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100285",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Meningitis and encephalitis in adults",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "A client is admitted with suspected bacterial meningitis. Which nursing actions are appropriate?",
    "options": [
      "Initiate droplet precautions when meningococcal disease is suspected",
      "Obtain ordered blood cultures promptly if this does not delay urgent therapy",
      "Administer prescribed antimicrobials promptly",
      "Wait for a lumbar puncture result before initiating precautions"
    ],
    "correctAnswer": [
      "Initiate droplet precautions when meningococcal disease is suspected",
      "Obtain ordered blood cultures promptly if this does not delay urgent therapy",
      "Administer prescribed antimicrobials promptly"
    ],
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Initiate droplet precautions when meningococcal disease is suspected": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Obtain ordered blood cultures promptly if this does not delay urgent therapy": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Administer prescribed antimicrobials promptly": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Wait for a lumbar puncture result before initiating precautions": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Meningitis and encephalitis in adults",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.cdc.gov/infection-control/hcp/isolation-precautions/summary-recommendations.html",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100285",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client is admitted with suspected bacterial meningitis. Which nursing actions are appropriate?",
      "options": [
        "Initiate droplet precautions when meningococcal disease is suspected",
        "Obtain ordered blood cultures promptly if this does not delay urgent therapy",
        "Administer prescribed antimicrobials promptly",
        "Wait for a lumbar puncture result before initiating precautions"
      ],
      "answerKey": [
        "Initiate droplet precautions when meningococcal disease is suspected",
        "Obtain ordered blood cultures promptly if this does not delay urgent therapy",
        "Administer prescribed antimicrobials promptly"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client is admitted with suspected bacterial meningitis. Which nursing actions are appropriate?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Initiate droplet precautions when meningococcal disease is suspected": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Obtain ordered blood cultures promptly if this does not delay urgent therapy": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Administer prescribed antimicrobials promptly": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Wait for a lumbar puncture result before initiating precautions": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100286",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Delirium versus dementia",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "An older adult who was oriented yesterday develops fluctuating attention, disorganized thinking, and altered sleep-wake pattern after surgery. Which condition is most likely?",
    "options": [
      "Delirium",
      "Alzheimer disease progression over one day",
      "Normal aging",
      "Chronic stable dementia"
    ],
    "correctAnswer": "Delirium",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Delirium": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Alzheimer disease progression over one day": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Normal aging": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Chronic stable dementia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Delirium versus dementia",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.nia.nih.gov/health/delirium",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100286",
      "category": "Adult Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "An older adult who was oriented yesterday develops fluctuating attention, disorganized thinking, and altered sleep-wake pattern after surgery. Which condition is most likely?",
      "options": [
        "Delirium",
        "Alzheimer disease progression over one day",
        "Normal aging",
        "Chronic stable dementia"
      ],
      "answerKey": "Delirium",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "An older adult who was oriented yesterday develops fluctuating attention, disorganized thinking, and altered sleep-wake pattern after surgery. Which condition is most likely?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Delirium": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Alzheimer disease progression over one day": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Normal aging": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Chronic stable dementia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100287",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Appendicitis and peritonitis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with suspected appendicitis reports sudden relief of right lower quadrant pain followed by generalized abdominal rigidity and fever. What should the nurse suspect?",
    "options": [
      "Appendiceal rupture with peritonitis",
      "Resolution of appendicitis",
      "Uncomplicated constipation",
      "Expected response to analgesia"
    ],
    "correctAnswer": "Appendiceal rupture with peritonitis",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Appendiceal rupture with peritonitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Resolution of appendicitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Uncomplicated constipation": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Expected response to analgesia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Appendicitis and peritonitis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000256.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100287",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with suspected appendicitis reports sudden relief of right lower quadrant pain followed by generalized abdominal rigidity and fever. What should the nurse suspect?",
      "options": [
        "Appendiceal rupture with peritonitis",
        "Resolution of appendicitis",
        "Uncomplicated constipation",
        "Expected response to analgesia"
      ],
      "answerKey": "Appendiceal rupture with peritonitis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with suspected appendicitis reports sudden relief of right lower quadrant pain followed by generalized abdominal rigidity and fever. What should the nurse suspect?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Appendiceal rupture with peritonitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Resolution of appendicitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Uncomplicated constipation": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Expected response to analgesia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100288",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Bowel obstruction and ileus",
    "clientNeeds": "Reduction of Risk Potential",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 4,
    "type": "Numeric Entry",
    "question": "A client with a bowel obstruction has a nasogastric tube that drained 850 mL during the last shift. Enter the recorded drainage volume in mL.",
    "options": [],
    "correctAnswer": "850",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "value": "The question asks for the recorded drainage amount of 850 mL."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Bowel obstruction and ileus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000260.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100288",
      "category": "Adult Health",
      "clientNeeds": "Reduction of Risk Potential",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 4
    },
    "interaction": {
      "type": "Numeric Entry",
      "stem": "A client with a bowel obstruction has a nasogastric tube that drained 850 mL during the last shift. Enter the recorded drainage volume in mL.",
      "options": [],
      "answerKey": 850,
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with a bowel obstruction has a nasogastric tube that drained 850 mL during the last shift. Enter the recorded drainage volume in mL."
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "value": "The question asks for the recorded drainage amount of 850 mL."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    },
    "correctNumericAnswer": 850,
    "numericAnswer": 850,
    "unit": "mL"
  },
  {
    "id": "QR-100289",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Cholecystitis and cholelithiasis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client reports right upper quadrant pain after a high-fat meal, fever, and a positive Murphy sign. Which condition is most likely?",
    "options": [
      "Acute cholecystitis",
      "Acute appendicitis",
      "Pancreatic insufficiency",
      "Diverticulitis"
    ],
    "correctAnswer": "Acute cholecystitis",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Acute cholecystitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Acute appendicitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Pancreatic insufficiency": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Diverticulitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Cholecystitis and cholelithiasis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000264.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100289",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client reports right upper quadrant pain after a high-fat meal, fever, and a positive Murphy sign. Which condition is most likely?",
      "options": [
        "Acute cholecystitis",
        "Acute appendicitis",
        "Pancreatic insufficiency",
        "Diverticulitis"
      ],
      "answerKey": "Acute cholecystitis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client reports right upper quadrant pain after a high-fat meal, fever, and a positive Murphy sign. Which condition is most likely?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Acute cholecystitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Acute appendicitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Pancreatic insufficiency": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Diverticulitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100290",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Diverticulitis and diverticular disease",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with acute diverticulitis has left lower quadrant pain, fever, and leukocytosis. Which instruction should the nurse reinforce during acute management?",
    "options": [
      "Follow the prescribed bowel-rest or diet plan and report worsening pain or fever",
      "Increase high-fiber foods immediately during severe acute symptoms without provider guidance",
      "Use stimulant laxatives routinely",
      "Ignore new abdominal rigidity"
    ],
    "correctAnswer": "Follow the prescribed bowel-rest or diet plan and report worsening pain or fever",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Follow the prescribed bowel-rest or diet plan and report worsening pain or fever": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Increase high-fiber foods immediately during severe acute symptoms without provider guidance": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Use stimulant laxatives routinely": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Ignore new abdominal rigidity": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Diverticulitis and diverticular disease",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/diverticulosis-diverticulitis",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100290",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with acute diverticulitis has left lower quadrant pain, fever, and leukocytosis. Which instruction should the nurse reinforce during acute management?",
      "options": [
        "Follow the prescribed bowel-rest or diet plan and report worsening pain or fever",
        "Increase high-fiber foods immediately during severe acute symptoms without provider guidance",
        "Use stimulant laxatives routinely",
        "Ignore new abdominal rigidity"
      ],
      "answerKey": "Follow the prescribed bowel-rest or diet plan and report worsening pain or fever",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with acute diverticulitis has left lower quadrant pain, fever, and leukocytosis. Which instruction should the nurse reinforce during acute management?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Follow the prescribed bowel-rest or diet plan and report worsening pain or fever": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Increase high-fiber foods immediately during severe acute symptoms without provider guidance": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Use stimulant laxatives routinely": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Ignore new abdominal rigidity": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100291",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Ostomy complications and care",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Extended Multiple Response",
    "question": "A client with a new ileostomy has a dusky purple stoma and increasing abdominal pain. Which response is appropriate?",
    "options": [
      "Notify the surgical team about the dusky stoma.",
      "Assess stoma color, temperature, and perfusion.",
      "Assess abdominal pain and output.",
      "Apply a heating pad directly to the stoma.",
      "Irrigate forcefully without an order."
    ],
    "correctAnswer": [
      "Notify the surgical team about the dusky stoma.",
      "Assess stoma color, temperature, and perfusion.",
      "Assess abdominal pain and output."
    ],
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Notify the surgical team about the dusky stoma.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
      "Assess stoma color, temperature, and perfusion.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
      "Assess abdominal pain and output.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
      "Apply a heating pad directly to the stoma.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
      "Irrigate forcefully without an order.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Ostomy complications and care",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/patientinstructions/000071.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100291",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Extended Multiple Response",
      "stem": "A client with a new ileostomy has a dusky purple stoma and increasing abdominal pain. Which response is appropriate?",
      "options": [
        "Notify the surgical team about the dusky stoma.",
        "Assess stoma color, temperature, and perfusion.",
        "Assess abdominal pain and output.",
        "Apply a heating pad directly to the stoma.",
        "Irrigate forcefully without an order."
      ],
      "answerKey": [
        "Notify the surgical team about the dusky stoma.",
        "Assess stoma color, temperature, and perfusion.",
        "Assess abdominal pain and output."
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with a new ileostomy has a dusky purple stoma and increasing abdominal pain. Which response is appropriate?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Notify the surgical team about the dusky stoma.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
        "Assess stoma color, temperature, and perfusion.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
        "Assess abdominal pain and output.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
        "Apply a heating pad directly to the stoma.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications.",
        "Irrigate forcefully without an order.": "This option should be considered in the context of possible impaired stoma perfusion and surgical complications."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100292",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hepatitis and acute liver failure",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with acute liver failure becomes confused and has increasing bruising. Which complication should the nurse suspect?",
    "options": [
      "Hepatic encephalopathy with impaired clotting-factor synthesis",
      "Uncomplicated gastroenteritis",
      "Iron deficiency alone",
      "Chronic venous insufficiency"
    ],
    "correctAnswer": "Hepatic encephalopathy with impaired clotting-factor synthesis",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Hepatic encephalopathy with impaired clotting-factor synthesis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Uncomplicated gastroenteritis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Iron deficiency alone": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Chronic venous insufficiency": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Hepatitis and acute liver failure",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000302.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100292",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with acute liver failure becomes confused and has increasing bruising. Which complication should the nurse suspect?",
      "options": [
        "Hepatic encephalopathy with impaired clotting-factor synthesis",
        "Uncomplicated gastroenteritis",
        "Iron deficiency alone",
        "Chronic venous insufficiency"
      ],
      "answerKey": "Hepatic encephalopathy with impaired clotting-factor synthesis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with acute liver failure becomes confused and has increasing bruising. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Hepatic encephalopathy with impaired clotting-factor synthesis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Uncomplicated gastroenteritis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Iron deficiency alone": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Chronic venous insufficiency": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100293",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Nephrotic and nephritic syndromes",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "Which findings are more consistent with nephrotic syndrome?",
    "options": [
      "Heavy proteinuria",
      "Hypoalbuminemia",
      "Generalized edema",
      "Marked hematuria as the defining feature",
      "Hyperlipidemia"
    ],
    "correctAnswer": [
      "Heavy proteinuria",
      "Hypoalbuminemia",
      "Generalized edema",
      "Hyperlipidemia"
    ],
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Heavy proteinuria": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Hypoalbuminemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Generalized edema": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Marked hematuria as the defining feature": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Hyperlipidemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Nephrotic and nephritic syndromes",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000490.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100293",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which findings are more consistent with nephrotic syndrome?",
      "options": [
        "Heavy proteinuria",
        "Hypoalbuminemia",
        "Generalized edema",
        "Marked hematuria as the defining feature",
        "Hyperlipidemia"
      ],
      "answerKey": [
        "Heavy proteinuria",
        "Hypoalbuminemia",
        "Generalized edema",
        "Hyperlipidemia"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "Which findings are more consistent with nephrotic syndrome?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Heavy proteinuria": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Hypoalbuminemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Generalized edema": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Marked hematuria as the defining feature": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Hyperlipidemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100294",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Renal calculi and urinary obstruction",
    "clientNeeds": "Basic Care and Comfort",
    "cjmmStep": "Generate Solutions",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with renal calculi has severe flank pain radiating to the groin and microscopic hematuria. Which nursing intervention is appropriate?",
    "options": [
      "Strain all urine as prescribed to collect passed stones for analysis",
      "Restrict all fluids unless specifically ordered",
      "Apply deep pressure over the affected kidney",
      "Discard urine after pain resolves"
    ],
    "correctAnswer": "Strain all urine as prescribed to collect passed stones for analysis",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Strain all urine as prescribed to collect passed stones for analysis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Restrict all fluids unless specifically ordered": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Apply deep pressure over the affected kidney": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Discard urine after pain resolves": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Renal calculi and urinary obstruction",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/kidneystones.html",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100294",
      "category": "Adult Health",
      "clientNeeds": "Basic Care and Comfort",
      "cjmmStep": "Generate Solutions",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with renal calculi has severe flank pain radiating to the groin and microscopic hematuria. Which nursing intervention is appropriate?",
      "options": [
        "Strain all urine as prescribed to collect passed stones for analysis",
        "Restrict all fluids unless specifically ordered",
        "Apply deep pressure over the affected kidney",
        "Discard urine after pain resolves"
      ],
      "answerKey": "Strain all urine as prescribed to collect passed stones for analysis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with renal calculi has severe flank pain radiating to the groin and microscopic hematuria. Which nursing intervention is appropriate?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Strain all urine as prescribed to collect passed stones for analysis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Restrict all fluids unless specifically ordered": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Apply deep pressure over the affected kidney": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Discard urine after pain resolves": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100295",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Dialysis access complications",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client receiving hemodialysis reports that the thrill over the arteriovenous fistula is no longer palpable. What should the nurse do?",
    "options": [
      "Notify the dialysis or vascular access team immediately",
      "Apply a tight dressing and reassess tomorrow",
      "Use the fistula for routine blood draws",
      "Place a blood pressure cuff over the access"
    ],
    "correctAnswer": "Notify the dialysis or vascular access team immediately",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Notify the dialysis or vascular access team immediately": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Apply a tight dressing and reassess tomorrow": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Use the fistula for routine blood draws": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Place a blood pressure cuff over the access": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Dialysis access complications",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100295",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client receiving hemodialysis reports that the thrill over the arteriovenous fistula is no longer palpable. What should the nurse do?",
      "options": [
        "Notify the dialysis or vascular access team immediately",
        "Apply a tight dressing and reassess tomorrow",
        "Use the fistula for routine blood draws",
        "Place a blood pressure cuff over the access"
      ],
      "answerKey": "Notify the dialysis or vascular access team immediately",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving hemodialysis reports that the thrill over the arteriovenous fistula is no longer palpable. What should the nurse do?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Notify the dialysis or vascular access team immediately": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Apply a tight dressing and reassess tomorrow": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Use the fistula for routine blood draws": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Place a blood pressure cuff over the access": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100296",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Peritoneal dialysis peritonitis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client receiving peritoneal dialysis reports abdominal pain and the drained dialysate is cloudy. Which complication should the nurse suspect?",
    "options": [
      "Peritonitis",
      "Expected dialysate appearance",
      "Hypoglycemia",
      "Uncomplicated constipation"
    ],
    "correctAnswer": "Peritonitis",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Peritonitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Expected dialysate appearance": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Hypoglycemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Uncomplicated constipation": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Peritoneal dialysis peritonitis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://www.niddk.nih.gov/health-information/kidney-disease/kidney-failure/peritoneal-dialysis",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100296",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client receiving peritoneal dialysis reports abdominal pain and the drained dialysate is cloudy. Which complication should the nurse suspect?",
      "options": [
        "Peritonitis",
        "Expected dialysate appearance",
        "Hypoglycemia",
        "Uncomplicated constipation"
      ],
      "answerKey": "Peritonitis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client receiving peritoneal dialysis reports abdominal pain and the drained dialysate is cloudy. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Peritonitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Expected dialysate appearance": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Hypoglycemia": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Uncomplicated constipation": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100297",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Chronic kidney disease mineral-bone disorder",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with advanced chronic kidney disease has elevated phosphate and parathyroid hormone levels. Which complication is the nurse monitoring for?",
    "options": [
      "CKD-related mineral and bone disorder",
      "Acute appendicitis",
      "Hyperthyroidism",
      "Iron overload"
    ],
    "correctAnswer": "CKD-related mineral and bone disorder",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "CKD-related mineral and bone disorder": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Acute appendicitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Hyperthyroidism": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Iron overload": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Chronic kidney disease mineral-bone disorder",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100297",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with advanced chronic kidney disease has elevated phosphate and parathyroid hormone levels. Which complication is the nurse monitoring for?",
      "options": [
        "CKD-related mineral and bone disorder",
        "Acute appendicitis",
        "Hyperthyroidism",
        "Iron overload"
      ],
      "answerKey": "CKD-related mineral and bone disorder",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with advanced chronic kidney disease has elevated phosphate and parathyroid hormone levels. Which complication is the nurse monitoring for?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "CKD-related mineral and bone disorder": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Acute appendicitis": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Hyperthyroidism": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Iron overload": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  },
  {
    "id": "QR-100298",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Urinary retention and bladder irrigation",
    "clientNeeds": "Reduction of Risk Potential",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Dropdown Rationale",
    "question": "Complete the rationale for calculating output during continuous bladder irrigation.",
    "options": {},
    "correctAnswer": "",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "true urine": "The infused irrigant must be subtracted to calculate the urine produced by the kidneys.",
      "stool": "Stool is not calculated from urinary drainage.",
      "oral intake": "Oral intake is not the output measured in the drainage bag."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Urinary retention and bladder irrigation",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/002996.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100298",
      "category": "Adult Health",
      "clientNeeds": "Reduction of Risk Potential",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Dropdown Rationale",
      "stem": "Complete the rationale: During continuous bladder irrigation after prostate surgery, the nurse subtracts the irrigant infused from the total drainage to calculate the client's {{1}} output.",
      "options": [
        {
          "id": "1",
          "options": [
            "true urine",
            "stool",
            "oral intake"
          ],
          "correct": "true urine"
        }
      ],
      "answerKey": {
        "1": "true urine"
      },
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Complete the rationale: During continuous bladder irrigation after prostate surgery, the nurse subtracts the irrigant infused from the total drainage to calculate the client's {{1}} output."
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "true urine": "The infused irrigant must be subtracted to calculate the urine produced by the kidneys.",
        "stool": "Stool is not calculated from urinary drainage.",
        "oral intake": "Oral intake is not the output measured in the drainage bag."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    },
    "instruction": "Complete the rationale for calculating output during continuous bladder irrigation.",
    "clozeTemplate": "Subtract the volume of irrigant infused from total drainage to determine the client's {{1}} output.",
    "dropdowns": [
      {
        "id": "1",
        "options": [
          "true urine",
          "stool",
          "oral intake"
        ],
        "correct": "true urine"
      }
    ],
    "correctAnswers": {
      "1": "true urine"
    }
  },
  {
    "id": "QR-100299",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "SIADH and diabetes insipidus",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 4,
    "type": "Select N",
    "question": "Which findings support a diagnosis of syndrome of inappropriate antidiuretic hormone secretion (SIADH)? Select 3.",
    "options": [
      "Low serum sodium",
      "Low serum osmolality",
      "Concentrated urine",
      "Large volumes of dilute urine",
      "Marked hypernatremia"
    ],
    "correctAnswer": [
      "Low serum sodium",
      "Low serum osmolality",
      "Concentrated urine"
    ],
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "Low serum sodium": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Low serum osmolality": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Concentrated urine": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Large volumes of dilute urine": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Marked hypernatremia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for SIADH and diabetes insipidus",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000314.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100299",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Select N",
      "stem": "Which findings support a diagnosis of syndrome of inappropriate antidiuretic hormone secretion (SIADH)? Select 3.",
      "options": [
        "Low serum sodium",
        "Low serum osmolality",
        "Concentrated urine",
        "Large volumes of dilute urine",
        "Marked hypernatremia"
      ],
      "answerKey": [
        "Low serum sodium",
        "Low serum osmolality",
        "Concentrated urine"
      ],
      "scoring": {
        "method": "plus_minus"
      },
      "selectN": 3
    },
    "stimulus": {
      "clinicalContext": "Which findings support a diagnosis of syndrome of inappropriate antidiuretic hormone secretion (SIADH)? Select 3."
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "Low serum sodium": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Low serum osmolality": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Concentrated urine": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Large volumes of dilute urine": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Marked hypernatremia": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    },
    "selectN": 3,
    "numberToSelect": 3
  },
  {
    "id": "QR-100300",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Adrenal crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with known adrenal insufficiency has severe vomiting, hypotension, hyponatremia, and hyperkalemia. Which treatment should the nurse anticipate urgently?",
    "options": [
      "IV hydrocortisone and isotonic fluid replacement as prescribed",
      "Fluid restriction and potassium supplementation",
      "Oral levothyroxine only",
      "A loop diuretic as the sole treatment"
    ],
    "correctAnswer": "IV hydrocortisone and isotonic fluid replacement as prescribed",
    "rationale": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
    "optionRationales": {
      "IV hydrocortisone and isotonic fluid replacement as prescribed": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Fluid restriction and potassium supplementation": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "Oral levothyroxine only": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
      "A loop diuretic as the sole treatment": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
    },
    "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome.",
    "sourceReferences": [
      {
        "title": "Public clinical reference for Adrenal crisis",
        "publisher": "Relevant public health agency or professional organization",
        "url": "https://medlineplus.gov/ency/article/000357.htm",
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
      "Original educational practice item; follow current institutional protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100300",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with known adrenal insufficiency has severe vomiting, hypotension, hyponatremia, and hyperkalemia. Which treatment should the nurse anticipate urgently?",
      "options": [
        "IV hydrocortisone and isotonic fluid replacement as prescribed",
        "Fluid restriction and potassium supplementation",
        "Oral levothyroxine only",
        "A loop diuretic as the sole treatment"
      ],
      "answerKey": "IV hydrocortisone and isotonic fluid replacement as prescribed",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with known adrenal insufficiency has severe vomiting, hypotension, hyponatremia, and hyperkalemia. Which treatment should the nurse anticipate urgently?"
    },
    "rationales": {
      "overall": "The clinical cues support the keyed response. The nurse should interpret the findings in context, prioritize immediate safety, and follow current evidence-based protocols.",
      "options": {
        "IV hydrocortisone and isotonic fluid replacement as prescribed": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Fluid restriction and potassium supplementation": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "Oral levothyroxine only": "This response should be evaluated against the client's clinical cues and immediate safety priorities.",
        "A loop diuretic as the sole treatment": "This response should be evaluated against the client's clinical cues and immediate safety priorities."
      },
      "clinicalJudgmentTip": "Use the evolving assessment data to identify deterioration, prioritize the safest response, and reassess the outcome."
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch6={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
