"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      comments.belongsTo(models.users, {
        foreignKey: "author_id",
      });

      comments.belongsTo(models.books, {
        foreignKey: "book_id",
      });
    }
  }
  comments.init(
    {
      author_id: DataTypes.INTEGER,
      book_id: DataTypes.INTEGER,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "comments",
    }
  );
  return comments;
};
