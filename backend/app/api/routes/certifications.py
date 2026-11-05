from fastapi import APIRouter
from pydantic import BaseModel, Field

router = APIRouter(prefix="/certifications", tags=["certifications"])


class CertificationOut(BaseModel):
    id: str
    name: str
    description: str
    code: str
    domains: list[str] = Field(default_factory=list)


CERTIFICATIONS = [
    CertificationOut(
        id="security-plus",
        name="CompTIA Security+",
        description="Core cybersecurity skills for IT security foundations.",
        code="SY0-701",
        domains=["Threats", "Security Architecture", "Operations and Incident Response"],
    ),
    CertificationOut(
        id="network-plus",
        name="CompTIA Network+",
        description="Networking fundamentals and troubleshooting for IT professionals.",
        code="N10-008",
        domains=["Networking Concepts", "Infrastructure", "Network Operations"],
    ),
    CertificationOut(
        id="ceh",
        name="Certified Ethical Hacker",
        description="Ethical hacking and offensive security fundamentals.",
        code="312-50",
        domains=["Reconnaissance", "Scanning", "Web App Security"],
    ),
]


@router.get("")
def list_certifications() -> list[CertificationOut]:
    return CERTIFICATIONS


@router.get("/{certification_id}")
def get_certification(certification_id: str) -> CertificationOut:
    for certification in CERTIFICATIONS:
        if certification.id == certification_id:
            return certification
    raise ValueError(f"Certification {certification_id} not found")


@router.get("/{certification_id}/domains")
def get_domains(certification_id: str) -> dict[str, list[str]]:
    certification = get_certification(certification_id)
    return {"certification_id": certification_id, "domains": certification.domains}
