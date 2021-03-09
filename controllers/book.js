const Sequelize = require("sequelize");
const db = require("../db/models");
const Op = Sequelize.Op;

const getPagination = (page, size) => {
  const DEFAULT_LIMIT = 6;
  const limit = size ? +size : DEFAULT_LIMIT;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const makeFilter = (query) => {
  // &sort=price_asc
  const filter = {
    include: [
      {
        model: db.authors,
      },
      {
        model: db.publishers,
      },
    ],
    // order: ["id"],
  };

  const where = {};
  if (query.authors) {
    const authorsArrayOfString = query.authors;
    const authorsArrayOfNumber = authorsArrayOfString.map((i) => parseInt(i));
    where.author_id = authorsArrayOfNumber;
  }
  if (query.publishers) {
    const publishersArrayOfString = query.publishers;
    const publishersArrayOfNumber = publishersArrayOfString.map((i) =>
      parseInt(i)
    );
    where.publisher_id = publishersArrayOfNumber;
  }
  if (query.categories) {
    const categoriesArrayOfString = query.categories;
    const categoriesArrayOfNumber = categoriesArrayOfString.map((i) =>
      parseInt(i)
    );
    filter.include.push({
      model: db.categories,
      required: true,
      through: {
        model: db.bookCategories,
        where: {
          category_id: categoriesArrayOfNumber,
        },
      },
    });
  }

  if (query.prices) {
    const pricesArrayOfString = query.prices;
    const pricesArrayOfNumber = pricesArrayOfString.map((i) => parseInt(i));
    where.price = {
      [Op.between]: [pricesArrayOfNumber[0], pricesArrayOfNumber[1]],
    };
  }

  const { limit, offset } = getPagination(query.page, query.limit);

  filter.where = where;
  filter.limit = limit;
  filter.offset = offset;
  return filter;
};

const getBooks = async (request, response) => {
  try {
    const query = request.query;
    const filter = makeFilter(query);

    const books = await db.books.findAndCountAll(filter);

    return response.status(201).json(books);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

const getOneBook = async (request, response) => {
  try {
    const book = await db.books.findByPk(parseInt(request.params.id), {
      include: [
        {
          model: db.authors,
          attributes: ["id", "name"],
        },
        {
          model: db.publishers,
          attributes: ["id", "name"],
        },
        {
          model: db.categories,
          attributes: ["id", "name"],
          through: {
            model: db.bookCategories,
            attributes: [],
          },
        },
      ],
      attributes: ["id", "name", "price", "discription", "cover"],
    });
    if (book) {
      return response.status(201).json(book);
    }
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  getBooks,
  getOneBook,
};
