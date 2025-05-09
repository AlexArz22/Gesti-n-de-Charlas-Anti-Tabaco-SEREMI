import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registrar-charla-nueva',
  templateUrl: './registrar-charla-nueva.page.html',
  styleUrls: ['./registrar-charla-nueva.page.scss'],
  standalone:false
})
export class RegistrarCharlaNuevaPage implements OnInit {
  fechaCharla: string = '';
  colegio: string = '';
  region: string = '';
  comuna: string = '';
  curso: string = '';
  temario: string = '';

  origen: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}
  
  guardarCambios() {
    this.router.navigate(['/charla-especifica']);
  }

  agregarActividades() {
    this.router.navigate(['/anadir-actividad-a-charla'], {
      queryParams: { origen: 'registrar' }
    });
  }
  
  agregarContenido() {
    this.router.navigate(['/anadir-archivo-a-charla'], {
      queryParams: { origen: 'registrar' }
    });
  }
  

  asignarOradores() {
    this.router.navigate(['/anadir-orador']);
  }

  volver(): void {
    if (this.origen === 'registrar') {
      this.router.navigate(['/registrar-charla-nueva']);
    } else {
      this.router.navigate(['/editar-charla-especifica']);
    }
  }
  

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.origen = params.get('origen');
    });
  }
  

}
