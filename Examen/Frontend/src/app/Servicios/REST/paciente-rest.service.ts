import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Paciente} from "../../Interfaces/Paciente";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable()


export class PacienteRestService {

  nombreModelo = '/Paciente';
  constructor(private readonly _httpClient: HttpClient) {

  }


  buscarTodo(): Observable<Paciente[]> {
    // http client es un observable
    const paciente$ = this._httpClient.get(environment.url + this.nombreModelo).pipe(
      map( // Esto es solo para castear a empresa.
        (respuesta) => {
          return <Paciente[]>respuesta;
        }
      )
    );

    return paciente$;
  }

  addPaciente(paciente: Paciente): Observable<Paciente> {
    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, paciente)
      .pipe(
        map(u => <Paciente>u)
      );

  }

  pacientePorId(id: number | string): Observable<Paciente> {
    const url = environment.url + this.nombreModelo + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <Paciente>u)
      );

  }

  actualizar(usuario: Paciente) {
    console.log(usuario);
    const url = environment.url + this.nombreModelo + '/' + usuario.id;

    return this._httpClient
      .put(url, usuario)
      .pipe(
        map(u => <Paciente>u)
      );

  }

  delete(id: number): Observable<Paciente> {
    return this._httpClient
      .delete(environment.url + this.nombreModelo + `/${id}`)
      .pipe(map(u => <Paciente>u)); // Castear
  }


  pacientePorApellido(apellido): Observable<Paciente[]> {
    const url = environment.url + this.nombreModelo + '?apellidos=' + apellido;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <Paciente[]>u)
      );

  }


}

