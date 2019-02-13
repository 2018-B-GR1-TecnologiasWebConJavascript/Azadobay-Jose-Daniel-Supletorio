import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoEncontradoComponent} from './rutas/no-encontrado/no-encontrado.component';
import {RutaLoginComponent} from "./rutas/usuarios/ruta-login/ruta-login.component";
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaGestionUsuariosComponent} from "./rutas/usuarios/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionPacientesComponent} from "./rutas/ruta-gestion-pacientes/ruta-gestion-pacientes.component";
import {RutaGestionMedicamentosComponent} from "./rutas/ruta-gestion-medicamentos/ruta-gestion-medicamentos.component";
import {RutaGestioEventosComponent} from "./rutas/ruta-gestion-eventos/ruta-gestio-eventos.component";
import {RegistroUsuarioComponent} from "./rutas/usuarios/registro-usuario/registro-usuario.component";


const routes: Routes = [


  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ruta-home'
  },
  {
    path: 'home',
    component: RutaHomeComponent,
    children: [
      {
        path: 'gUsuarios',
        component: RutaGestionUsuariosComponent
      },
      {
        path: 'gPacientes',
        component: RutaGestionPacientesComponent
      },
      {
        path: 'gMedicamentos',
        component: RutaGestionMedicamentosComponent
      },
      {
        path: 'gEventos',
        component: RutaGestioEventosComponent
      },
      {
        path: 'crearUsuario',
        component: RegistroUsuarioComponent
      },
    ]
  },
  {
    path: 'login',
    component: RutaLoginComponent
  },
  {
    path: 'no-encontrado',
    component: NoEncontradoComponent
  },
  {
    path: '**',
    redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
