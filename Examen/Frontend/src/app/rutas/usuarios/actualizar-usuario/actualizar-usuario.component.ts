import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {Usuario} from "../../../Interfaces/Usuarios";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})


export class ActualizarUsuarioComponent implements OnInit {

  usuarioActualizar: Usuario;

  constructor(
    private readonly _activateRoute: ActivatedRoute,
    private readonly _userRS: UsuarioRestService,
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
          const usuario$ = this._userRS
            .usuarioPorId(parametros.idUsuario);

          usuario$
            .subscribe(
              (user: Usuario) => {
                console.log(user);
                this.usuarioActualizar = user;
              },
              (error) => {
                console.log(error);
              }
            );
        }
      );
  }

  actualizarUsuario(formulario: NgForm) {

    const objeto$ = this._userRS
      .actualizar(this.usuarioActualizar);

    objeto$
      .subscribe(
        (user: Usuario) => {

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
