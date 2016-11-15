/**
 * CustomersegmentController
 *
 * @description :: Server-side logic for managing customersegments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `CustomersegmentController.index()`
   */
  index: function (req, res) {

    //console.log("index");
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `CustomersegmentController.show()`
   */
  show: function (req, res) {

   //console.log("show");
   var id = req.param('id');
   //console.log(id);
   Customersegment.findOne(id, function(err, showCustomersegment){
    if(err)
    {
      res.send(err, 500);
    }
    //console.log(showCustomersegment);
    res.json( showCustomersegment);
   });
  },


  /**
   * `CustomersegmentController.new()`
   */
  new: function (req, res) {

    //console.log("new");
    return res.json({
      todo: 'new() is not implemented yet!'
    });
  },


  /**
   * `CustomersegmentController.create()`
   */
  create: function (req, res) {

    //console.log("create");
    var param = req.allParams();
    //console.log(param);
    Customersegment.create(param, function(err, createCustomersegment){
      if(err)
      {
        res.send(err, 500);
      }
      //console.log(createCustomersegment);
      res.json( createCustomersegment);
    });
  },


  /**
   * `CustomersegmentController.edit()`
   */
  edit: function (req, res) {

   //console.log("edit");
   var id = req.param('id');
   //console.log(id);
   Customersegment.findOne(id, function(err, editCustomersegment){
    if(err){
      res.send(err, 500);
    }
    //console.log(editCustomersegment);
    res.json('editCustomersegment');
   });
  },


  /**
   * `CustomersegmentController.update()`
   */
  update: function (req, res) {

    console.log("update");
    var id = req.param('id');
    console.log(id);
    var param = req.allParams();
    console.log(param);
    Customersegment.update(id, param, function(err, updateCustomersegment){
      if(err){
        res.send(err, 500);
      }

    Customersegment.findOne(id, function(err, findCustomersegment){
        if(err){
          res.send(err, 500);
        }
      console.log(findCustomersegment);
      res.json(findCustomersegment);
      });
 
      //console.log(updateCustomersegment);
      //res.json({response : updateCustomersegment});
    });
  },


  /**
   * `CustomersegmentController.destroy()`
   */
  destroy: function (req, res) {

    //console.log("destroy");
    var id = req.param('id');
    //console.log(id);
    Customersegment.findOne(id, function(err, findCustomersegment){
      if(err){
        res.send(err, 500);
      }
      //console.log(findCustomersegment);
      Customersegment.destroy(id, function(err, deleteCustomersegment){
        if(err){
          res.send(err, 500);
        }
        //console.log(deleteCustomersegment);
        res.json('deleteCustomersegment');
      });
    });
     }
};

