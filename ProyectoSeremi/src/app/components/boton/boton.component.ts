import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  standalone: false
})
export class BotonComponent  implements OnInit {
  @Output() clicked = new EventEmitter <string> ();
  constructor() { }

  ngOnInit() {}

  notifyParent() {
    this.clicked.emit('El boton fue presionado');
  }

}
