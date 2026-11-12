/* Organized NCLEX topic batch 9: 8 original, source-referenced questions.
 * Topics: cor pulmonale, adrenal crisis, Cushing syndrome, cord prolapse,
 * VEAL CHOP, diphtheria, pertussis, and smoking cessation.
 * Structural checks do not constitute clinical approval.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100329",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Cor pulmonale",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with long-standing COPD reports worsening fatigue and ankle swelling. Assessment reveals jugular venous distention, hepatomegaly, and bilateral dependent edema. Which complication should the nurse suspect?",
    "options": [
      "Right-sided heart failure related to cor pulmonale",
      "Left-sided heart failure caused by acute pulmonary edema",
      "Acute pericarditis",
      "Hypovolemic shock"
    ],
    "correctAnswer": "Right-sided heart failure related to cor pulmonale",
    "rationale": "Chronic pulmonary hypertension can increase right ventricular workload and lead to cor pulmonale. Jugular venous distention, hepatomegaly, and dependent edema indicate systemic venous congestion associated with right-sided heart failure.",
    "optionRationales": {
      "Right-sided heart failure related to cor pulmonale": "Correct. Chronic lung disease and pulmonary hypertension can cause right ventricular strain and systemic venous congestion.",
      "Left-sided heart failure caused by acute pulmonary edema": "Incorrect. The findings emphasize systemic venous congestion rather than acute pulmonary congestion.",
      "Acute pericarditis": "Incorrect. Pericarditis commonly causes pleuritic chest pain and a friction rub; it does not best explain this chronic pattern.",
      "Hypovolemic shock": "Incorrect. Hypovolemia causes inadequate circulating volume, not jugular venous distention and dependent edema."
    },
    "clinicalJudgmentTip": "In chronic lung disease, look for right-sided congestion: JVD, peripheral edema, and hepatic enlargement.",
    "sourceReferences": [
      {
        "title": "Cor Pulmonale",
        "publisher": "Merck Manual Professional Edition",
        "url": "https://www.merckmanuals.com/professional/cardiovascular-disorders/heart-failure/cor-pulmonale",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Pulmonary Hypertension",
        "publisher": "National Heart, Lung, and Blood Institute",
        "url": "https://www.nhlbi.nih.gov/health/pulmonary-hypertension",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "The assessment pattern supports suspicion; diagnostic confirmation and treatment depend on the full clinical evaluation."
    ],
    "metadata": {
      "id": "QR-100329",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "Which complication should the nurse suspect?",
      "options": [
        "Right-sided heart failure related to cor pulmonale",
        "Left-sided heart failure caused by acute pulmonary edema",
        "Acute pericarditis",
        "Hypovolemic shock"
      ],
      "answerKey": "Right-sided heart failure related to cor pulmonale",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Long-standing COPD with progressive fatigue, JVD, hepatomegaly, and dependent edema."
    },
    "rationales": {
      "overall": "Chronic pulmonary hypertension can cause right ventricular failure and systemic venous congestion.",
      "options": {},
      "clinicalJudgmentTip": "Recognize systemic venous congestion as a right-heart finding."
    }
  },
  {
    "id": "QR-100330",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Addison disease and adrenal crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "A client with known primary adrenal insufficiency has vomiting and diarrhea for 2 days and now presents with profound weakness, blood pressure 78/44 mm Hg, sodium 128 mEq/L, and potassium 6.0 mEq/L. Which prescription should the nurse anticipate implementing first?",
    "options": [
      "Rapid IV isotonic fluid replacement and prescribed IV hydrocortisone",
      "Fluid restriction and oral potassium supplementation",
      "A loop diuretic before assessing circulating volume",
      "Oral levothyroxine as the immediate rescue treatment"
    ],
    "correctAnswer": "Rapid IV isotonic fluid replacement and prescribed IV hydrocortisone",
    "rationale": "The client has findings concerning for adrenal crisis, including severe hypotension, volume depletion, hyponatremia, and hyperkalemia. Emergency treatment includes prompt IV isotonic fluids and parenteral glucocorticoid replacement; monitor glucose, electrolytes, and hemodynamic response.",
    "optionRationales": {
      "Rapid IV isotonic fluid replacement and prescribed IV hydrocortisone": "Correct. Restore circulating volume and replace deficient glucocorticoid promptly in suspected adrenal crisis.",
      "Fluid restriction and oral potassium supplementation": "Incorrect. The client is hypotensive and hyperkalemic; these actions would worsen the emergency.",
      "A loop diuretic before assessing circulating volume": "Incorrect. The client is likely volume depleted and in shock; resuscitation takes priority.",
      "Oral levothyroxine as the immediate rescue treatment": "Incorrect. Thyroid replacement does not treat adrenal crisis and may increase metabolic demand."
    },
    "clinicalJudgmentTip": "Adrenal crisis is a shock emergency: support circulation and give prescribed parenteral glucocorticoid without delay.",
    "sourceReferences": [
      {
        "title": "Adrenal Insufficiency and Addison's Disease",
        "publisher": "National Institute of Diabetes and Digestive and Kidney Diseases",
        "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/adrenal-insufficiency-addisons-disease",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Adrenal crisis",
        "publisher": "Society for Endocrinology",
        "url": "https://www.endocrinology.org/clinical-practice/clinical-guidance/adrenal-crisis/",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Exact fluid volumes, steroid dosing, and adjunctive treatment follow emergency protocols and patient-specific assessment."
    ],
    "metadata": {
      "id": "QR-100330",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "Which prescription should the nurse anticipate implementing first?",
      "options": [
        "Rapid IV isotonic fluid replacement and prescribed IV hydrocortisone",
        "Fluid restriction and oral potassium supplementation",
        "A loop diuretic before assessing circulating volume",
        "Oral levothyroxine as the immediate rescue treatment"
      ],
      "answerKey": "Rapid IV isotonic fluid replacement and prescribed IV hydrocortisone",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Known primary adrenal insufficiency with gastrointestinal fluid loss, severe hypotension, hyponatremia, and hyperkalemia."
    },
    "rationales": {
      "overall": "Treat suspected adrenal crisis urgently with IV fluids and parenteral glucocorticoid replacement.",
      "options": {},
      "clinicalJudgmentTip": "Do not delay emergency treatment while awaiting confirmatory testing in an unstable client."
    }
  },
  {
    "id": "QR-100331",
    "schemaVersion": 2,
    "category": "Adult Health",
    "topic": "Cushing syndrome and infection risk",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client with Cushing syndrome is receiving long-term glucocorticoid therapy. Which findings should the nurse recognize as expected manifestations or important complications to monitor? Select all that apply.",
    "options": [
      "Increased susceptibility to infection",
      "Hyperglycemia",
      "Thin skin with easy bruising",
      "Hypotension with persistent hyperkalemia as the expected pattern",
      "Delayed wound healing",
      "Unexplained hypoglycemia as the hallmark finding"
    ],
    "correctAnswer": [
      "Increased susceptibility to infection",
      "Hyperglycemia",
      "Thin skin with easy bruising",
      "Delayed wound healing"
    ],
    "rationale": "Excess glucocorticoid activity can suppress immune function, increase blood glucose, cause skin fragility and bruising, and impair tissue repair. Infection may present subtly, so assessment and teaching should emphasize early reporting of symptoms.",
    "optionRationales": {
      "Increased susceptibility to infection": "Correct. Glucocorticoids suppress inflammatory and immune responses.",
      "Hyperglycemia": "Correct. Cortisol increases glucose availability and can worsen insulin resistance.",
      "Thin skin with easy bruising": "Correct. Protein catabolism and skin thinning contribute to bruising and fragility.",
      "Hypotension with persistent hyperkalemia as the expected pattern": "Incorrect. This pattern is more consistent with adrenal insufficiency, not cortisol excess.",
      "Delayed wound healing": "Correct. Glucocorticoid excess impairs tissue repair and inflammatory responses.",
      "Unexplained hypoglycemia as the hallmark finding": "Incorrect. Hyperglycemia is more characteristic."
    },
    "clinicalJudgmentTip": "For Cushing syndrome, anticipate infection, hyperglycemia, fragile skin, and poor wound healing.",
    "sourceReferences": [
      {
        "title": "Cushing's Syndrome",
        "publisher": "National Institute of Diabetes and Digestive and Kidney Diseases",
        "url": "https://www.niddk.nih.gov/health-information/endocrine-diseases/cushings-syndrome",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Corticosteroids: early and late side-effects",
        "publisher": "NHS",
        "url": "https://www.nhs.uk/conditions/steroids/",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Manifestations vary with cause, duration, and glucocorticoid exposure; assess the individual client."
    ],
    "metadata": {
      "id": "QR-100331",
      "category": "Adult Health",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which findings should the nurse recognize as expected manifestations or important complications to monitor? Select all that apply.",
      "options": [
        "Increased susceptibility to infection",
        "Hyperglycemia",
        "Thin skin with easy bruising",
        "Hypotension with persistent hyperkalemia as the expected pattern",
        "Delayed wound healing",
        "Unexplained hypoglycemia as the hallmark finding"
      ],
      "answerKey": [
        "Increased susceptibility to infection",
        "Hyperglycemia",
        "Thin skin with easy bruising",
        "Delayed wound healing"
      ],
      "scoring": {
        "method": "exact-match"
      }
    },
    "stimulus": {
      "clinicalContext": "Cushing syndrome during prolonged glucocorticoid therapy."
    },
    "rationales": {
      "overall": "Excess cortisol causes immune suppression, hyperglycemia, skin fragility, and impaired healing.",
      "options": {},
      "clinicalJudgmentTip": "Monitor infection and glucose even when classic inflammatory signs are muted."
    }
  },
  {
    "id": "QR-100332",
    "schemaVersion": 2,
    "category": "Maternal Newborn",
    "topic": "Umbilical cord prolapse",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Single Choice",
    "question": "Immediately after spontaneous rupture of membranes, the fetal heart rate drops to 70/min. The nurse sees a loop of umbilical cord at the vaginal opening. What is the priority nursing action?",
    "options": [
      "Use a gloved hand to lift the presenting fetal part off the cord while calling for emergency assistance",
      "Attempt to push the cord back into the uterus",
      "Apply fundal pressure to speed delivery",
      "Leave the client supine and obtain a routine set of maternal vital signs"
    ],
    "correctAnswer": "Use a gloved hand to lift the presenting fetal part off the cord while calling for emergency assistance",
    "rationale": "Cord prolapse can compress the umbilical cord and rapidly interrupt fetal oxygenation. Relieve pressure by manually elevating the presenting part, call for emergency obstetric assistance, and prepare for expedited birth. Do not attempt to replace the cord.",
    "optionRationales": {
      "Use a gloved hand to lift the presenting fetal part off the cord while calling for emergency assistance": "Correct. Immediate decompression of the cord and emergency escalation help restore fetal blood flow while birth is arranged.",
      "Attempt to push the cord back into the uterus": "Incorrect. Do not attempt to replace the cord; manipulation can cause vasospasm or trauma.",
      "Apply fundal pressure to speed delivery": "Incorrect. Fundal pressure can worsen compression and is not an appropriate intervention.",
      "Leave the client supine and obtain a routine set of maternal vital signs": "Incorrect. This is an immediate fetal emergency; routine assessment must not delay cord decompression and escalation."
    },
    "clinicalJudgmentTip": "With visible cord prolapse, relieve pressure on the cord immediately and summon the obstetric team; do not push the cord back.",
    "sourceReferences": [
      {
        "title": "Umbilical Cord Prolapse",
        "publisher": "Royal College of Obstetricians and Gynaecologists",
        "url": "https://www.rcog.org.uk/for-the-public/browse-our-patient-information/umbilical-cord-prolapse-in-late-pregnancy/",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Umbilical Cord Prolapse",
        "publisher": "StatPearls / NCBI Bookshelf",
        "url": "https://www.ncbi.nlm.nih.gov/books/NBK542241/",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Positioning and delivery preparation should follow local obstetric emergency protocol; manual elevation must be maintained until relieved by the team or birth."
    ],
    "metadata": {
      "id": "QR-100332",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "What is the priority nursing action?",
      "options": [
        "Use a gloved hand to lift the presenting fetal part off the cord while calling for emergency assistance",
        "Attempt to push the cord back into the uterus",
        "Apply fundal pressure to speed delivery",
        "Leave the client supine and obtain a routine set of maternal vital signs"
      ],
      "answerKey": "Use a gloved hand to lift the presenting fetal part off the cord while calling for emergency assistance",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Immediately after membrane rupture, fetal bradycardia and a visible umbilical cord loop."
    },
    "rationales": {
      "overall": "Cord compression is a fetal emergency. Relieve pressure and expedite emergency obstetric response.",
      "options": {},
      "clinicalJudgmentTip": "Maintain elevation of the presenting part and avoid manipulating the prolapsed cord."
    }
  },
  {
    "id": "QR-100333",
    "schemaVersion": 2,
    "category": "Maternal Newborn",
    "topic": "VEAL CHOP fetal heart rate interpretation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "The fetal monitor shows recurrent variable decelerations during labor. Which cause should the nurse associate with this pattern?",
    "options": [
      "Umbilical cord compression",
      "Fetal head compression",
      "Uteroplacental insufficiency",
      "Maternal hypoglycemia"
    ],
    "correctAnswer": "Umbilical cord compression",
    "rationale": "Variable decelerations are associated with umbilical cord compression. The VEAL CHOP mnemonic pairs Variable with Cord compression, Early with Head compression, Accelerations with Okay, and Late with Placental insufficiency. Assess the pattern and maternal-fetal status and intervene according to the clinical situation and protocol.",
    "optionRationales": {
      "Umbilical cord compression": "Correct. Variable decelerations are classically associated with cord compression.",
      "Fetal head compression": "Incorrect. Head compression is associated with early decelerations.",
      "Uteroplacental insufficiency": "Incorrect. Uteroplacental insufficiency is associated with late decelerations.",
      "Maternal hypoglycemia": "Incorrect. Maternal hypoglycemia is not the VEAL CHOP cause matched to variable decelerations."
    },
    "clinicalJudgmentTip": "VEAL CHOP: Variable–Cord, Early–Head, Accelerations–Okay, Late–Placental insufficiency; interpret the whole tracing, not the mnemonic alone.",
    "sourceReferences": [
      {
        "title": "Fetal Heart Rate Monitoring",
        "publisher": "American College of Obstetricians and Gynecologists",
        "url": "https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2025/02/intrapartum-fetal-heart-rate-monitoring-interpretation-and-management",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Fetal Heart Rate Monitoring",
        "publisher": "Association of Women's Health, Obstetric and Neonatal Nurses",
        "url": "https://www.awhonn.org/",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "VEAL CHOP is a memory aid, not a substitute for standardized fetal heart rate classification and clinical assessment."
    ],
    "metadata": {
      "id": "QR-100333",
      "category": "Maternal Newborn",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "Which cause should the nurse associate with this pattern?",
      "options": [
        "Umbilical cord compression",
        "Fetal head compression",
        "Uteroplacental insufficiency",
        "Maternal hypoglycemia"
      ],
      "answerKey": "Umbilical cord compression",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Labor tracing with recurrent variable decelerations."
    },
    "rationales": {
      "overall": "Variable decelerations are associated with umbilical cord compression.",
      "options": {},
      "clinicalJudgmentTip": "Use the mnemonic to support, not replace, full fetal tracing interpretation."
    }
  },
  {
    "id": "QR-100334",
    "schemaVersion": 2,
    "category": "Pharmacological and Parenteral Therapies",
    "topic": "Diphtheria infection control and antitoxin",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 4,
    "type": "Multiple Response",
    "question": "A child is admitted with suspected respiratory diphtheria, including sore throat, low-grade fever, and an adherent gray pharyngeal membrane. Which actions should the nurse anticipate? Select all that apply.",
    "options": [
      "Initiate droplet precautions and appropriate isolation",
      "Notify public health authorities according to reporting requirements",
      "Anticipate diphtheria antitoxin and antibiotic treatment as prescribed",
      "Attempt to scrape the membrane away to assess the mucosa",
      "Obtain appropriate cultures without delaying urgent treatment",
      "Allow unmasked visitors if they have no symptoms"
    ],
    "correctAnswer": [
      "Initiate droplet precautions and appropriate isolation",
      "Notify public health authorities according to reporting requirements",
      "Anticipate diphtheria antitoxin and antibiotic treatment as prescribed",
      "Obtain appropriate cultures without delaying urgent treatment"
    ],
    "rationale": "Respiratory diphtheria is a potentially life-threatening toxin-mediated infection. Use droplet precautions, promptly notify infection prevention/public health as required, obtain diagnostic specimens when feasible, and anticipate antitoxin plus antibiotics. Do not attempt to remove the adherent membrane because it may bleed and airway compromise is possible.",
    "optionRationales": {
      "Initiate droplet precautions and appropriate isolation": "Correct. Respiratory diphtheria spreads through respiratory droplets and requires prompt transmission-based precautions.",
      "Notify public health authorities according to reporting requirements": "Correct. Diphtheria is a notifiable disease in many jurisdictions and requires public-health coordination.",
      "Anticipate diphtheria antitoxin and antibiotic treatment as prescribed": "Correct. Antitoxin neutralizes circulating toxin; antibiotics eradicate the organism and reduce transmission.",
      "Attempt to scrape the membrane away to assess the mucosa": "Incorrect. The adherent pseudomembrane can bleed when disturbed and airway compromise may occur.",
      "Obtain appropriate cultures without delaying urgent treatment": "Correct. Specimens support diagnosis, but treatment should not be delayed when clinical suspicion is high.",
      "Allow unmasked visitors if they have no symptoms": "Incorrect. Visitors and staff require appropriate precautions and exposure assessment."
    },
    "clinicalJudgmentTip": "Suspected respiratory diphtheria requires immediate isolation, urgent antitoxin/antibiotic coordination, and airway vigilance.",
    "sourceReferences": [
      {
        "title": "Clinical Guidance for Diphtheria",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/diphtheria/hcp/clinical-guidance/index.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Diphtheria",
        "publisher": "World Health Organization",
        "url": "https://www.who.int/news-room/fact-sheets/detail/diphtheria",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Antitoxin access, public-health reporting, and isolation duration follow local public-health and infection-control guidance."
    ],
    "metadata": {
      "id": "QR-100334",
      "category": "Pharmacological and Parenteral Therapies",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 4
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which actions should the nurse anticipate? Select all that apply.",
      "options": [
        "Initiate droplet precautions and appropriate isolation",
        "Notify public health authorities according to reporting requirements",
        "Anticipate diphtheria antitoxin and antibiotic treatment as prescribed",
        "Attempt to scrape the membrane away to assess the mucosa",
        "Obtain appropriate cultures without delaying urgent treatment",
        "Allow unmasked visitors if they have no symptoms"
      ],
      "answerKey": [
        "Initiate droplet precautions and appropriate isolation",
        "Notify public health authorities according to reporting requirements",
        "Anticipate diphtheria antitoxin and antibiotic treatment as prescribed",
        "Obtain appropriate cultures without delaying urgent treatment"
      ],
      "scoring": {
        "method": "exact-match"
      }
    },
    "stimulus": {
      "clinicalContext": "Child with suspected respiratory diphtheria and adherent gray pharyngeal pseudomembrane."
    },
    "rationales": {
      "overall": "Isolate, report, obtain specimens when feasible, and urgently coordinate antitoxin and antibiotics.",
      "options": {},
      "clinicalJudgmentTip": "Never scrape an adherent diphtheria membrane; protect the airway and avoid delaying treatment."
    }
  },
  {
    "id": "QR-100335",
    "schemaVersion": 2,
    "category": "Pharmacological and Parenteral Therapies",
    "topic": "Pertussis transmission precautions and treatment",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A 6-week-old infant is admitted with repeated coughing spells, posttussive vomiting, and episodes of apnea. Pertussis is suspected. Which nursing action is most appropriate?",
    "options": [
      "Initiate droplet precautions and promptly notify the provider because apnea in a young infant is high risk",
      "Place the infant in airborne isolation and wait for the cough to become productive",
      "Administer an over-the-counter cough suppressant and observe",
      "Delay precautions until the confirmatory test result returns"
    ],
    "correctAnswer": "Initiate droplet precautions and promptly notify the provider because apnea in a young infant is high risk",
    "rationale": "Pertussis is transmitted through respiratory droplets. Young infants may present with apnea and are at increased risk for severe complications. Initiate droplet precautions promptly, support airway and respiratory monitoring, and anticipate prescribed macrolide therapy and public-health contact management.",
    "optionRationales": {
      "Initiate droplet precautions and promptly notify the provider because apnea in a young infant is high risk": "Correct. Droplet precautions reduce transmission, and apnea in a young infant requires urgent assessment and escalation.",
      "Place the infant in airborne isolation and wait for the cough to become productive": "Incorrect. Pertussis requires droplet precautions; waiting delays infection control and evaluation.",
      "Administer an over-the-counter cough suppressant and observe": "Incorrect. Cough suppressants are not an appropriate response to apnea in a young infant.",
      "Delay precautions until the confirmatory test result returns": "Incorrect. Use appropriate precautions based on clinical suspicion rather than waiting for confirmation."
    },
    "clinicalJudgmentTip": "In young infants, apnea may be a prominent pertussis manifestation; prioritize respiratory monitoring and droplet precautions.",
    "sourceReferences": [
      {
        "title": "Clinical Features of Pertussis",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/pertussis/hcp/clinical-signs/index.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Pertussis (Whooping Cough)",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/pertussis/hcp/index.html",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Antibiotic choice, monitoring location, and prophylaxis decisions depend on age, severity, exposure, and local guidance."
    ],
    "metadata": {
      "id": "QR-100335",
      "category": "Pharmacological and Parenteral Therapies",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "Which nursing action is most appropriate?",
      "options": [
        "Initiate droplet precautions and promptly notify the provider because apnea in a young infant is high risk",
        "Place the infant in airborne isolation and wait for the cough to become productive",
        "Administer an over-the-counter cough suppressant and observe",
        "Delay precautions until the confirmatory test result returns"
      ],
      "answerKey": "Initiate droplet precautions and promptly notify the provider because apnea in a young infant is high risk",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "Six-week-old infant with paroxysmal cough, posttussive vomiting, and apnea; pertussis suspected."
    },
    "rationales": {
      "overall": "Suspected pertussis requires droplet precautions; apnea in an infant warrants urgent respiratory evaluation.",
      "options": {},
      "clinicalJudgmentTip": "Do not wait for laboratory confirmation before instituting appropriate precautions."
    }
  },
  {
    "id": "QR-100336",
    "schemaVersion": 2,
    "category": "Health Promotion and Maintenance",
    "topic": "Smoking cessation counseling",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Multiple Response",
    "question": "A client who smokes one pack of cigarettes daily says, \"I want to quit, but I am afraid I will fail again.\" Which nursing responses are appropriate? Select all that apply.",
    "options": [
      "Ask what has helped or made quitting difficult during previous attempts",
      "Work with the client to set a quit date and identify personal triggers",
      "Discuss evidence-based counseling and medication options with the client",
      "Tell the client that relapse proves the client is not motivated",
      "Encourage the client to use support services such as a quitline or counseling program",
      "Recommend switching to occasional smoking as a safe long-term goal"
    ],
    "correctAnswer": [
      "Ask what has helped or made quitting difficult during previous attempts",
      "Work with the client to set a quit date and identify personal triggers",
      "Discuss evidence-based counseling and medication options with the client",
      "Encourage the client to use support services such as a quitline or counseling program"
    ],
    "rationale": "Effective smoking-cessation support is collaborative and nonjudgmental. Assess readiness and prior experiences, develop a quit plan, address triggers, offer behavioral support and appropriate pharmacotherapy, and normalize that multiple attempts may be needed. There is no safe level of combustible cigarette use.",
    "optionRationales": {
      "Ask what has helped or made quitting difficult during previous attempts": "Correct. Exploring prior attempts helps tailor support and identify barriers.",
      "Work with the client to set a quit date and identify personal triggers": "Correct. A specific plan and trigger-management strategies support behavior change.",
      "Discuss evidence-based counseling and medication options with the client": "Correct. Behavioral support combined with appropriate medication can improve cessation success.",
      "Tell the client that relapse proves the client is not motivated": "Incorrect. This is judgmental and undermines engagement; relapse can be part of the quitting process.",
      "Encourage the client to use support services such as a quitline or counseling program": "Correct. Ongoing counseling and support services can improve quit outcomes.",
      "Recommend switching to occasional smoking as a safe long-term goal": "Incorrect. Reducing use is not equivalent to cessation; no level of cigarette smoking is safe."
    },
    "clinicalJudgmentTip": "Use supportive, nonjudgmental counseling; combine a quit plan, behavioral support, and individualized medication options.",
    "sourceReferences": [
      {
        "title": "How to Quit Smoking",
        "publisher": "Centers for Disease Control and Prevention",
        "url": "https://www.cdc.gov/tobacco/about/how-to-quit-smoking.html",
        "accessedAt": "2026-11-12"
      },
      {
        "title": "Smoking Cessation: A Report of the Surgeon General",
        "publisher": "U.S. Department of Health and Human Services",
        "url": "https://www.hhs.gov/surgeongeneral/reports-and-publications/tobacco/index.html",
        "accessedAt": "2026-11-12"
      }
    ],
    "evidenceLimitations": [
      "Medication selection requires review of pregnancy status, comorbidities, contraindications, preferences, and local availability."
    ],
    "metadata": {
      "id": "QR-100336",
      "category": "Health Promotion and Maintenance",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Multiple Response",
      "stem": "Which nursing responses are appropriate? Select all that apply.",
      "options": [
        "Ask what has helped or made quitting difficult during previous attempts",
        "Work with the client to set a quit date and identify personal triggers",
        "Discuss evidence-based counseling and medication options with the client",
        "Tell the client that relapse proves the client is not motivated",
        "Encourage the client to use support services such as a quitline or counseling program",
        "Recommend switching to occasional smoking as a safe long-term goal"
      ],
      "answerKey": [
        "Ask what has helped or made quitting difficult during previous attempts",
        "Work with the client to set a quit date and identify personal triggers",
        "Discuss evidence-based counseling and medication options with the client",
        "Encourage the client to use support services such as a quitline or counseling program"
      ],
      "scoring": {
        "method": "exact-match"
      }
    },
    "stimulus": {
      "clinicalContext": "Adult client smokes one pack daily, wants to quit, and expresses fear after prior unsuccessful attempts."
    },
    "rationales": {
      "overall": "Collaborative planning, counseling, medication options, and continued support improve cessation efforts.",
      "options": {},
      "clinicalJudgmentTip": "Treat relapse as an opportunity to revise the plan, not as a failure of motivation."
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch9={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
