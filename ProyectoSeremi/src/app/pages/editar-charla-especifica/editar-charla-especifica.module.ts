import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarCharlaEspecificaPageRoutingModule } from './editar-charla-especifica-routing.module';

import { EditarCharlaEspecificaPage } from './editar-charla-especifica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarCharlaEspecificaPageRoutingModule
  ],
  declarations: [EditarCharlaEspecificaPage]
})
export class EditarCharlaEspecificaPageModule {}
