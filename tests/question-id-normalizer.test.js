#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={window:{questions:[{id:'QR-000010'},{id:'QR-000010'},{id:'QR-000012'},{id:'QB2R-0099'},{}]}};
vm.runInNewContext(fs.readFileSync('js/quickrn-question-id-normalizer.js','utf8'),context);
const bank=context.window.questions,ids=bank.map(q=>q.id);
assert.deepEqual(ids,['QR-000010','QR-000013','QR-000012','QR-000014','QR-000015']);
assert.equal(bank[1].legacyId,'QR-000010');
assert.equal(bank[1].previousQuestionId,'QR-000010');
assert.equal(bank[3].legacyId,'QB2R-0099');
assert.equal(bank[3].previousQuestionId,'QB2R-0099');
assert.equal(context.window.quickRNQuestionIdNormalization.normalized,3);
assert.equal(context.window.quickRNQuestionIdNormalization.changes.length,3);
console.log('PASS: duplicate, legacy, and missing question IDs normalize to unique canonical QR IDs.');
