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
    fecha_nacimiento: {
      type: 'string',
      required: true
    },

    numeroHijos: {
      type: 'number',
      required: true
    },

    seguroSocial: {
      type: 'boolean',
      defaultsTo: true
    },

    medicamentos: {
      collection: 'Medicamento',
      via: 'idPaciente',
    }



  },

};

