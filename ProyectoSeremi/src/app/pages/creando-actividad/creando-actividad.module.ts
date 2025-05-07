import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreandoActividadPageRoutingModule } from './creando-actividad-routing.module';

import { CreandoActividadPage } from './creando-actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreandoActividadPageRoutingModule
  ],
  declarations: [CreandoActividadPage]
})
export class CreandoActividadPageModule {}
