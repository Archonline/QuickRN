#!/usr/bin/env node
/* Run: node scripts/validate-question-bank.js [path-to-questions.js]
 * Scans the full production question bank; writes reports/ngn-bank-validation.{md,json}.
 */
const fs=require('fs'),vm=require('vm'),path=require('path');
const file=path.resolve(process.argv[2]||'questions.js');
if(!fs.existsSync(file)){console.error('Question bank not found:',file);process.exit(2);}
const context={console,window:{}};
vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{timeout:120000,filename:file});
let bank=context.questions||context.embeddedQuestionsData||context.questionBank||context.window.questions||context.window.embeddedQuestionsData;
if(!Array.isArray(bank)){for(const name of ['questions','embeddedQuestionsData','questionBank']){try{const candidate=vm.runInNewContext(name,context);if(Array.isArray(candidate)){bank=candidate;break;}}catch{}}}
if(!Array.isArray(bank)){console.error('Could not locate a questions array in '+file);process.exit(3);}
function format(q){
 const s=[q.ngnType,q.type,q.format,q.questionType,q.itemType].filter(Boolean).join(' ').replace(/_/g,' ').toLowerCase();
 if(s.includes('highlight')||q.highlightText||q.highlightSegments||q.correctHighlights)return 'Highlight';
 if(s.includes('trend')||q.trendData||q.trends||q.trendTable)return 'Trend';
 if(s.includes('matrix')||s.includes('grid')||q.matrixData||(q.rows&&q.columns))return 'Matrix / Grid';
 if(s.includes('cloze')||s.includes('drop-down')||s.includes('dropdown')||q.clozeTemplate||q.dropdowns)return 'Cloze (Drop-down)';
 if(s.includes('drag')||s.includes('order')||q.availableItems||q.correctOrder)return 'Extended Drag and Drop';
 if(s.includes('bowtie')||q.bowtieData)return 'Bowtie';
 if(s.includes('extended multiple response'))return 'Extended Multiple Response';
 if(/single[_ -]?(?:choice|answer|best)|single best answer/.test(s))return 'Single Choice';
 if(s.includes('multiple response')||s.includes('select all')||s.includes('sata')||s.includes('select-n'))return 'Multiple Response';
 if(Array.isArray(q.correctAnswers)||Array.isArray(q.correctAnswer))return 'Multiple Response';
 return 'Single Choice';
}
// Mirror the client-side collision normalizer so reports describe the IDs the app will use.
const reservedQuestionIds=new Set(bank.filter(q=>q&&q.id).map(q=>String(q.id).trim()));
const usedQuestionIds=new Set();let duplicateIdsNormalized=0;
bank.forEach((q,index)=>{
 if(!q||typeof q!=='object')return;
 const base=String(q.id||('Q-'+(index+1))).trim()||('Q-'+(index+1));
 let candidate=base,suffix=2;
 if(usedQuestionIds.has(candidate)){
  do{candidate=base+'-DUP'+suffix;suffix++;}while(reservedQuestionIds.has(candidate)||usedQuestionIds.has(candidate));
 }
 if(candidate!==q.id){q.id=candidate;duplicateIdsNormalized++;}
 usedQuestionIds.add(candidate);
});
const formats=['Single Choice','Multiple Response','Matrix / Grid','Cloze (Drop-down)','Extended Drag and Drop','Bowtie','Extended Multiple Response','Highlight','Trend'];
const counts=Object.fromEntries(formats.map(x=>[x,0])),errors=[],qualityWarnings=[],samples={},caseGroups=new Set();
for(let i=0;i<bank.length;i++){
 const q=bank[i]||{},f=format(q);counts[f]=(counts[f]||0)+1;
 if(!samples[f])samples[f]=[];if(samples[f].length<5)samples[f].push(q.id||'record-'+(i+1));
 if(q.caseGroupId||q.caseTitle||q.caseStudy||q.case_study)caseGroups.add(q.caseGroupId||q.caseTitle||q.caseStudy||q.case_study);
 const issue=(code,message)=>errors.push({index:i,id:q.id||null,format:f,code,message});
 const stem=String(q.question||q.stem||q.title||'').trim();
 if(/^(?:Traditional NCLEX practice|NGN (?:Matrix \/ Grid|Cloze \(Drop-down\)|Extended Drag and Drop|Bowtie|Extended Multiple Response)|SATA)\s+\d+\s*[—-]/i.test(stem) ||
    /the client is alert and can answer questions|no written action plan is available|relevant medical history and several current assessment findings|reports a new symptom to the bedside nurse|vital signs have changed over the last hour/i.test(stem)){
  qualityWarnings.push({index:i,id:q.id||null,format:f,code:'GENERIC_TEMPLATE_STEM',message:'Stem contains generic/template wording; requires clinical educator review before beta use.'});
 }
 const options=Array.isArray(q.options)?q.options:[];
 const optionHas=value=>options.some(option=>[option&&option.id,option&&option.value,option&&option.text,option&&option.label].some(candidate=>candidate!==undefined&&String(candidate)===String(value)));
 if(f==='Single Choice'&&options.length){
  const key=q.correctAnswerText??q.correctAnswer;
  if(key!==undefined&&!optionHas(key))issue('ANSWER_NOT_IN_OPTIONS','Single-choice answer key does not match an option ID or text');
  if(Array.isArray(q.correctAnswers)&&!q.correctAnswers.every(optionHas))issue('ANSWER_IDS_NOT_IN_OPTIONS','Single-choice correctAnswers contains an unknown option');
 }
 if((f==='Multiple Response'||f==='Extended Multiple Response')&&Array.isArray(q.correctAnswers)&&options.length&&!q.correctAnswers.every(optionHas)){
  issue('ANSWER_IDS_NOT_IN_OPTIONS','Multiple-response answer key contains an unknown option');
 }
 if(f==='Matrix / Grid'){
  const rows=q.rows||q.matrixData?.rows||[],columns=q.columns||q.matrixData?.columns||[],answers=q.correctAnswers||{};
  if(rows.some((row,index)=>{const id=row.id||String(index);return !(id in answers)||!columns.includes(answers[id]);})||Object.keys(answers).length!==rows.length)issue('MATRIX_KEY_MISMATCH','Matrix answer keys must map every row to a valid column');
 }
 if(f==='Cloze (Drop-down)'){
  const answers=q.correctAnswers||{},choices=q.options||q.dropdowns||{};
  if(Object.entries(answers).some(([key,value])=>!Array.isArray(choices[key])||!choices[key].some(choice=>String(choice)===String(value))))issue('CLOZE_KEY_MISMATCH','Cloze answer key does not match its dropdown choices');
 }
 if(f==='Extended Drag and Drop'){
  const available=q.availableItems||[],order=q.correctOrder||[];
  if(!order.length||order.length!==available.length||order.some(value=>!available.some(item=>String(item)===String(value))))issue('ORDER_KEY_MISMATCH','Ordered-response answer key must use every available item exactly once');
 }
 if(f==='Bowtie'){
  const data=q.bowtieData||{},answers=q.correctAnswers||{};
  if(!Array.isArray(data.conditions)||!data.conditions.some(value=>String(value)===String(answers.condition))||
     !(answers.actions||[]).every(value=>(data.actions||[]).includes(value))||
     !(answers.monitoring||[]).every(value=>(data.monitoring||[]).includes(value)))issue('BOWTIE_KEY_MISMATCH','Bowtie answer key contains a choice not present in its response groups');
 }

 if(!String(q.title||q.questionText||q.question||q.cleanTitle||'').trim())issue('MISSING_PROMPT','No usable title or prompt');
 if(['Single Choice','Trend'].includes(f)&&(!Array.isArray(q.options)||!q.options.length))issue('MISSING_OPTIONS','Choice item has no options');
 if(f==='Single Choice'&&q.correctAnswer===undefined&&q.correctAnswerText===undefined)issue('MISSING_KEY','Single-choice item has no answer key');
 if(['Multiple Response','Extended Multiple Response'].includes(f)&&(!Array.isArray(q.options)||!q.options.length||!(Array.isArray(q.correctAnswers)||Array.isArray(q.correctAnswer))))issue('INVALID_MULTI_SCHEMA','Expected options and array answer key');
 if(f==='Matrix / Grid'&&(!(q.rows||q.matrixData?.rows)?.length||!(q.columns||q.matrixData?.columns)?.length||!q.correctAnswers))issue('INVALID_MATRIX_SCHEMA','Expected rows, columns, correctAnswers');
 if(f==='Cloze (Drop-down)'&&!(q.clozeTemplate||q.template||q.questionText||q.question))issue('MISSING_CLOZE_TEMPLATE','No cloze template or prompt');
 if(f==='Extended Drag and Drop'&&(!(q.availableItems||[]).length||!(q.correctOrder||[]).length))issue('INVALID_DRAG_SCHEMA','Expected availableItems and correctOrder');
 if(f==='Bowtie'&&(!q.bowtieData||!q.correctAnswers))issue('INVALID_BOWTIE_SCHEMA','Expected bowtieData and correctAnswers');
 if(f==='Highlight'&&(!(q.highlightText||q.passage||q.caseStudyText||q.highlightSegments||q.segments)||!(q.correctHighlights||q.correctAnswers?.highlights)))issue('INVALID_HIGHLIGHT_SCHEMA','Expected highlightable text/segments and correctHighlights');
 if(f==='Trend'&&(!(q.trendData||q.trends||q.trendTable)||!Array.isArray(q.options)||!q.options.length))issue('INVALID_TREND_SCHEMA','Expected trend data and response options');
}
const qualityWarningCountsByFormat={};
const qualityWarningSamples=[];
qualityWarnings.forEach(w=>{
 qualityWarningCountsByFormat[w.format]=(qualityWarningCountsByFormat[w.format]||0)+1;
 if(qualityWarningSamples.filter(sample=>sample.format===w.format).length<10)qualityWarningSamples.push(w);
});
const report={generatedAt:new Date().toISOString(),source:file,totalRecords:bank.length,formatCounts:counts,distinctCaseGroups:caseGroups.size,validationErrors:errors.length,qualityWarnings:qualityWarnings.length,qualityWarningCountsByFormat,qualityWarningSamples,duplicateIdsNormalized,errorSamples:errors.slice(0,500),sampleIds:samples};
fs.mkdirSync('reports',{recursive:true});fs.writeFileSync('reports/ngn-bank-validation.json',JSON.stringify(report,null,2));
const md=['# QuickRN real question-bank validation','',`- Generated: ${report.generatedAt}`,`- Source: ${file}`,`- Total records: ${bank.length}`,`- Distinct case groups: ${caseGroups.size}`,`- Duplicate IDs normalized: ${duplicateIdsNormalized}`,`- Validation errors: ${errors.length}`,`- Generic/template stems requiring educator review: ${qualityWarnings.length}`,'','## Format distribution','','| Format | Records |','|---|---:|',...Object.entries(counts).map(([k,v])=>`| ${k} | ${v} |`),'','## Quality warnings','','| Format | Records requiring review |','|---|---:|',...Object.entries(qualityWarningCountsByFormat).map(([k,v])=>`| ${k} | ${v} |`),'',...(qualityWarningSamples.length?qualityWarningSamples.map(e=>`- [${e.code}] ${e.id||e.index}: ${e.message}`):['No generic/template stem warnings detected.']),'','## Validation errors','',...(errors.length?errors.slice(0,100).map(e=>`- [${e.code}] ${e.id||e.index}: ${e.message}`):['No schema errors detected.']),''].join('\n');
fs.writeFileSync('reports/ngn-bank-validation.md',md);
console.log(JSON.stringify({totalRecords:bank.length,formatCounts:counts,distinctCaseGroups:caseGroups.size,duplicateIdsNormalized,qualityWarnings:qualityWarnings.length,qualityWarningCountsByFormat,validationErrors:errors.length},null,2));
if(errors.length)process.exitCode=1;
