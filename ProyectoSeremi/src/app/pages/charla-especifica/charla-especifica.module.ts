import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharlaEspecificaPageRoutingModule } from './charla-especifica-routing.module';

import { CharlaEspecificaPage } from './charla-especifica.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharlaEspecificaPageRoutingModule
  ],
  declarations: [CharlaEspecificaPage]
})
export class CharlaEspecificaPageModule {}
