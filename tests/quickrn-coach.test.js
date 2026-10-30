const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const pages = ['dashboard.html', 'calendar.html', 'cat.html', 'timed.html', 'predictor.html', 'selfstudy.html'];

const store = new Map();
const window = {
  localStorage: {
    getItem: key => store.has(key) ? store.get(key) : null,
    setItem: (key, value) => store.set(key, String(value))
  },
  console
};
vm.runInNewContext(fs.readFileSync('js/quickrn-coach.js', 'utf8'), {
  window, console, globalThis: window
});
const coach = window.QuickRNCoach;

// Calculator parser rejects executable input and supports ordinary arithmetic.
assert.equal(coach.safeCalculate('2+3*4'), '14');
assert.equal(coach.safeCalculate('(2+3)*4'), '20');
assert.equal(coach.safeCalculate('-2+5'), '3');
assert.throws(() => coach.safeCalculate('1/0'), /divide by zero/i);
assert.throws(() => coach.safeCalculate('alert(1)'), /Invalid expression/i);

// Classification covers all eight official Client Needs domain labels.
const domains = [
  ['Management of Care', 'management'],
  ['Safety and Infection Control', 'safety'],
  ['Health Promotion and Maintenance', 'health'],
  ['Psychosocial Integrity', 'psychosocial'],
  ['Basic Care and Comfort', 'basic'],
  ['Pharmacological and Parenteral Therapies', 'pharm'],
  ['Reduction of Risk Potential', 'risk'],
  ['Physiological Adaptation', 'physio']
];
for (const [category, expected] of domains) {
  assert.equal(coach.classifyClientNeed({ category }).id, expected, category);
}
assert.equal(coach.classifyClientNeed({
  category: 'Pharmacology', topic: 'Insulin administration'
}).id, 'pharm');
assert.equal(coach.classifyClientNeed({
  category: 'Infection Control', topic: 'PPE'
}).id, 'safety');

// Correct/incorrect responses update per-domain counters.
assert.equal(coach.recordClientNeedAttempt({
  category: 'Pharmacology', topic: 'Insulin'
}, false), true);
assert.equal(coach.recordClientNeedAttempt({
  category: 'Pharmacology', topic: 'Insulin'
}, true), true);
const saved = JSON.parse(store.get('quickrn_student_state'));
assert.deepEqual(saved.studentStats.clientNeeds.pharm, { attempted: 2, correct: 1 });
const insight = coach.buildTutorInsight({
  topic: 'Insulin dosing', category: 'Pharmacology'
}, false);
assert.equal(insight.domain, 'Pharmacological and Parenteral Therapies (12-18%)');
assert.match(insight.guidance, /medication/i);

// Dashboard -> dedicated calendar flow and roadmap persistence hooks.
const dashboard = fs.readFileSync('dashboard.html', 'utf8');
const calendar = fs.readFileSync('calendar.html', 'utf8');
assert.match(dashboard, /href="calendar\.html"/);
assert.doesNotMatch(dashboard, /id="tab-content-calendar"/);
assert.match(dashboard, /function generateStudyRoadmap/);
assert.match(dashboard, /quickrn_calendar_events/);
assert.match(calendar, /quickrn_calendar_events/);
assert.match(calendar, /quickrn_ai_study_roadmap/);
assert.match(calendar, /data-action="edit"/);

// Every exam mode uses the shared tracker and the safe calculator.
for (const page of ['cat.html', 'timed.html', 'predictor.html', 'selfstudy.html']) {
  const source = fs.readFileSync(page, 'utf8');
  assert.match(source, /js\/quickrn-coach\.js/, page + ' coach import');
  assert.match(source, /QuickRNCoach\.recordClientNeedAttempt/, page + ' Client Needs tracker');
  assert.doesNotMatch(source, /\beval\s*\(/, page + ' must not call eval');
  assert.match(source, /Clinical Study Coach/, page + ' study coach UI');
}

// Check classic inline scripts for syntax errors; skip JSX and ES modules.
for (const page of pages) {
  const source = fs.readFileSync(page, 'utf8');
  const scriptTags = /<script\b([^>]*)>([\s\S]*?)<\/script\s*>/gi;
  let match, index = 0;
  while ((match = scriptTags.exec(source))) {
    const attributes = match[1];
    const code = match[2].trim();
    if (!code || /\bsrc\s*=/.test(attributes) || /type\s*=\s*["'](?:text\/babel|module)/i.test(attributes)) continue;
    new vm.Script(code, { filename: page + ':inline-script-' + (++index) });
  }
}

process.stdout.write('QuickRN coach, calendar, Client Needs, calculator, and inline syntax checks passed.\\n');
