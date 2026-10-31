const fs = require('node:fs');
const assert = require('node:assert/strict');

const read = (path) => fs.readFileSync(path, 'utf8');
const renderer = read('js/shared-exam-renderer.js');
const app = read('js/quickrn-exam-app.js');
const brand = read('css/quickrn-brand-system.css');

assert.match(renderer, /qr-feedback-correct/);
assert.match(renderer, /✓ Correct answer/);
assert.match(renderer, /qr-feedback-incorrect/);
assert.match(renderer, /✕ Incorrect/);
assert.doesNotMatch(renderer, /aria-label="Incorrect answer">✕<\/span><small/);

assert.match(app, /function isAdaptiveMode\(\)\{return mode==='cat';\}/);
assert.match(app, /\['15','15 questions'\].*\['50','50 questions'\].*\['85','85 questions'\].*\['150','150 questions'\].*\['all','All available questions'\]/);
assert.match(app, /else if\(mode==='timed'\)opts=\[\['40','40 questions'\],\['60','60 questions'\]\]/);
assert.doesNotMatch(app, /else if\(mode==='timed'\)opts=\[[^;]*\['85'|else if\(mode==='timed'\)opts=\[[^;]*\['150'/);
assert.match(app, /else if\(mode==='cat'\)\{maxItems=Math\.min\(maxItems\|\|150,pool\.length,150\);session=\[\];const first=chooseFirstAdaptive\(\);if\(first\)session\.push\(first\);\}/);
assert.match(app, /else\{maxItems=Math\.min\(maxItems\|\|150,pool\.length,150\);session=balancedPick\(pool,maxItems\);\}/);
assert.match(app, /mode==='predictor'\?'Predictor score'/);
assert.doesNotMatch(app, /function toggleRationale\(/);
assert.match(app, /This is the best answer because it matches the keyed response/);
assert.match(app, /This is not the best answer/);
assert.match(app, /right\.insertBefore\(rationale,actionRow\)/);
assert.match(app, /rationale\.classList\.add\('hidden'\)/);
assert.match(app, /Reference range: not supplied in source item/);
assert.match(app, /videoResources&&videoResources\.parentElement!==left/);
assert.match(app, /accuracyPercent:score\.accuracy/);
assert.match(app, /score\.partialCorrect/);
assert.match(app, /score\.wrong/);
assert.match(app, /elapsedSeconds\/60/);
assert.match(app, /v\.correct\+'\\/'\+v\.attempted/);
assert.match(app, /formatHtml\+judgmentHtml\+domainHtml/);
assert.match(app, /renderer\(\)\.cleanClinicalText\(tabs\[index\]\.content,q\)/);
assert.match(renderer, /quickRNGradeWithPolytomousScoring/);
assert.match(app, /qr-lab-reference-range/);
assert.match(app, /qr-lab-reference-missing/);
assert.match(app, /\(mode==='selfstudy'\|\|reviewMode\)&&rec\.submitted\)showRationale/);
assert.doesNotMatch(app, /ifisAdaptiveMode/);

for (const [path, mode] of [['selfstudy.html','selfstudy'],['timed.html','timed'],['predictor.html','predictor'],['cat.html','cat']]) {
  const page = read(path);
  assert.match(page, new RegExp('data-exam-mode="' + mode + '"'));
  assert.match(page, /js\/shared-exam-renderer\.js/);
  assert.match(page, /js\/quickrn-exam-app\.js/);
  assert.match(page, /css\/quickrn-brand-system\.css/);
  assert.match(page, /id="rationale-section"/);
  assert.doesNotMatch(page, /id="rationale-toggle"/);
  assert.match(page, /id="video-resources"/);
  assert.match(page, />Rationale<\/h4>/);
}
for (const path of ['index.html','dashboard.html','profile.html','calendar.html','saved.html','reports.html','correct_view.html']) {
  assert.match(read(path), /css\/quickrn-brand-system\.css/);
}
assert.match(brand, /body header\{[\s\S]*?background:#00a8cc!important/);
assert.match(read('saved.html'), /aria-current="page"[\s\S]*?Saved Questions/);
assert.match(read('saved.html'), /<aside[\s\S]*?calendar\.html/);
assert.match(read('calendar.html'), /href="saved\.html"/);
assert.match(read('calendar.html'), /#087f8c/);
assert.match(brand, /#answer-workspace \.qr-feedback-correct\{color:#15803d/);
assert.match(brand, /#answer-workspace \.qr-feedback-incorrect\{color:#b91c1c/);
assert.match(read('css/quickrn-unified-exam.css'), /qr-clinical-scenario-text[^}]*font-size:19px/);
assert.match(read('css/quickrn-unified-exam.css'), /#rationale-section:not\(\.hidden\)\{display:block/);
assert.match(read('dashboard.html'), /accuracyPercent \?\? x\.scorePercent/);
console.log('Unified exam interface contract tests passed.');
