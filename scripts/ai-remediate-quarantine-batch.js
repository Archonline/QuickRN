#!/usr/bin/env node
'use strict';

/**
 * QuickRN free offline question-bank integrity audit.
 * Loads the same effective bank as the production validator, including generated
 * batches 005/006 and post-generation overrides. Writes revisions into the
 * owning source module so generator logic cannot silently overwrite them.
 */
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const ROOT = path.resolve(__dirname, '..');
const LIMIT = 25;
const ENGINE = 'quickrn-offline-integrity-rules-v1';
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
    (q.remediationStatus.startsWith('ai_revised_') ||
     q.remediationStatus.startsWith('manual_revised_') ||
     q.remediationStatus === 'rules_checked_pending_webmaster_review');
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
function auditQuestion(q) {
  const issues = [];
  const add = (code, detail) => issues.push({ code, detail });
  const stem = String(q.question || q.questionText || q.question_text || q.stem || q.prompt || q.title || '').trim();
  if (!stem) add('missing_stem', 'No non-empty question/title stem was found.');
  const options = Array.isArray(q.options) ? q.options : (Array.isArray(q.choices) ? q.choices : []);
  const format = String(q.ngnType || q.type || '').toLowerCase();
  const multi = /multiple|select all|matrix|bow.?tie|ordered|highlight|cloze|drop.?down/.test(format);
  if (!options.length && !/numeric|highlight|hot.?spot|ordered response/.test(format)) {
    add('missing_options', 'No option array was found for this item format.');
  }
  const normalizedOptions = options.map(o => String(typeof o === 'string' ? o : (o && (o.text || o.label || o.value)) || '').trim().toLowerCase()).filter(Boolean);
  if (new Set(normalizedOptions).size !== normalizedOptions.length) add('duplicate_options', 'Two or more answer options have identical normalized text.');
  const answer = q.correctAnswer ?? q.answer ?? q.correctAnswers ?? q.answerKey ?? q.correctOption ?? q.correctOptions;
  if (answer === undefined || answer === null || answer === '' || (Array.isArray(answer) && !answer.length)) {
    add('missing_answer_key', 'No populated answer-key field was found.');
  }
  if (!multi && Array.isArray(answer) && answer.length > 1 && /single|multiple choice/.test(format)) {
    add('answer_format_mismatch', 'Multiple answer keys appear on a single-response format.');
  }
  const rationale = String(q.rationale || q.explanation || q.feedback || '').trim();
  if (!rationale) add('missing_rationale', 'No item-specific rationale field was found.');
  const contentForTemplateCheck = [stem, q.scenario, q.patientProfile, q.patientInfo, q.clinicalRecord, rationale, ...normalizedOptions].filter(Boolean).join(' ').toLowerCase();
  const templatePatterns = [
    /the acute cue described in the clinical record/,
    /a stable chronic finding/,
    /a routine preference/,
    /an unrelated task/,
    /initiate the indicated urgent response/,
    /reassess and trend the abnormal findings/,
    /delay until routine rounds/,
    /ignore the change/
  ];
  if (templatePatterns.some(pattern => pattern.test(contentForTemplateCheck))) {
    add('template_or_generic_content', 'Contains a known generic/template phrase; substantive item rewrite is still required.');
  }
  for (const key of ['caseGroupId','caseStudyId','patientProfile','tabs']) {
    if (typeof q[key] === 'string' && !q[key].trim()) {
      delete q[key];
      add('empty_metadata_removed', 'Removed empty-string metadata field: ' + key + '.');
    }
  }
  if (/case|matrix|bow.?tie|trend|cloze/.test(format) || q.caseStudyContext || q.caseGroupId || q.caseStudyId) {
    const hasClinicalRecord = Boolean(q.patientProfile || q.patientInfo || q.tabs || q.ehr || q.clinicalRecord || q.exhibits || q.clinicalExhibits);
    if (!hasClinicalRecord) add('missing_case_exhibits', 'Case/NGN-style item has no recognized patient record or exhibit field.');
  }
  const flags = new Set(Array.isArray(q.qualityFlags) ? q.qualityFlags : []);
  flags.delete('pending_nurse_educator_review');
  flags.add('pending_webmaster_review');
  q.qualityFlags = [...flags];
  q.reviewStatus = 'pending_webmaster_review';
  q.remediationStatus = 'rules_checked_pending_webmaster_review';
  q.ruleAudit = {
    engine: 'quickrn-offline-integrity-rules-v1',
    checkedAt: new Date().toISOString(),
    issueCount: issues.filter(x => x.code !== 'empty_metadata_removed').length,
    issues
  };
  return q;
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
      engine: ENGINE,
      effectiveRuntimeRecords: bank.length,
      eligibleUnprocessedRecords: candidates.length,
      batchLimit: LIMIT,
      eligibleBySource: counts,
      nextBatch: candidates.slice(0, LIMIT).map(q => ({ id: q.id, source: ownerById.get(String(q.id)) }))
    }, null, 2));
    return;
  }
  const batch = candidates.slice(0, LIMIT);
  if (!batch.length) {
    console.log('No eligible, unprocessed quarantined items found in the effective runtime bank for batches 004–009.');
    return;
  }
  const revisionsByFile = new Map();
  const reportRows = [];
  let issueCount = 0, safeFixCount = 0;
  for (const original of batch) {
    const file = ownerById.get(String(original.id));
    const revised = auditQuestion(jsonClone(original));
    const issues = revised.ruleAudit.issues;
    issueCount += issues.filter(x => x.code !== 'empty_metadata_removed').length;
    safeFixCount += issues.filter(x => x.code === 'empty_metadata_removed').length;
    if (!revisionsByFile.has(file)) revisionsByFile.set(file, []);
    revisionsByFile.get(file).push(revised);
    reportRows.push({ id: revised.id, source: file, status: revised.remediationStatus,
      issues: issues.map(x => x.code).join(', ') || 'no structural issue detected' });
    console.log('Audited ' + revised.id + ' from ' + file + ' (' + issues.length + ' findings)');
  }
  for (const [file, records] of revisionsByFile) writeOverrides(file, records);
  const date = new Date().toISOString().replace(/[:.]/g, '-');
  const outDir = path.join(ROOT, 'reports', 'ai-remediation');
  fs.mkdirSync(outDir, { recursive: true });
  const report = [
    '# QuickRN free offline question-bank integrity audit',
    '',
    '- Run: ' + (process.env.GITHUB_RUN_ID || 'local'),
    '- Date (UTC): ' + new Date().toISOString(),
    '- Engine: ' + ENGINE,
    '- Maximum batch size: ' + LIMIT,
    '- Effective runtime bank records: ' + bank.length,
    '- Items audited: ' + batch.length,
    '- Structural findings: ' + issueCount,
    '- Safe empty-metadata fields removed: ' + safeFixCount,
    '- Clinical content rewritten: 0 (no language model is configured)',
    '- Review ownership: webmaster; no nurse-educator approval gate.',
    '- Important: a clean structural audit is not evidence of clinical correctness or educator approval.',
    '',
    '| Question ID | Source file | Findings |',
    '|---|---|---|',
    ...reportRows.map(r => '| ' + r.id + ' | ' + r.source + ' | ' + r.issues.replace(/[|\r\n]/g, ' ').slice(0, 300) + ' |')
  ].join('\n') + '\n';
  fs.writeFileSync(path.join(outDir, 'run-' + date + '.md'), report);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report);
  console.log(report);
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
