import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [

  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', redirectTo: 'inicio-sesion', pathMatch: 'full' },
      { path: 'inicio-sesion', loadChildren: () => import('./pages/inicio-sesion/inicio-sesion.module').then(m => m.InicioSesionPageModule) },
      { path: 'registro', loadChildren: () => import('./pages/registro/registro.module').then(m => m.RegistroPageModule) },
      { path: 'restablecer-contra', loadChildren: () => import('./pages/restablecer-contra/restablecer-contra.module').then(m => m.RestablecerContraPageModule) },
      
      { path: 'charlas', loadChildren: () => import('./pages/charlas/charlas.module').then(m => m.CharlasPageModule) },
      { path: 'calendario', loadChildren: () => import('./pages/calendario/calendario.module').then(m => m.CalendarioPageModule) },
      { path: 'principal', loadChildren: () => import('./pages/principal/principal.module').then(m => m.PrincipalPageModule) },
      { path: 'actividades', loadChildren: () => import('./pages/actividades/actividades.module').then(m => m.ActividadesPageModule) },
      
      { path: 'charla-especifica/:id', loadChildren: () => import('./pages/charla-especifica/charla-especifica.module').then(m => m.CharlaEspecificaPageModule) },
      {
        path: 'crear-actividad',
        loadChildren: () => import('./pages/crear-actividad/crear-actividad.module').then( m => m.CrearActividadPageModule)
      }
    ]
  },
  {
    path: 'ver-perfil',
    loadChildren: () => import('./pages/ver-perfil/ver-perfil.module').then( m => m.VerPerfilPageModule)
  },
  {
    path: 'editar-perfil',
    loadChildren: () => import('./pages/editar-perfil/editar-perfil.module').then( m => m.EditarPerfilPageModule)
  },
  {
    path: 'actividad-especifica',
    loadChildren: () => import('./pages/actividad-especifica/actividad-especifica.module').then( m => m.ActividadEspecificaPageModule)
  },
  {
    path: 'charla-especifica',
    loadChildren: () => import('./pages/charla-especifica/charla-especifica.module').then( m => m.CharlaEspecificaPageModule)
  },
  {
    path: 'anadir-orador',
    loadChildren: () => import('./pages/anadir-orador/anadir-orador.module').then( m => m.AnadirOradorPageModule)
  },
  {
    path: 'creando-actividad',
    loadChildren: () => import('./pages/creando-actividad/creando-actividad.module').then( m => m.CreandoActividadPageModule)
  },
  {
    path: 'editando-actividad',
    loadChildren: () => import('./pages/editando-actividad/editando-actividad.module').then( m => m.EditandoActividadPageModule)
  },
  {
    path: 'actividad-iniciada',
    loadChildren: () => import('./pages/actividad-iniciada/actividad-iniciada.module').then( m => m.ActividadIniciadaPageModule)
  },
  {
    path: 'seleccionar-archivo',
    loadChildren: () => import('./pages/seleccionar-archivo/seleccionar-archivo.module').then( m => m.SeleccionarArchivoPageModule)
  },
  {
    path: 'registrar-asistentes',
    loadChildren: () => import('./pages/registrar-asistentes/registrar-asistentes.module').then( m => m.RegistrarAsistentesPageModule)
  },
  {
    path: 'seleccionar-actividad',
    loadChildren: () => import('./pages/seleccionar-actividad/seleccionar-actividad.module').then( m => m.SeleccionarActividadPageModule)
  },
  {
    path: 'editar-charla-especifica',
    loadChildren: () => import('./pages/editar-charla-especifica/editar-charla-especifica.module').then( m => m.EditarCharlaEspecificaPageModule)
  },
  {
    path: 'anadir-actividad-a-charla',
    loadChildren: () => import('./pages/anadir-actividad-a-charla/anadir-actividad-a-charla.module').then( m => m.AnadirActividadACharlaPageModule)
  },
  {
    path: 'anadir-archivo-a-charla',
    loadChildren: () => import('./pages/anadir-actividad-a-charla/anadir-actividad-a-charla.module').then( m => m.AnadirActividadACharlaPageModule)
  },
  {
    path: 'registrar-charla-nueva',
    loadChildren: () => import('./pages/registrar-charla-nueva/registrar-charla-nueva.module').then( m => m.RegistrarCharlaNuevaPageModule)
  }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
