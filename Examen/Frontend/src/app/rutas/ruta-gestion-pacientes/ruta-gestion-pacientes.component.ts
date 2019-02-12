import { Component, OnInit } from '@angular/core';
import {PacienteRestService} from "../../Servicios/REST/paciente-rest.service";
import {Paciente} from "../../Interfaces/Paciente";

@Component({
  selector: 'app-ruta-gestion-pacientes',
  templateUrl: './ruta-gestion-pacientes.component.html',
  styleUrls: ['./ruta-gestion-pacientes.component.css']
})

export class RutaGestionPacientesComponent implements OnInit {


  pacientes: Paciente[];

  constructor(
    private readonly _pacienteRS: PacienteRestService
  ) { }

  ngOnInit() {

    const paciente$ = this._pacienteRS.buscarTodo();

    paciente$
      .subscribe(
        (paciente: Paciente[]) => {
          console.log(paciente);
          this.pacientes = paciente;
        }, (error) => {
          console.error('Error', error);
        }
      )


  }

}
