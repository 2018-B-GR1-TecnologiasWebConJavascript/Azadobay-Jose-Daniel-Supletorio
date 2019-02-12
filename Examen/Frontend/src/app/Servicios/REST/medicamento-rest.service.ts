import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Usuario} from "../../Interfaces/Usuarios";
import {Medicamento} from "../../Interfaces/Medicamento";

@Injectable()


export class MedicamentoRestService{

  nombreModelo = '/Medicamento';
  constructor(private readonly _httpClient: HttpClient) {

  }


  buscarTodo(): Observable<Medicamento[]> {
    // http client es un observable
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo).pipe(
      map( // Esto es solo para castear
        (respuesta) => {
          return <Medicamento[]>respuesta;
        }
      )
    );

    return objeto$;
  }


}
