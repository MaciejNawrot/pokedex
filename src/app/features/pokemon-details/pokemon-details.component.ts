import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PokemonCardsHttpService } from '../../core/services/pokemon-cards.http.service';
import { PokemonCard } from '../../core/interfaces';

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
    private fb: FormBuilder,
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
    const { rarity, set, types } = card;

    const typesFormArrayItems: FormGroup[] = (types || []).map((type: string, idx: number) => {
      const isMainType: boolean = idx === 0;

      return this.fb.group({
        type: [type, isMainType ? [Validators.required] : []],
        isMainType: [isMainType],
      });
    });

    this.form = this.fb.group({
      rarity: [rarity, [Validators.required, Validators.maxLength(20)]],
      set: [set, [Validators.required, Validators.maxLength(30)]],
      types: this.fb.array(typesFormArrayItems),
    });
  }

  public get formTypes(): FormArray {
    return (this.form.get('types') as FormArray);
  }

  public get formTypesControls(): AbstractControl[] {
    return this.formTypes.controls;
  }

  public get rarityControl(): AbstractControl {
    return this.form.get('rarity');
  }

  public get setNameControl(): AbstractControl {
    return this.form.get('set');
  }
}
