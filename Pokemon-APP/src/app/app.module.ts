import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { provideHttpClient } from '@angular/common/http';
import { ItemListComponent } from './components/item-list/item-list.component';
import { MenuNavComponent } from './shared/menu-nav/menu-nav/menu-nav.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    GameListComponent,
    ItemListComponent,
    MenuNavComponent,
    PageNotFoundComponent,
    PokemonCardComponent,
    PokemonDetailComponent,
    ItemCardComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
