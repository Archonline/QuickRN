# QuickRN free question-bank integrity bot

The workflow is `.github/workflows/quickrn-ai-question-remediation.yml`. It runs every 15 minutes, can be started manually, and runs immediately when its workflow or worker implementation changes on `main`.

## No API key or paid AI service required

- No `OPENAI_API_KEY`, model API, or external inference endpoint is used.
- No API secret or paid model subscription is required.
- The worker runs deterministic Node.js checks on GitHub Actions and applies only safe metadata cleanup.
- GitHub Actions usage may still be subject to GitHub plan limits. Standard runners are free for public repositories; private repositories use the plan's included minutes. See [GitHub Actions billing](https://docs.github.com/en/actions/concepts/billing-and-usage).

## What the offline bot does

- Audits up to 25 eligible questions per run from the effective runtime bank, including batches 004–009.
- Checks for missing stems, missing options, duplicate option text, missing answer keys, likely answer-format mismatches, missing rationales, and missing case/EHR exhibits.
- Removes only known empty-string metadata fields (`caseGroupId`, `caseStudyId`, `patientProfile`, and `tabs`) where the field is literally an empty string.
- Records findings in each question's `ruleAudit` field and preserves the original question content and answer key.
- Marks the webmaster as review owner; there is no nurse-educator approval gate.
- Writes persistent source-level overrides so a generated batch cannot silently overwrite audit metadata.
- Produces a dated report in `reports/ai-remediation/` and the GitHub Actions job summary.
- Commits audit metadata, safe fixes, and reports to `main`. Bot commits do not match the workflow's push trigger paths and cannot create an immediate self-trigger loop.

## Important clinical limitation

This is an offline integrity and triage bot, **not an AI clinical author**. It does not rewrite stems, invent patient findings, choose clinical answers, or certify NCLEX quality. A structural check cannot establish that a nursing intervention, rationale, dosage, or clinical priority is correct. Those findings remain for the webmaster's post-deployment review.

## Optional future local-model enhancement

For actual language-model rewriting without API charges, run Ollama or another open model on hardware you control and connect a self-hosted GitHub Actions runner to that machine. That is not enabled by this workflow: a normal GitHub-hosted runner cannot call a model running only on your personal computer. Ollama runs models locally; see [Ollama](https://github.com/ollama/ollama) and [GitHub self-hosted runners](https://docs.github.com/en/actions/reference/runners/self-hosted-runners).

## Monitoring

Open **Actions → QuickRN free question-bank integrity bot** to inspect scheduled runs, logs, and summaries. Each run reports the number of audited items, structural findings, and safe metadata cleanup operations.
