/**
 * InventarioController
 *
 * @description :: Server-side logic for managing inventarios
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  findAll : function(req,res){
    Inventario.find().exec(function(err, item){
      res.view('inventario/findall',{inventario : item});
    });
  },
  ordenAlfabetico : function(req,res){
    Inventario.find().sort({item:1}).exec(function(err, item){
      res.view('inventario/findall',{inventario : item});
    });
  },
   ordenPrecio : function(req,res){
    Inventario.find().sort({precio1:-1}).exec(function(err, item){
      res.view('inventario/findall',{inventario : item});
    });
  },
   ordenPrecioTotal : function(req,res){
    Inventario.find().sort({total:-1}).exec(function(err, item){
      res.view('inventario/findall',{inventario : item});
    });
  },
   editarDetalle : function(req, res){
     Inventario.findOneById(req.param('id')).exec(function(err, item){
      res.render('inventario/editarDetalle',{inventario : item});
      });
    },

   updateDetalle : function(req, res){
     sails.log('entro UUpdate');
     sails.log.verbose(req.body);
     var itemOb ={
       id : req.param('id'), // el req.param viene del name en la forma
       talent : req.param('img'),
       setList : req.param('item'),
       marca1: req.param('marca1'),
        referencia1: req.param('referencia1'),
        urlFabricante1: req.param('urlFabricante1'),
        urlVenta01: req.param('urlVenta01'),
        urlInfo1: req.param('urlInfo1')
        };
         // la anatomia de esto es findOne es la funcion, exec es el callback, los parametros de la funcion de callback son objetos, el uno es error, sino hubo un error el monta todo lo logrado por la funcion en el segundo parametro del callback
       Inventario.findOneById(req.param('id')).exec(function(err, item){
         if (err) {
           sails.log.verbose("No se logró actualizar");
           return res.send(err);
         }
          // underscore funciones comunes, voy al api de lodash.com que me hace merge de los dos objetos
         _.assign(item, itemOb);

         sails.log(item);
         item.save(sails.log.verbose);
         return res.view('todos');
       });

   }
};
