/**
 * StudentClass.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    roster: { type: 'string', required: true },
    // Add a reference to Student
    student: {
      model: 'student',
    }

  },

};

