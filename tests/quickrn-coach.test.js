const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const store = new Map();
const window = {
  localStorage: {
    getItem: key => store.has(key) ? store.get(key) : null,
    setItem: (key, value) => store.set(key, String(value))
  },
  console
};
vm.runInNewContext(fs.readFileSync('js/quickrn-coach.js', 'utf8'), {
  window,
  console,
  globalThis: window
});

const coach = window.QuickRNCoach;

// Safe calculator parser.
assert.equal(coach.safeCalculate('2+3*4'), '14');
assert.equal(coach.safeCalculate('(2+3)*4'), '20');
assert.equal(coach.safeCalculate('-2+5'), '3');
assert.throws(() => coach.safeCalculate('1/0'), /divide by zero/i);
assert.throws(() => coach.safeCalculate('alert(1)'), /Invalid expression/i);

// Classification for each NCLEX Client Needs domain.
const domainLabels = [
  ['Management of Care', 'management'],
  ['Safety and Infection Control', 'safety'],
  ['Health Promotion and Maintenance', 'health'],
  ['Psychosocial Integrity', 'psychosocial'],
  ['Basic Care and Comfort', 'basic'],
  ['Pharmacological and Parenteral Therapies', 'pharm'],
  ['Reduction of Risk Potential', 'risk'],
  ['Physiological Adaptation', 'physio']
];
for (const [category, expected] of domainLabels) {
  assert.equal(
    coach.classifyClientNeed({ category }).id,
    expected,
    category + ' should map to its Client Needs domain'
  );
}
assert.equal(coach.classifyClientNeed({
  category: 'Pharmacology',
  topic: 'Insulin administration'
}).id, 'pharm');
assert.equal(coach.classifyClientNeed({
  category: 'Infection Control',
  topic: 'PPE'
}).id, 'safety');

// Domain counters and topic-specific clinical guidance.
assert.equal(coach.recordClientNeedAttempt({
  category: 'Pharmacology',
  topic: 'Insulin'
}, false), true);
assert.equal(coach.recordClientNeedAttempt({
  category: 'Pharmacology',
  topic: 'Insulin'
}, true), true);
const saved = JSON.parse(store.get('quickrn_student_state'));
assert.deepEqual(saved.studentStats.clientNeeds.pharm, {
  attempted: 2,
  correct: 1
});
const insight = coach.buildTutorInsight({
  topic: 'Insulin dosing',
  category: 'Pharmacology'
}, false);
assert.equal(
  insight.domain,
  'Pharmacological and Parenteral Therapies (12-18%)'
);
assert.match(insight.guidance, /medication/i);

// Static integration checks for dashboard, calendar, and all exam modes.
const dashboard = fs.readFileSync('dashboard.html', 'utf8');
const calendar = fs.readFileSync('calendar.html', 'utf8');
assert.match(dashboard, /href="calendar.html"/);
assert.doesNotMatch(dashboard, /id="tab-content-calendar"/);
assert.match(dashboard, /function generateStudyRoadmap/);
assert.match(calendar, /quickrn_calendar_events/);
assert.match(calendar, /quickrn_ai_study_roadmap/);
for (const page of ['cat.html', 'timed.html', 'predictor.html', 'selfstudy.html']) {
  const source = fs.readFileSync(page, 'utf8');
  assert.match(source, /js\/quickrn-coach\.js/);
  assert.match(source, /QuickRNCoach\.recordClientNeedAttempt/);
  assert.doesNotMatch(source, /\beval\s*\(/);
}

process.stdout.write('QuickRN coach, calendar, and Client Needs tests passed.\n');
