import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.page.html',
  styleUrls: ['./ver-perfil.page.scss'],
  standalone: false
})
export class VerPerfilPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irAEditarPerfil() {
    this.router.navigate(['/editar-perfil']);
  }

  irAMenu() {
    this.router.navigate(['/principal']);
  }
}
