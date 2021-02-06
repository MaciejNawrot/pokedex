import { Action, createReducer, on } from '@ngrx/store';

import * as PokemonsActions from './pokemons.actions';
import { PokemonCard } from '../../core/interfaces';

export interface PokemonsState {
  pokemonsList: PokemonCard[];
  pokemonDetails: PokemonCard;
  isLoading: boolean;
}

export const initialPokemonsState: PokemonsState = {
  pokemonsList: null,
  pokemonDetails: null,
  isLoading: false,
};

const pokemonsReducer = createReducer(
  initialPokemonsState,
  on(PokemonsActions.GetPokemonsList, state => {
    console.log(state)
    return {...state, isLoading: true};
  }),
  on(PokemonsActions.GetPokemonDetails, state => ({...state, isLoading: false})),
);

export const fromPokemonsReducer = (state: PokemonsState | undefined, action: Action) => pokemonsReducer(state, action);

export const pokemonsFeatureKey = 'pokemons';
