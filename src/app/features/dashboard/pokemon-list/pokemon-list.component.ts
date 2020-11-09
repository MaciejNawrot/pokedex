import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../core/services/pokemon.service';
import { PokemonCard } from '../../../core/interfaces/pokemons.interfaces';
import { take } from 'rxjs/operators';

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
      .pipe(
        take(1)
      )
      .subscribe(({cards}) => {
        this.pokemonCards = cards;
      });
  }
}
