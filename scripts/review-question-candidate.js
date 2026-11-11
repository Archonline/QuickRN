#!/usr/bin/env node
'use strict';

/*
 * Records an educator's decision and archives a pending candidate.
 * This local CLI is an audit aid, not an authentication or authorization
 * boundary. Use protected GitHub PR reviews/branch rules for actual access control.
 * Approval here does NOT publish to the active question bank.
 *
 * Usage:
 * node scripts/review-question-candidate.js QR-123456 approve --reviewer "Name/ID" --note "..."
 * node scripts/review-question-candidate.js QR-123456 reject --reviewer "Name/ID" --note "..."
 */
const fs = require('fs');
const path = require('path');
const schema = require('../js/quickrn-question-schema-v2.js');

const root = path.resolve(__dirname, '..');
const pendingDir = path.join(root, 'question-candidates', 'pending');
const args = process.argv.slice(2);
const id = String(args[0] || '').trim();
const decision = String(args[1] || '').trim().toLowerCase();
const reviewerIndex = args.indexOf('--reviewer');
const noteIndex = args.indexOf('--note');
const reviewer = reviewerIndex >= 0 ? String(args[reviewerIndex + 1] || '').trim() : '';
const note = noteIndex >= 0 ? String(args[noteIndex + 1] || '').trim() : '';

function fail(message) {
  console.error('Review decision stopped: ' + message);
  process.exit(1);
}

function readCandidate(file) {
  const source = fs.readFileSync(file, 'utf8');
  const prefix = "'use strict';\n\nmodule.exports = ";
  const suffix = ';\n';
  if (!source.startsWith(prefix) || !source.endsWith(suffix)) {
    throw new Error('Candidate is not a data-only module created by the QuickRN importer.');
  }
  return JSON.parse(source.slice(prefix.length, -suffix.length));
}

if (!/^QR-\d{6}$/.test(id)) fail('Provide a candidate ID in the form QR-000000.');
if (!['approve', 'reject'].includes(decision)) fail('Decision must be approve or reject.');
if (!reviewer) fail('Provide --reviewer with the educator/admin reviewer identity.');
if (!note) fail('Provide --note with the review rationale.');

const source = path.join(pendingDir, id.toLowerCase() + '.js');
if (!fs.existsSync(source)) fail('Pending candidate not found: ' + source);

let candidate;
try {
  candidate = readCandidate(source);
} catch (error) {
  fail('Could not read candidate safely. ' + error.message);
}

if (!candidate || candidate.review?.status !== 'pending_review' || !candidate.question) {
  fail('Candidate must have pending_review status and a question object.');
}
const actualId = String(candidate.question.metadata?.id || candidate.question.id || '');
if (actualId !== id) fail('Candidate filename and question ID do not match.');

if (decision === 'approve') {
  let issues;
  try {
    const normalized = schema.normalize({ ...candidate.question });
    issues = schema.validate(normalized, 0);
    if (issues.length) {
      console.error('Approval blocked: candidate fails schema-v2 validation:');
      for (const issue of issues) console.error('- ' + issue.code + ': ' + issue.message);
      process.exit(1);
    }
    candidate.question = normalized;
  } catch (error) {
    fail('Approval blocked by schema-v2 validation: ' + error.message);
  }
}

const reviewedAt = new Date().toISOString();
candidate.review = {
  ...candidate.review,
  status: decision === 'approve' ? 'approved' : 'rejected',
  reviewer,
  reviewedAt,
  decisionNote: note
};

const destinationDir = path.join(root, 'question-candidates', decision === 'approve' ? 'approved' : 'rejected');
const destination = path.join(destinationDir, id.toLowerCase() + '.js');
const auditPath = path.join(root, 'question-candidates', 'review-audit.jsonl');
if (fs.existsSync(destination)) fail('An archived decision file already exists: ' + destination);

fs.mkdirSync(destinationDir, { recursive: true });
const moduleSource = "'use strict';\n\nmodule.exports = " + JSON.stringify(candidate, null, 2) + ';\n';
const auditEntry = {
  questionId: id,
  decision,
  reviewer,
  reviewedAt,
  decisionNote: note,
  archivedFile: path.relative(root, destination)
};

let destinationWritten = false;
try {
  fs.writeFileSync(destination, moduleSource, { flag: 'wx' });
  destinationWritten = true;
  fs.appendFileSync(auditPath, JSON.stringify(auditEntry) + '\n', { flag: 'a' });
  fs.unlinkSync(source);
} catch (error) {
  if (destinationWritten) {
    try { fs.unlinkSync(destination); } catch (_) { /* retain original error */ }
  }
  fail('Could not complete review archive; pending source was retained where possible. ' + error.message);
}

console.log('Recorded ' + decision + ' decision for ' + id + '.');
console.log('Reviewer: ' + reviewer);
console.log('Archived: ' + path.relative(root, destination));
console.log('Audit: ' + path.relative(root, auditPath));
if (decision === 'approve') {
  console.log('Approved archive only. The active question bank was NOT modified or published.');
} else {
  console.log('Rejected candidate archived. It cannot be published through this workflow.');
}
