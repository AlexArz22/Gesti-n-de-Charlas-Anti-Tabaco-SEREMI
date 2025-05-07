import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
  standalone: false
})
export class ActividadesPage implements OnInit {
  @Input() title:string=""
  constructor(private router: Router) {}

  goToActividad(){
    this.router.navigate(['/actividad-especifica']);
  }

  irACrearActividad(){
    this.router.navigate(['/crear-actividad']);
  }

  ngOnInit() {
  }
  goToPrincipal() {
    this.router.navigate(['/principal']);
  }

}
