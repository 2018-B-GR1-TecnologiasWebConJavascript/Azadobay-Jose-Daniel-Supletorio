import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Usuario} from "../../Interfaces/Usuarios";

@Injectable()


export class UsuarioRestService {

  nombreModelo = '/Usuario';

  constructor(private readonly _httpClient: HttpClient) {

  }


  buscarTodo(): Observable<Usuario[]> {
    // http client es un observable
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo).pipe(
      map( // Esto es solo para castear a empresa.
        (respuesta) => {
          return <Usuario[]>respuesta;
        }
      )
    );

    return objeto$;
  }


  delete(id: number): Observable<Usuario> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(u => <Usuario> u)); // Castear
  }


  crear(usuario: Usuario): Observable<Usuario> {

    const objeto: Usuario = {
      nombre: usuario.nombre,
      correo: usuario.correo,
      password: usuario.password,
      fechaNacimiento: usuario.fechaNacimiento
    };

    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url,objeto)
      .pipe(
        map(u => <Usuario> u)
      );

  }


}
