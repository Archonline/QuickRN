'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const context = { console };
context.window = context;
context.globalThis = context;
const rendererSource = fs.readFileSync(path.join(__dirname, '../js/shared-exam-renderer.js'), 'utf8');
vm.runInNewContext(rendererSource, context, { filename: 'shared-exam-renderer.js' });
const api = context.QuickRNSharedRenderer;

assert.equal(typeof api.cleanClinicalText, 'function');
assert.equal(typeof api.splitPrompt, 'function');

const hellp = 'Patient Information\nCase 090 — HELLP syndrome. A client receiving treatment reports a new symptom to the bedside nurse. The client has a history of the condition but no written action plan is available. Current findings: pain has increased from 3/10 to 8/10 with a new abnormal assessment. The nurse reviews the history, current assessment, and response to care before deciding the next step.\nHELLP syndrome — clinical case 090 · Item 2 of 5';
assert.equal(
  api.cleanClinicalText(hellp, { topic: 'HELLP syndrome' }),
  'A client receiving treatment reports a new symptom to the bedside nurse. The client has a history of the condition but no written action plan is available. Current findings: pain has increased from 3/10 to 8/10 with a new abnormal assessment. The nurse reviews the history, current assessment, and response to care before deciding the next step.'
);

const inlineFooter = api.cleanClinicalText(
  'A client is admitted with symptoms. HELLP syndrome — clinical case 090 · Item 2 of 5',
  { topic: 'HELLP syndrome' }
);
assert.equal(inlineFooter, 'A client is admitted with symptoms.');

const ngn = api.splitPrompt({
  type: 'Cloze (Drop-down)',
  topic: 'Ethics informed consent',
  question: 'NGN Cloze (Drop-down) 0526 — Ethics informed consent: A client is being reassessed after an intervention and the nurse must determine the next step. The client is being evaluated before transfer to another unit. Review the clinical cues and complete the item as directed.'
});
assert.equal(
  ngn.scenario,
  'A client is being reassessed after an intervention and the nurse must determine the next step. The client is being evaluated before transfer to another unit.'
);
assert.equal(ngn.question, 'Review the clinical cues and complete the item as directed.');

const topicPrefixed = api.splitPrompt({
  topic: 'Benzodiazepines/alcohol withdrawal',
  question: 'Benzodiazepines/alcohol withdrawal: A client develops symptoms shortly after a procedure or treatment. The client has limited mobility and needs assistance with basic care. Review the cues and complete the clinical judgment item.'
});
assert.equal(
  topicPrefixed.scenario,
  'A client develops symptoms shortly after a procedure or treatment. The client has limited mobility and needs assistance with basic care.'
);
assert.equal(topicPrefixed.question, 'Review the cues and complete the clinical judgment item.');

const firstTraditionalItem = api.splitPrompt({
  id: 'TRAD-0001',
  topic: 'Acute myocardial infarction',
  question: 'A client reports new crushing chest pressure with diaphoresis and nausea; acute coronary syndrome is suspected. Which nursing action should the nurse take first?',
  stem: 'A client reports new crushing chest pressure with diaphoresis and nausea; acute coronary syndrome is suspected. Which nursing action should the nurse take first?',
  instruction: 'Select the single best answer.'
});
assert.equal(
  firstTraditionalItem.scenario,
  'A client reports new crushing chest pressure with diaphoresis and nausea; acute coronary syndrome is suspected.'
);
assert.equal(firstTraditionalItem.question, 'Which nursing action should the nurse take first?');

const whitespaceOverride = api.splitPrompt({
  questionOnly: '   ',
  actualQuestion: '',
  question: 'Which assessment finding should the nurse report immediately?'
});
assert.equal(whitespaceOverride.question, 'Which assessment finding should the nurse report immediately?');

const inferredTopic = api.splitPrompt({
  question: 'Stroke assessment: A client reports sudden unilateral weakness. The nurse reviews the history and current assessment. Which action should the nurse take first?'
});
assert.equal(inferredTopic.scenario, 'A client reports sudden unilateral weakness. The nurse reviews the history and current assessment.');
assert.equal(inferredTopic.question, 'Which action should the nurse take first?');

const followUp = api.splitPrompt({
  question: 'Follow-up 2: Which clinical concern should the nurse prioritize?'
});
assert.equal(followUp.scenario, '');
assert.equal(followUp.question, 'Which clinical concern should the nurse prioritize?');

const developmental = api.splitPrompt({
  question: 'Developmental milestones: A client receiving treatment reports a new symptom to the bedside nurse. The client has a chronic condition that increases complication risk. Review the clinical cues and complete the clinical judgment item.'
});
assert.equal(
  developmental.question,
  'A client receiving treatment reports a new symptom to the bedside nurse. The client has a chronic condition that increases complication risk.'
);

const otherCaseFields = api.splitPrompt({
  topic: 'Acute asthma',
  patientInformation: 'Patient Information\nCase 014 — Acute asthma. A child arrives with wheezing and increased work of breathing.',
  question: 'Acute asthma: A child arrives with wheezing and increased work of breathing. Review the patient record and determine the priority intervention.'
});
assert.equal(otherCaseFields.scenario, 'A child arrives with wheezing and increased work of breathing.');
assert.equal(otherCaseFields.question, 'Review the patient record and determine the priority intervention.');

console.log('Clinical prompt normalization regression tests passed.');
