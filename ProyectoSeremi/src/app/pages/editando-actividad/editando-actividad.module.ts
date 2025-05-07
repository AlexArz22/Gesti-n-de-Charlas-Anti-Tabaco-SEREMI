import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditandoActividadPageRoutingModule } from './editando-actividad-routing.module';

import { EditandoActividadPage } from './editando-actividad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditandoActividadPageRoutingModule
  ],
  declarations: [EditandoActividadPage]
})
export class EditandoActividadPageModule {}
