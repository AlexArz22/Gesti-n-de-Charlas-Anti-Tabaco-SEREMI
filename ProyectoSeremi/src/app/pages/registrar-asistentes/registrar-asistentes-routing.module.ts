import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarAsistentesPage } from './registrar-asistentes.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarAsistentesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarAsistentesPageRoutingModule {}
