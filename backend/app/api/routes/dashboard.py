from fastapi import APIRouter

router = APIRouter(prefix="/progress", tags=["progress"])


@router.get("/overview")
def overview() -> dict[str, object]:
    return {
        "student_name": "Alex",
        "enrolled_certifications": 2,
        "overall_progress": 42,
        "completed_assessments": 3,
        "average_score": 78,
        "weak_topics": ["Access Control", "Web Security"],
        "recommended_topics": ["Network Security", "Malware Analysis"],
    }


@router.get("/domains")
def domains_progress() -> dict[str, list[dict[str, object]]]:
    return {
        "domains": [
            {"name": "Threats", "progress": 66, "mastery": "Developing"},
            {"name": "Security Architecture", "progress": 54, "mastery": "Developing"},
            {"name": "Operations", "progress": 81, "mastery": "Good"},
        ]
    }


@router.get("/weak-topics")
def weak_topics() -> dict[str, list[str]]:
    return {"weak_topics": ["Access Control", "Logging and Monitoring", "Encryption Concepts"]}
