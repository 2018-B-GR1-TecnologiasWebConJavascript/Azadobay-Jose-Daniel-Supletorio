/**
 * Paciente.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombres: {
      type: 'string',
      required: true
    },
    apellidos: {
      type: 'string',
      required: true
    },
    fechaNacimiento: {
      type: 'string',
      required: true,
      columnName: 'fecha_nacimiento' ,
    },

    numeroHijos: {
      type: 'number',
      required: true
    },

    seguroSocial: {
      type: 'boolean',
      defaultsTo: true,
      columnName: 'seguro_social'
    },

    medicamentos: {
      collection: 'Medicamento',
      via: 'idPaciente',
    },

    idUsuario: {
      model:'Usuario'
    }



  },

};

