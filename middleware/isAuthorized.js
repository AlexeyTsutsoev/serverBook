const jwt = require("jsonwebtoken");
const config = require("../config");

const isAuthorized = (request, response, next) => {
  console.log("check middleware");
  try {
    if (request.method === "OPTIONS") {
      return next();
    }

    if (!request.headers.authorization) {
      return response
        .status(401)
        .json({ message: "empty request authorization header" });
    }

    const token = request.headers.authorization.split(" ")[1];

    console.log(token);

    const decodedToken = jwt.verify(token, config.jwt.secret);

    request.user = decodedToken;
    next();
  } catch (err) {
    console.log(err);
    return response.status(401).json({
      message: `error on server: ${err}`,
      type: err.name || "Common",
    });
  }
};

module.exports = isAuthorized;
