const config = require("../config");
const jwt = require("jsonwebtoken");

const tokens = config.jwt.tokens;
const secret = config.jwt.secret;

const createAccessToken = (user) => {
  const payload = {
    userId: user.id,
    type: tokens.access.type,
  };
  const lifeTime = { expiresIn: tokens.access.expiresIn };

  return jwt.sign(payload, secret, lifeTime);
};

const createRefreshToken = (user) => {
  const payload = {
    userId: user.id,
    type: tokens.refresh.type,
  };

  const lifeTime = { expiresIn: tokens.refresh.expiresIn };

  return jwt.sign(payload, secret, lifeTime);
};

const createTokensPair = (user) => {
  const access = createAccessToken(user);
  const refresh = createRefreshToken(user);
  const result = {
    accessToken: access,
    refreshToken: refresh,
  };
  return result;
};

module.exports = createTokensPair;
