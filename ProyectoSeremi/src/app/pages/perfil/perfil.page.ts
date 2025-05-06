import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone:false
})
export class PerfilPage implements OnInit {
  editando = false;

  rut = '';
  region = '';
  comuna = '';
  direccion = '';
  correo = '';
  password = '';

  toggleEditar() {
    this.editando = !this.editando;
  }
  constructor() { }

  ngOnInit() {
  }

}
