# QuickRN AI integration setup

QuickRN AI uses the OpenAI Responses API through a Firebase callable Cloud Function. The browser never receives the OpenAI API key. The callable requires a Firebase Authentication session, applies per-user request limits, and does not store prompts or model responses. Usage counters are stored in the server-only `quickrn_ai_usage` collection.

## One-time project requirements

1. Use the Firebase project `quickrnapp` and enable the Blaze billing plan. Cloud Functions deployment and outbound provider calls require billing to be enabled; OpenAI API usage is billed separately by OpenAI.
2. Create the default Cloud Firestore database in the Firebase console if one does not already exist. Choose the database location carefully; it cannot be changed after creation.
3. In the OpenAI platform, create an API key for this application. Keep it private; never paste it into HTML, JavaScript, GitHub, or a public Firebase config.
4. From the repository root, install the Firebase CLI and authenticate:
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use quickrnapp
   ```
5. Set the provider key as a Firebase Secret:
   ```bash
   firebase functions:secrets:set OPENAI_API_KEY
   ```
   Paste the API key into the secure prompt. Do not put the key in a command-line argument or commit it to source control.
6. Deploy the callable:
   ```bash
   cd functions
   npm install
   cd ..
   firebase deploy --only firestore:rules,functions:quickrnAI
   ```
7. Open Learning Center while signed in and test the AI Tutor, note summarizer, flashcards, and quiz generator.

## Model selection

The default model is `gpt-5-mini`, set as a Firebase string parameter. To change it, set the `OPENAI_MODEL` parameter during deployment or configure the parameter in the Firebase environment. Use a model enabled for the OpenAI project and compatible with the Responses API.

## Security and cost controls

- The callable rejects unauthenticated requests.
- Each signed-in user is limited to 35 requests per UTC day and 8 requests per minute. Adjust these constants in `functions/index.js` after beta usage review.
- Request content is limited to 12,000 characters; generated output is capped.
- OpenAI calls use `store: false`; prompts and outputs are not written to Firestore by this integration.
- Firestore stores only per-user usage counters. Client access to this collection should remain denied by Firestore rules.
- Firebase App Check is not enforced yet because the existing client does not initialize App Check. Before public launch, configure App Check for the actual hosting domain and enable `enforceAppCheck: true` on the callable.
- Do not enter identifiable patient information or real patient records. AI output is educational and requires verification against current authoritative references.
- Review OpenAI API usage and set a project budget/alert in the OpenAI platform. Firebase and OpenAI billing are separate.

## Current scope

The first integration adds a real AI Tutor to Learning Center with tutor Q&A, note summarization, flashcard generation, quiz generation, and study-plan drafting. The backend also supports rationale tasks for a later exam-interface integration. AI-generated exam rationales are not yet automatically injected into CAT, Predictor, Timed Practice, or Self-Study. Speech dictation remains browser-native transcription and is not itself AI.
