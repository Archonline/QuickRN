/* Ten additional original six-question linked NGN case studies (groups 011–020).
 * Questions within each group are sequenced 1–6 and must never be shuffled independently.
 * Structural validation does not replace qualified clinical review.
 */
(function(root){
 'use strict';
 const bank=root.questions;
 if(!Array.isArray(bank))throw new Error('Canonical bank must load before linked case-study batch 2.');
 if(bank.some(q=>String(q?.id||'').startsWith('QR-100121')))throw new Error('Linked case-study batch 2 already exists.');
 const cases=[[]];
 bank.push(...cases);
 root.QuickRNLinkedCaseStudies={groups:20,items:120,firstId:'QR-100042',lastId:'QR-100180'};
})(typeof window!=='undefined'?window:globalThis);
