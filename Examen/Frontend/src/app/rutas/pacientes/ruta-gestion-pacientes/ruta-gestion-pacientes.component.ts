import {Component, OnInit} from '@angular/core';
import {Paciente} from "../../../Interfaces/Paciente";
import {PacienteRestService} from "../../../Servicios/REST/paciente-rest.service";


@Component({
  selector: 'app-ruta-gestion-pacientes',
  templateUrl: './ruta-gestion-pacientes.component.html',
  styleUrls: ['./ruta-gestion-pacientes.component.css']
})

export class RutaGestionPacientesComponent implements OnInit {


  pacientes: Paciente[];
  pacienteBuscar;

  constructor(
    private readonly _pacienteRS: PacienteRestService
  ) {
  }

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
      );
  }

  eliminar(idPaciente) {
    const objetoEliminado$ = this._pacienteRS.delete(idPaciente);

    objetoEliminado$
      .subscribe(
        (objetoEliminado: Paciente) => {
          console.log('Se elimino:', objetoEliminado);
          alert('Se elimino al paciente' + objetoEliminado.nombres);

          const indice = this.pacientes
            .findIndex(r => r.id === idPaciente.id);

          this.pacientes.splice(indice, 1);
          //this.buscarTodos();

        },
        (error) => {
          console.error('Error', error);
        }
      );
  }


  buscarPaciente() {

    console.log(this.pacienteBuscar);

    if (this.pacienteBuscar === undefined) {

      const paciente$ = this._pacienteRS.buscarTodo();

      paciente$
        .subscribe(
          (paciente: Paciente[]) => {
            console.log(paciente);
            this.pacientes = paciente;

          }, (error) => {
            console.error('Error', error);
          }
        );


    } else {
      const objeto$ = this._pacienteRS.pacientePorApellido(this.pacienteBuscar);

      objeto$
        .subscribe(
          (paciente: Paciente[]) => {
            console.log(paciente);
            this.pacientes = paciente;
            if (this.pacientes.length === 0) {
              alert('No se encontraron Pacientes');

            }
          }, (error) => {
            console.error('Error', error);
          }
        );
    }


  }
}
