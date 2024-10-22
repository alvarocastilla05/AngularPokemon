import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemListResponse } from '../interfaces/item.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemListResponse>{
    return this.http.get<ItemListResponse>('https://pokeapi.co/api/v2/item')
  }

}
