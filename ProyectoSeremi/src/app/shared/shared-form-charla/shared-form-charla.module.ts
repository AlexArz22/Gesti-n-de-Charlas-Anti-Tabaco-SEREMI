import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioCharlaComponent } from 'src/app/components/formulario-charla/formulario-charla.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FormularioCharlaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ],
  exports: [
    FormularioCharlaComponent
  ]
})
export class SharedFormCharlaModule { }
