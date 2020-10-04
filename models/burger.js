// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {

  all: function(callback) {
    orm.all("burgers", function(res) {
      callback(res);
    });
  },

  // The variables cols and vals are arrays.
  create: function(columns, values, callback) {
    orm.create("burgers", columns, values, function(res) {
      callback(res);
    });
  },

  update: function(objColVals, condition, callback) {
    orm.update("burgers", objColVals, condition, function(res) {
      callback(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
