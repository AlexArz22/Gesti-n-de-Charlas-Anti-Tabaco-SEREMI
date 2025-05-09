import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirArchivoACharlaPage } from './anadir-archivo-a-charla.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirArchivoACharlaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirArchivoACharlaPageRoutingModule {}
