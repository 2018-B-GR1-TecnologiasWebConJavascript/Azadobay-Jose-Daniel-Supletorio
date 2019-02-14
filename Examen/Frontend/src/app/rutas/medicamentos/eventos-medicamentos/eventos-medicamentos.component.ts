import {Component, OnInit} from '@angular/core';
import {Evento_medicamento} from "../../../Interfaces/Evento_Medicamento";
import {MedicamentoRestService} from "../../../Servicios/REST/medicamento-rest.service";
import {ActivatedRoute} from "@angular/router";
import {Evento} from "../../../Interfaces/Evento";
import {EventoRestService} from "../../../Servicios/REST/evento-rest-service";

@Component({
  selector: 'app-eventos-medicamentos',
  templateUrl: './eventos-medicamentos.component.html',
  styleUrls: ['./eventos-medicamentos.component.css']
})

export class EventosMedicamentosComponent implements OnInit {


  medicamentos: any = [];

  evento_medicamento: Evento_medicamento = {
    idEvento: '',
    idMedicamento: ''
  };

  evento: Evento;

  //evento ={nombre:null,fecha:null,latitud:null,longitud:null};

  constructor(private readonly _mediRS: MedicamentoRestService,
              private readonly eventoRestService: EventoRestService,
              private readonly activatedRoute: ActivatedRoute) {
  }

  idEvent: null;

  ngOnInit() {


    this.getEventoId();
    this.getMedicamentos();

  }

  agregarMedicamento(id) {

    this.evento_medicamento.idEvento = this.evento.id
    this.evento_medicamento.idMedicamento = id


    this.eventoRestService.agregarMedicamento(this.evento_medicamento)
      .subscribe(
        res => {
          console.log(res);
          this.getEventoId();
        },
        err => console.error(err)
      )
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
    objeto$
      .subscribe(
        (parametros) => {
          const objetoP$ = this.eventoRestService
            .eventoPorId(parametros.idEvento);
          objetoP$
            .subscribe(
              (respuesta) => {
                this.evento = respuesta
                console.log(this.evento);
              })
        }, () => {
        }
      )
  }

}

