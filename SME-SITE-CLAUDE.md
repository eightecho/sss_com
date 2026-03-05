# SME Site Framework — Claude Code Instructions
### Part of the Subject Matter Expert System™ · Stupid Simple Startup™

---

> **STUDENT NOTE**
> This file is your site's instruction set. Claude Code reads it automatically when it's named `CLAUDE.md` and placed in your project root. Before you give Claude any other instructions, complete **Phase 0** below — fill in every `[PLACEHOLDER]` with your actual information. That one step tells Claude everything it needs to know about your brand before building anything.
>
> Rename this file to `CLAUDE.md` in your project folder before you begin.

---

## What This Framework Builds

A static, professional marketing and content site for a Subject Matter Expert — someone who teaches a methodology, framework, or system and sells training products around it.

The site has three functions:
1. **Explain your system** — the framework you teach, how it works, why it exists
2. **Sell your products** — playbooks, courses, worksheets, or programs built around that system
3. **Build your list** — capture email subscribers through a lead magnet (your free content / system overview)

It is built as **pure HTML, CSS, and JavaScript** — no frameworks, no build tools, no dependencies. It deploys to GitHub Pages with a single `git push`. It is fast, maintainable, and fully owned by you.

---

## Phase 0: Brand Variables — Fill These In First

> Replace every `[PLACEHOLDER]` below before issuing any build instructions to Claude. These values are referenced throughout this file and will be used across every page Claude builds.

```
[BRAND_NAME]          Your brand name (e.g., "Stupid Simple Startup")
[BRAND_TM_NAME]       Your trademark name — may differ from brand name
[SITE_DOMAIN]         Your domain (e.g., "stupidsimplestartup.com")
[LEGAL_ENTITY]        Your LLC or business name (e.g., "Eight Echo Agency, LLC")
[TAGLINE]             One-line brand tagline (e.g., "From idea to income.")
[YOUR_NAME]           Your name (for author/about references)

[SYSTEM_NAME]         Your framework or methodology name (e.g., "IMPACT System")
[SYSTEM_TM_NAME]      Trademark version (e.g., "IMPACT System™")
[SYSTEM_STEPS]        The steps of your system, in order (e.g., "Identify, Monetize, Productize, Activate, Campaign, Triumph")
[SYSTEM_TAGLINE]      One-line description of your system (e.g., "Six steps. One sequence.")

[PLAYBOOK_NAME]       Your flagship product name (e.g., "Picture Book Project Playbook")
[PLAYBOOK_TM_NAME]    Trademark version (e.g., "Picture Book Project Playbook™")
[PLAYBOOK_NICHE]      The specific niche it covers (e.g., "self-publishing children's books")
[PLAYBOOK_TAGLINE]    One-line product description (e.g., "Create, publish, and sell a picture book — without guesswork.")

[PRIMARY_COLOR]       Your brand's primary hex color (e.g., "#1B5E5A")
[ACCENT_COLOR]        Your accent hex color (e.g., "#D4643A")

[KIT_FORM_ID]         Your ConvertKit/Kit form ID (e.g., "9157991")
[KIT_FORM_UID]        Your Kit form UID (e.g., "195ac6fa15")
[CONSENT_KEY]         Your localStorage consent key — use format: [initials]_cookie_consent (e.g., "sss_cookie_consent")
```

---

## Tech Stack — Do Not Change

These constraints are non-negotiable. Do not introduce npm, webpack, React, Vue, or any build tooling.

- **Static HTML/CSS/JS only**
- **No build system** — files are edited and deployed directly
- **No JavaScript frameworks** — vanilla JS only, ES5 IIFE pattern
- **No CSS preprocessors** — custom properties only
- **GitHub Pages deployment** — `git push main` is the entire deploy pipeline
- Fonts loaded via Google Fonts CDN: Montserrat (UI/headings) + Libre Baskerville (body/quotes)
- Single stylesheet: `assets/styles.css`
- Single JS file: `assets/main.js`

---

## Design System

### CSS Custom Properties

Define these in `:root` at the top of `assets/styles.css`. Replace `[PRIMARY_COLOR]` and `[ACCENT_COLOR]` with your Phase 0 values.

```css
:root {
  /* Backgrounds */
  --bg:        #faf8f4;         /* warm cream page background — keep or adjust slightly */
  --card:      #ffffff;
  --ink-bg:    #1c1a17;         /* footer background */

  /* Text */
  --ink:       #1c1a17;
  --muted:     #6b6966;
  --on-dark:   rgba(255,255,255,0.88);
  --on-dark-m: rgba(255,255,255,0.45);

  /* Borders */
  --border:    rgba(28,26,23,0.13);

  /* Typography */
  --sans:      'Montserrat', sans-serif;
  --serif:     'Libre Baskerville', Georgia, serif;

  /* Layout */
  --max:          960px;
  --pad:          clamp(20px, 5vw, 60px);
  --section-gap:  clamp(64px, 10vw, 120px);

  /* [SYSTEM_NAME] step colors — used on system page and flow diagrams */
  /* Define one color per step. Example: */
  --step-1:  #E05252;
  --step-2:  #4A90C4;
  --step-3:  #E6A817;
  --step-4:  #4AA85A;
  --step-5:  #E07830;
  --step-6:  #9B5CC4;

  /* [PLAYBOOK_NAME] brand — your flagship product */
  --pb:         [PRIMARY_COLOR];
  --pb-accent:  [ACCENT_COLOR];
}
```

### Hard-coded Section Backgrounds
These are not variables — they appear inline in the CSS rules:
- Hero section background: `#f0ede8` (slightly darker warm cream)
- CTA strip: `#4a3c32` (warm dark brown, sits between page and footer)
- Footer: `#1c1a17` (darkest, matches `--ink-bg`)

### Typography Rule
- `--sans` (Montserrat): all navigation, labels, headings, buttons, UI elements
- `--serif` (Libre Baskerville): all body copy, card paragraphs, prose

---

## Site Structure

### Pages to Build

| File | Purpose | Has opt-in modal? |
|---|---|---|
| `index.html` | Homepage — introduce brand, system overview, CTA | Yes |
| `[system-slug].html` | Your system/framework landing page | Yes |
| `playbooks.html` | Playbook library listing | Yes |
| `worksheets.html` | Worksheets/tools page | Yes |
| `community.html` | Community access page | Yes |
| `privacy.html` | Privacy Policy — includes cookie section | No |
| `disclaimer.html` | Disclaimer | No |
| `terms.html` | Terms of Service | No |
| `[system-slug]/` | Chapter pages for your system content | No |
| `playbooks/[playbook-slug].html` | Individual playbook sales page | Yes |

### Navigation Links (same on every page)
```
[SYSTEM_NAME]  →  ./[system-slug].html
Playbooks      →  ./playbooks.html
Worksheets     →  ./worksheets.html
Community      →  ./community.html
```

### Path Prefix Rule
- Root pages: `./assets/styles.css`, `./[system-slug].html`
- `playbooks/` subdirectory: `../assets/styles.css`, `../[system-slug].html`
- `[system-slug]/` subdirectory: `../assets/styles.css`, `../[system-slug].html`

---

## Component Patterns

Every page is built from these components. Use them consistently.

### Navigation
```html
<header class="site-nav">
  <div class="container nav-inner">
    <a href="index.html" class="brand" aria-label="[BRAND_NAME] home">
      [BRAND_TM_NAME]&trade;
    </a>
    <nav aria-label="Main navigation">
      <ul class="nav-links">
        <li><a href="./[system-slug].html">[SYSTEM_NAME]</a></li>
        <li><a href="./playbooks.html">Playbooks</a></li>
        <li><a href="./worksheets.html">Worksheets</a></li>
        <li><a href="./community.html">Community</a></li>
      </ul>
    </nav>
    <button class="nav-toggle" data-nav-toggle aria-expanded="false" aria-controls="navDrawer" aria-label="Open navigation">
      <!-- hamburger SVG: three 20x2 rects at y=4, y=9, y=14 -->
    </button>
  </div>
  <nav id="navDrawer" class="nav-drawer" aria-label="Mobile navigation">
    <a href="./[system-slug].html">[SYSTEM_NAME]</a>
    <a href="./playbooks.html">Playbooks</a>
    <a href="./worksheets.html">Worksheets</a>
    <a href="./community.html">Community</a>
  </nav>
</header>
```
**™ rule:** Brand wordmark in the header gets `&trade;`. Nav links do NOT get `&trade;`.

### Hero
```html
<section class="hero">
  <div class="container">
    <p class="hero-eyebrow">Eyebrow · Context label</p>
    <h1>Short, punchy headline.</h1>
    <p class="hero-sub">One to two sentence supporting statement.</p>
    <div class="hero-actions">
      <a href="#section" class="btn btn-primary">Primary CTA →</a>
      <a href="#section" class="btn btn-ghost">Secondary CTA ↓</a>
    </div>
  </div>
</section>
```

### Standard Section
```html
<section class="section">
  <div class="container">
    <p class="section-label">Short label</p>
    <div class="section-head">
      <h2>Section heading.</h2>
      <p>One or two sentences of context.</p>
    </div>
    <!-- grid-2, grid-3, journey prose, or other content -->
  </div>
</section>
```

### Card Grid
```html
<!-- 3-column -->
<div class="grid-3">
  <div class="card">
    <p class="card-label">Label</p>
    <h3>Card heading</h3>
    <p>Card body text — keep short, one idea.</p>
  </div>
  <!-- repeat -->
</div>

<!-- 2-column -->
<div class="grid-2">
  <!-- same structure -->
</div>
```

### Journey / Pull-Quote Prose
```html
<p class="journey-head">"Headline or quote in large serif."</p>
<p class="journey-body">Supporting paragraph in body size. Can use multiple .journey-body paragraphs.</p>
```

### CTA Light (white background, mid-page)
```html
<section class="cta-light">
  <div class="container">
    <p class="section-label">Label</p>
    <h2>Action-oriented heading.</h2>
    <p>Supporting text.</p>
    <a href="./playbooks.html" class="btn btn-primary">CTA text →</a>
  </div>
</section>
```

### CTA Strip (dark, bottom of main content)
```html
<section class="cta-strip">
  <div class="container">
    <p class="section-label">Label</p>
    <h2>Your free offer headline.</h2>
    <p>One line.</p>
    <button class="btn btn-primary-light" data-open-optin>Get the [SYSTEM_NAME]</button>
  </div>
</section>
```

### Footer (same on every page — 3 rows)
```html
<footer class="site-footer">
  <div class="container footer-main-nav">
    <ul class="footer-links">
      <li><a href="./[system-slug].html">[SYSTEM_NAME]</a></li>
      <li><a href="./playbooks.html">Playbooks</a></li>
      <li><a href="./worksheets.html">Worksheets</a></li>
      <li><a href="./community.html">Community</a></li>
    </ul>
  </div>
  <div class="container footer-inner">
    <p class="footer-copy">Copyright &copy; <span id="year"></span> [LEGAL_ENTITY]</p>
    <ul class="footer-links">
      <li><a href="./privacy.html">Privacy Policy</a></li>
      <li><a href="./disclaimer.html">Disclaimer</a></li>
      <li><a href="./terms.html">Terms</a></li>
    </ul>
  </div>
  <div class="container">
    <p class="footer-legal">[BRAND_TM_NAME]&trade; and the [SYSTEM_TM_NAME]&trade; are trademarks of [LEGAL_ENTITY]. All rights reserved.</p>
  </div>
</footer>
```

### Opt-In Modal (Kit / ConvertKit)
Include on every page that has a CTA. The Kit script is **not hardcoded** — it loads conditionally via JS after cookie consent.

```html
<div class="modal" id="optinModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
  <div class="modal-backdrop" data-close-optin></div>
  <div class="modal-dialog">
    <div class="modal-header">
      <p class="modal-title" id="modalTitle">[SYSTEM_NAME]</p>
      <button class="modal-close" data-close-optin aria-label="Close">&times;</button>
    </div>
    <div class="modal-body">
      <!-- Kit form embed — paste your Kit form HTML here -->
      <!-- DO NOT add the ck.5.js script tag here — it loads via main.js -->
      <form
        id="kitForm"
        action="https://app.kit.com/forms/[KIT_FORM_ID]/subscriptions"
        class="seva-form formkit-form"
        method="post"
        data-sv-form="[KIT_FORM_ID]"
        data-uid="[KIT_FORM_UID]"
        data-format="inline"
        data-version="5"
        ...
      >
        <!-- Kit form fields -->
      </form>
    </div>
  </div>
</div>
```

---

## Playbook Sales Page

Each playbook gets its own page at `playbooks/[playbook-slug].html`.

### Body Tag
The playbook page body gets a scoping class that controls brand colors:
```html
<body class="[playbook-slug]">
```

### CSS Scoping Pattern
```css
/* In styles.css — scoped to your playbook class */
.[playbook-slug] .hero              { background: var(--pb); }
.[playbook-slug] .hero h1           { font-family: var(--sans); font-weight: 800; color: #fff; }
.[playbook-slug] .hero-eyebrow      { color: rgba(255,255,255,0.5); }
.[playbook-slug] .hero h2           { color: rgba(255,255,255,0.72); }
.[playbook-slug] .hero .btn-primary { background: var(--pb-accent); }
.[playbook-slug] .section-label     { color: var(--pb); }
.[playbook-slug] .card-label        { color: var(--pb); }
.[playbook-slug] .journey-head      { color: var(--pb); }
.[playbook-slug] .cta-strip         { background: var(--pb); }
```

### Book Cover Component
Visual representation of the playbook — used in hero and playbook library row.
```html
<div class="pbpp-cover pbpp-cover--lg">   <!-- sizes: --sm, --md, --lg -->
  <div class="pbpp-cover-band">
    <div class="pbpp-cover-brand">[BRAND_NAME]&trade;</div>
    <div class="pbpp-cover-title">[PLAYBOOK_NAME]</div>
    <div class="pbpp-cover-rule"></div>
    <div class="pbpp-cover-sub">Playbook</div>
  </div>
  <div class="pbpp-cover-lower">
    <div class="pbpp-cover-system-label">The [SYSTEM_NAME] — Applied</div>
    <div class="pbpp-cover-dots">
      <!-- One dot per system step -->
    </div>
    <div class="pbpp-cover-brand-foot">[BRAND_NAME]&trade;</div>
  </div>
</div>
```

---

## Trademark & Legal Rules

### ™ Placement
- Attaches directly after the trademark — no space before it
- Articles ("The", "A") before a mark don't move the ™: "The [SYSTEM_TM_NAME]™" ✓
- Use `&trade;` in HTML, never the literal ™ character
- **Nav links: no ™** (functional UI)
- **Header brand wordmark: always ™**
- Body text: ™ on first prominent mention per page/section

### Required Legal Pages
All three must exist and be linked from every footer:
- `privacy.html` — what data you collect, how you use it, cookie policy
- `disclaimer.html` — educational use only, no earnings guarantee, not professional advice
- `terms.html` — IP ownership, personal product license, community conduct

### Privacy Policy Must Include
- What information is collected (email, transactions)
- Third-party services (Kit/ConvertKit, GitHub Pages)
- Cookie policy — what cookies are set and by whom
- Reset mechanism for cookie consent preference
- User rights (unsubscribe, data deletion)

---

## Cookie Consent System

### What's Already Built
The cookie consent banner and conditional script loading are pre-built in `main.js` and `styles.css`. You do not need to rebuild this.

### What to Update for Your Site
1. In `main.js`: update `CONSENT_KEY` to `'[CONSENT_KEY]'`
2. In `main.js`: update `loadConvertKit()` to load your Kit form script URL
3. In `privacy.html`: update the cookie section to reference your services
4. **Never hardcode `<script src="https://f.convertkit.com/ckjs/ck.5.js">` in HTML** — the script must only load via `loadConvertKit()` after consent

### How It Works
| User state | Banner | Kit script |
|---|---|---|
| First visit (no preference stored) | Shown — slides up from bottom | Not loaded |
| Accepted | Hidden | Loads immediately on page load |
| Declined | Hidden | Never loads |

Preference stored in `localStorage` as key `[CONSENT_KEY]` with value `'accepted'` or `'declined'`.

### Planned Expansion (when you add analytics/ads)
When you add Google Analytics, Meta Pixel, or other tracking:
1. Upgrade the stored value from a string to a JSON object: `{ functional, analytics, marketing }`
2. Add a conditional loader function for each new script (same pattern as `loadConvertKit()`)
3. Update the banner to show category choices
4. Update `privacy.html` to document each new service

---

## JavaScript (`main.js`)

Single IIFE — `(function(){ 'use strict'; }())`. No modules. No imports.

Functions to implement:
- `setupNav()` — mobile hamburger toggle, drawer close-on-link-click
- `setupModal()` — opt-in modal, ESC key, auto-focus email input
- `setYear()` — fills `<span id="year"></span>` in footer
- `setupCookieConsent()` — builds/injects banner, reads/writes consent to localStorage, calls `loadConvertKit()` conditionally
- `loadConvertKit()` — dynamically appends Kit script to `<head>`, checks for existing script first

---

## Customization Sequence

Work through these phases in order. Do not skip ahead.

### Phase 1 — Brand Setup
1. Update Phase 0 placeholders in this file (already done)
2. Set CSS custom properties in `styles.css` (brand colors, step colors)
3. Update nav brand wordmark across all pages
4. Update footer trademark notice across all pages

### Phase 2 — System Content
1. Build the system landing page (`[system-slug].html`)
2. Build chapter pages in `[system-slug]/` directory
3. Add IMPACT-style step prose and step colors to homepage
4. Set step color variables for your system steps

### Phase 3 — Products
1. Build `playbooks.html` library page
2. Build the playbook sales page (`playbooks/[playbook-slug].html`)
3. Apply playbook scoping class and CSS overrides
4. Build `worksheets.html`

### Phase 4 — Community & Support
1. Build `community.html`
2. Connect to your community platform (Heartbeat, Circle, Discord, etc.)

### Phase 5 — Legal Pages
1. Build `privacy.html` with your entity name and services
2. Build `disclaimer.html`
3. Build `terms.html` with your trademark names and product license terms

### Phase 6 — Integrations
1. Add your Kit form HTML to the opt-in modal on all pages
2. Update `[KIT_FORM_ID]` and `[KIT_FORM_UID]` in all form embeds
3. Update `loadConvertKit()` in `main.js` if your Kit script URL differs
4. Update `[CONSENT_KEY]` in `main.js`
5. Test cookie consent: decline → no Kit load; accept → Kit loads

### Phase 7 — Deploy
1. Create GitHub repository
2. Enable GitHub Pages from `main` branch, root folder
3. Add custom domain in GitHub Pages settings
4. `git push origin main`

---

## Content & Copy Conventions

### Section Anatomy (use this structure consistently)
```
section-label    →  short noun label, small caps ("What it is", "How it works")
section-head     →  h2 (sentence) + one supporting line
content block    →  grid-2 / grid-3 cards, or journey prose
optional CTA     →  single button or text link
```

### Copy Voice
- Direct. No fluff. No hype.
- Active voice, present tense
- Short sentences. One idea per card.
- Headings are declarative statements, not questions
- Labels are nouns. Headings are sentences.

### Responsive Breakpoints
- Mobile nav: `≤ 720px` — hide desktop nav, show hamburger
- Grid collapse: `≤ 640px` — grid-2/grid-3 → single column
- Hero split layout: `≤ 860px` — stack vertically
- Container max: `960px`

---

## Development Workflow

### Local Preview
```bash
python3 -m http.server 8765
```
Open `http://localhost:8765`

### Deploy
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

### File Organization Rules
- One stylesheet: `assets/styles.css`
- One JS file: `assets/main.js`
- All images: `assets/` directory
- No subdirectory deeper than one level for content pages
- Subdirectory pages use `../` prefix for all asset and page links
