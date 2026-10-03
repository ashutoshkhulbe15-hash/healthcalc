> Historical record: this document describes the shortened article versions before original-content recovery. All 76 original articles were reinstated on 2026-10-03; these prior findings do not verify the recovered prose. See CONTENT-RECOVERY-STATUS.md.

# Source-based review batch 4 — final pending pages and consistency checks

Reviewed October 3, 2026. This batch closes the pages previously listed as awaiting deeper claim review. It covers the remaining 14 unique content files, related route metadata, quick answers, calculator outputs, diagrams/cards and shared disclosures. It also corrects the name of the already-reviewed body-composition calculator to match the Army regulation that supplies its equation. See [the complete 76-file page/source inventory](SOURCE-REVIEW-INVENTORY.json) for each content file, route, source URLs, status and current SHA-256.

## Page-by-page decisions

- **BMI vs body-fat percentage:** Retained CDC-supported BMI screening limits; removed claims that body-fat percentage is categorically superior or diagnoses individual risk.
- **TDEE and BMR vs TDEE:** Used the National Academies' energy-expenditure definitions. Clarified that Mifflin–St Jeor is an adult resting-energy prediction equation, not direct BMR/TDEE measurement or a personal calorie target.
- **Stress and the body:** Kept only the NCCIH-described short-term response and cautious language that long-term stress may contribute to or worsen listed problems. Removed organ-damage, quantitative risk, cortisol and disease-causation claims.
- **Protein guidance:** Clearly separated 2025–2030 U.S. federal protein guidance, the older National Academies adult RDA and the healthy resistance-training population in the Morton meta-analysis. Removed unsupported per-meal thresholds, fat-loss claims, kidney safety assurances and broad treatment advice.
- **Anxiety vs stress:** Rebuilt from NIMH definitions and symptom overlap. Removed self-diagnosis heuristics, unsupported neurobiology, prevalence claims and treatment instructions. Screening links are labeled as screening information.
- **Blood sugar:** Separated nonpregnant lab diagnostic thresholds from treatment goals. Pregnancy values identify the ADA one-step 75 g OGTT and explicitly note the different two-step protocol.
- **Keto macro guide:** Removed universal carb targets, macro ratios, protein prescriptions, electrolyte doses and ketosis claims. The page now explains user-entered calorie-to-gram arithmetic only; it does not recommend a diet.
- **Body-fat measurement guide:** Removed unsupported accuracy margins, method rankings, health categories and tracking advice. Kept CDC BMI limitations and the site calculator's Army-regulation scope.
- **GFR by age:** Labeled NIDDK's NHANES III values as historical U.S. population means, not personal normal ranges. Rechecked CKD-EPI 2021 formula, units, adult scope and limitations.
- **Resting heart rate:** Limited the page to AHA's adult 60–100 bpm reference and context; removed the unsupported pediatric table and “lower is better” claims.
- **A1C:** Used NIDDK's nonpregnant ranges and ADA 2026 confirmation/limitation guidance. Removed unsourced treatment/reversal advice, inaccurate confirmation phrasing and personal target claims.
- **Sleep calculator:** Verified the result as clock arithmetic, retained the 80–100 minute cycle caveat and used CDC age-specific sleep durations. No stage prediction or grogginess guarantee is claimed.
- **Waist-to-hip ratio:** Checked the division and added WHO's measurement landmarks. The tool provides no personal risk label.
- **Shared copy:** Corrected mental-health directory wording and removed the general “reviewed for accuracy” byline, which could imply a review scope not true of every page.

## Sources

- [CDC BMI FAQ](https://www.cdc.gov/bmi/faq/index.html)
- [National Academies 2023 energy DRI](https://www.ncbi.nlm.nih.gov/books/NBK591031/); [Mifflin et al. adult REE study](https://pubmed.ncbi.nlm.nih.gov/2305711/)
- [NCCIH: Stress](https://www.nccih.nih.gov/health/stress)
- [U.S. Dietary Guidelines 2025–2030](https://cdn.realfood.gov/DGA.pdf); [National Academies protein DRI](https://www.nationalacademies.org/read/10490/chapter/12); [Morton et al. resistance-training meta-analysis](https://pubmed.ncbi.nlm.nih.gov/28698222/)
- [NIMH stress fact sheet](https://www.nimh.nih.gov/health/publications/so-stressed-out-fact-sheet); [NIMH GAD information](https://www.nimh.nih.gov/health/publications/generalized-anxiety-disorder-gad)
- [NIDDK diabetes tests](https://www.niddk.nih.gov/health-information/diabetes/overview/tests-diagnosis); [ADA Standards 2026, section 2](https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes)
- [FDA food-label calorie-per-gram guide](https://www.fda.gov/media/81606/download); [Paoli et al. ketogenic diet review](https://pubmed.ncbi.nlm.nih.gov/23801097/), not used as a universal prescription
- [U.S. Army Regulation 600-9](https://api.army.mil/e2/c/downloads/566071.pdf)
- [NIDDK eGFR age context](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/factors-affecting-egfr-accuracy/demographics); [adult eGFR equations](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults); [CKD tests](https://www.niddk.nih.gov/health-information/kidney-disease/chronic-kidney-disease-ckd/tests-diagnosis)
- [AHA: All About Heart Rate](https://www.heart.org/en/health-topics/high-blood-pressure/the-facts-about-high-blood-pressure/all-about-heart-rate)
- [NIDDK A1C test](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test); [ADA Standards 2026, section 2](https://diabetesjournals.org/care/article/49/Supplement_1/S27/163926/2-Diagnosis-and-Classification-of-Diabetes)
- [CDC sleep recommendations](https://www.cdc.gov/sleep/about/index.html); [NHLBI sleep stages](https://www.nhlbi.nih.gov/health/sleep/stages-of-sleep)
- [WHO waist and waist-to-hip report](https://www.who.int/publications/i/item/9789241501491)

The ADA diagnosis article returned HTTP 403 during direct access; the exact diabetes-range criteria and confirmation rules are independently available from the linked NIDDK pages, and its indexed 2026 text supports the pregnancy protocol distinction. The page ledger preserves the named sources and scope. This is source-based editorial review, not practitioner review. The unsupported one-rep-max and body-frame calculations remain withdrawn; no numerical output is active for them.

## Verification

`npm test` passed (22/22), TypeScript checking passed, lint passed, and the production build generated 94 routes and the sitemap. Browser-dependent site-structure tests could not run in this workspace because the sandbox denied connecting to localhost port 3100; that limitation does not affect the completed build. The deployment script reruns project checks in the user's existing checkout before staging and pushing the allow-listed paths.
