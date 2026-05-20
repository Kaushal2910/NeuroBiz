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
You are NeuroBiz AI, a modern AI business assistant.

Your job is to give practical business growth advice.

Rules:
- Keep responses concise but useful.
- Usually respond in 80–150 words.
- Use bullet points when useful.
- Be conversational and professional.
- Avoid robotic introductions.
- Avoid generic motivational text.
- Give actionable suggestions.
- End with one smart follow-up question when appropriate.
- Focus on marketing, sales, automation, customer retention, and business growth.
"""
)

async def generate_ai_response(
    user_message: str
):

    try:

        response = model.generate_content(
            user_message,

            generation_config={
                "temperature": 0.7,
                "top_p": 0.9,
                "top_k": 40,
                "max_output_tokens": 500,
            }
        )

        return response.text.strip()

    except Exception as e:

        print(
            "Gemini Error:",
            str(e)
        )

        return (
            "AI service temporarily unavailable."
        )