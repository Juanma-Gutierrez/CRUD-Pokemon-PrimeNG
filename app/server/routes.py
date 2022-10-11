from server.models import Pokemon
from server.models import Bioma
from server.models import Tipo
from fastapi import APIRouter
from bson.objectid import ObjectId
from server.dbconfig import db
from pydantic import json

json.ENCODERS_BY_TYPE[ObjectId]=str

# ***** Tabla Pokemon *****
pokemon_router = APIRouter()

@pokemon_router.get("/pokemon")
async def get_pokemons():
  return list(db.pokemon.find())


@pokemon_router.get("/pokemon/{id}")
async def get_pokemon(id: str):
  return db.pokemon.find_one({"_id":ObjectId(id)})

@pokemon_router.post("/pokemon")
async def post_pokemon(pokemon: Pokemon):
  nuevo_pokemon = dict(pokemon)
  id = db.pokemon.insert_one(nuevo_pokemon).inserted_id
  return str(id)

@pokemon_router.put("/pokemon/{id}")
async def put_pokemon(id: str, pokemon: Pokemon):
  db.pokemon.find_one_and_update({"_id":ObjectId(id)}, {"$set": dict(pokemon)})

@pokemon_router.delete("/pokemon/{id}")
async def delete_pokemon(id: str):
  db.pokemon.find_one_and_delete({"_id":ObjectId(id)})


# ***** Tabla Bioma *****
bioma_router = APIRouter()

@bioma_router.get("/bioma")
async def get_biomas():
  return list(db.bioma.find())

@bioma_router.get("/bioma/{id}")
async def get_bioma(id: str):
  return db.bioma.find_one({"_id":ObjectId(id)})

@bioma_router.post("/bioma")
async def post_bioma(bioma: Bioma):
  nuevo_bioma = dict(bioma)
  id = db.bioma.insert_one(nuevo_bioma).inserted_id
  return str(id)

@bioma_router.put("/bioma/{id}")
async def put_bioma(id: str, bioma: Bioma):
  db.bioma.find_one_and_update({"_id":ObjectId(id)}, {"$set": dict(bioma)})

@bioma_router.delete("/bioma/{id}")
async def delete_bioma(id: str):
  db.bioma.find_one_and_delete({"_id":ObjectId(id)})


# ***** Tabla Tipo *****
tipo_router = APIRouter()

@tipo_router.get("/tipo")
async def get_tipos():
  return list(db.tipo.find())

@tipo_router.get("/tipo/{id}")
async def get_tipo(id: str):
  return db.tipo.find_one({"_id":ObjectId(id)})

@tipo_router.post("/tipo")
async def post_tipo(tipo: Tipo):
  nuevo_tipo = dict(tipo)
  id = db.tipo.insert_one(nuevo_tipo).inserted_id
  return str(id)

@tipo_router.put("/tipo/{id}")
async def put_tipo(id: str, tipo: Tipo):
  db.tipo.find_one_and_update({"_id":ObjectId(id)}, {"$set": dict(tipo)})

@tipo_router.delete("/tipo/{id}")
async def delete_tipo(id: str):
  db.tipo.find_one_and_delete({"_id":ObjectId(id)})


