# QuickRN AI question-remediation bot

The scheduled workflow is `.github/workflows/quickrn-ai-question-remediation.yml`. It runs every 15 minutes, can be started manually from GitHub Actions, and runs immediately when its workflow or worker implementation changes on `main`.

## One-time repository setup

1. Open **Archonline/QuickRN → Settings → Secrets and variables → Actions**.
2. Add the repository secret `OPENAI_API_KEY` with an API key authorized for the OpenAI Responses API.
3. Optional: add repository variable `QUICKRN_REMEDIATION_MODEL` with a model name enabled for the API account. If omitted, the worker uses `gpt-6`.
4. Confirm GitHub Actions are enabled and the workflow has permission to write repository contents.

Never put the API key in source files, workflow YAML, issues, or commits.

## Coverage and behavior

- Each run attempts up to 25 eligible questions from the effective runtime question bank.
- The worker loads the same base and supplemental modules as the production validator, then tracks which source module owns each active question.
- Supported remediation batches are 004, 005, 006, 007, 008, and 009. This includes the generator-driven case-study and NGN supplement batches 005 and 006.
- For generated modules and modules with post-generation overrides, revised records are written as persistent source-level overrides at the end of the owning module. This prevents the original generator from overwriting a revision on the next load.
- Question IDs and linked case data are preserved. Format changes are accepted only when needed to correct an internally inconsistent answer structure.
- Every substantive revision is labeled `pending_webmaster_review`; the webmaster is the review owner. There is no nurse-educator approval gate.
- Items that lack enough clinical context are held with a `remediationNote` for webmaster source/context review rather than being filled with invented clinical facts.
- Each run writes a dated report under `reports/ai-remediation/` and publishes the report in the GitHub Actions run summary.
- The worker commits question-source updates and reports to `main`. Bot commits do not match the workflow's push trigger paths, so they do not cause an immediate self-triggering loop.

## Monitoring

Open **Actions → QuickRN AI question remediation** to inspect scheduled runs, logs, and summaries. Each successful run reports attempted items, revised items, items held for webmaster review, and failures. Review the resulting source changes and run reports in the repository before making release decisions.
