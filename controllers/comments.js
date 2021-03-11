const db = require("../db/models");
const { CustomError } = require("../utils/CustomError");

const getComments = async (request, response) => {
  try {
    bookId = request.query.id;

    const comments = await db.comments.findAll({
      where: {
        book_id: bookId,
      },
      include: [
        {
          model: db.users,
          attributes: ["id", "name", "avatar"],
        },
      ],
      attributes: ["id", "author_id", "book_id", "text"],
      order: ["createdAt"],
    });

    return response.status(201).json(comments);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const createComment = async (request, response) => {
  try {
    const book_id = request.body.bookId;
    const author_id = request.body.userId;
    const text = request.body.text;

    await db.comments.create({
      book_id,
      author_id,
      text,
    });

    return response.status(201).json({ message: "Комментарий отправлен" });
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const updateComment = async (request, response) => {
  try {
    const id = request.params.id;
    const post = await db.comments.findByPk(id);
    if (!post) {
      throw new CustomError("comment does not exist", 400);
    }

    const newValue = request.body.text;

    await db.comments.update(
      { text: newValue },
      {
        where: {
          id,
        },
      }
    );

    return response.status(201).json({ message: "Комментарий изменен" });
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const deleteComment = async (request, response) => {
  try {
    const { id } = request.params;
    const post = await db.comments.findByPk(id);
    if (!post) {
      throw new CustomError("comment does not exist", 400);
    }

    await db.comments.destroy({
      where: {
        id,
      },
    });

    return response.status(201).json({ message: "Комментарий удален" });
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  getComments,
  createComment,
  updateComment,
  deleteComment,
};
