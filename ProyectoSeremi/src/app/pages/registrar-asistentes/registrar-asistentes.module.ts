import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarAsistentesPageRoutingModule } from './registrar-asistentes-routing.module';

import { RegistrarAsistentesPage } from './registrar-asistentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarAsistentesPageRoutingModule
  ],
  declarations: [RegistrarAsistentesPage]
})
export class RegistrarAsistentesPageModule {}
