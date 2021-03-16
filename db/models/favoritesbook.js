"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favoritesbook extends Model {
    static associate(models) {
      favoritesbook.belongsTo(models.books, {
        foreignKey: "book_id",
      });

      favoritesbook.belongsTo(models.users, {
        foreignKey: "user_id",
      });
    }
  }
  favoritesbook.init(
    {
      book_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "favoritesbook",
    }
  );
  return favoritesbook;
};
