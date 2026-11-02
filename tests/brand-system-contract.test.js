const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const pages = [
  'index.html', 'dashboard.html', 'calendar.html', 'help.html',
  'selfstudy.html', 'timed.html', 'predictor.html', 'cat.html',
  'saved.html', 'profile.html', 'reports.html'
];
const stylesheet = path.join(root, 'css', 'quickrn-brand-system.css');
assertFile(stylesheet);
const css = fs.readFileSync(stylesheet, 'utf8');
for (const token of ['--qr-brand-navy', '--qr-brand-teal', '--qr-brand-plum', '--qr-brand-coral', '--qr-brand-bg', '--qr-brand-border', 'font-family:Inter']) {
  if (!css.includes(token)) throw new Error('Missing shared brand token: ' + token);
}
const sidebarScript = path.join(root, 'js', 'quickrn-sidebar.js');
assertFile(sidebarScript);
const sidebarJs = fs.readFileSync(sidebarScript, 'utf8');
for (const token of ['qr-sidebar-group', 'aria-current', 'qr-sidebar-shell', 'Learning Center', 'Feedback Inbox']) {
  if (!sidebarJs.includes(token)) throw new Error('Missing unified sidebar feature: ' + token);
}
for (const page of pages) {
  const html = fs.readFileSync(path.join(root, page), 'utf8');
  if (!html.includes('css/quickrn-brand-system.css')) {
    throw new Error(page + ' does not load the shared QuickRN brand stylesheet');
  }
  if (!/<\/head>/i.test(html)) throw new Error(page + ' has no closing head tag');
}
if (!css.includes('body:has(#app-shell) #app-shell>aside')) throw new Error('Reference-inspired dashboard navigation theme is missing');
console.log('QuickRN brand contract passed: ' + pages.length + ' active pages load the shared theme; retired legacy assets are excluded.');

function assertFile(file) {
  if (!fs.existsSync(file)) throw new Error('Required file is missing: ' + path.relative(root, file));
}
