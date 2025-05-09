import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seleccionar-archivo',
  templateUrl: './seleccionar-archivo.page.html',
  styleUrls: ['./seleccionar-archivo.page.scss'],
  standalone:false
})
export class SeleccionarArchivoPage implements OnInit {

  constructor(private router: Router) {}
  archivos = [
    { nombre: 'Efectos_del_cigarro_en_pulmones.pdf' },
  ];
  abrirArchivo(): void {    
  }

  goToCharlaEspecifica(){
    this.router.navigate(['/charla-especifica']);
  }
  ngOnInit() {
  }

}
