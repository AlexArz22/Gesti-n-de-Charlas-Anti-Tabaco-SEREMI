import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirOradorPage } from './anadir-orador.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirOradorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirOradorPageRoutingModule {}
