# Stupid Simple Startup™ — Claude Code Project Reference

This file is read automatically by Claude Code at the start of every session.
It is the authoritative technical and editorial reference for this project.

---

## Project Identity

| Field | Value |
|---|---|
| Site name | Stupid Simple Startup™ |
| Domain | stupidsimplestartup.com |
| Legal entity | Eight Echo Agency, LLC |
| Repository | github.com:eightecho/sss_com.git |
| Deployment | GitHub Actions → rsync to Vultr VPS (GridPane WordPress multisite) |
| WP install | `/var/www/my.stupidsimplestartup.com/htdocs/` |
| Theme path on server | `htdocs/wp-content/themes/sss/` |
| Multisite blog_id | 2 (stupidsimplestartup.com) |

### Registered Trademarks
All use `&trade;` in HTML.
- `Stupid Simple Startup™`
- `IMPACT System™`
- `Stupid Simple Startup Program™`
- `Picture Book Project™`
- `Picture Book Project Playbook™`

---

## Tech Stack — Hard Constraints

- **WordPress custom PHP theme. No page builder. No Cadence/Elementor/Divi.**
- Theme files: PHP templates + CSS + JS. No build system. No npm. No preprocessors.
- JavaScript: ES5 IIFE pattern (`(function(){ 'use strict'; }())`), no modules, no transpilation.
- CSS: custom properties only, no preprocessors.
- Fonts loaded via Google Fonts CDN (Montserrat + Libre Baskerville) — enqueued in `functions.php`.
- Deploy: push to `main` → GitHub Actions rsync → theme lands on server automatically.
- Static HTML files in `dev/` are **reference material only** — the old static site. Do not edit them; the WordPress theme in `production/` is the live product.

---

## Directory Structure

```
/
├── production/                    WordPress theme — this is what deploys
│   ├── style.css                  WP theme header (required by WordPress)
│   ├── functions.php              Enqueues assets, registers nav menus, theme support
│   ├── header.php                 <html> through </header>
│   ├── footer.php                 <footer> through </html>
│   ├── index.php                  Blog index fallback
│   ├── front-page.php             Homepage (static front page)
│   ├── page.php                   Generic page template
│   ├── single.php                 Single post template
│   └── assets/
│       ├── css/main.css           Master stylesheet
│       └── js/main.js             Nav, modals, cookie consent, year
│
├── dev/                           Static HTML site — design source of truth
│   ├── index.html                 → front-page.php
│   ├── membership.html            → page-membership.php
│   ├── picture-book-project.html  → page-picture-book-project.php
│   ├── playbooks.html             → page-playbooks.php
│   ├── impact-system.html         → page-impact-system.php
│   ├── worksheets.html            → page-worksheets.php
│   ├── privacy.html               → page-privacy.php
│   ├── disclaimer.html            → page-disclaimer.php
│   ├── terms.html                 → page-terms.php
│   ├── assets/                    CSS, JS, images (static site only)
│   └── impact-system/             Standalone multi-page IMPACT System doc
│
├── .github/workflows/deploy.yml   GitHub Actions: rsync production/ to server on push
│
└── CLAUDE.md                      This file
```

### Theme template hierarchy (WordPress)
- `front-page.php` — used when WP Settings → Reading has a static front page set
- `page.php` — all other pages (About, Privacy, Terms, etc.)
- `single.php` — blog posts
- `index.php` — fallback for anything else (blog index)
- Custom page templates: add `/* Template Name: Foo */` comment at top of a new PHP file

---

## Design System

### CSS Custom Properties (`:root`)

```css
/* Backgrounds */
--bg:        #faf8f4    /* warm cream — page background */
--card:      #ffffff    /* card / modal backgrounds */
--ink-bg:    #1c1a17    /* footer */

/* Text */
--ink:       #1c1a17    /* primary text */
--muted:     #6b6966    /* secondary text, labels */
--on-dark:   rgba(255,255,255,0.88)
--on-dark-m: rgba(255,255,255,0.45)

/* Borders */
--border:    rgba(28,26,23,0.13)

/* Typography */
--sans:      'Montserrat', sans-serif      /* UI, labels, headings */
--serif:     'Libre Baskerville', Georgia  /* body copy, quotes */

/* Layout */
--max:       960px
--pad:       clamp(20px, 5vw, 60px)
--section-gap: clamp(64px, 10vw, 120px)

/* IMPACT System™ step colors — impact-system.html and flow diagrams only */
--identify:   #E05252
--monetize:   #4A90C4
--productize: #E6A817
--activate:   #4AA85A
--campaign:   #E07830
--triumph:    #9B5CC4

/* Picture Book Project Playbook™ brand */
--pb:         #1B5E5A   /* deep teal — primary brand color */
--pb-accent:  #D4643A   /* warm coral — accent / badge color */
```

### Hard-coded Section Backgrounds
These are **not** CSS variables — used in specific sections:
- Hero background: `#f0ede8` (slightly darker warm cream)
- CTA strip: `#4a3c32` (warm dark brown)
- Footer (`.site-footer`): `#1c1a17` = `var(--ink-bg)`

### Typography Rules
- Headings (`h1`, `h2`, `h3`) and UI labels: `var(--sans)` / Montserrat
- Body copy, quotes, card paragraphs: `var(--serif)` / Libre Baskerville
- The PBPP hero `h1` uses `var(--sans)` weight 800 (overrides body `h1` default)

### Font Loading
Fonts are enqueued in `functions.php` via `wp_enqueue_style()` — do **not** add `<link>` tags directly to `header.php`. The enqueue call adds them to every page automatically via `wp_head()`.

---

## Component Reference

### Navigation
In `header.php`, nav links use `home_url()` for the brand link and `wp_nav_menu()` for the nav. WordPress adds `current-menu-item` class on the active page — use this instead of `aria-current="page"`.

Visual structure (mirrors old static site):
```html
<header class="site-nav">
  <div class="container nav-inner">
    <a href="<?php echo home_url('/'); ?>" class="brand">Stupid Simple Startup&trade;</a>
    <?php wp_nav_menu(['theme_location' => 'primary', 'container' => false, 'menu_class' => 'nav-links']); ?>
    <button class="nav-toggle" data-nav-toggle ...><!-- hamburger SVG --></button>
  </div>
  <nav id="navDrawer" class="nav-drawer" aria-label="Mobile navigation">
    <?php wp_nav_menu(['theme_location' => 'primary', 'container' => false]); ?>
  </nav>
</header>
```
- ™ appears on the brand wordmark only — **not** in nav links
- Nav menu is managed in WP admin → Appearance → Menus (assign to "Primary Navigation")

### Hero
```html
<section class="hero">
  <div class="container">
    <p class="hero-eyebrow">Eyebrow label</p>
    <h1>Headline</h1>
    <p class="hero-sub">Supporting text</p>
    <div class="hero-actions">
      <a href="#" class="btn btn-primary">Primary CTA ↗</a>
      <a href="#" class="btn btn-ghost">Secondary CTA ↓</a>
    </div>
  </div>
</section>
```

### Standard Section
```html
<section class="section">
  <div class="container">
    <p class="section-label">Eyebrow label</p>
    <div class="section-head">
      <h2>Section heading</h2>
      <p>Section intro text</p>
    </div>
    <!-- content: grid-2, grid-3, journey prose, etc. -->
  </div>
</section>
```
- `.section + .section` and `.hero + .section` get a `border-top` automatically

### Cards (Grid Layout)
```html
<div class="grid-3">   <!-- or grid-2 -->
  <div class="card">
    <p class="card-label">Eyebrow</p>
    <h3>Card heading</h3>
    <p>Card body text.</p>
  </div>
</div>
```
- `grid-3`: 3 equal columns, 1px gaps (uses border trick — background is the border color)
- `grid-2`: 2 equal columns, same treatment

### Journey / Pull-Quote Prose
```html
<p class="journey-head">"Quote or headline."</p>
<p class="journey-body">Longer explanatory paragraph.</p>
```

### CTA Light (mid-page, white bg)
```html
<section class="cta-light">
  <div class="container">
    <p class="section-label">Label</p>
    <h2>Heading</h2>
    <p>Supporting text.</p>
    <a href="#" class="btn btn-primary">CTA</a>
  </div>
</section>
```

### CTA Strip (dark, `#4a3c32`)
```html
<section class="cta-strip">
  <div class="container">
    <p class="section-label">Label</p>
    <h2>Heading</h2>
    <p>Supporting text.</p>
    <button class="btn btn-primary-light" data-open-optin>CTA</button>
  </div>
</section>
```

### Footer (3-row structure — in `footer.php`)
```html
<footer class="site-footer">
  <!-- Row 1: centered main nav -->
  <div class="container footer-main-nav">
    <?php wp_nav_menu(['theme_location' => 'footer', 'container' => false, 'menu_class' => 'footer-links']); ?>
  </div>
  <!-- Row 2: copyright left / legal links right -->
  <div class="container footer-inner">
    <p class="footer-copy">Copyright &copy; <span id="year"></span> Eight Echo Agency, LLC</p>
    <!-- legal links: hardcoded or second footer menu -->
  </div>
  <!-- Row 3: trademark notice -->
  <div class="container">
    <p class="footer-legal">Stupid Simple Startup&trade;, the IMPACT System&trade;, and the Stupid Simple Startup Program&trade; are trademarks of Eight Echo Agency, LLC. All rights reserved.</p>
  </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>
```
- Footer nav managed in WP admin → Appearance → Menus (assign to "Footer Navigation")
- The `<span id="year"></span>` is filled by `setYear()` in `assets/js/main.js`

### Opt-In Modal (Fluent Forms — replacing Kit)
Present on every main page. Opened by `data-open-optin` attributes.
- **Kit/ConvertKit is legacy** — all Kit JS, form IDs, and the `loadConvertKit()` loader are being removed
- Replacement: **Fluent Forms** embed (WordPress plugin) for the form; **Fluent CRM** captures the lead and triggers the double opt-in email
- In `dev/`: use a static HTML placeholder (`<div class="form-placeholder">`) — no live form integration
- In `production/`: embed the Fluent Forms shortcode inside the modal markup
- `data-open-optin` on any button/element opens the modal
- `data-close-optin` on any element closes the modal

### Hero Step Pills
Used on `index.html` after `.hero-sub` to display the 6 IMPACT steps inline.
```html
<div class="hero-steps">
  <span class="wf-step wf-step--identify">Identify</span>
  <span class="wf-arrow">→</span>
  <span class="wf-step wf-step--monetize">Monetize</span>
  <span class="wf-arrow">→</span>
  <span class="wf-step wf-step--productize">Productize</span>
  <span class="wf-arrow">→</span>
  <span class="wf-step wf-step--activate">Activate</span>
  <span class="wf-arrow">→</span>
  <span class="wf-step wf-step--campaign">Campaign</span>
  <span class="wf-arrow">→</span>
  <span class="wf-step wf-step--triumph">Triumph</span>
</div>
```

### IMPACT Phase Flow Diagram
Used on `impact-system.html` to show the two-phase structure with a loop badge.
```html
<div class="impact-phases">
  <div class="impact-phase-row">
    <span class="impact-phase-tag">Phase 1 · Build</span>
    <span class="wf-step wf-step--identify">Identify</span>
    <span class="wf-arrow">→</span>
    <span class="wf-step wf-step--monetize">Monetize</span>
    <span class="wf-arrow">→</span>
    <span class="wf-step wf-step--productize">Productize</span>
  </div>
  <div class="impact-phase-div">↓</div>
  <div class="impact-phase-row">
    <span class="impact-phase-tag">Phase 2 · Run</span>
    <span class="wf-step wf-step--activate">Activate</span>
    <span class="wf-arrow">→</span>
    <span class="wf-step wf-step--campaign">Campaign</span>
    <span class="wf-arrow">→</span>
    <span class="wf-step wf-step--triumph">Triumph</span>
    <span class="impact-loop-badge">↺ repeats</span>
  </div>
</div>
```

### Problem Stats Callout
Used in PBPP "The Problem" section to show a before/after stat comparison.
```html
<div class="problem-stats">
  <div class="problem-stat">
    <p class="problem-stat-num">$2,000</p>
    <p class="problem-stat-label">Spent on illustrations</p>
  </div>
  <div class="problem-stat-vs">→</div>
  <div class="problem-stat problem-stat--loss">
    <p class="problem-stat-num">$200</p>
    <p class="problem-stat-label">Average first-year earnings</p>
  </div>
</div>
```
`.problem-stat--loss` applies red/loss color treatment to the number.

### Neutral Step Pills
For non-IMPACT flows (e.g. community how-it-works) use `.wf-step--neutral` which renders with `background: var(--ink)` instead of a step color.
```html
<span class="wf-step wf-step--neutral">Buy a Playbook</span>
<span class="wf-arrow">→</span>
<span class="wf-step wf-step--neutral">Join on Heartbeat</span>
<span class="wf-arrow">→</span>
<span class="wf-step wf-step--neutral">Get Support</span>
```

### Workbook Flow Diagram
```html
<div class="workbook-flow">
  <div class="workbook-flow-row">
    <span class="wf-step wf-step--identify">Step 1: Identify</span>
    <span class="wf-arrow">→</span>
    <span class="wf-workbook wf-workbook--identify">Identify Workbook</span>
    <span class="wf-arrow">→</span>
    <div class="wf-worksheets">
      <span class="wf-sheet">Worksheet 1</span>
      <span class="wf-sheet wf-sheet--more">+ more</span>
    </div>
  </div>
</div>
```
Step color modifier classes: `--identify`, `--monetize`, `--productize`, `--activate`, `--campaign`, `--triumph`

### Workbook Tree Diagram
Used in `playbooks.html` to show stage/worksheet hierarchy under the flow diagram.
Root node uses step color class. Stages use `.wf-tree-stage`. Worksheet icons are `.wf-tree-ws` (CSS-drawn page icons).

---

## Page Templates

### WordPress Template Structure
All templates follow this pattern:
```php
<?php get_header(); ?>
<main id="main">
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <!-- page content here -->
    <?php endwhile; endif; ?>
</main>
<?php get_footer(); ?>
```

`get_header()` outputs everything from `<!DOCTYPE html>` through `</header>`.
`get_footer()` outputs `<footer>` through `</html>` including `wp_footer()`.

All `<head>` content (charset, viewport, title, fonts, stylesheet, JS) is output by `wp_head()` in `header.php` — never hardcode these in individual templates.

### Setting page-specific `<title>` and meta description
Use Slim SEO Pro (already licensed and installed) to set title and description per page in the WP admin. No custom code needed.

---

## Picture Book Project Playbook™ (PBPP)

### Body Class Scoping
`<body class="pbpp">` scopes all PBPP overrides in `styles.css`.

### PBPP Brand Colors
- Primary: `--pb: #1B5E5A` (deep teal)
- Accent: `--pb-accent: #D4643A` (warm coral)

### PBPP CSS Overrides (key ones)
```css
.pbpp .hero              { background: var(--pb); }
.pbpp .hero h1           { font-family: var(--sans); font-weight: 600; color: #fff; }
.pbpp .section-label     { color: var(--pb); }
.pbpp .cta-strip         { background: var(--pb); }
.pbpp .hero .btn-primary { background: var(--pb-accent); }
```

### PBPP Cover Component
```html
<div class="pbpp-cover pbpp-cover--lg">
  <div class="pbpp-cover-band">
    <div class="pbpp-cover-brand">Stupid Simple Startup&trade;</div>
    <div class="pbpp-cover-title">Picture Book<br>Project</div>
    <div class="pbpp-cover-rule"></div>
    <div class="pbpp-cover-sub">Playbook</div>
  </div>
  <div class="pbpp-cover-lower">
    <div class="pbpp-cover-system-label">The<br>IMPACT System<br>— Applied</div>
    <div class="pbpp-cover-dots">
      <span class="pbpp-dot pbpp-dot--i">I</span>
      <span class="pbpp-dot pbpp-dot--m">M</span>
      <span class="pbpp-dot pbpp-dot--p">P</span>
      <span class="pbpp-dot pbpp-dot--a">A</span>
      <span class="pbpp-dot pbpp-dot--c">C</span>
      <span class="pbpp-dot pbpp-dot--t">T</span>
    </div>
    <div class="pbpp-cover-brand-foot">Stupid Simple Startup&trade;</div>
  </div>
</div>
```
Sizes: `pbpp-cover--sm`, `pbpp-cover--md`, `pbpp-cover--lg`

#### Ghost Cover Variant (coming-soon playbooks)
Add `.pbpp-cover--ghost` to the cover div. The modifier overrides band/lower/dot colors to neutral greys and adds a "Coming Soon" badge.
```html
<div class="pbpp-cover pbpp-cover--sm pbpp-cover--ghost">
  <div class="pbpp-cover-band">
    <div class="pbpp-cover-brand">Stupid Simple Startup&trade;</div>
    <div class="pbpp-cover-title">Solopreneur<br>Playbook</div>
    <div class="pbpp-cover-rule"></div>
    <div class="pbpp-cover-sub">Playbook</div>
  </div>
  <div class="pbpp-cover-lower">
    <div class="pbpp-cover-system-label">The<br>IMPACT System<br>— Applied</div>
    <div class="pbpp-cover-dots">
      <span class="pbpp-dot pbpp-dot--i">I</span>
      <!-- … -->
    </div>
    <div class="pbpp-cover-brand-foot">Stupid Simple Startup&trade;</div>
  </div>
  <span class="pbpp-cover-coming-soon">Coming Soon</span>
</div>
```
`.pbpp-cover-coming-soon` is `position: absolute; bottom: 12px; left: 50%; transform: translateX(-50%)` — requires `.pbpp-cover` to have `position: relative` (it does).

---

## Trademark & Legal Conventions

### Placement Rules
- ™ attaches directly after the last word of the trademark — no space
- The article "The" before a mark does not affect placement: "The IMPACT System™" ✓
- Use `&trade;` in HTML, not the literal ™ character
- **Nav links: no ™** (functional UI, not brand declarations)
- **Brand wordmark in header: Stupid Simple Startup™** always
- Body text: use ™ on first prominent mention per section/page

### Required Legal Pages
All three must exist. All three linked from every footer.
- `privacy.html` — includes cookie consent documentation and reset button
- `disclaimer.html` — earnings disclaimer, not professional advice
- `terms.html` — IP ownership, product license, community conduct

### Footer Trademark Notice (exact text)
```
Stupid Simple Startup™, the IMPACT System™, and the Stupid Simple Startup Program™ are trademarks of Eight Echo Agency, LLC. All rights reserved.
```

---

## Cookie Consent System

### Architecture
- No third-party cookie-setting scripts currently active (Kit is being removed; analytics/ads not yet added)
- Cookie consent banner remains in the UI — it will gate future third-party scripts as they are added
- User preference stored in `localStorage` key: `sss_cookie_consent`
- Values: `'accepted'` | `'declined'` | `null` (not yet set)

### Behavior
| State | Banner shown |
|---|---|
| null (first visit) | Yes — slides up from bottom |
| `'accepted'` or `'declined'` | No |

### When third-party scripts are added (analytics, ads, etc.)
Upgrade the binary consent value to a JSON object:
```json
{ "functional": true, "analytics": false, "marketing": false }
```
Each category gets its own conditional loader. Banner updated to show category toggles. `privacy.html` updated to document each service.

---

## JavaScript (`main.js`)

Single IIFE. Functions:
- `setupNav()` — mobile hamburger toggle, drawer close-on-link-click
- `setupModal()` — opt-in modal open/close, ESC key, auto-focus email input
- `setupLearnHowModal()` — "Learn how" tutorial modal on PBPP worksheets
- `setYear()` — fills `#year` span in footer
- `setupCookieConsent()` — builds and injects banner, reads/writes consent (Kit loader being removed)

---

## Development Workflow

### The dev → production pipeline

**All work starts in `dev/`. Never build directly in `production/`.**

`dev/` is a fully working static HTML site — open any page in a browser, no server needed. It is the design and copy source of truth. `production/` only receives changes that have been approved in `dev/` first.

1. **Build and iterate in `dev/`** — pure HTML, fast browser preview, no WP instance needed.
2. **Translate to `production/`** — once approved, apply the changes to the corresponding PHP template. The translation is mechanical:
   - Replace `<!DOCTYPE html>` through `</header>` with `<?php get_header(); ?>`
   - Replace `<footer>` through `</html>` with `<?php get_footer(); ?>`
   - Replace static `href="/index.html"` etc. with `<?php echo home_url('/'); ?>`
   - Strip inline `<head>` content — WP outputs this via `wp_head()` in `header.php`
3. **Commit and push** — deploy triggers automatically on `production/**` changes.

### Page mapping (dev → production)

| `dev/` | `production/` |
|---|---|
| `index.html` | `front-page.php` |
| `membership.html` | `page-membership.php` |
| `picture-book-project.html` | `page-picture-book-project.php` |
| `playbooks.html` | `page-playbooks.php` |
| `impact-system.html` | `page-impact-system.php` |
| `worksheets.html` | `page-worksheets.php` |
| `privacy.html` | `page-privacy.php` |
| `disclaimer.html` | `page-disclaimer.php` |
| `terms.html` | `page-terms.php` |

`impact-system/` subfolder in `dev/` is a standalone multi-page reference doc — no direct production counterpart (content lives inside `page-impact-system.php`).

### Local WP preview (LocalWP)
The theme is mirrored in LocalWP for testing WP-specific behaviour. Local site path:
```
~/Local Sites/stupidsimplestartupcom/app/public/wp-content/themes/sss/
```
No auto-sync — copy `production/` to the LocalWP path intentionally to preview, or work in LocalWP and copy back.

### Deploy (GitHub Actions)
```bash
git add production/
git commit -m "Description of change"
git push origin main
```
`.github/workflows/deploy.yml` triggers on push to `main` when `production/**` changes. It rsync's `production/` to the server at:
```
root@66.135.28.141:/var/www/my.stupidsimplestartup.com/htdocs/wp-content/themes/sss/
```
Uses `SSH_PRIVATE_KEY` GitHub secret (the same key as `~/.ssh/id_ed25519`). No manual deploy step needed.

### Direct server access
```bash
ssh sss-server
cd /var/www/my.stupidsimplestartup.com/htdocs/
sudo -u my15356 wp cache flush --url=stupidsimplestartup.com
```

### Bulk edits across multiple PHP templates
Use Python inline scripts with `re.compile(..., re.DOTALL)` for multi-file pattern replacement. Particularly useful for header/footer changes across all templates.

---

## Content & Copy Conventions

### Section Anatomy (consistent pattern across the site)
```
section-label  →  small caps eyebrow
section-head   →  h2 + one-line supporting text
content block  →  grid-2/grid-3 cards, or journey prose, or component
CTA            →  button or link (optional)
```

### Copy Voice
- Direct, no fluff, no hype
- Present tense, active voice
- Short sentences. One idea per card.
- Headings are declarative statements, not questions
- Labels are nouns. Headings are sentences.

### Responsive Breakpoints
- Mobile nav toggle: `≤ 720px`
- Grid collapse (grid-2, grid-3 → 1 col): `≤ 640px`
- Hero cover split → stack: `≤ 860px`
- Container max-width: `960px`
