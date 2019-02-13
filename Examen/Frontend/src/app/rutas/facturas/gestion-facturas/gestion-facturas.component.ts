import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-facturas',
  templateUrl: './gestion-facturas.component.html',
  styleUrls: ['./gestion-facturas.component.css']
})
export class GestionFacturasComponent implements OnInit {


  columns = ["Item", "cantidad", "precio", "total"];

  facturas =
    [{
      item: 'Pikachu',
      cantidad: '2',
      precio: '30.00',
      total: '50.00'
    },
      {
        item: 'Pikachu',
        cantidad: '2',
        precio: '30.00',
        total: '50.00'
      }

    ]

  constructor() { }

  ngOnInit() {
  }

}
