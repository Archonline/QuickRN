#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs');
const pages=['selfstudy-ngn.html','timed-ngn.html','predictor-ngn.html','cat-ngn.html'];
for(const page of pages){
 const html=fs.readFileSync(page,'utf8');
 assert.match(html,/src=["']questions\.js["']/i,page+' loads the question bank');
 assert.match(html,/src=["']js\/quickrn-question-bank-normalizer\.js["']/i,page+' loads case-study bank normalization');
 assert.match(html,/src=["']js\/shared-exam-renderer\.js["']/i,page+' loads the shared renderer');
 assert.match(html,/src=["']js\/quickrn-ngn-scoring\.js["']/i,page+' loads NGN scoring');
 assert.match(html,/QuickRNNgnScoring/,page+' applies the common scoring contract');
 if(page!=='selfstudy-ngn.html')assert.match(html,/points|summary-points/,page+' displays NGN points in its summary');
}
const dashboard=fs.readFileSync('dashboard.html','utf8');
for(const page of pages)assert.ok(dashboard.includes('href="'+page+'"'),'dashboard links to '+page);
assert.match(dashboard,/Rebuilt NGN exam workspaces/);
console.log('PASS: all four NGN workspace pages and dashboard navigation contracts.');
