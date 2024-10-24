import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonListResponse } from '../interfaces/pokemon.interfaces';
import { PokeomonDetailResponse } from '../interfaces/pokemon-detail.interfaces';
import { PokemonDesCatResponse } from '../interfaces/pokemon-des-cat.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<PokemonListResponse>{
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon/');
  }

  getPokemon(id: number): Observable<PokeomonDetailResponse>{
    return this.http.get<PokeomonDetailResponse>(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  }

  getDesCatPokemon(id: number): Observable<PokemonDesCatResponse>{
    return this.http.get<PokemonDesCatResponse>(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
  }
  
}
