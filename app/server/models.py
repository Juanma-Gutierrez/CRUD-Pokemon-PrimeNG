from typing import Optional
from pydantic import BaseModel

class Pokemon(BaseModel):
  _id: Optional[str]
  nombre: str
  habilidad: str
  evolucion1: str
  evolucion2: str
  tipo: str
  ataque: int
  defensa: int
  vida: int
  bioma: str

class Bioma(BaseModel):
  _id: Optional[str]
  nombre: str

class Tipo(BaseModel):
  _id: Optional[str]
  tipo: str
