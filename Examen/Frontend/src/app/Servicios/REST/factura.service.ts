import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { GestionFacturasComponent } from 'src/app/rutas/facturas/gestion-facturas/gestion-facturas.component';
import { environment } from 'src/environments/environment';
import { Factura } from 'src/app/Interfaces/Factura';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {FacturaDetalle} from "../../Interfaces/FacturaDetalle";
import {Evento_medicamento} from "../../Interfaces/Evento_Medicamento";
import {Usuario} from "../../Interfaces/Usuarios";

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

    nombreModelo='/facturaCabecera'


  constructor(private readonly _httpClient:HttpClient) { }


  getFactura(idUsuarioLogeado): Observable<Factura[]> {
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo+'?idUsuario='+ idUsuarioLogeado)
      .pipe(
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

  getfacturasTipoyUser(iduser, estado):Observable<Factura[]>{
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo +'?idUsuario='+iduser+'?estado='+estado)
      .pipe(
        map( (respuesta) => { return < Factura[] > respuesta; }) );

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

  deleteDetalleDeFactura(idFacturaDetalle): Observable<FacturaDetalle>{
    return this._httpClient
      .delete(environment.url + '/facturadetalle'+`/${idFacturaDetalle}`)
      .pipe(
        map(u => <FacturaDetalle>u));
  }

  guardarDatosCabeceraFactura(factura){
    const url = environment.url + this.nombreModelo + '/' + factura.id;

    return this._httpClient
      .put(url, factura)
      .pipe(
        map(u => <Factura>u)
      );
  }


  ///METODOS BUSQUEDA DE FACTURAS COMPLEJAS

  getFacturasPorEventoUsuarioTipo(idUsuario,idEvento,estado){
    const objeto$ = this._httpClient.get(environment.url + this.nombreModelo + '?idUsuario='+idUsuario+'&idEvento='+idEvento+'&estado='+estado)
      .pipe(
        map( (respuesta) =>
        { return < Factura[] > respuesta; }) );

    return objeto$;
  }

  getFacturasTodasSinCliente(idUsuario, idEvento){
  const objeto$ = this._httpClient.get(environment.url + this.nombreModelo + '?idUsuario='+idUsuario+'&idEvento='+idEvento)
    .pipe(
      map( (respuesta) =>
      { return < Factura[] > respuesta; }) );

  return objeto$;
}

  
}



