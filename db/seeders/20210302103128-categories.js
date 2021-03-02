"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Бестселлеры",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Психология",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Художественная литература",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Искусство, дизайн и мода",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Хобби, дом и досуг",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Научно-популярные книги",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Здоровье, красота и спорт",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Учебная литература",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Детские книги",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Публицистика",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Религия и эзотерика",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Гуманитарные и общественные науки",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("categories", null, {}),
};
