/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {


  attributes: {

    nombre: {
      type: 'string'
    },
    correo: {
      type: 'string',
      required: true,
      isEmail: true
    },
    password: {
      type: 'string',
      required: true,
      minLength: 8,
      maxLength: 16,
      //regex: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
      //regex: /^(?=.*?[AZ])(?=(.*[az]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s)$/i
      //regex: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z])$/
      //regex: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
      regex: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/


    },
    fechaNacimiento: {
      type: 'string',
      columnName: 'fecha_nacimiento',
      regex: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/

    },


    roles: {
      collection: 'Rol',
      via: 'idUsuario',
      through: 'RolesPorUsuario'
    },

    pacientes: {
      collection: 'Paciente',
      via: 'idUsuario'
    }
  },

};


