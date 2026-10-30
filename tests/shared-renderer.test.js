#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
const context={window:{},console};vm.runInNewContext(fs.readFileSync('js/shared-exam-renderer.js','utf8'),context);
const api=context.window.QuickRNSharedRenderer;
const fixtures=[
 ['Single Choice',{type:'Single Best Answer',options:['A','B'],correctAnswer:'A'}],
 ['Multiple Response',{type:'Multiple Response',options:['A','B'],correctAnswers:['A']}],
 ['Matrix / Grid',{type:'Matrix',rows:[{id:'r1',text:'Finding'}],columns:['Yes','No'],correctAnswers:{r1:'Yes'}}],
 ['Cloze (Drop-down)',{type:'Cloze',clozeTemplate:'The client has {finding}.',options:{finding:['A','B']},correctAnswers:{finding:'A'}}],
 ['Extended Drag and Drop',{type:'Drag and Drop',availableItems:['A','B'],correctOrder:['A','B']}],
 ['Bowtie',{type:'Bowtie',bowtieData:{actions:['A'],conditions:['C'],monitoring:['M']},correctAnswers:{condition:'C',actions:['A','B'],monitoring:['M','N']}}],
 ['Extended Multiple Response',{type:'Extended Multiple Response',options:['A','B'],correctAnswers:['A']}],
 ['Highlight',{type:'Highlight',highlightSegments:[{id:'s1',text:'New confusion.'},{id:'s2',text:'Stable appetite.'}],correctHighlights:['s1']}],
 ['Trend',{type:'Trend',trendData:{headers:['Time','BP'],rows:[{Time:'0800',BP:'120/80'},{Time:'1000',BP:'88/54'}]},options:['Notify provider','Document only'],correctAnswer:'Notify provider'}]
];
for(const [expected,q] of fixtures)assert.equal(api.detect(q),expected,expected+' detection');
const highlight=fixtures[7][1];
assert.equal(api.hasAnswer(highlight,{highlights:['s1']}),true);
assert.equal(api.grade(highlight,{highlights:['s1']}),true);
assert.equal(api.grade(highlight,{highlights:['s2']}),false);
const trend=fixtures[8][1];
assert.equal(api.hasAnswer(trend,{choice:'Notify provider'}),true);
assert.equal(api.grade(trend,{choice:'Notify provider'}),true);
for(const [format,q] of fixtures){const html=context.quickRNRenderClinicalItem(q,{});assert.ok(html.includes('qr-question-panel'),format+' markup');}
console.log('PASS: '+fixtures.length+' format render/detection checks; highlight/trend grading checks.');
