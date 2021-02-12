import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {catchError, map, switchMap, takeUntil, tap} from 'rxjs/operators';
import {interval, Observable, of} from 'rxjs';
import {AbstractControl, FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';

import {PokemonCardsHttpService} from '../../core/services/pokemon-cards.http.service';
import {PokemonCard} from '../../core/interfaces';
import {CoreDestroyService} from '../../core/services/core-destoy.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CoreDestroyService],
})
export class PokemonDetailsComponent implements OnInit {
  public pokemon$: Observable<PokemonCard>;
  public pokemon: PokemonCard;
  public pokemonTypes$: Observable<string[]>;
  public form: FormGroup;
  public timer: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonCardsHttpService,
    private fb: FormBuilder,
    public readonly destroyService: CoreDestroyService,
    private cdr: ChangeDetectorRef,
    ) {}

  ngOnInit(): void {
    this.getPokemonFromRouteParams();
    this.pokemonTypes$ = this.pokemonService.getPokemonTypes().pipe(
      map(({types}) => types),
    );

    this.timer = interval(1000).pipe(
      takeUntil(this.destroyService.destroy$),
    );
    this.timer.subscribe((x) => {
      console.log(x);
    });
  }

  private getPokemonFromRouteParams(): void {
    this.pokemon$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return this.pokemonService.getPokemonDetailsById(id);
      }),
      map(({card}) => card),
      tap(card => {
        this.createForm(card);
        this.listenToNameChanges();
        this.pokemon = card;
        this.cdr.detectChanges();
      }),
      takeUntil(this.destroyService.destroy$),
      catchError(() => {
        return of(null);
      })
    );

    this.pokemon$.subscribe();
  }

  private createForm(card: PokemonCard): void {
    const { rarity, set, types, name } = card;

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
      name,
    });
  }

  private listenToNameChanges(): void {
    this.form.get('name').valueChanges.pipe(
      takeUntil(this.destroyService.destroy$),
    ).subscribe((name) => {
      this.pokemon.name = name;
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
