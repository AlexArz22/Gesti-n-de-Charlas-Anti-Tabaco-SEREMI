import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
  standalone: false
})
export class EditarPerfilPage implements OnInit {

  completado: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  apretarCompletar() {
    this.completado = false;
  }

  irAPerfil() {
    this.router.navigate(['/ver-perfil']);
  }

}
