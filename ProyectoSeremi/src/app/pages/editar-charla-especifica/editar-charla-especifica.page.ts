import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-editar-charla-especifica',
  templateUrl: './editar-charla-especifica.page.html',
  styleUrls: ['./editar-charla-especifica.page.scss'],
  standalone: false
})
export class EditarCharlaEspecificaPage implements OnInit {
  fechaCharla: string = '';
  colegio: string = '';
  region: string = '';
  comuna: string = '';
  curso: string = '';
  temario: string = '';
  esAdmin: boolean =false;

  constructor(private router: Router, private location: Location, private autenticacionService: AutenticacionService) { }

  ngOnInit() {
    const usuario = this.autenticacionService.getUsuarioActual();
    this.esAdmin = usuario?.rol === 'admin';
  }

  guardarCambios() {
    this.router.navigate(['/charla-especifica']);
  }

  agregarActividades() {
    this.router.navigate(['/anadir-actividad-a-charla']);
  }

  agregarContenido() {
    this.router.navigate(['/anadir-archivo-a-charla']);
  }

  asignarOradores() {
    this.router.navigate(['/anadir-orador']);
  }

  volver() {
    this.location.back();
  }

}
