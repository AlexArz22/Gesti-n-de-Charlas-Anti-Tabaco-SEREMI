import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarArchivoPageRoutingModule } from './seleccionar-archivo-routing.module';

import { SeleccionarArchivoPage } from './seleccionar-archivo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarArchivoPageRoutingModule
  ],
  declarations: [SeleccionarArchivoPage]
})
export class SeleccionarArchivoPageModule {}
