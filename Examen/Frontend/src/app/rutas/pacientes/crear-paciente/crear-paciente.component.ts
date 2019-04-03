import { Component, OnInit } from '@angular/core';
import {PacienteRestService} from "../../../Servicios/REST/paciente-rest.service";
import {Paciente} from "../../../Interfaces/Paciente";

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {
/*
  paciente: Paciente = {
    nombres: '',
    apellidos : '',
    fechaNacimiento : '',
    numeroHijos:null,
    seguroSocial:true,
  };
*/

  constructor(private pacienteRestService:PacienteRestService) { }

  ngOnInit() {
  }

  crearPaciente(paciente: Paciente) {


    const crearUsuario$ = this.pacienteRestService.addPaciente(paciente);

    console.log(paciente);
    crearUsuario$
      .subscribe((respuesta: Paciente) => {
          alert(`Paciente Creado:  ${respuesta.nombres}`);
        },
        (error) => {
          console.log('Error',error);
        });

  }

}
