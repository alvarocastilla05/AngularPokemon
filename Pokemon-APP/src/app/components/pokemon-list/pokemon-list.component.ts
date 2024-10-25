import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../interfaces/pokemon.interfaces';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit{

  listPokemon: Pokemon[] = [];

  constructor(private listaService: PokemonService){}

  ngOnInit(): void {
    this.listaService.getPokemonList().subscribe(respuesta => {
      this.listPokemon = respuesta.results;
    });
  }

  getPokemonId(url: string): number {
    return parseInt(url.split('/')[6]);
  }

}
