import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {
  
  constructor(private router: Router){} //Para gestionar navegación entre páginas.) {} //Para mostrar notificaciones por pantalla.

  ngOnInit() {
  }

  irAInicioSesion() {
    this.router.navigate(['/inicio-sesion']);
  }


}
