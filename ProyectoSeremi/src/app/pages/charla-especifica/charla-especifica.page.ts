import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-charla-especifica',
  templateUrl: './charla-especifica.page.html',
  styleUrls: ['./charla-especifica.page.scss'],
  standalone: false
})
export class CharlaEspecificaPage implements OnInit {

  tiempoTranscurrido: string = '00:00:00';
  botonIniciado: boolean = false;
  botonDeshabilitado: boolean = false;

  private intervalId: any;
  private segundos: number = 0;

  @Input() title:string=""
  constructor(private router: Router) {}

  ngOnInit() { }

  goToCharlas(){
    this.router.navigate(['/charlas']);
  }
  goToSeleccionarActividad(){
    this.router.navigate(['/seleccionar-actividad']);
  }
  goToSeleccionarArchivo(){
    this.router.navigate(['/seleccionar-archivo']);
  }
  goToRegistrarAsistentes(){
    this.router.navigate(['/registrar-asistentes']);
  }
  goToEditarCharla(){
    this.router.navigate(['/editar-charla-especifica']);
  }

  toggleContador() {
    if (!this.botonIniciado) {
      this.botonIniciado = true;

      this.intervalId = setInterval(() => {
        this.segundos++;
        this.tiempoTranscurrido = this.formatearTiempo(this.segundos);
      }, 1000);
    } else {
      clearInterval(this.intervalId);
      this.botonDeshabilitado = true;
    }
  }

  private formatearTiempo(totalSegundos: number): string {
    const horas = Math.floor(totalSegundos / 3600);
    const minutos = Math.floor((totalSegundos % 3600) / 60);
    const segundos = totalSegundos % 60;

    return [
      horas.toString().padStart(2, '0'),
      minutos.toString().padStart(2, '0'),
      segundos.toString().padStart(2, '0')
    ].join(':');
  }
}
