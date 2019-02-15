import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FacturaService} from "../../../Servicios/REST/factura.service";
import {Factura} from "../../../Interfaces/Factura";
import {EventoRestService} from "../../../Servicios/REST/evento-rest-service";
import {FacturaDetalle} from "../../../Interfaces/FacturaDetalle";

@Component({
  selector: 'app-agregar-item',
  templateUrl: './agregar-item.component.html',
  styleUrls: ['./agregar-item.component.css']
})
export class AgregarItemComponent implements OnInit {


  factura: Factura;
  eventosMedicamentos;
  eventoHijosGuadar;
  precioBase;
  cantidad;
  nombreMedicamento:'';

  facturaDetalleGuardar:FacturaDetalle;

  facturaACrear: FacturaDetalle ={
    idEventosHijos:0,
    idFacturaCabecera:0,
    precio:0,
    cantidad:0,
    total:0
  };


  constructor(private readonly _activateRoute: ActivatedRoute,
              private readonly _facturaRestService: FacturaService,
              private readonly _eventoRestService: EventoRestService) {


  }

  ngOnInit() {

    const objeto$ = this._activateRoute.params;

    objeto$
      .subscribe(
        (parametros) => {

          const factura$ = this._facturaRestService.findFacturabyID(parametros.idFactura);
          factura$.subscribe(
            (respuesta) => {
              this.factura = respuesta[0];
              console.log(this.factura);
              this.buscarHijosDeE();

            }, (error) => {
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );


  }

  crearFacturaDetalle(idEventoMedicamento){

    var subtotal= parseInt(this.cantidad) * parseInt(this.precioBase);

    this.facturaACrear.idEventosHijos = parseInt(idEventoMedicamento);
    this.facturaACrear.idFacturaCabecera = this.factura.id;
    this.facturaACrear.precio = this.precioBase;
    this.facturaACrear.cantidad = parseInt(this.cantidad);
    this.facturaACrear.total = subtotal;
    this.facturaACrear.item = this.nombreMedicamento;

    console.log(this.facturaACrear);

    const objetc$ = this._eventoRestService.agregarItem(this.facturaACrear)

    objetc$.subscribe(
      (objetoGuardado: FacturaDetalle)=>{
        console.log(objetoGuardado);
        alert("Se añadio el nuevo item");
      },
      (error)=>{
        console.log(error);
      }
    );




  }


  buscarHijosDeE() {
    const hijosDelEvento$ = this._eventoRestService.buscarHijosdeEvento(this.factura.idEvento.id);

    hijosDelEvento$.subscribe(
      (respuesta) => {
        console.log(respuesta);
        this.eventosMedicamentos = respuesta;
          console.log(this.eventosMedicamentos);
      }, (error) => {
        console.log(error);
      }
    );
  }

  prueba(int){

    const eventosMedicamentos$ = this._eventoRestService.buscarEventoMedicamentoID(int);

    eventosMedicamentos$.subscribe(
      (respuesta) => {

        this.eventoHijosGuadar = respuesta[0];
        console.log(this.eventoHijosGuadar);
        this.nombreMedicamento= this.eventoHijosGuadar.idMedicamento.nombre;
        this.precioBase = this.eventoHijosGuadar.precioBase;
      }, (error) => {
        console.log(error);
      }
    );
  }



}
