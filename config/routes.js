/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  //routes for entity

  'get /entity/:id':
  {
    controller: 'entity',
    action: 'show'
  },

  'post /entity':
  {
    controller: 'entity',
    action: 'create'
  },

  'put /entity/:id':
  {
    controller: 'entity',
    action: 'update'
  },

  'delete /entity/:id':
  {
    controller: 'entity',
    action: 'destroy'
  },

 //routes for fields
 'post /fields':
 {
  controller: 'fields',
  action: 'create'
 } ,

 'get /fields':
 {
  controller: 'fields',
  action: 'show'
 },

 'put /fields/:id':
 {
  controller: 'fields',
  action: 'update'
 },

 'delete /fields/:id':
 {
  controller: 'fields',
  action: 'destroy'
 },

 //routes for group
 'post /groups':
 {
  controller: 'group',
  action: 'create'
 },

 'get /groups':
 {
  controller: 'group',
  action: 'show'
 },

 'put /groups/:id':
 {
  controller: 'group',
  action: 'update'
 },

 'delete /groups/:id':
 {
  controller: 'group',
  action: 'destroy'
 },

 //routes for people
 'get /people':
 {
  controller: 'people',
  action: 'show'
 },

 'post /people':
 {
  controller: 'people',
  action: 'create'
 },

 'put /people/:id':
 {
  controller: 'people',
  action: 'update'
 },

 'delete /people/:id':
 {
  controller: 'people',
  action: 'destroy'
 },
  // 'post/entity' : 'EntityController.create',
  // 'get/entity/:id' : 'EntityController.show',
  // 'put/entity/:id' : 'EntityController.update',
  // 'delete/entity/:id' : 'EntityController.destroy',

  //routes for fields
  // 'post/fields' : 'FieldsController.create',
  // 'get/fields/:id' : 'FieldsController.show',
  // 'put/fields/:id' : 'FieldsController.update',
  // 'delete/fields/:id' : 'FieldsController.destroy',

   //routes for group
  // 'post /groups' : 'GroupController.create',
  // 'get /groups' : 'GroupController.show',
  // 'put /groups/:id' : 'GroupController.update',
  // 'delete /groups/:id' : 'GroupController.destroy',

  // routes for people

  // 'post /people' : 'PeopleController.create',
  // 'get /people' : 'PeopleController.show',
  // 'put /people/:id' : 'PeopleController.update',
  // 'delete /people/:id' : 'PeopleController.destroy',

  'get /rules':
  { 
    controller: 'rule',
    action: 'index'
  },

  'get /rules/:id':
  {
    controller: 'rule',
    action: 'show'
  },

  'get /rules/new':
  {
    controller: 'rule',
    action: 'new'
  },

  'post /rules':
  {
    controller: 'rule',
    action: 'create'
  },

  'get /rules/edit/:id':
  {
    controller: 'rule',
    action: 'edit'
  },

  'put /rules/:id':
  {
    controller: 'rule',
    action: 'update'
  },
  
  'delete /rules/:id':
  {
    controller: 'rule',
    action: 'destroy'
  },

'get /nestedconditions':
{
  controller: 'nestedcondition',
  action: 'index'
},

  'get /nestedconditions/:id':
  {
    controller: 'nestedcondition',
    action: 'show'
  },

  'get /nestedconditions/new':
  {
    controller: 'nestedcondition',
    action: 'new'
  },

  'post /nestedconditions':
  {
    controller: 'nestedcondition',
    action: 'create'
  },

  'get /nestedconditions/edit/:id':
  {
    controller: 'nestedcondition',
    action : 'edit'
  },

  'put /nestedconditions/:id':
  {
    controller : 'nestedcondition',
    action: 'update'
  },

  'delete /nestedconditions/:id':
  {
    controller : 'nestedcondition',
    action : 'destroy'
  },

  'get /singleconditions':
  {
    controller: 'singlecondition',
    action: 'index'
  },

  'get /singleconditions/:id':
  {
    controller: 'singlecondition',
    action: 'show'
  },

  'get /singleconditions/new':
  {
    controller: 'singlecondition',
    action: 'new'
  },

  'post /singleconditions':
  {
    controller: 'singlecondition',
    action: 'create'
  },

  'get /singleconditions/edit/:id':
  {
    controller: 'singlecondition',
    action: 'edit'
  },

  'put /singleconditions/:id':
  {
    controller: 'singlecondition',
    action: 'update'
  },

  'delete /singleconditions/:id':
  {
    controller: 'singlecondition',
    action: 'destroy'
  },

  'get /customersegments':
  {
    controller: 'customersegment',
    action: 'index'
  },

  'get /customersegments/:id':
  {
    controller: 'customersegment',
    action: 'show'
  },

  'get /customersegments/new':
  {
    controller: 'customersegment',
    action: 'new'
  },

  'post /customersegments':
  {
    controller: 'customersegment',
    action: 'create'
  },

  'get /customersegments/edit/:id':
  {
    controller: 'customersegment',
    action: 'edit'
  },

  'put /customersegments/:id':
  {
    controller: 'customersegment',
    action: 'update'
  },

  'delete /customersegments/:id':
  {
    controller: 'customersegment',
    action: 'destroy'
  },

  'get /operatorfunctions':
  {
    controller: 'operatorfunction',
    action: 'index'
  },

  'get /operatorfunctions/:id':
  {
    controller: 'operatorfunction',
    action: 'show'
  },

  'get /operatorfunctions/new':
  {
    controller: 'operatorfunction',
    action: 'new'
  },

  'post /operatorfunctions':
  {
    controller: 'operatorfunction',
    action: 'create'
  },

  'get /operatorfunctions/edit/:id':
  {
    controller: 'operatorfunction',
    action: 'edit'
  },

  'put /operatorfunctions/:id':
  {
    controller: 'operatorfunction',
    action: 'update'
  },

  'delete /operatorfunctions/:id':
  {
    controller: 'operatorfunction',
    action: 'destroy'
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
