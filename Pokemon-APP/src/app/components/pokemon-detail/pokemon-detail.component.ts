import { Component, OnInit } from '@angular/core';
import { PokeomonDetailResponse } from '../../interfaces/pokemon-detail.interfaces';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.css'
})
export class PokemonDetailComponent implements OnInit{
  
  pokemonId: string | null = '';
  pokemon: PokeomonDetailResponse | undefined;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
  ){}

  ngOnInit(): void {
    this.pokemonId = this.route.snapshot.paramMap.get('id');

    this.pokemonService.getPokemon(parseInt(this.pokemonId!)).subscribe(respuesta => {
      this.pokemon = respuesta;
    });
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

  cambiarColorTextoSegunTipo(nombreTipo: string): string{
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

    return `color: ${coloresTipo[nombreTipo]}`
  }

}
