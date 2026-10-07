<!-- last-updated: October 5, 2026 -->
# Baby Growth Percentile Calculator: WHO Weight-for-Age

This calculator compares an entered weight with the WHO **weight-for-age** reference for boys or girls at the entered age in completed days. It does not calculate length, head circumference, weight-for-length or CDC percentiles. WHO publishes separate weight-for-age tables through age five. [WHO source tables](https://www.who.int/tools/child-growth-standards/standards/weight-for-age)

Enter weight in kilograms, completed age in days and the reference table to use. The software accepts ages 0–1,826 days. Its WHO reference coverage is distinct from US clinical recommendations about which chart to use after age two. It does not automatically correct age for prematurity or select a chart for a child's medical circumstances.

## How Growth Percentiles Work

> **Key Takeaway:** A percentile is a position within a specified reference, not a health grade. CDC recommends interpreting growth using accurate measurements over time and clinical context. An isolated weight-for-age number cannot certify healthy growth or diagnose its cause. [CDC growth assessment](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

| **Displayed information** | **Meaning in this tool** |
|---|---|
| Weight percentile | Position of the entered weight within the selected age/sex reference |
| 3rd percentile weight | Calculated reference comparison, not a diagnosis threshold |
| 50th percentile weight | Reference median, not an individual target |
| 97th percentile weight | Calculated reference comparison, not proof of overfeeding |
| Out-of-range message | The tool does not provide a percentile outside its supported calculation range |

For example, a 40th percentile result describes an estimated position within the selected weight reference. It does not say the child is 40% healthy, needs to gain weight to reach the median, or has a 40% probability of a condition. Changing the age or reference table changes the comparison.

The implementation uses WHO daily L, M and S values: M is the median and L/S describe the transformation and spread. It computes a z-score and converts it to an approximate percentile; reference weights are calculated using the inverse transformation. The calculator withholds results outside z-scores −3 to +3. That is a software limit, not a clinical diagnosis. Its formula and published reference cases are tested, without claiming independent clinical validation.

## WHO vs CDC Growth Charts

**US clinical guidance:** CDC recommends WHO growth standards from birth to age two, then CDC growth charts. This page labels that as US guidance rather than a universal rule for every country. The calculator itself continues to use WHO weight-for-age throughout its accepted age range. [CDC recommended chart transition](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

**WHO reference coverage:** WHO's weight-for-age standards include birth-to-five-year tables. Their availability does not mean this tool implements every WHO measurement or establishes which reference a clinician should use for a particular child. [WHO chart and table directory](https://www.who.int/tools/child-growth-standards/standards/weight-for-age)

**Changing charts:** Percentiles can change when a different reference or measurement is used. CDC advises caution at the WHO-to-CDC transition. A shift caused by changing charts should not be treated as a measured loss of growth. [CDC transition cautions](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

> **Note:** Keep the chart name and measurement type with each record. A WHO weight-for-age percentile and a CDC BMI-for-age percentile are different comparisons; placing them in one list does not create a continuous curve.

## What to Track

**Weight-for-age:** This is the only measure calculated here. Check kilograms, age in completed days and the original measurement before recording a result. A pounds-to-kilograms unit mistake is not corrected automatically by this field.

**Length and weight-for-length:** CDC's recommended WHO charts for infants include these separate measures. A weight-for-age number does not substitute for them and cannot establish whether weight is high relative to length. [CDC infant chart types](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

**Head circumference:** CDC also lists a separate head-circumference-for-age chart. This tool does not accept head circumference and does not infer brain growth or a neurological condition from weight. [CDC chart types](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

> **Tip:** Bring previous measurements and the original chart to your child's appointment. CDC emphasizes correct age, accurate measurement and a series of measurements over time. Do not dismiss a concern solely because one number sits between displayed reference lines. [CDC assessment and monitoring](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

For prenatal questions, see our [fetal growth guide](/pregnancy/fetal-weight-percentile). Prenatal ultrasound estimates and a child's measured postnatal weight are separate assessments.

## Frequently Asked Questions

**What is a normal growth percentile for a baby?**

This calculator does not assign a universal “normal” 3rd–97th band. Interpretation depends on the measurement, chart, growth history and clinical assessment. Its displayed 3rd, 50th and 97th weights are reference comparisons. [CDC growth assessment](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

**Should I worry if my baby is in a low percentile?**

A percentile alone cannot answer that question or prove healthy growth. Check the entered units and age and discuss the measurement and previous records with your child's clinician. CDC recommends a series of accurate measurements rather than judging only one result. [CDC monitoring guidance](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

**Which growth chart should I use — WHO or CDC?**

CDC recommends WHO charts under age two and CDC charts thereafter in US clinical care. This software uses WHO weight-for-age only, even above age two within its stated reference range. Ask the clinician which chart applies to your child and country. [CDC recommendations](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html)

## Sources

1. [WHO: Weight-for-age standards and expanded daily tables](https://www.who.int/tools/child-growth-standards/standards/weight-for-age).
2. [CDC: Using WHO Growth Standard Charts](https://www.cdc.gov/growth-chart-training/hcp/using-growth-charts/who-using.html), measurement types, US age scope and interpretation. Sources accessed October 5, 2026.
