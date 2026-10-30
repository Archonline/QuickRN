#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs');
const pages=['selfstudy.html','timed.html','predictor.html','cat.html'];
for(const page of pages){
 const html=fs.readFileSync(page,'utf8');
 assert.match(html,/src=["']questions\.js["']/i,page+' loads production question bank');
 assert.match(html,/src=["']questions-ngn-supplement\.js["']/i,page+' loads supplemental NGN items');
 assert.match(html,/src=["']js\/quickrn-question-bank-normalizer\.js["']/i,page+' normalizes case-study context');
 assert.match(html,/src=["']js\/shared-exam-renderer\.js["']/i,page+' loads shared renderer');
 assert.match(html,/src=["']js\/quickrn-ngn-compat\.js["']/i,page+' loads NGN compatibility renderer');
 assert.ok(html.includes(page==='selfstudy.html'?'nclex-question-panel':'qr-clinical-layout'),page+' includes split-screen exam workspace');
}
const dashboard=fs.readFileSync('dashboard.html','utf8');
for(const page of pages)assert.ok(dashboard.includes('href="'+page+'"')||dashboard.includes("'"+page+"'"),'dashboard links to '+page);
for(const legacy of ['selfstudy-ngn.html','timed-ngn.html','predictor-ngn.html','cat-ngn.html'])assert.ok(!dashboard.includes(legacy),'dashboard no longer links to '+legacy);
console.log('PASS: current dashboard and all four unified exam workspaces load the normalized NGN bank.');
