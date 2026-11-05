from fastapi import APIRouter

router = APIRouter(prefix="/study-plans", tags=["study plans"])


@router.post("/generate")
def generate_plan() -> dict[str, list[dict[str, object]]]:
    return {"plan": [
        {"topic": "Access Control", "duration": "30 min", "revision_task": "Review RBAC examples", "practice_task": "Answer 5 MCQs", "completed": False},
        {"topic": "Encryption Models", "duration": "45 min", "revision_task": "Summarize TLS concepts", "practice_task": "Review 3 scenarios", "completed": False},
    ]}


@router.get("/current")
def current_plan() -> dict[str, list[dict[str, object]]]:
    return {"plan": [
        {"topic": "Access Control", "duration": "30 min", "revision_task": "Review RBAC examples", "practice_task": "Answer 5 MCQs", "completed": True},
        {"topic": "Encryption Models", "duration": "45 min", "revision_task": "Summarize TLS concepts", "practice_task": "Review 3 scenarios", "completed": False},
    ]}
