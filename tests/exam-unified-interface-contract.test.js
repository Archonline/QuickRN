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

assert.match(app, /function isAdaptiveMode\(\)\{return mode==='predictor'\|\|mode==='cat'\|\|\(mode==='timed'&&maxItems>=85\);\}/);
assert.match(app, /\['15','15 questions'\].*\['50','50 questions'\].*\['85','85 questions'\].*\['150','150 questions'\].*\['all','All available questions'\]/);
assert.match(app, /\['40','40 questions'\].*\['60','60 questions'\].*\['85','85 questions'\].*\['150','150 questions'\]/);
assert.match(app, /else if\(mode==='timed'&&maxItems<85\)\{session=balancedPick/);
assert.match(app, /function toggleRationale\(\)[\s\S]*?Rationale collapsed in the clinical case pane/);
assert.match(app, /\(mode==='selfstudy'\|\|reviewMode\)&&rec\.submitted\)showRationale/);
assert.doesNotMatch(app, /ifisAdaptiveMode/);

for (const [path, mode] of [['selfstudy.html','selfstudy'],['timed.html','timed'],['predictor.html','predictor'],['cat.html','cat']]) {
  const page = read(path);
  assert.match(page, new RegExp('data-exam-mode="' + mode + '"'));
  assert.match(page, /js\/shared-exam-renderer\.js/);
  assert.match(page, /js\/quickrn-exam-app\.js/);
  assert.match(page, /id="rationale-section"/);
  assert.match(page, />Rationale<\/h4>/);
}
for (const path of ['index.html','dashboard.html','profile.html','calendar.html','reports.html','correct_view.html']) {
  assert.match(read(path), /css\/quickrn-brand-system\.css/);
}
assert.match(brand, /body header\{[\s\S]*?background:#00a8cc!important/);
assert.match(brand, /#answer-workspace \.qr-feedback-correct\{color:#15803d/);
assert.match(brand, /#answer-workspace \.qr-feedback-incorrect\{color:#b91c1c/);
assert.match(brand, /#rationale-section\.rationale-collapsed\{max-height:54px/);
console.log('Unified exam interface contract tests passed.');
