"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      authors.hasMany(models.books, {
        foreignKey: "author_id",
        onDelete: "CASCADE",
      });
    }
  }
  authors.init(
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
    },
    {
      sequelize,
      modelName: "authors",
    }
  );
  return authors;
};
