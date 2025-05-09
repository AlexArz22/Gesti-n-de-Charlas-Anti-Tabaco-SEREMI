import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCharlaNuevaPageRoutingModule } from './registrar-charla-nueva-routing.module';

import { RegistrarCharlaNuevaPage } from './registrar-charla-nueva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCharlaNuevaPageRoutingModule
  ],
  declarations: [RegistrarCharlaNuevaPage]
})
export class RegistrarCharlaNuevaPageModule {}
