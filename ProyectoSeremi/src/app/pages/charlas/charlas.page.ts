import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Charla } from 'src/app/models/charla';

@Component({
  selector: 'app-charlas',
  templateUrl: './charlas.page.html',
  styleUrls: ['./charlas.page.scss'],
  standalone: false
})
export class CharlasPage implements OnInit {
  charlas: Charla[] = [];
  constructor(private router:Router) {}

  ngOnInit() {
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
