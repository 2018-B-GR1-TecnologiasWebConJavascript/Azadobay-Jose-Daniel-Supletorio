import {Medicamento} from "./Medicamento";
import {Factura} from "./Factura";

export interface Evento {

  id?: number;
  nombre?: 'string';
  fechaEvento?: 'string';
  medicamentos?: Medicamento[];
  facturas?: Factura[];

}
