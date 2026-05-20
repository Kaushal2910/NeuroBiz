from app.db.database import db

async def save_lead(
    lead_data: dict
):
    result = (
        await db.leads.insert_one(
            lead_data
        )
    )

    return str(result.inserted_id)

async def get_leads():
    leads = []

    async for lead in (
        db.leads.find()
    ):
        lead["_id"] = str(
            lead["_id"]
        )

        leads.append(lead)

    return leads