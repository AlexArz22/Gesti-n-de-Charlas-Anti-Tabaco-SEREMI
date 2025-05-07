import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-asistentes',
  templateUrl: './registrar-asistentes.page.html',
  styleUrls: ['./registrar-asistentes.page.scss'],
  standalone:false
})
export class RegistrarAsistentesPage implements OnInit {

  constructor(private router: Router) {}
  goToCharlaEspecifica(){
    this.router.navigate(['/charla-especifica']);
  }

  ngOnInit() {
  }

}
