import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tipo } from './tipo';
import { lastValueFrom } from 'rxjs';

const API_URL = 'http://localhost:8000/tipo';


@Injectable({
  providedIn: 'root'
})
export class TipoService {

  constructor(private http: HttpClient) { }

  getTipo(): Promise<Tipo[]> {
    return lastValueFrom(this.http.get<Tipo[]>(API_URL));
  }

  getTipoById(id: string): Promise<Tipo> {
    return lastValueFrom(this.http.get<Tipo>(`${API_URL}/${id}`));
  }

  addTipo(tipo: Tipo): Promise<string> {
    return lastValueFrom(this.http.post<string>(API_URL, tipo));
  }

  updateTipo(id: string, tipo: Tipo): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}/${id}`, tipo));
  }

  deleteTipo(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}/${id}`));
  }
}