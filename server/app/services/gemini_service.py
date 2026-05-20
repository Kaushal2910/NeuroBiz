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
- Give detailed and practical responses.
-  Usually respond in 80–150 words.
- Use bullet points when useful.
- Be conversational and professional.
- Avoid robotic introductions.
- Give actionable suggestions.
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
                "max_output_tokens": 1500,
            }
        )

        print(response)

        if response.candidates:

            parts = response.candidates[0].content.parts

            full_text = "".join(
                part.text
                for part in parts
                if hasattr(part, "text")
            )

            print("FULL TEXT:", full_text)

            return full_text.strip()

        return "No response generated."


    except Exception as e:

        print(
            "Gemini Error:",
            str(e)
        )

        return (
            "AI service temporarily unavailable."
        )