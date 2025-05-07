import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarActividadPageRoutingModule } from './seleccionar-actividad-routing.module';

import { SeleccionarActividadPage } from './seleccionar-actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarActividadPageRoutingModule
  ],
  declarations: [SeleccionarActividadPage]
})
export class SeleccionarActividadPageModule {}
