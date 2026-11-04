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


---

## Additional source-level duplicate-template cleanup — 2026-11-05

The following generated records were removed from their source generators. These are duplicate task/template families, not just duplicate IDs. The retained records preserve the unique task/calculation/classification patterns and the distinct sequential NGN case groups.

### Batch 003 — repeated single-choice tasks

- Removed 450 generated variants; retained 50 distinct tasks, IDs `QR-001420`–`QR-001469`.
- The 500-item generator repeated the same 50 clinical questions ten times. Only the client age/unit context changed; the correct answer, distractors, and rationale stayed the same.
- Removed IDs:

| Removed IDs | Reason |
|---|---|
| QR-001470, QR-001471, QR-001472, QR-001473, QR-001474, QR-001475, QR-001476, QR-001477, QR-001478, QR-001479 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001480, QR-001481, QR-001482, QR-001483, QR-001484, QR-001485, QR-001486, QR-001487, QR-001488, QR-001489 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001490, QR-001491, QR-001492, QR-001493, QR-001494, QR-001495, QR-001496, QR-001497, QR-001498, QR-001499 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001500, QR-001501, QR-001502, QR-001503, QR-001504, QR-001505, QR-001506, QR-001507, QR-001508, QR-001509 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001510, QR-001511, QR-001512, QR-001513, QR-001514, QR-001515, QR-001516, QR-001517, QR-001518, QR-001519 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001520, QR-001521, QR-001522, QR-001523, QR-001524, QR-001525, QR-001526, QR-001527, QR-001528, QR-001529 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001530, QR-001531, QR-001532, QR-001533, QR-001534, QR-001535, QR-001536, QR-001537, QR-001538, QR-001539 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001540, QR-001541, QR-001542, QR-001543, QR-001544, QR-001545, QR-001546, QR-001547, QR-001548, QR-001549 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001550, QR-001551, QR-001552, QR-001553, QR-001554, QR-001555, QR-001556, QR-001557, QR-001558, QR-001559 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001560, QR-001561, QR-001562, QR-001563, QR-001564, QR-001565, QR-001566, QR-001567, QR-001568, QR-001569 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001570, QR-001571, QR-001572, QR-001573, QR-001574, QR-001575, QR-001576, QR-001577, QR-001578, QR-001579 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001580, QR-001581, QR-001582, QR-001583, QR-001584, QR-001585, QR-001586, QR-001587, QR-001588, QR-001589 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001590, QR-001591, QR-001592, QR-001593, QR-001594, QR-001595, QR-001596, QR-001597, QR-001598, QR-001599 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001600, QR-001601, QR-001602, QR-001603, QR-001604, QR-001605, QR-001606, QR-001607, QR-001608, QR-001609 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001610, QR-001611, QR-001612, QR-001613, QR-001614, QR-001615, QR-001616, QR-001617, QR-001618, QR-001619 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001620, QR-001621, QR-001622, QR-001623, QR-001624, QR-001625, QR-001626, QR-001627, QR-001628, QR-001629 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001630, QR-001631, QR-001632, QR-001633, QR-001634, QR-001635, QR-001636, QR-001637, QR-001638, QR-001639 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001640, QR-001641, QR-001642, QR-001643, QR-001644, QR-001645, QR-001646, QR-001647, QR-001648, QR-001649 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001650, QR-001651, QR-001652, QR-001653, QR-001654, QR-001655, QR-001656, QR-001657, QR-001658, QR-001659 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001660, QR-001661, QR-001662, QR-001663, QR-001664, QR-001665, QR-001666, QR-001667, QR-001668, QR-001669 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001670, QR-001671, QR-001672, QR-001673, QR-001674, QR-001675, QR-001676, QR-001677, QR-001678, QR-001679 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001680, QR-001681, QR-001682, QR-001683, QR-001684, QR-001685, QR-001686, QR-001687, QR-001688, QR-001689 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001690, QR-001691, QR-001692, QR-001693, QR-001694, QR-001695, QR-001696, QR-001697, QR-001698, QR-001699 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001700, QR-001701, QR-001702, QR-001703, QR-001704, QR-001705, QR-001706, QR-001707, QR-001708, QR-001709 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001710, QR-001711, QR-001712, QR-001713, QR-001714, QR-001715, QR-001716, QR-001717, QR-001718, QR-001719 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001720, QR-001721, QR-001722, QR-001723, QR-001724, QR-001725, QR-001726, QR-001727, QR-001728, QR-001729 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001730, QR-001731, QR-001732, QR-001733, QR-001734, QR-001735, QR-001736, QR-001737, QR-001738, QR-001739 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001740, QR-001741, QR-001742, QR-001743, QR-001744, QR-001745, QR-001746, QR-001747, QR-001748, QR-001749 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001750, QR-001751, QR-001752, QR-001753, QR-001754, QR-001755, QR-001756, QR-001757, QR-001758, QR-001759 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001760, QR-001761, QR-001762, QR-001763, QR-001764, QR-001765, QR-001766, QR-001767, QR-001768, QR-001769 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001770, QR-001771, QR-001772, QR-001773, QR-001774, QR-001775, QR-001776, QR-001777, QR-001778, QR-001779 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001780, QR-001781, QR-001782, QR-001783, QR-001784, QR-001785, QR-001786, QR-001787, QR-001788, QR-001789 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001790, QR-001791, QR-001792, QR-001793, QR-001794, QR-001795, QR-001796, QR-001797, QR-001798, QR-001799 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001800, QR-001801, QR-001802, QR-001803, QR-001804, QR-001805, QR-001806, QR-001807, QR-001808, QR-001809 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001810, QR-001811, QR-001812, QR-001813, QR-001814, QR-001815, QR-001816, QR-001817, QR-001818, QR-001819 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001820, QR-001821, QR-001822, QR-001823, QR-001824, QR-001825, QR-001826, QR-001827, QR-001828, QR-001829 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001830, QR-001831, QR-001832, QR-001833, QR-001834, QR-001835, QR-001836, QR-001837, QR-001838, QR-001839 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001840, QR-001841, QR-001842, QR-001843, QR-001844, QR-001845, QR-001846, QR-001847, QR-001848, QR-001849 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001850, QR-001851, QR-001852, QR-001853, QR-001854, QR-001855, QR-001856, QR-001857, QR-001858, QR-001859 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001860, QR-001861, QR-001862, QR-001863, QR-001864, QR-001865, QR-001866, QR-001867, QR-001868, QR-001869 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001870, QR-001871, QR-001872, QR-001873, QR-001874, QR-001875, QR-001876, QR-001877, QR-001878, QR-001879 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001880, QR-001881, QR-001882, QR-001883, QR-001884, QR-001885, QR-001886, QR-001887, QR-001888, QR-001889 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001890, QR-001891, QR-001892, QR-001893, QR-001894, QR-001895, QR-001896, QR-001897, QR-001898, QR-001899 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001900, QR-001901, QR-001902, QR-001903, QR-001904, QR-001905, QR-001906, QR-001907, QR-001908, QR-001909 | Same question task, answer key, distractors and rationale; context-only clone |
| QR-001910, QR-001911, QR-001912, QR-001913, QR-001914, QR-001915, QR-001916, QR-001917, QR-001918, QR-001919 | Same question task, answer key, distractors and rationale; context-only clone |

### Batch 005 — repeated NGN case-study groups

- Removed 250 records, representing 50 repeated five-question case groups.
- Retained the first 50 case groups (250 sequential records). Removed the second variant of each case, which changed only demographic/context details while preserving the same task sequence and keys.
- Removed IDs:

| Removed IDs | Reason |
|---|---|
| QR-002425, QR-002426, QR-002427, QR-002428, QR-002429, QR-002435, QR-002436, QR-002437, QR-002438, QR-002439 | Repeated five-question case group; only demographic/context wording changed |
| QR-002445, QR-002446, QR-002447, QR-002448, QR-002449, QR-002455, QR-002456, QR-002457, QR-002458, QR-002459 | Repeated five-question case group; only demographic/context wording changed |
| QR-002465, QR-002466, QR-002467, QR-002468, QR-002469, QR-002475, QR-002476, QR-002477, QR-002478, QR-002479 | Repeated five-question case group; only demographic/context wording changed |
| QR-002485, QR-002486, QR-002487, QR-002488, QR-002489, QR-002495, QR-002496, QR-002497, QR-002498, QR-002499 | Repeated five-question case group; only demographic/context wording changed |
| QR-002505, QR-002506, QR-002507, QR-002508, QR-002509, QR-002515, QR-002516, QR-002517, QR-002518, QR-002519 | Repeated five-question case group; only demographic/context wording changed |
| QR-002525, QR-002526, QR-002527, QR-002528, QR-002529, QR-002535, QR-002536, QR-002537, QR-002538, QR-002539 | Repeated five-question case group; only demographic/context wording changed |
| QR-002545, QR-002546, QR-002547, QR-002548, QR-002549, QR-002555, QR-002556, QR-002557, QR-002558, QR-002559 | Repeated five-question case group; only demographic/context wording changed |
| QR-002565, QR-002566, QR-002567, QR-002568, QR-002569, QR-002575, QR-002576, QR-002577, QR-002578, QR-002579 | Repeated five-question case group; only demographic/context wording changed |
| QR-002585, QR-002586, QR-002587, QR-002588, QR-002589, QR-002595, QR-002596, QR-002597, QR-002598, QR-002599 | Repeated five-question case group; only demographic/context wording changed |
| QR-002605, QR-002606, QR-002607, QR-002608, QR-002609, QR-002615, QR-002616, QR-002617, QR-002618, QR-002619 | Repeated five-question case group; only demographic/context wording changed |
| QR-002625, QR-002626, QR-002627, QR-002628, QR-002629, QR-002635, QR-002636, QR-002637, QR-002638, QR-002639 | Repeated five-question case group; only demographic/context wording changed |
| QR-002645, QR-002646, QR-002647, QR-002648, QR-002649, QR-002655, QR-002656, QR-002657, QR-002658, QR-002659 | Repeated five-question case group; only demographic/context wording changed |
| QR-002665, QR-002666, QR-002667, QR-002668, QR-002669, QR-002675, QR-002676, QR-002677, QR-002678, QR-002679 | Repeated five-question case group; only demographic/context wording changed |
| QR-002685, QR-002686, QR-002687, QR-002688, QR-002689, QR-002695, QR-002696, QR-002697, QR-002698, QR-002699 | Repeated five-question case group; only demographic/context wording changed |
| QR-002705, QR-002706, QR-002707, QR-002708, QR-002709, QR-002715, QR-002716, QR-002717, QR-002718, QR-002719 | Repeated five-question case group; only demographic/context wording changed |
| QR-002725, QR-002726, QR-002727, QR-002728, QR-002729, QR-002735, QR-002736, QR-002737, QR-002738, QR-002739 | Repeated five-question case group; only demographic/context wording changed |
| QR-002745, QR-002746, QR-002747, QR-002748, QR-002749, QR-002755, QR-002756, QR-002757, QR-002758, QR-002759 | Repeated five-question case group; only demographic/context wording changed |
| QR-002765, QR-002766, QR-002767, QR-002768, QR-002769, QR-002775, QR-002776, QR-002777, QR-002778, QR-002779 | Repeated five-question case group; only demographic/context wording changed |
| QR-002785, QR-002786, QR-002787, QR-002788, QR-002789, QR-002795, QR-002796, QR-002797, QR-002798, QR-002799 | Repeated five-question case group; only demographic/context wording changed |
| QR-002805, QR-002806, QR-002807, QR-002808, QR-002809, QR-002815, QR-002816, QR-002817, QR-002818, QR-002819 | Repeated five-question case group; only demographic/context wording changed |
| QR-002825, QR-002826, QR-002827, QR-002828, QR-002829, QR-002835, QR-002836, QR-002837, QR-002838, QR-002839 | Repeated five-question case group; only demographic/context wording changed |
| QR-002845, QR-002846, QR-002847, QR-002848, QR-002849, QR-002855, QR-002856, QR-002857, QR-002858, QR-002859 | Repeated five-question case group; only demographic/context wording changed |
| QR-002865, QR-002866, QR-002867, QR-002868, QR-002869, QR-002875, QR-002876, QR-002877, QR-002878, QR-002879 | Repeated five-question case group; only demographic/context wording changed |
| QR-002885, QR-002886, QR-002887, QR-002888, QR-002889, QR-002895, QR-002896, QR-002897, QR-002898, QR-002899 | Repeated five-question case group; only demographic/context wording changed |
| QR-002905, QR-002906, QR-002907, QR-002908, QR-002909, QR-002915, QR-002916, QR-002917, QR-002918, QR-002919 | Repeated five-question case group; only demographic/context wording changed |

### Priority batch 007 — repeated numeric and matrix templates

- Removed 120 numeric-entry variants; retained the first 30 distinct calculation templates.
- Removed 134 matrix/grid variants; retained the first 16 distinct classification structures. The removed copies only added a presentation suffix to otherwise identical rows and answer mappings.
- Preserved all 40 distinct five-question case groups (200 sequential records).
- Removed IDs:

| Removed IDs | Reason |
|---|---|
| QR-004050, QR-004051, QR-004052, QR-004053, QR-004054, QR-004055, QR-004056, QR-004057, QR-004058, QR-004059 | Repeated calculation template with substituted values; one template retained |
| QR-004060, QR-004061, QR-004062, QR-004063, QR-004064, QR-004065, QR-004066, QR-004067, QR-004068, QR-004069 | Repeated calculation template with substituted values; one template retained |
| QR-004070, QR-004071, QR-004072, QR-004073, QR-004074, QR-004075, QR-004076, QR-004077, QR-004078, QR-004079 | Repeated calculation template with substituted values; one template retained |
| QR-004080, QR-004081, QR-004082, QR-004083, QR-004084, QR-004085, QR-004086, QR-004087, QR-004088, QR-004089 | Repeated calculation template with substituted values; one template retained |
| QR-004090, QR-004091, QR-004092, QR-004093, QR-004094, QR-004095, QR-004096, QR-004097, QR-004098, QR-004099 | Repeated calculation template with substituted values; one template retained |
| QR-004100, QR-004101, QR-004102, QR-004103, QR-004104, QR-004105, QR-004106, QR-004107, QR-004108, QR-004109 | Repeated calculation template with substituted values; one template retained |
| QR-004110, QR-004111, QR-004112, QR-004113, QR-004114, QR-004115, QR-004116, QR-004117, QR-004118, QR-004119 | Repeated calculation template with substituted values; one template retained |
| QR-004120, QR-004121, QR-004122, QR-004123, QR-004124, QR-004125, QR-004126, QR-004127, QR-004128, QR-004129 | Repeated calculation template with substituted values; one template retained |
| QR-004130, QR-004131, QR-004132, QR-004133, QR-004134, QR-004135, QR-004136, QR-004137, QR-004138, QR-004139 | Repeated calculation template with substituted values; one template retained |
| QR-004140, QR-004141, QR-004142, QR-004143, QR-004144, QR-004145, QR-004146, QR-004147, QR-004148, QR-004149 | Repeated calculation template with substituted values; one template retained |
| QR-004150, QR-004151, QR-004152, QR-004153, QR-004154, QR-004155, QR-004156, QR-004157, QR-004158, QR-004159 | Repeated calculation template with substituted values; one template retained |
| QR-004160, QR-004161, QR-004162, QR-004163, QR-004164, QR-004165, QR-004166, QR-004167, QR-004168, QR-004169 | Repeated calculation template with substituted values; one template retained |

| Removed IDs | Reason |
|---|---|
| QR-004186, QR-004187, QR-004188, QR-004189, QR-004190, QR-004191, QR-004192, QR-004193, QR-004194, QR-004195 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004196, QR-004197, QR-004198, QR-004199, QR-004200, QR-004201, QR-004202, QR-004203, QR-004204, QR-004205 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004206, QR-004207, QR-004208, QR-004209, QR-004210, QR-004211, QR-004212, QR-004213, QR-004214, QR-004215 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004216, QR-004217, QR-004218, QR-004219, QR-004220, QR-004221, QR-004222, QR-004223, QR-004224, QR-004225 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004226, QR-004227, QR-004228, QR-004229, QR-004230, QR-004231, QR-004232, QR-004233, QR-004234, QR-004235 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004236, QR-004237, QR-004238, QR-004239, QR-004240, QR-004241, QR-004242, QR-004243, QR-004244, QR-004245 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004246, QR-004247, QR-004248, QR-004249, QR-004250, QR-004251, QR-004252, QR-004253, QR-004254, QR-004255 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004256, QR-004257, QR-004258, QR-004259, QR-004260, QR-004261, QR-004262, QR-004263, QR-004264, QR-004265 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004266, QR-004267, QR-004268, QR-004269, QR-004270, QR-004271, QR-004272, QR-004273, QR-004274, QR-004275 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004276, QR-004277, QR-004278, QR-004279, QR-004280, QR-004281, QR-004282, QR-004283, QR-004284, QR-004285 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004286, QR-004287, QR-004288, QR-004289, QR-004290, QR-004291, QR-004292, QR-004293, QR-004294, QR-004295 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004296, QR-004297, QR-004298, QR-004299, QR-004300, QR-004301, QR-004302, QR-004303, QR-004304, QR-004305 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004306, QR-004307, QR-004308, QR-004309, QR-004310, QR-004311, QR-004312, QR-004313, QR-004314, QR-004315 | Repeated matrix classification template with superficial row suffix; one template retained |
| QR-004316, QR-004317, QR-004318, QR-004319 | Repeated matrix classification template with superficial row suffix; one template retained |

### Cleanup totals and validation status

- Previously confirmed exact Matrix/Grid duplicates removed: 160.
- Additional generator records removed from source: 954.
- Cumulative source records removed: 1,114.
- Retained from the four affected batches: Matrix/Grid batch 008 = 40; batch 003 = 50; batch 005 = 250; priority batch 007 = 246 (30 numeric + 16 matrix + 200 sequential case-study records).
- Tracker-derived projected bank total: 2,193, not yet browser-runtime certified. The previous tracker had a two-record difference between generated and appended records in batch 003; exact runtime contribution after reduction must be re-run.
- No files were changed on `main`; all edits remain on the review branch.
- All remaining question content is still draft material pending qualified nurse-educator validation. Duplicate cleanup does not certify clinical correctness.
