import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonCardsHttpService } from '../../../core/services/pokemon-cards.http.service';
import { PokemonCard } from '../../../core/interfaces';

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

  constructor(private pokemonService: PokemonCardsHttpService) {}

  ngOnInit(): void {
    this.pokemonCards$ = this.pokemonService.getCards().pipe(
      map(({cards}) => cards),
    );
    this.pokemonTypes$ = this.pokemonService.getPokemonTypes().pipe(
      map(({types}) => types),
    );
  }

  public changeFilteringType(type: string): void {
    this.filteringType = type;
  }

  public trackById(index: number, card: PokemonCard): string {
    return card.id;
  }
}
