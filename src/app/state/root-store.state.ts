import { fromPokemonsReducer, pokemonsFeatureKey, PokemonsState } from './pokemons-store/pokemons.reducer';


export interface IAppState {
  [pokemonsFeatureKey]: PokemonsState;
}

export const AppState = {
  [pokemonsFeatureKey]: fromPokemonsReducer,
};
