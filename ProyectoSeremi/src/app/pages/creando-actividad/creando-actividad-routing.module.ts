import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreandoActividadPage } from './creando-actividad.page';

const routes: Routes = [
  {
    path: '',
    component: CreandoActividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreandoActividadPageRoutingModule {}
