/**
 * Rule.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    ruleName:
    {
      type: 'string'
    },

    entityType:
    {
      type: 'string'
    },

    trueButton:
    {
      type: 'string'
    },

    nestedConditions: {
      collection:'nestedcondition',
      via: 'ruleId'
    },

    singleConditions: {
      collection: 'singlecondition',
      via: 'rules'
    },

    customerSegments: {
      collection: 'customersegment',
      via: 'ruleNo'
    }
  }
};

