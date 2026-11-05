from pydantic import BaseSettings


class Settings(BaseSettings):
    app_name: str = "CyberPrep AI"
    environment: str = "development"
    secret_key: str = "dev-secret-key-change-me"
    database_url: str = "sqlite:///./cyberprep.db"
    access_token_expire_minutes: int = 60 * 24

    class Config:
        env_file = ".env"
        extra = "ignore"


settings = Settings()
