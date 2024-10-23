import { Component, OnInit } from '@angular/core';
import { Item } from '../../interfaces/item.interfaces';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  listItem: Item[] = [];

  img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(respuesta => {
      this.listItem = respuesta.results;
    });

  }

  getImage(name: string): string {
    return `${this.img}${name}.png`;
  }
}