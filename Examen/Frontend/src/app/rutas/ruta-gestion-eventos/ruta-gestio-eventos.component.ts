import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Interfaces/Paciente";
import {PacienteRestService} from "../../Servicios/REST/paciente-rest.service";
import {Usuario} from "../../Interfaces/Usuarios";
import {UsuarioRestService} from "../../Servicios/REST/usuario-rest.service";
import {Evento} from "../../Interfaces/Evento";
import {EventoRestService} from "../../Servicios/REST/evento-rest-service";

@Component({
  selector: 'app-ruta-gestio-eventos',
  templateUrl: './ruta-gestio-eventos.component.html',
  styleUrls: ['./ruta-gestio-eventos.component.css']
})
export class RutaGestioEventosComponent implements OnInit {


  eventos: Evento[];

  constructor(
    private readonly _eventoRS: EventoRestService
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
      )


  }

}
