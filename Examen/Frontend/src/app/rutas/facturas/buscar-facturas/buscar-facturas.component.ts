import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../../Interfaces/Usuarios";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {FacturaService} from "../../../Servicios/REST/factura.service";
import {Factura} from "../../../Interfaces/Factura";

@Component({
  selector: 'app-buscar-facturas',
  templateUrl: './buscar-facturas.component.html',
  styleUrls: ['./buscar-facturas.component.css']
})
export class BuscarFacturasComponent implements OnInit {

  facturas: Factura[];

  constructor( private readonly _activateRoute: ActivatedRoute,
  private readonly _facturaRestService: FacturaService ) { }

  ngOnInit() {

    this.getfacturas();

  }

  getfacturas() {
    const objeto$ = this._activateRoute.params;

    objeto$
      .subscribe(
        (parametros) => {
          const objeto$ = this._facturaRestService.facturasPorEvento(parametros.idEvento);

          objeto$
            .subscribe(
              (factura: Factura[]) => {
                console.log(factura);
                this.facturas = factura;
              },
              (error) => {
                console.log(error);
              }
            );
        }
      );
  }




}
