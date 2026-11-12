/* Organized NCLEX topic batch 3: 20 original pediatric and adult-health items.
 * Includes single-choice and multiple-response formats. Automated checks are not clinical certification.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100221",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Autism spectrum disorder",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A nurse plans care for a hospitalized child with autism who becomes distressed by alarms and unexpected touch. Which approach is best?",
    "options": [
      "Use a predictable routine, explain each step, and reduce sensory triggers",
      "Change caregivers and schedules frequently",
      "Use figurative language to distract the child",
      "Require eye contact before providing care"
    ],
    "correctAnswer": "Use a predictable routine, explain each step, and reduce sensory triggers",
    "rationale": "Predictability, concrete communication, and individualized sensory adjustments can reduce distress and support cooperation.",
    "optionRationales": {
      "Use a predictable routine, explain each step, and reduce sensory triggers": "Predictability, concrete communication, and individualized sensory adjustments can reduce distress and support cooperation.",
      "Change caregivers and schedules frequently": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Use figurative language to distract the child": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Require eye contact before providing care": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/autismspectrumdisorder.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100221",
      "category": "Adult Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A nurse plans care for a hospitalized child with autism who becomes distressed by alarms and unexpected touch. Which approach is best?",
      "options": [
        "Use a predictable routine, explain each step, and reduce sensory triggers",
        "Change caregivers and schedules frequently",
        "Use figurative language to distract the child",
        "Require eye contact before providing care"
      ],
      "answerKey": "Use a predictable routine, explain each step, and reduce sensory triggers",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A nurse plans care for a hospitalized child with autism who becomes distressed by alarms and unexpected touch. Which approach is best?"
    },
    "rationales": {
      "overall": "Predictability, concrete communication, and individualized sensory adjustments can reduce distress and support cooperation.",
      "options": {
        "Use a predictable routine, explain each step, and reduce sensory triggers": "Predictability, concrete communication, and individualized sensory adjustments can reduce distress and support cooperation.",
        "Change caregivers and schedules frequently": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Use figurative language to distract the child": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Require eye contact before providing care": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100222",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Attention-deficit/hyperactivity disorder",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "The parent of a school-age child with ADHD asks how to support homework completion. Which strategy should the nurse recommend?",
    "options": [
      "Break assignments into short tasks with clear instructions and planned movement breaks",
      "Give several instructions at once",
      "Remove all structure so the child can choose each task",
      "Use lengthy delayed consequences"
    ],
    "correctAnswer": "Break assignments into short tasks with clear instructions and planned movement breaks",
    "rationale": "Brief structured tasks, clear directions, positive reinforcement, and planned breaks can support attention and task completion.",
    "optionRationales": {
      "Break assignments into short tasks with clear instructions and planned movement breaks": "Brief structured tasks, clear directions, positive reinforcement, and planned breaks can support attention and task completion.",
      "Give several instructions at once": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Remove all structure so the child can choose each task": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Use lengthy delayed consequences": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/attentiondeficithyperactivitydisorder.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100222",
      "category": "Adult Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "The parent of a school-age child with ADHD asks how to support homework completion. Which strategy should the nurse recommend?",
      "options": [
        "Break assignments into short tasks with clear instructions and planned movement breaks",
        "Give several instructions at once",
        "Remove all structure so the child can choose each task",
        "Use lengthy delayed consequences"
      ],
      "answerKey": "Break assignments into short tasks with clear instructions and planned movement breaks",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "The parent of a school-age child with ADHD asks how to support homework completion. Which strategy should the nurse recommend?"
    },
    "rationales": {
      "overall": "Brief structured tasks, clear directions, positive reinforcement, and planned breaks can support attention and task completion.",
      "options": {
        "Break assignments into short tasks with clear instructions and planned movement breaks": "Brief structured tasks, clear directions, positive reinforcement, and planned breaks can support attention and task completion.",
        "Give several instructions at once": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Remove all structure so the child can choose each task": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Use lengthy delayed consequences": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100223",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Down syndrome nursing considerations",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A newborn with Down syndrome is being assessed before discharge. Which associated condition should the nurse ensure has been evaluated?",
    "options": [
      "Congenital heart disease",
      "Acute appendicitis",
      "Renal stones",
      "Retinal detachment"
    ],
    "correctAnswer": "Congenital heart disease",
    "rationale": "Congenital cardiac defects are more common in infants with Down syndrome; ensure cardiac evaluation and follow-up are completed.",
    "optionRationales": {
      "Congenital heart disease": "Congenital cardiac defects are more common in infants with Down syndrome; ensure cardiac evaluation and follow-up are completed.",
      "Acute appendicitis": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Renal stones": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Retinal detachment": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/downsyndrome.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100223",
      "category": "Adult Health",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A newborn with Down syndrome is being assessed before discharge. Which associated condition should the nurse ensure has been evaluated?",
      "options": [
        "Congenital heart disease",
        "Acute appendicitis",
        "Renal stones",
        "Retinal detachment"
      ],
      "answerKey": "Congenital heart disease",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A newborn with Down syndrome is being assessed before discharge. Which associated condition should the nurse ensure has been evaluated?"
    },
    "rationales": {
      "overall": "Congenital cardiac defects are more common in infants with Down syndrome; ensure cardiac evaluation and follow-up are completed.",
      "options": {
        "Congenital heart disease": "Congenital cardiac defects are more common in infants with Down syndrome; ensure cardiac evaluation and follow-up are completed.",
        "Acute appendicitis": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Renal stones": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Retinal detachment": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100224",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Childhood developmental and learning disorders",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A caregiver reports that a child has persistent difficulty understanding spoken directions and expressing needs at school. What is the best nursing response?",
    "options": [
      "Recommend a comprehensive developmental and speech-language evaluation",
      "Assure the caregiver the child will automatically catch up",
      "Discourage school-based supports until adolescence",
      "Attribute the concern to poor motivation"
    ],
    "correctAnswer": "Recommend a comprehensive developmental and speech-language evaluation",
    "rationale": "Persistent communication concerns warrant developmental assessment and referral; early identification can connect the child with appropriate supports.",
    "optionRationales": {
      "Recommend a comprehensive developmental and speech-language evaluation": "Persistent communication concerns warrant developmental assessment and referral; early identification can connect the child with appropriate supports.",
      "Assure the caregiver the child will automatically catch up": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Discourage school-based supports until adolescence": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Attribute the concern to poor motivation": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/childdevelopment.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100224",
      "category": "Pediatric Nursing",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A caregiver reports that a child has persistent difficulty understanding spoken directions and expressing needs at school. What is the best nursing response?",
      "options": [
        "Recommend a comprehensive developmental and speech-language evaluation",
        "Assure the caregiver the child will automatically catch up",
        "Discourage school-based supports until adolescence",
        "Attribute the concern to poor motivation"
      ],
      "answerKey": "Recommend a comprehensive developmental and speech-language evaluation",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A caregiver reports that a child has persistent difficulty understanding spoken directions and expressing needs at school. What is the best nursing response?"
    },
    "rationales": {
      "overall": "Persistent communication concerns warrant developmental assessment and referral; early identification can connect the child with appropriate supports.",
      "options": {
        "Recommend a comprehensive developmental and speech-language evaluation": "Persistent communication concerns warrant developmental assessment and referral; early identification can connect the child with appropriate supports.",
        "Assure the caregiver the child will automatically catch up": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Discourage school-based supports until adolescence": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Attribute the concern to poor motivation": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100225",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dysrhythmias",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child becomes unresponsive and pulseless. The monitor shows ventricular fibrillation. Which action should the nurse prioritize?",
    "options": [
      "Begin high-quality CPR and defibrillate as soon as a defibrillator is available per pediatric resuscitation protocol",
      "Obtain a 12-lead ECG before starting CPR",
      "Give oral fluids",
      "Wait for a cardiology consultation"
    ],
    "correctAnswer": "Begin high-quality CPR and defibrillate as soon as a defibrillator is available per pediatric resuscitation protocol",
    "rationale": "Pulseless ventricular fibrillation is a shockable cardiac arrest rhythm. Start CPR and deliver prompt defibrillation following current pediatric resuscitation algorithms.",
    "optionRationales": {
      "Begin high-quality CPR and defibrillate as soon as a defibrillator is available per pediatric resuscitation protocol": "Pulseless ventricular fibrillation is a shockable cardiac arrest rhythm. Start CPR and deliver prompt defibrillation following current pediatric resuscitation algorithms.",
      "Obtain a 12-lead ECG before starting CPR": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Give oral fluids": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Wait for a cardiology consultation": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100225",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child becomes unresponsive and pulseless. The monitor shows ventricular fibrillation. Which action should the nurse prioritize?",
      "options": [
        "Begin high-quality CPR and defibrillate as soon as a defibrillator is available per pediatric resuscitation protocol",
        "Obtain a 12-lead ECG before starting CPR",
        "Give oral fluids",
        "Wait for a cardiology consultation"
      ],
      "answerKey": "Begin high-quality CPR and defibrillate as soon as a defibrillator is available per pediatric resuscitation protocol",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child becomes unresponsive and pulseless. The monitor shows ventricular fibrillation. Which action should the nurse prioritize?"
    },
    "rationales": {
      "overall": "Pulseless ventricular fibrillation is a shockable cardiac arrest rhythm. Start CPR and deliver prompt defibrillation following current pediatric resuscitation algorithms.",
      "options": {
        "Begin high-quality CPR and defibrillate as soon as a defibrillator is available per pediatric resuscitation protocol": "Pulseless ventricular fibrillation is a shockable cardiac arrest rhythm. Start CPR and deliver prompt defibrillation following current pediatric resuscitation algorithms.",
        "Obtain a 12-lead ECG before starting CPR": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Give oral fluids": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Wait for a cardiology consultation": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100226",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Rheumatic fever and rheumatic heart disease",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with a history of rheumatic fever is prescribed long-term antibiotic prophylaxis. Which explanation should the nurse provide?",
    "options": [
      "It reduces the risk of recurrent group A streptococcal infection and further cardiac injury",
      "It directly dissolves existing valve scarring",
      "It replaces the need for cardiac follow-up",
      "It is only needed when joint pain occurs"
    ],
    "correctAnswer": "It reduces the risk of recurrent group A streptococcal infection and further cardiac injury",
    "rationale": "Secondary antibiotic prophylaxis helps prevent recurrent rheumatic fever after group A streptococcal infection; duration depends on cardiac involvement and current guidance.",
    "optionRationales": {
      "It reduces the risk of recurrent group A streptococcal infection and further cardiac injury": "Secondary antibiotic prophylaxis helps prevent recurrent rheumatic fever after group A streptococcal infection; duration depends on cardiac involvement and current guidance.",
      "It directly dissolves existing valve scarring": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "It replaces the need for cardiac follow-up": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "It is only needed when joint pain occurs": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://www.cdc.gov/group-a-strep/hcp/clinical-guidance/acute-rheumatic-fever.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100226",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with a history of rheumatic fever is prescribed long-term antibiotic prophylaxis. Which explanation should the nurse provide?",
      "options": [
        "It reduces the risk of recurrent group A streptococcal infection and further cardiac injury",
        "It directly dissolves existing valve scarring",
        "It replaces the need for cardiac follow-up",
        "It is only needed when joint pain occurs"
      ],
      "answerKey": "It reduces the risk of recurrent group A streptococcal infection and further cardiac injury",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with a history of rheumatic fever is prescribed long-term antibiotic prophylaxis. Which explanation should the nurse provide?"
    },
    "rationales": {
      "overall": "Secondary antibiotic prophylaxis helps prevent recurrent rheumatic fever after group A streptococcal infection; duration depends on cardiac involvement and current guidance.",
      "options": {
        "It reduces the risk of recurrent group A streptococcal infection and further cardiac injury": "Secondary antibiotic prophylaxis helps prevent recurrent rheumatic fever after group A streptococcal infection; duration depends on cardiac involvement and current guidance.",
        "It directly dissolves existing valve scarring": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "It replaces the need for cardiac follow-up": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "It is only needed when joint pain occurs": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100227",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Thalassemia in children",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with transfusion-dependent thalassemia receives regular red blood cell transfusions. Which complication should the nurse monitor for over time?",
    "options": [
      "Iron overload affecting organs",
      "Vitamin C toxicity from fruit",
      "Acute hypocalcemia from sunlight exposure",
      "Chronic dehydration from transfusion"
    ],
    "correctAnswer": "Iron overload affecting organs",
    "rationale": "Repeated transfusions can cause iron accumulation and damage the heart, liver, and endocrine organs. Monitor iron burden and adherence to prescribed chelation therapy.",
    "optionRationales": {
      "Iron overload affecting organs": "Repeated transfusions can cause iron accumulation and damage the heart, liver, and endocrine organs. Monitor iron burden and adherence to prescribed chelation therapy.",
      "Vitamin C toxicity from fruit": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Acute hypocalcemia from sunlight exposure": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Chronic dehydration from transfusion": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/thalassemia.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100227",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with transfusion-dependent thalassemia receives regular red blood cell transfusions. Which complication should the nurse monitor for over time?",
      "options": [
        "Iron overload affecting organs",
        "Vitamin C toxicity from fruit",
        "Acute hypocalcemia from sunlight exposure",
        "Chronic dehydration from transfusion"
      ],
      "answerKey": "Iron overload affecting organs",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with transfusion-dependent thalassemia receives regular red blood cell transfusions. Which complication should the nurse monitor for over time?"
    },
    "rationales": {
      "overall": "Repeated transfusions can cause iron accumulation and damage the heart, liver, and endocrine organs. Monitor iron burden and adherence to prescribed chelation therapy.",
      "options": {
        "Iron overload affecting organs": "Repeated transfusions can cause iron accumulation and damage the heart, liver, and endocrine organs. Monitor iron burden and adherence to prescribed chelation therapy.",
        "Vitamin C toxicity from fruit": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Acute hypocalcemia from sunlight exposure": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Chronic dehydration from transfusion": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100228",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Aplastic anemia in children",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with aplastic anemia has a very low platelet count. Which intervention should be included in the plan of care?",
    "options": [
      "Institute bleeding precautions and avoid unnecessary invasive procedures",
      "Use rectal temperatures for accuracy",
      "Encourage contact sports",
      "Administer aspirin for minor pain"
    ],
    "correctAnswer": "Institute bleeding precautions and avoid unnecessary invasive procedures",
    "rationale": "Thrombocytopenia increases bleeding risk. Use bleeding precautions, avoid rectal procedures and platelet-inhibiting medications unless specifically prescribed.",
    "optionRationales": {
      "Institute bleeding precautions and avoid unnecessary invasive procedures": "Thrombocytopenia increases bleeding risk. Use bleeding precautions, avoid rectal procedures and platelet-inhibiting medications unless specifically prescribed.",
      "Use rectal temperatures for accuracy": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Encourage contact sports": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Administer aspirin for minor pain": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100228",
      "category": "Adult Health",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with aplastic anemia has a very low platelet count. Which intervention should be included in the plan of care?",
      "options": [
        "Institute bleeding precautions and avoid unnecessary invasive procedures",
        "Use rectal temperatures for accuracy",
        "Encourage contact sports",
        "Administer aspirin for minor pain"
      ],
      "answerKey": "Institute bleeding precautions and avoid unnecessary invasive procedures",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with aplastic anemia has a very low platelet count. Which intervention should be included in the plan of care?"
    },
    "rationales": {
      "overall": "Thrombocytopenia increases bleeding risk. Use bleeding precautions, avoid rectal procedures and platelet-inhibiting medications unless specifically prescribed.",
      "options": {
        "Institute bleeding precautions and avoid unnecessary invasive procedures": "Thrombocytopenia increases bleeding risk. Use bleeding precautions, avoid rectal procedures and platelet-inhibiting medications unless specifically prescribed.",
        "Use rectal temperatures for accuracy": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Encourage contact sports": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Administer aspirin for minor pain": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100229",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hypospadias and epispadias",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "An infant with hypospadias is scheduled for surgical repair. Which action should the nurse anticipate?",
    "options": [
      "Avoid circumcision before repair because foreskin may be needed for reconstruction",
      "Perform circumcision before discharge",
      "Delay all feeding until surgery is completed",
      "Apply pressure to redirect the urinary stream"
    ],
    "correctAnswer": "Avoid circumcision before repair because foreskin may be needed for reconstruction",
    "rationale": "The foreskin may be used in surgical reconstruction. Circumcision is generally deferred until the urologist has evaluated the infant and planned repair.",
    "optionRationales": {
      "Avoid circumcision before repair because foreskin may be needed for reconstruction": "The foreskin may be used in surgical reconstruction. Circumcision is generally deferred until the urologist has evaluated the infant and planned repair.",
      "Perform circumcision before discharge": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Delay all feeding until surgery is completed": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Apply pressure to redirect the urinary stream": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/001286.htm",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100229",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "An infant with hypospadias is scheduled for surgical repair. Which action should the nurse anticipate?",
      "options": [
        "Avoid circumcision before repair because foreskin may be needed for reconstruction",
        "Perform circumcision before discharge",
        "Delay all feeding until surgery is completed",
        "Apply pressure to redirect the urinary stream"
      ],
      "answerKey": "Avoid circumcision before repair because foreskin may be needed for reconstruction",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "An infant with hypospadias is scheduled for surgical repair. Which action should the nurse anticipate?"
    },
    "rationales": {
      "overall": "The foreskin may be used in surgical reconstruction. Circumcision is generally deferred until the urologist has evaluated the infant and planned repair.",
      "options": {
        "Avoid circumcision before repair because foreskin may be needed for reconstruction": "The foreskin may be used in surgical reconstruction. Circumcision is generally deferred until the urologist has evaluated the infant and planned repair.",
        "Perform circumcision before discharge": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Delay all feeding until surgery is completed": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Apply pressure to redirect the urinary stream": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100230",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hydrocephalus and shunt complications",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with a ventriculoperitoneal shunt develops morning vomiting, headache, and increasing lethargy. What should the nurse suspect?",
    "options": [
      "Shunt malfunction or increased intracranial pressure",
      "Expected adjustment to the shunt",
      "Simple motion sickness",
      "Improved cerebrospinal fluid drainage"
    ],
    "correctAnswer": "Shunt malfunction or increased intracranial pressure",
    "rationale": "Headache, vomiting, and altered alertness may indicate shunt obstruction or infection with increased intracranial pressure. Escalate promptly for neurosurgical evaluation.",
    "optionRationales": {
      "Shunt malfunction or increased intracranial pressure": "Headache, vomiting, and altered alertness may indicate shunt obstruction or infection with increased intracranial pressure. Escalate promptly for neurosurgical evaluation.",
      "Expected adjustment to the shunt": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Simple motion sickness": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Improved cerebrospinal fluid drainage": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/000578.htm",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100230",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with a ventriculoperitoneal shunt develops morning vomiting, headache, and increasing lethargy. What should the nurse suspect?",
      "options": [
        "Shunt malfunction or increased intracranial pressure",
        "Expected adjustment to the shunt",
        "Simple motion sickness",
        "Improved cerebrospinal fluid drainage"
      ],
      "answerKey": "Shunt malfunction or increased intracranial pressure",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with a ventriculoperitoneal shunt develops morning vomiting, headache, and increasing lethargy. What should the nurse suspect?"
    },
    "rationales": {
      "overall": "Headache, vomiting, and altered alertness may indicate shunt obstruction or infection with increased intracranial pressure. Escalate promptly for neurosurgical evaluation.",
      "options": {
        "Shunt malfunction or increased intracranial pressure": "Headache, vomiting, and altered alertness may indicate shunt obstruction or infection with increased intracranial pressure. Escalate promptly for neurosurgical evaluation.",
        "Expected adjustment to the shunt": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Simple motion sickness": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Improved cerebrospinal fluid drainage": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100231",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Type 1 diabetes sick-day management",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with type 1 diabetes has influenza and poor appetite. Which sick-day instructions should the nurse reinforce?",
    "options": [
      "Continue basal insulin as prescribed, check glucose and ketones more often, and maintain fluids",
      "Stop all insulin until normal meals resume",
      "Check glucose only once daily",
      "Avoid fluids to prevent vomiting"
    ],
    "correctAnswer": "Continue basal insulin as prescribed, check glucose and ketones more often, and maintain fluids",
    "rationale": "Illness can increase glucose and ketone production even when intake falls. Follow the individualized sick-day plan, continue basal insulin unless directed otherwise, monitor closely, and seek help for warning signs.",
    "optionRationales": {
      "Continue basal insulin as prescribed, check glucose and ketones more often, and maintain fluids": "Illness can increase glucose and ketone production even when intake falls. Follow the individualized sick-day plan, continue basal insulin unless directed otherwise, monitor closely, and seek help for warning signs.",
      "Stop all insulin until normal meals resume": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Check glucose only once daily": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Avoid fluids to prevent vomiting": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://www.cdc.gov/diabetes/about/about-type-1-diabetes.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100231",
      "category": "Adult Health",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with type 1 diabetes has influenza and poor appetite. Which sick-day instructions should the nurse reinforce?",
      "options": [
        "Continue basal insulin as prescribed, check glucose and ketones more often, and maintain fluids",
        "Stop all insulin until normal meals resume",
        "Check glucose only once daily",
        "Avoid fluids to prevent vomiting"
      ],
      "answerKey": "Continue basal insulin as prescribed, check glucose and ketones more often, and maintain fluids",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with type 1 diabetes has influenza and poor appetite. Which sick-day instructions should the nurse reinforce?"
    },
    "rationales": {
      "overall": "Illness can increase glucose and ketone production even when intake falls. Follow the individualized sick-day plan, continue basal insulin unless directed otherwise, monitor closely, and seek help for warning signs.",
      "options": {
        "Continue basal insulin as prescribed, check glucose and ketones more often, and maintain fluids": "Illness can increase glucose and ketone production even when intake falls. Follow the individualized sick-day plan, continue basal insulin unless directed otherwise, monitor closely, and seek help for warning signs.",
        "Stop all insulin until normal meals resume": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Check glucose only once daily": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Avoid fluids to prevent vomiting": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100232",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Adolescent eating and growth concerns",
    "clientNeeds": "Psychosocial Integrity",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "Which findings in an adolescent warrant further assessment for a possible restrictive eating disorder?",
    "options": [
      "Rapid weight loss, bradycardia, and intense fear of weight gain",
      "Stable growth pattern and varied intake",
      "Occasional preference for a specific food",
      "Regular participation in meals with peers"
    ],
    "correctAnswer": [
      "Rapid weight loss, bradycardia, and intense fear of weight gain"
    ],
    "rationale": "Rapid weight loss, physiologic instability, and distorted weight/shape concerns warrant prompt medical and mental-health assessment. Do not rely on appearance or BMI alone.",
    "optionRationales": {
      "Rapid weight loss, bradycardia, and intense fear of weight gain": "Rapid weight loss, physiologic instability, and distorted weight/shape concerns warrant prompt medical and mental-health assessment. Do not rely on appearance or BMI alone.",
      "Stable growth pattern and varied intake": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Occasional preference for a specific food": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Regular participation in meals with peers": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://www.nimh.nih.gov/health/topics/eating-disorders",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100232",
      "category": "Adult Health",
      "clientNeeds": "Psychosocial Integrity",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which findings in an adolescent warrant further assessment for a possible restrictive eating disorder?",
      "options": [
        "Rapid weight loss, bradycardia, and intense fear of weight gain",
        "Stable growth pattern and varied intake",
        "Occasional preference for a specific food",
        "Regular participation in meals with peers"
      ],
      "answerKey": [
        "Rapid weight loss, bradycardia, and intense fear of weight gain"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "Which findings in an adolescent warrant further assessment for a possible restrictive eating disorder?"
    },
    "rationales": {
      "overall": "Rapid weight loss, physiologic instability, and distorted weight/shape concerns warrant prompt medical and mental-health assessment. Do not rely on appearance or BMI alone.",
      "options": {
        "Rapid weight loss, bradycardia, and intense fear of weight gain": "Rapid weight loss, physiologic instability, and distorted weight/shape concerns warrant prompt medical and mental-health assessment. Do not rely on appearance or BMI alone.",
        "Stable growth pattern and varied intake": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Occasional preference for a specific food": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Regular participation in meals with peers": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100233",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Heart failure",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with heart failure reports worsening orthopnea and has new crackles with an oxygen saturation of 88%. Which action is the priority?",
    "options": [
      "Position upright and promptly escalate for worsening respiratory status",
      "Encourage increased oral fluids",
      "Place the client flat to improve venous return",
      "Delay assessment until the next scheduled weight"
    ],
    "correctAnswer": "Position upright and promptly escalate for worsening respiratory status",
    "rationale": "Orthopnea, crackles, and hypoxemia suggest pulmonary congestion and impaired gas exchange. Support breathing and promptly escalate for assessment and prescribed treatment.",
    "optionRationales": {
      "Position upright and promptly escalate for worsening respiratory status": "Orthopnea, crackles, and hypoxemia suggest pulmonary congestion and impaired gas exchange. Support breathing and promptly escalate for assessment and prescribed treatment.",
      "Encourage increased oral fluids": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Place the client flat to improve venous return": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Delay assessment until the next scheduled weight": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/heartfailure.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100233",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with heart failure reports worsening orthopnea and has new crackles with an oxygen saturation of 88%. Which action is the priority?",
      "options": [
        "Position upright and promptly escalate for worsening respiratory status",
        "Encourage increased oral fluids",
        "Place the client flat to improve venous return",
        "Delay assessment until the next scheduled weight"
      ],
      "answerKey": "Position upright and promptly escalate for worsening respiratory status",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with heart failure reports worsening orthopnea and has new crackles with an oxygen saturation of 88%. Which action is the priority?"
    },
    "rationales": {
      "overall": "Orthopnea, crackles, and hypoxemia suggest pulmonary congestion and impaired gas exchange. Support breathing and promptly escalate for assessment and prescribed treatment.",
      "options": {
        "Position upright and promptly escalate for worsening respiratory status": "Orthopnea, crackles, and hypoxemia suggest pulmonary congestion and impaired gas exchange. Support breathing and promptly escalate for assessment and prescribed treatment.",
        "Encourage increased oral fluids": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Place the client flat to improve venous return": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Delay assessment until the next scheduled weight": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100234",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Acute coronary syndrome and myocardial infarction",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client reports new chest pressure with diaphoresis. Which actions should the nurse anticipate as part of the initial response?",
    "options": [
      "Obtain a 12-lead ECG promptly",
      "Assess vital signs and oxygenation",
      "Activate the facility's acute chest-pain pathway",
      "Encourage the client to walk to relieve anxiety"
    ],
    "correctAnswer": [
      "Obtain a 12-lead ECG promptly",
      "Assess vital signs and oxygenation",
      "Activate the facility's acute chest-pain pathway"
    ],
    "rationale": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
    "optionRationales": {
      "Obtain a 12-lead ECG promptly": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
      "Assess vital signs and oxygenation": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
      "Activate the facility's acute chest-pain pathway": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
      "Encourage the client to walk to relieve anxiety": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/heartattack.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100234",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client reports new chest pressure with diaphoresis. Which actions should the nurse anticipate as part of the initial response?",
      "options": [
        "Obtain a 12-lead ECG promptly",
        "Assess vital signs and oxygenation",
        "Activate the facility's acute chest-pain pathway",
        "Encourage the client to walk to relieve anxiety"
      ],
      "answerKey": [
        "Obtain a 12-lead ECG promptly",
        "Assess vital signs and oxygenation",
        "Activate the facility's acute chest-pain pathway"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client reports new chest pressure with diaphoresis. Which actions should the nurse anticipate as part of the initial response?"
    },
    "rationales": {
      "overall": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
      "options": {
        "Obtain a 12-lead ECG promptly": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
        "Assess vital signs and oxygenation": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
        "Activate the facility's acute chest-pain pathway": "Prompt ECG, focused assessment, and activation of the chest-pain pathway support time-sensitive evaluation and treatment. Ambulation is unsafe during possible acute coronary syndrome.",
        "Encourage the client to walk to relieve anxiety": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100235",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Dysrhythmias and ECG interpretation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client has atrial fibrillation with a rapid ventricular response and is hypotensive, confused, and reporting chest pain. Which intervention should the nurse anticipate?",
    "options": [
      "Synchronized cardioversion for hemodynamic instability",
      "Routine outpatient Holter monitoring",
      "Vagal maneuvers as the only treatment",
      "Deferring treatment until the rhythm converts spontaneously"
    ],
    "correctAnswer": "Synchronized cardioversion for hemodynamic instability",
    "rationale": "A tachyarrhythmia causing hypotension, altered mental status, or ischemic chest discomfort is unstable and generally requires immediate synchronized cardioversion per ACLS protocol.",
    "optionRationales": {
      "Synchronized cardioversion for hemodynamic instability": "A tachyarrhythmia causing hypotension, altered mental status, or ischemic chest discomfort is unstable and generally requires immediate synchronized cardioversion per ACLS protocol.",
      "Routine outpatient Holter monitoring": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Vagal maneuvers as the only treatment": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Deferring treatment until the rhythm converts spontaneously": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100235",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client has atrial fibrillation with a rapid ventricular response and is hypotensive, confused, and reporting chest pain. Which intervention should the nurse anticipate?",
      "options": [
        "Synchronized cardioversion for hemodynamic instability",
        "Routine outpatient Holter monitoring",
        "Vagal maneuvers as the only treatment",
        "Deferring treatment until the rhythm converts spontaneously"
      ],
      "answerKey": "Synchronized cardioversion for hemodynamic instability",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client has atrial fibrillation with a rapid ventricular response and is hypotensive, confused, and reporting chest pain. Which intervention should the nurse anticipate?"
    },
    "rationales": {
      "overall": "A tachyarrhythmia causing hypotension, altered mental status, or ischemic chest discomfort is unstable and generally requires immediate synchronized cardioversion per ACLS protocol.",
      "options": {
        "Synchronized cardioversion for hemodynamic instability": "A tachyarrhythmia causing hypotension, altered mental status, or ischemic chest discomfort is unstable and generally requires immediate synchronized cardioversion per ACLS protocol.",
        "Routine outpatient Holter monitoring": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Vagal maneuvers as the only treatment": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Deferring treatment until the rhythm converts spontaneously": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100236",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Hypertension and hypertensive crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A client with markedly elevated blood pressure reports sudden severe headache and has new focal weakness. What should the nurse do?",
    "options": [
      "Activate emergency evaluation for possible acute target-organ injury",
      "Recheck blood pressure at the next routine visit",
      "Recommend an over-the-counter decongestant",
      "Encourage vigorous exercise"
    ],
    "correctAnswer": "Activate emergency evaluation for possible acute target-organ injury",
    "rationale": "New neurologic deficits with severe hypertension may indicate acute target-organ injury, including stroke. Immediate emergency evaluation is required; do not attempt rapid unsupervised lowering.",
    "optionRationales": {
      "Activate emergency evaluation for possible acute target-organ injury": "New neurologic deficits with severe hypertension may indicate acute target-organ injury, including stroke. Immediate emergency evaluation is required; do not attempt rapid unsupervised lowering.",
      "Recheck blood pressure at the next routine visit": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Recommend an over-the-counter decongestant": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Encourage vigorous exercise": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/highbloodpressure.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100236",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A client with markedly elevated blood pressure reports sudden severe headache and has new focal weakness. What should the nurse do?",
      "options": [
        "Activate emergency evaluation for possible acute target-organ injury",
        "Recheck blood pressure at the next routine visit",
        "Recommend an over-the-counter decongestant",
        "Encourage vigorous exercise"
      ],
      "answerKey": "Activate emergency evaluation for possible acute target-organ injury",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with markedly elevated blood pressure reports sudden severe headache and has new focal weakness. What should the nurse do?"
    },
    "rationales": {
      "overall": "New neurologic deficits with severe hypertension may indicate acute target-organ injury, including stroke. Immediate emergency evaluation is required; do not attempt rapid unsupervised lowering.",
      "options": {
        "Activate emergency evaluation for possible acute target-organ injury": "New neurologic deficits with severe hypertension may indicate acute target-organ injury, including stroke. Immediate emergency evaluation is required; do not attempt rapid unsupervised lowering.",
        "Recheck blood pressure at the next routine visit": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Recommend an over-the-counter decongestant": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Encourage vigorous exercise": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100237",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "COPD exacerbation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client with COPD has increased dyspnea, sputum volume, and purulent sputum. Which findings should the nurse report promptly as possible severe deterioration?",
    "options": [
      "New confusion or drowsiness",
      "Inability to speak in full sentences",
      "Marked accessory muscle use",
      "Improved ability to perform usual activities"
    ],
    "correctAnswer": [
      "New confusion or drowsiness",
      "Inability to speak in full sentences",
      "Marked accessory muscle use"
    ],
    "rationale": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
    "optionRationales": {
      "New confusion or drowsiness": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
      "Inability to speak in full sentences": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
      "Marked accessory muscle use": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
      "Improved ability to perform usual activities": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/copd.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100237",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client with COPD has increased dyspnea, sputum volume, and purulent sputum. Which findings should the nurse report promptly as possible severe deterioration?",
      "options": [
        "New confusion or drowsiness",
        "Inability to speak in full sentences",
        "Marked accessory muscle use",
        "Improved ability to perform usual activities"
      ],
      "answerKey": [
        "New confusion or drowsiness",
        "Inability to speak in full sentences",
        "Marked accessory muscle use"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with COPD has increased dyspnea, sputum volume, and purulent sputum. Which findings should the nurse report promptly as possible severe deterioration?"
    },
    "rationales": {
      "overall": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
      "options": {
        "New confusion or drowsiness": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
        "Inability to speak in full sentences": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
        "Marked accessory muscle use": "Altered mental status, inability to speak, and marked work of breathing may indicate severe exacerbation or ventilatory failure. Escalate urgently; improved activity tolerance is not a deterioration cue.",
        "Improved ability to perform usual activities": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100238",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Asthma management",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client with asthma is prescribed a rescue inhaler and an inhaled corticosteroid. Which teaching points should the nurse include?",
    "options": [
      "Use the rescue bronchodilator for rapid relief of acute symptoms as prescribed",
      "Use the inhaled corticosteroid consistently as controller therapy",
      "Rinse the mouth after using an inhaled corticosteroid",
      "Stop the controller medication as soon as symptoms improve"
    ],
    "correctAnswer": [
      "Use the rescue bronchodilator for rapid relief of acute symptoms as prescribed",
      "Use the inhaled corticosteroid consistently as controller therapy",
      "Rinse the mouth after using an inhaled corticosteroid"
    ],
    "rationale": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
    "optionRationales": {
      "Use the rescue bronchodilator for rapid relief of acute symptoms as prescribed": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
      "Use the inhaled corticosteroid consistently as controller therapy": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
      "Rinse the mouth after using an inhaled corticosteroid": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
      "Stop the controller medication as soon as symptoms improve": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/asthma.html",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100238",
      "category": "Adult Health",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A client with asthma is prescribed a rescue inhaler and an inhaled corticosteroid. Which teaching points should the nurse include?",
      "options": [
        "Use the rescue bronchodilator for rapid relief of acute symptoms as prescribed",
        "Use the inhaled corticosteroid consistently as controller therapy",
        "Rinse the mouth after using an inhaled corticosteroid",
        "Stop the controller medication as soon as symptoms improve"
      ],
      "answerKey": [
        "Use the rescue bronchodilator for rapid relief of acute symptoms as prescribed",
        "Use the inhaled corticosteroid consistently as controller therapy",
        "Rinse the mouth after using an inhaled corticosteroid"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A client with asthma is prescribed a rescue inhaler and an inhaled corticosteroid. Which teaching points should the nurse include?"
    },
    "rationales": {
      "overall": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
      "options": {
        "Use the rescue bronchodilator for rapid relief of acute symptoms as prescribed": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
        "Use the inhaled corticosteroid consistently as controller therapy": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
        "Rinse the mouth after using an inhaled corticosteroid": "Rescue and controller medications have different purposes. Inhaled corticosteroids reduce airway inflammation and should be used as prescribed; mouth rinsing reduces local adverse effects.",
        "Stop the controller medication as soon as symptoms improve": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100239",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Pneumonia and respiratory failure",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "An older adult admitted with pneumonia becomes newly confused, tachypneic, and hypotensive. Which complication should the nurse suspect?",
    "options": [
      "Sepsis with possible organ dysfunction",
      "Expected response to antibiotics",
      "Uncomplicated recovery",
      "Isolated sleep deprivation"
    ],
    "correctAnswer": "Sepsis with possible organ dysfunction",
    "rationale": "New confusion, tachypnea, and hypotension in an infection suggest systemic deterioration and possible sepsis. Escalate promptly and initiate the facility's sepsis pathway.",
    "optionRationales": {
      "Sepsis with possible organ dysfunction": "New confusion, tachypnea, and hypotension in an infection suggest systemic deterioration and possible sepsis. Escalate promptly and initiate the facility's sepsis pathway.",
      "Expected response to antibiotics": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Uncomplicated recovery": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
      "Isolated sleep deprivation": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100239",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "An older adult admitted with pneumonia becomes newly confused, tachypneic, and hypotensive. Which complication should the nurse suspect?",
      "options": [
        "Sepsis with possible organ dysfunction",
        "Expected response to antibiotics",
        "Uncomplicated recovery",
        "Isolated sleep deprivation"
      ],
      "answerKey": "Sepsis with possible organ dysfunction",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "An older adult admitted with pneumonia becomes newly confused, tachypneic, and hypotensive. Which complication should the nurse suspect?"
    },
    "rationales": {
      "overall": "New confusion, tachypnea, and hypotension in an infection suggest systemic deterioration and possible sepsis. Escalate promptly and initiate the facility's sepsis pathway.",
      "options": {
        "Sepsis with possible organ dysfunction": "New confusion, tachypnea, and hypotension in an infection suggest systemic deterioration and possible sepsis. Escalate promptly and initiate the facility's sepsis pathway.",
        "Expected response to antibiotics": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Uncomplicated recovery": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care.",
        "Isolated sleep deprivation": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  },
  {
    "id": "QR-100240",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Pulmonary embolism",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A postoperative client suddenly develops dyspnea, pleuritic chest pain, tachycardia, and oxygen desaturation. Which actions should the nurse take?",
    "options": [
      "Activate rapid response or emergency evaluation",
      "Apply oxygen as indicated and monitor cardiopulmonary status",
      "Keep the client at rest while urgent evaluation is arranged",
      "Massage the affected calf"
    ],
    "correctAnswer": [
      "Activate rapid response or emergency evaluation",
      "Apply oxygen as indicated and monitor cardiopulmonary status",
      "Keep the client at rest while urgent evaluation is arranged"
    ],
    "rationale": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
    "optionRationales": {
      "Activate rapid response or emergency evaluation": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
      "Apply oxygen as indicated and monitor cardiopulmonary status": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
      "Keep the client at rest while urgent evaluation is arranged": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
      "Massage the affected calf": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
    },
    "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100240",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "A postoperative client suddenly develops dyspnea, pleuritic chest pain, tachycardia, and oxygen desaturation. Which actions should the nurse take?",
      "options": [
        "Activate rapid response or emergency evaluation",
        "Apply oxygen as indicated and monitor cardiopulmonary status",
        "Keep the client at rest while urgent evaluation is arranged",
        "Massage the affected calf"
      ],
      "answerKey": [
        "Activate rapid response or emergency evaluation",
        "Apply oxygen as indicated and monitor cardiopulmonary status",
        "Keep the client at rest while urgent evaluation is arranged"
      ],
      "scoring": {
        "method": "plus_minus"
      }
    },
    "stimulus": {
      "clinicalContext": "A postoperative client suddenly develops dyspnea, pleuritic chest pain, tachycardia, and oxygen desaturation. Which actions should the nurse take?"
    },
    "rationales": {
      "overall": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
      "options": {
        "Activate rapid response or emergency evaluation": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
        "Apply oxygen as indicated and monitor cardiopulmonary status": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
        "Keep the client at rest while urgent evaluation is arranged": "Sudden dyspnea, pleuritic pain, tachycardia, and hypoxemia after surgery are concerning for pulmonary embolism. Escalate, support oxygenation, and avoid calf massage.",
        "Massage the affected calf": "This response is not appropriate for the clinical cues described. Use the client's stability and immediate safety risks to prioritize care."
      },
      "clinicalJudgmentTip": "Prioritize the most time-sensitive threat, act within the prescribed protocol, and reassess the client's response."
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch3={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
