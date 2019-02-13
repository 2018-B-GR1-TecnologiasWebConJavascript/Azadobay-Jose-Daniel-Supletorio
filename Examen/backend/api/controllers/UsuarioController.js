/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  holaMundo: function (peticion,respuesta){
    return respuesta.ok('ok');
  },


  buscarPorNombre: async function (peticion,respuesta) {

    const parametros = peticion.allParams();

    console.log(parametros)
    console.log(parametros.nombre)

    var nombreEn = await Usuario.find(
      { nombre : { 'startsWith' : parametros.nombre}})

    return respuesta.ok(nombreEn);
  }



};

