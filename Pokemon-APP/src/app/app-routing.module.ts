import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: 'pokemon', component: PokemonListComponent},
  {path: 'item', component: ItemListComponent},
  {path: 'game', component: GameListComponent},
  {path: 'pokemon-detail/:id', component: PokemonDetailComponent},
  {path: 'item-detail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/pokemon', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
