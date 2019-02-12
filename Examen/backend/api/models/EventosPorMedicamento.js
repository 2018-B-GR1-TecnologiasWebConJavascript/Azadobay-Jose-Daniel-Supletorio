/**
 * EventosPorMedicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idEvento:{
      model:'Evento'
    },
    idMedicamento: {
      model: 'Medicamento'
    }
  },

};

