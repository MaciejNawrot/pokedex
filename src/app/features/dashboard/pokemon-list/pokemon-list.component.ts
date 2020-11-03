import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../core/services/pokemon.service';
import { PokemonCard } from '../../../core/interfaces/pokemons.interfaces';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemonCards: PokemonCard[] = [];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemonsList()
      .subscribe(({cards}) => {
        this.pokemonCards = cards;
      });
  }
}
