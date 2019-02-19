import {Rol} from "./Rol";
import {Factura} from "./Factura";

export interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  password: string;
  fechaNacimiento: string ;
  roles?: Rol[];
  facturas?: Factura[];

}
