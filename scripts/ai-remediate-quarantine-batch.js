#!/usr/bin/env node
'use strict';

/**
 * QuickRN AI-assisted remediation worker.
 * Rewrites at most 25 quarantined records per run. All clinical changes remain
 * quarantined and explicitly pending nurse-educator review.
 */
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..');
const LIMIT = 25;
const MODEL = process.env.OPENAI_MODEL || 'gpt-6';
const SOURCES = [
  'questions-bank-ngn-distinct-case-studies-2026-11-04-batch-009.js',
  'questions-bank-matrix-grid-2026-11-04-batch-008.js',
  'questions-bank-numeric-entry-2026-11-04-batch-007.js',
  'questions-bank-ngn-expansion-2026-11-04-batch-004.js'
];

function extractItems(source, file) {
  const match = /const\s+items\s*=\s*/.exec(source);
  if (!match) throw new Error(file + ': no literal const items array; refusing to modify generated content');
  const start = match.index + match[0].length;
  if (source[start] !== '[') throw new Error(file + ': items is not a literal array');
  let depth = 0, quote = null, escaped = false, end = -1;
  for (let i = start; i < source.length; i++) {
    const ch = source[i];
    if (quote) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === quote) quote = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { quote = ch; continue; }
    if (ch === '/' && source[i + 1] === '/') {
      const nl = source.indexOf('\n', i); i = nl < 0 ? source.length : nl; continue;
    }
    if (ch === '/' && source[i + 1] === '*') {
      const close = source.indexOf('*/', i + 2); if (close < 0) throw new Error(file + ': unterminated comment'); i = close + 1; continue;
    }
    if (ch === '[') depth++;
    if (ch === ']' && --depth === 0) { end = i + 1; break; }
  }
  if (end < 0) throw new Error(file + ': could not locate end of items array');
  const jsonText = source.slice(start, end);
  let items;
  try { items = JSON.parse(jsonText); } catch (e) { throw new Error(file + ': literal array is not strict JSON: ' + e.message); }
  if (!Array.isArray(items)) throw new Error(file + ': items is not an array');
  return { items, start, end };
}

function isAlreadyRemediated(q) {
  return q && typeof q.remediationStatus === 'string' && q.remediationStatus.startsWith('ai_revised_');
}
function isCandidate(q) {
  if (!q || !q.id || isAlreadyRemediated(q)) return false;
  const flags = Array.isArray(q.qualityFlags) ? q.qualityFlags : [];
  // Earlier hand-remediated records with only the educator-review flag must not be reprocessed.
  if (flags.length === 1 && flags[0] === 'pending_nurse_educator_review') return false;
  return q.reviewStatus === 'quarantined_content_quality' ||
    flags.some(f => /placeholder|template|synthetic|incomplete|weak|generic|unsafe|malformed|missing|duplicate|clinical_judgment/i.test(String(f)));
}

async function reviseQuestion(original) {
  const instructions = [
    'You are an NCLEX-RN item-development assistant preparing a proposed revision for a qualified nurse educator.',
    'Return one JSON object only, representing the complete revised question record. Preserve the exact id and existing question format.',
    'Substantively improve clinical decision-making, specificity, realistic and discriminating distractors, answer-key correctness, and item-specific rationales.',
    'Do not invent patient facts, laboratory values, medication orders, or guideline claims that are not supported by the supplied record. If essential clinical context is absent, retain the record and add a clear remediationNote identifying what evidence/context is needed rather than fabricating it.',
    'Preserve all schema-relevant fields, case links, patient profile and EHR exhibits unless a specific correction is necessary. For numeric items, verify units, formula, dose/concentration, rounding and answer tolerance. For matrix/bowtie/cloze/highlight/ordered items, preserve the format and make the key map unambiguous.',
    'Rationales must be specific to this item and explain why the correct response is best; do not use generic filler. Avoid asserting an unverified guideline as fact.',
    'Set reviewStatus to quarantined_content_quality. Set remediationStatus to ai_revised_pending_educator_review. Add qualityFlags including pending_nurse_educator_review. Never mark approved, validated, or ready for student use.',
    'If safe, meaningful revision is not possible from the supplied data, return the original record unchanged except add remediationNote explaining the blocker and remediationStatus ai_revised_needs_source_review. Do not guess.',
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
  if ((revised.ngnType || revised.type) !== (original.ngnType || original.type)) throw new Error('Model changed question format');
  const merged = { ...original, ...revised };
  merged.id = original.id;
  for (const key of ['caseGroupId','caseStudyId','caseStudyContext','patientProfile','tabs','ehr','clinicalRecord','type','ngnType']) {
    if (original[key] !== undefined && merged[key] === undefined) merged[key] = original[key];
  }
  merged.reviewStatus = 'quarantined_content_quality';
  merged.remediationStatus = revised.remediationStatus === 'ai_revised_needs_source_review'
    ? 'ai_revised_needs_source_review' : 'ai_revised_pending_educator_review';
  const flags = new Set([...(Array.isArray(original.qualityFlags) ? original.qualityFlags : []),
    ...(Array.isArray(revised.qualityFlags) ? revised.qualityFlags : []), 'pending_nurse_educator_review']);
  merged.qualityFlags = [...flags];
  merged.remediationModel = MODEL;
  return merged;
}

async function main() {
  if (!process.env.OPENAI_API_KEY) throw new Error('OPENAI_API_KEY is required; no changes made');
  const parsed = [];
  for (const file of SOURCES) {
    const full = path.join(ROOT, file);
    if (!fs.existsSync(full)) continue;
    const source = fs.readFileSync(full, 'utf8');
    const extracted = extractItems(source, file);
    parsed.push({ file, full, source, ...extracted });
  }
  const candidates = [];
  for (const entry of parsed) for (let i = 0; i < entry.items.length; i++) {
    if (isCandidate(entry.items[i])) candidates.push({ entry, index: i, original: entry.items[i] });
  }
  const batch = candidates.slice(0, LIMIT);
  if (!batch.length) {
    console.log('No eligible quarantined items found in supported literal-array batches.');
    return;
  }
  const reportRows = [];
  let revisedCount = 0, needsSource = 0;
  for (const candidate of batch) {
    try {
      const revised = await reviseQuestion(candidate.original);
      candidate.entry.items[candidate.index] = revised;
      if (revised.remediationStatus === 'ai_revised_needs_source_review') needsSource++;
      else revisedCount++;
      reportRows.push({ id: revised.id, source: candidate.entry.file, status: revised.remediationStatus,
        note: revised.remediationNote || 'Proposed revision retained in quarantine for educator review.' });
      console.log('Processed ' + revised.id + ' -> ' + revised.remediationStatus);
    } catch (error) {
      reportRows.push({ id: candidate.original.id, source: candidate.entry.file, status: 'failed_no_change', note: String(error) });
      console.error('Failed ' + candidate.original.id + ': ' + error.message);
    }
  }
  for (const entry of parsed) {
    if (!batch.some(x => x.entry === entry)) continue;
    const nextArray = JSON.stringify(entry.items);
    const nextSource = entry.source.slice(0, entry.start) + nextArray + entry.source.slice(entry.end);
    if (nextSource !== entry.source) fs.writeFileSync(entry.full, nextSource + (entry.source.endsWith('\n') ? '' : '\n'));
  }
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
    '- Items attempted: ' + batch.length,
    '- Proposed revisions: ' + revisedCount,
    '- Held for source/context review: ' + needsSource,
    '- Failed without content change: ' + reportRows.filter(x => x.status === 'failed_no_change').length,
    '- Clinical release status: all records remain quarantined pending qualified nurse-educator review.',
    '',
    '| Question ID | Source file | Status | Note |',
    '|---|---|---|---|',
    ...reportRows.map(r => '| ' + r.id + ' | ' + r.source + ' | ' + r.status + ' | ' + String(r.note).replace(/[|\n]/g, ' ').slice(0, 300) + ' |')
  ].join('\n') + '\n';
  fs.writeFileSync(path.join(outDir, 'run-' + date + '.md'), report);
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, report);
  console.log(report);
}
main().catch(error => { console.error(error.stack || error); process.exit(1); });
