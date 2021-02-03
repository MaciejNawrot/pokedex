import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CoreRoutingModule } from './core-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { RootStoreModule } from '../state/root-store.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    CoreRoutingModule,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    HttpClientModule,
    RootStoreModule,
  ],
})
export class CoreModule {}
