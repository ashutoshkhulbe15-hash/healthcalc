> Historical record: this document describes the shortened article versions before original-content recovery. All 76 original articles were reinstated on 2026-10-03; these prior findings do not verify the recovered prose. See CONTENT-RECOVERY-STATUS.md.

# Pregnancy batch 1: second source verification

Rechecked October 3, 2026. Scope: all 15 batch-1 articles, their page metadata, four associated calculator interfaces/results, shared page templates and related-card text. Nothing has been deployed. The 61 other articles remain outside this completed review.

## Changes after the second pass

- Removed the hCG observational-study threshold paragraph. Remaining interpretation advice links to NICE and NHS; the tool reports arithmetic only.
- Due-date/IVF results now explicitly say estimated gestational age, avoid percentage-complete claims, and explain that input dates do not confirm pregnancy. An inferred fertilization date is labelled assumed.
- Attributed the BMI ≥30 singleton weight-gain row to the original National Academies US table; disclosed that the CDC summary displays 30.0–39.9.
- Added a directly supported definition for the prodromal-labor discussion and kept NHS contact advice separate.
- Replaced broad or inaccessible-support links with exact accessible FDA cleaning/chilling and CDC energy guidance where appropriate. Fixed the guessed chilling URL before release.
- Removed implementation history from reader-facing articles. Software input/display limits are identified as software limits. Existing disclaimers remain.
- Recorded the owner’s evidence requirements in AGENTS.md at the workspace and source roots for future work.

## Page-by-page evidence decisions

### /pregnancy/hcg-doubling-time-calculator

Checked: NICE NG126 hCG-in-unknown-location recommendations; NHS symptoms/rupture sections.

Percentage and logarithmic doubling/halving are labelled arithmetic; no diagnostic cutoff. Removed observational-study threshold paragraph.

[Source 1](https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy) · [Source 2](https://www.nhs.uk/conditions/ectopic-pregnancy/symptoms/)

### /pregnancy/ovulation-calculator

Checked: ASRM 2022 The Fertile Window and Fertility-Awareness Methods.

Six inclusive dates; cycle day = length −14. 21–45 is explicitly a software limit, not normality or validation.

[Source 1](https://www.asrm.org/practice-guidance/practice-committee-documents/optimizing-natural-fertility-a-committee-opinion-2021/)

### /pregnancy/due-date-calculator

Checked: ACOG CO700 Background/ART dating; ACOG How Your Fetus Grows trimester definitions.

LMP +280; day 3 +263/day 5 +261. Fertilization +266 labelled derived convention. Estimated age/fertilization labels, no pregnancy confirmation or percent-complete claim.

[Source 1](https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date) · [Source 2](https://www.acog.org/womens-health/faqs/how-your-fetus-grows-during-pregnancy)

### /pregnancy/ivf-due-date-calculator

Checked: ACOG CO700 ART dating; reVITALize gestational-age formula.

261/263 offsets; equivalent menstrual dates are derived arithmetic. Clinic-confirmed age and established date take precedence; no clinical accuracy promise.

[Source 1](https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2017/05/methods-for-estimating-the-due-date)

### /guides/hcg-levels-by-week

Checked: MedlinePlus Normal Results weeks 3–10; NICE unknown-location recommendations; NHS symptoms/rupture.

All eight table intervals match their named source. Lab variation stated. Removed observational-study thresholds and old-version narrative.

[Source 1](https://medlineplus.gov/ency/article/003510.htm) · [Source 2](https://www.nice.org.uk/guidance/NG126/chapter/diagnosis-of-viable-intrauterine-pregnancy-and-of-tubal-ectopic-pregnancy) · [Source 3](https://www.nhs.uk/conditions/ectopic-pregnancy/symptoms/)

### /guides/spotting-during-ovulation

Checked: NHS bleeding-between-periods causes/get-checked advice; ectopic symptoms/rupture.

No timing/colour diagnostic rule, prevalence statistic, implantation comparison or reassurance about untreated bleeding.

[Source 1](https://www.nhs.uk/symptoms/vaginal-bleeding-between-periods-or-after-sex/) · [Source 2](https://www.nhs.uk/conditions/ectopic-pregnancy/symptoms/)

### /guides/prodromal-labor

Checked: Cleveland Clinic What Is Prodromal Labor; NHS contact/urgent/latent-phase sections.

Definition attributed to Cleveland Clinic; NHS symptom/contact advice separate. No home confirmation of cervical change or forecast of delivery.

[Source 1](https://my.clevelandclinic.org/health/symptoms/24163-prodromal-labor) · [Source 2](https://www.nhs.uk/pregnancy/labour-and-birth/signs-that-labour-has-begun/)

### /blog/pregnancy-weight-gain-science

Checked: National Academies Summary Table S-1/scope; CDC gain table; CDC maternal warning signs.

Singleton totals attributed to original US report. CDC BMI 30–39.9 versus original ≥30 made explicit; individual goals not inferred.

[Source 1](https://www.nationalacademies.org/read/12584/chapter/2) · [Source 2](https://www.cdc.gov/maternal-infant-health/pregnancy-weight/index.html) · [Source 3](https://www.nationalacademies.org/publications/12584) · [Source 4](https://www.cdc.gov/hearher/maternal-warning-signs/index.html)

### /guides/pregnancy-weight-gain-by-trimester

Checked: National Academies Summary Table S-1 and first-trimester footnote; CDC warning signs.

All four kg/week intervals and 0.5–2 kg assumption checked. US scope; four-week multiplication is explicitly an example, not a personal target.

[Source 1](https://www.nationalacademies.org/read/12584/chapter/2) · [Source 2](https://www.cdc.gov/hearher/maternal-warning-signs/index.html)

### /blog/pregnancy-nutrition-guide

Checked: NIH ODS Pregnancy Table 1, Prenatal Supplements and Vitamin D; Folate neural-tube section; CDC energy paragraph; FDA food safety.

600 mcg DFE, iron27 mg, calcium1000/1300 mg ages, vitaminD15 mcg/600 IU, choline450 mg AI verified. Exact neural-tube timing and conversion verified. Energy link changed to directly accessible CDC.

[Source 1](https://ods.od.nih.gov/factsheets/Pregnancy-HealthProfessional/) · [Source 2](https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/) · [Source 3](https://www.cdc.gov/maternal-infant-health/pregnancy-weight/index.html) · [Source 4](https://www.fda.gov/food/people-risk-foodborne-illness/food-safety-pregnant-women-and-their-unborn-babies)

### /pregnancy/safe-food/steak

Checked: USDA FSIS minimum chart and thermometer page; FDA pregnancy Cooking meat/poultry section.

Whole cut145°F/63°C +3-minute rest; ground160°F/71°C; poultry165°F/74°C. Check before removal. No colour/carryover/microwave guarantee.

[Source 1](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart) · [Source 2](https://www.fda.gov/food/people-risk-foodborne-illness/cooking-food-safety-moms-be)

### /pregnancy/safe-food/soft-cheese

Checked: CDC Listeria avoidance/alternative table; NHS cheese section.

Specific pasteurized alternatives and queso-fresco/raw-milk heating verified; NHS mould-ripened and soft blue categories distinct and region identified.

[Source 1](https://www.cdc.gov/listeria/prevention/index.html) · [Source 2](https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/)

### /pregnancy/safe-food/blue-cheese

Checked: NHS cheese section; CDC Listeria cheese rows.

Soft blue-veined types and steaming-hot instruction attributed to NHS. CDC raw-milk heating described separately. No blanket pasteurized-cold approval.

[Source 1](https://www.nhs.uk/pregnancy/keeping-well/foods-to-avoid/) · [Source 2](https://www.cdc.gov/listeria/prevention/index.html)

### /guides/meat-deli-pregnancy

Checked: CDC Listeria deli rows; FDA Cooking meat/poultry and Microwave Musts; USDA chart.

165°F/steaming-hot deli instruction; raw-meat category distinctions. No fixed microwave time or exposure probability.

[Source 1](https://www.cdc.gov/listeria/prevention/index.html) · [Source 2](https://www.fda.gov/food/people-risk-foodborne-illness/cooking-food-safety-moms-be) · [Source 3](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/safe-temperature-chart)

### /pregnancy/safe-food/pre-made-salads

Checked: CDC Listeria premade deli-salad row; FDA Cleaning Fruits & Veggies and Tips to Chill Food.

Premade deli versus leafy-product distinction retained. Direct cleaning/chilling links verified; no certification of brands or homemade food.

[Source 1](https://www.cdc.gov/listeria/prevention/index.html) · [Source 2](https://www.fda.gov/food/people-risk-foodborne-illness/cleaning-food-safety-moms-be) · [Source 3](https://www.fda.gov/food/people-risk-foodborne-illness/tips-chill-food-food-safety-moms-be)

## Evidence access and scope

ACOG and NICE restricted some direct requests. Precise passages were checked against the originating authorities’ indexed text; the access limitation is recorded, rather than claiming full direct retrieval. The USDA chart was checked through official indexed text and cross-checked with FDA’s directly accessible pregnancy cooking page. No other calculator/blog was used to establish a claim.

The record separates sourced guidance from declared mathematical examples and software behavior. This is a source verification pass, not independent clinical validation or a guarantee against legal liability. It does not establish that the 61 unreviewed articles meet the same standard.

Verification results and a replacement release manifest are saved alongside this report.

## Completed verification

Production build, lint, type checking, all 12 numerical regression groups and isolated Chrome browser regressions passed. All 90 sitemap pages and 90 internal destinations passed structural checks. A separate rendered-page check confirmed source links and disclaimers on every one of the 15 rechecked pages and absence of removed thresholds/obsolete temperature wording.

Push commands that copy source/healthcalc-main now pick up these changes. The earlier batch-1 ZIP predates this second verification; use the replacement archive ProHealthIt-source-reviewed-batch-1-rechecked-2026-10-03.zip if deploying from an archive.
