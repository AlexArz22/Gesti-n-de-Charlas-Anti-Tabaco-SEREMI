import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearActividadPageRoutingModule } from './crear-actividad-routing.module';

import { CrearActividadPage } from './crear-actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearActividadPageRoutingModule
  ],
  declarations: [CrearActividadPage]
})
export class CrearActividadPageModule {}
