import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { PokemonService } from './services/pokemon.service';
import { MenuComponent } from './components/menu/menu.component';


@NgModule({
  declarations: [
  MenuComponent],
  exports: [
    CoreRoutingModule,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
  ],
  providers: [
    PokemonService,
  ]
})
export class CoreModule { }
