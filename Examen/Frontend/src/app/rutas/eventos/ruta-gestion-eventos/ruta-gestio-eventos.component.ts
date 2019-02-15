import { Component, OnInit } from '@angular/core';
import {EventoRestService} from "../../../Servicios/REST/evento-rest-service";
import {Evento} from "../../../Interfaces/Evento";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {AuthServiceService} from "../../../Servicios/REST/auth-service.service";
import {Usuario} from "../../../Interfaces/Usuarios";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-ruta-gestio-eventos',
  templateUrl: './ruta-gestio-eventos.component.html',
  styleUrls: ['./ruta-gestio-eventos.component.css']
})
export class RutaGestioEventosComponent implements OnInit {

  usuarioActualizar: Usuario;
  roles;


  eventos: Evento[];

  constructor(
    private readonly _eventoRS: EventoRestService,
    private readonly _userRS: UsuarioRestService,
    public readonly _autenticacionRS: AuthServiceService
  ) { }

  ngOnInit() {

    const objeto$ = this._eventoRS.buscarTodo();

    objeto$
      .subscribe(
        (respuesta: Evento[]) => {
          console.log(respuesta);
          this.eventos = respuesta;
        }, (error) => {
          console.error('Error', error);
        }
      );


    const usuario$ = this._userRS.usuarioPorId(environment.usuarioLogeado);

    usuario$.subscribe(
      (user: Usuario) =>
      {
        this.usuarioActualizar = user;
        this.roles = user.roles;
      },
      (error) =>
      {
        console.log(error);
      }
    );


  }

}
