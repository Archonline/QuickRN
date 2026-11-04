#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={window:{questions:[{id:'QR-000010'},{id:'QR-000010'},{id:'QR-000012'},{}]}};
vm.runInNewContext(fs.readFileSync('js/quickrn-question-id-normalizer.js','utf8'),context);
const ids=context.window.questions.map(q=>q.id);
assert.deepEqual(ids,['QR-000010','QR-000013','QR-000012','QR-000014']);
assert.equal(context.window.questions[1].legacyId,'QR-000010');
assert.equal(context.window.questions[1].previousQuestionId,'QR-000010');
assert.equal(context.window.quickRNQuestionIdNormalization.normalized,2);
assert.deepEqual({...context.window.quickRNQuestionIdNormalization.changes[0]},{index:1,previousId:'QR-000010',id:'QR-000013'});
console.log('PASS: duplicate and missing question IDs are normalized to unique canonical QR IDs.');
