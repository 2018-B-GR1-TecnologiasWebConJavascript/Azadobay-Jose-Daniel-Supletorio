import { Component, OnInit } from '@angular/core';
import { MedicamentoRestService } from 'src/app/Servicios/REST/medicamento-rest.service';
import { EventoRestService } from 'src/app/Servicios/REST/evento-rest-service';
import { ActivatedRoute } from '@angular/router';
import { Evento } from 'src/app/Interfaces/Evento';

@Component({
  selector: 'app-public-event',
  templateUrl: './public-event.component.html',
  styleUrls: ['./public-event.component.css']
})
export class PublicEventComponent implements OnInit {


  medicamentos: any = [];

  evento: Evento;

  constructor(private readonly _mediRS: MedicamentoRestService,
              private readonly eventoRestService: EventoRestService,
              private readonly activatedRoute: ActivatedRoute) {
  }


  ngOnInit() {


    this.getEventoId();
    this.getMedicamentos();

  }

  getMedicamentos() {

    this._mediRS.buscarTodo().subscribe(
      res => {
        this.medicamentos = res
        console.log(res);
      },
      err => console.log(err)
    )
  }

  getEventoId() {
    const objeto$ = this.activatedRoute.params;

    objeto$.subscribe(
      (parametros) =>
      {
        const objetoP$ = this.eventoRestService.eventoPorId(parametros.idEvento);

        objetoP$.subscribe(
          (respuesta) => {

            this.evento = respuesta
          })
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
