<!-- last-updated: 2026-10-03 -->
# BMI-for-age calculator for children and teens

For ages 2 through 19, BMI is interpreted using sex-specific BMI-for-age percentiles, not adult BMI categories. CDC categories are underweight below the 5th percentile, healthy weight from the 5th to below the 85th, overweight from the 85th to below the 95th, and obesity at or above the 95th percentile. These are screening categories, not diagnoses. [CDC: Child and Teen BMI Categories](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)

## Method and reference data

BMI is weight (kg) divided by height (m) squared. The calculator uses the CDC 2000 BMI-for-age LMS reference rows for ages 2 to 20, separated by the sex category used by the CDC chart. CDC's public files provide the L, M, and S parameters by sex and age; ages are represented at the half-month point for each completed-month interval. [CDC Growth Chart Data Files](https://www.cdc.gov/growthcharts/cdc-data-files.htm)

The LMS z-score calculation is transformed to a standard-normal percentile. The reference dataset is a population comparison, not an individual's growth target or a diagnosis. CDC advises considering BMI with other health information. [CDC BMI FAQ](https://www.cdc.gov/bmi/faq/)

## Limits at the distribution tails

The CDC 2000 file includes selected percentiles through the 97th. CDC says the standard and extended methods match through the 95th percentile, either chart can be used between the 95th and 97th, and the extended chart should be used above the 97th. This calculator conservatively withholds numeric percentiles above the 95th and shows the broad screening category; it does not implement the extended method. At the lower tail it withholds estimates below the 3rd percentile, the lowest selected percentile in the CDC table. [CDC standard growth-chart files](https://www.cdc.gov/growthcharts/cdc-data-files.htm); [CDC guidance on plotting and interpreting BMI-for-age](https://www.cdc.gov/growth-chart-training/hcp/using-bmi/plotting-interpreting-bmi.html)

Growth over time, development, medical history and clinical assessment matter. Do not use a BMI result as an instruction to restrict a child's food or growth.

## Sources

- [CDC Growth Chart Data Files: BMI-for-age, 2 to 20 years](https://www.cdc.gov/growthcharts/cdc-data-files.htm)
- [CDC Extended BMI-for-Age Data Files](https://www.cdc.gov/growthcharts/extended-bmi-data-files.htm)
- [CDC: Child and Teen BMI Categories](https://www.cdc.gov/bmi/child-teen-calculator/bmi-categories.html)
- [CDC: BMI FAQ](https://www.cdc.gov/bmi/faq/)

---

*BMI-for-age is a screening measure. Discuss a child's growth pattern with a qualified healthcare professional.*
