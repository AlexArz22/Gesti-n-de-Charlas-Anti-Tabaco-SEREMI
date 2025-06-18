import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface UsuarioToken {
  rut: string;
  email: string;
  rol: string;
}

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getUsuarioActual(): UsuarioToken | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<UsuarioToken>(token);
    } catch (error) {
      console.error('Token inválido:', error);
      return null;
    }
  }

  esAdmin(): boolean {
    const usuario = this.getUsuarioActual();
    return usuario?.rol === 'admin';
  }

  estaAutenticado(): boolean {
    return !!this.getToken();
  }

  cerrarSesion() {
    localStorage.removeItem('token');
  }
}
