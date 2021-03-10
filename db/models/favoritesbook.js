"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class favoritesbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
