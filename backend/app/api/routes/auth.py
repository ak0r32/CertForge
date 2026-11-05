from datetime import datetime, timedelta
from typing import Any

from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel, EmailStr

router = APIRouter(prefix="/auth", tags=["auth"])

users_db: dict[str, dict[str, Any]] = {}


class RegisterRequest(BaseModel):
    name: str
    email: EmailStr
    password: str


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class UserOut(BaseModel):
    id: str
    name: str
    email: str
    role: str = "student"
    created_at: datetime


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


def _create_user_record(payload: RegisterRequest) -> dict[str, Any]:
    user_id = f"user_{len(users_db) + 1}"
    return {
        "id": user_id,
        "name": payload.name,
        "email": str(payload.email),
        "password": payload.password,
        "role": "student",
        "created_at": datetime.utcnow(),
    }


@router.post("/register", response_model=UserOut, status_code=status.HTTP_201_CREATED)
def register(payload: RegisterRequest) -> UserOut:
    if payload.email in {user["email"] for user in users_db.values()}:
        raise HTTPException(status_code=400, detail="Email already registered")

    user = _create_user_record(payload)
    users_db[user["id"]] = user
    return UserOut(**{k: v for k, v in user.items() if k != "password"})


@router.post("/login", response_model=TokenResponse)
def login(payload: LoginRequest) -> TokenResponse:
    for user in users_db.values():
        if user["email"] == str(payload.email) and user["password"] == payload.password:
            expires = timedelta(days=1)
            token = f"fake-token-for-{user['id']}-{int((datetime.utcnow() + expires).timestamp())}"
            return TokenResponse(access_token=token)

    raise HTTPException(status_code=401, detail="Invalid credentials")


@router.get("/users/me")
def me() -> dict[str, str]:
    return {"message": "Auth placeholder. Secure JWT auth can be added in production."}
