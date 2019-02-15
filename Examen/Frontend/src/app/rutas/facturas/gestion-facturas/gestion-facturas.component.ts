import {Component, OnInit} from '@angular/core';
import {Factura} from "../../../Interfaces/Factura";
import {ActivatedRoute} from "@angular/router";
import {FacturaService} from "../../../Servicios/REST/factura.service";
import {FacturaDetalle} from "../../../Interfaces/FacturaDetalle";
import {Evento_medicamento} from "../../../Interfaces/Evento_Medicamento";

@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit {


  columns = ["idDetalle","Item", "cantidad", "precio", "total"];

  factura: Factura;

  detallesFactura : FacturaDetalle[];

  eventoHijos: Evento_medicamento;

  constructor(private readonly _activateRoute: ActivatedRoute,
              private readonly _facturaRestService: FacturaService) {
  }

  ngOnInit() {

    const objeto$ = this._activateRoute.params;

    objeto$
      .subscribe(
        (parametros) => {

          const factura$ = this._facturaRestService.findFacturabyID(parametros.idFactura);
          factura$.subscribe(
            ( respuesta )=>{
              this.factura = respuesta[0];
              console.log(this.factura);
              this.obtenerTodosDetalles(this.factura.id);
              console.log(this.detallesFactura);
            },(error)=>{
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );

  }

  obtenerTodosDetalles(idCabecera){

    const facturaDetalle$ = this._facturaRestService.getDetallesFactura(idCabecera);
    facturaDetalle$.subscribe(
      ( respuesta: FacturaDetalle[] )=>{
        this.detallesFactura = respuesta;
      },(error)=>{
        console.log(error);
      }
    );
  }

  buscarNombreMedicamentos(idEventoHijo){

    const medicamento$ = this._facturaRestService.getEventoMedicamento(idEventoHijo);

    medicamento$.subscribe(
      ( respuesta: Evento_medicamento )=>{
        this.eventoHijos = respuesta;
      },(error)=>{
        console.log(error);
      }
    );

  }



}
