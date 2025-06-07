import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestFullService } from '../../services/api-rest-full.service';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: false
})
export class InicioSesionPage implements OnInit {

  constructor(private router: Router, private apiService: ApiRestFullService) {}

  email: string = '';
  contrasenia: string = '';

  ngOnInit() {}

  iniciarSesion() {
    if (!this.email || !this.contrasenia) {
      alert('Debe ingresar su correo y contraseña');
      return;
    }

    const datos = {
      email: this.email,
      contrasenia: this.contrasenia
    }; 
    
    this.apiService.loginUsuario(datos).subscribe({
      next: (res: any) => {
        // Suponiendo que backend responde { token, usuario }
        localStorage.setItem('token', res.token);  // Guarda el token
        console.log('Login exitoso:', res);
        this.router.navigate(['/principal']);      // Redirige a la página principal
      },
      error: (err) => {
        console.error('Error en login:', err);
        alert(err.error.message || 'Credenciales inválidas');
      }
    });

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