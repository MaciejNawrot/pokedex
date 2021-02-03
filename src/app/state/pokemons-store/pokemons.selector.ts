import { pokemonsFeatureKey, State } from './pokemons.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const pokemonsStateSelector = createFeatureSelector(pokemonsFeatureKey);

export const getPokemonsListState = ({pokemonsList}: State) => pokemonsList;
export const getPokemonDetailsState = ({pokemonDetails}: State) => pokemonDetails;
export const getIsLoadingState = ({isLoading}: State) => isLoading;

export const selectPokemonsList = createSelector(pokemonsStateSelector, getPokemonsListState);
export const selectPokemonDetails = createSelector(pokemonsStateSelector, getPokemonDetailsState);
export const selectIsLoading = createSelector(pokemonsStateSelector, getIsLoadingState);
