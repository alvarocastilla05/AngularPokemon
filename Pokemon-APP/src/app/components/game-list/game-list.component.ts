import { Component, OnInit } from '@angular/core';
import { Game } from '../../interfaces/game.interfaces';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit{
  listGames: Game[] = [];

  constructor(private gameService : GameService){}

  ngOnInit(): void {
    this.gameService.getGames().subscribe(respuesta => {
        this.listGames = respuesta.results;
      }
    );
  }

}
