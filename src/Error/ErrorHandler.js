module.exports = {
  notFound(res, message) {
    return res.status(404).send({ error: 400, message: message + " not found" });
  },
  internalServerError(res, message) {
    return res.status(500).send({ error: 500, message: message });
  },
  forbidden(res, message) {
    return res.status(403).send({ error: 400, message: message });
  }
};
