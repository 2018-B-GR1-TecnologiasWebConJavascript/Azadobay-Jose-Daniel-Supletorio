import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Usuario} from "../../../Interfaces/Usuarios";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {FacturaService} from "../../../Servicios/REST/factura.service";
import {Factura} from "../../../Interfaces/Factura";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-buscar-facturas',
  templateUrl: './buscar-facturas.component.html',
  styleUrls: ['./buscar-facturas.component.css']
})
export class BuscarFacturasComponent implements OnInit {

  facturas: Factura[];

  usuarioEncontrado: Usuario;
  usuarioBuscar:'';
  idEvento;

  constructor(private readonly _activateRoute: ActivatedRoute,
              private readonly _facturaRestService: FacturaService,
              private readonly _usuarioRS: UsuarioRestService) {
  }

  ngOnInit() {



    const objeto$ = this._activateRoute.params;

    objeto$
      .subscribe(
        (parametros) => {

          this.idEvento = parametros.idEvento;
          console.log(this.idEvento);
          const facturas$ = this._facturaRestService.getFacturasPorEventoYUsuario(this.idEvento,environment.usuarioLogeado);

          facturas$.subscribe((facturasA)=>{
            console.log(facturasA);
            this.facturas = facturasA;
          });

        }
      );


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

  getFacturasByIdUseryTipo(tipoBusqueda) {

    const objeto$ = this._facturaRestService.getfacturasTipoyUser(this.usuarioEncontrado.id, tipoBusqueda);

    objeto$
      .subscribe(
        (factura: Factura[]) => {
          console.log(factura);
          //this.facturas = factura;
        },
        (error) => {
          console.log(error);
        }
      );
  }


  prueba(tipoBusqueda) {
    console.log(this.usuarioBuscar);
    console.log(tipoBusqueda);
  }


  buscarFacturas(tipoBusqueda) {

    if (tipoBusqueda === "Todas" && this.usuarioBuscar === '') {

      //this.buscarUsuarioPorName();

      //this.getFacturasByIdUseryTipo(tipoBusqueda);



    } else {

      this.buscarUsuarioPorName();
      //this.getFacturasByIdUseryTipo(tipoBusqueda);
    }
  }


  buscarUsuarioPorName() {

    const objeto$ = this._usuarioRS.buscarUsuarioPorNombre(this.usuarioBuscar);


    return objeto$
      .subscribe(
        (respuesta: Usuario) => {
          this.usuarioEncontrado = respuesta[0];

        }, (error) => {

          alert('No se encontro el Usuario');
        }
      );

  }


}
