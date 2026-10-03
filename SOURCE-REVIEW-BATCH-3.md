> Historical record: this document describes the shortened article versions before original-content recovery. All 76 original articles were reinstated on 2026-10-03; these prior findings do not verify the recovered prose. See CONTENT-RECOVERY-STATUS.md.

# Source-based review — pregnancy calculation and timing batch 3

Reviewed October 3, 2026. This batch covers five content pages and their rendered calculator, metadata, shared cards and formula/data code. The 76-row content inventory now records 33 reviewed entries and 43 entries awaiting claim-by-claim review; this count includes the pregnancy food checker, a tool page, in addition to articles. The wider site has not been represented as verified. This is source-based editorial review, not practitioner review.

## Page-by-page evidence decisions

| Page | Retained and corrected claims | Scope and source record |
|---|---|---|
| `/pregnancy/weight-gain-calculator` | BMI from pre-pregnancy weight and height; gain as current minus pre-pregnancy weight; singleton U.S. total ranges by BMI; twin ranges separated; underweight twin result visibly identified as a separate CDC-cited study; no weekly curve or higher-multiple target inferred. The page and result identify U.S. population scope and say personal goals require individual clinical judgment. | National Academies 2009 Summary Table S-1, U.S. scope and clinical-judgment passage; CDC summary/table and its explicit exception for underweight twins. Exact numerical ranges and BMI thresholds checked. |
| `/pregnancy/fetal-weight-percentile` | Kept the calculator withdrawn because no validated single reference implementation is present. Added SMFM's definition of fetal growth restriction (EFW or abdominal circumference below the 10th percentile for gestational age) and its recommendation to use a population-based growth reference such as Hadlock. Clarified this site does not calculate or diagnose FGR. | SMFM Consult Series #52, reaffirmed 2024; ACOG monitoring FAQ retained as additional reading. No site percentile or treatment inference is generated. |
| `/pregnancy/baby-growth-percentile` | Checked the tool's WHO daily LMS data, units (kg, completed days), supported interval (0–1,826 days), output limits (z scores −3 to +3), sex-specific boys/girls source tables, and weight-for-age-only scope. Added the U.S. chart transition: CDC recommends WHO birth–2 years, then CDC charts from age 2. Metadata/cards now identify this as a WHO reference and say local clinical chart practice may differ. | WHO official weight-for-age charts and published expanded tables; CDC recommended U.S. charts. Both bundled JSON SHA-256 checksums match the recorded release files in `src/lib/reference-data/README.md`. Tests check medians and that calculated WHO P3/P97 values map back to 3/97 at sampled ages and both sex tables. |
| `/pregnancy/contraction-timer` | Removed unsupported ACOG attribution of the 5-1-1 rule, 7-1-1 advice, labor stage/dilation tables, Braxton Hicks comparison, symptom triage table, and unverified hospital-arrival triggers from article, QuickAnswer, metadata, cards, diagrams and UI. The tool now only records duration and start-to-start intervals and reports arithmetic summaries. It explicitly says it cannot assess labor or decide when to seek care. Fixed mutation of a nested entry during stop. | ACOG “How to Tell When Labor Begins” and “Preterm Labor and Birth.” ACOG guidance does not establish the removed timer pattern as a universal arrival rule. Arithmetic regression checks durations and intervals without any labor threshold. |
| `/guides/8-dpo-pregnancy-test` | Retained early-negative uncertainty and test-instruction guidance. Removed viability/location interpretations and other claims that the FDA source did not establish. Clarified urine tests are qualitative and line shade is not a quantitative hCG value. | FDA Home Use Tests: Pregnancy. FDA says urine hCG is detectable about 12–15 days after ovulation in a 28-day cycle, early testing can produce a negative despite pregnancy, and test performance depends on following instructions. The page's 8-DPO framing is not presented as a guaranteed detection day. |

## Source links

- [National Academies: Weight Gain During Pregnancy, Table S-1 and intended U.S. scope](https://www.nationalacademies.org/read/12584/chapter/2)
- [CDC: Weight Gain During Pregnancy](https://www.cdc.gov/maternal-infant-health/pregnancy-weight/index.html)
- [SMFM Consult Series #52: Diagnosis and Management of Fetal Growth Restriction](https://publications.smfm.org/publications/289-society-for-maternal-fetal-medicine-consult-series-52/)
- [ACOG: Tests for Monitoring Fetal Wellbeing](https://www.acog.org/womens-health/faqs/special-tests-for-monitoring-fetal-well-being)
- [WHO: Weight-for-age standards and tables](https://www.who.int/tools/child-growth-standards/standards/weight-for-age)
- [CDC: Recommended Growth Charts](https://www.cdc.gov/growth-chart-training/hcp/overview/recommended.html)
- [ACOG: How to Tell When Labor Begins](https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins)
- [ACOG: Preterm Labor and Birth](https://www.acog.org/womens-health/faqs/preterm-labor-and-birth)
- [FDA: Home Pregnancy Tests](https://www.fda.gov/medical-devices/home-use-tests/pregnancy)

## Verification and limits

`npm test`, `npm run typecheck`, `npm run lint`, and `npm run build` passed after the code/content edits; the production build generated 94 routes and the sitemap. WHO dataset checksums match the checked-in reference-data record. The initial sandbox port-binding restriction was resolved for the second pass. The five-page Chrome check, broader calculator regressions and all 90 sitemap-page checks now pass; see `RECHECK-BATCH-3-2026-10-03.md`. Review inventory duplicate records from batch 2 were merged into the corresponding canonical article rows so every reviewed file has one status entry. Source hashes and URLs are recorded in `page-review-inventory.json`.

The 43 inventory entries still awaiting claim-by-claim review remain unreviewed. This batch does not certify the entire site or confer clinical review.
