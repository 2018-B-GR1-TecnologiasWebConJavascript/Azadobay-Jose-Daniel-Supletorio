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


}

