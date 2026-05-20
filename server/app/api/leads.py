from fastapi import APIRouter

from app.schemas.lead_schema import (
    LeadRequest
)

from app.services.lead_service import (
    save_lead,
    get_leads,
)

router = APIRouter(
    prefix="/api/leads",
    tags=["Leads"]
)

@router.post("/")
async def create_lead(
    data: LeadRequest
):
    await save_lead(
        data.dict()
    )

    return {
        "message":
        "Lead saved successfully"
    }

@router.get("/")
async def fetch_leads():
    return await get_leads()