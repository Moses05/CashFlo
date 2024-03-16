from os import environ

import aiohttp
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

class ExchangeModel(BaseModel):
    code: str
    redirect_uri: str

class RefreshModel(BaseModel):
    refresh_token: str
    redirect_uri: str

app = FastAPI()

origins = [
    "https://192.168.0.86:80",
    "https://*.truelayer.com/*",
    "https://*.truelayer-sandbox.com/*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origin=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

client_id = environ["TL_CLIENT_ID"]
client_secret = environ["TL_CLIENT_SECRET"]

@app.get("/")
async def root():
    return {"message": "Hello world"}

@app.post("/exchange")
async def exchangeCode(exchange: ExchangeModel):
    endpoint : str = "https://auth.truelayer.com/connect/token"

    async with aiohttp.ClientSession() as session:
        async with session.post(
            endpoint,
            json={
                "client_id": client_id,
                "client_secret": client_secret,
                "code": exchange.code,
                "grant_type": "authorization_code",
                "redirect_uri": exchange.redirect_uri
            }
        ) as resp:
            return await resp.json()
        
@app.post("/refresh")
async def refreshCode(refresh: RefreshModel):
    endpoint: str = "https://auth.truelayer.com/connect/token"

    async with aiohttp.ClientSession() as session:
        async with session.post(
            endpoint,
            json={
                "client_id": client_id,
                "client_secret": client_secret,
                "grant_type": "refresh_token",
                "refresh_token": refresh.refresh_token,
                "redirect_uri": refresh.redirect_uri
            }
        ) as resp:
            return await resp.json()
