                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      /**
 * NestedconditionController
 *
 * @description :: Server-side logic for managing nestedconditions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `NestedconditionController.index()`
   */
  index: function (req, res) {
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `NestedconditionController.show()`
   */
  show: function (req, res) {
    console.log("show");
    var id = req.param('id');
    console.log(id);
    Nestedcondition.findOne(id).exec(function(err,showNestedcondition){
      if(err){
        console.log(err);
        res.send(err,500);
      }
      console.log(showNestedcondition);
      res.json(showNestedcondition);
    });
  },


  /**
   * `NestedconditionController.new()`
   */
  new: function (req, res) {
    return res.json();
    //console.log("new");
  },


  /**
   * `NestedconditionController.create()`
   */
   create: function (req, res) {
   var param = req.allParams();
   console.log(param);
   Nestedcondition.create(param, function(err, createNestedcondition){
    if(err){
      console.log(err);
      res.send(err,500);
    }
    console.log(createNestedcondition);
    res.json(createNestedcondition);
   });
  },

  /**
   * `NestedconditionController.edit()`
   */
  edit: function (req, res) {
    var id = req.param('id');
    //console.log(id);
    Nestedcondition.findOne(id, function(err, editNestedcondition){
      if(err){
        res.send(err,500);
      }
      //console.log(editNestedcondition);
      res.json('editNestedcondition');
    });
    },


  /**
   * `NestedconditionController.update()`
   */
  update: function (req, res) {
    var id = req.param('id');
    //console.log(id);
    var param = req.allParams();
    //console.log(param);
    Nestedcondition.update(id, param, function(err,updateNestedcondition){
      if(err){
        res.send(err,500);
      }
      //console.log(updateNestedcondition);
      res.json({response: updateNestedcondition});
    });
  },


  /**
   * `NestedconditionController.destroy()`
   */
  destroy: function (req, res) {
    var id = req.param('id');
    console.log(id);  
    Nestedcondition.findOne(id, function(err, findNestedcondition){
      if(err){
        res.send(err,500);
      }
      console.log(findNestedcondition);

    Operatorfunction.findOne({nested_id:id}, function(err, findoperator){
    if(err){
      res.send(err, 500);
    }
    console.log(findoperator);

   Operatorfunction.destroy({nested_id:id}, function(err, destroyed){
      if(err){
        res.send(err, 500);
      }
      // console.log(destroyed);
    });
      Nestedcondition.destroy(id, function(err, deleteNestedcondition){
        if(err){
          res.send(err,500);
        }
        // console.log(deleteNestedcondition);
      });
    });
    res.json('deleteNestedcondition');
    });
  }
};

