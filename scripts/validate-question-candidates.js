#!/usr/bin/env node
'use strict';

/*
 * Offline structural validator for the file-based AI question review queue.
 * It never edits or publishes question-bank.js.
 */
const fs = require('fs');
const path = require('path');
const schema = require('../js/quickrn-question-schema-v2.js');

const root = path.resolve(__dirname, '..');
const pendingDir = path.join(root, 'question-candidates', 'pending');
const files = fs.existsSync(pendingDir)
  ? fs.readdirSync(pendingDir).filter(name => name.endsWith('.js') && name !== 'README.md').sort()
  : [];

const errors = [];
const seenIds = new Map();
const allowedFormats = new Set(schema.FORMATS);
const placeholderPattern = /REPLACE_WITH|example\.org\/replace-this|QR-000000/;

function report(file, code, message) {
  errors.push({ file, code, message });
}

if (!Array.isArray(schema.FORMATS) || schema.FORMATS.length !== 13) {
  report('validator', 'FORMAT_CATALOG_MISMATCH',
    'Expected exactly 13 QuickRN schema-v2 formats; found ' + (schema.FORMATS || []).length + '.');
}

for (const file of files) {
  const fullPath = path.join(pendingDir, file);
  let exported;
  try {
    delete require.cache[require.resolve(fullPath)];
    exported = require(fullPath);
  } catch (error) {
    report(file, 'CANDIDATE_LOAD_FAILED', error.message);
    continue;
  }

  if (!exported || typeof exported !== 'object' || !exported.question || typeof exported.question !== 'object') {
    report(file, 'INVALID_CANDIDATE_EXPORT', 'Export { review, question } with a question object.');
    continue;
  }

  const review = exported.review || {};
  const question = exported.question;
  if (review.status !== 'pending_review') {
    report(file, 'INVALID_REVIEW_STATUS', 'Pending queue files must have review.status="pending_review".');
  }
  if (review.reviewer || review.reviewedAt) {
    report(file, 'PREMATURE_REVIEW_METADATA', 'Pending candidates cannot claim a reviewer or reviewedAt timestamp.');
  }

  const id = String(question.metadata?.id || question.id || '').trim();
  if (!/^QR-\d{6}$/.test(id)) {
    report(file, 'INVALID_QUESTION_ID', 'Use a unique canonical ID in the form QR-000000.');
  } else if (seenIds.has(id)) {
    report(file, 'DUPLICATE_CANDIDATE_ID', 'ID is also used by ' + seenIds.get(id) + '.');
  } else {
    seenIds.set(id, file);
  }

  const format = String(question.interaction?.type || question.type || question.format || '');
  if (!allowedFormats.has(format)) {
    report(file, 'UNSUPPORTED_FORMAT', 'Format "' + format + '" is not in the QuickRN schema-v2 13-format catalogue.');
  }

  const serialized = JSON.stringify(exported);
  if (placeholderPattern.test(serialized)) {
    report(file, 'UNREPLACED_TEMPLATE_TEXT', 'Replace all template placeholders before review.');
  }

  try {
    const normalized = schema.normalize({ ...question });
    for (const issue of schema.validate(normalized, 0)) {
      report(file, issue.code, issue.message);
    }
  } catch (error) {
    report(file, 'SCHEMA_VALIDATION_FAILED', error.message);
  }
}

if (errors.length) {
  console.error('Question candidate validation failed (' + errors.length + ' issue(s)).');
  for (const issue of errors) {
    console.error('- [' + issue.file + '] ' + issue.code + ': ' + issue.message);
  }
  process.exitCode = 1;
} else {
  console.log('Question candidate validation passed. ' + files.length + ' pending candidate file(s) checked.');
  console.log('Formats recognized: ' + schema.FORMATS.join(', '));
  console.log('No files were published or added to the active question bank.');
}
