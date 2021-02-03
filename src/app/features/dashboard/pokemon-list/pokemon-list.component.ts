import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';

import { PokemonCardsHttpService } from '../../../core/services/pokemon-cards.http.service';
import { PokemonCard } from '../../../core/interfaces';
import { State } from '../../../state/pokemons-store/pokemons.reducer';
import { GetPokemonsList } from '../../../state/pokemons-store/pokemons.actions';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  public pokemonCards$: Observable<PokemonCard[]>;
  public pokemonTypes$: Observable<string[]>;
  public filteringType: string;

  constructor(private pokemonService: PokemonCardsHttpService, private store: Store<State>) {}

  ngOnInit(): void {
    this.store.dispatch(GetPokemonsList());

    this.pokemonCards$ = this.pokemonService.getCards().pipe(
      pluck('cards'),
    );
    this.pokemonTypes$ = this.pokemonService.getPokemonTypes().pipe(
      pluck('types'),
    );
  }

  public changeFilteringType(type: string): void {
    this.filteringType = type;
  }

  public trackById(index: number, card: PokemonCard): string {
    return card.id;
  }
}
