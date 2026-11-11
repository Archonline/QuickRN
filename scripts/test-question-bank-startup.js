'use strict';
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const schema=require('../js/quickrn-question-schema-v2.js');
const source=fs.readFileSync(require.resolve('../js/quickrn-bank-startup-validator.js'),'utf8');
function run(items,withSchema=true){
 const sandbox={QuickRNQuestionBank:{items},console:{error(){}},Date,Set,Array,String,Number,Object};
 if(withSchema)sandbox.QuickRNQuestionSchemaV2=schema;
 vm.runInNewContext(source,sandbox,{filename:'quickrn-bank-startup-validator.js'});
 return sandbox;
}
assert.equal(schema.FORMATS.length,13,'schema must expose exactly 13 QuickRN formats');
const empty=run([]);
assert.equal(empty.QuickRNBankStartupValidation.status,'passed','empty rebuild bank should pass startup validation');
assert.equal(empty.quickRNBankReady,true);
const invalid=run([{id:'legacy-1',type:'Unknown',title:'Incomplete'}]);
assert.equal(invalid.QuickRNBankStartupValidation.status,'blocked','invalid active record must block exam delivery');
assert.equal(invalid.quickRNBankReady,false);
assert.ok(invalid.QuickRNBankStartupValidation.errors.some(x=>x.code==='INVALID_ID'));
assert.ok(invalid.QuickRNBankStartupValidation.errors.some(x=>x.code==='V2_UNKNOWN_FORMAT'));
const missingSchema=run([],false);
assert.equal(missingSchema.QuickRNBankStartupValidation.status,'blocked','missing schema must fail closed');
assert.equal(missingSchema.quickRNBankReady,false);
console.log('Question-bank startup tests passed; invalid or uninitialized banks are blocked.');
