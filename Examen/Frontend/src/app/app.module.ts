import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaGestionPacientesComponent } from './rutas/ruta-gestion-pacientes/ruta-gestion-pacientes.component';
import { RutaGestionMedicamentosComponent } from './rutas/ruta-gestion-medicamentos/ruta-gestion-medicamentos.component';
import { RutaGestioEventosComponent } from './rutas/ruta-gestion-eventos/ruta-gestio-eventos.component';
import { NoEncontradoComponent } from './rutas/no-encontrado/no-encontrado.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {PacienteRestService} from "./Servicios/REST/paciente-rest.service";
import {UsuarioRestService} from "./Servicios/REST/usuario-rest.service";
import {EventoRestService} from "./Servicios/REST/evento-rest-service";
import {MedicamentoRestService} from "./Servicios/REST/medicamento-rest.service";
import {RutaLoginComponent} from "./rutas/usuarios/ruta-login/ruta-login.component";
import {RutaGestionUsuariosComponent} from "./rutas/usuarios/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {RutaAdministrarRolesComponent} from "./rutas/usuarios/ruta-administrar-roles/ruta-administrar-roles.component";
import {FormsModule} from "@angular/forms";
import { RegistroUsuarioComponent } from './rutas/usuarios/registro-usuario/registro-usuario.component';
import { ActualizarUsuarioComponent } from './rutas/usuarios/actualizar-usuario/actualizar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    RutaLoginComponent,
    RutaHomeComponent,
    RutaGestionUsuariosComponent,
    RutaGestionPacientesComponent,
    RutaGestionMedicamentosComponent,
    RutaGestioEventosComponent,
    NoEncontradoComponent,
    RutaAdministrarRolesComponent,
    RegistroUsuarioComponent,
    ActualizarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [
    PacienteRestService,
    UsuarioRestService,
    EventoRestService,
    MedicamentoRestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
