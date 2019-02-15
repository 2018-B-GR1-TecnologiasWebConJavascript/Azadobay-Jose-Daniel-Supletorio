import { Medicamento } from './Medicamento';


export interface Paciente {

  id?: number;
  nombres?: string;
  apellidos?: string;
  fechaNacimiento?: string;
  numeroHijos?: string;
  seguroSocial?: boolean;
}
