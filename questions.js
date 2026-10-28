// Official NCLEX Client Needs Categories & Question Pool
const CLIENT_NEEDS_CATEGORIES = [
    { id: 'management', name: 'Management of Care', weight: 20 },
    { id: 'safety', name: 'Safety and Infection Control', weight: 15 },
    { id: 'pharmacological', name: 'Pharmacological and Parenteral Therapies', weight: 15 },
    { id: 'physiological', name: 'Reduction of Risk Potential', weight: 12 },
    { id: 'physiological_adap', name: 'Physiological Adaptation', weight: 14 },
    { id: 'psychosocial', name: 'Psychosocial Integrity', weight: 10 },
    { id: 'health_promo', name: 'Health Promotion and Maintenance', weight: 9 },
    { id: 'basic_care', name: 'Basic Care and Comfort', weight: 5 }
];

// Default Roadmap Study Plan Schedule (14-Day Structured Sprint)
const DEFAULT_ROADMAP_PLAN = [
    { day: 1, title: 'Foundations & Delegation', topic: 'Management of Care: Prioritization & Scope of Practice', type: 'study', completed: false },
    { day: 2, title: 'Infection Control & Precautions', topic: 'Airborne, Droplet, Contact Precautions, & PPE', type: 'study', completed: false },
    { day: 3, title: 'FIRST CAT SIMULATION EXAM', topic: 'Initial Adaptive Baseline Diagnostic Exam (85 items)', type: 'cat', completed: false },
    { day: 4, title: 'Pharmacology - Cardiac & BP Meds', topic: 'Beta Blockers, ACE Inhibitors, Digoxin, & Diuretics', type: 'study', completed: false },
    { day: 5, title: 'Endocrine Pharmacology', topic: 'Insulins, Oral Hypoglycemics, Thyroid & Steroids', type: 'study', completed: false },
    { day: 6, title: 'Maternity & Newborn Care', topic: 'Fetal Heart Rate Decelerations, Labor Stages, & Postpartum', type: 'study', completed: false },
    { day: 7, title: 'MID-TERM READINESS PREDICTOR', topic: 'Official Readiness Predictor Exam & Score Evaluation', type: 'predictor', completed: false },
    { day: 8, title: 'Pediatric Growth & Milestones', topic: 'Immunization Schedules, Congenital Defects, & Vitals', type: 'study', completed: false },
    { day: 9, title: 'Mental Health & Psychosocial', topic: 'Therapeutic Communication, Personality Disorders, & Crisis', type: 'study', completed: false },
    { day: 10, title: 'Critical Care & Hemodynamics', topic: 'Ventilator Alarms, ABG Analysis, & Shock Management', type: 'study', completed: false },
    { day: 11, title: 'Pharmacology - Psych & Med-Surg', topic: 'SSRIs, MAOIs, Lithium, Anticoagulants, & Antidotes', type: 'study', completed: false },
    { day: 12, title: 'Advanced NGN Case Studies', topic: 'Clinical Judgment Measurement Model (CJMM) Drills', type: 'study', completed: false },
    { day: 13, title: 'FINAL CAT DRESS REHEARSAL', topic: 'Full-Length Timed CAT Simulation', type: 'cat', completed: false },
    { day: 14, title: 'FINAL READINESS PREDICTOR', topic: 'Final Board Exam Simulation & Confidence Review', type: 'predictor', completed: false }
];

const QUESTION_BANK = [
    {
        id: 1,
        category: 'management',
        categoryName: 'Management of Care',
        stem: 'A nurse manager is reviewing client assignments for the medical-surgical unit. Which client assignment is appropriate to delegate to an experienced Licensed Practical Nurse (LPN)?',
        options: [
            'A newly admitted client with diabetic ketoacidosis requiring IV regular insulin titration.',
            'A client with chronic obstructive pulmonary disease (COPD) requiring discharge teaching on inhaler usage.',
            'A stable client with a stage 3 pressure injury requiring sterile dressing changes.',
            'A client reporting sudden chest pain and shortness of breath 2 hours post-bronchoscopy.'
        ],
        correctIndex: 2,
        rationale: 'An LPN can perform sterile dressing changes for stable clients. Initial client admissions, unstable clients, complex IV titrations, and discharge education require the advanced clinical judgment and scope of a Registered Nurse (RN).',
        keywords: ['Delegation', 'LPN Scope of Practice', 'Nursing Leadership'],
        references: [
            { source: 'NIH / StatPearls', title: 'Nursing Delegation and Practice Guidelines', url: 'https://www.ncbi.nlm.nih.gov/books/NBK519519/' },
            { source: 'Open-Access PDF', title: 'NCSBN National Nursing Guidelines for Delegation', url: 'https://www.ncsbn.org/public-files/NGN_Spring2023.pdf' }
        ]
    },
    {
        id: 2,
        category: 'pharmacological',
        categoryName: 'Pharmacological and Parenteral Therapies',
        stem: 'An adult client with type 1 diabetes mellitus is prescribed regular insulin 10 units subcutaneously. At what time frame should the nurse expect the peak hypoglycemic effect of regular insulin?',
        options: [
            '15 to 30 minutes',
            '2 to 4 hours',
            '6 to 10 hours',
            '12 to 24 hours'
        ],
        correctIndex: 1,
        rationale: 'Regular insulin is a short-acting insulin with an onset of 30-60 minutes, a peak effect between 2 to 4 hours, and a duration of 5 to 8 hours. Monitoring for hypoglycemia during the peak window is critical.',
        keywords: ['Regular Insulin', 'Hypoglycemia', 'Pharmacology Peak Times'],
        references: [
            { source: 'NIH / StatPearls', title: 'Insulin Physiology and Pharmacology', url: 'https://www.ncbi.nlm.nih.gov/books/NBK553094/' },
            { source: 'CDC Guidelines', title: 'CDC Diabetes Care & Hypoglycemia Management', url: 'https://www.cdc.gov/diabetes/basics/index.html' }
        ]
    },
    {
        id: 3,
        category: 'safety',
        categoryName: 'Safety and Infection Control',
        stem: 'A client is admitted to the medical unit with active pulmonary tuberculosis (TB). Which infection control precautions must the nurse immediately implement?',
        options: [
            'Standard precautions only with a private room.',
            'Contact precautions including gloves and disposable gown.',
            'Airborne precautions with negative pressure room and N95 respirator.',
            'Droplet precautions with surgical mask within 3 feet of the client.'
        ],
        correctIndex: 2,
        rationale: 'Active pulmonary TB is transmitted via droplet nuclei requiring Airborne Precautions. This requires placement in an airborne infection isolation room (AIIR) with negative pressure and staff wearing fitted N95 respirators.',
        keywords: ['Tuberculosis', 'Airborne Precautions', 'Infection Control'],
        references: [
            { source: 'CDC Guidelines', title: 'CDC Guidelines for Preventing Transmission of Mycobacterium tuberculosis', url: 'https://www.cdc.gov/tb/topic/basics/default.htm' },
            { source: 'NIH / StatPearls', title: 'Tuberculosis Infection Prevention in Healthcare Settings', url: 'https://www.ncbi.nlm.nih.gov/books/NBK441916/' }
        ]
    },
    {
        id: 4,
        category: 'physiological_adap',
        categoryName: 'Physiological Adaptation',
        stem: 'A client with acute heart failure presents with severe dyspnea, pink-tinged frothy sputum, and bilateral crackles. Which action should the nurse prioritize first?',
        options: [
            'Administer prescribed furosemide IV push.',
            'Position the client in high-Fowler position with legs dangling.',
            'Obtain a stat 12-lead electrocardiogram (ECG).',
            'Draw blood for arterial blood gas (ABG) analysis.'
        ],
        correctIndex: 1,
        rationale: 'In acute decompensated heart failure with pulmonary edema, immediate positioning in high-Fowler with legs dependent reduces venous return (preload) to the heart. Following positioning, oxygen and IV diuretics are administered.',
        keywords: ['Acute Heart Failure', 'Pulmonary Edema', 'High-Fowler Positioning'],
        references: [
            { source: 'NIH / StatPearls', title: 'Acute Decompensated Heart Failure Management', url: 'https://www.ncbi.nlm.nih.gov/books/NBK470251/' },
            { source: 'Open-Access Nursing Reference', title: 'AHA Guidelines for Heart Failure Nursing Interventions', url: 'https://www.heart.org/en/health-topics/heart-failure' }
        ]
    }
];