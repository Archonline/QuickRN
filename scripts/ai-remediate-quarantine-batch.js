#!/usr/bin/env node
'use strict';

/**
 * QuickRN AI-assisted question remediation.
 * Loads the same effective bank as the production validator, including generated
 * batches 005/006 and post-generation overrides. Writes revisions into the
 * owning source module so generator logic cannot silently overwrite them.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const LIMIT = 25;
const MODEL = process.env.OPENAI_MODEL || 'gpt-6';
const BASE_AND_MODULES = [
  'questions.js',
  'js/quickrn-ngn-case-study-addon.js',
  'questions-ngn-supplement.js',
  'questions-bank-v2.js',
  'questions-bank-v2-curated.js',
  'questions-bank-v3-clinical.js',
  'questions-bank-expansion-2026-11-04.js',
  'questions-bank-expansion-2026-11-04-batch-002.js',
  'questions-bank-expansion-2026-11-04-batch-003.js',
  'questions-bank-ngn-expansion-2026-11-04-batch-004.js',
  'questions-bank-ngn-case-studies-2026-11-04-batch-005.js',
  'questions-bank-ngn-supplement-2026-11-04-batch-006.js',
  'questions-bank-numeric-entry-2026-11-04-batch-007.js',
  'questions-bank-matrix-grid-2026-11-04-batch-008.js',
  'questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js',
  'questions-bank-ngn-priority-2026-11-04-batch-007.js'
];
const REMEDIABLE = new Set(BASE_AND_MODULES.filter(x => /batch-00[4-9]\.js$/.test(x)));
const OVERRIDE_START = '/* QUICKRN_AI_REMEDIATION_OVERRIDES_BEGIN */';
const OVERRIDE_END = '/* QUICKRN_AI_REMEDIATION_OVERRIDES_END */';

function jsonClone(value) {
  return JSON.parse(JSON.stringify(value));
}
function serialize(value) {
  try { return JSON.stringify(value); } catch { return ''; }
}
function isAlreadyRemediated(q) {
  return q && typeof q.remediationStatus === 'string' &&
    (q.remediationStatus.startsWith('ai_revised_') || q.remediationStatus.startsWith('manual_revised_'));
}
function isCandidate(q) {
  if (!q || !q.id || isAlreadyRemediated(q)) return false;
  const flags = Array.isArray(q.qualityFlags) ? q.qualityFlags : [];
  // Preserve earlier manually rewritten items; a lone legacy educator flag is not a remediation defect.
  if (flags.length === 1 && flags[0] === 'pending_nurse_educator_review') return false;
  return q.reviewStatus === 'quarantined_content_quality' ||
    flags.some(f => /placeholder|template|synthetic|incomplete|weak|generic|unsafe|malformed|missing|duplicate|clinical_judgment|case_sequence|numeric_calculations|answer_key/i.test(String(f)));
}
function loadEffectiveBank() {
  const browserWindow = {};
  const context = vm.createContext({ console, window: browserWindow });
  const ownerById = new Map();
  const snapshots = new Map();
  for (const file of BASE_AND_MODULES) {
    const full = path.join(ROOT, file);
    if (!fs.existsSync(full)) continue;
    const before = new Map((Array.isArray(context.questions) ? context.questions : []).map(q => [String(q && q.id || ''), serialize(q)]));
    vm.runInContext(fs.readFileSync(full, 'utf8'), context, { timeout: 120000, filename: full });
    if (file === 'questions.js') {
      context.questions = context.questions || browserWindow.questions || [];
      context.window = context;
      context.globalThis = context;
    }
    const bank = Array.isArray(context.questions) ? context.questions : [];
    for (const q of bank) {
      if (!q || !q.id) continue;
      const id = String(q.id);
      const next = serialize(q);
      if (before.get(id) !== next && REMEDIABLE.has(file)) ownerById.set(id, file);
      snapshots.set(id, next);
    }
  }
  if (!Array.isArray(context.questions)) throw new Error('Production question loader did not produce a questions array');
  return { bank: context.questions, ownerById };
}
function extractExistingOverrides(source, file) {
  const start = source.indexOf(OVERRIDE_START);
  const end = source.indexOf(OVERRIDE_END);
  if (start < 0 && end < 0) return [];
  if (start < 0 || end < start) throw new Error(file + ': malformed AI override block');
  const block = source.slice(start + OVERRIDE_START.length, end);
  const match = /const\s+overrides\s*=\s*(\[[\s\S]*?\]);/.exec(block);
  if (!match) throw new Error(file + ': could not parse existing AI overrides');
  return JSON.parse(match[1]);
}
function writeOverrides(file, revisedRecords) {
  const full = path.join(ROOT, file);
  const source = fs.readFileSync(full, 'utf8');
  const old = extractExistingOverrides(source, file);
  const map = new Map(old.map(q => [String(q.id), q]));
  revisedRecords.forEach(q => map.set(String(q.id), q));
  const records = [...map.values()];
  const block = [
    OVERRIDE_START,
    '(function(root){',
    "  'use strict';",
    '  const overrides = ' + JSON.stringify(records) + ';',
    "  const bank = Array.isArray(root.questions) ? root.questions : (root.questions = []);",
    '  for (const revised of overrides) {',
    '    const index = bank.findIndex(q => String(q && q.id || \"\") === String(revised.id));',
    '    if (index >= 0) bank[index] = Object.assign({}, bank[index], revised);',
    '    else bank.push(revised);',
    '  }',
    '  root.questions = bank;',
    "})(typeof window !== 'undefined' ? window : globalThis);",
    OVERRIDE_END
  ].join('\n');
  const start = source.indexOf(OVERRIDE_START);
  const end = source.indexOf(OVERRIDE_END);
  const next = start >= 0
    ? source.slice(0, start) + block + source.slice(end + OVERRIDE_END.length)
    : source.replace(/\s*$/, '\n\n') + block + '\n';
  fs.writeFileSync(full, next);
}
async function reviseQuestion(original) {
  const instructions = [
    'You are an NCLEX-RN item-development assistant. Return one JSON object only: the complete revised question record.',
    'Preserve the exact question ID, clinical topic, case linkage, and question format unless the current format or answer structure is demonstrably inconsistent with the stem; if correcting such an inconsistency, make the format and answer structure internally consistent.',
    'Substantively improve clinical decision-making, specificity, realistic and discriminating distractors, answer-key correctness, and item-specific rationales.',
    'Do not invent patient facts, laboratory values, medication orders, or guideline claims not supported by the supplied record. If essential context is absent, retain the item and add remediationNote identifying the missing evidence rather than fabricating it.',
    'Preserve all schema-relevant fields, case links, patient profile and EHR exhibits unless a specific correction is necessary. For numeric items, verify units, formula, dose/concentration, rounding and answer tolerance. For matrix/bowtie/cloze/highlight/ordered items, preserve the format and make the key map unambiguous.',
    'Rationales must be specific to this item and explain why the correct response is best; avoid generic filler and unverified guideline claims.',
    'Set reviewStatus to pending_webmaster_review. Set remediationStatus to ai_revised_pending_webmaster_review. Remove pending_nurse_educator_review from qualityFlags and add pending_webmaster_review. Do not mark approved or clinically validated.',
    'If safe, meaningful revision is not possible from the supplied data, return the original record unchanged except add remediationNote and set remediationStatus to ai_revised_needs_webmaster_review. Do not guess.',
    'Return JSON only.'
  ].join(' ');
  const response = await fetch('https://api.openai.com/v1/responses', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + process.env.OPENAI_API_KEY, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: MODEL,
      instructions,
      input: JSON.stringify(original),
      text: { format: { type: 'json_object' } },
      max_output_tokens: 5000
    })
  });
  const body = await response.json();
  if (!response.ok) throw new Error('OpenAI API ' + response.status + ': ' + JSON.stringify(body).slice(0, 1000));
  const output = (body.output || []).flatMap(x => x.content || []).find(x => x.type === 'output_text')?.text || body.output_text;
  if (!output) throw new Error('Model returned no output_text');
  const revised = JSON.parse(output);
  if (!revised || typeof revised !== 'object' || Array.isArray(revised)) throw new Error('Model output was not a question object');
  if (String(revised.id) !== String(original.id)) throw new Error('Model changed question ID');
  const originalFormat = String(original.ngnType || original.type || '');
  const revisedFormat = String(revised.ngnType || revised.type || '');
  if (originalFormat && revisedFormat && originalFormat !== revisedFormat &&
      !(originalFormat === 'Multiple Response' && revisedFormat === 'Single Choice')) {
    throw new Error('Model changed question format without an allowed answer-structure correction');
  }
  const merged = { ...original, ...revised, id: original.id };
  for (const key of ['caseGroupId','caseStudyId','caseStudyContext','patientProfile','patientInfo','tabs','ehr','clinicalRecord','type','ngnType']) {
    if (original[key] !== undefined && merged[key] === undefined) merged[key] = original[key];
  }
  merged.reviewStatus = 'pending_webmaster_review';
  merged.remediationStatus = revised.remediationStatus === 'ai_revised_needs_webmaster_review'
    ? 'ai_revised_needs_webmaster_review' : 'ai_revised_pending_webmaster_review';
  const flags = new Set([...(Array.isArray(original.qualityFlags) ? original.qualityFlags : []),
    ...(Array.isArray(revised.qualityFlags) ? revised.qualityFlags : [])]);
  flags.delete('pending_nurse_educator_review');
  flags.add('pending_webmaster_review');
  merged.qualityFlags = [...flags];
  merged.remediationModel = MODEL;
  return merged;
}
async function main() {
  const { bank, ownerById } = loadEffectiveBank();
  const candidates = bank.filter(q => isCandidate(q) && REMEDIABLE.has(ownerById.get(String(q.id))));
  if (process.argv.includes('--dry-run')) {
    const counts = {};
    for (const q of candidates) {
      const source = ownerById.get(String(q.id));
      counts[source] = (counts[source] || 0) + 1;
    }
    console.log(JSON.stringify({
      effectiveRuntimeRecords: bank.length,
      eligibleUnrevisedRecords: candidates.length,
      batchLimit: LIMIT,
      eligibleBySource: counts,
      nextBatch: candidates.slice(0, LIMIT).map(q => ({ id: q.id, source: ownerById.get(String(q.id)) }))
    }, null, 2));
    return;
  }
  if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is required; no changes made');
  const batch = candidates.slice(0, LIMIT);
  if (!batch.length) {
    console.log('No eligible, unrevised quarantined items found in the effective runtime bank for batches 004–009.');
    return;
  }
  const revisionsByFile = new Map();
  const reportRows = [];
  let revisedCount = 0, needsWebmaster = 0;
  for (const original of batch) {
    const file = ownerById.get(String(original.id));
    try {
      const revised = await reviseQuestion(jsonClone(original));
      if (!revisionsByFile.has(file)) revisionsByFile.set(file, []);
      revisionsByFile.get(file).push(revised);
      if (revised.remediationStatus === 'ai_revised_needs_webmaster_review') needsWebmaster++;
      else revisedCount++;
      reportRows.push({ id: revised.id, source: file, status: revised.remediationStatus,
        note: revised.remediationNote || 'AI revision saved for webmaster review after deployment.' });
      console.log('Processed ' + revised.id + ' from ' + file + ' -> ' + revised.remediationStatus);
    } catch (error) {
      // A rejected credential is a run-level configuration failure, not 25 item failures.
      // Abort immediately so the workflow cannot waste API calls or report a false success.
      if (/OpenAI API (401|403)/.test(String(error.message))) {
        throw new Error('OpenAI authentication failed. Replace the repository secret OPENAI_API_KEY with a valid API key; no question content was changed. Original response: ' + error.message);
      }
      reportRows.push({ id: original.id, source: file, status: 'failed_no_change', note: String(error) });
      console.error('Failed ' + original.id + ': ' + error.message);
    }
  }
  for (const [file, records] of revisionsByFile) writeOverrides(file, records);
  const date = new Date().toISOString().replace(/[:.]/g, '-');
  const outDir = path.join(ROOT, 'reports', 'ai-remediation');
  fs.mkdirSync(outDir, { recursive: true });
  const report = [
    '# QuickRN AI remediation run',
    '',
    '- Run: ' + (process.env.GITHUB_RUN_ID || 'local'),
    '- Date (UTC): ' + new Date().toISOString(),
    '- Model: ' + MODEL,
    '- Maximum batch size: ' + LIMIT,
    '- Effective runtime bank records: ' + bank.length,
    '- Items attempted: ' + batch.length,
    '- Proposed revisions: ' + revisedCount,
    '- Held for webmaster source/context review: ' + needsWebmaster,
    '- Failed without content change: ' + reportRows.filter(x => x.status === 'failed_no_change').length,
    '- Review ownership: webmaster; no nurse-educator approval gate.',
    '',
    '| Question ID | Source file | Status | Note |',
    '|---|---|---|---|',
    ...reportRows.map(r => '| ' + r.id + ' | ' + r.source + ' | ' + r.status + ' | ' + String(r.note).replace(/[|\\n]/g, ' ').slice(0, 300) + ' |')
  ].join('\n') + '\n';
  fs.writeFileSync(path.join(outDir, 'run-' + date + '.md'), report);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report);
  console.log(report);
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
