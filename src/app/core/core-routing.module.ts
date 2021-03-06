import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  {
    path: 'pokemon/:id',
    loadChildren: () => import('../features/pokemon-details/pokemon-details.module').then(m => m.PokemonDetailsModule),
  },
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {}
