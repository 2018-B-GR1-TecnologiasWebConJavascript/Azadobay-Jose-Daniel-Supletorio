import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Interfaces/Paciente';
import { PacienteRestService } from 'src/app/Servicios/REST/paciente-rest.service';

@Component({
  selector: 'app-registro-paciente',
  templateUrl: './registro-paciente.component.html',
  styleUrls: ['./registro-paciente.component.css']
})
export class RegistroPacienteComponent implements OnInit {
   
  

  paciente: Paciente = {
    nombres: '',
    apellidos : '',
    fechaNacimiento : '',
    numeroHijos:null,
    seguroSocial:true,
  };


  constructor(private pacienteRestService:PacienteRestService) { }

  ngOnInit() {
  }

  crearPaciente() {
    const crearUsuario$ = this.pacienteRestService.addPaciente(this.paciente);

    console.log(this.paciente);
    crearUsuario$
      .subscribe((respuesta: Paciente) => {
        alert(`Paciente Creado:  ${respuesta.nombres}`);
        },
        (error) => {
        console.log('Error',error);
        });

  }


}
