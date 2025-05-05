import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharlaEspecificaPage } from './charla-especifica.page';

const routes: Routes = [
  {
    path: '',
    component: CharlaEspecificaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharlaEspecificaPageRoutingModule {}
