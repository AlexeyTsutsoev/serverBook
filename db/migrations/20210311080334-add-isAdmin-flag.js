"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("users", "isAdmin", Sequelize.BOOLEAN);
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("users", "isAdmin");
  },
};
