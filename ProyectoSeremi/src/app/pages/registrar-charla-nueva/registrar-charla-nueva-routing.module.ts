import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCharlaNuevaPage } from './registrar-charla-nueva.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCharlaNuevaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCharlaNuevaPageRoutingModule {}
