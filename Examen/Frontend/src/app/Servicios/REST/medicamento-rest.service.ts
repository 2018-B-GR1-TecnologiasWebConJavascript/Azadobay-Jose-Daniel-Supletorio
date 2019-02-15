import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Usuario} from "../../Interfaces/Usuarios";
import {Medicamento} from "../../Interfaces/Medicamento";
import {rolesPorUsuario} from "../../Interfaces/rolesPorUsuario";
import {Evento_medicamento} from "../../Interfaces/Evento_Medicamento";

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


  buscarEventoMedicamentoPorId(evento: number | string , medicamento: number | string ): Observable< Evento_medicamento> {

    const url = environment.url + '/eventospormedicamento?idEvento=' + evento + '&idMedicamento=' + medicamento;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <Evento_medicamento>u)
      );

  }

deleteRolUsuario(id : number | string){

  return this._httpClient
    .delete(environment.url + '/eventospormedicamento' + `/${id}`)
    .pipe(map(u => <Evento_medicamento>u)); // Castear

}
}
