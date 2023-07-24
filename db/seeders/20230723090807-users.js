"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          firstName: "John",
          lastName: "Doe",
          username: "johndoe",
          password: bcrypt.hashSync("12345", 10),
          role: "admin",
        },
        {
          firstName: "Elon",
          lastName: "Musk",
          username: "elonmusk",
          password: bcrypt.hashSync("12345", 10),
          role: "user",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
