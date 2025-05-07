import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarCharlaEspecificaPage } from './editar-charla-especifica.page';

const routes: Routes = [
  {
    path: '',
    component: EditarCharlaEspecificaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarCharlaEspecificaPageRoutingModule {}
