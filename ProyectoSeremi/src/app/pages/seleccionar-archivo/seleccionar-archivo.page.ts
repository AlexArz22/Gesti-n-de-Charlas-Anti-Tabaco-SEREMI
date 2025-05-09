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
    { nombre: 'Efectos_del_cigarro_en_pulmonespdf' },
  ];
  abrirArchivo(): void {
    window.open('/assets/presentaciones/Efectos_del_cigarro_en_pulmones.pdf', '_blank');
  }
  goToCharlaEspecifica(){
    this.router.navigate(['/charla-especifica']);
  }
  ngOnInit() {
  }

}
