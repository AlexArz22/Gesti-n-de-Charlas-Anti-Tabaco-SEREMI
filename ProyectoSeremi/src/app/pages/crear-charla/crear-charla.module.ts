import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearCharlaPageRoutingModule } from './crear-charla-routing.module';

import { CrearCharlaPage } from './crear-charla.page';
import { FormularioCharlaComponent } from 'src/app/components/formulario-charla/formulario-charla.component';
import { SharedFormCharlaModule } from 'src/app/shared/shared-form-charla/shared-form-charla.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearCharlaPageRoutingModule,
    SharedFormCharlaModule
  ],
  declarations: [CrearCharlaPage]
})
export class CrearCharlaPageModule {}
