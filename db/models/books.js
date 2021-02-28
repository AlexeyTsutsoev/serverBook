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
        foreignKey: "id",
      });

      books.belongsTo(models.publishers, {
        foreignKey: "id",
      });

      books.belongsToMany(models.categories, {
        through: "bookcategories",
        foreignKey: "id",
      });

      books.belongsToMany(models.users, {
        through: "comments",
        foreignKey: "id",
      });

      books.belongsToMany(models.users, {
        through: "favoritesbook",
        foreignKey: "id",
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
      author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: DataTypes.INTEGER,
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
