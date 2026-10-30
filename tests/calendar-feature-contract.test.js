const fs = require('fs');
const html = fs.readFileSync('calendar.html', 'utf8');
const failures = [];
function requireText(text, label) { if (!html.includes(text)) failures.push(label); }
requireText('value="test-date"', 'NCLEX test-date option missing');
requireText('value="cat"', 'CAT practice-day option missing');
requireText('value="predictor"', 'Predictor exam-day option missing');
requireText('function daysUntil(key)', 'Test countdown calculation missing');
requireText("d<=3?'urgent':d<=7?'soon':d<=30?'upcoming'", 'Test-date urgency thresholds missing');
requireText('test-countdown-section', 'Next-test countdown panel missing');
requireText("type==='cat'?'cat.html'", 'CAT shortcut route missing');
requireText("type==='predictor'?'predictor.html'", 'Predictor shortcut route missing');
requireText('shortcut(event.type)', 'Selected-day CAT/Predictor shortcut rendering missing');
requireText("download='quickrn-study-calendar.ics'", 'Calendar export missing');
requireText('type:typeInput.value', 'Event type is not persisted');
requireText("typeInput.value = event.type || 'activity'", 'Event type is not restored when editing');
requireText('<script>', 'Calendar script not found');
try { const scripts=[...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)]; const source=scripts.length?scripts[scripts.length-1][1]:''; if(!source.trim())throw new Error('Inline script not found'); new Function(source); } catch (error) { failures.push('Calendar inline JavaScript syntax invalid: ' + error.message); }
if (failures.length) { console.error('Calendar feature contract failed:\\n- ' + failures.join('\\n- ')); process.exit(1); }
console.log('Calendar test-date, urgency, shortcuts, persistence, and export contract passed.');
