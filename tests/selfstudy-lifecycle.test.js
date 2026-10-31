#!/usr/bin/env node
const assert=require('node:assert/strict');
const fs=require('node:fs');
const app=fs.readFileSync('js/quickrn-exam-app.js','utf8');
const profile=fs.readFileSync('profile.html','utf8');
assert.match(app,/function showSummary\(score,history,reason,studyStreak\)/,'summary accepts the streak value passed by finishExam');
assert.match(app,/showSummary\(score,history,reason,studyStreak\)/,'finishExam passes the locally computed study streak');
assert.match(app,/function unseenSelfStudyPool\(list\)/,'Self-Study has a global unseen-question filter');
assert.match(app,/You have exhausted all available Self-Study questions/,'exhausted banks show a no-repeat message');
assert.match(app,/function seenQuestionIds\(\)/,'legacy used IDs are merged into the seen ledger');
assert.match(profile,/removeItem\('quickrn_question_metrics_v1'\)/,'analytics reset clears the per-question attempt ledger');
assert.match(profile,/removeItem\('quickrn_exam_answers_' \+ mode \+ '_v2'\)/,'analytics reset clears saved answer drafts');
assert.doesNotMatch(profile,/removeItem\('quickrn_seen_question_ids_v1'\)/,'analytics reset preserves no-repeat history');
assert.match(profile,/totalAnswered: 0/,'analytics reset clears the dashboard answered count');
console.log('PASS: Self-Study finish, analytics reset, and persistent no-repeat contracts.');
