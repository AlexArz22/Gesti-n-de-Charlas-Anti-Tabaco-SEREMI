import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutorizacionService } from 'src/app/services/autorizacion.service';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.page.html',
  styleUrls: ['./inicio-sesion.page.scss'],
  standalone: false
})
export class InicioSesionPage implements OnInit {

  formularioInicio!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AutorizacionService,
    private router: Router
  ) {}

  ngOnInit() {
    /*this.formularioInicio = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', [Validators.required, Validators.minLength(8)]],
    });*/
  }

  iniciarSesion() {
    /*if (this.formularioInicio.invalid) { //Si el formulario no es valido desde HTML, no se procede con el inicio.
      return;
    }

    const { correo, contraseña } = this.formularioInicio.value;

    const exito = this.authService.login(correo, contraseña); 

    if (exito) {
      this.router.navigate(['/principal']);
    } else {
      console.log('Correo o contraseña incorrectos');
    }

    */
  }

  irAPrincipal() {
    this.router.navigate(['/principal']);
    }

  irARegistro() {
    this.router.navigate(['/registro']);
    }

  irARecuperarContrasena() {
    this.router.navigate(['/recuperar-contraseña']);
  }
}
