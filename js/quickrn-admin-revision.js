/* Self Study-only webmaster question revision handoff.
 * The button is inserted immediately after the Clinical Study Coach card.
 * ChatGPT requires the user to review and send the prepared prompt.
 */
(function () {
  'use strict';
  const ADMIN_EMAIL = 'toughluckstyle@gmail.com';
  const isAdmin = () => {
    try {
      return localStorage.getItem('quickrn_signed_out') !== 'true' &&
        (localStorage.getItem('quickrn_user_email') || '').trim().toLowerCase() === ADMIN_EMAIL;
    } catch (_) { return false; }
  };

  function ensureModal() {
    if (document.getElementById('quickrn-admin-revision-modal')) return;
    const modal = document.createElement('div');
    modal.id = 'quickrn-admin-revision-modal';
    modal.className = 'hidden fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/60 p-4';
    modal.innerHTML = '<section role="dialog" aria-modal="true" aria-labelledby="quickrn-revision-title" class="w-full max-w-xl overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">' +
      '<header class="flex items-center justify-between bg-slate-900 px-5 py-4 text-white"><div><h2 id="quickrn-revision-title" class="text-sm font-bold">Send question revision to ChatGPT</h2><p class="mt-1 text-[11px] text-slate-300">The current question details will be included automatically.</p></div><button type="button" id="quickrn-revision-close" class="rounded p-1 text-slate-300 hover:text-white" aria-label="Close"><i class="fa-solid fa-xmark"></i></button></header>' +
      '<div class="space-y-3 p-5"><label for="quickrn-revision-details" class="block text-xs font-bold text-slate-700">Describe the fix needed</label><textarea id="quickrn-revision-details" maxlength="4000" rows="6" class="w-full rounded-lg border border-slate-300 p-3 text-sm text-slate-800 outline-none focus:border-cyan-600 focus:ring-2 focus:ring-cyan-100" placeholder="Describe the correction needed for this question..."></textarea><p class="text-[11px] text-slate-500">Continue opens ChatGPT with the question details and your requested fix. Review and press Send there.</p></div>' +
      '<footer class="flex justify-end gap-2 border-t border-slate-100 bg-slate-50 px-5 py-3"><button type="button" id="quickrn-revision-cancel" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700">Cancel</button><button type="button" id="quickrn-revision-send" class="rounded-lg bg-cyan-700 px-4 py-2 text-xs font-bold text-white hover:bg-cyan-800"><i class="fa-solid fa-arrow-up-right-from-square mr-1"></i> Continue to ChatGPT</button></footer></section>';
    document.body.appendChild(modal);
    const detailsField = modal.querySelector('#quickrn-revision-details');
    const clearPreviousEntry = () => { detailsField.value = ''; };
    const close = () => { clearPreviousEntry(); modal.classList.add('hidden'); };
    modal.querySelector('#quickrn-revision-close').addEventListener('click', close);
    modal.querySelector('#quickrn-revision-cancel').addEventListener('click', close);
    modal.addEventListener('click', event => { if (event.target === modal) close(); });
    modal.querySelector('#quickrn-revision-send').addEventListener('click', () => {
      const details = modal.querySelector('#quickrn-revision-details').value.trim();
      if (!details) { modal.querySelector('#quickrn-revision-details').focus(); return; }
      const qid = document.getElementById('qid-display')?.textContent?.trim() || 'Not displayed';
      const question = document.getElementById('question-prompt')?.innerText?.trim() || '(Question prompt unavailable)';
      const clinicalRecord = document.getElementById('case-study-content')?.innerText?.trim() || '(No separate clinical record)';
      const prompt = [
        'I am the QuickRN webmaster. Please revise the following item in the QuickRN repository.',
        'Question ID: ' + qid,
        'Question: ' + question,
        'Clinical record/context: ' + clinicalRecord.slice(0, 5000),
        'Requested revision: ' + details,
        'Please make the requested change while preserving the existing question format, scoring behavior, and exam rendering conventions. Explain the files changed.'
      ].join('\\n\\n');
      const chatUrl = 'https://chatgpt.com/?q=' + encodeURIComponent(prompt);
      window.open(chatUrl, '_blank', 'noopener');
      if (navigator.clipboard?.writeText) navigator.clipboard.writeText(prompt).catch(() => {});
      close();
    });
  }

  function addButtonAfterCoach() {
    if (!isAdmin()) return;
    const host = document.getElementById('coach-insight');
    if (!host) return;
    const coachCard = Array.from(host.querySelectorAll('div')).find(el =>
      el.children.length > 0 && /Clinical Study Coach/i.test(el.innerText || '') &&
      !el.querySelector('#quickrn-admin-revision-button')
    );
    if (!coachCard || document.getElementById('quickrn-admin-revision-button')) return;
    ensureModal();
    const row = document.createElement('div');
    row.className = 'mt-3 flex justify-end';
    row.innerHTML = '<button type="button" id="quickrn-admin-revision-button" class="inline-flex items-center gap-2 rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-bold text-amber-900 shadow-sm hover:bg-amber-100 focus:outline-none focus:ring-2 focus:ring-amber-400"><i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i> Need a Revision</button>';
    coachCard.insertAdjacentElement('afterend', row);
    row.querySelector('button').addEventListener('click', () => {
      const modal = document.getElementById('quickrn-admin-revision-modal');
      modal.classList.remove('hidden');
      clearPreviousEntry();
      detailsField.focus();
    });
  }

  function init() {
    if (!isAdmin()) return;
    const host = document.getElementById('coach-insight');
    if (!host) return;
    addButtonAfterCoach();
    const observer = new MutationObserver(addButtonAfterCoach);
    observer.observe(host, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
