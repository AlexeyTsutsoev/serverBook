"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class publishers extends Model {
    static associate(models) {
      publishers.hasMany(models.books, {
        foreignKey: "publisher_id",
        onDelete: "CASCADE",
      });
    }
  }
  publishers.init(
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
      modelName: "publishers",
    }
  );
  return publishers;
};
