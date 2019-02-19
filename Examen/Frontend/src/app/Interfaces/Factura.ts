import {FacturaDetalle} from "./FacturaDetalle";
import {Usuario} from "./Usuarios";
import {Evento} from "./Evento";

export interface Factura{
  id?:any;
  nombre:string;
  cedula:any;
  telefono: any;
  direccion?:string;
  correo?:string;
  fecha?:string;
  total?:any;
  tipoPago?:string;
  estado?:string;

  detalles?: FacturaDetalle[];
  idUsuario?: Usuario;
  idEvento?: Evento;
}
