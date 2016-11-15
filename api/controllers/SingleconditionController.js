/**
 * SingleconditionController
 *
 * @description :: Server-side logic for managing singleconditions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `SingleconditionController.index()`
   */
  index: function (req, res) {
    //console.log("index");
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `SingleconditionController.show()`
   */
  show: function (req, res) {
    //console.log("show");
    var id = req.param('id');
    //console.log(id);
    Singlecondition.findOne(id, function(err, showSinglecondition){
      if(err){
        res.send(err,500);
      }
      //console.log(showSinglecondition);
      res.json({response : showSinglecondition});
    });
  },


  /**
   * `SingleconditionController.new()`
   */
  new: function (req, res) {
    return res.json();
    //console.log("new");
  },


  /**
   * `SingleconditionController.create()`
   */
  create: function (req, res) {
    //console.log("create");
    var param = req.allParams();
    //console.log(param);
    Singlecondition.create(param, function(err, createSinglecondition){
      if(err){
        res.send(err,500);
      }
      //console.log(createSinglecondition);
      res.json({response : createSinglecondition});
    });
  },


  /**
   * `SingleconditionController.edit()`
   */
  edit: function (req, res) {
   var id = req.param('id');
   //console.log(id);
   Singlecondition.findOne(id, function(err, editSinglecondition){
    if(err){
      res.send(err,500);
    }
    //console.log(editSinglecondition);
    res.json('editSinglecondition');
   });
  },


  /**
   * `SingleconditionController.update()`
   */
  update: function (req, res) {
   //console.log("update");
   var id = req.param('id');
   //console.log(id);
   var param = req.allParams();
   //console.log(param);
   Singlecondition.update(id, param, function(err,updateSinglecondition){
    if(err){
      res.send(err, 500);
    }
    //console.log(updateSinglecondition);
    res.json({response : updateSinglecondition});
   });
  },


  /**
   * `SingleconditionController.destroy()`
   */
  destroy: function (req, res) {
    //console.log("delete");
    var id = req.param('id');
    //console.log(id);
    Singlecondition.findOne(id, function(err, findSinglecondition){
      if(err){
        res.send(err, 500);
      }
      //console.log(findSinglecondition);
      Singlecondition.destroy(id, function(err, Singleconditiondeleted){
        if (err)
        {
          res.send(err, 500);
        }
        //console.log(Singleconditiondeleted);
        res.json({ response : Singleconditiondeleted });
      });
    });
  } 
};

