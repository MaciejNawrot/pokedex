import { pokemonsFeatureKey, PokemonsState } from './pokemons.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const pokemonsStateSelector = createFeatureSelector(pokemonsFeatureKey);

export const getPokemonsListState = ({pokemonsList}: PokemonsState) => pokemonsList;
export const getPokemonDetailsState = ({pokemonDetails}: PokemonsState) => pokemonDetails;
export const getIsLoadingState = ({isLoading}: PokemonsState) => isLoading;

export const selectPokemonsList = createSelector(pokemonsStateSelector, getPokemonsListState);
export const selectPokemonDetails = createSelector(pokemonsStateSelector, getPokemonDetailsState);
export const selectIsLoading = createSelector(pokemonsStateSelector, getIsLoadingState);
