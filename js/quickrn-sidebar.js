(function () {
  'use strict';
  if (window.__quickrnSidebarMounted) return;
  window.__quickrnSidebarMounted = true;
  const path = (window.location.pathname.split('/').pop() || 'index.html').toLowerCase();
  const active = path === 'correct_view.html' ? 'selfstudy.html' : path;
  const groups = [
    { label: 'Workspace', links: [
      ['dashboard.html','fa-chart-pie','Dashboard'], ['calendar.html','fa-calendar-days','Calendar'],
      ['dashboard.html#learning','fa-book-open','Learning Center','learning'], ['dashboard.html#features','fa-compass','Feature Hub','features']
    ]},
    { label: 'Study & testing', links: [
      ['selfstudy.html','fa-book-medical','Self Study'], ['saved.html','fa-bookmark','Saved Questions'],
      ['timed.html','fa-stopwatch','Timed Practice'], ['predictor.html','fa-clipboard-check','NCLEX Predictor'], ['cat.html','fa-laptop-code','CAT Simulator']
    ]},
    { label: 'Account & support', links: [
      ['profile.html','fa-user-nurse','Profile'], ['reports.html','fa-inbox','Feedback Inbox'], ['help.html','fa-circle-question','Help & Disclaimer']
    ]}
  ];
  const aside = document.createElement('aside'); aside.id='quickrn-unified-sidebar'; aside.className='qr-sidebar';
  const brand=document.createElement('a'); brand.className='qr-sidebar-brand'; brand.href='dashboard.html';
  brand.innerHTML='<span class="qr-sidebar-mark"><i class="fa-solid fa-bolt-lightning" aria-hidden="true"></i></span><span class="qr-sidebar-wordmark"><strong>Quick<span>RN</span></strong><small>NCLEX PREP ENGINE</small></span>'; aside.appendChild(brand);
  const nav=document.createElement('nav'); nav.className='qr-sidebar-nav'; nav.setAttribute('aria-label','Main navigation');
  groups.forEach(group=>{const section=document.createElement('section');section.className='qr-sidebar-group';const heading=document.createElement('h2');heading.textContent=group.label;section.appendChild(heading);
    group.links.forEach(([href,icon,label,tab])=>{const a=document.createElement('a');a.href=href;a.className='qr-sidebar-link';a.innerHTML='<i class="fa-solid '+icon+'" aria-hidden="true"></i><span>'+label+'</span>';
      if(tab)a.addEventListener('click',event=>{if(path==='dashboard.html'&&typeof window.switchTab==='function'){event.preventDefault();window.switchTab(tab);history.replaceState(null,'','#'+tab);}});
      if(active===href.split('#')[0]&&!tab){a.classList.add('is-active');a.setAttribute('aria-current','page');} section.appendChild(a);
    });nav.appendChild(section);
  }); aside.appendChild(nav);
  const footer=document.createElement('div');footer.className='qr-sidebar-footer';footer.innerHTML='<i class="fa-solid fa-shield-heart" aria-hidden="true"></i><span>Study with confidence</span>';aside.appendChild(footer);
  const shell=document.getElementById('app-shell');
  if(shell){const old=shell.querySelector(':scope > aside');if(old)old.replaceWith(aside);else shell.insertBefore(aside,shell.firstChild);shell.classList.add('qr-sidebar-shell');}
  else{document.body.insertBefore(aside,document.body.firstChild);document.body.classList.add('qr-has-sidebar');}
})();