import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';

import { PokemonsStoreModule } from './pokemons-store/pokemons-store.module';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({}),
    PokemonsStoreModule,
  ],
})
export class RootStoreModule {}
