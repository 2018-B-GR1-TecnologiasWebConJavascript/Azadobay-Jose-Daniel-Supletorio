import {Rol} from "./Rol";

export interface Usuario {
  id?: number;
  nombre: string;
  correo: string;
  password: string;
  fechaNacimiento: string ;
  roles?: Rol[];

}
