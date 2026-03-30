# RashDev
Verifiable Developer Identity & AI Skill Mentor

"From resume claims → to verified developer proof."

---

## Overview

RashDev is an AI-powered platform that helps recruiters evaluate developer candidates by combining resume understanding, live coding activity (GitHub + Codeforces), and AI-driven insights to produce verifiable, evidence-based evaluations.

## How RashDev Helps

RashDev improves hiring by making it faster, smarter, and more reliable.

### Saves Recruiter Time
- Automatically fetches GitHub and Codeforces data  
- Eliminates manual profile checking  
- Provides instant evaluation  

---

### Data-Driven Hiring
Instead of guessing skills, recruiters get:

- Problem-solving ability (Codeforces)  
- Real project experience (GitHub)  
- Unified performance score  

---

### Detects Skill Mismatch

RashDev compares resume claims with actual coding data.

Example:

Resume: "Strong in Data Structures"
Reality: Low Codeforces rating

## Key Features

- Proof-based scoring: combine resume extraction, GitHub activity, and Codeforces performance into a single score.
- Resume parsing and link extraction (PDF → text).
- AI-generated insights & interview questions based on candidate evidence.
- Backend API that aggregates GitHub/Codeforces data and scores candidates.

## How to Use
### Step 1: Landing Page

When you open RashDev, you will see two main sections:

1. 👨‍🎓 Student Dashboard
2. 👨‍💼 Recruiter Panel

### 👨‍🎓 Step 2: Student Dashboard
Enter your:
- GitHub username
- Codeforces handle

Click “Analyze Profile”
You will get:
- 📊 Coding stats
- 🧮 Performance score
- 🤖 AI-generated feedback

### 👨‍💼 Step 3: Recruiter Panel
Upload resume (PDF) OR paste resume text
Enter:
- GitHub username
- Codeforces handle

Click “Analyze Candidate”
You will get:

- 📊 Score (0–100)
- ⚠️ Skill mismatch detection
- 💡 Strong areas
- 🤖 AI-generated interview questions
-  Final Output

#### The system combines:

```text
Resume + GitHub + Codeforces → Verified Insights
```

## Architecture

1. Resume (PDF/Text) → text extraction
2. Enrich with GitHub & Codeforces data
3. Score & compute metrics
4. AI (LLM) generates insights and interview prompts

Project layout (important files):

- Backend entry: [backend/server.js](backend/server.js#L1)
- Backend routes: [backend/routes/aiRoutes.js](backend/routes/aiRoutes.js#L1) and [backend/routes/recruiterRoutes.js](backend/routes/recruiterRoutes.js#L1)
- Config helpers: [backend/config/openai.js](backend/config/openai.js#L1)
- Frontend entry: [frontend/src/main.jsx](frontend/src/main.jsx#L1)
- Frontend components: [frontend/src/components/AIBox.jsx](frontend/src/components/AIBox.jsx#L1)

## Quickstart (Development)

Prerequisites:

- Node.js (16+ recommended)
- npm or yarn

Clone and run locally:

```bash
git clone https://github.com/ramitkumardutta/RashDev.git
cd RashDev
```

Run backend:

```bash
cd backend
npm install
# set env vars (example):
# PORT=5000
# GROQ_API_KEY=your_groq_key
# OPENAI_API_KEY=your_openai_key
npm run dev
```

Run frontend:

```bash
cd frontend
npm install
npm run dev
```

## Installation & Setup (detailed)

Follow these steps to install and run both backend and frontend locally.

1) Backend (Windows)

```powershell
cd backend
npm install
# Create a .env file (recommended) or set env vars directly.
# Example (PowerShell):
# $env:PORT = "5000"
# $env:OPENAI_API_KEY = "your_openai_key"
# To run with npm script:
npm run dev
```

If using Command Prompt (cmd.exe):

```cmd
set PORT=5000
set OPENAI_API_KEY=your_openai_key
npm run dev
```

2) Frontend (Windows)

```powershell
cd frontend
npm install
npm run dev
```

Notes:

- Use a `.env` file in `backend/` for persistent environment variables; create `.env` from `.env.example`.
- If you use GitHub Actions or other CI, ensure secrets are configured in the CI provider rather than checked into the repo.

Notes:

- Backend routes are defined in [backend/routes](backend/routes) and services live in [backend/services](backend/services).
- The backend uses `pdf-parse` / text-extraction utilities located at [backend/utils/pdfToText.js](backend/utils/pdfToText.js#L1).

## Environment Variables

Common env vars (examples):

- `PORT` — backend listen port (default: 5000)
- `GROQ_API_KEY` — for Groq/Groq-like integrations (if used)
- `OPENAI_API_KEY` — OpenAI API key used by AI modules

Add other provider keys as needed in [backend/config](backend/config).

## API & Endpoints

Example backend entrypoint: [backend/server.js](backend/server.js#L1). Routes available under `routes/`.

To explore endpoints, run the backend and visit the API routes (or use Postman/cURL).

## Development Notes

- Frontend is a Vite React app found in `/frontend` using `npm run dev` for local development.
- Backend runs via `npm run dev` (check `backend/package.json` for the script details).
- Score calculation logic is implemented in [backend/utils/scoreCalculator.js](backend/utils/scoreCalculator.js#L1).

## Testing

- Unit and integration tests are not included by default; you can add tests with Jest or your preferred framework.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo
2. Create a feature branch
3. Run linters & tests locally
4. Open a PR with a clear description of changes

## License

This project includes a `LICENSE` file: [LICENSE](LICENSE#L1)

---

If you'd like, I can also:

- add usage examples for the main API routes
- create a minimal `.env.example` file in `backend/`
- run a quick repo scan and link any remaining key files into this README
