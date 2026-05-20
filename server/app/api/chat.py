from fastapi import APIRouter

from app.schemas.chat_schema import (
    ChatRequest
)

from app.services.gemini_service import (
    generate_ai_response
)

from app.services.chat_service import (
    save_conversation,
    get_conversations,
)

router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"]
)

@router.post("/")
async def chat_endpoint(
    data: ChatRequest
):
    ai_response = (
        await generate_ai_response(
            data.message
        )
    )

    conversation = {
        "user_message":
        data.message,

        "ai_response":
        ai_response,
    }

    await save_conversation(
        conversation
    )

    return {
        "response": ai_response
    }

@router.get("/history")
async def chat_history():
    return await get_conversations()