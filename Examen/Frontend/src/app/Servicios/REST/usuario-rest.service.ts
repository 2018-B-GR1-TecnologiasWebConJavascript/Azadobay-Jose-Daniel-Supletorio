import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Usuario} from "../../Interfaces/Usuarios";
import {Rol} from "../../Interfaces/Rol";
import {rolesPorUsuario} from "../../Interfaces/rolesPorUsuario";

@Injectable()


export class UsuarioRestService {

  nombreModelo = '/Usuario';

  constructor(private readonly _httpClient: HttpClient) {

  }


  //METODOS PARA USUARIOS


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
      .pipe(map(u => <Usuario>u)); // Castear
  }


  crear(usuario: Usuario): Observable<Usuario> {
    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, usuario)
      .pipe(
        map(u => <Usuario>u)
      );

  }


  usuarioPorId(id: number | string): Observable<Usuario> {
    const url = environment.url + this.nombreModelo + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <Usuario>u)
      );

  }

  usuarioPorUserPass(user,pass): Observable<Usuario> {

      return this._httpClient
        .get(environment.url + this.nombreModelo + '?correo='+user+'&password='+pass)
        .pipe(
          map(u => <Usuario> u)
        ); // Castear

  }

  actualizar(usuario: Usuario) {
    const url = environment.url + this.nombreModelo + '/' + usuario.id;

    return this._httpClient
      .put(url, usuario)
      .pipe(
        map(u => <Usuario>u)
      );

  }

  //METODOS PARA ROLES

  getRoles() {
    const objeto$ = this._httpClient.get(environment.url + '/rol').pipe(
      map( // Esto es solo para castear a empresa.
        (respuesta) => {
          return <Rol[]>respuesta;
        }
      )
    );

    return objeto$;
  }

  agregarRol(rolesU: rolesPorUsuario) {

    return this._httpClient
      .post(environment.url + '/rolesporusuario', rolesU)
      .pipe(
        map(
          (respuesta) => {
            return <rolesPorUsuario>respuesta;
          }
        )
      );
  }



  //METODOS PARA TABLA ROLESPORUSUARIO

  buscarRolUsuarioPorId(usuario: number | string , rol: number | string ): Observable<rolesPorUsuario> {

    const url = environment.url + '/rolesporusuario?idUsuario=' + usuario + '&rolUsuario=' + rol;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <rolesPorUsuario>u)
      );

  }

  deleteRolUsuario(id : number | string){

    return this._httpClient
      .delete(environment.url + '/rolesporusuario' + `/${id}`)
      .pipe(map(u => <rolesPorUsuario>u)); // Castear

  }

}
