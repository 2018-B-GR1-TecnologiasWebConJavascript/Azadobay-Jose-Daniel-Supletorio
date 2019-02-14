import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {Usuario} from "../../../Interfaces/Usuarios";
import {Rol} from "../../../Interfaces/Rol";
import {rolesPorUsuario} from "../../../Interfaces/rolesPorUsuario";

@Component({
  selector: 'app-ruta-administrar-roles',
  templateUrl: './ruta-administrar-roles.component.html',
  styleUrls: ['./ruta-administrar-roles.component.css']
})
export class RutaAdministrarRolesComponent implements OnInit {

  usuarioActualizar: Usuario;
  roles: Rol[];

  rolesUsuario: rolesPorUsuario = {
    idUsuario: '',
    rolUsuario: ''
  };

  rolUsuarioActualizar: rolesPorUsuario;


  constructor(
    private readonly _activateRoute: ActivatedRoute,
    private readonly _userRS: UsuarioRestService,
    private readonly _route: Router
  ) {
  }

  ngOnInit() {

    this.getusuario();
    this.getRoles();
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

  getRoles() {
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

  agregarRol(id) {

    if (this.validarRol(parseInt(id)) >= 0) {
      alert('El Usuario ya tiene ese Rol');

    } else {

      this.rolesUsuario.idUsuario = this.usuarioActualizar.id;
      this.rolesUsuario.rolUsuario = id;

      const objeto$ = this._userRS.agregarRol(this.rolesUsuario);

      objeto$
        .subscribe(
          (respuesta: rolesPorUsuario) => {
            console.log(respuesta);
            this.getusuario();
          }, (error) => {
            console.error('Error', error);
          }
        );


    }
  }

  validarRol(idHtml) {

    console.log(typeof (idHtml))
    const encontrado = this.usuarioActualizar.roles.findIndex(ro =>
      ro.id === idHtml);

    return encontrado;

  }

  eliminarRolUsuario(rol) {

    const objeto$ = this._userRS.buscarRolUsuarioPorId(this.usuarioActualizar.id, rol);

    objeto$
      .subscribe(
        (respuesta: rolesPorUsuario) => {
          this.rolUsuarioActualizar = respuesta[0];

          const objetoEliminado$ = this._userRS.deleteRolUsuario(this.rolUsuarioActualizar.id);
          objetoEliminado$
            .subscribe((RolEliminado: rolesPorUsuario) => {
                console.log('Rol Eliminado id Usuario:');
                this.getusuario();
              },
              (error) => {
                console.log(error);
              });
        },
        (error) => {
          console.log(error);
        }
      );

  }


}
