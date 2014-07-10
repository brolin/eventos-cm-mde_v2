/**
* Evento.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    nombre : { type : 'string' },
    descripcion : { type : 'string' },
    requerimientos : { type : 'STRING' }, // ¿Si el evento es un curso con prerrequisitos? Debería ser un json -> https://github.com/balderdashy/waterline-docs/blob/master/models.md#custom-validations
    publicar : {
      type : 'BOOLEAN',
      defaultsTo : 'true'
    },
    eventoInterno : {
      type : 'BOOLEAN',
      defaultsTo : 'false'
    },
    cuposDisponibles : {
      type : 'INTEGER',
      defaultsTo : '30'
      },
    lugar : { type : 'STRING' },
    fechaInicio : { type : 'DATE' },
    fechaFin : { type : 'DATE' },
    horario : { type : 'STRING' },
    contacto : { type : 'STRING' },
    urlImagen : { type : 'STRING' },
    urlMemorias : { type : 'STRING' },
    tallerista : { type : 'STRING' }, // ¿Cómo un submodelo, nombre, teléfono, email ?
     comentarios : {
       collection : 'Comentario',
       via : 'comentarioSobreEvento'
     },
    creadoPor : {
      model : 'Persona'
    },
    inscritosEvento : {
      collection : 'Persona',
      via : 'inscritoEnEvento'
    },
    locacionDelEvento : {
      model : 'Locacion'
    },
    caracterEvento : {
      type : 'string'
      //enum : ['curso','taller','activacion','concierto'] // etc ..
    }
  }
};
