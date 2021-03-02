"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "authors",
      [
        {
          name: "Джон Р.Р. Толкин",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Карл Маркс",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Адам Смит",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Жан Поль Сартр",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Стивен Кинг",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Владимир Маяковский",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Альберт Камю",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Фридрих Ницше",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Арестотель",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Николло Макиавелли",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Александр Пушкин",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Александр Солженицин",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Виктор Пелевин",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Николай Гоголь",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Алексей Толстой",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Айн Рэнд",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Далай Ламма",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("authors", null, {}),
};
