
export interface Medicamento {

   id?:number;
  nombre: string;
  gramosAIngerir: number;
  composicion: string;
  usadoPara: string;
  fechaCaducidad: string;
  numeroPastillas: number;

  idPaciente?: number;
  eventos?: number;

}
