import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Charla } from 'src/app/models/charla';

@Component({
  selector: 'app-formulario-charla',
  templateUrl: './formulario-charla.component.html',
  styleUrls: ['./formulario-charla.component.scss'],
  standalone: false
})
export class FormularioCharlaComponent  implements OnInit {

  @Input() charla?: Charla; //Desde componente padre recibe una charla existente, esto cuando se edita o ve.
  @Input() modo: 'crear' | 'editar' | 'ver' = 'crear'; //Puede estar en modo crear y editar, pero por default será crear.

  @Output() onGuardar = new EventEmitter<Charla>(); //Envía a componente padre el objeto charla al momento de crear o actualizar.

  formulario!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.formulario = this.fb.group({
      fecha: [this.charla?.fecha || '', Validators.required],
      establecimiento: [this.charla?.establecimiento || '', Validators.required],
      region: [this.charla?.region || '', Validators.required],
      comuna: [this.charla?.comuna || '', Validators.required],
      curso: [this.charla?.curso || '', Validators.required],
      asistenciaTotal: [{value : this.charla?.asistenciaTotal ?? 0, disabled: this.modo === 'crear'}, Validators.required],
      asistenciaHombres: [{value : this.charla?.asistenciaHombres ?? 0, disabled: this.modo === 'crear'}, Validators.required],
      asistenciaMujeres: [{value : this.charla?.asistenciaMujeres ?? 0, disabled: this.modo === 'crear'}, Validators.required],
      temario: [this.charla?.temario || [], Validators.required],
    })
    
    if (this.modo === 'ver') {
      this.formulario.disable();
    }
  }

  guardar() {
    if(this.formulario.valid) {
      this.onGuardar.emit(this.formulario.getRawValue());
    }
  }

}
