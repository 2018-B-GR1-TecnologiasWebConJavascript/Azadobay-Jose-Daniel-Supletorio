import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class UsuarioService {

  constructor(private readonly _httpClient:HttpClient){

  }

  //obtener un usuario y sus roles
  findUserLogin(correo,pass) {
    return this._httpClient.get('http://localhost:1337/Usuario/buscarRol?correo='+correo+'&pass='+pass);
  }

  findStudents(id){
    return this._httpClient.get('http://localhost:1337/Usuario/buscarEstudiante/'+id);
  }

  //obtener todos los usuarios del sistema
  findUsers(valor){
    return this._httpClient.get('http://localhost:1337/Usuario/all?nombre_usuario='+valor+'&correo_usuario='+valor);
  }

  findUserForId(id){
    return this._httpClient.get('http://localhost:1337/Usuario/'+id);
  }

  deleteRol(idUser,idRol){
    return this._httpClient.delete('http://localhost:1337/Usuario/eliminarRol?idUser='+idUser+'&idRol='+idRol,
      httpOptions).subscribe(ok=>{console.log(ok + ' eliminado con exito')})
  }

  agregarNuevoRol(idUsuario,idRoll){
    let nuevoRol: NuevoRol = {
      idUser: idUsuario,
      idRol: idRoll
    }
    return this._httpClient.post('http://localhost:1337/Usuario/crearUsuarioRol',nuevoRol).subscribe()
  }

  agregarUsuario(user:UsuarioNuevo){
    return this._httpClient.post('http://localhost:1337/Usuario/crear',user).subscribe()
  }

  eliminarUsuario(id){
    return this._httpClient.delete('http://localhost:1337/Usuario/'+id,httpOptions)
      .subscribe(ok=>{console.log(ok + ' eliminado con exito')})
  }

  obtenerRoles(){
    return this._httpClient.get('http://localhost:1337/Rol/');
  }
}

export interface NuevoRol {
  idUser:number,
  idRol:number
}
export interface UsuarioInterface {
  id?:number,
  nombre_usuario:string,
  correo_usuario:string,
  password_usuario:string,
  fecha_nacimiento_usuario:string,
  rolfk?: RolUsuarioInterface[],
  estudiantes?:EstudianteInterface[]
}

export interface RolUsuarioInterface {
  id:number,
  nombre_rol:string
}

export interface EstudianteInterface {
  id?:number,
  nombres_estudiante:string,
  apellidos_estudiante:string,
  fecha_nacimiento_estudiante:string,
  semestre_actual_estudiante: number,
  graduado:boolean,
  usuariofk?:number,
  materiasFk?: MateriaInterface[]
}

export interface MateriaInterface {
  id: number,
  nombre_materia: string,
  código_materia: string,
  descripcion_materia: string,
  activo_materia: true,
  fecha_creacion_materia: string,
  numero_horas_por_semana: number,
  estudiantefk: number
}

export interface UsuarioNuevo {
  nombre,
  correo,
  password,
  nacimiento,
  rol
}

export interface EventoInterface {
  id?:number,
  nombre:string,
  fecha: string,
  latitud?: number,
  longitud?: number
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};
