import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { PokemonDetailsComponent } from './pokemon-details.component';
import { PokemonDetailsRoutingModule } from './pokemon-details-routing.module';
import {DirectivesModule} from '../../shared/directives/directives.module';

@NgModule({
  declarations: [
    PokemonDetailsComponent,
  ],
  imports: [
    CommonModule,
    PokemonDetailsRoutingModule,
    ReactiveFormsModule,
    DirectivesModule,
  ],
})
export class PokemonDetailsModule {}
