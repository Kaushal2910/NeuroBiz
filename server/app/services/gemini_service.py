import os
import google.generativeai as genai

from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv(
    "GEMINI_API_KEY"
)

if not API_KEY:
    raise ValueError(
        "GEMINI_API_KEY is missing"
    )

genai.configure(
    api_key=API_KEY
)

model = genai.GenerativeModel(
    model_name="gemini-2.5-flash",

    system_instruction="""
You are NeuroBiz AI.

You are a modern AI business assistant.

Rules:
- Keep responses concise.
- Maximum 80 words.
- Be professional and direct.
- Avoid long introductions.
- Avoid motivational text.
- Give actionable business advice.
- Use bullet points when useful.
- Ask at most one follow-up question.
"""
)


async def generate_ai_response(
    user_message: str
):

    try:

        print(
            "Generating Gemini response..."
        )

        response = model.generate_content(
            user_message,

            generation_config={
                "temperature": 0.5,
                "top_p": 0.8,
                "top_k": 20,
                "max_output_tokens": 120,
            }
        )

        print(
            "Gemini response received"
        )

        if (
            response
            and hasattr(response, "text")
            and response.text
        ):

            return (
                response.text.strip()
            )

        return (
            "Unable to generate response."
        )

    except Exception as e:

        print(
            "Gemini Error:",
            str(e)
        )

        return (
            "AI service temporarily unavailable."
        )