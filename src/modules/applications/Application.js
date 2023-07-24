const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const Application = sequelize.define(
  "Application",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: "categorys",
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "applications",
    timestamps: false,
  }
);

module.exports = Application;
