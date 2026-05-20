import google.generativeai as genai
import os

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
    model_name="gemini-3.5-flash",
    system_instruction="""
You are NeuroBiz AI — a smart, concise business assistant.

Rules:
- Keep responses short and practical.
- Maximum 80 words unless user asks for details.
- Avoid long introductions.
- Avoid motivational or robotic language.
- Be direct and professional.
- Use bullet points when useful.
- Focus on solving the user's problem quickly.
- Ask at most ONE follow-up question.
- Sound like a modern SaaS AI copilot.
"""
)

async def generate_ai_response(user_message: str):
    try:

        response = model.generate_content(
            user_message,

            generation_config={
                "temperature": 0.5,
                "top_p": 0.8,
                "top_k": 20,
                "max_output_tokens": 120,
            }
        )

        if response and response.text:
            return response.text.strip()

        return "Unable to generate response."

    except Exception:
        return "AI service is temporarily unavailable."