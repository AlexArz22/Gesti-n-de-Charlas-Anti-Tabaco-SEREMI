import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es'; // idioma español

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: false
})
export class CalendarioPage implements OnInit {
  calendarOptions: any;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calendarOptions = {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      locale: esLocale,
      fixedWeekCount: false, // evita mostrar filas extra
      //showNonCurrentDates: false, // oculta días de otros meses
      dateClick: this.handleDateClick.bind(this),
      events: [
        {
          title: 'Charla de Salud Mental',
          start: '2025-06-17T10:00:00',
          end: '2025-06-17T12:00:00',
          color: '#1e90ff',
          allDay: false
        },
        {
          title: 'Charla de Prevención',
          start: '2025-06-20',
          color: '#e3bc08',
          allDay: true
        }
      ],
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: ''
      },
      titleFormat: {
        year: 'numeric',
        month: 'long'
      }
    };
  }

  handleDateClick(arg: any) {
    alert('Fecha seleccionada: ' + arg.dateStr);
  }

  BackButton() {
    this.router.navigate(['/principal']);
  }
}