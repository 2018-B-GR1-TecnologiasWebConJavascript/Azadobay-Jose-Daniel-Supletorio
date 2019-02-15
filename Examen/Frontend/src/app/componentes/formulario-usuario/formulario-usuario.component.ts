
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  @Input()
  nombre: string;
  @Input()
  correo: string;
  @Input()
  password: string;
  @Input()
  fechaNacimiento: string;

  @Input()
  nombreBoton: string;

  @Output()
  formularioValido = new EventEmitter();

  nombreUsuario: string;

  constructor() {
  }

  ngOnInit() {
    this.nombreUsuario = this.nombre;
  }

  emitirFormularioValido(){
    const objetoRaza = {
      nombre:this.nombreUsuario
    };
    this.formularioValido.emit(objetoRaza);
  }

}
