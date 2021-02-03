import { createAction, props } from '@ngrx/store';
import { PokemonDetailsConfig } from '../../core/interfaces';

export const GetPokemonsList = createAction(
  '[Pokemon] get list',
);

export const GetPokemonDetails = createAction(
  '[Pokemon] get details',
  props<PokemonDetailsConfig>()
);
