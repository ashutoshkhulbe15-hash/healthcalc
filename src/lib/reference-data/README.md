# Growth reference data

Retrieved from the official sources on October 2, 2026. Published LMS parameters are stored unchanged; this is a website implementation, not independent clinical validation.

## CDC BMI-for-age

Original dataset: https://www.cdc.gov/growthcharts/data/zscore/bmiagerev.csv

Documentation: https://www.cdc.gov/growthcharts/cdc-data-files.htm

`cdc-bmi.csv` preserves the downloaded dataset including percentile columns and the repeated sex header. `cdc-bmi.json` stores age, L, M, S by sex (1 male, 2 female), 219 rows each. The calculator supports 24–239 completed months. For each completed month it selects the CDC half-month row representing that interval, calculates BMI in kg/m², applies LMS and the standard normal CDF, and uses unrounded percentiles for categories. Exact displayed percentiles below the 3rd or above the 95th percentile are suppressed (z outside approximately −1.8808 to +1.6449), matching the implemented standard-chart display limits. The CDC extended BMI charts are not implemented.

## WHO weight-for-age

Daily expanded LMS spreadsheets:

- Boys: https://cdn.who.int/media/docs/default-source/child-growth/child-growth-standards/indicators/weight-for-age/expanded-tables/wfa-boys-zscore-expanded-tables.xlsx?sfvrsn=65cce121_10
- Girls: https://cdn.who.int/media/docs/default-source/child-growth/child-growth-standards/indicators/weight-for-age/expanded-tables/wfa-girls-zscore-expanded-tables.xlsx?sfvrsn=f01bc813_10

Each JSON row contains `[completedDays, L, M, S]`, 1,857 rows per sex. The calculator supports only completed days 0–1,826 and weights within z = −3 to +3. It reports weight-for-age; it does not calculate length-for-age, weight-for-length, head circumference or corrected age for prematurity. Values beyond the supported range prompt measurement checking and clinician discussion.

## Reproduce conversion

Download the three official input files, then run:

```sh
python scripts/convert-reference-data.py cdc-bmi.csv boys.xlsx girls.xlsx
npm test
```

Python conversion requires `openpyxl`. Node regression tests compare the BMI calculation with published P5, P50, P85 and P95 values across supported completed ages and both sexes. WHO regression cases check daily median and supported-range behavior.

SHA-256 of the checked-in release files:

```text
cdc-bmi.csv cbeea0e8d500ee15c652f3fdc45bcd02cb9c15d4d1e86f4d8048bbfea8d166e5
cdc-bmi.json 3f8f3362bf765573816eaa613d1dfef729996dcd2e578ea419e300f32577fbf1
who-weight-boys.json 01d0e915ec2e3cba2d53423f7e267c72c46a19ab3dd6a3f946a81d59598613c6
who-weight-girls.json eb8d0ddce6b1a27be14c08e3adb1e9a6c163c597f7710385f61b8258e3d70880
```

JSON whitespace or integer formatting may differ after conversion; compare parsed values when verifying numerical equivalence.

## October 5, 2026 CDC dataset recheck

The official CDC CSV was downloaded again and matched the bundled CSV byte for byte, including the published percentile columns. Its SHA-256 remains the value above. The calculator uses standard LMS percentiles and does not implement the extended BMI method.

## October 3, 2026 independent recheck

Both official WHO expanded spreadsheets were downloaded again. All 1,857 `[day,L,M,S]` rows for each sex matched the bundled JSON exactly. The published, rounded −2 and +2 SD weights at days 0, 90, 365, 730 and 1,826 were stored as independent regression fixtures in `tests/who-reference-fixtures.json`; their calculated percentiles agree within 0.03 percentage points. The site's ±3 limit avoids extrapolating the ordinary LMS method into the modified extreme-tail method. The formula and this extreme-tail caveat are explained in WHO's *Training Course on Child Growth Assessment*, module C, annex 1, printed page 48: https://iris.who.int/bitstream/handle/10665/43601/9789241595070_C_eng.pdf .
