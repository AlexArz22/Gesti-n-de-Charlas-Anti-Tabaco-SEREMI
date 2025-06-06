import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiRestFullService {

  private apiUrl = 'http://localhost:3000/usuarios'; // cambia a tu IP en pruebas reales

  constructor(private http: HttpClient) {}
  
  registrarUsuario(datos: any) {
    return this.http.post(`${this.apiUrl}`, datos);
  }

  loginUsuario(datos: any) {
    return this.http.post(`${this.apiUrl}/login`, datos);
  }

}