(function(){
'use strict';
const ISSUE_URL='https://github.com/Archonline/QuickRN/issues/new';
function buildUrl(type,title,body){const p=new URLSearchParams();p.set('title','['+type+'] '+String(title||'QuickRN report').slice(0,180));p.set('body',String(body||'').slice(0,6000));return ISSUE_URL+'?'+p.toString();}
function openIssue(type,title,body){const url=buildUrl(type,title,body);const w=window.open(url,'_blank','noopener,noreferrer');if(!w)window.location.href=url;return url;}
window.QuickRNReport={buildUrl,openIssue};
})();
