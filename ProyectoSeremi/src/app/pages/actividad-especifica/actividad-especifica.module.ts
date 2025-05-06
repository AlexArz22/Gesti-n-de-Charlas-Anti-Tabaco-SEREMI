import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadEspecificaPageRoutingModule } from './actividad-especifica-routing.module';

import { ActividadEspecificaPage } from './actividad-especifica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadEspecificaPageRoutingModule
  ],
  declarations: [ActividadEspecificaPage]
})
export class ActividadEspecificaPageModule {}
