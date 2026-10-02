# ProHealthIt

Next.js health-information site. October 2, 2026 repair release: corrected priority calculations, reduced unsupported clinical claims, fixed metadata and form behavior, and added regression coverage. No independent clinical review is claimed.

## Run locally

Use a supported Node.js LTS release (tested with Node 24.14.1).

```sh
npm ci
npm run dev
```

For the production build and sitemap:

```sh
npm run build
npm run start -- --hostname 127.0.0.1 --port 3100
```

## Verify

```sh
npm test
npm run typecheck
npm run lint
npm run test:site
npm run test:browser
npm audit --omit=dev
```

The site and browser checks require the production server at `http://127.0.0.1:3100`. `TEST_BASE_URL` may select another localhost port. Browser checks use an installed Chrome browser and an isolated headless profile; `TEST_BROWSER_CHANNEL` can select another installed Playwright channel. They block all external requests and use synthetic inputs. Screenshots and structural results are written to the ignored `test-artifacts` directory.

Reference data provenance and conversion instructions are in `src/lib/reference-data/README.md`. The regression tests compare CDC LMS calculations against the original CSV percentiles across supported ages and sexes. These tests verify implementation behavior, not suitability for an individual medical decision.

## Deployment and review

Deploy through the existing hosting workflow only after reviewing the release. Existing page URLs and consolidation redirects are retained. Five unsupported numerical tools now explain their limitations and link to appropriate guidance: fetal weight percentile, ADHD, burnout, anemia risk and teen TDEE.

Highest-priority further work: finish the source-based review of remaining articles and calculator interpretations; actual author/profile information; advertising/analytics consent settings where applicable; private Search Console indexing and Core Web Vitals checks after deployment. Citations alone do not establish that every claim has been independently checked.

Calculator analytics events send only event name and tool slug. Measurement inputs and calculated scores are not included in those custom events. Existing third-party scripts remain configured; the privacy page names them. Review third-party account settings before release.

## Source-based review release

See `SOURCE-REVIEW.md` for the additional review of 15 pregnancy pages, newly corrected IVF offsets, hCG arithmetic and calendar-window behavior. This batch does not complete a claim-by-claim review of all 76 articles.

The source-based editorial pass continued in `SOURCE-REVIEW-BATCH-2.md`: 12 more pregnancy food and drink articles plus the related directory/checker interface. Across both batches, 27 of 76 articles are reviewed and 49 remain; the whole site is not verified.
