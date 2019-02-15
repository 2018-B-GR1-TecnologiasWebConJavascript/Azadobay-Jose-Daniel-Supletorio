import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Rol} from 'src/app/Interfaces/Rol';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    public readonly _httpClient: HttpClient
  ) { }

  esAdministrador(roles:Rol[]): boolean {
    return roles
      .some((rol) => rol.id === 1);
  }

  esUsuario(roles:Rol[]): boolean {
    return roles
      .some((rol) => rol.id === 2);
  }

  esCajero(roles:Rol[]): boolean {
    return roles
      .some((rol) => rol.id === 3);
  }

  escliente(roles:Rol[]): boolean {
    return roles
      .some((rol) => rol.id === 4);
  }
  esInvitado(roles:Rol[]): boolean {
    return roles
      .some((rol) => rol.id === 0);
  }


}
