const db = require("../db/models");

const getAllAuthors = async (request, response) => {
  try {
    const authors = await db.authors.findAll({
      attributes: ["id", "name"],
    });

    return response.status(201).json(authors);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const getAllPublishers = async (request, response) => {
  try {
    const publishers = await db.publishers.findAll({
      attributes: ["id", "name"],
    });
    return response.status(201).json(publishers);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const getAllCategories = async (request, response) => {
  try {
    const categories = await db.categories.findAll({
      attributes: ["id", "name"],
    });
    return response.status(201).json(categories);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = { getAllAuthors, getAllPublishers, getAllCategories };
