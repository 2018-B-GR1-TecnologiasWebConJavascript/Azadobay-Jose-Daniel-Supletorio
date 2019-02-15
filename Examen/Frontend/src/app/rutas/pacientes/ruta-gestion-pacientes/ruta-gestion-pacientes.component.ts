import { Component, OnInit } from '@angular/core';
import {Paciente} from "../../../Interfaces/Paciente";
import {PacienteRestService} from "../../../Servicios/REST/paciente-rest.service";



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

  eliminar(usuario: Paciente) {
    const objetoEliminado$ = this._pacienteRS.delete(usuario.id);

    objetoEliminado$
      .subscribe(
        (objetoEliminado: Paciente) => {
          console.log('Se elimino:', objetoEliminado);

          const indice = this.pacientes
            .findIndex(r => r.id === usuario.id);

          this.pacientes.splice(indice, 1);
          //this.buscarTodos();

        },
        (error) => {
          console.error('Error', error);
        }
      );
  }



}
