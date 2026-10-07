# Yehya Rizk Marketing Website — Implementation Plan

## Product scope
A single-page, English-only marketing agency website for Yehya Rizk, focused on strategy, media buying, creative production, and measurable campaign performance. The page must present verified recent campaign results from the supplied PDF without inventing leads, sales, revenue, ROAS, or other unsupported metrics.

## Design direction
- **Design movement:** Editorial performance-lab / premium dark SaaS aesthetic: disciplined, spacious, data-led, and quietly expressive.
- **Core principles:** clarity before decoration; evidence over hype; high-contrast hierarchy; frictionless conversion.
- **Color philosophy:** near-black and dark navy create focus and trust; deep purple is reserved for active states, chart energy, and the signature accent; soft gray keeps dense performance data readable.
- **Layout paradigm:** an asymmetric, editorial flow with a left narrative rail and right-side performance surfaces rather than a generic centered card grid.
- **Signature elements:** purple signal-line motif, compact campaign status pills, and a translucent performance dashboard visual in the hero.
- **Interaction philosophy:** interactions should reveal useful context—hovering a service lifts it, campaign cards expose status and metrics, and scroll reveals guide attention without noise.
- **Animation:** fast opacity/translate reveals, subtle chart bar growth, animated counters for verified aggregates, and restrained hover elevation. All motion is disabled/reduced under `prefers-reduced-motion`.
- **Typography system:** Inter for body and UI; Space Grotesk for display headings and data labels. Large display headlines use tight tracking, while KPI figures use tabular numerals.
- **Brand essence:** performance marketing systems for ambitious businesses that want clearer strategy and accountable growth. Personality: precise, confident, grounded.
- **Brand voice:** direct, calm, specific. Example lines: “Make every campaign easier to understand.” and “Turn attention into a repeatable growth system.”
- **Wordmark & logo:** a compact “YR” monogram made from two intersecting signal strokes, paired with the Yehya Rizk wordmark.
- **Signature brand color:** electric violet `#8B5CF6` against midnight navy.

## Implementation approach
- Use a lightweight Vite + vanilla TypeScript/CSS implementation to keep the site fast and dependency-light.
- `src/main.ts` owns content data, rendering of services/results/testimonials, navigation behavior, counters, chart bars, and reveal observers.
- `src/styles.css` owns responsive layout, color tokens, type scale, dashboard surfaces, mobile navigation, and reduced-motion rules.
- `index.html` owns semantic sections, SEO metadata, accessible landmarks, and the initial shell.
- `public/manus-routes.json` declares the single `/` route.
- No backend, database, or secrets are needed: all site content is static and sourced from the supplied brief/PDF.
- Aggregates are derived from the displayed source values: 8,425 messaging conversations started, EGP 58,410.00 total spend, and an explicitly labelled weighted average cost of EGP 6.93 per messaging conversation started after the two 2 post records were removed from the displayed campaign set. K values are converted only for the aggregate calculation while each campaign card preserves the source display.

## Project structure
- `index.html`: semantic page shell, metadata, global font imports, and section anchors.
- `src/main.ts`: typed campaign/service/testimonial data and UI behavior.
- `src/styles.css`: complete visual system and responsive rules.
- `public/manus-routes.json`: route manifest required by Webdev.
- `app.config.ts`: project logo metadata.
- `plan.md`: this approved implementation/design plan.
- `TODO.md`: outcome-oriented acceptance items.

## Material constraints
- English-only visible website copy.
- Exactly 12 campaign records are displayed after removing both 2 post cards at the user's request.
- Exactly 6 testimonials.
- No unsupported performance claims or fake metrics.
- Contact phone displayed exactly as `01156039491`.
