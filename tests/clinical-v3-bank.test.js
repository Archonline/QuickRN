const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context={console};context.window=context;
vm.createContext(context);
for(const file of ['questions.js','questions-bank-v3-clinical.js']){
 vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file,timeout:120000});
}
const bank=context.questions;
assert.ok(Array.isArray(bank),'production bank is available');
const batch=bank.filter(q=>String(q.legacyId||'').startsWith('QRV3-'));
assert.equal(batch.length,13,'v3 batch contains 13 actual questions');
assert.equal(new Set(batch.map(q=>q.id)).size,13,'v3 question IDs are unique');
const expected=['Single Choice','Multiple Response','Select N','Matrix Single','Matrix Multiple','Cloze (Drop-down)','Dropdown Rationale','Bowtie','Extended Drag and Drop','Extended Multiple Response','Highlight','Trend','Numeric Entry'];
const actual=batch.map(q=>String(q.type));
for(const format of expected)assert.ok(actual.includes(format),'v3 batch includes '+format);
for(const q of batch){
 assert.ok(q.title&&q.title.length>80,q.id+' has a clinically specific scenario stem');
 assert.ok(q.rationale&&q.rationale.length>80,q.id+' has a clinical rationale');
 assert.ok(q.patientInfo||q.ehr,q.id+' includes patient context or record data');
}
const byId=id=>batch.find(q=>q.legacyId===id);
assert.ok(byId('QRV3-0001').options.includes(byId('QRV3-0001').correctAnswer));
assert.equal(byId('QRV3-0003').correctAnswers.length,byId('QRV3-0003').selectN);
for(const q of batch.filter(x=>x.type.startsWith('Matrix'))){
 for(const row of q.rows){const answer=q.correctAnswers[row.id];for(const choice of (Array.isArray(answer)?answer:[answer]))assert.ok(q.columns.includes(choice),q.id+' matrix key is valid');}
}
for(const q of batch.filter(x=>x.type.includes('Cloze')||x.type==='Dropdown Rationale')){
 const options=Object.fromEntries(q.dropdowns.map(d=>[d.id,d.options]));
 for(const [key,value] of Object.entries(q.correctAnswers))assert.ok(options[key].includes(value),q.id+' dropdown key is valid');
}
const bowtie=byId('QRV3-0008');
assert.ok(bowtie.bowtieData.conditions.includes(bowtie.correctAnswers.condition));
assert.ok(bowtie.correctAnswers.actions.every(x=>bowtie.bowtieData.actions.includes(x)));
assert.ok(bowtie.correctAnswers.monitoring.every(x=>bowtie.bowtieData.monitoring.includes(x)));
const ordered=byId('QRV3-0009');
assert.equal(ordered.correctOrder.length,ordered.availableItems.length);
assert.ok(ordered.correctOrder.every(x=>ordered.availableItems.includes(x)));
const highlight=byId('QRV3-0011');
assert.ok(highlight.correctHighlights.every(id=>highlight.highlightSegments.some(x=>x.id===id)));
const trend=byId('QRV3-0012');
assert.ok(trend.trendData.rows.length>=3&&trend.options.includes(trend.correctAnswer));
assert.equal(byId('QRV3-0013').correctNumericAnswer,450);
for(const page of ['selfstudy.html','timed.html','predictor.html','cat.html']){
 const html=fs.readFileSync(page,'utf8');
 assert.ok(html.includes('src="questions-bank-v3-clinical.js"'),page+' loads the clinical v3 bank');
 assert.ok(html.indexOf('src="questions-bank-v2-curated.js"')<html.indexOf('src="questions-bank-v3-clinical.js"'),page+' loads v3 after existing bank extensions');
}
console.log('PASS: 13 scenario-based clinical items; all 13 formats, answer structures, rationales, and four exam-mode integrations verified.');
