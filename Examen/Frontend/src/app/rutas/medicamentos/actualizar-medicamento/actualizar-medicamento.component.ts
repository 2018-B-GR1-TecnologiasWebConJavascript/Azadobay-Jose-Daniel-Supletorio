import { Component, OnInit } from '@angular/core';
import { Medicamento } from 'src/app/Interfaces/Medicamento';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicamentoRestService } from 'src/app/Servicios/REST/medicamento-rest.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-actualizar-medicamento',
  templateUrl: './actualizar-medicamento.component.html',
  styleUrls: ['./actualizar-medicamento.component.css']
})
export class ActualizarMedicamentoComponent implements OnInit {

  medicamento:Medicamento;

  constructor(
    private readonly _activateRoute: ActivatedRoute,
  private readonly medicamentoRestService:MedicamentoRestService ,
    private readonly _route: Router
  ) {

  }

  ngOnInit() {

    this.getusuario();
  }

  getusuario(){
    const objeto$ = this._activateRoute.params;

    objeto$
      .subscribe(
        (parametros) => {
          const usuario$ = this.medicamentoRestService
            .medicamentoPorId(parametros.idUsuario);

          usuario$
            .subscribe(
              (user: Medicamento) => {
                console.log(user);
                this.medicamento = user;
              },
              (error) => {
                console.log(error);
              }
            );
        }
      );
  }

  actualizarUsuario(formulario: NgForm) {

    const objeto$ = this.medicamentoRestService
      .actualizar(this.medicamento);

    objeto$
      .subscribe(
        (user: Medicamento) => {

          const url = [
            '/home',
            'gUsuarios'
          ];

          this._route.navigate(url);

          console.log(user);
        }
        , (error) => {
            console.log(error);
        });
  }


}
