import {Component, OnInit} from '@angular/core';
import {FacturaService} from 'src/app/Servicios/REST/factura.service';
import {Factura} from 'src/app/Interfaces/Factura';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.component.html',
  styleUrls: ['./lista-facturas.component.css']
})

export class ListaFacturasComponent implements OnInit {


  facturas: Factura[];

  constructor(private facturaService: FacturaService) {
  }

  ngOnInit() {
    this.getFacturas();
  }


  getFacturas() {

    this.facturaService.getFactura().subscribe(
      res => {
        this.facturas = res
        console.log(res);
      },
      err => console.log(err))
  }
}
