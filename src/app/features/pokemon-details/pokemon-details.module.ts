import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    PokemonDetailsComponent,
  ],
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class PokemonDetailsModule {}
