import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarActividadPage } from './seleccionar-actividad.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarActividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarActividadPageRoutingModule {}
