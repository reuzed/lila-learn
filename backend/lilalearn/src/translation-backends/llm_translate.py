import openai
from dotenv import load_dotenv, find_dotenv
import os 
from pydantic import BaseModel
from typing import Any # figure out how to type basemodel

load_dotenv(find_dotenv())
api_key = os.environ.get("OPENAI_API_KEY")

client = openai.OpenAI(api_key=api_key)

def structured_output_response(prompt:str, content:str, basemodel:Any | BaseModel, model="gpt-4o-2024-08-06"):
    response = client.responses.parse(
        model=model,
        input=[
            {"role": "system", "content": prompt},
            {
                "role": "user",
                "content": content,
            },
        ],
        text_format=basemodel,
    )

    event = response.output_parsed
    return event

if __name__ == "__main__":
    class CalendarEvent(BaseModel):
        name: str
        date: str
        participants: list[str]
    
    e = structured_output_response("Make up some data to fill this in", "I want to go to a beach", CalendarEvent)
    print(e)

