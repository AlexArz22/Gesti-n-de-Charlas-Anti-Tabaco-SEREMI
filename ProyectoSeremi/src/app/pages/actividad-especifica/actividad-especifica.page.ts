import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-actividad-especifica',
  templateUrl: './actividad-especifica.page.html',
  styleUrls: ['./actividad-especifica.page.scss'],
  standalone:false
})
export class ActividadEspecificaPage implements OnInit {
  esAdmin: boolean=false;

  constructor(private router: Router, private autenticacionService: AutenticacionService) { }
  completado: boolean = true;

  ngOnInit() {
    const usuario = this.autenticacionService.getUsuarioActual();
    this.esAdmin = usuario?.rol === 'admin';
  }

  apretarEliminar() {
    this.completado = false;
  }

  irAActividadIniciada() {
    this.router.navigate(['/actividad-iniciada']);
  }
  irAeditandoActividad() {
    this.router.navigate(['/editando-actividad']);
  }

  irAActividades() {
    this.router.navigate(['/actividades']);
  }
}
