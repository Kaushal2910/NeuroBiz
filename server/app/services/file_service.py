import io
import pandas as pd

from PyPDF2 import PdfReader
from docx import Document

MAX_ROWS = 100


async def extract_file_content(file):

    filename = file.filename.lower()

    content = await file.read()

    # TXT
    if filename.endswith(".txt"):

        return content.decode(
            "utf-8",
            errors="ignore"
        )

    # CSV
    elif filename.endswith(".csv"):

        df = pd.read_csv(
            io.BytesIO(content)
        )

        return df.head(MAX_ROWS).to_string()

    # EXCEL
    elif (
        filename.endswith(".xlsx")
        or
        filename.endswith(".xls")
    ):

        df = pd.read_excel(
            io.BytesIO(content)
        )

        return df.head(MAX_ROWS).to_string()

    # PDF
    elif filename.endswith(".pdf"):

        pdf = PdfReader(
            io.BytesIO(content)
        )

        text = ""

        for page in pdf.pages:

            extracted = page.extract_text()

            if extracted:
                text += extracted + "\n"

        return text

    # DOCX
    elif filename.endswith(".docx"):

        doc = Document(
            io.BytesIO(content)
        )

        text = "\n".join(
            para.text
            for para in doc.paragraphs
        )

        return text

    return "Unsupported file type."