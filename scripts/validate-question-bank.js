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
 const s=String(q.ngnType||q.type||q.format||q.questionType||q.itemType||'').toLowerCase();
 if(s.includes('highlight')||q.highlightText||q.highlightSegments||q.correctHighlights)return 'Highlight';
 if(s.includes('trend')||q.trendData||q.trends||q.trendTable)return 'Trend';
 if(s.includes('matrix')||s.includes('grid')||q.matrixData||(q.rows&&q.columns))return 'Matrix / Grid';
 if(s.includes('cloze')||s.includes('drop-down')||s.includes('dropdown')||q.clozeTemplate||q.dropdowns)return 'Cloze (Drop-down)';
 if(s.includes('drag')||s.includes('order')||q.availableItems||q.correctOrder)return 'Extended Drag and Drop';
 if(s.includes('bowtie')||q.bowtieData)return 'Bowtie';
 if(s.includes('extended multiple response'))return 'Extended Multiple Response';
 if(s.includes('multiple response')||s.includes('select all')||s.includes('sata')||Array.isArray(q.correctAnswers)||Array.isArray(q.correctAnswer))return 'Multiple Response';
 return 'Single Choice';
}
const formats=['Single Choice','Multiple Response','Matrix / Grid','Cloze (Drop-down)','Extended Drag and Drop','Bowtie','Extended Multiple Response','Highlight','Trend'];
const counts=Object.fromEntries(formats.map(x=>[x,0])),errors=[],samples={},caseGroups=new Set();
for(let i=0;i<bank.length;i++){
 const q=bank[i]||{},f=format(q);counts[f]=(counts[f]||0)+1;
 if(!samples[f])samples[f]=[];if(samples[f].length<5)samples[f].push(q.id||'record-'+(i+1));
 if(q.caseGroupId||q.caseTitle||q.caseStudy||q.case_study)caseGroups.add(q.caseGroupId||q.caseTitle||q.caseStudy||q.case_study);
 const issue=(code,message)=>errors.push({index:i,id:q.id||null,format:f,code,message});
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
const report={generatedAt:new Date().toISOString(),source:file,totalRecords:bank.length,formatCounts:counts,distinctCaseGroups:caseGroups.size,validationErrors:errors.length,errorSamples:errors.slice(0,500),sampleIds:samples};
fs.mkdirSync('reports',{recursive:true});fs.writeFileSync('reports/ngn-bank-validation.json',JSON.stringify(report,null,2));
const md=['# QuickRN real question-bank validation','',`- Generated: ${report.generatedAt}`,`- Source: ${file}`,`- Total records: ${bank.length}`,`- Distinct case groups: ${caseGroups.size}`,`- Validation errors: ${errors.length}`,'','## Format distribution','','| Format | Records |','|---|---:|',...Object.entries(counts).map(([k,v])=>`| ${k} | ${v} |`),'','## Validation errors','',...(errors.length?errors.slice(0,100).map(e=>`- [${e.code}] ${e.id||e.index}: ${e.message}`):['No schema errors detected.']),''].join('\n');
fs.writeFileSync('reports/ngn-bank-validation.md',md);
console.log(JSON.stringify({totalRecords:bank.length,formatCounts:counts,distinctCaseGroups:caseGroups.size,validationErrors:errors.length},null,2));
if(errors.length)process.exitCode=1;
