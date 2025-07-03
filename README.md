# Briefly – AI-Powered Daily Digest & Inbox Tamer

**Briefly** is a smart SaaS platform that summarizes your digital clutter — emails, Slack threads, Notion docs, meeting notes — into one clean, actionable daily digest.

> Think: ChatGPT + Gmail + Notion + Slack in one intelligent morning summary.

---

## 🚀 Features

- 🔗 Connect Gmail, Slack, Notion, Zoom, etc.
- ✨ AI-powered summary of emails, messages, meeting notes
- 📥 Daily digests delivered via email or app
- 🗣️ Optional 60-second voice summaries (TTS)
- ✅ Extract action items and tasks automatically
- 🔒 Privacy-first (data encryption + secure OAuth)
- 🎨 Clean, minimal UI with glassmorphism and cursor animations

---

## 📷 Screenshots

| Dashboard | Digest Summary | Integrations |
|----------|----------------|--------------|
| ![Dashboard](https://github.com/user-attachments/assets/e99c0342-f40c-48b4-8cc9-ca73c260aee4)
| ![Digest](https://github.com/user-attachments/assets/06fe22f1-b921-40b0-b924-76b290f6ed2f)
| ![Integrations](https://github.com/user-attachments/assets/04b03e97-82a0-4013-8715-0f7b0dff2e15)


---

## 🏗️ Tech Stack

| Layer        | Tech                                      |
|--------------|-------------------------------------------|
| **Frontend** | Next.js, TailwindCSS, Framer Motion       |
| **Backend**  | FastAPI (or Node.js), Celery (for tasks)  |
| **Database** | PostgreSQL                                |
| **Auth**     | Google OAuth, Microsoft Login             |
| **AI Layer** | GPT-4o, Claude 3.5, Llama 3                |
| **Infra**    | Vercel, Railway, Docker, Supabase         |
| **Payments** | Stripe                                     |

---

## 📂 Project Structure

```bash
briefly/
├── frontend/           # Next.js frontend
│   ├── pages/
│   ├── components/
│   └── public/
├── backend/            # FastAPI backend
│   ├── app/
│   ├── api/
│   └── workers/        # Celery tasks
├── database/
│   └── schema.sql      # PostgreSQL schema
├── .env.example        # Sample environment variables
└── README.md
```
## 🧪 Local Setup (Development Environment)

Follow these steps to run Briefly locally on your machine for development and testing.

---

### 🔧 Prerequisites

- Node.js ≥ 18.x
- Python ≥ 3.9
- PostgreSQL ≥ 13.x
- Docker (for Redis, Celery worker optional)
- Git
- OpenAI / Google API Keys

---

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/briefly.git
cd briefly
```
---

## Backend (FastAPI)

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/brieflydb
OPENAI_API_KEY=your-openai-key
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
SLACK_CLIENT_ID=...
SLACK_CLIENT_SECRET=...
JWT_SECRET=supersecretkey
FRONTEND_URL=http://localhost:3000
```
---

## Frontend (Next.js)

```bash
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
```


