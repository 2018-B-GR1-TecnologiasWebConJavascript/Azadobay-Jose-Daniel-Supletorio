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

  constructor(
    private readonly _usuarioRS: UsuarioRestService
  ) {
  }

  ngOnInit() {

    this.buscarTodos();

  }


  buscarTodos(){
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


  eliminar(usuario: Usuario) {
    const objetoEliminado$ = this._usuarioRS.delete(usuario.id);

    objetoEliminado$
      .subscribe(
        (objetoEliminado: Usuario) => {
          console.log('Se elimino:', objetoEliminado);

          const indice = this.usuarios
            .findIndex(r => r.id === usuario.id);

          this.usuarios.splice(indice, 1);
          //this.buscarTodos();


        },
        (error) => {
          console.error('Error', error);
        }
      );


  }

}


