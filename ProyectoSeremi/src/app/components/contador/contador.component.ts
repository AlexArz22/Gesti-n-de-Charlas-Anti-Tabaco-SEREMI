import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss'],
  standalone:false
})

export class ContadorComponent  implements OnInit, OnDestroy {

  constructor() { }

  contador = 0;
  intervaloId: any;

  ngOnInit(): void {
    console.log('✅ ngOnInit: ContadorComponent creado');

    this.intervaloId = setInterval(() => {
      this.contador++;
      console.log('Contador:', this.contador);
    },1000);
  }

  ngOnDestroy(): void {
    console.log('❌ ngOnDestroy: ContadorComponent destruido');

    if(this.intervaloId){
      clearInterval(this.intervaloId);
      console.log('⛔ Intervalo detenido');
    }
  }

}
