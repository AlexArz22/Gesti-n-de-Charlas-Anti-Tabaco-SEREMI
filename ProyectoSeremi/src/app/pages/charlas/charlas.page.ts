import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Charla } from 'src/app/models/charla';
import { CharlasService } from 'src/app/services/charlas.service';

@Component({
  selector: 'app-charlas',
  templateUrl: './charlas.page.html',
  styleUrls: ['./charlas.page.scss'],
  standalone: false
})
export class CharlasPage implements OnInit {
  charlas: Charla[] = [];
  constructor(private charlasService:CharlasService , private router:Router) {}

  ngOnInit() {
    //this.charlas = this.charlasService.obtenerCharlas();
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
