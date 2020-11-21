import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';


import { PokemonCardsHttpService } from '../../core/services/pokemon-cards.http.service';
import { PokemonCard } from '../../core/interfaces/pokemons.interfaces';

interface FromConfig {
  set: any;
  rarity: any;
  types?: FormArray;
}

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon$: Observable<PokemonCard>;
  public pokemonTypes$: Observable<string[]>;
  public form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonCardsHttpService,
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.getPokemonFromRouteParams();
    this.pokemonTypes$ = this.pokemonService.getPokemonTypes().pipe(
      map(({types}) => types),
    );
  }

  private getPokemonFromRouteParams(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.pokemonService.getPokemonDetailsById(id);
      }),
      map(({card}) => card),
      tap(card => this.createForm(card)),
      catchError(() => {
        return of(null);
      })
    );
  }

  private createForm(card: PokemonCard): void {
    const {rarity, set, types} = card;

    let formGroupConfig: FromConfig = {
      rarity: [rarity, [Validators.required, Validators.maxLength(30)]],
      set: [set, [Validators.required, Validators.maxLength(40)]],
    };

    if (types) {
      const typesFormArray = this.formBuilder.array([]);

      types.forEach((type, i) => {
        const isMainType = i === 0;
        const group = this.formBuilder.group({
          type,
          isMainType,
        });

        if (isMainType) {
          const typeControl = group.get('type');

          typeControl.setValidators([Validators.required]);
          typeControl.updateValueAndValidity();
        }

        typesFormArray.push(group);
      });

      formGroupConfig = {
        types: typesFormArray,
        ...formGroupConfig,
      };
    }
    this.form = this.formBuilder.group(formGroupConfig);
  }
}
