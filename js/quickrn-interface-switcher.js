(function(){
  'use strict';
  const KEY='quickrn_exam_interface';
  const CLASSIC='classic';
  const STYLE_ID='quickrn-interface-switcher-styles';
  const CSS=`
    #quickrn-interface-control{display:flex;align-items:center;gap:7px;margin-left:10px;padding:4px 7px;border:1px solid rgba(203,213,225,.55);border-radius:8px;background:rgba(15,23,42,.22);color:#fff;font:600 11px/1.2 Inter,Arial,sans-serif;white-space:nowrap}
    #quickrn-interface-control label{color:#e2e8f0}
    #quickrn-interface-select{max-width:158px;padding:6px 24px 6px 8px;border:1px solid #94a3b8;border-radius:6px;background:#fff;color:#102b4e;font:700 11px Inter,Arial,sans-serif;cursor:pointer}
    body.qr-interface-classic{background:#eef2f6!important;color:#172b43!important;font-family:Arial,Helvetica,sans-serif!important}
    body.qr-interface-classic>header,body.qr-interface-classic header.exam-header{background:#003b70!important;color:#fff!important;border-bottom:2px solid #9aaec2!important;box-shadow:0 1px 3px rgba(15,23,42,.16)!important}
    body.qr-interface-classic main{background:#eef2f6!important}
    body.qr-interface-classic #left-panel,body.qr-interface-classic #right-panel,body.qr-interface-classic #exam-container,body.qr-interface-classic .qr-ehr,body.qr-interface-classic .qr-question-panel,body.qr-interface-classic .qr-clinical-layout>section,body.qr-interface-classic .qr-clinical-layout>aside{background:#fff!important;border:1px solid #aab8c7!important;border-radius:2px!important;box-shadow:none!important;color:#172b43!important}
    body.qr-interface-classic #case-study-tabs{background:#e8eef5!important;border-color:#aab8c7!important;border-radius:0!important}
    body.qr-interface-classic #case-study-tabs button{border-radius:0!important;color:#174a78!important}
    body.qr-interface-classic #case-study-content,body.qr-interface-classic #question-prompt,body.qr-interface-classic #answer-workspace{color:#172b43!important}
    body.qr-interface-classic .qr-ehr-head,body.qr-interface-classic .qr-question-head{background:#e8eef5!important;color:#173a5e!important;border-radius:0!important;border-bottom:1px solid #aab8c7!important}
    body.qr-interface-classic .qr-ehr-section{border-radius:2px!important;border-color:#b7c3cf!important}
    body.qr-interface-classic .qr-ehr-section h4{background:#e4eaf1!important;color:#173a5e!important}
    body.qr-interface-classic .qr-option,body.qr-interface-classic .qr-choice,body.qr-interface-classic .qr-highlight-segment{border-radius:2px!important;background:#fff!important;border-color:#9eacbb!important;color:#172b43!important}
    body.qr-interface-classic .qr-option.selected,body.qr-interface-classic .qr-choice.selected{background:#e5f0fa!important;border:2px solid #005a9c!important;color:#003b70!important}
    body.qr-interface-classic .qr-highlight-segment.is-selected{background:#fff5d8!important;border-color:#c28b19!important;color:#573d00!important}
    body.qr-interface-classic .qr-format-tag,body.qr-interface-classic .qr-item-format{background:#e5edf5!important;color:#174a78!important;border-color:#9eafc1!important;border-radius:2px!important}
    body.qr-interface-classic button#submit-btn,body.qr-interface-classic #submit-btn{background:#005a9c!important;color:#fff!important;border-radius:2px!important}
    body.qr-interface-classic footer{background:#003b70!important;color:#fff!important}
    body.qr-interface-classic .answer-correct{background:#e2f1e5!important;border-color:#39834b!important;color:#174d25!important}
    body.qr-interface-classic .answer-wrong{background:#f9e5e5!important;border-color:#b84a4a!important;color:#762323!important}
    body.qr-interface-classic input,body.qr-interface-classic select,body.qr-interface-classic textarea{border-radius:2px!important;border-color:#9eacbb!important}
    @media(max-width:640px){#quickrn-interface-control{gap:4px;margin-left:4px;padding:3px}#quickrn-interface-control label{display:none}#quickrn-interface-select{max-width:142px}}
  `;
  function readMode(){try{return localStorage.getItem(KEY)===CLASSIC?CLASSIC:'quickrn';}catch(e){return 'quickrn';}}
  function applyMode(mode){
    const classic=mode===CLASSIC;
    document.body.classList.toggle('qr-interface-classic',classic);
    document.documentElement.dataset.quickrnInterface=classic?CLASSIC:'quickrn';
    const select=document.getElementById('quickrn-interface-select');
    if(select)select.value=classic?CLASSIC:'quickrn';
    try{localStorage.setItem(KEY,classic?CLASSIC:'quickrn');}catch(e){}
  }
  function addControl(){
    const header=document.querySelector('header');
    if(!header||document.getElementById('quickrn-interface-control'))return;
    let host=header.lastElementChild||header;
    if(host!==header&&host.children.length){
      const candidate=host.lastElementChild;
      if(candidate&&candidate.tagName==='DIV'&&candidate.className.toString().includes('flex'))host=candidate;
    }
    const wrap=document.createElement('div');
    wrap.id='quickrn-interface-control';
    wrap.innerHTML='<label for="quickrn-interface-select">Test view</label><select id="quickrn-interface-select" aria-label="Choose test interface"><option value="quickrn">Updated QuickRN</option><option value="classic">Original NCLEX</option></select>';
    host.appendChild(wrap);
    const select=wrap.querySelector('select');
    select.value=readMode();
    select.addEventListener('change',function(){applyMode(this.value);});
  }
  function init(){
    if(!document.getElementById(STYLE_ID)){
      const style=document.createElement('style');style.id=STYLE_ID;style.textContent=CSS;document.head.appendChild(style);
    }
    applyMode(readMode());
    addControl();
    const header=document.querySelector('header');
    if(header&&window.MutationObserver){
      const observer=new MutationObserver(function(){if(!document.getElementById('quickrn-interface-control'))addControl();});
      observer.observe(header,{childList:true,subtree:true});
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();