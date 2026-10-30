(function(){
  'use strict';
  const VERSION=1, APP='QuickRN', EXACT_KEYS=['quickrn_user_name'];
  const allowed=key=>key.startsWith('quickrn_')||EXACT_KEYS.includes(key);
  function collect(){const data={};try{for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(key&&allowed(key)){data[key]=localStorage.getItem(key);}}}catch(error){console.warn('QuickRN backup could not read all browser data:',error);}return data;}
  function makeBackup(){return {app:APP,formatVersion:VERSION,createdAt:new Date().toISOString(),data:collect()};}
  function download(obj,name){const blob=new Blob([JSON.stringify(obj,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function status(message,bad){const el=document.getElementById('backup-status');if(el){el.textContent=message;el.className='mt-3 text-xs '+(bad?'text-rose-700':'text-emerald-700');}}
  function init(){
    const exportBtn=document.getElementById('quickrn-export-backup'),importInput=document.getElementById('quickrn-import-backup');
    if(!exportBtn||!importInput)return;
    exportBtn.addEventListener('click',()=>{const backup=makeBackup();download(backup,'quickrn-backup-'+new Date().toISOString().slice(0,10)+'.json');status(Object.keys(backup.data).length+' QuickRN data entries exported. Keep this file somewhere safe.');});
    importInput.addEventListener('change',async()=>{
      const file=importInput.files&&importInput.files[0];if(!file)return;
      try{
        if(file.size>10*1024*1024)throw new Error('Backup file is larger than 10 MB.');
        const parsed=JSON.parse(await file.text());
        if(!parsed||parsed.app!==APP||parsed.formatVersion!==VERSION||!parsed.data||typeof parsed.data!=='object'||Array.isArray(parsed.data))throw new Error('This is not a supported QuickRN backup.');
        const entries=Object.entries(parsed.data);
        if(entries.length>500)throw new Error('This backup contains too many entries to restore safely.');
        if(entries.some(([key])=>key.length>160))throw new Error('Backup contains an invalid storage key.');
        if(!entries.length)throw new Error('The backup contains no QuickRN data.');
        if(entries.some(([key])=>!allowed(key)))throw new Error('The backup contains unsupported storage keys.');
        const current=makeBackup();
        if(!confirm('Restore '+entries.length+' data entries from '+(parsed.createdAt||'this backup')+'? Current browser data for these keys will be replaced. A safety backup will download first.'))return;
        download(current,'quickrn-pre-restore-safety-'+new Date().toISOString().slice(0,10)+'.json');
        entries.forEach(([key,value])=>{if(typeof value!=='string')throw new Error('Backup contains an invalid value for '+key+'.');});
        entries.forEach(([key,value])=>localStorage.setItem(key,value));
        status('Backup restored. Reloading QuickRN…');setTimeout(()=>location.reload(),700);
      }catch(error){status(error.message||'Could not restore this backup.',true);}
      finally{importInput.value='';}
    });
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  window.QuickRNBackup={makeBackup,collect};
})();