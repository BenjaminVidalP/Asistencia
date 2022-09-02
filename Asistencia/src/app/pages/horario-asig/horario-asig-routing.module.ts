import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorarioAsigPage } from './horario-asig.page';

const routes: Routes = [
  {
    path: '',
    component: HorarioAsigPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorarioAsigPageRoutingModule {}
