# Frontend (React + Vite)

This frontend is a minimal React app powered by Vite. It provides a fast development experience with HMR and a small set of useful scripts.

## Quick Start

Prerequisites: Node.js 18+ and npm (or yarn/pnpm).

Install dependencies:

```
cd frontend
npm install
```

Run the dev server (hot reload):

```
npm run dev
```

Build for production:

```
npm run build
```

Preview the production build locally:

```
npm run preview
```

## Useful Scripts

- `dev` — Starts Vite dev server.
- `build` — Produces a production build in `dist/`.
- `preview` — Serves the production build locally.
- `lint` — (if present) Runs ESLint.

Check `package.json` in the `frontend` folder for the exact scripts available.

## Project Structure (important files)

- `index.html` — App entry HTML.
- `src/main.jsx` — React entry point.
- `src/App.jsx` — Root component.
- `src/components/` — UI components.
- `vite.config.js` — Vite configuration.

## Notes

- This project uses Vite for fast builds and React for the UI. If you want TypeScript, consider migrating the template and updating ESLint accordingly.
- If you want, I can add a short development checklist, CI config, or TypeScript migration steps.

---
Updated for clarity and developer onboarding.
