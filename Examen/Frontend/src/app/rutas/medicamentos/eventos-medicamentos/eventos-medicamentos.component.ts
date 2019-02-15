import {Component, OnInit} from '@angular/core';
import {Evento_medicamento} from "../../../Interfaces/Evento_Medicamento";
import {MedicamentoRestService} from "../../../Servicios/REST/medicamento-rest.service";
import {ActivatedRoute} from "@angular/router";
import {Evento} from "../../../Interfaces/Evento";
import {EventoRestService} from "../../../Servicios/REST/evento-rest-service";
import {rolesPorUsuario} from "../../../Interfaces/rolesPorUsuario";

@Component({
  selector: 'app-eventos-medicamentos',
  templateUrl: './eventos-medicamentos.component.html',
  styleUrls: ['./eventos-medicamentos.component.css']
})

export class EventosMedicamentosComponent implements OnInit {


  medicamentos: any = [];

  evento_medicamento: Evento_medicamento = {
    idEvento: '',
    idMedicamento: '',
    precioBase: '' ,
  };

  evento: Evento;

  eventoMedicamentoActualizar: Evento_medicamento;

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

    if (this.validarHijo(parseInt(id)) >= 0) {

      alert('El Evento ya tiene ese hijo');

    } else {

      this.evento_medicamento.idEvento = this.evento.id
      this.evento_medicamento.idMedicamento = id

      this.eventoRestService.agregarMedicamento(this.evento_medicamento)
        .subscribe(
          res => {
            console.log(res);
            this.getEventoId();
            this.evento_medicamento.precioBase ='';
          },
          err => console.error(err)
        )
    }
  }

  validarHijo(idHtml) {

    const encontrado = this.evento.medicamentos.findIndex(ro =>
      ro.id === idHtml);

    return encontrado;

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

  eliminarHijo(hijo) {

    const objeto$ = this._mediRS.buscarEventoMedicamentoPorId(this.evento.id, hijo);

    objeto$
      .subscribe(
        (respuesta: Evento_medicamento) => {
          this.eventoMedicamentoActualizar = respuesta[0];

          const objetoEliminado$ = this._mediRS.deleteRolUsuario(this.eventoMedicamentoActualizar.id);
          objetoEliminado$
            .subscribe((hijoEliminado: Evento_medicamento) => {
                alert('Hijo Eliminado:');
                this.getEventoId();
              },
              (error) => {
                console.log(error);
              });
        },
        (error) => {
          console.log(error);
        }
      );

  }

}

