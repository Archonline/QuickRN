(function(){
  'use strict';
  const KEY='quickrn_question_reports';
  const ISSUE_URL='https://github.com/Archonline/QuickRN/issues/new';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function read(){try{const v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v:[];}catch(_){return [];}}
  function snapshot(q){
    if(!q)return null;
    return {id:q.id||q.questionId||null,category:q.category||null,topic:q.topic||null,type:q.ngnType||q.type||q.questionType||q.itemType||null,prompt:String(q.cleanTitle||q.title||q.questionText||q.question||'').slice(0,3000),options:Array.isArray(q.options)?q.options.slice(0,20):undefined};
  }
  function downloadReport(report){
    const blob=new Blob([JSON.stringify(report,null,2)],{type:'application/json'});
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='quickrn-question-report-'+report.id+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function open(){
    const q=window.quickRNCurrentQuestion;
    if(!q){alert('Open a question before reporting an issue.');return;}
    if(document.getElementById('quickrn-report-overlay'))return;
    const overlay=document.createElement('div');overlay.id='quickrn-report-overlay';overlay.className='qr-modal-backdrop';
    overlay.innerHTML='<form class="qr-report-modal" role="dialog" aria-modal="true" aria-labelledby="quickrn-report-title"><div style="display:flex;justify-content:space-between;align-items:center"><h3 id="quickrn-report-title">Report a question issue</h3><button type="button" data-close aria-label="Close">×</button></div><p style="font-size:12px;color:#64748b">Your report includes this question\'s ID and a short snapshot so the team can investigate.</p><label>Problem type<select name="reason" required><option>Incorrect answer or answer key</option><option>Unclear or incorrect rationale</option><option>Typo or confusing wording</option><option>NGN interaction or scoring issue</option><option>Formatting or display problem</option><option>Duplicate question</option><option>Other</option></select></label><label>What happened?<textarea name="details" required rows="4" maxlength="2000" placeholder="Describe what seems wrong and what you expected to see."></textarea></label><div><button type="button" data-close style="background:#e2e8f0;color:#334155">Cancel</button><button type="submit">Save report</button></div></form>';
    document.body.appendChild(overlay);
    overlay.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>overlay.remove()));
    overlay.addEventListener('click',e=>{if(e.target===overlay)overlay.remove();});
    overlay.querySelector('form').addEventListener('submit',e=>{
      e.preventDefault();const fd=new FormData(e.currentTarget);
      const report={id:'QR-'+Date.now(),app:'QuickRN',mode:window.quickRNExamMode||document.title||'Practice',reason:fd.get('reason'),details:String(fd.get('details')||'').trim(),question:snapshot(q),page:location.pathname,reportedAt:new Date().toISOString(),status:'Saved locally — not yet submitted'};
      const reports=read();reports.push(report);
      try{localStorage.setItem(KEY,JSON.stringify(reports));}
      catch(err){alert('Could not save this report. Export your browser data or free storage space, then try again.');return;}
      overlay.innerHTML='<div class="qr-report-modal"><h3>Report saved on this device</h3><p style="font-size:13px;color:#475569">It is queued locally and has not been sent to the QuickRN team. Export the report now or use the dashboard backup to preserve it.</p><div><button type="button" data-download>Download report</button><button type="button" data-done>Done</button></div></div>';
      overlay.querySelector('[data-download]').addEventListener('click',()=>downloadReport(report));
      overlay.querySelector('[data-done]').addEventListener('click',()=>overlay.remove());
    });
  }
  window.quickRNOpenReport=open;
  window.QuickRNQuestionReporting={open,read,download:downloadReport};
  // Reporting is exposed once inside the active question panel by the shared renderer.
})();