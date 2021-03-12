"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("users", "role", {
        type: Sequelize.DataTypes.ENUM("user", "admin", "manager"),
        defaultValue: "user",
      }),
      queryInterface.removeColumn("users", "isAdmin"),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("users", "role"),
      queryInterface.addColumn("users", "isAdmin", Sequelize.BOOLEAN),
    ]);
  },
};
