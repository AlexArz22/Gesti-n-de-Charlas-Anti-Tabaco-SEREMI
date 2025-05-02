import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutorizacionService {

  private usuarios: Usuario[] = []; // Lista de usuarios
  private usuarioActual = new BehaviorSubject<Usuario | null>(null); //Almacena el usuario actual, sirve para notificar a otros componentes que hay otro usuario.

  constructor() { }

  registrar(usuario: Usuario): boolean {
    const existe = this.usuarios.find(u => u.correo === usuario.correo);
    if (existe) return false; //El usuario ya está en la lista, retorna false, verificado con su correo.

    this.usuarios.push(usuario); // Se agrega el usuario.
    return true; //Se añadió con exito
  }

  login(correo: string, contraseña: string): boolean{
    const usuario = this.usuarios.find(u => u.correo == correo && u.contraseña === contraseña); //Recorre los usuarios, si lo encuentra, lo guarda.

    if (usuario) {
      this.usuarioActual.next(usuario); //Se actualiza el usuario actual para notificar a quien esté suscrito.
      return true; //Inicio de sesión exitoso.
    }
    
    return false; //Login fallido

  }

}
