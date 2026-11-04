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
    { numeric: 30, matrix: 16, caseStudy: 200 });
  assert.equal(new Set(bank.map(q => q.id)).size, 246, 'priority batch IDs are unique');
  assert.equal(bank.filter(q => q.type === 'Numeric Entry').length, 30);
  assert.equal(bank.filter(q => q.type === 'Matrix / Grid').length, 16);
  assert.equal(bank.filter(q => q.caseGroupId).length, 200);
  assert.equal(new Set(bank.filter(q => q.type === 'Numeric Entry').map(q => q.topic)).size, 30);
  assert.equal(new Set(bank.filter(q => q.type === 'Matrix / Grid').map(q => q.topic)).size, 16);
}

{
  const root = loadBank('questions-bank-matrix-grid-2026-11-04-batch-008.js');
  const bank = root.questions;
  const signatures = new Set(bank.map(q => {
    const item = { ...q };
    delete item.id;
    return JSON.stringify(item);
  }));
  assert.equal(bank.length, 40, 'matrix batch 008 retains 40 records');
  assert.equal(signatures.size, 40, 'matrix batch 008 has no exact full-structure duplicates');
  assert.equal(new Set(bank.map(q => q.id)).size, 40);
}

console.log('PASS: duplicate-template cleanup counts, retained IDs, unique tasks, and sequential NGN case groups.');
