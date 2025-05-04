import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Charla } from 'src/app/models/charla';
import { CharlasService } from 'src/app/services/charlas.service';

@Component({
  selector: 'app-crear-charla',
  templateUrl: './crear-charla.page.html',
  styleUrls: ['./crear-charla.page.scss'],
  standalone: false
})
export class CrearCharlaPage implements OnInit {

  constructor(private charlasService: CharlasService, private router: Router) { }


  guardarCharla(charla: Charla) {
    //this.charlasService.agregarCharla(charla);
    this.router.navigate(['/charlas']);
  }

  ngOnInit() {
  }

}
