<!-- last-updated: October 5, 2026 -->
# GFR Calculator: Adult eGFR Assessment (CKD-EPI 2021)

Glomerular filtration rate describes kidney filtration. This calculator **estimates** GFR from standardized serum creatinine, age and a sex coefficient using the race-free CKD-EPI 2021 creatinine equation. An estimate is not a direct measurement of filtration. [National Kidney Foundation equation](https://www.kidney.org/ckd-epi-creatinine-equation-2021)

Kidney assessment also considers urine albumin, cause and persistence of abnormalities. Do not regard eGFR as the only important number or diagnose chronic kidney disease (CKD) from a single result. KDIGO defines CKD as abnormalities of kidney structure or function present for at least three months with implications for health. [KDIGO 2024, definition and Tables 1–3](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## What Is GFR?

> **Key Takeaway:** The output unit is **mL/min/1.73 m²**: an estimate standardized to a body surface area of 1.73 square meters. It is not a percentage of working kidneys or a personal prediction of dialysis. [NKF equation and units](https://www.kidney.org/ckd-epi-creatinine-equation-2021)

The “e” in eGFR means estimated. A creatinine result enters an equation rather than directly counting kidney filters. The tool rounds the result to a whole number for display. Its category uses the unrounded calculation, so a result very close to a boundary may display a rounded number on the other side of that boundary.

Keep the original creatinine value, units and date with the estimate. The calculator expects **mg/dL**, not a result entered unchanged in µmol/L. Selecting a different website or entering the wrong units can change the output without representing a change in your kidneys.

A result of 90 or higher belongs to category G1; it is not a certificate of healthy kidneys. Kidney damage markers can be present at a higher GFR, while G1 or G2 without evidence of damage does not establish CKD. [KDIGO Tables 1–2](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## CKD Stages: What Your GFR Number Means

These are **GFR categories**, used within a broader CKD assessment. All values use mL/min/1.73 m². [KDIGO Table 2](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

| **GFR range** | **Category** | **KDIGO description** |
|---|---|---|
| 90 or higher | G1 | Normal or high |
| 60 to less than 90 | G2 | Mildly decreased |
| 45 to less than 60 | G3a | Mildly to moderately decreased |
| 30 to less than 45 | G3b | Moderately to severely decreased |
| 15 to less than 30 | G4 | Severely decreased |
| Below 15 | G5 | Kidney failure |

The category name does not by itself establish chronicity, cause or treatment. G1 and G2 do not meet CKD criteria without another marker of kidney damage. A G3–G5 result requires clinical evaluation; a calculator cannot distinguish an acute change from a chronic condition. [KDIGO Tables 1–2 and Practice Point 1.1.3.2](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

> **Warning:** KDIGO advises against assuming chronicity from one abnormal eGFR or albumin result: acute kidney injury or disease may be responsible. Three months is a diagnostic persistence criterion, **not an instruction to delay seeking care**. Your clinician decides whether assessment or repeat testing is needed sooner. [KDIGO chronicity guidance](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

Nor does category G5 automatically mean dialysis must start that day. KDIGO bases dialysis initiation on a composite assessment including symptoms, signs, quality of life, preferences, GFR and laboratory findings. [KDIGO Practice Point 5.4.1](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## The CKD-EPI 2021 Equation

The NKF publishes the adult equation used here:

**eGFR = 142 × min(Scr/K, 1)^α × max(Scr/K, 1)^−1.200 × 0.9938^Age × 1.012 (if female).**

Scr is standardized serum creatinine in mg/dL. K is 0.7 for the female coefficient or 0.9 for male; α is −0.241 or −0.302 respectively. “min” selects the smaller of the ratio and 1; “max” selects the larger. Age is entered in years. No race coefficient is used. [NKF formula and parameters](https://www.kidney.org/ckd-epi-creatinine-equation-2021)

The site accepts whole adult ages 18–120 as a software input limit. That upper limit does not prove equal accuracy across that range. The separate creatinine-plus-cystatin-C equation is **not** implemented by this calculator; adding a cystatin C result mentally does not convert this output into that method.

Formula correctness and clinical accuracy are different questions. The calculation can reproduce an equation correctly without precisely measuring an individual's filtration. This page does not claim universal superiority over every other equation or a guaranteed individual error percentage.

## What Affects Your GFR

Creatinine-based estimates have limitations when non-filtration factors affect creatinine. KDIGO discusses muscle mass, dietary factors, medicines and conditions where another estimate or measured GFR may be useful. Cystatin C also has non-GFR determinants and is not universally unaffected by every clinical circumstance. [KDIGO Section 1.2, GFR evaluation](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

**Age:** Age is a mathematical input to this equation. Changing it changes the estimate even if creatinine stays the same. This page does not assign a personal “normal” range from age alone or dismiss a low result as inevitable aging.

**Comparing reports:** Check whether the same equation, units and assay context were used. Record the actual results over time rather than interpreting a rounded one-unit difference as confirmed disease progression.

> **Tip:** If a result seems inconsistent with your circumstances, ask the clinician whether creatinine plus cystatin C or measured GFR would help. KDIGO recommends selecting the method for the clinical question; another marker is not an automatic diagnosis. [KDIGO GFR evaluation](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

Our [normal GFR by age guide](/guides/normal-gfr-by-age) is a separate page; its population comparisons should not be substituted for an individualized laboratory assessment.

## When to See a Nephrologist

KDIGO's specialist-referral guidance includes eGFR below 30, uncertain cause, important albuminuria or hematuria, sustained decline, resistant hypertension and CKD complications. Referral can be appropriate above 30; this calculator does not implement the complete referral decision or a validated kidney-failure risk equation. [KDIGO Figure 48](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

The former fixed “more than 5 mL/min/year” referral rule is not presented as current universal guidance. Ask the clinician about the significance of your actual trend and urine findings, and follow their assessment plan.

## Frequently Asked Questions

**What GFR level indicates kidney disease?**

KDIGO includes GFR below 60 persisting at least three months as a CKD criterion. Kidney damage markers can establish CKD at higher GFR. One result does not establish chronicity, and an acute abnormality may still need prompt attention. [KDIGO definition and Table 1](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

**What is a normal GFR for my age?**

This tool cannot define your personal normal value from age alone. Age is an equation input; urine albumin, history and persistence also matter. No universal yearly decline or age-based reassurance band is assigned here. [KDIGO assessment framework](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

**Is the GFR calculator accurate?**

It reproduces an established equation, but estimates are not direct measurements. There is no guaranteed ±20–30% error interval for an individual result on this site. The clinician may use another method if greater accuracy is needed. [NKF equation](https://www.kidney.org/ckd-epi-creatinine-equation-2021), [KDIGO method selection](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

**What affects GFR besides kidney function?**

Muscle mass, dietary factors, medicines and clinical circumstances can affect creatinine-based estimation. They do not prove an abnormal result is harmless. Discuss the original report and your circumstances with the clinician. [KDIGO GFR evaluation](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf)

## Sources

1. [National Kidney Foundation: CKD-EPI Creatinine Equation (2021)](https://www.kidney.org/ckd-epi-creatinine-equation-2021), equation, parameters and units.
2. [KDIGO 2024 CKD Guideline](https://kdigo.org/wp-content/uploads/2024/03/KDIGO-2024-CKD-Guideline.pdf), definition, Tables 1–3, Section 1.2, Figure 48 and dialysis assessment. Sources accessed October 5, 2026.
