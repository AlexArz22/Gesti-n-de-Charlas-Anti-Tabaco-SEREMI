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
    { nombre: 'Actividad_1_juego_salud.pdf' },
    { nombre: 'Actividad_2_quiz_tabaco.pdf' },
    { nombre: 'Actividad_3_trivia_vapeo.pdf' }
  ];
  goToCharlaEspecifica(){
    this.router.navigate(['/charla-especifica']);
  }

  seleccionar(nombre: string): void {
    console.log('Actividad seleccionada:', nombre);
  }
  ngOnInit() {
  }

}
