/**
 * RuleController
 *
 * @description :: Server-side logic for managing rules
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	


  /**
   * `RuleController.index()`
   */
  index: function (req, res) {
    //console.log("index");
    return res.json({
      todo: 'index() is not implemented yet!'
    });
  },


  /**
   * `RuleController.show()`
   */
  show: function (req, res) {
    //console.log("show");
    var id = req.param('id');
    //console.log(id);
    Rule.findOne(id).populate('nestedConditions').populate('singleConditions').populate('customerSegments').exec(function (err, showrules) {
      if(err){
        res.send(err,500);
      }
      //console.log(showrules);
     res.json(showrules);
    });
  },

  /**
   * `RuleController.new()`
   */
  new: function (req, res) {
    return res.json();
    //console.log("new");
  },


  /**
   * `RuleController.create()`
   */
  create: function (req, res) {
   console.log("create");
   var param = _.extend(req.query || req.params || {},req.body || {});
   console.log(param);
   Rule.create(param,function(err,createrule){
    if(err){
      console.log(err);
      return res.send(err,500);
    }
    //console.log("created");
    //console.log(param);
    console.log(createrule);
    console.log(createrule.id);
    var id = createrule.id;
    console.log(id);
    Rule.findOne(id).populate('nestedConditions').populate('singleConditions').populate('customerSegments').exec(function (err, showrules) {
      if(err){
        res.send(err,500);
      }
     console.log(showrules);
     res.json(showrules);
    });
    //res.json({model: createrule});
   });
  },


  /**
   * `RuleController.edit()`
   */
  edit: function (req, res) {
    var id = req.param('id');
    Rule.findOne(id,function(err,editrule){
      if(err){
        res.send(err,500);
      }
      res.json('editrule');
    });
  },


  /**
   * `RuleController.update()`
   */
  update: function (req, res) {
    //console.log("update");
    var id = req.param('id');
    //console.log(id);
    var param = req.allParams();
    //console.log(param);
    Rule.update(id, param, function (err, updaterule){
      if(err){
        console.log(err);
        res.send(err,500);
      }
      //console.log(updaterule);
      res.json(updaterule);
    });
  },


  /**
   * `RuleController.destroy()`
   */
  destroy: function (req, res) {
   var id = req.param('id');
   Rule.findOne(id,function(err,findrule){
    if(err){
      res.send(err,500);
    }
    //console.log(findrule);
    Singlecondition.findOne({ rules : id}, function(err, findSinglecondition){
      if(err){
        res.send(err,500);
      }
      //console.log(findSinglecondition);

    Nestedcondition.findOne({ ruleId : id}, function(err, findNestedcondition){
      if (err){
        res.send(err,500);
      }
      //console.log(findNestedcondition);

      Customersegment.findOne({ ruleNo : id }, function(err, findCustomersegment){
        if(err){
          res.send(err, 500);
        }
     
      // Sample.findOne({ sampleRule : id}, function(err, findsamples){
      //   if(err){
      //     res.send(err,500);
      //   }
      //   console.log(findsamples);

      // Example.findOne({ ruleExample : id}, function(err, findruleExamples){
      //   if(err){
      //     res.send(err,500);
      //   }
      // });
      // });

     Singlecondition.destroy({ rules: id}, function(err, deleteSinglecondition){
      if(err){
        res.send(err,500);
      }
      //console.log(deleteSinglecondition);
     });
     Nestedcondition.destroy({ruleId : id}, function(err, deleteNestedcondition){
        if(err){
          res.send(err,500);
        }
      //console.log(deleteNestedcondition);
    });

     Customersegment.destroy({ ruleNo : id}, function(err, deleteCustomersegment){
      if(err){
        res.send(err, 500);
      }
     });

     // Sample.destroy({ sampleRule : id},function(err,deletesample){
     //  if(err){
     //    res.send(err,500);
     //  }
     // });

     // Example.destroy({ ruleExample : id}, function(err, deleteruleExample){
     //  if(err){
     //    res.send(err, 500);
     //  }
     // });
      Rule.destroy(id,function(err,deleterule){
      if(err){
        res.send(err,500);
      }
    });
      });
    });
     });
    // Rule.destroy(id,function(err,deleterule){
    //   if(err){
    //     res.send(err,500);
    //   }
    // });
    res.json('deleterule');
   });
  }
};

