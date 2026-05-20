from fastapi import FastAPI

from fastapi.middleware.cors import (
    CORSMiddleware
)

from app.api.chat import (
    router as chat_router
)

from app.api.leads import (
    router as lead_router
)

from app.api.dashboard import (
    router as dashboard_router
)

app = FastAPI(
    title="NeuroBiz AI API",

    description="AI-Powered Business Automation Assistant Backend",

    version="1.0.0",
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROUTES
app.include_router(chat_router)

app.include_router(lead_router)

app.include_router(
    dashboard_router
)

@app.get("/")
def root():
    return {
        "app": "NeuroBiz AI",

        "status": "Backend Running",
    }