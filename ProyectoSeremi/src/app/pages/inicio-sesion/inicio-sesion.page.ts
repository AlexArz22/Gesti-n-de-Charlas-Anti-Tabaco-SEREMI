import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: false
})
export class InicioSesionPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  iniciarSesion() {

  }

  irAPrincipal() {
    this.router.navigate(['/principal']);
    }

  irARegistro() {
    this.router.navigate(['/registro']);
    }

  irARecuperarContrasena() {
    this.router.navigate(['/restablecer-contra']);
  }
}