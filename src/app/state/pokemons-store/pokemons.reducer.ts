import { Action, createReducer, on } from '@ngrx/store';

import * as PokemonsActions from './pokemons.actions';
import { PokemonCard } from '../../core/interfaces';

export interface State {
  pokemonsList: PokemonCard[];
  pokemonDetails: PokemonCard;
  isLoading: boolean;
}

export const initialState: State = {
  pokemonsList: null,
  pokemonDetails: null,
  isLoading: false,
};

const pokemonsReducer = createReducer(
  initialState,
  on(PokemonsActions.GetPokemonsList, state => {
    console.log(state)
    return {...state, isLoading: false};
  }),
  on(PokemonsActions.GetPokemonDetails, state => ({...state, isLoading: false})),
);

export const reducer = (state: State | undefined, action: Action) => pokemonsReducer(state, action);

export const pokemonsFeatureKey = 'pokemons';
