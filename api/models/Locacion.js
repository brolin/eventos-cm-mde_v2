/**
* Locacion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nombre    : {
      type : 'string',
      unique : true
    },
    direccion : { type : 'string' },
    barrio    : { type : 'string' },
    comuna    : { type : 'string' },
    telefono  : { type : 'string' },
    correoElectronico : { type : 'email' },
    nombreEncargado  : { type : 'string' },
    cupoLimite : {
      type : 'integer',
      defaultsTo : '30'
    },
    // Atributo que contiene todas las personas que escogieron una locación particular como nodo más cercano
    // Solo válido para locaciones permanentes
    nodoMasCercanoQuienes : {
      model : 'Persona'
      },
    // Establece si es una locación permanente o temporal
    locacionPermanente : {
      type : 'boolean',
      defaultsTo : true
    }
  }
};
