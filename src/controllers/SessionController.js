const User = require("../models/User");
const ErrorHandler = require("../Error/ErrorHandler")

module.exports = {
  async index(res) {
    ErrorHandler.notFound(res, "Session")
  },

  async show() {},

  async store(req, res) {
    const { email } = req.body;
    const { password } = req.body;

    let user = User.findUserByEmail(email);

    if (!user) {
      // TODO Error message
      res.send("User not found");
    } else if (password !== user.password) {
      // TODO Error message
      res.send("Wrong Password");
    }

    res.send("User connected");
  },

  async update() {},

  async destroy() {}
};

async function findUserByEmail(email) {
  return await User.findOne({ email });
}