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


export class MedicamentoRestService {

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


  buscarEventoMedicamentoPorId(evento: number | string, medicamento: number | string): Observable<Evento_medicamento> {

    const url = environment.url + '/eventospormedicamento?idEvento=' + evento + '&idMedicamento=' + medicamento;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <Evento_medicamento>u)
      );

  }

  deleteRolUsuario(id: number | string) {

    return this._httpClient
      .delete(environment.url + '/eventospormedicamento' + `/${id}`)
      .pipe(map(u => <Evento_medicamento>u)); // Castear

  }

  crear(medicamento: Medicamento): Observable<Medicamento> {
    const url = environment.url + this.nombreModelo;

    return this._httpClient
      .post(url, medicamento)
      .pipe(
        map(u => <Medicamento>u)
      );

  }

  medicamentoPorId(id: number | string): Observable<Medicamento> {
    const url = environment.url + this.nombreModelo + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <Medicamento>u)
      );

  }

  actualizar(medicamento: Medicamento) {
    const url = environment.url + this.nombreModelo + '/' + medicamento.id;

    return this._httpClient
      .put(url, medicamento)
      .pipe(
        map(u => <Medicamento>u)
      );

  }


  deleteMedicamento(id : number | string){

    return this._httpClient
      .delete(environment.url + '/medicamento' + `/${id}`)
      .pipe(map(u => <rolesPorUsuario>u)); // Castear

  }
}
