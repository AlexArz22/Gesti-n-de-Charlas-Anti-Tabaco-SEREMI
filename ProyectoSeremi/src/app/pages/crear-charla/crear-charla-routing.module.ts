import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearCharlaPage } from './crear-charla.page';

const routes: Routes = [
  {
    path: '',
    component: CrearCharlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearCharlaPageRoutingModule {}
