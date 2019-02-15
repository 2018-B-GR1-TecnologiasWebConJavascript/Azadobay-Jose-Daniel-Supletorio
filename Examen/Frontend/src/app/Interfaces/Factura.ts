export interface Factura{
  id?:any;
  nombre?:string;
  cedula :number;
  telefono :number;
  direccion:string;
  correo:string;
  fecha:string;
  total:number;
  tipoPago:string;
  estado:string;
  idUsuario:number;
  idEvento:number;
}
