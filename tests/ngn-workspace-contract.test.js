#!/usr/bin/env node
const assert=require('node:assert/strict'),fs=require('node:fs');
const pages=['selfstudy.html','timed.html','predictor.html','cat.html'];
const app=fs.readFileSync('js/quickrn-exam-app.js','utf8');
for(const page of pages){
 const html=fs.readFileSync(page,'utf8');
 assert.match(html,/src=["']questions\.js["']/i,page+' loads production question bank');
 assert.match(html,/src=["']questions-ngn-supplement\.js["']/i,page+' loads supplemental NGN items');
 assert.match(html,/src=["']js\/quickrn-question-bank-normalizer\.js["']/i,page+' normalizes case-study context');
 assert.match(html,/src=["']js\/quickrn-question-id-normalizer\.js["']/i,page+' normalizes question IDs');
 assert.match(html,/src=["']js\/shared-exam-renderer\.js["']/i,page+' loads shared renderer');
 assert.match(html,/src=["']js\/quickrn-ngn-compat\.js["']/i,page+' loads NGN compatibility adapter');
 assert.match(html,/src=["']js\/quickrn-ngn-scoring\.js["']/i,page+' loads partial-credit scoring');
 assert.match(html,/src=["']js\/quickrn-exam-app\.js["']/i,page+' loads shared rebuilt exam app');
 assert.ok(html.includes('data-exam-mode="'+page.replace('.html','')+'"'),page+' selects its own exam mode');
 for(const id of ['left-panel','right-panel','case-study-tabs','case-study-content','question-prompt','answer-workspace','rationale-section','exam-footer'])assert.ok(html.includes('id="'+id+'"'),page+' preserves correct_view region #'+id);
 assert.ok(html.includes('quickrn-unified-nclex-split-screen'),page+' includes reference split-screen styles');
}
for(const feature of ['renderReact','QuickRNNgnScoring','QuickRNCAT','recordClientNeedAttempt','getTwoVideos','quickrn_question_reports','quickrn_used_q_ids','quickrn_student_state','Retake same session'])assert.ok(app.includes(feature),'shared exam app includes '+feature);
const renderer=fs.readFileSync('js/shared-exam-renderer.js','utf8');
const examHtml=fs.readFileSync('correct_view.html','utf8');
const examCss=fs.readFileSync('css/quickrn-unified-exam.css','utf8');
assert.ok(app.includes('question-only-panel'),'no-case items move the question stem into the left pane');
assert.ok(app.includes("left.appendChild(prompt)"),'question prompt is physically moved into the left pane without a case');
assert.ok(!app.includes('No additional clinical exhibits are attached'),'no-case items do not fabricate a Clinical Record');
assert.ok(!renderer.includes('Report this item')&&!renderer.includes('qr-report-row'),'standalone report item action is removed from the renderer');
assert.ok(examHtml.includes('id="feedback-category"')&&examHtml.includes('id="feedback-details"'),'feedback modal combines report categories and free-text details');
assert.ok(app.includes("feedback-category")&&app.includes("snapshot:q?"),"feedback saves the selected issue category with question context");
assert.match(examHtml,/flex items-center justify-end gap-4/,'Check Answer action is aligned to the right');
assert.ok(examCss.includes('#left-panel.question-only-panel #question-prompt'),'question-only left pane has dedicated layout styling');

const dashboard=fs.readFileSync('dashboard.html','utf8');
for(const page of pages)assert.ok(dashboard.includes('href="'+page+'"')||dashboard.includes("'"+page+"'"),'dashboard links to '+page);
for(const legacy of ['selfstudy-ngn.html','timed-ngn.html','predictor-ngn.html','cat-ngn.html'])assert.ok(!dashboard.includes(legacy),'dashboard no longer links to '+legacy);
console.log('PASS: all four correct_view-based exam modes load the normalized production + supplemental bank, shared renderer, scoring, and mode-aware application.');
