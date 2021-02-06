import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { pluck } from 'rxjs/operators';

import { PokemonCardsHttpService } from '../../../core/services/pokemon-cards.http.service';
import { PokemonCard } from '../../../core/interfaces';
import { GetPokemonsList } from '../../../state/pokemons-store/pokemons.actions';
import {AppState, IAppState} from '../../../state/root-store.state';

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

  constructor(public pokemonService: PokemonCardsHttpService, private store: Store<IAppState>) {}

  ngOnInit(): void {
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

  public incrementCounter(): void {
    this.pokemonService.incrementCounter();
  }

  public trackById(index: number, card: PokemonCard): string {
    return card.id;
  }
}
