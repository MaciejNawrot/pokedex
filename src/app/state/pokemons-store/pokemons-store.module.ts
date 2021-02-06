import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { pokemonsFeatureKey, fromPokemonsReducer } from './pokemons.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature( pokemonsFeatureKey, fromPokemonsReducer )
  ]
})
export class PokemonsStoreModule {}
