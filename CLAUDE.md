# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:4321)
npm run build    # Build for production (output to dist/)
npm run preview  # Preview production build locally
```

## Architecture

This is a personal portfolio site built with **Astro 5**. Pure static HTML/CSS, no JavaScript framework.

### Structure

- `src/layouts/Layout.astro` — Base layout with navigation, footer, global CSS variables, and dark mode support
- `src/pages/` — File-based routing (index, projects, education, blog)
- `src/components/` — Reusable Astro components (Experience, Skills, Education, Projects, Header, Footer)

### Styling

All styles are component-scoped using `<style>` tags in `.astro` files. Global styles live in `Layout.astro`:

- CSS variables: `--text`, `--muted`, `--light`, `--accent`, `--accent2`, `--bg`, `--card`, `--border`
- Dark mode uses `prefers-color-scheme: dark` media query
- Max content width: 750px
- Mobile breakpoint: 550px

### Data

Content data (experience, skills, projects) is defined inline in component frontmatter as TypeScript arrays/objects — no external data files or CMS.

### Deployment

Configured for GitHub Pages at `https://isanketsaha.github.io` (see `astro.config.mjs`).
