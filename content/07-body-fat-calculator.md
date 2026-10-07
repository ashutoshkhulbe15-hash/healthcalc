<!-- last-updated: October 5, 2026 -->
# Body Fat Calculator: Military Circumference Equation Estimate

This calculator applies a historical military circumference equation to measurements you enter. It estimates a percentage; it does not measure fat directly or establish whether your body composition is healthy. The equation is documented in the U.S. Army's 2013 Regulation 600–9, Appendix B, Table B–5. [Official equation source](https://api.army.mil/e2/c/downloads/566071.pdf)

The familiar “Navy method” name does not mean this website performs an official military assessment. Later Army guidance introduced a different one-site method. Use current service instructions for eligibility or compliance decisions, not this educational tool. [Army's 2023 assessment change](https://www.army.mil/article-amp/267486/army_publishes_new_body_fat_assessment_guidance)

## How the Navy Method Works

The calculator requires height and neck circumference, plus abdomen circumference for the male equation or waist and hip circumferences for the female equation. All formula lengths are in **inches**; metric inputs are divided by 2.54 before evaluation. These are the two equations in the historical Army table. [Table B–5](https://api.army.mil/e2/c/downloads/566071.pdf)

**Men:** BF% = 86.010 × log₁₀(abdomen − neck) − 70.041 × log₁₀(height) + 36.76

**Women:** BF% = 163.205 × log₁₀(waist + hip − neck) − 97.684 × log₁₀(height) − 78.387

Log₁₀ means base-ten logarithm, not the natural logarithm. The male circumference difference and the female circumference sum-minus-neck must be positive. The website rejects nonpositive measurements and equation estimates at or outside 0–100%, rather than forcing them into a displayable result.

The output is rounded to one decimal place. This precision is a display choice, not a claim that the estimate is accurate within 0.1 percentage points. No universal ±3–5-point agreement with DXA is established for this site's users.

## Body Fat Percentage Categories

A percentage estimate is not a health category. Labels such as “essential,” “athletic,” “fit” and “average” are not health diagnoses and are not assigned to the result or used to prescribe a personal goal. Those labels cannot be inferred from the arithmetic alone.

| Result information | What this site can report | What it cannot establish |
|---|---|---|
| Entered circumferences | The values supplied in the selected units | Whether they were measured correctly |
| Equation output | A rounded numerical estimate | An independently measured fat percentage |
| Change between entries | A difference between two outputs | Whether a biological change actually occurred |
| Personal goal | No goal is assigned | A medically appropriate target |

Keep the estimate alongside its measurement method. A value from a circumference equation should not silently replace a clinical report from another method, and a military administrative limit should not be treated as a general health threshold.

## How to Measure Accurately

The historical protocol measures the male abdomen at the navel after a normal relaxed exhalation. For the female equation, the waist is measured at the natural waist and the hips at their greatest protrusion. Neck measurement is below the larynx, with the tape perpendicular to the neck’s long axis and as close to horizontal as anatomically feasible. The tape should contact skin without compressing underlying soft tissue. [Appendix B measurement procedures](https://api.army.mil/e2/c/downloads/566071.pdf)

Use the correct measurement site rather than treating “waist” as interchangeable with every abdominal location. Record the sites and units so that another entry can be checked against the same method. The tool does not reproduce the Army's examiner, clothing, rounding, repeated-measurement or administrative procedures.

If a result changes unexpectedly, check the entries before interpreting it. A misplaced decimal, centimeters entered as inches, or a neck value greater than the male abdomen changes the equation. The on-screen validation detects some impossible inputs; it cannot detect an incorrectly placed tape.

## Navy Method vs Other Methods

Different methods should be identified by name rather than ranked by an unsupported universal error table. When comparing providers, ask about the particular protocol, price and limitations rather than assuming that one price range or accuracy interval applies to every service and population.

| Method | Information to ask about before comparing results |
|---|---|
| This circumference equation | Which sites, units and equation were used? |
| DXA report | Which scanner, analysis protocol and report were used? |
| Skinfold assessment | Which sites, examiner and conversion equation were used? |
| Bioelectrical impedance | Which device and measurement protocol were used? |
| Hydrostatic assessment | Which facility and protocol produced the estimate? |

A practical record can include the date, method, raw measurements and numerical output. Keeping these details makes a comparison transparent without claiming that a small difference reflects actual fat change. This website does not promise agreement between methods or recommend a testing interval.

For related arithmetic, see the [lean body mass calculator](/fitness/lean-body-mass-calculator) and [adult BMI calculator](/body-metrics/bmi-calculator). Each has separate assumptions; combining outputs does not create a complete clinical assessment.

## Frequently Asked Questions

**How accurate is the Navy body fat calculator?**

It reproduces a historical circumference equation, but no individual accuracy guarantee is offered. A fixed accuracy interval relative to DXA cannot be assigned to every person, measurement protocol or service on the basis of this calculator's equation alone. A correct implementation and correct measurements are necessary; neither makes the output a direct clinical measurement.

**What is a healthy body fat percentage?**

This tool does not assign a healthy range. It reports the estimate generated by the selected equation without “fit,” “average” or essential-fat targets. Ask a qualified clinician about an assessment appropriate to your circumstances rather than changing your intake to reach a website label.

**Is body fat percentage better than BMI?**

This equation and BMI provide different estimates. Neither establishes your health independently, and this page does not claim the circumference result is universally better for individual assessment. BMI is a screening measure and does not directly measure fat. [CDC explanation of BMI](https://www.cdc.gov/bmi/about/index.html)

## Sources

1. [U.S. Army Regulation 600–9, June 28, 2013](https://api.army.mil/e2/c/downloads/566071.pdf), Appendix B measurement procedures and Table B–5 formulas. This is a historical equation reference, not current service compliance advice.
2. [U.S. Army announcement of its 2023 body-fat assessment change](https://www.army.mil/article-amp/267486/army_publishes_new_body_fat_assessment_guidance).
3. [CDC: About BMI](https://www.cdc.gov/bmi/about/index.html), screening limitations.

Sources checked October 5, 2026. This source-based editorial review does not constitute independent clinical validation of the calculator.
