import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';

// app-routing.module.ts
const routes: Routes = [
  // Rutas SIN layout (como inicio-sesion)
  

  // Rutas CON layout (sidebars + header condicional)
  {
    path: '',
    component: AppLayoutComponent,
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
      { path: 'crear-charla', loadChildren: () => import('./pages/crear-charla/crear-charla.module').then(m => m.CrearCharlaPageModule) },
      { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule) }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
