#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={window:{questions:[{id:'TRAD-0001'},{id:'TRAD-0001'},{id:'TRAD-0001-DUP2'},{id:'TRAD-0001'}]}};
vm.runInNewContext(fs.readFileSync('js/quickrn-question-id-normalizer.js','utf8'),context);
const ids=context.window.questions.map(q=>q.id);
assert.deepEqual(ids,['TRAD-0001','TRAD-0001-DUP3','TRAD-0001-DUP2','TRAD-0001-DUP4']);
assert.deepEqual({...context.window.quickRNQuestionIdNormalization},{total:4,normalized:2});
console.log('PASS: duplicate question IDs are normalized deterministically without collisions.');
