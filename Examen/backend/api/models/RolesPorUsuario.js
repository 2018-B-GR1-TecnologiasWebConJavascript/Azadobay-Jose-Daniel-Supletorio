/**
 * RolesPorUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    idUsuario:{
      model:'Usuario',
      columnName: 'id_usuario'
    },

    rolUsuario: {
      model: 'Rol',
      columnName: 'rol_usuario'
    }
  },

};
