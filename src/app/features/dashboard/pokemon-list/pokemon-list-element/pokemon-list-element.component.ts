import { Component, Input } from '@angular/core';
import { PokemonCard } from '../../../../core/interfaces/pokemons.interfaces';

@Component({
  selector: 'app-pokemon-list-element',
  templateUrl: './pokemon-list-element.component.html',
  styleUrls: ['./pokemon-list-element.component.scss']
})
export class PokemonListElementComponent {
  @Input() pokemonCard: PokemonCard;
}
