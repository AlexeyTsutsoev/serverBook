"use strict";
const { Model, Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      books.belongsTo(models.authors, {
        foreignKey: "author_id",
      });

      books.belongsTo(models.publishers, {
        foreignKey: "publisher_id",
      });

      books.belongsToMany(models.categories, {
        through: "bookCategories",
        foreignKey: "book_id",
      });

      books.hasMany(models.comments, {
        foreignKey: "book_id",
      });

      books.belongsToMany(models.users, {
        through: "favoritesbook",
        foreignKey: "book_id",
      });
    }
  }
  books.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discription: {
        type: DataTypes.STRING,
      },
      cover: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "books",
    }
  );
  return books;
};
