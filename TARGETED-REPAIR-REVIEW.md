# Targeted repair and source record — October 3, 2026

Scope: two recovered articles, their page-specific tool text, and adult BMI result layout. No publication or deployment was performed. No practitioner review is claimed. The other 74 original articles are unchanged and remain unreviewed as recovered manuscripts. Shared medical disclaimers and routes/canonicals remain in place.

## Content preservation

The pre-edit full project snapshot is `audit/targeted-repair-2026-10-03/before-targeted-repair.zip`. All 76 pre-edit article hashes are in `content-before.json`. Both revised pages retain all original topic sections (some inaccurate headings clarified), all seven pregnancy FAQs and all five PCOS FAQs. Unsupported passages were replaced within those sections; article length was not reduced into a short summary. Counts exclude Markdown URL targets and use the same word tokenizer before and after.

- 01-pregnancy-weight-gain-calculator.md: 2536 → 2857 words; 10 → 10 major sections.
- 32-macro-calculator-pcos.md: 3019 → 3083 words; 11 → 11 major sections.

## Pregnancy claim/source map

- Reference tables, source-rounded kg/lb endpoints, weekly rates and first-trimester calculation assumption: National Academies Summary Table S-1, https://www.nationalacademies.org/read/12584/chapter/2 . Read table, footnote, U.S. population qualifier, special-population and clinical-judgment sections. Weekly reference is not a personalized curve. Arithmetic conversions explicitly labelled.
- Calculator total-pound rows, underweight-twin exception, BMI scope, higher multiples and U.S. calories: CDC, https://www.cdc.gov/maternal-infant-health/pregnancy-weight/index.html . Read singleton/twin tables and the underweight footnote. Underweight twins are observational, not an IOM recommendation. CDC obesity table ends at39.9; limitation at40+ disclosed.
- No weight-loss dieting and qualitative pregnancy-gain context: NHS, https://www.nhs.uk/pregnancy/keeping-well/weight-gain/ . Read full page. No fabricated percentages/body-component weights retained.
- England's separate additional-energy figure: NHS, https://www.nhs.uk/best-start-in-life/pregnancy/healthy-eating-in-pregnancy/ . Read pregnancy eating/calorie section.200calories final3months kept separate from U.S.340/450.
- Activity: CDC, https://www.cdc.gov/physical-activity-basics/guidelines/healthy-pregnant-or-postpartum-women.html . Read healthy-population qualifier,150minutes and discussion of adjustments. No universal exercise clearance.
- Urgent symptoms and immediate care: CDC, https://www.cdc.gov/hearher/maternal-warning-signs/index.html and NHS, https://www.nhs.uk/conditions/pre-eclampsia/ . Read warning lists/action text and asymptomatic BP/protein checks. No1kg/week threshold, no wait-until-next-visit reassurance.
- Removed unsupported fetal-weight milestones, fixed trimester percentages, fixed gain-component quantities,20%early-loss statistic, guaranteed harmless early loss, and causal claims that weight gain causes GDM/preeclampsia.
- All inputs/results, quick answer, descriptions and metadata checked. Description corrected to avoid attributing the separate underweight twin study row to National Academies. Calculations unchanged; existing pregnancy regression tests passed.

## PCOS claim/source map

- No superior diet composition: ASRM international guideline3.3.1, https://www.asrm.org/practice-guidance/practice-committee-documents/recommendations-from-the-2023-international-evidence-based-guideline-for-the-assessment-and-management-of-polyendocrine-metabolic-ovarian-syndrome-2023/ . Read recommendation directly. Sustainable/tailored/nonrestrictive approach3.3.2–3.3.4; glycaemic assessment1.9.2 and limited routine insulin-assay relevance1.9.12; eating-disorder concerns2.5. Source-based paraphrase, not new clinical guidance.
- Treatment choices and terminology: NICHD, https://www.nichd.nih.gov/health/topics/pcos/conditioninfo/treatments . Read treatment introduction, symptoms/health/pregnancy-plan context and PMOS terminology.
- Reproductive/metabolic context: U.S. Office on Women's Health, https://womenshealth.gov/a-z-topics/polycystic-ovary-syndrome . Read condition introduction/symptoms. No unsupported prevalence percentage.
- Insulin mechanism and usually absent symptoms: NIDDK, https://www.niddk.nih.gov/health-information/diabetes/overview/what-is-diabetes/prediabetes-insulin-resistance . Read mechanism/symptoms sections. Cravings/fatigue do not establish diagnosis or macro adjustments.
- Label serving basis, separate nutrients, added sugars included in total sugars, fibre DV28g with2000kcal reference: FDA, https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label . Read serving/nutrient/DV sections. Label references not individualized doses. Label examples invented and labelled arithmetic.
-4/4/9kcal per gram arithmetic: FDA Food Labeling Guide AppendixB, https://www.fda.gov/media/81606/download . Read energy-factor text.1800kcal and30/40/30 are expressly illustrative, not PCOS prescriptions or a clinical tool.
- Omega3forms, limitedALAconversion and examplefoodsources: NIHODS, https://ods.od.nih.gov/factsheets/Omega3FattyAcids-Consumer/ . Read forms/foods sections. No treatment outcome, dose or supplement recommendation added.
- Removed unsupported subtype→macro tables,70%insulin-resistance prevalence, nutrition-outperforms-medication claim,10–15%metabolism adjustment, exactsymptom-response timelines, no-insulin protein claim, keto hormone/cortisol claims, prescribedfibre range, oils/inflammation and PCOS-specific gut/supplement promises. Preserved the discussion topics with sourced explanations and practical evidence-evaluation questions.
- Checked article, method notice, quick answer, metadata and existing shared tool description. AccessibleASRMprimarylink replacesPMCcaptcha-blockedlink. Original medical disclaimer remains, with the inaccurate “macro recommendations” wording changed to information/arithmeticexamples.

## Access limitations

ACOG expert page direct access returned402; indexed text was readable but no claim in this patch depends solely on it. PMC guideline access encountered reCAPTCHA; accessible officialASRM guideline used instead. No source reputation alone was treated as support. Existing linked tools and the other74 recovered articles are not newly verified by this review.

## Engineering verification

22 calculation regression tests,TypeScript,ESLint and production build passed;94static pages generated. BMI result tests at1280px and375px with40/75/150kg and175cm returned13.1/24.5/49.0 withdocumentwidth equalviewportwidth. Gaugebandwidths corrected to its14–44illustrativelinear scale; numerical calculation unchanged. New marker bounded withinparent. No other article hash changed. Two pre-existing inherited home-page OpenGraph URLs corrected on one-rep-max and calorie-deficit pages; their article files untouched. Full site structure check rerun after these metadata fixes.
