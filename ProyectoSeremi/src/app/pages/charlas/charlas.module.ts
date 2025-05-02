import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CharlasPageRoutingModule } from './charlas-routing.module';

import { CharlasPage } from './charlas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CharlasPageRoutingModule
  ],
  declarations: [CharlasPage]
})
export class CharlasPageModule {}
