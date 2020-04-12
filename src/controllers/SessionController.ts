const bcrypt = require("bcrypt");

export {};
const User = require("../models/User");
const ErrorHandler = require("../Error/ErrorHandler");
const generateToken = require("../managers/TokenManager");

module.exports = {
  async index() {},

  async show() {},

  async store(req, res) {
    const { email, password } = req.body;

    let user = await authenticate(email);

    if (!user) {
      return ErrorHandler.notFound(res, "User not found");
    } else if (!(await bcrypt.compare(password, user.password))) {
      return ErrorHandler.badRequest(res, "Wrong password");
    }

    user.password = undefined;
    const token_id = generateToken({ id: user.id });

    return res.send({
      user,
      token_id
    });
  },

  async update() {},

  async destroy() {}
};

async function authenticate(email) {
  return await User.findOne({ email }).select("+password");
}
