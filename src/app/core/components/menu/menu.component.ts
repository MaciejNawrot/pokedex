import { Component } from '@angular/core';
import { PokemonCardsHttpService } from '../../services/pokemon-cards.http.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(public pokemonService: PokemonCardsHttpService) {}

  public increaseCounter(): void {
    this.pokemonService.incrementCounter();
  }
}
