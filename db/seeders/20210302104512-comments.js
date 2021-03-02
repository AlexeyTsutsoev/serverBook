"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "comments",
      [
        {
          author_id: 1,
          book_id: 13,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 2,
          book_id: 4,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 3,
          book_id: 3,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 1,
          book_id: 11,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 2,
          book_id: 12,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 3,
          book_id: 6,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 3,
          book_id: 9,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 1,
          book_id: 10,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          author_id: 2,
          book_id: 3,
          text:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("comments", null, {}),
};
