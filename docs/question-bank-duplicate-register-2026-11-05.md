# QuickRN Question-Bank Duplicate Register — 2026-11-05

## Scope and status
This register documents a confirmed exact-structure duplication in `questions-bank-matrix-grid-2026-11-04-batch-008.js`. The 200 source records contained 40 distinct full question structures, each repeated five times. Comparison serialized each complete question object after removing only its `id` field; all remaining fields, including stem, scenario, rows, options, correct answers, and rationale, matched exactly.

**Correction applied on branch:** retained `QR-003620`–`QR-003659` (40 records) and removed the four repeated IDs in each group (160 records). No retained IDs were renumbered. This register is not a claim that the entire 3,969-item bank has completed cross-module semantic review.

## Exact duplicate groups
| Retained ID | Exact duplicate IDs removed | Topic |
|---|---|---|
| QR-003620 | QR-003660, QR-003700, QR-003740, QR-003780 | Stroke |
| QR-003621 | QR-003661, QR-003701, QR-003741, QR-003781 | Sepsis |
| QR-003622 | QR-003662, QR-003702, QR-003742, QR-003782 | Acute coronary syndrome |
| QR-003623 | QR-003663, QR-003703, QR-003743, QR-003783 | Heart failure |
| QR-003624 | QR-003664, QR-003704, QR-003744, QR-003784 | COPD exacerbation |
| QR-003625 | QR-003665, QR-003705, QR-003745, QR-003785 | DKA |
| QR-003626 | QR-003666, QR-003706, QR-003746, QR-003786 | Hypoglycemia |
| QR-003627 | QR-003667, QR-003707, QR-003747, QR-003787 | Hyperkalemia |
| QR-003628 | QR-003668, QR-003708, QR-003748, QR-003788 | Acute kidney injury |
| QR-003629 | QR-003669, QR-003709, QR-003749, QR-003789 | GI hemorrhage |
| QR-003630 | QR-003670, QR-003710, QR-003750, QR-003790 | Pulmonary embolism |
| QR-003631 | QR-003671, QR-003711, QR-003751, QR-003791 | Anaphylaxis |
| QR-003632 | QR-003672, QR-003712, QR-003752, QR-003792 | Asthma |
| QR-003633 | QR-003673, QR-003713, QR-003753, QR-003793 | C. difficile |
| QR-003634 | QR-003674, QR-003714, QR-003754, QR-003794 | Pancreatitis |
| QR-003635 | QR-003675, QR-003715, QR-003755, QR-003795 | Bowel obstruction |
| QR-003636 | QR-003676, QR-003716, QR-003756, QR-003796 | Postoperative hemorrhage |
| QR-003637 | QR-003677, QR-003717, QR-003757, QR-003797 | Airway obstruction |
| QR-003638 | QR-003678, QR-003718, QR-003758, QR-003798 | Opioid toxicity |
| QR-003639 | QR-003679, QR-003719, QR-003759, QR-003799 | Status epilepticus |
| QR-003640 | QR-003680, QR-003720, QR-003760, QR-003800 | Meningitis |
| QR-003641 | QR-003681, QR-003721, QR-003761, QR-003801 | Raised intracranial pressure |
| QR-003642 | QR-003682, QR-003722, QR-003762, QR-003802 | Spinal injury |
| QR-003643 | QR-003683, QR-003723, QR-003763, QR-003803 | Inhalation injury |
| QR-003644 | QR-003684, QR-003724, QR-003764, QR-003804 | Compartment syndrome |
| QR-003645 | QR-003685, QR-003725, QR-003765, QR-003805 | DVT |
| QR-003646 | QR-003686, QR-003726, QR-003766, QR-003806 | Postpartum hemorrhage |
| QR-003647 | QR-003687, QR-003727, QR-003767, QR-003807 | Severe preeclampsia |
| QR-003648 | QR-003688, QR-003728, QR-003768, QR-003808 | Ectopic rupture |
| QR-003649 | QR-003689, QR-003729, QR-003769, QR-003809 | Newborn distress |
| QR-003650 | QR-003690, QR-003730, QR-003770, QR-003810 | Neonatal hypoglycemia |
| QR-003651 | QR-003691, QR-003731, QR-003771, QR-003811 | Pediatric dehydration |
| QR-003652 | QR-003692, QR-003732, QR-003772, QR-003812 | Croup |
| QR-003653 | QR-003693, QR-003733, QR-003773, QR-003813 | Suicide risk |
| QR-003654 | QR-003694, QR-003734, QR-003774, QR-003814 | Alcohol withdrawal |
| QR-003655 | QR-003695, QR-003735, QR-003775, QR-003815 | Lithium toxicity |
| QR-003656 | QR-003696, QR-003736, QR-003776, QR-003816 | Serotonin syndrome |
| QR-003657 | QR-003697, QR-003737, QR-003777, QR-003817 | Transfusion reaction |
| QR-003658 | QR-003698, QR-003738, QR-003778, QR-003818 | Neutropenic fever |
| QR-003659 | QR-003699, QR-003739, QR-003779, QR-003819 | Adrenal crisis |

## Results
- Before: 200 records
- Unique complete structures: 40
- Exact duplicate groups: 40
- Records removed: 160
- Retained: 40
- After: 40 records in this batch
- ID collisions: none detected in this batch; IDs were unique despite duplicate content.

## Remaining audit limitations
- The repository tracker recorded 3,305 loaded top-level records before this correction, while the requested count was 3,969. The 664-record discrepancy has not been reconciled.
- Cross-module exact and near-duplicate comparison across all loaded modules, including dynamically generated question sets, remains to be completed.
- Repeated clinical scenarios across different NGN formats or sequential case-study questions must not be removed solely because they share patient context; compare task, answer key, and rationale.
- Clinical correctness and nurse-educator review are separate from duplicate detection. The tracker reports no completed clinical reviews.
- Browser-level rendering and scoring across Self Study, Timed Practice, CAT, and NCLEX Predictor remain unverified by this content-only correction.

## Safe disposition
Only the 160 exact duplicate records listed above were removed. Other potentially repetitive items are left intact pending a complete item-by-item register and clinical/format review.
