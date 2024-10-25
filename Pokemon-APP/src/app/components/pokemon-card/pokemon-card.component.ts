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

  cambiarColorOpacidadSegunTipo(nombreTipo1: string): string{
    interface Colores {
        [index: string]: string;
    }

    let coloresTipo = {
        "normal": "rgba(170,166,127, .4)",
        "fighting": "rgb(193, 34, 57, .4)",
        "flying": "rgb(168, 145, 236, .4)",
        "ground": "rgb(222, 193, 107, .4)",
        "poison": "rgb(164, 62, 158, .4)",
        "rock": "rgb(182, 158, 49, .4)",
        "bug": "rgb(167, 183, 35, .4)",
        "ghost": "rgb(112, 85, 155, .4)",
        "steel": "rgb(183, 185, 208, .4)",
        "fire": "rgb(245, 125, 49, .4)",
        "water": "rgb(100, 147, 235, .4)",
        "grass": "rgba(116,203,72,.4)",
        "electric": "rgb(249, 207, 48, .4)",
        "physic": "rgb(251, 85, 132, .4)",
        "ice": "rgb(154, 214, 223, .4)",
        "dragon": "rgb(112, 55, 255, .4)",
        "dark": "rgb(117, 87, 76, .4)",
        "fairy": "rgb(230, 158, 172, .4)"
    } as Colores

    return `background-color: ${coloresTipo[nombreTipo1]}`
  }

  cambiarColorSegunTipo(nombreTipo: string): string{
    interface Colores {
        [index: string]: string;
    }

    let coloresTipo = {
        "normal": "rgba(170,166,127)",
        "fighting": "rgb(193, 34, 57)",
        "flying": "rgb(168, 145, 236)",
        "ground": "rgb(222, 193, 107)",
        "poison": "rgb(164, 62, 158)",
        "rock": "rgb(182, 158, 49)",
        "bug": "rgb(167, 183, 35)",
        "ghost": "rgb(112, 85, 155)",
        "steel": "rgb(183, 185, 208)",
        "fire": "rgb(245, 125, 49)",
        "water": "rgb(100, 147, 235)",
        "grass": "rgba(116,203,7)",
        "electric": "rgb(249, 207, 48)",
        "physic": "rgb(251, 85, 132)",
        "ice": "rgb(154, 214, 223)",
        "dragon": "rgb(112, 55, 255)",
        "dark": "rgb(117, 87, 76)",
        "fairy": "rgb(230, 158, 172)"
    } as Colores

    return `background-color: ${coloresTipo[nombreTipo]}`
  }
  
}
