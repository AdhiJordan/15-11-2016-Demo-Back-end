/**
 * EntityController
 *
 * @description :: Server-side logic for managing entities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {



    /**
     * `EntityController.new()`
     */
    new: function(req, res) {
        return res.json({
            todo: 'new() is not implemented yet!'
        });
    },


    /**
     * `EntityController.show()`
     */
    show: function(req, res) {      
        var id = req.param('id');
        Entity.find().populate('fields').exec(function(err, entityshow) {
            if (err) return res.send(err, 500);
            res.json({ entityshow: entityshow });
        });
    },


    /**
     * `EntityController.create()`
     */
    create: function(req, res) {
        var params = req.params.all();
        // console.log(params);
        Entity.create(params, function(err, create) {
            if (err) return res.send(err, 500)
            var id = create.id;
            Entity.findOne({ id: id }).populate('fields').exec(function(err, entitycreate) {
                if (err) return res.send(err, 500);
                // console.log(create);
                res.json(entitycreate);
            });
        });
    },


    /**
     * `EntityController.edit()`
     */
    edit: function(req, res) {
        return res.json({
            todo: 'edit() is not implemented yet!'
        });
    },


    /**
     * `EntityController.update()`
     */
    update: function(req, res) {
        var params = req.params.all();
        var id = req.param('id');
        Entity.update(id, params, function(err, entityupdate) {
            if (err) return res.send(err, 500);
            Fields.destroy({ entitys: null }).exec(function(err, fielddestroy) {
                if (err) return res.send(err, 500);
                console.log(fielddestroy);
            });
            Entity.find({ id: id }).populate('fields').exec(function(err, update) {
                if (err) return res.send(err, 500);
                res.json({ entityupdate: update });
            });
        });
    },


    /**
     * `EntityController.destroy()`
     */
    destroy: function(req, res) {
        var id = req.param('id');
        Entity.find(id, function(err, destroy) {
            if (err) return res.send(err, 500);
            Entity.destroy({ id: id }).exec(function(err, entitydelete) {
                if (err) return res.send(err, 500);
                Fields.destroy({ entitys: id }).exec(function(err, fieldsdelete) {
                    if (err) return res.send(err, 500);
                    res.json({ entitydelete: "delete" });
                });
            });
        });
    }
};
