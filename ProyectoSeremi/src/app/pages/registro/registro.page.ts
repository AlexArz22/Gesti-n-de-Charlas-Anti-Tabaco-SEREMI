import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestFullService } from '../../services/api-rest-full.service';
import { Usuario } from '../../models/Usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {
  usuario: Usuario= {
    email: '',
    contrasenia: '',
    confirmContrasenia: '',
    rut: '',
    nombre: '',
    apellido: '',
    region: '',
    comuna: '',
    direccion: '',
    terminos: false
  };

  constructor(private router: Router, private userService: ApiRestFullService) {}

  ngOnInit() {}

  registrar() {
    if (this.usuario.contrasenia !== this.usuario.confirmContrasenia) {
      alert('Las contraseñas no coinciden');
      return;
    }

    if (!this.usuario.terminos) {
      alert('Debes aceptar los términos y condiciones');
      return;
    }

    const datos = {
      rut: this.usuario.rut,
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      contrasenia: this.usuario.contrasenia,
      email: this.usuario.email,
      region: this.usuario.region,
      comuna: this.usuario.comuna,
      direccion: this.usuario.direccion,
      terminos: this.usuario.terminos ? 1 : 0
    };

    this.userService.registrarUsuario(datos).subscribe({
      next: res => {
        console.log('Usuario registrado:', res);
        this.router.navigate(['/inicio-sesion']);
      },
      error: err => {
        console.error('Error al registrar:', err);
        alert('Error al registrar usuario');
      }
    });
  }

  irAInicioSesion() {
    this.router.navigate(['/inicio-sesion']);
  }
}
