import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: false
})
export class PrincipalPage implements OnInit {
  @Input() title:string=""
  constructor(private router: Router) {}

  goToCharlas() {
    this.router.navigate(['/charlas']);
  }

  goToActividades() {
    this.router.navigate(['/actividades']);
  }

  goToCalendario() {
    this.router.navigate(['/calendario']);
  }

  ngOnInit() {
  }

}
