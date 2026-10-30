(function(root){
 'use strict';
 const KEY='quickrn_question_metrics_v1';
 function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
 function record(question,isCorrect,mode){
  if(!question)return null;
  const data=read(),id=String(question.id||question.questionId||question.questionText||question.question||'unknown');
  const item=data[id]||{correct:0,wrong:0,attempts:0,lastUpdated:null,modes:{}};
  item.attempts++;
  if(isCorrect)item.correct++;else item.wrong++;
  item.lastUpdated=new Date().toISOString();
  item.modes=item.modes||{};
  item.modes[mode||'practice']=(item.modes[mode||'practice']||0)+1;
  data[id]=item;
  try{localStorage.setItem(KEY,JSON.stringify(data));}catch(e){console.warn('Question metrics could not be saved',e);}
  try{root.dispatchEvent(new CustomEvent('quickrn:question-metric',{detail:{id,...item}}));}catch(e){}
  return item;
 }
 function get(questionId){const data=read();return data[String(questionId)]||{correct:0,wrong:0,attempts:0,lastUpdated:null,modes:{}}}
 function totals(){return Object.values(read()).reduce((a,x)=>({correct:a.correct+(x.correct||0),wrong:a.wrong+(x.wrong||0),attempts:a.attempts+(x.attempts||0)}),{correct:0,wrong:0,attempts:0})}
 root.QuickRNQuestionMetrics=Object.freeze({record,get,totals,storageKey:KEY,scope:'This browser profile only; not a cross-user community aggregate'});
})(typeof window!=='undefined'?window:globalThis);
