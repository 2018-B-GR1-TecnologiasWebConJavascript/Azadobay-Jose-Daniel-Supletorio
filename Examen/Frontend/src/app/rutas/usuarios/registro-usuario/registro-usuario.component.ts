import { Component, OnInit } from '@angular/core';
import {Usuario} from "../../../Interfaces/Usuarios";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {


  usuario: Usuario = {
    nombre : '',
    correo : '',
    password : '',
    fechaNacimiento : ''
  };

  constructor(private readonly _userRS: UsuarioRestService) { }

  ngOnInit() {
  }

  crearUsuario() {

    const crearUsuario$ = this._userRS.crear(this.usuario);

    crearUsuario$
      .subscribe((respuesta: Usuario) => {
        alert(`Usuario Creado:  ${respuesta.nombre}`);
        },
        (error) => {
        console.log('Error',error);
        });

  }

}
