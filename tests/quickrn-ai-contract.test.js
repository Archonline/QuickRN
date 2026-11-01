"use strict";
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const backend = fs.readFileSync(path.join(root, "functions/index.js"), "utf8");
const client = fs.readFileSync(path.join(root, "js/quickrn-ai-client.js"), "utf8");
const page = fs.readFileSync(path.join(root, "learning-center.html"), "utf8");
const rules = fs.readFileSync(path.join(root, "firestore.rules"), "utf8");

assert.match(backend, /defineSecret\("OPENAI_API_KEY"\)/);
assert.match(backend, /request\.auth/);
assert.match(backend, /client\.responses\.create/);
assert.match(backend, /store:\s*false/);
assert.match(backend, /DAILY_LIMIT/);
assert.match(backend, /MINUTE_LIMIT/);
assert.match(backend, /MAX_INPUT_CHARS/);
assert.match(client, /httpsCallable\(functions, "quickrnAI"/);
assert.doesNotMatch(client, /sk-[A-Za-z0-9_-]{12,}/);
assert.match(page, /quickrn-ai-prompt/);
assert.match(page, /data-ai-task="summarize"/);
assert.match(page, /data-ai-task="flashcards"/);
assert.match(rules, /match \/quickrn_ai_usage\/{userId}/);
assert.match(rules, /allow read, write: if false/);
console.log("QuickRN AI integration contract checks passed.");
