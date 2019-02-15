import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../Interfaces/Usuarios";
import {UsuarioRestService} from "../../Servicios/REST/usuario-rest.service";
import {environment} from "../../../environments/environment";
import {Rol} from "../../Interfaces/Rol";
import {AuthServiceService} from "../../Servicios/REST/auth-service.service";

@Component({
  selector: 'app-ruta-home',
  templateUrl: './ruta-home.component.html',
  styleUrls: ['./ruta-home.component.css']
})


export class RutaHomeComponent implements OnInit {

  usuarioActualizar: Usuario;
  roles;

  constructor(private readonly _activateRoute: ActivatedRoute,
              private readonly _userRS: UsuarioRestService,
              public readonly _autenticacionRS: AuthServiceService) {
  }

  ngOnInit() {

    const usuario$ = this._userRS.usuarioPorId(environment.usuarioLogeado);

    usuario$.subscribe(
      (user: Usuario) =>
      {
        this.usuarioActualizar = user;
        this.roles = user.roles;
      },
      (error) =>
      {
        console.log(error);
      }
    );
  }

  prueba(){

    console.log(this.roles);
  }




}
