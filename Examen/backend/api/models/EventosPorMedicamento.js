/**
 * EventosPorMedicamento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idMedicamento: {
      model: 'Medicamento'
    },

    precioBase:{
      columnName: 'precio_base',
      type: 'number'
    },

    detalleFacturas: {
      collection: 'FacturaDetalle',
      via: 'idEventosHijos',
    },

    idEvento:{
      model:'Evento'
    },


  },

};

