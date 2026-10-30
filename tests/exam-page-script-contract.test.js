const fs = require('fs');
const pages = ['cat-ngn.html', 'predictor-ngn.html', 'timed-ngn.html', 'selfstudy-ngn.html'];
const failures = [];
for (const page of pages) {
  const html = fs.readFileSync(page, 'utf8');
  const tags = [...html.matchAll(/<script\b[^>]*>/gi)].map(match => match[0]);
  const indexOf = (src) => tags.findIndex(tag => tag.includes(src));
  const questionTag = indexOf('src="questions.js"');
  const bankNormalizerTag = indexOf('src="js/quickrn-question-bank-normalizer.js"');
  const idNormalizerTag = indexOf('src="js/quickrn-question-id-normalizer.js"');
  const metricsTag = indexOf('src="js/quickrn-question-metrics.js"');
  const rendererTag = indexOf('src="js/shared-exam-renderer.js"');
  const scoringTag = indexOf('src="js/quickrn-ngn-scoring.js"');
  for (const [name, index] of [['questions.js', questionTag], ['question-bank normalizer', bankNormalizerTag], ['question ID normalizer', idNormalizerTag], ['question metrics', metricsTag], ['shared renderer', rendererTag], ['NGN scoring', scoringTag]]) {
    if (index < 0) failures.push(page + ': ' + name + ' is not loaded');
  }
  if (questionTag >= 0 && bankNormalizerTag >= 0 && questionTag >= bankNormalizerTag) failures.push(page + ': question bank must load before bank normalization');
  if (bankNormalizerTag >= 0 && idNormalizerTag >= 0 && bankNormalizerTag >= idNormalizerTag) failures.push(page + ': bank normalization must run before ID normalization');
  if (idNormalizerTag >= 0 && metricsTag >= 0 && idNormalizerTag >= metricsTag) failures.push(page + ': ID normalization must run before metrics');
  if (metricsTag >= 0 && rendererTag >= 0 && metricsTag >= rendererTag) failures.push(page + ': metrics must load before shared renderer');
  if (rendererTag >= 0 && scoringTag >= 0 && rendererTag >= scoringTag) failures.push(page + ': shared renderer must load before NGN scoring');
  if (/<script\b[^>]*>\s*<script\b/i.test(html)) failures.push(page + ': nested script opening tags detected');
  if (/<\/script>\s*<\/script>/i.test(html)) failures.push(page + ': duplicate adjacent script closing tags detected');
  if (!html.includes('quickrn-unified-nclex-split-screen')) failures.push(page + ': unified exam layout stylesheet is missing');
}
if (failures.length) {
  console.error('Exam page script contract failed:\n- ' + failures.join('\n- '));
  process.exit(1);
}
console.log('Exam page script contract passed for all four NGN exam modes.');
