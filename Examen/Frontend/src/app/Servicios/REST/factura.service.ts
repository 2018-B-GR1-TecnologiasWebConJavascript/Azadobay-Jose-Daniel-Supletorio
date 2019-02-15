import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { GestionFacturasComponent } from 'src/app/rutas/facturas/gestion-facturas/gestion-facturas.component';
import { environment } from 'src/environments/environment';
import { Factura } from 'src/app/Interfaces/Factura';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FacturaDetalle} from "../../Interfaces/FacturaDetalle";
import {Evento_medicamento} from "../../Interfaces/Evento_Medicamento";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

    nombreModelo='/facturaCabecera'


  constructor(private readonly _httpClient:HttpClient) { }


  getFactura(): Observable<Factura[]> {
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo).pipe(
      map( (respuesta) => { return <Factura[]>respuesta; }) );

    return objeto$;
  }

  facturasPorEvento(idEvento : number | string){
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo +'?idEvento='+idEvento)
      .pipe(
      map( (respuesta) => { return < Factura[] > respuesta; }) );

    return objeto$;
  }

  findFacturabyID(idFactura): Observable<Factura> {

      const objeto$ = this._httpClient.get(environment.url + this.nombreModelo +'?id='+idFactura)
      .pipe(
        map( (respuesta) => { return <Factura> respuesta; }) );

    return objeto$;

  }

  getDetallesFactura(idCabecera: number | string){
    const objeto$ = this._httpClient.get(environment.url +'/facturacabecera?id='+idCabecera)
      .pipe(
        map( (respuesta) =>
        { return < FacturaDetalle[] > respuesta; }) );

    return objeto$;
  }

  getEventoMedicamento(idEvento){
    const objeto$ = this._httpClient.get(environment.url +'/eventospormedicamento?id='+idEvento)
      .pipe(
        map( (respuesta) =>
        { return < Evento_medicamento > respuesta; }) );

    return objeto$;
  }

  


  
}



