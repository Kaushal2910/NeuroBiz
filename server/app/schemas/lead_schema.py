from pydantic import BaseModel

class LeadRequest(BaseModel):
    name: str
    email: str
    business_type: str
    message: str