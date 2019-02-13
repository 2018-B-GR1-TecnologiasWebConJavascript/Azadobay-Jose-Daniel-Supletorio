import { Component, OnInit } from '@angular/core';
import {Medicamento} from "../../../Interfaces/Medicamento";
import {MedicamentoRestService} from "../../../Servicios/REST/medicamento-rest.service";

@Component({
  selector: 'app-ruta-gestion-medicamentos',
  templateUrl: './ruta-gestion-medicamentos.component.html',
  styleUrls: ['./ruta-gestion-medicamentos.component.css']
})
export class RutaGestionMedicamentosComponent implements OnInit {


  medicamentos: Medicamento[];

  constructor(
    private readonly _mediRS: MedicamentoRestService
  ) { }

  ngOnInit() {

    const objeto$ = this._mediRS.buscarTodo();

    objeto$
      .subscribe(
        (respuesta: Medicamento[]) => {
          console.log(respuesta);
          this.medicamentos = respuesta;
        }, (error) => {
          console.error('Error', error);
        }
      )


  }

}

