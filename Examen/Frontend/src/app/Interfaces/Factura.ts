import {FacturaDetalle} from "./FacturaDetalle";
import {Usuario} from "./Usuarios";
import {Evento} from "./Evento";

export interface Factura{
  id?:any;
  nombre:string;
  cedula:number;
  telefono: number;
  direccion:string;
  correo:string;
  fecha:string;
  total:number;
  tipoPago:string;
  estado:string;

  detalles?: FacturaDetalle[];
  idUsuario?: Usuario;
  idEvento?: Evento;
}
