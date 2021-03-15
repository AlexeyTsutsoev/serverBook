const test = (request, response, next) => {
  console.log("we are here");
  next();
};

module.exports = test;
