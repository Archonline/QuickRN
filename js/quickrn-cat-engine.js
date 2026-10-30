(function(root){
  'use strict';
  function estimate(responses){
    let theta=0, information=1;
    for(let iteration=0;iteration<12;iteration++){
      let score=-theta, info=1;
      for(const item of responses||[]){
        const q=item.q||item.question||item;
        const y=item.correct===undefined?!!item.isCorrect:!!item.correct;
        const a=Math.max(0.5,Math.min(2.5,Number(q.discrimination)||1));
        const b=Math.max(-3,Math.min(3,Number(q.difficulty)||0));
        const z=Math.max(-8,Math.min(8,a*(theta-b)));
        const p=1/(1+Math.exp(-z));
        score+=a*(Number(y)-p);
        info+=a*a*p*(1-p);
      }
      const delta=score/info;
      theta=Math.max(-4,Math.min(4,theta+delta));
      information=info;
      if(Math.abs(delta)<0.001)break;
    }
    const se=1/Math.sqrt(information);
    return {theta,se,lower:theta-1.96*se,upper:theta+1.96*se,information};
  }
  function evaluate(responses,forceFinal){
    const n=(responses||[]).length, model=estimate(responses);
    if(n<85)return {...model,status:'CONTINUE',items:n,checkpoint:false};
    if(model.lower>0)return {...model,status:'PASS',items:n,checkpoint:true,reason:'95% confidence interval is above the passing standard'};
    if(model.upper<0)return {...model,status:'FAIL',items:n,checkpoint:true,reason:'95% confidence interval is below the passing standard'};
    if(n>=150||forceFinal)return {...model,status:model.theta>=0?'PASS':'FAIL',items:n,checkpoint:true,reason:'Maximum item limit reached; final ability estimate used'};
    return {...model,status:'CONTINUE',items:n,checkpoint:true,reason:'Performance remains too close to the standard; continue testing'};
  }
  root.QuickRNCAT=Object.freeze({estimate,evaluate,MIN_ITEMS:85,MAX_ITEMS:150});
})(typeof window!=='undefined'?window:globalThis);
