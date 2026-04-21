# IMPACT System Strategic Guide — Production Notes

This file describes how the guide should be implemented in WordPress (Step 4 of the build plan). Read this before creating the WP templates.

---

## What these pages are

A 15-page gated digital guide. Visitors access it by:
1. Submitting their email via the opt-in form on the main site
2. Clicking the confirmation link in the Fluent CRM double opt-in email
3. Landing on `guide/` (this index page)

All pages are `noindex, nofollow` — they are not public content.

---

## WordPress implementation

### URL structure

| Dev file | WP page slug |
|---|---|
| `index.html` | `/guide/` |
| `copyright.html` | `/guide/copyright/` |
| `introduction.html` | `/guide/introduction/` |
| `phase-1.html` | `/guide/phase-1/` |
| `phase-2.html` | `/guide/phase-2/` |
| `step-1-identify.html` | `/guide/step-1/` |
| `step-2-monetize.html` | `/guide/step-2/` |
| `step-3-productize.html` | `/guide/step-3/` |
| `step-4-activate.html` | `/guide/step-4/` |
| `step-5-campaign.html` | `/guide/step-5/` |
| `step-6-triumph.html` | `/guide/step-6/` |
| `guiding-loop.html` | `/guide/guiding-loop/` |
| `reference.html` | `/guide/reference/` |
| `author.html` | `/guide/author/` |
| `playbooks-cta.html` | `/guide/get-the-playbook/` |

### Page template

All guide pages use a dedicated template — `template-guide.php` in `production/`. This template:
- Does NOT call `get_header()` / `get_footer()` from the main theme
- Has its own `<html>` / `<head>` / `<body>` structure
- Enqueues `impact-system.css` and `mobile-nav.js` (not the main theme's assets)
- Adds `<meta name="robots" content="noindex, nofollow">`
- The sidebar navigation links use WP page URLs (`home_url('/guide/step-1/')` etc.)

### Gating

- No WordPress membership plugin needed
- Fluent CRM delivers a magic link or one-time access token via email
- Alternatively: WP password-protected pages with Fluent CRM auto-filling the password
- In dev: no gating — pages are open (they're in a subfolder that's not linked from the main nav)

### Assets

`impact-system.css` and `mobile-nav.js` live in `production/assets/guide/` (separate from main theme assets to avoid conflicts). Enqueued only when `is_page_template('template-guide.php')`.

---

## Content notes

- `playbooks-cta.html` — the conversion page. CTA goes to `/picture-book-project/`. No price shown here; full details on that page.
- `author.html` — links to tadrobert.com and hello@tadrobert.com. Verify these are live before deploy.
- `copyright.html` — references stupidsimplestartup.com as the distribution point. Keep current.
- All step pages are generic (not picture-book specific). That's intentional — the guide teaches the framework; the Playbook applies it to the niche.
