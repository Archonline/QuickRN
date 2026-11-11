# Approved question candidates

Archive the exact reviewed candidate file here after an authorized nurse educator/admin approves it. Publishing to the active bank is a separate, explicit step.

## Release preflight

Run `node scripts/preflight-approved-questions.js` from the repository root to
check the approved archive for complete review metadata, canonical/unique IDs,
filename agreement, and schema-v2 validity. The command is read-only and never
publishes to `question-bank.js`.

A passing check is structural only; it is not clinical sign-off and does not
replace a separately reviewed publisher after the active bank contract has
been inspected and tested.
