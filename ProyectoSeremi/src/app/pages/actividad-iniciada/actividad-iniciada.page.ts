import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividad-iniciada',
  templateUrl: './actividad-iniciada.page.html',
  styleUrls: ['./actividad-iniciada.page.scss'],
  standalone: false
})
export class ActividadIniciadaPage implements OnInit {
  
  //Simulación de pregunta
  pregunta: string = '1.- ¿Cuál es un síntoma de fumar mucho tabaco?';

  alternativas = [
    { texto: 'a) Tos', esCorrecta: true },
    { texto: 'b) Caída del cabello', esCorrecta: false },
    { texto: 'c) Pérdida del brazo izquierdo', esCorrecta: false },
    { texto: 'd) Reducción de capacidad cognitiva', esCorrecta: false },
  ];

  seleccionUsuario: number | null = null;
  mostrarResultado: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {}

  seleccionarAlternativa(index: number) {
    if (!this.mostrarResultado) {
      this.seleccionUsuario = index;
      this.mostrarResultado = true;
    }
  }

  apretarAbandonar() {
    this.router.navigate(['/actividades']);
  }
}
