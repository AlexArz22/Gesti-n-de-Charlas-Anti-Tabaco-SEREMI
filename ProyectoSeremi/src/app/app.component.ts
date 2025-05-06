import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
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
