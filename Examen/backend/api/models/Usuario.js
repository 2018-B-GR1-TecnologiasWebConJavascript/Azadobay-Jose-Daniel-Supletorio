/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */


module.exports = {


  attributes: {


    nombre: {
      type: 'string',
      required: true
    },
    correo: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    fecha_nacimiento: {
      type: 'string',
      required: true
    },


    roles: {
      collection: 'Rol',
      via: 'usuario',
      through: 'RolesPorUsuario'
    }
  },

};


