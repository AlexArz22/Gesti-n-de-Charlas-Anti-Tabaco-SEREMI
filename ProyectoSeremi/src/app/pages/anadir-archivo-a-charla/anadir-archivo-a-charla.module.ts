import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirArchivoACharlaPageRoutingModule } from './anadir-archivo-a-charla-routing.module';

import { AnadirArchivoACharlaPage } from './anadir-archivo-a-charla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirArchivoACharlaPageRoutingModule
  ],
  declarations: [AnadirArchivoACharlaPage]
})
export class AnadirArchivoACharlaPageModule {}
