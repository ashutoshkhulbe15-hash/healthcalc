<!-- last-updated: October 5, 2026 -->
# BMI Calculator for Teens: CDC Age-and-Sex Reference

For children and teens, BMI is interpreted using age-and-sex-specific growth references. The same BMI can have a different reference position at different ages. CDC applies its child and teen categories from **age 2 through 19**, while its adult calculator is for age 20 and older. [CDC categories and age scope](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

This tool calculates BMI from entered height and weight and compares it with the CDC 2000 BMI-for-age LMS dataset. It is a screening calculation, not a diagnosis, a measured body-fat percentage or a personal weight target. A pediatric clinician considers growth and wider health context when interpreting it. [CDC](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html); [NIDDK teen health guidance](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

## 📊 Why Teen BMI Is Different from Adult BMI

The basic BMI formula is the same for adults and young people: **weight in kilograms ÷ height in meters squared**. The important difference is interpretation. CDC uses sex-specific BMI-for-age percentiles for growing children and teens, rather than applying adult category cutoffs to everyone. [CDC explanation](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

A percentile expresses a position in a **reference population**, not a grade or a recommendation to move toward the middle. The 50th percentile is the reference median. It does not mean that every teenager should have that BMI, and a result at another percentile does not by itself describe someone's health.

Consider a hypothetical 50 kg person at 1.60 m: 50 ÷ 1.60² = 19.53125 kg/m². That calculation contains no age or sex information. The same BMI then needs the appropriate age-and-sex reference before assigning a child or teen category. The weight and height in this example are arithmetic inputs, not recommended measurements.

The website does not infer puberty stage from age, compare a child with an adult weight target, or measure developmental progress. NIDDK explains that young people grow at different rates and that a professional considers growth rate and overall health alongside BMI. [NIDDK: Do I need to lose weight?](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

This is why an isolated adult BMI label is not an adequate substitute for the age-specific reference used here.

## 📏 How to Use This Teen BMI Calculator

Select metric or imperial units, enter completed years and additional completed months, choose the sex used by the CDC chart, then enter height and weight. The supported age range is **24 through 239 completed months**: 2 years 0 months through 19 years 11 months. Years and additional months must be whole numbers.

For example, 14 years and 3 completed months corresponds to 171 completed months. This site selects the CDC row at 171.5 months, representing 171.0 up to but not including 172.0 months. CDC explains that half-month labels represent the entire completed-month interval. [CDC age-row documentation](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)

Metric height is entered in centimeters and converted to meters for BMI. Imperial height is entered in inches, not feet written as a decimal. For example, 5 feet 4 inches is 64 inches. Changing units clears the measurements to avoid silently interpreting a kilogram value as pounds.

The output includes BMI, a reference category and a numerical percentile where the implemented method supports displaying one. Percentile numbers are withheld below the third or above the 95th percentile; the category can still be shown. The website does not implement CDC's extended method for high BMI values. [CDC standard and extended methods](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)

Check the units and completed age before interpreting a result. A measurement entered incorrectly can produce a mathematically correct output for the wrong inputs. The form cannot confirm that a height or weight was measured accurately.

## 📋 CDC BMI Percentile Reference Values

These values come from the **published percentile columns in the CDC 2000 dataset**, freshly checked against the official download. They are BMI values in kg/m², displayed to two decimals. Each row represents the stated completed-month interval, not an entire year of age. [Official CDC CSV](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv); [age-interval explanation](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)

**Boys / male reference, ages 13 to 19:**

| Completed age | CDC row (months) | P5 | P50 (median) | P85 | P95 |
|---|---|---|---|---|---|
| 13 years, 0 months | 156.5 | 15.46 | 18.47 | 21.85 | 25.18 |
| 14 years, 0 months | 168.5 | 15.99 | 19.16 | 22.66 | 26.05 |
| 15 years, 0 months | 180.5 | 16.55 | 19.86 | 23.45 | 26.84 |
| 16 years, 0 months | 192.5 | 17.13 | 20.56 | 24.21 | 27.56 |
| 17 years, 0 months | 204.5 | 17.70 | 21.24 | 24.94 | 28.26 |
| 18 years, 0 months | 216.5 | 18.24 | 21.90 | 25.66 | 28.96 |
| 19 years, 0 months | 228.5 | 18.73 | 22.50 | 26.36 | 29.73 |

**Girls / female reference, ages 13 to 19:**

| Completed age | CDC row (months) | P5 | P50 (median) | P85 | P95 |
|---|---|---|---|---|---|
| 13 years, 0 months | 156.5 | 15.31 | 18.74 | 22.58 | 26.30 |
| 14 years, 0 months | 168.5 | 15.81 | 19.35 | 23.35 | 27.26 |
| 15 years, 0 months | 180.5 | 16.31 | 19.93 | 24.05 | 28.12 |
| 16 years, 0 months | 192.5 | 16.79 | 20.45 | 24.66 | 28.91 |
| 17 years, 0 months | 204.5 | 17.21 | 20.91 | 25.20 | 29.63 |
| 18 years, 0 months | 216.5 | 17.55 | 21.28 | 25.68 | 30.33 |
| 19 years, 0 months | 228.5 | 17.77 | 21.55 | 26.10 | 31.03 |


For example, the male row at 168.5 months applies from 14 years 0 months up to but not including 14 years 1 month. It should not be used unchanged for someone who is 14 years 10 months. Enter the additional months in the calculator instead.

P5, P50, P85 and P95 mean the fifth, 50th, 85th and 95th reference percentiles. The values are threshold references rather than diagnoses. The healthy-weight category includes P5 and excludes P85. A displayed rounded table number is not a substitute for a calculation using the unrounded data.

This table does not provide a target weight. Turning a cutoff into a target by multiplying it by height squared would be another calculation, not a clinical recommendation. Discuss the person's growth and health rather than treating an endpoint as a number to reach.

## 🔍 Understanding BMI Percentile Categories

CDC defines the following categories for ages 2 through 19. The inequalities matter; writing “5th to 84th” would leave fractional percentile values unclear. [CDC category table](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

| Weight-status category | BMI-for-age reference percentile |
|---|---|
| Underweight | Below 5th |
| Healthy weight | At least 5th and below 85th |
| Overweight | At least 85th and below 95th |
| Obesity | At least 95th |

Thus a percentile of 84.9 belongs below the 85th threshold; 85.0 belongs in the next category. These are boundary examples, not claims about a specific person's growth or health. This tool assigns categories using the **unrounded** calculation, so a rounded percentile printed near a boundary may look close to a cutoff without determining the category itself.

CDC also describes severe obesity using 120% of the age-and-sex-specific 95th-percentile BMI or BMI of at least 35 kg/m². “120% of the 95th-percentile BMI” is a ratio to a BMI value; it is not a 120th percentile. This site does not separately classify severe obesity or implement the extended percentile calculation. [CDC categories](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

The word “healthy” is the name of a screening category, not confirmation that all aspects of a teenager's health are normal. Conversely, a category outside that range is not enough to identify a medical cause or select treatment.

## 🔄 What the Same BMI Means at Different Ages

The following examples use **BMI 22 kg/m²**, the female reference and zero additional completed months at each stated age. They are derived calculations from the CDC LMS parameters, not observations about particular teenagers. [Dataset](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv); [LMS method](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)

| Entered age | Reference row | Derived percentile, rounded | Category from unrounded calculation |
|---|---|---|---|
| 12 years, 0 months | 144.5 months | 86.24th | Overweight |
| 15 years, 0 months | 180.5 months | 72.39th | Healthy weight |
| 18 years, 0 months | 216.5 months | 58.66th | Healthy weight |

The BMI is held constant in these examples while the reference row changes. The different percentiles follow from that reference choice. They do not prove a difference in body fat, fitness, nutritional intake or overall health.

A result described only as “BMI 22 for a girl” leaves the completed age undefined. A result described as “BMI 22 at age 15” still omits additional months. Use the actual age entry when reproducing a calculation rather than borrowing a percentile from a nearby example.

The examples also show why a rounded table and an exact percentile serve different purposes. The table makes reference thresholds easier to compare; the calculator uses the LMS values for its selected interval. Neither should be interpreted as a personal body-size goal.

## 🧬 What Changes During Puberty

This calculator does not measure puberty stage, hormone levels, body-fat change or the timing of a growth spurt. It uses completed age and chart sex because those variables define the CDC reference. Age alone does not establish how an individual teenager is developing.

NIDDK states that energy from food supports growth and that calorie requirements depend on body size, activity and how much a young person is still growing. Its teen guide recommends assessment of overall health and growth rate when considering weight concerns. [NIDDK: energy and weight assessment](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

The BMI calculation cannot separate a change in height from a change in weight unless the actual measurements are retained. In a hypothetical example, 50 kg at 160 cm gives BMI 19.53; the same 50 kg at 165 cm gives about 18.37. This is denominator arithmetic, not a prediction of how quickly someone's height should change or a declaration that the lower result is better.

NIDDK advises against trying to lose weight by eating very little, cutting out whole food groups, skipping meals or fasting without appropriate professional supervision. Young people need energy and nutrients for growth. The site's percentile category should not be turned into an unsupervised calorie-restriction instruction. [NIDDK: avoid unhealthy approaches](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

If puberty or growth concerns arise, describe the actual observations to a pediatric clinician. A calculator has no examination findings and cannot explain a developmental change from its percentile output.

## 📈 BMI Trends: When to Pay Attention

A sequence of measurements provides information a single entry cannot. CDC describes percentiles as indicators used to assess growth patterns, while NIDDK includes growth rate among the factors a professional considers. [CDC percentile explanation](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html); [NIDDK assessment](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

Keep the date, completed age, height, weight and measurement units with each calculation. If comparing entries, check whether a change came from new measurements, a different chart sex, corrected units or simply a later reference age. The calculator does not automatically store a longitudinal medical record.

A change between two reference positions is not an automatic diagnosis. This page establishes no rule that a jump from the 40th to 85th percentile within a year identifies a particular condition, or that consistently following the 30th percentile guarantees normal health. Those conclusions require the wider history and assessment.

Ask your clinician to explain the growth chart and the context of any change that concerns you. A useful discussion can distinguish measurements from assumptions and consider whether other observations or follow-up are needed. Do not use a changed percentile alone to decide to cut food intake.

A printed result is easier to assess when its source and date are visible. Keep the selected age and reference method with the percentile rather than recording only a category word.

## ⚖️ The Limitations of BMI for Teens

BMI is a weight-to-height calculation, not a direct measurement of fat. CDC states that BMI cannot distinguish fat, muscle and bone mass and is one part of a broader assessment. A numerical result should not be treated as a body-composition test. [CDC: about BMI](https://www.cdc.gov/bmi/about/index.html)

That limitation applies when considering athletic teenagers too. This page cannot conclude that a particular athlete's elevated BMI is explained by muscle, and it does not establish that a circumference body-fat calculator is a more accurate clinical assessment for that teenager. A clinician can interpret the measurement in the relevant context.

Race is not a factor used to calculate the CDC BMI-for-age percentile. The reference here does not supply ethnic-specific diagnosis thresholds or a guarantee that a category captures every individual's health circumstances. [CDC: child and teen BMI](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

The implemented LMS method also has a range limitation. Numeric percentiles are withheld below the third or above the 95th percentile rather than extrapolated as precise extreme values. CDC's extended method is available for high BMI assessment, but this website does not implement it. A withheld number does not mean the observation is unimportant or that no reference can be used clinically. [CDC extended charts](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)

Finally, a percentile is not a count of present-day classmates with a higher or lower BMI. It is a position relative to the chart's reference population. Keep the historical reference and the actual individual's assessment distinct.

## 👦👧 Teen BMI by Age Group: Quick Guide

**Younger teens, ages 13–15:** enter both years and additional completed months. Use the age-specific row rather than an adult cutoff or the rounded threshold for another birthday. This site makes no claim that percentile changes at these ages automatically represent a harmless growth spurt.

**Older teens, ages 16–19:** CDC continues to use child and teen BMI-for-age categories through age 19. Being close to adulthood does not make adult cutoffs the correct reference for this calculator. CDC directs people aged 20 and older to its adult calculator. [CDC age scope](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

**Girls and boys:** the form selects the corresponding sex-specific reference. Two different reference rows can assign different percentile positions to the same BMI. This is a feature of the reference calculation, not an individual explanation of hormones, puberty stage or body composition.

**Ages outside the teenage years:** despite its page name, the tool supports the CDC child-and-teen interval beginning at age 2. It does not support infants or a completed age of 20 years. Use the appropriate growth reference with a child's healthcare team.

The published tables above are quick reference examples for zero additional months. For another age interval, use the form and keep its exact completed-month input. This educational result does not determine sports clearance, college eligibility or military entrance standards.

## ✅ What to Do With Your Result

First check the inputs. Correct any mistaken units or age entry, then recalculate. If the output concerns you, keep the measurements and discuss them with a pediatric clinician. NIDDK recommends talking with a healthcare professional about weight concerns and asking a parent or guardian for help arranging care when needed. [NIDDK](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

A healthy-weight category does not mean “nothing to act on” in every circumstance. Symptoms, growth concerns or existing medical advice still deserve attention. An outside-range category likewise does not tell you to start dieting or prove a diagnosis from one result.

A clinician can consider growth rate, overall health and any weight-related problems. NIDDK explains that, depending on age and growth, some young people may need to gain weight more slowly rather than lose weight. That choice requires individual assessment; it cannot be made from this form alone. [NIDDK: How can I lose weight safely?](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

If you want to prepare for a discussion, bring the date, age, height, weight, units, chart sex and any previous measurements. Ask how the result fits the growth history and whether follow-up is needed. Keep a hypothetical example from an article separate from your own measurements.

## 💚 A Note About Health, Not Numbers

If you are a teenager reading this, a reference percentile is one calculation. It is not a grade, a judgment or a measure of your worth. The name of a screening category should not be used to shame you or someone else.

You do not have to reach the 50th percentile to satisfy the reference method. The median describes the chart, not an ideal individual body. Discuss concerns with a trusted adult and a healthcare professional who can consider your situation rather than trying to change a number in isolation. [NIDDK: discussing weight concerns](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

If you have been trying to lose weight by making yourself vomit or using laxatives, NIDDK advises speaking with a healthcare professional or another trusted adult right away. Those behaviors can harm health and need support. A percentile in any category does not make them safe. [NIDDK: avoid unhealthy approaches](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

## ❓ Frequently Asked Questions

**What is a normal BMI for a 14 year old boy?**

For the male CDC row representing 14 years 0 completed months, P5 is 15.99 and P85 is 22.66 kg/m², rounded to two decimals. The healthy-weight category includes the unrounded P5 and excludes P85. These are reference values, not a personal diagnosis or target. [CDC dataset](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv)

**What is a normal BMI for a 15 year old girl?**

For the female row at 15 years 0 months, rounded P5 and P85 are 16.31 and 24.05. The category includes P5 and excludes P85; other months use other rows. [Dataset](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv)

**What is a healthy BMI for a 17 year old boy?**

At 17 years 0 months in the male reference, rounded P5 is 17.70 and P85 is 24.94, with P50 at 21.24. The category's upper boundary is exclusive and the values are not military eligibility criteria. [Dataset](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv)

**What is a healthy BMI for a 16 year old girl?**

At 16 years 0 months in the female reference, rounded P5 is 16.79 and P85 is 24.66. Additional months change the reference row. [Dataset](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv)

**Can the same BMI be healthy at one age and overweight at another?**

Yes, its reference position can differ. BMI 22 in the female reference gives about the 86.24th percentile at 12 years 0 months and 58.66th at 18 years 0 months. These are derived examples, not complete health assessments. [LMS reference method](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)

**Is BMI accurate for teenage athletes?**

BMI does not directly measure fat or distinguish fat from muscle and bone. The calculator cannot determine that muscle explains a particular result or substitute a circumference estimate for a clinical assessment. [CDC limitations](https://www.cdc.gov/bmi/about/index.html)

**Should teenagers try to change their BMI?**

Do not use a percentile to select an unsupervised diet. NIDDK recommends professional assessment; growth may affect whether weight loss or slower weight gain is appropriate. [NIDDK](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers)

**Why does my BMI percentile change even if my weight stays the same?**

Height changes affect BMI, and completed age changes the selected reference row. Check both measurements and the age entry. A change does not by itself explain the person's health. [CDC age-row method](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)

**What BMI is the 5th percentile for a 17 year old?**

At 17 years 0 months, published P5 rounds to 17.70 for the male reference and 17.21 for the female reference. Values differ at other additional months; rounded table numbers should not decide an exact boundary. [Dataset](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv)

**Is BMI calculated differently for teens than adults?**

The kg/m² calculation is the same. CDC interprets child and teen BMI with age-and-sex-specific percentiles through age 19, with adult interpretation beginning at 20. [CDC](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

**Is there a difference between a teen BMI calculator and a teenage BMI calculator?**

Those names describe the same topic. What matters is the tool's actual age scope, dataset, month handling and method limits. This site uses CDC 2000 LMS data for 24–239 completed months.

## 📚 Sources and References

1. [CDC: Child and Teen BMI Categories](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html) — formula, age scope, category inequalities and reference-population meaning.
2. [CDC: BMI-for-age percentile dataset](https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv) — published threshold columns and LMS parameters, re-downloaded and matched to this site's dataset on October 5, 2026.
3. [CDC: Extended BMI-for-Age Data Files](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm) — completed-month intervals, standard LMS method and extended high-BMI method.
4. [CDC: About BMI](https://www.cdc.gov/bmi/about/index.html) — screening and body-composition limitations.
5. [NIDDK: Take Charge of Your Health, a Guide for Teenagers](https://www.niddk.nih.gov/health-information/weight-management/take-charge-health-guide-teenagers) — growth, professional assessment and avoiding harmful weight-loss approaches. Its food-pattern section references older dietary guidelines; this page uses the growth and care passages, not those older intake recommendations.
