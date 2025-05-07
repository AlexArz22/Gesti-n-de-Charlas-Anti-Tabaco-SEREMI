import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarArchivoPage } from './seleccionar-archivo.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarArchivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarArchivoPageRoutingModule {}
