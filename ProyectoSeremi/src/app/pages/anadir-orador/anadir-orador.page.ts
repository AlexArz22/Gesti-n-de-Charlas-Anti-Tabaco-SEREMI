import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-anadir-orador',
  templateUrl: './anadir-orador.page.html',
  styleUrls: ['./anadir-orador.page.scss'],
  standalone:false
})
export class AnadirOradorPage implements OnInit {
  rutValue: string = '';

  constructor(private location: Location) { }

  onAgregar() {
    console.log('RUT agregado:', this.rutValue);
  }

  volver(): void {
    this.location.back();
  }

  ngOnInit() {
  }

}
