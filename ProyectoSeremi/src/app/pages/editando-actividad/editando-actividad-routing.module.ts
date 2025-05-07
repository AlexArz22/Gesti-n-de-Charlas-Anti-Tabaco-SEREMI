import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditandoActividadPage } from './editando-actividad.page';

const routes: Routes = [
  {
    path: '',
    component: EditandoActividadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditandoActividadPageRoutingModule {}
