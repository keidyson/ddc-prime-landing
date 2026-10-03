# DDC Prime — Implementation & Design Plan

## Implementation approach

Build a dependency-free static landing page for Hubla handoff using semantic HTML, one stylesheet, and a small vanilla JavaScript layer. The page has one route (`/`) and all CTAs are prepared as configurable outbound links via `data-hubla-link` so the final Hubla checkout URL can be inserted without changing layout code. No server or database is needed.

The supplied DDC Prime logo is used in the hero, while the footer uses a restrained text wordmark to avoid repeating the supplied artwork. The page keeps the exact requested English copy and pricing values, adds no unverifiable performance claims beyond the supplied copy, and makes the primary purchase path explicit without pretending to complete checkout inside the preview.

## Design direction

- **Design movement:** Institutional dark luxury / Swiss editorial finance — precise, restrained, and information-led rather than promotional.
- **Core principles:** quantitative clarity, disciplined hierarchy, negative space, and controlled contrast.
- **Color philosophy:** near-black graphite (`#111111` / `#1A1A1A`) creates a private-terminal atmosphere; warm champagne gold (`#D4AF37`) is reserved for identity, rules, focus states, and conversion actions; cool ivory text provides high legibility without visual noise.
- **Layout paradigm:** a vertical editorial narrative with asymmetric problem/solution alignment, thin data-rule dividers, and a centered pricing decision matrix. The reading rhythm moves from thesis → diagnosis → operating system → access.
- **Signature elements:** gold measurement rules, a subtle market-grid texture, and small uppercase metadata labels that echo institutional research notes.
- **Interaction philosophy:** restrained and immediate. Hover states lift cards by a few pixels and sharpen the gold border; CTA clicks use the configured Hubla link or safely fall back to the pricing section. No distracting carousels or urgency timers.
- **Animation:** a short fade-up on first view, a low-amplitude gold signal-line drift in the hero, and no looping motion that competes with the copy. Motion is disabled under `prefers-reduced-motion`.
- **Typography system:** Inter from Google Fonts with system sans-serif fallback; compact uppercase labels with letter spacing; large, tight hero display copy; body copy set at a comfortable reading width.
- **Brand essence:** quantitative crypto market intelligence for sophisticated Gulf-based capital, differentiated by structured execution and disciplined risk framing. Personality: **measured, exact, private**.
- **Brand voice:** declarative, cold, and evidence-oriented. Example lines: “Pure Data. Zero Hype.” and “The market does not forgive emotion.”
- **Wordmark & logo:** use the supplied geometric gold DDC PRIME mark as the primary identity; pair it with a small “PRIVATE MARKET INTELLIGENCE” descriptor rather than recreating the artwork in a default text logo.
- **Signature brand color:** DDC Champagne Gold `#D4AF37`, used sparingly so it remains ownable and premium.

## Project structure

- `index.html` — complete semantic page, exact English copy, SEO/social metadata, and Hubla CTA hooks.
- `styles.css` — tokens, responsive layout, visual system, motion, and mobile-first behavior.
- `script.js` — CTA routing fallback, current-year footer, and intersection reveal behavior.
- `public/assets/ddc-prime-logo.webp` — user-provided DDC Prime logo.
- `public/manus-routes.json` — route manifest for `/`.
- `app.config.ts` — project logo metadata once the uploaded logo URL is available.
- `TODO.md` — outcome criteria copied from the requested scope.

## Serving and handoff

Use a minimal Node static server on `0.0.0.0:3000` for Preview. A no-build static deployment can serve the committed project root, with `index.html` as the output root. The page is intentionally portable: the same files can be moved into a Hubla custom-code section or adapted to its checkout embed once the real Hubla product URL is available.
