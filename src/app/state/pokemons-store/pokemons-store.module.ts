import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { pokemonsFeatureKey, reducer } from './pokemons.reducer';


@NgModule({
  imports: [
    StoreModule.forFeature( pokemonsFeatureKey, reducer)
  ]
})
export class PokemonsStoreModule {}
