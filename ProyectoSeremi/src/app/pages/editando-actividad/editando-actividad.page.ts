import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editando-actividad',
  templateUrl: './editando-actividad.page.html',
  styleUrls: ['./editando-actividad.page.scss'],
  standalone: false
})
export class EditandoActividadPage implements OnInit {
  pregunta: string = '¿Cuál de los siguientes es un efecto del tabaquismo?';
  completado: boolean = true;

  alternativas = [
    { texto: 'a) Tos', esCorrecta: true },
    { texto: 'b) Caída del cabello', esCorrecta: false },
    { texto: 'c) Pérdida del brazo izquierdo', esCorrecta: false },
    { texto: 'd) Reducción de capacidad cognitiva', esCorrecta: false }
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  esCorrecta(index: number) {
    this.alternativas[index].esCorrecta = !this.alternativas[index].esCorrecta;
  }

  apretarCompletar() {
    this.completado = false;
  }

  devolver() {
    this.completado = true;
  }

  irAActividades() {
    this.devolver()
    this.router.navigate(['/actividades']);
  }
}
