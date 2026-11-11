# Source-grounded question generation and direct publishing

QuickRN can now create original questions from public clinical evidence and publish validated batches directly into the canonical JavaScript bank. A nurse-educator approval step is not required by this publishing path.

## What the pipeline does

1. Research the clinical concept using current authoritative sources.
2. Synthesize the underlying clinical principle and invent a new patient, setting, cues, options, and decision point.
3. Generate the required QuickRN schema-v2 format with answer keys, rationales, CJMM metadata, and source references.
4. Run `scripts/publish-question-batch.js batch.json` to validate structure, unique IDs, source-reference fields, and required rationale metadata.
5. Run the full repository test suite and deploy only after CI passes.

The publisher writes to `data/question-bank.js` and does not use the legacy pending-review folder.

## Source hierarchy

Prefer primary and authoritative resources:
- NCSBN / NCLEX test plans for Client Needs, clinical judgment, and examination blueprint. The 2026 RN test plan is effective April 1, 2026 through March 31, 2029.
- CDC for infection prevention, sepsis, immunization, and public-health recommendations.
- NIH / NLM / MedlinePlus for reviewed disease and health-topic background.
- AHRQ for patient safety and quality-improvement tools.
- FDA for medication safety alerts, labeling changes, and drug information.
- WHO and relevant professional societies for current guidelines where applicable.

Useful starting points:
- https://www.nclex.com/test-plans.page
- https://www.cdc.gov/infection-control/hcp/core-practices/
- https://www.cdc.gov/sepsis/hcp/clinical-care/
- https://medlineplus.gov/healthtopics.html
- https://www.ahrq.gov/patient-safety/settings/hospital/fall-tips/index.html
- https://www.fda.gov/drugs/information-health-care-professionals-drugs/drug-safety-information

## Originality and copyright rules

Do not copy or lightly paraphrase questions, rationales, answer options, or case narratives from commercial question banks, prep websites, copyrighted textbooks, or live NCLEX materials. Changing names, ages, numbers, or a few words does not make a copied item original. Use sources for clinical facts only, then independently create a new assessment scenario and decision task.

## Automated checks and limitations

The publisher verifies schema structure, ID uniqueness, source-reference presence, HTTPS URLs, and minimum rationale metadata. CI additionally exercises rendering, answer capture, grading, and NGN scoring.

These automated checks do not verify:
- whether a source actually supports each clinical claim;
- whether the newest local or specialty guideline supersedes the cited source;
- whether the item has one defensible key in every clinical context;
- whether medication doses, contraindications, or clinical thresholds are safe in all jurisdictions.

Every item must therefore retain its source references and be treated as AI-generated educational practice content, not official NCLEX material or a substitute for clinical judgment. Do not label items “clinically certified” or “educator-approved” unless that separate process actually occurs.

## Batch command

```bash
node scripts/publish-question-batch.js generated-batch.json
```

Input may be an array or an object with a `questions` array. IDs must be unique `QR-######` values and source references must include a title and HTTPS URL. The publisher refuses the entire batch if any item fails checks; no partial batch is written.
