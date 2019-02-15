import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../Interfaces/Usuarios";
import {NgForm} from "@angular/forms";
import {UsuarioRestService} from "../../Servicios/REST/usuario-rest.service";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-ruta-principal',
  templateUrl: './ruta-principal.component.html',
  styleUrls: ['./ruta-principal.component.css']
})
export class RutaPrincipalComponent implements OnInit {

  usuarioL: Usuario = {
    correo: '',
    password: '',
    nombre: '',
    fechaNacimiento: ''
  }


  constructor(
    private readonly _userRS: UsuarioRestService,
    private readonly _route: Router) {
  }

  ngOnInit() {

  }

  ingresar(formulario: NgForm) {

    if (formulario.valid) {
      const objeto$ = this._userRS.usuarioPorUserPass(this.usuarioL.correo, this.usuarioL.password);

      objeto$
        .subscribe(
          (usuario: any) => {
            if (usuario.length > 0) {
              alert('Usuario Encontrado');

              environment.usuarioLogeado = usuario[0].id;
              const url = [
                '/home'
              ];

              this._route.navigate(url);
            } else {
              alert('Usuario NO Encontrado');
            }

          },
          (error) => {
            console.log(error);
          }
        );

    } else {
      alert('User o Password Incorrectos');
    }
  }

}
