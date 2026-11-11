/* OPTIONAL LEGACY TEMPLATE — not loaded by exam pages.
 * The primary workflow uses source-grounded batch JSON and
 * scripts/publish-question-batch.js. Educator approval is not required by
 * that automated path; automated validation is not clinical certification.
 */
module.exports = {
  review: { status: "optional_manual_review" },
  question: {
    id: "QR-000000",
    schemaVersion: 2,
    category: "REPLACE_WITH_CLINICAL_CATEGORY",
    topic: "REPLACE_WITH_SPECIFIC_TOPIC",
    clientNeeds: "REPLACE_WITH_NCLEX_CLIENT_NEEDS",
    cjmmStep: "Analyze Cues",
    difficulty: 3,
    type: "Single Choice",
    question: "REPLACE_WITH_ORIGINAL_STANDALONE_CLINICAL_STEM",
    options: ["A", "B", "C", "D"],
    correctAnswer: "A",
    rationale: "REPLACE_WITH_SOURCE-GROUNDED_CLINICAL_RATIONALE",
    optionRationales: { A: "Why correct", B: "Why less appropriate", C: "Why less appropriate", D: "Why less appropriate" },
    clinicalJudgmentTip: "REPLACE_WITH_ACTIONABLE_TIP",
    sourceReferences: [{ title: "Exact public source title", url: "https://...", accessedAt: "YYYY-MM-DD" }],
    evidenceLimitations: [],
    metadata: { id: "QR-000000", category: "Adult Health", clientNeeds: "Physiological Adaptation", cjmmStep: "Analyze Cues", difficulty: 3 },
    interaction: { type: "Single Choice", stem: "REPLACE_WITH_STEM", options: ["A", "B", "C", "D"], answerKey: "A", scoring: { method: "0/1" } },
    stimulus: {},
    rationales: { overall: "REPLACE_WITH_RATIONALE", options: { A: "Why correct", B: "Why less appropriate", C: "Why less appropriate", D: "Why less appropriate" }, clinicalJudgmentTip: "REPLACE_WITH_TIP" }
  }
};
