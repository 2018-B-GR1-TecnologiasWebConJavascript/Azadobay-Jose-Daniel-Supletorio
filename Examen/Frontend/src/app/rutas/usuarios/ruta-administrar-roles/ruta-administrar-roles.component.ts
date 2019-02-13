import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ruta-administrar-roles',
  templateUrl: './ruta-administrar-roles.component.html',
  styleUrls: ['./ruta-administrar-roles.component.css']
})
export class RutaAdministrarRolesComponent implements OnInit {

  Roles = ['Administrador', 'Usuario'];
  RolesSelect = ['Administrador', 'Usuario'];

  user = {
    name:"David",
    correo:"Dawctes@gmail.com",
    fNacimiento:"20/08/94"
  }

  constructor() { }

  ngOnInit() {
  }

}
