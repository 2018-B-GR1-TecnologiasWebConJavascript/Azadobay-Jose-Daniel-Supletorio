import {Component, OnInit} from '@angular/core';
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {Usuario} from "../../../Interfaces/Usuarios";

@Component({
  selector: 'app-ruta-gestion-usuarios',
  templateUrl: './ruta-gestion-usuarios.component.html',
  styleUrls: ['./ruta-gestion-usuarios.component.css']
})


export class RutaGestionUsuariosComponent implements OnInit {

  usuarios: Usuario[];
  nombreUsuario = '';
  mensaje='';

  constructor(
    private readonly _usuarioRS: UsuarioRestService
  ) {
  }

  ngOnInit() {

  }


  buscarTodosLosUsuarios() {
    const objeto$ = this._usuarioRS.buscarTodo();
    objeto$
      .subscribe(
        (respuesta: Usuario[]) => {
          console.log(respuesta);
          this.usuarios = respuesta;
        }, (error) => {
          console.error('Error', error);
        }
      );
  }


  buscarUsuario() {

    if (this.nombreUsuario === '') {
      this.buscarTodosLosUsuarios();
    } else {

      if (this.validar_email(this.nombreUsuario)) {

        console.log("Es email");

        const objeto$ = this._usuarioRS.buscarUsuariosPorCorreo(this.nombreUsuario);

        objeto$
          .subscribe(
            (respuesta: Usuario[]) => {
              console.log(respuesta);
              if(respuesta.length === 0){
                this.mensaje = "No Se encontro al usuario";
                this.usuarios =[];
              }else{
                this.mensaje ='';
                this.usuarios = respuesta;
              }
              }, (error) => {
              console.error('Error', error);
            }
          );

      } else {
        console.log("No es email");

        const objeto$ = this._usuarioRS.buscarUsuariosPorNombre(this.nombreUsuario);

        objeto$
          .subscribe(
            (respuesta: Usuario[]) => {
              console.log(respuesta);

              if(respuesta.length === 0){
                this.mensaje = "No Se encontro al usuario";
                this.usuarios = [];
              }else{
                this.mensaje ='';
                this.usuarios = respuesta;
              }

            }, (error) => {
              console.error('Error', error);
            }
          );
      }
    }
  }

  /*
  if (this.nombreUsuario) {

    const objeto$ = this._usuarioRS.buscarTodo();

    objeto$
      .subscribe(
        (respuesta: Usuario[]) => {
          console.log(respuesta);
          this.usuarios = respuesta;
        }, (error) => {
          console.error('Error', error);
        }
      );
  } else {
    const objeto$ = this._usuarioRS.buscarUsuarioPorNombre2(this.nombreUsuario)

    objeto$
      .subscribe(
        (respuesta: Usuario[]) => {
          console.log(respuesta);
          this.usuarios = respuesta;
        }, (error) => {
          console.error('Error', error);
        }
      );
  }
  */


  eliminar(usuario: Usuario) {
    const objetoEliminado$ = this._usuarioRS.delete(usuario.id);

    objetoEliminado$
      .subscribe(
        (objetoEliminado: Usuario) => {
          //console.log('Se elimino:', objetoEliminado);

          const indice = this.usuarios
            .findIndex(r => r.id === usuario.id);

          this.usuarios.splice(indice, 1);

          alert('Se elimino al usuario :'+objetoEliminado.nombre);

          this.buscarTodosLosUsuarios();
        },
        (error) => {
          console.error('Error', error);
        }
      );
  }


  validar_email(email) {
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    return regex.test(email) ? true : false;
  }

}


