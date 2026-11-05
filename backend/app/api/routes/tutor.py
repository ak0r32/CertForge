from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/chat", tags=["chat"])


class ChatSessionRequest(BaseModel):
    certification_id: str
    exam_version: str
    domain: str
    topic: str


class ChatMessageRequest(BaseModel):
    session_id: str
    question: str


@router.post("/sessions")
def create_session(payload: ChatSessionRequest) -> dict[str, str]:
    return {"session_id": "session_1", "message": "Tutor session created"}


@router.post("/message")
def send_message(payload: ChatMessageRequest) -> dict[str, str]:
    return {
        "answer": "The concept is best understood by separating the control objective from the implementation. In cybersecurity, access control ensures only authorized users can reach specific systems or data.",
        "citations": ["Security+ study guide - page 42"]
    }


@router.get("/history/{session_id}")
def chat_history(session_id: str) -> dict[str, list[dict[str, str]]]:
    return {
        "messages": [
            {"role": "user", "content": "Explain least privilege in simple terms."},
            {"role": "assistant", "content": "Least privilege means users get only the permissions needed for their role."},
        ]
    }
