from fastapi import APIRouter, UploadFile, File, HTTPException

router = APIRouter(prefix="/documents", tags=["documents"])

uploaded_docs: list[dict[str, object]] = []


@router.post("/upload")
async def upload_document(file: UploadFile = File(...)) -> dict[str, str]:
    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(status_code=400, detail="Only PDF files are supported")

    uploaded_docs.append({"id": f"doc_{len(uploaded_docs) + 1}", "file_name": file.filename, "status": "processed"})
    return {"message": "Document uploaded successfully", "file_name": file.filename}


@router.get("")
def list_documents() -> list[dict[str, object]]:
    return uploaded_docs


@router.get("/{document_id}/status")
def document_status(document_id: str) -> dict[str, str]:
    for doc in uploaded_docs:
        if doc["id"] == document_id:
            return {"document_id": document_id, "status": str(doc["status"])}
    raise HTTPException(status_code=404, detail="Document not found")


@router.delete("/{document_id}")
def delete_document(document_id: str) -> dict[str, str]:
    for idx, doc in enumerate(uploaded_docs):
        if doc["id"] == document_id:
            uploaded_docs.pop(idx)
            return {"message": "Document deleted"}
    raise HTTPException(status_code=404, detail="Document not found")
