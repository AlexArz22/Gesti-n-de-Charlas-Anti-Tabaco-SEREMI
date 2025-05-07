import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  guardarCambios() {
    this.router.navigate(['/charla-especifica']);
  }

  agregarActividades() {
    // meter esta funcion cuando exista back end 
  }

  agregarContenido() {
    // meter esta funcion cuando exista back end 
  }

  asignarOradores() {
    this.router.navigate(['/anadir-orador']);
  }

  volver() {
    this.router.navigate(['/charla-especifica']); // Ajusta la ruta si es necesario
  }

  ngOnInit() {
  }

}
