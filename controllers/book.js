const db = require("../db/models");

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
    const authorsString = query.authors.split(",");
    const authorsNumber = authorsString.map((i) => parseInt(i));
    where.author_id = authorsNumber;
  }
  if (query.publishers) {
    const publishersString = query.publishers.split(",");
    const publishersNumber = publishersString.map((i) => parseInt(i));
    where.publisher_id = publishersNumber;
  }
  if (query.categories) {
    const categoriesString = query.categories.split(",");
    const categoriesNumber = categoriesString.map((i) => parseInt(i));
    filter.include.push({
      model: db.categories,
      required: true,
      through: {
        model: db.bookCategories,
        where: {
          category_id: categoriesNumber,
        },
      },
    });
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
    //   {
    //   include: [
    //     {
    //       model: db.categories,

    //       through: {
    //         model: db.bookCategories,
    //         where: {
    //           category_id: [1, 3],
    //         },
    //       },
    //     },
    //   ],
    // }

    return response.status(201).json(books);
  } catch (err) {
    console.log("error", err);
    response.status(500).send({ message: "Error on server" });
  }
};

module.exports = {
  getBooks,
};
