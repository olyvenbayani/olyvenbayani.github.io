# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
A static personal portfolio website for a Solutions Architect. The entire site is built with plain HTML, CSS, and vanilla JavaScript — no build system, bundler, or framework dependencies.

## Architecture

**Pages:**
- `index.html` — Main portfolio landing page with navigation, hero, and featured content
- `admin.html` — Admin/dashboard page (separate section)
- `blog-*.html` — Blog post pages (e.g., `blog-kubernetes.html`, `blog-prometheus.html`, `blog-sre.html`)

**Styling:**
- `style.css` — Single stylesheet with all page styles. Uses CSS custom properties (variables) for colors, spacing, and transitions. Dark theme with mobile breakpoint at `768px`.

**Interactivity:**
- `script.js` — Vanilla JavaScript for all client-side behavior. Handles mobile nav toggle and other interactive features.

**Assets:**
- `resume.pdf` — Downloadable resume
- `about_architecture.png` — Architecture diagram

## Design System

All colors and tokens are defined as CSS custom properties in `style.css` `:root`. Always reference these instead of using raw color values:

- **Background**: `--bg-dark: #080809` (page bg), `--bg-card: #121215` (card bg)
- **Text**: `--text-primary: #f4f4f5` (main text), `--text-secondary: #a1a1aa` (secondary text)
- **Accent colors**: purple (`#7c3aed`), lime (`#a3e635`), cyan (`#06b6d4`), Azure blue (`#0078d4`)
- **Font**: Plus Jakarta Sans (weights 300–800, loaded from Google Fonts)
- **Transitions**: `--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Borders**: `rgba(255,255,255,0.05)` at rest, `0.12` opacity on hover

## Conventions

- **CSS**: All colors, spacing, and transitions come from `:root` custom properties. No inline styles except for responsive overrides already present.
- **HTML**: Use semantic elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`). Multi-page structure with consistent header/footer.
- **JavaScript**: All interactivity lives in `script.js`. Do not add inline `<script>` blocks to HTML pages.
- **Blog posts**: Follow the naming pattern `blog-<topic>.html`.
- **Mobile**: Breakpoint is `768px`. Mobile nav uses `.nav-links.active` class toggled by JS.

## Development

**No build step required.** Open `index.html` in a browser to develop locally. Changes to HTML, CSS, and JS are live.

**Mobile testing:**
- Use browser DevTools to test responsive behavior at `768px` breakpoint.
- Test mobile nav toggle (`.nav-links.active` class toggle).

**Adding a new page:**
1. Create a new HTML file (e.g., `blog-topic.html`).
2. Copy the header/footer structure from an existing page.
3. Use CSS custom properties for all styles.
4. Link it from `index.html` or other pages as needed.

## Key Constraints

- ✅ Use existing CSS custom properties for colors and spacing
- ✅ Keep the dark, minimal aesthetic consistent
- ✅ Use semantic HTML elements
- ❌ Do not introduce npm, bundlers, or external JavaScript frameworks
- ❌ Do not add inline styles (except responsive overrides)
- ❌ Do not commit secrets or API keys
