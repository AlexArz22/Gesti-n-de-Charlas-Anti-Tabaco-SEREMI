import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadEspecificaPage } from './actividad-especifica.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadEspecificaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadEspecificaPageRoutingModule {}
