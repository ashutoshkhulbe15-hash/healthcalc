# ProHealthIt repair release — October 2, 2026

The supplied source project has been repaired locally. The existing live website has not been deployed or changed. The original source ZIP and analytics exports are preserved.

This release addresses the confirmed calculation defects, reduces unsupported numerical medical outputs, and fixes the technical issues from the audit. It does not establish independent clinical validation of every remaining page or prove why Google sends little traffic. Source links make verification possible; they do not certify all prose as correct.

## Implemented changes

| Audit issue | Repair |
|---|---|
| Pregnancy pounds treated as kilograms | Exact unit conversion; BMI calculated from pre-pregnancy weight. CDC total-gain guidance distinguishes singletons and twins. Unsupported weekly trajectory removed; higher multiples receive no invented range. |
| Impossible lean-body-mass output | James formula uses centimetres correctly. Boer estimate is the main output, James shown separately; physically impossible estimates are rejected. |
| Teen BMI misclassification | Original CDC LMS data replaces approximate bands. Completed months, unrounded category thresholds, sex and unit conversions are explicit; extreme-tail precision is withheld. |
| EPDS incorrect first two items | Every displayed choice has explicit 0–3 scoring. Question 10 produces an immediate safety message independently of the total. Follow-up language follows linked guidance. |
| Overnight sleep and false PSQI | Correct midnight arithmetic and awake-time subtraction. Tool identifies itself as a sleep-diary estimate rather than the PSQI. |
| Baby percentile interpolation | WHO daily weight-for-age LMS data replaces sparse invented interpolation. Birth–five-year range and unsupported tails are checked; premature-age correction and other growth measures are not implied. |
| Unsupported fetal, ADHD, burnout, anemia and teen-energy scores | Numerical outputs withdrawn. Existing URLs retained as guidance pages with specific source links. No modified MBI score is administered. |
| PCOS and vitamin D prescriptions | Removed blanket PCOS calorie reduction, subtype prescriptions, and arbitrary vitamin-D dose additions. PCOS output is an illustrative adult planning example; vitamin D displays age-based total-intake RDA, not treatment. |
| Thyroid interpretation | Users enter their own lab reference intervals. TSH and optional FT4 are compared separately; no universal pregnancy threshold or thyroid diagnosis is assigned. |
| Contraction timing | Intervals are start-to-start. The 5-1-1 flag requires continuous coverage of a full hour. Safety instructions explain when not to wait for a timer. |
| Inconsistent deficit and timeline | Displayed intake, deficit and static timeline use the same capped target. BMR is not claimed to prove a safe intake. |
| Future pregnancy dates | Local calendar parsing and signed gestation calculations; future or unsupported dates rejected. DST boundary cases tested. |
| Missing lipid values and unsupported risk | Missing optional LDL/TG remain unavailable. Removed broad cardiovascular and insulin-resistance diagnoses. |
| Invalid body-fat logarithms | Reject nonpositive formula domains and physically impossible outputs. |
| Unsupported sleep-cycle and WHR promises | Bedtime planner uses desired duration; no fixed-cycle alertness promise. Waist-to-hip reports arithmetic without invented overall health-risk bands. |
| PSS diagnostic labels | Removed custom low/moderate/high diagnostic cutoffs; numeric perceived-stress score and instrument limitations remain. |
| Shared validation and stale outputs | Form constraint validation, visible errors, positive numeric defaults, age limits, stale-result clearing, unit-change measurement clearing and Enter-key calculation. |
| Accessibility | Input labels linked by ID, meaningful navigation/search names, pressed states and named quiz groups, focused live results, shorter mobile calculator header. |
| Missing adult TDEE interaction | Restored the calculator component that its page had omitted. |
| Inconsistent medical prose | Rewrote priority method articles and the GFR, glucose and 8-DPO guides; corrected cod mercury and canned-light tuna classification across the identified article/checker surfaces. Removed contradictory injections on rewritten pages. |
| Missing reference links | All 76 Markdown articles now include clickable reference links. Legacy claims still require qualified review, including tables and illustrations. |
| Overstated trust claims | About now distinguishes maintenance standards from completed clinical review; no invented reviewer or credentials added. |
| `/tools` canonical and social URLs | Directory has its own server metadata. All 90 sitemap pages have self-canonicals and their own social URL. |
| Conflicting publication dates | Removed fabricated universal publication dates. Schema and sitemap use known explicit content dates; filesystem timestamps are not publication dates. |
| Hierarchy and resource discovery | Breadcrumbs match category/guide/blog hierarchy. Added `/guides` and `/blog` indexes and navigation/footer links. |
| Incomplete privacy disclosure | Privacy identifies GA4, Vercel Analytics, Speed Insights and AdSense, with third-party policy links. Calculator custom events include only event name and tool slug. |
| Vulnerable production dependencies | Updated Next.js, React and dependency overrides. Production npm audit reports zero known vulnerabilities at verification time. |

## Verification evidence

- Production build succeeds with Next.js 15.5.27 and regenerated sitemap/robots.
- TypeScript and ESLint pass.
- Nine numerical regression groups pass. CDC comparisons cover published P5/P50/P85/P95 for each supported monthly interval and both sexes; other cases cover conversions, WHO medians, EPDS, midnight sleep, date boundaries and contractions.
- Isolated Chrome tests use synthetic values and block external requests. Covered corrected outputs, stale state, unit switches, safety messages, invalid inputs, keyboard calculation, optional lipid fields, vitamin-D age boundary, bedtime planning, search, food filters, mobile overflow and custom analytics payloads.
- All 90 sitemap pages return 200 locally, have one H1, self-canonical and social URL, allow indexing and contain parseable JSON-LD. 89 internal destinations, an existing permanent redirect and a real 404 are checked.
- All 76 Markdown files contain linked references. This is a source-link coverage check, not clinical claim validation.
- `npm audit --omit=dev`: zero reported vulnerabilities. This does not constitute a penetration test or guarantee future vulnerability status.

Screenshots, page-check output, dependency audit and build logs accompany this record. `changed-files.json` compares the revised project with the supplied source ZIP. Reproducible tests are included in the project.

## Remaining work that requires more than source repair

1. **Qualified review:** arrange real obstetric/pediatric review of retained pregnancy and growth tools, mental-health instrument review, and appropriate endocrine/nephrology review. Review each calculation, article, illustration, FAQ and source together. Add reviewer details only after the actual review. Citations and implementation tests alone do not complete this work.
2. **Identity and editorial ownership:** confirm the public author name and genuine profile links, relevant experience, correction-contact monitoring, questionnaire permissions where applicable, and an actual review/update schedule. Do not fabricate these details to imitate E-E-A-T.
3. **Advertising and analytics configuration:** review the existing account-level settings and any consent-platform requirements for the site's audience. No CMP or consent compliance is claimed by this release. Register the custom tool events in GA4 if desired; do not capture measurements or scores.
4. **Release:** review and deploy this source through the existing hosting project. The dependency upgrade is a major-version change; retain the previous release for rollback. After deployment, smoke-test priority tools, redirects, robots and the sitemap on the real domain.
5. **Search Console and performance:** inspect representative URLs after release; check selected canonical, rendered content, indexing status and real Core Web Vitals. Submit the sitemap once. Private Search Console access and live field data were not available for these fixes.
6. **Growth:** spend the next month improving a small topic cluster using actual queries and successful calculator tasks. Monitor Google impressions/clicks separately from Bing and other engines. Genuine references, useful methods and real expert review may improve quality; no ranking or recovery date is promised.

A practical order is: review/release the critical corrections; establish clinical ownership; verify live indexing and user completion; then expand a focused content cluster. Adding more generic articles or review badges before completing these checks would leave the underlying weaknesses unresolved.
