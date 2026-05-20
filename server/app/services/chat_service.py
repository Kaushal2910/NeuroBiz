from app.db.database import db

async def save_conversation(
    conversation_data: dict
):
    result = (
        await db.conversations.insert_one(
            conversation_data
        )
    )

    return str(result.inserted_id)

async def get_conversations():
    conversations = []

    cursor = (
        db.conversations.find()
    )

    async for conversation in cursor:

        conversation["_id"] = str(
            conversation["_id"]
        )

        conversations.append(
            conversation
        )

    return conversations