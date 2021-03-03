const { Sequelize } = require("../db/models");
const db = require("../db/models");

const makeFilter = (query) => {
  const filter = {};
  const where = {};
  if (query.authors) {
    where.author_id = query.authors;
  }
  if (query.publishers) {
    where.publisher_id = query.publishers;
  }
  if (query.limit) {
    filter.limit = query.limit;
  }

  filter.where = where;
  return filter;
};

const getBooks = async (request, response) => {
  try {
    // api/books?caterories=[1,2]&authors=[12,13]&page=2&limit=6
    const query = request.query;
    const filter = makeFilter(query);
    // const filtredBook = await db.books.findAll({
    //   where: {
    //     //publisher_id: query.publishers,
    //     [Op.or]: [{ author_id: query.authors }, { authorId: 4 }],
    //   },
    //   include: [
    //     {
    //       model: db.authors,
    //     },
    //     {
    //       model: db.publishers,
    //     },
    //   ],
    //   // order: ["id"],
    // });

    const baseFilter = {
      include: [
        {
          model: db.authors,
        },
        {
          model: db.publishers,
        },
      ],
      order: ["id"],
    };

    const books = await db.books.findAll({
      ...baseFilter,
      ...filter,
    });

    return response.status(201).json(books);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  getBooks,
};
