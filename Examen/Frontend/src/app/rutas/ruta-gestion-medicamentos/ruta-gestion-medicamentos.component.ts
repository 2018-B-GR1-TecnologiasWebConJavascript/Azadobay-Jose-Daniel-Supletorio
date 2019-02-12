import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../Interfaces/Paciente";
import {PacienteRestService} from "../../Servicios/REST/paciente-rest.service";
import {Usuario} from "../../Interfaces/Usuarios";
import {UsuarioRestService} from "../../Servicios/REST/usuario-rest.service";
import {MedicamentoRestService} from "../../Servicios/REST/medicamento-rest.service";
import {Medicamento} from "../../Interfaces/Medicamento";

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

