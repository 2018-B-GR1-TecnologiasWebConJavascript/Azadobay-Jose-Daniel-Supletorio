/**
 * Evento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //id:{
      //type:'number'
    //},
    nombre : {
      type: 'string',
      required: true
    },

    fechaEvento :{
      type: 'string',

    },

    facturas:{
      collection: 'FacturaCabecera',
      via: 'idEvento'
    },

    medicamentos:{
      collection: 'Medicamento',
      via: 'idEvento',
      through: 'EventosPorMedicamento'
    }

  },

};

