const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const pages = [
  'index.html', 'dashboard.html', 'calendar.html', 'help.html',
  'learning-center.html', 'selfstudy.html', 'timed.html', 'predictor.html', 'cat.html',
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
for (const token of ['qr-sidebar-group', 'aria-current', 'qr-sidebar-shell', 'Learning Center', 'const autoCollapse = path !== \'dashboard.html\'', 'qr-sidebar-signout']) {
  if (!sidebarJs.includes(token)) throw new Error('Missing unified sidebar feature: ' + token);
}
if (sidebarJs.includes('Feedback Inbox') || sidebarJs.includes('reports.html')) {
  throw new Error('Webmaster-only Feedback Inbox must not appear in the student sidebar');
}
if (!css.includes('App-wide chrome normalization') || !css.includes('.support-workspace>header') || !css.includes('.calendar-workspace>header.calendar-header')) {
  throw new Error('Calendar and support headers must share the 64px application header geometry');
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
