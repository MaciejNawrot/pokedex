import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDetailResponse, PokemonListResponse } from '../interfaces/pokemons.interfaces';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {
  private apiUrl = 'https://api.pokemontcg.io/v1';

  constructor(private http: HttpClient) {}

  public getPokemonsList(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}/cards`);
  }

  public getPokemonDetailsById(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`${this.apiUrl}/cards/${id}`);
  }
}
