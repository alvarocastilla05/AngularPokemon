import { Component, OnInit } from '@angular/core';
import { PokeomonDetailResponse } from '../../interfaces/pokemon-detail.interfaces';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonDesCatResponse } from '../../interfaces/pokemon-des-cat.interfaces';

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

}
