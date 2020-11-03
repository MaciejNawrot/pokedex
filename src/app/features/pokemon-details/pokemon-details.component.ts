import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { PokemonService } from '../../core/services/pokemon.service';
import { PokemonCard } from '../../core/interfaces/pokemons.interfaces';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon$: Observable<PokemonCard>;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService,
    ) { }

  ngOnInit(): void {
    this.getPokemonFromRouteParams();
  }

  private getPokemonFromRouteParams(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.pokemonService.getPokemonDetailsById(id);
      }),
      map(({card}) => card),
      catchError(() => {
        return of(null);
      })
    );
  }
}
