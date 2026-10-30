const fs = require('fs');
const pages = ['cat.html', 'predictor.html', 'timed.html', 'selfstudy.html'];
const failures = [];
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const tags = [...html.matchAll(/<script\\b[^>]*>/gi)].map(match => match[0]);
  const questionTag = tags.findIndex(tag => /src=["']questions\\.js["']/.test(tag));
  const normalizerTag = tags.findIndex(tag => /src=["']js\\/quickrn-question-id-normalizer\\.js["']/.test(tag));
  const metricsTag = tags.findIndex(tag => /src=["']js\\/quickrn-question-metrics\\.js["']/.test(tag));
  const rendererTag = tags.findIndex(tag => /src=["']js\\/shared-exam-renderer\\.js["']/.test(tag));
  if (questionTag < 0) failures.push(page + ': questions.js is not loaded');
  if (normalizerTag < 0) failures.push(page + ': question ID normalizer is not loaded');
  if (metricsTag < 0) failures.push(page + ': question metrics helper is not loaded');
  if (rendererTag < 0) failures.push(page + ': shared exam renderer is not loaded');
  if (questionTag >= 0 && normalizerTag >= 0 && questionTag >= normalizerTag) failures.push(page + ': question bank must load before ID normalizer');
  if (normalizerTag >= 0 && metricsTag >= 0 && normalizerTag >= metricsTag) failures.push(page + ': ID normalizer must load before metrics helper');
  if (metricsTag >= 0 && rendererTag >= 0 && metricsTag >= rendererTag) failures.push(page + ': metrics helper must load before shared renderer');
  if (/<script\\b[^>]*>\\s*<script\\b/i.test(html)) failures.push(page + ': nested script opening tags detected');
  if (/<\\/script>\\s*<\\/script>/i.test(html)) failures.push(page + ': duplicate adjacent script closing tags detected');
}
if (failures.length) {
  console.error('Exam page script contract failed:\\n- ' + failures.join('\\n- '));
  process.exit(1);
}
console.log('Exam page script contract passed for all four exam modes.');
