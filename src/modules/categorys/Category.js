const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {
    tableName: "categorys",
    timestamps: false,
  }
);

module.exports = Category;
