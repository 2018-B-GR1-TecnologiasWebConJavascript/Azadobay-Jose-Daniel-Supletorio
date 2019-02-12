/**
 * Medicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    //id:{
      //type:'number',
      //required: true
    //},
    nombre: {
      type: 'string',
      //required: true
    },
    gramoAIngerir: {
      type: 'number',
      //required: true
    },
    composicion: {
      type: 'string',
      //required: true
    },
    usadoPara: {
      type: 'string',
      //required: true
    },
    fechaCaducidad: {
      type: 'string',
      //required: true
    },
    numeroPastillas: {
      type: 'number',
      //required: true
    },


    idPaciente: {
      collection: 'Paciente',
      via:'medicamentos'
    },

    eventos:{
      collection:'Evento',
      via:'idMedicamento',
      through: 'EventosPorMedicamento'

    }
  },

};

