const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');

function loadBank(relativePath) {
  const sandbox = { console, window: { questions: [] } };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', relativePath), 'utf8'), sandbox, {
    filename: relativePath,
    timeout: 30000
  });
  return sandbox.window;
}

{
  const root = loadBank('questions-bank-expansion-2026-11-04-batch-003.js');
  const bank = root.questions;
  assert.equal(bank.length, 50, 'batch 003 keeps one item per distinct clinical task');
  assert.equal(new Set(bank.map(q => q.id)).size, 50, 'batch 003 IDs are unique');
  assert.equal(new Set(bank.map(q => q.topic)).size, 50, 'batch 003 topics are not repeated clones');
  assert.equal(bank[0].id, 'QR-001420');
  assert.equal(bank.at(-1).id, 'QR-001469');
}

{
  const root = loadBank('questions-bank-ngn-expansion-2026-11-04-batch-004.js');
  const bank = root.questions;
  assert.equal(bank.length, 500, 'batch 004 retains all ten distinct NGN format tasks for each scenario');
  assert.ok(bank.every(q => !q.caseGroupId), 'parallel format variants are not mislabeled as sequential case-study questions');
  const bowties = bank.filter(q => q.type === 'Bowtie');
  assert.equal(bowties.length, 50);
  for (const q of bowties) {
    assert.ok(q.correctAnswers.actions.every(x => q.bowtieData.actions.includes(x)), q.id + ' bowtie action keys map to action choices');
    assert.ok(q.correctAnswers.monitoring.every(x => q.bowtieData.monitoring.includes(x)), q.id + ' bowtie monitoring keys map to monitoring choices');
  }
}

{
  const root = loadBank('questions-bank-ngn-case-studies-2026-11-04-batch-005.js');
  const bank = root.questions;
  assert.equal(bank.length, 250, 'batch 005 keeps 50 five-question case groups');
  assert.equal(new Set(bank.map(q => q.id)).size, 250, 'batch 005 IDs are unique');
  const groups = new Map();
  for (const q of bank) {
    if (!groups.has(q.caseGroupId)) groups.set(q.caseGroupId, []);
    groups.get(q.caseGroupId).push(q.caseQuestionNumber);
  }
  assert.equal(groups.size, 50, 'batch 005 has 50 distinct case groups');
  for (const sequence of groups.values()) {
    assert.deepEqual(Array.from(sequence).sort((a, b) => a - b), [1, 2, 3, 4, 5], 'each retained case has five sequential items');
  }
}

{
  const root = loadBank('questions-bank-ngn-priority-2026-11-04-batch-007.js');
  const bank = root.questions;
  const counts = root.quickRNPriorityBatch007Counts;
  assert.equal(bank.length, 246, 'priority batch retains 30 numeric, 16 matrix, and 200 case-study records');
  assert.deepEqual({ numeric: counts.numeric, matrix: counts.matrix, caseStudy: counts.caseStudy },
    { numeric: 30, matrix: 56, caseStudy: 160 });
  assert.equal(new Set(bank.map(q => q.id)).size, 246, 'priority batch IDs are unique');
  assert.equal(bank.filter(q => q.type === 'Numeric Entry').length, 30);
  assert.equal(bank.filter(q => q.type === 'Matrix / Grid').length, 56);
  assert.equal(bank.filter(q => q.caseGroupId).length, 200);
  assert.equal(new Set(bank.filter(q => q.type === 'Numeric Entry').map(q => q.topic)).size, 30);
  assert.equal(new Set(bank.filter(q => q.type === 'Matrix / Grid').map(q => q.topic)).size, 56);
}



{
  const root = loadBank('questions-bank-ngn-supplement-2026-11-04-batch-006.js');
  const bank = root.questions;
  const matrices = bank.filter(q => q.type === 'Matrix Multiple');
  const ordered = bank.filter(q => q.type === 'Extended Drag and Drop');
  assert.equal(bank.length, 500);
  assert.equal(matrices.length, 50);
  assert.ok(matrices.every(q => q.rows.every(row => Array.isArray(q.correctAnswers[row.id]) && q.correctAnswers[row.id].length > 0)));
  assert.equal(ordered.length, 50);
  assert.ok(ordered.every(q => q.availableItems.length === q.correctOrder.length && q.correctOrder.every(x => q.availableItems.includes(x))));
}

{
  const root = loadBank('questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js');
  const bank = root.questions;
  assert.equal(bank.length, 200);
  assert.equal(new Set(bank.map(q => q.caseGroupId)).size, 40);
  assert.ok(bank.every(q => Number.isInteger(q.caseQuestionNumber) && q.caseQuestionNumber >= 1 && q.caseQuestionNumber <= 5));
}

{
  const sandbox = { console, window: { questions: [{ id: 'QR-002150', caseGroupId: 'legacy-group' }] } };
  vm.runInNewContext(fs.readFileSync(path.join(__dirname, '..', 'js/quickrn-question-bank-case-fixes.js'), 'utf8'), sandbox);
  const q = sandbox.window.questions[0];
  assert.equal(q.caseGroupId, undefined);
  assert.ok(q.caseStudy.scenario.includes('18 hours after the last alcohol intake'));
  assert.ok(q.ehr.nursesNotes);
}

{
  for (const page of ['selfstudy.html', 'timed.html', 'cat.html', 'predictor.html']) {
    const html = fs.readFileSync(path.join(__dirname, '..', page), 'utf8');
    assert.ok(!html.includes('questions-bank-matrix-grid-2026-11-04-batch-008.js'), page + ' no longer loads retired invalid Matrix/Grid batch');
    assert.ok(html.includes('js/quickrn-question-bank-case-fixes.js'), page + ' applies the standalone case fix');
  }
}

console.log('PASS: duplicate-template cleanup counts, retained IDs, unique tasks, and sequential NGN case groups.');
