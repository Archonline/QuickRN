const fs = require('node:fs');
const assert = require('node:assert/strict');

const schemaAudit = fs.readFileSync('scripts/validate-question-schema-v2.js', 'utf8');
const bankAudit = fs.readFileSync('scripts/validate-question-bank.js', 'utf8');
const workflow = fs.readFileSync('.github/workflows/ngn-renderer-validation.yml', 'utf8');

assert.doesNotMatch(schemaAudit, /educatorReview|educatorApprovedCount|approvalComplete|educator-review-queue/i,
  'Question Schema audit must not require or generate educator approval');
assert.doesNotMatch(bankAudit, /isClinicallyApproved|clinicallyReviewedCount|clinicalReviewGap|meetsClinicalReviewGate/i,
  'Production bank audit must not require educator approval');
assert.match(bankAudit, /manual clinical review before beta use/i,
  'Content warnings should direct the webmaster to manual review');
assert.doesNotMatch(workflow, /educator-review-queue/i,
  'CI must not create or upload an educator approval queue');

console.log('PASS: Question-bank validation leaves clinical review decisions to the webmaster; no educator approval gate remains.');
