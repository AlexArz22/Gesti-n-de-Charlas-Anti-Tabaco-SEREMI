import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Actividad {
  nombre: string;
}

@Component({
  selector: 'app-anadir-actividad-a-charla',
  templateUrl: './anadir-actividad-a-charla.page.html',
  styleUrls: ['./anadir-actividad-a-charla.page.scss'],
  standalone: false
})
export class AnadirActividadACharlaPage implements OnInit {

  constructor(private router: Router) {}

  actividadesDisponibles: Actividad[] = [
    { nombre: 'Actividad Fumar te da Cancer' },
    { nombre: 'Actividad El Vaper y sus efectos a largo plazo' },
    { nombre: 'Actividad Tabaco y sus consecuencias' },
    { nombre: 'Actividad Componentes del cigarro' }
  ];

  actividadesSeleccionadas: Actividad[] = [];

  agregarActividad(actividad: Actividad): void {
    this.actividadesSeleccionadas.push(actividad);
    this.actividadesDisponibles = this.actividadesDisponibles.filter(a => a !== actividad);
  }

  quitarActividad(actividad: Actividad): void {
    this.actividadesDisponibles.push(actividad);
    this.actividadesSeleccionadas = this.actividadesSeleccionadas.filter(a => a !== actividad);
  }

  goToCharlaEspecifica(): void {
    this.router.navigate(['/editar-charla-especifica']);
  }

  ngOnInit(): void {}
}
