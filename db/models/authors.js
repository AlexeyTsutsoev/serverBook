"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class authors extends Model {
    static associate(models) {
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
