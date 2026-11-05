from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import auth, certifications, dashboard, documents, questions, study_plans, tutor

app = FastAPI(title="CyberPrep AI", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1")
app.include_router(certifications.router, prefix="/api/v1")
app.include_router(dashboard.router, prefix="/api/v1")
app.include_router(documents.router, prefix="/api/v1")
app.include_router(questions.router, prefix="/api/v1")
app.include_router(study_plans.router, prefix="/api/v1")
app.include_router(tutor.router, prefix="/api/v1")


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
