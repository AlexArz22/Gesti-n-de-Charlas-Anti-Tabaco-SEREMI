import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirActividadACharlaPageRoutingModule } from './anadir-actividad-a-charla-routing.module';

import { AnadirActividadACharlaPage } from './anadir-actividad-a-charla.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirActividadACharlaPageRoutingModule
  ],
  declarations: [AnadirActividadACharlaPage]
})
export class AnadirActividadACharlaPageModule {}
