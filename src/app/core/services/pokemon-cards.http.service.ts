import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PokemonDetailResponse, PokemonListResponse, PokemonTypesResponse} from '../interfaces/pokemons.interfaces';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PokemonCardsHttpService {
  private apiUrl: string = environment.api;

  constructor(private http: HttpClient) {}

  public getCards(): Observable<PokemonListResponse> {
    return this.http.get<PokemonListResponse>(`${this.apiUrl}/cards`);
  }

  public getPokemonDetailsById(id: string): Observable<PokemonDetailResponse> {
    return this.http.get<PokemonDetailResponse>(`${this.apiUrl}/cards/${id}`);
  }

  public getPokemonTypes(): Observable<PokemonTypesResponse> {
    return this.http.get<PokemonTypesResponse>(`${this.apiUrl}/types`);
  }
}
