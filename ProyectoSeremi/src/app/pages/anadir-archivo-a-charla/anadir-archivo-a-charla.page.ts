import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

interface Archivo {
  nombre: string;
}

@Component({
  selector: 'app-anadir-archivo-a-charla',
  templateUrl: './anadir-archivo-a-charla.page.html',
  styleUrls: ['./anadir-archivo-a-charla.page.scss'],
  standalone:false
})
export class AnadirArchivoACharlaPage implements OnInit {

  constructor(private location: Location) {}

  archivosDisponibles: Archivo[] = [
    { nombre: 'Efectos_del_cigarro_en_pulmones.pdf' }
  ];

  archivosSeleccionados: Archivo[] = [];

  agregarArchivo(archivo: Archivo): void {
    this.archivosSeleccionados.push(archivo);
    this.archivosDisponibles = this.archivosDisponibles.filter(a => a !== archivo);
  }

  quitarArchivo(archivo: Archivo): void {
    this.archivosDisponibles.push(archivo);
    this.archivosSeleccionados = this.archivosSeleccionados.filter(a => a !== archivo);
  }
  
  volver(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
