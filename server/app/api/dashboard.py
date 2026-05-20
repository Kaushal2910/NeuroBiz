from fastapi import APIRouter

from app.db.database import db

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

@router.get("/stats")
async def get_dashboard_stats():

    total_chats = (
        await db.conversations.count_documents({})
    )

    total_leads = (
        await db.leads.count_documents({})
    )

    return {
        "total_chats":
        total_chats,

        "total_leads":
        total_leads,

        "ai_requests":
        total_chats,

        "system_status":
        "Operational",
    }