import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anadir-orador',
  templateUrl: './anadir-orador.page.html',
  styleUrls: ['./anadir-orador.page.scss'],
  standalone:false
})
export class AnadirOradorPage implements OnInit {
  rutValue: string = '';

  constructor(private router: Router) { }

  onAgregar() {
    console.log('RUT agregado:', this.rutValue);
  }

  onVolver() {
    this.router.navigate(['/charla-especifica']); // Ajusta la ruta si es necesario
  }

  ngOnInit() {
  }

}
