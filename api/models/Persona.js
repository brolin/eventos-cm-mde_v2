/**
* Persona.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  // schema : true,
  attributes: {
    nombre : { type : 'string' },
    telefonos : { type : 'string' },
    // Buscar alternativa para el registro donde no se necesite correo electrónico
    correo : {
      type : 'email',
      required : true,
      unique : true
    },
    institucionEducativa : { type : 'string' },
    inscritoEnEvento : {
      collection : 'Evento',
      via : 'inscritosEvento',
      dominant : 'true'
    },
    // Una persona solo tiene un nodo más cercano, los eventos tienen asociados los nodos también
    nodoMasCercano : {
      model : 'Locacion'
    },
    fechaNacimiento : {
      type : 'DATE'
    },
    estudiadoMusicaAntes : {
      type : 'BOOLEAN'
    },
    sabeTocarInstrumento : {
      type : 'BOOLEAN'
    },
    generosMusicales : {
      type : 'ARRAY'
    },
    instrumentoDePreferencia : {
      type : 'ARRAY'
    },
    sexo : {
      type : 'string',
      enum : ['Hombre','Mujer']
    }
  }
};
