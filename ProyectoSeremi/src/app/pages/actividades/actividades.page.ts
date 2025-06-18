import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
  standalone: false
})
export class ActividadesPage implements OnInit {
  esAdmin: boolean = false;

  @Input() title:string=""
  constructor(private router: Router, private autenticacionService: AutenticacionService) {}

  goToActividad(){
    this.router.navigate(['/actividad-especifica']);
  }

  irACrearActividad(){
    this.router.navigate(['/crear-actividad']);
  }

  ngOnInit() {
    const usuario = this.autenticacionService.getUsuarioActual();
    this.esAdmin = usuario?.rol === 'admin';
  }
  goToPrincipal() {
    this.router.navigate(['/principal']);
  }

}
