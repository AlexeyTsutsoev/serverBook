const db = require("../db/models");

const getAllBooks = async (request, response) => {
  try {
    const books = await db.books.findAll({
      attributes: [
        "id",
        "name",
        "author_id",
        "publisher_id",
        "discription",
        "cover",
        "price",
      ],
    });
    return response.status(201).json(books);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  getAllBooks,
};
