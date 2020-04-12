export {};

const jwt = require("jsonwebtoken");

module.exports = params => {
  return jwt.sign(params, process.env.AUTH_TOKEN, {
    expiresIn: 86400
  });
};
