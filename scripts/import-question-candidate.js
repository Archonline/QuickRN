#!/usr/bin/env node
'use strict';

/*
 * Safely imports one AI-produced JSON question into the pending review queue.
 * Input is data only (JSON.parse); it is never evaluated as JavaScript.
 * This tool cannot call an AI provider and cannot publish to the active bank.
 *
 * Usage:
 *   node scripts/import-question-candidate.js path/to/ai-question.json
 *   node scripts/import-question-candidate.js path/to/ai-question.json --submitted-by educator-draft
 */
const fs = require('fs');
const path = require('path');
const schema = require('../js/quickrn-question-schema-v2.js');

const root = path.resolve(__dirname, '..');
const pendingDir = path.join(root, 'question-candidates', 'pending');
const args = process.argv.slice(2);
const inputArg = args.find(arg => !arg.startsWith('--'));
const submitterIndex = args.indexOf('--submitted-by');
const submittedBy = submitterIndex >= 0 ? args[submitterIndex + 1] : 'ai-generated-draft';

function fail(message) {
  console.error('Candidate import stopped: ' + message);
  process.exit(1);
}

if (!inputArg) fail('Provide a JSON file containing one question object.');
if (submitterIndex >= 0 && !submittedBy) fail('Provide a value after --submitted-by.');

const inputPath = path.resolve(process.cwd(), inputArg);
if (!fs.existsSync(inputPath)) fail('Input file not found: ' + inputPath);

let parsed;
try {
  parsed = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
} catch (error) {
  fail('Input must be valid JSON. ' + error.message);
}

const question = parsed && parsed.question && typeof parsed.question === 'object'
  ? parsed.question
  : parsed;
if (!question || typeof question !== 'object' || Array.isArray(question)) {
  fail('JSON must contain a question object, either directly or under "question".');
}

const id = String(question.metadata?.id || question.id || '').trim();
if (!/^QR-\d{6}$/.test(id)) fail('Question must have a unique ID in the form QR-000000.');

const filename = id.toLowerCase() + '.js';
fs.mkdirSync(pendingDir, { recursive: true });
const destination = path.join(pendingDir, filename);
if (fs.existsSync(destination)) fail('A pending candidate with this ID already exists: ' + filename);

const pendingFiles = fs.readdirSync(pendingDir).filter(name => name.endsWith('.js'));
for (const file of pendingFiles) {
  const candidatePath = path.join(pendingDir, file);
  try {
    const candidate = require(candidatePath);
    const existingId = String(candidate?.question?.metadata?.id || candidate?.question?.id || '');
    if (existingId === id) fail('This ID is already used by pending candidate ' + file + '.');
  } catch (error) {
    if (String(error.message).startsWith('Candidate import stopped:')) throw error;
    fail('Could not safely inspect existing candidate ' + file + ': ' + error.message);
  }
}

const normalized = schema.normalize({ ...question });
const issues = schema.validate(normalized, 0);
if (issues.length) {
  console.error('Question does not pass QuickRN schema-v2 validation:');
  for (const issue of issues) console.error('- ' + issue.code + ': ' + issue.message);
  process.exit(1);
}

const candidate = {
  review: {
    status: 'pending_review',
    submittedAt: new Date().toISOString(),
    submittedBy,
    reviewer: null,
    reviewedAt: null,
    decisionNote: ''
  },
  question: normalized
};

// Serialize only JSON data into a JS module. Never interpolate executable input.
const moduleSource = "'use strict';\n\nmodule.exports = " +
  JSON.stringify(candidate, null, 2) + ';\n';
fs.writeFileSync(destination, moduleSource, { flag: 'wx' });

console.log('Imported candidate: ' + path.relative(root, destination));
console.log('Format: ' + normalized.interaction.type);
console.log('ID: ' + id);
console.log('Status: pending_review — educator approval required.');
console.log('The active question bank was not changed.');
