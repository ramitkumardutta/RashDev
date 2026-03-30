# RashDev
Verifiable Developer Identity &amp; AI Skill Mentor

# RashDev  
### Proof-Based Developer Evaluation System

>  “From resume claims → to verified developer proof.”

---

##  Overview

**RashDev** is an AI-powered platform that helps recruiters evaluate developers by combining:

- 📄 Resume understanding  
- 💻 Real coding activity (GitHub + Codeforces)  
- 🤖 AI-driven insights  

Instead of trusting what candidates *say*, RashDev focuses on what they’ve *actually done*.

---

##  Problem Statement

Modern hiring faces major challenges:

- ❌ Candidates exaggerate or fake skills on resumes  
- ❌ No quick way to verify actual coding ability  
- ❌ Generic interview questions that don’t reflect real skills  
- ❌ Time-consuming screening process  

---

##  Our Solution

RashDev transforms hiring into a **proof-based evaluation system**:

```text
Resume → Real Data → AI Analysis → Verified Insights

### system architecture

Resume (PDF/Text)
                ↓
        Text Extraction Layer
                ↓
     GitHub + Codeforces APIs
                ↓
        Scoring Engine (0–100)
                ↓
          AI (Groq / LLM)
                ↓
     Insights + Interview Questions

## Getting Started

git clone https://github.com/your-username/rashdev.git
cd rashdev

cd backend
npm install

PORT=5000
GROQ_API_KEY=your_api_key_here

npm run dev

#### Open Another Terminal

cd frontend
npm install
npm run dev