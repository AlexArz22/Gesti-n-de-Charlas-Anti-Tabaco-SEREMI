// app-layout.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
  standalone: false
})
export class AppLayoutComponent implements OnInit {
  showHeader: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      // Controla la visibilidad del header basado en la ruta activa
      const currentRoute = this.router.url;
      this.showHeader = !(
        currentRoute === '/inicio-sesion' ||
        currentRoute === '/registro' ||
        currentRoute === '/restablecer-contra'
      );
    });
  }
}
