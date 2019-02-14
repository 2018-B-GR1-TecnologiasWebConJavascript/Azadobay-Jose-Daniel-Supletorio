import {Medicamento} from "./Medicamento";

export interface Evento {

  id: number;
  nombre: 'string';
  fechaEvento: 'string';
  medicamentos: Medicamento[];

}
