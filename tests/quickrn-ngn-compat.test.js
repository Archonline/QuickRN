#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const document = { createElement: () => ({ id: '', textContent: '' }), head: { appendChild() {} } };
const context = { console, document };
context.window = context;
vm.createContext(context);
vm.runInContext(fs.readFileSync('js/shared-exam-renderer.js', 'utf8'), context, { filename: 'shared-exam-renderer.js' });
vm.runInContext(fs.readFileSync('js/quickrn-ngn-compat.js', 'utf8'), context, { filename: 'quickrn-ngn-compat.js' });
const api = context.QuickRNSharedRenderer;

const matrix = {
  id: 'MATRIX-MULTI', type: 'matrix_multiple', prompt: 'Classify each finding.',
  columns: ['PAD', 'PVD', 'Both'],
  rows: [{ id: 'r1', text: 'Diminished pulses', correct: ['PAD'] }],
};
assert.equal(api.detect(matrix), 'Matrix Multiple');
assert.equal(api.hasAnswer(matrix, { matrix: { r1: ['PAD'] } }), true);
assert.equal(api.grade(matrix, { matrix: { r1: ['PAD'] } }), true);
assert.equal(api.grade(matrix, { matrix: { r1: ['PVD'] } }), false);
assert.match(api.renderReact(matrix, { matrix: { r1: [] } }, () => {}, false), /type="checkbox"/);

const bowtie = {
  id: 'BOWTIE', type: 'bowtie',
  bowtieConfig: {
    actionsPool: ['Action A', 'Action B', 'Action C'],
    conditionsPool: ['Condition A', 'Condition B'],
    paramsPool: ['Monitor A', 'Monitor B', 'Monitor C'],
    correct: { actions: ['Action A', 'Action B'], condition: 'Condition A', params: ['Monitor A', 'Monitor B'] },
  },
};
assert.equal(api.detect(bowtie), 'Bowtie');
assert.equal(api.hasAnswer(bowtie, { condition: 'Condition A', actions: ['Action A', 'Action B'], monitoring: ['Monitor A', 'Monitor B'] }), true);
assert.equal(api.grade(bowtie, { condition: 'Condition A', actions: ['Action A', 'Action B'], monitoring: ['Monitor A', 'Monitor B'] }), true);

const cloze = {
  id: 'CLOZE', type: 'cloze', templateText: 'The client has [drop1]. Give [drop2].',
  dropdowns: [
    { id: 'drop1', options: ['Hypocalcemia', 'Hyperkalemia'], correct: 'Hypocalcemia' },
    { id: 'drop2', options: ['Calcium gluconate', 'Insulin'], correct: 'Calcium gluconate' },
  ],
};
assert.equal(api.detect(cloze), 'Cloze (Drop-down)');
assert.equal(api.hasAnswer(cloze, { cloze: { drop1: 'Hypocalcemia' } }), true,'a partially completed cloze response can be submitted for partial credit');
assert.equal(api.hasAnswer(cloze, { cloze: { drop1: 'Hypocalcemia', drop2: 'Calcium gluconate' } }), true);
assert.equal(api.grade(cloze, { cloze: { drop1: 'Hypocalcemia', drop2: 'Calcium gluconate' } }), true);

const numeric = { id: 'NUMERIC', type: 'numeric', correctValue: 75, acceptedRange: [75, 75], unit: 'mL' };
assert.equal(api.detect(numeric), 'Numeric Entry');
assert.equal(api.hasAnswer(numeric, { numericEntry: '75' }), true);
assert.equal(api.grade(numeric, { numericEntry: '75' }), true);
assert.equal(api.grade(numeric, { numericEntry: '74' }), false);

const highlight = {
  id: 'HIGHLIGHT', type: 'highlight',
  tokens: [{ text: 'Routine finding', selectable: false }, { text: 'Fever', selectable: true, correct: true }],
};
assert.equal(api.detect(highlight), 'Highlight');
assert.equal(api.grade(highlight, { highlights: ['1'] }), true);

const ordered = {
  id: 'ORDERED', type: 'ordered',
  items: [{ text: 'First', correctOrder: 1 }, { text: 'Second', correctOrder: 2 }],
};
assert.equal(api.detect(ordered), 'Extended Drag and Drop');
assert.equal(api.grade(ordered, { order: ['First', 'Second'] }), true);

const selectN = { id: 'SELECT-N', type: 'select_n', nRequired: 2, options: ['A', 'B', 'C'], correctAnswers: ['A', 'C'] };
assert.equal(api.detect(selectN), 'Select N');
assert.equal(api.hasAnswer(selectN, { choices: ['A'] }), false);
assert.equal(api.grade(selectN, { choices: ['A', 'C'] }), true);

const sata = { id: 'SATA', type: 'sata', options: [{ id: 'A', text: 'A', correct: true }, { id: 'B', text: 'B' }, { id: 'C', text: 'C', correct: true }] };
assert.equal(api.detect(sata), 'Multiple Response');
assert.equal(api.grade(sata, { choices: ['A', 'C'] }), true);


const matrixPartial={id:'MATRIX-PARTIAL',type:'Matrix Multiple',columns:['Priority','Routine'],rows:[{id:'one',text:'Cue one',correct:['Priority']},{id:'two',text:'Cue two',correct:['Routine']}],correctAnswers:{one:['Priority'],two:['Routine']}};
assert.equal(api.hasAnswer(matrixPartial,{matrix:{one:['Priority']}}),true,'a partially answered matrix can be submitted');
const bowtiePartial={id:'BOWTIE-PARTIAL',type:'Bowtie',bowtieData:{conditions:['Sepsis'],actions:['Cultures','Antibiotics'],monitoring:['MAP','Lactate']},correctAnswers:{condition:'Sepsis',actions:['Cultures','Antibiotics'],monitoring:['MAP','Lactate']}};
assert.equal(api.hasAnswer(bowtiePartial,{condition:'Sepsis'}),true,'a partially completed bowtie can be submitted for partial credit');
const trendFixture={id:'TREND',type:'Trend',trendData:{headers:['Time','BP'],rows:[{Time:'0800',BP:'120/80'},{Time:'1000',BP:'88/54'}]},options:['Escalate','Document'],correctAnswer:'Escalate'};
assert.equal(api.detect(trendFixture),'Trend','trend format is preserved by compatibility normalization');
assert.match(api.renderReact(trendFixture,{choice:'Escalate'},()=>{},false),/qr-trend-panel/,'trend observations render in the clinical trend panel');

console.log('PASS: NGN compatibility adapter renders and grades matrix, bow tie, cloze, numeric, highlight, ordered, Select N, and SATA items.');
