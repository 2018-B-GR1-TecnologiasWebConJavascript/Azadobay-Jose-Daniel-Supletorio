import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { GestionFacturasComponent } from 'src/app/rutas/facturas/gestion-facturas/gestion-facturas.component';
import { environment } from 'src/environments/environment';
import { Factura } from 'src/app/Interfaces/Factura';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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


  


  
}



