import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paciente} from "../../Interfaces/Paciente";
import {Medicamento} from "../../Interfaces/Medicamento";

@Component({
  selector: 'app-formulario-medicamento',
  templateUrl: './formulario-medicamento.component.html',
  styleUrls: ['./formulario-medicamento.component.css']
})
export class FormularioMedicamentoComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  gramos: string;

  @Input()
  composicion: string;

  @Input()
  usadoPara: any;

  @Input()
  fechaCaducidad: any;

  @Input()
  numeroPastillas: any;


  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();

  nombreMed: any;
  gramosMed: any;
  composiiconMed: any;
  usoMed: any;
  fechaCadMed: any;
  pastillasMed: any;


  constructor() { }

  ngOnInit() {

    this.nombreMed = this.nombre;
    this.gramosMed = this.gramos;
    this.composiiconMed = this.composicion;
    this.usoMed = this.usadoPara;
    this.fechaCadMed = this.fechaCaducidad;
    this.pastillasMed = this.numeroPastillas;

  }

  emitirFormularioValido(){

    const objetoMedicamento:Medicamento = {
      nombre: this.nombreMed
    }

    this.formularioValido.emit(objetoMedicamento);
  }

}
