const { Sequelize } = require("sequelize");
const config = require("../shared/config");

module.exports = new Sequelize(
  config.db.name,
  config.db.user,
  config.db.password,
  {
    logging: false,
    port: config.db.port,
    dialect: "postgres",
  }
);
