import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creando-actividad',
  templateUrl: './creando-actividad.page.html',
  styleUrls: ['./creando-actividad.page.scss'],
  standalone:false
})
export class CreandoActividadPage {
  pregunta: string = '';
  
  completado: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  alternativas = [
    { texto: '', esCorrecta: false },
    { texto: '', esCorrecta: false },
    { texto: '', esCorrecta: false },
    { texto: '', esCorrecta: false },
  ];

  correcta: number | null = null;

  esCorrecta(index: number) {
    this.alternativas[index].esCorrecta = !this.alternativas[index].esCorrecta;
  }

  apretarCompletar() {
    this.completado = false;
  }

  irAActividades() {
    this.router.navigate(['/actividades']);
  }
}