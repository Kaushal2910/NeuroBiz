from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form,
)

from app.services.gemini_service import (
    generate_ai_response
)

from app.services.chat_service import (
    save_conversation,
    get_conversations,
)

from app.services.file_service import (
    extract_file_content
)


router = APIRouter(
    prefix="/api/chat",
    tags=["Chat"]
)


@router.post("/")
async def chat_endpoint(
    message: str = Form(...),
    file: UploadFile = File(None)
):

    file_content = ""


    if file:

        file_content = (
            await extract_file_content(file)
        )


    ai_response = (
        await generate_ai_response(
            message,
            file_content
        )
    )


    conversation = {
        "user_message": message,
        "ai_response": ai_response,
        "file_name": (
            file.filename
            if file
            else None
        )
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