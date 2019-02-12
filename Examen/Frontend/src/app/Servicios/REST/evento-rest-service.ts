import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Evento} from "../../Interfaces/Evento";

@Injectable()


export class EventoRestService{

  nombreModelo = '/Evento';
  constructor(private readonly _httpClient: HttpClient) {

  }


  buscarTodo(): Observable<Evento[]> {
    // http client es un observable
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo).pipe(
      map( // Esto es solo para castear a empresa.
        (respuesta) => {
          return <Evento[]>respuesta;
        }
      )
    );

    return objeto$;
  }


}
