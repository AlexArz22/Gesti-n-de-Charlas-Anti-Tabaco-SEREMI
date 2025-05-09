import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registrar-charla-nueva',
  templateUrl: './registrar-charla-nueva.page.html',
  styleUrls: ['./registrar-charla-nueva.page.scss'],
  standalone:false
})
export class RegistrarCharlaNuevaPage implements OnInit {
  fechaCharla: string = '';
  colegio: string = '';
  region: string = '';
  comuna: string = '';
  curso: string = '';
  temario: string = '';

  origen: string | null = null;

  constructor(private router: Router, private location: Location) {}
  
  guardarCambios() {
    this.location.back();
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

  volver(): void {
    this.location.back();
  }
  

  ngOnInit() {
  }
  

}
