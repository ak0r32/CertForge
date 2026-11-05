from pydantic import BaseModel, Field


class MessageResponse(BaseModel):
    message: str = Field(..., min_length=1)
