import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetColorsForPokemonTypeDirective } from './set-colors-for-pokemon-type.directive';

@NgModule({
  declarations: [
    SetColorsForPokemonTypeDirective,
  ],
  exports: [
    SetColorsForPokemonTypeDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
