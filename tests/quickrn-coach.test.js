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
vm.runInNewContext(fs.readFileSync('js/quickrn-coach.js', 'utf8'), { window, console, globalThis: window });

const coach = window.QuickRNCoach;
assert.equal(coach.safeCalculate('2+3*4'), '14');
assert.equal(coach.safeCalculate('(2+3)*4'), '20');
assert.equal(coach.safeCalculate('-2+5'), '3');
assert.equal(coach.classifyClientNeed({ category: 'Pharmacology', topic: 'Insulin administration' }).id, 'pharm');
assert.equal(coach.classifyClientNeed({ category: 'Infection Control', topic: 'PPE' }).id, 'safety');
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
  assert.equal(coach.classifyClientNeed({ category }).id, expected, category + ' should map to its Client Needs domain');
}
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
  assert.equal(coach.classifyClientNeed({ category }).id, expected, category + ' should map to its Client Needs domain');
}

assert.equal(coach.recordClientNeedAttempt({ category: 'Pharmacology', topic: 'Insulin' }, false), true);
assert.equal(coach.recordClientNeedAttempt({ category: 'Pharmacology', topic: 'Insulin' }, true), true);
const saved = JSON.parse(store.get('quickrn_student_state'));
assert.deepEqual(saved.studentStats.clientNeeds.pharm, { attempted: 2, correct: 1 });

const insight = coach.buildTutorInsight({ topic: 'Insulin dosing', category: 'Pharmacology' }, false);
assert.equal(insight.domain, 'Pharmacological and Parenteral Therapies (12-18%)');
assert.match(insight.guidance, /medication/i);

assert.throws(() => coach.safeCalculate('1/0'), /divide by zero/i);
assert.throws(() => coach.safeCalculate('alert(1)'), /Invalid expression/i);
process.stdout.write('QuickRN coach tests passed.\n');
