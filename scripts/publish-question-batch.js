#!/usr/bin/env node
'use strict';

/*
 * Publish a source-grounded batch directly into the canonical .js bank.
 * No educator approval gate is used. This script performs structural,
 * provenance-presence, duplicate-ID, and basic item-completeness checks only;
 * it cannot certify clinical accuracy or verify that a citation supports a claim.
 *
 * Usage: node scripts/publish-question-batch.js generated-batch.json
 */
const fs = require('node:fs');
const path = require('node:path');
const schema = require('../js/quickrn-question-schema-v2.js');
const root = path.resolve(__dirname, '..');
const bankFile = path.join(root, 'data', 'question-bank.js');
const inputFile = process.argv[2];
function fail(message) { console.error('Publish stopped: ' + message); process.exit(1); }
if (!inputFile) fail('Provide a JSON file containing { "questions": [...] }.');
let payload;
try { payload = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), inputFile), 'utf8')); }
catch (e) { fail('Input must be valid JSON: ' + e.message); }
const questions = Array.isArray(payload) ? payload : payload && payload.questions;
if (!Array.isArray(questions) || !questions.length) fail('No questions found.');
let source = fs.readFileSync(bankFile, 'utf8');
const match = source.match(/const bank\s*=\s*(\[[\s\S]*?\]);/);
if (!match) fail('Could not safely locate the canonical JSON bank array.');
let existing;
try { existing = JSON.parse(match[1]); }
catch (e) { fail('Existing bank is not a JSON array: ' + e.message); }
if (!Array.isArray(existing)) fail('Canonical bank is not an array.');
const ids = new Set(existing.map(q => String(q?.metadata?.id || q?.id || '')));
const normalizedBatch = [];
const errors = [];
questions.forEach((raw, index) => {
 const q = raw && raw.question && typeof raw.question === 'object' ? raw.question : raw;
 const label = 'Item ' + (index + 1);
 if (!q || typeof q !== 'object' || Array.isArray(q)) { errors.push(label + ': expected an object'); return; }
 const id = String(q.metadata?.id || q.id || '').trim();
 if (!/^QR-\d{6}$/.test(id)) { errors.push(label + ': ID must match QR-######'); return; }
 if (ids.has(id)) { errors.push(label + ': duplicate ID ' + id); return; }
 if (!Array.isArray(q.sourceReferences) || q.sourceReferences.length < 1) errors.push(label + ': at least one sourceReferences entry is required');
 else q.sourceReferences.forEach((ref, ri) => {
  if (!ref || typeof ref.title !== 'string' || !ref.title.trim() || typeof ref.url !== 'string' || !/^https:\/\//i.test(ref.url)) errors.push(label + ': source reference ' + (ri + 1) + ' needs a title and HTTPS URL');
 });
 if (!Array.isArray(q.evidenceLimitations)) q.evidenceLimitations = [];
 if (typeof q.rationale !== 'string' || q.rationale.trim().length < 40) errors.push(label + ': rationale must explain the clinical reasoning (at least 40 characters)');
 if (!q.optionRationales || typeof q.optionRationales !== 'object' || !Object.keys(q.optionRationales).length) errors.push(label + ': optionRationales is required');
 if (!q.clinicalJudgmentTip || String(q.clinicalJudgmentTip).trim().length < 10) errors.push(label + ': clinicalJudgmentTip is required');
 if (!q.metadata || String(q.metadata.id || '') !== id) errors.push(label + ': metadata.id must match id');
 if (errors.some(e => e.startsWith(label + ':'))) return;
 try {
  const normalized = schema.normalize({ ...q });
  const issues = schema.validate(normalized, index);
  if (issues.length) { errors.push(label + ' (' + id + '): ' + issues.map(x => x.code + ': ' + x.message).join('; ')); return; }
  ids.add(id);
  normalizedBatch.push(normalized);
 } catch (e) { errors.push(label + ' (' + id + '): ' + e.message); }
});
if (errors.length) { console.error('No questions published. ' + errors.length + ' issue(s):'); errors.forEach(e => console.error('- ' + e)); process.exit(1); }
const next = existing.concat(normalizedBatch);
const replacement = 'const bank=' + JSON.stringify(next, null, 2) + ';';
source = source.replace(match[0], replacement);
const temp = bankFile + '.tmp';
fs.writeFileSync(temp, source, 'utf8');
try {
 const check = fs.readFileSync(temp, 'utf8');
 if (!check.includes(replacement)) throw new Error('post-write verification failed');
 JSON.parse(check.match(/const bank\s*=\s*(\[[\s\S]*?\]);/)[1]);
 fs.renameSync(temp, bankFile);
} catch (e) {
 try { fs.unlinkSync(temp); } catch (_) {}
 fail('Could not safely replace bank file: ' + e.message);
}
console.log('Published ' + normalizedBatch.length + ' source-grounded item(s) to data/question-bank.js.');
console.log('Active bank total: ' + next.length + '. Run the full validation suite before deployment.');
console.log('Note: automated checks do not verify clinical correctness or source-to-claim support.');
