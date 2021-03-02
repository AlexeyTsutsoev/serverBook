"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      "books",
      [
        {
          name: "Властелин Колец",
          author_id: 1,
          publisher_id: 1,
          cover:
            "https://img4.labirint.ru/rc/f83cb08bb81fd35fae11b71c0dd1bd1c/220x340/books4/35638/cover.jpg?1280394613",
          price: 3000,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Simple book",
          author_id: 3,
          publisher_id: 5,
          cover: null,
          price: 5464,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Book",
          author_id: 10,
          publisher_id: 11,
          cover: null,
          price: 564,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Green book",
          author_id: 9,
          publisher_id: 5,
          cover: null,
          price: 515,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Good book",
          author_id: 1,
          publisher_id: 5,
          cover: null,
          price: 5666,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Bad book",
          author_id: 9,
          publisher_id: 3,
          cover: null,
          price: 2342,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "I tired",
          author_id: 3,
          publisher_id: 3,
          cover: null,
          price: 5465,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Invent",
          author_id: 7,
          publisher_id: 3,
          cover: null,
          price: 4324,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Titles for books",
          author_id: 4,
          publisher_id: 9,
          cover: null,
          price: 3213,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "F****ng book",
          author_id: 1,
          publisher_id: 1,
          cover: null,
          price: 1,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Good Book",
          author_id: 7,
          publisher_id: 3,
          cover: null,
          price: 3454,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Simple Book",
          author_id: 3,
          publisher_id: 3,
          cover: null,
          price: 3333,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Конституция Российской Федерации",
          author_id: 1,
          publisher_id: 1,
          cover: null,
          price: 0,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
        {
          name: "Жулик",
          author_id: 1,
          publisher_id: 1,
          cover: null,
          price: 9999,
          discription:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          createdAt: "2020-12-20T22:18:25.511Z",
          updatedAt: "2020-12-20T22:18:27.494Z",
        },
      ],
      {}
    ),

  down: (queryInterface, Sequelize) =>
    queryInterface.bulkDelete("books", null, {}),
};
