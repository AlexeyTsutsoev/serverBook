"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "publishers",
      [
        {
          name: "ACT",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "ЭКСМО",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Азбука",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Бизнес-книги",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Клевер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Альпина Паблишер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Манн, Иванов и Фербер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Рипол Классик",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Питер",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Самокат",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Религия и эзотерика",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Альпина нон-фикшен",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Махаон",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Бомбора",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Иностранка",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("publishers", null, {}),
};
