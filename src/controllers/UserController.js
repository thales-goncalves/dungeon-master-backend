const User = require("../models/User");

module.exports = {
  async index() {},

  async show(req, res) {
    let { email } = req.body;

    let user = await findUserByEmail(email);
  },

  async store(req, res) {
    const { email } = req.body;
    let userRegistered = await findUserByEmail(email);

    if (userRegistered) {
      // TODO Error message
      res.send("This email is already been used");
    } else {
      // TODO Register USER
      res.send("User successfully registered ");
    }
  },

  async update() {},

  async destroy() {}
};

async function findUserByEmail(email) {
  return await User.findOne({ email });
}
