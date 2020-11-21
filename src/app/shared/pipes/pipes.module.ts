import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPokemonCardsByType } from './filter-pokemon-cards-by-type';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FilterPokemonCardsByType,
  ],
  exports: [
    FilterPokemonCardsByType
  ]
})
export class PipesModule {}
