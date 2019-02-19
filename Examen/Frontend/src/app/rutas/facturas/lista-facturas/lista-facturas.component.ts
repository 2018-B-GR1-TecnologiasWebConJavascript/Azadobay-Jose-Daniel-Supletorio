import {Component, OnInit} from '@angular/core';
import {FacturaService} from 'src/app/Servicios/REST/factura.service';
import {Factura} from 'src/app/Interfaces/Factura';
import {environment} from "../../../../environments/environment";
import {UsuarioRestService} from "../../../Servicios/REST/usuario-rest.service";
import {Usuario} from "../../../Interfaces/Usuarios";

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})

export class ListaFacturasComponent implements OnInit {


  facturas: Factura[];

  constructor(private _facturaService: FacturaService,
              private readonly _userRS: UsuarioRestService) {
  }

  ngOnInit() {
    console.log(environment.usuarioLogeado);

    this.getFacturas();
  }


  getFacturas() {

    this._facturaService.getFactura(environment.usuarioLogeado)
      .subscribe(
        res => {
          this.facturas = res
          console.log(res);
        },
        err => console.log(err))
  }

}
