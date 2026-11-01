const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context={console,window:{}};
for(const file of ['questions-bank-v2.js','questions-bank-v2-curated.js','js/quickrn-ngn-scoring.js']){
 vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{filename:file,timeout:30000});
}
const bank=context.window.questions;
assert.ok(Array.isArray(bank));
const curated=bank.filter(q=>String(q.id||'').startsWith('QB2R-'));
assert.equal(curated.length,26,'expected 20 standalone items plus six linked case questions');
assert.equal(new Set(curated.map(q=>q.id)).size,26,'curated IDs are unique');
for(const q of curated){
 assert.ok(q.title&&q.title.trim(),q.id+' has a stem');
 assert.ok(q.rationale&&q.rationale.trim(),q.id+' has a rationale');
}
const byId=id=>curated.find(q=>q.id===id);
for(const q of curated){
 const f=String(q.type||'').toLowerCase(),opts=q.options||[];
 if(f==='single choice'||f==='trend'){
  assert.ok(opts.includes(q.correctAnswer),q.id+' single answer matches an option');
 } else if(f.includes('multiple response')||f==='select n'){
  assert.ok(Array.isArray(q.correctAnswers)&&q.correctAnswers.length,q.id+' has multiple-response key');
  assert.ok(q.correctAnswers.every(a=>opts.includes(a)),q.id+' keys map to options');
  if(f==='select n')assert.equal(q.correctAnswers.length,q.selectN,q.id+' Select-N count matches');
 } else if(f.includes('matrix')){
  for(const row of q.rows){const key=q.correctAnswers[row.id];assert.ok(key!==undefined,q.id+' has row key '+row.id);for(const v of (Array.isArray(key)?key:[key]))assert.ok(q.columns.includes(v),q.id+' matrix key maps to a column');}
 } else if(f.includes('cloze')){
  const dd=Object.fromEntries(q.dropdowns.map(d=>[d.id,d.options]));
  for(const [key,value] of Object.entries(q.correctAnswers))assert.ok(dd[key]?.includes(value),q.id+' cloze key maps to dropdown');
 } else if(f==='bowtie'){
  assert.ok(q.bowtieData.conditions.includes(q.correctAnswers.condition),q.id+' bowtie condition key');
  assert.ok(q.correctAnswers.actions.every(x=>q.bowtieData.actions.includes(x)),q.id+' bowtie action keys');
  assert.ok(q.correctAnswers.monitoring.every(x=>q.bowtieData.monitoring.includes(x)),q.id+' bowtie monitoring keys');
 } else if(f==='highlight'){
  assert.ok(q.correctHighlights.every(id=>q.highlightSegments.some(x=>x.id===id)),q.id+' highlight keys map to segments');
 } else if(f==='numeric entry'){
  assert.ok(Number.isFinite(Number(q.correctNumericAnswer)),q.id+' numeric key is finite');
 } else if(f.includes('drag')){
  assert.equal(q.correctOrder.length,q.availableItems.length,q.id+' ordered response uses every item');
  assert.equal(new Set(q.correctOrder).size,q.availableItems.length,q.id+' ordered response has no duplicate');
  assert.ok(q.correctOrder.every(x=>q.availableItems.includes(x)),q.id+' ordered keys map to items');
 } else assert.fail('Unsupported curated format '+q.type+' for '+q.id);
}
const caseQs=curated.filter(q=>q.caseGroupId==='QB2R-CS-001').sort((a,b)=>a.caseQuestionNumber-b.caseQuestionNumber);
assert.equal(caseQs.length,6,'case study has six sequential questions');
assert.deepEqual(caseQs.map(q=>q.caseQuestionNumber),[1,2,3,4,5,6]);
const scenario=caseQs[0].caseStudy.scenario;
assert.ok(scenario&&scenario.length>100,'case narrative is stored separately');
assert.ok(caseQs.every(q=>q.caseStudy.scenario===scenario),'all linked questions reference the same separate scenario');
const scoring=context.window.QuickRNNgnScoring;
assert.ok(scoring);
assert.equal(scoring.grade(byId('QB2R-0001'),{choice:byId('QB2R-0001').correctAnswer}).isCorrect,true);
assert.equal(scoring.grade(byId('QB2R-0002'),{choices:byId('QB2R-0002').correctAnswers}).isCorrect,true);
assert.equal(scoring.grade(byId('QB2R-0004'),{matrix:{r1:'Airborne',r2:'Contact',r3:'Droplet'}}).isCorrect,true);
assert.equal(scoring.grade(byId('QB2R-0006'),{cloze:{fluid:'isotonic crystalloid',potassium:'potassium replacement',insulin:'temporarily delaying insulin'}}).isCorrect,true);
assert.equal(scoring.grade(byId('QB2R-0007'),{condition:'Septic shock',actions:byId('QB2R-0007').correctAnswers.actions,monitoring:byId('QB2R-0007').correctAnswers.monitoring}).isCorrect,true);
assert.equal(scoring.grade(byId('QB2R-0009'),{numericEntry:180}).isCorrect,true);
assert.equal(scoring.grade(byId('QB2R-0010'),{order:byId('QB2R-0010').correctOrder}).isCorrect,true);
console.log('PASS: 26 curated questions; answer structures, rationales, all supported schemas, six-step case sequence, and representative scoring checks.');
