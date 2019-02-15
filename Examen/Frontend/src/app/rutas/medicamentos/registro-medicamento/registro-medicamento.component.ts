import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/Interfaces/Medicamento';
import { MedicamentoRestService } from 'src/app/Servicios/REST/medicamento-rest.service';

@Component({
  selector: 'app-registro-medicamento',
  templateUrl: './registro-medicamento.component.html',
  styleUrls: ['./registro-medicamento.component.css']
})
export class RegistroMedicamentoComponent implements OnInit {

  medicamento: Medicamento = {
  nombre:'',
  gramosAIngerir:null,
  composicion: '',
  usadoPara: '',
  fechaCaducidad: '',
  numeroPastillas: null,
  }
  constructor(private medicamentoRestService:MedicamentoRestService) { }

  ngOnInit() {
  }
  crearMedicamento() {

    console.log(this.medicamento);

    const crearUsuario$ = this.medicamentoRestService.crear(this.medicamento);

    crearUsuario$
      .subscribe((respuesta: Medicamento) => {
        alert(`Medicamento Creado:  ${respuesta.nombre}`);
        },
        (error) => {
        console.log('Error',error);
        });

  }
}
