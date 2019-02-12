import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaLoginComponent } from './rutas/ruta-login/ruta-login.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import { RutaGestionUsuariosComponent } from './rutas/ruta-gestion-usuarios/ruta-gestion-usuarios.component';
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
import { RutaAdministrarRolesComponent } from './rutas/ruta-administrar-roles/ruta-administrar-roles.component';

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
    RutaAdministrarRolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule

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
