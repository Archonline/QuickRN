#!/usr/bin/env node
const assert=require('node:assert/strict');
const fs=require('node:fs');
const pages=['selfstudy.html','timed.html','predictor.html','cat.html'];
const failures=[];
for(const page of pages){
 const html=fs.readFileSync(page,'utf8');
 const tags=[...html.matchAll(/<script\\b[^>]*>/gi)].map(m=>m[0]);
 const at=src=>tags.findIndex(tag=>tag.includes(src));
 const deps=[
  ['questions.js','src="questions.js"'],
  ['supplemental questions','src="questions-ngn-supplement.js"'],
  ['case-study normalizer','src="js/quickrn-question-bank-normalizer.js"'],
  ['question ID normalizer','src="js/quickrn-question-id-normalizer.js"'],
  ['question metrics','src="js/quickrn-question-metrics.js"'],
  ['shared renderer','src="js/shared-exam-renderer.js"'],
  ['NGN compatibility layer','src="js/quickrn-ngn-compat.js"']
 ];
 const indices=deps.map(([name,src])=>{const i=at(src);if(i<0)failures.push(page+': missing '+name);return i;});
 for(let i=1;i<indices.length;i++)if(indices[i-1]>=0&&indices[i]>=0&&indices[i-1]>=indices[i])failures.push(page+': incorrect load order: '+deps[i-1][0]+' must precede '+deps[i][0]);
 if(!html.includes('quickrn-unified-nclex-split-screen'))failures.push(page+': split-screen layout stylesheet missing');
 if(!html.includes('QuickRNSharedRenderer'))failures.push(page+': shared renderer is not referenced');
}
const dashboard=fs.readFileSync('dashboard.html','utf8');
for(const page of pages)assert.ok(dashboard.includes('href="'+page+'"')||dashboard.includes("'"+page+"'"),'dashboard routes to '+page);
for(const legacy of ['selfstudy-ngn.html','timed-ngn.html','predictor-ngn.html','cat-ngn.html'])if(dashboard.includes(legacy))failures.push('dashboard still references legacy route '+legacy);
if(failures.length){console.error('Dashboard/exam-bank contract failed:\\n- '+failures.join('\\n- '));process.exit(1);}
console.log('PASS: dashboard routes to all four current exam pages; all four load the complete normalized question bank before rendering.');
