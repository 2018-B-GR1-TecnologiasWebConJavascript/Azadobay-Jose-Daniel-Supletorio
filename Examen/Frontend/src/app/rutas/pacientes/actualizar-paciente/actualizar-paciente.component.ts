import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Paciente} from "../../../Interfaces/Paciente";
import {PacienteRestService} from "../../../Servicios/REST/paciente-rest.service";

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  paciente: Paciente;

  constructor(private readonly _activateRoute: ActivatedRoute,
              private readonly pacienteRestService: PacienteRestService) { }

  ngOnInit() {
    this.getPaciente();
  }

  getPaciente(){
    const objeto$ = this._activateRoute.params;


    objeto$
      .subscribe(
        (parametros) => {
          const usuario$ = this.pacienteRestService.pacientePorId(parametros.id);

          usuario$
            .subscribe(
              (user: Paciente) => {
                console.log(user);
                this.paciente = user;
              },
              (error) => {
                console.log(error);
              }
            );
        }
      );
  }

  actualizarPaciente(pacienteActualizado) {

    alert('te envio esto');
    console.log(pacienteActualizado);
    //this.paciente.seguroSocial=true;
    pacienteActualizado.id = this.paciente.id;

    const objeto$ = this.pacienteRestService.actualizar(pacienteActualizado);

    objeto$
      .subscribe(
        (user: Paciente) => {

          //this._route.navigate(url);
          console.log(user);
        }
        , (error) => {
          console.log(error);
          alert("editado exitosamente");
        });
  }

}
