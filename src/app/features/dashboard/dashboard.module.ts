import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonListElementComponent } from './pokemon-list/pokemon-list-element/pokemon-list-element.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PokemonListComponent,
    PokemonListElementComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
})
export class DashboardModule {}
