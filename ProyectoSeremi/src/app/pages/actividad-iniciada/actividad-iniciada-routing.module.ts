import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActividadIniciadaPage } from './actividad-iniciada.page';

const routes: Routes = [
  {
    path: '',
    component: ActividadIniciadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActividadIniciadaPageRoutingModule {}
