/**
 * Student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    firstName: { type: 'string', required: true },
    lastName: { type: 'string', required: true },
    birthday: { type: 'string', required: true },
    variance: { type: 'number' },
    allergies: { type: 'string' },
    allergyPermission: { type: 'boolean' },
    // associations
    studentClass: {
      collection: 'studentClass',
      via: 'student'
    }
  },

};

