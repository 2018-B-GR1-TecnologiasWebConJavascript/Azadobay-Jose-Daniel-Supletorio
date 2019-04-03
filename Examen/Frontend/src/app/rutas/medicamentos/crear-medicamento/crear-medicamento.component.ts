import { Component, OnInit } from '@angular/core';
import {MedicamentoRestService} from "../../../Servicios/REST/medicamento-rest.service";
import {Medicamento} from "../../../Interfaces/Medicamento";

@Component({
  selector: 'app-crear-medicamento',
  templateUrl: './crear-medicamento.component.html',
  styleUrls: ['./crear-medicamento.component.css']
})
export class CrearMedicamentoComponent implements OnInit {

  constructor(private medicamentoRestService:MedicamentoRestService) { }

  ngOnInit() {
  }


  crearMedicamento(medicamento:Medicamento) {

    console.log(medicamento);

    const crearUsuario$ = this.medicamentoRestService.crear(medicamento);

    crearUsuario$
      .subscribe((respuesta: Medicamento) => {
          alert(`Medicamento Creado:  ${respuesta.nombre}`);
        },
        (error) => {
          console.log('Error',error);
        });

  }
}
