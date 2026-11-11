/* QuickRN canonical question bank.
 * This intentionally starts empty. Only clinically reviewed, schema-valid records
 * may be added here. Candidate drafts belong outside this runtime data file.
 */
(function(root){
 'use strict';
 const bank=[];
 Object.defineProperty(root,'questions',{configurable:false,enumerable:true,get:()=>bank});
 root.QuickRNQuestionBank={version:1,items:bank};
})(typeof window!=='undefined'?window:globalThis);
