from fastapi import FastAPI
from server.routes import pokemon_router
from server.routes import bioma_router
from server.routes import tipo_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [ # Direcciones de origen
    "http://localhost",
    "http://localhost:4200"
]

app.add_middleware( # Lista blanca de dominios permitidos
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"],
)

app.include_router(pokemon_router)
app.include_router(bioma_router)
app.include_router(tipo_router)

# @app.get("/", tags=['root'])
# async def read_root():
#   return {"message": "Hola mundo"}



