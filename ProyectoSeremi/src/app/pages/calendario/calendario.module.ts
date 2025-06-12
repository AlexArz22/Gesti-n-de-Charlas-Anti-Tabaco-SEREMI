import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { CalendarioPageRoutingModule } from './calendario-routing.module';
import { CalendarioPage } from './calendario.page';

import { CalendarMonthModule, CalendarWeekModule, CalendarDayModule } from 'angular-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioPageRoutingModule,
    CalendarMonthModule, // Vista mensual
    CalendarWeekModule,  // Vista semanal (opcional, solo si se usa)
    CalendarDayModule    // Vista diaria (opcional, solo si se usa)
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
