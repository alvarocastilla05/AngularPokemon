import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameListResponse } from '../interfaces/game.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient){ }

  getGames(): Observable<GameListResponse>{
    return this.http.get<GameListResponse>('https://pokeapi.co/api/v2/version')
  }
}
