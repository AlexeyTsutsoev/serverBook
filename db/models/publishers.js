"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class publishers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

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
