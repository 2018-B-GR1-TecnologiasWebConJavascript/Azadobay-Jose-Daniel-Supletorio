import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutaHomeComponent } from './rutas/ruta-home/ruta-home.component';
import {RutaLoginComponent} from "./rutas/usuarios/ruta-login/ruta-login.component";
import {RutaGestionUsuariosComponent} from "./rutas/usuarios/ruta-gestion-usuarios/ruta-gestion-usuarios.component";
import {NoEncontradoComponent} from "./rutas/no-encontrado/no-encontrado.component";
import {RutaGestionMedicamentosComponent} from "./rutas/medicamentos/ruta-gestion-medicamentos/ruta-gestion-medicamentos.component";
import {RutaGestioEventosComponent} from "./rutas/eventos/ruta-gestion-eventos/ruta-gestio-eventos.component";
import {RutaGestionPacientesComponent} from "./rutas/pacientes/ruta-gestion-pacientes/ruta-gestion-pacientes.component";
import {RutaAdministrarRolesComponent} from "./rutas/usuarios/ruta-administrar-roles/ruta-administrar-roles.component";
import {RegistroUsuarioComponent} from "./rutas/usuarios/registro-usuario/registro-usuario.component";
import {ActualizarUsuarioComponent} from "./rutas/usuarios/actualizar-usuario/actualizar-usuario.component";
import {GestionFacturasComponent} from "./rutas/facturas/gestion-facturas/gestion-facturas.component";
import {BuscarFacturasComponent} from "./rutas/facturas/buscar-facturas/buscar-facturas.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {PacienteRestService} from "./Servicios/REST/paciente-rest.service";
import {UsuarioRestService} from "./Servicios/REST/usuario-rest.service";
import {EventoRestService} from "./Servicios/REST/evento-rest-service";
import {MedicamentoRestService} from "./Servicios/REST/medicamento-rest.service";
import {EventosMedicamentosComponent} from "./rutas/medicamentos/eventos-medicamentos/eventos-medicamentos.component";
import { RutaPrincipalComponent } from './rutas/ruta-principal/ruta-principal.component';

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
    ActualizarUsuarioComponent,
    GestionFacturasComponent,
    BuscarFacturasComponent,
    EventosMedicamentosComponent,
    RutaPrincipalComponent
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
