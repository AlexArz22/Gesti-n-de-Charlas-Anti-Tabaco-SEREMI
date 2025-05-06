import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  standalone: false
})
export class CalendarioPage implements OnInit {

  constructor(private router: Router) { }

  BackButton() {
    this.router.navigate(['/principal']);
  }

  ngOnInit() {
  }

}
