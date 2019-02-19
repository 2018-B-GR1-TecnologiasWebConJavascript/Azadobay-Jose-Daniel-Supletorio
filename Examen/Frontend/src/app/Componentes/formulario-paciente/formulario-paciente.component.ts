import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Paciente} from "../../Interfaces/Paciente";

@Component({
  selector: 'app-formulario-paciente',
  templateUrl: './formulario-paciente.component.html',
  styleUrls: ['./formulario-paciente.component.css']
})
export class FormularioPacienteComponent implements OnInit {

  @Input()
  nombre: string;

  @Input()
  apellidos: string;

  @Input()
  fechaN: string;

  @Input()
  numeroHijos: any;

  /*@Input()
  seguroSocial: boolean;
*/

  @Input()
  nombreBoton: string;

  @Output()
    formularioValido = new EventEmitter();

  //importar del angular Core


  nombrePaciente: string;
  apellidosPaciente: string;
  fechaNacPaciente: any;
  numeroHijosPaciente: any;
  //seguroSocialPaciente: any;

  constructor() { }

  ngOnInit() {
    this.nombrePaciente = this.nombre;
    this.apellidosPaciente = this.apellidos;
    this.fechaNacPaciente = this.fechaN;
    this.numeroHijosPaciente = this.numeroHijos;
    //this.seguroSocialPaciente = this.seguroSocial;
  }

  emitirFormularioValido(seguro){

    const objetoPaciente:Paciente = {
      nombres: this.nombrePaciente,
      apellidos:this.apellidosPaciente,
      fechaNacimiento:this.fechaNacPaciente,
      numeroHijos:this.numeroHijosPaciente,
      seguroSocial: seguro

    }

    this.formularioValido.emit(objetoPaciente);
  }

}
