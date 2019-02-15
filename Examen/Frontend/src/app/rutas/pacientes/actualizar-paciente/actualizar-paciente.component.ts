import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Interfaces/Paciente';
import { PacienteRestService } from 'src/app/Servicios/REST/paciente-rest.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-paciente',
  templateUrl: './actualizar-paciente.component.html',
  styleUrls: ['./actualizar-paciente.component.css']
})
export class ActualizarPacienteComponent implements OnInit {

  paciente: Paciente;
  constructor(
    private readonly _activateRoute: ActivatedRoute,
    private readonly pacienteRestService: PacienteRestService,
    private readonly _route: Router
  ) {

  }

  ngOnInit() {
    this.getPaciente();
  }

  getPaciente(){
    const objeto$ = this._activateRoute.params;

    alert(objeto$);
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

  actualizarPaciente(formulario: NgForm) {
    this.paciente.seguroSocial=true;
    const objeto$ = this.pacienteRestService
      .actualizar(this.paciente);

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
