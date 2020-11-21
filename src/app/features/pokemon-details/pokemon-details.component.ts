import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


import { PokemonCardsHttpService } from '../../core/services/pokemon-cards.http.service';
import { PokemonCard } from '../../core/interfaces/pokemons.interfaces';

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

  q(w: any) {
    console.log(w);
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

    let formGroupConfig: any = {
      rarity: [rarity, [Validators.required, Validators.maxLength(12)]],
      set: [set, [Validators.required, Validators.maxLength(40)]],
    };

    if (types) {
      const typesFormArray = this.formBuilder.array([]);
      console.log(typesFormArray)

      types.forEach((type, i) => {
        const isMainType = i === 0;
        const control = this.formBuilder.group({
          type,
          isMainType,
        });

        if (isMainType) {
          control.setValidators([Validators.required]);
          control.updateValueAndValidity();
        }

        typesFormArray.push(control);
      });

      formGroupConfig = {
        types: this.formBuilder.array([typesFormArray]),
        ...formGroupConfig,
      };
    }
    this.form = this.formBuilder.group(formGroupConfig);
    console.log(this.form.getRawValue());
  }

  get typesControls(): AbstractControl[] {
    return (this.form.get('types') as FormArray).controls;
  }
}
