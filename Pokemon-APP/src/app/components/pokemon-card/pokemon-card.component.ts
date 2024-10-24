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

  cambiarColorSegunTipo(nombreTipo1: string): void{

    switch(nombreTipo1){
      case "normal":
        document.querySelector('.tipoDominante')!.setAttribute('style', 'background-color: rgba(170,166,127,.4) !important');
        break;

      /*case "fighting":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #C12239");
          break;

      case "flying":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #A891EC");
          break;

      case "ground":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #DEC16B");
          break;

      case "poison":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #A43E9E");
          break;
      
      case "rock":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #B69E31");
          break; 

      case "bug":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #A7B723");
          break; 

      case "ghost":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #70559B");
          break; 

      case "steel":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #B7B9D0");
          break;*/

      case "fire":
          document.querySelector('.tipoDominante')!.setAttribute('style', 'background-color: #F57D31 !important');
          break;
      
      /*case "water":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #6493EB");
          break;*/

      case "grass":
          document.querySelector('.tipoDominante')!.setAttribute('style', 'background-color: rgba(116,203,72,.4) !important');
          break;

      /*case "electric":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #F9CF30");
          break;

      case "psychic":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #FB5584");
          break;

      case "ice":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #9AD6DF");
          break;

      case "dragon":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #7037FF");
          break;

      case "dark":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #75574C");
          break;

      case "fairy":
          $(`.tipoDominante${pokemonId}`).attr("style", "background-color: #E69EAC");
          break;*/
      
      default:
          document.querySelector('.tipoDominante')!.setAttribute('style', 'background-color: rgba(116,203,72,.4) !important');
    }
  }
  

}
