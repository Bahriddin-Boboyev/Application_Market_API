const { DataTypes } = require("sequelize");
const sequelize = require("../../db");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      length: 300,
    },
    role: {
      type: DataTypes.ENUM(["admin", "user"]),
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = User;
