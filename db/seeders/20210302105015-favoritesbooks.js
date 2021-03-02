"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "favoritesbooks",
      [
        {
          book_id: 1,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 10,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 3,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 10,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 7,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 3,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 12,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 9,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 13,
          user_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("favoritesbooks", null, {}),
};
