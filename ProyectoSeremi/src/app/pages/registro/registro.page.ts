import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/services/autorizacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {
  
  formularioRegistro!: FormGroup

  constructor(private fb: FormBuilder, //Para crear formularios mas sencillo.
    private authService: AutorizacionService, //Inyecta servicio para manejar autenticación.
    private router: Router, //Para gestionar navegación entre páginas.
    ) {} //Para mostrar notificaciones por pantalla.
     

  ngOnInit() {
    /*this.formularioRegistro = this.fb.group({ //se usa FormBuilder para crear un formulario.
    rut: ['', Validators.required], // Se inicializa vacío y se aplica validación para que exiga que no esté vacío.
    correo: ['', [Validators.required, Validators.email]], // Debe tener un campo de correo valido.
    contraseña: ['', [Validators.required, Validators.minLength(8)]], //Mínimo de 8 caracteres.
    rol:['usuario', Validators.required],
    region: ['', Validators.required],
    comuna: ['', Validators.required],
    direccion: ['', Validators.required],
    });*/
  }

  registrarse() {
    /*
    if (this.formularioRegistro.invalid) {
      return; // Si es inválido, retorna para que no se ejecute el registro.
    }

    const nuevoUsuario = this.formularioRegistro.value; //Toma los valores del formulario y los ingresa al usuario.

    const exito = this.authService.registrar(nuevoUsuario); //Se manda al servicio de autenticación.

    if(exito){
      this.router.navigate(['/inicio-sesion']);
    } else{
      console.log('Error: El usuario no pudo ser registrado')
    }*/
  }

  irAInicioSesion() {
    this.router.navigate(['/inicio-sesion']);
  }


}
