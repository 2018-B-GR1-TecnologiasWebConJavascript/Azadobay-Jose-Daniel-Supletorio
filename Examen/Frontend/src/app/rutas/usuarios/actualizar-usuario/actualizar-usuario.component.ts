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

  usuarioActualizar: Usuario = {
  nombre:'',
    correo:'',
    password:'',
    fechaNacimiento:''

  };

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
                this.usuarioActualizar.id =user.id;
                this.usuarioActualizar.nombre = user.nombre;
                this.usuarioActualizar.password = user.password;
                this.usuarioActualizar.correo = user.correo;
                this.usuarioActualizar.fechaNacimiento = user.fechaNacimiento;
                console.log(this.usuarioActualizar);
              },
              (error) => {
                console.log(error);
              }
            );
        }
      );
  }

  actualizarUsuario(formulario: NgForm) {

    const objeto$ = this._userRS.actualizar(this.usuarioActualizar);

    objeto$
      .subscribe(
        (user: Usuario) => {


          alert('Usuario '+ user.nombre +' Actualizado ')
          console.log(user);

          const url = [
            '/home',
            'gUsuarios'
          ];

          this._route.navigate(url);

        }
        , (error) => {
            console.log(error);
        });
  }

}
