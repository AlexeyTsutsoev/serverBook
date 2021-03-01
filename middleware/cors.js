const config = require("../config");

const cors = (request, response, next) => {
  response.header("Access-Control-Allow-Origin", config.cors.siteAdress);
  response.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

module.exports = cors;
