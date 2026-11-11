/* TEMPLATE ONLY — do not place this file in pending/ or load it in exam pages.
 * Copy this file to pending/<unique-candidate-file>.js, complete every field,
 * and replace all placeholders. Nurse-educator approval is still mandatory.
 */
module.exports = {
  review: {
    status: "pending_review",
    submittedAt: null,
    submittedBy: "ai-generator-or-author",
    reviewer: null,
    reviewedAt: null,
    decisionNote: ""
  },
  question: {
    id: "QR-000000", // Assign a unique canonical ID before validation.
    schemaVersion: 2,
    category: "REPLACE_WITH_CLINICAL_CATEGORY",
    topic: "REPLACE_WITH_SPECIFIC_TOPIC",
    clientNeeds: "REPLACE_WITH_NCLEX_CLIENT_NEEDS",
    cjmmStep: "REPLACE_WITH_ONE_OF_THE_SIX_CJMM_STAGES",
    difficulty: 3,
    type: "Single Choice", // Must exactly match one of the 13 schema-v2 formats.
    question: "REPLACE_WITH_COMPLETE_STANDALONE_CLINICAL_STEM",
    options: [
      "REPLACE_WITH_OPTION_A",
      "REPLACE_WITH_OPTION_B",
      "REPLACE_WITH_OPTION_C",
      "REPLACE_WITH_OPTION_D"
    ],
    correctAnswer: "REPLACE_WITH_ONE_KEYED_OPTION",
    rationale: "REPLACE_WITH_EVIDENCE-BASED_CLINICAL_RATIONALE",
    optionRationales: {
      "REPLACE_WITH_OPTION_A": "Explain why this option is appropriate or not.",
      "REPLACE_WITH_OPTION_B": "Explain why this option is appropriate or not.",
      "REPLACE_WITH_OPTION_C": "Explain why this option is appropriate or not.",
      "REPLACE_WITH_OPTION_D": "Explain why this option is appropriate or not."
    },
    clinicalJudgmentTip: "REPLACE_WITH_A_CONCISE_CJMM_TIP",
    scoringMethod: "0/1",
    sourceReferences: [
      {
        title: "REPLACE_WITH_AUTHORITATIVE_SOURCE",
        url: "https://example.org/replace-this",
        accessedAt: "YYYY-MM-DD"
      }
    ],
    metadata: {
      id: "QR-000000",
      category: "REPLACE_WITH_CLINICAL_CATEGORY",
      clientNeeds: "REPLACE_WITH_NCLEX_CLIENT_NEEDS",
      cjmmStep: "REPLACE_WITH_ONE_OF_THE_SIX_CJMM_STAGES",
      difficulty: 3
    },
    interaction: {
      type: "Single Choice",
      stem: "REPLACE_WITH_COMPLETE_STANDALONE_CLINICAL_STEM",
      options: [
        "REPLACE_WITH_OPTION_A",
        "REPLACE_WITH_OPTION_B",
        "REPLACE_WITH_OPTION_C",
        "REPLACE_WITH_OPTION_D"
      ],
      answerKey: "REPLACE_WITH_ONE_KEYED_OPTION",
      scoring: { method: "0/1" }
    },
    stimulus: {},
    rationales: {
      overall: "REPLACE_WITH_EVIDENCE-BASED_CLINICAL_RATIONALE",
      options: {
        "REPLACE_WITH_OPTION_A": "Explain why this option is appropriate or not.",
        "REPLACE_WITH_OPTION_B": "Explain why this option is appropriate or not.",
        "REPLACE_WITH_OPTION_C": "Explain why this option is appropriate or not.",
        "REPLACE_WITH_OPTION_D": "Explain why this option is appropriate or not."
      },
      clinicalJudgmentTip: "REPLACE_WITH_A_CONCISE_CJMM_TIP"
    }
  }
};
