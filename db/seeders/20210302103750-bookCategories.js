"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "bookCategories",
      [
        {
          book_id: 1,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 1,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 10,
          category_id: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 13,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 13,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 5,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 6,
          category_id: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 6,
          category_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 4,
          category_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 5,
          category_id: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 2,
          category_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_id: 6,
          category_id: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("bookCategories", null, {}),
};
