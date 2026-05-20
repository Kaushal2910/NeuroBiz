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

        response = model.generate_content(
            user_message,

            generation_config={
                "temperature": 0.6,
                "top_p": 0.9,
                "top_k": 40,
                "max_output_tokens": 256,
            }
        )

        candidates = response.candidates

        if (
            candidates
            and len(candidates) > 0
        ):

            content_parts = (
                candidates[0]
                .content.parts
            )

            final_text = ""

            for part in content_parts:

                if hasattr(part, "text"):
                    final_text += (
                        part.text
                    )

            final_text = (
                final_text.strip()
            )

            if final_text:
                return final_text

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