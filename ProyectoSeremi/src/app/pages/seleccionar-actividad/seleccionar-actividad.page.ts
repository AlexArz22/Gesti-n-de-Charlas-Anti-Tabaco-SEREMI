import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-actividad',
  templateUrl: './seleccionar-actividad.page.html',
  styleUrls: ['./seleccionar-actividad.page.scss'],
  standalone:false
})
export class SeleccionarActividadPage implements OnInit {

  constructor(private router: Router) {}
  actividades = [
    { nombre: 'Actividad Fumar te da Cancer' },
    { nombre: 'Actividad El Vaper y sus efectos a largo plazo' },
    { nombre: 'Actividad Tabaco y sus consecuencias' },
    { nombre: 'Actividad Componentes del cigarro' }
  ];
  goToCharlaEspecifica(){
    this.router.navigate(['/charla-especifica']);
  }

  goToActividad() {
    this.router.navigate(['/actividad-especifica']);
  }
  ngOnInit() {
  }

}
