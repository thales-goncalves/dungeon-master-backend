module.exports = {
  badRequest(res, message) {
    return res.status(400).send({ error: 400, message: message });
  },
  unauthorized(res, message) {
    return res.status(401).send({ error: 401, message: message });
  },
  forbidden(res, message) {
    return res.status(403).send({ error: 403, message: message });
  },
  notFound(res, message) {
    return res.status(404).send({ error: 404, message: message });
  },
  internalServerError(res, message) {
    return res.status(500).send({ error: 500, message: message });
  }
};
