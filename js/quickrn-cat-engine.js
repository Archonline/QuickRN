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
  // Posterior probability that ability is above the passing cut score (theta = 0).
  // This is a model-based estimate, not an official NCLEX pass prediction.
  function normalCdf(z){
    const x=Math.abs(z)/Math.sqrt(2);
    const t=1/(1+0.3275911*x);
    const erf=1-(((((1.061405429*t-1.453152027)*t)+1.421413741)*t-0.284496736)*t+0.254829592)*t*Math.exp(-x*x);
    return Math.max(0,Math.min(1,0.5*(1+(z<0?-erf:erf))));
  }
  // Approximate instructional cut score: 65% expected success on average-difficulty items.
  // This is a simulation standard, not an NCSBN-published raw-score conversion.
  const PASSING_THETA_THRESHOLD=Math.log(0.65/0.35);
  function evaluate(responses,forceFinal){
    const n=(responses||[]).length, model=estimate(responses);
    const distanceToStandard=model.theta-PASSING_THETA_THRESHOLD;
    const passProbability=Math.round(normalCdf(distanceToStandard/Math.max(model.se,0.0001))*100);
    const base={...model,passProbability,distanceToStandard:Number(distanceToStandard.toFixed(3)),passingTheta:PASSING_THETA_THRESHOLD,items:n};
    if(n<85)return {...base,status:'CONTINUE',checkpoint:false,reason:'Minimum 85 items required before a CAT decision'};
    if(model.lower>PASSING_THETA_THRESHOLD)return {...base,status:'PASS',checkpoint:true,reason:'95% confidence interval is above the practice passing standard'};
    if(model.upper<PASSING_THETA_THRESHOLD)return {...base,status:'FAIL',checkpoint:true,reason:'95% confidence interval is below the practice passing standard'};
    if(n>=150||forceFinal)return {...base,status:model.theta>=PASSING_THETA_THRESHOLD?'PASS':'FAIL',checkpoint:true,reason:'Maximum item limit reached; final ability estimate used'};
    return {...base,status:'CONTINUE',checkpoint:true,reason:'Performance remains too close to the practice passing standard; continue testing'};
  }
  root.QuickRNCAT=Object.freeze({estimate,evaluate,normalCdf,MIN_ITEMS:85,MAX_ITEMS:150,PASSING_THETA_THRESHOLD});
})(typeof window!=='undefined'?window:globalThis);
