from typing import Optional

from pydantic import BaseModel


class GenericResponse(BaseModel):
    id: Optional[str]
    ok: bool
    error: Optional[str] = None


class ErrorResponse(BaseModel):
    message: Optional[str] = None
