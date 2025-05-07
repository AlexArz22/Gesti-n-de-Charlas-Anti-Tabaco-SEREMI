import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActividadIniciadaPageRoutingModule } from './actividad-iniciada-routing.module';

import { ActividadIniciadaPage } from './actividad-iniciada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActividadIniciadaPageRoutingModule
  ],
  declarations: [ActividadIniciadaPage]
})
export class ActividadIniciadaPageModule {}
