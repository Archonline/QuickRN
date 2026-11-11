#!/usr/bin/env node
'use strict';

/*
 * Read-only release preflight for educator-approved question candidates.
 * This checks the approved archive only. It does not publish or edit question-bank.js.
 */
const fs = require('fs');
const path = require('path');
const schema = require('../js/quickrn-question-schema-v2.js');

const root = path.resolve(__dirname, '..');
const approvedDir = path.join(root, 'question-candidates', 'approved');
const files = fs.existsSync(approvedDir)
  ? fs.readdirSync(approvedDir).filter(name => name.endsWith('.js')).sort()
  : [];
const errors = [];
const ids = new Map();
const results = [];

function issue(file, code, message) {
  errors.push({ file, code, message });
}

function readDataModule(file) {
  const source = fs.readFileSync(file, 'utf8');
  const prefix = "'use strict';\n\nmodule.exports = ";
  const suffix = ';\n';
  if (!source.startsWith(prefix) || !source.endsWith(suffix)) {
    throw new Error('Not a data-only module created by the QuickRN importer/reviewer.');
  }
  return JSON.parse(source.slice(prefix.length, -suffix.length));
}

for (const file of files) {
  const fullPath = path.join(approvedDir, file);
  let candidate;
  try {
    candidate = readDataModule(fullPath);
  } catch (error) {
    issue(file, 'APPROVED_FILE_UNSAFE', error.message);
    continue;
  }

  if (!candidate || candidate.review?.status !== 'approved') {
    issue(file, 'NOT_APPROVED', 'Approved archive files must have review.status="approved".');
    continue;
  }
  if (!String(candidate.review.reviewer || '').trim()) {
    issue(file, 'MISSING_REVIEWER', 'Approved candidates must record an educator/admin reviewer.');
  }
  if (!candidate.review.reviewedAt || Number.isNaN(Date.parse(candidate.review.reviewedAt))) {
    issue(file, 'INVALID_REVIEW_TIMESTAMP', 'Approved candidates must record a valid reviewedAt timestamp.');
  }
  if (!String(candidate.review.decisionNote || '').trim()) {
    issue(file, 'MISSING_DECISION_NOTE', 'Approved candidates must include a non-empty decision note.');
  }
  if (!candidate.question || typeof candidate.question !== 'object') {
    issue(file, 'MISSING_QUESTION', 'Candidate must contain a question object.');
    continue;
  }

  const question = candidate.question;
  const id = String(question.metadata?.id || question.id || '').trim();
  if (!/^QR-\d{6}$/.test(id)) {
    issue(file, 'INVALID_QUESTION_ID', 'Use a canonical ID in the form QR-000000.');
  } else if (ids.has(id)) {
    issue(file, 'DUPLICATE_APPROVED_ID', 'ID is also used by ' + ids.get(id) + '.');
  } else {
    ids.set(id, file);
  }
  if (path.basename(file, '.js') !== id.toLowerCase()) {
    issue(file, 'FILENAME_ID_MISMATCH', 'Approved filename must match the question ID.');
  }

  try {
    const normalized = schema.normalize({ ...question });
    const schemaIssues = schema.validate(normalized, 0);
    for (const entry of schemaIssues) {
      issue(file, entry.code, entry.message);
    }
    results.push({ file, id, format: normalized.interaction?.type || normalized.type || normalized.format || 'unknown' });
  } catch (error) {
    issue(file, 'SCHEMA_VALIDATION_FAILED', error.message);
  }
}

const report = {
  checkedAt: new Date().toISOString(),
  approvedFilesChecked: files.length,
  validCandidates: results.length,
  errors
};
console.log(JSON.stringify(report, null, 2));
if (errors.length) {
  console.error('Release preflight FAILED. No files were changed or published.');
  process.exitCode = 1;
} else {
  console.log('Release preflight PASSED. Approved candidates are structurally ready for a separately reviewed publisher.');
  console.log('This command is read-only and did NOT modify or publish to the active question bank.');
}
