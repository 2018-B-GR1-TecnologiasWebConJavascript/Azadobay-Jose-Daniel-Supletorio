import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscar-facturas',
  templateUrl: './buscar-facturas.component.html',
  styleUrls: ['./buscar-facturas.component.css']
})
export class BuscarFacturasComponent implements OnInit {



  columns = ["Nombre Cliente", "Fecha", "Total", "Estado","Acciones"];

  facturas =
    [{
      nombreCliente: 'Pikachu',
      fecha: '2',
      total: '30.00',
      estado: '50.00'
    },
      {
        nombreCliente: 'Pikachu',
        fecha: '2',
        total: '30.00',
        Estado: '50.00'
      }

    ]

  constructor() { }

  ngOnInit() {
  }

}
