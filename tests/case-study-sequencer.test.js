#!/usr/bin/env node
const assert=require('node:assert/strict');
const sequencer=require('../js/quickrn-case-study-sequencer.js');
const make=(id,group,step)=>({id,caseGroupId:group,caseStudyContext:{id:group,stepIndex:step}});
const caseA=[make('A1','case-A',1),make('A2','case-A',2),make('A3','case-A',3)];
const caseB=[make('B1','case-B',1),make('B2','case-B',2),make('B3','case-B',3)];
const single={id:'S1'};
const bank=[caseA[0],single,caseA[2],caseB[1],caseA[1],caseB[0],caseB[2]];
const expanded=sequencer.expandRelated([caseA[2]],bank);
assert.deepEqual(expanded.map(q=>q.id),['A1','A2','A3'],'a filtered follow-up restores its full case in order');
const randomAll=sequencer.randomizeAll(bank,()=>0);
for(const group of ['case-A','case-B']){
 const ids=randomAll.filter(q=>q.caseGroupId===group).map(q=>q.id);
 assert.deepEqual(ids,group==='case-A'?['A1','A2','A3']:['B1','B2','B3'],'randomization never separates or reorders case questions');
}
const picked=sequencer.pick(bank,2,new Set(),()=>0);
assert.ok(picked.length>=2,'selection fills the requested question count');
for(const group of ['case-A','case-B']){
 const selected=picked.filter(q=>q.caseGroupId===group);
 assert.ok(selected.length===0||selected.length===3,'selection includes all linked questions or none');
}
const partialSeen=sequencer.pick(caseA,2,new Set(['A1']),()=>0);
assert.deepEqual(partialSeen,[],'a partially seen case is excluded as a whole instead of repeating its first item');
const exhausted=sequencer.pick(bank,20,new Set(bank.map(q=>q.id)),()=>0);
assert.deepEqual(exhausted,[],'an exhausted pool never falls back to previously seen questions');
const remaining=sequencer.pick(bank,20,new Set(['A1','A2','A3']),()=>0);
assert.ok(remaining.length>0,'unseen independent questions and cases remain selectable');
assert.ok(remaining.every(q=>!['A1','A2','A3'].includes(q.id)),'previously seen case questions never reappear');
console.log('PASS: case studies remain complete and Self-Study never repeats exhausted questions.');
