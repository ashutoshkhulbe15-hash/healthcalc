<!-- last-updated: 2026-10-03 -->
# Adult creatinine-based eGFR equation

This tool calculates an estimated glomerular filtration rate (eGFR) from age, sex and serum creatinine using the 2021 CKD-EPI creatinine equation. The equation expects serum creatinine standardized to an IDMS-traceable reference method, reported here in mg/dL. [NIDDK: eGFR equations for adults](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults).

The displayed number is a mathematical estimate, not a kidney-function measurement, CKD diagnosis, or treatment recommendation. The equation's sex input is limited to the two coefficients defined by its source. Do not use an estimate from this page to change medication or treatment.

## What the number does not establish

KDIGO defines chronic kidney disease by kidney-structure or kidney-function abnormalities present for at least three months, and classifies it using cause, GFR category, and albuminuria category (CGA). A single eGFR value from this calculator cannot establish CKD or its stage. [KDIGO 2024 guideline, definition and classification](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf).

KDIGO recommends creatinine-based eGFR for adults at risk and says that when cystatin C is available, GFR category should be estimated using the combined creatinine–cystatin C equation. This site does not calculate that combined equation. Discuss laboratory results with a qualified clinician.

## Equation and units

The NIDDK equation is `142 × min(SCr/κ, 1)^α × max(SCr/κ, 1)^−1.200 × 0.9938^age`, multiplied by `1.012` for the female coefficient set. Here, SCr is standardized serum creatinine in mg/dL; κ is 0.7 for females or 0.9 for males; and α is −0.241 for females or −0.302 for males. The result is expressed as mL/min/1.73 m².

## Sources

- [NIDDK: eGFR equations for adults](https://www.niddk.nih.gov/research-funding/research-programs/kidney-clinical-research-epidemiology/laboratory/glomerular-filtration-rate-equations/adults).
- [KDIGO 2024 Clinical Practice Guideline for CKD](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf), definition/classification and adult GFR evaluation.
