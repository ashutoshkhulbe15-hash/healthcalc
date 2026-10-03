<!-- last-updated: 2026-10-03 -->
# Adult eGFR calculator using the 2021 CKD-EPI creatinine equation

This calculator estimates glomerular filtration rate (eGFR) from serum creatinine, age and sex using the 2021 race-free CKD-EPI creatinine equation. It accepts serum creatinine in mg/dL and is intended for adults age 18 and older. The equation and units are published by [NIDDK](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults).

The estimate is not a measured GFR and does not by itself diagnose chronic kidney disease (CKD). NIDDK notes that eGFR is an estimate, that estimating equations become less accurate at higher GFR, and that trends are often more informative than a single result. NIDDK says using creatinine together with cystatin C provides a more accurate estimate when appropriate. [NIDDK: adult eGFR equations and limitations](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults)

## Formula

For standardized serum creatinine (SCr) in mg/dL and age in years:

**eGFR = 142 × min(SCr/κ, 1)^α × max(SCr/κ, 1)^−1.200 × 0.9938^Age × [1.012 if female]**

Where κ is 0.7 for females and 0.9 for males; α is −0.241 for females and −0.302 for males. The output unit is mL/min/1.73 m². This calculator implements that NIDDK-published equation. [NIDDK equation table](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults)

## GFR categories and CKD

KDIGO classifies GFR values as G1 (≥90), G2 (60–89), G3a (45–59), G3b (30–44), G4 (15–29), and G5 (<15) mL/min/1.73 m². These are GFR categories used in CKD classification; G1 or G2 alone do not establish CKD. KDIGO defines CKD by abnormalities of kidney structure or function present for at least 3 months with implications for health, and classifies it by cause, GFR category and albuminuria category. [KDIGO 2024 CKD Guideline, definition and GFR categories](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

An eGFR below 60 is in categories G3a–G5, but a single calculator result does not establish chronicity. Clinical assessment uses prior results and other evidence, including urine albumin where relevant. The categories are not treatment instructions or a prediction of an individual's outcome. [KDIGO 2024 CKD Guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Limits and interpretation

Creatinine-based estimates can be affected by factors other than filtration. The equation is intended for standardized creatinine measurements and adults; it should not be used for children. NIDDK cautions that estimates are less precise for some people and recommends considering combined creatinine–cystatin C estimation when clinically appropriate. The result does not assess urine albumin, kidney structure, cause, or change over time. [NIDDK: eGFR equations](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults); [KDIGO 2024 CKD Guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Sources

- [NIDDK: eGFR equations for adults](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults)
- [KDIGO 2024 Clinical Practice Guideline for the Evaluation and Management of CKD](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

---

*Educational information only. A clinician interprets kidney tests alongside the person's history, urine tests, previous results and other findings.*
