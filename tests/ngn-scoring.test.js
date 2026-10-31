#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={window:{},console};vm.runInNewContext(fs.readFileSync('js/quickrn-ngn-scoring.js','utf8'),context);
const api=context.window.QuickRNNgnScoring;
const fixtures=[
 {q:{type:'Single Best Answer',options:['A','B'],correctAnswer:'A'},a:{choice:'A'},earned:1,max:1},
 {q:{type:'Multiple Response',options:['A','B','C'],correctAnswers:['A','B']},a:{choices:['A','C']},earned:0,max:2},
 {q:{type:'Matrix',rows:[{id:'r1'},{id:'r2'}],columns:['Yes','No'],correctAnswers:{r1:'Yes',r2:'No'}},a:{matrix:{r1:'Yes',r2:'Yes'}},earned:1,max:2},
 {q:{type:'Cloze',correctAnswers:{a:'X',b:'Y'}},a:{cloze:{a:'X',b:'Y'}},earned:2,max:2},
 {q:{type:'Drag and Drop',correctOrder:['A','B','C']},a:{order:['A','C','B']},earned:1,max:3},
 {q:{type:'Bowtie',correctAnswers:{condition:'C',actions:['A','B'],monitoring:['M','N']}},a:{condition:'C',actions:['A'],monitoring:['M']},earned:3,max:5},
 {q:{type:'Highlight',correctHighlights:['s1','s2']},a:{highlights:['s1','s3']},earned:0,max:2},
 {q:{type:'Trend',options:['Call provider','Document'],correctAnswer:'Call provider'},a:{choice:'Call provider'},earned:1,max:1}
];
for(const f of fixtures){const result=api.grade(f.q,f.a);assert.equal(result.earned,f.earned);assert.equal(result.max,f.max);}
const selectN=api.grade({type:'Select N',correctAnswers:['A','B'],options:['A','B','C'],selectN:2},{choices:['A','C']});
assert.equal(selectN.earned,1,'Select N uses zero/one scoring without subtracting incorrect choices');
const rationale=api.grade({type:'Cloze',correctAnswers:{cause:'C',action:'A',monitor:'M'},rationaleGroups:[{fields:['cause','action']},{fields:['monitor']}]},{cloze:{cause:'C',action:'X',monitor:'M'}});
assert.equal(rationale.earned,1,'rationale scoring awards credit only when paired fields are both correct');
const total=api.summarize(fixtures.map(f=>({q:f.q,answer:f.a})));
assert.equal(total.answered,fixtures.length);assert.equal(total.earned,9);assert.equal(total.max,18);
assert.equal(total.accuracy,38,'item accuracy counts only fully correct items');
assert.equal(total.partialCorrect,3);
assert.equal(api.grade(fixtures[0].q,{choice:'B'}).isCorrect,false);
console.log('PASS: NGN item scoring and mixed-format test summary checks.');
