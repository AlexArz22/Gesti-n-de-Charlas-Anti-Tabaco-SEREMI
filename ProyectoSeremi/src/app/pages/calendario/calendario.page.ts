import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarEvent } from 'angular-calendar';
import { addHours } from 'date-fns';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: false
})
export class CalendarioPage implements OnInit {

  viewDate: Date = new Date();  // Fecha actual
  events: CalendarEvent[] = []; // Aquí se cargarán las charlas

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí debes traer tus charlas desde el backend, esto es un ejemplo fijo
    this.events = [
      {
        start: new Date('2025-06-17T10:00:00'),
        end: addHours(new Date('2025-06-17T10:00:00'), 2),
        title: 'Charla de Salud Mental',
        color: { primary: '#1e90ff', secondary: '#D1E8FF' },
        allDay: false,
      },
      {
        start: new Date('2025-06-20'),
        title: 'Charla de Prevención',
        color: { primary: '#e3bc08', secondary: '#FDF1BA' },
        allDay: true,
      }
    ];
  }

  handleEvent(event: CalendarEvent): void {
    alert(`Evento: ${event.title}`);
    // Puedes redirigir o abrir modal con más detalles
  }

  BackButton() {
    this.router.navigate(['/principal']);
  }

}
