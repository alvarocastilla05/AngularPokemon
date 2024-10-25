import { Component, OnInit } from '@angular/core';
import { ItemDetailResponse } from '../../interfaces/item-detail.interfaces';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent implements OnInit{
  itemId: string | null = '';
  item: ItemDetailResponse | undefined;

  img = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/';


  constructor(
    private route: ActivatedRoute,
    private ItemService: ItemService
  ){ }

  ngOnInit(): void {
    this.itemId = this.route.snapshot.paramMap.get('id');

    this.ItemService.getOneItem(parseInt(this.itemId!)).subscribe(respuesta => {
      this.item = respuesta;
    });
  }

  getImage(name: string): string {
    return `${this.img}${name}.png`;
  }


}
