import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Charla } from 'src/app/models/charla';
import { AutenticacionService } from '../../services/autenticacion.service';

@Component({
  selector: 'app-charlas',
  templateUrl: './charlas.page.html',
  styleUrls: ['./charlas.page.scss'],
  standalone: false
})
export class CharlasPage implements OnInit {
  charlas: Charla[] = [];
  esAdmin: boolean = false;
  constructor(private router:Router, private autenticacionService: AutenticacionService) {}

  ngOnInit() {
    const usuario = this.autenticacionService.getUsuarioActual();
    this.esAdmin = usuario?.rol === 'admin';
  }

  goToCharla() {
    this.router.navigate(['/charla-especifica']);
  }
  goToMenu() {
    this.router.navigate(['/principal']);
  }

  goToCrearCharla(){
    this.router.navigate(['/registrar-charla-nueva']);
  }
}
