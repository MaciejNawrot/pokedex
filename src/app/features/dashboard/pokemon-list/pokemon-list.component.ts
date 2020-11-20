import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PokemonCardsHttpService } from '../../../core/services/pokemon-cards.http.service';
import { PokemonCard } from '../../../core/interfaces/pokemons.interfaces';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonListComponent implements OnInit {
  public pokemonCards$: Observable<PokemonCard[]>;

  constructor(private pokemonService: PokemonCardsHttpService) {}

  ngOnInit(): void {
    this.pokemonCards$ = this.pokemonService.getCards().pipe(
      map(({cards}) => cards),
    );
  }

  public trackById(index, card: PokemonCard): string {
    return card.id;
  }
}
