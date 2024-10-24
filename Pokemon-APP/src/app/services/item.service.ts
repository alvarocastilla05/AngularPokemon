import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemListResponse } from '../interfaces/item.interfaces';
import { HttpClient } from '@angular/common/http';
import { ItemDetailResponse } from '../interfaces/item-detail.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemListResponse>{
    return this.http.get<ItemListResponse>('https://pokeapi.co/api/v2/item')
  }

  getOneItem(id: number): Observable<ItemDetailResponse>{
    return this.http.get<ItemDetailResponse>(`https://pokeapi.co/api/v2/item/${id}`)
  }

}
