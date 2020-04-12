const jwt = require("jsonwebtoken");

const ErrorHandler = require("../Error/ErrorHandler");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return ErrorHandler.unauthorized(res, "No token provided");
  }
  const parts = authHeader.split(" ");

  if (!(parts.length === 2)) {
    return ErrorHandler.unauthorized(res, "Token error");
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return ErrorHandler.unauthorized(res, "Token malformed");
  }

  jwt.verify(token, process.env.AUTH_TOKEN, (error, decoded) => {
    if (error) return ErrorHandler.unauthorized(res, "Token invalid");

    req.userId = decoded.id;
    return next();
  });
};
