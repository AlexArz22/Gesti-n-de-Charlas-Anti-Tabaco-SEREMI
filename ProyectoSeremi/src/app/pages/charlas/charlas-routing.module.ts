import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharlasPage } from './charlas.page';

const routes: Routes = [
  {
    path: '',
    component: CharlasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharlasPageRoutingModule {}
