# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common commands

### Install
- `npm ci`

### Local development
- Run dev server: `npm run dev`
- Production build: `npm run build`
- Preview production build (serves `dist/`): `npm run preview`

### Storybook
- Run Storybook: `npm run storybook`
- Build static Storybook: `npm run build-storybook`

### Tests / lint
- No test runner or lint/format scripts are currently defined in `package.json`.
  - Use `npm run build` as the closest “sanity check” that the app compiles.

### Deployment notes
- Heroku-style entrypoint: `npm run serve-heroku` (see `Procfile`). This runs Vite preview bound to `0.0.0.0` on `$PORT`.
- `static.json` indicates the deploy target is the `dist/` directory.

## High-level architecture

### App entry + composition
- The app is a Vite + Svelte SPA (not SvelteKit routing):
  - `index.html` mounts `src/main.js` into `#app`.
  - `src/main.js` instantiates `src/App.svelte`.
- `src/App.svelte` is the top-level composition of the landing page:
  - `Header` (`src/components/Header/index.svelte`)
  - `Heartwood` visualization (`src/components/Heartwood/index.svelte`)
  - `Hello` intro + CTAs (`src/components/Hello/index.svelte`)
  - `Footer` (`src/components/Footer/index.svelte`)
  - Conditional `Resume` overlay (`src/components/Resume/index.svelte`)

### State + cross-component behavior (Resume overlay)
- Global-ish UI state is handled with a Svelte store:
  - `src/components/Resume/store.js` exports `active` (writable boolean).
- `Hello` sets `active=true` and adds the `resume-active` class to `#app-wrap` to lock the underlying page.
- `App.svelte` subscribes to the store and conditionally renders the `Resume` overlay; `Resume` sets `active=false` and removes the class on close.

### Animation + visualization
- Animations are mostly imperative and run inside `onMount` / event handlers:
  - `animejs` drives header/hello animations.
  - `d3` is used in `Heartwood` to draw skill arcs into per-year SVG layers.
- `Heartwood` uses a full-screen mousemove “viewport” to apply a perspective tilt to stacked SVG layers (year-by-year) for a 3D parallax effect.

### Content sources (Resume)
- `Resume` renders markdown via `svelte-markdown`:
  - Source: `src/components/Resume/resume.md` imported as raw (`?raw`).
- Download links in the resume nav point at static assets served from `public/`:
  - `public/resume.pdf`, `public/resume.docx`, `public/resume.md`

### Storybook setup
- Storybook is configured via `.storybook/main.js` and uses the `@storybook/sveltekit` framework.
- Stories are picked up from `src/**/*.stories.*` and `src/**/*.mdx`.

### Notes on SvelteKit artifacts
- The repo contains SvelteKit scaffolding (`svelte.config.js`, `src/routes/+page.svelte`, `src/lib/`, `.svelte-kit/`).
- The running app entrypoint is `index.html` → `src/main.js` (Vite SPA). If you decide to fully adopt SvelteKit routing, expect to replace the Vite SPA entry with a SvelteKit app structure and update Storybook/config accordingly.
