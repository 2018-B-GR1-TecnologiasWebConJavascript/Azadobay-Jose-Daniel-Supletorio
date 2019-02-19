import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";
import {Evento} from "../../Interfaces/Evento";
import {Evento_medicamento} from "../../Interfaces/Evento_Medicamento";
import {FacturaDetalle} from "../../Interfaces/FacturaDetalle";

@Injectable()


export class EventoRestService{

  puerto1 = '192.168.1.37:1337';
  puerto2 = 'localhost'
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


  eventoPorId(id : number | string): Observable<Evento> {
    const url = environment.url + this.nombreModelo + '/' + id;

    return this._httpClient
      .get(url)
      .pipe(
        map(u => <Evento> u)
      );

  }

  agregarMedicamento(eventoM : Evento_medicamento ){
    return this._httpClient.post(environment.url+'/eventospormedicamento',eventoM);
  }


  agregarItem(objeto: FacturaDetalle): Observable<FacturaDetalle>{
    return this._httpClient
      .post(environment.url+'/facturadetalle',objeto)
      .pipe(
        map(u => <FacturaDetalle> u)
      );
  }
  buscarHijosdeEvento(idEvento){
    return this._httpClient.get(environment.url+'/eventospormedicamento?idEvento='+idEvento);
  }

  buscarEventoMedicamentoID(int){
    return this._httpClient.get(environment.url+'/eventospormedicamento?id='+int);
  }

  buscarEventoPorNombre(nombre){

    return this._httpClient.get(environment.url+'/evento?nombre='+nombre.toString())
      .pipe(
        map(u => <Evento[]> u)
      );
  }

}
