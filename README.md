# CertForge

<p align="center">
  <img src="https://img.shields.io/badge/Status-MVP-orange" alt="Status" />
  <img src="https://img.shields.io/badge/Stack-Next.js%20%2B%20FastAPI-blue" alt="Stack" />
  <img src="https://img.shields.io/badge/Database-PostgreSQL%20%2F%20SQLite-blueviolet" alt="Database" />
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License" />
</p>

Certforge AI is an AI-powered cybersecurity certification preparation platform built to help students get ready for certifications such as Security+, Network+, CEH, and CISSP.

The project focuses on a practical MVP experience: AI explanations, assessment practice, study tracking, weak-topic detection, and personalized recommendations.

## Overview

certforge AI is designed for learners who want a structured path for certification preparation. The platform combines:

- certification-based learning paths
- AI-assisted explanations and tutoring
- practice assessments with scoring logic
- weak-topic analytics
- personalized study planning
- professional and modern UI

## MVP Features

### 1. Authentication

- student registration and login flow
- role-based access structure
- protected learning routes
- user profile support

### 2. Student Dashboard

- welcome overview
- enrolled certifications
- progress tracking
- weak topic insights
- recommended learning topics
- recent activity summary

### 3. Certification Management

- certification library
- domain and topic grouping
- enrollment simulation
- certification detail view

### 4. AI Tutor

- certification-aware tutoring
- domain/topic filtering
- contextual explanations
- revision and follow-up question support
- document-grounded explanation flow

### 5. Practice Assessments

- multiple-choice question engine
- score tracking
- topic filtering
- answer explanations
- assessment history flow

### 6. Progress Analytics

- accuracy calculation
- mastery level classification
- improvement tracking
- weak-topic detection

### 7. Study Planner

- recommendation engine for revision tasks
- practice task assignment
- study duration suggestions
- completion state tracking

### 8. Document Management

- upload and list document workflow
- document status handling
- admin-oriented management structure

## Tech Stack

### Frontend

- Next.js
- TypeScript
- React
- Tailwind CSS
- Lucide icons

### Backend

- Python
- FastAPI
- SQLAlchemy
- Pydantic
- JWT-style auth placeholder logic for MVP

### Data and AI

- PostgreSQL (planned production database)
- SQLite for local/demo MVP
- AI-ready architecture for future RAG workflows

### Tooling

- Docker Compose
- Git/GitHub
- pytest

## Project Structure

```text
cybersecurity prepration/
├── readme.md
├── CertForge/
│   ├── LICENSE
│   ├── .gitignore
│   ├── docker-compose.yml
│   ├── backend/
│   │   ├── app/
│   │   ├── requirements.txt
│   │   ├── Dockerfile
│   │   └── .venv/
│   └── frontend/
│       ├── app/
│       ├── components/
│       ├── package.json
│       ├── next.config.js
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── node_modules/
└──
```

## Getting Started

### 1. Clone the project

```bash
git clone <repo-url>
cd cybersecurity prepration
```

### 2. Backend setup

```bash
cd CertForge/backend
py -3.12 -m venv .venv
.\.venv\Scripts\activate
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
```

Run the backend:

```bash
python -m uvicorn app.main:app --host 127.0.0.1 --port 8000 --reload
```

API health check:

```text
http://127.0.0.1:8000/health
```

### 3. Frontend setup

```bash
cd CertForge/frontend
npm install
npm run dev
```

Open the app:

```text
http://localhost:3000
```

### 4. Production frontend build

```bash
cd CertForge/frontend
npm run build
```

## API Endpoints

The MVP includes sample route structure for:

- `POST /api/v1/auth/register`
- `POST /api/v1/auth/login`
- `GET /api/v1/users/me`
- `GET /api/v1/certifications`
- `GET /api/v1/certifications/{id}`
- `GET /api/v1/progress/overview`
- `GET /api/v1/progress/domains`
- `GET /api/v1/progress/weak-topics`
- `POST /api/v1/assessments/start`
- `GET /api/v1/assessments/{id}/questions`
- `POST /api/v1/assessments/{id}/submit`
- `POST /api/v1/study-plans/generate`
- `GET /api/v1/study-plans/current`
- `POST /api/v1/chat/sessions`
- `POST /api/v1/chat/message`

## Screens Included in MVP

- landing page
- student dashboard preview
- certification overview view
- AI tutor interface structure
- assessment flow mockup
- study planner section

## Roadmap

The current MVP is a strong foundation, and the next steps include:

- PostgreSQL schema and migrations
- secure JWT-based authentication
- real document ingestion and chunking
- Qdrant vector storage integration
- real RAG-based tutor answers
- admin document processing workflows
- advanced analytics and recommendation engine
- complete multi-page student experience

## Security and Best Practices

This MVP was designed with future production concerns in mind:

- secure environment configuration
- input validation
- role-based route design
- file validation patterns
- user data isolation strategy
- structured API architecture

## License

This project is licensed under the MIT License. See `CertForge/LICENSE` for details.

## Notes

This repository is intentionally structured as a working MVP foundation rather than a completed production system. It is built to demonstrate a realistic cybersecurity learning platform architecture and can be extended into a fuller product with real authentication, RAG, analytics, and database integration.

## Contact

For project updates or collaboration, use the repository issues or maintainers contact information if available.
