/* QuickRN platform safeguards shared by every page. No remote telemetry. */
(function(root){
 'use strict';
 if(root.QuickRNPlatform)return;
 const KEY='quickrn_client_error_log_v1',MAX=30,memory=new Map(),listeners=new Map();
 let storageAvailable=false;
 try{const k='quickrn_storage_probe';root.localStorage.setItem(k,'1');root.localStorage.removeItem(k);storageAvailable=true;}catch(_){}
 function emit(name,detail){try{root.dispatchEvent(new CustomEvent(name,{detail:detail||{}}));}catch(_){}const set=listeners.get(name);if(set)set.forEach(fn=>{try{fn(detail||{});}catch(_){}});}
 function on(name,fn){if(!listeners.has(name))listeners.set(name,new Set());listeners.get(name).add(fn);return()=>listeners.get(name).delete(fn);}
 function safeParse(raw,fallback){try{return raw==null?fallback:JSON.parse(raw);}catch(_){return fallback;}}
 function read(key,fallback){try{const v=storageAvailable?root.localStorage.getItem(key):memory.get(key);return v==null?fallback:v;}catch(_){return memory.has(key)?memory.get(key):fallback;}}
 function readJSON(key,fallback){return safeParse(read(key,null),fallback);}
 function write(key,value){const v=String(value);memory.set(key,v);try{if(storageAvailable){root.localStorage.setItem(key,v);return true;}}catch(error){emit('quickrn:storage-error',{key,operation:'write',errorName:error&&error.name||'Error'});}return false;}
 function writeJSON(key,value){try{return write(key,JSON.stringify(value));}catch(_){return false;}}
 function remove(key){memory.delete(key);try{if(storageAvailable)root.localStorage.removeItem(key);return true;}catch(_){return false;}}
 function escapeHTML(value){return String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function uid(prefix){return (prefix||'qr')+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,8);}
 function debounce(fn,wait){let timer;return function(){const args=arguments,ctx=this;clearTimeout(timer);timer=setTimeout(()=>fn.apply(ctx,args),Math.max(0,wait||0));};}
 function errors(){return readJSON(KEY,[]).filter(x=>x&&typeof x==='object').slice(-MAX);}
 function recordError(type,message){const list=errors();list.push({at:new Date().toISOString(),type:String(type||'error').slice(0,40),message:String(message||'Unknown error').replace(/[\r\n\t]+/g,' ').slice(0,240),page:(root.location&&root.location.pathname||'').slice(0,120)});writeJSON(KEY,list.slice(-MAX));}
 function banner(message,kind){let el=root.document&&root.document.getElementById('quickrn-platform-status');if(!el&&root.document&&root.document.body){el=root.document.createElement('div');el.id='quickrn-platform-status';el.setAttribute('role','status');el.setAttribute('aria-live','polite');el.style.cssText='position:fixed;z-index:9999;left:12px;right:12px;bottom:12px;max-width:560px;margin:auto;padding:10px 14px;border-radius:10px;font:600 12px/1.45 system-ui,sans-serif;box-shadow:0 8px 24px #0f172a22';root.document.body.appendChild(el);}if(!el)return;el.textContent=message;el.style.background=kind==='error'?'#7f1d1d':kind==='success'?'#14532d':'#172554';el.style.color='#fff';el.hidden=false;if(kind==='success')setTimeout(()=>{if(el&&el.textContent===message)el.hidden=true;},5000);}
 function init(){
  on('quickrn:storage-error',()=>banner('Browser storage is full or unavailable. Export a backup and free browser storage before continuing.','error'));
  if(!storageAvailable)banner('Browser storage is unavailable. Progress may not persist after this page closes.','error');
  root.addEventListener&&root.addEventListener('error',e=>recordError('window-error',e.message||'Script error'));
  root.addEventListener&&root.addEventListener('unhandledrejection',e=>recordError('unhandled-rejection',e.reason&&e.reason.message||e.reason||'Unhandled promise rejection'));
  root.addEventListener&&root.addEventListener('online',()=>banner('Connection restored. Browser-local progress remains on this device.','success'));
  root.addEventListener&&root.addEventListener('offline',()=>banner('You are offline. Check your connection before starting a new exam.','warning'));
  root.addEventListener&&root.addEventListener('storage',e=>emit('quickrn:storage',{key:e.key}));
  root.addEventListener&&root.addEventListener('pagehide',()=>emit('quickrn:pagehide',{}));
  root.document&&root.document.addEventListener('visibilitychange',()=>{const visible=root.document.visibilityState==='visible';emit('quickrn:visibilitychange',{visible});if(visible)emit('quickrn:resume',{});});
  if(root.navigator&&root.navigator.onLine===false)banner('You are offline. Check your connection before starting a new exam.','warning');
  if(root.document&&root.document.documentElement)root.document.documentElement.classList.add('quickrn-platform-ready');
 }
 root.QuickRNPlatform=Object.freeze({safeParse,read,readJSON,write,writeJSON,remove,escapeHTML,uid,debounce,on,emit,errors,recordError,storageAvailable});
 if(root.document){if(root.document.readyState==='loading')root.document.addEventListener('DOMContentLoaded',init,{once:true});else init();}
})(typeof window!=='undefined'?window:globalThis);
