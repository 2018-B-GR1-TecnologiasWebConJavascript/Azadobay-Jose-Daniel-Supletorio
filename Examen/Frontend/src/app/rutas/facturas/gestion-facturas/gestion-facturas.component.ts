import {Component, OnInit} from '@angular/core';
import {Factura} from "../../../Interfaces/Factura";
import {ActivatedRoute, Router} from "@angular/router";
import {FacturaService} from "../../../Servicios/REST/factura.service";
import {FacturaDetalle} from "../../../Interfaces/FacturaDetalle";
import {Evento_medicamento} from "../../../Interfaces/Evento_Medicamento";
import {environment} from "../../../../environments/environment";
import {map} from "rxjs/operators";
import {rolesPorUsuario} from "../../../Interfaces/rolesPorUsuario";
import {HttpClient} from "@angular/common/http";
import {AuthServiceService} from "../../../Servicios/REST/auth-service.service";
import {Usuario} from "../../../Interfaces/Usuarios";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {Rol} from "../../../Interfaces/Rol";

@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit {


  columns = ["Codigo", "Item", "Cantidad", "Precio", "Total", "Acciones"];

  factura: Factura;
  facturaActualizar: Factura = {
    id: '',
    nombre: '',
    cedula: '',
    telefono: '',
    correo: '',
    direccion: '',
    estado: '',
    tipoPago:'',
    total:''

  };

  detallesFactura: FacturaDetalle[];

  eventoHijos: Evento_medicamento;

  usuarioActualizar: Usuario;
  roles;
  total=0;

  constructor(private readonly _activateRoute: ActivatedRoute,
              private readonly _facturaRestService: FacturaService,
              private readonly _httpClient: HttpClient,
              private readonly _userRS: UsuarioRestService,
              private readonly _autenticacionRS: AuthServiceService,
              private readonly _route: Router
  ) {
  }

  ngOnInit() {

    /* const usuario$ = this._userRS.usuarioPorId(environment.usuarioLogeado);

     usuario$.subscribe(
       (user: Usuario) =>
       {
         this.usuarioActualizar = user;
         this.roles = user.roles;
       },
       (error) =>
       {
         console.log(error);
       }
     );
     */

    const objeto$ = this._activateRoute.params;

    objeto$
      .subscribe(
        (parametros) => {

          const factura$ = this._facturaRestService.findFacturabyID(parametros.idFactura);
          factura$.subscribe(
            (respuesta) => {
              this.factura = respuesta[0];
              //console.log(this.factura);
              this.obtenerTodosDetalles(this.factura.id);
              this.calcularTotal(this.factura);

              // console.log(this.detallesFactura);
            }, (error) => {
              console.log(error);
            }
          );
        },
        (error) => {
          console.log(error);
        }
      );

    console.log(environment.usuarioLogeado);

    this.getUsuarioyRoles();



  }

  obtenerTodosDetalles(idCabecera) {

    const facturaDetalle$ = this._facturaRestService.getDetallesFactura(idCabecera);
    facturaDetalle$.subscribe(
      (respuesta: FacturaDetalle[]) => {
        this.detallesFactura = respuesta;
      }, (error) => {
        console.log(error);
      }
    );
  }

  buscarNombreMedicamentos(idEventoHijo) {

    const medicamento$ = this._facturaRestService.getEventoMedicamento(idEventoHijo);

    medicamento$.subscribe(
      (respuesta: Evento_medicamento) => {
        this.eventoHijos = respuesta;
      }, (error) => {
        console.log(error);
      }
    );
  }

  eliminarEventoHijo(id) {

    const objetoEliminado$ = this._facturaRestService.deleteDetalleDeFactura(id);

    objetoEliminado$.subscribe(
      (respuesta) => {

        const indice = this.factura.detalles
          .findIndex(r => r.id === respuesta.id);

        this.factura.detalles.splice(indice, 1);

        //console.log(respuesta);
        alert('Detalle Eliminado :' + respuesta.item);
        this.obtenerTodosDetalles(this.factura.id);
      }, (error) => {
        console.log(error);
      });
    // Castear

  }


  getUsuarioyRoles() {
    const usuario$ = this._userRS.usuarioPorId(environment.usuarioLogeado);

    usuario$.subscribe(
      (user: Usuario) => {
        this.usuarioActualizar = user;
        this.roles = user.roles;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  guardarDatosCabecera(tipodePago) {

    console.log(this.factura.id);
    console.log(this.factura.nombre);
    console.log(tipodePago);

    this.facturaActualizar.id = this.factura.id;
    this.facturaActualizar.nombre = this.factura.nombre;
    this.facturaActualizar.cedula = this.factura.cedula;
    this.facturaActualizar.telefono = this.factura.telefono;
    this.facturaActualizar.correo = this.factura.correo;
    this.facturaActualizar.direccion = this.factura.direccion;
    this.facturaActualizar.estado = this.factura.estado;
    this.facturaActualizar.tipoPago = tipodePago;
    this.facturaActualizar.total = this.factura.total;

    const objeto$ = this._facturaRestService.guardarDatosCabeceraFactura(this.facturaActualizar);

    objeto$
      .subscribe(
        (factura: Factura) => {


          alert('Factura ' + factura.id + ' Actualizada ')
          console.log(factura);

        }
        , (error) => {
          console.log(error);
        });

  }

  pagarFactura() {

    this.facturaActualizar.id = this.factura.id;
    this.facturaActualizar.nombre = this.factura.nombre;
    this.facturaActualizar.cedula = this.factura.cedula;
    this.facturaActualizar.telefono = this.factura.telefono;
    this.facturaActualizar.direccion = this.factura.direccion;
    this.facturaActualizar.correo = this.factura.correo;
    this.facturaActualizar.estado = 'Pagado';

    const objeto$ = this._facturaRestService.guardarDatosCabeceraFactura(this.facturaActualizar);

    objeto$
      .subscribe(
        (factura: Factura) => {


          alert('Factura ' + factura.id + ' Pagada ')
          console.log(factura);
          const url = [
            '/home',
            'gEventos'
          ];

          this._route.navigate(url);

        }
        , (error) => {
          console.log(error);
        });
  }


  prueba() {

    console.log(this.roles);
    console.log(this.usuarioActualizar);
  }

  verificarEstado(estado: string): boolean {

    if (estado === 'Pagado') {
      return true;
    } else {
      return false;
    }

  }

  calcularTotal(facturaTotal: Factura) {

    //console.log(this.factura.detalles);
    //console.log(this.factura.detalles[0].total);
   // console.log(this.factura.detalles[1].total);

    for(let i=0; i < facturaTotal.detalles.length ; i++){
      this.total = parseInt(this.total) + parseInt(facturaTotal.detalles[i].total);
    }

    //this.total =  this.factura.detalles[0].total + this.factura.detalles[1].total;
    console.log(this.total);
    this.factura.total = this.total;

  }


}
