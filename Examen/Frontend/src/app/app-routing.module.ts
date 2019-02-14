import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NoEncontradoComponent} from './rutas/no-encontrado/no-encontrado.component';
import {RutaHomeComponent} from "./rutas/ruta-home/ruta-home.component";
import {RutaGestionUsuariosComponent} from "./rutas/usuarios/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaGestionMedicamentosComponent} from "./rutas/medicamentos/ruta-gestion-medicamentos/ruta-gestion-medicamentos.component";
import {RutaGestionPacientesComponent} from "./rutas/pacientes/ruta-gestion-pacientes/ruta-gestion-pacientes.component";
import {RutaGestioEventosComponent} from "./rutas/eventos/ruta-gestion-eventos/ruta-gestio-eventos.component";
import {RegistroUsuarioComponent} from "./rutas/usuarios/registro-usuario/registro-usuario.component";
import {ActualizarUsuarioComponent} from "./rutas/usuarios/actualizar-usuario/actualizar-usuario.component";
import {RutaAdministrarRolesComponent} from "./rutas/usuarios/ruta-administrar-roles/ruta-administrar-roles.component";
import {BuscarFacturasComponent} from "./rutas/facturas/buscar-facturas/buscar-facturas.component";
import {GestionFacturasComponent} from "./rutas/facturas/gestion-facturas/gestion-facturas.component";
import {RutaLoginComponent} from "./rutas/usuarios/ruta-login/ruta-login.component";
import {EventosMedicamentosComponent} from "./rutas/medicamentos/eventos-medicamentos/eventos-medicamentos.component";


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
        path: 'crear-usuario',
        component: RegistroUsuarioComponent
      },
      {
        path: 'actualizar-usuario/:idUsuario',
        component: ActualizarUsuarioComponent
      },
      {
        path: 'gestion-roles/:idUsuario',
        component: RutaAdministrarRolesComponent
      },
      {
        path: 'listaFacturas',
        component: BuscarFacturasComponent
      },
      {
        path: 'gFacturas',
        component: GestionFacturasComponent
      },
      {
        path: 'eMedicamento/:idEvento',
        component: EventosMedicamentosComponent
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
