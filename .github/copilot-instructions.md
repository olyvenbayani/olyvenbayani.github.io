# Copilot Instructions — CB. Portfolio

## Project Overview
A static personal portfolio website for a Solutions Architect (Carlo Bayani). No build system — plain HTML, CSS, and vanilla JavaScript.

## Stack
- **HTML**: Semantic, multi-page site (`index.html`, `admin.html`, blog posts)
- **CSS**: Single stylesheet (`style.css`) with CSS custom properties and dark theme
- **JS**: Vanilla JS in `script.js` (no frameworks, no bundler)

## Design System
- **Background**: `--bg-dark: #080809`, cards at `--bg-card: #121215`
- **Text**: `--text-primary: #f4f4f5`, `--text-secondary: #a1a1aa`
- **Accent colors**: purple (`#7c3aed`), lime (`#a3e635`), cyan (`#06b6d4`), Azure blue (`#0078d4`)
- **Font**: Plus Jakarta Sans (Google Fonts), weights 300–800
- **Transitions**: `--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`
- **Borders**: subtle `rgba(255,255,255,0.05)` default, `0.12` on hover

## Conventions
- All CSS variables are defined in `:root` in `style.css` — use them instead of raw color values
- Mobile breakpoint is `768px`; mobile nav uses `.nav-links.active` class toggled by JS
- Animations use `@keyframes` defined in `style.css`
- Blog posts follow the naming pattern `blog-<topic>.html`
- Keep JS in `script.js`; do not add inline `<script>` blocks to HTML pages

## File Structure
```
index.html          # Main portfolio page
admin.html          # Admin/dashboard page
blog-*.html         # Blog post pages
style.css           # All styles
script.js           # All interactivity
resume.pdf          # Downloadable resume
about_architecture.png  # Architecture diagram asset
.github/
  copilot-instructions.md
```

## Do's and Don'ts
- ✅ Use existing CSS custom properties for colors and spacing
- ✅ Keep the dark, minimal aesthetic consistent across pages
- ✅ Use semantic HTML elements (`<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- ❌ Do not introduce npm, bundlers, or external frameworks
- ❌ Do not add inline styles (except responsive overrides already present in `index.html`)
- ❌ Do not commit secrets or API keys
