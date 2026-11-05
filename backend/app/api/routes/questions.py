from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

router = APIRouter(prefix="/assessments", tags=["assessments"])


class Question(BaseModel):
    id: str
    question: str
    options: list[str]
    difficulty: str
    topic: str
    correct_answer: str


ASSESSMENT_QUESTIONS = [
    Question(
        id="q1",
        question="Which control helps protect data in transit?",
        options=["Firewall", "VPN", "Patch management", "Antivirus"],
        difficulty="easy",
        topic="Network Security",
        correct_answer="VPN",
    ),
    Question(
        id="q2",
        question="What is the primary goal of least privilege?",
        options=["Reduce cost", "Minimize attack surface", "Increase network speed", "Improve patch frequency"],
        difficulty="medium",
        topic="Access Control",
        correct_answer="Minimize attack surface",
    ),
]


@router.post("/start")
def start_assessment() -> dict[str, str]:
    return {"assessment_id": "assessment_1", "status": "started"}


@router.get("/{assessment_id}/questions")
def get_questions(assessment_id: str) -> list[Question]:
    if assessment_id != "assessment_1":
        raise HTTPException(status_code=404, detail="Assessment not found")
    return ASSESSMENT_QUESTIONS


@router.post("/{assessment_id}/submit")
def submit_assessment(assessment_id: str) -> dict[str, object]:
    if assessment_id != "assessment_1":
        raise HTTPException(status_code=404, detail="Assessment not found")
    score = 100
    return {"assessment_id": assessment_id, "score": score, "passed": True, "message": "Assessment submitted successfully"}


@router.get("/{assessment_id}/results")
def assessment_results(assessment_id: str) -> dict[str, object]:
    return {"assessment_id": assessment_id, "score": 100, "correct_answers": 2, "total_questions": 2}
