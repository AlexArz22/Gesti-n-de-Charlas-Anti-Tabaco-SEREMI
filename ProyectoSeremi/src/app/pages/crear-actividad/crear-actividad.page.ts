import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.page.html',
  styleUrls: ['./crear-actividad.page.scss'],
  standalone:false
})
export class CrearActividadPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irACreandoActividad() {
    this.router.navigate(['/creando-actividad']);
  }

  irAActividades() {
    this.router.navigate(['/actividades']);
  }

}
