import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharlaEspecificaPageRoutingModule } from './charla-especifica-routing.module';

import { CharlaEspecificaPage } from './charla-especifica.page';
import { FormularioCharlaComponent } from 'src/app/components/formulario-charla/formulario-charla.component';
import { SharedFormCharlaModule } from 'src/app/shared/shared-form-charla/shared-form-charla.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharlaEspecificaPageRoutingModule,
    SharedFormCharlaModule
  ],
  declarations: [CharlaEspecificaPage,
  ]
})
export class CharlaEspecificaPageModule {}
