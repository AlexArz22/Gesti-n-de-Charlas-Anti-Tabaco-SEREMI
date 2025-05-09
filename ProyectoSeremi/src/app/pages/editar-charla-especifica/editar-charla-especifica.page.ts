import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
  temario: string = '';// todo esto aun estara por verse para la entrega 2

  constructor(private router: Router, private location: Location) { }

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

  ngOnInit() {
  }

}
