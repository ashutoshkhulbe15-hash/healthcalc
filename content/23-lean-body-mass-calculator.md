<!-- last-updated: October 5, 2026 -->
# Lean Body Mass Calculator: Boer Equation and Interpretation

This form estimates lean body mass from height, weight and the selected sex-specific **Boer equation**. It has no body-fat-percentage input and does not directly measure muscle, bone or other tissue. The exact kilogram/centimeter coefficients are documented in a study by MD Anderson Cancer Center researchers. [Methods: Boer formula](https://pmc.ncbi.nlm.nih.gov/articles/PMC5079277/)

Lean mass is not synonymous with muscle mass. This page keeps mathematical estimates separate from measured body-composition reports and does not assign a fitness category or protein prescription from the result.

## How to Calculate Lean Body Mass

Enter height and weight in the selected units, choose the equation category, then calculate. Metric entries use kilograms and centimeters. Imperial entries are converted from pounds and inches before the equation is evaluated. Changing units clears the measurements and result.

The site checks for positive inputs and rejects an equation output at or below zero or at or above total body weight. These checks catch some incompatible entries; they do not establish that every accepted combination is representative of the equation's source population.

**Calculation example:** For male inputs of 80 kg and 180 cm, the Boer expression gives 0.407 × 80 + 0.267 × 180 − 19.2 = **61.42 kg**, displayed as **61.4 kg**. Using the female equation at 65 kg and 165 cm gives **46.125 kg**, displayed as **46.1 kg**. These are equation examples, not measured tissue weights.

If you already have a body-fat percentage from another method, subtraction arithmetic is explained later in this article. That is a separate calculation and is not an optional second mode in the form above.

## The Boer Formula

The site applies these expressions, with **weight in kg and height in cm**, to produce an estimate in kg:

**Male:** estimated LBM = 0.407 × weight + 0.267 × height − 19.2.

**Female:** estimated LBM = 0.252 × weight + 0.473 × height − 48.3.

[MD Anderson research methods, exact coefficients and units](https://pmc.ncbi.nlm.nih.gov/articles/PMC5079277/)

The original Boer paper was published in 1984 and concerned normalization of body fluid volumes. Its title should not be interpreted as universal validation against DXA in every population. [Original Boer study](https://pubmed.ncbi.nlm.nih.gov/6496691/)

For this site's rounding, keep the unrounded equation output until calculation is complete. Displaying one decimal place is not proof of accuracy within 0.1 kg. Likewise, a pound conversion describes the same estimate in another unit; it is not an independent confirmation.

The earlier blanket claims that Boer is most accurate across diverse populations or agrees with measured composition within ±2–5% are not made here.

## Understanding Your Lean Body Mass Results

The output is a model estimate, not an athletic, fit or average category. The former percentage table is not used to establish personal health or essential-fat targets.

MD Anderson researchers compared height-and-weight estimates with CT-derived composition in **215 adults treated for head-and-neck cancer**. The equations did not adequately substitute for CT assessment in that population. This is a defined clinical limitation, not evidence that every healthy reader has the same error or that CT is necessary for every calculator user. [Study population and conclusion](https://pmc.ncbi.nlm.nih.gov/articles/PMC5079277/)

| What the site shows | What should accompany it |
|---|---|
| Estimated lean mass in kg | Equation name, measurements and units |
| Equivalent pounds | Conversion and rounding, not another test |
| A comparison with an earlier output | Both sets of inputs and dates |
| A difference from a measured report | The report's actual method and clinical context |

The calculator does not separate estimated lean mass into muscle, water, bone and organs. It cannot report that a particular number of kilograms is newly gained muscle, or use a percentage to certify hormonal health.

## Why Lean Body Mass Matters More Than Scale Weight

Scale weight and an estimated lean mass describe different quantities. However, an equation that uses only height and weight cannot detect an independent composition change when both inputs remain the same. That limitation is visible in the calculation itself.

**Model-change example:** Holding height and sex category constant, a 2 kg increase in input weight changes the male Boer estimate by 0.407 × 2 = **0.814 kg**. It changes the female estimate by 0.252 × 2 = **0.504 kg**. These changes follow from the coefficients; they do not measure how much muscle or fat changed.

If an independently measured report showed a 2 kg lean-mass increase and a 2 kg fat-mass decrease, total weight would remain unchanged by addition. This form would still give the same estimate for the same height and weight. It therefore cannot demonstrate that example's composition change.

Keep measured and modeled information in separate records. A record might include total weight, estimated Boer output and a separately dated clinical report, each with its own method. No automatic “excellent recomposition” label or testing interval is assigned here.

Protein and energy planning should retain the denominator and guideline actually used. Applying 2 to 80 kg gives 160; applying 2 to 60 kg gives 120. That arithmetic difference does not establish that either protein amount is appropriate. Our [protein reference](/fitness/protein-intake-calculator) states its own source and scope; the [macro allocator](/fitness/macro-calculator) uses user-chosen percentages, not this lean-mass output.

## Lean Body Mass Calculator With Body Fat Percentage

For a separate arithmetic example, let fat fraction = body-fat percentage ÷ 100. Then the non-fat portion of a supplied weight is:

**Weight × (1 − fat fraction).**

At 75 kg and an assumed 22%, the fat fraction is 0.22, leaving 75 × 0.78 = **58.5 kg**. At 180 lb and an assumed 20%, 180 × 0.80 = **144 lb**. These are worked examples of partitioning a supplied total, not new measurements.

The fraction must be entered as 0.22 in that expression, not 22. Weight times (1 − 22) would produce a negative amount, showing the unit mistake. A reported body-fat percentage should keep the method, date and context that produced it.

The site offers no universal ±1–2% DXA, ±3–5% circumference or ±5–8% impedance accuracy table. A particular report's uncertainty cannot be inferred solely from the method's name. Nor does this page show that subtracting a fat estimate is automatically more accurate for every person than a height-and-weight equation.

## Frequently Asked Questions

**How do I calculate my lean body mass?**

The current form calculates the Boer height-and-weight equation in the stated units. If you are discussing subtraction using an independently supplied fat percentage, keep that method separate and use the worked example above. The form does not offer a fat-percentage input.

**What is a good lean body mass?**

This calculator does not assign a healthy or fit range. Its numerical output is not a clinical assessment, and it does not supply sex-specific essential-fat or lean-percentage targets.

**How do I calculate lean body mass with body fat percentage?**

For arithmetic, divide the percentage by 100 and multiply weight by one minus that fraction. The example 180 lb at an assumed 20% gives 144 lb. The result inherits the supplied estimate's limitations; the multiplication cannot independently verify the percentage.

**Should I use lean body mass for protein calculations?**

Use the denominator and population stated by the relevant guidance or professional plan. This form does not establish that lean-mass dosing is universally more precise, and it does not prescribe a bodybuilding or calorie-restriction protein amount.

## Sources

1. [Chamchod and colleagues: Quantitative Body Mass Characterization Before and After Head and Neck Cancer Radiotherapy, 2016](https://pmc.ncbi.nlm.nih.gov/articles/PMC5079277/), MD Anderson-led study: exact Boer units and coefficients, clinical population and CT-comparison limitation. Direct PMC access can be restricted; the full authority-hosted indexed Methods and Conclusion were read.
2. [Boer, 1984: Estimated lean body mass as an index for normalization of body fluid volumes in humans](https://pubmed.ncbi.nlm.nih.gov/6496691/), original study purpose; not used to assert universal DXA accuracy.

Sources checked October 5, 2026.

---

*This calculator provides estimates. For precise body composition measurement, consult a healthcare provider or exercise physiologist for DEXA scanning.*
