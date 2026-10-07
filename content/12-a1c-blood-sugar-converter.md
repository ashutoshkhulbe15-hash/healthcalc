<!-- last-updated: October 5, 2026 -->
# A1C to Blood Sugar Converter: Understand Your Numbers

A1C is a laboratory percentage that reflects average blood glucose over approximately the previous three months. Estimated average glucose (eAG) expresses an estimate derived from A1C in glucose units; it is not another blood sample or a reading of your glucose right now. [NIDDK explanation](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

This tool accepts an A1C percentage and calculates eAG in mg/dL and mmol/L using the equation reported by NGSP. It does not accept home glucose readings, diagnose diabetes, predict your next laboratory result, or choose a treatment target. The reverse equation is explained below as arithmetic, rather than offered as a validated prediction. [NGSP equation and study context](https://ngsp.org/A1ceAG.asp)

## A1C to Blood Sugar Conversion Chart

The following values are **derived arithmetic examples**, calculated as 28.7 × A1C − 46.7. Values in mg/dL are rounded to a whole number; mmol/L values use the unrounded estimate divided by 18, then rounded to one decimal. This is the website's display convention, rather than a separately measured glucose result. [Equation source](https://ngsp.org/A1ceAG.asp)

| **A1C (%)** | **Derived eAG (mg/dL)** | **Derived eAG (mmol/L)** |
|---|---|---|
| 4.0 | 68 | 3.8 |
| 5.0 | 97 | 5.4 |
| 5.5 | 111 | 6.2 |
| 5.7 | 117 | 6.5 |
| 6.0 | 126 | 7.0 |
| 6.4 | 137 | 7.6 |
| 6.5 | 140 | 7.8 |
| 7.0 | 154 | 8.6 |
| 8.0 | 183 | 10.2 |
| 9.0 | 212 | 11.8 |
| 10.0 | 240 | 13.3 |
| 12.0 | 298 | 16.5 |

An A1C diagnostic threshold belongs to the A1C test, not to the glucose number calculated beside it. For example, eAG of about 140 mg/dL derived from A1C 6.5% must not be reused as a fasting or random glucose diagnostic cutoff. These are different measurements with different criteria. [ADA 2026 diagnostic tables 2.1 and 2.2](https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183/)

Keep the original A1C percentage and test date when discussing the result. A rounded eAG output discards some numerical detail and adds no independent evidence about whether a diagnosis is present.

## How to Convert A1C to Blood Sugar

**eAG (mg/dL) = 28.7 × A1C (%) − 46.7.** Enter the percentage itself: for 7.0%, enter 7, not 0.07. NGSP reports this relationship from the A1C-Derived Average Glucose study. [NGSP](https://ngsp.org/A1ceAG.asp)

Worked arithmetic: 28.7 × 7 = 200.9; subtracting 46.7 gives 154.2 mg/dL, displayed as **154 mg/dL**. Dividing 154.2 by 18 gives approximately 8.57 mmol/L, displayed as **8.6 mmol/L**. Rounding is done for readability, not to suggest that an individual's actual average glucose is known this precisely.

The form currently accepts A1C values from 3 to 15%. That is an input validation boundary chosen for this interface, not a definition of medically acceptable A1C. An entry outside this range should be discussed using the laboratory report rather than altered to make the form accept it.

When comparing results, check the units. A1C percentage, glucose mg/dL, glucose mmol/L and A1C mmol/mol are different quantities. This page converts glucose units; it does not perform the separate A1C percent-to-mmol/mol conversion. A number without its unit is not enough to choose a conversion.

Changing the input clears the previous output. Recalculate after entering the revised A1C so that the result card describes the value currently in the form.

## What the ADA A1C Targets Mean

For **nonpregnant individuals**, ADA's 2026 standards list A1C 5.7–6.4% as the prediabetes range and A1C ≥6.5% as a diabetes diagnostic criterion. In the absence of unequivocal hyperglycemia, diagnosis requires confirmatory abnormal testing. A clinician considers the testing method and circumstances, not this converter alone. [ADA 2026, Tables 2.1–2.2 and confirmation section](https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183/)

Below 5.7% is described as the normal A1C range by NIDDK. It is not a guarantee that every glucose test will be normal or that no diabetes concerns exist: A1C and glucose tests can disagree, and some conditions interfere with A1C. [NIDDK: results and differing diagnoses](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

Diagnostic criteria and treatment goals answer different questions. A diagnostic cutoff helps identify disease; a personal treatment goal guides care for someone already diagnosed. NIDDK explains that goals differ with diabetes history and general health, including the risk of hypoglycemia. Do not change medication or try to reach a chart value solely because it appears beside your result. [NIDDK: What A1C goal should I have?](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

The converter displays a laboratory reference range beside the arithmetic. It does not assign a complication probability, tell you how urgently to change treatment based on A1C alone, or certify a value as safe for you.

## When A1C Can Be Misleading

Conditions affecting red blood cell lifespan can change A1C. NIDDK names recent blood loss, erythropoietin treatment, hemodialysis and transfusion. Very low iron can cause a falsely high result; kidney failure or liver disease can also produce false results. These effects should not be reduced to a universal direction for everyone with kidney disease or anemia. [NIDDK: changes in red blood cells or hemoglobin](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

Hemoglobin variants can interfere with some testing methods. Not every assay is affected, and having a variant does not make all A1C results unusable. A healthcare professional may investigate when A1C and measured glucose do not match, and choose an appropriate assay or another monitoring approach. [NIDDK: assay interference](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

If the percentage supplied to this tool is affected by interference, correct multiplication cannot repair it. The converter has no information about your laboratory method, red blood cells, medications or recent transfusions. Keep those details available when discussing an unexpected result.

**Pregnancy:** NIDDK states that A1C should not be used to diagnose gestational diabetes. It may be used early in pregnancy to investigate possible previously undiagnosed diabetes in someone with risk factors; that is a different clinical purpose. Follow the pregnancy testing plan provided by your maternity team. [NIDDK: Is the A1C test used during pregnancy?](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

## Converting Blood Sugar to A1C: The Reverse Calculation

Rearranging the equation gives **A1C (%) = (eAG in mg/dL + 46.7) ÷ 28.7**. With a hypothetical eAG of 150 mg/dL, the arithmetic is 196.7 ÷ 28.7 = approximately **6.85%**. This is an inverse of the equation, not a measured A1C or a validated forecast from a particular set of meter readings.

Do not substitute an average of fasting readings for the study's average glucose measure. NGSP explains that fasting glucose is not equivalent to average glucose and can underestimate it. The original study used both continuous glucose monitoring and frequent glucose profiles; a few selected readings do not reproduce that sampling. [NGSP: study and fasting-glucose comparison](https://ngsp.org/A1ceAG.asp)

A home meter reading describes glucose at a particular time. A1C reflects a longer period, with recent glucose contributing more than earlier glucose; it is not a simple equal-weight mean of exactly 90 daily fasting results. [NIDDK: short-term changes and estimated average glucose](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

For a care discussion, bring the actual measurements, their units, dates, times and any relevant meal or medication context. Do not relabel an equation-derived percentage as a laboratory test in a record. The [blood sugar guide](/guides/blood-sugar-levels-by-age) is a separate educational page; it does not turn this conversion into individualized advice.

## Frequently Asked Questions

**What A1C level is diabetic?**

ADA 2026 lists A1C ≥6.5% as a diabetes diagnostic criterion in nonpregnant individuals. Confirmation is generally needed unless hyperglycemia is unequivocal. The derived eAG does not independently establish the diagnosis. [ADA diagnostic criteria](https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183/)

**What does an A1C of 7 mean in blood sugar?**

The equation gives 154.2 mg/dL, displayed as 154 mg/dL or 8.6 mmol/L. This is a derived estimate, not a glucose reading right now or a personal treatment target. [Equation](https://ngsp.org/A1ceAG.asp)

**What blood sugar level equals an A1C of 5.7?**

The arithmetic gives 116.89 mg/dL, displayed as 117 mg/dL or 6.5 mmol/L. These glucose values must not be used as fasting-glucose diagnostic thresholds. [Equation](https://ngsp.org/A1ceAG.asp)

**How accurate is the A1C to blood sugar conversion?**

It estimates a relationship reported from a study; it does not measure your actual average glucose. No universal ±15 mg/dL error guarantee is offered here. Laboratory interference and individual differences require clinical interpretation. [NIDDK: eAG and test limitations](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test)

**How often should A1C be tested?**

ADA 2026 recommends glycemic assessment at least twice yearly, with more frequent assessment, such as every three months, when goals are not met or treatment or health circumstances change. Your clinician determines the appropriate testing and monitoring schedule. [ADA recommendation 6.2](https://diabetesjournals.org/care/article/49/Supplement_1/S132/163927/6-Glycemic-Goals-Hypoglycemia-and-Hyperglycemic)

## Sources

1. [NGSP: HbA1c and estimated average glucose](https://ngsp.org/A1ceAG.asp) — equation, study design and fasting-glucose limitations.
2. [NIDDK: The A1C Test & Diabetes](https://www.niddk.nih.gov/health-information/diagnostic-tests/a1c-test) — patient explanation, interference, pregnancy, different tests and individual targets. Its displayed review date is April 2018; current diagnostic and assessment statements above are cross-checked against ADA 2026.
3. [ADA Standards of Care 2026: Diagnosis and Classification](https://pmc.ncbi.nlm.nih.gov/articles/PMC12690183/) — nonpregnant diagnostic criteria and confirmation.
4. [ADA Standards of Care 2026: Glycemic Goals](https://diabetesjournals.org/care/article/49/Supplement_1/S132/163927/6-Glycemic-Goals-Hypoglycemia-and-Hyperglycemic) — recommendation 6.2 for monitoring frequency.

---

*This converter is for educational purposes. A1C interpretation requires clinical context. Consult your healthcare provider for diagnosis and treatment decisions.*
