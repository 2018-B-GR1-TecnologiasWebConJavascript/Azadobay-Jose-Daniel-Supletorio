import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UsuarioInterface} from "./usuario-service";

@Injectable()
export class AuthService {
  usuario: any [] = []
  roles : any [] = []

  constructor(private readonly _httpClient: HttpClient) {

  }

 logueo(username: string, password: string): Observable<UsuarioInterface> {

    const url = 'http://localhost:1337/Usuario/login';

    return this._httpClient.post(url, {correo: username, password: password}).pipe(map(r => <UsuarioInterface>r));

  }

  esAdministrador(): boolean {
    return this.roles.some((rol) => rol.id === 2);
  }

}
