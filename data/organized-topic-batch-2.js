/* Organized NCLEX topic batch 2: 20 original pediatric nursing items.
 * Source-grounded educational practice content; automated checks are not clinical certification.
 */
(function(root){'use strict';const bank=root.questions;if(!Array.isArray(bank))throw new Error('Canonical question bank must load first.');const ids=new Set(bank.map(q=>q.id||q.metadata?.id));const items=[
  {
    "id": "QR-100201",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Nephrotic syndrome",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Evaluate Outcomes",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with nephrotic syndrome has generalized edema and heavy proteinuria. Which finding best indicates that treatment is improving the condition?",
    "options": [
      "Increasing periorbital edema",
      "Decreasing urine protein and edema",
      "Rapid weight gain over 24 hours",
      "New abdominal distention"
    ],
    "correctAnswer": "Decreasing urine protein and edema",
    "rationale": "Reduced proteinuria and edema indicate improvement in the nephrotic state; trend daily weight, edema, intake/output, and urine protein.",
    "optionRationales": {
      "Increasing periorbital edema": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Decreasing urine protein and edema": "Reduced proteinuria and edema indicate improvement in the nephrotic state; trend daily weight, edema, intake/output, and urine protein.",
      "Rapid weight gain over 24 hours": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "New abdominal distention": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
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
      "Original educational practice item; confirm current local protocols and patient-specific orders."
    ],
    "metadata": {
      "id": "QR-100201",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Evaluate Outcomes",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with nephrotic syndrome has generalized edema and heavy proteinuria. Which finding best indicates that treatment is improving the condition?",
      "options": [
        "Increasing periorbital edema",
        "Decreasing urine protein and edema",
        "Rapid weight gain over 24 hours",
        "New abdominal distention"
      ],
      "answerKey": "Decreasing urine protein and edema",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with nephrotic syndrome has generalized edema and heavy proteinuria. Which finding best indicates that treatment is improving the condition?"
    },
    "rationales": {
      "overall": "Reduced proteinuria and edema indicate improvement in the nephrotic state; trend daily weight, edema, intake/output, and urine protein.",
      "options": {
        "Increasing periorbital edema": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Decreasing urine protein and edema": "Reduced proteinuria and edema indicate improvement in the nephrotic state; trend daily weight, edema, intake/output, and urine protein.",
        "Rapid weight gain over 24 hours": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "New abdominal distention": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100202",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Post-streptococcal glomerulonephritis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Analyze Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A school-age child develops facial edema, cola-colored urine, and hypertension 2 weeks after a sore throat. Which condition is most likely?",
    "options": [
      "Acute post-streptococcal glomerulonephritis",
      "Nephrotic syndrome",
      "Uncomplicated cystitis",
      "Diabetes insipidus"
    ],
    "correctAnswer": "Acute post-streptococcal glomerulonephritis",
    "rationale": "Hematuria, edema, and hypertension after a recent streptococcal infection are characteristic of acute post-streptococcal glomerulonephritis.",
    "optionRationales": {
      "Acute post-streptococcal glomerulonephritis": "Hematuria, edema, and hypertension after a recent streptococcal infection are characteristic of acute post-streptococcal glomerulonephritis.",
      "Nephrotic syndrome": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Uncomplicated cystitis": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Diabetes insipidus": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/000503.htm",
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
      "id": "QR-100202",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Analyze Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A school-age child develops facial edema, cola-colored urine, and hypertension 2 weeks after a sore throat. Which condition is most likely?",
      "options": [
        "Acute post-streptococcal glomerulonephritis",
        "Nephrotic syndrome",
        "Uncomplicated cystitis",
        "Diabetes insipidus"
      ],
      "answerKey": "Acute post-streptococcal glomerulonephritis",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A school-age child develops facial edema, cola-colored urine, and hypertension 2 weeks after a sore throat. Which condition is most likely?"
    },
    "rationales": {
      "overall": "Hematuria, edema, and hypertension after a recent streptococcal infection are characteristic of acute post-streptococcal glomerulonephritis.",
      "options": {
        "Acute post-streptococcal glomerulonephritis": "Hematuria, edema, and hypertension after a recent streptococcal infection are characteristic of acute post-streptococcal glomerulonephritis.",
        "Nephrotic syndrome": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Uncomplicated cystitis": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Diabetes insipidus": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100203",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Wilms tumor",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child is admitted with a suspected Wilms tumor. Which nursing action is essential?",
    "options": [
      "Avoid palpating the abdomen",
      "Encourage deep abdominal massage",
      "Apply a heating pad to the mass",
      "Perform frequent deep palpation to measure growth"
    ],
    "correctAnswer": "Avoid palpating the abdomen",
    "rationale": "Avoid abdominal palpation because manipulation of a Wilms tumor may increase the risk of tumor rupture and spread. Follow oncology precautions.",
    "optionRationales": {
      "Avoid palpating the abdomen": "Avoid abdominal palpation because manipulation of a Wilms tumor may increase the risk of tumor rupture and spread. Follow oncology precautions.",
      "Encourage deep abdominal massage": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Apply a heating pad to the mass": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Perform frequent deep palpation to measure growth": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/001575.htm",
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
      "id": "QR-100203",
      "category": "Pediatric Nursing",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child is admitted with a suspected Wilms tumor. Which nursing action is essential?",
      "options": [
        "Avoid palpating the abdomen",
        "Encourage deep abdominal massage",
        "Apply a heating pad to the mass",
        "Perform frequent deep palpation to measure growth"
      ],
      "answerKey": "Avoid palpating the abdomen",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child is admitted with a suspected Wilms tumor. Which nursing action is essential?"
    },
    "rationales": {
      "overall": "Avoid abdominal palpation because manipulation of a Wilms tumor may increase the risk of tumor rupture and spread. Follow oncology precautions.",
      "options": {
        "Avoid palpating the abdomen": "Avoid abdominal palpation because manipulation of a Wilms tumor may increase the risk of tumor rupture and spread. Follow oncology precautions.",
        "Encourage deep abdominal massage": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Apply a heating pad to the mass": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Perform frequent deep palpation to measure growth": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100204",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Urinary tract infection in children",
    "clientNeeds": "Reduction of Risk Potential",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A febrile infant is being evaluated for a urinary tract infection. Which specimen collection method provides the most reliable urine culture when the infant is not toilet trained?",
    "options": [
      "Sterile catheterization or suprapubic aspiration as clinically indicated",
      "Urine squeezed from a diaper",
      "Cotton ball placed in the diaper",
      "A sample collected from a used collection bag"
    ],
    "correctAnswer": "Sterile catheterization or suprapubic aspiration as clinically indicated",
    "rationale": "A properly collected catheterized or suprapubic specimen reduces contamination for culture in a non-toilet-trained infant. Follow institutional collection protocols.",
    "optionRationales": {
      "Sterile catheterization or suprapubic aspiration as clinically indicated": "A properly collected catheterized or suprapubic specimen reduces contamination for culture in a non-toilet-trained infant. Follow institutional collection protocols.",
      "Urine squeezed from a diaper": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Cotton ball placed in the diaper": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "A sample collected from a used collection bag": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/000505.htm",
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
      "id": "QR-100204",
      "category": "Pediatric Nursing",
      "clientNeeds": "Reduction of Risk Potential",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A febrile infant is being evaluated for a urinary tract infection. Which specimen collection method provides the most reliable urine culture when the infant is not toilet trained?",
      "options": [
        "Sterile catheterization or suprapubic aspiration as clinically indicated",
        "Urine squeezed from a diaper",
        "Cotton ball placed in the diaper",
        "A sample collected from a used collection bag"
      ],
      "answerKey": "Sterile catheterization or suprapubic aspiration as clinically indicated",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A febrile infant is being evaluated for a urinary tract infection. Which specimen collection method provides the most reliable urine culture when the infant is not toilet trained?"
    },
    "rationales": {
      "overall": "A properly collected catheterized or suprapubic specimen reduces contamination for culture in a non-toilet-trained infant. Follow institutional collection protocols.",
      "options": {
        "Sterile catheterization or suprapubic aspiration as clinically indicated": "A properly collected catheterized or suprapubic specimen reduces contamination for culture in a non-toilet-trained infant. Follow institutional collection protocols.",
        "Urine squeezed from a diaper": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Cotton ball placed in the diaper": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "A sample collected from a used collection bag": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100205",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Type 1 diabetes in children",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with type 1 diabetes is pale, diaphoretic, and shaky before lunch. The child is awake and able to swallow. What should the nurse do first?",
    "options": [
      "Give a rapid source of glucose according to the hypoglycemia protocol",
      "Administer the scheduled rapid-acting insulin",
      "Encourage exercise to raise glucose",
      "Wait until the meal tray arrives"
    ],
    "correctAnswer": "Give a rapid source of glucose according to the hypoglycemia protocol",
    "rationale": "Symptoms suggest hypoglycemia. Treat promptly with fast-acting carbohydrate when the child is conscious and able to swallow, then recheck glucose per protocol.",
    "optionRationales": {
      "Give a rapid source of glucose according to the hypoglycemia protocol": "Symptoms suggest hypoglycemia. Treat promptly with fast-acting carbohydrate when the child is conscious and able to swallow, then recheck glucose per protocol.",
      "Administer the scheduled rapid-acting insulin": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Encourage exercise to raise glucose": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Wait until the meal tray arrives": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/diabetesinchildrenandteens.html",
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
      "id": "QR-100205",
      "category": "Pediatric Nursing",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with type 1 diabetes is pale, diaphoretic, and shaky before lunch. The child is awake and able to swallow. What should the nurse do first?",
      "options": [
        "Give a rapid source of glucose according to the hypoglycemia protocol",
        "Administer the scheduled rapid-acting insulin",
        "Encourage exercise to raise glucose",
        "Wait until the meal tray arrives"
      ],
      "answerKey": "Give a rapid source of glucose according to the hypoglycemia protocol",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with type 1 diabetes is pale, diaphoretic, and shaky before lunch. The child is awake and able to swallow. What should the nurse do first?"
    },
    "rationales": {
      "overall": "Symptoms suggest hypoglycemia. Treat promptly with fast-acting carbohydrate when the child is conscious and able to swallow, then recheck glucose per protocol.",
      "options": {
        "Give a rapid source of glucose according to the hypoglycemia protocol": "Symptoms suggest hypoglycemia. Treat promptly with fast-acting carbohydrate when the child is conscious and able to swallow, then recheck glucose per protocol.",
        "Administer the scheduled rapid-acting insulin": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Encourage exercise to raise glucose": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Wait until the meal tray arrives": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100206",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Diabetic ketoacidosis",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Recognize Cues",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with DKA is receiving IV fluids and insulin. Which laboratory value requires close monitoring because insulin therapy can rapidly lower it?",
    "options": [
      "Potassium",
      "Albumin",
      "Calcium",
      "Bilirubin"
    ],
    "correctAnswer": "Potassium",
    "rationale": "Insulin shifts potassium into cells, potentially causing hypokalemia. Monitor potassium and cardiac status closely and follow the pediatric DKA protocol for replacement and insulin timing.",
    "optionRationales": {
      "Potassium": "Insulin shifts potassium into cells, potentially causing hypokalemia. Monitor potassium and cardiac status closely and follow the pediatric DKA protocol for replacement and insulin timing.",
      "Albumin": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Calcium": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Bilirubin": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/000320.htm",
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
      "id": "QR-100206",
      "category": "Pediatric Nursing",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Recognize Cues",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with DKA is receiving IV fluids and insulin. Which laboratory value requires close monitoring because insulin therapy can rapidly lower it?",
      "options": [
        "Potassium",
        "Albumin",
        "Calcium",
        "Bilirubin"
      ],
      "answerKey": "Potassium",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with DKA is receiving IV fluids and insulin. Which laboratory value requires close monitoring because insulin therapy can rapidly lower it?"
    },
    "rationales": {
      "overall": "Insulin shifts potassium into cells, potentially causing hypokalemia. Monitor potassium and cardiac status closely and follow the pediatric DKA protocol for replacement and insulin timing.",
      "options": {
        "Potassium": "Insulin shifts potassium into cells, potentially causing hypokalemia. Monitor potassium and cardiac status closely and follow the pediatric DKA protocol for replacement and insulin timing.",
        "Albumin": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Calcium": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Bilirubin": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100207",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Congenital hypothyroidism",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A newborn is diagnosed with congenital hypothyroidism. Which intervention is most important to prevent long-term developmental impairment?",
    "options": [
      "Begin prescribed thyroid hormone replacement promptly and maintain follow-up monitoring",
      "Delay treatment until symptoms appear",
      "Restrict dietary iodine completely",
      "Stop treatment when growth appears normal"
    ],
    "correctAnswer": "Begin prescribed thyroid hormone replacement promptly and maintain follow-up monitoring",
    "rationale": "Early and sustained thyroid hormone replacement is essential for normal brain development. Caregivers need medication teaching and regular laboratory follow-up.",
    "optionRationales": {
      "Begin prescribed thyroid hormone replacement promptly and maintain follow-up monitoring": "Early and sustained thyroid hormone replacement is essential for normal brain development. Caregivers need medication teaching and regular laboratory follow-up.",
      "Delay treatment until symptoms appear": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Restrict dietary iodine completely": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Stop treatment when growth appears normal": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/001193.htm",
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
      "id": "QR-100207",
      "category": "Pediatric Nursing",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A newborn is diagnosed with congenital hypothyroidism. Which intervention is most important to prevent long-term developmental impairment?",
      "options": [
        "Begin prescribed thyroid hormone replacement promptly and maintain follow-up monitoring",
        "Delay treatment until symptoms appear",
        "Restrict dietary iodine completely",
        "Stop treatment when growth appears normal"
      ],
      "answerKey": "Begin prescribed thyroid hormone replacement promptly and maintain follow-up monitoring",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A newborn is diagnosed with congenital hypothyroidism. Which intervention is most important to prevent long-term developmental impairment?"
    },
    "rationales": {
      "overall": "Early and sustained thyroid hormone replacement is essential for normal brain development. Caregivers need medication teaching and regular laboratory follow-up.",
      "options": {
        "Begin prescribed thyroid hormone replacement promptly and maintain follow-up monitoring": "Early and sustained thyroid hormone replacement is essential for normal brain development. Caregivers need medication teaching and regular laboratory follow-up.",
        "Delay treatment until symptoms appear": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Restrict dietary iodine completely": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Stop treatment when growth appears normal": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100208",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Phenylketonuria",
    "clientNeeds": "Health Promotion and Maintenance",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "The caregiver of an infant with phenylketonuria asks about feeding. Which instruction is appropriate?",
    "options": [
      "Use the prescribed phenylalanine-restricted diet and specialized formula",
      "Eliminate all protein without dietitian guidance",
      "Use standard formula exclusively",
      "Introduce high-protein foods early"
    ],
    "correctAnswer": "Use the prescribed phenylalanine-restricted diet and specialized formula",
    "rationale": "PKU management requires controlled phenylalanine intake with specialized medical nutrition and ongoing monitoring; avoid unsupervised dietary changes.",
    "optionRationales": {
      "Use the prescribed phenylalanine-restricted diet and specialized formula": "PKU management requires controlled phenylalanine intake with specialized medical nutrition and ongoing monitoring; avoid unsupervised dietary changes.",
      "Eliminate all protein without dietitian guidance": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Use standard formula exclusively": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Introduce high-protein foods early": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/001166.htm",
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
      "id": "QR-100208",
      "category": "Pediatric Nursing",
      "clientNeeds": "Health Promotion and Maintenance",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "The caregiver of an infant with phenylketonuria asks about feeding. Which instruction is appropriate?",
      "options": [
        "Use the prescribed phenylalanine-restricted diet and specialized formula",
        "Eliminate all protein without dietitian guidance",
        "Use standard formula exclusively",
        "Introduce high-protein foods early"
      ],
      "answerKey": "Use the prescribed phenylalanine-restricted diet and specialized formula",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "The caregiver of an infant with phenylketonuria asks about feeding. Which instruction is appropriate?"
    },
    "rationales": {
      "overall": "PKU management requires controlled phenylalanine intake with specialized medical nutrition and ongoing monitoring; avoid unsupervised dietary changes.",
      "options": {
        "Use the prescribed phenylalanine-restricted diet and specialized formula": "PKU management requires controlled phenylalanine intake with specialized medical nutrition and ongoing monitoring; avoid unsupervised dietary changes.",
        "Eliminate all protein without dietitian guidance": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Use standard formula exclusively": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Introduce high-protein foods early": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100209",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Sickle cell crisis",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with sickle cell disease is admitted with severe pain and no signs of acute chest syndrome. Which intervention should the nurse prioritize?",
    "options": [
      "Administer prescribed analgesia promptly and support hydration",
      "Restrict fluids to reduce edema",
      "Apply ice packs to painful areas",
      "Delay analgesia until the cause of pain is confirmed by imaging"
    ],
    "correctAnswer": "Administer prescribed analgesia promptly and support hydration",
    "rationale": "Prompt pain management and hydration are central to vaso-occlusive crisis care. Assess for complications such as acute chest syndrome and follow the individualized plan.",
    "optionRationales": {
      "Administer prescribed analgesia promptly and support hydration": "Prompt pain management and hydration are central to vaso-occlusive crisis care. Assess for complications such as acute chest syndrome and follow the individualized plan.",
      "Restrict fluids to reduce edema": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Apply ice packs to painful areas": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Delay analgesia until the cause of pain is confirmed by imaging": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/sicklecellanemia.html",
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
      "id": "QR-100209",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with sickle cell disease is admitted with severe pain and no signs of acute chest syndrome. Which intervention should the nurse prioritize?",
      "options": [
        "Administer prescribed analgesia promptly and support hydration",
        "Restrict fluids to reduce edema",
        "Apply ice packs to painful areas",
        "Delay analgesia until the cause of pain is confirmed by imaging"
      ],
      "answerKey": "Administer prescribed analgesia promptly and support hydration",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with sickle cell disease is admitted with severe pain and no signs of acute chest syndrome. Which intervention should the nurse prioritize?"
    },
    "rationales": {
      "overall": "Prompt pain management and hydration are central to vaso-occlusive crisis care. Assess for complications such as acute chest syndrome and follow the individualized plan.",
      "options": {
        "Administer prescribed analgesia promptly and support hydration": "Prompt pain management and hydration are central to vaso-occlusive crisis care. Assess for complications such as acute chest syndrome and follow the individualized plan.",
        "Restrict fluids to reduce edema": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Apply ice packs to painful areas": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Delay analgesia until the cause of pain is confirmed by imaging": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100210",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Hemophilia",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with hemophilia falls and reports a painful swollen knee. Which action should the nurse anticipate?",
    "options": [
      "Administer prescribed clotting-factor replacement promptly",
      "Encourage repeated active range of motion",
      "Give aspirin for pain",
      "Massage the joint to disperse blood"
    ],
    "correctAnswer": "Administer prescribed clotting-factor replacement promptly",
    "rationale": "A painful swollen joint may represent hemarthrosis. Prompt factor replacement limits bleeding; avoid aspirin and joint massage and follow the hemophilia plan.",
    "optionRationales": {
      "Administer prescribed clotting-factor replacement promptly": "A painful swollen joint may represent hemarthrosis. Prompt factor replacement limits bleeding; avoid aspirin and joint massage and follow the hemophilia plan.",
      "Encourage repeated active range of motion": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Give aspirin for pain": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Massage the joint to disperse blood": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/hemophilia.html",
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
      "id": "QR-100210",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with hemophilia falls and reports a painful swollen knee. Which action should the nurse anticipate?",
      "options": [
        "Administer prescribed clotting-factor replacement promptly",
        "Encourage repeated active range of motion",
        "Give aspirin for pain",
        "Massage the joint to disperse blood"
      ],
      "answerKey": "Administer prescribed clotting-factor replacement promptly",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with hemophilia falls and reports a painful swollen knee. Which action should the nurse anticipate?"
    },
    "rationales": {
      "overall": "A painful swollen joint may represent hemarthrosis. Prompt factor replacement limits bleeding; avoid aspirin and joint massage and follow the hemophilia plan.",
      "options": {
        "Administer prescribed clotting-factor replacement promptly": "A painful swollen joint may represent hemarthrosis. Prompt factor replacement limits bleeding; avoid aspirin and joint massage and follow the hemophilia plan.",
        "Encourage repeated active range of motion": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Give aspirin for pain": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Massage the joint to disperse blood": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100211",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Leukemia in children",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child receiving chemotherapy for leukemia has a temperature of 38.3°C (100.9°F). Which action is the priority?",
    "options": [
      "Initiate the facility's febrile neutropenia pathway and notify the oncology team immediately",
      "Give an antipyretic and reassess tomorrow",
      "Obtain a rectal temperature",
      "Place fresh flowers in the room"
    ],
    "correctAnswer": "Initiate the facility's febrile neutropenia pathway and notify the oncology team immediately",
    "rationale": "Fever during chemotherapy may be the only sign of life-threatening infection in neutropenia. Prompt evaluation, cultures, and timely empiric treatment are critical; avoid rectal procedures.",
    "optionRationales": {
      "Initiate the facility's febrile neutropenia pathway and notify the oncology team immediately": "Fever during chemotherapy may be the only sign of life-threatening infection in neutropenia. Prompt evaluation, cultures, and timely empiric treatment are critical; avoid rectal procedures.",
      "Give an antipyretic and reassess tomorrow": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Obtain a rectal temperature": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Place fresh flowers in the room": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/000541.htm",
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
      "id": "QR-100211",
      "category": "Pediatric Nursing",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child receiving chemotherapy for leukemia has a temperature of 38.3°C (100.9°F). Which action is the priority?",
      "options": [
        "Initiate the facility's febrile neutropenia pathway and notify the oncology team immediately",
        "Give an antipyretic and reassess tomorrow",
        "Obtain a rectal temperature",
        "Place fresh flowers in the room"
      ],
      "answerKey": "Initiate the facility's febrile neutropenia pathway and notify the oncology team immediately",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child receiving chemotherapy for leukemia has a temperature of 38.3°C (100.9°F). Which action is the priority?"
    },
    "rationales": {
      "overall": "Fever during chemotherapy may be the only sign of life-threatening infection in neutropenia. Prompt evaluation, cultures, and timely empiric treatment are critical; avoid rectal procedures.",
      "options": {
        "Initiate the facility's febrile neutropenia pathway and notify the oncology team immediately": "Fever during chemotherapy may be the only sign of life-threatening infection in neutropenia. Prompt evaluation, cultures, and timely empiric treatment are critical; avoid rectal procedures.",
        "Give an antipyretic and reassess tomorrow": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Obtain a rectal temperature": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Place fresh flowers in the room": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100212",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Iron deficiency anemia",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A toddler with iron-deficiency anemia is prescribed oral ferrous sulfate. Which caregiver instruction is appropriate?",
    "options": [
      "Give the iron with a vitamin C-containing drink if tolerated and keep it out of children's reach",
      "Mix the dose with milk to maximize absorption",
      "Stop the medication when the child appears less pale",
      "Expect stools to become white"
    ],
    "correctAnswer": "Give the iron with a vitamin C-containing drink if tolerated and keep it out of children's reach",
    "rationale": "Vitamin C can improve iron absorption; milk may reduce absorption. Iron overdose is dangerous, so store it securely. Follow the prescribed dose and monitoring plan.",
    "optionRationales": {
      "Give the iron with a vitamin C-containing drink if tolerated and keep it out of children's reach": "Vitamin C can improve iron absorption; milk may reduce absorption. Iron overdose is dangerous, so store it securely. Follow the prescribed dose and monitoring plan.",
      "Mix the dose with milk to maximize absorption": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Stop the medication when the child appears less pale": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Expect stools to become white": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/007134.htm",
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
      "id": "QR-100212",
      "category": "Pediatric Nursing",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A toddler with iron-deficiency anemia is prescribed oral ferrous sulfate. Which caregiver instruction is appropriate?",
      "options": [
        "Give the iron with a vitamin C-containing drink if tolerated and keep it out of children's reach",
        "Mix the dose with milk to maximize absorption",
        "Stop the medication when the child appears less pale",
        "Expect stools to become white"
      ],
      "answerKey": "Give the iron with a vitamin C-containing drink if tolerated and keep it out of children's reach",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A toddler with iron-deficiency anemia is prescribed oral ferrous sulfate. Which caregiver instruction is appropriate?"
    },
    "rationales": {
      "overall": "Vitamin C can improve iron absorption; milk may reduce absorption. Iron overdose is dangerous, so store it securely. Follow the prescribed dose and monitoring plan.",
      "options": {
        "Give the iron with a vitamin C-containing drink if tolerated and keep it out of children's reach": "Vitamin C can improve iron absorption; milk may reduce absorption. Iron overdose is dangerous, so store it securely. Follow the prescribed dose and monitoring plan.",
        "Mix the dose with milk to maximize absorption": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Stop the medication when the child appears less pale": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Expect stools to become white": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100213",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Pediatric medication dosage",
    "clientNeeds": "Pharmacological and Parenteral Therapies",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A medication is prescribed at 10 mg/kg/day divided into 2 equal doses for a child weighing 18 kg. How many milligrams should the nurse administer per dose?",
    "options": [
      "45",
      "90",
      "18",
      "180"
    ],
    "correctAnswer": "90",
    "rationale": "The total daily dose is 10 mg × 18 kg = 180 mg/day. Dividing into 2 equal doses gives 90 mg per dose. Verify the order, concentration, and safe dose range before administration.",
    "optionRationales": {
      "18": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "45": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "90": "The total daily dose is 10 mg × 18 kg = 180 mg/day. Dividing into 2 equal doses gives 90 mg per dose. Verify the order, concentration, and safe dose range before administration.",
      "180": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/002836.htm",
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
      "id": "QR-100213",
      "category": "Pediatric Nursing",
      "clientNeeds": "Pharmacological and Parenteral Therapies",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A medication is prescribed at 10 mg/kg/day divided into 2 equal doses for a child weighing 18 kg. How many milligrams should the nurse administer per dose?",
      "options": [
        "45",
        "90",
        "18",
        "180"
      ],
      "answerKey": "90",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A medication is prescribed at 10 mg/kg/day divided into 2 equal doses for a child weighing 18 kg. How many milligrams should the nurse administer per dose?"
    },
    "rationales": {
      "overall": "The total daily dose is 10 mg × 18 kg = 180 mg/day. Dividing into 2 equal doses gives 90 mg per dose. Verify the order, concentration, and safe dose range before administration.",
      "options": {
        "18": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "45": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "90": "The total daily dose is 10 mg × 18 kg = 180 mg/day. Dividing into 2 equal doses gives 90 mg per dose. Verify the order, concentration, and safe dose range before administration.",
        "180": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100214",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Child abuse recognition and reporting",
    "clientNeeds": "Management of Care",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child has injuries in different stages of healing, and the caregiver's explanation is inconsistent with the child's developmental abilities. What is the nurse's responsibility?",
    "options": [
      "Ensure immediate safety, document objective findings, and report the suspicion according to law and policy",
      "Confront the caregiver and demand a confession",
      "Wait for proof before reporting",
      "Ask the child leading questions repeatedly"
    ],
    "correctAnswer": "Ensure immediate safety, document objective findings, and report the suspicion according to law and policy",
    "rationale": "Nurses are mandated reporters in applicable jurisdictions. Report reasonable suspicion through required channels, document objectively, and avoid conducting an investigative interview.",
    "optionRationales": {
      "Ensure immediate safety, document objective findings, and report the suspicion according to law and policy": "Nurses are mandated reporters in applicable jurisdictions. Report reasonable suspicion through required channels, document objectively, and avoid conducting an investigative interview.",
      "Confront the caregiver and demand a confession": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Wait for proof before reporting": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Ask the child leading questions repeatedly": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://www.childwelfare.gov/resources/mandatory-reporting-child-abuse-and-neglect/",
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
      "id": "QR-100214",
      "category": "Pediatric Nursing",
      "clientNeeds": "Management of Care",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child has injuries in different stages of healing, and the caregiver's explanation is inconsistent with the child's developmental abilities. What is the nurse's responsibility?",
      "options": [
        "Ensure immediate safety, document objective findings, and report the suspicion according to law and policy",
        "Confront the caregiver and demand a confession",
        "Wait for proof before reporting",
        "Ask the child leading questions repeatedly"
      ],
      "answerKey": "Ensure immediate safety, document objective findings, and report the suspicion according to law and policy",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child has injuries in different stages of healing, and the caregiver's explanation is inconsistent with the child's developmental abilities. What is the nurse's responsibility?"
    },
    "rationales": {
      "overall": "Nurses are mandated reporters in applicable jurisdictions. Report reasonable suspicion through required channels, document objectively, and avoid conducting an investigative interview.",
      "options": {
        "Ensure immediate safety, document objective findings, and report the suspicion according to law and policy": "Nurses are mandated reporters in applicable jurisdictions. Report reasonable suspicion through required channels, document objectively, and avoid conducting an investigative interview.",
        "Confront the caregiver and demand a confession": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Wait for proof before reporting": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Ask the child leading questions repeatedly": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100215",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Poisoning and ingestion",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A caregiver calls after a toddler may have swallowed an unknown household cleaner. The child is awake and breathing normally. Which instruction is appropriate?",
    "options": [
      "Contact Poison Control immediately and do not induce vomiting",
      "Give syrup of ipecac",
      "Force the child to drink large amounts of milk",
      "Wait for symptoms before seeking advice"
    ],
    "correctAnswer": "Contact Poison Control immediately and do not induce vomiting",
    "rationale": "Do not induce vomiting or give home remedies unless directed by Poison Control. Obtain product information and seek emergency care for symptoms or airway compromise.",
    "optionRationales": {
      "Contact Poison Control immediately and do not induce vomiting": "Do not induce vomiting or give home remedies unless directed by Poison Control. Obtain product information and seek emergency care for symptoms or airway compromise.",
      "Give syrup of ipecac": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Force the child to drink large amounts of milk": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Wait for symptoms before seeking advice": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://www.poison.org/",
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
      "id": "QR-100215",
      "category": "Pediatric Nursing",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A caregiver calls after a toddler may have swallowed an unknown household cleaner. The child is awake and breathing normally. Which instruction is appropriate?",
      "options": [
        "Contact Poison Control immediately and do not induce vomiting",
        "Give syrup of ipecac",
        "Force the child to drink large amounts of milk",
        "Wait for symptoms before seeking advice"
      ],
      "answerKey": "Contact Poison Control immediately and do not induce vomiting",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A caregiver calls after a toddler may have swallowed an unknown household cleaner. The child is awake and breathing normally. Which instruction is appropriate?"
    },
    "rationales": {
      "overall": "Do not induce vomiting or give home remedies unless directed by Poison Control. Obtain product information and seek emergency care for symptoms or airway compromise.",
      "options": {
        "Contact Poison Control immediately and do not induce vomiting": "Do not induce vomiting or give home remedies unless directed by Poison Control. Obtain product information and seek emergency care for symptoms or airway compromise.",
        "Give syrup of ipecac": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Force the child to drink large amounts of milk": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Wait for symptoms before seeking advice": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100216",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Pediatric shock",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with suspected septic shock has cool mottled extremities, delayed capillary refill, altered mental status, and weak peripheral pulses. Which action should occur first?",
    "options": [
      "Activate emergency response and initiate rapid assessment and protocol-directed resuscitation",
      "Offer oral fluids and observe",
      "Delay intervention until hypotension develops",
      "Place the child in a warm bath"
    ],
    "correctAnswer": "Activate emergency response and initiate rapid assessment and protocol-directed resuscitation",
    "rationale": "Children may maintain blood pressure until late in shock. Poor perfusion and altered mental status require immediate escalation and protocol-directed resuscitation.",
    "optionRationales": {
      "Activate emergency response and initiate rapid assessment and protocol-directed resuscitation": "Children may maintain blood pressure until late in shock. Poor perfusion and altered mental status require immediate escalation and protocol-directed resuscitation.",
      "Offer oral fluids and observe": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Delay intervention until hypotension develops": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Place the child in a warm bath": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
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
      "id": "QR-100216",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with suspected septic shock has cool mottled extremities, delayed capillary refill, altered mental status, and weak peripheral pulses. Which action should occur first?",
      "options": [
        "Activate emergency response and initiate rapid assessment and protocol-directed resuscitation",
        "Offer oral fluids and observe",
        "Delay intervention until hypotension develops",
        "Place the child in a warm bath"
      ],
      "answerKey": "Activate emergency response and initiate rapid assessment and protocol-directed resuscitation",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with suspected septic shock has cool mottled extremities, delayed capillary refill, altered mental status, and weak peripheral pulses. Which action should occur first?"
    },
    "rationales": {
      "overall": "Children may maintain blood pressure until late in shock. Poor perfusion and altered mental status require immediate escalation and protocol-directed resuscitation.",
      "options": {
        "Activate emergency response and initiate rapid assessment and protocol-directed resuscitation": "Children may maintain blood pressure until late in shock. Poor perfusion and altered mental status require immediate escalation and protocol-directed resuscitation.",
        "Offer oral fluids and observe": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Delay intervention until hypotension develops": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Place the child in a warm bath": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100217",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Pediatric respiratory distress and failure",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with respiratory distress becomes quiet, has minimal air movement, and is increasingly drowsy. How should the nurse interpret this change?",
    "options": [
      "Possible impending respiratory failure requiring immediate escalation",
      "Improvement because wheezing has decreased",
      "Expected fatigue that can be observed",
      "A sign that bronchodilator therapy is no longer needed"
    ],
    "correctAnswer": "Possible impending respiratory failure requiring immediate escalation",
    "rationale": "A 'silent chest,' poor air movement, and altered mental status can signal exhaustion and impending respiratory failure rather than improvement.",
    "optionRationales": {
      "Possible impending respiratory failure requiring immediate escalation": "A 'silent chest,' poor air movement, and altered mental status can signal exhaustion and impending respiratory failure rather than improvement.",
      "Improvement because wheezing has decreased": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Expected fatigue that can be observed": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "A sign that bronchodilator therapy is no longer needed": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/003075.htm",
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
      "id": "QR-100217",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with respiratory distress becomes quiet, has minimal air movement, and is increasingly drowsy. How should the nurse interpret this change?",
      "options": [
        "Possible impending respiratory failure requiring immediate escalation",
        "Improvement because wheezing has decreased",
        "Expected fatigue that can be observed",
        "A sign that bronchodilator therapy is no longer needed"
      ],
      "answerKey": "Possible impending respiratory failure requiring immediate escalation",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with respiratory distress becomes quiet, has minimal air movement, and is increasingly drowsy. How should the nurse interpret this change?"
    },
    "rationales": {
      "overall": "A 'silent chest,' poor air movement, and altered mental status can signal exhaustion and impending respiratory failure rather than improvement.",
      "options": {
        "Possible impending respiratory failure requiring immediate escalation": "A 'silent chest,' poor air movement, and altered mental status can signal exhaustion and impending respiratory failure rather than improvement.",
        "Improvement because wheezing has decreased": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Expected fatigue that can be observed": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "A sign that bronchodilator therapy is no longer needed": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100218",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Pediatric dehydration and fluid resuscitation",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Generate Solutions",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child with severe dehydration has weak pulses, prolonged capillary refill, and lethargy. Which treatment should the nurse anticipate?",
    "options": [
      "Prompt isotonic IV fluid resuscitation with frequent reassessment per pediatric protocol",
      "Large amounts of plain water by mouth only",
      "A hypotonic IV solution as the initial bolus",
      "Fluid restriction until urine output returns"
    ],
    "correctAnswer": "Prompt isotonic IV fluid resuscitation with frequent reassessment per pediatric protocol",
    "rationale": "Signs of poor perfusion indicate severe dehydration or shock. Isotonic crystalloid resuscitation and frequent reassessment are indicated; use current pediatric protocols and individualize for comorbidities.",
    "optionRationales": {
      "Prompt isotonic IV fluid resuscitation with frequent reassessment per pediatric protocol": "Signs of poor perfusion indicate severe dehydration or shock. Isotonic crystalloid resuscitation and frequent reassessment are indicated; use current pediatric protocols and individualize for comorbidities.",
      "Large amounts of plain water by mouth only": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "A hypotonic IV solution as the initial bolus": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Fluid restriction until urine output returns": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/dehydration.html",
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
      "id": "QR-100218",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Generate Solutions",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child with severe dehydration has weak pulses, prolonged capillary refill, and lethargy. Which treatment should the nurse anticipate?",
      "options": [
        "Prompt isotonic IV fluid resuscitation with frequent reassessment per pediatric protocol",
        "Large amounts of plain water by mouth only",
        "A hypotonic IV solution as the initial bolus",
        "Fluid restriction until urine output returns"
      ],
      "answerKey": "Prompt isotonic IV fluid resuscitation with frequent reassessment per pediatric protocol",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child with severe dehydration has weak pulses, prolonged capillary refill, and lethargy. Which treatment should the nurse anticipate?"
    },
    "rationales": {
      "overall": "Signs of poor perfusion indicate severe dehydration or shock. Isotonic crystalloid resuscitation and frequent reassessment are indicated; use current pediatric protocols and individualize for comorbidities.",
      "options": {
        "Prompt isotonic IV fluid resuscitation with frequent reassessment per pediatric protocol": "Signs of poor perfusion indicate severe dehydration or shock. Isotonic crystalloid resuscitation and frequent reassessment are indicated; use current pediatric protocols and individualize for comorbidities.",
        "Large amounts of plain water by mouth only": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "A hypotonic IV solution as the initial bolus": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Fluid restriction until urine output returns": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100219",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Pediatric sepsis recognition",
    "clientNeeds": "Physiological Adaptation",
    "cjmmStep": "Prioritize Hypotheses",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A febrile child has tachycardia, mottled skin, delayed capillary refill, and new confusion. Which response is most appropriate?",
    "options": [
      "Escalate immediately for suspected sepsis and initiate the pediatric sepsis pathway",
      "Wait for a positive blood culture",
      "Treat the fever only and reassess in 4 hours",
      "Assume the findings are caused by anxiety"
    ],
    "correctAnswer": "Escalate immediately for suspected sepsis and initiate the pediatric sepsis pathway",
    "rationale": "Perfusion abnormalities and altered mental status in an ill child are concerning for sepsis with organ dysfunction. Early recognition and protocol-based treatment are time-sensitive.",
    "optionRationales": {
      "Escalate immediately for suspected sepsis and initiate the pediatric sepsis pathway": "Perfusion abnormalities and altered mental status in an ill child are concerning for sepsis with organ dysfunction. Early recognition and protocol-based treatment are time-sensitive.",
      "Wait for a positive blood culture": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Treat the fever only and reassess in 4 hours": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Assume the findings are caused by anxiety": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
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
      "id": "QR-100219",
      "category": "Pediatric Nursing",
      "clientNeeds": "Physiological Adaptation",
      "cjmmStep": "Prioritize Hypotheses",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A febrile child has tachycardia, mottled skin, delayed capillary refill, and new confusion. Which response is most appropriate?",
      "options": [
        "Escalate immediately for suspected sepsis and initiate the pediatric sepsis pathway",
        "Wait for a positive blood culture",
        "Treat the fever only and reassess in 4 hours",
        "Assume the findings are caused by anxiety"
      ],
      "answerKey": "Escalate immediately for suspected sepsis and initiate the pediatric sepsis pathway",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A febrile child has tachycardia, mottled skin, delayed capillary refill, and new confusion. Which response is most appropriate?"
    },
    "rationales": {
      "overall": "Perfusion abnormalities and altered mental status in an ill child are concerning for sepsis with organ dysfunction. Early recognition and protocol-based treatment are time-sensitive.",
      "options": {
        "Escalate immediately for suspected sepsis and initiate the pediatric sepsis pathway": "Perfusion abnormalities and altered mental status in an ill child are concerning for sepsis with organ dysfunction. Early recognition and protocol-based treatment are time-sensitive.",
        "Wait for a positive blood culture": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Treat the fever only and reassess in 4 hours": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Assume the findings are caused by anxiety": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  },
  {
    "id": "QR-100220",
    "schemaVersion": 2,
    "category": "Pediatric Nursing",
    "topic": "Pediatric burns and injury prevention",
    "clientNeeds": "Safety and Infection Control",
    "cjmmStep": "Take Action",
    "difficulty": 3,
    "type": "Single Choice",
    "question": "A child sustains a fresh thermal burn to the forearm. After ensuring scene safety, which initial action is appropriate for a minor burn?",
    "options": [
      "Cool the burn with cool running water and remove constricting items not stuck to the skin",
      "Apply ice directly to the burn",
      "Apply butter or toothpaste",
      "Break intact blisters"
    ],
    "correctAnswer": "Cool the burn with cool running water and remove constricting items not stuck to the skin",
    "rationale": "Cool running water helps limit ongoing tissue injury. Avoid ice and household substances, do not break blisters, and assess burn depth, extent, and need for urgent care.",
    "optionRationales": {
      "Cool the burn with cool running water and remove constricting items not stuck to the skin": "Cool running water helps limit ongoing tissue injury. Avoid ice and household substances, do not break blisters, and assess burn depth, extent, and need for urgent care.",
      "Apply ice directly to the burn": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Apply butter or toothpaste": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
      "Break intact blisters": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
    },
    "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response.",
    "sourceReferences": [
      {
        "title": "Authoritative clinical reference for the topic",
        "publisher": "U.S. National Library of Medicine / relevant public health authority",
        "url": "https://medlineplus.gov/ency/article/000030.htm",
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
      "id": "QR-100220",
      "category": "Pediatric Nursing",
      "clientNeeds": "Safety and Infection Control",
      "cjmmStep": "Take Action",
      "difficulty": 3
    },
    "interaction": {
      "type": "Single Choice",
      "stem": "A child sustains a fresh thermal burn to the forearm. After ensuring scene safety, which initial action is appropriate for a minor burn?",
      "options": [
        "Cool the burn with cool running water and remove constricting items not stuck to the skin",
        "Apply ice directly to the burn",
        "Apply butter or toothpaste",
        "Break intact blisters"
      ],
      "answerKey": "Cool the burn with cool running water and remove constricting items not stuck to the skin",
      "scoring": {
        "method": "0/1"
      }
    },
    "stimulus": {
      "clinicalContext": "A child sustains a fresh thermal burn to the forearm. After ensuring scene safety, which initial action is appropriate for a minor burn?"
    },
    "rationales": {
      "overall": "Cool running water helps limit ongoing tissue injury. Avoid ice and household substances, do not break blisters, and assess burn depth, extent, and need for urgent care.",
      "options": {
        "Cool the burn with cool running water and remove constricting items not stuck to the skin": "Cool running water helps limit ongoing tissue injury. Avoid ice and household substances, do not break blisters, and assess burn depth, extent, and need for urgent care.",
        "Apply ice directly to the burn": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Apply butter or toothpaste": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment.",
        "Break intact blisters": "This option is not the safest response to the cues in this scenario. Reconsider the client's immediate risk and the nursing action supported by the assessment."
      },
      "clinicalJudgmentTip": "Connect the clinical cues to the immediate safety risk, follow the current patient-specific protocol, and reassess the response."
    }
  }
];for(const q of items){if(ids.has(q.id))throw new Error('Duplicate question ID '+q.id);ids.add(q.id);}bank.push(...items);root.QuickRNOrganizedTopicBatch2={count:items.length,firstId:items[0].id,lastId:items[items.length-1].id};})(typeof window!=='undefined'?window:globalThis);
