import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListElementComponent } from './pokemon-list/pokemon-list-element/pokemon-list-element.component';
import { PipesModule } from '../../shared/pipes/pipes.module';
import {DirectivesModule} from '../../shared/directives/directives.module';

@NgModule({
  declarations: [
    DashboardComponent,
    PokemonListComponent,
    PokemonListElementComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PipesModule,
    DirectivesModule,
  ],
})
export class DashboardModule {}
