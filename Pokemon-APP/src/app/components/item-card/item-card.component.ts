import { Component, Input, OnInit } from '@angular/core';
import { ItemDetailResponse } from '../../interfaces/item-detail.interfaces';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.css'
})
export class ItemCardComponent implements OnInit{
  @Input() itemId: number | undefined;
  item: ItemDetailResponse | undefined;

  img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.itemService.getOneItem(this.itemId!).subscribe(respuesta => {
      this.item = respuesta;
    });
  }

  getImage(name: string): string {
    return `${this.img}${name}.png`;
  }

  getItemId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

}
