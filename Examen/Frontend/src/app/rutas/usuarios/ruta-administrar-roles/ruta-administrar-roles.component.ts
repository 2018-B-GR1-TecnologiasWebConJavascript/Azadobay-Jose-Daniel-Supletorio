import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {Usuario} from "../../../Interfaces/Usuarios";
import {Rol} from "../../../Interfaces/Rol";

@Component({
  selector: 'app-ruta-administrar-roles',
  templateUrl: './ruta-administrar-roles.component.html',
  styleUrls: ['./ruta-administrar-roles.component.css']
})
export class RutaAdministrarRolesComponent implements OnInit {

  usuarioActualizar: Usuario;
  roles: Rol[];
  opcionRol='';

  constructor(
    private readonly _activateRoute: ActivatedRoute,
    private readonly _userRS: UsuarioRestService,
    private readonly _route: Router
  ) {
  }

  ngOnInit() {

    this.getusuario();
    this.getRoles()
  }

  getusuario() {
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

  getRoles(){
    const objeto$ = this._userRS.getRoles();

    objeto$
      .subscribe(
        (respuesta: Rol[]) => {
          console.log(respuesta);
          this.roles = respuesta;
        }, (error) => {
          console.error('Error', error);
        }
      );
  }

  agregarRol(id){

    alert(id)
    this.validarRol(id);
  }


  validarRol(idHtml){


    //alert(id);

    console.log(this.usuarioActualizar.roles)
    const encontrado = this.usuarioActualizar.roles.id.indexOf(idHtml);

       alert(encontrado);

  }


}
