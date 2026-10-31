const assert = require('node:assert/strict');
const path = require('node:path');
const root = process.cwd();
const fs = require('fs');
const pages = ['selfstudy.html', 'timed.html', 'predictor.html', 'cat.html'];
const failures = [];
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const tags = [...html.matchAll(/<script\b[^>]*>/gi)].map(match => match[0]);
  const indexOf = (src) => tags.findIndex(tag => tag.includes(src));
  const dependencies = [
    ['questions.js', 'src="questions.js"'],
    ['NGN supplement', 'src="questions-ngn-supplement.js"'],
    ['case-study normalizer', 'src="js/quickrn-question-bank-normalizer.js"'],
    ['question ID normalizer', 'src="js/quickrn-question-id-normalizer.js"'],
    ['question metrics', 'src="js/quickrn-question-metrics.js"'],
    ['shared renderer', 'src="js/shared-exam-renderer.js"'],
    ['NGN compatibility', 'src="js/quickrn-ngn-compat.js"'],
    ['NGN scoring', 'src="js/quickrn-ngn-scoring.js"'],
    ['shared exam app', 'src="js/quickrn-exam-app.js"']
  ];
  const indices = dependencies.map(([name, src]) => {
    const index = indexOf(src);
    if (index < 0) failures.push(page + ': ' + name + ' is not loaded');
    return index;
  });
  for (let i = 1; i < indices.length; i++) {
    if (indices[i - 1] >= 0 && indices[i] >= 0 && indices[i - 1] >= indices[i]) {
      failures.push(page + ': incorrect script order: ' + dependencies[i - 1][0] + ' must precede ' + dependencies[i][0]);
    }
  }
  if (!html.includes('quickrn-unified-nclex-split-screen')) failures.push(page + ': correct_view split-screen styling is missing');
  for (const id of ['left-panel', 'right-panel', 'case-study-tabs', 'answer-workspace', 'rationale-section', 'exam-footer', 'setup-modal', 'summary-screen']) {
    if (!html.includes('id="' + id + '"')) failures.push(page + ': missing reference interface region #' + id);
  }
  if (!html.includes('data-exam-mode="' + page.replace('.html', '') + '"')) failures.push(page + ': incorrect exam mode configuration');
  if (/<script\b[^>]*>\s*<script\b/i.test(html)) failures.push(page + ': nested script opening tags detected');
  if (/<\/script>\s*<\/script>/i.test(html)) failures.push(page + ': duplicate adjacent script closing tags detected');
}
if (failures.length) {
  console.error('Rebuilt exam page contract failed:\n- ' + failures.join('\n- '));
  process.exit(1);
}
console.log('PASS: all four rebuilt exam pages preserve the correct_view split-screen and load the shared question stack in dependency order.');


const platformPages = ['index.html','dashboard.html','calendar.html','selfstudy.html','timed.html','predictor.html','cat.html','saved.html','reports.html','profile.html','help.html','correct_view.html'];
for (const page of platformPages) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  assert.match(html, /js\/quickrn-platform-hardening\.js/, page + ' should load shared platform safeguards');
}
