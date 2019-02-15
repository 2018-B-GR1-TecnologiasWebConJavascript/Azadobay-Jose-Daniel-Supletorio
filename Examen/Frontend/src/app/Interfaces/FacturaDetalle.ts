export interface FacturaDetalle {
  id?:any;
  item?:string,
  cantidad?: number;
  precio?: number;
  total?: number;
  idFacturaCabecera?: number;
  idEventosHijos?: number;
}
