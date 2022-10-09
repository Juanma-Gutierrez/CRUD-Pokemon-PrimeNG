import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bioma } from './bioma';
import { lastValueFrom } from 'rxjs';

const API_URL = 'http://localhost:8000/bioma';


@Injectable({
  providedIn: 'root'
})
export class BiomaService {

  constructor(private http: HttpClient) { }

  getBioma(): Promise<Bioma[]> {
    return lastValueFrom(this.http.get<Bioma[]>(API_URL));
  }

  getBiomaById(id: string): Promise<Bioma> {
    return lastValueFrom(this.http.get<Bioma>(`${API_URL}/${id}`));
  }

  addBioma(bioma: Bioma): Promise<string> {
    return lastValueFrom(this.http.post<string>(API_URL, bioma));
  }

  updateBioma(id: string, bioma: Bioma): Promise<void> {
    return lastValueFrom(this.http.put<void>(`${API_URL}/${id}`, bioma));
  }

  deleteBioma(id: string): Promise<void> {
    return lastValueFrom(this.http.delete<void>(`${API_URL}/${id}`));
  }
}