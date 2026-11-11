# Question generation in QuickRN

The primary workflow is now source-grounded batch generation and direct publication to the canonical JavaScript bank. Educator approval is not required by that automated publishing path.

See [Source-grounded question pipeline](../docs/source-grounded-question-pipeline.md) and use [BATCH-GENERATION-PROMPT.md](BATCH-GENERATION-PROMPT.md).

From the repository root:

```bash
node scripts/publish-question-batch.js generated-batch.json
```

The batch must contain original questions, unique `QR-######` IDs, source references with HTTPS URLs, answer keys, rationales, and the required QuickRN schema-v2 fields. The publisher validates the entire batch before writing to `data/question-bank.js`; if one item fails, none are published.

## Important

- Generate from clinical facts and authoritative sources, not from copied or lightly paraphrased commercial question-bank items or secure NCLEX content.
- The 13 formats are QuickRN schema-v2 formats, not an official NCSBN list of 13 item types.
- Automated checks validate structure, required metadata, IDs, references, rendering, and scoring. They cannot prove clinical correctness or that a citation supports each claim.
- Keep source references with every item. Never label AI-generated items as educator-approved or clinically certified unless that separate process actually occurs.
- The folders `pending/`, `approved/`, and `rejected/` remain available as an optional legacy/manual workflow; they are not loaded by student exam pages.
- No AI provider or API key is connected to this static site. Generate the JSON batch with an available AI tool, then run the local publisher. Never place an AI secret in browser JavaScript.
