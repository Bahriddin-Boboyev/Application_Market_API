"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "applications",
      [
        {
          name: "Telegram",
          categoryId: "1",
          userId: "2",
        },
        {
          name: "Plants vs Zombies",
          categoryId: "2",
          userId: "2",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("applications", null, {});
  },
};
