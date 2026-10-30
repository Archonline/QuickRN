#!/usr/bin/env node
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const context = { window: {}, console };
vm.runInNewContext(fs.readFileSync('js/quickrn-cat-engine.js','utf8'), context);
const cat = context.window.QuickRNCAT;
assert.ok(cat, 'CAT engine must be exported');
const make = (correct, count) => Array.from({length:count},(_,i)=>({q:{difficulty:0,discrimination:1},correct}));
assert.equal(cat.evaluate(make(true,84)).status,'CONTINUE','must not stop before 85 items');
assert.equal(cat.evaluate(make(true,85)).status,'PASS','strong performance should pass at checkpoint');
assert.equal(cat.evaluate(make(false,85)).status,'FAIL','poor performance should fail at checkpoint');
assert.equal(cat.evaluate(make(false,84)).status,'CONTINUE','must not fail before checkpoint');
assert.notEqual(cat.evaluate(make(true,150),true).status,'CONTINUE','final decision should be returned at maximum length');
assert.equal(cat.MAX_ITEMS,150);
assert.equal(cat.MIN_ITEMS,85);
console.log('PASS: CAT 85-item minimum, confidence checkpoint, and 150-item finalization.');
