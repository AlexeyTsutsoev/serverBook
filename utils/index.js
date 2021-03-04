const config = require("../config");
const jwt = require("jsonwebtoken");

const createTokensPair = (user) => {
  const result = {
    accessToken: jwt.sign({ userId: user.id }, config.jwt.secret, {
      expiresIn: config.jwt.accessTokenExpiresIn,
    }),
    refreshToken: jwt.sign({ userId: user.id }, config.jwt.secret, {
      expiresIn: config.jwt.refreshTokenExpiresIn,
    }),
  };
  return result;
};

module.exports = createTokensPair;
