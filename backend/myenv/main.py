from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/{message}")
def read_root(message):
    return {"Hello": message}