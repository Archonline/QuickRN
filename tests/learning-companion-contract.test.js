const fs=require('fs');const assert=require('assert');
const read=p=>fs.readFileSync(p,'utf8');
const bank=read('questions-ngn-supplement.js');
for(const id of ['QR-CASE-HF-01','QR-CASE-HF-02','QR-CASE-HF-03','QR-CASE-HF-04','QR-CASE-HF-05','QR-CASE-HF-06'])assert(bank.includes(id),'Missing linked case item '+id);
for(const field of ['caseStudyContext','patientInfo','nursesNotes','vitalSigns','diagnosticResults','trendData','highlightSegments','matrixData','bowtieData','correctNumericAnswer'])assert(bank.includes(field),'Missing clinical case schema field '+field);
const companion=read('js/quickrn-learning-companion.js');
for(const token of ['Clinical reasoning companion','QuickRN Video Study Room','qr-video-notes','pubmed.ncbi.nlm.nih.gov'])assert(companion.includes(token),'Missing learning companion feature '+token);
for(const page of ['selfstudy.html','timed.html','predictor.html','cat.html']){
 const html=read(page);const a=html.indexOf('js/quickrn-learning-companion.js'),b=html.indexOf('js/quickrn-exam-app.js');
 assert(a>=0&&b>a,page+' must load Learning Companion before exam app');
}
assert(read('index.html').includes('id="learning-path"'),'Landing page guided learning section missing');
console.log('Learning companion and linked NGN case contract passed.');
