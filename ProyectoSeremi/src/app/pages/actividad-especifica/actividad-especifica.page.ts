import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad-especifica',
  templateUrl: './actividad-especifica.page.html',
  styleUrls: ['./actividad-especifica.page.scss'],
  standalone:false
})
export class ActividadEspecificaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  irAActividadIniciada() {
    this.router.navigate(['/actividad-iniciada']);
  }
  irAeditandoActividad() {
    this.router.navigate(['/editando-actividad']);
  }
}
