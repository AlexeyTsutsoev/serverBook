const db = require("../db/models");
const { CustomError } = require("../utils/CustomError");

const getUsersFavoritesBooks = async (request, response) => {
  try {
    const { userId } = request.query;
    const favorites = await db.favoritesbook.findAll({
      where: {
        user_id: userId,
      },
      include: [
        {
          model: db.books,
          attributes: {
            exclude: ["createdAt", "updatedAt", "author_id", "publisher_id"],
          },
          include: [
            {
              model: db.authors,
              attributes: ["name"],
            },
            {
              model: db.publishers,
              attributes: ["name"],
            },
          ],
        },
      ],
      attributes: ["id", "user_id", "book_id"],
    });

    return response.status(201).json({ favorites });
  } catch (err) {
    console.log(err);
    return response.status(500).send({ message: "Error on server" });
  }
};

const addToFavorites = async (request, response) => {
  try {
    const { userId, bookId } = request.body;

    const candidate = await db.favoritesbook.findOne({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    });

    if (candidate) {
      throw new CustomError({
        message: "Данная книга уже добавлена в избранное",
      });
    }

    await db.favoritesbook.create({
      user_id: userId,
      book_id: bookId,
    });

    return response.status(201).json({
      message: `Книга ${bookId} добавлена в избранное к пользователю ${userId}`,
    });
  } catch (err) {
    console.log(err);
    return response.status(500).send({ message: "Error on server" });
  }
};

const deleteFromFavorites = async (request, response) => {
  try {
    const { userId, bookId } = request.body;

    const candidate = await db.favoritesbook.findOne({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    });

    if (!candidate) {
      throw new CustomError({ message: "Данная книги нет в избранном" });
    }

    await db.favoritesbook.destroy({
      where: {
        user_id: userId,
        book_id: bookId,
      },
    });

    return response.status(201).json({
      message: `Книга ${bookId} удалена из избранного у пользователя ${userId}`,
    });
  } catch (err) {
    console.log(err);
    return response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  addToFavorites,
  getUsersFavoritesBooks,
  deleteFromFavorites,
};
