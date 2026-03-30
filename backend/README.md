# Backend (Node + Express)

This backend provides the API and services for the app, built with Node.js and Express. It contains controllers, routes, and helper services used by the frontend.

## Quick Start

Prerequisites: Node.js 18+ and npm.

Install dependencies:

```
cd backend
npm install
```

Run in development (auto-restarts with `nodemon`):

```
npm run dev
```

Run production server:

```
npm start
```

## Environment

Create a `.env` file in `backend/` with any required environment variables (e.g. API keys, OpenAI key). The code loads configuration from `config/`.

## Available Scripts

- `dev` — Start the server with `nodemon` (development).
- `start` — Start the server with Node (production).
- `test` — Placeholder test script.

Check `package.json` for the exact script definitions.

## Project Layout (important files)

- `server.js` — Express app entry and server bootstrapping.
- `routes/` — API route definitions.
- `controllers/` — Request handlers and controller logic.
- `services/` — Business logic and external API wrappers.
- `config/` — Configuration helpers (e.g. OpenAI setup).
- `middleware/` — Express middleware (errors, auth, etc.).
- `utils/` — Utility helpers (PDF extraction, scoring, link extraction).

## Notes & Next Steps

- The backend uses OpenAI and file-processing libraries — ensure relevant API keys are set in `.env`.
- You can add a `start:prod` script or a `PM2` ecosystem file for production deployments.
- If you'd like, I can add a sample `.env.example`, CI workflow, or API documentation (OpenAPI).

---
Updated to improve onboarding and developer setup.

