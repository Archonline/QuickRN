const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const context={window:{},console};vm.createContext(context);
for(const file of ['questions.js','questions-bank-v3-clinical.js','js/shared-exam-renderer.js']){
 vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file,timeout:120000});
}
const bank=context.window.questions;
const api=context.window.QuickRNSharedRenderer;
assert.ok(Array.isArray(bank)&&api,'bank and shared renderer load');
const items=bank.filter(q=>String(q.id||'').startsWith('QRV3-'));
assert.equal(items.length,13);
for(const q of items){
 const html=api.renderReact(q,undefined,()=>{},false);
 assert.equal(typeof html,'string',q.id+' returns HTML');
 assert.ok(html.length>100,q.id+' produces nonempty question markup');
 assert.ok(/qr-question-panel|question-only|qr-clinical-item/.test(html),q.id+' contains a question workspace');
 assert.ok(!/undefined|null/.test(html.slice(0,300)),q.id+' has no null/undefined prompt prefix');
}
console.log('PASS: all 13 actual clinical v3 questions render through the shared exam renderer.');
