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

  imagen: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';

  constructor(private listaService: PokemonService){}

  ngOnInit(): void {
    this.listaService.getPokemonList().subscribe(respuesta => {
      this.listPokemon = respuesta.results;
    });
  }

  getImagenPokemon(url:string): string {
    let id = url.split("/")[6];

    return this.imagen+'/'+id+'.png';
  }

}
