> Historical record: this document describes the shortened article versions before original-content recovery. All 76 original articles were reinstated on 2026-10-03; these prior findings do not verify the recovered prose. See CONTENT-RECOVERY-STATUS.md.

# Batch 3 second source and implementation verification

October 3, 2026. Five pages were checked again against their complete article, calculator/result text, quick answer, metadata, source links, shared cards and existing disclaimer. This is source-based review. It does not establish practitioner approval or verify the 43 inventory pages outside the completed scope.

## Evidence checks

| Page | Specific evidence read and second-pass decisions |
|---|---|
| Pregnancy weight gain | National Academies Summary Table S-1 and BMI cutoffs; the U.S. population scope paragraph; provisional twin ranges and insufficient evidence for underweight twins; CDC's singleton/twin tables and underweight twin source note. The CDC-cited Luke paper's PubMed abstract explicitly describes a historical cohort. Corrected remaining social-description wording, disclosed provisional twin guidance, and labelled the displayed kilogram range as an arithmetic conversion from the source pound range. The source's separately rounded kg values are not misrepresented as that conversion. |
| Fetal weight percentiles | SMFM Consult Series #52 recommendations 1 and 2, reaffirmed 2024, specify sonographic EFW or abdominal circumference below the 10th percentile for gestational age and a population-based reference such as Hadlock. The tool produces no percentile or clinical decision. Removed old implementation-history wording from the public explanatory notice. |
| Baby weight-for-age | Downloaded both official WHO expanded XLSX files again and compared every `[completedDays,L,M,S]` row against the bundled JSON: all 1,857 rows per sex matched exactly. Independently checked the implementation against published rounded −2/+2 SD weights at five ages for each sex. WHO module C, annex 1, printed page 48 supplies the LMS formula and the need for a modified formula beyond ±3; the tool withholds those extreme outputs. CDC's recommended U.S. chart choices and its growth-pattern interpretation passage support the chart transition and series-of-measurements wording. Aligned all social metadata and validated reference-sex inputs. |
| Contraction timer | ACOG indexed FAQ passages support calling when labor is suspected or uncertain, calling after water breaks, hospital attendance for the named urgent signs, and prompt contact for possible preterm labor before 37 weeks. Direct ACOG fetching remained restricted, so these precise passages were checked through ACOG's indexed text. The displayed tool records time only; old threshold alerts, diagnostic tables and diagrams are absent. Timing now uses a monotonic browser clock rather than the system clock, so a system-clock adjustment does not change elapsed duration. |
| 8-DPO testing | Read FDA's qualitative-test, early-negative, instructions, first-morning urine and repeat-after-several-days passages. The early-negative statement is a limitation, not a guaranteed detection day. Removed the site's old unsupported numerical claim from the public article and placed the FDA source link beside each retained substantive paragraph. No line-shade hCG estimate, viability assessment or location inference is retained. |

## Verification

- Fourteen numerical regression tests passed, including BMI boundaries and independently published WHO reference weights.
- TypeScript checking, lint and the production build passed. The build generated 94 routes.
- Five-page Chrome recheck passed: canonical URLs, disclaimers, source links, weight-gain cases and exceptions, baby result, contraction timing/reset and mobile layout.
- The broader Chrome calculator regressions passed. Its old food-checker locator was updated to the current reviewed-topic directory interface; no food-checker product change was needed.
- All 90 sitemap pages passed HTTP status, self-canonical, social URL, H1, indexability and schema checks; 90 internal destinations, the consolidation redirect and 404 behavior passed.
- The initial sandbox port-binding limitation was resolved by running localhost checks in the approved runtime. Browser verification is now complete for the stated scope.
- The deployment repository is `/Users/ashutoshkhulbe/Downloads/healthcalc-batch-2-20261003`, clean on `main`. Its origin is `https://github.com/ashutoshkhulbe15-hash/healthcalc.git`. Its local HEAD and the remotely read GitHub main both matched `91a067cde98ba314546183f2052f747cc3a9ed1a` before preparing the push script.

## Sources and traceability

- [National Academies, weight gain guidelines and scope](https://www.nationalacademies.org/read/12584/chapter/2)
- [CDC, pregnancy weight gain tables and exception](https://www.cdc.gov/maternal-infant-health/pregnancy-weight/index.html)
- [CDC-cited Luke cohort study, PubMed abstract](https://pubmed.ncbi.nlm.nih.gov/12746982/)
- [SMFM Consult Series #52](https://publications.smfm.org/publications/289-society-for-maternal-fetal-medicine-consult-series-52/)
- [WHO weight-for-age official tables](https://www.who.int/tools/child-growth-standards/standards/weight-for-age)
- [WHO module C, annex 1: LMS formula and extreme-tail caveat](https://iris.who.int/bitstream/handle/10665/43601/9789241595070_C_eng.pdf) — formula passage verified through the authority's indexed PDF text when direct retrieval timed out.
- [CDC, recommended U.S. charts](https://www.cdc.gov/growth-chart-training/hcp/overview/recommended.html)
- [CDC, interpretation of growth patterns](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)
- [ACOG, labor FAQ](https://www.acog.org/womens-health/faqs/how-to-tell-when-labor-begins) — precise indexed passages used because direct retrieval was restricted.
- [ACOG, preterm labor FAQ](https://www.acog.org/womens-health/faqs/preterm-labor-and-birth) — precise indexed passages used because direct retrieval was restricted.
- [FDA, pregnancy tests](https://www.fda.gov/medical-devices/home-use-tests/pregnancy)

The downloaded WHO spreadsheet hashes and full-row comparisons are recorded in `batch-3-who-data-recheck.json`. Independent fixtures and source URLs are saved in `tests/who-reference-fixtures.json`. The page inventory records final content hashes and second-pass dates. The release manifest records only this batch's changed website files and documents, with source and destination hashes.

## Remaining scope

The inventory has 76 unique content files: 33 reviewed (32 articles plus the food-checker page) and 43 awaiting the deeper review. Remaining routes comprise 9 body-metrics pages, 8 fitness pages, 7 condition pages, 7 mental-health pages, 8 guides and 4 blog articles. Earlier fixes or disclaimers do not complete those reviews. After these are reviewed, the site still needs a final consistency pass and a check of the deployed indexing signals and Search Console results.
