import google.generativeai as genai
import os

from dotenv import load_dotenv

load_dotenv()

genai.configure(
    api_key=os.getenv("GEMINI_API_KEY")
)

model = genai.GenerativeModel(
     "gemini-3.5-flash"
)

SYSTEM_PROMPT = """
You are NeuroBiz AI.

You are an advanced AI-powered business automation assistant.

Your purpose is to help businesses improve:
- sales funnels
- workflow automation
- customer retention
- operational efficiency
- KPI tracking
- lead conversion
- marketing strategies
- business scalability

Always respond professionally.

Structure responses clearly using:
- headings
- bullet points
- business insights
- actionable recommendations

Keep responses modern, concise, and business-focused.
"""

async def generate_ai_response(
    user_message: str
):
    try:
        prompt = f"""
{SYSTEM_PROMPT}

User Request:
{user_message}
"""

        response = model.generate_content(
            prompt
        )

        return response.text

    except Exception as e:
        return f"Error: {str(e)}"