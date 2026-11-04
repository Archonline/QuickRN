(function () {
  'use strict';
  if (window.__quickrnSidebarMounted) return;
  window.__quickrnSidebarMounted = true;
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const active = path === 'correct_view.html' ? 'selfstudy.html' : path;
  if(typeof window.switchTab!=='function'){window.switchTab=function(tabId){['dashboard','learning','features','analytics'].forEach(t=>{document.getElementById('tab-content-'+t)?.classList.add('hidden');const n=document.getElementById('nav-'+t);if(n){n.classList.remove('bg-brand-50','text-brand-700');n.classList.add('text-slate-600','hover:bg-slate-50');}});document.getElementById('tab-content-'+tabId)?.classList.remove('hidden');const activeNav=document.getElementById('nav-'+tabId);if(activeNav){activeNav.classList.remove('text-slate-600','hover:bg-slate-50');activeNav.classList.add('bg-brand-50','text-brand-700');}const titles={dashboard:'NCLEX Candidate Dashboard',learning:'Learning Center',features:'QuickRN Feature Hub & NCLEX Tour',analytics:'Client Needs Mastery Analytics'};const title=document.getElementById('page-title');if(title)title.textContent=titles[tabId]||'Dashboard';};}
  const groups = [
    { label: 'Workspace', links: [
      ['dashboard.html','fa-chart-pie','Dashboard'], ['calendar.html','fa-calendar-days','Calendar'],
      ['learning-center.html','fa-book-open','Learning Center'], ['dashboard.html#features','fa-compass','Feature Hub','features']
    ]},
    { label: 'Study & testing', links: [
      ['selfstudy.html','fa-book-medical','Self Study'], ['saved.html','fa-bookmark','Saved Questions'],
      ['timed.html','fa-stopwatch','Timed Practice'], ['predictor.html','fa-clipboard-check','NCLEX Predictor'], ['cat.html','fa-laptop-code','CAT Simulator']
    ]},
    { label: 'Account & support', links: [
      ['profile.html','fa-user-nurse','Profile'], ['help.html','fa-circle-question','Help & Disclaimer']
    ]}
  ];
  const aside = document.createElement('aside'); aside.id='quickrn-unified-sidebar'; aside.className='qr-sidebar';
  const brand=document.createElement('a'); brand.className='qr-sidebar-brand'; brand.href='dashboard.html';
  brand.innerHTML='<span class="qr-sidebar-mark"><i class="fa-solid fa-bolt-lightning" aria-hidden="true"></i></span><span class="qr-sidebar-wordmark"><strong>Quick<span>RN</span></strong><small>NCLEX PREP ENGINE</small></span>'; aside.appendChild(brand);
  // Keep the Dashboard as the full-width navigation reference.
  // Secondary/right-pane pages start as an icon rail and reveal labels on hover/focus.
  const autoCollapse = path !== 'dashboard.html';
  const applySidebarState=(isCollapsed)=>{
    const collapsedState=autoCollapse && isCollapsed;
    document.body.classList.toggle('qr-main-sidebar-collapsed',collapsedState);
    const shell=document.getElementById('app-shell');
    if(shell)shell.classList.toggle('qr-main-sidebar-collapsed',collapsedState);
  };
  if(autoCollapse){
    aside.addEventListener('pointerenter',()=>applySidebarState(false));
    aside.addEventListener('pointerleave',()=>applySidebarState(true));
    aside.addEventListener('focusin',()=>applySidebarState(false));
    aside.addEventListener('focusout',event=>{
      if(!aside.contains(event.relatedTarget))applySidebarState(true);
    });
  }
  const nav=document.createElement('nav'); nav.className='qr-sidebar-nav'; nav.setAttribute('aria-label','Main navigation');
  groups.forEach(group=>{const section=document.createElement('section');section.className='qr-sidebar-group';const heading=document.createElement('h2');heading.textContent=group.label;section.appendChild(heading);
    group.links.forEach(([href,icon,label,tab])=>{const a=document.createElement('a');a.href=href;a.className='qr-sidebar-link';a.innerHTML='<i class="fa-solid '+icon+'" aria-hidden="true"></i><span>'+label+'</span>';
      a.setAttribute('aria-label',label);a.title=label;
      if(tab)a.addEventListener('click',event=>{if(path==='dashboard.html'&&typeof window.switchTab==='function'){event.preventDefault();window.switchTab(tab);history.replaceState(null,'','#'+tab);}});
      if(active===href.split('#')[0]&&!tab){a.classList.add('is-active');a.setAttribute('aria-current','page');} section.appendChild(a);
    });nav.appendChild(section);
  }); aside.appendChild(nav);
  const footer=document.createElement('div');footer.className='qr-sidebar-footer';footer.innerHTML='<i class="fa-solid fa-shield-heart" aria-hidden="true"></i><span>Study with confidence</span>';aside.appendChild(footer);
  const shell=document.getElementById('app-shell');
  if(shell){const old=shell.querySelector(':scope > aside');if(old)old.replaceWith(aside);else shell.insertBefore(aside,shell.firstChild);shell.classList.add('qr-sidebar-shell');}
  else{const legacy=document.querySelector('body > div > aside');if(legacy)legacy.replaceWith(aside);else document.body.insertBefore(aside,document.body.firstChild);document.body.classList.add('qr-has-sidebar');}
  applySidebarState(true);
  const requestedTab=String(window.location.hash||'').slice(1);if(path==='dashboard.html'&&['dashboard','learning','features','analytics'].includes(requestedTab))window.switchTab(requestedTab);
})();