import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './pokemon';
import { lastValueFrom } from 'rxjs';

const API_URL = 'http://localhost:8000/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(): Promise<Pokemon[]> {
    return lastValueFrom(this.http.get<Pokemon[]>(API_URL));
  }

  getPokemonById(id: string): Promise<Pokemon> {
    return lastValueFrom(this.http.get<Pokemon>(`${API_URL}/${id}`));
  }

  addPokemon(tipo: Pokemon): Promise<string> {
    return lastValueFrom(this.http.post<string>(API_URL, tipo));
  }

  updatePokemon(id: string, tipo: Pokemon): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}/${id}`, tipo));
  }

  deletePokemon(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}/${id}`));
  }
}