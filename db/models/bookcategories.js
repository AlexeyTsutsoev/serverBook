"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookCategories extends Model {
    associate(models) {
      bookCategories.belongsTo(models.categories, {
        foreignKey: "category_id",
      });

      bookCategories.belongsTo(models.books, {
        foreignKey: "book_id",
      });
    }
  }
  bookCategories.init(
    {
      book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "bookCategories",
    }
  );
  return bookCategories;
};
