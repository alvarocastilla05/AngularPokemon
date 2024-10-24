import { Component, Input, OnInit } from '@angular/core';
import { PokeomonDetailResponse } from '../../interfaces/pokemon-detail.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent implements OnInit{

  @Input() pokemonId: number | undefined;
  pokemon: PokeomonDetailResponse | undefined;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon(this.pokemonId!).subscribe(respuesta => {
      this.pokemon = respuesta;
    });
  }

  

}
