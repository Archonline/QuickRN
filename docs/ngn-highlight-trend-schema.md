# NGN Highlight and Trend item schema

The shared renderer supports two additional case-study item formats.

## Highlight

Use a stable segment identifier for each selectable sentence or phrase. The answer key contains the IDs that should be highlighted.

```js
{
  id: "CASE-001-HL",
  type: "Highlight",
  title: "Identify the findings that require immediate follow-up.",
  caseGroupId: "CASE-001",
  highlightSegments: [
    { id: "s1", text: "The client reports new-onset confusion." },
    { id: "s2", text: "The client ate 75% of breakfast." },
    { id: "s3", text: "Oxygen saturation is 86% on room air." }
  ],
  correctHighlights: ["s1", "s3"],
  rationale: "New confusion and hypoxemia are clinically significant findings."
}
```

For prose-based records, `highlightText` may be supplied instead; the renderer splits it into selectable sentence segments. Prefer `highlightSegments` because IDs are stable and answer keys are unambiguous.

## Trend

Trend data is rendered as a clinical observation table. The item then asks the learner to interpret the change using one or more response options.

```js
{
  id: "CASE-001-TR",
  type: "Trend",
  title: "Which action should the nurse take based on the trend?",
  caseGroupId: "CASE-001",
  trendData: {
    title: "Vital signs over time",
    headers: ["Time", "Blood pressure", "Heart rate", "SpO2"],
    rows: [
      { Time: "0800", "Blood pressure": "122/78", "Heart rate": "88", SpO2: "97%" },
      { Time: "1000", "Blood pressure": "88/54", "Heart rate": "122", SpO2: "89%" }
    ]
  },
  options: [
    "Initiate rapid response escalation.",
    "Recheck vital signs at the next routine interval."
  ],
  correctAnswer: "Initiate rapid response escalation.",
  rationale: "The downward blood-pressure and oxygenation trends with tachycardia indicate deterioration."
}
```

Trend items may use `correctAnswers: [...]` for multi-select scoring. Keep clinical case linkage consistent with the related case records using `caseGroupId`.
